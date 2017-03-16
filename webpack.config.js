/* eslint-disable */
const Config = require('webpack-config').default;
const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const {environment} = require('webpack-config');


module.exports = new Config().extend('./webpack.base.config.js').merge({
  devServer: {
    contentBase: [
      "dist",
      "./",
    ],
    host: '0.0.0.0',
    inline: true,
    publicPath: '/dist/',
    watchContentBase: true
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        BABEL_ENV: JSON.stringify('development/client'),
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin()
  ]
});
