---
layout: index
title: How I built my second Progressive Web App (PWA)
date: 2019-12-17 13:00:00
tags:
  - blog
  - pwa
thumbnail: How_I_built_my_second_Progressive_Web_App_PWA_ffgk5w
description: "As of today, my side project Code Line Daily is available as a Progressive Web App. This post is a sequel to my previous PWA post."
project:
  name: Code Line Daily
  href: https://cld.silvestar.codes
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

As of today, my side project [Code Line Daily] is available as a Progressive Web App.

If you happen to read [my previous post about “How I built my first Progressive Web App (PWA)”], this article is a sequel.

<!-- more -->

## Workbox

In my previous attempt to make PWA, I handled everything manually. I learned about available options and techniques, and that helped me understand how PWA websites work.

This time, I decided to use [Workbox] to make PWA. Workbox is Google’s tool for making PWA more smoothly.

> “Workbox is a set of libraries and Node modules that make it easy to cache assets and take full advantage of features used to build [Progressive Web Apps].”

There is an excellent [“Getting Started” guide] which I followed and set up the initial version in a matter of minutes. Workbox is providing [predefined caching strategies], like “CacheFirst” or “StaleWhileRevalidate”. You could set the caching strategy in a single line, like this:

``` js
// Serve all CSS files with StaleWhileRevalidate strategy
workbox.routing.registerRoute(
  /\.css$/,
  new workbox.strategies.StaleWhileRevalidate()
)
```

This strategy tells of serving old/stale CSS files if available. If not available, use a network request to fetch files.

You could see all the strategies for Code Line Daily [in the GitHub repository].

## Precaching

After setting the strategies, I have created the list of files to precache using [Workbox CLI]. I have installed Workbox CLI as a global `npm` package.

``` bash
npm i -g workbox-cli
```

After that, `workbox` command was available in my terminal. I have run the command to bring up the wizard.

``` bash
workbox wizard --injectManifest
```

I have selected configured paths and selected files to precache, and Workbox CLI created a new file for me.

To be able to inject the files into the Service Worker file, I have added the following line to it:

``` js
workbox.precaching.precacheAndRoute([]);
```

Finally, I have run the command `workbox injectManifest` which created the new Service Worker file with a populated list of files to precache.

## Automation

I was quite happy how everything was working, but I realised that I would need to run these commands manually. Since  I have already put much effort to automatize this project, I wanted to add Workbox to my Gulp tasks. Luckily for me, Workbox is available as a plugin for Node.js environment, too.

There is a `generateSW` mode that creates a service worker with a precaching setup which seemed like a logical option for my needs.

> “This will generate a service worker with precaching setup for all of the files picked up by your configuration.”

Here is the configuration for my project.

``` json
{
  "globDirectory": "dist/",
  "globPatterns": [
    "**/*.{html,webmanifest,css,eot,svg,ttf,woff,woff2,png,js,ico,jpg}"
  ],
  "globIgnores": [
    "docs/**/*",
    "gfx/cover/**/*"
  ],
  "swDest": "dist/sw.js",
  "swSrc": "src/sw/sw.js"
}
```

where:

- `swSrc` option tells where to find the Service Worker file,
- `swDest` option tells where to save the processed Service Worker file,
- `globDirectory` option tells which folder to scan for precached files,
- `globPatterns` option tells which patterns to use, and
- `globIgnores` option tells which folders to ignore, despite the pattern match.

After running the Gulp tasks, I got the final Service Worker file which looks like this:

``` js
// load workbox
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js')

// output successful message
if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`)
} else {
  console.log(`Boo! Workbox didn't load 😬`)
}

workbox.core.setCacheNameDetails({
  prefix: 'cld',
  suffix: 'v1.0',
  precache: 'precache',
  runtime: 'runtime'
})

workbox.precaching.precacheAndRoute([
  // precached file list
])

// Serve all html files with StaleWhileRevalidate strategy
workbox.routing.registerRoute(
  /\.html$/,
  new workbox.strategies.NetworkFirst()
)

// Serve all css files with StaleWhileRevalidate strategy
workbox.routing.registerRoute(
  /\.js$/,
  new workbox.strategies.StaleWhileRevalidate()
)

// Serve all css files with StaleWhileRevalidate strategy
workbox.routing.registerRoute(
  /\.css$/,
  new workbox.strategies.StaleWhileRevalidate()
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

```

## Final results

Code Line Daily is now Progressive Web App. That is my second PWA, and I would recommend everyone to learn more about it. The site is now available offline, but it is also saving bandwidth for my users by serving cached assets whenever possible. Go ahead and try to install [Code Line Daily] and let me know what do you think.

![Lighthouse showing fireworks for perfect scores.](https://res.cloudinary.com/starbist/image/upload/w_720,q_100/v1574166140/pwa-after2_cbz06b.gif)

As a bonus point, I have run the audit for Code Line Daily site, and I see fireworks again, just like on my personal site. 💯

[Code Line Daily]: https://cld.silvestar.codes/
[my previous post about “How I built my first Progressive Web App (PWA)”]: /articles/how-i-built-my-first-progressive-web-app-pwa/
[Workbox]: https://developers.google.com/web/tools/workbox
[Progressive Web Apps]: https://developers.google.com/web/progressive-web-apps/
[“Getting Started” guide]: https://developers.google.com/web/tools/workbox/guides/get-started
[predefined caching strategies]: https://developers.google.com/web/tools/workbox/modules/workbox-strategies
[in the GitHub repository]: https://github.com/maliMirkec/code-line-daily/blob/master/src/sw/sw.js
[Workbox CLI]: https://developers.google.com/web/tools/workbox/guides/precache-files/cli
