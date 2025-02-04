---
layout: default
title: How to find and insert Unicode symbols in HTML
date: 2021-09-08 22:21:00
tags:
  - blog
  - unicode
  - vs code
description: I will show you a few ways how you could find and insert the Unicode symbol in HTML (or any other file).
type: articles-item
---

When I started using MacBook, I couldn’t remember how to type the _right arrow_ (→) symbol. I had a very inefficient process. First, I opened the Keyboard settings on my Mac, and then I inspected sources by pressing _Shift_ or _Option_ or other functional keys until I found the character.

{% video "https://res.cloudinary.com/starbist/image/upload/v1687771538/k_riufmr" 759 676 "autoplay" "loop" "mute" true "center" %}

Later, I learned that I could type _“arrow right alt code”_ in Google and copy-paste the symbol.

{% cldnryfetch "arrow-right-alt-code-google-search_zedjcz" "Screenshot of Google search for right arrow alt code." false true "center" %}

There are also dedicated sites with a complete list of Unicode characters like the arrow right. I have bookmarked [this site](//xahlee.info/comp/unicode_index.html?q=). There are other ones, like [this one](//unicode-table.com/en/) or [this one](https://unicodearrows.com/), that are maybe more user-friendly. However, finding the character on these sites isn’t efficient, too.

A few months ago, I started to add snippets in my VS Code. The thing with snippets is that you have to learn them.

{% cldnryfetch "arrow-right-vs-code-snippet-example_soumta" "Screenshot of right arrow Unicode symbol snippet in VS Code." false true "center" %}

But, unfortunately, that also means you could forget them.

{% note %}
Here’s how to configure the snippet in VS Code:

1. Press `Command + Shift + p` and type “snippets.”
2. Select “Preferences: Configure User Snippets.”
3. Select “Global” (or other, if you want file-based snippets).
4. Add the following code:
{% endnote %}

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

{% video "https://res.cloudinary.com/starbist/image/upload/v1687771538/l_t0b40s" 759 394 "autoplay" "loop" "mute" true "center" %}

{% note "Important update" %}
It was brought to my attention that macOS has this thing called Character Viewer. This might be the easiest way to insert Unicode. To open Character Viewer, press _Command + Control + Space_. You could search and insert most of the characters. You could [even customize the app](https://www.webnots.com/how-to-use-character-viewer-in-mac/) for easier usage.
{% endnote %}
