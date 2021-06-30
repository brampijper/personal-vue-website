const commonPaths = require("./common-paths");
const webpack = require("webpack");
let devConfig = {};
devConfig.prod = require("../dev.env");

const config = {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    contentBase: commonPaths.outputPath,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "octokit.var": JSON.stringify(process.env.VUE_APP_OCTOKIT_VAR),
    }),
  ],
};

module.exports = config;
