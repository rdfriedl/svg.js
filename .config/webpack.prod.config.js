var webpack = require('webpack');
var merge = require('webpack-merge');
var base = require('./webpack.base.config.js');
var pkg = require('../package.json');

var header =
`${pkg.name} - ${pkg.description}
@version ${pkg.version}
${pkg.homepage}

@copyright ${pkg.author}
@license ${pkg.license}

BUILT: ${Date()}`;

module.exports = merge(base, {
  plugins: [
    new webpack.BannerPlugin({
      banner: header
    })
  ],
  performance: {
  	hints: false
  }
})
