---
layout: index
title: First Year of UI Dev Newsletter
date: 2021-05-20 09:13:35
tags:
  - blog
  - newsletter
thumbnail: first-year-of-ui-dev-newsletter_owiskt
description: After the first anniversary of the UI Dev Newsletter, I wanted to share how and why I am running it. Read the whole story and get some useful links.
type: articles-item
sections3:
  - type: banner-beta
    desc: To receive the latest news about User Interface development, subscribe here.
    id: subscribe-now
    code: >-
      <form class="embeddable-buttondown-form newsletter wrapper wrapper--beta margin-top text-left" action="https://buttondown.email/api/emails/embed-subscribe/starbist" method="post" target="popupwindow" onsubmit="window.open('https://buttondown.email/starbist', 'popupwindow')">
        <input type="hidden" value="1" name="embed" />
        <div class="margin-top">
          <label for="bd-email">Subscribe here. Enter email.</label>
          <div class="newsletter__input">
            <input class="input" type="email" name="email" id="bd-email" />
            <input class="button button--small" type="submit" value="Subscribe" />
          </div>
        </div>
        <p class="no-margin"><small><a href=""https://buttondown.email" target="_blank" rel="noreferrer">Powered by Buttondown</a></small></p>
        <div class="cta">
      </form>
  - type: content-beta
    id: original-q-and-a
    desc: >-
      ## Original Q and A

      - **What are the typical topics you write about? Is there a recurring theme or style throughout your articles?**


        Everything related to User Interface development, including HTML, CSS, JavaScript, Accessibility, tools, and apps.

      - **I noticed that you use Tinyletter as your newsletter platform. Are you happy with this platform? What improvements would you want to see?**


        I am ok with Tinyletter. It isn’t the best possible experience, but it is free, and it has what I need: a custom HTML. I would like to see an option to schedule the sending and automatically send the latest issue to the new subscribers.

      - **How much time do you spend on your newsletter each week? Does this newsletter encompass a full-time job, hobby, or somewhere in between?**


        I am spending a few hours reading/finding articles during the week. I usually create the issue during the weekend. It takes between an hour and two. I would say this newsletter is my side project.

      - **Who’s the typical reader? Who are you targeting?**


        Any frontend developer should enjoy reading the newsletter. I am targeting anyone who likes to create User Interfaces.

      - **Do you track (or have the ability to track) the types of readers for your newsletter? If yes, have you found any interesting trends in terms of geography, interests, career, etc.?**


        I have basic analytics that my link-shortening service offers, but I rarely check the data. I don’t have time or interest in that thing now.

      - **Do you monetize your newsletter today? If yes, how do you do it? If no, why not?**


        No. I don’t think anybody would pay. I asked my readers in the anniversary issue to buy me a coffee for support. Nobody did it.

      - **How much time is spent outside of creating content? What are those activities?**


        Reading the articles and deciding which one to select is the only activity outside of creating content. I was doing it anyway before I started the newsletter.

      - **How much revenue do you have? What’s your goal?**


        Not sure, to be honest. I am considering stopping the newsletter, but every new subscriber makes me not do it.
sections2:
  - type: banner-alpha
    title: I am considering new projects for the 2022.
    desc: I specialized in **HTML**, **CSS**, **JavaScript**, **WordPress**, **Shopify**, and **JAMstack** technologies.
    cta:
      href: /contact/
      title: Hire me ⇢
---

