const path = require('path');
const webpack = require("webpack");
const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  resolve: {
    extensions: ['.js'],
    alias: {
      src: path.resolve(__dirname, '../src/')
    }
  },
  entry: {
    svg: path.resolve(__dirname, '../src/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist/'),
    filename: "[name].js",
    library: "SVG",
    libraryTarget: "umd"
  },
  plugins: [
    new webpack.EnvironmentPlugin([
      "NODE_ENV"
    ])
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
}
