---
layout: index
title: Clamp it! VS Code extension
date: 2024-10-02 22:00:00
tags:
  - blog
  - css
  - vs code
  - productivity
description: Today I published my first VS Code extension - Clamp it! This extension makes it easy to generate the clamped sizes for your CSS code.
type: articles-item
sections2:
  - type: banner-beta
    banner: newsletter
    animate: true
---

Today I published [my first VS Code extension - Clamp it](https://marketplace.visualstudio.com/items?itemName=starbist.clamp-it)! This extension makes it easy to generate the clamped sizes for your CSS code.

I made it because wanted to be more productive. My current process included going to an online clamp generator website, entering desired sizes, and then copy-paste it into my code.

I made it with help from ChatGPT. 90% of the code is produced by ChatGPT. I had to tweak some things, and I came up with the idea, so I guess I deserve some credit.

To start using it, first configure it by setting the following options in the global  `settings.json` file  (Command palette: Preferences: Open User Settings  (JSON)) or your project  `settings.json` file  (Command palette: Preferences: Open Workspace Settings  (JSON)):

```json
{
  "clampExtension.globalMinViewport": 600,
  "clampExtension.globalMaxViewport": 1440,
  "clampExtension.baseFontSize": 16
}
```

Next, type minimum and maximum sizes  (in pixels), highlight the typed sizes, and then choose Clamp it! command from command palette:

{% video "https://res.cloudinary.com/starbist/video/upload/v1727895956/clamp-it_fng4a5" 759 671 'autoplay' 'loop' 'mute' true %}

If you want, you can use the full definition, like so:

```txt
16, 20, 16, 600, 1200
```

where

- the first parameter is the minimum size,
- the second parameter is the maximum size,
- the third parameter is the base font size,
- the fourth parameter is the minimum viewport size, and
- the fifth parameter is the maximum viewport size.

Note that the output is always in REM units:

```css
clamp(1rem, calc(0.821rem + 0.476vw), 1.25rem)
```

That's it! I hope this little extension will make you more productive as it made me.
