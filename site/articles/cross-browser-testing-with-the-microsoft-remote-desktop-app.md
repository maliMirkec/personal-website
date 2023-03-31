---
layout: index
title: Cross-browser testing with the Microsoft Remote Desktop app
date: 2023-03-31 10:00:01
tags:
  - blog
  - cross-browser
  - testing
description: You want to test your website on a Windows machine but hate switching your computers? See how to use the Microsoft Remote Desktop app to mitigate this problem.
type: articles-item
sections2:
  - type: banner-beta
    banner: newsletter
series: Tools
---

Imagine you are working on your Mac and want to test your website on a Windows machine but hate switching computers. Let me show you how to use the Microsoft Remote Desktop app for macOS to mitigate this problem. With this handy app, you can seamlessly connect and control your Windows machine without physically switching between devices.

## Microsoft Remote Desktop

Although I have a reliable desktop machine, I used to refrain from using it due to the inconvenience of switching the source on my monitors or using an external one. Furthermore, changing the source usually messes with my external monitor setup on my MacBook, which is a real bother. Not only that, switching a keyboard, mouse, and sometimes desk is so inconvenient and so annoying.

To avoid these inconveniences, I started to use the [Microsoft Remote Desktop](https://apps.apple.com/us/app/microsoft-remote-desktop/id1295203466?mt=12) app for macOS. This fantastic app is available for free on the Mac App Store.

{% note %}
I will refer the Microsoft Remote Desktop app as the Remote Desktop app for simplicity throughout this article.
{% endnote %}

## The usage

Let’s examine how you can effortlessly control a Windows machine from your macOS device. First, launch the Remote Desktop app, click the plus (+) icon, and select the “Add PC” option. Then enter the exact name of your Windows machine. If you don’t know it, you could use the IP address instead. To find out your local IP address, use [the following instructions](https://www.ipconfig.in/what-is-my-local-ip-address/).

{% note %}
Your Windows machine must be connected to the same local network with or without a cable.
{% endnote %}

Next, add a new user account associated with your Windows operating system or Microsoft website. This account will be utilized when establishing a remote connection. You can enter the credentials whenever you wish to connect or store them for future use. For more information on managing user accounts, refer to [the official documentation](https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/clients/remote-desktop-mac#manage-your-user-accounts).

Take a look at what my remote connection setup looks like:

{% cldnry "Microsoft_Remote_Desktop_app_g8mjr1" "Screenshot of Microsoft Remote Desktop app." %}

Once everything is set up, you can easily access your Windows machine using the “Connect” option or double-clicking on the new item in the dashboard.

For more detailed information on using the Remote Desktop app on macOS, check out the comprehensive documentation available at: <https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/clients/remote-desktop-mac>.

## The testing

Imagine you have a site up and running on your macOS and want to test it without the hassle of re-running it on a Windows machine while connected to it. Personally, I prefer using the “external” IP address, which can be found using the `ifconfig | grep inet` command on my macOS. You can then utilize this IP address on your other machines. There are also [other methods to test localhost](/articles/testing-localhost-on-multiple-devices/) that I have discussed in detail, so feel free to check them out.

## Conclusion

In the past, I used the Remote Desktop app primarily for debugging on Internet Explorer. However, with IE slowly becoming obsolete, I use it mainly to test websites on different browsers. One specific example is testing a website’s system font, where the device’s operating system determines the font. As a result, the font on my site appears differently on a Windows machine compared to my macOS or mobile devices. The Microsoft Remote Desktop app allows me to make these tests much more effortless.

I’m always looking for solutions that simplify my life, and this one is a real winner since I don’t require monitors or a mouse/keyboard setup.
