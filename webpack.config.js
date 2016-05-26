const path = require('path');
const webpack = require("webpack");

module.exports = {
    resolve: {
        extensions: ['', '.js'],
        root: [
            path.resolve('./src/')
        ]
    },
    entry: {
        svg: './src/index.js'
    },
    output: {
        filename: "[name].js",
        library: "SVG",
        libraryTarget: "umd"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel'
            }
        ]
    }
}