A few weeks ago, I sent the first-anniversary issue of the [UI Dev Newsletter](https://mentor.silvestar.codes/reads/). Around that time, I got an email from a student with a list of questions about my newsletter. I am a polite person, so I answered these questions. I thought that more people would be interested in hearing these answers, so I figured I would write a blog post about it.

If you want to see the questions and answers, [skip to the end of the article](#original-q-and-a). Otherwise, enjoy the whole story.

## How it started

I started the UI Dev Newsletter accidentally. I mean, I didn’t plan to run it, at least not for the whole year. It all started with my side project, [a mentoring program](/articles/the-ui-development-mentoring-program/), which failed gloriously.

As part of that program, I listed [helpful frontend resources](https://mentor.silvestar.codes/resources/) and [tips](https://mentor.silvestar.codes/tips/) I collected during my career. I also listed [valuable articles](https://mentor.silvestar.codes/reads/) that I considered worth reading. These articles were a reminder for me, but I figured it wouldn’t hurt if I document them.

I started sharing these pages on Twitter and Reddit, and it was getting some traction, but nothing too crazy.

I noticed I usually share around eight articles per week. One of the links is usually a tool, app, or helpful resource. At the same time, the rest are related to UI development, from CSS to accessibility.

After a few posts, the idea of starting a newsletter came up, so I started researching how to send newsletters.

## The app

The first thing was to choose my newsletter app. I thought about using Mailchimp, as I had previous experience with that platform. Then I learned about [Tinyletter](https://tinyletter.com/) (a more inferior version of Mailchimp). I decided it has everything I need, from a subscription list to a simple HTML editor.

_I discovered [ButtonDown](https://buttondown.email/) recently, and I am considering switching to this app. Not sure yet._

## The script

Next, I had to figure out how to prepare the email HTML code from my site. I am storing all links in a JSON file. That file is used to create single newsletter posts on my site, like [this one](https://mentor.silvestar.codes/reads/2021-05-17/). By the way, I am using [11ty](https://www.11ty.dev/authors/malimirkeccita/) to build the site, my new favorite static site generator.

The same JSON file is used in a Node script that outputs the HTML for my newsletter. The script is quite simple, partly because I cannot do complicated ones, partly because it does the job.

The script prints the HTML code in the terminal, which I have to copy and paste to the Tinyletter editor. I don’t mind doing it manually, but ideally, this would be an automated process.

As a part of the Node script, I am preparing the Markdown code for Dev.to post. I am reposting every issue as an article on the [Dev.to site](https://dev.to/starbist/) to gain more visibility.

As the final part of my Node script, I prepare tweets that I share throughout the week. I am using [Apphi](https://apphi.com/) to schedule my tweets. I initially used Buffer, but I find Apphi to be more suitable for my needs. Again, I had to copy and paste the content from the terminal to the app.

_Any help automating copy-paste processes would be greatly appreciated. [Contact me](/contact/) if you know how to do it._

## The tracking

I am not paying much attention to analytics and/or click tracking. I even uninstalled all analytics tools from my sites a few months ago. I decided I don’t what to stress myself about analytics.

However, I use the link shortener service called [Bitly](https://bitly.com/), where I could see the number of clicks per link. I don't check this service often, to be honest.

Tinyletter also provides some kind of click track that I don’t pay attention to often either.

## The email design

There is no design. First, I am not very skilled with email templates (which I had to do occasionally, and it was a pain in the bottom). Until the last issue, there wasn’t even a logo.

The email HTML is straightforward, and it consists of the hero image, heading, paragraphs, and list items with anchors. Tinyletter wraps the code in a table layout, which centers the content.

## The commitment

Now that everything is in place, it takes me an hour or so to write a newsletter. That is minus the time for reading all the articles (which I would do anyway) and decide which one to use.

I find most of the articles on Twitter, Reddit, and Dev.to. Some of the articles are recommended by authors directly. Some I find on other places, like Google recommendations or random Internet surfing.

I usually read articles on my phone. If I think the article meets my humble criteria, I bookmark it. Later I bring all bookmarked articles on my computer and then decide which ones go into the newsletter.

## The audience

In general, my audience is every person interested in building a user interface on the web. If you are interested, [subscribe below](#subscribe-now).

At the moment, there are 170 subscribers, but I never invested in marketing. I thought about running a Twitter campaign or something like that, but I never did. I am not a marketing person. I don’t know how to do it properly.

What I did found are some lists where I included my newsletter, like [this Github repo](https://github.com/markodenic/web-development-resources#newsletters). It also helps when people share the newsletter, mainly on Twitter. [Manuel Matuzović](https://twitter.com/mmatuzo) and [Marko Denic](https://twitter.com/denicmarko) did it, and I am very thankful they did.

{% cldnrylink "https://twitter.com/denicmarko/status/1383330776796651522" "denicmarko-tweet_auldjg" "Screenshot of Marko Denic's tweet." %}

If you like the UI Dev Newsletter, you could [share it](#share-the-article), too. I would appreciate it greatly.

{% cldnrylink "https://twitter.com/mmatuzo/status/1384136467841118209" "mmatuzo-tweet_oxxfrw" "Screenshot of Manuel Matuzović's tweet." %}

## Conclusion

Last year I ran the other project, [Code Line Daily](/articles/the-first-year-of-my-side-project-code-line-daily/). I gave up on it after a year.

The newsletter is now one year old. I am not sure how long I will run it, but with every new subscriber, I want to continue with it.
