---
title: Introducing Starter Project CLI
date: 2019-02-04 20:22:07
tags:
  - gulp
  - starter project
categories:
  - Blog
comments: true
thumbnail: //res.cloudinary.com/starbist/image/upload/v1548013279/Introducing_Starter_Project_CLI-2x_gzuhpi.jpg
description: "Starter Project CLI, or *SPRO* (pronounces es-pro), is a package that creates a perfect Gulp development environment within a few minutes. SPRO is very flexible, and it could save you a vast amount of time that you usually spend on configuring your project."
---

Starter Project CLI, or *SPRO* (pronounces /es-pro/), is a package that creates a perfect Gulp development environment within a few minutes. SPRO is very flexible, and it could save you a vast amount of time that you usually spend on configuring your project.

<!-- more -->

## Why Gulp

There has been a great discussion about the build tools [in the Frontend Developers Slack]. Some developers prefer Parcel because it is fast and it just works, some developers like [to write npm scripts] to avoid new levels of the abstraction, and some developers like to use CodeKit or Makefiles, which I didn't even know of before.

In another excellent article [Why npm scripts], Damon Bauer says it very nicely:

> ...if you are happy with your current build system and it accomplishes all that you need it to do, you can keep using it!
>
> — Damon Bauer, [Why npm scripts]

Amongst other great build tools, like Grunt, Webpack, Parcel or even npm scripts, I choose Gulp because I am most familiar with this fantastic tool. I like the idea that every task could be isolated, and project files could be used as separated entities. Switching to npm scripts is something to consider, though.

## About SPRO

About a year ago I started working on my side project, [Starter Project]. Starter Project is conceived as a boilerplate of the latest best practices packed in Gulp tasks. Instead of copy-pasting code from one project to another, why not have a single package that could be reused on various projects with a single configuration file that could be easily updated.

> ...why not have a single package that could be reused on various projects with a single configuration file that could be easily updated.

Read more about the idea and possible problems that Starter Project package it is trying to solve [in the introduction article] from the last year.

## How it works

SPRO is conceived a bit differently. Instead of manually tweaking the configuration file, I have built a command that would start a questionary about the project structure.

