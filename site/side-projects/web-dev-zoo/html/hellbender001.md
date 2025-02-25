---
layout: default
title: "Don’t forget the lang attribute"
date: 2025-02-13 08:00:00
tags:
  - zoo
description: "HTML hellbender says: Don’t forget the lang attribute to define the default language."
type: articles-item
---

{% cldnryfetch "hh1_t5etcj" "Poorly drawn hellbender with a text in a speech bubble: “HTML hellbender says: Don’t forget the lang attribute to define the default language.”" false true "picolo plain" %}

HTML hellbender says: Don’t forget the `lang` attribute to define the default language.

{% note "Benefits" %}
- Screen readers use the `lang` attribute to apply the correct pronunciation and voice settings, making content easier to understand.
- Search engines like Google use the `lang` attribute to serve the right content to the right audience.
- Browsers and translation tools use the `lang` attribute to detect the language and provide better translations.
- Some languages have special hyphenation or text formatting rules that work better when the correct language is set.
- Standards like WCAG recommend defining the default language for better accessibility.
{% endnote %}

Here are some tips on defining the `lang` attribute.

{% note "Tips" %}
- Use [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) codes (`en`, `de`, `fr`) to define the general language..
- Use IETF BCP 47 language tags (`en-GB`, `en-US`) for regional variations.
- If part of your content is in another language, wrap it in a tag with a different lang attribute:
- `<p lang="fr">Bonjour, comment ça va ?</p>`
{% endnote %}
