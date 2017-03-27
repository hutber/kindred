/* eslint-disable filenames/match-regex, import/no-commonjs, import/unambiguous */
const Config = require('webpack-config').default;
const webpack = require('webpack');
const {environment} = require('webpack-config');

environment.set('cssIdent', '[local]_[hash:base64:5]');

module.exports = new Config().extend('./webpack.base.config.js').merge({
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
});
