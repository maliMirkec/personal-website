---
layout: index
title: 2018 lookback
date: 2019-01-05 16:06:38
tags:
  - blog
  - freelance
  - remote work
thumbnail: 2018_Lookback_nrqris
description: It is the beginning of the new year, and it is time to look back to 2018, but from a technology perspective. I have learned a lot, here are my findings.
type: articles-item
sections2:
  - type: banner-beta
    banner: newsletter
series: Lookbacks
---

It is the beginning of the new year, and it is time to look back to 2018, but from a technology perspective. I have learned a lot, here are my findings.

{% note %}
This article is written from a technology perspective, meaning that I wrote about technologies and tools used last year.
{% endnote %}

<!-- more -->

## WordPress

I am a freelance developer. Most of my engagements come via [Toptal], and most of the engagements were WordPress projects, and only a few were UI specific projects.

Those WordPress projects are mostly hosted on [WPEngine] or [Pantheon]. Both hosting providers support different environments for WordPress projects, like development, staging or testing environments, and versioning control like Git, which is excellent.

I noticed that clients prefer to buy finished WordPress themes. Often themes don't have features that are suited for the client's needs, so the subject should be updated or adjusted. Some of the clients like to develop a custom theme, but I only produced a couple of custom themes. I have used [Underscores] as a starting point for custom theme development.

I was mostly hired to finish the theme or to optimize a website for page speed. I don't mind it; I just realized that some developers are not familiar with modern technologies or the latest best practices. In this case, I usually apply my knowledge to remove unused code from the codebase or to remove large libraries, like jQuery from the project. Also, I typically introduce Gulp to speed up the process, or CSS Grid or Flexbox to resolve layout issues.

Last year I discovered [Local by Flywheel], “the #1 local WordPress development tool”, as their website says. This fantastic software made my life easier. Starting new WordPress site, adding custom domains, and enabling Live Link are my favorite features. Deployment to production is also a powerful feature, but unfortunately, neither of my clients used Flywheel hosting.

## CSS

What an excellent year for CSS developers last year was. I enjoyed solving problems using `Flexbox`, `CSS Grid`, and `CSS variables`.

In the time when more than 50% of the developers didn't know how to solve the famous [Twitter puzzle], I wanted to write about the importance of the cascade.

{% cldnrylink "https://twitter.com/mxstbr/status/1038416725182697472" "tweetcyborg_fgqnev" "Twitter screenshot containing the poll" 600 910 %}

I never had the time to write about it, but other amazing developers did (possibly better than I would have). To name just a few, I agree with:

- Chris Coyier in [All Fired Up About Specificity], and
- Tim Kadlec in [The Cascade and Other Essential Unessentials].

The point is, you cannot solve problems like centering the content or creating a classic “header-main-sidebar-footer” layout without knowing the essentials. I mean, you could, but in the long term, you will most likely have a problem that you won't be able to solve quickly.

I will use this occasion to comment about `CSS-in-JS` approach. I didn't learn much about it, but from what I read, some developers would like to remove the cascade from CSS. That is just wrong. We need the cascade. The cascade is the essential part of the CSS. I am not even going to say that CSS has cascade in its name. I would just like to encourage anyone to take their time to learn about CSS basics if they are writing CSS code.

## JavaScript

JavaScript is everywhere. Every single project that I was working on this year used JavaScript. Only a few of them still use jQuery, mostly WordPress projects.

I have learned a lot about `es6` this year, but I am still not proficient enough to remember all of the features without Google.

What I did notice is that React is a top requirement, even for jobs that don't use React at all. I have never learned React framework, but I do have some basic knowledge about it. I was working with Angular for a couple of years, and I have read a significant number of articles about React. I just never had the opportunity to learn it on an actual project. Same goes for new Angular versions or Vue.js.

