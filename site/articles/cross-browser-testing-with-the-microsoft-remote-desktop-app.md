---
layout: index
title: Cross-browser testing with the Microsoft Remote Desktop app
date: 2023-03-01 10:00:00
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

Are you tired of constantly switching between your computers to test your website on a Windows machine? Do you want to avoid the hassle of switching back and forth? Well, fear not! I’m here to show you a fantastic solution that will save you time and effort.

Introducing the Microsoft Remote Desktop app for macOS! With this handy app, you can seamlessly connect to a Windows machine without physically switching between devices. No more headaches, no more wasted time!

So please sit back, relax, and let me guide you through the easy steps to use this excellent app. Get ready to streamline your testing process and make your life much easier!

### Microsoft Remote Desktop

Although I have a reliable desktop machine, I tend to refrain from using it due to the inconvenience of needing an additional monitor. I often find myself having to switch the source on my monitors, disrupting the external monitor setup on my MacBook Pro 2016 - talk about a real hassle!

But fear not, as I’ve discovered an excellent solution to avoid these inconveniences - the [Microsoft Remote Desktop](https://apps.apple.com/us/app/microsoft-remote-desktop/id1295203466?mt=12) app for macOS. This fantastic app is available for free on the Mac App Store, and I’ll be referring to it as the Remote Desktop app for simplicity throughout this article.

{% note %}
_For the sake of simplicity, I’ll be referring to the Microsoft Remote Desktop app as the Remote Desktop app for the remainder of this article._
{% endnote %}

### The usage

Let’s examine how you can effortlessly control a Windows machine from your macOS device. First, launch the Remote Desktop app and click the plus (+) icon. From there, select the “Add PC” option and enter the exact name of your Windows machine. You can use the IP address if you don’t know the name. Simply [follow the instructions](https://www.ipconfig.in/what-is-my-local-ip-address/) below to obtain your local IP address.

{% note %}
_Your Windows machine must be connected to the same local network to use the Remote Desktop app._
{% endnote %}

Next, add a new user account associated with your Windows operating system or Microsoft website. This account will be utilized when establishing a remote connection. You can enter the credentials every time you wish to connect or store them for future use. For more information on managing user accounts, refer to [the official documentation](https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/clients/remote-desktop-mac#manage-your-user-accounts).

Take a look at what my remote connection setup looks like:

{% cldnry "Microsoft_Remote_Desktop_app_g8mjr1" "Screenshot of Microsoft Remote Desktop app." %}

Once everything is set up, you can easily access your Windows machine using the “Connect” option or double-clicking on the new window in the dashboard.

For more detailed information on using the Remote Desktop app on macOS, check out the comprehensive documentation available at: [https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/clients/remote-desktop-mac](https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/clients/remote-desktop-mac).

### Conclusion

In the past, I used the Remote Desktop app primarily for debugging on Internet Explorer. However, with IE slowly becoming obsolete, I now use it mainly for testing websites on different browsers. One specific example is testing a website’s system font, where the device’s operating system determines the font. As a result, the font on my site appears differently on a Windows machine compared to my macOS or mobile devices.

I’m always looking for solutions that simplify my life, and this one is a real winner since I don’t require monitors or a mouse/keyboard setup.
