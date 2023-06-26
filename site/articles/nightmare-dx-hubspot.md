---
layout: index
title: "Nightmare DX (Developer Experience): HubSpot"
date: 2023-07-20 10:00:00
tags:
  - blog
  - dx
  - hubspot
  - web dev
description: I had to work with HubSpot after a couple of years, and it reminded me to write this article about its nightmare developer experience.
type: articles-item
sections2:
  - type: banner-beta
    banner: newsletter
    animate: true
series: Nightmare DX
permalink: false
eleventyExcludeFromCollections: true
---

I meant to write about HubSpot’s terrible developer experience (DX) right after my first article about [Shopify’s nightmare DX](/articles/nightmare-dx-shopify/) two years ago, but it wasn’t until recently that I had to work with HubSpot again. Although the project was short and sweet, it reminded me to write this article.

## Local development

HubSpot, just like Shopify, has limited abilities for local development, and you cannot replicate the HubSpot environment on your computer. The only thing you could do is sync your theme using [HubSpot CLI](https://www.npmjs.com/package/@hubspot/cms-cli). And you know what that means? It means no browser sync or hot reloading. It means refreshing your page every few seconds manually.

Working with HubSpot CLI has been a nightmare experience for me in several scenarios. For example, when developing a new HubSpot module, it is considered the best practice to use Design Tools inside the HubSpot dashboard. With Design Tools, you could configure input fields for your module and copy snippets and/or values. Then, to sync these changes locally, you should fetch your module from the server. No problem there, but on more than a few occasions, the fetch action didn’t override my local files, making me delete the local module and then repeat the fetch action. Talking about the waste of time.

Then, when you are developing locally and want to add more input fields, you often go back to Design Tools and add these fields. The problem occurs when you forget to refresh the page, have an older version of your module, and then hit the “Publish changes” button, which overrides your local changes. Once you try to fetch the changes, it doesn’t work, so you delete your local module files and try to fetch files from the server again, and guess what? You lose your work because undo doesn’t work on deleted files.

## Dashboard

For an enterprise CMS like HubSpot, you would expect to have an organized dashboard, but HubSpot’s dashboard is everything but organized. For example, if you want to edit your blog listing page, you could navigate to Marketing > Website > Blog and switch from Blog posts to Blog listing pages.

{% cldnry "nightmare-dx-hubspot-dashboard-blog-listings_sniy90" "Screenshot of the HubSpot dashboard showing how to navigate to blog listing pages." 759 512 %}

Once you find your Blog listing page, if you want to rename it, you cannot do it here. You need to go to Settings > Tools > Website > Blog. If this makes sense to anyone, please explain how.

{% cldnry "nightmare-dx-hubspot-dashboard-blog-settings_pkoy7d" "Screenshot of the HubSpot dashboard showing how to navigate to blog listing settings." 759 423 %}

## Documentation

Although HubSpot documentation is very comprehensive, it should’ve been more organized. The most important pages that help me with HubSpot development, like [Hubl filters](https://developers.hubspot.com/docs/cms/hubl/filters) and [functions](https://developers.hubspot.com/docs/cms/hubl/functions), are so big and slow that it takes over a minute to load them completely. And I need it to load completely because I want to use search to find something on the page.

{% cldnry "nightmare-dx-hubspot-hubl-functions-page-loading_euclzn" "Screenshot of DevTools showing it takes 1.3 minutes to load the Hubl functions page." 759 560 %}

## Conclusion

There are many other things to complain about, but there are the main pain points for me. I had some additional notes in my draft, but I no longer know what they mean. I also have the screenshot with the vague message about access issues, but I don’t know what it means.

{% cldnry "nightmare-dx-hubspot-access-alert_aiv7no" "Screenshot of the HubSpot alert about access issues." 759 82 %}

If you are building a webshop or website platform, try to make your tools more enjoyable. Invest more time to listen to what developers say and try to improve the overall developer experience. It would make this developer happier.
