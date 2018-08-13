---
title: SPG
date: 2018-08-07 13:00:33
tags:
  - spg
  - jekyll
  - hugo
  - middleman
  - hexo
categories:
  - Blog
comments: true
thumbnail: //res.cloudinary.com/starbist/image/upload/v1508398026/From_WordPress_to_Hexo_xgibru.png
description: The purpose of this post isn't diving in the mechanism of static page generator, but compare the features each framework offers and highlight the unique parts.
---

All Static Page Generators have a single task: to produce a static HTML file and all its assets. There are many benefits from serving a static HTML file, like easier caching, faster loading, and a more secure environment. Each Static Page Generator produces outcome differently. The purpose of this post isn't diving in the mechanism, but compare the features each framework offers and highlight the unique parts.

## Frameworks

In this post, we will examine the following frameworks:
- Jekyll,
    - written in Ruby,
    - supports the Liquid template engine out of the box;
- Middleman,
    - written in Ruby,
    - supports ERB and Haml template engines out of the box;
- Hugo,
    - written in Go,
    - supports Go template engine out of the box;
- Hexo
    - written in JavaScript,
    - supports EJS and Pug out of the box.

Each of these generators could be customized and extended by plugins and extensions for all your needs.

## Setup

The documentation for each of these frameworks is excellent. By following the steps for installation, you should have the environment ready within minutes. Once installed you could start a new project by running commands from the terminal.

For example, this is how you start a new Jekyll project.

```bash
jekyll new my_website
```

Middleman:

```bash
middleman init my_website
```

Hugo:

```bash
hugo new my_website
```

Hexo:

```bash
hexo init my_website
```

## Configuration

Configuration is usually stored in a single file. Each generator has its specifics, but many settings are the same. You could specify where are source files stored or where to output built sources. It is always useful to skip data that will not be used in the build process by setting `exclude` or `skip_render` option. You could also use the config file to store global settings like project title or the author.

## Migration

If you have a Wordpress project already, you could migrate it to a static page generator. For Jekyll, you could [Jekyll Exporter] plugin. For Middleman, you could use a command line tool called [wp2middleman].
You could use [Wordpress to Hugo Exporter] for Hugo migration. For Hexo, you could read [a guide on how to migrate from Wordpress to Hexo] that I wrote last year.

The principle is the same — first export all content to a suitable format, and then include it in the right folder.

## Content

Static page generators use Markdown for the main content. Markdown is powerful, and one can learn it quickly. Writing content in Markdown feels natural because of its simple syntax. The document looks clean and organized.

You should place articles in a folder specified in a global configuration file. Article names should follow convention specified by the generator. In Jekyll, you should place an article in the `_posts` directory. Article name should have the following format: `YEAR-MONTH-DAY-title.MARKUP`. Other generators have similar rules, and they provide a command for creating a new article. In Middleman, you could use the following command to create a new article:

```bash
middleman article my_article
```

Hugo:

```bash
hugo new posts/my_article.md
```

Hexo:

```bash
hexo new post my_article
```

In Markdown you are limited to a particular set of syntax. Luckily for us, all generators can process raw HTML. For example, if you want to add an anchor with a specific class, you could add like in regular HTML file:

```markdown
This is a text with <a class="my-class" href="#">a link</a>.
```

## Front Matter

The front matter is a block of data on top of the Markdown file. You could set custom variables to store the data you need to create better content. Instead of writing HTML in Markdown, which could lead to a cluttered and ugly document structure, you could define a variable in the front matter. For example, this is how you could add tags to your article.

```markdown
tags:
    - web
    - dev
    - featured
```

## Templates

Static page generator uses templating language to process templates. To insert data in a template, you should use tags. For example, to display the page title in Jekyll, you could write:

```liquid
<h1>{{ page.title }}</h1>
```

Let's try to display a list of tags from the front matter in our post in Jekyll. You need to check if a variable is available. Then you need to loop through tags and display it in an unordered list.

```liquid
{%- if page.tags -%}
  <ul>
    {%- for tag in page.tags -%}
      <li>{{ tag }}</li>
    {%- endfor -%}
  </ul>
{%- endif -%}
```

