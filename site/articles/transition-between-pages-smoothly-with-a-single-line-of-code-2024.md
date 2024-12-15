---
layout: default
title: Transition between pages smoothly with a few lines of CSS code
date: 2024-12-15 21:00:00
tags:
  - blog
  - css
  - view transitions
description: By adding a few lines of CSS you can enable smooth page transitions.
type: articles-item
---

Last year, I wrote about [how to transition between pages smoothly with a single line of code](/articles/transition-between-pages-smoothly-with-a-single-line-of-code/), but CSS View Transitions was an experimental technology, and the syntax is no longer valid.

To make it work, you can add the following CSS rules:

```css
@view-transition {
  navigation: auto;
}

::view-transition-group(*) {
  animation-duration: .33s;
}

::view-transition-old(root) {
  animation: .33s ease-in both leave;
}

::view-transition-new(root) {
  animation: .33s ease-in both enter;
}

@media (prefers-reduced-motion: reduce) {
  ::view-transition-group(*) {
    animation-duration: 0s;
  }
}
```

I like how you can use it inside CSS now. No more `meta` tags.

If you want more control, you must use JavaScript, as [this blog post explains](https://developer.chrome.com/docs/web-platform/view-transitions/).
