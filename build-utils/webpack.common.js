const commonPaths = require("./common-paths");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

const config = {
  entry: "./src/app.js",
  output: {
    filename: "bundle.js",
    path: commonPaths.outputPath,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: "index.html",
      favicon: "./src/images/favicon.png",
      //can add meta tag obj here so it's injected in the index.html
    }),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: true,
      "process.env.OCTOKIT_API_KEY": JSON.stringify(
        process.env.VUE_APP_OCTOKIT_VAR
      ),
    }),
  ],
};

module.exports = config;
