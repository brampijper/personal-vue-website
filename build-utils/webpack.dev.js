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
    static: './dist'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: 
          [
            "style-loader",
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
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
    new webpack.DefinePlugin({
      'process.env.SERVER_BASE_URL': JSON.stringify('http://localhost:3000'),
    }),
  ],
});
