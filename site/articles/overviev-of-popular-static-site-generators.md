---
layout: index
title: Overview of Popular Static Site Generators
date: 2018-08-07 13:00:33
tags:
  - blog
  - publications
  - spg
  - ssg
  - hexo
  - hugo
  - middleman
  - jekyll
publication: Toptal
canonical: https://www.toptal.com/front-end/static-site-generators-comparison-2018
thumbnail: Overview_of_Popular_Static_Site_Generators_fpv8q9
description: There are many obvious benefits to serving a static HTML file, such as easier caching, faster load times, and a more secure environment overall. Each static page generator produces the HTML output differently.
type: articles-item
sections2:
  - type: banner-alpha
    title: I am considering new projects for the 2022.
    desc: I specialized in **HTML**, **CSS**, **JavaScript**, **WordPress**, **Shopify**, and **JAMstack** technologies.
    cta:
      href: /contact/
      title: Hire me
---

All static page generators have a single and seemingly straightforward task: to produce a static HTML file and all its assets.

There are many obvious benefits to serving a static HTML file, such as easier caching, faster load times, and a more secure environment overall. Each static page generator produces the HTML output differently.

<!-- more -->

{% cldnry "Static_site_generators_illustrated_echczp" "Static site generators illustrated." %}

However, the purpose of this post is not to dive in and discuss the intricacies of their mechanism, but to compare the feature set each framework offers and highlight the unique aspects and features of every framework.

## Overview of Popular Static Page Frameworks

In this post, we will take a closer look at the following static page frameworks: Jekyll, Middleman, Hugo, and Hexo. These are by no means the only generators out there, but they are the most commonly used ones, backed by large communities and lots of useful resources.

Let's take a closer look at each of them and compare their basic features:

- Jekyll
  - written in Ruby,
  - supports the Liquid template engine out of the box;
- Middleman
  - written in Ruby,
  - supports ERB and Haml template engines out of the box;
- Hugo
  - written in Go,
  - supports Go template engine out of the box;
- Hexo
  - written in JavaScript,
  - supports EJS and Pug out of the box.

Note: _It is worth pointing out that each of these static page generators can be customized and extended using plugins and extensions, allowing you to cover most or all of your needs._

## Setting up Static Site Generators

The documentation for each of these frameworks is comprehensive and nothing short of excellent and you can grab it here:

[Jekyll documentation]

[Middleman documentation]

[Hugo documentation]

[Hexo documentation]

If you simply follow the installation guides, you should have the development environment ready within a matter of minutes. Once installed, you can start a new project by running commands from the terminal.

For example, this is how you start a new project in different frameworks:

**Jekyll**

```bash
jekyll new my_website
```

**Middleman**

```bash
middleman init my_website
```

**Hugo**

```bash
hugo new my_website
```

**Hexo**

```bash
hexo init my_website
```

## Configuration
Configuration is usually stored in a single file. Each static website generator has its specifics, but many settings are the same across all four.

You could specify where are source files stored or where to output built sources. It is always useful to skip data that will not be used in the build process by setting exclude or `skip_render` option. You could also use the config file to store global settings like project title or the author.

## Migrating to a Static Generator

If you already have a WordPress project ready to go, you can migrate it to a static page generator with relative ease.

For Jekyll, you could [Jekyll Exporter] plugin. For Middleman, you could use a command line tool called [wp2middleman]. You can use WordPress to Hugo Exporter for Hugo migration, and for Hexo, you could read a [guide on how to migrate from WordPress to Hexo] that I wrote last year.

The principle is nearly identical and quite straightforward—first export all content to a suitable format, and then include it in the right folder.

## Content
Static page generators use [Markdown] for the main content. Markdown is powerful and one can learn it quickly. Writing content in Markdown feels natural because of its simple syntax. The document looks clean and organized.

{% cldnry "Content_in_Static_page_generators_cnkviv" "Content in Static page generators." %}

You should place articles in a folder specified in the global configuration file. Article names should follow convention specified by the generator.

In Jekyll, you should place an article in the _posts directory. Article name should have the following format: YEAR-MONTH-DAY-title.MARKUP. Other generators have similar rules, and they provide a command for creating a new article.

Here are the commands for creating a new article in Middleman, Hugo, and Hexo:

**Middleman**

```bash
middleman article my_article
```

**Hugo**

```bash
hugo new posts/my_article.md
```

**Hexo**

```bash
hexo new post my_article
```

In Markdown, you are limited to a particular set of syntax. Luckily for us, all generators can process raw HTML as well. For example, if you want to add an anchor with a specific class, you could add it as you would in a regular HTML file:

```text
This is a text with <a class="my-class" href="#">a link</a>.
```

## Front Matter

