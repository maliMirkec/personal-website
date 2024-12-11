---
layout: index
title: 2019 lookback
date: 2019-12-20 16:10:42
tags:
  - blog
  - freelance
  - remote work
description: Reflect on my past year with 2019 Lookback. Read about the challenges, accomplishments and lessons learned during the whole year.
type: articles-item
sections2:
  - type: banner-beta
    banner: newsletter
series: Lookbacks
---

Last year I wrote [my first yearly look back], and now it is time for the 2019 lookback.

<!-- more -->

{% note %}
This article is written from a technology perspective, meaning that I wrote about technologies and tools used last year.
{% endnote %}

## WordPress

I still work on WordPress projects. WordPress is not going away: its users are loyal, and they are not losing trust in such wide-spread system. And they shouldn’t because it is still easy to use and it is familiar to most beginners and advanced users. One of the most significant advantages is the plugin library. There is a plugin for almost everything you might think of, and users really like that. There is a large number of themes, too. The biggest downside is the performance, as most themes are not optimized.

WordPress is not my favorite system. However, I am still motivated to find new ways to optimize and enhance WordPress websites. When given the control to override default settings and behaviour, one could achieve remarkable results, like getting green scores from PageSpeed Insights, Lighthouse and WebPageTest scoring tools. I had an opportunity to optimize such an instance. We were pushing to its limits and even introduced [native lazy-loading] and moving the whole media library to CDN service. The scores were sky-rocketing. 🚀

## Static Site Generators (SSG)

Static site generators, on the other hand, are so fast that rarely anybody concerns about the performance. The biggest challenge is to configure headless CMS and build systems. Luckily for us, we have services like [Netlify] and [Netlify CMS]. These two services are my go-to places when talking about SSGs.

> “Netlify supports anything you could think of and a little bit more.”

Netlify supports anything you could think of and a little bit more: from continuous deployment to split testing. All my clients (and myself) use Netlify for their sites. I even wrote [a post about my favorite Netlify features].

{% cldnrylink "/articles/my-favorite-netlify-features/" "My_favorite_Netlify_features-2x_inepie" "Cover for My Favorite Netlify features article." 759 426 %}

I noticed a trend of moving sites to SSGs. Most enquiries I had this year were about Gatsby. Since I am not able to produce production-ready React code, I haven’t had the opportunity to work with Gatsby yet. I was using mostly Jekyll, Hugo, and Hexo this year. I am very interested to learn more about Gatsby and Eleventy, as I hear great things about it wherever I look.

## Shopify

From time to time, I have the opportunity to work with Shopify, and such opportunity emerged this year. I wanted to use this occasion to rant about Shopify. I cannot believe how hard it is to work with Shopify in 2019. We still cannot set the local environment or have access to the backend code. [Theme Kit] is not enough, we need Git support at least. It is frustrating to work on such an environment, and I am starting to understand why Shopify developers have higher rates.

On the other hand, working with the Liquid template engine has its advantages. There is a high number of filters and tags which cover most of the requirements. But sometimes you have to be very skilled and inspired to come up with the solution. Nevertheless, I find it the only positive thing, besides native shop functionality, that is useful. Even plugins are complicated with separated dashboards and steep learning curve.

## Styleguides

Styleguides are the number one thing this year for me. All big projects that I have been part of were built using styleguides, usually on my proposal. Developing standalone components helps in creating a better product in terms of robustness and maintainability. It also helps with understanding templates and layouts by reusing the parts that are repeating. I wrote [an article about style guides], too.

{% cldnrylink "/articles/5-things-to-consider-when-creating-your-css-style-guide/" "5_things_to_consider_when_creating_your_CSS_style_guide-2x_gfuzck" "Cover for 5 Things To Consider When Creating Your First CSS Style Guide article." 759 426 %}

But the most notable advantage of a styleguide is the ability to see all definitions and components in one place. If this is hosted as a website or web app, then it is easily accessible from every device. That means every member of the team can be included in the testing or reviewing phase from the very beginning. It has been proven to be the most significant benefit on all my projects.

## Optimization

Although SSGs are fast itself, I still try to optimize and shave any byte and millisecond wherever possible. There are two main problems/limitations, no matter which system is in use:

- accessibility and
- third-party scripts.

Accessibility is still a massive problem as clients are either not aware of this or don’t have the budget for it. It is a complex topic, and I don’t want to get into it too much as I am not an expert. I just wanted to bring this to attention: try to add the necessary accessibility features, like skip-to-content links, inputs label, and descriptive links. You really don’t have to be the expert to do these things correctly.

> “Remember that every plugin, every integration and every tool comes with a cost, especially when it loads extra scripts and styles. The least you could do is to educate your clients about potential costs whenever introducing a new tool.”

