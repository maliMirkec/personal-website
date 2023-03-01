---
layout: index
title: How to make a “Raise the Curtains” effect in CSS
date: 2022-03-09 11:00:00
tags:
  - blog
  - publications
  - css
thumbnail: How_to_Make_a_Raise_the_Curtains_Effect_in_CSS_of8w99
descriptionAlt: In this article, I am going to show you how to make the “raise the curtains” effect where the background and content both change color while scrolling over a sticky element.
description: Learn how to create a visually stunning "raise the curtains" effect while scrolling over a sticky element in this step-by-step guide.
publication: CSS Tricks
canonical: https://css-tricks.com/css-raise-the-curtains-effect/
type: articles-item
sections2:
  - type: banner-beta
    banner: newsletter
---

"Raise the curtains" is what I call an effect where the background goes from dark to light on scroll, and the content on top also goes from light to dark while in a sticky position.

Here's an example where I used the effect on a [real-life project](https://www.wundermobility.com/sharing-ready-vehicles/):

<iframe width="1120" height="650" src="https://videopress.com/embed/VJgwbTsL" frameborder="0" allowfullscreen loading="lazy"></iframe>
<script src="https://videopress.com/videopress-iframe.js" defer></script>

Want to know how it's done? I will take you behind the curtain and show you how to raise it, with nothing but HTML and CSS.

## Let's start with the HTML

What we're making is sort of a simplified "raise the curtain" effect like this:

{% cldnry "curtain-effect_vmncby" "Showing the raise the curtains effect from dark blue to wheat." %}

The background and text both change color while scrolling over the element.

I'm keeping things simple for the sake of clarity, but we can stub this out with three elements:

```html
<div class="curtain">
  <div class="invert">
    <h2>Section title</h2>
  </div>
</div>
```

First, we need a container for the curtain, which we'll give a `.curtain` class. Then, inside the `.curtain`, we have the an `.invert` child element that will serve as our "sticky" box. And, finally, we have the content inside this box – a good old-fashioned `<h2>` element for this specific example.

## Let's set up some CSS variables

There are three values we know we'll need upfront. Let's make CSS variables out of them so it's easy to write them into our styles and easily change them later if we need to.

- `--minh` -- The height of the container
- `--color1` -- The light color
- `--color2` -- The dark color

```css
:root {
  --minh: 98vh;
  --color1: wheat;
  --color2: midnightblue;
}
```

## Time to draw the curtain

Next, we can define our `.curtain` element using the following techniques:

- A `linear-gradient` for the "split" background
- `min-height` for the extra space at the bottom of the container

We use the `::after` pseudo-element to add the extra space to the bottom. This way, our "sticky" content will actually stick to the container while scrolling past the `::after` element. It's an illusion.

```css
.curtain {
  /** create the "split" background **/
  background-image: linear-gradient(to bottom, var(--color2) 50%, var(--color1) 50%);
}

/** add extra space to the bottom (need this for the "sticky" effect) **/
.curtain::after {
  content: "";
  display: block;
  min-height: var(--minh);
}
```

## Making sticky content

Next up, we need to make our content "sticky" in the sense that it sits perfectly inside the container as the background and text swap color values. In fact, we already gave the `.curtain`'s child element an `.invert` class that we can use as the sticky container.

Stay with me for a moment – here's how this is going to play out:

- `position: sticky` and `top` define the stickiness and where it sticks.
- `mix-blend-mode: difference` blends the color of the content inside the `<h2>` element into the `.curtain`'s background gradient.
- `display: flex` centers the content for presentation.
- `min-height` defines the height of the container and allows for the extra space at the bottom.
- `color` sets the color of the `h2` heading.

Now to put that into CSS code!

```css
.invert {
  /** make the content sticky **/
  position: sticky;
  top: 20px;

  /** blend the content with the contrast effect **/
  mix-blend-mode: difference;

  /** center the content **/
  display: flex;
  align-items: center;
  justify-content: center;

  /** set the minimum height of the section **/
  min-height: var(--minh);
}

h2 {
  /** set the color of the text **/
  color: var(--color1);
}
```

There are many things going on here, so let's explain each one of them.

First, we have a sticky position that is self-explanatory and flexbox to help [center the content](https://css-tricks.com/centering-css-complete-guide/). Nothing new or particularly tricky about this.

The content's height is set using CSS variable and the value is the same height value as the `.curtain::after` pseudo-element.

The `mix-blend-mode: difference` declaration blends our content with the background. The `difference` value is complicated, but you might visualize it like inverted text color against the background. Here's a nice demo from the CSS-Tricks Almanac showing off the different [`mix-blend-mode`](https://css-tricks.com/almanac/properties/m/mix-blend-mode/) values:

{% codepen "css-tricks" "YzWpPLy" "dark" "result" "550" false true %}

To make the blending work, we need to set the color of our heading. In this case, we're assigning a light color value (`wheat`) to the `--color1` variable.

## "Raise the Curtains" Demo

{% codepen "css-tricks" "YzEERmQ" "dark" "result" "550" false true %}

## Gotchas

I experienced a few problems while working out the details of the "raise the curtain" effect. If you want to add images to the "sticky" content, for example, avoid using images that don't look good when their colors are inverted. Here's a quick demo where I made a simple SVG and transparent PNG image, and it looks good.

{% codepen "CiTA" "ExwRmyp" "dark" "result" "550" false true %}

Another gotcha: there's no way to set `mix-blend-mode: difference` on specific child elements, like headings, while avoiding the effect on images. I discovered there are several reasons why it doesn't work, the first of which is that `position: sticky` cancels the blending.

The same goes when using something like `transform: skewY` on the container to add a little "tilt" to things. I suspect other properties don't play well with the blending, but I didn't go that far to find out which ones.

Here's the demo without scrolling that removes the troubling properties:

{% codepen "CiTA" "ZEXRKxR" "dark" "result" "550" false true %}

## Curtain call!

I enjoyed building this component, and I always love it when I can accomplish something using only HTML and CSS, especially when they work smoothly on every browser.

What will make with it? Is there a different way you would approach a "raise the curtain" effect like this? Let me know in the comments!
