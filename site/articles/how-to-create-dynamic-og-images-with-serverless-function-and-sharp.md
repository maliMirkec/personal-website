---
layout: default
title: How to create dynamic OG images with serverless function using Sharp library
date: 2023-02-20 10:00:00
tags:
  - blog
  - netlify
  - serverless
description: Improve your website's social media presence with dynamic Open Graph images. Learn how with serverless functions and Sharp in this tutorial.
type: articles-item
---

I wanted to develop a serverless function for generating dynamic Open Graph images for so long, and I finally did it last week.

Here's how my OG images look now:

![“OG image for the blog post titled “How to create dynamic OG images with serverless function using Sharp library”.](/.netlify/functions/og?text=How%20to%20create%20dynamic%20OG%20images%20with%20serverless%20function%20using%20Sharp%20library)

## Requirements and limitations

First, let's review the requirements. I wanted to use SVG as a template. Unfortunately, SVG is not a supported format for OG images. Instead, SVG must be converted to another image format, like PNG or JPG. That means I will need some library for this.

The second requirement relates to title length. Since I am using this function throughout the site, the size of the title varies quite a lot, from very short to very long. So, if the title is too long, it should be displayed in multiple lines. That means I will need to make some calculations for title length.

## The easy part

Creating an SVG template in Figma was the easy part. I decided to use the suggested format of 1200⨉630 pixels.

Once I had the SVG code, I created a new file in my `netlify/functions` folder called `og-img.js`.

```js
var base64 = require('base-64')
const utf8 = require('utf8')

exports.handler = async function (event) {
  let text = 'Home of fearless web developer Silvestar Bistrović'

  if(event.queryStringParameters && event.queryStringParameters.text) {
    text = event.queryStringParameters.text
  }

  const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <rect width="1200" height="630" rx="20" fill="white"/>
    <rect x="56" y="56" width="1088" height="518" rx="15" stroke="#FF3366" stroke-width="14"/>
    <style>
      h1{
        font-size:60px;
        line-height:1.2;
        font-weight:300;
        font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';
        margin:0
      }
      </style>
      <foreignObject x="260" y="279" height="247" width="816">
        <h1 xmlns="http://www.w3.org/1999/xhtml">${utf8.encode(text)}</h1>
    </foreignObject>
  </svg>`

  try {
    return {
      statusCode: 200,
      body: base64.encode(svg),
      headers: {
        "content-type": "image/svg+xml"
      },
      isBase64Encoded: true,
    }
  } catch (error) {
    console.log(error)

    return {
      statusCode: 200,
      body: 'Error!',
      headers: {
        "content-type": "text"
      }
    }
  }
}
```

For passing titles dynamically, I am using the `text` URL parameter. If no `text` parameter is found, the default text will be used instead.

For displaying the title, I first used [the `<foreignObject>` element](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject).

Finally, since I am from Croatia, I had to encode special characters and use [the utf8 library](https://www.npmjs.com/package/utf8).

## The tricky part

If OG images support SVG, the job would be done nicely and easily. But since SVG format is not supported, I had to figure out how to convert SVG to PNG. Most tutorials use Puppeteer and its screenshot function to take the screenshot of generated SVG images. I couldn't make it to work, even when trying to apply [Zach Leatherman's bug fix](https://www.zachleat.com/web/chromium-missing/). So I figured I would use the library for converting SVG to PNG.

For converting images, I decided to use [the Sharp library](https://www.npmjs.com/package/sharp). But Sharp [doesn't work with `<foreignObject>` element](https://github.com/lovell/sharp/issues/512#issuecomment-233340992), so I had to figure out a workaround.

I knew I had to use [the `<text>` element](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/text), which I wanted to avoid because the `<text>` element cannot wrap the text, so I had to come up with some calculations for breaking the title into multiple lines.

Here's what I came up with.

```js
let textArray = []
let line = ''
const offset = 30
let text = 'Home of fearless web developer Silvestar Bistrović'

if(event.queryStringParameters && event.queryStringParameters.text) {
  text = event.queryStringParameters.text
}

let words = text.split(' ')

for (let i = 0; i < words.length; i++) {
  if(line.length + words[i].length < offset) {
    line.length += words[i].length;
    line += ` ${words[i]}`
  } else {
    textArray.push(line)
    line.length = words[i].length
    line = words[i]
  }

  if (i === words.length - 1) {
    textArray.push(line)
  }
}

const yPosition = 320
const yOffset = 65
let tspan = ''

for (let i = 0; i < textArray.length; i++) {
  if(i < 4) {
    tspan += `<tspan x="260" y="${yPosition + (yOffset * i)}">${utf8.encode(textArray[i].trim())}</tspan>`
  }
}
```

First, I created an array of all words. Then I iterate through the array to check if the line with the next word concatenated would be longer than my line limit, 30. Finally, I am adding [the `<tspan>` element](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/tspan) for each line and applying some calculations to make every line sit on top of each other.

Converting SVG to PNG was the easy part:

```js
const img = await sharp(Buffer.from(utf8.decode(svg)))
  .png()
  .toBuffer()
```

{% note %}
We are decoding the SVG string back to UTF8 to support all characters.
{% endnote %}

All that is left to do is to output the base64 encoded image:

```js
return {
  statusCode: 200,
  body: img.toString('base64'),
  headers: {
    "content-type": "image/png"
  },
  isBase64Encoded: true
}
```

The complete code can be seen here: <https://github.com/maliMirkec/personal-website/blob/master/netlify/functions/og-png.js>.

## Meta tags

Now I could use this function, so I added the OG tags to my `head` element.

{% raw %}
```html
<meta property="og:image" content="/og/og.png?text={{ title | url_encode }}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
```
{% endraw %}

Note that my Eleventy `title` variable is encoded with [the Liquid `url_encode` filter](https://liquidjs.com/filters/url_encode.html).

Since I am using Netlify functions and don't fancy the `/.netlify/functions/og-png` URL, I have configured redirects to make the URL look prettier. I have added the following rule to [my `_redirects` file](https://docs.netlify.com/routing/redirects/#syntax-for-the-redirects-file):

```txt
/og/og.png* /.netlify/functions/og-png:splat 200!
```

## Conclusion

I have run my site since 2015 using a few OG image templates. But now, all my Open Graph images use the same template and look the same. Heck, all my pages have OG images now, which was not the case before.

By the way, I know the font is very basic, but I chose to ignore it for now.

The best part is that I don't need software like Figma to create an OG image and host it in Cloudinary. Now my site generates it for me for free.
