---
layout: index
title: CSS sidebar toggle
tags:
  - blog
  - css
  - sidebar
  - accessibility
date: 2017-02-20 11:43:48
thumbnail: CSS_sidebar_toggle_qzorac
descriptionAlt: CSS sidebar toggle presented in this post is made with CSS only. These days accessibility is pretty important stuff and, because changing the state of the elements cannot be done without JavaScript, I've added a small snippet for this feature.
description: Making web components shouldn't be a hard task. Learn how to make CSS-only sidebar toggle accessibible by adding a small JavaScript code snippet.
type: articles-item
sections2:
  - type: banner-beta
    banner: newsletter
---

CSS sidebar toggle presented in this post is made with `CSS` only. These days accessibility is pretty important stuff and, because changing the state of the elements cannot be done without `JavaScript`, I've added a small snippet for this feature.

<!-- more -->

## Preparation

As I was preparing this post, I've created [a CSS sidebar toggle demo on Codepen](http://codepen.io/CiTA/pen/bgjKKE). Suddenly the pen received a large number of visitors. The pen was listed in _"Picked Pens"_ section on [Codepen home page](http://codepen.io/) as I discovered later. Apparently, it was a great inspiration for the community, ending up with many hearts and many forks. At this point, I knew that I was doing something good. But what I did not expect was a post about this technique.

