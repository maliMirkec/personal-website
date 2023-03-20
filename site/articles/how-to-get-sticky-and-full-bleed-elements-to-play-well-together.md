---
layout: index
title: How to get sticky and full-bleed elements to play well together
date: 2021-01-15 11:08:46
tags:
  - blog
  - publications
  - css
publication: CSS Tricks
canonical: https://css-tricks.com/how-to-get-sticky-and-full-bleed-elements-to-play-well-together/
thumbnail: How_to_Get_Sticky_and_Full-Bleed_Elements_to_Play_Well_Together_o8yswm
description: "I had a unique requirement the other day: to build a layout with full-bleed elements while one element stays stuck to the top."
type: articles-item
sections2:
  - type: banner-beta
    banner: newsletter
---

I had a unique requirement the other day: to build a layout with full-bleed elements while one element stays stuck to the top. This ended up being rather tricky to pull off so I’m documenting it here in case anyone needs to re-create this same effect. Part of the trickiness was dealing with logical positioning on small screens as well.

It’s tough to describe the effect, so I recorded my screen to show what I mean. Pay special attention to the main call to action section, the one with the “Try Domino Today” header.

![Demo.](https://res.cloudinary.com/starbist/image/upload/v1610699818/sc_bkuzrb.gif)

The idea is to display the main call to action on the right side while users scroll past other sections on larger viewports. On smaller viewports, the call to action element has to display after the main hero section with the “Start your trial” header.

There are two main challenges here:

* Make full-bleed elements that don’t interfere with the sticky element
* Avoid duplicating the HTML

Before we dive into a couple of possible solutions (and their limitations), let’s first set up the semantic HTML structure.

## The HTML

When building these kinds of layouts, one might be tempted to build duplicate call-to-action sections: one for the desktop version and the other for the mobile version and then toggle the visibility of them when appropriate. This avoids having to find the perfect place in the HTML and needing to apply CSS that handles both layout needs. I must admit, I am guilty of doing that from time to time. But this time, I wanted to avoid duplicating my HTML.

The other thing to consider is that we’re using the sticky positioning on the `.box--sticky` element, which means it needs to be the sibling of other elements, including full-bleed ones, for it to properly work.

Here’s the markup:

```html
<div class="grid">
  <div class="box box--hero">Hero Box</div>

  <div class="box box--sticky">Sticky Box</div>

  <div class="box box--bleed">Full-bleed Box</div>
  <div class="box box--bleed">Full-bleed Box</div>
  <!-- a bunch more of these -->
</div>
```

## Let’s get sticky

Making sticky elements in a CSS grid layout is pretty straightforward. We add `position: sticky` to the `.box--sticky` element with a `top: 0` offset, indicating where it starts to stick. Oh, and notice that we’re only making the element sticky on viewports larger than 768px.

```css
@media screen and (min-width: 768px) {
  .box--sticky {
    position: sticky;
    top: 0;
  }
}
```

Beware that there is a known issue with sticky positioning in Safari when it’s used with `overflow: auto`. It is documented over [at caniuse](https://caniuse.com/css-sticky) in the known issues section:

{% note %}
A parent with overflow set to auto will prevent position: sticky from working in Safari.
{% endnote %}

Nice, that was easy. Let’s solve the challenge of full-bleed elements next.

## Solution 1: Pseudo-elements

The first solution is something I use often: absolutely positioned pseudo-elements that stretch from one side to side. The trick here is to use a negative offset.

If we are talking about centered content, then the calculation is quite straightforward:

```css
.box--bleed {
  max-width: 600px;
  margin-right: auto;
  margin-left: auto;
  padding: 20px;
  position: relative;
}

.box--bleed::before {
  content: "";
  background-color: dodgerblue;
  position: absolute;
  top: 0;
  bottom: 0;
  right: calc((100vw - 100%) / -2);
  left: calc((100vw - 100%) / -2);
}
```

In short, the negative offset is the width of the viewport, 100vw, minus the width of the element, 100%, and then divided by -2, because we need two negative offsets.

{% codepen "CiTA" "abZPzoX" "dark" "result" "500" false true %}

Beware that there is a known bug when using 100vw, that is also documented over [at caniuse](https://caniuse.com/viewport-units):

{% note %}
Currently all browsers but Firefox incorrectly consider 100vw to be the entire page width, including vertical scroll bar, which can cause a horizontal scroll bar when overflow: auto is set.
{% endnote %}

Now let’s make full-bleed elements when the content is not centered. If you watch the video again, notice that there is no content below the sticky element. We don’t want our sticky element to overlap the content and that is the reason why we don’t have centered content in this particular layout.

First, we are going to create the grid:

```css
.grid {
  display: grid;
  grid-gap: var(--gap);
  grid-template-columns: var(--cols);
  max-width: var(--max-width);
  margin-left: auto;
  margin-right: auto;
}
```

We’re using custom properties which allows us to redefine the maximum width, the gap, and grid columns without redeclaring the properties. In other words, instead of redeclaring the `grid-gap`, `grid-template-columns`, and `max-width` properties, we are re-declaring variable values:

```css
:root {
  --gap: 20px;
  --cols: 1fr;
  --max-width: calc(100% - 2 * var(--gap));
}

@media screen and (min-width: 768px) {
  :root {
    --max-width: 600px;
    --aside-width: 200px;
    --cols: 1fr var(--aside-width);
  }
}

@media screen and (min-width: 980px) {
  :root {
    --max-width: 900px;
    --aside-width: 300px;
  }
}
```

On viewports that are 768px wide and above, we have defined two columns: one with a fixed width, `--aside-width`, and one with that fills the remaining space, 1fr, as well as maximum width of the grid container, `--max-width`.

On viewports smaller than 768px, we have defined a single column and the gap. The maximum width of the grid container is 100% of the viewport, minus gaps on each side.

Now comes the fun part. The content isn’t centered on bigger viewports, so the calculation isn’t as straightforward as you might think. Here’s how it looks:

```css
.box--bleed {
  position: relative;
  z-index: 0;
}

.box--bleed::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: calc((100vw - (100% + var(--gap) + var(--aside-width))) / -2);
  right: calc(((100vw - (100% - var(--gap) + var(--aside-width))) / -2) - (var(--aside-width)));
  z-index: -1;
}
```

Instead of using 100% of the parent’s width, we’re taking into account the widths of the gap and the sticky element. That means the width of the content in full-bleed elements will not exceed the bounds of the hero element. That way, we ensure the sticky element won’t overlap any important piece of information.

The left offset is simpler because we only need to subtract the width of the element (100%), the gap (`--gap`), and the sticky element (`--aside-width`) from the viewport width (100vw).

```css
left: (100vw - (100% + var(--gap) + var(--aside-width))) / -2);
```

The right offset is more complicated because we have to add the width of the sticky element to the previous calculation, `--aside-width`, as well as the gap, `--gap`:

```css
right: ((100vw - (100% + var(--gap) + var(--aside-width))) / -2) - (var(--aside-width) + var(--gap));
```

Now we are sure the sticky element doesn’t overlap any content in full-bleed elements.

{% codepen "CiTA" "KKMbqrm" "dark" "result" "500" false true %}

Here’s the solution with a horizontal bug:

{% codepen "CiTA" "vYKjEyb" "dark" "result" "500" false true %}

And here’s the solution with a horizontal bugfix:

{% codepen "CiTA" "mdELEPp" "dark" "result" "500" false true %}

The fix is to hide overflow on the x-axis of the body, which might be a good idea in general anyway:

```css
body {
  max-width: 100%;
  overflow-x: hidden;
}
```

This is a perfectly viable solution and we could end here. But where’s the fun in that? There’s usually more than one way to accomplish something, so let’s look at another approach.

## Solution 2: Padding calculations

Instead of using a centered grid container and pseudo elements, we could achieve the same effect by configuring our grid. Let’s start by defining the grid just as we did last time:

```css
.grid {
  display: grid;
  grid-gap: var(--gap);
  grid-template-columns: var(--cols);
}
```

Again, we are using custom properties to define the gap and the template columns:

```css
:root {
  --gap: 20px;
  --gutter: 1px;
  --cols: var(--gutter) 1fr var(--gutter);
}
```

We’re showing three columns on viewports smaller than 768px. The center column takes as much space as possible, while the other two are used only to force the horizontal gap.

```css
@media screen and (max-width: 767px) {
  .box {
    grid-column: 2 / -2;
  }
}
```

Note that all grid elements are placed in the center column.

On viewports bigger than 768px, we are defining a `--max-width` variable that limits the width of the inner columns. We’re also defining `--aside-width`, the width of our sticky element. Again, this way we ensure the sticky element won’t be positioned over any content inside the full-bleed elements.

```css
:root {
  --gap: 20px;
}

@media screen and (min-width: 768px) {
  :root {
    --max-width: 600px;
    --aside-width: 200px;
    --gutter: calc((100% - (var(--max-width))) / 2 - var(--gap));
    --cols: var(--gutter) 1fr var(--aside-width) var(--gutter);
  }
}

@media screen and (min-width: 980px) {
  :root {
    --max-width: 900px;
    --aside-width: 300px;
  }
}
```

Next, we are calculating the gutter width. The calculation is:

```css
--gutter: calc((100% - (var(--max-width))) / 2 - var(--gap));
```

…where 100% is the viewport width. First, we are subtracting the maximum width of the inner columns from the width of the viewport. Then, we are dividing that result by 2 to create the gutters. Finally, we are subtracting the grid’s gap to get the correct width of the gutter columns.

{% codepen "CiTA" "VwjRbMK" "dark" "result" "500" false true %}

Now let’s push the `.box--hero` element over so it starts at the first inner column of the grid:

```css
@media screen and (min-width: 768px) {
  .box--hero {
    grid-column-start: 2;
  }
}
```

This automatically pushes the sticky box so it starts right after the hero element. We could also explicitly define the placement of the sticky box, like this:

```css
.box--sticky {
  grid-column: 3 / span 1;
}
```

Finally, let’s make the full-bleed elements by setting `grid-column` to `1 / -1`. That tells the elements to start the content at the first grid item and span through to the last one.

```css
@media screen and (min-width: 768px) {
  .box--bleed {
    grid-column: 1 / -1;
  }
}
```

To center the content, we are going to calculate left and right padding. The left padding is equal to the size of the gutter column, plus the grid gap. The right padding is equal to the size of the left padding, plus another grid gap as well as the width of the sticky element.

```css
@media screen and (min-width: 768px) {
  .box--bleed {
    padding-left: calc(var(--gutter) + var(--gap));
    padding-right: calc(var(--gutter) + var(--gap) + var(--gap) + var(--aside-width));
  }
}
```

Here’s the final solution:

{% codepen "CiTA" "dyXePPj" "dark" "result" "500" false true %}

I prefer this solution to the first one because it isn’t using buggy viewport units.

## Conclusion

I love CSS calculations. Using mathematical operations is not always straightforward, especially when combining different units, like 100%. Figuring out what 100% means is half of the effort.

I also love solving simple, yet complicated layouts, like this one, using only CSS. Modern CSS has native solutions — like the grid, sticky positioning and calculations — that remove complicated and somewhat heavy JavaScript solutions. Let’s leave the dirty work for the browser!

Do you have a better solution or different approach for this? I would be happy to hear about it.
