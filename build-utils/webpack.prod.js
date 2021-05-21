const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const config = {
  devtool: "source-map",
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [
      compiler => {
        const TerserPlugin = require("terser-webpack-plugin");
        new TerserPlugin({}).apply(compiler);
      },
      new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /\.optimize\.css$/g,
        cssProcessor: require("cssnano"),
        cssProcessorPluginOptions: {
          preset: ["default", { discardComments: { removeAll: true } }]
        }
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({}),
    new BundleAnalyzerPlugin({ analyzerMode: "static" }),
    new webpack.DefinePlugin({
      "octokit.var": JSON.stringify(process.env.VUE_APP_OCTOKIT_VAR)
    })
  ]
};

module.exports = config;
