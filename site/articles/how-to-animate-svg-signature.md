---
layout: index
title: How to animate SVG signature
date: 2020-01-06 09:13:35
tags:
  - blog
  - svg
  - css
  - javascript
thumbnail: How_to_animate_SVG_signature_l1h5a8
description: Let’s see how to animate SVG Signature with a little bit of JavaScript and CSS. We could use JavaScript function to calculate SVG path length and CSS animation to animate SVG strokes.
type: articles-item
sections2:
  - type: banner-beta
    desc: Did you know that I am running **UI Dev Newletter**?
    code: >-
      <form class="embeddable-buttondown-form newsletter wrapper wrapper--beta margin-top text-left" action="https://buttondown.email/api/emails/embed-subscribe/starbist" method="post" target="popupwindow" onsubmit="window.open('https://buttondown.email/starbist', 'popupwindow')">
        <input type="hidden" value="1" name="embed" />
        <div class="margin-top">
          <label for="bd-email">Subscribe here. Enter email.</label>
          <div class="newsletter__input">
            <input class="input" type="email" name="email" id="bd-email" />
            <input class="button button--small" type="submit" value="Subscribe" />
          </div>
        </div>
        <p class="no-margin"><small><a href="https://buttondown.email" target="_blank" rel="noreferrer">Powered by Buttondown</a></small></p>
        <div class="cta">
        </form>
---

Let’s see how to animate SVG signature with a little bit of JavaScript and CSS. In this demo, I would show you how to use JavaScript function to calculate SVG path length and CSS animation to animate SVG strokes. You could see the final result on [About page] or [CodePen].

<!-- more -->

