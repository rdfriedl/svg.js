var webpackConfig = require('./webpack.dev.config.js');

// delete the entry file since karma supplies that
delete webpackConfig.entry;

// turn on inline source maps so karma can read them
webpackConfig.devtool = 'inline-source-map';

// fail the tests if there was a compile error
webpackConfig.bail = true;

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      '.config/pretest.js',
      {
        pattern: 'spec/fixture.css',
        included: false,
        served: true
      },
      {
        pattern: 'spec/fixture.svg',
        included: false,
        served: true
      },
      'spec/index.js'
    ],


    // list of files to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'spec/index.js': ['webpack', 'sourcemap', 'coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // configure the coverage reporter
    coverageReporter: {
      // Specify a reporter type.
      type: 'lcov',
      dir: 'coverage/',
      subdir: function(browser) {
        // normalization process to keep a consistent browser name accross different OS
        return browser.toLowerCase().split(/[ /-]/)[0]; // output the results into: './coverage/firefox/'
      }
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Firefox', 'Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    // use the webpack config
    webpack: require('./webpack.dev.config.js'),

    // avoid walls of useless text
    webpackMiddleware: {
      noInfo: true
    }
  })
}
