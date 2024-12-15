---
layout: default
title: Infinite-Scrolling Logos In Flat HTML And Pure CSS
tags:
  - blog
  - publications
  - css
  - html
date: 2024-05-08 14:00:00
description: Here's a demonstration of a technique that makes it possible to animate logos with as little HTML as possible and a little bit of CSS.
publication: Smashing Magazine
canonical: https://www.smashingmagazine.com/2024/04/infinite-scrolling-logos-html-css/
type: articles-item
---

Remember the HTML `<marquee>` element? It's deprecated, so it's not like you're going to use it when you need some sort of horizontal auto-scrolling feature. That's where CSS comes in because it has all the tools we need to pull it off. Silvestar Bistrović demonstrates a technique that makes it possible with a set of images and as little HTML as possible.

When I was asked to make an auto-scrolling logo farm, I had to ask myself: "You mean, like a `<marquee>`?" It's not the weirdest request, but the thought of a `<marquee>` conjures up the "old" web days when Geocities ruled. What was next, a repeating sparkling unicorn GIF background?

If you're tempted to reach for the `<marquee>` element, don't. [MDN has a stern warning about it right at the top of the page](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/marquee):

> "Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible [...] Be aware that this feature may cease to work at any time."

That's fine because whatever infinite scrolling feature `<marquee>` is offered, we can most certainly pull off in CSS. But when I researched examples to help guide me, I was surprised to find very little on it. Maybe auto-scrolling elements aren't the rage these days. Perhaps the sheer nature of auto-scrolling behavior is enough of an accessibility red flag to scare us off.

Whatever the case, we have the tools to do this, and I wanted to share how I went about it. This is one of those things that can be done in lots of different ways, leveraging lots of different CSS features. Even though I am not going to exhaustively explore all of them, I think it's neat to see someone else's thought process, and that's what you're going to get from me in this article.

## What we're making

But first, here's an example of the finished result:

{% codepen "CiTA" "bGZYBrj" "dark" "result" 500 false true %}

The idea is fairly straightforward. We want some sort of container, and in it, we want a series of images that infinitely scroll without end. In other words, as the last image slides in, we want the first image in the series to directly follow it in an infinite loop.

So, here's the plan: We'll set up the HTML first, then pick at the container and make sure the images are correctly positioned in it before we move on to writing the CSS animation that pulls it all together.

## Existing examples

Like I mentioned, I tried searching for some ideas. While I didn't find exactly what I was looking for, I did find a few demos that provided a spark of inspiration. What I really wanted was to use CSS only while not having to "clone" the marquee items.

Geoff Graham's "[Sliding Background Effect](https://css-tricks.com/creating-a-css-sliding-background-effect/)" is close to what I wanted. While it is dated, it did help me see how I could intentionally use `overflow` to allow images to "slide" out of the container and an animation that loops forever. It's a background image, though, and relies on super-specific numeric values that make it tough to repurpose in other projects.

{% codepen "smashingmag" "LYvLvGz" "dark" "result" 500 false true %}

There's another great example from [Coding Journey](https://codepen.io/Coding_Journey) over at CodePen:

{% codepen "smashingmag" "yLrXrVY" "dark" "result" 500 false true %}

The effect is what I'm after for sure, but it uses some JavaScript, and even though it's just a light sprinkle, I would prefer to leave JavaScript out of the mix.

Ryan Mulligan's "[CSS Marquee Logo Wall](https://codepen.io/hexagoncircle/pen/wvmjomb?editors=1000)" is the closest thing. Not only is it a logo farm with individual images, but it demonstrates how CSS masking can be used to hide the images as they slide in and out of the container. I was able to integrate that same idea into my work.

{% codepen "smashingmag" "ExJXJZm" "dark" "result" 500 false true %}

But there's still something else I'm after. What I would like is the smallest amount of HTML possible, namely markup that does not need to be duplicated to create the impression that there's an unending number of images. In other words, we should be able to create an infinite-scrolling series of images where the images are the only child elements in the "marquee" container.

I did find a few more examples in other places, but these were enough to point me in the right direction. Follow along with me.

## The HTML

Let's set up the HTML structure first before anything else. Again, I want this to be as "simple" as possible, meaning very few elements with the shortest family tree possible. We can get by with nothing but the "marquee" container and the logo images in it.

