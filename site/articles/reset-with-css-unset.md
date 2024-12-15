---
layout: default
title: Reset with CSS unset
date: 2024-02-25 12:00:00
tags:
  - blog
  - css
  - unset
description: Utilizing the CSS unset keyword with inheritance in mind.
type: articles-item
series: Unset
---

Over the past couple of years, I have frequently utilized the `unset` keyword to reset the CSS properties. I noticed I'm using it intuitively to reset a property. But what is intuitive for me might not be intuitive for you. Let me clarify.

### Unsetting

For example, I've used `border: none` for ages to remove the border from elements. These days, I'm using `border: unset`, and the borders are gone.

{% codepen "CiTA" "XWGLYjN" "dark" "result" 300 false true %}

Borders are easy because they are non-inherited properties meaning the child element doesn't inherit the value from its parent elements.

The same goes for margins and paddings, which I regularly need to reset.

But what about inherited properties? In the example below, the last button will have a blue color. It is because the `unset` property essentially means `inherit` for the inherited property `color`, which the button did and set the `color` to `blue`.

{% codepen "CiTA" "BabgVQE" "dark" "result" 300 false true %}

### Inheritance vs. cascade

These things make sense to me, an experienced CSS developer who knows about inheritance. But for a beginner, these concepts are not trivial. I would dare say most beginners didn't even hear about inherited and non-inherited properties or might forget about them. They might learn about the cascade, which is not the same.

The final styling is based on cascade, specificity, inheritance, and more. MDN has a pretty solid article about understanding [cascade, specificity, and inheritance](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance).

> Also significant here is the concept of inheritance, which means that some CSS properties by default inherit values set on the current element's parent element and some don't. This can also cause some behavior that you might not expect.
>
> — [MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)

The last sentence seems scary, not knowing what to expect with inheritance. It might help if you remember which property will inherit value from its parents, but that comes with time. Finding that information could be tedious - going to the docs or searching for it in your notes. The important thing is knowing the inheritance exists and that it might cause issues, especially when using the `unset` keyword.

### Unset these properties safely

I figured it might be useful to list the properties I often `unset` that are uninherited and, therefore, safe to `unset`:

- `background` (and all its properties like `background-color`, `background-image`, etc.)
- `border` (and all its properties like `border-width`, `border-style`, etc.)
- `border-radius` (and all its properties like `border-top-left-radius`, `border-start-start-radius`, etc.)
- `margin` (and all its properties like `margin-top`, `margin-block-start`, etc.)
- `padding` (and all its properties like `padding-top`, `padding-block-start`, etc.)
- `min-height`
- `min-block-size`
- `min-width`
- `min-inline-size`
- `max-height`
- `max-block-size`
- `max-width`
- `max-inline-size`
- `position`
- `top`
- `bottom`
- `left`
- `right`
- `inset` (and all its properties like `inset-block`, `inset-inline`, etc.)
- `grid` (and all its properties like `grid-template-columns`, `grid-column`, `align-items`, `row-gap`, etc.)
- `flex` (and all its properties like `flex-basis`, `flex-direction`, `align-items`, `row-gap`, etc.)

### Conclusion

When it comes to resetting a CSS property, the `unset` keyword can come in handy. However, it's important to consider the inheritance of the property you're working with.

If you want to ensure maximum safety, unsetting the properties that are not inherited may be your best option. By doing this, you can eliminate any potential risks and have peace of mind knowing that your stylesheets are secure.
