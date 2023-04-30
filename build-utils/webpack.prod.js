const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const config = {
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(), //minifies all js files.
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use:
        [
          MiniCssExtractPlugin.loader, 
          "css-loader", 
          {
            loader: "sass-loader",
            options: {
                additionalData: '@import "./src/scss/variables.scss";',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new BundleAnalyzerPlugin({ analyzerMode: "disabled" }),
    new webpack.DefinePlugin({
      'process.env.SERVER_BASE_URL': JSON.stringify('https://seashell-app-u77ys.ondigitalocean.app'),
    }),
  ],
};

module.exports = config;
