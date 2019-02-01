---
title: Introducing Starter Project CLI
date: 2019-01-20 20:22:07
tags:
  - gulp
  - starter project
categories:
  - Blog
comments: true
thumbnail: //res.cloudinary.com/starbist/image/upload/v1548013279/Introducing_Starter_Project_CLI-2x_gzuhpi.jpg
description: "Starter Project CLI is a package that creates a perfect Gulp development environment within a few minutes. Starter Project CLI is very flexible and it could be used on every project."
---

Starter Project CLI is a package that creates a perfect Gulp development environment within a few minutes. Starter Project CLI is very flexible and it could be used on every project.

<!-- more -->

## Why Gulp

I choose Gulp because I am most familiar with this fantastic tool. Amongst other great build tools, like Grunt, Webpack, Parcel or even npm scripts, I feel most comfortable writing streaming build process that is under my control.

There has been a great discussion about the build tools [in the Frontend Developers Slack]. Some developers prefer Parcel because it is fast and it just works, some developers like [to write npm scripts] to avoid new levels of the abstraction, and some developers like to use CodeKit or Makefiles, which I didn't even know of before.

In another excellent article [Why npm scripts], Damon Bauer says it very nicely:

> ...if you are happy with your current build system and it accomplishes all that you need it to do, you can keep using it!
> — Damon Bauer, [Why npm scripts]

I tried Parcel and Webpack before, but I didn't like the “single file input” approach. Switching to npm scripts is something to consider, though.

## Why Starter Project CLI

About a year ago I started working on my side project, [Starter Project]. Starter Project is conceived as a boilerplate of the latest best practices packed in Gulp tasks. Instead of copy-pasting code from one project to another, why not have a single package that could be reused on various projects with a single configuration file that could be easily updated.

> ...why not have a single package that could be reused on various projects with a single configuration file that could be easily updated.

Read more about the idea and possible problems that Starter Project package it is trying to solve [in the introduction article] from the last year.

Starter Project as a package was just fine, but I wanted to do more.

## How it works

Instead of manually tweaking the configuration file, I tried to build a command that would start a questionary about the project structure.

