---
layout: index
title: 'Oh, the Many Ways to Make Triangular Breadcrumb Ribbons!'
date: 2019-05-15 19:04:01
tags:
  - blog
  - publications
categories:
  - css
  - breadcrumb
  - ribbon
publication: CSS Tricks
canonical: https://css-tricks.com/oh-the-many-ways-to-make-triangular-breadcrumb-ribbons/
thumbnail: Oh_the_Many_Ways_to_Make_Triangular_Breadcrumb_Ribbons_pveunn
description: Let’s have a look at how we can create a row of links that sorta run into each other with a chevron-like shape and notch on each block like you might see in a hierarchical breadcrumb navigation.
project:
  name: Playground
  href: https://play.silvestar.codes/ribbon/
---

_This article was originally published on [CSS-Tricks](https://css-tricks.com/oh-the-many-ways-to-make-triangular-breadcrumb-ribbons/)._

Let’s have a look at how we can create a row of links that sorta run into each other with a chevron-like shape and notch on each block like you might see in a hierarchical breadcrumb navigation.

You’ve probably seen this pattern a lot. It comes up often in things like multi-step forms and site breadcrumbs. For our purposes we’re going to call these “ribbons" so we know what we’re referring to as we go.

<!-- more -->

Like a lot of things on the web, we can make ribbons like these in many ways! I’ve created [a demo page] that brings a variety of them together, like using [CSS triangles], SVG backgrounds, and the CSS `clip-path` property.

## Starting with the HTML structure

For each demo, the HTML structure will largely be the same where we have a `<nav>` that acts as the parent element and then links inside it as the children.

```html
<nav class="ribbon ribbon--modifier" role="navigation" aria-label="breadcrumbs">
  <a class="ribbon__element" href="https://www.silvestar.codes/">Home</a>
  <a class="ribbon__element" href="https://www.silvestar.codes/articles/">Blog</a>
  <a class="ribbon__element" href="https://www.silvestar.codes/articles/building-an-animated-sticky-header-with-custom-offset/" aria-current="page">Post</a>
</nav>
```

Note that these elements should be accessible, according to [A11y Style Guide website]. It’s a good rule to build components with accessibility in mind and introducing accessibility at the very start is the best way to prevent the classic “I forgot to make it accessible" situation.

## Let’s create some baseline styles

When it comes to things like this, we want to make sure the sizing of the elements is done right. For this purpose, we are going to define the font size of the `.ribbon` (that’s what we’re going to call these things) wrapper element and then use `em` units on the child element which are the links themselves.

```css
/* Define font size of the wrapper element */
.ribbon {
  font-size: 15px;
}

/* Use ems to define the size of the ribbon element */
.ribbon__element {
  font-size: 1.5em;
  letter-spacing: 0.01em;
  line-height: 1.333em;
  padding: 0.667em 0.667em 0.667em 1.333em;
}
```

This particular technique would be beneficial for defining the size of the triangle shape for each ribbon because we would use the same sizes to calculate triangle. And since we are using `em` units to calculate the ribbon element size, we could resize all elements by redefining the `font-size` on the wrapper element.

Let’s use [CSS Grid] for the layout because, well, we can. We could do this in a way that offers deeper browser support, but we’ll leave that up to you based on your support requirements.

We are going to define four columns:

- Three for ribbon elements
- One to fix spacing issues. As it is, the right arrow shape would be placed outside of the ribbon component and that could mess up the original layout.

```css
/* The wrapper element
 * We're using CSS Grid, but ensure that meets your browser support requirements.
 * Assuming the use of autoprefixer for vendor prefixes and properties.
 */

.ribbon {
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(auto-fill, 1fr) 1em; /* Auto-fill the three ribbon elements plus one narrow column to fix the sizing issues */
}
```

If you prefer to avoid stretching the ribbon elements, the grid could be defined differently. For example, we could use `max-content` to adjust columns by content size. (Note, however, that `max-content` [is not very well supported] yet in some key browsers.)

```css
/* Make ribbon columns adjust to the maximum content size */
.ribbon--auto {
  grid-template-columns: repeat(3, max-content) 1em;
}
```

I am sure there are many different ways we could have gone about the layout. I like this one because it defines the exact gap between ribbon elements without complicated calculations.

Accessibility is not only adding aria attributes. It also includes color contrast and readability, as well as adding hover and focus states. If you don’t like `outline` style, you could use other CSS properties, like `box-shadow`, for example.

```css
/* Use current link color, but add underline on hover  */
.ribbon__element:hover,
.ribbon__element:active {
  color: inherit;
  text-decoration: underline;
}

/* Clear default outline style and use inset box shadow for focus state */
.ribbon__element:focus {
  box-shadow: inset 0 -3px 0 0 #343435;
  outline: none;
}
```

## Creating the unique triangular shape

We have more than one option when it comes down to defining the triangle at the end of each ribbon. We could:

1. We could create [a triangle using borders] with pseudo-elements
2. We could use an SVG background image on pseudo-elements
3. We could use inline SVG images
4. We could create a `clip-path` using the `polygon()` function

Let’s dig into each one.

### Option 1: The border approach

First, we should set the element’s width and height to zero so it doesn’t get in the way of the pseudo-elements we’re using to draw the triangle with borders. Then we should draw the triangle using borders, specifically by defining a solid left border that matches the color of the background to make it blend in with the rest of the ribbon. From there, let’s define top and bottom borders and make them transparent. The trick here is to calculate the size of the border.

Our ribbon element has a content size of the `line-height` value plus the top and bottom paddings:

```css
1.333em + 0.667em + 0.667em = 2.667em
```

That means our top and bottom borders should be half that size. The only thing left to do is to position elements absolutely to the correct side of the component.

```css
/* The left arrow */
.ribbon--alpha .ribbon__element:before {
  /* Make the content size zero */
  content: '';
  height: 0;
  width: 0;

  /* Use borders to make the pseudo element fit the ribbon size */
  border-bottom: 1.333em solid transparent;
  border-left: 0.667em solid #fff;
  border-top: 1.333em solid transparent;

  /* Position the element absolutely on the left side of the ribbon element */
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
}

/* The right arrow */
.ribbon--alpha .ribbon__element:after {
  /* Make the content size zero */
  content: '';
  height: 0;
  width: 0;

  /* Use borders to make the pseudo-element fit the ribbon size */
  border-bottom: 1.333em solid transparent;
  border-left: 0.667em solid;
  border-top: 1.333em solid transparent;

  /* Position the element absolutely on the right side of the ribbon element and push it outside */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  -webkit-transform: translateX(0.667em);
  transform: translateX(0.667em);
}
```

Since the right triangle should match the background color of the ribbon, let’s remember to add the correct border color for each ribbon’s pseudo-element.

```css
/* The right arrow of the first element */
.ribbon--alpha .ribbon__element:nth-child(1):after {
  border-left-color: #11d295;
}

/* The right arrow of the second element */
.ribbon--alpha .ribbon__element:nth-child(2):after {
  border-left-color: #ef3675;
}

/* The right arrow of the third element */
.ribbon--alpha .ribbon__element:nth-child(3):after {
  border-left-color: #4cd4e9;
}
```

And there we go!

> {codepen CiTA moNQgY dark result 400 %}

### Option 2: The background image approach

We can also create a triangle using a background image. This requires creating an image that matches the design, which is a little cumbersome, but still totally possible. We are going to use SVG here since it’s smooth at any resolution.

Unlike the border triangle approach, we want to match the height of our pseudo-element with the height of the ribbon element, or 100%. The width of the component should match the left border width of the border triangle, which is 0.666666em in our case. Then we should use a white triangle for the background image on the triangle of the left side, and then use triangle images with color for the triangles on the right side. Again, we are using absolute positioning to place our triangles to the correct side of the ribbon element.

```css
/* The left arrow */
.ribbon--beta .ribbon__element:before {
  /* Define the arrow size */
  content: '';
  height: 100%;
  width: 0.666666em;

  /* Define the background image that matches the background color */
  background-image: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTAgNDAiIHdpZHRoPSIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjZmZmIj48cGF0aCBkPSJtNSAxNSAyMCAxMGgtNDB6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0ibWF0cml4KDAgLTEgLTEgMCAyNSAyNSkiLz48L3N2Zz4=);
  background-position: center left;
  background-repeat: no-repeat;
  background-size: 100%;

  /* Position the element absolutely on the left side of the ribbon element */
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
}

/* The right arrow */
.ribbon--beta .ribbon__element:after {
  /* Define the arrow size */
  content: '';
  height: 100%;
  width: 0.667em;

  /* Define the background image attributes */
  background-position: center left;
  background-repeat: no-repeat;
  background-size: 100%;

  /* Position the element absolutely on the right side of the ribbon element and push it outside */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  -webkit-transform: translateX(0.667em);
  transform: translateX(0.667em);
}

/* Define the background image that matches the background color of the first element */
.ribbon--beta .ribbon__element:nth-child(1):after {
  background-image: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTAgNDAiIHdpZHRoPSIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtNSAxNSAyMCAxMGgtNDB6IiBmaWxsPSIjMTFkMjk1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0ibWF0cml4KDAgLTEgLTEgMCAyNSAyNSkiLz48L3N2Zz4=);
}

/* Define the background image that matches the background color of the second element */
.ribbon--beta .ribbon__element:nth-child(2):after {
  background-image: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTAgNDAiIHdpZHRoPSIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtNSAxNSAyMCAxMGgtNDB6IiBmaWxsPSIjZWYzNjc1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0ibWF0cml4KDAgLTEgLTEgMCAyNSAyNSkiLz48L3N2Zz4=);
}

/* Define the background image that matches the background color of the third element */
.ribbon--beta .ribbon__element:nth-child(3):after {
  background-image: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTAgNDAiIHdpZHRoPSIxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtNSAxNSAyMCAxMGgtNDB6IiBmaWxsPSIjNGNkNGU5IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0ibWF0cml4KDAgLTEgLTEgMCAyNSAyNSkiLz48L3N2Zz4=);
}
```

There we go!

> {codepen CiTA jJgQoM dark result 400 %}

### Option 3: The inline SVG approach

Instead of loading a different SVG triangle for each background image, we could use inline SVG directly in the HTML.

This particular approach allows us to control the `fill` color of each SVG arrow with CSS. The arrow size is calculated by the ribbon size. Once again, we are using the `em` units to define the size and arrows are absolutely positioned, like the other approaches we’ve seen so far.

```css
/* Position arrows absolutely and set the correct size */
.ribbon--gamma .ribbon__element svg {
  height: 2.667em;
  position: absolute;
  top: 0;
  width: 0.667em;
}

/* The left arrow */
.ribbon--gamma .ribbon__element svg:first-child {
  fill: #fff; /* Define the background image that matches the background color */
  left: 0; /* Stick left arrows to the left side of the ribbon element */
}

/* The right arrow */
.ribbon--gamma .ribbon__element svg:last-child {
  left: 100%; /* Push right arrows outside of the ribbon element */
}

/* Define the fill color that matches the background color of the first element */
.ribbon--gamma .ribbon__element:nth-child(1) svg:last-child {
  fill: #11d295;
}

/* Define the fill color that matches the background color of the second element */
.ribbon--gamma .ribbon__element:nth-child(2) svg:last-child {
  fill: #ef3675;
}

/* Define the fill color that matches the background color of the third element */
.ribbon--gamma .ribbon__element:nth-child(3) svg:last-child {
  fill: #4cd4e9;
}
```

> {codepen CiTA axdpXe dark result 400 %}

### Option 4: The clip-path approach

We can create the ribbon triangles with a polygon that masks the background. [Firefox’s Shape Editor] is a fantastic tool to draw shapes directly in the browser with a GUI, as is [Clippy].

Since polygons must be created using percentages, we should use our best judgment to match the size of border triangles. Also, note that percentage-based polygons might look a little funny on some viewports, especially when element sizes are adapting to its surroundings, like wrapper elements. Consider redefining polygons for different viewports.

```css
.ribbon--delta .ribbon__element {
  clip-path: polygon(95% 0, 100% 50%, 95% 100%, 0% 100%, 5% 50%, 0% 0%);
}
```

Since we defined our wrapper element using CSS Grid, we should expand the ribbon elements but leave the last one at the size of the polygon triangle, which is 5% in our case. The last ribbon element should be wider by the size of the border triangle width to match the first two examples.

```css
/* Make all ribbon elements (except the last one) wider by the size of the polygon triangle */
.ribbon--delta .ribbon__element:not(:last-child) {
  width: 105%;
}

/* Make the last ribbon element wider by the size of the border triangle */
.ribbon--delta .ribbon__element:last-child {
  width: calc(100% + .667em);
}
```

> {codepen CiTA YgmRbg dark result 400 %}

### Variations on these options

Now that we’ve learned how to create the breadcrumb ribbon a few different ways, we could play around with it, like adding shadows or gradients and different sizes.

### Adding a shadow

We could add the shadow on our ribbon elements. Make sure to avoid the shadow on the left or right side of the ribbon element.

```css
/* Add shadow under each ribbon element */
.ribbon--shadow .ribbon__element {
  box-shadow: 1px 3px 3px -3px black;
}
```

> {codepen CiTA WmVYqx dark result 400 %}

### Using gradients for color

We could add gradients to our ribbon element. Be sure to match the color of the right triangle when doing so. Also, make sure to comply with [contrast accessibility].

For example, if we are going to use the border approach or background image approach, we should use mostly horizontal (i.e. left-to-right) gradients (with the exceptions of some carefully calculated angled gradients). If we are using the `clip-path` approach, we could use any gradient version we wish.

```css
/* Add gradient to the first ribbon element */
.ribbon--gradient .ribbon__element:nth-child(1) {
  background-image: linear-gradient(to right, #11ced2, #11d295);
}

/* Add gradient to the second ribbon element */
.ribbon--gradient .ribbon__element:nth-child(2) {
  background-image: linear-gradient(to right, #ef36b2, #ef3675);
}

/* Add gradient to the third ribbon element */
.ribbon--gradient .ribbon__element:nth-child(3) {
  background-image: linear-gradient(to right, #4c9fe9, #4cd4e9);
}
```

> {codepen CiTA xBvQoz dark result 400 %}

### Working with size variations

Since the size of our ribbon elements depends on the font size of the wrapper element, defining different sizes is pretty straightforward.

```css
/* Small ribbons */
.ribbon--small {
  font-size: 10px;
}

/* Big ribbons */
.ribbon--big {
  font-size: 20px;
}
```

Here we go with a smaller set of ribbons:

> {codepen CiTA aMeQeG dark result 400 %}

And here’s a nice set of chunky ribbons:

> {codepen CiTA drxQxw dark result 400 %}

### Combining all the things!

We can also combine different modifier classes to achieve an even more styling. For example, let’s use gradient and shadow modifiers together:

> {codepen CiTA ywmQmb dark result 400 %}

## Any other angles to consider?

Making custom elements using different CSS techniques is a great way how each one of us could improve or refresh our knowledge. Before starting, it’s worth investing some thought into the maintainability and modularity of the component being built. A consistent naming convention, like [BEM], is certainly helpful that. Accessibility is also a big deal, so starting with it in mind and documenting accessibility features along the way will serve you well.

We looked at four different approaches for drawing ribbon triangles. Have you used a different approach or know of one we haven’t considered here? Let me know in the comments!

[a demo page]: https://play.silvestar.codes/ribbon/
[CSS triangles]: https://css-tricks.com/snippets/css/css-triangle/
[A11y Style Guide website]: https://a11y-style-guide.com/style-guide/section-navigation.html
[CSS Grid]: https://css-tricks.com/snippets/css/complete-guide-grid/
[is not very well supported]: https://caniuse.com/#search=max-content
[a triangle using borders]: https://css-tricks.com/snippets/css/css-triangle/
[Firefox’s Shape Editor]: https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Edit_CSS_shapes
[Clippy]: https://bennettfeely.com/clippy/
[contrast accessibility]: https://webaim.org/resources/contrastchecker/
[BEM]: https://css-tricks.com/bem-101/
