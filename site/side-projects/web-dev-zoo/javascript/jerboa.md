---
layout: default
title: "Don't save sensitive data in localStorage"
date: 2025-02-25 08:00:00
tags:
  - zoo
  - javascript
description: "JavaScript Jerboa says: Don't forget the lang attribute to define the default language."
type: articles-item
---

{% cldnryfetch "jj_ppkxcp" "Poorly drawn jerboa with a text in a speech bubble: “Don't save sensitive data in localStorage because it never expires.”" false true "picolo plain" %}

JavaScript Jerboa says: Don't save sensitive data in `localStorage` because it never expires.

{% note "Side effects" %}
- Data in `localStorage` remains there until you manually delete it, making it a long-term target for attackers.
- Any script running on the page (including malicious ones from XSS attacks) can read `localStorage` data.
- Unlike cookies, `localStorage` data isn’t sent with requests, and it lacks security features like the HttpOnly and Secure flags.
- Browsers store `localStorage` data in plain text, which makes it easy to steal if a device is hacked.
- Consider `sessionStorage` or secure HTTP-only cookies for sensitive data like authentication tokens.
{% endnote %}

Here are some tips for using `localStorage`.

{% note "Tips" %}
- Store only non-sensitive information that isn’t critical to user security, such as preferences, theme settings, or simple user preferences.
- Keep in mind that `localStorage` has a limit of about **5MB**, so don't try to save too much data.
- If you must store sensitive data, make sure to encrypt it before saving.
- Always clear sensitive data from `localStorage` when the user logs out to minimize the risk of data leakage.
- Consider providing fallbacks for browsers that do not support `localStorage` or for users who have turned it off.
{% endnote %}
