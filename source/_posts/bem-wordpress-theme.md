---
title: _bem - WordPress theme with BEM methodology
tags:
  - WordPress
  - BEM
id: 13
categories:
  - Blog
date: 2017-05-27 07:39:05
comments: true
thumbnail: //res.cloudinary.com/starbist/image/upload/v1500724346/bem-WordPress-theme-with-BEM-methodology_myadk9.png
description: This is a post about building custom WordPress theme with BEM naming methodology.
---

**[BEM](https://en.bem.info/)** is great. It is simple, yet powerful. If you're not familiar with it, I highly recommend reading [this article](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) by Harry Roberts.

In short, it is a `CSS` naming convention methodology. It stands for: _block, element, modifier_. _Blocks_ are parent components, _elements_ are child components and _modifiers_ are different states of components.

<!-- more -->

[WordPress](https://wordpress.org/) is great, too. It is an open source blog tool and a publishing platform and content management system.

This is a post about building custom WordPress theme with BEM naming methodology. [Check it out](https://github.com/maliMirkec/_bem)!

## Starter template

A few years ago, I was looking for a tool that could help me build WordPress themes more easily. I've stumbled upon [Underscores](http://underscores.me/), a starter theme for WordPress. I was amazed by the simplicity of it.

You enter a template name (and some other options, if you want) and you generate plain theme. It contains the following:

*   simple templates,
*   default styling,
*   translations and
*   few custom functions.

Swell! From this step, I could easily dive into developing beautiful custom themes.

## BEM

Right about that time, I was learning about BEM. I was trying to implement it on the project I was working on. BEM really simplified my final `CSS`.

From the start, I saw great benefits of BEM:

*   clean `HTML` templates and
*   clean `CSS` code.

Not only that. If used with SASS or any other preprocessing tool, you could really organize your code. And debugging and fixing style was a piece of cake.

## Starter template with BEM methodology

An idea was born—why don't I build a WordPress starter template with BEM methodology?

Great! I should fork Underscores starter template and start customizing it. Like everything else in life, it was easier said than done.

### Problems

I knew it will be a daunting project to deal with. Going through all the templates and SASS files was hard enough, for sure. But adding classes and styling on some parts of WordPress was just impossible.

For example, comments. WordPress provides you with a commenting system out of the box. It is a great feature used by many people out there. But adding custom classes to comment components could not be done easily. As I found out later, it should be done by using callback of [wp_list_comments](https://codex.wordpress.org/Function_Reference/wp_list_comments) function and writing custom callback function. Here is an example code:

{% codeblock lang:html %}
<div class="comment-list _comments__list">
<?php
  wp_list_comments( array(
    'style' => 'div',
    'short_ping' => true,
    'callback' => '**_bem_comments**',
  ) );
?>
</div><!-- .comment-list -->
{% endcodeblock %}

If you're interested in a custom callback function `_bem_comments` you could see it [here](https://github.com/maliMirkec/_bem/blob/master/inc/bem-comments.php).

Another example of how difficult it is to add classes to post navigation links.

{% codeblock lang:php %}
/**
  * Custom _bem post links
  *
  * @package _bem
  */
add_filter( 'next_post_link', '_bem_next_post_link' );
add_filter( 'previous_post_link', '_bem_previous_post_link' );
{% endcodeblock %}

{% codeblock lang:php %}
/**
  * Custom next post link
  *
  * @param string $format Accepts format string.
  */
function _bem_next_post_link( $format ) {
  return str_replace( 'href=', 'class="**_post-navigation__link _post-navigation__link--next**" href=', $format );
}
{% endcodeblock %}

{% codeblock lang:php %}
/**
  * Custom previous post link
  *
  * @param string $format Accepts format string.
  */
function _bem_previous_post_link( $format ) {
  return str_replace( 'href=', 'class="**_post-navigation__link _post-navigation__link--previous**" href=', $format );
}
{% endcodeblock %}

There are still some WordPress parts where I couldn't find the solution how to add classes to `HTML` components, like WordPress widgets. If you know how to do this, please let me know.

## Fancy stuff

BEM is big deal, but there is more stuff that I've implemented in this starter template:

*   cita-flex,
*   System fonts,
*   Gutenberg,
*   Sass MQ,
*   CSS locks and
*   Critical CSS

### cita-flex

[cita-flex](https://github.com/maliMirkec/cita-flex) is a flexbox grid system built by me. It is a set of `SASS` mixins and `CSS` classes that could help you build grid system. Although it is not perfect, it works in most cases, especially with simple templates, like ones that are used by this starter theme.

### System fonts

Using [system fonts](https://css-tricks.com/snippets/css/system-font-stack/) are awesome and beautiful. And they don't cost a dime—they are part of an operating system on your device. There is no extra request. Yaay!

### Gutenberg

Web typography is hard. That's why I'm using [Gutenberg](http://matejlatin.github.io/Gutenberg/) by Matej Latin, a meaningful web typography starter kit. It comes with a bunch of great stuff, such as modular scale and vertical rhythm. Now typography is not so hard. Double yaay!

### Sass MQ

Writing media queries could be a tedious and boring task. And it could lead to many inconsistencies in a code. To avoid all that, I'm using [Sass MQ](http://sass-mq.github.io/sass-mq/), a `Sass` mixin with configuration for media queries. Usage is pretty simple, but if you want to make it even simpler, create a snippet for your favorite text editor. This is how it looks in Atom:

{% codeblock %}
'.source.scss':
  'mq.scss':
    'prefix': 'mq'
    'body': '@include mq(${1:\$from}: ${2:desktop}) {\n\t$3\n}'
{% endcodeblock %}

### CSS locks

When I first read about [CSS locks](https://css-tricks.com/css-locks/), I wasn't sure what is going on here. But after [reading](https://blog.typekit.com/2016/08/17/flexible-typography-with-css-locks/) and [reading](https://fvsch.com/code/css-locks/) some more, I realized how powerful this technique is. After playing around for a while with it, I decided that it could be a great addition to this project. Check it out, resize the browser (this website is built using _bem starter theme, too) and see it in action.

### Critical CSS

This is a tough one. And frankly, it needs more work.

[Critical CSS](https://www.smashingmagazine.com/2015/08/understanding-critical-css/) as a technique is valid and it comes with great intentions. But man, to make it work out of the box was a real pain in the ass, pardon my french. For months I was trying to make it work using different tools. Finally, I end up using [gulp-critical-css](https://mscharl.github.io/gulp-critical-css/), a `Gulp` task that extracts critical `CSS` into a separate stylesheet. But that also didn't work at first, so I [forked the project](https://github.com/maliMirkec/gulp-critical-css), made some tweaks and it's working now.

## Final thoughts

There you have it, a WordPress starter theme. All you need to do is download [the project](https://github.com/maliMirkec/_bem) and start developing new shiny WordPress theme.

As always, any comments or [tweets](https://twitter.com/malimirkeccita) are appreciated.
