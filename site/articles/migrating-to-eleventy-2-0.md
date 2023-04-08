---
layout: index
title: Migrating to Eleventy 2.0
date: 2023-02-14 13:00:00
tags:
  - blog
  - css
  - eleventy
  - 11ty
thumbnail: Migrating_to_Eleventy_2.0_chgmqn
description: Last week I upgraded my Eleventy instance after using version 0.12.1 for over a year. I was determined to resolve and document all problems during the process.
type: articles-item
sections2:
  - type: banner-beta
    banner: newsletter
    animate: true
---

Last week I finally upgraded my [Eleventy](https://www.11ty.dev/) instance after using version 0.12.1 for over a year. I tried to do this earlier but always gave up because I stumbled upon this or that issue. This time was no different, but I was determined to resolve all problems.

## Issues

The primary issue when updating to the new Eleventy was my templating language - Liquid. I chose Liquid because I am familiar with it since I work with Jekyll and Shopify every now and then.

The first issue that occurred was:

```bash
illegal filename "undefined" (via AssertionError)
```

After a quick investigation, I decided to switch to my own instance of Liquid library, as [documented on the Eleventy site](https://www.11ty.dev/docs/languages/liquid/#optional-set-your-own-library-instance).

I added the following code:

```js
const { Liquid } = require("liquidjs");

module.exports = (eleventyConfig) => {
  let options = {
    extname: ".liquid",
    dynamicPartials: false,
    strictFilters: false,
    jsTruthy: true,
    root: ["site/_layouts"]
  };

  eleventyConfig.setLibrary("liquid", new Liquid(options));
}
```

The most important part here is the `dynamicPartials: false` setting which resolves common pitfalls if you include partials without quotation marks.

Next issue was:

{% raw %}
```bash
unexpected token at "{{ read.date ..." (via AssertionError)
```
{% endraw %}

I was using a variable inside the `assign` statement in Liquid, like so:

{% raw %}
```liquid
{% assign readHref = {{ read.date }} | prepend: '#' %}
```
{% endraw %}

All I had to do is to remove the curly brackets around the variable:

{% raw %}
```liquid
{% assign readHref = read.date | prepend: '#' %}
```
{% endraw %}

The final issue I had was:

```bash
Failed to lookup "../../assets/dist/css/devcards.min.css" in "site/_layouts" (via Error)
```

Apparently, Liquid can only look up files within the root folder defined in the configuration. The workaround was to define a new custom Liquid filter that returns the content of the file like so:

```js
eleventyConfig.addLiquidFilter('getCritical', (critical) => {
  return fs.readFileSync(`./assets/dist/css/${critical}.critical.min.css`)
}
```

And that's it. After resolving these issues, I could finally use the new version of the Eleventy static site generator.

{% note %}
For anyone interested, here's the full commit: <https://github.com/maliMirkec/personal-website/commit/f18c059ead7abf166f99715261638ccf9944cf5f>.
{% endnote %}