The second problem is third-party scripts. These are the worst. I was optimizing one site, but the scores were terrible. Then I made a simple test -- I disabled all third-party scripts, then I rerun the tests, and scores were superb. If third-party scripts are present, in most cases our hands are tied. I have noticed that Lighthouse introduced new terminology like “First Contentful Paint”, “Speed Index”, and “Time to Interactive”. These new metrics are almost always affected by third-party scripts, and web developers cannot influence what the code does, how does it work and why. That is quite frustrating.

Here is an advice: Remember that every plugin, every integration and every tool comes with a cost, especially when it loads extra scripts and styles. The least you could do is to educate your clients about potential costs whenever introducing a new tool.

## Side projects

Although this has been the busiest year so far, I had some time to work on my side projects. It has been challenging to coordinate my time sometimes, but I find side projects very useful. It is a place to improve my skills and test new techniques.

[SPRO (or Starter Project CLI)] is my side project for creating Gulp environment for every project. It is a package that produces install commands and Gulp tasks for your project based on answers from its questionary. First, you are prompted with questions you have to answer. SPRO does everything else for you: from minimizing, uglifying, linting and optimizing your HTML, CSS, JS, graphic and font files, and much more. I am using SPRO on almost all my projects, from WordPress and Hugo to Shopify and Jekyll. I have learned a lot about creating command-line interface programs while working on this project.

[Starter Project] is predefined Gulp based package that you could use as a starting point for your new project. I have improved it so much that it could be used as a static site generator. It has its limitations, like build speed. Still, I find it very useful in situations where I need to set up a new project very fast. This project keeps me updated with the latest Gulp techniques. This year I switched to Gulp 4.

[Code Line Daily] is a side project where I introduce a new line of code every day. It covers mostly HTML, CSS, JS and PHP one-liners. To my great surprise, it was launched on Product Hunt earlier this year. I have made it [available as a Progressive Web App recently], and it is available as [a Chrome extension], too. I learned how to build a PWA and Chrome extension while developing this project. It runs on Starter Project.

{% cldnrylink "/articles/how-i-built-my-second-progressive-web-app-pwa/" "How_I_built_my_second_Progressive_Web_App_PWA_-2x_jwj4rr" "Cover for How I Built My Second Progressive Web App article." 759 426 %}

Finally, the most challenging side project this year was mentorship. Helping someone that comes from a non-IT job to become a developer is hard. For the past few months, I am working closely with my mentee, and I am very proud to say that everything is working well so far. I am teaching him not only how to code better, but how to use all modern tools. I believe every professional should know at least basics in project management tools and versioning control systems. As he is mastering some advanced stuff like BEM and Sass, I firmly believe he will be able to start his job hunt soon.

## Blogging

Like last year, I wanted to share some numbers with you. But first I have a big announcement: I didn’t redesign my site for a whole year! I am finally happy about how things are looking.

This year I wrote 18 posts, and some of them were published as guest posts on the following sites:

- three articles [on CSS-Tricks],
- one [on Toptal Blog],
- one [on LogRocket], and
- one [on Remote Working Hub].

I still reshare every post on [dev.to], [medium.com], [codementor.io] and social platforms. I have doubled the number of followers on almost every platform except Twitter. It is like someone put a limit of 740 followers on my account. 🧙‍♂️

The traffic improved significantly on all platforms, but no so much on my site. I guess I should invest more time and resources in the promotion. Overall, I am pleased how things are working out.

## Conclusion

I could easily say that 2019 was an excellent year for me. I hope the next one will be even better.

Let’s make the web an even better place!

[my first yearly look back]: /articles/2018-lookback/
[native lazy-loading]: https://web.dev/native-lazy-loading/
[Theme Kit]: https://shopify.github.io/themekit/
[Netlify]: https://netlify.com
[Netlify CMS]: https://www.netlifycms.org/
[a post about my favorite Netlify features]: /articles/my-favorite-netlify-features/
[an article about style guides]: /articles/5-things-to-consider-when-creating-your-css-style-guide/
[SPRO (or Starter Project CLI)]: /side-projects/starter-project/
[Starter Project]: /side-projects/starter-project/
[Code Line Daily]: https://cld.silvestar.codes/
[available as a Progressive Web App recently]: /articles/how-i-built-my-second-progressive-web-app-pwa/
[a Chrome extension]: https://chrome.google.com/webstore/detail/code-line-daily/jfgojeolhopchbgfdgodicnaimmkbpbg
[on CSS-Tricks]: https://css-tricks.com/author/silvestar/
[on Toptal blog]: https://www.toptal.com/css/why-you-need-a-css-developer#trust-nothing-but-brilliant-freelancers
[on LogRocket]: https://blog.logrocket.com/5-things-to-consider-when-creating-your-css-style-guide-7b85fa70039d/
[on Remote Working Hub]: https://content.remote.tools/creating-modern-pixel-perfect-websites-while-freelancing-remotely/
[dev.to]: https://dev.to/starbist
[medium.com]: https://medium.com/@malimirkeccita
[codementor.io]: https://www.codementor.io/@malimirkeccita
