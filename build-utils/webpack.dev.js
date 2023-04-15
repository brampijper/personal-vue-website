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
  ],
};

module.exports = config;
