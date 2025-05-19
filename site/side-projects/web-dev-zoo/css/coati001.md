---
title: "Use display: contents with great caution"
date: 2025-02-18 08:00:00
description: "CSS coati says: Use display: contents with great caution."
tags:
  - zoo
  - css
og_img: cc1_ygc7wj
type: articles-item
layout: default
---
{% cldnryfetch "cc1_ygc7wj" "Poorly drawn coati with a text in a speech bubble: “Use display: contents with great caution.”" false true "center plain" %}

CSS coati says:

> Use `display: contents` with great caution.

And here’s why:

{% note "Side effects" %}
- It removes elements from the accessibility tree, making them invisible to screen readers and harming usability.
- Some interactive elements (like buttons or links) may stop working as expected because their structure is altered.
- Child elements lose inheritance from their parent (like flex, grid, or positioning), which can lead to layout issues.
- Some scripts or CSS selectors relying on parent-child relationships might break because the parent element is removed visually.
- Applying different CSS methods, like flex or grid, can often handle cases better than `display: contents`.
{% endnote %}
