---
layout: index
title: My favorite NPM packages in 2023
date: 2023-03-09 11:00:00
tags:
  - blog
  - productivity
  - npm
description: I’ve compiled a list of my favorite npm packages that I use on a daily basis.
type: articles-item
sections2:
  - type: banner-beta
    banner: newsletter
series: Tools
---

When you run `npm list -g --depth=0` command, you get all the globally installed NPM packages on your computer. Here are the ones that I use.

## Acclaimed CSS

[Acclaimed CSS](https://www.npmjs.com/package/acclaimed) is a package that I developed. It is a wrapper for penthouse, a package to extract Critical CSS. Ever since I used it, I use it to generate Critical CSS seamlessly. All I need to do is to quickly create `.acclaimed.json` file in the folder where I will run the command and I get the above-the-fold CSS extracted within seconds.

## deviceframe

I have been using [deviceframe](https://www.npmjs.com/package/deviceframe) package for years. It puts device frames around website screenshots. I use it for creating [my portfolio](/portfolio/) screenshots.

## Gulp

[Gulp](https://www.npmjs.com/package/gulp) is my go-to app for automating my workflows. I've tried most of its alternatives, but Gulp fulfills all my needs and I love using it.

## Killify

[Killify](https://www.npmjs.com/package/killify) is another package that I developed. I was annoyed by the hanging processes in my terminal, so I created a package that helps kill every hanging process.

{% embed '<iframe width="792" height="476" src="https://www.youtube-nocookie.com/embed/8gjzPBxCd_o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>' '792' '476' %}

## Netlify CLI

Since my site runs on Netlify, I often use [Netlify CLI](https://www.npmjs.com/package/netlify-cli) package. It allows me to develop lambda and edge functions on my computer.

## nodemon

[nodemon](https://www.npmjs.com/package/nodemon) is a very popular package that runs Node.js applications and can automatically restart the node application when file changes in the directory are detected. I use it when I develop Node.js scripts.

## npkill

[npkill](https://www.npmjs.com/package/npkill) is another package that I use from time to time. Since I work on many projects, either personal and client-based, I tend to have many `node_modules` folders on my computer and we all know how heavy they can be.

![Heaviest objects in universe meme - node_modules.](https://i.imgflip.com/4iuwew.jpg)

With `npkill` command you could find all `node_modules` folders and delete them easily.

## Starter Project CLI

[Starter Project CLI](https://www.npmjs.com/package/starter-project-cli) is the first CLI package that I released. I use Starter Project CLI every time I need to set up a Gulp workflow in a project. When you run the `spro start` command, you are prompted with series of questions about the tasks that you want to run and about the project architecture. Once you answer all the questions, Starter Project CLI will create desired tasks for you.

## Conclusion

I also wrote about [my bash scripts](/articles/my-bash-scripts-and-shortcuts/). If you want to know what other software and hardware I use, check [my setup page](/uses/).
