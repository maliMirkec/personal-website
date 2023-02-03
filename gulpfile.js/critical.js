const { src, dest } = require('gulp');
// const critical = require('gulp-penthouse');
const penthouse = require('penthouse');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const fs = require('fs');

critical.DEBUG = process.env.NODE_ENV !== 'production';

const { helpers } = require('./helpers');

const criticalConfig = require('./.critical.json');

if (criticalConfig.configs.length > 9) {
  process.setMaxListeners(0);
}

const thisCriticalConfig = { ...criticalConfig, temp: `${helpers.parse(criticalConfig.temp)}` };

function critical(cb) {
  console.log(cb);
  cb()
}

// Will extract Critical CSS
function criticalStart(cb) {
  const files = [];

  thisCriticalConfig.configs.forEach((config) => {
    const thisSettings = { ...config.settings, out: helpers.trim(`/${config.settings.out}`) };

    const thisFile = helpers.trim(`${thisCriticalConfig.temp}/${thisSettings.out}`);

    files.push(thisFile);

    if (fs.existsSync(thisFile)) {
      src(thisFile.replace('.css', '*.css'))
        .pipe(dest(helpers.trim(`${helpers.dist()}/${global.config.css.dist}`)));
    } else {
      const thisConfig = {
        ...config,
        src: helpers.trim(`${helpers.dist()}/${global.config.css.dist}/${config.src}`),
        settings: thisSettings,
      };

      penthouse({
        url: thisConfig.settings.url,
        css: thisConfig.src,
        width: thisConfig.settings.width,
        height: thisConfig.settings.height,
        keepLargerMediaQueries: thisConfig.settings.keepLargerMediaQueries,
        strict: thisConfig.settings.strict,
        blockJSRequests: thisConfig.settings.blockJSRequests,
        renderWaitTime: thisConfig.settings.renderWaitTime,
        forceExclude: thisConfig.settings.forceExclude,
        // forceInclude: thisConfig.settings.forceInclude
      })
      .then(criticalCss => {
        fs.writeFileSync(helpers.trim(`${thisCriticalConfig.temp}/${thisConfig.settings.out}`), criticalCss);

        src(helpers.trim(`${thisCriticalConfig.temp}/${thisConfig.settings.out}`))
          .pipe(dest(helpers.trim(`${helpers.dist()}/${global.config.css.dist}`)));
      })

    }
  });

  cb();
}

exports.critical = {
  criticalStart,
};
