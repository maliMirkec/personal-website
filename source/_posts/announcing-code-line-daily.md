---
title: Announcing Code Line Daily
date: 2019-08-08 14:34:23
categories:
  - Blog
tags:
  - css
  - cld
  - open source
thumbnail: https://res.cloudinary.com/starbist/image/upload/v1565241482/Announcing_Code_Line_Daily-2x_eo71qp.jpg
comments: true
description: "Last week I released my side project: Code Line Daily. It is a quite straightforward project: a new line of code would be introduced every day. The lines are mostly frontend, PHP, and WordPress code. Here's how I build it!"
project:
  name: Code Line Daily
  href: https://cld.silvestar.codes
---

Last week I released my side project: [Code Line Daily].

It is a quite straightforward project: a new line of code would be introduced every day. The lines are mostly frontend, PHP, and WordPress code. Here's how I build it!

<!--more-->

## Behind the scenes

To build this project, I have used [Starter Project]. It is a Gulp based boilerplate that I created last year. It has grown a lot, and for this project, I have introduced JSON data files.

```json
{
  "list": [
    {
      "line": "all: unset",
      "note": "Resets all properties to default.",
      "link": "https://developer.mozilla.org/en-US/docs/Web/CSS/all",
      "language": "CSS",
      "author": "Silvestar",
      "date": "2019-08-01"
    },
    {
      "line": "overflow: initial",
      "note": "Sets overflow to default state.",
      "link": "https://css-tricks.com/almanac/properties/o/overflow/",
      "language": "CSS",
      "author": "Silvestar",
      "date": "2019-08-02"
    }
  ]
}
```

_[See the full code](https://github.com/maliMirkec/code-line-daily/blob/master/api/lines.json)._

Here is the basic JSON structure—an array of object items. [gulp-data] plugin is used to include, parse, and display the data on the homepage, archive, and author pages.

```pug
- var list = locals.data.list ? locals.data.list.filter(item => new Date(item.date) < new Date()) : [];
```

_[See the full code](https://github.com/maliMirkec/code-line-daily/blob/master/src/html/mixins/variables.pug)._

To display only current lines and not future ones, I have used `filter` function with a date condition. That way, future lines won't be displayed. Also, I have set up Zapier to trigger a new build every day in the morning.

```pug
- thisItem = list.slice(-1).pop()

h3= thisItem.line
```

_[See the full code](https://github.com/maliMirkec/code-line-daily/blob/master/src/html/index.pug)._

To display only a single line on the homepage, I have extracted the last item from an array of lines.

```pug
ul
  each listValue, listIndex in list.reverse()
    li
      h3= listValue.line
```

_[See the full code](https://github.com/maliMirkec/code-line-daily/blob/master/src/html/archive.pug)._

To display the list of lines, I have reversed the array and then iterated over each item using `each` loop.

The website is hosted on Netlify and powered by Netlify CMS to make my life easier by being able to publish new lines right from the browser.

##  Conclusion

I have enjoyed building this project, and I have a few other ideas on how to reuse the code, but I would leave that for myself for now.

I have learned that I don't need a classic page generator. I could use my Gulp-based generator. What is great about it is that it is packed with a lot of modern techniques and best practices, which saved me much time to develop this project.

If you have an exciting line of code to share, feel free to [contribute] to the website. Code Line Daily is an open-source project.

[Code Line Daily]: https://cld.silvestar.codes
[contribute]: https://cld.silvestar.codes/about
[Starter Project]: https://starter.silvestar.codes
[gulp-data]: https://www.npmjs.com/package/gulp-data