Front matter is a block of data on top of the Markdown file. You could set custom variables to store the data you need to create better content. Instead of writing HTML in Markdown, which could lead to a cluttered and ugly document structure, you could define a variable in the front matter.

For example, this is how you could add tags to your article.

```md
tags:
  - web
  - dev
  - featured
```

## Templates in Static Page Generators

Static page generators use a templating language to process templates. To insert data into a template, you need to use tags. For example, to display the page title in Jekyll, you could write:

```html
{{ page.title }}
```

Let's try to display a list of tags from the front matter in our post in Jekyll. You need to check if a variable is available. Then, you need to loop through tags and display them in an unordered list.

```html
{%- if page.tags -%}
 <ul>
   {%- for tag in page.tags -%}
     <li>{{ tag }}</li>
   {%- endfor -%}
 </ul>
{%- endif -%}
```

**Middleman**

```html
<% if current_page.data.tags %>
 <ul>
   <% for tag in current_page.data.tags %>
     <li><%= tag %></li>
   <% end %>
 </ul>
<% end %>
```

**Hugo**

```html
{{ if .Params.Tags }}
 <ul>
   {{ range .Params.Tags }}
     <li>{{ . }}</li>
   {{ end }}
 </ul>
{{ end }}
```

**Hexo**

```html
<% if (post.tags) { %>
 <ul>
   <% post.tags.forEach(function(tag) { %>
     <li><%= tag.name %></li>
   <% } ); %>
 </ul>
<% } %>
```

Note: _It is a good practice to check if a variable exists to prevent a build process from failing. It could save you hours of debugging and testing._

## Using Variables

A static page generator provides global variables available for handing in templates. Different variable type holds different information. For example, a global variable site in Hexo holds information about posts, pages, categories, and tags of a site.

Knowing the available variables and how to use them could make a developer's life easier. Hugo uses Go's template libraries for templating. Working with variables in Hugo could be a problem if you are not familiar with [the context], or “the dot” how they call it.

Middleman doesn't have global variables. However, you could turn on the [middleman-blog] extension that would allow you to get access to some variables, like a list of articles. If you want to add global variables, you could do that by extracting data to data files.

## Data Files

When you want to store data that are not available in Markdown files, you should use data files. For example, if you need to save the list of your social links that you want to display in the footer of your site. All static page generators support YAML and JSON files. Additionally, Jekyll supports CSV files, and Hugo supports TOML files.

Let's store those social links in our data file. Since all generators support YAML format, let's save the data in the social.yml file:

```md
- name: Twitter
  href: https://twitter.com/malimirkeccita
- name: LinkedIn
  href: https://github.com/maliMirkec/
- name: GitHub
  href: https://www.linkedin.com/in/starbist/
```

Jekyll stores data files in _data directory by default. Middleman and Hugo use data directory, and Hexo uses `source/_data directory`.

To output the data, you could use the following code:

**Jekyll**

```html
{%- if site.data.social -%}
 <ul>
   {% for social in site.data.social %}
     <li><a href="{{ social.href }}">{{ social.name }}</li>
   {%- endfor -%}
 </ul>
{%- endif -%}
```

**Middleman**

```html
<% if data.social %>
 <ul>
   <% data.social.each do |s| %>
     <li><a href="<%= s.href %>"><%= s.name %></li>
   <% end %>
 </ul>
<% end %>
```

**Hugo**

```html
{{ if $.Site.Data.social }}
 <ul>
   {{ range $.Site.Data.social }}
     <li><a href="{{ .href }}">{{ .name }}</a></li>
   {{ end }}
 </ul>
{{ end }}
```

**Hexo**

```html
<% if (site.data.social) { %>
 <ul>
   <% site.data.social.forEach(function(social){ %>
     <li><a href="<%= social.href %>"><%= social.name %></a></li>
   <% }); %>
 </ul>
<% } %>
```

## Helpers

Templates often support data filtering. For example, if you want to make the title uppercase, you could do it like so:

```html
{{ page.title | upcase }}
```

Middleman has similar syntax:

```html
<%= current_page.data.title.upcase %>
```

Hugo uses the following command:

```html
{{ .Title | upper }}
```

Hexo has different syntax, but the result is the same.

```html
<%= page.title.toUpperCase() %>
```

## How Static Page Generators Handle Assets

Asset management is handled differently across static page generators. Jekyll compiles assets files wherever they are placed. Middleman handles only assets stored in source folder. The default location for assets in Hugo is assets directory. Hexo suggests placing assets in global sourcedirectory.

{% cldnry "Assets_of_Static_page_generator_i43ch9" "Assets of Static page generator." %}

## SASS

Jekyll supports Sass out of the box, but you should follow [some rules]. Middleman also supports Sass out of the box. Hugo compiles Sass through [Hugo Pipes for Sass]. Hexo does it via [plugin].

