---
layout: index
title: Angular dragtable
tags:
  - blog
  - angular
date: 2017-02-03 12:41:54
thumbnail: Angular_dragtable_ri1u0a
description: Explore how to implement drag and drop functionality for tables with large amount of row in Angular with the Angular Dragtable library.
type: articles-item
sections2:
  - type: banner-beta
    banner: newsletter
---

**Angular dragtable** is an Angular directive that allows table column reorder.

I've been searching for a similar solution, including JavaScript libraries, jQuery plugins or Angular directives. I've tested various solutions, but nothing worked as expected. So I decided to create brand new directive.

<!-- more -->

The package is available [here](https://github.com/maliMirkec/angular-dragtable).

## Angular dragtable events

**Angular dragtable** uses _drag_ events. [_Drag_ events](https://developer.mozilla.org/en-US/docs/Web/API/DragEvent) are around for a while and have a pretty good support. There are some issues, but nothing that cannot be solved. It should be noted that the _drag_ events do not work on mobile devices. Although I thought about implementing mobile support using [touch events](https://developer.mozilla.org/en/docs/Web/API/Touch_events) or excellent [jQuery UI Touch Punch](http://touchpunch.furf.com/) plugin, I give up at the end. This feature is not crucial on mobile devices. Even if I did provide mobile implementation, it could be really hard to use this feature.

The main idea of **Angular dragtable** directive is to reorder the table columns by dragging table header cell. We have to listen when _drag_ event starts and when it ends. When dragging occurs we should display _ghost_ floating table column as a current position indicator. **Angular dragtable** actually contains 2 directives, one for _draggable_ elements and one for _droppable_ elements. A full code could be found [here](https://github.com/maliMirkec/angular-dragtable/blob/master/angular-dragtable.js).

## Dragging

If we want to enable _draggable_ events on header cell, we should add `drag-me` directive by providing it via attribute name. There are 3 main _drag_ events:

* `dragstart` - fires when a _drag_ event start;
* `drag` - fires during _drag_ event;
* `dragend` - fires when a _drag_ event ends.

On `dragstart` event, we want to remove every _ghost_ elements that are left behind and create new _ghost_ elements for current column.
Actual dragging fires `drag` event on which we want to move _ghost_ column when we move the mouse. It is always a great idea to set the _timeout_ on events that occur every few hundred milliseconds.
And finally, we will use `dragend` event to remove _ghost_ column.

## Dropping

Dropping events allow us to reorder columns by listening when _ghost_ column is over the current column. To enable _droppable_ events on header cell, we should add `drop-me` directive. For this purpose, we should use `dragover` event. This event fires when _draggable_ element is over _droppable_ element.

On `dragover` event, we want to determine a direction of dragging event and append _ghost_ column before or after current column. This means that we don't need to listen to `drop` event because we are responding with a live action on `dragover` event. That is desirable effect as we want to avoid unnecessary events. Again, we should set _timeout_ here, just like we did on `drag` event.

## The usage

To install **Angular dragtable**, clone the repository from Github or use bower installer: `bower install **angular-dragtable**`.

Include **Angular dragtable** in your project.

```js
(function (DemoApp) {
  'use strict';

  DemoApp = angular.module('DemoApp', ['Dragtable']);

  DemoApp.config(function () {});
}(this));
```

To enable reorder of table header cells, use `drag-me` and `drop-me` directives.

```html
<table>
  <thead>
    <tr>
      <th>ID</th>
      <th drag-me drop-me>Name</th>
      <th drag-me drop-me>Description</th>
      <th drag-me drop-me>Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Item 1</td>
      <td>Description 1</td>
      <td>1</td>
    </tr>
    ...
  </tbody>
</table>
```

If you want to use a custom handle for _drag_ events, you should provide selector via `data-handle` attribute.

```html
<th drag-me drop-me data-handle=".my-handle">
  <span class="my-handle drag-icon"></span> Column name
</th>
```

Be sure to place handle element inside header cell.

To make **Angular dragtable** more performant, especially when using a large table, we should use `data-limit` option. When this option is provided, a number of _ghost_ column elements are limited. That means less iteration during `drag` event.

```html
<th drag-me drop-me data-limit="50"><th>
```

## Conclusion

In this article, I wanted to provide detailed insight of the creation process of this Angular directive.

I really enjoyed building it and I'm hoping you will enjoy using it.

Share your thoughts by commenting on this article or [tweet me](https://twitter.com/malimirkeccita).
