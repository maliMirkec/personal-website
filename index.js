const { injectManifest } = require('workbox-build')

// Will process SW file
function swStart () {
  return injectManifest({
    globDirectory: "public/",
    globPatterns: [
      "**/offline.{html,css,js,jpg}"
    ],
    globIgnores: [
      "bookmarks/**/*",
      "archives/**/*",
      "tags/**/*",
      "favicon/*.{png,jpg,svg}",
      "*.critical.css"
    ],
    swDest: "public/sw.js",
    swSrc: "sw.js"
  })
    .then(({ count, size }) => {
      console.info('Service worker generation completed.')
      console.log(`Generated Service Worker, which will precache ${count} files, totaling ${size} bytes.`)
    }).catch((error) => {
      console.warn('Service worker generation failed:', error)
    })
}

swStart()