## ES6

If you want to use modern JavaScript features of es6, then you should install a plugin. There might be more than one version of a similar plugin, so you might want to check the code or see open issues or latest commit to finding the best one.

## Images

Image optimization is not supported by default either. Also, like es6 plugins, there is more than one plugin to optimize images. Do your homework and try to find the best plugin for the job. Alternatively, you could use a third party solution. In my blog that is build with Hexo, I am using [Cloudinary free plan]. I developed a [cloudinary tag], and I am providing responsive and optimized images via Cloudinary transformations.

## Plugins, Extensions

Static page generators have potent libraries that allow you to customize your website. Each plugin serves a different purpose. You could find a wide range of plugins, from LiveReload for a better development environment to generating Sitemap or RSS feed.

You could write a new plugin or extension. Before you do, check if a similar plugin exists. See [Jekyll plugin list], [Middleman extensions], and [Hexo plugins]. Hugo doesn't have plugins or extensions. However, it does support custom shortcodes.

## Shortcodes in Markdown
Shortcodes are code snippets that you could place in Markdown documents. Those snippets output HTML code. Hugo and Hexo support shortcodes. There are built-in shortcodes, like figure in Hugo:

```html
{{< figure src="/lint/to/image.jpg" title="My image" >}}
```

Hexo youtube shortcode:

```html
{% youtube video_id %}
```

If you cannot find a proper shortcode, you could create a new one. For example, Hexo doesn't support CanIUse embeds, and I developed [a new tag] that supports CanIUse embedding. Don't forget to publish your plugin on npm or official generator site. The community will be grateful if you do.

## CMS

Static page generators could be overhead for a non-technical person. Learning how to use commands or Markdown is not something that is easy for everybody. In that case, a user could benefit from [Content Management System for JAMstack sites]. In this list, you could find a system that best suits your needs. Know that it takes some time to configure the CMS, but longterm you and other users could benefit from publishing content more efficiently.

## Bonus: JAMstack Templates

If you don't want to spend too much time on configuring your project, you could benefit from [JAMstack templates]. Some of these templates are already preconfigured with CMS which could save you much time.

You could also learn a lot by examining the code. Try to install a template, compare it to others and choose the best one for you.

## Wrapping Up

Static page generators are a fast and reliable way to build a website. You can even build non-trivial and highly customized websites with a generator nowadays.

For example, [Smashing Magazine] moved to JAMstack last year, and they managed to speed up their site significantly. There are other successful examples of static websites and they all share the same principle—to produce static resources and deliver them over Content Delivery Networks for faster loading and a superior user experience.

There is much more you could do with your static website: from using WordPress REST API as a backend to using Lambda functions. There are excellent solutions even for simple websites, like using [HTTPS out of the box] or [handling form submissions].

I hope this overview of static page frameworks helped you realize their potential and consider using them next time you think of a new project.

[Jekyll documentation]: https://jekyllrb.com/docs/home/
[Middleman documentation]: https://middlemanapp.com/basics/install/
[Hugo documentation]: https://gohugo.io/documentation/
[Hexo documentation]: https://hexo.io/docs/
[Jekyll Exporter]: https://wordpress.org/plugins/jekyll-exporter/
[wp2middleman]: https://github.com/mdb/wp2middleman
[guide on how to migrate from WordPress to Hexo]: /articles/a-guide-to-static-site-generators-using-hexo-and-wordpress/
[Markdown]: https://daringfireball.net/projects/markdown/syntax
[the context]: https://gohugo.io/templates/introduction/#context-aka-the-dot
[middleman-blog]: https://middlemanapp.com/basics/blogging/
[some rules]: https://jekyllrb.com/docs/assets/
[Hugo Pipes for Sass]: https://gohugo.io/hugo-pipes/scss-sass/
[plugin]: https://github.com/knksmith57/hexo-renderer-sass
[Cloudinary free plan]: https://cloudinary.com/documentation/upload_images
[cloudinary tag]: https://www.npmjs.com/package/hexo-cloudinary
[Jekyll plugin list]: https://jekyllrb.com/docs/plugins/#available-plugins
[Middleman extensions]: https://directory.middlemanapp.com/#/extensions/all
[Hexo plugins]: https://hexo.io/plugins/
[a new tag]: https://www.npmjs.com/package/hexo-caniuse
[Content Management System for JAMstack sites]: https://headlesscms.org/
[JAMstack templates]: https://templates.netlify.com/
[Smashing Magazine]: https://www.smashingmagazine.com/2017/03/a-little-surprise-is-waiting-for-you-here/
[HTTPS out of the box]: https://www.netlify.com/docs/ssl/
[handling form submissions]: https://www.netlify.com/docs/form-handling/
