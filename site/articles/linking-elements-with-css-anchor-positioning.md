---
layout: index
title: Linking Elements with CSS Anchor Positioning
date: 2023-07-31 10:00:00
tags:
  - blog
  - optimization
description:
type: articles-item
sections2:
  - type: banner-beta
    banner: newsletter
    animate: true
---

In this article, we’ll learn how to place an element between other elements with the help of a new CSS Anchor Positioning API. We’ll also look at an example where we dynamically update the link between elements placed in columns.

VIDEO HERE

## About CSS Anchor Positioning

CSS absolute positioning allows you to place elements anywhere on a webpage without worrying about other elements around them. It’s flexible but sometimes limiting because you might want to position an element relative to another.

CSS Anchor Positioning allows us to position an element relative to one or more elements on the page. We can get the anchor element’s position without using CSS. That means that placing our absolute element requires no JavaScript solutions. As a bonus, the anchoring technique allows several possible positions to find the best one that avoids overlap/overflow.

_The World Wide Web Consortium (W3C) [published a First Public Working Draft of CSS Anchor Positioning](https://www.w3.org/news/2023/first-public-working-draft-css-anchor-positioning/) so that it might change. The only browser supporting this feature is Chrome Canary, which is behind the “Experimental Web Platform Features” flag._

## CSS Anchor Positioning example

Let’s take a tooltip as an example. Tooltip is an element that appears when you hover over some other element. With CSS Anchor Positioning, we can:

- position the element related to an anchor element,
- set the size based on an anchor element, and
- place it on the correct side of an anchor element.

https://codepen.io/CiTA/pen/ExOGPBd

When a tooltip appears, CSS Anchor Positioning allows us to use the anchor() function to get the anchor element’s top, bottom, right, left, and center positions. That makes the positioning of the tooltip much easier. Not only position but also size. We can calculate the size based on the anchor element. Plus, there is a way to check if the tooltip will overlap or overflow with other elements. In that case, it can use the fallback position. All that with CSS only.

## Linking two elements

On [my site](adedicated.dev), I have a component showcasing my services by linking different words.

VIDEO HERE

My link components rely on heavy JavaScript calculation to position it correctly between words. I had to calculate the first and second words’ positions and then check if the latter word was above the previous.

https://codepen.io/CiTA/pen/OJapmPG

While I love solving math problems here and there, I prefer browsers doing the calculation for me. Instead of using a heavy JavaScript solution, we can use CSS Anchor Positioning here. All calculations will be done automatically - all we need to do is tell our link component which anchors to connect. Same as our tooltip example, but now we are using two different anchor elements.

## Setting the stage

Let’s set up the HTML structure for our component:

```html
<ul data-col1="1" data-col2="3" data-col3="5">
  <li>Creating</li>
  <li>WordPress</li>
  <li>Websites</li>
  <li>Developing</li>
  <li>HubSpot</li>
  <li>Pages</li>
  <li>Updating</li>
  <li>Shopify</li>
  <li>Layouts</li>
  <li>Implementing</li>
  <li>Jekyll</li>
  <li>Templates</li>
  <li>Optimizing</li>
  <li>Hugo</li>
  <li>Components</li>
</ul>
```

Notice the `data-col1`, `data-col2`, and `data-col3` attributes. We will use those to highlight current word combinations. In our case, the first word in the first column, the third word in the second column, and the fifth word in the third column are highlighted.

Here’s the CSS:

```css
:root {
  --space: clamp(1rem, 0.286rem + 1.905vw, 2rem);
  --wrapper: clamp(60rem, 38.571rem + 57.143vw, 90rem);
  --color-alpha: indigo;
  --color-beta: lightcyan;
  --color-gamma: cyan;
}

ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space);
  max-inline-size: var(--wrapper);
  margin: var(--space) auto;
  padding: var(--space);
}

li {
  background-color: var(--color-beta);
  color: var(--color-alpha);
  font-size: var(--font-size);
  border-radius: var(--space);
  position: relative;
  padding: var(--space);
}
```

To highlight the words, we use the following CSS:

```CSS
[data-col1="1"] li:nth-child(1),
[data-col2="4"] li:nth-child(11),
[data-col3="5"] li:nth-child(15) {
  background-color: var(--color-beta);
}
```

Let’s look at what we have now so far:

https://codepen.io/CiTA/pen/dyQwXvR

## Linking the words

We need to add two link elements to solve the problem of linking different words.

```html
<div class="link link--alpha"></div>
<div class="link link--beta"></div>
```

Let’s style them:

```css
:root {
  --line-width: clamp(0.125rem, 0.036rem + 0.238vw, 0.25rem);
}

.link {
  position: fixed;
  min-block-size: var(--line-width);
  background-image: linear-gradient(to bottom, black, black), linear-gradient(to right, black, black), linear-gradient(to bottom, black, black);
  background-size: var(--line-width), 50% var(--line-width), 50% var(--line-width);
  background-position: center, top left, bottom right;
  background-repeat: no-repeat;
}
```

I’m using a linear gradient to draw the line inside the link element.

Now for the fun stuff. Let’s define our anchor elements:

```css
[data-col1="1"] li:nth-child(1) {
  anchor-name: --link-col1;
}

[data-col2="3"] li:nth-child(8) {
  anchor-name: --link-col2;
}

[data-col3="5"] li:nth-child(15) {
  anchor-name: --link-col3;
}
```

Notice how we used `data-col1`, `data-col2`, and `data-col3` to target our highlighted words.

Now let’s use CSS Anchor Positioning to place the link element between words:

```css
.link--alpha {
  inset-block-start: anchor(--link-col1 center);
  inset-inline-end: anchor(--link-col2 left);
  inset-block-end: anchor(--link-col2 center);
  inset-inline-start: anchor(--link-col1 right);
}

.link--beta {
  inset-block-start: anchor(--link-col2 center);
  inset-inline-end: anchor(--link-col3 left);
  inset-block-end: anchor(--link-col3 center);
  inset-inline-start: anchor(--link-col2 right);
}
```

_I use CSS Logical Properties instead of the `top`, `right`, `bottom`, and `left` properties to make the component work in any writing mode._

Let’s look closer and use the LTR naming for easier understanding. The center of the first anchor element defines the link component’s top position.

```css
top: anchor(--link-col1 center);
inset-block-start: anchor(--link-col1 center);
```

The end of the first anchor element defines the link component’s left position.

```css
left: anchor(--link-col1 right);
inset-inline-start: anchor(--link-col1 right);
```

The center of the first anchor element defines the link component’s bottom position.

```css
bottom: anchor(--link-col2 center);
inset-block-end: anchor(--link-col2 center);
```

The end of the first anchor element defines the link component’s left position.

```css
right: anchor(--link-col2 left);
inset-inline-end: anchor(--link-col2 left);
```

Before CSS Anchor Positioning, we couldn’t achieve this without JavaScript. Now we can easily position our components relative to more than one component.

Here’s what we have so far:

https://codepen.io/CiTA/pen/LYXMZGb

## Automatic placement

Let’s consider a special case where the latter word is above the previous word.

https://codepen.io/CiTA/pen/qBQLaEx

The link element won’t be visible if we apply the previous code. That is because the bottom of the component will be above the top of the component. We can’t have these negative values.

To fix this, we can update the position for each link component:

```css
.link--alpha {
  inset-block-start: anchor(--link-col2 center);
  inset-inline-end: anchor(--link-col2 left);
  inset-block-end: anchor(--link-col1 center);
  inset-inline-start: anchor(--link-col1 right);
}

.link--beta {
  inset-block-start: anchor(--link-col3 center);
  inset-inline-end: anchor(--link-col3 left);
  inset-block-end: anchor(--link-col2 center);
  inset-inline-start: anchor(--link-col2 right);
}
```

Here’s how it looks now:

https://codepen.io/CiTA/pen/RwqEGwq

This solution might be awkward, requiring JavaScript calculations to determine when the previous word is below the first.

That is where we can use fallback positioning:

```css
.link--alpha {
  position-fallback: --link-calc1;
}

@position-fallback --link-calc1 {
  @try {
    inset-block-start: anchor(--link-col2 center);
    inset-inline-end: anchor(--link-col2 left);
    inset-block-end: anchor(--link-col1 center);
    inset-inline-start: anchor(--link-col1 right);
  }

  @try {
    inset-block-start: anchor(--link-col1 center);
    inset-inline-end: anchor(--link-col2 left);
    inset-block-end: anchor(--link-col2 center);
    inset-inline-start: anchor(--link-col1 right);
  }
}
```

CSS Anchor Positioning fallback allows us to define all use cases. In our case, we defined a case when the first word is above the second one and vice versa.

The only thing left to do is to update the background position to make our linear gradient point in the right direction:

```css
[data-col1="3"][data-col2="2"] ~ .link--alpha,
[data-col2="2"][data-col3="1"] ~ .link--beta {
  background-position: center, bottom left, top right;
}
```

How cool is this to have a fully working solution without a single line of JavaScript code? Pretty, pretty cool.

## Bonus: Dynamically update terms

This part is where we need a bit of JavaScript to update the terms periodically. Once the timeout expires, JavaScript will update the `data-col1`, `data-col2`, and `data-col3` attributes which will update the link between words automatically.

Let’s start by defining a function for getting the random number within the minimum and maximum allowed values:


```js
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

Then let’s define a function that will update the `data-col1`, `data-col2`, and `data-col3` attributes.

```js
const $ul = document.querySelector('ul')

const randomHighlighter = () => {
  $ul.setAttribute('data-col1', getRandomNumber(1, 5))
  $ul.setAttribute('data-col2', getRandomNumber(1, 5))
  $ul.setAttribute('data-col3', getRandomNumber(1, 5))
}
```

Finally, let’s use `setInterval()` to call this function to update our component every 3 seconds.

```js
setInterval(() => {
  randomHighlighter()
}, 3000)
```

Here’s how it looks now:

https://codepen.io/CiTA/pen/wvQRzyK

_I’ve added a few more options, like hovering on items that will also update the terms. You can see the complete code here: https://codepen.io/CiTA/pen/rNQzyyQ._

## Conclusion

CSS Anchor Positioning is a powerful feature that will eliminate JavaScript in advanced position scenarios. Although it is an experimental feature, I hope browsers will implement it soon. It will be useful in many places, not just for tooltips and custom solutions like mine. I can think of context menus, submenus, and dropdowns, but there will be more and more examples as CSS Anchor Positioning becomes more supported.
