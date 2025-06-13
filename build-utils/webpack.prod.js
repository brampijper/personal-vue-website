const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const TerserPlugin = require("terser-webpack-plugin");


module.exports = merge(common, {
  mode: "production",
  devtool: 'source-map',
  optimization: {
    minimize: true,
    usedExports: true,
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [
      new TerserPlugin(),
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
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new BundleAnalyzerPlugin({analyzerMode: "disabled"}),
    new webpack.DefinePlugin({
      'process.env.SERVER_BASE_URL': JSON.stringify('https://oc0swkk.135.181.199.135.sslip.io'),
    }),
  ],
})