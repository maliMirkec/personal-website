---
layout: index
title: Starter Project - Gulp tasks for CSS
date: 2018-04-22 11:28:37
tags:
  - blog
  - gulp
  - css
  - starter project
thumbnail: Starter_Project_-_Gulp_tasks_for_CSS_qzmrjw
description: This article is part of a series about Starter Project, and this time I will explain all about Gulp tasks for CSS.
project:
  name: Starter Project
  href: https://starter.silvestar.codes
type: articles-item
sections2:
  - type: banner-beta
    banner: newsletter
    animate: true
series: Starter Project
---

This article is part of a series about [Starter Project], and this time I will explain all about Gulp tasks for CSS.

<!-- more -->

## Settings

The idea of Starter Project is to have a single config file for all Gulp tasks. If you open `config.json` file, you could see a section for CSS.

{% cldnry "config-json-css_ha2n75" "config.json file, CSS part." 600 783 %}

The first option is `run`. If set to true, CSS Gulp tasks will be executed. There are three other mandatory options for CSS:

- `src` - a path to a folder with Sass files,
- `dest` - a path to a folder where compiled CSS files will be saved, and
- `clean` - a path to a folder which will be cleaned before Gulp execution (almost always the same as `dest` option).

{% note %}
All paths are prepended with global `root` path.
{% endnote %}

Other options are for [gulp-cssimport], [gulp-autoprefixer], [gulp-rename], and [gulp-sourcemaps].

## Sass

Starter Project uses [Sass] as a preprocessor for CSS. As it's official website says, Sass is "CSS with superpowers." A significant number of developers are supporters and users of this robust program. It has useful features like variables, functions, and mixins.

> “CSS with superpowers.”

Starter Project uses [gulp-sass] plugin for compiling Sass to CSS.

## Imports

