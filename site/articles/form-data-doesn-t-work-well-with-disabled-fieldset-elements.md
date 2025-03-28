---
layout: default
title: FormData doesn’t include disabled fieldsets
date: 2022-01-13 15:00:00
tags:
  - blog
  - javascript
  - forms
description: Discover the issue with form data and disabled fieldset elements in this comprehensive article. Learn how to effectively handle form data in web dev projects.
type: articles-item
---

When you disable the `fieldset` element **before** reading the form data using the `FormData` constructor, the data will be **empty**.

```js
// Find my form
const $form = document.querySelector('.my-form')
// Find all fieldsets inside my form
const $fieldsets = $form.querySelectorAll('fieldset')

// Set all fieldsets as disabled
if($fieldsets.length) {
  $fieldsets.forEach($fieldset => {
    $fieldset.setAttribute('disabled', true)
  })
}

// Construct FormData from the form
const formData = new FormData($form)

// You cannot log formData directly
console.log(Array.from(formData))

// Output: [] - doesn't work
```

So, if you want to disable the `fieldset` element, you should do it **after** using the `FormData` constructor.

```js
// Find my form
const $form = document.querySelector('.my-form')
// Find all fieldsets inside my form
const $fieldsets = $form.querySelectorAll('fieldset')

// Construct FormData from the form
const formData = new FormData($form)

// You cannot log formData directly
console.log(Array.from(formData))

// Output: [...] - works

// Set all fieldsets as disabled
if($fieldsets.length) {
  $fieldsets.forEach($fieldset => {
    $fieldset.setAttribute('disabled', true)
  })
}
```

Also, if your fields are disabled, they won’t be included in the `FormData`, too.

Here’s a little demo of what works and what doesn’t work.

{% codepen "CiTA" "VwMqaWz" "dark" "result" "550" false true %}
