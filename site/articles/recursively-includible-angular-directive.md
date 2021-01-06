---
layout: index
title: Recursively includible Angular directive
tags:
  - blog
categories:
  - angular
date: 2017-01-07 21:54:57
thumbnail: Recursively-includible-Angular-directive_wu42od
description: I've been working on a complex Angular CRUD-ish project recently and one of the requirements was to create a form based on an MVC model. I've created a directive that could generate a form for every complex model.
---

I've been working on a complex Angular [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)-ish project recently and one of the requirements was to create a form based on an [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) model. This model was not definite and could vary depending on many parameters in the application. As a result, I've created a directive that could generate a form for every complex model. Final code is available on [Github repository](https://github.com/maliMirkec/angular-repeater) and it's called **angular-repeater**. Demo is available [here](https://frontend-developer.xyz/angular-repeater/).

<!-- more -->

## Digression

Sometimes the amount of new frontend technologies feels really [overwhelming to me](https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f#.h9purwu1w). Everybody is writing about these shinny new frameworks, but there are plenty of applications that are still using "old" technologies (that are not _that_ old). Nobody is writing about them anymore. This is a solution for Angular 1.

## Angular Model

Let's go back to the code. Even better, let's consider model examples for this task:

{% cldnry "first-model-for-angular-repeater_bmsaac" "First model for angular repeater." %}

{% cldnry "second-model-for-angular-repeater_lxgczj" "Second model for angular repeater." %}

{% cldnry "third-model-for-angular-repeater_dsleyg" "Third model for angular repeater." %}

These models contain typical types of data:

*   strings,
*   integers,
*   floats,
*   arrays and
*   objects.

## Recursion problem

Since we need to iterate through these models to display labels and inputs, we should create at least 3 templates for them because they are formatted differently. That seems like a lot of work. Therefore that doesn't sound like the correct solution. Finally, if we try to iterate a model using **ng-repeat** directive and display every property as an input, we would repeat the code for every property. As a result we'll end up with a bloated and very ugly code.

The solution lies in **recursion**. It is a programming principle when a function calls itself. In our case, we'll use a **recursive-repeater** directive that will call itself.

{% cldnry "angular-repeater-template_pzfvoq" "Template for angular repeater." %}

_For now, ignore IsObject() and IsNumber() functions._

If we run this code, we'll get an error. This is because Angular 1 doesn't support recursively included directives out of the box. But there is a solution.

## Recursion helper

The solution is [Mark Lagendijk's RecursionHelper service](https://github.com/marklagendijk/angular-recursion) that makes it possible to have recursive Angular directives.

I've already included this awesome service in **recursive-repeater** directive, like this:

{% cldnry "angular-repeater-directive_rkx8sy" "Angular repeater directive." %}

As you could see, we're not using **link** property when defining directive, we are using **compile** instead.

This directive works only when **jsonData** is provided via **json-data** attribute. **label** attribute is optional and is used to display label for every input. You could see an example in a [previous section](#AngularRepeaterTemplate).

In addition, there are 2 helper functions in a directive:

*   IsObject() - used to check model property type and
*   IsNumber() - used to check if model property key is a number.

### Important notice

The last one is used to decide whether an object property is a regular array. If so, then the name of the input will end with '[]' characters resulting with correctly submitted form. If not, object is provided and the name of the input will be formatted like this: `label[objectKey]`. This is very important when submitting data to server, as many programming languages cannot read form data that is not formatted in fore-mentioned fashion.

## Final thought

There you have it, recursively includible Angular directive.

This particular directive is used to display label and input for every model property. I'm considering to extend this functionality and allow user to define any other output.

I'm also considering to compare this technique with other popular frameworks, like [Vue.js](https://vuejs.org/), [Angular 2](https://angular.io/) and [React](https://facebook.github.io/react/).

Please let me know what do you think, leave a comment bellow or [tweet me](https://twitter.com/malimirkeccita).
