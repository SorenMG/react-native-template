const createExpoWebpackConfig = require('@expo/webpack-config');
const { merge } = require('webpack-merge');

const babelLoaderConfiguration = {
  test: /\.m?js$/,
  exclude: /node_modules\/(?!(native-base|@codler)\/).*/,
  use: {
    loader: 'babel-loader',
    options: {
      plugins: ["@babel/plugin-proposal-class-properties", "@babel/plugin-transform-modules-commonjs"],
      presets: [
        ['@babel/preset-env', { targets: "defaults" }]
      ],
    }
  }
}


// Expo CLI will await this method so you can optionally return a promise.
module.exports = async function(env, argv) {
  const defaultConfig = await createExpoWebpackConfig(env, argv)
  return merge(defaultConfig, {
    module: {
      rules: [babelLoaderConfiguration],
    },
  })
};