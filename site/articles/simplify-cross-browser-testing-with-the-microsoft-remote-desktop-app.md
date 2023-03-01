---
layout: index
title: Cross-browser testing with the Microsoft Remote Desktop app
date: 2023-03-01 10:00:00
tags:
  - blog
  - cross-browser
  - testing
description:
type: articles-item
sections2:
  - type: banner-beta
    banner: newsletter
---

Say you want to test your website on a Windows machine, but you hate it to switch your computers. Let me show you how to use the Microsoft Remote Desktop app for macOS in this scenario.

## Microsoft Remote Desktop app

My primary computer is MacBook Pro 2016, but I also have a desktop machine. This machine is quite old and serves me well, butI’m not particularly eager to use it because it requires an additional monitor, or, like in my case, it uses the same monitor as my MacBook. Switching the source on my monitors usually messes with my external monitor setup on my MacBook, which is a real bother.

So, to avoid these inconveniences, I discovered the [Microsoft Remote Desktop](https://apps.apple.com/us/app/microsoft-remote-desktop/id1295203466?mt=12) app for macOS. The app is available on the Mac App Store, and it is available for free.

{% note %}
_I will reference the Microsoft Remote Desktop app as the Remote Desktop app in the rest of the article for simplicity._
{% endnote %}

## Usage

Let’s see how we could control a Windows machine from a macOS device. First, open the Remote Desktop app, click the plus (+) icon, and select the “Add PC” option. Then enter the exact name of your Windows machine. If you don’t know it, you could use the IP address instead. To find out your local IP address, use [the following instructions](https://www.ipconfig.in/what-is-my-local-ip-address/).

{% note %}
_Your Windows machine must be connected to the same local network._
{% endnote %}

After that, add a new user account. This is the account associated with your Windows operating system or Microsoft website. This account will be used with a remote connection. You could choose if you want to enter the credentials every time you want to connect or store them for future reference. Read more about managing your user accounts on [the official documentation](https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/clients/remote-desktop-mac#manage-your-user-accounts).

Here’s what my remote connection looks like.

{% cldnry "Microsoft_Remote_Desktop_app_g8mjr1" "Screenshot of Microsoft Remote Desktop app." %}

After that, you can access your Windows machine using the “Connect” option or double-click on the new window in the dashboard.

The complete Remote Desktop documentation for macOS is available here: <https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/clients/remote-desktop-mac>.

### Conclusion

Earlier, I used the Remove Desktop app for IE debugging, but thankfully IE is (almost) dead. Recently, I have been using it for testing sites on major browsers. For example, I am using system font on my site. That means the site’s font is based on the device’s operating system. So, if I browse my site on a Windows machine, I see different fonts than on my macOS or mobile devices.

I like every solution that makes my life easier, but this one I really like because I don’t need monitors and a mouse or keyboard.
