/* eslint-disable filenames/match-regex, import/no-commonjs, import/unambiguous */

const path = require('path');
const {environment} = require('webpack-config');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React
  
    'webpack-dev-server/client?http://localhost:8080',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint
  
    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
    
    './src/index'
  ],
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      {
        test: /dashjs\/dist\/.*/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules\/.*/,
        use: ['babel-loader']
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url?limit=25000'
      },
      {
        test: /\.svg$/,
        use: ['babel-loader', 'svg-react-loader']
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: environment.get('cssIdent')
            }
          },
          'postcss-loader'
        ],
      }
    ]
  }
};
