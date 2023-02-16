---
layout: index
title: Starter Project - A set of the latest best practices packed in Gulp tasks
date: 2018-03-23 11:20:00
tags:
  - blog
  - gulp
  - starter project
thumbnail: Starter_Project_-_A_set_of_the_latest_best_practices_packed_in_Gulp_tasks_ovmzob
descriptionAlt: This article is the very first article in a series about Starter Project, a set of the latest best practices packed in Gulp tasks. In this article, I am going to explain the idea behind this project, how it could help you on your project and how to use it.
description: Discover the latest best practices for web dev with Starter Project. A set of Gulp tasks that simplify the process and help you get up and running quickly.
project:
  name: Starter Project
  href: https://starter.silvestar.codes
type: articles-item
sections2:
  - type: banner-beta
    banner: newsletter
---

⚠️ The package is deprecated. See [SPRO](/articles/introducing-spro/) instead.

This article is the very first article in a series about [Starter Project], a set of the latest best practices packed in Gulp tasks. In this article, I am going to explain the idea behind this project, how it could help you on your project and how to use it.

<!-- more -->

## First Scenario

Every project has its environment. Switching between projects means switching environments. Switching environments means remembering commands for running project tasks, like Gulp or webpack. But too often commands are forgotten. This scenario happens to me daily, even when working on similar projects.

## Second Scenario

Consider two different projects. First is custom WordPress theme development, second is Middleman blog. Both projects use Gulp task runner to compile and optimize assets. Setting up Gulp tasks for either project is time-consuming work. And every project has its architecture which disables a developer to copy Gulp tasks from one project to another without spending the time to reconfigure every Gulp task individually.

## Third Scenario

Working on a project without a coding convention could be a nightmare. Git conflicts on every merge, endless discussion about tabs versus spaces, ugly and inconsistent code are just some of the problems that could emerge as a consequence.

## The idea

I am sure these scenarios sound familiar. These happened to me a lot of times. I cannot even remember how many times I created a Sass mixin or a JavaScript function on a project that I wanted to use on another project but I was too lazy to search for the code, and eventually, I started from the beginning.

Starter Project is an effort of mine to fix these problems. It is a collection of Gulp tasks with the latest best practices in front-end development. But not only Gulp tasks. It contains every asset for building a successful project, from HTML and CSS to JavaScript and images.

## The Package

The package is available on [npm]. You could find instructions for the installation in [official documentation][Starter Project]. Once installed, you will have the copy of the package's website for the Starter project. It could be a good starting point for your new project.

Starter Package is also a static page generator, a very rudimental one. The original website is built using Starter Project and hosted on Netlify. It is very fast, see the [PageSpeed Insights] and [WebPageTest] scores.

The package should be used as a development dependency. That will allow you to update the package and maintain your project more efficiently.

{% cldnry "code_g0esoz" "package.json file." %}

## The Usage

Starter project has three different Gulp commands for different environments:
- `gulp dev` and `gulp dist` for a development build,
- `gulp docs` for documentation build, and
-  `gulp` for a production build.

With Starter Project you get the architecture for:
- HTML,
- CSS,
- JavaScript,
- images (.png, .jpg, .svg),
- favicons,
- fonts,
- and more.

You could find all assets in `new_src` folder. Once you run one of the build commands, `new_dist` folder will be created with compiled static contents.

## The Config file

Starter Project is configurable and should be able to run in every project, no matter the architecture. The main configuration file could be found in the root of the project, `config.json`. For every task, there is an option `run`. If set to true, the task will run. For example, you could turn off [`penthouse`](https://www.npmjs.com/package/gulp-penthouse), a library for generating Critical CSS.

{% cldnry "code2_mxkqcq" "Penthouse plugin config example." %}

Read more about configuration [here](https://starter.silvestar.codes/).

## Features

I mentioned Critical CSS in the previous section. Starter Project has other great features.

Pug is default template engine. Markdown is also supported via Pug filter [jstransformer-markdown-it](https://github.com/jstransformers/jstransformer-markdown-it). I should consider adding support for more template engines if interest is shown.

Sass comes with [normalize.css](https://www.npmjs.com/package/normalize.css), [modularscale-sass](https://www.npmjs.com/package/modularscale-sass) and [sass-mq](https://www.npmjs.com/package/sass-mq) libraries by default. It will help you create more consistent pages with strictly defined typography and media queries.

Starter Project supports ES6 via babel plugin. You will find scripts for deferred loading of CSS files (use it in combination with Critical CSS) and for loading fonts with [Critical FOFT method](https://www.zachleat.com/web/comprehensive-webfonts/#critical-foft).

If you are not using a third-party service for hosting images, then Starter Project could optimize your images. Starter Project supports
`.gif`, `.png`, `.jpg`, and `.svg` files.

Documentation is an integral part of every project. You can generate excellent documentation using Starter Project. [SassDoc](http://sassdoc.com/) will parse Sass comments and create Sass documentation. [JSDoc](https://jsdoc.app/) will parse JavaScript comments and create JavaScript documentation. You could even create living styleguide. Starter Project uses [KSS](https://kss-node.github.io/kss-node/) to parse Sass comment for that purpose.

There are other goodies, like Browser-sync, Favicons, Sourcemaps, Gzip, Linters, Standards, editorconfig, and more. I will try to document everything and write new articles about these, too. Stay tuned!

## Websites

I have used Starter Project on several different projects so far.

- [Han Han Xue website] - a website with a blog for Han Han Xue, a Designer and FX Technical Director from Montreal, Canada. The site runs on Middleman.
- [Irina & Matej website] - a website for Irina and Matej, wedding and portrait photographers based in Croatia. The site runs on WordPress.
- [Silvestar Bistrović website] - a personal website with a blog. The site runs on Hexo.
- [Starter Project website][Starter Project] - a website for Starter Project. The website runs on Starter Project only.

## Conclusion

Starter Project is not conceived as a strict set of rules. This package should be configured to fulfill every project specification; you could propose new features, fork the repository or turn off some of the tasks in the config file.

Show your support: provide feedback, open [a new issue](https://github.com/maliMirkec/starter-project/issues/new), create [a new pull request](https://github.com/maliMirkec/starter-project/compare), or leave a comment.

[Starter Project]: https://starter.silvestar.codes/
[npm]: https://www.npmjs.com/package/starter-project
[PageSpeed Insights]: https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fstarter.silvestar.codes%2F&tab=desktop
[WebPageTest]: https://www.webpagetest.org/result/180323_7F_8cd32d6a04d395ff01839c921d82047d/
[Silvestar Bistrović website]: https://www.silvestar.codes
[Han Han Xue website]: https://hanhanxue.com/
[Irina & Matej website]: https://irinaandmatej.com/
