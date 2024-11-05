---
layout: index
title: With or without the JS framework
date: 2023-03-21 12:00:00
tags:
  - blog
  - javascript
  - web dev
description: Is it really that unusual for a frontend developer not to use a JS framework?
type: articles-item
sections2:
  - type: banner-beta
    banner: newsletter
---

In his [recent article](https://www.joshwcomeau.com/blog/the-end-of-frontend-development/), Josh Comeau predicts AI won’t overtake frontend development (at least not soon). I agree, but something else Mr. Comeau wrote made me write this post.

> “And by the way, frontend is still complicated and hard even when it doesn’t involve a JS framework. I have a tremendous amount of respect for folks who specialize in producing high-quality websites using HTML, CSS, and vanilla JS, focused on usability and accessibility.”
>
> — [Josh Comeau](https://www.joshwcomeau.com/blog/the-end-of-frontend-development/)

At first, this statement sounded very flattering. I fall into this category, and I thought it was very kind that Mr. Comeau highlighted how he respects people who don’t use JS frameworks and can still produce top-notch sites.

But then it started to sound odd.

> “…even when it doesn’t involve a JS framework.”

Is it really that unusual for a frontend developer not to use a JS framework?

I’m sure Mr. Comeau didn’t mean harm (really, I have the utmost respect for Mr. Comeau and his work), but his statement raises questions about the current state of frontend development. Are JS frameworks now considered the standard, and are developers who don’t use them rare? In my experience of over ten years, I have never used a JS framework to build a website, only for web apps. Web app - sure (although a long time ago), but websites - never.

According to my research (an actual [job](/articles/in-search-of-a-css-developer-job/) [search](/articles/in-search-of-a-frontend-ui-developer-job/)), finding a frontend position that doesn’t require JS framework knowledge is a true rarity. Nine of ten frontend job ads require some JS framework skill, maybe even more. Perhaps the reason is that these [JS frameworks are taking us as hostages](https://emnudge.dev/blog/react-hostage), as noted by EmNudge.

> “And so my current job is React. My next job will be React. The one after might as well.”
>
> — [EmNudge](https://emnudge.dev/blog/react-hostage)

JS frameworks have their purpose and place, but I don’t think a regular website should have ~65k lines of code (it is fine for Mr. Comeau because his site is his playground, and I totally get it). However, for most regular sites, vanilla JS is sufficient.

Zach Leatherman’s recent [chronologically ordered list of React’s criticisms](https://www.zachleat.com/web/react-criticism/) highlights performance as a central pain point when using React. I wish every React developer reads this. Not only reads - understands.

> “An analysis of Core Web Vitals across 9.3 million websites as of February 6, 2023 shows that Core Web Vitals for both [React and Next.js shows that both perform **worse**](https://lookerstudio.google.com/reporting/55bc8fad-44c2-4280-aa0b-5f3f0cd3d2be?s=lD9m_MQgyGU) **than the aggregation of all other sites** in the archive for both mobile and desktop.”
>
> — [Zach Leatherman](https://www.zachleat.com/web/react-criticism/)

Every developer should strive to ship as little code as possible and avoid shipping entire frameworks for a simple website. The JS ecosystem’s diversity is excellent, but developers should consider building websites without JS frameworks. I am sure they will soon be amazed that it is even possible. But it is possible, and it will always be possible.

[Chris Ferdinandi recommends using vanilla JS](https://gomakethings.com/what-framework-should-i-use/) if your priority is long-term resilience and maintainability, and I couldn’t agree more.

> “It will never become obsolete, or suffer from a breaking version change. It’s fast and performant, results in less code sent over the wire, and generally has a smaller footprint of things to break.
>
> It does sometimes require a bit more wiring of things together for the developer, but often it’s actually less work (and less work in the long term) than using a library.”
>
> — [Chris Ferdinandi](https://gomakethings.com/what-framework-should-i-use/)

While JS frameworks are currently prevalent, they will eventually become a thing of the past. However, vanilla JS will always remain a core language and embrace every developer who returns to it.