{% cloudinary //res.cloudinary.com/starbist/image/upload/v1548498930/starter-project-questions_pgkbzn.jpg 320px=f_auto,q_auto,w_270;720px=f_auto,q_auto,w_720 "dev.to stats" %}

When you answer every question, Starter Project CLI will store information to the `.starter-project.json` file. Besides the main configuration file, Starter Project CLI would add Gulp task files and other configuration files in the `gulpfile.js` directory.

> Node's module resolution allows you to replace your `gulpfile.js` file with a directory named `gulpfile.js` that contains an `index.js` file which is treated as a `gulpfile.js`. This directory could then contain your individual modules for tasks.
>
> — [Gulp.js 4 documentation]

Tasks that are defined in the Starter Project CLI could process your HTML, CSS, JavaScript, font, favicon, and graphics files. Gulp tasks would handle all files based on the configuration files in the `gulpfile.js` directory.

There is a good chance that Gulp tasks would work for you in the first attempt. But if you are unlucky, don't hesitate: most errors could be solved within a few minutes by debugging the problem and updating individual configuration files. You could [watch videos] and learn how Starter Project CLI works.

## Installation

Starter Project CLI is available as an npm module, and you could install it locally or globally.

```
npm install starter-project-cli
```

I should warn you that installation could last for a couple of minutes, depending on your machine power and internet speed.

*👉 Pro tip: [install using --silent option] because suppressed output could speed up the installation progress.*

As a reward for those who are patient, you should be able to run the command from your terminal that would save you a significant amount of time in the future.

## The command

To check if the command is available, try running the following commands `spro --version` and `node_modules/.bin/spro --version` for global and local installation, respectively. You should see the version number in your terminal.

{% cloudinary //res.cloudinary.com/starbist/image/upload/v1548498930/starter-project-version_f5jcz1.jpg 320px=f_auto,q_auto,w_270;720px=f_auto,q_auto,w_720 "dev.to stats" %}

The command that you want to run is `spro start`. You should be prompted to answer the questions about the project structure, as mentioned earlier.

## Tasks

There are three primary Gulp tasks available for different development types:
- `gulp default`  for running all tasks (useful for more thorough development process),
- `gulp build` for running all tasks with the exit process (useful for Netlify builds, for example), and
- `gulp dev` for running only essential tasks (useful for basic development process).

These tasks are set of many other subtasks. Subtasks will run depending on the global configuration option. If you choose not to run CSS tasks, the CSS based subtasks will be skipped.

All subtasks are divided by the file type and primary function. Subtasks related to CSS could be found in the `gulpfile.js/css.js` file, and subtasks associated with extracting Critical CSS could be found in the `gulpfile.js/critical.js` file. Each subtask has its own configuration file. CSS specific configuration could be found in the `gulpfile.js/.css.json` file, and Critical CSS relevant configuration could be found in the `gulpfile.js/.critical.json` file.

*👉 You could edit all configuration files manually based on your preferences. The main configuration file, `.starter-project.json` file, should not be manually edited. Instead, start the `spro` command again.*

## Examples

Starter Project is the easiest way to implement the latest best practices in your project, and it is powered by Starter Project CLI. Here is how:

VIDEO STARTER PROJECT

You could use Starter Project CLI on a different type of projects. Here is how you could use it for the WordPress theme development:

VIDEO WORDPRESS

<!-- And here is how you could use it on Middleman project:

VIDEO MIDDLEMAN -->

If you want to extract Critical CSS for multiple pages, here's how you could do it:

VIDEO CRITICAL CSS

Videos are recorder with Loom. Software used: Local by Flywheel, VS Code, iTerm2, and Chrome.

## Downside

https://medium.com/@mattholt/its-2019-and-i-still-make-websites-with-my-bare-hands-73d4eec6b7

## Conclusion

I encourage everyone to try Starter Project CLI. If only, you could say that it isn't the tool for you. I would appreciate any feedback. If this package is on the right track, we could introduce more options or tasks that would create an even better experience for any developer.

Show your support by starring the project on [Github], or by sharing on [Twitter], please. 🙏

Contribute by creating [a new issue] or by creating [a pull request].

## Pros and cons

There are always pros and cons when using any tool. I would say that the biggest problem of the Starter Project CLI is the size of the project, and the reason is the number of dependencies. There is a great possibility that you do not need all dependencies.

https://github.com/gulpjs/gulp-cli/issues/84#issuecomment-272958709

[Starter Project]: https://starter.silvestarbistrovic.from.hr/
[in the introduction article]: https://www.silvestarbistrovic.from.hr/articles/starter-project-a-set-of-latest-best-practices-packed-in-gulp-tasks/
[Gulp.js 4 documentation]: https://gulpjs.com/docs/en/getting-started/javascript-and-gulpfiles#splitting-a-gulpfile
[Why npm scripts]: https://css-tricks.com/why-npm-scripts/
[in the Frontend Developers Slack]: https://frontenddevelopers.slack.com/archives/C03DXEF47/p1547661494347100
[to write npm scripts]: https://medium.freecodecamp.org/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8
[install using --silent option]: https://stackoverflow.com/questions/34426332/how-to-suppress-output-when-running-npm-scripts
[watch videos]: #Examples
[GitHub]: https://github.com/maliMirkec/starter-project-cli
[Twitter]: https://twitter.com/intent/tweet?url=https://github.com/maliMirkec/starter-project-cli/&text=Starter%20Project%20CLI%20creates%20a%20perfect%20Gulp%20development%20environment%20for%20everyone%20within%20a%20few%20minutes.%20🔥%20Try%20it%20today!%20💯&via=malimirkeccita
[a new issue]: https://github.com/maliMirkec/starter-project-cli/issues/new
[a pull request]: https://github.com/maliMirkec/starter-project-cli/compare
