---
layout: default
title: Transition between pages smoothly with a single line of code
date: 2023-06-26 10:00:00
tags:
  - blog
  - css
  - view transitions
description: By adding a meta tag with the name ‘view-transition,’ you can enable smooth page transitions.
type: articles-item
---

{% note %}
This technique is deprecated. [See updated version](/articles/transition-between-pages-smoothly-with-a-single-line-of-code-2024/).
{% endnote %}

[CSS View Transitions](https://developer.chrome.com/docs/web-platform/view-transitions/) is one of the latest additions to Chromium-based browsers, and I decided to try it.

I was following [Dave's instructions](https://daverupert.com/2023/05/getting-started-view-transitions/), and I immediately noticed something that I liked a lot. As soon as I enabled the View Transitions in my browser (since it is still an experimental technology) and added `<meta name="view-transition" content="same-origin">` to every page of my site, I noticed the transition was already working.

{% video "https://res.cloudinary.com/starbist/image/upload/w_759,q_100/v1687771538/Large_GIF_1458x916_qd6iqv" 759 477 "autoplay" "loop" "mute" true %}

It works in the most basic mode, fading out the current page and fading in the visited page, which is a thousand times better than the default behavior (in my humble opinion). And there you have it—fully functional transitions between your website pages with a single line of code.
