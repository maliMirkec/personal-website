---
layout: default
title: First steps with Github Atom
tags:
  - blog
  - atom
date: 2016-08-19 16:14:04
description: This is the first article in a series about my perfect Atom setup. First topic is installation and initial setup.
type: articles-item
series: Atom
---

This is the first article in a series about my perfect Atom setup. First topic is installation and initial setup.

<!-- more -->

## Github Atom installation

[Github Atom](https://atom.io/) is my first choice text editor. I know that there are faster and more stable text editor out there, but I prefer open source solutions.

To install Github Atom, go to [https://atom.io/](https://atom.io/) and download the installer. If you're like me and you prefer latest features, you could use beta version by visiting [https://atom.io/beta](https://atom.io/beta).

## First package

After you've installed Atom, you should install your first package—**[sync-settings](https://atom.io/packages/sync-settings)**.

**sync-settings** is used to synchronize almost all of your editor's settings. It is a very good starting point when you're reinstalling Atom or installing Atom on a different device. It saved me plenty of time back in the day.

### sync-settings installation

First, open Atom settings. I'm a Windows user and default shortcut for Windows is `ctrl-,`. Go to _Install_, make sure you're on _Packages_ tab, type in "sync-settings" and press _Enter_.

To install **sync-settings**, find package in a list (should be first on the list) and then click _Install_ button.

{% cldnry "sync-settings-1_fdwmpf" "Sync-settings installation." 759 395 %}

### sync-settings configuration

{% note %}
To configure **sync-settings**, you should have [Github account](https://github.com/). If you don't have one already, create a new one, it's free.
{% endnote %}

After you've installed **sync-settings** package, click on _Settings_. In order to make your first backup, you should fill _Personal Access Token_ and _Gist Id_. If you're not familiar with this terms, please refer to [**sync-settings** Setup section](https://atom.io/packages/sync-settings).

{% cldnry "sync-settings-2_ojflpu" "Sync-settings configuration." 759 390 %}

### sync-settings usage

Now, you should make your first backup.

Open [command palette](https://atom.io/packages/command-palette) by pressing `ctrl-shift-p`, enter "sync-settings", select _Sync Settings: Backup_ and press _Enter_.

{% cldnry "sync-settings-3_pzezsi" "Sync-settings in action." 759 362 %}

You've successfully created your first Atom settings backup.

{% note "Tip" %}
Whenever you install new package, edit or add new snippet or change shortcut, don't forget to make a backup of your settings.
{% endnote %}

If you have Atom installed on different device, **sync-settings** package should prompt you to restore your latest settings. That way you're always in sync.

## Final thought

I hope you found this article useful. For more articles, you should follow me on [Twitter](https://twitter.com/malimirkeccita) or checkout [my Medium page](https://medium.com/@malimirkeccita).