[gulp-cssimport] is a plugin that allows import of linked files by including content to CSS file. This means you cannot use native CSS `@import` implementation, but it is considered [a bad practice](https://stackoverflow.com/a/7199377) in most cases anyway.

To use this plugin, add `@import` statement in Sass file.

```sass
// Plugins
@import 'normalize';
@import 'modularscale';
@import 'mq';

// Configuration
@import 'variables';
@import 'fonts';
@import 'locks';
@import 'helpers';
@import 'typography';
@import 'theme';
```

You could add `includePaths` option to the `sassConfig` settings to avoid writing full paths of the included libraries.

```json
"sassConfig": {
  "includePaths": [
     "./node_modules/modularscale-sass/stylesheets/",
     "./node_modules/sass-mq/",
     "./node_modules/normalize.css/",
     "./src/scss/",
     "./src/scss/components"
  ]
},
```

## Sass libraries

Starter Project has three libraries imported:
- Normalize.css,

- Modular Scale, and
- Media Queries.

```sass
@import 'normalize';
@import 'modularscale';
@import 'mq';
```

If your website looks inconsistent across different browsers, you probably want to use CSS technique to reset browser behavior. In Starter Project, [Normalize.css] is used for this task.

> “Normalize.css makes browsers render all elements more consistently and in line with modern standards. It precisely targets only the styles that need normalizing.”
>
> — Nicolas Gallagher

[Modular Scale] helps with font size consistency. [modularscale-sass] is a list of values that are used to size type and create a sense of harmony in design.

[sass-mq] is a Sass mixin that helps a developer in composing media queries in an elegant way.

## Autoprefix

Starter Project uses [gulp-autoprefixer] plugin to add vendor prefixes to CSS files. This plugin is handy as developers don't have to add these prefixes manually. In `config.json`, you could add [Autoprefixer options] to `autoprefixedConfig` settings.

```json
"autoprefixedConfig": {
    "browsers": ["last 5 versions"],
    "cascade": false
},
```

## Source maps

Source maps allow developers to see the source code for compressed assets. In Starter Project, [gulp-sourcemaps] plugin is used to create source maps for CSS and JavaScript files. If your environment doesn't require source maps, you could disable it by setting `run` option to `false` in `sourcemapsConfig`.

```json
"sourcemapsConfig": {
  "run": true
}
```

## Minifying

[gulp-clean-css] is a Gulp plugin that acts as a wrapper for [clean-css](https://github.com/jakubpawlowicz/clean-css). In Starter Project, this plugin is used for CSS minification. To create less confusion with file names, `gulp-rename` plugin is used to rename minified assets by adding prefix or suffix to the file name.

```json
"renameConfig": {
  "suffix": ".min"
}
```

## Linting

> “Linting is the process of running a program that will analyze code for potential errors.”
>
> Source: [StackOverflow](https://stackoverflow.com/a/8503586)

In Starter Project, [gulp-stylelint] plugin is used to lint CSS files. You could configure the plugin in `config.json` file.

```json
"styleLintConfig": {
  "reporters": [{
    "formatter": "string",
    "console": true
  }]
},
```

Default settings output error in a console as a string. See all available settings [here](https://www.npmjs.com/package/gulp-stylelint#options).

Stylelint options are stored in `.stylelintrc` file.

```json
{
  "plugins": [
    "stylelint-scss",
    "stylelint-order"
  ],
  "extends": "stylelint-config-sass-guidelines"
}
```

Stylelint also has its plugins. In Starter Project, [stylelint-scss] and [stylelint-order] plugins are used. Also, there are [Stylelint Sass Guidelines] that are used to extend default Stylelint settings. Learn more about Stylelint [on the official website](https://stylelint.io/).

## Bonus

For all the VS Code users, here is the tip how to use Stylelint inside the editor. First, install [stylefmt] and [Run On Save] extensions for VS Code. Then call command palette by pressing `cmd + shift + p`, and type `open workspace settings`.

{% cldnry "open-workspace-settings_luw5ru" "Open workspace settings example." 840 91 %}

When you open the workspace settings, add these settings.

```json
{
  "emeraldwalk.runonsave": {
    "commands": [{
      "match": "\\.scss?$",
      "cmd": "cd ${workspaceRoot} && stylefmt -c .stylelintrc ${file}"
    }]
  }
}
```

This should run stylelint when you save `.scss` files. If it doesn't work, [contact me](mailto:admin@silvestar.codes?Subject=VSCode) for help.

## Conclusion

[In the previous article], I was trying to explain the idea for this project. This article should help you understand how Gulp could be used to optimize, lint and deliver best possible CSS output.

[Starter Project] is conceived as a boilerplate with the latest best practices for generating the best possible outcome. If you have any idea or suggestion how this project could be better and more interesting, please [contact me](mailto:admin@silvestar.codes?Subject=Starter), open [an issue], or create [a pull request] on [GitHub].

Please share! 🙏

[In the previous article]: /articles/starter-project-a-set-of-latest-best-practices-packed-in-gulp-tasks/
[Starter Project]: https://starter.silvestar.codes/
[npm]: https://www.npmjs.com/package/starter-project
[Sass]: https://sass-lang.com/
[gulp-sass]: https://www.npmjs.com/package/gulp-sass
[gulp-cssimport]: https://www.npmjs.com/package/gulp-cssimport
[Normalize.css]: https://necolas.github.io/normalize.css/
[Modular Scale]: http://www.modularscale.com/
[modularscale-sass]: https://www.npmjs.com/package/modularscale-sass
[sass-mq]: https://www.npmjs.com/package/sass-mq
[gulp-autoprefixer]: https://www.npmjs.com/package/gulp-autoprefixer
[Autoprefixer options]: https://github.com/postcss/autoprefixer#options
[gulp-clean-css]: https://www.npmjs.com/package/gulp-clean-css
[clean-css]: https://www.npmjs.com/package/clean-css
[gulp-rename]: https://www.npmjs.com/package/gulp-rename
[gulp-sourcemaps]: https://www.npmjs.com/package/gulp-sourcemaps
[gulp-stylelint]: https://www.npmjs.com/package/gulp-stylelint
[stylelint-scss]: https://www.npmjs.com/package/stylelint-scss
[stylelint-order]: https://www.npmjs.com/package/stylelint-order
[Stylelint Sass Guidelines]: https://github.com/bjankord/stylelint-config-sass-guidelines
[stylefmt]: https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-stylefmt
[Run On Save]: https://marketplace.visualstudio.com/items?itemName=emeraldwalk.RunOnSave
[an issue]: https://github.com/maliMirkec/starter-project/issues/new
[a pull request]: https://github.com/maliMirkec/starter-project/compare
[GitHub]: https://github.com/maliMirkec/starter-project
