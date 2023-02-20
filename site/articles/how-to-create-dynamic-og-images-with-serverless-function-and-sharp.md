---
layout: index
title: How to create dynamic OG images with serverless function using Sharp library
date: 2023-02-21 10:00:00
tags:
  - blog
  - netlify
  - serverless
description:
type: articles-item
sections2:
  - type: banner-beta
    banner: newsletter
---

I wanted to develop a serverless function for generating dynamic Open Graph images for so long, and I finally did it last week.

Here's how my OG images look now:

{% cldnry "og-png_bmxknv" "OG image for the blog post titled “How to create dynamic OG images with serverless function using Sharp library”." %}

## Requirements and limitations

First, let's view the requirements. I wanted to use SVG as a template. Unfortunately, SVG is not a supported format for OG images. Instead, SVG needs to be converted to some other image format. In my case, in PNG format. If the title is too long, it should be split into multiple lines.

## The easy part

Creating an SVG template in Figma was the easy part. I decided to use the suggested format of 1200⨉630 pixels.

Next, I created a new file in my `netlify/functions` folder called `og-img.js`.

For passing titles dynamically, I am using the `text` URL parameter. If no `text` parameter is found, the default text will be used instead.

For displaying the title, I first used [the `foreignObject` element](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject).

Finally, since I am from Croatia, I had to encode special characters, so I had to use [the utf8 library](https://www.npmjs.com/package/utf8).

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

## The tricky part

If OG images support SVG, the job would be done nicely and easily. But since SVG format is not supported, I had to figure out a way to convert SVG to PNG. Most tutorials use Puppeteer and its screenshot function to take the screenshot of generated SVG images. I couldn't make it to work, even when trying to apply [Zach Leatherman's bug fix](https://www.zachleat.com/web/chromium-missing/). So I figured I would use the library for converting SVG to PNG.

In my case, I decided to use [Sharp library](https://www.npmjs.com/package/sharp). But, it was more complicated because Sharp library (and almost any of its kind) [don't work with `foreignObject` element](https://github.com/lovell/sharp/issues/512#issuecomment-233340992).

Instead, I had to use [the `text` element](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/text). But the text element cannot wrap the text, so I had to come up with some calculations for breaking the title into multiple lines.

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

First, I created an array of all words. Then I iterate through the array to check if the line with the next word concatenated would be longer than my line limit, 30. Finally, I am adding [the `tspan` element](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/tspan) for each line and applying some calculations to make every line sit on top of each other.

Converting SVG to PNG was the easy part:

```js
const img = await sharp(Buffer.from(svg))
  .png()
  .toBuffer()
```

All that is left to do is to output the base64 encoded image:

```js
return {
  statusCode: 200,
  body: base64.encode(svg),
  headers: {
    "content-type": "image/svg+xml"
  },
  isBase64Encoded: true,
}
```

The complete code can be seen here: <https://github.com/maliMirkec/personal-website/blob/master/netlify/functions/og-png.js>.

## Meta tags

To use this function, I have added the OG tags to my `head` element.

{% raw %}
```html
<meta property="og:image" content="/og/og.png?text={{ title | url_encode }}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
```
{% endraw %}

Note that my Eleventy `title` variable is encoded with [the Liquid `url_encode` filter](https://liquidjs.com/filters/url_encode.html).

Since I am using Netlify functions and don't like the `/.netlify/functions/og-png` URL, I have configured redirects to make the URL look prettier. I have added the following rule to [my `_redirects` file](https://docs.netlify.com/routing/redirects/#syntax-for-the-redirects-file):

```txt
/og/og.png* /.netlify/functions/og-png:splat 200!
```

## Conclusion

I have been running my site since 2015 and using a few OG image templates. Now all my Open Graph images use the same template and look the same. Heck, all my pages have OG images now, which was not the case before.

The best part is that I don't need to use software like Figma to create an OG image and then host it in Cloudinary. It just works.
