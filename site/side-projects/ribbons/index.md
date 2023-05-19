---
isRibbons: true
layout: project
title: Ribbons
projectTitle: Ribbons
description: Learn how to build a ribbon component with CSS and SVG backgrounds that could serve as styled breadcrumbs element for your site.
type: ribbons
tags:
  - projects
thumbnail:
  src: ribbons_isjkzh
  alt: Screenshot of the “Ribbons” project page.
  width: 759
  height: 459
display: true
date: 2005-10-01
---

## Ribbons

Learn how to build a ribbon component with CSS and SVG backgrounds that could serve as styled breadcrumbs element for your site.

<nav class="ribbon ribbon--alpha" role="navigation" aria-label="breadcrumbs">
  <span class="ribbon__element">Home</span>
  <span class="ribbon__element">Blog</span>
  <span class="ribbon__element" aria-current="page">Post</span>
</nav>

You could find out how to build the ribbon component in the following examples. The HTML structure:

```html
<nav class="ribbon ribbon--modifier" role="navigation" aria-label="breadcrumbs">
  <a class="ribbon__element" href="https://www.silvestar.codes/">Home</a>
  <a class="ribbon__element" href="https://www.silvestar.codes/categories/articles/">Blog</a>
  <a class="ribbon__element" href="https://www.silvestar.codes/articles/building-an-animated-sticky-header-with-custom-offset/" aria-current="page">Post</a>
</nav>
```

where `ribbon--modifier` is a modifier class. The following modifier classes are available:
- `ribbon--alpha` - the ribbon component made with CSS triangles,
- `ribbon--beta` - the ribbon component made with SVG backgrounds,
- `ribbon--gamma` - the ribbon component made with CSS clip path,
- `ribbon--shadow` - the ribbon component with a drop shadow,
- `ribbon--gradient` - the ribbon component with a linear gradient background,
- `ribbon--small` - the small ribbon component, and
- `ribbon--big` - the big ribbon component.

The CSS code:

```css
/* The wrapper element */
.ribbon {
  display: grid;
  font-size: 15px;
  grid-gap: 1px;
  grid-template-columns: repeat(3, 1fr) 1em;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  width: 100%;
}

/* The ribbon element */
.ribbon__element {
  background-color: #11d295;
  color: #fff;
  font-size: 1.5em;
  font-weight: 700;
  letter-spacing: 0.01em;
  line-height: 1.333em;
  padding: 0.667em 0 0.667em 1.333em;
  position: relative;
}

/* States */
.ribbon__element:hover,
.ribbon__element:focus,
.ribbon__element:active {
  color: inherit;
  text-decoration: underline;
}
```

