const commonPaths = require("./common-paths");
const webpack = require("webpack");

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
    new webpack.DefinePlugin({
      'process.env.SERVER_BASE_URL': JSON.stringify('http://localhost:3000'),
    }),
  ],
};

module.exports = config;
