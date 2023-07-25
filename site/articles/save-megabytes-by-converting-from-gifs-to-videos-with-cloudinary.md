---
layout: index
title: Save MBs by converting from GIFs to videos with Cloudinary
date: 2023-07-25 10:00:00
tags:
  - blog
  - optimization
description: Optimize content delivery and web performance by switching from GIFs to videos with Cloudinary, saving MBs for faster loading.
type: articles-item
sections2:
  - type: banner-beta
    banner: newsletter
    animate: true
---

I switched from GIFs to videos recently. I’ve been using Cloudinary to host my images for years, but I didn’t realize I could use it to convert GIFs to videos automatically. In this post, learn how Cloudinary helped me save megabytes of data by automatically converting GIFs to videos.

## Converting animated GIFs into videos

Like other transformations on Cloudinary, converting GIF to video could be done as easily as changing the extension of the file from `.gif` to `.mp4`, like this:

```html
https://res.cloudinary.com/.../my-gfx.gif
```

to

```html
https://res.cloudinary.com/.../my-gfx.mp4
```

Read more about [converting an animated Gif to a video on the Cloudinary site](https://cloudinary.com/documentation/animated_images#converting_an_animated_gif_to_video).

## Eleventy shortcodes

Since my site is powered by the awesome Eleventy, changing all GIFs to videos wasn’t too much of a task for me. I was using my custom Liquid shortcode for loading GIFs:

```js
eleventyConfig.addLiquidShortcode(
  'gif',
  (src, alt, width, height, instant) => {
    return `<img
      src="${src || ''}"
      alt="${ alt || '' }"
      width="${ width || '' }"
      height="${ height || '' }"
      ${ instant ? '' : ' loading="lazy"'}>`
  }
)
```

To load the GIF to my blog post, all I had to do was to call the shortcode like this:

{% raw %}
```liquid
{% gif "https://res.cloudinary.com/starbist/image/upload/v1687771538/Large_GIF_1458x916_qd6iqv" "Demonstration how CSS View Transition works on my site." 759 477 true %}
```
{% endraw %}

This code will produce the following HTML:

```html
<img class= "brad true" src=" https://res.cloudinary.com/starbist/image/upload/v1687771538/Large_GIF_1458x916_qd6iqv" alt=" Demonstration how CSS View Transition works on my site." width= "759" height= "477" loading= "lazy">
```

To load videos instead GIFs, I introduced a new shortcode:

```js
eleventyConfig.addLiquidShortcode(
  'video',
  (src, width, height, autoplay, loop, muted, gif) => {
  return `<video
      width="${ width || '' }"
      height="${ height || '' }"
      ${autoplay ? ' autoplay' : ''}
      ${loop ? ' loop' : ''}
      ${muted ? ' muted' : ''}
      poster="${src}.jpg">
      <source type="video/mp4" src="${src}.mp4">
      <source type="video/webm" src="${src}.webm">
      ${gif ? 'Your browser does not support the HTML5 video tag. <a href="' + src + '.gif">Click here to view original GIF</a>' : ''}
    </video>`
  }
)
```

To simulate GIF behavior, we must autoplay the video, mute it, and play it in a loop. Here’s how to do it:

{% raw %}
```liquid
{% video "https://res.cloudinary.com/.../my-gfx 759 477 'autoplay' 'loop' 'mute' 'gif' %}
```
{% endraw %}

The first parameter is the link to the original GIF but without an extension. It is important to avoid adding extensions because the code will add the JPG extension for the video poster attribute and mp4 and webm extensions for different video formats. Finally, for browsers that don’t support video tags, it will add the text “Your browser does not support the HTML5 video tag. Click here to view original GIF.” with the link to the original GIF.

Here’s the final HTML:

```html
<video width="759" height="477" autoplay loop muted poster="https://res.cloudinary.com/.../my-gfx.jpg">
  <source type="video/mp4" src="https://res.cloudinary.com/.../my-gfx.mp4">
  <source type="video/webm" src="https://res.cloudinary.com/.../my-gfx.webm">
  Your browser does not support HTML5 video tag. <a href="https://res.cloudinary.com/.../my-gfx.gif">Click here to view original GIF</a>.
</video>
```

## Conclusion

The savings from switching from GIF to video are tremendous. For this particular video, it goes from 3 MB to less than 0.3 MB, with an additional .08MB for the poster image. That’s pretty awesome, if you ask me. From now on, I am using only videos on my site.
