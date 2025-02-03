---
layout: default
title: Introducing SPRO
date: 2019-02-28 10:22:07
tags:
  - blog
  - gulp
  - tools
  - starter project
description: SPRO, a Starter Project CLI, sets up your next project's perfect dev environment by understanding architecture and creating Gulp tasks.
project:
  name: Starter Project
  href: /side-projects/starter-project/
type: articles-item
series: Starter Project
---

**SPRO** <small>(pronounces /es-pro/)</small>, or Starter Project CLI, is the best starting point for your next project. SPRO aims to set up a perfect development environment by learning about your project architecture and then setting up Gulp tasks for all your needs.

It is very flexible, and it could save you a vast amount of time that you usually spend on configuring your project.

<!-- more -->

{% note %}
SPRO is in its early stages, and every suggestion, feedback or help would be appreciated!
{% endnote %}

## Why Gulp

There has been a great discussion about the build tools in the Frontend Developers Slack group (now deprecated, moved to [Discord]). Some developers prefer Parcel because it is fast and it just works (so they say), some developers like [to write npm scripts] to avoid new levels of the abstraction, and some developers like to use CodeKit or Makefiles, which I didn't even know of before.

In another excellent article [Why npm scripts], Damon Bauer says it very nicely:

> “...if you are happy with your current build system and it accomplishes all that you need it to do, you can keep using it!”
>
> — Damon Bauer, [Why npm scripts]

Amongst other great build tools, like Grunt, Webpack, Parcel or even npm scripts, my favorite is Gulp because I am most familiar with this fantastic tool. I like the idea that every task could be isolated, and project files could be used as separated entities. _Switching to npm scripts is something to consider, though.

## About SPRO

About a year ago I started working on my side project, [Starter Project]. Starter Project is conceived as a boilerplate of the latest best practices packed in Gulp tasks. Instead of copy-pasting code from one project to another, why not have a single package that could be reused on various projects with a single configuration file that could be easily updated.

> “...why not have a single package that could be reused on various projects with a single configuration file that could be easily updated.”

Read more about the idea and possible problems that Starter Project package it is trying to solve [in the introduction article] from the last year.

## How it works

SPRO is conceived a bit differently. Instead of manually tweaking the configuration file, I have built a command that would start a questionary about the project structure840 .

{% cldnryfetch "spro-questions_dcflmw" "SPRO questions in terminal." %}

When you answer all questions, SPRO will store information to the `.starter-project.json` file. It would also prepare a command to install all dependencies based on your answers.

Besides the main configuration file, SPRO would add Gulp task files and other configuration files in the `gulpfile.js` directory.

> “Node's module resolution allows you to replace your `gulpfile.js` file with a directory named `gulpfile.js` that contains an `index.js` file which is treated as a `gulpfile.js`. This directory could then contain your individual modules for tasks.”
>
> — [Gulp.js 4 documentation]

Tasks that are defined in the SPRO could process your HTML, CSS, JavaScript, font, favicon, and graphics files. Gulp tasks would handle all files based on the configuration files in the `gulpfile.js` directory.

SPRO has a lot of features in one place, so you don't forget to add something to your project. The features include extracting Critical CSS, add BrowserSync for easier development, linting your HTML, Sass and JavaScript files, as well as adding sourcemaps and pug template engine.

There is a good chance that Gulp tasks would work for you in the first attempt. But if you are unlucky, don't hesitate: most errors could be resolved within a few minutes by debugging the problem and updating individual configuration files. You could [watch videos] and learn how SPRO works.

## Installation

SPRO is available as an npm module, and you could install it locally or globally.

```bash
npm install starter-project-cli
```

