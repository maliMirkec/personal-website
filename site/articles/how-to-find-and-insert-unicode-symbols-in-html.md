---
layout: index
title: How to find and insert Unicode symbols in HTML
date: 2021-09-08 22:21:00
updated: 2021-09-10 13:59:00
tags:
  - blog
  - unicode
  - vs code
thumbnail: how-to-find-and-insert-unicode-symbols-in-html_chvqia
description: I will show you a few ways how you could find and insert the Unicode symbol in HTML (or any other file).
type: articles-item
sections2:
  - type: banner-beta
    desc: Did you know that I am running **UI Dev Newsletter**?
    code: >-
      <form class="embeddable-buttondown-form newsletter wrapper wrapper--gamma margin-top text-left" action="https://buttondown.email/api/emails/embed-subscribe/starbist" method="post" target="popupwindow" onsubmit="window.open('https://buttondown.email/starbist', 'popupwindow')">
        <input type="hidden" value="1" name="embed" />
        <div class="margin-top">
          <label for="bd-email">Subscribe here. Enter email.</label>
          <div class="newsletter__input">
            <input class="input" type="email" name="email" id="bd-email" />
            <input class="button button--small" type="submit" value="Subscribe" />
          </div>
        </div>
        <p class="no-margin"><small><a href="https://buttondown.email" target="_blank" rel="noreferrer">Powered by Buttondown</a></small></p>
---

When I started using MacBook, I couldn’t remember how to type the _right arrow_ (→) symbol. I had a very inefficient process. First, I opened the Keyboard settings on my Mac, and then I inspected sources by pressing _Shift_ or _Option_ or other functional keys until I found the character.

![An example of three-step action on MacOs for inspecting keyboard symbols: 1. searching for keyboard settings; 2. opening keyboard settings; 3. finding the right arrow character.](https://res.cloudinary.com/starbist/image/upload/v1631130629/k_riufmr.gif)

Later, I learned that I could type _“arrow right alt code”_ in Google and copy-paste the symbol.

{% cldnry "arrow-right-alt-code-google-search_zedjcz" "Screenshot of Google search for right arrow alt code." %}

There are also dedicated sites with a complete list of Unicode characters like the arrow right. I have bookmarked [this site](//xahlee.info/comp/unicode_index.html). There are other ones, like [this one](//unicode-table.com/en/) or [this one](https://unicodearrows.com/), that are maybe more user-friendly. However, finding the character on these sites isn’t efficient, too.

A few months ago, I started to add snippets in my VS Code. The thing with snippets is that you have to learn them.

{% cldnry "arrow-right-vs-code-snippet-example_soumta" "Screenshot of right arrow Unicode symbol snippet in VS Code." %}

But, unfortunately, that also means you could forget them.

> Here’s how to configure the snippet in VS Code:
>
> 1. Press _Command + Shift + p_ and type _“snippets.”_
> 2. Select _Preferences: Configure User Snippets_.
> 3. Select _Global_ (or other, if you want file-based snippets).
> 4. Add the following code:

```json
{
  ...
  "Arrow right": {
    "prefix": "*->",
    "body": [
      "→"
    ],
    "description": "Inserts arrow right →"
  }
}
```

Recently I found out an even better solution, the [**Insert Unicode extension**](https://marketplace.visualstudio.com/items?itemName=brunnerh.insert-unicode) for VS Code. This extension allows you to search and insert any Unicode character. To do so, press _Command + Shift + p_, type _“insert unicode,”_ and select _Insert Unicode: Insert_ command. After that, search for the character, select it, and that’s it!

![An example of VS Code extension for inserting Unicode symbol.](https://res.cloudinary.com/starbist/image/upload/v1631130634/l_t0b40s.gif)

**Update**: It was brought to my attention that macOS has this thing called Character Viewer. This might be the easiest way to insert Unicode. To open Character Viewer, press _Command + Control + Space_. You could search and insert most of the characters. You could [even customize the app](https://www.webnots.com/how-to-use-character-viewer-in-mac/) for easier usage.
