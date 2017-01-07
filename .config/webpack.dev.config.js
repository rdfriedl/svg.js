var webpack = require('webpack');
var merge = require('webpack-merge');
var base = require('./webpack.base.config.js');

module.exports = merge(base, {
  performance: {
    hints: false
  },
  devtool: 'source-map'
})
