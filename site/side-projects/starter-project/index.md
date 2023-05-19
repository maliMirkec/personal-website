---
layout: project
title: Starter Project
projectTitle: Starter Project
description: Learn about the Starter Project, a set of the latest and best practices in web development, packed into Gulp tasks that fits into every project.
type: articles-item
tags:
  - projects
thumbnail:
  src: spro_lz9fow
  alt: Screenshot of the Starter Project website.
  width: 759
  height: 459
display: true
date: 2005-07-01
---

# SPRO / Starter Project CLI

**Starter Project CLI creates a perfect Gulp development environment for everyone within a few minutes.**

Starter Project CLI, or **SPRO** (pronounces es-pro), is a command line interface that could save you a vast amount of time that you usually spend on configuring your project. SPRO's mission is to set up a perfect development environment by learning about your project architecture and then setting up Gulp tasks for all your needs.

SPRO should be considered as a boilerplate of predefined Gulp tasks. SPRO would install Gulp tasks for processing the following file types:

* HTML (pug)
* CSS (Sass)
* JavaScript (es6)
* Graphic (PNG, JPEG, SVG, GIF)
* Fonts
* Favicons

The tasks include compiling, lintering, formatting, compressing, and transforming your source file to produce the most optimized production files.

{% note %}
If you would like to add a Gulp task, feel free to open [a pull request](https://github.com/maliMirkec/starter-project-cli/compare), or request a feature by creating [a new issue](https://github.com/maliMirkec/starter-project-cli/issues/new).
{% endnote %}

## Table of Contents

* [Resources](#resources)
* [Installation](#installation)
* [Getting started](#getting-started)
* [Gulp tasks](#gulp-tasks)
* [Configuration file](#configuration-files)
* [Path Placeholders](#path-placeholders)
* [Command](#command)
* [Task Configuration](#task-configuration)
  * [BrowserSync Configuration](#browsersync-configuration)
  * [Favicon Configuration](#favicon-configuration)
  * [HTML Configuration](#html-configuration)
  * [CSS Configuration](#css-configuration)
  * [JavaScript Configuration](#javascript-configuration)
  * [Images Configuration](#images-configuration)
  * [Critical CSS Configuration](#critical-css-configuration)
  * [Semver Configuration](#semver-configuration)
  * [KSS Configuration](#kss-configuration)
  * [SassDoc Configuration](#sassdoc-configuration)
  * [JSDoc Configuration](#jsdoc-configuration)
  * [Helpers Configuration](#helpers-configuration)
  * [Watch Configuration](#watch-configuration)
* [Questions](#questions)
* [Dependencies](#dependencies)
* [Support](#support)

## Resources

Besides this documentation, you could learn more about SPRO by reading the following articles:

* [Introducing SPRO](https://www.silvestar.codes/articles/introducing-spro/), and
* [Custom WordPress Theme Development with SPRO](https://www.silvestar.codes/articles/custom-wordpress-theme-development-with-spro/).

Also, you could watch the full course about SPRO on Skillshare (registration required):

* [Setting up development environment with Gulp](https://skl.sh/2EcUlRt)

### Installation

You could use SPRO as a global or local package.

To install the package locally, run:

```bash
npm install starter-project-cli --save
```

To install the package globally, run:

```bash
npm install --global starter-project-cli --save
```

### Getting started

After successful installation, you could run the `spro` command. If you have installed the package locally, you could initialize the package by running the following command:

```bash
node_modules/.bin/spro start
```

If you have installed the package globally, you could initialize the package by running the following command:

```bash
spro start
```

SPRO would prompt you to ask a few questions about the project structure.

Once you answer all questions, SPRO would do two things:

* copy all required files (Gulp task files and configuration files), and
* prepare a command for installation of dependencies required for the project.

{% note "Important" %}
Note that the installation process could last a few minutes.
{% endnote %}

### Gulp tasks

In the `gulpfile.js` folder you could find all Gulp task files and configuration files.

There are four available major Gulp tasks:

{% twrapper %}
| Task      | Description                                                                                   |
| --------- | --------------------------------------------------------------------------------------------- |
| `default` | the task for running all the tasks (useful for more thorough development process)             |
| `build`   | the task for running all tasks with the exit process (useful for Netlify builds, for example) |
| `dev`     | the task for running only essential tasks (useful for basic development process)              |
| `clean`   | the task for deleting compiled code.                                                          |
{% endtwrapper %}

And there are three optional Gulp tasks for versioning (available only you choose SEMVER option):

{% twrapper %}
| Task        | Description                                                    |
| ----------- | -------------------------------------------------------------- |
| `bumpPatch` | the task for bumping patch versions of the `package.json` file |
| `bumpMinor` | the task for bumping minor versions of the `package.json` file |
| `bumpMajor` | the task for bumping major versions of the `package.json` file |
{% endtwrapper %}

{% note "Pro tip" %}
Run `gulp --tasks` to see all available Gulp tasks.
{% endnote %}

### Configuration files

Site configuration is stored in the `data/site.json` file. Make sure to update the configuration file per your needs. If you want to access the data from pug templates, make sure to update the `src/layout/variables.pug` file with the correct configuration.

If you want more control over your Gulp tasks, you could find the Gulp configuration files for every single Gulp task in the `gulpfile.js` folder.

`.starter-project.json` is the main Gulp configuration file in which you could find all global settings for Gulp tasks. Avoid editing this file manually.

```json
{
  {
  "proot": "./",
  "src": "src",
  "dist": "dist",
  "sync": {
    "run": true
  },
  "html": {
    "run": true,
    "src": "html",
    "data": true,
    "inline": true,
    "dist": "",
    "pug": false,
    "minify": true,
    "lint": true
  },
  "css": {
    "run": true,
    "src": "scss",
    "dist": "css",
    "sass": true,
    "minify": true,
    "autoprefix": true,
    "sourcemaps": true,
    "lint": true
  },
  "js": {
    "run": true,
    "src": "js",
    "dist": "js",
    "uglify": true,
    "lint": true,
    "sourcemaps": true
  },
  "gfx": {
    "run": true,
    "src": "gfx",
    "dist": "gfx"
  },
  "fonts": {
    "run": true,
    "src": "fonts",
    "dist": "fonts"
  },
  "favicon": {
    "run": true
  },
  "critical": {
    "run": true
  },
  "kss": {
    "run": true,
    "dist": "docs/styleguide"
  },
  "sassdoc": {
    "run": true,
    "dist": "docs/sass"
  },
  "jsdoc": {
    "run": true,
    "dist": "docs/js"
  },
  "bump": {
    "run": true
  }
}
```

{% note "Important" %}
Avoid editing this file manually, unless you know what you are doing. Run `spro start` command again instead.
{% endnote %}

See more about individual configuring tasks [in the Task Configuration section](#task-configuration).

### Path Placeholders

SPRO provides _path placeholders_ for easier configuration. All path placeholders would be replaced with settings from the main config file, `.starter-project.json` file.

**Use path placeholders to avoid hardcoding paths in the project.**

Here is the list of all available path placeholders:

{% twrapper %}
| Placeholder        | Replacement                         |
| ------------------ | ----------------------------------- |
| `helpers.proot`    | project root path                   |
| `helpers.source`   | project source path                 |
| `helpers.dist`     | project destination path            |
| `config.html.src`  | project HTML source path            |
| `config.html.dist` | project HTML source path            |
| `config.css.src`   | project CSS source path             |
| `config.css.dist`  | project CSS destination path        |
| `config.js.src`    | project JavaScript source path      |
| `config.js.dist`   | project JavaScript destination path |
{% endtwrapper %}

### Command

SPRO package has only one command:
- `spro start`, `spro s`.

Also, you could run `spro --version` to check the version of the package.

### Task Configuration

Every task has its own configuration file.

### BrowserSync Configuration

The default BrowserSync configuration is defined as follows:

```json
{
  "port": 8088,
  "server": {
    "baseDir": ""
  }
}
```

You could see all available options [on BrowserSync the npm page](https://browsersync.io/docs/options).

### Favicon Configuration

The default favicon configuration is defined as follows:

```json
{
  "run": true,
  "src": "helpers.source/config.html.src/_assets/favicon.pug",
  "dest": "helpers.source/config.html.src/_assets"
}
```

To make the favicon task work, you should visit the [RealFaviconGenerator](https://realfavicongenerator.net/) and run the wizard. At the end of the process, you should copy the setting and put them in the `.favicon-data.json` file under `gulpfile.js` directory.

If you need more help understanding the configuration, please open [a new issue].

### HTML Configuration

The default HTML configuration is defined as follows:

```json
{
  "pugConfig": {
    "basedir": "",
    "pretty": true
  },
  "htmllintConfig": {
    "config": "",
    "failOnError": false
  },
  "htmlminConfig": {
    "collapseWhitespace": true
  },
  "renameConfig": {
    "extname": ".html"
  },
  "inlineConfig": {
    "rootpath": ""
  }
}
```

If you need more help understanding the configuration, please open [a new issue].

### CSS Configuration

The default CSS configuration is defined as follows:

```json
{
  "sassConfig": {
    "includePaths": [
      "helpers.proot/node_modules/modularscale-sass/stylesheets/",
      "helpers.proot/node_modules/sass-mq/",
      "helpers.proot/node_modules/normalize.css/",
      "helpers.source/config.css.src/",
      "helpers.source/config.css.src/components/"
    ]
  },
  "styleLintConfig": {
    "reporters": [{
      "formatter": "string",
      "console": true
    }]
  },
  "autoprefixerConfig": {
    "cascade": false
  },
  "renameConfig": {
    "suffix": ".min"
  }
}
```

If you need more help understanding the configuration, please open [a new issue].

### JavaScript Configuration

The default JavaScript configuration is defined as follows:

```json
{
  "eslintConfig": {
    "configFile": "helpers.proot/.eslintrc.json",
    "fix": true,
    "quiet": true
  },
  "includeConfig": {
    "hardFail": true,
    "includePaths": [
      "helpers.proot/node_modules"
    ]
  },
  "babelConfig": {
    "presets": ["@babel/env"]
  },
  "renameConfig": {
    "suffix": ".min"
  }
}
```

If you need more help understanding the configuration, please open [a new issue].

### Images Configuration

The default images configuration is defined as follows:

```json
{
  "gifConfig": {
    "interlaced": true
  },
  "jpegConfig": {
    "quality": 90,
    "progressive": true
  },
  "pngConfig": {
    "quality": [0.8, 0.9]
  },
  "svgConfig": {
    "plugins": [
      {
        "cleanupAttrs": true
      },
      {
        "removeDoctype": true
      },
      {
        "removeComments": true
      },
      {
        "removeXMLProcInst": true
      },
      {
        "removeMetadata": true
      },
      {
        "removeTitle": false
      },
      {
        "removeDesc": false
      },
      {
        "removeUselessDefs": true
      },
      {
        "removeXMLNS": false
      },
      {
        "removeEditorsNSData": true
      },
      {
        "removeEmptyAttrs": true
      },
      {
        "removeHiddenElems": true
      },
      {
        "removeEditorsNSData": true
      },
      {
        "removeEmptyText": true
      },
      {
        "removeEmptyContainers": true
      },
      {
        "removeViewBox": false
      },
      {
        "cleanupEnableBackground": true
      },
      {
        "convertStyleToAttrs": true
      },
      {
        "convertColors": true
      },
      {
        "convertPathData": true
      },
      {
        "convertTransform": true
      },
      {
        "removeUnknownsAndDefaults": true
      },
      {
        "removeNonInheritableGroupAttrs": true
      },
      {
        "removeUselessStrokeAndFill": true
      },
      {
        "removeUnusedNS": true
      },
      {
        "cleanupIDs": false
      },
      {
        "cleanupNumericValues": true
      },
      {
        "cleanupListOfValues": true
      },
      {
        "moveElemsAttrsToGroup": true
      },
      {
        "moveGroupAttrsToElems": false
      },
      {
        "collapseGroups": true
      },
      {
        "removeRasterImages": true
      },
      {
        "mergePaths": true
      },
      {
        "convertShapeToPath": false
      },
      {
        "sortAttrs": true
      },
      {
        "removeDimensions": true
      },
      {
        "removeAttrs": false
      },
      {
        "removeElementsByAttr": false
      },
      {
        "addClassesToSVGElement": false
      },
      {
        "addAttributesToSVGElement": false
      },
      {
        "removeStyleElement": false
      },
      {
        "removeScriptElement": false
      },
      {
        "removeDimensions": false
      }
    ]
  }
}
```

If you need more help understanding the configuration, please open [a new issue].

### Critical CSS Configuration

The default Critical CSS configuration is defined as follows:

```json
{
  "temp": "helpers.source/critical/",
  "configs": [{
    "src": "style.css",
    "settings": {
      "out": "style.critical.css",
      "url": "http://localhost:8088/",
      "width": 1920,
      "height": 1200,
      "keepLargerMediaQueries": true,
      "strict": false,
      "blockJSRequests": false,
      "phantomJsOptions": {
        "ssl-protocol": "any",
        "ignore-ssl-errors": true
      }
    }
  }]
}
```

If you need more help understanding the configuration, please open [a new issue].

### Semver Configuration

The default Semver configuration is defined as follows:

```json
{
  "src": ["helpers.proot/package.json"]
}
```

If you need more help understanding the configuration, please open [a new issue].

### KSS Configuration

The default KSS configuration is defined as follows:

```json
{
  "title": "Starter Project",
  "source": "helpers.source",
  "destination": "helpers.dist/docs/styleguide/",
  "css": [
    "helpers.dist/config.css.dist/style.css"
  ],
  "js": []
}
```

If you need more help understanding the configuration, please open [a new issue].

### SassDoc Configuration

The default SassDoc configuration is defined as follows:

```json
{
  "dest": "/docs/sass/",
  "package": "package.json",
  "autofill": true,
  "verbose": true,
  "theme": "default",
  "display": {
    "access": ["public", "private"],
    "alias": true,
    "watermark": true
  },
  "groups": {
    "undefined": "Misc"
  },
  "basePath": "https://www.silvestar.codes/docs/sass/"
}
```

If you need more help understanding the configuration, please open [a new issue].

### JSDoc Configuration

The default JSDoc configuration is defined as follows:

```json
{
  "src": [
    "helpers.source/config.js.src/homepage.md",
    "helpers.source/config.js.src/"
  ],
  "settings": {
    "tags": {
      "allowUnknownTags": true
    },
    "opts": {
      "destination": "helpers.dist/docs/js/"
    },
    "plugins": [
      "plugins/markdown"
    ],
    "templates": {
      "cleverLinks": true,
      "monospaceLinks": false,
      "default": {
        "outputSourceFiles": true
      },
      "path": "ink-docstrap",
      "theme": "simplex",
      "navType": "vertical",
      "linenums": true,
      "dateFormat": "MMMM Do YYYY, h:mm:ss a"
    }
  }
}
```

If you need more help understanding the configuration, please open [a new issue].

### Helpers Configuration

The default helpers configuration is defined as follows:

```.helpers.json
{
  "wait": 20000
}
```

### Watch Configuration

The default watch configuration is defined as follows:

```json
{
  "ignoreInitial": true
}
```

This setting will tell Gulp when to terminate the build (watch) process.

## Questions

SPRO would ask you the following questions:

* [GENERAL] Do you want to override the project? Be sure to commit all changes before you proceed.',
* [GENERAL] What is the root folder of the project?',
* [GENERAL] Where is the folder with the source code of the project (relative to default path)?',
* [GENERAL] Where do you want to store compiled code of the project (relative to default path)?',
* [GENERAL] Are you sure that you want to override the project?',
* [BROWSERSYNC] Do you want to run BrowserSync to preview changes in the browser?',
* [HTML] Do you want to run HTML tasks?',
* [HTML] Are you using Pug as a template engine?',
* [HTML] Where is the folder with HTML source code (relative to default source path)?',
* [HTML] Where do you want to store compiled HTML code (relative to default destination path)?',
* [HTML] Do you want to minify HTML code?',
* [HTML] Do you want to run inline source tasks (inline CSS or SVG in HTML code)?',
* [HTML] Do you want to lint HTML code?',
* [CSS] Do you want to run CSS tasks?',
* [CSS] Are you using Sass?',
* [CSS] Where is the folder with CSS source code (relative to default source path)?',
* [CSS] Where do you want to store compiled CSS code (relative to default destination path)?',
* [CSS] Do you want to minify CSS code?',
* [CSS] Do you want to autoprefix CSS code?',
* [CSS] Do you want to add sourcemaps for CSS code?',
* [CSS] Do you want to lint CSS code?',
* [JS] Do you want to run JavaScript (es6) tasks?',
* [JS] Where is the folder with JavaScript source code (relative to default source path)?',
* [JS] Where do you want to store compiled JavaScript code (relative to default destination path)?',
* [JS] Do you want to minify JavaScript code?',
* [JS] Do you want to add sourcemaps for JavaScript code?',
* [JS] Do you want to lint JavaScript code?',
* [IMAGES] Do you want to run image optimization tasks?',
* [IMAGES] Where is the folder with images (relative to default source path)?',
* [IMAGES] Where do you want to store optimized images (relative to default destination path)?',
* [FONTS] Do you use local fonts? Do you want to run font tasks?',
* [FONTS] Where is the folder with local fonts (relative to default source path)?',
* [FONTS] Where do you want to store local fonts (relative to default destination path)?',
* [FAVICON] Do you want to run favicon tasks?',
* [CRITICAL] Do you want to extract Critical CSS?',
* [KSS] Do you want to add KSS style guide?',
* [KSS] Where do you want to store KSS style guide (relative to default destination path)?',
* [SASSDOC] Do you want to add documentation for the SASS code (SassDoc)?',
* [SASSDOC] Where do you want to store SassDoc files (relative to default destination path)?',
* [JSDOC] Do you want to add documentation for the JS code (JSDoc)?',
* [JSDOC] Where do you want to store JSdoc files (relative to default destination path)?',
* [SEMVER] Do you want to add semver versioning tasks (for automatic bump of any version in any file which supports semver versioning, like package.json)?',
* [YARN] Do you use Yarn as your default dependency manager?',

## Dependencies

Every possible package for Gulp tasks:

* @babel/core,
* @babel/preset-env,
* babel-eslint,
* browser-sync,
* del,
* eslint,
* eslint-config-airbnb-base,
* eslint-plugin-import,
* eslint-plugin-node,
* gulp,
* gulp-autoprefixer,
* gulp-babel,
* gulp-bump,
* gulp-clean-css,
* gulp-cssimport,
* gulp-eslint,
* gulp-exit,
* gulp-htmllint,
* gulp-htmlmin,
* gulp-if,
* gulp-imagemin,
* gulp-include,
* gulp-inline-source,
* gulp-jsdoc3,
* gulp-penthouse,
* gulp-pug,
* gulp-real-favicon,
* gulp-rename,
* gulp-sass,
* gulp-sourcemaps,
* gulp-stylelint,
* gulp-uglify,
* gulp-wait,
* imagemin-mozjpeg,
* imagemin-pngquant,
* kss,
* path,
* sassdoc,
* stylelint,
* stylelint-config-sass-guidelines,
* stylelint-order, and
* stylelint-scss.

## Support

Show your support by starring the project on [GitHub](https://github.com/maliMirkec/starter-project-cli), or by [sharing on Twitter](https://twitter.com/intent/tweet?url=https://github.com/maliMirkec/starter-project-cli/&text=Starter%20Project%20CLI%20creates%20a%20perfect%20Gulp%20development%20environment%20for%20everyone%20within%20a%20few%20minutes.%20🔥%20Try%20it%20today!%20💯&via=malimirkeccita).
