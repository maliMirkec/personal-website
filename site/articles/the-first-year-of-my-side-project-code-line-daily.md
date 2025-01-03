---
layout: default
title: "The first year of my side project: Code Line Daily"
date: 2020-07-21 09:33:35
tags:
  - blog
  - cld
  - chrome extension
  - open source
description: A year since launching my side project Code Line Daily, I wanted to reintroduce the project and discuss challenges faced.
project:
  name: Code Line Daily
  href: https://cld.silvestar.codes
type: articles-item
---

It has been a year since I launched my side project: Code Line Daily. In this post, I wanted to reintroduce the project to the community and talk about the challenges along the way.

<!-- more -->

## About the project

[Code Line Daily] is a website that is dedicated to highlighting a single line of code that makes a significant impact in an every-day job of a developer. The project was [featured on the Product Hunt], to my big surprise, and it gathered 150 upvotes, too.

As a part of the Code Line Daily project, I developed the following features:

- scheduled posting,
- CMS implementation,
- an API for fetching the data and posting to Twitter,
- auto-post on Twitter,
- on-the-fly image creation,
- RSS feed,
- offline support,
- a widget featured on my personal site, and
- a browser extension for Chrome.

I have used my other side project called [Starter Project] as a starting point. I customized the original project, and it grew to become some sort of static generator. It may not be perfect, but it works out for me.

## Challenges

The original project was [built over a weekend] last summer. I had the idea, I had the time, and I just went for it. Since the project gained a bit of traction, I realized that I might do some things to improve it.

First, I [asked the community] for the feedback [on the design]. I got a few fair comments which I took into account. After a few smaller iterations, I implemented the design. I should say that I am not a designer by no means, and I was surprised how quickly I came up with it.

The next challenge was to create a scheduling functionality. Since the project falls under “static sites”, I realized I would need at least one build every day. I decided to use Zapier and scheduled daily build every morning. The next step was to figure out how to store the data and display only current and past lines. The final decision was to use JSON file and some custom [Pug] template mixins.

{% cldnryfetch "cld-coggle_s7nfvf" "A graph of the Code Line Daily architecture." %}

Since I used the JSON file, I figured I could set up [Netlify CMS]. The reason was to be able to add a new line from my mobile using a mobile browser. You could [add new lines], too.

Next, I wanted to be able to post a new line every day on Twitter. I created a lambda function that checks if the line is already published and then publishes a new tweet. Again I used [Zapier] to trigger the post-to-twitter action every day 1 hour after the morning build (just in case).

To make the most out of Twitter posting, I wanted to post the image as the image might be better for engaging the users. To create an image for every line, I had to develop an SVG that could be used as a template. Creating dynamic image was a challenge because the SVG text element is restricted to final dimensions. I had to calculate the size of the text to make it right. One person commented that Twitter content might be better. I have updated the text, too.

Next, as a part of the project, I wanted to add the [RSS feed]. Building the RSS feed using only Pug was also something I never did. It turns out it is not that hard to do it, but it might be a challenge to create a valid feed since RSS file doesn’t allow any mistakes.

Last year I learned about [Workbox], a library that helps to create an offline experience by taking advantage of features used to build Progressive Web Apps. After I integrated Workbox, the site became available offline. It could be installed on your mobile device, too.

Finally, I created the Code Line Daily widget and put it on my [personal site’s homepage]. The widget fetches a random line from the API and displays it as a fancy little component. You could see the prototype [in the CodePen].

Another person suggested that it might be a good idea to build [a browser extension]. When a user opens a new tab, the latest line would be displayed. I have never developed a browser extension before. Still, after learning about it, I figured I might be able to do it. And I did, indeed.

## Conclusion

During the last year, I dedicated a lot of my time to this project. Most of the time, I was having fun developing these features, but I struggled with the content. Even if it was a single line per day, it was still a challenge for me. Writing content is hard.

On the other hand, if I could pinpoint a sole benefit from this project, it would be dedication. Running an ongoing project might be a real struggle, but sticking to it gave me much more satisfaction than regrets. Not only that, but I also started another project about mentoring. Part of that project is running the [UI Dev newsletter], which I am beginning to enjoy more and more with every new issue.

P.S. I am aware my project is not very popular. I always wanted to learn more about the marketing and promotion aspects of this project. If you have any suggestion on how to promote this project, please [contact me].

[Code Line Daily]: https://cld.silvestar.codes
[featured on the Product Hunt]: https://www.producthunt.com/posts/code-line-daily
[Starter Project]: /side-projects/starter-project/
[built over a weekend]: /articles/announcing-code-line-daily/
[asked the community]: https://dev.to/starbist/could-you-review-my-design-please-3fc6
[on the design]: https://projects.invisionapp.com/prototype/Code-Line-Daily-cjzlr00lz002fan01i2i608k3/play/a9d28b19
[Pug]: https://pugjs.org/api/getting-started.html
[Netlify CMS]: https://decapcms.org/
[add new lines]: https://cld.silvestar.codes/commit/
[Zapier]: https://zapier.com/
[RSS feed]: https://cld.silvestar.codes/rss.xml
[Workbox]: https://developers.google.com/web/tools/workbox
[personal site’s homepage]: /
[in the CodePen]: https://codepen.io/CiTA/pen/eYNMvOa
[a browser extension]: https://chrome.google.com/webstore/detail/code-line-daily/jfgojeolhopchbgfdgodicnaimmkbpbg
[UI Dev newsletter]: /side-projects/ui-dev-newsletter/
[contact me]: /contact/