![Animated SVG signature - S.Bistrović.](https://res.cloudinary.com/starbist/image/upload/w_720,q_100/v1578317221/gif-signature3_jiyf17.gif)

## SVG Signature

Let’s start by creating an SVG signature. I am using Sketch to make SVG paths for letters. Here’s how it looks in Edit mode:

{% cldnry "sketch-signature_u7trkt" "Screenshot of SVG signature paths in Sketch application." %}

It contains eight different paths for different paths of signature. For example, one path represents the letter “S”, one path represents the dot, and so on.

Once I have exported the SVG from Sketch, I reordered paths in such a way that they appear as I want them to animate: first the letter “S”, then the dot, then the letter “B” and so on. Also, I have added `autograph` and `autograph__path` classes for easier JavaScript manipulation and styling. Here's the final file:

``` html
<svg class="autograph" height="103" viewBox="0 0 424 103" width="424" xmlns="http://www.w3.org/2000/svg">
  <g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" transform="translate(2 2)">
    <path class="autograph__path"
    d="m52.9053119 30.5944651c4.4979146-5.981029 6.3597765-11.3263744 5.5855855-16.0360361-2.1621621-13.15315311-10.9863929-13.558429-15.4908974-13.558429-10.0900901 0-20 7.99987048-20.7253188 13.558429-3.0543891 23.4076405 31.8852386 28.5472234 30.7253188 52.441571-.9009009 18.5585586-12.9740033 27.7974004-25 29-12.6126126 1.2612613-28.33708674-6.8576105-27-18 .48048048-4.004004 5.81381381-7.6706707 16-11" />
    <path class="autograph__path"
    d="m61.9059048 93.3815042c1.7863267-3.215388-4.287184-4.6444494-4.6444494-1.4290614-.3572653 2.143592 2.8581227 4.6444494 4.6444494 1.4290614z" />
    <path class="autograph__path" d="m102 1c-1.633522 27.1862259-3.3001883 44.8528926-5 53s-7.033145 22.1471074-16 42" />
    <path class="autograph__path"
    d="m100.288288 6.6036036c4.152508-3.963964 8.176532-5.945946 12.072072-5.945946 11.531532 0 17.63964 3.3423424 16.63964 14.3423424 0 13-12.06006 22.3543543-32 28 21.430945-5.8755744 31.400915 1.8721733 29.90991 23.2432432-1.081081 15.4954958-25.606607 24.6336338-48.90991 27.7567568 18.3783784-31.111111 44.546547-46.5975976 58-49 7.684578-1.3722461.201094 23.4415679-4 51 9.626744-23.6648293 10.754389-40.1268415 26.472991-48.7743243 3.062782-1.6849689 5.899902-2.8000991 9.527009-2.2256757 2.58117.4087788 5.287656.9554275 10 6-7-8-16.06468-6.1122883-19.527009-1.6121622-10.472991 13.6121622 15.527009 13.6121622 16.527009 29.6121622.666667 10.6666667-5.666667 16.3333333-19 17-16.664879 2.1642702 8.261928 6.47368 29-21 9.19448-12.1807945 18.19448-36.8474612 27-74-21.276288 33.987688-24.609621 65.6543547-10 95 21.886044-29.4751082 26.735893-49.2438774 35-51 9.609609-2.042042 6.726727 21.4504503 0 51 4.444444-39.2792794 18.42042-58.8078078 38-51-8.828829 2.1621621-15.315998 15.4560012-16.711712 28.1171176-1.126809 10.2217665 4.625073 22.8828824 11.711712 22.8828824 12.252252 0 19.279279-10.0010654 19.279279-20.5405401 0-23.0630631-9.234234-30.4594599-12.477477-30.4594599 12.432432 3.9639639 30.297297-6.8468469 31.198198 0 2.644012 20.0944903-19 51 5 51 22 0 19.936937-49.1981982 23-51 2.342343 8.6486486 18.480018-2.1232717 18 0-3.570281 15.7924726-11.376494 44.5410656-10 51 4.504505-13.1531532 17-47 45.900901-51.1711712 6.669031-.9625192 8.255066 5.4033441 3.963964 18.5585586 4.204205-13.3333334 2.882883-19.5195196-3.963964-18.5585586-13.059803 1.8329549-22.530745 8.0837151-28.69016 31.4759854-1.237235 12.5179014 1.692518 19.0829633 8.789259 19.6951858 4.616353.3982441 10.995909-1.7223734 19.138668-6.3618524" />
    <path class="autograph__path" d="m178 30c11-4 54 6 73.734117 1.8554251" />
    <path class="autograph__path" d="m419 1-21 27.333" />
    <path class="autograph__path"
    d="m140.729905 31.3135042c1.786326-3.215388-4.287184-4.6444494-4.64445-1.4290614-.357265 2.1435921 2.858123 4.6444494 4.64445 1.4290614z" />
    <path class="autograph__path"
    d="m360.729905 31.3135042c1.786326-3.215388-4.287184-4.6444494-4.64445-1.4290614-.357265 2.1435921 2.858123 4.6444494 4.64445 1.4290614z" />
  </g>
</svg>
```

It is vital to make SVG with strokes, as we are going to animate strokes. Every path or stroke has its length. We are going to use these strokes and lengths in our animation.

## JavaScript calculation

To calculate the length of a stroke, we could use a manual method of guessing approximate length. We should use two dash attributes in this case:

- `stroke-dasharray`, which makes the stroke dashed, and
- `stroke-dashoffset`, which pushes the stroke position out of the visible path.

These two properties should be equal to make it work. Now we could try to guess how long is the stroke. But we are programmers, and we don’t have to guess: we could do it programmatically. Here’s the concept of how it should work:

- First, we set the overall desirable animation duration.
- Next, we make use of [`getTotalLength()`] function to calculate overall path length combined.
- Next, we calculate animation durations and delays for each path by the ratio of the overall path length.
- Next, we set `stroke-dasharray` and `stroke-dashoffset` which would position the dashed stroke outside of the visible path.
- Finally, we start the animation by adding the class `animated` to the document body.

Here's the whole JavaScript function (with comments for easier understanding):

``` js
const calcPaths = (totalDur) => {
  // unset 'animated' class to body which will reset the animation
  document.body.classList.add('animated')

  // get all SVG elements - lines and dots
  const paths = document.querySelectorAll('.autograph__path')

  // prepare path length variable
  let len = 0

  // prepare animation delay length variable
  let delay = 0

  // escape if no elements found
  if (!paths.length) {
    return false
  }

  // set duration in seconds of animation to default if not set
  const totalDuration = totalDur || 7

  // calculate the full path length
  paths.forEach((path) => {
    const totalLen = path.getTotalLength()
    len += totalLen
  })

  paths.forEach((path) => {
    const pathElem = path

    // get current path length
    const totalLen = path.getTotalLength()

    // calculate current animation duration
    const duration = totalLen / len * totalDuration

    // set animation duration and delay
    pathElem.style.animationDuration = `${duration < 0.2 ? 0.2 : duration}s`
    pathElem.style.animationDelay = `${delay}s`

    // set dash array and offset to path length - this is how you hide the line
    pathElem.setAttribute('stroke-dasharray', totalLen)
    pathElem.setAttribute('stroke-dashoffset', totalLen)

    // set delay for the next path - added .2 seconds to make it more realistic
    delay += duration + 0.2
  })

  // set 'animated' class to body which will start the animation
  document.body.classList.add('animated')
  return true
}
calcPaths(5)
```

> Pro tip: Be sure to check [the browser compability] before you use this technique.

## CSS Animation

CSS Animation consists of setting the final `stroke-dashoffset` back to zero.

I have used `linear` for `animation-timing-function` and `forwards` for `animation-fill-mode`. The first attribute makes the animation linear, which seemed the most natural to me. The second one tells the animation to stay at 100% state.

``` scss
.autograph__path {
  opacity: 0;
  animation-timing-function: linear;
  animation-fill-mode: forwards;

  .animated & {
    opacity: 1;
    animation-name: line;
  }
}

@keyframes line {
  100% {
    stroke-dashoffset: 0;
  }
}
```

I have used opacity to prevent flick during the load time. It works better when used in combination with Critical CSS.

## Conclusion

There you have it, an animated SVG signature. With a little bit of SVG, JavaScript and CSS knowledge, you could create appealing drawing animation. I have found more than a couple of plugins that handle animations like this one, but I always prefer using less code. I have made this demo in less than 100 lines of code. See the full demo here:

{% codepen "CiTA" "abzJqQv" "dark" "result" "400" %}

[About page]: /about/
[CodePen]: https://codepen.io/CiTA/full/abzJqQv
[the browser compability]: https://developer.mozilla.org/en-US/docs/Web/API/SVGGeometryElement/getTotalLength#Browser_compatibility
[`getTotalLength()`]: https://developer.mozilla.org/en-US/docs/Web/API/SVGGeometryElement/getTotalLength
