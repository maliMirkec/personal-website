---
layout: index
title: Using CSS Grid where appropriate
tags:
  - blog
  - css
  - grid
thumbnail: Using_CSS_Grid_where_appropriate_avifto
date: 2017-07-30 22:17:48
description: Recently I've redesigned my blog, as some of you could notice. During this process, I decided it is time to learn more about CSS Grid and actually use it. Here's what I learned.
type: articles-item
sections2:
  - type: banner-beta
    banner: newsletter
---

Recently I've redesigned my blog, as some of you could notice. During this process, I decided it is time to learn more about [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) and actually use it. Here's what I learned.

<!-- more -->

## Using CSS Grid

Every time I'm doing a new (re)design, I usually start with the header. The first component in a header is navigation. My website architecture is not complicated, just a few pages, blog category and posts.

``` html
<header class="header">
  <ul class="nav">
    <li class="nav__item">
      <a class="nav__link" href="/link/to/nav/item">Item 1</a>
    </li>
    <li class="nav__item">
      <a class="nav__link" href="/link/to/nav/item">Item 2</a>
    </li>
    <li class="nav__item">
      <a class="nav__link" href="/link/to/nav/item">Item 3</a>
    </li>
    <li class="nav__item">
      <a class="nav__link" href="/link/to/nav/item">Item 4</a>
    </li>
  </ul>
</header>
```

I wanted to try CSS Grid here, so I started by adding `display: grid` on my `ul` element. At first, I wasn't sure how many elements will be in the menu, 4 or 5. But I had to know that information in order to define my `grid-template-columns`. Or do I?

I discovered there's a property that could help me in this specific situation. And it is called [`grid-auto-flow`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow).

> “The grid-auto-flow CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.”

I'll set this property to `column` and grid will be smart enough to add new columns as necessary.

``` css
.nav {
  display: grid;
  grid-auto-flow: row;
}
@media screen and (min-width: $mq-mobile) {
  .nav {
    grid-auto-flow: column;
  }
}
```

To create a responsive menu, I've added a media query for a smaller screen and stacked items one below other using `grid-auto-flow: row`. Now I could use either 4 or 5 elements in my navigation. Everything works.

{% codepen "CiTA" "brVbjx" "dark" "result" "300" false true %}

## Using CSS Grid items

Then new problems arrived. I wanted to create [a Hexo theme](https://hexo.io/docs/themes.html) and [share it with the community](https://hexo.io/themes/), just like I did with [hexo-codepen](https://www.npmjs.com/package/hexo-codepen) and [hexo-caniuse](https://www.npmjs.com/package/hexo-caniuse) plugins.

In order to do that, I wanted to provide developers with an option to add as many menu elements as needed. And then things started to get complicated.

I thought it would be a good idea to allow a maximum of 4 elements per row in the header navigation. If there are more than 4 elements, place them in the new row.

I was playing around with various CSS Grid properties to achieve desired behavior but nothing worked with `grid-auto-flow`.

Then I've tried a different approach: instead of trying to define a grid, I'll try to position grid items individually. I'll place first grid item in the first column of the first row and then second grid item in the second column of the first row and so on.

``` css
@media screen and (min-width: 320px) {
  .nav__item:nth-child(1) {
    grid-area: 1 / 1 / 2 / 2;
  }
  .nav__item:nth-child(2) {
    grid-area: 1 / 2 / 2 / 3;
  }
  .
  ..
  ...
}
```

CSS Grid is smart enough to create a grid from provided `grid-area` properties. It wasn't the best solution and certainly not the most elegant one, but it worked.

{% codepen "CiTA" "BdoaQb" "dark" "result" "300" false true %}

## Using CSS Grid correctly

I couldn't be satisfied with that kind of a solution. By looking at the compiled CSS, I realized that the file was too big because of all those `nth-child` pseudo classes. I had to dig deeper.

After studying every grid property I finally got the answer. I should create desired grid, but use `auto` for sizing.

``` css
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

I've defined 4 columns and 2 rows and the result looks the same.

{% codepen "CiTA" "MvKQXZ" "dark" "result" "300" false true %}

## Using flexbox as fallback

CSS Grid isn't fully supported yet.

{% caniuse "css-grid" "current" %}

I needed a decent fallback for CSS grid. Because I'm a huge fan of Flexbox and because the support for Flexbox is pretty good, it was natural to create a fallback to Flexbox.

{% caniuse "flexbox" "current" %}

I first heard about this method when [Vitaly Friedman](https://www.smashingmagazine.com/author/vitaly-friedman/) from [Smashing Magazine](https://www.smashingmagazine.com/) had a workshop in Osijek earlier this year. The principle is that we should first define Flexbox and than add CSS Grid using `@supports` rule.

``` css
.nav {
  display: flex;
  flex-wrap: wrap;
}
.nav__item {
  flex: 0 0 auto;
  width: 100%;
}
@media screen and (min-width: $mq-mobile) {
  .nav__item {
    width: calc(100% / 4);
  }
}
// use grid if supported
@supports (display:grid) and (grid-auto-flow: row) {
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
}
```

To prevent Edge from using CSS Grid, I've added `grid-auto-flow: row` rule. This property has [no support](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow#Browser_compatibility) in Edge.

The result is still the same, with an exception of cross browser support.

{% codepen "CiTA" "gxPzwJ" "dark" "result" "300" false true %}

## A lesson learned

I've learned a lot by building a navigation using CSS Grid. The biggest lesson here is to use CSS Grid where appropriate. And building navigation using CSS Grid is certainly not appropriate, in my opinion.

## Final thoughts

I really enjoyed building a navigation component using many different techniques. There are many ways how components could be built and there is no correct or wrong solution, as long as it works. That's why I love CSS.

Are you using CSS Grid? In what situations? Leave a comment below or [ping me on Twitter](https://twitter.com/malimirkeccita).

> “I wrote a newer article on the same subject, [Using CSS Grid where appropriate (revisited)](/articles/using-css-grid-where-appropriate-revisited/).”
