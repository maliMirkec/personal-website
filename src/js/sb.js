// Legacy design scripts (newsletter and project layouts). Bundled by esbuild
// (eleventy/js.js) and loaded with `defer`.
import { initFn } from './modules/helpers.js'
import { pageLoadedIn } from './modules/page-loaded-in.js'
import { themeToggle } from './modules/theme-toggle.js'
import { menuToggle } from './modules/menu-toggle.js'

// Both controls are visible on load, so they are wired up right away.
themeToggle()
menuToggle()
initFn(pageLoadedIn)