```html
<figure class="marquee">
  <img class="marquee__item" src="logo-1.png" width="100" height="100" alt="Company 1">
  <img class="marquee__item" src="logo-2.png" width="100" height="100" alt="Company 2">
  <img class="marquee__item" src="logo-3.png" width="100" height="100" alt="Company 3">
</figure>
```

This keeps things as "flat" as possible. There shouldn't be anything else we need in here to make things work.

## Setting up the container

Flexbox might be the simplest approach for establishing a row of images with a gap between them. We don't even need to tell it to flow in a row direction because that's the default.

```css
.marquee {
  display: flex;
}
```

I already know that I plan on using absolute positioning on the image elements, so it makes sense to set relative positioning on the container to, you know, *contain* them. And since the images are in an absolute position, they have no reserved height or width dimensions that influence the size of the container. So, we'll have to declare an explicit `block-size` (the logical equivalent to `height`). We also need a maximum width so we have a boundary for the images to slide in and out of view, so we'll use `max-inline-size` (the logical equivalent to `max-width`):

```css
.marquee {
  --marquee-max-width: 90vw;

  display: flex;
  block-size: var(--marquee-item-height);
  max-inline-size: var(--marquee-max-width);
  position: relative;
}
```

Notice I'm using a couple of CSS variables in there: one that defines the marquee's height based on the height of one of the images (`--marquee-item-height`) and one that defines the marquee's maximum width (`--marquee-max-width`). We can give the marquee's maximum width a value now, but we'll need to formally register and assign a value to the image height, which we will do in a bit. I just like knowing what variables I am planning to work with as I go.

Next up, we want the images to be hidden when they are outside of the container. We'll set the horizontal overflow accordingly:

```css
.marquee {
  --marquee-max-width: 90vw;

  display: flex;
  block-size: var(--marquee-item-height);
  max-inline-size: var(--marquee-max-width);
  overflow-x: hidden;
  position: relative;
}
```

And I _really_ like the way Ryan Mulligan used a CSS mask. It creates the impression that images are fading in and out of view. So, let's add that to the mix:

```css
.marquee {
  display: flex;
  block-size: var(--marquee-item-height);
  max-inline-size: var(--marquee-max-width);
  overflow-x: hidden;
  position: relative;
  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 20%,
    hsl(0 0% 0% / 1) 80%,
    hsl(0 0% 0% / 0)
  );
  position: relative;
}
```

Here's what we have so far:

{% codepen "CiTA" "MWRvpdp" "dark" "result" 500 false true %}

## Positioning the marquee items

Absolute positioning is what allows us to yank the images out of the document flow and manually position them so we can start there.

```css
.marquee__item {
  position: absolute;
}
```

That makes it look like the images are completely gone. But they're there --- the images are stacked directly on top of one another.

Remember that CSS variable for our container, `--marquee-item-height`? Now, we can use it to match the marquee item height:

```css
.marquee__item {
  position: absolute;
  inset-inline-start: var(--marquee-item-offset);
}
```

To push marquee images outside the container, we need to define a `--marquee-item-offset`, but that calculation is not trivial, so we will learn how to do it in the next section. We know what the `animation` needs to be: something that moves linearly for a certain duration after an initial delay, then goes on infinitely. Let's plug that in with some variables as temporary placeholders.

```css
.marquee__item {
  position: absolute;
  inset-inline-start: var(--marquee-item-offset);
  animation: go linear var(--marquee-duration) var(--marquee-delay, 0s) infinite;
}
```

To animate the marquee items infinitely, we have to define two CSS variables, one for the duration (`--marquee-duration`) and one for the delay (`--marquee-delay`). The duration can be any length you want, but the delay should be calculated, which is what we will figure out in the next section.

```css
.marquee__item {
  position: absolute;
  inset-inline-start: var(--marquee-item-offset);
  animation: go linear var(--marquee-duration) var(--marquee-delay, 0s) infinite;
  transform: translateX(-50%);
}
```

Finally, we will translate the marquee item by `-50%` horizontally. This small "hack" handles situations when the image sizes are uneven.

{% codepen "CiTA" "poYKLqx" "dark" "result" 500 false true %}

## Animating the images

To make the animation work, we need the following information:

- Width of the logos,
- Height of the logos,
- Number of items, and
- Duration of the animation.

Let's use the following configurations for our set of variables:

```css
.marquee--8 {
  --marquee-item-width: 100px;
  --marquee-item-height: 100px;
  --marquee-duration: 36s;
  --marquee-items: 8;
}
```

