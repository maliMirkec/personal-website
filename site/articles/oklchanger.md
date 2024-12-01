---
layout: index
title: OKLCHanger VS Code extension
date: 2024-11-05 15:00:00
tags:
  - blog
  - css
  - vs code
  - productivity
description: I was inspired by an article on the Oklab color format and decided to develop a VS Code extension that effortlessly converts any color format to Oklab.
type: articles-item
sections2:
  - type: banner-beta
    banner: newsletter
    animate: true
---

I was inspired by an article on the Oklab color format and decided to develop [a VS Code extension that effortlessly converts any color format to Oklab](https://marketplace.visualstudio.com/items?itemName=starbist.oklchanger).

Earlier this year, Andrey Sitnik from Evil Martians published [an article explaining why they transitioned from RGB and HSL to the new Oklab color format](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl). Oklab uses a cylindrical coordinate system incorporating a hue angle (C) and chroma (H). This approach makes representing and manipulating colors easier based on human perception, especially for color picking and blending.

The same company also created [a tool for picking and converting Oklch colors](https://oklch.com/). I started using this tool while working on a project, and just like the Clamp generator, I found that constantly switching between my code editor and browser to copy and paste was time-consuming. This led me to another idea: I should also build an extension for this task, given that I had already developed one to [generate clamp values](https://www.silvestar.codes/articles/clamp-it/).

Once again, I relied on ChatGPT to help prepare and guide the script until we reached the final result.

The extension uses [the culori library](https://culorijs.org/) to convert colors to Oklab format. Initially, I struggled to get the library to work with 8-digit HEX colors, but eventually, I made it function properly.

To see it in action, select the code block containing colors you want to convert, and then choose `OKLCHanger!` command from the command palette:

{% video 'https://res.cloudinary.com/starbist/video/upload/v1730815094/oklchanger_bau00m' 759 278 'autoplay' 'loop' 'mute' true %}

I thoroughly enjoyed learning about Oklab colors and navigating the coding process with ChatGPT. I hope you find it helpful, too. Just remember to check if the Oklab color format is supported by using the following syntax:

```css
@supports (color: oklch(0.87 0.14 169 / 1)) {
  :root {
    --my-color: oklch(0.87 0.14 169 / 1);
  }
}
```