Having said that, I think this year showed us that frontend role is separating in two directions: engineering and user interface. The problem is that some employers don't know the difference. Therefore developers who didn't know the answer to [Max's question] try to solve the problem by introducing `CSS-in-JS` techniques.

{% note %}
I am generalizing here, but I do think the CSS is underrated.
{% endnote %}

I also didn't see much HTML/CSS roles, besides quick roles for converting designs to pages. What I did see are roles for UX/UI designers where you need to know how to design and how to translate designs to HTML/CSS code. From my experience, there aren't many designers who know how to code and vice versa. I mean, I know how to use Photoshop, Sketch, and InVision, but I am not a designer.

I am a user interface developer, and I know how to change the layout or how to style a component in almost any environment, including WordPress, Angular, or React. I know how to get the highest scores on Lighthouse. I know how to handle cross-browser inconsistencies. I know how to use many different templating engines and JSX is just another one. I don't need to know how Redux work to make the site appear consistently on every browser, do I?

## Static Page Generators

I started to use Hexo for my website a couple of years ago. I learned how to use it, and I wrote [about it](/articles/a-guide-to-static-site-generators-using-hexo-and-wordpress/). This year I had the opportunity to work [with other](/articles/overview-of-popular-static-site-generators/) static page generators. I have developed websites using Middleman, Jekyll, and Hugo.

Although Jekyll is the most popular, Hugo is my favorite. It is blazing fast, simple, yet powerful. You don't need any plugins to build a sophisticated solution in Hugo.

All static sites were hosted on [Netlify]. Netlify is a game-changing platform with powerful features like SSL support, AB testing, form handling, to name just a few.

Another trend that is common when talking about static sites is CMS. Although I am familiar with Contentful, all of my clients use [Netlify CMS]. Being able to create, update, and deploy site within seconds from Netlify CMS without knowing how to code is just brilliant.

I have developed a couple of custom solutions for static sites, like integrating third-party software, creating Lambda functions, and adding custom build hooks. Static sites might not be so “static.”

> “It is interesting that every client that needed static site approached me directly. I haven't seen many job posts about static sites, too. I guess finding a developer for the static site is not that easy yet.”

## Blogging

To have a broader audience for my blog, I reshare every post from my blog on [dev.to], [medium.com], and [codementor.io], alongside on social platforms like [Reddit], [Hacker News], [Lobsters], and [Twitter].

I have reached almost 2,5k followers on the dev.to platform. I have more than 700 followers on Twitter. I have a modest reputation on Reddit, Hacker News, and Lobsters.

{% cldnry "devto-stats_zj90eq" "dev.to stats." 759 173 %}

Around 35,000 readers visited my blog with almost 50,000 pageviews. On dev.to, I have more than 17,000 post views, and nearly 700 reactions. On medium.com, I had around 10k post views, and on codementor.io, I had around 4,5k.

I have redesigned my site this year (with [a little help] from my friends). I am finally happy and I don't think I will be redesigning it again this year. But I may move it to Hugo, if time allows. 🥇

## Conclusion

I could easily say that 2018 was a great year for me. I hope the next one will be even better. Let's make the web even better place!

[Toptal]: https://www.toptal.com/#trust-nothing-but-brilliant-freelancers
[WPEngine]: https://wpengine.com/
[Pantheon]: https://pantheon.io/
[Underscores]: https://underscores.me/
[Local by Flywheel]: https://local.getflywheel.com/
[Twitter puzzle]: https://twitter.com/mxstbr/status/1038073603311448064?lang=en
[All Fired Up About Specificity]: https://css-tricks.com/all-fired-up-about-specificity/
[The Cascade and Other Essential Unessentials]: https://timkadlec.com/remembers/2018-09-10-the-cascade-and-other-essential-unessentials/
[Max's question]: https://twitter.com/mxstbr/status/1038073603311448064?lang=en
[Netlify]: https://netlify.com
[Netlify CMS]: https://www.netlifycms.org/
[dev.to]: https://dev.to/starbist
[medium.com]: https://medium.com/@malimirkeccita
[codementor.io]: https://www.codementor.io/@malimirkeccita
[Reddit]: https://www.reddit.com/user/starbist
[Hacker News]: https://news.ycombinator.com/user?id=starbist
[Lobsters]: https://lobste.rs/u/starbist
[Twitter]: https://twitter.com/malimirkeccita
[a little help]: https://dev.to/starbist/lets-make-my-website-even-better-37a5
