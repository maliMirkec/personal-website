---
layout: index
title: Building an animated sticky header with custom offset
date: 2018-12-07 18:08:55
tags:
  - blog
  - css
  - javascript
thumbnail: Building_an_Animated_Sticky_Header_With_Custom_Offset_trsnr5
descriptionAlt: "With the appearance of the position: sticky property, we could create sticky elements without JavaScript plugins. But creating sticky elements with animations couldn't be achieved without a little bit of JavaScript."
description: "Position: sticky allows for CSS-only sticky elements, but animating stucked element couldn't be done without JavaScript."
type: articles-item
sections2:
  - type: banner-beta
    banner: newsletter
---

Sticky elements are used all across the web. With the appearance of the `position: sticky` property, we could create sticky elements without JavaScript plugins. But creating sticky elements with animations couldn't be achieved without a little bit of JavaScript.

<!-- more -->

## The specifications

The task is to build a sticky header that appears when the user scrolls past the static header or on a custom offset position. When scrolling down, the static header should stay at its place, while the sticky header should roll down. When scrolling up, the sticky header should disappear, and the static header should roll down. Note that the content of the static header and the sticky header differs.

## The solution

To make it easier to understand the specifications, see this pen that contains the full solution:

{% codepen "CiTA" "BGQPBz" "dark" "result" "550" false true %}

## The breakdown

For a better understanding of how this code works, we should examine the HTML structure.

## HTML

Here's the simplified preview of the HTML structure:

``` html
<main>
  <header>
    <div class="header header--alpha">
      ...
    </div>
    <div class="header header--beta">
      ...
    </div>
  </header>
  <div class="fake-header"></div>
  <article>
    ...
  </article>
</main>
```

Inside the `main` element, we have `header,` `.fake-header` and `article` elements. To make `position: sticky` work, the sticky element should be inside the scrollable element—the `main` element in our case.

Header holds two elements:
- `.header--alpha`, the static header, and
- `.header--beta`, the sticky header.

## CSS

First, let's style our wrapper element. It should have position relative by default, and sticky once the offset is reached.

``` css
header {
  top: 0;
  position: relative;
  overflow: hidden;
}

header.sticky {
  position: sticky;
}
```

The property `top: 0` would make sure our header is stuck to the top, and the property `overflow: hidden` hides everything outside of the `header` element.

Next, we should define the behavior of the header parts.

``` css
.header--alpha {
  transition: .225s ease-out;
}

.sticky .header--alpha {
  opacity: .5;
  transform: translateY(-100%);
  transition: none;
}
```

`.header--alpha`, our static header is visible by default. When the user scrolls past the offset, and the wrapper `header` element becomes sticky, it will be translated outside of the wrapper element instantaneously without any transition effect. Note that element will be transitioned when it goes to the original position when sticky effect won't be active.

``` css
.header--beta {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  opacity: .5;
  transform: translateY(-100%);
}

.sticky .header--beta {
  opacity: 1;
  transform: translateY(0);
  transition: .35s ease-out;
}
```

`.header--beta`, our sticky header is positioned absolutely and translated outside of the wrapper `header` element. When the sticky effect is activated, it will be translated and transitioned in the original position.

## JavaScript

You might have noticed the `.fake-header` element.

``` css
.fake-header {
  height: 1px;
  position: relative;
}
```

This element serves as an offset for the scroll. When it reaches the top of the viewport, the header becomes sticky. And when the header becomes sticky, the fake element will be pushed up by the height of the header plus one extra pixel. When the user scrolls up and reaches the fake element in its new position, the sticky effect will be turned off.

``` js
const $realSticky = document.querySelector("header");
const $fakeSticky = document.querySelector(".fake-header");

const stickyHeader = () => function() {
  const sr1 = $fakeSticky.getBoundingClientRect();
  const sr2 = $realSticky.getBoundingClientRect();

  if (sr1.top > 0) {
    $realSticky.classList.remove("sticky");
    $fakeSticky.style.top = 0;
  } else {
    $realSticky.classList.add("sticky");
    $fakeSticky.style.top = `-${sr2.height + 1}px`;
  }
};

window.addEventListener("scroll", _.debounce(stickyHeader(), 15));
```

In this example, [lodash debounce](https://lodash.com/docs/4.17.10#debounce) function is used to execute the task on scroll event.

{% note %}
_I am aware the I could write better JS code and avoid adding the `.fake-header` element, but I wanted to create a demo without too many calculations._
{% endnote %}

## Extra

Since the static header determines the height of the wrapper element, we have a problem with selecting or clicking on the content immediately after the sticky header, once it appears.

We could use pointer-events to fix this issue:

``` css
header {
  pointer-events: none;
}

.header {
  pointer-events: all;
}
```

First we would set `pointer-events` to `none` to the `header` element to disable click/hover events, and then we would set the `pointer-events` to `all` to reenable them again.

## Conclusion

You could see the full demo [on my Codepen](https://codepen.io/CiTA/pen/BGQPBz).

This demo uses [`position: sticky`](https://caniuse.com/#search=position%3A%20sticky), and [`pointer-events`](https://caniuse.com/#search=pointer-events) properties that have limited support.

I am really excited to see how fast CSS is moving. Brand new properties, like `position: sticky` and `pointer-events` allows us to create better experience for the end user more easily and natively. And support is getting better and better every day. 🏆


