var webpack = require('webpack');

module.exports = {
  entry: './app.js',
  output: {
    path: './',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
    {
      test: /\.js/,
      loader: 'babel-loader',
      exclude: '/node_modules/',
      query: {
        presets: ['es2015','react']
      }
    }, 
    {
      test: /\.css/,
      loader: 'style'
    }]
  }
}