const { src, dest, watch } = require('gulp');

const { helpers } = require('./helpers');

const faviconConfig = require('./.favicon.json');

function faviconStart() {
  return src(helpers.parse(helpers.trim(`${faviconConfig.src}/*`)))
    .pipe(dest(helpers.parse(helpers.trim(`${faviconConfig.dest}`))));
}

exports.favicon = {
  faviconStart
};
