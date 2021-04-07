const commonPaths = require("./common-paths");

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
  }
};

module.exports = config;
