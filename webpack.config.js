const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
let config = {};
config.prod = require("./dev.env");
// const path = require("path");

module.exports = {
  entry: {
    app: "./src/app.js"
  },
  output: {
    // path: path.resolve(__dirname, "/")
    // publicPath: "/",
    // filename: "app.js"
  },
  mode: "development",
  devServer: {
    hot: true
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              data: '@import "./src/styles/global-variables.scss";'
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(config.prod)
    })
  ]
};