Jorge C.S. Cardoso published [a post](https://codepen.io/jorgecardoso/post/css-transitions-and-animations) based on this demo. It was listed in the Codepen newsletter. Well done, Mr. Cardoso, and thank you for saving me some time to write this post.

In this post, I'll try to explain CSS sidebar toggle technique in general and focus on accessibility.

## Concept

In order to trigger the sidebar overlay, we'll need the following components:

* a `label`,
* a `checkbox` and
* a `sidebar`.

We'll use checkbox's `:checked` pseudo class to determine whether to show or to hide the sidebar.

## Menu icon

For a menu toggle indicator, we could use well know hamburger menu. There are [many](https://webdesign.tutsplus.com/tutorials/7-non-raster-approaches-for-making-the-hamburger-menu-icon--cms-21686) [simple](https://css-tricks.com/three-line-menu-navicon/) and [awesome](https://jonsuh.com/hamburgers/) ways how we could do it. I've decided to use pure `CSS` solution, well, because this is a pure CSS sidebar toggle solution.

### First Demo

{% codepen "CiTA" "YNbKpo" "dark" "result" "300" false true %}

### HTML for the first demo

``` html
<input type="checkbox" id="menuToggler" class="input-toggler"/>
<label for="menuToggler" class="menu-toggler">
  <span class="menu-toggler__line"></span>
  <span class="menu-toggler__line"></span>
  <span class="menu-toggler__line"></span>
</label>
```

Inside the label, we should place `span` elements—each one will represent one hamburger line.

Make sure to add `**id**` attribute on a `checkbox` input and matching **`for`** attribute on a `label` element.

### CSS for the first demo

``` scss
// variables
:root {
  --toggler-size: 30px;
  --toggler-line-number: 3;
  --toggler-line-size: calc(var(--toggler-size) / (var(--toggler-line-number) + var(--toggler-line-number) - 1));
  --toggler-offset-left: 10px;
  --toggler-offset-top: 10px;
  --toggler-color: Tomato;
}

// same as var(--toggler-line-number)
$total: 3;
```

For this demo, I've decided to use a new [`CSS` variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables) feature. Beware of the support:

{% caniuse "css-variables" "current" %}

Using `CSS` variables we could define menu icon size, the number of lines, top offset, left offset and background color.

{% note %}
_I didn't find an efficient way how to convert a `CSS` variable into a `SASS` variable. If you know how to do this, please let me know._
{% endnote %}

The number of lines could vary. If we want 3 hamburger lines, we should add 3 span elements: `<span class="menu-toggler__line"></span>`. We should also set `CSS` variables `--toggler-line-number` and `$total` to `3`.

I've tested this code with 3 and 4 hamburger lines and the code is working pretty good.

For deeper understanding how this hamburger menu is working, check the source code. If you don't get it, leave a comment below or ask a question on [Twitter](https://twitter.com/malimirkeccita).

The logic is straightforward:

* if not checked, display hamburger icon;
* if checked, display close icon.

We are using transitions and transforms to animate the icon.

## Sidebar

There are many ways how a sidebar could be displayed. I've decided to go with a full-width sidebar containing just a menu list.

### Second Demo

{% codepen "CiTA" "bgjKKE" "dark" "result" "500" false true %}

### HTML for the second demo

In order to create CSS sidebar toggle, we should use the following `HTML` structure:

``` html
<input type="checkbox" id="menuToggler" class="input-toggler"/>
<label for="menuToggler" class="menu-toggler">
  ...
</label>
<nav class="sidebar">
  ...
</nav>
<main class="content">
  ...
</main>
```

Notice that `checkbox` input, `label`, `sidebar` and content are all siblings.

### CSS for the second demo

``` scss
:root {
  --sidebar-width: 100%;
}

.sidebar {
  width: var(--sidebar-width);
  transform: translateX(calc(var(--sidebar-width) * -1));
  ...
}

.input-toggler {
  ...

  &amp;:checked ~ .sidebar {
  transform: translateX(0);
  opacity: .98;
  }
}
```

The idea is to hide a sidebar by translating it out of viewport using `translateX` property. Then, when menu icon is clicked and `:checked` stated is active, translate sidebar back to the viewport.

## CSS sidebar toggle accessibility

Last time I've published [a post about pure CSS tabs solution](/articles/how-to-make-tabs-using-only-css/), I've received a lot of comments about missing accessibility. As a result, I've updated a demo with accessibility and published a [new article](/articles/css-tabs-part-ii-accessibility/). This time I've decided to implement accessibility right away.

The first step is adding [wai-aria attributes](https://www.w3.org/TR/wai-aria/). We want our label to act as a button. We should add `role="button"` attribute. [Button role](https://www.w3.org/TR/wai-aria#button) supports 2 states, pressed and expanded. Let's add those too: `aria-pressed="false"` and `aria-expanded="false"`. Finally, we should add `aria-label="Navigation button"` because there is no text element inside the label.

Next, we should add wai-aria attributes on [navigation](https://www.w3.org/TR/wai-aria#navigation). On `nav` element we should add these attributes: `role="navigation"`, `aria-labelledby="menuTogglerLabel"` and `aria-hidden="true"`. The role is navigation, an element is labeled by navigation button and it is hidden by default.

The final element is a [menubar](https://www.w3.org/TR/wai-aria#menubar) with 2 wai-aria attributes: `role="menubar"` and `aria-orientation="vertical"`. First attribute defines the role this element has and the second attribute describes how the element is oriented—in our case vertically. Every menubar should have [menu items](https://www.w3.org/TR/wai-aria#menuitem). They are usually links and we define them as follows: `role="menuitem"`. Because the navigation is hidden by default, we're adding `tabindex="-1"` to skip tabbing through invisible elements.

Finally, we should add `JavaScript` snippet to change states of this elements:

``` js
let menuToggler = document.getElementById('menuToggler')
let menuTogglerLabel = document.getElementById('menuTogglerLabel');
let sidebar = document.getElementById('sidebar');
let menuItems = document.getElementsByClassName('menu__link');

menuToggler.addEventListener('change', function() {
  if(menuToggler.checked) {
    menuTogglerLabel.setAttribute('aria-pressed', 'true');
    sidebar.setAttribute('aria-hidden', 'false');
  } else {
    menuTogglerLabel.setAttribute('aria-pressed', 'false');
    sidebar.setAttribute('aria-hidden', 'true');
  }

  for(let menuItem of menuItems) {
    if(menuToggler.checked) {
      menuItem.setAttribute('tabindex', '0');
    } else {
      menuItem.setAttribute('tabindex', '-1');
    }
  }
});
```

When a menu button is pressed, we should change its `aria-pressed` attribute and navigation's `aria-hidden` attribute accordingly. We should change `tabindex` of every menu item:

* if a menu is visible, menu items should be tabbable;
* if a menu is not visible, menu items should not be tabbable.

### Keyboard interaction

Our job is not done yet, we should implement keyboard interaction. I'll leave this part to you as this feature is out of the scope of this article. For more details see [official W3C documentation for menu and menubar](https://www.w3.org/TR/wai-aria-practices/#menu) and [navigation menubar example](https://www.w3.org/TR/wai-aria-practices/examples/menubar/menubar-1/menubar-1.html).

## Conclusion

There are many ways how we could build UI components and there are no right way to do so. Some will disagree that the pure `CSS` solutions are usable in production environment, but that depends on project type and many other factors. I love to experiment with `CSS` because it gives me a new opportunity to learn and use the latest techniques out there. I don't know if you noticed, but beside `CSS` variables, I've used [CSS locks](https://css-tricks.com/css-locks/) and [system fonts](https://css-tricks.com/snippets/css/system-font-stack/) techniques in this demo. Pretty awesome, right?

And there is accessibility, which is always hard. But hard doesn't mean we should avoid learning it and using it. I encourage every developer to read [this document](https://www.w3.org/TR/wai-aria-practices/) and then try to implement any part of accessibility in their newest project. Let's make Internet a better place.

I'm always opened for discussion so leave a comment or ping me on [Twitter](https://twitter.com/malimirkeccita).
