---
layout: index
title: "Nightmare DX (Developer Experience): Shopify"
date: 2021-08-13 14:00:00
tags:
  - blog
  - dx
  - shopify
  - web dev
thumbnail: nightmare-dx-shopify_ejavvl
descriptionAlt: This article is the first article in a series about poor developer experience. In this particular article, I am going to write about Shopify and its (un)friendliness for developers.
description: The first in a series about poor developer experience, this article covers Shopify and it's friendliness to developers.
type: articles-item
sections2:
  - type: banner-beta
    banner: newsletter
series: Nightmare DX
---

This article is the first article in a series about poor developer experience. In this particular article, I am going to write about Shopify and its (un)friendliness for developers.

{% note "Disclaimer" %}
This series intends not to rant but to educate developers about the limitations of the products, platforms, and frameworks. In the perfect world, these posts would contribute to building a better Developer Experience for everyone. That is also the reason why the title is deliberately controversial.
{% endnote %}

## What is DX (Developer Experience)

I like to think of DX as a meter of happiness for developers during the development process. I first heard of this term last year in [Chris Coyier's article](https://css-tricks.com/what-is-developer-experience-dx/), and I keep thinking about it. DX even affects which projects I accept nowadays.

When discussing DX, many different factors affect the outcome, from development and CLI to documentation and support. So let's see how Shopify stands on these things.

## Development

### Local development

Shopify doesn't allow local development in the true meaning of that word. You cannot replicate your shop on your computer. That means you are limited.

When I started working with Shopify, I saw developers work directly inside the Admin Dashboard in the browser. Could you imagine how hard that is? No auto-completion, no shortcuts, no any of the features from your favorite IDE or text editor.

After a while, I learned about Theme Kit, a command-line interface for handling Shopify themes. Theme Kit allows you to download, upload and sync the theme code. Using Theme Kit means you could develop on your computer and see changes on the server if the CLI syncing command runs. One of the annoying things with this approach is that you need to wait for a few seconds to see the changes.

I recently learned that Shopify released Shopify CLI, and they suggest using it with Online Store 2.0 themes.

### Git

Shopify doesn't support Git. I imagine that implementing Git in this kind of project is challenging, but I think many developers would be happy to have staging and development instances controlled by Git. I know I would.

Edit 2021/08/23: It was brought to my attention that Shopify has [GitHub integration](https://shopify.dev/themes/tools/github). I look forward to test this integration in the future.

### Structure

I am not a huge fan of when a platform has a definite folder structure. That is incredibly frustrating when you are not allowed to add subfolders. For example, if you want to add some graphic assets, your `assets` folder gets messy pretty fast.

### Assets

Shopify supports Sass, and you could even use Liquid variables inside it. That is nice and all, but one thing that bothers me is that Shopify doesn't minify the code for you. The same goes for JavaScript.

### Apps

Shopify provides a lot of plugins that could extend the functionality of your shop. Although these plugins are verified, they introduce extra code that you cannot control. I have been in a situation when I had to replace the plugin functionality because the shop started to act slow and unreliable. I'm not particularly eager to rely on some else's code in general, so I wouldn't suggest using too many plugins anyway.

## Documentation

Shopify documentation is massive. It gets everything covered, I am sure, but that has its downsides. For one, it could be a lengthy task to find what you need. I sometimes find it too technical, and I need to go down a rabbit hole to understand how to do something.

Overall, I think the Shopify documentation is pretty solid.

## Community

Shopify has a nice community. There is a forum where I found the most answers to your question. You could find all sorts of questions, or tickets, if you will, here, and most of the tickets are resolved.

While researching for the article, I learned that Shopify has a Partner Slack and a Facebook group. I never joined, but I thought it would be helpful to mention those.

Overall, I think the community is not that widespread, but it could be very helpful.

## Support

I only had to contact Shopify support on a couple of occasions. It was a decent experience, but the problems didn't go away lightly. Of course, the support level depends on the Shopify plan, but luckily for me, the client had the premium plan.

Overall, I think the Shopify support is solid but slow.

## Conclusion

Once you get used to all limitations of the Shopify platform, you could do a solid job. Shopify handles a lot of stuff for you, from products to orders. Still, the development process is far from ideal, and you will never be as effective as if you are developing in a local environment.
