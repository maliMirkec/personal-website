---
layout: default
title: "The :has selector in use"
date: 2025-03-11 14:00:00
tags:
  - blog
  - css
description: Discover the power of the :has selector in CSS with practical examples that simplify your styling process.
type: articles-item
series: :is, :not, :has selectors
---

And we've come to the selector that every CSS developer has hoped for years, the `:has` selector. Here's how I usually use it.

## Example 1: making anchor a block if it contains an image

Let's say you have an image that is wrapped in an anchor. The image's `display` property is `inline` by default. Now, you can change it to `block` globally by targeting all anchors with an `img` element.

```css
a:has(img) {
  display: block;
}
```

## Example 2: adjust the layout based on elements

Imagine two hero components: one with and one without the main image.

{% codepen "CiTA" "NPWaRzE" "dark" "result" "660" false true %}

Before the `:has` selector, we couldn't style these components differently without adding an extra class to the parent element. Now we can do that with the `:has` selector:

```css
.hero:has(.hero__gfx) {
  grid-template-columns: auto 1fr;
  grid-template-areas:
  "gfx title"
  "gfx subtitle"
  "gfx desc";
}
```

We don't have to add any extra class to style these two components differently anymore.

## Example 3: indicating `input` toggle state

Input toggles are not standard `input` elements, so developers usually have to develop a custom solution, and that solution often requires JavaScript. But not anymore. Let's see the new example:

{% codepen "CiTA" "azbygoa" "dark" "result" "330" false true %}

The example is simple:

- it uses two radio `input` elements styled as an input toggle,
- when the radio `input` is checked, the `label` is underlined, indicating the active state.

Before the `:has` selector, to set the active state, we had to rely either on JavaScript or on a precise HTML structure, which would limit the styling possibilities.

In our example, notice how radio inputs are in the separate `div` element used for styling purposes, and `label` elements are direct ancestors of the parent `.toggle` element.

```html
<div class="toggle">
  <label for="check0">Uncheck</label>
  <div class="toggle__indicator">
    <input type="radio" id="check0" name="check" value="0">
    <input type="radio" id="check1" name="check" value="1" checked>
  </div>
  <label for="check1">Check</label>
</div>
```

Now, with the `:has` selector, we can set the active state of the `label` element like this:

```css
.toggle label:hover,
.toggle:has(input[value="0"]:is(:hover, :checked)) label:is(:first-of-type),
.toggle:has(input[value="1"]:is(:hover, :checked)) label:is(:last-of-type) {
  text-decoration: underline;
}
```

If you read the selector out loud, it makes sense:

{% note %}
If the `.toggle` element has the `input` with a `value` of `0`, which is in `hover` or `checked` state, then the `text-decoration` is applied to the first `label` element.
{% endnote %}

## Conclusion

I like any CSS selector that helps me write less JavaScript and HTML code. The `:has` selector is especially powerful and efficient, so it is my new favorite.
