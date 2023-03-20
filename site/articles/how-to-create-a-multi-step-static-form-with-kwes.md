---
layout: index
title: How to create a multi-step form the easy way
date: 2020-02-08 05:39:43
tags:
  - blog
  - publications
  - spg
  - ssg
  - kwes
publication: DEV.to
canonical: https://dev.to/starbist/how-to-create-a-multi-step-form-the-easy-way-51cp
thumbnail: How_to_create_a_multi-step_form_the_easy_way_eas7lb
description: Transform your long form into a manageable, user-friendly experience with this step-by-step tutorial on how to create a multi-step form.
type: articles-item
sections2:
  - type: banner-beta
    banner: newsletter
---



Recently I wanted to add a multi-step form to my site. Since my site runs on Hexo, a static page generator, I had some doubts about how to execute this task. I already had a static form on my site, and I didn’t want to spend too much time on the development of features like steps, show/hide logic or validation.

I was delighted to learn that [Kwes now offers a multi-step form functionality]. Before I tell you how I did it, let’s see what a multi-step form, sometimes also referred to as multi-page form, is.

<!-- more -->

## A multi-step form

A multi-step form is a long-form that is broken into pieces. The reason for doing this is to make the form easier to complete. Each step represents grouped inputs that are related to each other, so users are not frightened by the length of the form. It might be more comfortable for users to fill the information step by step because their minds should process fewer fields at the time.

You might have seen multi-steps forms on checkout or shipping forms. Multi-steps forms are also used for wizards such as signing up forms, and there is an increased appearance of multi-step login forms recently. These are just common scenarios when to use them, but every longer form could be broken into pieces.

{% note "Tip" %}
Before switching to a multi-step form, you might want to make A/B tests to make sure your conversion rate doesn’t drop.
{% endnote %}

The conversion rate is one of the most substantial benefits of a multi-step form. It is believed that multi-step forms have a better conversion rate. Other benefits include the first impression, which is less overwhelming to users, and progress bars, which encourage users to proceed with the form.

All these benefits should be taken with reserve. Without real numbers, you cannot know for sure. A single-step form with many input fields is often considered as a significant obstacle for most users. As a trade-off, you should reduce the number of inputs which might not be ideal.

## Adding a multi-step form with Kwes

Kwes documentation makes it quite straightforward to follow and to create a multi-step form.

Before that, let’s refresh our memory [how to add the static form using Kwes]:

- Add a website from the Kwes dashboard.
- Add a form from the Kwes dashboard.
- Add required `script` tag before the closing `body` tag: `<script src="https://kwes.io/js/kwes.js"></script>`.
- Add the wrapper element with the required `kwes-form` class.
- Add the `form` element with the `action` URL provided in the Kwes dashboard.
- Add the `input` fields and validation rules.

Here’s how the code looks for now:

```html
<html>
  <body>
    <div class="kwes-form">
      <form method="POST" action="path/to/kwes">
        // form code
      </form>
    </div>
    <script src="https://kwes.io/js/kwes.js"></script>
  </body>
</html>
```

To enable a multi-step form, I have added the `multi-step` attribute to the `form` element.

{% note %}
I had to add `true` value to the `multi-step` attribute to make my HTML linter happy.
{% endnote %}

Next, I have divided the form into steps by wrapping related inputs with `form-step` elements. That’s it! To make a multi-step form with Kwes, all you need to do is to add a single wrapper div to every step. I never knew it would be that easy.

My form has only two steps, so I have only two `form-step` elements. On the first step, I am asking a question about the contact type, and on the next step, I am gathering contact information.

```html
<div class="kwes-form">
  <form method="POST" action="path/to/kwes" multistep="true">
    <form-step>
      // form code
    </form-step>
    <form-step>
      // form code
    </form-step>
  </form>
</div>
```

Of course, that’s not all. Kwes is packed with other impressive features. These are the ones that I included in my form:

- custom headers,
- custom styling,
- cloaking,
- logic visibility toggling, and
- [animated SVG progress bar].

### Custom headers

{% cldnry "Multi_step_form_example_fykjm0" "A multi-step form example." %}

Kwes provides adding custom headers to each step—a title of the current step. There are two types of headers: simple and complex.

Simple headers are used for textual headers. I have added simple headings to my form.

```html
<form-step heading="1. Contact type">
  // form code
</form-step>
<form-step heading="2. Contact information">
  // form code
</form-step>
```

If you like to add icons, graphics or anything other than just title text, then you could use a complex header. All of the custom header content should be added inside `<div slot="heading"></div>` element. It is advisable to place this element as a first child of the `form-step` element.

### Custom styling

Adding custom styling to Kwes forms are quite straightforward. You could use classes with `kw-` prefix to add custom styling.

For example, you could use `kw-multistep-footer` class to customize the step section footer, as I did on my site.

### Cloaking

I have used [the cloaking technique] provided by Kwes to hide the uncompiled form. That means the form wouldn’t be visible until it is compiled by Kwes JavaScript file. To do this, add `v-cloak` attribute to the `kwes-form` wrapper element and then use the following CSS snippet to hide the form:

