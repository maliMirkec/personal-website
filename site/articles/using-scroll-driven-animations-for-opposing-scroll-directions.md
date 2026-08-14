---
layout: default
title: Using Scroll-Driven Animations for Opposing Scroll Directions
date: 2026-08-14 10:00:00
tags:
  - blog
  - publications
  - css
  - animation
description: Sometimes designers have silly ideas that eventually grow on you. That happened to me with this concept where I had to build columns of items moving in
type: articles-item
publication: CSS Tricks
canonical: https://css-tricks.com/scroll-driven-animations-opposing-scroll-directions/
---

Sometimes designers have silly ideas that eventually grow on you. That happened to me with this concept where I had to build columns of items moving in opposite directions when a user scrolls the page.

{% codepen "CiTA" "019dcdfc-1e41-77c8-afdf-810ebc6f2480" "dark" "result" 550 false true %}

{% note %}
This demo respects reduced motion settings, so you’ll need to enable motion to see the effect. And we’re looking at Chrome and Safari support as I’m writing this.
{% endnote %}

It’s really not as hard as you might think, thanks to modern CSS features, specifically [scroll-driven animations](https://css-tricks.com/scroll-driven-scroll-triggered-scroll-states-and-view-transitions/). Not only that, but it’s fun to make, too! Let me show you how I approached it — and maybe you will want to share how you would do it differently.

## The HTML

The HTML consists of a parent element (`.opposing-columns`), its children (`.opposing-column`), and its children’s children (`.opposing-item`):

```html
<div class="opposing-columns">
  <!-- Column 1 -->
  <div class="opposing-column">
    <div class="opposing-item">...</div>
    <div class="opposing-item">...</div>
    <div class="opposing-item">...</div>
  </div>
  <!-- Column 2 -->
  <div class="opposing-column">
    <div class="opposing-item">...</div>
    <div class="opposing-item">...</div>
    <div class="opposing-item">...</div>
  </div>
  <!-- Column 3 -->
  <div class="opposing-column">
    <div class="opposing-item">...</div>
    <div class="opposing-item">...</div>
    <div class="opposing-item">...</div>
  </div>
</div>
```

This is all we need in the markup. CSS will do the rest!

## Styling the parent container

First off, we’re going to set things up so that this effect only applies to larger screens — there’s no real sense in supporting something like this on smaller screens because we need the additional space for the effect.

```css
/* Just on larger screens */
@media screen and (width >= 40rem) {
  .opposing-columns {
    display: flex;
    gap: 2rem;
    max-inline-size: min(90dvi, 40rem);
    margin-inline: auto;
  }
}
```

## Setting up a “masking” effect

We need to do a few more things with the parent container to get the illusion that items in each `.opposing-column` are disappearing as they scroll past it. The items in the outer columns move upward on scroll, and items in the center column move downward. As they cross the parents’ boundaries, we want them to sorta fade out.

{% video "https://res.cloudinary.com/starbist/video/upload/v1786701248/opposing-scrolling-logos_rh2nuw" 759 498 %}

So, we’re going to do a few things. First, we’ll set a background color variable on the document as a whole:

```css
@media screen and (width >= 40rem) {
  :root {
    --opposing-bg: lightcyan;
    background-color: var(--opposing-bg);
  }

  .opposing-columns {
    /* same styles as before */
  }
}
```

Second, we’ll apply that same background color on the parent’s `:before` and `:after` pseudo-elements:

```css
@media screen and (width >= 40rem) {
  :root {
    --opposing-bg: lightcyan;
    background-color: var(--opposing-bg);
  }

  .opposing-columns {
    /* same styles as before */

    &:before,
    &:after {
      content: "";
      position: absolute;
      inset-inline: 0;
      block-size: calc(var(--opposing-mask) * 3);
      pointer-events: none;
      z-index: 1;
    }
  }
}
```

Notice that we’ve established a stacking context on the pseudos and set them one layer above the parent and its descendants. This is key for masking the items in each column as they scroll in and out of the container. The items are technically sliding *under* the pseudo masks.

Speaking of which, let’s create another variable called `--opposing-mask` that adds vertical space between the parent element and the three columns:

```css
@media screen and (width >= 40rem) {
  :root {
    --opposing-bg: lightcyan;
    --opposing-mask: 3rem;
    background-color: var(--opposing-bg);
  }

  .opposing-columns {
    display: flex;
    gap: 2rem;
    max-inline-size: min(90dvi, 40rem);
    margin-inline: auto;
    margin-block: var(--opposing-mask, 3rem);
    position: relative;
  }
}
```

{% cldnryfetch "scrolling-parent-column-margin_xwtfgs" %}

Let’s do the same thing to the parents’ pseudos, only applying `--opposing-mask` to their `block-size` by a multiple of three. This way, there’s additional vertical space between them and the parent.

```css
@media screen and (width >= 40rem) {
  :root {
    --opposing-bg: lightcyan;
    --opposing-mask: 3rem;
    background-color: var(--opposing-bg);
  }

  .opposing-columns {
    /* same styles as before */

    &:before,
    &:after {
      content: "";
      position: absolute;
      inset-inline: 0;
      block-size: calc(var(--opposing-mask) * 3);
      pointer-events: none;
      z-index: 1;
    }
  }
}
```

{% cldnryfetch "scrolling-parent-pseudo-margin_ih8iks" %}

You might see where this is going. We have a nice amount of space between the parent container and its pseudos. We want the column items to appear as if they are fading out as they scroll out of the parent container. We don’t have to mess with their opacity or anything like that. Instead, we can add background gradients on the pseudos.

The `:before` pseudo is at the top of the container, so we’ll give it a gradient that goes from a solid color that matches the document’s underlying background color to transparent, top-to-bottom. And since the `:after` pseudo sits at the bottom of the parent container, we’ll reverse the gradient so it goes transparent to the document’s background color, bottom-to-top.

```css
@media screen and (width >= 40rem) {
  :root {
    /* same styles as before */
  }

  .opposing-columns {
    /* same styles as before */

    &:before,
    &:after {
      /* same styles as before */
    }

    &:before {
      background-image: linear-gradient(
        to bottom,
        var(--opposing-bg) var(--opposing-mask),
        transparent
      );
      inset-block-start: calc(var(--opposing-mask) * -1);
    }

    &:after {
      background-image: linear-gradient(
        to top,
        var(--opposing-bg) var(--opposing-mask),
        transparent
      );
      inset-block-end: calc(var(--opposing-mask) * -1);
    }
  }
}
```

## The column layouts

Before we get to the magic, we ought to lay out the items in each column. Each column is a flex item inside the parent, which is a flex container. We’ll let them shrink (`flex-shrink: 1`) and grow (`flex-grow: 1`), capping the size at a certain point (`flex-basis: 10rem`).

We can define all that with the [`flex`](https://css-tricks.com/almanac/properties/f/flex/) shorthand property:

```css
@media screen and (width >= 40rem) {
  /* same styles as before */

  .opposing-column {
    flex: 1 1 10rem;
  }
}
```

Now I want those columns to be grid containers so I can use the `gap` property to insert space between items:

```css
@media screen and (width >= 40rem) {
  /* same styles as before */

  .opposing-column {
    flex: 1 1 10rem;
    display: grid;
    gap: 2rem;
  }
}
```

We totally could have used Flexbox here as well to get access to `gap`, but the default layout is set to `row` and we’d have to override that to `column`. Grid is a little more concise in this situation.

## The animation!

This is what you came for, right? We’ve set everything up so that column items can flow in and out of the parent container on scroll. Now we need to add that scrolling behavior.

This is where the `animation-timeline` property comes real handy. Normally, a CSS animation just runs on its own. It starts when the page loads (or after a specific delay you set) and ends after however long you set the duration. With `animation-timeline`, we tell the animation to run based on its scroll position… hence the term “scroll-driven” animation.

We have two supported functions here, [`scroll()`](https://css-tricks.com/almanac/functions/s/scroll/) and [`view()`](https://css-tricks.com/almanac/functions/v/view/). They’re related but super different in that `scroll()` runs the animation based on an element’s scroll *position*. The `view()` function is similar, but tracks the element’s progress as it enters and exits the [scrollport](https://drafts.csswg.org/css-overflow-3/#scrollport) (i.e., the scrollable area of the container it is in).

We’re going with the `view()` function because we’ve set this up where there is a clear scrollable area inside the parent container. We need to run the animation based on where it enters and exits that area rather than the scroll position of the column items.

This is real interesting because we can tell `view()` where exactly we want the animation to start once it *enters* the scrollable area and where to stop once it *exits* that same area. Like this:

```css
/* Official syntax */
animation-timeline: view([ <axis> || <'view-timeline-inset'> ]?);
```

Let’s start by defining the axes:

```css
@media screen and (width >= 40rem) {
  /* same styles as before */

  .opposing-column {
    /* ... */
    animation-timeline: view();
    animation-range: entry cover;
  }
}
```

This is just partially what we want, but what we’re saying is we want the animation to (1) start the very moment is enters the scrollport (`entry`), and (2) end when it completely leaves the area (`cover`). We need to be explicitly about the insets because that’s what establishes the animation’s range relative to where it enters and exits. We want the full range, so the `entry` begins at 0% and the exit is when an item is covered at 100%.

```css
@media screen and (width >= 40rem) {
  /* same styles as before */

  .opposing-column {
    /* ... */
    animation-timeline: view();
    animation-range: entry 0% cover 100%;
  }
}
```

Lastly, we’ll set the animation to run linearly — no need for the items to slow up or down as they scroll.

```css
@media screen and (width >= 40rem) {
  /* same styles as before */

  .opposing-column {
    /* ... */
    animation-timing-function: linear;
    animation-timeline: view();
    animation-range: entry 0% cover 100%;
  }
}
```

OK, great. But what we haven’t done is create an animation. We've set up what we want it to do when it runs, but we need to define the actual movement.

I want to set up three separate CSS animations:

1. One that translates (moves) the items upward in the first column.
2. One that’s the reverse of the first animation for the items in the other column.

We could technically set the first animation on both of the outer columns, but I want a third one that is a little bit offset from the first so those columns appear staggered.

```css
@keyframes scroll1 {
  from { transform: translateY(var(--opposing-mask)); }
  to { transform: translateY(calc(var(--opposing-mask) * -1)); }
}

@keyframes scroll2 {
  from { transform: translateY(calc(var(--opposing-mask) * -1)); }
  to { transform: translateY(var(--opposing-mask)); }
}

@keyframes scroll3 {
  from { transform: translateY(calc(var(--opposing-mask) * .66)); }
  to { transform: translateY(calc(var(--opposing-mask) * -.33)); }
}
```

We can create variables for these, of course, should we ever need to update them:

```css
@media screen and (width >= 40rem) {
  :root {
    --opposing-bg: lightcyan;
    --opposing-mask: 3rem;
    --animation-1: scroll1;
    --animation-2: scroll2;
    --animation-3: scroll3;

    /* ... */
  }
}
```

…and apply them to each column:

```css
@media screen and (width >= 40rem) {
  /* same styles as before */

  .opposing-column {
    /* same styles as before */
  }

  :where(.opposing-column:nth-of-type(1)) {
    animation-name: var(--animation-1);
  }

  :where(.opposing-column:nth-of-type(2)) {
    animation-name: var(--animation-2);
  }

  :where(.opposing-column:nth-of-type(3)) {
    animation-name: var(--animation-3);
  }
}
```

While we’re at it, we should disable the animations to [respect the user’s settings for reduced motion](https://css-tricks.com/almanac/rules/m/media/prefers-reduced-motion/) (and remove the mask, otherwise it might look weird):

```css
@media (prefers-reduced-motion: reduce) {
  .opposing-column {
    animation: unset;

    &:before,
    &:after {
      content: unset;
    }
  }
}
```

## Wrapping up

So yeah, scroll-driven animations are really, really cool. We’re still waiting for Firefox support as I’m writing this, but you can certainly wrap this in `@supports` to provide a default experience that uses the scroll annotations and then set a fallback experience for non-supporting browsers, like running on a normal animation timeline:

```css
@supports (animation-timeline: view()) {
  /* ... */
}
```

This is just toe-dipping into what scroll-driven animations can do, of course. What sort of things have you made or experimented with? Or would you approach this one differently? Let me know!
