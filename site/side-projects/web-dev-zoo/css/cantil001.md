---
layout: default
title: "Respect the user’s motion settings and reduce animations"
date: 2025-03-25 10:00:00
og_img: cc2_sxfo9c
tags:
  - zoo
  - css
description: "CSS Cantil says: Respect the user’s motion settings and reduce the animations accordingly."
type: articles-item
---

{% cldnryfetch "cc2_sxfo9c" "CSS Cantil says: Respect the user’s motion settings and reduce the animations accordingly." false true "center plain" %}

CSS Cantil says:

> Respect the user’s motion settings and reduce the animations accordingly.

And here’s why:

{% note "Side effects" %}
- Some users have conditions that make animations uncomfortable or hard to handle.
- Less motion means fewer distractions, helping people focus on the content.
- Fewer animations can make the site load and run faster, especially on older devices.
- If someone turns off animations in their settings, your site should follow their preference.
{% endnote %}

Here’s an example of how to respect the user’s motion settings in CSS:

```css
@media (prefers-reduced-motion: reduce) {
  selector {
    /* Disable animations and transitions */
    animation: unset;
    transition: unset;
  }
}
```

Here’s an example of how to respect the user’s motion settings in JS:

```js
// Check if the user prefers reduced motion
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (prefersReducedMotion) {
  // Do something like this
  document.body.classList.add("reduce-motion");
}
```

{% note %}
Not all animations cause problems, but to avoid any issues, it’s best to turn them off.
{% endnote %}
