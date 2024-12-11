---
layout: index
title: The CSS from-font value explained in 4 demos
date: 2022-02-07 11:00:00
tags:
  - blog
  - publications
  - css
description: I found the CSS from-font value for the text-decoration-thickness property. I did a little research what I found (and learned) is interesting.
publication: CSS Tricks
canonical: https://css-tricks.com/from-font-value-text-decoration-thickness/
type: articles-item
sections2:
  - type: banner-beta
    banner: newsletter
---

I was doing my [Advent of UI components](/side-projects/advent/), and I stumbled upon the [`from-font`](https://css-tricks.com/almanac/properties/t/text-decoration-thickness/#aa-values) value for the `text-decoration-thickness` CSS property. I was curious about it, so I did a little research and I think what I found (and learned) is both interesting and worth sharing.

## About the `from-font` value

Here's how [MDN defines the `from-font` value](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-thickness):

> If the font file includes information about a preferred thickness, use that value. If the font file doesn't include this information, behave as if `auto` was set, with the browser choosing an appropriate thickness.

So, the `from-font` value is used only if the font file has the definition for the thickness of the line. Otherwise, browsers use the `auto` value, which tells the browser to choose the thickness. I wanted to find out how that works, so I made a few demos comparing it to the other values.

## Demo 1: `text-decoration-thickness: auto`

In the first demo, I wanted to see how the `auto` value for thickness works with under, over, and strikethrough lines for the default font family.

{% codepen "CiTA" "vYedbMe" "dark" "result" "550" false true %}

I didn't find anything particularly interesting here, except that some combinations don't work very well for strikethrough text (if you ask me). For example, using a wavy decoration with strikethrough isn't readable, but that might be the desired output in some scenarios, I guess.

## Demo 2: `text-decoration-thickness: 0px`

In the second demo, I wanted to see how the text works with thin lines.

{% codepen "CiTA" "zYERXqR" "dark" "result" "550" false true %}

The lines work with paragraphs or smaller text, but the thin strikethrough line doesn't work very well with large text as the strikethrough line is hard to detect.

{% cldnry "text_decoration_line-through_dotted_ku3yy3" "Showing the from-font value on larger text. The text is black and the line through the text is thin and barely noticeable." 759 86 %}

I also learned that you cannot set the line thickness below `1px`. In the demo, the line thickness is set to `0px`, but the browser renders a `1px` line anyway.

## Demo 3: `text-decoration-thickness: from-font and font-weight`

Next, I wanted to see if the `text-decoration-thickness: from-font` declaration changes with the font weight. On the left, the value is set to `from-font`; on the right, the value is set to `auto.`

{% codepen "CiTA" "abLqXjv" "dark" "result" "550" false true %}

The `from-font` value doesn't seem to follow changes to the text's font weight, at least not with when Roboto is the font family. There is no difference between how big or bold the text is set. The line thickness is the same if the value is set to `from-font`.

It is worth noting that Firefox renders the line thickness the same for both values, so my guess is that Firefox actually uses the `from-font` value for the `auto` value.

## Demo 4: `text-decoration-thickness: from-font` and `font-family`

{% codepen "CiTA" "rNGJPga" "dark" "result" "550" false true %}

In this final demo, I wanted to see how the `from-font` value works with different font families. It doesn't impact the paragraphs or the smaller font sizes because it renders the smallest value, `1px`. The difference is visible for the bigger font sizes, like default `<h1>` elements, but only if you look very closely. Also, the strikethrough line is once again too thin on bigger text. This is something that font designers and developers might consider when designing and defining fonts.

## Browser support

You can most certainly use the `text-decoration-thickness` property today since most modern browsers support this property.

## So, should you use it?

Although the `from-font` value might *seem* like a good idea, I don't think it should be used just yet. There are too many inconsistencies with the default `text-decoration-thickness` value across the browsers (which [Šime Vidas has covered](https://css-tricks.com/css-underlines-are-too-thin-and-too-low-in-chrome) in great depth), so it is no surprise that the `from-font` value is still not working that well. Maybe the `from-font` value should be defined in percentages or some other relative unit so that it changes with the font size. Maybe font designers feel that it shouldn't work that way. Either way, it seems like more discussion is warranted to nail down the property value's default behavior and how it renders.

I am using the `from-font` value on my personal site for the link underlines [in the articles](/articles/), and I think it works great. The line is subtle, but it still communicates the interaction.

I look forward to seeing more options for the `text-decoration-thickness` in the future.
