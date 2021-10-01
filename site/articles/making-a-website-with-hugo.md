---
layout: index
title: If you are starting a new website, consider using Hugo
date: 2018-10-24 12:23:45
tags:
  - blog
  - hugo
  - spg
  - ssg
thumbnail: If_you_are_starting_a_new_website_consider_using_Hugo_war4eb
description: Other than it is “the world’s fastest framework for building websites,” Hugo is packed with powerful features that would make the website development process more pleasable.
project:
  name: Hugo
  href: https://hugo.silvestar.codes
type: articles-item
sections2:
  - type: banner-beta
    desc: Did you know that I am running **UI Dev Newletter**?
    code: >-
      <form class="embeddable-buttondown-form newsletter wrapper wrapper--gamma margin-top text-left" action="https://buttondown.email/api/emails/embed-subscribe/starbist" method="post" target="popupwindow" onsubmit="window.open('https://buttondown.email/starbist', 'popupwindow')">
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

If you are starting a new website, consider using [Hugo]. Other than it is “the world’s fastest framework for building websites,” it is packed with powerful features that would make the website development process more pleasable.

<!-- more -->

__<small>This post serves as an intro for the course “[Making a website with Hugo].”</small>__

## CLI

Once you install Hugo on your computer, you should have access to Hugo's command line interface. You could start a local web server within a millisecond. Not to mention that live reloading is working by default.

## Themes

If you don't want or don't know how to build a custom theme, you could use one of the hundreds of themes available for Hugo. However, if you like to be unique, and if you want to challenge your creative side, you could create a custom style for your new project. You could even use built-in pipes to process your Sass or Scss files or to minify your final CSS file.

## Templates

One of the critical features you should understand when starting with Hugo is lookup order. Hugo's mechanism for searching the correct template is well thought and designed to satisfy every project structure, even ones that are not trivial and straightforward.

Inside the templates, you could use variables, functions, logic, pipes, and other useful features. If you have a code snippet that you want to reuse in a different template, then you should extract that reusable code to a separate file called a partial.

## The context

Another critical feature that you should understand is *the context*. The context, or “the dot,” depends on the environment. If you are inside the loop, then the context is the current item. If you are in the base template, then the context is the current page with all of its parameters.

Hugo allows you to define variables that don't depend on the context. This variable could be instrumental when comparing the current item parameter inside the loop, for example.

There is the global context, too. You could access the global context from every template file or partial in any time.

## Support and Community

Hugo has a great community. On their community website, you could search for an answer for almost your problem. If you cannot find the solution, you could open a new discussion and someone would help you.

## Conclusion

I have highlighted only five features that make the process of developing a new website so enjoyable, but that is just a small part of what Hugo could offer to you.

If you are interested in making a website with Hugo by now, I encourage you to take a look at [my Skillshare course].

> The fastest twenty users would get the course for free. 🙌

[Making a website with Hugo]: https://skl.sh/2q88Ij7
[Hugo]: https://gohugo.io
[my Skillshare course]: https://skl.sh/2q88Ij7






