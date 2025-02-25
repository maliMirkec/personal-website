---
layout: default
title: "Don't save sensitive data in localStorage"
date: 2025-02-25 08:00:00
tags:
  - zoo
description: "JavaScript Jerboa says: Don't forget the lang attribute to define the default language."
type: articles-item
---

{% cldnryfetch "jj_ppkxcp" "Poorly drawn jerboa with a text in a speech bubble: “Don't save sensitive data in localStorage because it never expires.”" false true "picolo plain" %}

JavaScript Jerboa says: Don't save sensitive data in `localStorage` because it never expires.

{% note "Side effects" %}
- Data in `localStorage` stays there until manually cleared, making it a long-term target for attackers.
- Any script running on the page (including malicious ones from XSS attacks) can read `localStorage` data.
- Unlike cookies, `localStorage` data is not sent with requests, but it also lacks security features like HttpOnly and Secure flags.
- Browsers store `localStorage` data in plain text, making it easy to extract if a device is compromised.
- For sensitive data like authentication tokens, consider `sessionStorage` (which clears on tab close) or secure HTTP-only cookies (which are protected from JavaScript access).
{% endnote %}

Here are some tips when using the `localStorage`.

{% note "Tips" %}
- Store only non-sensitive information that isn’t critical to user security, such as preferences, theme settings, or simple user preferences.
- `localStorage` has a storage limit (usually around 5MB), so avoid storing large amounts of data.
- If you absolutely need to store sensitive data, make sure to encrypt it before saving to `localStorage`.
- Always clear sensitive data from `localStorage` when the user logs out, to minimize the risk of data leakage.
- Consider providing fallbacks for browsers that do not support `localStorage` or for users who have it disabled.
{% endnote %}
