---
layout: index
title: How to create slides with HTML and CSS
date: 2022-10-27 10:00:00
tags:
  - blog
  - html
  - css
thumbnail: How_to_create_slides_with_HTML_and_CSS_mpiafo
descriptionAlt: Did you know that you could create slides with HTML and CSS only? Let’s see how.
description: Discover how to create stunning CSS-only slides with my step-by-step guide. Learn how to use advanced CSS techniques to make engaging presentations.
type: articles-item
sections2:
  - type: banner-beta
    banner: newsletter
---

Did you know that you could create slides with HTML and CSS only? Let’s see how.

{% codepen "CiTA" "XWYrMjO" "dark" "result" "450" false false true %}

## HTML

HTML structure consists of slides container and slides items.

```html
<div class="slides">
  <div class="slides__item">...</div>
  <div class="slides__item">...</div>
</div>
```

## CSS

Let’s start with CSS Variables. We will need the following:

- `--slides-font-size`, for setting the font size,
- `--slides-height`, for setting the height of the slides items,
- `--slides-inline`, for setting padding and scrollbar width,
- `--slides-bg1` and `--slides-bg2`, for slides items background colors, and
- `--slides-color`, for slides items text color.

```css
.slides {
  --slides-font-size: 10vh;
  --slides-height: 100vh;
  --slides-inline: 10px;
  --slides-bg1: hotpink;
  --slides-bg2: dodgerblue;
  --slides-color: white;
}

@supports (height: 100dvh) {
  .slides {
    --slides-height: 100dvh;
    --slides-font-size: 10dvh;
  }
}
```

I’ve decided to try the new dynamic `dvh` units. Unfortunately, it isn’t globally supported yet, so I had to check if browsers support it.

### Slides container

To simulate the slides effect, we will limit the container’s height to the viewport’s height by using `100vh`, or, in case dynamic units are supported, `100dvh`. I’ve used viewport units for font sizing, too.

```css
.slides {
  color: var(--slides-color);
  font-family: cursive;
  font-size: var(--slides-font-size);
  line-height: 1;
  max-height: var(--slides-height);
  overflow-y: auto;
}
```

### Slides items

Slides items are flexbox items with centered content with a minimum height of 100% of the viewport height. That means the item will consume the whole viewport, which emulates a single slide.

_Note that centered content means that you must wrap the inner content in a `div` if you have more than one child._

Every other slide has a different background color, distinguishing them from each other.

```css
.slides__item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: var(--slides-inline);
  min-height: var(--slides-height);
  position: relative;

  &:nth-child(odd) {
    background-color: var(--slides-bg1);
  }

  &:nth-child(even) {
    background-color: var(--slides-bg2);
  }

  a {
    color: inherit;
  }
}
```

### The slides effect

So far, we have a regular page that behaves normally. To enable the slides effect, we will use [CSS Scroll Snap](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap/Basic_concepts).

CSS Scroll Snap means that the regular scroll experience is enhanced to adjust the scrolling position to desired items. That “adjustment” effect is called snap.

- The `scroll-snap-type: y mandatory` declaration enables snapping on the vertical axis.
- The `scroll-snap-align: start` declaration tells the browser to “adjust” the scroll position to the top of the container (in our case, the vertical axis).
- The `scroll-snap-stop: always` declaration tells the browser to snap only one item at a time.

```css
@supports (scroll-snap-type: y mandatory) {
  .slides {
    scroll-snap-type: y mandatory;

    .slides__item {
      scroll-snap-align: start;
      scroll-snap-stop: always;
    }
  }
}
```

The whole block is placed inside the `@supports (scroll-snap-type: y mandatory)` which enables snapping only when supported.

### Reduced motion

I've tried to disable the smooth scrolling by taking advantage of the `scroll-behavior` property, but you cannot do it.

Maybe there could be a value that unsets the scroll behavior. For example, `scroll-behavior: none`.

Or, maybe there could be a `snap-scroll-bahaviour` property that enables or disables scroll behavior.

### Bonus: styled scrollbars

We could style scrollbars to make our slides feel more like an app. There are three properties that you could define:

- scrollbar background color,
- scrollbar foreground color, and
- the width of the scrollbar.

_Note that you must use prefixed selectors._

```css
.slides {
  scrollbar-color: var(--snap-bg1) var(--snap-bg2);

  &::-webkit-scrollbar {
    width: var(--snap-inline);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--snap-bg1);
  }

  &::-webkit-scrollbar-track {
    background-color: var(--snap-bg2);
  }
}
```

## Conclusion

There you have it, CSS-only slides. What I love about this solution is that it is responsive and works well on almost every device.

I already made a few slides on my site using this solution. You can see them in the following links:

- [Why I never understood CSS-in-JS](/slides/why-i-never-understood-css-in-js/)
- [Inspirational mentoring slides](/side-projects/ui-dev-mentoring/slides/inspirational/)
- [Learning mentoring slides](/side-projects/ui-dev-mentoring/slides/learning/)
- [Coding mentoring slides](/side-projects/ui-dev-mentoring/slides/coding/)
- [Useful mentoring slides](/side-projects/ui-dev-mentoring/slides/useful/)
- [Hire me](/slides/hire-me/)
