---
layout: index
title: Using CSS Variables for reduced motion on a global scale
tags:
  - blog
  - css
thumbnail: Using_CSS_Variables_for_reduced_motion_on_a_global_scale_az0hd2
date: 2021-10-28 14:00:00
description: Learn how to use CSS Variable and prefers-reduced-motion media feature to remove or minimize animations and transitions on global scale.
type: articles-item
sections2:
  - type: banner-beta
    banner: newsletter
    animate: true
---

Do you know of CSS media feature [`prefers-reduced-motion`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)? In short, `prefers-reduced-motion` is a setting that tells us if the user has set the system to remove or minimize animations and transitions.

Here’s the example of the usage:

```css
.selector {
  animation: regularAnimation 1s;
}

@media (prefers-reduced-motion: reduce) {
  .selector {
    animation: reducedAnimation .1s;
  }
}
```

To respect the reduced motion feature doesn’t necessarily mean removing the animation altogether. The animation could be reduced or faster, whichever would make the user feel comfortable consuming, but that is outside of the scope of this article.

So, how do CSS Variables help us? To answer that question, I would like to show you the “regular” way to reduce the motion in CSS. Let’s say we have three elements and three different hover transitions with the same transition duration.

> A quick reminder that you should animate only the following properties to avoid paint and layout recalculations: opacity and transform.
>
> [Learn more at MDN Web Docs](https://developer.mozilla.org/en-US/docs/Tools/Performance/Scenarios/Animating_CSS_properties#css_property_cost).

```css
.selector,
.selector2,
.selector3 {
  transition: transform 1s;
}

.selector:hover {
  transform: rotate(180deg);
}

.selector2:hover {
  transform: skew(5deg);
}

.selector3:hover {
  transform: transformY(-5%);
}
```

To reduce the transition, we could write the following:

```css
@media (prefers-reduced-motion: reduce) {
  .selector,
  .selector2,
  .selector3 {
    animation-duration: .05s;
  }
}
```

There is nothing wrong with this approach, but imagine how big this CSS rule under the `prefers-reduced-motion` media feature would be for all the transitioned elements.

Let’s introduce a CSS Variable that might help us set reduced motion on a global scale.

```css
:root {
  --transition-duration: 1s;
}

.selector,
.selector2,
.selector3 {
  transition: transform var(--transition-duration);
}

@media (prefers-reduced-motion: reduce) {
  :root {
    --transition-duration: .05s;
  }
}
```

This looks much cleaner, doesn’t it? It does to me. And the best thing about it is that we should not care about how many elements that have transitions are there, as long as they use CSS Variable.

We could use multiple transition durations, and it will still look clean:

```css
:root {
  --transition-duration1: 1s;
  --transition-duration2: 500ms;
}

.selector,
.selector2,
.selector3 {
  transition: transform var(--transition-duration1);
}

.selector,
.selector2,
.selector3 {
  transition: transform var(--transition-duration2);
}

@media (prefers-reduced-motion: reduce) {
  :root {
    --transition-duration1: .05s;
    --transition-duration2: .05s;
  }
}
```

I love using CSS Variables, and now that they are widely supported in all modern browsers, just like `prefers-reduced-motion`, there is no reason for you not to use them, too.
