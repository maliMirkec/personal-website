---
title: Classily.js - Toggling classes more classily
categories:
  - Blog
tags:
  - javascript
  - plugin
thumbnail: //res.cloudinary.com/starbist/image/upload/v1508398026/From_WordPress_to_Hexo_xgibru.png
comments: true
date: 2017-11-23 22:28:28
---

I created brand new `JavaScript` plugin for toggling classes more classily, and I called it **Classily.js**. The plugin is simple yet powerful, and, if used correctly, it could solve tasks that are not so simple.

<!-- more -->

## How to install Classily.js

You could install Classily.js by cloning a repository from GitHub:

```bash
git clone https://github.com/maliMirkec/Classily.js.git
```

or by installing using npm:

```bash
npm install classily.js
```

or using yarn:

```bash
yarn add classily.js
```

or using Bower:

```bash
bower install classily.js
```

## How to initialize Classily.js

To initialize Classily.js, add script tag to your `HTML` document:

```html
<script src="/path/to/Classily.min.js"></script>
```

and then add the following code:

```html
<script>
  new Classily({
    selector: ".js-classily"
  });
</script>
```

where `selector: ".js-classily"` is a trigger selector - an element which will trigger class toggle action - usually an anchor or a button. Default selector is `.js-classily`.

Once you installed and initialized the plugin, you are ready to use the plugin and discover many new ways how the plugin could be helpful.

## How to use Classily.js

To trigger class toggle action you should add the following code:

```html
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
- `class="js-class"` is used as a selector for plugin initialization (see _How to initialize Classily.js_);
- `data-target=".my-class"` is used to target the element or elements that will toggle class;
- `data-class="blue"` is used to provide a class or classed that will be toggled;

As you see, Classily.js is not complicated to use. In fact, it looks like it cannot do much, but I want to reassure you that is not the case. Stay with me; I will guide you through examples.

## Toggling the same class on multiple elements

If you click on the "Toggle button" in the example below, you should see that both headings will change color.

{% codepen CiTA POaNEj dark result 350 %}

We do that by adding the same class `.my-class` on both headings. There is another one how we could achieve the same effect - we could provide multiple comma-separated list of selectors.

## Toggling multiple classes on multiple elements

In the example below, we are toggling two different classes on two separate elements.

{% codepen CiTA VrdaGK dark result 430 %}

The number of comma-separated selectors must match the number of comma-separated classes. Notice that second element is toggling two different classes - we could provide more that one class by using space as separator.

```html
<button type="button"
  class="js-classily"
  data-target=".my-first-target, .my-second-target"
  data-class="blue, hidden blue">
  Toggle classes
</button>
```

Pretty awesome, right. Are you ready for more advanced examples?

## Using Classily.js for toggling states

In the following example, the heading could be in three states:
- default state,
- "blue" state,
- "red" state and
- "gold" state.

Once we activate "blue", "red" or "gold" state, the heading could never go back to default state.

{% codepen CiTA pdKbzY dark result 250 %}

To create the same effect, think how many lines of code you should write. And now let's look how we achieve this effect using Classily.js:

```
<button type="button"
  class="js-classily"
  data-target=".my-class.red, .my-class.gold, .my-class:not(.blue)"
  data-class="red, gold, blue">
  Toggle Blue
</button>
```

First, we are targeting `.my-class` element with `.red` class. If there is no such element, Classily.js will skip this step. If the element exists, then we remove `.red` class. Repeat the same for the `.gold` class. Then, we are targeting `.my-class` element that doesn't contain `.blue` class. If the element exists, then add `.blue` class. The heading is now in "blue" state. The same is for "red" and "gold" state.

The method above could be applied to create tab section, feature seen on many websites, for example. When the user clicks on a tab, different content appears.

## Special features

Often there is a need to switch the state of the element itself. To avoid usage of complicated selectors, we could use the keyword `this`.

```
data-selector="this"
```

{% codepen CiTA JOZKEb dark result 180 %}

In this example, we used anchor tag as a button. There is another feature that is useful - we could prevent default behavior, like opening a link. To do that, we should use `data-prevent="default"` on our trigger element.

For more examples, check this [Codepen collection](https://codepen.io/collection/nJZLYz/).

# Conclusion

Classily.js is helping me with my everyday job. I no longer have to jump from template file to script file to execute simple tasks like class toggling.

Share it, like it, star it, tweet it!

# Links

Github: https://github.com/maliMirkec/Classily.js
Npm: https://www.npmjs.com/package/classily.js
Codepen: https://codepen.io/collection/nJZLYz/
