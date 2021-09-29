---
layout: index
title: How I built my first Progressive Web App (PWA)
date: 2019-11-19 13:08:11
tags:
  - blog
  - pwa
thumbnail: How_I_built_my_first_Progressive_Web_App_PWA_zxkqw1
description: "As of today, my site is available as a Progressive Web App. In this post, you would learn more about how and why I added this exciting feature to my site."
type: articles-item
sections2:
  - type: banner-beta
    desc: Did you know that I am running **UI Dev Newletter**?
    code: >-
      <form class="embeddable-buttondown-form newsletter wrapper wrapper--beta margin-top text-left" action="https://buttondown.email/api/emails/embed-subscribe/starbist" method="post" target="popupwindow" onsubmit="window.open('https://buttondown.email/starbist', 'popupwindow')">
        <input type="hidden" value="1" name="embed" />
        <div class="margin-top">
          <label for="bd-email">Subscribe here. Enter email.</label>
          <div class="newsletter__input">
            <input class="input" type="email" name="email" id="bd-email" />
            <input class="button button--small" type="submit" value="Subscribe" />
          </div>
        </div>
        <p class="no-margin"><small><a href="https://buttondown.email" target="_blank" rel="noreferrer">Powered by Buttondown</a></small></p>
        </form>
---

As of today, my site is available as a Progressive Web App. Yaay! 💯

![Lighthouse showing fireworks for perfect scores.](https://res.cloudinary.com/starbist/image/upload/w_720,q_100/v1574166140/pwa-after2_cbz06b.gif)

In this post, you would learn more about how and why I added this exciting feature to my site.

<!-- more -->

## Why did I do it

I like to think of myself as a very pedantic person, and I was trying to make my site better from the very first day. At the time when I was building my site, I didn’t understand all metrics from web performance tools like PageSpeed Insights or WebPageTest. But, as I was trying to make my site better, I was learning new techniques, and my website got better and better.

Now my site gets top scores, but one thing was bothering me for some time. It was the Progressive Web App score.

{% cldnry "pwa-before_cokho9" "Lighthouse score for Progressive Web App before optimisation." %}

By looking at the PWA report, I realised my site is ready for PWA. There were only a few issues to resolve. I didn’t understand these issues, but that never stopped me before.

## How I did it

As my starting point, I decided to follow the [“Your First Progressive Web App” tutorial]. The very first step was to update my `webmanifest.json` file. I have added `start_url` and `display` options and some required meta tags, like `<meta name="apple-mobile-web-app-capable" content="yes">`.

``` json
{
  "name": "SB site - Silvestar Bistrović website",
  "short_name": "SB site - Silvestar Bistrović website",
  "icons": [
    …
  ],
  "theme_color": "#12e09f",
  "background_color": "#fff",
  "start_url": "/offline.html",
  "display": "standalone"
}
```

Next, I created `sw.js` file for Service Worker. To register service worker, there is a small snippet that needs to be added to your index page:

``` js
// CODELAB: Register service worker.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((reg) => {
        console.log('Service worker registered.', reg);
      });
  });
}
```

The content of the Service Worker file could vary, depending what you want to use achieve with your site. Since my site is quite straightforward, I decided to make use of basic offline experience only. That means I needed an `offline.html` file for offline experience. It would be a stripped version of my homepage. So I removed external images, and created a placeholder using CSS. I removed external CSS file and inlined it in `head` section. The only thing left to do was to add favicon files. I am not yet sure if this is need, but I decided to put it there, just in case. Those files aren’t big anyway.

The `sw.js` file could be broken into four segments:

- defining constants,
- installation,
- activation, and
- fetching.

First, I defined the cache name and which files to cache.

``` js
// constants
const CACHE_NAME = 'sb-cache-v1.3'
const FILES_TO_CACHE = [
  '/offline.html',
  '/favicon/apple-touch-icon.png',
  '/favicon/favicon-32x32.png',
  '/favicon/favicon-16x16.png',
  '/favicon/site.webmanifest',
  '/favicon/safari-pinned-tab.svg',
  '/favicon/favicon.ico',
  '/favicon/mstile-144x144.png',
  '/favicon/browserconfig.xml'
]
```

Next, I created the `install` event which opens cache with given cache name and caches the files.

``` js
self.addEventListener('install', (event) => {
  // CODELAB: Precache static resources here.
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Pre-caching offline page')
      return cache.addAll(FILES_TO_CACHE)
    })
  )
})
```

After that, I created the `activate` event, which cleans cached files from disk.

``` js
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
```

Finally, I created the `fetch` event, which handles page navigations only when request `.mode` is `navigate`. If the request fails to fetch the item from the network, it tries to fetch the `offline.html` file.

``` js
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
```

## Final Results

After the deployment, I run the audit for the site and now I have it looks like this:

{% cldnry "pwa-after_au0ip8" "Lighthouse score for Progressive Web App after optimisation." %}

I think fireworks deserve another appearance. 💯

![Lighthouse showing fireworks for perfect scores.](https://res.cloudinary.com/starbist/image/upload/w_720,q_100/v1574166140/pwa-after2_cbz06b.gif)

## Next steps

The next steps are to learn more about [Workbox]. And after that, I plan to add full offline experience for my side project [Code Line Daily].

Edit: Continue reading [my second article about “How I built my second Progressive Web App (PWA)”].

[“Your First Progressive Web App” tutorial]: https://codelabs.developers.google.com/codelabs/your-first-pwapp/#4
[Workbox]: https://developers.google.com/web/tools/workbox/
[Code Line Daily]: https://cld.silvestar.codes/
[my second article about “How I built my second Progressive Web App (PWA)”]: /articles/how-i-built-my-second-progressive-web-app-pwa/
