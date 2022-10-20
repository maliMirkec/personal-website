---
layout: index
title: Why I never understood CSS-in-JS
date: 2022-10-20 10:00:00
tags:
  - blog
  - css
thumbnail: Why_I_never_understood_CSS-in-JS_ndpbnb
description: As a “vanilla CSS” guy, I had many questions and comments while reading the article about breaking up with CSS-in-JS, so I had to document them in this blog post.
type: articles-item
sections2:
  - type: banner-beta
    banner: newsletter
---

This week Sam Magura, an active maintainer of [Emotion](https://emotion.sh/), a widely-popular CSS-in-JS library for React, published [an article about breaking up with CSS-in-JS](https://dev.to/srmagura/why-were-breaking-up-wiht-css-in-js-4g9b). As a “pure CSS” guy, I had many questions and comments while reading the article, so I had to document them in this blog post.

*It might be worth noting that [I never understood why people use React for websites](/articles/you-don-t-need-react-for-building-websites/).*

## The background

Long story short, Sam emphasizes the problems of the CSS-in-JS approach:

-   CSS-in-JS adds runtime overhead,
-   CSS-in-JS increases your bundle size,
-   CSS-in-JS clutters the React DevTools,
-   **Frequently inserting CSS rules forces the browser to do a lot of extra work**, and
-   **With CSS-in-JS, there’s a lot more that can go wrong, especially when using SSR and/or component libraries**.

In short, the CSS-in-JS performance impact of Emotion was significant, so the Emotion team replaced it with Sass Modules and Bootstrap utility classes.

## The the first problem

> _“CSS-in-JS allows you to style your React components by writing CSS directly in your JavaScript or TypeScript code.”_

Writing HTML in your JavaScript always seemed wrong to me, so don’t get me started about CSS in JavaScript files. Are developers that lazy to open a few extra files?

## The second problem

> _“When writing plain CSS, it’s very easy to accidentally apply styles more widely than you intended.”_

Locally-scoped styles sound so ridiculous to me. Accidentally applying styles happens when there is no agreement on the project’s naming convention, structure, and architecture.

I think the problem is uneducated developers. In particular, JavaScript developers are responsible for writing CSS even if they are not too experienced. Sure, everyone could make a centered div and apply some colors, but not everyone could write it in a scalable and maintainable way.

Imagine someone who only tried [Create React App](https://create-react-app.dev/) is responsible for writing scalable and maintainable React apps. It doesn’t work that way, does it? The industry should stop ignoring CSS, start educating everyone and acknowledge the CSS developer. It would prevent these kinds of problems in the first place.

## The third problem

> _“...imagine you’re making a list view where each row should have some padding and a border. (...) Several months later when you’ve completely forgotten about the list view, you create another component that has rows. (...) Now the new component’s rows have an unsightly border and you have no idea why!”_

Sam uses this example of class `.row` to explain the CSS class name conflicts. Any developer experienced in writing CSS will immediately inspect the element and find out what is happening. But even that is not a solution. You should have naming conventions, structure, design systems, and styleguide to prevent these problems.

For example, if you’re using Sass and BEM, you can prevent these problems by splitting your CSS code into multiple files and naming them meaningfully. Every Sass file name should have the component’s name, and every CSS class name should start with the component’s name. No more CSS class name conflicts.

## The fourth problem

> _“If using plain CSS, you might put all of your `.css` files in a `src/styles` directory, while all of your React components live in `src/components`. As the size of the application grows, it quickly becomes difficult to tell which styles are used by each component. (...) A better approach for organizing your code is to **include everything related to a single component in same place.**”_

According to this comment, it is better to make a mess in a single file than to have organized files in separate folders. If developers have issues with finding files, then document it. Make your developers learn and adapt to the project architecture.

## The fifth problem

> _“CSS-in-JS enables you to reference JavaScript variables in your style rules.”_

Did you know that you could [access CSS variables from JavaScript](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties#values_in_javascript)? Isn’t reinventing the wheel one of the first lessons in learning web programming? If you don’t like the syntax, write yourself a JavaScript function for extracting CSS variables more conveniently.

## The sixth problem

> _“Many web developers, myself included, are quick to adopt the hottest new trends in the JavaScript community. Part of this is rationale, since in many cases, new libraries and frameworks have proven to be massive improvements... On the other hand, the other part of our obsession with shiny new tools is just that --- an obsession.”_

I’ve been in the web industry for more than ten years. Trends come and go, so stick to the logical stuff. If it smells funny, it will probably become a problem.

I am interested in how you would migrate some CSS-in-JS projects. Is there an easy way to extract all components and make them work in a different environment? I am talking about styling, not functionality. I don’t think there is an easy way to do it.

## The seventh problem

> _“When your components render, the CSS-in-JS library must "serialize" your styles into plain CSS that can be inserted into the document.”_

This sentence is the essence of the problem. The end result is plain CSS. The main “benefit” and justification for CSS-in-JS are locally-scoped styles. What a bunch of bull! That is what you get when developers are trying too hard. They overcomplicate the solution instead of using well-adopted and well-tested technologies.

## The eighth problem

> _“...each user who visits your site now has to download the JavaScript for the CSS-in-JS library.”_

Not only that, every user loads the component’s CSS code whenever that component appears. And class names usually contain some gibberish class suffix that adds a few bytes, too. Don’t get me started about the caching.

## The ninth problem

> _“Frequently inserting CSS rules forces the browser to do a lot of extra work.”_

When I was less experienced, I remember worrying about my CSS performance. But then, I learned that CSS performance is rarely an issue. I don’t know when was the last time when I asked myself about the CSS performance. I think Milica Mihajlija said perfectly: [**“Don’t worry about the speed of CSS selectors**”](https://calibreapp.com/blog/css-performance#dont-worry-about-the-speed-of-css-selectors).

On the other hand, using CSS-in-JS might cause performance issues. So any discussion about it should stop here.

## The tenth problem

> _“To improve the DX around this, we decided to bring in a utility class system. (...) I had already been using Bootstrap for years, so we went with Bootstrap.”_

I guess we could expect more Bootstrap and TailwindCSS users. I just wish we had fewer Bootstrap and TailwindCSS users, not more.

## The conclusion

There are probably more reasons why I never understood CSS-in-JS, but these are the main ones.

Learn CSS, make your developers learn CSS, or hire CSS and UI developers to do the styling part of the project.
