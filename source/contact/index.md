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
      <div class="kw-radio-group" rules="required">
        <input type="radio" name="step" value="1" id="General" label="General" checked="checked">
        <input type="radio" name="step" value="2" id="Mentoring" label="Mentoring">
      </div>
    </form-step>
    <form-step header="Step 2.1">
      <div kw-show="fields.step != 2">
        <label for="GeneralName">What is your name?</label>
        <input type="text" id="GeneralName" name="general_name" rules="required_if:step,1">
        <label for="GeneralEmail">Please tell me your email address <small>(I would use it only for direct communication)</small>.</label>
        <input type="email" id="GeneralEmail" name="general_email" rules="required_if:step,1|email|max:255">
        <label for="GeneralNote">What is your message?</label>
        <textarea id="GeneralNote" name="general_note" rules="required_if:step,1" rows="6"></textarea>
      </div>
      <div kw-show="fields.step == 2">
        <label class="radio">Are you interested in career mentoring or technical mentoring?</label>
        <div class="kw-radio-group">
          <input type="radio" name="mentoring" value="1" id="Career" label="Career" checked="checked">
          <input type="radio" name="mentoring" value="2" id="Technical" label="Technical">
        </div>
        <div class="desc">
          <p><small>Career mentoring means I help you make decisions regarding your career.</small></p>
          <p><small>Technical mentoring means I help you gain new skills or improve the current skill level.</small></p>
        </div>
        <label for="MentoringName">What is your name?</label>
        <input type="text" id="MentoringName" name="mentoring_name" rules="required_if:step,2">
        <label for="MentoringEmail">Please tell me your email address <small>(I would use it only for direct communication)</small>.</label>
        <input type="email" id="MentoringEmail" name="mentoring_email" rules="required_if:step,2|email|max:255">
        <label for="MentoringNote">Tell me why I should mentor you?</label>
        <textarea id="MentoringNote" name="mentoring_note" rules="required_if:step,2" rows="6"></textarea>
        <div kw-show="fields.mentoring == 2">
          <label for="MentoringNote2">Tell me which skills do you want to aquire or approve?</label>
          <textarea id="MentoringNote2" name="mentoring_note2" rules="required_if:step,2" rows="6"></textarea>
        </div>
      </div>
    </form-step>
  </form>
</div>
<script src="https://kwes.io/js/kwes.js"></script>
