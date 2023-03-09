const { src, dest, watch } = require('gulp');
const gulpif = require('gulp-if');
const cssimport = require('gulp-cssimport');
const gulpStylelint = global.config.css.lint ? require('gulp-stylelint') : () => true;
const sass = global.config.css.sass ? require('gulp-sass')(require('node-sass')) : () => true;
const autoprefixer = global.config.css.autoprefix ? require('gulp-autoprefixer') : () => true;
const sourcemaps = global.config.css.sourcemaps ? require('gulp-sourcemaps') : () => true;
const cleanCSS = global.config.css.minify ? require('gulp-clean-css') : () => true;
const rename = global.config.css.minify ? require('gulp-rename') : () => true;

const { helpers } = require('./helpers');

const cssConfig = require('./.css.json');

const ext = global.config.css.sass ? 'scss' : 'css';

const thisSassConfig = (global.config.css.sass)
  ? ({
    ...cssConfig.sassConfig,
    includePaths: cssConfig.sassConfig.includePaths.map((path) => helpers.parse(path)),
  })
  : {};

// gulp-if fix
if (!global.config.css.sourcemaps) {
  sourcemaps.init = () => true;
  sourcemaps.write = () => true;
}

// Will process Sass files
function cssStart() {
  return src(helpers.trim(`${helpers.source()}/${global.config.css.src}/*.${ext}`))
    .pipe(gulpif(global.config.css.sourcemaps, sourcemaps.init()))
    .pipe(gulpif(global.config.css.lint, gulpStylelint(cssConfig.styleLintConfig)))
    .pipe(gulpif(global.config.css.sass, sass(thisSassConfig).on('error', sass.logError)))
    .pipe(cssimport())
    .pipe(gulpif(global.config.css.autoprefix, autoprefixer(cssConfig.autoprefixerConfig)))
    .pipe(dest(helpers.trim(`${helpers.dist()}/${global.config.css.dist}`)))
    .pipe(gulpif(global.config.css.minify, cleanCSS()))
    .pipe(gulpif(global.config.css.minify, rename(cssConfig.renameConfig)))
    .pipe(gulpif(global.config.css.sourcemaps, sourcemaps.write(helpers.trim(`${helpers.source()}/${global.config.css.dist}`))))
    .pipe(dest(helpers.trim(`${helpers.dist()}/${global.config.css.dist}`)))
}

// Will process non Critical Sass files
function cssStartListen() {
  return src([helpers.trim(`${helpers.source()}/${global.config.css.src}/*.${ext}`), helpers.trim(`!${helpers.source()}/${global.config.css.src}/*.critical.${ext}`)])
    .pipe(gulpif(global.config.css.sourcemaps, sourcemaps.init()))
    .pipe(gulpif(global.config.css.lint, gulpStylelint(cssConfig.styleLintConfig)))
    .pipe(gulpif(global.config.css.sass, sass(thisSassConfig).on('error', sass.logError)))
    .pipe(cssimport())
    .pipe(gulpif(global.config.css.autoprefix, autoprefixer(cssConfig.autoprefixerConfig)))
    .pipe(dest(helpers.trim(`${helpers.dist()}/${global.config.css.dist}`)))
    .pipe(gulpif(global.config.css.minify, cleanCSS()))
    .pipe(gulpif(global.config.css.minify, rename(cssConfig.renameConfig)))
    .pipe(gulpif(global.config.css.sourcemaps, sourcemaps.write(helpers.trim(`${helpers.source()}/${global.config.css.dist}`))))
    .pipe(dest(helpers.trim(`${helpers.dist()}/${global.config.css.dist}`)))
}

// When Sass file is changed, it will process Sass file, too
function cssListen() {
  return watch(helpers.trim(`${helpers.source()}/${global.config.css.src}/**/*.${ext}`), global.config.watchConfig, cssStartListen);
}

exports.css = {
  cssStart,
  cssListen,
};
