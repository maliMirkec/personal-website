---
title: How to lint inside Atom
tags:
  - blog
categories:
  - atom
  - linter
date: 2016-10-02 07:14:39
thumbnail: How-to-lint-inside-Atom_mmlauz.png
description: Lint, linter, linting? What is it and why you should use it? I'll try to show you how Atom linter packages could save you a lot of development time.
---

Lint, linter, linting? What is it and why you should use it? I'll try to show you how Atom linter packages could save you a lot of development time.

<!-- more -->

## What is linter?

Linter is a program which analyses your code during coding process.

Imagine yourself working on a new `JavaScript` widget. You write a hundreds of lines of code, but in a hurry, you forget to add a couple of semicolons here and there. When you open the widget in a browser to test it, it's not working. Open developer tools, open console tab, inspect errors, go back to Atom, fix the errors, go back to browser again and see if it runs now. Very annoying and time consuming process.

That's where **linter** could help you save precious time.

## How it works?

**linter** works while you're typing and checks if there are any syntax errors. Let's look at example from previous section. If you forget to put semicolon at the end of a line, **linter** will immediately show you the error. It will save you a lot of time. Not only that, it will force you to write code more carefully.

## How to install it?

You could use **[linter](https://atom.io/packages/linter)** inside Atom. Go ahead and install it from Atom package manager. After that, open **linter** package settings. There are plenty of options. I encourage you to take your time to understand each one them.

The most important options are:

*   _Lint As You Type_ - turn on
*   _Highlight Error Lines in Gutter_ - turn on
*   _Show Inline Error Tooltips_ - turn on
*   _Display Linter Info in the Status Bar_ - turn on
*   _Display Linter Status Info in Status Bar_ - turn on

This settings should turn on **linter** errors in Atom, so you could fix the problems more easily.

You can see full configuration of my **linter** package here:

> {cldnry linter-settings-full_uchhit.png "Linter settings." %}

Basic **linter** is installed and configured, now we need actual linter plugins for specific programming languages. There are many plugins available, full list is available [here](http://atomlinter.github.io/). Because I'm a frontend developer, I'll show you how to install linters for `CSS` and `JavaScript`.

### JavaScript linter

One of the most popular `JavaScript` linters for Atom is **[linter-jshint](https://atom.io/packages/linter-jshint)**. It is an interface for [JSHint](http://jshint.com/), a tool that helps to detect errors and potential problems in your `JavaScript` code. Installation could be done via Atom package manager. There are few configuration options. The most important is to provide of executable `jshint` node script. Here are my settings:

> {cldnry linter-jshint-settings_i3w9mm.png "JSHint settings." %}

### CSS linter

[**linter-stylelint**](https://atom.io/packages/linter-stylelint) is an interface for [stylelint](http://stylelint.io/), CSS linter that helps you enforce consistent conventions and avoid errors in your stylesheets. It is available on Atom package manager and it has only 3 configuration options. Here you can see my** linter-stylelint** configuration:

> {cldnry linter-stylelint-settings_t5ebdp.png "Stylelint settings." %}

## How to use it?

To see **linter-jshint** in action, open any `JavaScript` file and see if any errors exists. You could see errors in different places, depending on your main **linter** package configuration.

> {cldnry linter-jshint_nkkmny.png "JSHint in action." %}

You could see `CSS` lint errors by opening and `CSS` file.

> {cldnry linter-stylelint_uzvqwj.png "Stylelint in action." %}

In the examples above you could see that errors are displayed on 4 different places:

*   in a status bar,
*   in a gutter,
*   as a status info and
*   in a minimap.

This depends on your main **linter** settings, but you should see at least on of them.

_To see errors in a **minimap**, you should install [**minimap-linter**](https://atom.io/packages/minimap-linter) package. You could learn more about minimap packages [here](https://silvestar.codes/en/articles/github-atom-minimap-packages/)._

You could use more advanced configuration options for each linters which are out of scope for this article. I encourage you to read full documentation for both [stylelint](https://github.com/stylelint/stylelint/blob/master/docs/user-guide.md) and [jshint](http://jshint.com/docs/), as they could be really useful for you.

## Final thought

Linters are very useful and simple solution for basic syntax checking. Linters will not only save you time, but will also make you write better code.

Are you using linters? Which one are your favorite?

Follow me on [Twitter](https://twitter.com/malimirkeccita) and [Medium](https://medium.com/@malimirkeccita).
