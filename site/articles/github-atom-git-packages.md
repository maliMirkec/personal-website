---
layout: index
title: Github Atom Git packages
tags:
  - blog
  - atom
  - git
date: 2016-08-22 20:21:37
description: Developers often rely on a version control system and one of the most popular is Git. Explore Git packages for the Atom IDE.
type: articles-item
sections2:
  - type: banner-beta
    banner: newsletter
series: Atom
---

Developers often rely on a version control system and one of the most popular is [Git](https://git-scm.com/).

<!-- more -->

Atom community provides us with plenty of [Git packages](https://atom.io/packages/search?q=git) and these are my favorites:

* **[git-plus](https://atom.io/packages/git-plus)**
* **[tree-view-git-status](https://atom.io/packages/tree-view-git-status)**
* **[git-history](https://atom.io/packages/git-history)**
* **[git-log](https://atom.io/packages/git-log)**

## git-plus

{% cldnry "git-plus_hi3gmm" "Git-plus in action." 759 431 %}

When terminal is not accessible or when I'm too lazy to open it, I use **git-plus**. **git-plus** package allows you to use most of the Git commands from Atom directly.

{% note %}
I don't recommend using **git-plus** package for complicated Git structures. There are specific tools that are built for that, like [Git Extensions](https://gitextensions.github.io/) or [Tower](https://www.git-tower.com/), to name just a few.
{% endnote %}

**git-plus** could be installed via package manager, the instructions could be found in the article [First steps with Github Atom](/articles/github-atom-first-steps/).

To configure **git-plus** package, Git path should be provided. Make sure to enter the path with actual Git file executable, like this `C:Program FilesGitbingit.exe`. You could configure other options as per your preferences.

To use **git-plus**, press `ctrl + shift + p` to open command-palette and type "git plus"—**git-plus** commands should appear. To open **git-plus** menu directly, use `ctrl + shift + h` shortcut.

To see Git log in action, click on the little pin icon in a status bar.

## tree-view-git-status

**tree-view-git-status** package adds Git information in the Atom tree view.

Installation could be done via package manager. Configuration is straightforward, click on the option you prefer.

**tree-view-git-status** package is visible immediately in the tree view (if tree view is visible).

## git-history

{% cldnry "git-history_whbavd" "Git-history in action." 759 430 %}

This package allows you to view history of the file.

Package is available on package manager. Configuration options are "Max Commits" and "Show Diff", but you could leave it as it is.

To view file history, open command palette and type in "git history" and select "Git History: Show File History". Shortcut is `ctrl + alt + h`. In a dropdown menu select file version you want to see.

## git-log

{% cldnry "git-log_npntsy" "Git-log in action." 759 429 %}

**git-log** helps you see pretty Git log directly from Atom.

This package is available on package manager. You could configure which font do you want to use and at which scale.

There is no shortcut for **git-log**, therefore you should use command palette and call "Git Log: Show" command.

## Final thought

Atom package manager has many Git packages. Which ones are your favorite?

For more articles, you should follow me on [Twitter](https://twitter.com/malimirkeccita) or checkout [my Medium page](https://medium.com/@malimirkeccita).
