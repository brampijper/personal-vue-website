const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require("webpack");

module.exports = merge(common, {
  mode: "development",
  output: {
    sourceMapFilename: "[name].js.map",
  },
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: 
          [
            "style-loader",
            "css-loader",
          ],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
    new webpack.DefinePlugin({
      'process.env.SERVER_BASE_URL': JSON.stringify('http://localhost:3000'),
    }),
  ],
});
