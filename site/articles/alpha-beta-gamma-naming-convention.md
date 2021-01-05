---
title: 'Alpha, Beta, Gamma naming convention'
date: 2018-11-06 21:39:00
tags:
  - blog
categories:
  - css
  - BEM
thumbnail: Alpha_Beta_Gamma_naming_convention-2x_jkluc6.jpg
credit:
  text: John Kappa on Unsplash
  link: https://unsplash.com/photos/Vg6jlsI2mSc
description: A few months ago I started using Alpha, Beta, Gamma naming convention. It began as a temporary thing, but it stuck eventually, and now I am using it all the time.
---

A few months ago I started using Alpha, Beta, Gamma naming convention. It began as a temporary thing, but it stuck eventually, and now I am using it all the time.

<!-- more -->

## Alpha, Beta, Gamma

I am using [BEM] on a daily basis. M stands for modifiers. A modifier represents a variation of an element, generally speaking.

One day, I had a great programming problem: how to name a thing, in my case, a modifier. I could not think of anything constructive, so I just wrote `alpha.` Then I created a new element modification, and named the new modifier `beta.`

When I got back to that particular code to update the names of the modifiers, I realized I like it this way. The names are clean and straightforward, and I knew which class I had to apply to modify the original element. The new naming convention was born.

## Naming variables

After a while, I started using the same with Sass variables. Here is how color variables for my site look:

```
$color-alpha: #12e09f;
$color-beta: #e01258;
$color-gamma: #f5f5f5;
$color-psi: #1f1f1f;
$color-omega: #fff;
```

## Why it works

What is great about using Alpha, Beta, Gamma naming convention is that it separates the context from an element. Also, [the Greek alphabet] is widely used, so the chances that you already know some characters are pretty high.

Let's say we have a `list` component with modifiers `list--red,` `list--green,` and `list--blue` for a list with red, green, and blue elements respectively. At some point, our designer decided to change the brand color from red to pink. Now we need to update the red color to pink, which means our modifier class name `list--red` wouldn't make sense anymore. We need to update the class name to `list-pink.` This situation is a classic problem in the world of CSS.

If we use Alpha, Beta, Gamma convention, we would have these three classes:

- `list--alpha,`
- `list--beta,` and
- `list--gamma.`

Now we could modify the style as we please and our classes wouldn't lose meaning anymore.

## Don't overuse it

There is a potential brain processing overhead here because you have to remember which letter stands for which version of an element. Try to reduce your brain usage by documenting your variables and modifiers and not using too many variations for a single component.

> “Use `psi` and `omega` to name different or completely distinct variables or modifiers.”

Here's a tip for you: use `psi` and `omega` letters (last two letters of the alphabet) to name different or completely distinct variables or modifiers. For example, I am using `color-psi` for text color, and `color-omega` for white color. These are opposites of `color-alpha,` `color-beta,` and `color-gamma` which serves as theme/brand colors in my case.

## Conclusion

Alpha, Beta, Gamma naming convention works for me, and I am using it on all new projects. I am quite sure I haven't invented it, I just wanted to share this approach with you and see what do you think about it.

Do you like this approach? Do you have a different naming convention that you want to share with the community? I would like to hear more about it. 💬

[BEM]: http://getbem.com/
[the Greek alphabet]: https://en.wikipedia.org/wiki/Greek_alphabet
