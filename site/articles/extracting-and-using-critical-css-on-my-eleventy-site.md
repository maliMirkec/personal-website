---
layout: index
title: Extracting and using Critical CSS on my Eleventy site
date: 2023-02-24 10:00:00
tags:
  - blog
  - eleventy
  - critical css
description: This week I made some enhancements to extracting and implementing Critical CSS on my website that runs on Eleventy. Let's delve into its workings and features.
type: articles-item
sections2:
  - type: banner-beta
    banner: newsletter
---

This week I made some enhancements to extracting and implementing Critical CSS on my website that runs on Eleventy. To achieve this, I created a new package called Acclaimed CSS, specializing in Critical CSS extraction. So without further ado, let's delve into its workings and features.

### About Acclaimed CSS

[Acclaimed CSS](https://www.npmjs.com/package/acclaimed) is a user-friendly package that simplifies the process of extracting Critical CSS from your website.

It is a wrapper around [Penthouse](https://github.com/pocketjoso/penthouse), the original critical path CSS generator, and performs two additional functions:

1. utilizes the separate file for the configuration, and,
2. downloads a remote CSS file.

### Using Acclaimed CSS

To begin, we must install Acclaimed CSS:

```bash
npm install acclaimed
```

Once installed, we can create a new script to initiate the CSS extraction process. I recommend storing this script in the `scripts` folder and naming it `acclaimed.js`.

```js
const acclaimed = require('acclaimed')

acclaimed.critical()
```

Lastly, we must generate a configuration file called `.acclaimed.json` in the project's root directory. This file will contain information about the website's pages. We can begin by adding the homepage as the first page in this configuration file.

```json
[{
  "css": "https://www.silvestar.codes/css/style.css",
  "out": "home.critical.min.css",
  "url": "https://www.silvestar.codes/",
  "width": 1920,
  "height": 1800,
  "keepLargerMediaQueries": true,
  "strict": false,
  "blockJSRequests": true,
  "renderWaitTime": 300,
  "timeout": 60000,
  "forceExclude": ["@font-face"],
  "forceInclude": [".pic", ".pic svg", ".pic img", ".dark", ".dark .inner:not([id*=\"kss\"])", ".dark img"],
  "phantomJsOptions": {
    "ssl-protocol": "any",
    "ignore-ssl-errors": true
  }
}]
```

To run the script, you should use the `node scripts/acclaimed.js` command. Alternatively, you can use the command `acclaimed` directly in your terminal, but then you have to install Acclaimed globally using the following command: `npm install -g acclaimed`.

Essentially, we're instructing the package to visit the <https://www.silvestar.codes/> webpage, use the <https://www.silvestar.codes/css/style.css> stylesheet, and save the extracted Critical CSS in a file named `home.critical.min.css`.

{% note %}
You can find all other options on [the Penthouse's page](https://github.com/pocketjoso/penthouse#options).
{% endnote %}

Once the Critical CSS is stored and prepared, it is time to update the code and include the files correctly. Below, I'll explain how I accomplished this on my Eleventy and Liquid-based website.

### Eleventy and Critical

To begin, we need to add some [Liquid filters](https://www.11ty.dev/docs/filters/#per-engine-filters):

```js
eleventyConfig.addLiquidFilter('criticalExists', (critical) => {
  return fs.existsSync(`./assets/critical/${critical}.critical.min.css`)
})

eleventyConfig.addLiquidFilter('getCritical', (critical) => {
  return fs.readFileSync(`./assets/critical/${critical}.critical.min.css`)
})
```

Next, we'll use these filters in the Liquid template:

{% raw %}
```liquid
{% if loadCritical %}
  <link rel="preload" href="/css/style.min.css" as="style">
  <style>{{ type | getCritical }}</style>
  <link rel="stylesheet" href="/css/mentor.min.css" media="print" onload='this.media="all"'>
{% else %}
  <link rel="stylesheet" href="/css/style.min.css" media="all">
{% endif %}
```
{% endraw %}

In the code above, I first check whether the Critical CSS file exists using the `criticalExists` filter. If the Critical CSS file exists, I use the `getCritical` filter to retrieve the file's content. Additionally, I preload the CSS file and load it asynchronously when the document loads entirely. If the Critical CSS file does not exist, I load the original CSS file as usual.

The `type` variable is a custom Eleventy variable I introduced to differentiate between templates on my pages. For example, my homepage has the type `home`, which means that the `criticalExists` function checks if the `./assets/critical/home.critical.min.css` file exists, and then the `getCritical` function fetches its content.

Since my website has 22 distinct templates, I have 22 separate Critical CSS files. Once I have included all of these items in my configuration file and generated all Critical CSS files, all I need to do is add the correct `type` variable to each of my templates. Eleventy will then serve the Critical CSS throughout the site, improving site speed and stability (in terms of Cumulative Layout Shift).

If you're curious about the time it takes to generate 22 different CSS files, it only takes about 13 seconds on my MacBook Pro 2016.

### Conclusion

With Acclaimed CSS and some code adjustments, there is no reason not to use Critical CSS in your project. But before you do, [check if your website will benefit from using Critical CSS](https://csswizardry.com/2022/09/critical-css-not-so-fast/) first.
