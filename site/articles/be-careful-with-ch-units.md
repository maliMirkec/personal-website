---
layout: default
title: "Be careful with ch units"
date: 2023-06-06 10:00:00
tags:
  - blog
  - css
  - performance
description: Read more about peculiar CLS issues encountered on my site because I used system fonts, CSS ch unit, and Grammarly extension.
type: articles-item
---

Recently I discovered some weird issues with CLS, although my Lighthouse CLS results were perfect. Me being me, I started to investigate this odd behavior, and I learned a lot about system fonts and CSS `ch` unit along the way.

## System fonts

After discovering the [Modern Font Stacks website](https://modernfontstacks.com/) a few months ago, I immediately updated my site with brand-new system fonts.

I chose [Neo-Grotesque](https://github.com/system-fonts/modern-font-stacks#neo-grotesque) for my sans-serif font, which stack uses Inter font, amongst others. It doesn’t just use Inter, but Inter is the very first in the font stack. This will be crucial information for those impatient to solve my issue. But I would like to tell the whole story anyway, as I think a few takeaways might be helpful for everyone.

## CLS issue

It wasn’t until recently that I noticed a Cumulative Layout Shift issue on my site.

I thought it had to do with my critical CSS, as it usually does, so I rerun [my script for extracting critical CSS](https://www.npmjs.com/package/acclaimed), but that didn’t fix the CLS issue.

Next, I tried to manually find which CSS affects the CLS issue, but I could not find anything. After that, as a diligent frontend developer, I tried to replicate the issue on other browsers, but the problem wasn’t there. Everything worked perfectly—no CLS flicks or any other issues.

Because this kind of stuff makes me crazy, and I couldn’t just let it go, I was determined to find the real cause of my issue. My first guess was that some browser extension might be the cause, as I use quite a few. So I manually turned every extension off one by one and finally discovered that the Grammarly browser extension was the cause. When turned off, there were no CLS issues. This didn’t make sense, so I had to look under the hood to understand the issue.

{% video "https://res.cloudinary.com/starbist/image/upload/w_759,q_100/v1684846670/cls-issue4_kznqfh" 759 671 'autoplay' 'loop' 'mute' true %}

I opened the network tab in Chrome DevTools and discovered that Inter font was downloaded. My copy switched to Inter font, but why was there a flick. Nothing made sense until I remembered that my wrapper’s `max-width` was `60ch`.

```css
.wrapper {
  max-width: 60ch;
}
```

So the browser used the first available font defined in the font stack. That was Roboto because I didn’t have Inter font installed on my machine (Firefox DevTools tells you which fonts are used on specific elements).

{% cldnryimg "firefox-devtools_owp9s3" "Screenshot of Firefox DevTools showing Roboto font inspector." 759 242 %}

Roboto’s character width, `ch`, differs from Inter’s. Since Grammarly downloaded the font after Roboto was applied, that caused the font change, the wrapper width change, and the CLS flick.

The weird thing is that when I removed the Inter font from the font stack, Grammarly didn’t download it. So it must be some specific code that caused this situation.

I tried to debug this specific behavior by inspecting the source code of the Grammarly Chrome extension, but I couldn’t understand its minified code. Since the extension isn’t publicly available and I couldn’t find the unminified code, I gave up. All I found is a lot of occurrences of the Inter font in JavaScript files which makes me believe that the cause is in the JavaScript code.

## Breakdown

So, here’s the breakdown of my CLS issue:

- I defined two system fonts for my site: serif and sans-serif, which uses Inter as the first font in the font stack.
- I set up my content wrapper to `max-width: 60ch`.
- The width was defined by the width of my local font Roboto since I don’t have Inter installed on my computer.
- Grammarly downloaded the Inter font from the extension directory (which I cannot figure out why).
- When the Inter font was loaded, it made my wrapper wider.

## Conclusion

Most people will not experience these issues, but it is important to understand how system fonts are used. It is also important to understand that the `ch` unit depends on the font applied to the element. So be extra careful when using system fonts and `ch` units because every decision you make on your site, even trivial as font family or CSS unit, could cause unexpected results.

And remember to test your code in Incognito or Private browser mode with your extensions disabled.
