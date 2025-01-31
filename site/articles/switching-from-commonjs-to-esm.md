---
layout: default
title: Switching from CommonJS to ESM
date: 2025-01-31 11:00:00
tags:
  - blog
  - eleventy
description:
type: articles-item
---

I saw [the post from Zach on Mastodon](https://mastodon.social/@zachleat@zachleat.com/113920328213377526) yesterday (that made me laugh), and I was inspired to do the same - switch from CommonJS to ESM on my website.

Here's how I did it in about 5 minutes:

1. Opened my **VS Code**
2. Searched for `= require(` and added `*js` to files to include
3. Opened **Copilot Edits**
4. Wrote the following prompt: `I'd like to use ESM instead of CommonJS. Can you update my files, please?`
5. Clicked `+ Add files`
6. Clicked `Search Results`
7. Add the following line to my package.json file: `"type": "module"`

After a minute or so, all my files were updated.

My only issue was including the `package.json` file in the `.eleventy.js` file.

If you are wondering why I included `package.json`, it is because I parsed the Eleventy version from it and added it to the generator `meta` tag.

But Zach told me that this data is provided by Eleventy so I removed the import and added the following line:

```html
<meta name="generator" content="{{ eleventy.generator }}">
```

You can see all changes in [this commit on GitHub](https://github.com/maliMirkec/personal-website/commit/050d7e1886b62687f38a26d58ad1cb68f0c65d37.).
