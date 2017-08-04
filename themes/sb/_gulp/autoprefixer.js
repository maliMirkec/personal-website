"use strict";

var gulp = require("gulp");
var autoprefixer = require("gulp-autoprefixer");

gulp.task("css:autoprefix", function() {
  return gulp
    .src("./source/css/*.css")
    .pipe(
      autoprefixer({
        browsers: ["last 5 versions"],
        cascade: false
      })
    )
    .pipe(gulp.dest("./source/css/"));
});
