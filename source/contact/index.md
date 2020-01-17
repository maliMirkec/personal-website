---
title: Contact Me
comments: false
date: 2019-07-01 13:06:32
description: Feel free to contact me. I am always open for a new discussion or a potential collaboration.
sidebar: true
contact: true
---

Hi friend,

I guess you wanted to talk to me. Feel free to fill the following form, and I promise I will get back to you as soon as possible.

I look forward to talking to you about anything:

- possible collaboration, or
- a new project, or
- [mentoring](/mentoring/), or
- anything else really.

<div class="kwes-form form" v-cloak>
  <form method="POST" action="https://kwes.io/api/foreign/forms/ShfiSzjg5kszxStJ0zWd" multistep mode="test">
    <form-step header="Step 1">
      <label class="radio">General or mentoring</label>
      <div class="kw-radio-group">
        <input type="radio" name="step" value="General" id="General" label="General" checked="checked">
        <input type="radio" name="step" value="Mentoring" id="Mentoring" label="Mentoring">
      </div>
    </form-step>
    <form-step header="Step 2.1">
      <div kw-show="fields.step == 'Mentoring'">
        <label class="radio">Are you interested in career mentoring or technical mentoring?</label>
        <div class="kw-radio-group">
          <input type="radio" name="mentoring" value="Career" id="Career" label="Career" checked="checked">
          <input type="radio" name="mentoring" value="Technical" id="Technical" label="Technical">
        </div>
        <div class="desc">
          <p><small>Career mentoring means I help you make decisions regarding your career.</small></p>
          <p><small>Technical mentoring means I help you gain new skills or improve the current skill level.</small></p>
        </div>
      </div>
      <label for="Name">What is your name?</label>
      <input type="text" id="Name" name="name" rules="required">
      <label for="Email">Please tell me your email address <small>(I would use it only for direct communication)</small>.</label>
      <input type="email" id="Email" name="email" rules="required|email|max:255">
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
</div>
<script src="https://kwes.io/js/kwes.js"></script>
