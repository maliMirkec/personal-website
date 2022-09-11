---
layout: index
title: Website analytics with Netlify Functions and Google Sheets
date: 2022-09-10 10:00:00
tags:
  - blog
  - netlify
  - serverless
thumbnail: Website_analytics_with_Netlify_Functions_and_Google_Sheets_me20qs
description: I gave up on analytics on my site a long time ago, but I was interested to see if anyone visits my site these days, so I built my own simple analytics.
type: articles-item
sections2:
  - type: banner-beta
    banner: newsletter
---

I gave up on analytics on my site a long time ago. I was using Google Analytics and Matomo (previously Piwik), but all it did to me was drive me crazy for two reasons:

- I couldn't get the highest scores on page speed testing tools, and
- I was obsessed with a number of pageviews and sessions.

Now that this is well behind me, I was interested to see if anyone visits my site these days.

## Netlify function

Before I started, I knew I would use Netlify Functions. Luckily, I quickly found Oliver James' article and reused his code to set up the basic script.

```js
exports.handler = async ({ headers }) => {
  ...

  return {
    statusCode: 200,
    body: "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    headers: { "content-type": "image/gif" },
    isBase64Encoded: true,
  };
};
```

I also inserted the following snippet at the bottom of every page:

```html
<img src="/.netlify/functions/clue/?url=$currentUrl" alt="">
```

In short, I'm calling a Netlify function from the image tag and returning a base64 encoded image.

Note that I'm passing the `url` GET parameter that will tell me on which page the user is. `$currentUrl` is a placeholder variable here. I am actually using the `page.url` variable from 11ty.

## Google Sheets

In his article, Oliver uses MongoDB, which I am unfamiliar with, so I figured I could use Google Sheets to record visits on my site. That brought me to the Google Sheets API docs, which didn't help since the docs are not very organized. So I tried my luck again and found the npm package [google-spreadsheet](https://www.npmjs.com/package/google-spreadsheet). It is the most popular Google Sheets API wrapper for JavaScript, as they state.

The first step was to create an actual Google Sheets doc. Then I had to [make a Google Cloud project](https://developers.google.com/workspace/guides/create-project) and [enable Google Sheets APIs](https://developers.google.com/workspace/guides/enable-apis). Then I had to [set up the service account authentication](https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication?id=service-account) to be able to make any requests.

> ☝️ Don't forget to execute the third step while setting the authentication.
>
> _“Share the doc with your service account using the email noted above.”_

Finally, I could write the script and see the visitors. I learned that `headers.referer` wasn't working for me, so I decided that I would log only the date, path, and user agent string.

```js
const now = new Date();
const url = event.queryStringParameters.url;
const ua = event.headers['user-agent'];
```

To start working with the google-spreadsheet library, I needed to initialize and authenticate it first.

```js
const doc = new GoogleSpreadsheet(process.env.GGL_SHTS_ID);

await doc.useServiceAccountAuth({
  client_email: process.env.GGL_SHTS_EMAIL,
  private_key: process.env.GGL_SHTS_KEY.replace(/\\n/gm, "\n"),
});
```

Then I needed to load the document and the desired sheet.

```js
await doc.loadInfo();
const sheet = doc.sheetsByIndex[0]
```

Finally, I added a new row to the current sheet.

```js
await sheet.addRow({
  date: now,
  url: url,
  ua: ua
});
```

The complete code can be found on [my website repository](https://github.com/maliMirkec/personal-website/blob/master/netlify/functions/clue.js) (which is publically exposed).

## Gotchas

I had a few unexpected errors during the development phase. First, Google Sheets reported the following error: *Client network socket disconnected before secure TLS connection was established*. I wanted to return the status code as soon as possible and leave async functions to execute in the background. It worked in my local environment but didn't work in production. So I had to use the *await* keyword with async requests.

Second, the service account key was a multiline field stored in the Netlify environment variable. Unfortunately, Netlify has trouble reading the multiline values, but Mehul Kar shared [the solution on Netlify Support Forum](https://answers.netlify.com/t/long-environment-variable-with-line-breaks-n/8514/6).

```js
private_key: process.env.GGL_SHTS_KEY.replace(/\\n/gm, "\n"),
```

Third, I saw a lot of HeadlessChrome user agents in my logs, much more than regular user agents. I figured these were bots, but I couldn't tell for sure. I [asked a question on Dev.to](https://dev.to/starbist/what-is-headlesschrome-user-agent-24f8), and Bramus confirmed that was the case. I think the majority of these logs come from the uptime checker.

## Conclusion

For the first few days, I saw that my site was receiving hits, which was exactly what I wanted to see. So I hope this little piece of code was helpful to you as it was for me.
