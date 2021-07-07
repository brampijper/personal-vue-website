const commonConfig = require("./build-utils/webpack.common");
const { merge } = require("webpack-merge");

module.exports = (env) => {
  if (!env) {
    throw new Error(
      "You must pass an --env.env flag into your build for webpack to work!"
    );
  }
  const envString = Object.prototype.hasOwnProperty.call(env, "dev")
    ? "dev"
    : "prod";
  const envConfig = require(`./build-utils/webpack.${envString}.js`);

  return merge(commonConfig, envConfig);
};
