---
layout: index
title: I just finished redesigning my site
date: 2020-03-02 07:49:34
tags:
  - blog
categories:
  - redesign
  - serverless
  - hexo
thumbnail: I_just_finished_redesigning_my_site_oy6djs
description: "During the last week, I have been working on redesigning my site. Read all about the changes."
type: articles-item
sections2:
  - type: banner-alpha
    title: I am considering new projects for the 2021.
    desc: I specialized in **HTML**, **CSS**, **JavaScript**, **WordPress**, **Shopify**, and **JAMstack** technologies.
    cta:
      href: /contact/
      title: Hire me ⇢
---

During the last week, I have been working on redesigning my site. Here is the list of all changes:

- refreshed design,
- added dark mode,
- updated Disqus configuration,
- updated responsive images, and
- updated headers.

## Refreshed design

{% cldnry "light-mode_zpgxn1" "Screenshot of the redesigned site - the light mode" %}

Since I am not a designer, I have started with a couple of prototypes on Codepen:

- [Article Card], and
- [Profile Card].

{% codepen "CiTA" "LYVbmKd" "dark" "result" "450" %}

{% codepen "CiTA" "gOpLzMz" "dark" "result" "450" %}

Then I have asked a question about which design is better on Twitter, and most people choose the centred version. I liked that one more, too.

[{% cldnry "tweetcyborg_dknyll" "Twitter screenshot containing the poll" "400" "356" %}](https://twitter.com/malimirkeccita/status/1231233665667149824)

Finally, I have updated HTML and CSS code. I have removed hard-coded sections from the theme, and I used Hexo built-in features.

## Added dark mode

{% cldnry "dark-mode_lo1vph" "Screenshot of the redesigned site - the dark mode" %}

I wanted to add the dark mode to my site, so I introduced CSS Variables to my Scss codebase. I have four major modes:

- `light-mode`,
- `dark-mode`,
- `mixed-mode`, and
- `comment-mode`.

``` scss
@mixin light-mode {
 --color-alpha: #12e09f;
 --color-beta: #e01258;
 --color-gamma: #f5f5f5;
 --color-delta: #C2FAE8;
 --color-epsilon: #FAC2D4;
 --color-chi: #4f4f4f;
 --color-psi: #1f1f1f;
 --color-omega: #fff;
}

@mixin dark-mode {
 --color-alpha: #e01258;
 --color-beta: #12e09f;
 --color-gamma: #3e3e3e;
 --color-delta: #C20A38;
 --color-epsilon: #42AE8C;
 --color-chi: #e1e1e1;
 --color-psi: #fff;
 --color-omega: #1f1f1f;
}

@mixin mixed-mode {
 --color-alpha: #12e09f;
 --color-beta: #FAC2D4;
 --color-gamma: #4f4f4f;
 --color-delta: #e01258;
 --color-epsilon: #C2FAE8;
 --color-chi: #fff;
 --color-psi: #1f1f1f;
 --color-omega: #3e3e3e;
}

@mixin comment-mode {
 --color-gamma: #d5d5d5;
 --color-psi: #1f1f1f;
}
```

The first two are used globally. The third one, `mixed-mode`, is used for pages with forms, like [the Contact page]. The last one, `comment-mode`, is used to style Disqus comments.

## Updated Disqus configuration

I published an article [about page builders] recently, and it gained many responses. I noticed strange behaviour with my Disqus comments: different comments appeared based on different URL parameters. To fix that, I had to use [URL Mapper] to merge all comments based on the correct URL and set the unique identifier:

``` js
this.page.identifier = UNIQUE_PAGE_IDENTIFIER
```

## Updated responsive images

A long time ago, I bookmarked the article [“Images Are Not Static Content“]. The gist of the article is not to serve only static images to users, but images tailored to the needs and context of the browser and user.

Since I am using [Cloudinary service] as my “Dynamic Media Platform”, as they like to call it, I decided to take advantage of the platform.

> “Because images have such a high impact on website performance, images must be tailored according to the capabilities and context of the browser and user.”

I ditched the [hexo-cloudinary] package, a Hexo tag plugin I created before, and I developed a new Hexo tag plugin: [hexo-cldnry]. It uses the Cloudinary Node.js SDK, Cloudinary JavaScript library, and Clients Hints feature for creating the automated responsive images. You could learn more about it on by [reading the Responsive Images Guide].

If you need help setting the Hexo plugin, feel free to [contact me] or [open a new issue on GitHub].

## Updated headers

To be able to use [Client Hints], I had to enable it on Netlify:

``` text
Accept-CH: Downlink,RTT,Device-Memory,Save-Data,DPR,Width
```

Enabling Client Hints helps Cloudinary make better decisions which image to deliver to the end-user. I added Feature Policy headers and now [Security Headers tool] shows A+ score for my site.

## Conclusion

I am quite happy how things turned out. My site is still very performant, which is very important to me.

A personal site redesign is a great way to improve your skillset, but don’t do it too often and without the plan. Here are some of the items from my todo list for the next iteration:

- add Code Line Daily widget on the homepage,
- consider adding a twitter feed, and
- consider investing time in print css.

[Article Card]: https://codepen.io/CiTA/pen/LYVbmKd
[Profile Card]: https://codepen.io/CiTA/pen/gOpLzMz
[the Contact page]: /contact/
[about page builders]: /articles/page-builders-might-not-be-a-good-idea/
[URL Mapper]: https://help.disqus.com/en/articles/1717129-url-mapper
[“Images Are Not Static Content“]: https://css-tricks.com/images-are-not-static-content/
[Cloudinary service]: https://cloudinary.com/
[hexo-cloudinary]: https://github.com/maliMirkec/hexo-cloudinary
[hexo-cldnry]: https://github.com/maliMirkec/hexo-cldnry
[contact me]: /contact/
[open a new issue on GitHub]: https://github.com/maliMirkec/hexo-cldnry/issues/new
[reading the Responsive Images Guide]: https://cloudinary.com/documentation/responsive_images#automating_responsive_images_with_javascript
[Client Hints]: https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/client-hints
[“Properly size images”]: https://web.dev/uses-responsive-images/
[Security Headers tool]: https://securityheaders.com/?q=https%3A%2F%2Fwww.silvestar.codes%2F&followRedirects=on
