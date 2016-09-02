var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var concatCss = require('gulp-concat-css');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var csscomb = require('gulp-csscomb');
var uglify = require('gulp-uglify');
var pump = require('pump');

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

gulp.task('compress-js', function(cb) {
  pump([
    gulp.src('js/script.js'),
    uglify({
      mangle: true
    }),
    rename({suffix: '.min'}),
    gulp.dest('js/')
    ],
    cb
  );
});

gulp.task('watch-project', ['css', 'compress-js'], function() {
  gulp.watch('css/style-dev.css', ['css']);
  gulp.watch('js/script.js', ['compress-js']);
});
