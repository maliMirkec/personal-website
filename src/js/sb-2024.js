// Main theme scripts. Bundled by esbuild (eleventy/js.js) and loaded with
// `defer` on every page that uses the default layout.
import { initFn } from './modules/helpers.js'
import { pageLoadedIn } from './modules/page-loaded-in.js'
import { lastfm } from './modules/lastfm.js'
import { avatar } from './modules/avatar.js'

initFn(pageLoadedIn)
initFn(lastfm)
initFn(avatar)