Note: _I'm using the BEM modifier `.marquee--8` to define the animation of the eight logos. We can define the animation keyframes now that we know the `--marquee-item-width` value._

```css
@keyframes go {
  to {
    inset-inline-start: calc(var(--marquee-item-width) * -1);
  }
}
```

The animation moves the marquee item from right to left, allowing each one to enter into view from the right as it travels out of view over on the left edge and outside of the marquee container.

Now, we need to define the `--marquee-item-offset`. We want to push the marquee item all the way to the right side of the marquee container, opposite of the animation end state.

You might think the offset should be `100% + var(--marquee-item-width)`, but that would make the logos overlap on smaller screens. To prevent that, we need to know the minimum width of all logos combined. We do that in the following way:

```css
calc(var(--marquee-item-width) * var(--marquee-items))
```

But that is not enough. If the marquee container is too big, the logos would take less than the maximum space, and the offset would be within the container, which makes the logos visible inside the marquee container. To prevent that, we will use the `max()` function like the following:

```css
--marquee-item-offset: max(
  calc(var(--marquee-item-width) * var(--marquee-items)),
  calc(100% + var(--marquee-item-width))
);
```

The `max()` function checks which of the two values in its arguments is bigger, the overall width of all logos or the maximum width of the container plus the single logo width, which we defined earlier. The latter will be true on bigger screens and the former on smaller screens.

{% codepen "CiTA" "NWJzMKz" "dark" "result" 500 false true %}

Finally, we will define the complicated animation delay (`--marquee-delay`) with this formula:

```css
--marquee-delay: calc(var(--marquee-duration) / var(--marquee-items) * (var(--marquee-items) - var(--marquee-item-index)) * -1);
```

The delay equals the animation duration divided by a quadratic polynomial (that's what ChatGPT tells me, at least). The quadratic polynomial is the following part, where we multiply the number of items and number of items minus the current item index:

```css
var(--marquee-items) * (var(--marquee-items) - var(--marquee-item-index))
```

Note that we are using a negative delay (`* -1`) to make the animation start in the "past," so to speak. The only remaining variable to define is the `--marquee-item-index` (the current marquee item position):

```css
.marquee--8 .marquee__item:nth-of-type(1) {
  --marquee-item-index: 1;
}
.marquee--8 .marquee__item:nth-of-type(2) {
  --marquee-item-index: 2;
}

/* etc. */

.marquee--8 .marquee__item:nth-of-type(8) {
  --marquee-item-index: 8;
}
```

Here's that final demo once again:

{% codepen "CiTA" "bGZYBrj" "dark" "result" 500 false true %}

## Motion sensitivities

While the animation isn't exactly the most complex and wild thing you'll find, it still could be a trigger for those with motion sensitivities due to a vestibular disorder. We can slow or eliminate the animation with the `prefers-reduced-motion` media query:

```css
@media (prefers-reduced-motion) {
  .marquee__item {
    animation-play-state: paused;
  }
}
```

This does the job, but we could do a little better to make sure more of the logos are visible when the animation is off.

```css
@media (prefers-reduced-motion) {
  .marquee {
    justify-content: space-evenly;
    mask-image: unset;
  }

  .marquee__item {
    position: unset;
    inset-inline-start: unset;
    transform: unset;
  }

  @keyframes go {
    to {
      inset-inline-start: unset;
    }
  }
}
```

A more heavy-handed approach would be to add a button or some other control that toggles between play and pasued states, but whether or not you go that route will depend on your project requirements and whether the animation is essential to your interface.

## Further improvements

This solution could be better, especially when the logos are not equal widths. To adjust the gaps between inconsistently sized images, we could calculate the delay of the animation more precisely. That is possible because the animation is linear. I've tried to find a formula, but I think it needs more fine-tuning, as you can see:

{% codepen "CiTA" "eYXKryN" "dark" "result" 500 false true %}

Another improvement we can get with a bit of fine-tuning is to prevent big gaps on wide screens. To do that, set the `max-inline-size` and declare `margin-inline: auto` on the `.marquee` container:

{% codepen "CiTA" "rNRKKNW" "dark" "result" 500 false true %}

## Conclusion

What do you think? Is this something you can see yourself using on a project? Would you approach it differently? I am always happy when I land on something with a clean HTML structure and a pure CSS solution. You can see the final implementation on the [Heyflow website](https://heyflow.com/).
