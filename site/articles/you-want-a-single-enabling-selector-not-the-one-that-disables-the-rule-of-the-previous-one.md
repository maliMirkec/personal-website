---
layout: index
title: You want enabling CSS selectors, not disabling ones
date: 2021-03-08 11:23:50
tags:
  - blog
  - css
thumbnail: you-want-a-single-enabling-selector-not-the-one-that-disables-the-rule-of-the-previous-one_rjvsoa
description: Learn about the importance of using the correct CSS selector and avoid the common mistake of overwriting previous styles.
type: articles-item
sections2:
  - type: banner-beta
    banner: newsletter
---

An enabling selector is what I call a selector that does a job without disabling the particular rule. I'll explain using the following example.

Let's say we have list items and we want to add the margin to every one except the last one.

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
  <li>Item 5</li>
<ul>
```

Here's the usual, disabling way.

```css
li {
  margin-bottom: 1em;
}

li:last-child {
  margin-bottom: 0;
}
```

First, we add `margin-bottom` to all elements. Then, we disable the bottom margin on the last element. I call this technique disabling selector since the `li:last-child` selector disables the previous selector's rule.

But we could do better using enabling selectors.

```css
li:not(:last-child) {
  margin-bottom: 1em;
}
```

The selector `li:not(:last-child)` is enabling `margin-bottom` on all elements except the last one. There's no need to disable anything. That is much readable and maintainable if you ask me.

Here's another version of the enabling selector for the same example.

```css
li + li {
  margin-top: 1em;
}
```

In this version, we add `margin-top` to all elements that have a previous sibling, which means to all elements except the first one, which doesn't have a previous sibling.

There you have it, enabling selectors that do a better job in less code. Here's the demo:

{% codepen "CiTA" "WNogPdB" "dark" "css,result" "350" false true %}
