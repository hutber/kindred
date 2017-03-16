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
  module: {
    loaders: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        },
        test: /dashjs\/dist\/.*/
      },
      {
        exclude: /node_modules\/.*/,
        loader: 'babel-loader',
        test: /\.js$/
      },
      {
        loader: 'url?limit=25000',
        test: /\.(jpg|png)$/
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
            localIdentName: '[path][name]-[local]'
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
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist')
  }
};
