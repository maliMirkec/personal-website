'use strict';

var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');

gulp.task('default', function() {
  return gulp.src('public/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('public/404/'));
});