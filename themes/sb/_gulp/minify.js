'use strict';

var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

gulp.task('css:minify', function() {
  return gulp.src(['./source/css/**/*.css', '!./source/css/**/*.min.css'])
  .pipe(cleanCSS())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('./source/css/'));
});
