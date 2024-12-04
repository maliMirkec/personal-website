---
layout: index
title: Recursively includible Angular directive
tags:
  - blog
  - angular
date: 2017-01-07 21:54:57
thumbnail: Recursively_includible_Angular_directive_polzka
description: Recently I worked on an Angular project with a requirement for a form based on an MVC model. I created a directive to generate a form for every complex models.
type: articles-item
sections2:
  - type: banner-beta
    banner: newsletter
---

I've been working on a complex Angular [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)-ish project recently and one of the requirements was to create a form based on an [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) model. This model was not definite and could vary depending on many parameters in the application. As a result, I've created a directive that could generate a form for every complex model. Final code is available on [Github repository](https://github.com/maliMirkec/angular-repeater) and it's called **angular-repeater**.

<!-- more -->

## Digression

Sometimes the amount of new frontend technologies feels really [overwhelming to me](https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f#.h9purwu1w). Everybody is writing about these shinny new frameworks, but there are plenty of applications that are still using "old" technologies (that are not _that_ old). Nobody is writing about them anymore. This is a solution for Angular 1.

## Angular model

Let's go back to the code. Even better, let's consider model examples for this task:

```json
{
  "boolean-true": true,
  "boolean-false": false,
  "string": "This is string.",
  "array-of-strings": ["This is first string.", "This is second string.", "This is third string."],
  "integer-negative": -1,
  "integer-zero": 0,
  "integer-positive": 1,
  "array-of-integers": [-1, 0, 1],
  "float-negative": -1.01,
  "float-zero": 0.00,
  "float-positive": 1.01,
  "array-of-floats": [-1.01, 0, 1.01],
  "object": {
    "label": "This is label",
    "value": 100
  },
  "array-of-objects": [
    {
      "label": "This is first label",
      "value": 100
    },
    {
      "label": "This is second label",
      "value": 200
    },
    {
      "label": "This is third label",
      "value": 300
    }
  ]
}
```

```json
[
  {
    "boolean-true": true,
    "boolean-false": false,
    "string": "This is string.",
    "array-of-strings": ["This is first string.", "This is second string.", "This is third string."],
    "integer-negative": -1,
    "integer-zero": 0,
    "integer-positive": 1,
    "array-of-integers": [-1, 0, 1],
    "float-negative": -1.01,
    "float-zero": 0.00,
    "float-positive": 1.01,
    "array-of-floats": [-1.01, 0, 1.01],
    "object": {
      "label": "This is label",
      "value": 100
    },
    "array-of-objects": [
      {
        "label": "This is first label",
        "value": 100
      },
      {
        "label": "This is second label",
        "value": 200
      },
      {
        "label": "This is third label",
        "value": 300
      }
    ]
  }
]
```

```json
[
  {
    "boolean-true": true
  },
  {
    "boolean-false": false
  },
  {
    "string": "This is string."
  },
  {
    "array-of-strings": ["This is first string.", "This is second string.", "This is third string."]
  },
  {
    "integer-negative": -1
  },
  {
    "integer-zero": 0
  },
  {
    "integer-positive": 1
  },
  {
    "array-of-integers": [-1, 0, 1]
  },
  {
    "float-negative": -1.01
  },
  {
    "float-zero": 0.00
  },
  {
    "float-positive": 1.01
  },
  {
    "array-of-floats": [-1.01, 0, 1.01]
  },
  {
    "object": {
      "label": "This is label",
      "value": 100
    }
  },
  {
    "array-of-objects": [
      {
        "label": "This is first label",
        "value": 100
      },
      {
        "label": "This is second label",
        "value": 200
      },
      {
        "label": "This is third label",
        "value": 300
      }
    ]
  }
]
```

These models contain typical types of data:

* strings,
* integers,
* floats,
* arrays and
* objects.

## Recursion problem

Since we need to iterate through these models to display labels and inputs, we should create at least 3 templates for them because they are formatted differently. That seems like a lot of work. Therefore that doesn't sound like the correct solution. Finally, if we try to iterate a model using **ng-repeat** directive and display every property as an input, we would repeat the code for every property. As a result we'll end up with a bloated and very ugly code.

The solution lies in **recursion**. It is a programming principle when a function calls itself. In our case, we'll use a **recursive-repeater** directive that will call itself.

```html
<div>
  <div ng-if="!IsObject(jsonData)">
    <div class="form-group" ng-if="label">
      <label>{{label}}</label>
      <input class="form-control" type="text" name="{{label}}" value="{{jsonData}}">
    </div>
  </div>
  <div ng-if="IsObject(jsonData)">
    <div ng-repeat="(objKey, objValue) in jsonData track by objKey">
      <div ng-init="indexVar = (IsNumber(objKey) && (!IsObject(objValue))) ? '' : objKey"></div>
      <div ng-init="label2 = label.length > 0 ? label + '[' + indexVar + ']' : objKey"></div>
      <recursive-repeater json-data="objValue" label="label2"></recursive-repeater>
    </div>
  </div>
</div>
```

{% note %}
For now, ignore `IsObject()` and `IsNumber()` functions.
{% endnote %}

If we run this code, we'll get an error. This is because Angular 1 doesn't support recursively included directives out of the box. But there is a solution.

## Recursion helper

The solution is [Mark Lagendijk's RecursionHelper service](https://github.com/marklagendijk/angular-recursion) that makes it possible to have recursive Angular directives.

I've already included this awesome service in **recursive-repeater** directive, like this:

```js
angular.module('Repeater', ['RecursionHelper'])
  .directive('recursiveRepeater', ['RecursionHelper', function (RecursionHelper) {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        jsonData: '=',
        label: '='
      },
      transclude: true,
      templateUrl: './templates/repeater.html',
      compile: function(element) {
        return RecursionHelper.compile(element, function(scope, iElement, iAttrs, controller, transcludeFn){
          scope.IsObject = angular.isObject;
          scope.IsNumber = angular.isNumber;
        });
      }
    };
  }]);
```

As you could see, we're not using **link** property when defining directive, we are using **compile** instead.

This directive works only when **jsonData** is provided via **json-data** attribute. **label** attribute is optional and is used to display label for every input. You could see an example in a previous section.

In addition, there are 2 helper functions in a directive:

* `IsObject()` - used to check model property type and
* `IsNumber()` - used to check if model property key is a number.

### Important notice

The last one is used to decide whether an object property is a regular array. If so, then the name of the input will end with '[]' characters resulting with correctly submitted form. If not, object is provided and the name of the input will be formatted like this: `label[objectKey]`. This is very important when submitting data to server, as many programming languages cannot read form data that is not formatted in fore-mentioned fashion.

## Final thought

There you have it, recursively includible Angular directive.

This particular directive is used to display label and input for every model property. I'm considering to extend this functionality and allow user to define any other output.

I'm also considering to compare this technique with other popular frameworks, like [Vue.js](https://vuejs.org/), [Angular 2](https://angular.io/) and [React](https://facebook.github.io/react/).

Please let me know what do you think, leave a comment bellow or [tweet me](https://twitter.com/malimirkeccita).
