---
title: Be careful with logical properties and transpiling CSS
date: 2025-03-17 11:00:00
description: Read how we resolved a bug with logical properties, writing mode,
  and transpiled code.
tags:
  - blog
  - css
type: articles-item
layout: default
---
At Heyflow, we started to use many modern CSS features, and logical properties are one of them. Since not all visitors use the most recent browser versions, we must transpile our CSS code. To achieve that, we are using PostCSS and its [PostCSS Logical Properties and Values plugin](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-logical). Recently, we noticed a bug when using logical properties and writing mode.

## The bug

[Our competitor's pages](https://heyflow.com/heyflow-vs-typeform/) had a component that showed side-by-side videos. To distinguish products, we placed a vertical text next to each video. We noticed the text was misplaced.

{% cldnryfetch "heyflow-bug\_pflgdg" "Screenshot of Heyflow vs Typeform page with incorrectly placed labels." false true %}

## The problem

The bug started to show when we introduced PostCSS to our project. The PostCSS Logical Properties and Values plugin transpiles logical properties to physical properties. We are using `writing-mode: vertical-lr`, and the PostCSS Logical Properties and Values plugin is unaware that we switched the axis. It uses the default setting because the site uses the right-to-left mode.

This code:

```css
.label {
  position: absolute;
  inset-block-start: 0;
  inset-inline-end: 1rem;
  writing-mode: vertical-lr;
}
```

transpiles to:

```css
.label {
  position: absolute;
  top: 0;
  right: 1rem;
  writing-mode: vertical-lr;
}
```

## The fix

We found out that the easiest way to fix this problem is to switch to physical properties in this particular case. It isn't the most elegant fix, but it works.

```css
.label {
  position: absolute;
  left: 0;
  bottom: 1rem;
  writing-mode: vertical-lr;
}
```

{% cldnryfetch "heyflow-fix\_kkbcqh" "Screenshot of Heyflow vs Typeform page with incorrectly placed labels." false true %}

## Conclusion

We often rely on tools like PostCSS for better workflow, but sometimes, we need to adjust our code for specific situations. So be careful when using tools like PostCSS and be ready to adapt to edge-case scenarios.