---
layout: default
title: "Use display: contents with great caution"
date: 2025-02-18 08:00:00
tags:
  - zoo
  - css
description: "CSS Coati says: Use display: contents with great caution."
type: articles-item
---

{% cldnryfetch "cc_eytojl" "CSS Coati says: Use display: contents with great caution." false true "picolo plain" %}

CSS Coati says: Use `display: contents` with great caution.

{% note "Side effects" %}
- It removes elements from the accessibility tree, making them invisible to screen readers and harming usability.
- Some interactive elements (like buttons or links) may stop working as expected because their structure is altered.
- Child elements lose inheritance from their parent (like flex, grid, or positioning), which can lead to layout issues.
- Some scripts or CSS selectors relying on parent-child relationships might break because the parent element is removed visually.
- Applying different CSS methods, like flex or grid, can often handle cases better than `display: contents`.
{% endnote %}
