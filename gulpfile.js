var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var concatCss = require('gulp-concat-css');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var csscomb = require('gulp-csscomb');

gulp.task('css', function() {
  return gulp
    .src('css/style-dev.css')
    .pipe(plumber())
    .pipe(csscomb())
    .pipe(concatCss('style.css'))
    .pipe(autoprefixer({
      // browsers: ['>1%'],
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
