---
title: Mentorship
comments: false
date: 2019-07-01 13:06:32
description: If you like to be mentored to become a better developer, feel free to contact me.
sidebar: true
mentoring: true
---

Learning new skills or entering web development world in this fast-moving branch could be a daunting task and decision. I have been lucky to start learning web development in a very friendly environment. I have learned all about web development while being mentored, which made the process a lot enjoyable and more relaxed. As I gained more confidence, I was challenged with more complex tasks and problems. Having a person who understands a developer's path has been crucial in my career.

I am here to offer you the same experience. I have been in the web development industry since 2011, and I could help you find your place in it. Are you ready to start the journey with me?

Get to know me by [checking the about page](/about-me/) or [hire me page](/hire-me/).

<div class="kwes-form form" v-cloak>
  <form method="POST" action="https://kwes.io/api/foreign/forms/vbu1VyogUhgQ3qVf73L6" multistep mode="test">
    <form-step header="Step 1">
      <label class="radio">Are you interested in career mentoring or technical mentoring?</label>
      <div class="kw-radio-group" rules="required">
        <input type="radio" name="mentoring" value="1" id="Career" label="Career" checked="checked">
        <input type="radio" name="mentoring" value="2" id="Technical" label="Technical">
      </div>
      <div class="desc">
        <p><small>Career mentoring means I help you make decisions regarding your career.</small></p>
        <p><small>Technical mentoring means I help you gain new skills or improve the current skill level.</small></p>
      </div>
    </form-step>
    <form-step header="Step 2">
      <label for="name">What is your name?</label>
      <input type="text" id="name" name="name" rules="required">
      <label for="email">Please tell me your email address <small>(I would use it only for direct communication)</small>.</label>
      <input type="email" id="email" name="email" rules="required|email|max:255">
      <label for="note">Tell me why I should mentor you?</label>
      <textarea id="note" name="note" rules="required" rows="6"></textarea>
      <div kw-show="fields.mentoring == 2">
        <label for="note2">Tell me which skills do you want to aquire or approve?</label>
        <textarea id="note2" name="note2" rules="required" rows="6"></textarea>
      </div>
    </form-step>
  </form>
</div>
<script src="https://kwes.io/js/kwes.js"></script>
