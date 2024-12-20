---
layout: default
title: Home
ogImageTitle: Home of fearless web developer Silvestar Bistrović
description: I'm building modern, performant, and SEO-optimized websites since 2012 using the best coding practices to deliver the best experience for every user.
type: home
sections:
  - type: hero
    title: Hey, I'm really good at this _without realizing how_
    title_width: 25
    text: Not really — I have been making websites since 2012. I just wanted to use my favorite [Peep Show quote](https://youtu.be/6mSleXflIq8?si=naOp1-USH4B3e75I&t=85).
    text_width: 38
    text2: So, if you're looking for a professional website developer, you've come to the right place.
    text2_width: 44
    cta:
      href: /contact/
      title: Contact me
    gfx:
      name: animation
      clamp: clamp(18.75rem, calc(12.981rem + 19.231vw), 25rem)
  - type: banner
    banner: redesign
    sticky: true
  - type: article-list
    title: Latest blog posts
    filter: my-articles
    sorter: date
    exclude: publications
    limit: 6
    cta:
      href: /articles/
      title: All articles
      modifiers:
        - small
  - type: newsletter
  - type: project-list
    title: Featured projects
    filter: portfolio
    limit: 6
    exclude: true
    cta:
      href: /portfolio/
      title: All projects
      modifiers:
        - small
  - type: banner
    banner: consultation
  - type: testimonial-list
    title: Testimonials
    filter: testimonials
    limit: 6
    cta:
      href: /testimonials/
      title: All testimonials
      modifiers:
        - small
---