Middleman:

```erb
<% if current_page.data.tags %>
  <ul>
    <% for tag in current_page.data.tags %>
      <li><%= tag %></li>
    <% end %>
  </ul>
<% end %>
```

Hugo:

```go
{{ if .Params.Tags }}
  <ul>
    {{ range .Params.Tags }}
      <li>{{ . }}</li>
    {{ end }}
  </ul>
{{ end }}
```

Hexo:

```ejs
<% if (post.tags) { %>
  <ul>
    <% post.tags.forEach(function(tag) { %>
      <li><%= tag.name %></li>
    <% } ); %>
  </ul>
<% } %>
```

_It is a good practice to check if a variable exists to prevent a build process from failing. It could save you hours of debugging and testing._

## Variables

A static page generator provides global variables available for handing in templates. Different variable type holds different information. For example, a global variable `site` in Hexo holds information about posts, pages, categories, and tags of a site.

Knowing the available variables and how to use them could make a developer's life easier. Hugo uses Go's template libraries for templating. Working with variables in Hugo could be a problem if you are not familiar with [the context], or "the dot" how they call it.

Middleman doesn't have global variables. However, you could turn on the [middleman-blog] extension that would allow you to get access to some variables, like a list of articles. If you want to add global variables, you could do that by extracting data to data files.

## Data Files

When you want to store data that are not available in Markdown files, you should use data files. For example, if you need to save the list of your social links that you want to display in the footer of your site. All generators support `YAML` and `JSON` files. Additionally, Jekyll supports `CSV` files, and Hugo supports `TOML` files.

Let's store those social links in our data file. Since all generators support `YAML` format, let's save the data in `social.yml` file:

```yml
- name: Twitter
   href: https://twitter.com/malimirkeccita
- name: LinkedIn
   href: http://github.com/maliMirkec/
- name: GitHub
   href: https://www.linkedin.com/in/starbist/
```

Jekyll stores data files in `_data` directory by default. Middleman and Hugo use `data` directory, and Hexo uses `source/_data` directory. To output the data, you could use the following code in Jekyll:

```liquid
{%- if site.data.social -%}
  <ul>
    {% for social in site.data.social %}
      <li><a href="{{ social.href }}">{{ social.name }}</li>
    {%- endfor -%}
  </ul>
{%- endif -%}
```

Middleman:

```erb
<% if data.social %>
  <ul>
    <% data.social.each do |s| %>
      <li><a href="<%= s.href %>"><%= s.name %></li>
    <% end %>
  </ul>
<% end %>
```

Hugo:

```go
{{ if .Params.Tags }}
  <ul>
    {{ range $.Site.Data.social }}
      <li><a href="{{ .href }}">{{ .name }}</a></li>
    {{ end }}
  </ul>
{{ end }}
```

Hexo:

