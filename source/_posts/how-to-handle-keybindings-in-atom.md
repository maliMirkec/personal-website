---
title: How to handle keybindings in Atom
tags:
  - atom
  - keybindings
id: 7
categories:
  - Blog
date: 2016-10-15 16:41:54
comments: true
thumbnail: https://res.cloudinary.com/starbist/image/upload/v1497509310/How-to-handle-keybindings-in-Atom_qj3djx.png
description: In recent articles about Atom, I've talked about different packages that could help us make our daily jobs easier. Many of those packages have different keybindings. But what happens when a keybinding is already used by some other package?
---

In [recent articles about Atom](https://silvestar.codes/en/tag/atom/), I've talked about different packages that could help us make our daily jobs easier. Many of those packages have different keybindings. But what happens when a keybinding is already used by some other package?

In this tutorial I'll show you how you could fix this.

<!-- more -->

**_Windows based shortcuts will be used but the same analogy could be applied for other operating systems._**

## What are keybindings?

Keybindings, or keyboard shortcuts, are combinations of different keys which, when pressed together, invoke certain action. For example, if you press `ctrl-shift-p` in Atom, command palette will show up.

## How to detect keybindings?

In this tutorial, we'll try to remove and customize `**ctrl-up**` keybinding for moving a line up and then set this keybinding to increment number by 1.

To increment number by 1, we should install [**emmet**](https://atom.io/packages/emmet) plugin, one of the best plugins for fuzzy coding. Once you've installed **emmet** package, open any file containing numbers. Move cursor to any number and press `ctrl-up`. According to **emmet**, this command should increment a number by 1, but sadly it's not. Instead, current line is moved up.

We need to fix this. First step is to find out which command is currently used. Open the Keybindings page in settings to see the list of all keybindings. You could do this by pressing `ctrl-,` and then click on "Keybindings" or open command palette, type in "keybindings" and select "Settings View: Show keybindings".

Go on and search `ctrl-up` to see all related commands.

{% cloudinary https://res.cloudinary.com/starbist/image/upload/v1497509309/keybindings-settings-1_lq79lw.png 320px=f_auto,q_auto,w_270;720px=f_auto,q_auto,w_720;1440px=f_auto,q_auto,w_1440 "Keybindings settings." %}

Let say we couldn't determine which command should we remove or update. What to do then?

In this case you should use [keybinding-resolver](https://atom.io/packages/keybinding-resolver), a package which shows what command resolves to. This package is a part of Atom core, no additional installation is required. To see it in action, open any file, open command palette, search "keybinding resolver" and select "Key Binding Resolver: Toggle". Keybinding for **keybinding-resolver** is `ctrl-.`.

Now try to press `ctrl-up` and see what happens. **keybinding-resolver** shows us which command is used in what order. In our case, we could see that `editor:move-line-up` command is the first in line. We'll should remove it.

{% cloudinary https://res.cloudinary.com/starbist/image/upload/v1497509225/keybindings-resolver_xuy5tk.png 320px=f_auto,q_auto,w_270;720px=f_auto,q_auto,w_720;1440px=f_auto,q_auto,w_1440 "Keybindings resolver in action." %}

## How to remove keybindings?

When multiple commands for the same keybinding exist, we need to remove ones that we don't need somehow. First we should copy keybinding that we don't need by clicking on the copy icon at left. Then we need to open the custom keymap file where we'll add a command for removing unnecessary keybinding. Call command palette `ctrl-shift-p`, type "keymap" and select "Application: Open Your Keymap" or open file manually: `~/.atom/keymap.cson`. Here you could see all your custom keybindings, if any exist.

Paste the copied keybinding command. You should see the command selector and keybinding command.

{% cloudinary https://res.cloudinary.com/starbist/image/upload/v1497509227/keybindings-keymap-copy_mqcnuz.png 320px=f_auto,q_auto,w_270;720px=f_auto,q_auto,w_720;1440px=f_auto,q_auto,w_1440 "Keybindings keymap copy command." %}

To remove the keybinding, use "unset!" command.

{% cloudinary https://res.cloudinary.com/starbist/image/upload/v1497509228/keybindings-keymap-unset_xfhlkt.png 320px=f_auto,q_auto,w_270;720px=f_auto,q_auto,w_720;1440px=f_auto,q_auto,w_1440 "Keybindings keymap unset command." %}

## How to use custom keybindings?

So far we've managed to remove keybinding. To replace it, we need to copy the emmet command in Keybindings settings. Copy that command and replace current command, like this:

{% cloudinary https://res.cloudinary.com/starbist/image/upload/v1497509223/keybindings-keymap-replace_dmqrfn.png 320px=f_auto,q_auto,w_270;720px=f_auto,q_auto,w_720;1440px=f_auto,q_auto,w_1440 "Keybindings keymap replace command." %}

Now we could use `ctrl-up` to increment number by 1.

## Final thought

Keybindings are easy now, no more conflicts.

You could learn more about keybindings in [Atom flight manual](http://flight-manual.atom.io/behind-atom/sections/keymaps-in-depth/#removing-bindings). As of [Atom 1.12 Beta](http://blog.atom.io/2016/10/11/atom-1-11.html), keybinding usability is further simplified.

I hope you'll find this tutorial useful. Please feel free to comment below.

Follow me on [Twitter](https://twitter.com/malimirkeccita) and [Medium](https://medium.com/@malimirkeccita).
