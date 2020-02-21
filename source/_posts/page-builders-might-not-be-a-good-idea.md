---
title: Page builders might not be a good idea
date: 2020-02-20 17:17:11
tags:
  - wordpress
  - shopify
  - frontend
categories:
  - Blog
comments: true
thumbnail: https://res.cloudinary.com/starbist/image/upload/v1582238815/Page_builders_might_not_be_a_good_idea-2x_xpujzp.jpg
credit:
  text: John Duncan on Unsplash
  link: https://unsplash.com/photos/wFdCFmY-JS4
description: "Here’s what I think: page builder might not be a good idea. Read my thoughts about page builders and why you might think twice before you consider using it (again)."
---

Here’s what I think: page builder might not be a good idea. In this post, I wanted to share my thoughts about page builders and why you might think twice before you consider using it (again).

<!-- more -->

_The observations are subjective but based on my experience. I am referring to the WordPress and Shopify ecosystems here, but these problems could be found on other platforms, too._

> Disclaimer: If you use page builders and you don’t have these problems, please let me know in the comment section. I would very much like to learn how you manage to do it.

## TL;DR

Here are the most common problems, in my opinion:

1. The content is not reusable (you cannot reuse content on other pages).
2. The design is not consistent (pages often don’t look the same).
3. The site is not maintainable (change on one page doesn’t propagate to other pages).
4. The content is not maintainable (the content cannot be easily extracted from the database).
5. The site is not very performant (page builders load a lot of extra assets).
6. There’s always a missing feature (page builders cannot solve all your problems).
7. Getting to know page builder doesn’t make you a developer (leave the job to a professional).

## A little bit of history

During my time in web development, I have stumbled continuously on projects that are built using page builders. Page builders are tools that allow the building of website pages without writing code (mostly).

Back in the day in 2014, I tried to build my page builder ([Twitter page still exists] :)). It was conceived as a drag-n-drop solution like most modern page builders work today. After a while, I realized that the world doesn’t need another tool. Although that was the right decision, it was based on the wrong arguments. At that time, I didn’t know anything about performance or accessibility or maintainability, which I would never get right if I would develop an all-around solution. These were only a few of the worst enemies of a page builder. Now, let me tell you a story about other problems with page builders.

## Many problems page builders introduce

When using page builders, most users build page by page. There is no original design or structure. Why would you pay for something that you could do by yourself?

So they start by creating the first page. Then they start playing around with the page builder, and once they are satisfied, they declare the page completed. Then they create the second page. Again, they start playing around with the page builder and once again, they claim the page finished.

But what happens next? On both pages, there is the same component. They update the component on one page but forget to update it on the other page. And here’s the first problem: **the content is not reusable**.

That is a real-world scenario. It happened to me, and not once. Sure, there is an option to save the component and reuse it on the other page. But users don’t use this option.

Even when users create a reusable component, often they add an inline style to each instance. And that is the second problem: **the design is not consistent**. Most page builders offer custom styling in terms of adding extra paddings and margins, colours and fonts on each component. These settings are almost always hidden under some settings and are a few clicks away. Users forget where these settings are. That adds visual inconsistency to the site, which is almost always an unfortunate side-effect.

That brings out the third problem: **the site is not maintainable**. This problem is a nightmare for most developers. Developers don’t like to repeat themselves. Developers want reusable, well-structured code that is easily manipulated in their favourite code editors. Developers don’t like to code inside the browser without the fancy features like autocompletion or intellisence. But users don’t care because they never used code editor. You cannot miss something that you never experienced.

So, while the site is small and there are only a few pages, it is not a problem to update components manually. The problem occurs when the site is not so small anymore. Users often buy or develop a new theme at this point. And now we come to the fourth problem: **the content is not migratable**.

Since most page builders do not save the raw information, aka the content, we cannot migrate the content to a new theme easily. Page builders store shortcodes, HTML code, and inline styling alongside with content. There is no straightforward method for extracting the gibberish for the actual content. That means all existing content will be ignored and wasted. It will exist only while the page builder exists, and users will have to write new content. Sometimes it is what they want anyway, but when that is not the case, rewriting the content will be tedious, often blocking issue.

Now that we mentioned the gibberish, we discover the fifth problem: **the site is not very performant**. That is the point when users like to improve their PageSpeed Insights score. Unfortunately, page builders introduce several issues, from inlining CSS to loading extra assets, like CSS, JavaScript and font files. Users don’t know about these problems until they see red scores on speed testing tools. At this point, some users like to install additional plugins.

And that leads us to the sixth problem: **there is always a missing feature**. No page builder could offer a complete all-around solution for every user. When users install plugins, sometimes they don’t work alongside page builders. Now users like to develop a new feature. These tasks are not simple, and they introduce extra costs.

And that is the seventh problem: **using a page builder doesn’t make you a developer**. Developers and users don’t think alike. Developers’ brain works completely different, and it is always trying to solve problems in the most efficient way. Experienced developers predict and anticipate problems way before they emerge.

I don’t want to offend anyone here, but building pages is more than just writing content and placing it somewhere on the page. You should leave this job to a professional, especially if you want to maintain the site on a longer run. Ask the expert to propose the alternative solution for you, like building a custom WordPress theme or using a static site generator, for example.

## Conclusion

Page builders are useful tools for playing around and maybe even learning how pages work. But page builders are imagined as a universal tool for all possible scenarios, and that usually doesn’t work.

So cherish your data, it is the essential part of your website. You might think it is the design, but users get back for content, not design. Leave your content in the hands of a professional instead of page builder.

[Twitter page still exists]: https://twitter.com/citacms
