---
layout: default
title: "Don’t forget the lang attribute"
date: 2025-02-13 08:00:00
og_img: hh1_pehhab
tags:
  - zoo
  - html
description: "HTML hellbender says: Don’t forget the lang attribute to define the default language."
type: articles-item
---

{% cldnryfetch "hh1_pehhab" "Poorly drawn hellbender with a text in a speech bubble: “HTML hellbender says: Don’t forget the lang attribute to define the default language.”" false true "center plain" %}

HTML hellbender says:

> Don’t forget the `lang` attribute to define the default language.

And here’s why:

{% note "Benefits" %}
- Screen readers use the `lang` attribute to pronounce words correctly and adjust voice settings, making content easier to understand.
- Search engines like Google use the `lang` attribute to serve the right content to the right audience.
- Browsers and translation tools rely on the `lang` attribute to identify the language and improve translations.
- Some languages have specific hyphenation and formatting rules that work better when the correct language is set.
- Standards like WCAG recommend defining the default language for better accessibility.
{% endnote %}

Here are some tips on defining the `lang` attribute.

{% note "Tips" %}
- Use simple codes like `en` for English, `de` for German, or `fr` for French to define the main language.
- Use specific codes like `en-GB` for British English or `en-US` for American English to define regional differences.
- If part of your content is in another language, wrap it in a tag with a different lang attribute:
- `<p lang="fr">Ce texte est en français.</p>`
{% endnote %}
