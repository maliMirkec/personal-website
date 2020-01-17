// load workbox
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js')

// output successful message
if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`)
} else {
  console.log(`Boo! Workbox didn't load 😬`)
}

workbox.core.setCacheNameDetails({
  prefix: 'sb',
  suffix: 'v1.2.9',
  precache: 'precache',
  runtime: 'runtime'
})

workbox.precaching.precacheAndRoute([])

// Serve all html files with NetworkFirst strategy
workbox.routing.registerRoute(
  /\.html$/,
  new workbox.strategies.NetworkFirst()
)

// Serve all css files with NetworkFirst strategy
workbox.routing.registerRoute(
  /\.js$/,
  new workbox.strategies.NetworkFirst()
)

// Serve all css files with NetworkFirst strategy
workbox.routing.registerRoute(
  /\.css$/,
  new workbox.strategies.NetworkFirst()
)

// Serve all other assets with CacheFirst strategy
workbox.routing.registerRoute(
  /\.(?:png|jpg|jpeg|svg|gif|webp|ico|webmanifest|eot,ttf,woff,woff2)$/,
  new workbox.strategies.CacheFirst({
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 20,
        maxAgeSeconds: 30 * 24 * 60 * 60
      })
    ]
  })
)
