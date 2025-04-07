---
layout: default
title: "Using requestAnimationFrame makes smoother animations"
date: 2025-04-07 08:00:00
og_img: jj2_qm26kn
tags:
  - zoo
  - javascript
description: "JavaScript Jack Crevalle says: Don't forget the lang attribute to define the default language."
type: articles-item
---

{% cldnryfetch "jj2_qm26kn" "Poorly drawn jerboa with a text in a speech bubble: “Use requestAnimationFrame to sync updates with the browser’s refresh rate.”" false true "center plain" %}

JavaScript Jack Crevalle says:

> Use `requestAnimationFrame` to sync updates with the browser’s refresh rate.

And here’s why:

{% note "Pros" %}
- It makes animations look smoother.
- It helps animations run at the right time, not too fast or slow.
- It’s better than using `setTimeout` or `setInterval`, which can cause jank or inaccurate movement.
- It saves power because it stops running when the page isn’t visible.
- It helps the browser work more efficiently.
{% endnote %}

Here are some tips for using `localStorage`.

{% note "Tips" %}
- Only use `requestAnimationFrame` for animations or movement, but don’t use it for loading data or running background tasks.
- Make sure you don’t start the same animation loop more than once.
- Stop the animation when it’s done or when it’s unnecessary so it doesn’t keep running.
- If someone has turned on “reduce motion” in their settings, skip or simplify the animation.
- Don’t mix reading and changing styles in the same frame — that can make the animation slower.
{% endnote %}

And here’s a demo where a circle smoothly follows the mouse pointer:

{% codepen "CiTA" "emYoKoo" "dark" "result" "450" false false true %}
