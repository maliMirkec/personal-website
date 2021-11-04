const { watch } = require('gulp');
const kss = require('kss');

const { helpers } = require('./helpers');

const kssConfig = require('./.kss.json');

const ext = global.config.css.sass ? 'scss' : 'css';

const thisCss = kssConfig.css.map((path) => helpers.parse(path).replace('./', '/'));
const thisJs = kssConfig.js.map((path) => helpers.parse(path).replace('./', '/'));

console.log('thisJs', thisJs);

const thisKssConfig = {
  ...kssConfig,
  source: helpers.parse(kssConfig.source),
  destination: helpers.parse(kssConfig.destination),
  homepage: helpers.parse(kssConfig.homepage),
  css: thisCss,
  js: thisJs,
};

console.log(thisKssConfig);

// Will process KSS docs
function kssStart(cb) {
  kss(thisKssConfig);
  global.bs.reload();

  return cb();
}

// When Sass file is changed, it will process KSS docs, too
function kssListen() {
  return watch([helpers.trim(`${helpers.source()}/${global.config.css.src}/**/*.${ext}`), helpers.trim(`${helpers.source()}/${global.config.css.src}/**/*.html`)], global.config.watchConfig, kssStart, global.bs.reload);
}

exports.kss = {
  kssStart,
  kssListen,
};