```css
[v-cloak] {
  display: none;
}
```

### Logic visibility toggling

Another great feature of Kwes form builder is the ability to toggle the visibility of an input field based on other field values. This show/hide logic behaviour is what I needed to create the second step dynamically. The visibility is achieved by adding `kw-show` attribute to the element. In my case, I am hiding mentoring related fields if the contact type is “General”.

```html
<div kw-show="fields.step == 'Mentoring'">...</div>
```

### Animated SVG progress bar

Progress bars often help users understand how much steps are left until the submission. Since this element only serves as a visual indicator, I decided to make [a little SVG that is animated] on click. The animation is a CSS animation of the stroke of the SVG path.

![Animated SVG progress bar.](https://res.cloudinary.com/starbist/image/upload/c_thumb,w_200,g_face/v1580360464/ping-pong_sxrlf7.gif)

Here’s the complete form, including the SVG and JavaScript code:

```html
<div class="kwes-form form" v-cloak="true">
  <svg class="steps" viewBox="0 0 850 250" xmlns="http://www.w3.org/2000/svg">
    <path d="m225 125c0 50-50 100-100 100s-100-50-100-100 50-100 100-100 100 50 100 100h400c0-50 50-100 100-100s100 50 100 100-50 100-100 100-100-50-100-100" fill="none" stroke="#f5f5f5" stroke-linecap="round" stroke-linejoin="round" stroke-width="50"/>
    <path class="steps__path" d="m225 125c0 50-50 100-100 100s-100-50-100-100 50-100 100-100 100 50 100 100h400c0-50 50-100 100-100s100 50 100 100-50 100-100 100-100-50-100-100" fill="none" stroke="#12e09f" stroke-linecap="round" stroke-linejoin="round" stroke-width="50"/>
  </svg>
  <form method="POST" action="path/to/kwes" multistep="true">
    <form-step heading="1. Contact type">
      <label class="radio">What kind of inquiry are you interested in?</label>
      <div class="kw-radio-group">
        <input id="General" type="radio" name="step" value="General" label="General" checked="checked" />
        <input id="Mentoring" type="radio" name="step" value="Mentoring" label="Mentoring" />
    </div>
    </form-step>
    <form-step heading="2. Contact information">
      <div kw-show="fields.step == 'Mentoring'">
        <label class="radio">Are you interested in career mentoring or technical mentoring?</label>
        <div class="kw-radio-group">
          <input id="Career" type="radio" name="mentoring" value="Career" label="Career" checked="checked" />
          <input id="Technical" type="radio" name="mentoring" value="Technical" label="Technical" />
        </div>
        <div class="desc">
          <p><small>Career mentoring means I help you make decisions regarding your career.</small></p>
          <p><small>Technical mentoring means I help you gain new skills or improve the current skill level.</small></p>
        </div>
      </div>
      <label for="Name">What is your name?</label>
      <input id="Name" type="text" name="name" rules="required" />
      <label for="Email">Please tell me your email address<small>(I would use it only for direct communication)</small>.</label>
      <input id="Email" type="email" name="email" rules="required|email|max:255" />
      <div kw-show="fields.step == 'Mentoring'">
        <label for="Note">Tell me why I should mentor you?</label>
      </div>
      <div kw-show="fields.step != 'Mentoring'">
        <label for="Note">What is your message?</label>
      </div>
      <textarea id="Note" name="note" rules="required" rows="6"></textarea>
      <div kw-show="fields.mentoring == 'Technical'">
        <label for="Note2">Tell me which skills do you want to aquire or approve?</label>
        <textarea id="Note2" name="note2" rules="required_if:mentoring,Technical" rows="6"></textarea>
      </div>
    </form-step>
  </form>
  <script>
  document.addEventListener('click', function (e) {
    for (var target = e.target; target && target !== this; target = target.parentNode) {
      if (target.matches('.kw-multistep-button')) {
        var $form = document.querySelector('.form');

        if (target.classList.contains('kw-multistep-button-next')) {
          $form.classList.remove('step1');
          $form.classList.add('step2');
        }

        if (target.classList.contains('kw-multistep-button-previous')) {
          $form.classList.remove('step2');
          $form.classList.add('step1');
        }

        break;
      }
    }
  }, false);
  </script>
</div>
```

## Conclusion

I have noticed one extra benefit—far fewer spams. Other benefits of adding a multi-step form using Kwes are:

- I didn’t have to spend too much time on design,
- I didn’t have to spend too much time on validation, and
- I didn’t have to spend too much time on development.

With Kwes, everything is so easy and works as expected. You should give it a try.

Update: I decided to switch to a different provider, but only for convenience reasons.

[Kwes now offers a multi-step form functionality]: https://kwes.io/docs/multistep-forms
[how to add the static form using Kwes]: https://dev.to/starbist/how-to-add-a-contact-form-to-a-static-website-2oji
[animated SVG progress bar]: https://dev.to/starbist/animated-wizard-progress-23li
[a little SVG that is animated]: https://dev.to/starbist/animated-wizard-progress-23li
[the cloaking technique]: https://kwes.io/docs/form-components
