---
layout: default
title: "The :not selectors in use"
date: 2025-02-16 14:00:00
tags:
  - blog
  - css
description: Discover the power of the :not selector in CSS with practical examples that simplify your styling process.
type: articles-item
series: :is, :not, :has selectors
---

Whenever I use `:is`, `:has`, and `:not` selectors, I am so happy. It’s like a dream come true for this CSS developer. In this article, I will show you a few practical examples of the `:not` selector.

## Example 1: excluding first or last or nth element sibling

This is the most widespread case of the `:not` usage for me.

Let’s say you want to target all but the first list item. It’s so easy with the `:not` selector.

```css
li:not(:first-of-type) {
  margin-block-start: 1em;
}
```

The same is true for the last item.

```css
li:not(:last-of-type) {
  margin-block-end: 1em;
}
```

And for the nth item.

```css
li:not(:nth-of-type(2)) {
  color: tomato;
}
```

No extra classes, no extra markup, just CSS.

## Example 2: excluding sibling that is not the only child

Sometimes, you have to style siblings differently if there is more than one sibling. For example, the cart only has one item, but it needs to have at least 2.

```css
li:not(:only-of-type) {
  color: tomato;
}
```

This is one of my favorite uses of the `:not` selector.

## Example 3: excluding specific sibling

Sometimes, you have to exclude siblings by adding an extra class or attribute. That’s ok, too.

```css
li:not(.active) {
  opacity: 0.5;
}

li:not([aria-current]) {
  font-weight: bolder;
}
```

## Example 4: target children based on parent status

Let’s say you want to style the details’ caret based on custom designs. The `:not` selector is perfect to target the details element when it is not opened.

```css
details:not([open]) summary:after {
  background-image: url(/icons/caret-up.png);
}
```

## Conclusion

These are the most common use cases for the `:not` selector usage for me. Whenever I can achieve something by writing less HTML and CSS, I am so happy, and that is exactly what the `:not` selector has given me.
