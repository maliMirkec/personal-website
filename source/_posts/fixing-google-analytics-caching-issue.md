---
title: Fixing Google Analytics caching issue
date: 2017-09-07 16:20:04
id: 8
categories:
  - Blog
comments: true
tags:
- PageSpeed
- optimization
thumbnail: //res.cloudinary.com/starbist/image/upload/v1504795545/Fixing_Google_Analytics_caching_issue_mz9cm7.png
---

Getting the perfect score from Google PageSpeed Insights could be a tedious task, especially if Google Analytics is present on the website. You end up thinking that 99/100 is the perfect score. What does that one point mean anyway? And you go to sleep every night knowing that one point is still missing. My friend, the solution is here.

<!-- more -->

{% cloudinary //res.cloudinary.com/starbist/image/upload/v1504035691/Google_PageSpeed_Insights_-_Leverage_browser_caching_bs5wcx.png 320px=c_scale,q_auto:good,w_320;640px=c_scale,q_auto:good,w_640 "Google Analytics browser caching issue" %}

## The solution
The answer is pretty simple - use [CloudFlare Google Analytics app](https://www.cloudflare.com/apps/google-analytics). As simple as that! For those of you who are unfamiliar with CloudFlare, I'll to guide you how to do this.

## The setup
[CloudFlare](https://www.cloudflare.com) is awesome service that makes your project faster and safer. I'm using [the free plan](https://www.cloudflare.com/plans/) which provides you with plenty of options. The first step is to add the website to CloudFlare. You will have to scan the site, add DNS records, and update the nameservers. Don't worry; your domain will be available the whole time, no downtime during the transition.

Once when your website is added to CloudFlare, you will be notified, and you could get started with configuration. There is a significant number of configuration settings out there that are out of the scope of this article. Every option is well documented, take your time and set up every option carefully. Don't forget to check if your website is working after every change because it could be hard to debug the problems afterward. Believe me; I have learned that the hard way.

## The Google Analytics app
The first step is to remove the currently installed Google Analytics tracking code. To install the Google Analytics app, go to Apps tab and search for it. Click "Preview", add the tracking code and choose the pages on which to install the Google Analytics. Don't forget to click on "Install" button to finish the installation. Now go to [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) and test your website if it's working.

## Final thoughts
This issue has haunted me for months, and now I have [the perfect score]().

Do you have the perfect score? Do you have an alternative solution?

Let me know in the comments below or on my Twitter page.

_If you want me to help you with your score, I'm available for [hire](/hire-me)._
