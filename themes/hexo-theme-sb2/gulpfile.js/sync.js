const { helpers } = require('./helpers');

const syncConfig = require('./.sync.json');

// Start static server
function syncStart(cb) {
  if (global.config.sync.run) {
    let thisConfig = {};

    if (syncConfig.proxy) {
      thisConfig = {
        ...syncConfig,
        proxy: syncConfig.proxy,
      };
    } else {
      const thisBaseDir = syncConfig.server.baseDir
        ? helpers.parse(syncConfig.server.baseDir)
        : helpers.dist();

      const thisServer = {
        ...syncConfig.server,
        baseDir: thisBaseDir
      }

      thisConfig = {
        ...syncConfig,
        server: thisServer
      };
    }

    console.log(thisConfig);

    global.bs.init(thisConfig);
  }

  cb();
}

// Start static dev server
function syncStartBuild(cb) {
  syncConfig.open = false;

  syncStart(cb);
}

// Stop static server
function syncStop(cb) {
  global.bs.cleanup();
  global.bs.exit();

  cb();
}

exports.sync = {
  syncStart,
  syncStartBuild,
  syncStop,
};
