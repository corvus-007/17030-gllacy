var gulp = require('gulp');
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var path = require('path');
var autoprefixer = require('gulp-autoprefixer');
var concatCss = require('gulp-concat-css');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');

gulp.task('svgstore', function() {
  return gulp
    .src('img/svg-icons/*.svg')
    .pipe(svgmin(function(file) {
      var prefix = path.basename(file.relative, path.extname(file.relative));
      return {
        plugins: [{
          cleanupIDs: {
            prefix: prefix + '-',
            minify: true
          }
        }]
      }
    }))
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(gulp.dest('img/'));
});

gulp.task('css', function() {
  return gulp
    .src('css/style-dev.css')
    .pipe(plumber())
    .pipe(concatCss('style.css'))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('css/'))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('css/'))
});


gulp.task('watch-css', ['css'], function() {
  gulp.watch('css/style-dev.css', ['css']);
});
