---
layout: index
title: "First steps with Github Atom"
tags:
  - blog
  - atom
date: 2016-08-19 16:14:04
thumbnail: First_steps_with_Github_Atom_tessgb
description: This is the first article in a series about my perfect Atom setup. First topic is installation and initial setup.
type: articles-item
sections2:
  - type: banner-beta
    desc: Did you know that I am running **UI Dev Newletter**?
    code: >-
      <form class="embeddable-buttondown-form newsletter wrapper wrapper--beta margin-top text-left" action="https://buttondown.email/api/emails/embed-subscribe/starbist" method="post" target="popupwindow" onsubmit="window.open('https://buttondown.email/starbist', 'popupwindow')">
        <input type="hidden" value="1" name="embed" />
        <div class="margin-top">
          <label for="bd-email">Subscribe here. Enter email.</label>
          <div class="newsletter__input">
            <input class="input" type="email" name="email" id="bd-email" />
            <input class="button button--small" type="submit" value="Subscribe" />
          </div>
        </div>
        <p class="no-margin"><small><a href="https://buttondown.email" target="_blank" rel="noreferrer">Powered by Buttondown</a></small></p>
        </form>
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

First, open Atom settings. I'm a Windows user and default shortcut for Windows is `ctrl-,`. Go to _Install_, make sure you're on _Packages_ tab, type in "sync-settings" and press _Enter._

To install **sync-settings**, find package in a list (should be first on the list) and then click _Install_ button.

{% cldnry "sync-settings-1_fdwmpf" "Sync-settings installation." null %}

### sync-settings configuration

_To configure **sync-settings**, you should have [Github account](https://github.com/). If you don't have one already, create a new one, it's free._

After you've installed **sync-settings** package, click on _Settings_. In order to make your first backup, you should fill _Personal Access Token_ and _Gist Id_. If you're not familiar with this terms, please refer to [**sync-settings** Setup section](https://atom.io/packages/sync-settings).

{% cldnry "sync-settings-2_ojflpu" "Sync-settings configuration." %}

### sync-settings usage

Now, you should make your first backup.

Open [command palette](https://atom.io/packages/command-palette) by pressing `ctrl-shift-p`, enter "sync-settings", select _Sync Settings: Backup_ and press _Enter_.

{% cldnry "sync-settings-3_pzezsi" "Sync-settings in action." %}

You've successfully created your first Atom settings backup.

_Whenever you install new package, edit or add new snippet or change shortcut, don't forget to make a backup of your settings._

If you have Atom installed on different device, **sync-settings** package should prompt you to restore your latest settings. That way you're always in sync.

## Final thought

I hope you found this article useful. For more articles, you should follow me on [Twitter](https://twitter.com/malimirkeccita) or checkout [my Medium page](https://medium.com/@malimirkeccita).
