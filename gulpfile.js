var del     = require('del')
  , gulp    = require('gulp')
  , chmod   = require('gulp-chmod')
  , header  = require('gulp-header')
  , jasmine = require('gulp-jasmine')
  , rename  = require('gulp-rename')
  , size    = require('gulp-size')
  , trim    = require('gulp-trimlines')
  , uglify  = require('gulp-uglify')
  , request = require('request')
  , fs      = require('fs')
  , pkg     = require('./package.json')
  , webpack = require('webpack-stream')


var headerLong = ['/*!'
  , '* <%= pkg.name %> - <%= pkg.description %>'
  , '* @version <%= pkg.version %>'
  , '* <%= pkg.homepage %>'
  , '*'
  , '* @copyright <%= pkg.author %>'
  , '* @license <%= pkg.license %>'
  , '*'
  , '* BUILT: <%= pkg.buildDate %>'
  , '*/;'
  , ''].join('\n')

var headerShort = '/*! <%= pkg.name %> v<%= pkg.version %> <%= pkg.license %>*/;'

gulp.task('clean', function(cb) {
  del([ 'dist/*' ], cb);
})

/**
 * Compile everything in /src to one unified file in the order defined in the MODULES constant
 * wrap the whole thing in a UMD wrapper (@see https://github.com/umdjs/umd)
 * add the license information to the header plus the build time stamp‏
 */
gulp.task('unify', ['clean'], function() {
  pkg.buildDate = Date()

  return gulp.src('src/index.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(header(headerLong, { pkg: pkg }))
    .pipe(trim({ leading: false }))
    .pipe(chmod(644))
    .pipe(gulp.dest('dist'))
    .pipe(size({ showFiles: true, title: 'Full' }))
})

/**
 ‎* uglify the file and show the size of the result
 * add the license info
 * show the gzipped file size
 */
gulp.task('minify', ['unify'], function() {
  return gulp.src('dist/svg.js')
    .pipe(uglify())
    .pipe(rename({ suffix:'.min' }))
    .pipe(size({ showFiles: true, title: 'Minified' }))
    .pipe(header(headerShort, { pkg: pkg }))
    .pipe(chmod(644))
    .pipe(gulp.dest('dist'))
    .pipe(size({ showFiles: true, gzip: true, title: 'Gzipped' }))
})

/**
 ‎* rebuild documentation using documentup
 */

gulp.task('docs', function() {
  fs.readFile('README.md', 'utf8', function (err, data) {
    request.post(
      'http://documentup.com/compiled'
    , { form: { content: data, name: 'SVG.js', theme: 'v1' } }
    , function (error, response, body) {
        // Replace stylesheet
        body = body.replace('//documentup.com/stylesheets/themes/v1.css', 'svgjs.css')

        // Write file
        fs.writeFile('docs/index.html', body, function(err) {})
      }
    )
  })
})

gulp.task('default', ['clean', 'unify', 'minify'], function() {})
gulp.task('build', ['default'])
