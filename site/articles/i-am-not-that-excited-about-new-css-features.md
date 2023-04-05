---
layout: index
title: I am not that excited about new CSS features
date: 2022-09-26 10:00:00
tags:
  - blog
  - css
thumbnail: i-am-not-that-excited-about-new-css-features_tb4ntp
descriptionAlt: "I have a confession: I am not that excited about all these new CSS features. Let me tell you why."
description: Discover the reasons why I am not overly enthusiastic about the new CSS features in this thought-provoking article.
type: articles-item
sections2:
  - type: banner-beta
    banner: newsletter
---

I have a confession: I am not that excited about all these new CSS features. Let me tell you why.

## CSS in 2022

The year 2022 has been pretty wild for CSS. There has been a significant number of new features that have rolled out, like:

- [container queries](https://developer.chrome.com/blog/cq-polyfill/)
- [parent selector](https://developer.mozilla.org/en-US/docs/Web/CSS/:has)
- [accent color](https://developer.mozilla.org/en-US/docs/Web/CSS/accent-color), and
- [cascade layers](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer).

These are just the big ones, the game changers. The problem is they are not game changers for everyone. Or maybe for just me.

## Problem #1

Let’s use the `:has` pseudo-class. It is a long-wanted CSS parent selector that might radically change how we write CSS.

While all major browsers are pushing new versions that support these new features, some users still don’t use the latest version of their browsers. That certainly brings down the excitement.

Šime Vidas put it nicely as a comment on Bramus Van Damme’s Twitter post on `:has` supported:

> “Forget Firefox. The :has() selector also doesn’t work in Safari 14, 13, and below, which combined currently have a 5 to 6 times higher usage share on mobile than Firefox.”
>
> — [Šime Vidas](https://twitter.com/simevidas/status/1570773739721330691)

{% cldnrylink "https://twitter.com/simevidas/status/1570773739721330691" "i-am-not-that-excited-about-new-css-features-tweet-sime-vidas_fbghjw" "Screenshot of a tweet from Šime Vidas." 840 274 %}

## Problem #2

Since we didn’t have all these features for ages, we learned to accept CSS limitations, and we had to make sacrifices in our HTML documents. So, not only do we need to know how and where to apply these new features, we should learn how to adapt our HTML structure to these changes.

Maybe this is not a problem but a blessing in disguise. Maybe we could finally have a flat HTML structure, ditch wrappers, and similar techniques. Who knows?

## Problem #3

Adopting new features is not an easy task. When CSS Flexbox was rolled out, everyone was so excited, including me. It was a huge deal. But we didn’t immediately jump in and start to use it.

First, we read all the articles that showed us how to use it. Then we need to understand the axes. After that, we needed to wait for browser support. In the meantime, some of us brave enough [used float fallbacks](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Backwards_Compatibility_of_Flexbox#useful_fallback_techniques). On top of all that, we needed to [deal with bugs](https://github.com/philipwalton/flexbugs). Those were the happy times, but they got us to this point in the frontend development phase.

## Conclusion

Sacha Greif made a great point by asking a question on Twitter today:

> “Should we worry that CSS risks being overwhelmed by niche features and properties that end up make learning it a lot more confusing?
>
> Or is it good to support as many use cases as possible?”
>
> — [Sacha Greif](https://twitter.com/SachaGreif/status/1574287874165702658)

{% cldnrylink "https://twitter.com/SachaGreif/status/1574287874165702658" "i-am-not-that-excited-about-new-css-features-tweet-sacha-greif_j1jm5t" "Screenshot of a tweet from Sacha Greif." 840 420 %}

I honestly don’t know, but I predict that using all these features will be a slow process. We are in the early phase of learning how to use it, but we are fortunate that we don’t need to wait for major browser support that long.
