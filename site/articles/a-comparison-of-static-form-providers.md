---
layout: index
title: 'A Comparison of Static Form Providers'
date: 2019-09-26 22:08:09
tags:
  - blog
  - publications
categories:
  - serverless
  - spg
  - ssg
publication: CSS Tricks
canonical: https://css-tricks.com/a-comparison-of-static-form-providers/
thumbnail: A_Comparison_of_Static_Form_Providers_efatgg
description: Static Form Providers do all tasks like validating, storing, sending notifications, and integrating with other APIs. Read the review of the most popular static form providers.
---

_This article was originally published on [CSS-Tricks](https://css-tricks.com/a-comparison-of-static-form-providers/)._

Let’s attempt to coin a term here: "Static Form Provider." You bring your HTML `<form>`, but don’t worry about the back-end processing that makes it work. [There are a lot of these services out there!](https://serverless.css-tricks.com/services/forms)

Static Form Providers do all tasks like validating, storing, sending notifications, and integrating with other APIs. It’s lovely when you can delegate big responsibilities like this. The cost? Typically a monthly or annual subscription, except for a few providers and limited plans. The cost is usually less than fancier "[form builders](https://css-tricks.com/options-for-web-forms/)" that help you build the form itself _and_ process it.

<!-- more -->

In this article, we are going to review some of the most popular [static form providers](https://serverless.css-tricks.com/services/forms/):

- [Kwes](https://kwes.io/)
- [Basin](https://usebasin.com/)
- [FieldGoal](https://fieldgoal.io/)
- [Formcarry](https://formcarry.com/)
- [FormKeep](https://formkeep.com/)
- [Formspree](https://formspree.io/)
- [FormSubmit](https://formsubmit.co/)
- [formX](https://formx.stream/)
- [Getform](https://getform.io/)
- [Netlify Forms](https://www.netlify.com/products/forms/)

Before moving forward, just a note that the information for these comparisons came from visiting the site for each product and learning about the included features. Once I got all the information, I sent an email to each provider to confirm the list of features. Some of them confirmed, some didn't. Special thanks to Kwes, FormKeep, Formspree, FormSubmit, formX, and Netlify Forms teams for confirming.

### Form building components and validation

<div class="table-wrapper">

|Name|Custom Components|Front-End Validation|Back-End Validation|
|--- |--- |--- |--- |
|Kwes|✅|✅|✅|
|Basin|❌|❌|❌|
|FieldGoal|Unable to confirm|Unable to confirm|Unable to confirm|
|FormCarry|❌|❌|❌|
|FormKeep|✅|❌|❌|
|Formspree|❌|❌|❌|
|FormSubmit|❌|❌|❌|
|formX|❌|❌|❌|
|Getform|❌|❌|❌|
|Netlify Forms|❌|❌|❌|

</div>

Components for building a form are HTML input elements, like text inputs, textareas, checkboxes, and radio buttons. When using a static form, most providers require adding custom HTML attributes. By providing the custom URL in the form `action` attribute, the form gets submitted on the provider’s side where it gets stored.

If you are looking for a form builder, FormKeep has a form designer feature. That means you embed custom HTML and JavaScript files in the page, and you get a styled form. Otherwise, you have to style the form by yourself.

If you need custom components, like a date picker or card inputs, Kwes and FormKeep are the only providers with this feature. If you want to validate input fields in the browser, you might use third-party libraries or writing your code which means adding additional JavaScript code to the site. Kwes is the only provider that supports front-end validation based on the rules you set in each input component. To enable this feature, you should include additional JavaScript file, which you might do nevertheless. Other static form providers rely only on HTML5 validation.

Kwes is the only provider with back-end validation, too. The rules you set in the front end are passed to the back end side. In case when front-end validation fails, you are safe, the backend validation would work. Other providers don't have this feature; they rely only on spam protection.

### Spam protection

<div class="table-wrapper">

|Name|Spam Protection|
|--- |--- |
|Kwes|Artificial intelligence<br> Automatic Honeypot<br> Blacklists<br> Proprietary technology|
|Basin|Akismet<br> CleanTalk<br> reCAPTCHA<br> Honeypot|
|FieldGoal|Provided, but unable to confirm what powers it|
|FormCarry|Akismet<br> reCAPTCHA|
|FormKeep|Akismet<br> reCAPTCHA<br> Honeypot<br> Proprietary technology|
|Formspree|Akismet<br> Profanity Filter<br> Authorized Domains<br> Custom reCAPTCHA<br> Custom Honeypot<br> Custom Spam Filtering|
|FormSubmit|reCaptcha<br> Honeypot|
|formX|reCAPTCHA<br> Honeypot|
|Getform|Akismet<br> reCAPTCHA|
|Netlify Forms|Akismet<br> reCAPTCHA<br> Honeypot|

</div>

> “Kwes advertises a 99.6% spam block success rate with no setup required.”

Once your form is ready for submissions, you might find it hard to deal with spam. That’s why spam protection is essential, especially if you want to keep your sanity and serenity. All providers provide spam protection in this way or another. Some rely on [Google reCAPTCHA](https://www.google.com/recaptcha/intro/v3.html) or [Akismet](https://akismet.com/), some on Honeypot techniques, and some use artificial intelligence to get the job done. It is worth noting that adding an additional step to your form, like adding reCAPTCHA might affect the conversion rates on form submissions.

### Email notifications

<div class="table-wrapper">

|Name|Confirmations|Notifications|Email Routing Logic|
|--- |--- |--- |--- |
|Kwes|✅|✅|✅|
|Basin|✅|✅|✅|
|FieldGoal|Unable to confirm|Unable to confirm|Unable to confirm|
|FormCarry|✅|✅|✅|
|FormKeep|✅|✅|✅|
|Formspree|✅|✅|✅|
|FormSubmit|✅|✅|✅|
|formX|✅|✅|✅|
|Getform|✅|✅|✅|
|Netlify Forms|✅|✅|✅|

</div>

Email confirmations are essential if you want to provide a fast response to your users. With a contact form, for example, you want to get an email for every new submission. That way, you're able to respond to the submission quickly and efficiently.

All providers, except FieldGoal, have confirmation, notification, and email routing logic features. You could set up an email form element which would be used to send an email automatically to the user with confirmation about the submission.

Some providers have other sorts of notifications besides email, like push notifications or Slack messages, which might be handy.

### White labeling

<div class="table-wrapper">

|Name|White Label|
|--- |--- |
|Kwes|✅|
|Basin|✅|
|FieldGoal|Unable to confirm|
|FormCarry|✅|
|FormKeep|✅|
|Formspree|✅|
|FormSubmit|✅|
|formX|✅|
|Getform|✅|
|Netlify Forms|✅|

</div>

When communicating via email notifications with your clients, you might want to use your brand and style. It creates better awareness and that way you familiarize your clients with your product. All providers offer this feature, with the exception of FieldGoal, which I was unable to confirm (although it might be under paid plans).

### Custom redirects

<div class="table-wrapper">

|Name|Custom Redirects|
|--- |--- |
|Kwes|✅|
|Basin|✅|
|FieldGoal|Unable to confirm|
|FormCarry|✅|
|FormKeep|✅|
|Formspree|✅|
|FormSubmit|✅|
|formX|✅|
|Getform|✅|
|Netlify Forms|✅|

</div>

Once you have captured a response from your user, you may want to let the user continue using your site. Also, you might want to communicate to the user that the submission was received. This feature is called "custom redirect," and every provider has this feature (with another exception for FieldGoal because I was unable to confirm). Note that this feature might not be available in a free plan and require a paid or upgraded account.

### Upload storage

<div class="table-wrapper">

|Name|Upload Storage|
|--- |--- |
|Kwes|200MB per file<br> 20GB storage|
|Basin|100MB per submission|
|FieldGoal|Amazon S3|
|FormCarry|5MB per file<br> 5GB storage|
|FormKeep|2.5G storage|
|Formspree|10MB per file<br> 10GB storage|
|FormSubmit|Included, but unconfirmed storage amounts|
|formX|❌|
|Getform|25MB per submission<br> 25GB storage|
|Netlify Forms|1GB storage|

</div>

Not every static form provider provides file storage. For example, formX doesn't provide it at all. In most cases, this feature is available under paid plans. You might want to invest additional time to find out which provider offers the best service for you. Be sure to look specifically at single file size _and_ form submission size limitations.

### Data export

<div class="table-wrapper">

|Name|Data Export|
|--- |--- |
|Kwes|✅|
|Basin|✅|
|FieldGoal|Unable to confirm|
|FormCarry|✅|
|FormKeep|✅|
|Formspree|✅|
|FormSubmit|✅|
|formX|✅|
|Getform|✅|
|Netlify Forms|✅|

</div>

Data export is important feature if you want to use it for analysis or for import to third-party software. Most providers offer <abbr>CSV</abbr> and JSON exports, which are the most commonly used ones.

### <abbr>API</abbr> access

<div class="table-wrapper">

|Name|API Access|
|--- |--- |
|Kwes|✅|
|Basin|✅|
|FieldGoal|Unable to confirm|
|FormCarry|✅|
|FormKeep|✅|
|Formspree|✅|
|FormSubmit|✅|
|formX|On demand|
|Getform|❌|
|Netlify Forms|✅|

</div>

If you want to control your data submissions by building a custom application or script, you might benefit from having API access. Most providers have this feature, except Getform. formX offers it, but only on demand.

### Webhooks/Zapier

<div class="table-wrapper">

|Name|Webhooks|Zapier|
|--- |--- |--- |
|Kwes|✅|✅|
|Basin|✅|✅|
|FieldGoal|Unable to confirm|✅|
|FormCarry|✅|✅|
|FormKeep|✅|✅|
|Formspree|✅|✅|
|FormSubmit|✅|❌|
|formX|✅|✅|
|Getform|✅|✅|
|Netlify Forms|✅|✅|

</div>

When building a custom application or a script is out of budget, you might want to use webhooks to integrate data submissions with third-party software. Zapier is one of the most commonly used services for this, and only FormSubmit doesn't support it (though it does support webhooks).

### Analytics

<div class="table-wrapper">

|Name|Analytics|
|--- |--- |
|Kwes|❌|
|Basin|✅|
|FieldGoal|Unable to confirm|
|FormCarry|❌|
|FormKeep|✅|
|Formspree|❌|
|FormSubmit|❌|
|formX|✅|
|Getform|❌|
|Netlify Forms|❌|

</div>

Analytics for static forms is a neat feature that could offer beneficial insight into how your form is performing. It may help you understand how your users interact with it, and you may spot ways to improve the form submission experience as a result. This feature is the least supported of all other features. Only Basin, FormKeep, and formX provide it.

### Plan comparison

<div class="table-wrapper">

|Name|Plan 1|Plan 2|Plan 3|Plan 4|
|--- |--- |--- |--- |--- |
|Kwes|Free Tier $0/mo. <br> Build spam-protected, and validated forms quicker than ever. <br> 1 Website <br> Unlimited Forms <br> 30 Spam Blocks|Bronze Tier<br>  $9/mo. <br> Unlimited spam blocks, more form tools, and submissions.<br> 1 Website <br> Unlimited Forms <br> Unlimited Spam Blocks|Silver Tier<br> $29/mo. <br> Build more powerful forms with integrations and webhooks.<br> 3 Websites <br> Unlimited Forms <br> Unlimited Spam Blocks <br> 4 Users|Gold Tier<br> $79/mo. <br> Enjoy more team members and everything with increased limits. <br> 10 Websites <br> Unlimited Forms <br> Unlimited Spam Blocks <br> 11 Users|
|Basin|Standard Tier<br> $4.17/mo. (billed annually)|Premium Tier<br> $12.50/mo. (billed annually)|||
|FieldGoal|Single Tier<br> 1 form<br> $5/mo.|Freelancer Tier<br> 5 forms<br> $15/mo.|Studio Tier<br> 15 forms<br> $39/mo.|Agency Tier<br> 50 forms<br> $79/mo.|
|FormCarry|Baby Tier<br> Free|Basic Tier<br> $15/mo.|Growth Tier<br> $40/mo.||
|FormKeep|Starter Tier<br> $4.99/mo.|Starter Pack<br> $7.50 per form per month|Freelancer Tier<br> $5.90 per form per month|Agency Tier<br> $3.30 per form per month|
|Formspree|Free Tier<br> $0/mo.|Gold Tier<br> $10/mo.|Platform Tier<br> $40/mo.||
|FormSubmit|Unlimited||||
|formX|Free Tier<br> $0/mo.<br> 100 submissions max.|Starter Tier<br> $4.99/mo.|SMBs & Freelancers<br> $49.99/mo.|Business & Agencies<br> $99.99/mo.|
|Getform|Free Tier<br> $0/mo.|Basic Tier<br> Perfect for small businesses<br> $7.5/mo.<br> $90 per year|Agency Tier<br> $24/mo.<br> $290 annually|Enterprise Tier<br> $57.5/mo.<br> $690 annually|
|Netlify Forms|Level 0<br> $0<br> 100 submissions/mo.<br> 10MB uploads/mo.|Level 1<br> $19/mo. per site<br> 1,000 submissions/mo.<br> 1GB uploads/mo.|Level 2<br> Custom pricing and limits||

</div>

Static form providers have different plans, from entirely free plans and trials, to enterprise plans for every business need. Depending on a plan, you might have different features enabled. For example, FormSubmit is the only provider that offers all of its features for free, though it doesn't support every feature we've covered here. You will want to invest some time to learn about which features are most important for you and your product or business. Then go ahead and decide on which provider is most suitable for your needs.

### Wrapping up

Having a form of any kind is a must-have for a large number of sites. When you use a static site generator, you might discover that static form providers make adding forms to a site almost trivial. By following a few rules for enabling static forms, you could benefit from essential features like spam protection and email notifications.

I have been using Kwes for a while now and I can honestly tell you it is a great product that fulfills all of my needs. It has smart spam protection, an easy-to-use dashboard, and impressive validation, both on the front end and back end.

Before choosing your static form providers, be sure to put down all requirements to the paper, and then find your perfect provider.
