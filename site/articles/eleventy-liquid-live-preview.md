---
layout: index
title: Eleventy Liquid live preview
date: 2024-03-16 10:00:00
tags:
  - blog
  - eleventy
  - contentful
  - liquidjs
description: I have built an Eleventy starter project with Contentful Liquid live preview and a demo site showing how it works.
type: articles-item
sections2:
  - type: banner-beta
    banner: newsletter
    animate: true
---

As a part of the marketing team at Heyflow, I collaborate with people who work on the company’s website. Although all team members are technically acquainted, sometimes they struggle to update the website. The struggle lies in not being able to visualize what will change on the page when updating the content. Saving the updates and waiting for the staging environment to be built is relatively inefficient (even though our site build lasts less than a minute). As a result, the team requested a live preview of our pages.

{% video 'https://res.cloudinary.com/starbist/video/upload/v1710618808/live-preview-contentful_dh8pws' 759 480 %}

After successfully implementing it on our company’s website, I built an [Eleventy starter project](https://www.11ty.dev/docs/starter/) and a [demo site](https://11ty-llp.netlify.app/) showing how it works.

{% note "Disclaimer" %}
Disclaimer: This article describes the live preview without the live editing option.
{% endnote %}

## TLDR;

Contentful guides for live preview usually require using React.js, which I’m trying to avoid.

> The live preview SDK works with JavaScript and has optimized integration for any React.js framework (like Next.js).

So, I’ve built a serverless function that renders the whole Liquid template on request without React.js.

The code is available on [GitHub](https://github.com/maliMirkec/11ty-liquid-live-preview), and the demo is available at [https://11ty-llp.netlify.app/](https://11ty-llp.netlify.app/).

## Digression

Let me digress here and express my admiration for templating engines, especially Liquid. I remember being amazed when I started using Mustache with PHP almost ten years ago. Outputting variables with Mustache tags made so much sense to me. It was much more readable than echoing PHP variables. I loved it and soon discovered other templating engines.

As my backend career transformed into a frontend area, I discovered Handlebars, Twig, Pug, and Liquid. Pug, in particular, was the choice for my site around five years ago. I thought it was the right choice, but it didn’t stick. The main reasons were other projects I’ve been part of. These projects were Jekyll and Shopify, the two most prominent frameworks that used Jekyll as their templating engines. Since working with Liquid daily, I learned many ways to work around its limitations. So, it made perfect sense to use it on my site later when I migrated from Hexo to Eleventy.

What I never did was use it as in Node.js to render files. In this project, that is exactly what I needed to do to make a live preview happen.

###

## The website

The demo website uses Contentful, Eleventy, and Liquid - my favorite combination for building a static site. The Contentful content model is based on pages and components. Here’s how it looks in Visual Modeler.

{% cldnry "contentful-content-model_aesncs" "Screenshot of Contentful content model." 759 803 %}

The pages consist of components that could include other components. For example, the homepage has a hero component with a CTA button, which is also a component.

{% cldnry "site_op5qzr" "Visualisation of the site that contains a hero component that contains a CTA component." 759 487 %}

To fetch the data from Contentful, I’m using Content Delivery API to fetch every entity separately. That means I’m fetching pages, hero components, and CTA components separately, which allows me to handle components individually and reuse the data throughout the site.

For example, here’s how to fetch the pages from Contentful. Notice how I use only the transformed component object’s `id` and `type`.

```js
return client.getEntries({ content_type: 'page' })
  .then((response) => response.items.map(item => {
    return {
      ...item.fields,
      components: item.fields.components.map(component => {
        return {
          id: component.sys.id,
          type: component.sys.contentType.sys.id
        }
      })
    }
  })
  .catch(console.error)
```

Here’s how to include the page components dynamically. Notice how I pass the component’s `id` parameter to the Liquid partial and use the `type` parameter to determine the path of the included component.

{% raw %}
```liquid
{%- for component in page.components -%}
  {%- assign includePath = 'partials/' | append: component.type -%}
  {%- include includePath, id: component.id -%}
{%- endfor -%}
```
{% endraw %}

Here’s how to fetch hero sections from Contentful. Notice how I transform the CTA components object using only its `id`.

```js
return client.getEntries({ content_type: 'hero' })
  .then((response) => response.items.map(item => {
    return {
      ...item.fields,
      id: item.sys.id,
      cta: item.fields.cta.map(cta => cta.sys.id)
    }
  })
  .catch(console.error)
```

Here’s how I search for the hero component I need. Notice how I use the ID parameter previously passed from the Liquid template page.

{% raw %}
```liquid
{%- assign componentHero = hero | where: 'id', id | first -%}
```
{% endraw %}

Here’s how to add the CTAs to the hero component. Notice how I pass the CTA’s `id` parameter to the Liquid CTA partial.

{% raw %}
```liquid
{%- if componentHero.cta -%}
  <div class="hero__action">
    {%- for ctaId in componentHero.cta -%}
      {%- include 'partials/cta', id: ctaId -%}
    {%- endfor -%}
  </div>
{%- endif -%}
```
{% endraw %}

Here’s how to fetch CTA sections from Contentful.

```js
return client.getEntries({ content_type: 'cta' })
  .then((response) => response.items.map(item => {
    return {
      ...item.fields,
      id: item.sys.id
    }
  })
  .catch(console.error)
```

And here’s how to find and display the CTA. Notice how I use the `id` parameter previously passed from the hero Liquid template.

{% raw %}
```liquid
{%- assign componentCta = cta | where: 'id', id | first -%}
<a class="cta" href="{{ componentCta.url }}">{{ componentCta.text }}</a>
```
{% endraw %}

Now that we know how our page template works let’s see how to set up the live preview.

## Live Preview

I’m using Netlify Functions, the [LiquidJS](https://liquidjs.com/index.html) package, and its [render file](https://liquidjs.com/tutorials/render-file.html) method for live previewing. This approach has limitations—live editing and in-page changes are unavailable.

First, I need the Liquid page, where I can parse the URL parameters and make requests for the Netlify function. Here’s the code for the page.

```md
---
title: Preview page
lang: en
layout: default
permalink: "/preview/"
noscripts: true
---

<script>
const preview = async () => {
  const urlParams = new URLSearchParams(window.location.search)
  const id = urlParams.get('id')
  const response = await fetch(`/.netlify/functions/preview-page/?pageId=${id}`)
  document.body.appendChild(await response.text())
}
preview();
</script>
```

Next, I need the Netlify Function. I placed it under the `netlify/functions` folder and named it `preview-page.cjs`.

{% note %}
`.cjs` means we’re using the CommonJS module for Node.js.
{% endnote %}

Since I will use LiquidJS, we need to install it first.

```js
npm install liquidjs
```

Then, I need to include LiquidJS and initialize it.

```js
const liquid = 'liquidjs'
const path = 'path'

export default async (req) => {
  const engine = new liquid.Liquid({
    root: path.resolve(__dirname, '../../site/_includes/'),
  })
}
```

I need to fetch the data from Contentful using the Contentful Preview API. The difference between the Contentful Delivery API and the Contentful Preview API is that the preview will return draft and changed content.

```js
const pages = require('./data/pages')
const components = require('./data/components')
const cta = require('./data/cta')
```

Next, I need to parse the parameters and find the requested page.

```js
export default async (req, context) => {
  const urlParams = new URLSearchParams(req.url.split('?').pop())
  const id = urlParams.get('pageId')
  const pagesArray = await pages()
  const page = pagesArray.find(page => page.pageId === id)
}
```

Now, I can render the page template by passing the page, components, and CTA data from Contentful. Finally, I return the rendered HTML as a string.

```js
export default async (req, context) => {
  const l = await engine
    .renderFile("helpers/page", {
    'page': page,
    'components': await components(),
    'cta': await cta()
  })

  return new Response(await l)
}
```

Here’s how the whole serverless function looks.

```js
const liquid = require('liquidjs')
const pages = require('./data/pages')
const components = require('./data/components')
const cta = require('./data/cta')
const path = require('path')

export default async (req, context) => {
  const urlParams = new URLSearchParams(req.url.split('?').pop())
  const id = urlParams.get('pageId')
  const pagesArray = await pages()
  const page = pagesArray.find(page => page.pageId === id)

  if(page) {
    const engine = new liquid.Liquid({
      root: path.resolve(__dirname, '../../site/_includes/'),
      extname: '.html'
    })

    const l = await engine
      .renderFile("helpers/page", {
      'page': page,
      'components': await components(),
      'cta': await cta()
    })

    return new Response(await l)
  } else {
    return new Response(`<div style="margin:auto">
      <p>Couldn't fetch this page.</p>
      <p>Please check the <code>id</code>.</p>
      <br>
      <p><code>id: ${id}</code></p>
    </div>`)
  }
}
```

If we open the preview page with the page’s ID from Contentful as a URL parameter, here’s how it works.

{% video 'https://res.cloudinary.com/starbist/video/upload/v1710618807/live-preview-localhost_lnif2j' 759 480 %}

<!-- ## Bonus stuff

- loader - Afif’s site
- reusing the contentful data
- adding filter
- adding assets -->

###

## Conclusion

The live preview is convenient for all team members, including me. In the future, I plan to add live preview templates for other headless CMS platforms, like Strapi and WordPress.
