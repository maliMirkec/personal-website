---
layout: index
title: How to measure page loading time with Performance API
date: 2023-05-04 10:00:00
tags:
  - blog
  - javascript
  - performance
description: This post will demonstrate how to use the Performance API to measure page loading time.
type: articles-item
sections2:
  - type: banner-beta
    banner: newsletter
---

A while ago, I stumbled across a blog post by [Tim Kadlec](https://timkadlec.com/). Although the blog post was intriguing, something else caught my attention. In Tim’s footer, there’s a text saying how much time did it take to load the page. Naturally, I wanted to incorporate this feature into my website, so I “borrowed” Tim’s code _(Mr. Kadlec is aware of this, by the way)_. However, while adjusting the code for my site, I noticed numerous deprecation warnings popping up. Needless to say, it bothered me so much that I had to find a way to eliminate these warnings.

{% cldnry "vs-code-timing-is-deprecated_z5v20h" "Screenshot of VS Code showing deprecation warning for the performance.timing." 759 353 %}

## The new way

MDN recommends using the [Performance API](https://developer.mozilla.org/en-US/docs/Web/API/Performance_API) to gauge the performance of websites and web applications. Unfortunately, while the documentation is comprehensive, it doesn’t provide many examples. So I had to experiment with several approaches, but the results didn’t match the results from the “original” script. Not until I noticed that you could save the `performance.mark()` as a variable and read its properties.

Check out the GIF below, demonstrating how the “old” and “new” versions produce almost identical outcomes.

{% video "https://res.cloudinary.com/starbist/image/upload/v1680258036/page-load_iknj8x" 759 379 'autoplay' 'loop' 'mute' true %}

Here’s the final code for getting the page load time:

```js
const perf = () => {
  const $perf = document.querySelector('.js-perf')

  if ($perf) {
    // Wait for the page to finish loading
    window.addEventListener('load', () => {
      const pageEnd = performance.mark('pageEnd')
      const loadTime = pageEnd.startTime / 1000

      $perf.innerHTML += `Page loaded in ${loadTime}s.`
    })
  }
}

perf()
```

Once the load event is complete, I store the `performance.mark(‘pageEnd’)` into a variable. The variable contains several properties, but we only need `startTime`. To get the final result in seconds, I divided `startTime` by 1000 and displayed it in my placeholder.

## NPM package

To save you some time, I’ve created an NPM package named [page-loaded-in](https://www.npmjs.com/package/page-loaded-in).

Place the following code into your `<head>` and include the `.js-page-loaded-in` element to see how fast your page loads.

```html
<head>
  <script src="https://unpkg.com/page-loaded-in@0.0.4/dist/index.js"></script>
</head>
<body>
  <p class="js-page-loaded-in"></p>
</body>
```

## Conclusion

Prioritizing performance when developing web-based projects is crucial to provide users with a seamless and efficient experience. Measuring page loading time using the Performance API is one way to demonstrate that a page is performing well.
