---
layout: index
title: Classily.js - Toggling classes more classily
tags:
  - blog
  - javascript
  - plugin
thumbnail: Classily.js_-_Toggling_classes_more_classily_qarsp1
date: 2017-11-28 10:28:28
description: I created a JavaScript plugin for toggling classes more classily, and I called it Classily.js. The plugin is simple yet powerful, and, if used correctly, it could solve tasks that are not so simple.
type: articles-item
sections2:
  - type: banner-alpha
    title: I am considering new projects for the 2022.
    desc: I specialized in **HTML**, **CSS**, **JavaScript**, **WordPress**, **Shopify**, and **JAMstack** technologies.
    cta:
      href: /contact/
      title: Hire me ⇢
---

I created a `JavaScript` plugin for toggling classes more __classily__, and I called it **[Classily.js](https://github.com/maliMirkec/Classily.js)**. The plugin is simple yet powerful, and, if used correctly, it could solve tasks that are not so simple.

<!-- more -->

## What is Classily.js?

Classily.js is a `Javascript` plugin built to solve a single problem—toggle a `CSS` class on an `HTML` element. The current version of Classily.js has more features, including toggling multiple classes and targeting multiple elements.

Before we see the plugin in action, let's see how to install it.

## How to install Classily.js?

You could install Classily.js by cloning a repository from GitHub:

``` bash
git clone https://github.com/maliMirkec/Classily.js.git
```

or by installing using npm:

``` bash
npm install classily.js
```

or using yarn:

``` bash
yarn add classily.js
```

or using Bower:

``` bash
bower install classily.js
```

## How to initialize Classily.js?

To initialize Classily.js, add `script` tag to your `HTML` document with path to Classily.js.
Next, make new Classily instance and you are good to go!

``` javascript
new Classily ({
  selector: '.my-selector'
})
```

where `selector: ".my-classily-element"` is a trigger selector—an element which will trigger class toggle action—usually an anchor or a button. Default selector is `.js-classily`.

Once you installed and initialized the plugin, you are ready to use the plugin and discover many new ways how the plugin could be helpful.

## Which options does Classily.js have?

Two main options could be passed to Classily.js:

- `data-target` and
- `data-class`.

`data-target` option is used for targeting elements. We target elements by providing selectors for `querySelectorAll()` function.

`data-class` option is used to pass class names that will be toggled on targeted elements.

We can provide multiple targets and classes by separating them with comma character. Using these two options, and depending on how the options are passed, we could achieve four different scenarios:

- toggling a single class on a single selector,
- toggling a single class on multiple selectors,
- toggling multiple classes on a single selector and
- toggling multiple classes on multiple selectors.

When a number of selectors and classes are equal, then each selector could be toggled with a different set of classes. For example, if we pass two selectors separated with comma character and two classes separated with comma character, the first class will be toggled on elements targeted with the first selector, and the second class will be toggled on elements targeted with the second selector.

{% cldnry "Classily-example_a31spq" "Classily.js graphic." %}

When a number of selectors and classes are not equal, then all provided classes will be toggled on every element targeted by every selector. For example, if we pass two selectors separated with comma character and three classes separated with comma character, all three classes will be toggled on every element targeted by two selectors.

Enough theory, let's see this plugin in action.

## How to use Classily.js?

To trigger class toggle action, you should add the following code:

``` html
<button type="button"
  class="js-classily"
  data-target=".my-class"
  data-class="blue">
  Toggle
</button>
...
<div class="my-class">...</div>
```

where

- `class="js-classily"` is used as a selector for plugin initialization;
- `data-target=".my-class"` is used to target the element or elements that will toggle class;
- `data-class="blue"` is used to provide a class or classes that will be toggled.

As you see, Classily.js is not complicated to use. In fact, it looks like it cannot do much, but I want to reassure you that is not the case. Stay with me; I will guide you through examples.

## How to toggle the same class on multiple elements?

If you click on the "Toggle button" in the example below, you should see that both headings will change color.

{% codepen "CiTA" "POaNEj" "dark" "result" "350" %}

Here's the code:

``` html
<button class="js-classily"
  type="button"
  data-target=".my-class"
  data-class="blue">
  Toggle class
</button>
...
<h1 class="my-class">...</h1>
<h1 class="my-class">...</h1>
```

By adding the same class `.my-class` on target elements we are targeting both headings at the same time. That is because Classily.js uses `querySelectorAll()` function.

There is another way how we could achieve the same effect—we could provide a comma-separated list of selectors.

## How to toggle multiple classes on multiple elements?

In the example below, we are toggling two different classes on two separate elements.

{% codepen "CiTA" "VrdaGK" "dark" "result" "430" %}

The number of comma-separated selectors must match the number of comma-separated classes. Notice that second element is toggling two different classes, `hidden` and `blue`—we could provide more that one class by using space as separator.

``` html
<button type="button"
  class="js-classily"
  data-target=".my-first-target, .my-second-target"
  data-class="blue, hidden blue">
  Toggle classes
</button>
...
<h1 class="my-first-target">...</h1>
<h1 class="my-second-target">...</h1>
```

Pretty awesome, right. Are you ready for more advanced examples?

## How to use Classily.js for toggling states?

In the following example, the heading could be in three states:

- default state,
- "blue" state,
- "red" state and
- "gold" state.

Once we activate "blue", "red" or "gold" state, the heading could never go back to default state.

{% codepen "CiTA" "pdKbzY" "dark" "result" "250" %}

To create the same effect, think how many lines of `JavaScript` code you should write. And now let's look how we could achieve this effect using Classily.js:

``` html
<button type="button"
  class="js-classily"
  data-target=".my-class.red, .my-class.gold, .my-class:not(.blue)"
  data-class="red, gold, blue">
  Toggle Blue
</button>
...
<h1 class="my-class">...</h1>
```

First, we are targeting `.my-class` element with `.red` class. If there is no such element, Classily.js will skip this step. If the element exists, then we remove `.red` class. Repeat the same for the `.gold` class. Then, we are targeting `.my-class` element that doesn't contain `.blue` class. If the element exists, then add `.blue` class. The heading is now in "blue" state. The same is for "red" and "gold" states.

The method above could be applied to create tab section, feature seen on many websites, for example. When the user clicks on a tab, different content appears.

## Does Classily.js have special features?

Often there is a need to switch the state of the element itself, like the button in this example.

{% codepen "CiTA" "JOZKEb" "dark" "result" "180" %}

To avoid usage of complicated selectors, we could use the keyword `this`.

``` html
<a href="https://github.com/maliMirkec/Classily.js"
  class="button-switch js-classily"
  data-target="this"
  data-class="button-switch--off"
  data-prevent="default">
  ...
</a>
```

In this example, we used anchor tag as a button. There is another feature that is useful—we could prevent default behavior, like opening a link. To do that, we should use `data-prevent="default"` option.

For more Classily.js examples, check this [Codepen collection](https://codepen.io/collection/nJZLYz/).

## Conclusion

Classily.js is helping me with my everyday job. I no longer have to jump from template file to script file to execute simple tasks like class toggling. And I'm able to achieve some pretty nifty tricks with it.

[Share it](https://facebook.com/sharer.php?u=https://www.silvestar.codes/articles/classily-js-toggling-classes-more-classily/), [like it](https://www.npmjs.com/package/classily.js), [star it](https://github.com/maliMirkec/Classily.js), [tweet it](https://twitter.com/intent/tweet?url=https://www.silvestar.codes/articles/classily-js-toggling-classes-more-classily/&text=Classily.js%20-%20Toggling%20classes%20more%20classily&via=malimirkeccita)!

Also, don't hesitate [to report an issue](https://github.com/maliMirkec/Classily.js/issues/new), if you find any. And if you know how to make tests for this plugin, let me know how.

## Links

* Github: https://github.com/maliMirkec/Classily.js
* Npm: https://www.npmjs.com/package/classily.js
* Codepen: https://codepen.io/collection/nJZLYz/
