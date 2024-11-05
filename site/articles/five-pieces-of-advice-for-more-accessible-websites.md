---
layout: index
title: Five pieces of advice for more accessible websites
date: 2023-04-03 10:00:02
tags:
  - blog
  - accessibility
description: To improve stats for an annual accessibility report, start with these five quick wins that will make your site much more accessible.
type: articles-item
sections2:
  - type: banner-beta
    banner: newsletter
---

On March 29, WebAIM published [an annual accessibility report](https://webaim.org/projects/million/). Unfortunately, the results are devastating, as usual. To improve stats for the next year, start with these five quick wins that will make your site much more accessible.

## Accessibility starts with HTML

I am not an accessibility expert by no means. However, I follow accessibility leaders, and I read a lot of articles about it, so it would be fair to say that I develop with accessibility in mind ([my site has no accessibility error](https://webaim.org/projects/million/lookup?domain=silvestar.codes)). Even when accessibility is out of the budget, you could still improve accessibility without spending too much time. Improving your HTML is a good starting point, so let’s look at how to start.

## Document language

Adding language to your HTML document must be one of the most straightforward tasks, even if your site is multilingual. Inspect the source code of your site and see if the `lang` attribute is present in your `<html>` tag.

```html
<html lang="en">
```

Read more about [declaring language in HTML](https://webaim.org/techniques/language/).

## The “skip” link

It might be a good idea to add a link at the top of the page that helps users skip to the main part of the page (there should be only one `<main>` element). It shouldn’t be too hard to implement such a link once and reuse it on every page (where it makes sense).

```html
<a href="#main">Skip to main content</a>
...
<main id="main">...</main>
```

Read more about [creating “Skip Navigation” links](https://webaim.org/techniques/skipnav/).

## Labels and input elements

Every `input` field must have its `label`. Users are used to labels and rely on them to understand what information to provide.

```html
<label for="firstName">First name:</label>
<input type="text" id="firstName">
```

Read more about [creating accessible forms](https://webaim.org/techniques/forms/).

## Empty buttons and links

Assistive technologies cannot properly announce empty buttons and links. So if you have empty buttons or links, take advantage of the `.visually-hidden` hack or label the button using `aria-label`. Remember to apply this advice, no matter the project’s stage. Once you lose track of these things, it is more unlikely that you will fix them.

```html
<button class="button-play" aria-label="Play video"></button>
```

See more [examples for buttons with non-empty accessible names](https://www.w3.org/WAI/standards-guidelines/act/rules/97a4e1/).

## Alternative image text

Always add alternative text to your images and try to write it as a sentence.

```html
<img src="/tree.jpg" alt="A single oak three in the meadow.">
```

Read more about [how to provide the best alternative text for images](https://webaim.org/techniques/alttext/).

## Conclusion

There are a lot of ways how you could make your site more accessible. Start with these five examples, and allow every user to understand your website better.
