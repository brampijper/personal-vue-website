const commonConfig = require('./build-utils/webpack.common');
const webpackMerge = require('webpack-merge');

module.exports = (env) => {
    if (!env) {
        throw new Error('You must pass an --env.env flag into your build for webpack to work!')
    };

    console.log(env);
    const envConfig = require(`./build-utils/webpack.${env.env}.js`);

    return webpackMerge(commonConfig, envConfig);
}