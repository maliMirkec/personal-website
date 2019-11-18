"use strict";

// constants
var CACHE_NAME = 'sb-cache-v1.3';
var FILES_TO_CACHE = ['/offline.html', '/favicon/apple-touch-icon.png', '/favicon/favicon-32x32.png', '/favicon/favicon-16x16.png', '/favicon/site.webmanifest', '/favicon/safari-pinned-tab.svg', '/favicon/favicon.ico', '/favicon/mstile-144x144.png', '/favicon/browserconfig.xml'];
self.addEventListener('install', function (event) {
  // CODELAB: Precache static resources here.
  event.waitUntil(caches.open(CACHE_NAME).then(function (cache) {
    console.log('[ServiceWorker] Pre-caching offline page');
    return cache.addAll(FILES_TO_CACHE);
  }));
});
self.addEventListener('activate', function (event) {
  // CODELAB: Remove previous cached data from disk.
  event.waitUntil(caches.keys().then(function (keyList) {
    return Promise.all(keyList.map(function (key) {
      if (key !== CACHE_NAME) {
        console.log('[ServiceWorker] Removing old cache', key);
        return caches["delete"](key);
      }
    }));
  }));
});
self.addEventListener('fetch', function (event) {
  // CODELAB: Add fetch event handler here.
  if (event.request.mode === 'navigate') {
    event.respondWith(fetch(event.request)["catch"](function () {
      return caches.open(CACHE_NAME).then(function (cache) {
        return cache.match('offline.html');
      });
    }));
  }
});