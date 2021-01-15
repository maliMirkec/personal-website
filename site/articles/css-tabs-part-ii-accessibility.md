---
layout: index
title: 'CSS tabs, part II: Accessibility'
tags:
  - blog
categories:
  - css
  - tabs
  - accessibility
date: 2016-11-01 08:39:30
thumbnail: CSS_tabs_part_II_Accessibility_io11di
description: Recently I've been writing about CSS tabs. Topic was surprisingly popular, gaining several thousand users to my page. What was even more surprising were comments about accessibility. I decided to investigate a little bit more and add accessibility to my solution.
type: articles-item
sections2:
  - type: banner-alpha
    title: I am _available_ for a new project.
    desc: I specialized in **HTML**, **CSS**, **JavaScript**, **WordPress**, **Shopify**, and **JAMstack** technologies.
    cta:
      href: /contact/
      title: Hire me ⇢
---

Recently I've been writing about [CSS tabs](https://silvestar.codes/en/articles/how-to-make-tabs-using-only-css/). Topic was surprisingly popular, gaining several thousand users to my page.

What was even more surprising were comments about accessibility. Although my initial idea was to present just a CSS technique for tabs, I decided to investigate a little bit more and add accessibility to my solution.

<!-- more -->

## Existing solutions

CSS tabs are very old topic apparently, I've even found [an article dating back in 2003](http://daniel.glazman.free.fr/weblog/archived/2003_01_05_glazblogarc.html#87183885). And it is a very popular topic, too, search results returned dozens of articles. I decided to document every article in [this Github repository](https://github.com/maliMirkec/css-tabs-list).

_If you have an article that is not in the list, please add it by making a pull request._

## Accessibility

Reading all this articles made me realize that [accessibility](https://en.wikipedia.org/wiki/Web_accessibility) is a major issue nowadays. And accessibility is hard. But that doesn't mean that we should ignore it. Quite the contrary, we should learn it and apply it.

### WAVE

We need to find a tool to test our tabs for accessibility. Web Accessibility Initiative provides us with the list of tools [here](https://www.w3.org/WAI/ER/tools/). I prefer **[WAVE](http://wave.webaim.org/)**, web accessibility evaluation tool, because it is available from Firefox Web Developer Toolbar, under section Tools > "Validate Accessibility".

### ngrok

Since I was developing [locally](https://silvestar.codes/en/articles/perfect-local-server-with-atom/), **WAVE** couldn't access my localhost. I found solution in **[ngrok](https://ngrok.com/)**, a tool that makes tunnels for localhost. To create a tunnel for your localhost, download **ngrok** executable file, place it in project root, open Command Prompt and start it using `ngrok http 9000` command. Last number is the port number of your application which is 9000 in my case. Then open `127.0.0.1:4040` page, copy tunnel URL and paste it in **WAVE** application. Here's how it looks in action (_and yes, that's Pokemon theme for Firefox_):

{% cldnry "ngrok-in-action_u2lpmo" "ngrok in action." %}

### Contrast

**WAVE** detected a couple of contrast errors. That's the easy part. We should use stronger colors for text and lighter colors for background. Visually impaired people shouldn't have problems with reading tabs labels and content now. And there's no errors from **WAVE**, too.

### aria attributes

Our tabs are not yet accessible. To make it accessible for every user, device and tool, we should add **[aria attributes](https://en.wikipedia.org/wiki/WAI-ARIA)**. **aria attributes** are used to add context for elements. That way tools and devices are able to read the content and reproduce it in a way that every user could understand it.

### Screen readers

We should test our tabs in some of the [assistive technology tools](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Web_applications_and_ARIA_FAQ#Assistive_Technologies), because results could help us start adding accessibility. I decided to use **[Jaws](http://www.freedomscientific.com/Products/Blindness/JAWS)** and **[NVDA](http://www.nvaccess.org/)**, both available for free on Windows platform. First thing I noticed, after running these tools, was that `HTML` structure is not suitable for accessibility. We need to add `div` wrappers for tab labels and tab content.

### aria roles

Now we could add **aria attributes**. There are [specific aria roles for tabs](https://whatsock.com/training/matrices/#tablist):

* _tablist_,
* _tab_ and
* _tabpanel_.

Every role could have required and optional attributes. Required attributes are easy, because we know we should add it to an element. Optional attributes are problem: how can we know which ones work and which ones don't? Ideally, every attribute should work. But as I discovered, they don't.

### Trial and error

Because there are so many tools and devices and documentation is overwhelming, I decided to use trial and error method this time. After few hours, I came up with final solution. You could see it in this pen:

{% codepen "CiTA" "LRKEPQ" "dark" "result" %}

### Radio buttons

In previous article, radio inputs were hidden. I decided to use them as a part of design for tabs. Most users should be familiar with radio buttons, as they are widely used on the web.

To position every radio input, we could use absolute position with top and left offsets. Tricky part was to make it responsive. `nth-of-type` selector is used to adjust position for every radio button.

### Interaction

To add some interaction, we should add a little bit of JavaScript. It is mostly used for changing states, like `aria-activedescendant`, `aria-selected` and `aria-expanded`. `HTML` and `CSS` are still used for handling tabs.

### Navigation

Now that radio buttons are visible, user could navigate through tab labels more intuitively using left and right arrow keys.

Also, we should add trigger to help users jump to content from tabs. If a user press "Enter" while on the tab label, matching tab content will be focused.

### Final thought

Accessibility is hard to implement, but non accessible content is even harder to interpret for impaired users. We should try our best and make our content accessible.

But on the other hand, if you're making a solution for targeted audience and there are no special request for accessibility, aria attributes may not be necessary. They are hard to implement and very time consuming.

What do you think? What are your experiences?

Leave a comment below or send [me](https://twitter.com/malimirkeccita) a tweet.
