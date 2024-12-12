---
layout: default
title: Building a live preview with Eleventy and Contentful
date: 2024-03-22 12:00:00
tags:
  - blog
  - publications
  - eleventy
  - contentful
  - ssg
publication: Frontend Masters
canonical: https://frontendmasters.com/blog/building-a-live-preview-with-eleventy-contentful-and-liquid-templating/
description: If you you're making a website with Eleventy, Contentful, and Liquid templating, you can set up the live preview by following this article.
type: articles-item
---

As a part of the marketing team at [Heyflow](https://heyflow.com/), I collaborate with people who work on the company's website. Although all team members are technically acquainted, sometimes they struggle to update the website. The struggle is not being able to visualize what will change on the page when updating the content. Saving the updates and waiting for the staging environment to build is inefficient (even though our site build is less than a minute... still). As a result, the team requested a live preview of our pages.

We're using [Eleventy](https://www.11ty.dev/) to build the site, and [Contentful](https://www.contentful.com/) to manage the content. Here's a video of the solution I came up with working:

{% video "https://res.cloudinary.com/starbist/video/upload/v1710618808/live-preview-contentful_dh8pws" 759 480 %}

After successfully implementing it on our company's website, I built an [Eleventy starter project](https://www.11ty.dev/docs/starter/) and a [demo site](https://11ty-llp.netlify.app/) showing how it works.

{% note "Disclaimer" %}
This article describes the live preview without the live editing option. That means that you can't see instant page updates, but instead you need to click on the Refresh button to pull the latest updates.
{% endnote %}

## The plan

Contentful guides for building a live preview usually require using React, which I'm trying to avoid.

> The live preview SDK works with JavaScript and has optimized integration for any React.js framework (like Next.js).

So, I've built a serverless function that renders the whole Liquid template on request without React.js. The code is available on [GitHub](https://github.com/maliMirkec/11ty-liquid-live-preview), and the demo is available at <https://11ty-llp.netlify.app/>.

## A little appreciation for templating languages

Allow me a moment to express my admiration for templating engines, especially [Liquid](https://shopify.github.io/liquid/). I remember being amazed when I started using [Mustache](https://mustache.github.io/) with PHP almost ten years ago. Outputting variables with Mustache tags made so much sense to me. It was much more readable than echoing PHP variables. I loved it and soon discovered other templating engines.

As my back-end career transformed into a front-end area, I discovered [Handlebars](https://handlebarsjs.com/), [Twig](https://github.com/twigjs), [Pug](https://pugjs.org/api/getting-started.html), and Liquid. Pug, in particular, was the choice for my site around five years ago. I thought it was the right choice, but it didn't stick. The main reasons were other projects I've been part of. These projects were Jekyll and Shopify, the two most prominent frameworks that used Jekyll as their templating engines. Since working with Liquid daily, I learned many ways to work around its limitations. So, it made perfect sense to use it on my site later when I migrated from [Hexo](https://hexo.io/) to [Eleventy](https://www.11ty.dev/).

What I never did was use it in Node.js to render files. In this project, that is exactly what I needed to do to make a live preview happen. Hooray for learning new things!

## The website

The demo website uses Contentful, Eleventy, and Liquid — my favorite combination for building a static site. The Contentful content model is based on pages and components. Here's how it looks [in Visual Modeler](https://www.contentful.com/help/visual-modeler/).

{% cldnry "contentful-content-model_aesncs" "Screenshot of content model in Contenful." 759 814 %}

The pages consist of components that could include other components. For example, the homepage has a hero component with a call-to-action button (CTA), which is also a component.

{% cldnry "11ty_Liquid_Live_Preview_hucife" "Screenshot of a demo site with page components highlighted." 759 501 %}

To fetch the data from Contentful, I'm using [Content Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/) to fetch every entity separately. That means I'm fetching pages, hero components, and call-to-action (CTA) components separately, which allows me to handle components individually and reuse the data throughout the site.

For example, here's how to fetch the pages from Contentful by using the [JavaScript data file](https://www.11ty.dev/docs/data-js/) in Eleventy. The following code snippet is placed inside the `_data/pages.js` file. Notice how I use only the transformed component object's `id` and `type`.

```js
const contentful = require("contentful")

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN_DELIVERY,
  environment: process.env.CONTENTFUL_ENVIRONMENT,
  host: 'cdn.contentful.com'
})

module.exports = async () => {
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
}
```

Here's how to include the page components dynamically inside the Liquid template, `pages.liquid`. Notice how I pass the component's `id` parameter to the Liquid partial and use the `type` parameter to determine the path of the included component.

{% raw %}
```liquid
{%- for component in page.components -%}
  {%- assign includePath = 'partials/' | append: component.type -%}
  {%- include includePath, id: component.id -%}
{%- endfor -%}
```
{% endraw %}

Here's how to fetch hero sections from Contentful in the `_data/hero.js` file. Notice how I transform the CTA components object using only its `id`.

```js
const contentful = require("contentful")

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN_DELIVERY,
  environment: process.env.CONTENTFUL_ENVIRONMENT,
  host: 'cdn.contentful.com'
})

module.exports = async () => {
  return client.getEntries({ content_type: 'hero' })
    .then((response) => response.items.map(item => {
      return {
        ...item.fields,
        id: item.sys.id,
        cta: item.fields.cta.map(cta => cta.sys.id)
      }
    })
    .catch(console.error)
})
```

Here's how I search for the hero component I need. Notice how I use the `id` parameter previously passed from the Liquid template page.

{% raw %}
```liquid
{%- assign componentHero = hero | where: 'id', id | first -%}
```
{% endraw %}

Here's how to add the CTA components to the hero component in the `_includes/partials/hero.liquid` Liquid partial. Notice how I pass the CTA's `id` parameter to the Liquid `cta` partial.

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

Here's how to fetch CTA components from Contentful in the `_data/cta.js` file.

```js
const contentful = require("contentful")

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN_DELIVERY,
  environment: process.env.CONTENTFUL_ENVIRONMENT,
  host: 'cdn.contentful.com'
})

module.exports = async () => {
  return client.getEntries({ content_type: 'cta' })
    .then((response) => response.items.map(item => {
      return {
        ...item.fields,
        id: item.sys.id
      }
    })
    .catch(console.error)
}
```

And here's how to find and display the CTA component in the `_includes/partials/cta.liquid` Liquid partial. Notice how I use the `id` parameter previously passed from the hero Liquid template.

{% raw %}
```liquid
{%- assign componentCta = cta | where: 'id', id | first -%}
<a class="cta" href="{{ componentCta.url }}">{{ componentCta.text }}</a>
```
{% endraw %}

Now that we know how our page template works let's see how to set up the live preview.

## Live preview

I'm using Netlify Functions, the [LiquidJS](https://liquidjs.com/) package, and its [render file](https://liquidjs.com/tutorials/render-file.html) method for live previewing. This approach has limitations---live editing and in-page changes are unavailable.

First, I need the Liquid page, where I can parse the URL parameters and make requests for the Netlify function. Here's the code for the `preview.html` Liquid page.

```md
---
title: Preview page
layout: default
permalink: "/preview/"
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
`.cjs` means we're using the CommonJS module for Node.js.
{% endnote %}

First, I need to include LiquidJS and initialize it (after installing it).

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

I can reuse the code for fetching the Contentful content like explained in the previous section, but I need to make sure to use **the preview token** this time to fetch the unpublished changes. This is how my `netlify/functions/data/pages.js` file looks like.

```js
const contentful = require("contentful")

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN_PREVIEW,
  environment: process.env.CONTENTFUL_ENVIRONMENT,
  host: 'preview.contentful.com'
})

module.exports = async () => {
  return client.getEntries({ content_type: 'page' })
    ...
}
```

I can import all content types in my serverless function now.

```js
const pages = require('./data/pages')
const components = require('./data/components')
const cta = require('./data/cta')` JavaScript

Next, I need to parse the parameters and find the requested page by matching the requested page's `id`.

`export default async (req, context) => {
  const urlParams = new URLSearchParams(req.url.split('?').pop())
  const id = urlParams.get('pageId')
  const pagesArray = await pages()
  const page = pagesArray.find(page => page.pageId === id)
}
```

Now, I can render the page template by passing the `page`, `component`, and `cta` data from Contentful. Finally, I return the rendered HTML as a string.

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

Here's how the whole serverless function looks.

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

  if (page) {
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

To test our function, I used the [Netlify CLI](https://docs.netlify.com/cli/get-started/). After running the `netlify dev` to run the serverless function locally, I've opened the `localhost:8888/preview/?id=XYZ` and this is what I got:

{% video "https://res.cloudinary.com/starbist/video/upload/v1710618807/live-preview-localhost_lnif2j" 759 480 %}

## Conclusion

The live preview is convenient for all team members, including me. In the future, I plan to add live preview templates for other headless CMS platforms, like [Strapi](https://strapi.io/) and WordPress.
