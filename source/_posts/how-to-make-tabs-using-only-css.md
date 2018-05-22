---
title: How to make tabs using only CSS
tags:
  - css
  - tabs
id: 6
categories:
  - Blog
date: 2016-10-07 19:01:40
comments: true
thumbnail: //res.cloudinary.com/starbist/image/upload/v1497509312/How-to-make-tabs-using-only-CSS_exk7am.png
description: I know there are more than a few articles about this topic. And there are 2 basic approaches - using target pseudo selector and using list with checked pseudo selector.
---

I know there are more than a few articles about this topic. And there are 2 basic approaches: [using `:target` pseudo selector](https://css-tricks.com/css3-tabs/) and [using list with `:checked` pseudo selector](https://css-tricks.com/functional-css-tabs-revisited/).

I prefer the second approach, but without list or nested div structure.

_CSS tabs could be accessible, [read about it here](/articles/css-tabs-part-ii-accessibility/)._

<!-- more -->

## HTML structure

Let's start with `HTML`.  This is the full structure:

{% codepen CiTA YGZyOm dark html %}

Let's break it down by elements:

*   wrapper - this element is used to distinguish tabs from the rest of the content;
*   `input type="radio"` - this element will be hidden, but will be used as a controlling element;
*   `label` - this element will be used as a clickable tab;
*   content - this element is used as a wrapper for tab's content.

This structure may look a bit dirty, but soon you'll see the benefit of it. The basic principle is to group different types of elements.

Next we'll add the following classes on every element:

*   `tabs` on wrapper `div`,
*   `tabs__radio` on `input type="radio"` elements,
*   `tabs__label` on `label` elements and
*   `tabs__content` on content `div` elements.

[BEM naming convention](https://en.bem.info/methodology/) is used for this purpose.

To make sure every `input type="radio"` element is a part of the same block, we'll add `name` attribute with same value on it like this:

{% codeblock lang:html %}
`<input class="tabs__radio" name="myTabs" />`
{% endcodeblock %}

Labels are generally used to define an `input` element. If `for` attribute is provided with matching `id` of an `input`, they will be bound together. If you click on a `label` that is related to `input type="radio"`, `checked` state of an element will be toggled. This will be used as a trigger for changing tabs.

With that clarified, we'll add unique `id` attributes on every `input type="radio"` and matching `for` attributes to every `label` like this:

{% codeblock lang:html %}
<input class="tabs__radio" id="myTab1" name="myTabs" />
<label class="tabs__label for="myTab1">
{% endcodeblock %}

Finally, we'll add `value` attribute for every `input type="radio"` element and `checked` attribute on an element which should be active.

## CSS code

To create styling for tabs, **[SCSS](http://sass-lang.com/documentation/file.SCSS_FOR_SASS_USERS.html)** and **[cita-flex](https://github.com/maliMirkec/cita-flex)** will be used. This is the final code:

{% codepen CiTA ALVWzg dark html %}

First we will import **cita-flex** mixins in our file. It is a small library which could help you create layouts using flexbox built by me. **cita-flex** is available through bower and you could install it using command `bower install cita-flex`.

After that we should define default variables which will help us write more consistent code. There are 6 variables:

*   `$size` - default size for padding,
*   `$background` - default background color for tabs,
*   `$background--active` - default background color for active tab,
*   `$color` - text color for tabs,
*   `$color--disabled` - text color for disabled tabs and
*   `$breakpoint` - width which will define our tabs layout.

_I really like BEM naming convention and I use it for defining `CSS` variables, too._

Wrapper element should be displayed as a wrapped flex.

`input type="radio"` elements should be hidden. Here we hide them using `position: absolute` technique and push the elements outside of the viewport.

Tabs, or `label` elements in this case, are flex items. They are aligned in a row and have fluid width controlled by `flex-basis`.

Tab's content is an element which takes 100% of the wrapper's width. This is achieved by setting `flex-basis` to 100%. By default, content is hidden unless matching `input type="radio"` is checked.

Now for the fun part, using `CSS` to control the tabs. We will take advantage of 3 powerful `CSS` selectors:

*   `nth-of-type` - selects the nth child of the same elements,
*   `:checked` - check if `input` is checked and
*   `~` - selects siblings selector.

If the first child of a `input type="radio"` is checked, the first tab should be active and the content of the first tab should be displayed.

Easy, we'll use `.input__radio:nth-of-type(1)` to select the first `input type="radio"`. Then we'll check if `input` is checked:  `.input__radio:nth-of-type(1):checked` and find the first tab using siblings selector: `.input__radio:nth-of-type(1):checked ~ .tabs__label:nth-of-type(1)`. Finally, we'll find the content of the first tab: `.input__radio:nth-of-type(1):checked ~ .tabs__content:nth-of-type(1)`.

Now that we know how to do this for first tab, we could use `@for` loop and repeat this for every tab. And that's it!

### Bonus: disabled state

I've had situations where tabs should be disabled. It is legit situation and for this purpose I've added disabled state of tab.

We'll use `:disabled` pseudo selector and `hide-if-disabled` class for elements that should be hidden.

The principle is the the same: we'll find disabled `input` element and matching tab and content: `.tab__radio:nth-of-type(1):disabled ~ .hide-if-disabled:nth-of-type(1)`.

Now we could repeat this for every tab using `@for` loop and we're finished.

Below you could see the full solution with disabled tabs 2 and 10.

{% codepen CiTA ALVWzg dark result %}

## Final thought

Full demo is available on [Github](https://github.com/maliMirkec/csstabs) and via bower: `bower install csstabs`.

Do you find this solution usable, because I really like how we could do even more complex things with `CSS` only nowdays?

Make sure you follow me on [Twitter](https://twitter.com/malimirkeccita) and [Medium](https://medium.com/@malimirkeccita), more posts are coming soon.