{% note "Tip" %}
[install using silent option](https://stackoverflow.com/questions/34426332/how-to-suppress-output-when-running-npm-scripts), `--silent` or `-s`, because suppressed output could speed up the installation progress.
{% endnote %}

Now you should be able to run the command from the terminal that would save you a significant amount of time in the future.

## The command

To check if the command is available, try running the following commands: `spro --version` and `node_modules/.bin/spro --version` for global and local installation, respectively. You should see the version number in your terminal.

{% video "https://res.cloudinary.com/starbist/image/upload/v1551288910/spro-version_jyelxa" 759 263 "autoplay" "loop" "mute" true %}

The command that you want to run is `spro start`. You should be prompted to answer the questions about the project structure, as mentioned earlier.

## Dependencies

Once you answer all questions, SPRO would display (and copy to clipboard) the command for installing dependencies for your project.

My initial idea was to include every possible dependency on the SPRO package. After thinking about it more thoroughly, I came to a conclusion that is not the right way. This approach was not optimized. Instead, you would install only dependencies that are required to run the tasks you selected.

To check all possible dependencies, go to [SPRO's GitHub page].

## Tasks

There are three primary Gulp tasks available for different development types:
- `gulp default`  for running all tasks (useful for more thorough development process),
- `gulp build` for running all tasks with the exit process (useful for Netlify builds, for example), and
- `gulp dev` for running only essential tasks (useful for basic development process).

These tasks are sets of many other subtasks. Subtasks will run depending on the global configuration option. If you choose not to run CSS tasks, the CSS based subtasks will be skipped (and Gulp dependencies would be omitted).

All subtasks are divided by the file type and primary function. Subtasks related to CSS could be found in the `gulpfile.js/css.js` file, and subtasks associated with extracting Critical CSS could be found in the `gulpfile.js/critical.js` file.

Each subtask has its own configuration file. CSS specific configuration could be found in the `gulpfile.js/.css.json` file, and Critical CSS relevant configuration could be found in the `gulpfile.js/.critical.json` file.

{% note %}
You could edit every individual configuration file manually. However, the main configuration file, `.starter-project.json` file, should not be manually edited. There is a good chance that your project wouldn't have all the dependencies for running Gulp tasks. Instead, start the `spro` command again.
{% endnote %}

## The course

I have created [a course] where you could learn more about SPRO.

[{% cldnryfetch "cover-2x_zheg7w" "SPRO course: Setting up development environment with Gulp" %}](https://skl.sh/2EcUlRt)

The course is free, but you need to have a [Skillshare] account to view all lessons. Be sure to complete the class project and to rate the course. 🆓

## Conclusion

I encourage everyone to try SPRO. I would appreciate any feedback, even if SPRO is not a good match for your project.

If SPRO is useful for you and your project, we could introduce more options or tasks that would create an even better experience for any developer. For example, I am currently considering adding [siteaudit] setting to the package.

Please show your support by starring the project on [Github], or by sharing on [Twitter].

Or contribute to the project by creating [a new issue] or [a pull request].

[Starter Project]: /side-projects/starter-project/
[in the introduction article]: /articles/starter-project-a-set-of-latest-best-practices-packed-in-gulp-tasks/
[Gulp.js 4 documentation]: https://gulpjs.com/docs/en/getting-started/javascript-and-gulpfiles#splitting-a-gulpfile
[Discord]: https://discord.gg/aBx8dcu
[Why npm scripts]: https://css-tricks.com/why-npm-scripts/
[to write npm scripts]: https://medium.freecodecamp.org/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8
[install using silent option]: https://stackoverflow.com/questions/34426332/how-to-suppress-output-when-running-npm-scripts
[SPRO's GitHub page]: https://github.com/maliMirkec/starter-project-cli#packages
[watch videos]: #the-course
[a course]: https://skl.sh/2EcUlRt
[SkillShare]: https://skl.sh/2EcUlRt
[siteaudit]: https://github.com/thecreazy/siteaudit
[GitHub]: https://github.com/maliMirkec/starter-project-cli
[Twitter]: https://twitter.com/intent/tweet?url=https://github.com/maliMirkec/starter-project-cli/&text=Starter%20Project%20CLI%20creates%20a%20perfect%20Gulp%20development%20environment%20for%20everyone%20within%20a%20few%20minutes.%20🔥%20Try%20it%20today!%20💯&via=malimirkeccita
[a new issue]: https://github.com/maliMirkec/starter-project-cli/issues/new
[a pull request]: https://github.com/maliMirkec/starter-project-cli/compare
