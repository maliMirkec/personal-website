---
title: 'Using CSS Grid where appropriate (revisited)'
date: 2018-09-05 11:01:11
categories:
  - Blog
tags:
  - css
  - grid
thumbnail: Using_CSS_Grid_where_appropriate_revisited_m4mtyq.jpg
comments: true
description: This solution is a follow-up post on my last year's article "Using CSS Grid where appropriate." The goal is to find a solution for navigation with an unknown number of items.
---

This solution is a follow-up post on my last year's article ["Using CSS Grid where appropriate"]. The goal is to find a solution for navigation with an unknown number of items.

<!-- more -->

## Recap

Creating navigation with CSS Grid is arguably not the best solution. However, if one wants to use CSS Grid, two options were suggested:
- Using `grid-auto-flow: row;` and placing each item in the grid, like this:

```css
.nav__item:nth-child(1) {
  grid-area: 1 / 1 / 2 / 2;
}
```
- Defining a definite grid using keyword auto for setting width of the rows and columns:

```css
.nav {
  display: grid;
  grid-auto-flow: row;
}
@media screen and (min-width: 320px) {
  .nav {
    grid-template-columns: repeat(4, auto);
    grid-template-rows: repeat(2, auto);
  }
}
```

In both examples, we are defining a strict grid—a number of columns in a row are strictly defined.

{% codepen CiTA dzogLV dark result 650 %}

## A new solution

I have been using CSS Grid for more than a year now, and I learned how to use its features properly along the way:
- [`minmax()` function],
- [`auto-fit` keyword],
- [`grid-auto-flow` property], and
- how to avoid media queries 🎊.

### The code

I have forked the previous solution and updated it with the features mentioned above. Here's the final solution.

{% codepen CiTA pOgGqv dark result 220 %}

```css
.nav--grid2 {
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fit, minmax(60px, auto));
  justify-content: center;
}
```

Let's break down this piece of code.

### minmax()

`minmax()` function defines a size as a range between minimum and maximum value. It allows defining a dynamic size of columns and rows.

We could use this property to define a minimum and a maximum width of navigation item. In our example, we are using the following minmax definition:

`minmax(60px, auto)`

We are saying that column should be at least 60px wide, and it should be as wide as the maximum content width. See [`auto` keyword] for more details.

### auto-fit

`auto-fit` should be used as a repetition number—a number used in [`repeat()` function]. It says that the grid should place as many items as possible like when items are empty (I think 🤔).

### grid-auto-flow

`grid-auto-flow` is a property that controls how the grid algorithm for placing items works. In our example, we are using [`dense` keyword]. It says that the grid should fill holes that could be left when larger grid items occur.

### justify-content

[`justify-content` property] aligns the content of the box. We are using `justify-content: center` to align the content of the items to the center.

### Bonus: No media queries

As you could see, we haven't used media queries. Media queries are useful and without them, and there wouldn't be a responsive web design, but it feels so satisfying when we able to build responsive behavior without using one.

## Final thoughts

CSS Grid still may not be the best approach for navigation element, but it works. Always try using CSS Grid where appropriate, even if it solves your problem. If you are a rebel, ignore this thought and use it nevertheless—there are no rules when building web solutions as long as your users are happy. 😎


["Using CSS Grid where appropriate"]: /articles/using-css-grid-where-appropriate/
[`minmax()` function]: https://www.w3.org/TR/css-grid-1/#valdef-grid-template-columns-minmax
[`auto-fit` keyword]: https://www.w3.org/TR/css-grid-1/#valdef-repeat-auto-fit
[`grid-auto-flow` property]: https://www.w3.org/TR/css-grid-1/#propdef-grid-auto-flow
[`auto` keyword]: https://www.w3.org/TR/css-grid-1/#valdef-grid-template-columns-auto
[`repeat()` function]: https://www.w3.org/TR/css-grid-1/#funcdef-repeat
[`dense` keyword]: https://www.w3.org/TR/css-grid-1/#valdef-grid-auto-flow-dense
[`justify-content` property]: https://www.w3.org/TR/css-align-3/#propdef-justify-content
