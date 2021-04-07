const commonPaths = require("./common-paths");
const webpack = require("webpack");
let devConfig = {};
devConfig.prod = require("../dev.env");

const config = {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    contentBase: commonPaths.outputPath
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(devConfig.prod)
    })
  ]
};

module.exports = config;
