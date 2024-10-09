---
layout: index
title: Code Line Daily extension is live again
date: 2024-10-12 13:00:00
tags:
  - blog
  - cld
  - chrome extension
  - open source
description: Here's how ChatGPT helped me re-release my old Chrome extension, Code Line Daily.
type: articles-item
sections2:
  - type: banner-beta
    banner: newsletter
    animate: true
---

Last week, ChatGPT helped me publish [my first VS Code extension](/articles/clamp-it/), so I thought it could assist me with updating [my old Code Line Daily Chrome extension](/articles/the-first-year-of-my-side-project-code-line-daily/).

I struggled to update my extension due to the new rules in Manifest V3. My old extension did not comply with these rules, and I didn't have the time or energy to understand what to do. So, I asked ChatGPT to help me with updating my manifest. Previously, my `manifest.json` had this config section:

```json
"browser_action": {
  "default_icon": "cld.png",
  "default_title": "A Line of code of the day."
}
```

The old config section has been replaced with the following sections:

```json
"background": {
  "service_worker": "service-worker.js"
},
"content_scripts": [
  {
    "matches": ["https://cld.silvestar.codes/*"],
    "js": ["content-script.js"]
  }
],
```

I also requested ChatGPT to modify my JavaScript file to incorporate service workers, and it did it within seconds.

Here's how the whole  `manifest.json` file looks now:

```json
{
  "name": "Code Line Daily",
  "version": "1.3",
  "description": "Explore a new line of code every day.",
  "manifest_version": 3,
  "background": {
    "service_worker": "service-worker.js"
  },
  "permissions": [
    "activeTab"
  ],
  "host_permissions": [
    "https://cld.silvestar.codes/*"
  ],
  "chrome_url_overrides": {
    "newtab": "cld.html"
  },
  "content_scripts": [
    {
      "matches": ["https://cld.silvestar.codes/*"],
      "js": ["content-script.js"]
    }
  ],
  "icons": {
    "16": "cld16.png",
    "32": "cld32.png",
    "48": "cld48.png",
    "128": "cld128.png"
  }
}
```

You can go ahead and install the [Code Line Daily Chrome extension](https://chromewebstore.google.com/detail/code-line-daily/jfgojeolhopchbgfdgodicnaimmkbpbg) to display an awesome new line of code every time you open a new tab.