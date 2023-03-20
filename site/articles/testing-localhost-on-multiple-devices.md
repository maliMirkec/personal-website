---
layout: index
title: Testing localhost on multiple devices
date: 2023-03-12 10:00:00
tags:
  - blog
  - cross-browser
  - testing
description:
type: articles-item
sections2:
  - type: banner-beta
    banner: newsletter
permalink: false
eleventyExcludeFromCollections: true
---

When developing websites or web apps on local computer, one usually uses localhost. Localhost is a hostname of a current device and it has loopback address `127.0.0.1`. So, how can you test the localhost on different devices? Let me show you a few ways how I do it.

## Find an IP address to share

The easiest way to find the “external” IP address of your localhost is to run the command from terminal. For example, on macOS, run the following command:

```bash
ifconfig | grep inet
```

You should see something like this:

{% cldnry "Screen_Shot_2023-03-16_at_11.33.00_AM_oa478x" "macOS Screenshot of an output of a ifconfig command showing external IP address of a localhost." 825 421 %}

On Windows, run the following command:

```bash
ipconfig
```

You should see something like this:

{% cldnry "Screen_Shot_2023-03-16_at_11.37.55_AM_qeptwn" "Windows 10 Screenshot of an output of a ifconfig command showing external IP address of a localhost." 825 537 %}

Now that you have the address, you could use it on any other device to test it, just don't forget to add port that your website or web app is running.

{% note "Important" %}
To view the local IP address on another device, you must be **connected to the same network**.
{% endnote %}

## Use software for exposing localhost

If your other device cannot be connected to the same network, then you have some alternative options using third-party apps.

## ngrok

The first software that I heard of that could expose localhost to external address was [ngrok](https://ngrok.com/). ngrok documentation has [excellent guide](https://ngrok.com/docs/getting-started/) how you could use it to expose your localhost to public internet over a secure channel. Basically, after you connect ngrok to your account, you run a command `ngrok http 8080` and you get the forwarding URL which is publically available.

{% note %}
Make sure to check the [ngrok pricing](https://ngrok.com/pricing). Free plan is available for every developer, but there are some restictions on bandwidth and usage.
{% endnote %}

## cloudflared

[cloudflared](https://www.npmjs.com/package/cloudflared) is the most recent addition to [my favorite npm packages](/articles/my-favorite-npm-packages/). It is a Node.js version of Cloudflare Tunnel client. Installation and usage are quite straighforward, as you could see in the Wes Bos' tweet.

<a class="db" href="https://twitter.com/wesbos/status/1634310926219333642">{% cldnry "wes-bos-tweet_evrsri" "Screnshot of Wes Bos' tweet showing how to use cloudflared." 825 518 %}</a>

{% note %}
cloudflared is free for everyone.
{% endnote %}

## Local by Flywheel

One other app that I occasionaly use for WordPress is [Local by Flywheel](https://localwp.com/). This app comes with a feature called [Live Links](https://localwp.com/live-links/) which enables you to “test your site with provisioned site tunnels from your Local account.”

{% cldnry "Screen_Shot_2023-03-16_at_12.44.36_PM_pasyp1" "Screenshot of Local app showing Live Links feature." 825 589 %}

{% note "Important" %}
Local app works only with WordPress.
{% endnote %}

## Netlify

On more rare occasions, when I need to test on “real” server, I go to Netlify and I drag'n'drop my compiled site folder. In matter of seconds I have a live site that I can test.

{% embed '<iframe width="792" height="446" src="https://www.youtube-nocookie.com/embed/etZ9HSUoTPU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>' '792' '446' %}

{% note %}
Netlify doesn't expose localhost, but I wanted to show you this interesting option here.
{% endnote %}

## Conclusion

Making sure your website or web app works on every device is of the greatest importance. Now you have different options how you could test it on different devices.
