// constants
const CACHE_NAME = 'sb-cache-v1.0'

const FILES_TO_CACHE = [
  '/offline.html'
]

self.addEventListener('install', (event) => {
  // CODELAB: Precache static resources here.
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Pre-caching offline page')
      return cache.addAll(FILES_TO_CACHE)
    })
  )
})

self.addEventListener('activate', (event) => {
  // CODELAB: Remove previous cached data from disk.
  event.waitUntil(
    caches.keys().then(keyList => Promise.all(keyList.map((key) => {
      if (key !== CACHE_NAME) {
        console.log('[ServiceWorker] Removing old cache', key)
        return caches.delete(key)
      }
    })))
  )
})

self.addEventListener('fetch', (event) => {
  // CODELAB: Add fetch event handler here.
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(() => caches.open(CACHE_NAME)
          .then(cache => cache.match('offline.html')))
    )
  }
})
