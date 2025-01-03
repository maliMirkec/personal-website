---
layout: default
title: Thirteenth place on Eleventy Leaderboards
date: 2024-03-27 14:00:00
tags:
  - blog
  - eleventy
  - performance
description: My site got to thirteenth place on Eleventy Leaderboards with perfect Lighthouse scores.
type: articles-item
---

If you run a site on Eleventy, you probably know about Speedlify. It’s a tool for “benchmarking the web performance and accessibility of sites over time.”

Althougth I have [my own instance](https://speedlify.silvestar.codes/sb/) (and you can, too, by [following these instructions](https://github.com/zachleat/speedlify/), too), I've added my site to the [Eleventy Leaderboards](https://www.11ty.dev/speedlify/). I don’t visit it often, so I was surprised that my site is in 13<sup>th</sup> place (out of 972!). It got the perfect Lighthouse score for performance, accessibility, best practices, and SEO.

{% cldnryfetch "eleventy-leaderboards_zauwjv" "Screenshot of Eleventy Leaderboards page with my site highlighted on thirteenth place." %}

What’s great about Eleventy Leaderboards is that you can see how your site performed over time. My site was around 200<sup>th</sup> place for a long time. I don’t know what happened since I haven’t performed any optimizations for a long time.

{% cldnryfetch "eleventy-leaderboards-silvestar-codes_wcedtc" "Screenshot of Eleventy Leaderboards scores for silvestar.codes site." %}

I guess the [recent Lighthouse updates](https://github.com/GoogleChrome/lighthouse/releases) are responsible for the perfect score. Whatever the reason, I’m happy to see my site high on this list.

## Bonus

If you built a site with Eleventy and Liquid, you can add the following snippet to get the badge on the Eleventy Leaderboards site.

```js
// .eleventy.js
module.exports = (eleventyConfig) => {
  eleventyConfig.addLiquidFilter('generator', () => {
    return `Eleventy ${package.dependencies['@11ty/eleventy'].replace('^', '')}`
  })
}
```

{% raw %}
```html
<!-- head partial -->
<head>
  ...
  <meta name="generator" content="{{ 'generator' | generator }}">
</head>
```
{% endraw %}
