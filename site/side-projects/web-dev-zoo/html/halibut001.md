---
layout: default
title: "Use meta referrer tag to control referrer information"
date: 2025-03-18 10:00:00
og_img: hh2_mpsl6b
tags:
  - zoo
  - html
description: "HTML Halibut says: Use meta referrer tag to control how much referrer information your site shares."
type: articles-item
---

{% cldnryfetch "hh2_mpsl6b" "Poorly drawn halibut with a text in a speech bubble: “HTML Halibut says: Use meta referrer tag to control how much referrer information your site shares.”" false true "center plain" %}

HTML halibut says:

> Use `meta` `referrer` tag to control how much referrer information your site shares.

And here’s why:

{% note "Benefits" %}
- You can stop websites from seeing too much about where a visitor came from.
- You can stop websites from seeing too much about a visitor’s origin.
- `meta` `referrer` tag helps prevent hackers or trackers from getting details they shouldn’t.
- When users click a link, you decide how much referrer information other websites get.
- Ads and analytics tools use referrer data, and this tag helps you control what they see.
- Browsers might remove referrer information when switching from a secure to an insecure site, but you can manage this.
{% endnote %}

Here are some tips on defining the `meta` `referrer` tag.

{% note "Tips" %}
- Use the `no-referrer` value to prevent sending any referrer info.
- Use the `no-referrer-when-downgrade` value to send referrer information only if the destination is also HTTPS.
- Use the `origin` value to send only the domain, not the full URL.
- Use the `origin-when-cross-origin` value to send full referrer information for same-site links, but only domain for external sites.
- Use the `same-origin` value to send referrer information only for same-site links.
- Use the `strict-origin-when-cross-origin` value to send full referrer information for same-site links, but only domain for HTTPS external sites, and nothing for HTTP.
{% endnote %}

Here’s how to use it:

```html
<meta name="referrer" content="no-referrer">
```
