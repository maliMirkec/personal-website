---
title: Github Atom minimap packages
tags:
  - blog
  - atom
  - minimap
id: 3
categories:
  - Blog
date: 2016-08-30 18:00:19
comments: true
thumbnail: Github_Atom_minimap_packages_asknpo.png
description: One of the most popular features for Atom out there is a minimap. It's a code preview in a small sidebar window.
---

One of the most popular features for Atom out there is a **minimap**. It's a code preview in a small sidebar window.

<!-- more -->

## minimap

**[minimap](https://atom.io/packages/minimap)** is a basic package for code preview and it's available on Atom's package manager. Settings let's you configure the **minimap** and here's my settings:

> {cldnry minimap-settings_qurgyc.png "Atom General settings." %}

## useful minimap extensions

**minimap **has many extensions and these are my favorites:

* **[minimap-autohide](https://atom.io/packages/minimap-autohide)**
* **[minimap-cursorline](https://atom.io/packages/minimap-cursorline)**
* **[minimap-selection](https://atom.io/packages/minimap-selection)**
* **[minimap-highlight-selected](https://atom.io/packages/minimap-highlight-selected)**
* **[minimap-find-and-replace](https://atom.io/packages/minimap-find-and-replace)**
* **[minimap-git-diff](https://atom.io/packages/minimap-git-diff)**
* **[minimap-linter](https://atom.io/packages/minimap-linter)**
* **[ minimap-pigments](https://atom.io/packages/minimap-pigments)**

**minimap-autohide** automatically hides the **minimap** when not in focus and shows the **minimap** when a file is scrolled. It provides less distraction for a coder.

**minimap-cursorline** displays Atom cursorline in the **minimap**. It is very useful when you need to scan your current position in the file quickly.

**minimap-selection** and **minimap-highlight-selected** are very similar **minimap** extensions. **minimap-selection** displays buffer's selection on the **minimap**. **minimap-highlight-selected** is a **minimap** binding for the **[highlight-selected package](https://github.com/richrace/highlight-selected)**. What it does is display highlighted sections of text in the **minimap**.

There's even a package that highlights search result occurrences in the **minimap**. It is called **[minimap-find-and-replace](https://atom.io/packages/minimap-find-and-replace)** and could be very useful when finding in the text.

[In the previous post](/en/articles/github-atom-git-packages/), my favorite Git packages for Atom where presented. Beside community packages, there are packages that are part of the Atom's core. One of them is **[git-diff](https://atom.io/packages/git-diff)**. **git-diff** allows user to see Git changes directly in the file. **minimap** binding for that package is called **minimap-git-diff**. It shows git-diff status in the **minimap**. It could be pretty useful when searching for changes in a large file.

**minimap-linter** displays linter errors on the **minimap**. Linters are separate topic and I will be writing about them in the future articles.

**minimap-pigments** is Atom plugin to display **[pigments](https://atom.io/packages/pigments)** colors in the **minimap**. In the earlier releases, this package caused my Atom to crash so I had to disable it. Use carefully.

This is my **minimap** in action:

> {cldnry minimap-in-action_jopeok.png "Atom Minimap settings." %}

## Final thoughts

Although not crucial, **minimap** packages could be great benefit for developer as they allow quick scan of the file. It sure did help me a lot. How about you?

Follow me on [Twitter](https://twitter.com/malimirkeccita) or [Medium](https://medium.com/@malimirkeccita) and never miss a post again.
