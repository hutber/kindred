/* eslint-disable filenames/match-regex, import/no-commonjs, import/unambiguous */
const path = require('path');
const {environment} = require('webpack-config');
const qs = require('querystring');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const stripInlineComments = require('postcss-strip-inline-comments');

module.exports = {
  entry: {
    index: './src/index'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/'
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
        loader: 'babel-loader'
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
          'css-loader?importLoaders&' + qs.stringify({
            modules: true,
            importLoaders: 1,
            localIdentName: environment.get('cssIdent')
          }),
          'postcss-loader?parser=postcss-scss',
          {
            loader: 'postcss-loader',
            options: {
              options: { /* PostCSS Options */ },
              plugins: () => [
                stripInlineComments
                , precss
                , autoprefixer
                , require('postcss-simple-vars')
                , require('postcss-nested')
                , autoprefixer({browsers: ['last 2 versions']})
              ]
            }
          }
        ],
      }
    ]
  }
};
