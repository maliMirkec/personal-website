// Source: https://github.com/zachleat/speedlify/blob/live/plugins/keep-data-cache/index.js

module.exports = {
  // Restore file/directory cached in previous builds.
  // Does not do anything if:
  //  - the file/directory already exists locally
  //  - the file/directory has not been cached yet
  async onPreBuild({ utils }) {
    await utils.cache.restore('/opt/buildhome/.cache/puppeteer/'); // for Netlify Puppeteer
  },
  // Cache file/directory for future builds.
  // Does not do anything if:
  //  - the file/directory does not exist locally
  async onPostBuild({ utils }) {
    await utils.cache.save('/opt/buildhome/.cache/puppeteer/'); // for Netlify Puppeteer
  }
};
