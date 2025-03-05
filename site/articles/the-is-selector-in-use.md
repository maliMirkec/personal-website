---
layout: default
title: "The :is selector in use"
date: 2025-03-05 12:00:00
tags:
  - blog
  - css
description: Discover the power of the :is selector in CSS with practical examples that simplify your styling process.
type: articles-item
series: :is, :not, :has selectors
---

Last time, [I showed you a few examples of the `:not` selector usage](/articles/the-not-selector-in-use/). Today, I will show you a few practical examples of the `:is` selector.

## Example 1: opposite of `:not()`

Let’s say you want to target all but the last list item.

```css
li:not(:last-of-type) {
  margin-block-end: 1em;
}
```

Now, if you want to target the last item, you can write:

```css
li:last-of-type {
  font-weight: bolder;
}
```

Somehow, my mind makes it easier to comprehend the above code if I use the `:is` selector:

```css
li:is(:last-of-type) {
  font-weight: bolder;
}
```

It looks like the exact opposite of the `:not` selector, and I prefer it that way.

## Example 2: target the modifier

The term “modifier” has been taken from the infamous BEM naming convention, which I still use.

Let’s say we have a list of items and one of the items is active:

```css
.list__item--active {
  color: tomato;
}
```

Here’s another way how we could write it with the `:is` selector:

```css
.list__item:is(.active) {
  color: tomato;
}
```

I prefer the above version, especially when I have to add the `active` class with JavaScript. The `active` class is not only a visual indicator but also tells me that the element is interactive.

## Example 3: target more elements in one row for readability

Here’s another common scenario: target all `p` and `li` children elements.

```css
.my-selector p,
.my-selector li {
  font-size: 1rem;
}
```

Let’s see how the `:is` selector makes this snippet better.

```css
.my-selector :is(p, li) {
  font-size: 1rem;
}
```

We have one line which is always better than multiple lines, if you ask me.

## Example 4: hover, focus, and active states

Before the `:is` selector I was writing hover states like this:

```css
.my-selector:hover,
.my-selector:focus,
.my-selector:active {
  color: tomato;
}
```

With the `:is` selector I can write this in one line:

```css
.my-selector:is(:hover, :focus, :active) {
  color: tomato;
}
```

{% note "Pro tip" %}
If your `:is` selector is too “strong” in specificity, use the `:where` selector, which makes the specificity `0`, but be careful because that could have an undesired outcome.
{% endnote %}

If you’re using VS Code, add this snippet to make typing more efficient.

```json
"Hover Focus Active": {
  "prefix": "*hfa",
  "body": [
    "${1:*}:is(:hover, :focus, :active) {\n\t$2\n}"
  ],
  "description": "State: hover, focus, active"
}
```

Now type `*hfa` and hit tab, and you got yourself a useful `:is` snippet.

## Conclusion

Some will say they could live without the `:is` selector. I could live without it, too, but my life is a bit nicer knowing that I can use the awesome `:is` selector any day and make my code more readable.