{% cloudinary //res.cloudinary.com/starbist/image/upload/v1549208962/starter-project-questions_wsyf1i.png 320px=f_auto,q_auto,w_270;720px=f_auto,q_auto,w_720 "SPRO questions in terminal" %}

When you answer every question, SPRO will store information to the `.starter-project.json` file. It would also prepare a command to install all dependencies based on your answers.

Besides the main configuration file, SPRO would add Gulp task files and other configuration files in the `gulpfile.js` directory.

> Node's module resolution allows you to replace your `gulpfile.js` file with a directory named `gulpfile.js` that contains an `index.js` file which is treated as a `gulpfile.js`. This directory could then contain your individual modules for tasks.
>
> — [Gulp.js 4 documentation]

Tasks that are defined in the SPRO could process your HTML, CSS, JavaScript, font, favicon, and graphics files. Gulp tasks would handle all files based on the configuration files in the `gulpfile.js` directory.

SPRO has a lot of features in one place, so you don't forget to add it to your project. The features include extracting Critical CSS, add BrowserSync for easier development, linting your HTML, Sass and JavaScript files, as well as adding sourcemaps and pug template engine.

There is a good chance that Gulp tasks would work for you in the first attempt. But if you are unlucky, don't hesitate: most errors could be solved within a few minutes by debugging the problem and updating individual configuration files. You could [watch videos] and learn how SPRO works.

## Installation

SPRO is available as an npm module, and you could install it locally or globally.

```
npm install starter-project-cli
```

*👉 Pro tip: [install using --silent option] because suppressed output could speed up the installation progress.*

Now you should be able to run the command from the terminal that would save you a significant amount of time in the future.

## The command

To check if the command is available, try running the following commands: `spro --version` and `node_modules/.bin/spro --version` for global and local installation, respectively. You should see the version number in your terminal.

{% cloudinary //res.cloudinary.com/starbist/image/upload/v1548498930/starter-project-version_f5jcz1.jpg 320px=f_auto,q_auto,w_270;720px=f_auto,q_auto,w_720 "dev.to stats" %}

The command that you want to run is `spro start`. You should be prompted to answer the questions about the project structure, as mentioned earlier.

## Dependencies

Once you answer the question, SPRO would display (and copy to clipboard) the command for installing dependencies for your project.

My initial idea was to include every possible dependency on the SPRO package. After thinking about it more thoroughly, I come to a conclusion that is not the right way. Especially for globally installed command—dependencies wouldn't be part of the new project.

To check the possible dependency list, go to [SPRO's GitHub page].

## Tasks

There are three primary Gulp tasks available for different development types:
- `gulp default`  for running all tasks (useful for more thorough development process),
- `gulp build` for running all tasks with the exit process (useful for Netlify builds, for example), and
- `gulp dev` for running only essential tasks (useful for basic development process).

These tasks are set of many other subtasks. Subtasks will run depending on the global configuration option. If you choose not to run CSS tasks, the CSS based subtasks will be skipped (and Gulp dependencies would be omitted).

All subtasks are divided by the file type and primary function. Subtasks related to CSS could be found in the `gulpfile.js/css.js` file, and subtasks associated with extracting Critical CSS could be found in the `gulpfile.js/critical.js` file.

Each subtask has its own configuration file. CSS specific configuration could be found in the `gulpfile.js/.css.json` file, and Critical CSS relevant configuration could be found in the `gulpfile.js/.critical.json` file.

*👉 You could edit every individual configuration file manually. However, the main configuration file, `.starter-project.json` file, should not be manually edited. There is a good chance that your project wouldn't have all dependencies for running Gulp tasks. Instead, start the `spro` command again.*

## Examples

Starter Project is the easiest way to implement the latest best practices in your project, and it is powered by SPRO. Here is how:

VIDEO STARTER PROJECT

You could use SPRO on a different type of projects. Here is how you could use it for the WordPress theme development:

VIDEO WORDPRESS

<!-- And here is how you could use it on Middleman project:

VIDEO MIDDLEMAN -->

If you want to extract Critical CSS for multiple pages, here's how you could do it:

VIDEO CRITICAL CSS

Videos are recorded with Loom. Software used: Local by Flywheel, VS Code, iTerm2, and Chrome.

## Conclusion

I encourage everyone to try SPRO. I would appreciate any feedback, even if SPRO is not a good match for your project.

If SPRO is useful for you and your project, we could introduce more options or tasks that would create an even better experience for any developer. For example, I am currently considering adding [siteaudit] setting to the package.

Please show your support by starring the project on [Github], or by sharing on [Twitter]. 🙏

Or contribute to project by creating [a new issue] or [a pull request].

[Starter Project]: https://starter.silvestarbistrovic.from.hr/
[in the introduction article]: https://www.silvestarbistrovic.from.hr/articles/starter-project-a-set-of-latest-best-practices-packed-in-gulp-tasks/
[Gulp.js 4 documentation]: https://gulpjs.com/docs/en/getting-started/javascript-and-gulpfiles#splitting-a-gulpfile
[Why npm scripts]: https://css-tricks.com/why-npm-scripts/
[in the Frontend Developers Slack]: https://frontenddevelopers.slack.com/archives/C03DXEF47/p1547661494347100
[to write npm scripts]: https://medium.freecodecamp.org/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8
[install using --silent option]: https://stackoverflow.com/questions/34426332/how-to-suppress-output-when-running-npm-scripts
[SPRO's GitHub page]: https://github.com/maliMirkec/starter-project-cli#packages
[watch videos]: #Examples
[siteaudit]: https://github.com/thecreazy/siteaudit
[GitHub]: https://github.com/maliMirkec/starter-project-cli
[Twitter]: https://twitter.com/intent/tweet?url=https://github.com/maliMirkec/starter-project-cli/&text=Starter%20Project%20CLI%20creates%20a%20perfect%20Gulp%20development%20environment%20for%20everyone%20within%20a%20few%20minutes.%20🔥%20Try%20it%20today!%20💯&via=malimirkeccita
[a new issue]: https://github.com/maliMirkec/starter-project-cli/issues/new
[a pull request]: https://github.com/maliMirkec/starter-project-cli/compare
