'use strict';

require('dotenv').config({silent: true});

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rootPath = path.join(__dirname, '../');

const webpackConfig = {

  entry: [
    path.join(rootPath, 'app/main.jsx')
  ],

  output: {
    path: path.join(rootPath, 'dist/'),
    filename: '[name].js',
    publicPath: '/'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],

  module: {
    loaders: [
      {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel'}
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }

};

// Development configuration
if (process.env.NODE_ENV !== 'production') {
  webpackConfig.devtool = 'eval-source-map';
}

module.exports = webpackConfig;