```ejs
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

```liquid
<h1>{{ page.title | upcase }}</h1>
```

Middleman has similar syntax:

```erb
<h1><%= current_page.data.title.upcase %></h1>
```

Hugo uses the following command:

```go
<h1>{{ .Title | upper }}</h1>
```

Hexo has different syntax, but the result is the same.

```ejs
<h1><%= page.title.toUpperCase() %></h1>
```

## Assets

Asset management is handled differently across static page generators. Jekyll compiles assets files wherever they are placed. Middleman handles only assets stored in `source` folder. The default location for assets in Hugo is `assets` directory. Hexo suggests placing assets in global `source` directory.

### Sass

Jekyll supports `Sass` out of the box, but you should follow [some rules]. Middleman also supports `Sass` out of the box. Hugo compiles `Sass` through [Hugo Pipes for Sass]. Hexo does it via [plugin].

### es6

If you want to use modern JavaScript features of `es6`, then you should install a plugin. There might be more than one version of a similar plugin, so you might want to check the code or see open issues or latest commit to finding the best one.

### Images

Image optimization is not supported by default either. Also, like `es6` plugins, there is more than one plugin to optimize images. Do your homework and try to find the best plugin for the job. Alternatively, you could use a third party solution. In my [blog] that is build with Hexo, I am using Cloudinary free plan. I developed [a `cloudinary` tag], and I am providing responsive and optimized images via Cloudinary transformations.

## Plugins, Extensions

Static page generators have potent libraries that allow you to customize your website. Each plugin serves a different purpose. You could find a wide range of plugins, from LiveReload for a better development environment to generating Sitemap or RSS feed.

You could write a new plugin or extension. Before you do, check if a similar plugin exists. See [Jekyll plugin list], [Middleman extensions], and [Hexo plugins]. Hugo doesn't have plugins or extensions. However, it does support custom shortcodes.

## Shortcodes

Shortcodes are code snippets that you could place in `Markdown` documents. Those snippets output HTML code. Hugo and Hexo support shortcodes. There are built-in shortcodes, like `figure` in Hugo:

```markdown
{{< figure src="/lint/to/image.jpg" title="My image" >}}
```

Hexo `youtube` shortcode:

```markdown
{% youtube video_id %}
```

If you cannot find a proper shortcode, you could create a new one. For example, Hexo doesn't support CanIUse embeds, and I developed [a new tag] that supports CanIUse embedding. Don't forget to publish your plugin on npm or official generator site. The community will be grateful if you do.

## CMS

Static page generators could be overhead for a non-technical person. Learning how to use commands or `Markdown` is not something that is easy for everybody. In that case, a user could benefit from [Content Management System for JAMstack sites]. In this list, you could find a system that best suits your needs. Know that it takes some time to configure the CMS, but longterm you and other users could benefit from publishing content more efficiently.

## Bonus: JAMstack templates

If you don't want to spend too much time on configuring your project, you could benefit from [JAMstack templates]. Some of these templates are already preconfigured with CMS which could save you much time. You could also learn a lot by examining the code. Try to install a template, compare it to others and choose the best one for you.

## Conclusion

Static Page Generators are a fast and reliable way to build a website. You could build a non-trivial and highly customized website with a generator nowadays. [Smashing Magazine] moved to JAMstack last year, and they managed to speed up their site significantly. There are other successful examples of static websites, and they all share the same ideology — to produce static resources and deliver them over the Content Delivery Networks for faster loading and better user experience.

There are so much more you could do with your static website: from using Wordpress REST API as a backend to using Lambda functions. There are excellent solutions even for simple websites, like using [HTTPS out of the box] or [handling form submissions].

I hope you learned something. Consider using a static page generator next time you think of a new project.

[Jekyll Exporter]: https://wordpress.org/plugins/jekyll-exporter/
[wp2middleman]: https://github.com/mdb/wp2middleman
[Wordpress to Hugo Exporter]: https://github.com/SchumacherFM/wordpress-to-hugo-exporter
[a guide on how to migrate from Wordpress to Hexo]: https://www.toptal.com/front-end/wordpress-to-html-with-hexo-blog
[the context]: https://gohugo.io/templates/introduction/#context-aka-the-dot
[middleman-blog]: https://middlemanapp.com/basics/blogging/
[some rules]: https://jekyllrb.com/docs/assets/
[Hugo Pipes for Sass]: https://gohugo.io/hugo-pipes/scss-sass/
[plugin]: https://github.com/knksmith57/hexo-renderer-sass
[Jekyll plugin list]: https://jekyllrb.com/docs/plugins/#available-plugins
[Middleman extensions]: https://directory.middlemanapp.com/#/extensions/all
[Hexo plugins]: https://hexo.io/plugins/
[a new tag]: https://www.npmjs.com/package/hexo-caniuse
[blog]: https://silvestarbistrovic.from.hr/
[a cloudinary tag]: https://www.npmjs.com/package/hexo-cloudinary
[Cloudinary transformations]: https://cloudinary.com/documentation/image_transformations
[Content Management System for JAMstack sites]: https://headlesscms.org/
[JAMstack templates]: https://templates.netlify.com/
[Smashing Magazine]: https://www.smashingmagazine.com/2017/03/a-little-surprise-is-waiting-for-you-here/
[HTTPS out of the box]: https://www.netlify.com/docs/ssl/
[handling form submissions]: https://www.netlify.com/docs/form-handling/