{% note "Important" %}
A ribbon component showed in these examples should be used as a breadcrumb element. However, if you want to use it for something else, be sure to update or remove the aria attributes. The HTML code for accessible breadcrumbs could be found on the [A11y Style Guide website](https://a11y-style-guide.com/style-guide/section-navigation.html), under Option #2.
{% endnote %}

### Ribbons Alpha

<nav class="ribbon ribbon--alpha" role="navigation" aria-label="breadcrumbs">
  <span class="ribbon__element">Home</span>
  <span class="ribbon__element">Blog</span>
  <span class="ribbon__element" aria-current="page">Post</span>
</nav>

A ribbon made with CSS triangles and pseudo-classes.

Modifier: `.ribbon--alpha`.

The HTML structure:

```html
<nav class="ribbon ribbon--alpha" role="navigation" aria-label="breadcrumbs">
  <a class="ribbon__element" href="https://www.silvestar.codes/">Home</a>
  <a class="ribbon__element" href="https://www.silvestar.codes/categories/articles/">Blog</a>
  <a class="ribbon__element" href="https://www.silvestar.codes/articles/building-an-animated-sticky-header-with-custom-offset/" aria-current="page">Post</a>
</nav>
```

The CSS code:

```css
/* The left triangle */
.ribbon--alpha .ribbon__element:before {
  border-bottom: 1.333em solid transparent;
  border-left: 0.667667em solid #fff;
  border-top: 1.333em solid transparent;
  bottom: 0;
  content: '';
  height: 0;
  left: 0;
  position: absolute;
  top: 0;
  width: 0;
}

/* The right triangle */
.ribbon--alpha .ribbon__element:after {
  border-bottom: 1.333em solid transparent;
  border-left: 0.667em solid;
  border-top: 1.333em solid transparent;
  bottom: 0;
  content: '';
  height: 0;
  position: absolute;
  right: 0;
  top: 0;
  -webkit-transform: translateX(0.667667em);
  -ms-transform: translateX(0.667667em);
  transform: translateX(0.667667em);
  width: 0;
}

/* Match background color for right triangles */
.ribbon--alpha .ribbon__element:nth-child(1):after {
  border-left-color: #11d295;
}

.ribbon--alpha .ribbon__element:nth-child(2):after {
  border-left-color: #ef3675;
}

.ribbon--alpha .ribbon__element:nth-child(3):after {
  border-left-color: #4cd4e9;
}
```

### Ribbons Beta

<nav class="ribbon ribbon--beta" role="navigation" aria-label="breadcrumbs">
  <span class="ribbon__element">Home</span>
  <span class="ribbon__element">Blog</span>
  <span class="ribbon__element" aria-current="page">Post</span>
</nav>

A ribbon made with SVG background and pseudo-classes.

Modifier: `.ribbon--beta`.

The HTML structure:

```html
<nav class="ribbon ribbon--beta" role="navigation" aria-label="breadcrumbs">
  <a class="ribbon__element" href="https://www.silvestar.codes/">Home</a>
  <a class="ribbon__element" href="https://www.silvestar.codes/categories/articles/">Blog</a>
  <a class="ribbon__element" href="https://www.silvestar.codes/articles/building-an-animated-sticky-header-with-custom-offset/" aria-current="page">Post</a>
</nav>
```

The CSS code:

```css
/* The left triangle */
.ribbon--beta .ribbon__element:before {
  background-image: url(/gfx/svg/triangle.svg);
  background-position: center left;
  background-repeat: no-repeat;
  background-size: 100%;
  bottom: 0;
  content: '';
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 0.667em;
}

/* The right triangle */
.ribbon--beta .ribbon__element:after {
  background-position: center left;
  background-repeat: no-repeat;
  background-size: 100%;
  bottom: 0;
  content: '';
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  -webkit-transform: translateX(0.667667em);
  -ms-transform: translateX(0.667667em);
  transform: translateX(0.667667em);
  width: 0.667em;
}

/* Match background color for right triangles */
.ribbon--beta .ribbon__element:nth-child(1):after {
  background-image: url(/gfx/svg/triangle1.svg);
}

.ribbon--beta .ribbon__element:nth-child(2):after {
  background-image: url(/gfx/svg/triangle2.svg);
}

.ribbon--beta .ribbon__element:nth-child(3):after {
  background-image: url(/gfx/svg/triangle3.svg);
}
```

### Ribbons Gamma

<nav class="ribbon ribbon--gamma" role="navigation" aria-label="breadcrumbs">
  <span class="ribbon__element">
    <svg viewBox="0 0 10 40"><path fill-rule="evenodd" d="M10 20L0 0v40z"></path></svg>
    <span>Home</span>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 40" src="/gfx/svg/triangle.svg"><path fill-rule="evenodd" d="M10 20L0 0v40z"></path></svg>
  </span>
  <span class="ribbon__element">
    <svg viewBox="0 0 10 40"><path fill-rule="evenodd" d="M10 20L0 0v40z"></path></svg>
    <span>Blog</span>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 40" src="/gfx/svg/triangle.svg"><path fill-rule="evenodd" d="M10 20L0 0v40z"></path></svg>
  </span>
  <span class="ribbon__element">
    <svg viewBox="0 0 10 40"><path fill-rule="evenodd" d="M10 20L0 0v40z"></path></svg>
    <span aria-current="page">Post</span>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 40" src="/gfx/svg/triangle.svg"><path fill-rule="evenodd" d="M10 20L0 0v40z"></path></svg>
  </span>
</nav>

A ribbon made with inline SVGs.

Modifier: `.ribbon--gamma`.

The HTML structure:

```html
<nav class="ribbon ribbon--gamma" role="navigation" aria-label="breadcrumbs">
  <a class="ribbon__element" href="https://www.silvestar.codes/">
    <svg viewBox="0 0 10 40"><path fill-rule="evenodd" d="M10 20L0 0v40z"></path></svg>
    <span>Home</span>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 40" src="/gfx/svg/triangle.svg"><path fill-rule="evenodd" d="M10 20L0 0v40z"></path></svg>
  </a>
  <a class="ribbon__element" href="https://www.silvestar.codes/categories/articles/">
    <svg viewBox="0 0 10 40"><path fill-rule="evenodd" d="M10 20L0 0v40z"></path></svg>
    <span>Blog</span>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 40" src="/gfx/svg/triangle.svg"><path fill-rule="evenodd" d="M10 20L0 0v40z"></path></svg>
  </a>
  <a class="ribbon__element" href="https://www.silvestar.codes/articles/building-an-animated-sticky-header-with-custom-offset/" aria-current="page">
    <svg viewBox="0 0 10 40"><path fill-rule="evenodd" d="M10 20L0 0v40z"></path></svg>
    <span>Post</span>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 40" src="/gfx/svg/triangle.svg"><path fill-rule="evenodd" d="M10 20L0 0v40z"></path></svg>
  </a>
</nav>
```

The CSS code:

```css
/* Set the correct size of the inline SVG and position absolutely */
.ribbon--gamma .ribbon__element svg {
  height: 2.667em;
  position: absolute;
  top: 0;
  width: 0.667em;
}

/* Match fill color for left triangle and stick it to the left side */
.ribbon--gamma .ribbon__element svg:first-child {
  fill: #fff;
  left: 0;
}

/* Stick the right triangle outside of the right side */
.ribbon--gamma .ribbon__element svg:last-child {
  left: 100%;
}

/* Match fill color for right triangles */
.ribbon--gamma .ribbon__element:nth-child(1) svg:last-child {
  fill: #11d295;
}

.ribbon--gamma .ribbon__element:nth-child(2) svg:last-child {
  fill: #ef3675;
}

.ribbon--gamma .ribbon__element:nth-child(3) svg:last-child {
  fill: #4cd4e9;
}
```

### Ribbons Delta

<nav class="ribbon ribbon--delta" role="navigation" aria-label="breadcrumbs">
  <span class="ribbon__element">Home</span>
  <span class="ribbon__element">Blog</span>
  <span class="ribbon__element" aria-current="page">Post</span>
</nav>

A ribbon made with CSS clip path and pseudo-classes.

Modifier: `.ribbon--delta`.

The HTML structure:

```html
<nav class="ribbon ribbon--delta" role="navigation" aria-label="breadcrumbs">
  <a class="ribbon__element" href="https://www.silvestar.codes/">Home</a>
  <a class="ribbon__element" href="https://www.silvestar.codes/categories/articles/">Blog</a>
  <a class="ribbon__element" href="https://www.silvestar.codes/articles/building-an-animated-sticky-header-with-custom-offset/" aria-current="page">Post</a>
</nav>
```

The CSS code:

```css
/* Masking */
.ribbon--delta .ribbon__element {
  -webkit-clip-path: polygon(95% 0, 100% 50%, 95% 100%, 0% 100%, 5% 50%, 0% 0%);
  clip-path: polygon(95% 0, 100% 50%, 95% 100%, 0% 100%, 5% 50%, 0% 0%);
}

/* Extend all ribbon element except the last one to fix the spacing issues */
.ribbon--delta .ribbon__element:not(:last-child) {
  width: 105%;
}

/* Extend the last element to match the last arrow size */
.ribbon--delta .ribbon__element:last-child {
  width: calc(100% + 0.667em);
}
```

### Ribbons Shadow

<nav class="ribbon ribbon--alpha ribbon--shadow" role="navigation" aria-label="breadcrumbs">
  <span class="ribbon__element">Home</span>
  <span class="ribbon__element">Blog</span>
  <span class="ribbon__element" aria-current="page">Post</span>
</nav>

A ribbon with a subtle drop shadow. Make sure the shadow is not visible on either side of the element. Also, don't forget to add `ribbon--alpha`, `ribbon--beta` or `ribbon--gamma` modifier.

Modifier: `.ribbon--shadow`.

The HTML structure:

```html
<nav class="ribbon ribbon--alpha ribbon--shadow" role="navigation" aria-label="breadcrumbs">
  <a class="ribbon__element" href="https://www.silvestar.codes/">Home</a>
  <a class="ribbon__element" href="https://www.silvestar.codes/categories/articles/">Blog</a>
  <a class="ribbon__element" href="https://www.silvestar.codes/articles/building-an-animated-sticky-header-with-custom-offset/" aria-current="page">Post</a>
</nav>
```

The CSS code:

```css
/* Apply subtle shadow */
.ribbon--shadow .ribbon__element {
  -webkit-box-shadow: 0 3px 3px -3px black;
  box-shadow: 0 3px 3px -3px black;
}
```

### Ribbons Gradient

<nav class="ribbon ribbon--alpha ribbon--gradient" role="navigation" aria-label="breadcrumbs">
  <span class="ribbon__element">Home</span>
  <span class="ribbon__element">Blog</span>
  <span class="ribbon__element" aria-current="page">Post</span>
</nav>

A ribbon with a linear gradient. Be sure to match the end color with the color of the right arrow. Also, don't forget to add `ribbon--alpha`, `ribbon--beta` or `ribbon--gamma` modifier.

Modifier: `.ribbon--gradient`.

The HTML structure:

```html
<nav class="ribbon ribbon--alpha ribbon--gradient" role="navigation" aria-label="breadcrumbs">
  <a class="ribbon__element" href="https://www.silvestar.codes/">Home</a>
  <a class="ribbon__element" href="https://www.silvestar.codes/categories/articles/">Blog</a>
  <a class="ribbon__element" href="https://www.silvestar.codes/articles/building-an-animated-sticky-header-with-custom-offset/" aria-current="page">Post</a>
</nav>
```

The CSS code:

```css
/* Apply subtle gradients */
.ribbon--gradient .ribbon__element:nth-child(1) {
  background-image: -webkit-gradient(linear, left top, right top, from(#11d2ab), to(#11d295));
  background-image: -webkit-linear-gradient(left, #11d2ab, #11d295);
  background-image: -o-linear-gradient(left, #11d2ab, #11d295);
  background-image: linear-gradient(to right, #11d2ab, #11d295);
}

.ribbon--gradient .ribbon__element:nth-child(2) {
  background-image: -webkit-gradient(linear, left top, right top, from(#ef365f), to(#ef3675));
  background-image: -webkit-linear-gradient(left, #ef365f, #ef3675);
  background-image: -o-linear-gradient(left, #ef365f, #ef3675);
  background-image: linear-gradient(to right, #ef365f, #ef3675);
}

.ribbon--gradient .ribbon__element:nth-child(3) {
  background-image: -webkit-gradient(linear, left top, right top, from(#4cc2e9), to(#4cd4e9));
  background-image: -webkit-linear-gradient(left, #4cc2e9, #4cd4e9);
  background-image: -o-linear-gradient(left, #4cc2e9, #4cd4e9);
  background-image: linear-gradient(to right, #4cc2e9, #4cd4e9);
}
```

### Ribbons Small

<nav class="ribbon ribbon--alpha ribbon--small" role="navigation" aria-label="breadcrumbs">
  <span class="ribbon__element">Home</span>
  <span class="ribbon__element">Blog</span>
  <span class="ribbon__element" aria-current="page">Post</span>
</nav>

A small ribbon. The sizing of the ribbon elements is based on `em` units. Since the `em` unit is relative to parent element `font-size`, we could control the size of the ribbon elements on a single place. To make sure this approach is working, don't overwrite `em` size definitions. Also, don't forget to add `ribbon--alpha`, `ribbon--beta` or `ribbon--gamma` modifier.

Modifier: `.ribbon--small`.

The HTML structure:

```html
<nav class="ribbon ribbon--alpha ribbon--small" role="navigation" aria-label="breadcrumbs">
  <a class="ribbon__element" href="https://www.silvestar.codes/">Home</a>
  <a class="ribbon__element" href="https://www.silvestar.codes/categories/articles/">Blog</a>
  <a class="ribbon__element" href="https://www.silvestar.codes/articles/building-an-animated-sticky-header-with-custom-offset/" aria-current="page">Post</a>
</nav>
```

The CSS code:

```css
/* Define smaller font size on wrapper element */
.ribbon--small {
  font-size: 10px;
}
```

### Ribbons Big

<nav class="ribbon ribbon--alpha ribbon--big" role="navigation" aria-label="breadcrumbs">
  <span class="ribbon__element">Home</span>
  <span class="ribbon__element">Blog</span>
  <span class="ribbon__element" aria-current="page">Post</span>
</nav>

A big ribbon. The sizing of the ribbon elements is based on `em` units. Since the `em` unit is relative to parent element `font-size`, we could control the size of the ribbon elements on a single place. To make sure this approach is working, don't overwrite `em` size definitions. Also, don't forget to add `ribbon--alpha`, `ribbon--beta` or `ribbon--gamma` modifier.

Modifier: `.ribbon--big`.

The HTML structure:

```html
<nav class="ribbon ribbon--alpha ribbon--big" role="navigation" aria-label="breadcrumbs">
  <a class="ribbon__element" href="https://www.silvestar.codes/">Home</a>
  <a class="ribbon__element" href="https://www.silvestar.codes/categories/articles/">Blog</a>
  <a class="ribbon__element" href="https://www.silvestar.codes/articles/building-an-animated-sticky-header-with-custom-offset/" aria-current="page">Post</a>
</nav>
```

The CSS code:

```css
/* Define bigger font size on wrapper element */
.ribbon--big {
  font-size: 20px;
}
```

### Ribbons Auto

<nav class="ribbon ribbon--alpha ribbon--auto" role="navigation" aria-label="breadcrumbs">
  <span class="ribbon__element">Home</span>
  <span class="ribbon__element">Blog</span>
  <span class="ribbon__element" aria-current="page">Post</span>
</nav>

An auto ribbon has elements that doesn't fill out the entire available space. Don't forget to add `ribbon--alpha`, `ribbon--beta` or `ribbon--gamma` modifier.

Modifier: `.ribbon--auto`.

The HTML structure:

```html
<nav class="ribbon ribbon--alpha ribbon--auto" role="navigation" aria-label="breadcrumbs">
  <a class="ribbon__element" href="https://www.silvestar.codes/">Home</a>
  <a class="ribbon__element" href="https://www.silvestar.codes/categories/articles/">Blog</a>
  <a class="ribbon__element" href="https://www.silvestar.codes/articles/building-an-animated-sticky-header-with-custom-offset/" aria-current="page">Post</a>
</nav>
```

The CSS code:

```css
/* Define full width ribbon elements */
.ribbon--auto {
  grid-template-columns: repeat(3, 1fr) 1em;
}
```
