---
layout: index
title: Testing localhost on multiple devices
date: 2023-04-04 10:00:00
tags:
  - blog
  - cross-browser
  - testing
description: Learn how to test your website or web app on various devices with these tools by finding your external IP address or using third-party apps.
type: articles-item
sections2:
  - type: banner-beta
    banner: newsletter
    animate: true
series: Tools
---

Developers usually use localhost when developing websites or web apps on local computers. Localhost is a hostname of a current device, and it has a loopback address of `127.0.0.1`. So how can you test the localhost on different devices, like another computer, tablet, or smartphone? Let me show you a few ways how I do it.

## Find an IP address to share

The easiest way to find your localhost’s “external” IP address is to run the command from a terminal. For example, on macOS, run the following command:

```bash
ifconfig | grep inet
```

You should see something like this:

{% cldnry "Screen_Shot_2023-03-16_at_11.33.00_AM_oa478x" "macOS Screenshot of an output of a ifconfig command showing external IP address of a localhost." 759 387 %}

On Windows, run the following command:

```bash
ipconfig
```

You should see something like this:

{% cldnry "Screen_Shot_2023-03-16_at_11.37.55_AM_qeptwn" "Windows 10 Screenshot of an output of a ifconfig command showing external IP address of a localhost." 759 494 %}

Now that you have the address, you can test it on any other device but don’t forget to add the port that your website or web app is running.

{% note "Important" %}
You must be **connected to the same network** to view the local IP address on another device.
{% endnote %}

## Use software for exposing localhost

Here are some alternative options using third-party apps if you cannot connect your other devices to the same network.

## ngrok

The first software I heard of that could expose localhost to an external address was [ngrok](https://ngrok.com/). ngrok documentation has [an excellent guide](https://ngrok.com/docs/getting-started/) on how you could use it to expose your localhost to public internet over a secure channel. After you connect ngrok to your account, run the command `ngrok http 8080` and get the publically available forwarding URL.

{% note %}
Make sure to check the [ngrok pricing](https://ngrok.com/pricing). A free plan is available for every developer, but there are some restrictions on bandwidth and usage.
{% endnote %}

## cloudflared

[cloudflared](https://www.npmjs.com/package/cloudflared) is the most recent addition to [my favorite npm packages](/articles/my-favorite-npm-packages/). It is a Node.js version of the Cloudflare Tunnel client. Installation and usage are pretty straightforward, as you can see in [Wes Bos’ tweet](https://twitter.com/wesbos/status/1634310926219333642).

{% cldnrylink "https://twitter.com/wesbos/status/1634310926219333642" "wes-bos-tweet_evrsri" "Screnshot of Wes Bos' tweet showing how to use cloudflared." 759 486 %}

{% note %}
cloudflared is free for everyone at the time of writing.
{% endnote %}

## Local by Flywheel

One other app that I occasionally use for WordPress is [Local by Flywheel](https://localwp.com/). This app comes with [Live Links](https://localwp.com/live-links/), which enables you to “test your site with provisioned site tunnels from your Local account.”

{% cldnry "Screen_Shot_2023-03-16_at_12.44.36_PM_pasyp1" "Screenshot of Local app showing Live Links feature." 759 541 %}

{% note "Important" %}
The Local app works only with WordPress.
{% endnote %}

## Netlify

On rare occasions, when I need to test on a “real” server, I go to Netlify and use drag’n’drop to put my site online. I have a live site that I can test in a matter of seconds.

{% embed '<iframe width="759" height="475" src="https://www.youtube-nocookie.com/embed/etZ9HSUoTPU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>' 759 475 %}

{% note %}
Netlify doesn’t expose localhost, but I wanted to show you this exciting option.
{% endnote %}

## Conclusion

Ensuring your website or web app works on every device is essential. Now you have different options for testing it on other devices locally.
