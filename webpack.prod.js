const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: "production",
  devtool: 'source-map',
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [
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
    new BundleAnalyzerPlugin(),
    new webpack.DefinePlugin({
      'process.env.SERVER_BASE_URL': JSON.stringify('https://backend-api-requests-production.up.railway.app'),
    }),
  ],
})