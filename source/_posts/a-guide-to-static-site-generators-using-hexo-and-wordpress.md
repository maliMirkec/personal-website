---
title: From WordPress to Hexo
categories:
  - Blog
tags:
  - wordpress
  - hexo
  - spg
thumbnail: //res.cloudinary.com/starbist/image/upload/v1508398026/From_WordPress_to_Hexo_xgibru.png
comments: true
canonical: //www.toptal.com/front-end/wordpress-to-html-with-hexo-blog#trust-nothing-but-brilliant-freelancers
date: 2017-10-19 08:53:11
description: Static site generators are systems that compile templates into static HTML pages. If that sounds efficient—yes, it is. There is no server processing or rendering, so static websites tend to be very fast and lightweight.
---

_This article was originally published on [Toptal Blog](https://www.toptal.com/front-end/wordpress-to-html-with-hexo-blog#trust-nothing-but-brilliant-freelancers)._

Static site generators are systems that compile templates into static HTML pages. If that sounds efficient—yes, it is. There is no server processing or rendering, so static websites tend to be very fast and lightweight, saving you and your users precious time and bandwidth. This increased efficiency is reflected in lower costs and, potentially, higher revenues.

<!-- more -->

## From Optimizing WordPress to Going Static

Speaking of efficient revenue generators, WordPress comes to mind. It powers 28 percent of the internet and is a potent platform with lots of great features, including extensive user and content management backed by an array of plugins, themes, APIs, etc.

Even big players in our industry use [WordPress](https://www.toptal.com/wordpress#trust-nothing-but-brilliant-freelancers). Websites like [Smashing Magazine](https://www.smashingmagazine.com/) and [CSS-Tricks](https://css-tricks.com/) use WordPress, albeit significantly customized instances in both cases. However, working with WordPress can be a tedious task, especially when customizing and optimizing for performance.

I started a small blog back in 2015. My first instinct was to use WordPress. It gave me a jumpstart, as I was working with WordPress already. I created a new droplet on [DigitalOcean](https://www.digitalocean.com/) as a server, established [Vesta](https://vestacp.com/) as Hosting Control Panel, and installed WordPress as a blog platform. Ultimately, I designed and developed a brand new WordPress theme. The only thing missing was the content.

I knew I wanted to share some tips about Atom, as I was using this great editor at that time. I published a few articles about it and shared them with the community.

At first, I wasn’t paying that much attention to performance because I was too focused on the content. After a while, I noticed some performance issues. The score on Google PageSpeed Insights was lousy, so I worked hard to fix and optimize my website, attaining an almost perfect score of 99/100:

  - I switched from Nginx+Apache to Nginx+PHP-FPM.
  - I used CloudFlare for speed and protection.
  - I used Cloudinary to host images.
  - I tweaked my theme and used Critical CSS.

The only warning was for a Google Analytics caching issue which I didn’t know how to fix at the time.

But what if 99/100 or 100/100 still don’t get you the desired performance? That’s where static page generators enter the fray.

## Enter Static Page Generators and Hexo

So what is a static site generator?

As the name implies, a static website generator is a system that generates static HTML files. Serving static HTML files is much faster than creating pages on the fly. There is no server rendering or compiling, which often causes a delay in page loading.

When talking about performance, one must think about caching. Although there are multiple techniques for caching WordPress, this is not usually a straightforward task, unlike caching static files. Serving cached files is more performant than serving actual files from the server and it can save time when loading websites.

In June of this year, Vitaly Friedman of Smashing Magazine introduced [JAMstack](https://jamstack.org/) in a workshop in my city. I’d never heard of it, and I was very intrigued. After the seminar finished, I studied this new concept for a bit, and I realized how awesome it is. I realized that my website doesn’t need a WordPress.

The first step was to decide which static page generator to use. I wasn’t aware [how many there are](https://www.staticgen.com/). I decided to give the [Hexo blog](https://hexo.io/) framework a try. It is deployable to [Netlify](https://www.netlify.com/), has a plugin to migrate from WordPress, and uses Node.js, which I’m familiar with, unlike Jekyll and Hugo, which are based on Ruby and Go, respectively. And, as I discovered later, it is blazing fast.

## Migrating WordPress to Hexo

Hexo installation is as simple as it could be. Install hexo-cli globally using npm, run the hexo init command, install npm dependencies, and voilà:

```
npm i -g hexo-cli
hexo init <blog-name>
cd <blog-name>
npm install
```

To make the migration, install the [hexo-migrator-wordpress plugin](https://github.com/hexojs/hexo-migrator-wordpress). This plugin expects XML files as a source. XML files could be exported via the WordPress export tool, which can be found in administration panel under Tools -> Export -> WordPress. Finally, type the hexo migrate command to finish the import.

```
hexo migrate wordpress <source>
```

The only thing left to do is to check the result. Run the hexo server command to start the server and open the browser at given address.

```
hexo server
```

## Markdown and Its Limitations
Hexo supports Markdown out of the box. [Markdown is a markup language](https://www.toptal.com/web/markdown-the-writing-tool-for-software-developers#trust-nothing-but-brilliant-freelancers) that many use to format README files, comments, and posts. But it could be used for writing your article as well. Its syntax is intuitive and easy to learn.

Another advantage for Markdown is that it generates clean and valid HTML. That allows developers to create clean and maintainable CSS rules for styling blog articles and pages.

A developer’s life is never easy. We often run into problems that could cause us to spend time on unexpected things. If we learn something along the way, then we didn’t waste this time, and that is a good thing. The same happened to me. I thought everything went well because there was no compiling error, but then I noticed that some things didn’t work as expected.

For example, Codepen demos didn’t load. I searched for a Hexo plugin, and found one. Unfortunately, [this](https://github.com/timnew/hexo-tag-codepen) plugin wasn’t official, and it generated HTML errors that were unacceptable. I wanted to contribute and fix the problems, but the latest pull request was unresolved for more than a year and a half. I decided it would be easier to fork the repository, fix the problems, and publish the plugin on the Hexo page so that anyone could use it. [The plugin](https://github.com/maliMirkec/hexo-tag-codepen) was accepted, I updated the content, and Codepen demos worked like a charm.

Similar problems occurred with CanIUse embeds. Now that I knew how to create a Hexo plugin, there was no excuse not to do so. My [hexo-caniuse plugin](https://github.com/maliMirkec/hexo-caniuse) was also published, as was my [hexo-cloudinary plugin](https://github.com/maliMirkec/hexo-cloudinary) for responsive images loaded from Cloudinary CDN.

## Redesign and Optimization

The design of the website is rather fundamental. Hexo offers a handful of themes for free on the official website, but I wanted a unique theme for my Hexo site. After I read the [documentation](https://hexo.io/docs/themes.html) and learned how to customize Hexo, I started to develop an original theme from scratch.

To create new templates, I decided to use EJS for templating. Having never worked with [EJS](http://www.embeddedjs.com/), I saw it as a chance to learn the new template syntax. If you don’t like EJS, Hexo provides you with [Swig](http://www.swig.org/), [Haml](http://haml.info/) or [pug](https://pugjs.org/api/getting-started.html) support via plugins.

During the redesign process, I was paying close attention to performance. By following best practices, we can speed up our static website even more. Placing JavaScript files at the bottom of the document and using the [Critical CSS technique](https://www.smashingmagazine.com/2015/08/understanding-critical-css/) creates the best experience for your audience.

SEO optimization is crucial for blog visibility on search engines like Google. Hexo has a built-in helper for inserting Open Graph data. Hexo uses YAML files to store site and theme configuration. I used the theme configuration file to configure the site name, description, and various social IDs.

Adding Gulp or Webpack to your build process is always helpful and recommended. I used Gulp to minify and compress CSS and JavaScript files, and everything was ready. I could deploy it.

## Netlify

Netlify is a platform that provides hosting for websites and apps with blazing fast performance. It markets itself as a unified platform that automates code to create performant and easy to maintain websites.

> “Simply push your code and let us take care of the rest.”

As you’d expect, configuring the website is straightforward:
  1. Set up the domain.
  2. Change the DNS records.
  3. Set up build and deployment.
  4. Turn on SSL.

When everything was set up, I ran a handful of basic tests to see the scores, including [Pingdom Website Speed Test](https://tools.pingdom.com/), [Web Page Test](https://www.webpagetest.org/), and [Testmysite.io](https://testmysite.io/). The results were excellent, as the site got the highest scores on every tool.

## CloudFlare

Despite the excellent scores, I wanted to try CloudFlare, just to see how much it would speed up the website additionally. CloudFlare can be overwhelming at first, but learning how to use it is fundamental. After I configured CloudFlare, I reran the tests and the results were even better.

The final test was [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/). The score was almost 100% both for mobile and desktop versions. The problem was Google Analytics browser caching. [I managed to fix the issue](/articles/fixing-google-analytics-caching-issue/) by using CloudFlare App for Google Analytics.

## How Much Does It Cost?

Using Hexo on Netlify with CloudFlare costs nothing.

Hexo is an open-source platform, so it’s free no matter how you decide to use it. It has a large community, and is the third most popular open source static page generator according to StaticGen.

Netlify has an open plan which provides us with great options for our hosting. Images are hosted on Cloudinary’s open plan as well. CloudFlare’s free plan allows us to configure a high number of rules which can speed up your already fast website. It also allows us to fix the Google Analytics browser caching issue. I didn’t pay for the domain either, since I used a free personal domain provided by the government.

This project setup reduced my budget to a minimum. If you need more advanced features for your project, a static page generator may still save you a few bucks.

Serving cached files means CPU and bandwidth usage is reduced, which in turn means you can use cheaper hosting plans with less powerful hardware. Not only that, your website will be much faster, meaning your users will enjoy browsing on both mobile and desktop devices. And, because page load speed can impact Google Search rankings, your website will rank higher, gaining even more visitors.

All this means that you could spend part of your budget elsewhere—for example, on promoting your website or creating additional content, which will help gain a tad more revenue.

## The Case for Static Site Generators

Migrating from WordPress to a static page generator is no simple task, and it’s definitely not something every WordPress user should do. However, Hexo made this transition relatively painless, thanks to its plugins, excellent documentation, and a simple API.

Before deciding whether or not you want to migrate your product to a static solution, you need to be aware of the limitations that come with static page generators, such as content restrictions, Markdown learning curve, and version control.

You should also be aware that Hexo is a blog framework. It is perfect for developers and tech people that know how to use a text editor and terminal. If you like using a web interface to manage your content, there is a plugin that provides that functionality as well. It’s called [hexo-admin](https://github.com/jaredly/hexo-admin) and it’s quite popular.

If you’re already using WordPress, you should stop and think which features of WordPress you are using right now, and which are indispensable. Do you have a complicated content structure? Are you using user management? Are you using a lot of plugins on your instance of WordPress and are they all necessary? Are you satisfied with performance of your site?

If the answer to most or all of these question is no, than you are ready to supercharge your website with a static page generator. Depending on the use case and your requirements, static pages could help maximize efficiency while minimizing cost. If, on the other hand, you demand WordPress flexibility, you’re probably not even considering such a move.
