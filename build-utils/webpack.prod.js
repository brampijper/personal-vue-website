const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
    devtool: 'source-map',
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({}), 
            new OptimizeCSSAssetsPlugin({})
        ],
        // runtimeChunk: false,
        // splitChunks: {
        //     cacheGroups: {
        //         default: false,
        //         commons: {
        //             test: /[\\/]node_modules[\\/]/,
        //             name: 'vendor_app',
        //             chunks: 'all',
        //             minChunks: 2
        //         }
        //     }
        // }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({}),
        new BundleAnalyzerPlugin()
    ]
};

module.exports = config;