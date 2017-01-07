if(process.env.NODE_ENV == 'production')
    module.exports = [
        require('./.config/webpack.prod.config.js'),
        require('./.config/webpack.min.config.js')
    ]
else
    module.exports = require('./.config/webpack.dev.config.js');
