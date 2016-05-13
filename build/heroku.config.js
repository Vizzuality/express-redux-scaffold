'use strict';

const path = require('path');
const webpack = require('webpack');
const root = process.cwd();

const config = {

  context: path.join(root, 'app'),

  entry: {
    app: ['./main.jsx']
  },

  output: {
    path: path.join(root, 'dist'),
    filename: 'bundle.js',
    publicPath: ''
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
  },

  plugins: []

};

if (process.env.NODE_ENV !== 'production') {
  config.plugins.push(
    new webpack.NoErrorsPlugin()
  );
} else {
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      unused: true,
      dead_code: true,
      warnings: false
    }
  })
}

module.exports = config;
