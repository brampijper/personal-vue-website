const commonPaths = require("./common-paths");
const webpack = require("webpack");
let devConfig = {};
devConfig.prod = require("../dev.env");

const config = {
  mode: "development",
  output: {
    sourceMapFilename: "[name].js.map",
  },
  devtool: "eval-source-map",
  devServer: {
    static: {
      directory: commonPaths.outputPath,
    }
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
};

module.exports = config;
