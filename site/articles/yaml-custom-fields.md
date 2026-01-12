---
title: YAML Custom Fields
date: 2026-01-12 11:00:00
description:
tags:
  - blog
  - wordpress
  - plugin
  - yaml
  - custom fields
type: articles-item
layout: default
---

Last year, I worked for a client, [Colours Alliance](/portfolio/colours-alliance/), who needed a custom WordPress theme. As I was preparing to overhaul the previous Elementor-based theme, and as you might already know, [I don't like this kind of tool](/articles/page-builders-might-not-be-a-good-idea/), I wanted to speed up the development process because deadlines were tight.

I came up with the idea to build my own plugin based on YAML schemas that could be used to define custom fields for templates, partials, and global data in WordPress. That's how [YAML Custom Fields](https://wordpress.org/plugins/yaml-custom-fields/) came to life.

## Development

I have to admit that my PHP skills are a bit rusty, even though it was the first programming language I ever learned. To get started, I tested ChatGPT, Gemini, and Claude Code to create the basic version of the plugin. Claude Code was the clear winner, so I decided to go with it.

The first version wasn't very good, but it worked, which allowed me to move quickly with the theme development. However, as we added more templates, the plugin started to grow in complexity. At one point, it introduced many bugs, especially in the admin area.

I decided to rebuild it from the ground up, and I asked Claude Code to come up with a new plan. After a few days, we had a new plugin that was backwards compatible with the initial version. As more features and ideas came along, adding them was easy once the plugin architecture was set up correctly.

But there were still issues, especially when I decided to publish the plugin on the WordPress Plugin Directory. The plugin was rejected with many errors, so I had to figure out a new approach.

First, I learned how to scope Composer libraries. Then, I learned how to sanitize input fields and implement nonces to improve security.

Finally, I added a GitHub Action that published new tags as versions directly to the Plugin Directory.

None of these tasks were familiar to me, but with a bit of learning and fine-tuning, Claude Code delivered the stable code.

{% note %}
I am aware of other custom fields plugins, but most were too broad for our case.
{% endnote %}

## Usage

YAML Custom Fields is inspired by [Pages CMS](https://pagescms.org/) (and [Decap CMS](https://decapcms.org/), formerly known as Netlify CMS), where you can define a YAML schema, and it generates the fields you need to populate in your template.

Let's say you have a hero section on your homepage template and you need to configure the hero title, image, and tags.

```yaml
fields:
  - name: hero_title
    label: Hero Title
    type: string
    required: true
    options:
      maxlength: 100
  - name: hero_image
    label: Hero Image
    type: image
  - name: hero_tags
    label: Tags
    type: taxonomy
    multiple: true
    options:
      taxonomy: post_tag
```

This will display the input fields in your homepage template, and you can output the saved values like this:

```php
<?php
$hero_title = ycf_get_field('hero_title');
$hero_image = ycf_get_image('hero_image');
$hero_tags = ycf_get_term('hero_tags');
?>

<div class="hero">
  <div class="hero__image">
    <img
      src="<?php echo esc_url($hero_image['url']); ?>"
      alt="<?php echo esc_attr($hero_image['alt']); ?>"
      width="<?php echo esc_attr($hero_image['width']); ?>"
      height="<?php echo esc_attr($hero_image['height']); ?>"
    >
  </div>
  <div class="hero__content">
    <h1><?php echo esc_html($hero_title); ?></h1>
    <ul>
      <?php foreach ($hero_tags as $hero_tag): ?>
        <li><?php echo esc_html($hero_tag); ?></li>
      <?php endforeach; ?>
    </ul>
  </div>
</div>
```

{% note %}
The PHP checks are omitted for clarity.
{% endnote %}

It was quite straightforward to configure the fields for our templates, and it turned out to be a highly efficient solution for our deadline issues.

## Additional features

YAML Custom Fields allows you to define global data for reuse in your templates. We defined universities as global data, which enabled us to reuse the same information throughout the site. This feature alone made it worthwhile to build a new plugin.

We also added support for a global schema, which acts as global settings, as well as schemas for template partials and archives. These entities can be difficult to configure without extra effort, but now you can define a custom schema, fill out the fields, and use the data in your custom partials (like the header and footer) and templates (like blog post archives or taxonomy templates).

But the features that made this plugin even more usable are exports and imports. You can export and import all settings and data with a single click. There is even a data validator that shows you if imports are broken (for example, if image IDs are mismatched).

## Conclusion

If you want a WordPress plugin that will allow you to speed up your theme development, then [YAML Custom Fields](https://wordpress.org/plugins/yaml-custom-fields/) is the plugin for you.

It works great with AI assistants, especially because the plugin comes with extensive documentation.

I'm open to suggestions or code contributions, so feel free to [check the source code on GitHub](https://github.com/maliMirkec/yaml-custom-fields).
