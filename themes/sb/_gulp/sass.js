'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cssimport = require('gulp-cssimport');

gulp.task('css:sass', function() {
  return gulp.src('./source/sass/style.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(cssimport())
  .pipe(gulp.dest('./source/css/'));
});
