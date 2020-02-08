---
title: How to add a contact form to a static website
date: 2019-08-01 11:33:44
categories:
  - Blog
tags:
  - spg
  - ssg
  - kwes
canonical: https://www.codementor.io/malimirkeccita/how-to-add-a-contact-form-to-a-static-website-wyl9gsuha
thumbnail: https://res.cloudinary.com/starbist/image/upload/v1565249057/How_to_add_a_contact_form_to_a_static_website-2x_mqfxlv.jpg
comments: true
description: "With the rise of the static site, developers need a service that could handle forms. Static website contact form is the most common case, and in this article, you would learn how to add one with Kwes form builder."
---

With the rise of the static site, developers need a service that could handle forms. Static website contact form is the most common case, and in this article, you would learn how to add one with [Kwes form builder].

Adding a contact form to a static site could be a challenge because the static site usually doesn't have a backend that could handle the form submissions. In that case, we could use a service that would do this for us. There are many services out there, like Netlify forms or Typeform, but in this case, we are going to use the Kwes service.

<!--more-->

We are going to build a contact form with the following fields:

<div class="table-wrapper">

| Form element   | Form field         |
| -------------- | ----------------   |
| Name           | Text input         |
| Email          | Email input        |
| Message        | Textarea input     |
| Button         | Submit button      |

</div>

All input fields should be required, and the email form field should be validated.

## Integration

Since we are going to add Kwes form to our site, we should sign up for free first.

After signing up, add a new website, and a new form from Kwes dashboard.

{% cloudinary https://res.cloudinary.com/starbist/image/upload/v1568016828/kwes-dashboard_nfctyx.png 320px=f_auto,q_auto,w_270;720px=f_auto,q_auto,w_720;1440px=f_auto,q_auto,w_1440 "Kwes Dashboard screenshot." %}

To complete the integration, you should add JavaScript file at the bottom of your body tag of your contact page.

```html
<script src="https://kwes.io/js/kwes.js"></script>
```

I am using [Hexo] static page generator for my site, but it works with other static site generators like [Hugo] or [Jekyll]. Since most of the static site generators support Markdown, you could paste the contact code directly in Markdown, and it would work, too. Otherwise, you could create a separate page or layout and paste the code there.

> Pro tip: There is no need to add JavaScript file to pages that don't have a contact form.

Next, we would add an HTML form to our contact page. To do this, start by adding the usual form tags.

> Pro tip: Don't forget to add labels with for attributes with matching input's IDs to make your form more accessible.

Then add the Kwes attributes. Start by adding the wrapper div with the `kwes-from` class. Next, add the action link to the `form` element, and then add rules to your `input` fields. The code should look something like this:

```html
<div class="kwes-form">
  <form method="POST" action="https://kwes.io/api/foreign/forms/youruniqueid">
    <label for="name">Name</label>
    <input type="text" name="name" id="name" rules="required">
    <label for="email">E-mail</label>
    <input type="email" name="email" id="email" rules="required|email|max:255">
    <label for="message">Message</label>
    <textarea name="message" id="message" rules="required"></textarea>
    <button type="submit">Submit</button>
  </form>
</div>
```

You could see all the rules options at the [Kwes official documentation].

Before you publish the form, you should test the form first. With Kwes, you could do it in two different ways:

- by providing a testing domain in the site settings, or
- by adding HTML attribute `mode="test"` to your `form` element.

During [the testing mode], all your submission would not affect the data in your plan. You could view test data in the dashboard by switching the toggle. As easy as that.

The last step is setting the code to the production mode. Now we should sit back and wait for the submissions knowing that Kwes would handle everything for us—from form validation, through spam filtering, to sending confirmation emails.

You could customize the style of the notification messages to match your brand. See the example of a customized contact form [on my site].

## Kwes features

Kwes has a built-in [logic for showing or hiding any content on a condition]. For example, you could show different plan details based on the selected plan.

For me, the most significant advantage is form validation. The validation takes action on both frontend and backend site. Not having to reinvent the wheel and writing validation rules over and over again is time-saving but also a task that I would very happily like to avoid on every project. With more than 50 validation rules, Kwes should cover the most scenarios, even the most complicated ones, like handling dates, times, passwords, and file uploads.

When your form is public, there is a high chance that you would get a spam submission. With Kwes, you could get spam protection and even help Kwes learn which messages to filter out.

If you want more control over your form and integrate it with other services like Zapier, you could do it. You could even take advantage of the Kwes API and manage submissions on your own.

## Conclusion

Kwes comes with the cost, but you should think about saving yourself and your team hours of development time. I think it is worth to leave the validation to developers who specialize in this field of area and focus on other parts of your project or business.

[Kwes form builder]: https://kwes.io
[Hexo]: https://hexo.io/
[Hugo]: https://gohugo.io
[Jekyll]: https://jekyllrb.com/
[Kwes official documentation]: https://kwes.io/docs/validation-rules
[the testing mode]: https://kwes.io/docs/form-mode
[on my site]: https://www.silvestar.codes/contact/
[logic for showing or hiding any content on a condition]: https://kwes.io/docs/hide-show-logic
[Kwes API]: https://documenter.getpostman.com/view/7275049/S1ERwd7y?version=latest
