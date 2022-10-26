const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")
const markdownIt = require('markdown-it')
const markdownItRenderer = new markdownIt()
const markdownItAnchor = require('markdown-it-anchor')
const uslug = require('uslug')
const env = require('./site/_data/env')

module.exports = (eleventyConfig) => {
  eleventyConfig.setBrowserSyncConfig({
    open: true,
  })

  eleventyConfig.addWatchTarget("./assets/")

  eleventyConfig.setWatchThrottleWaitTime(200)

  eleventyConfig.setLibrary(
    'md',
    markdownIt({
      html: true
    }).use(markdownItAnchor, {
      slugify: uslug
    })
  )

  eleventyConfig.addPlugin(syntaxHighlight)

  eleventyConfig.addPairedShortcode("codeblock", (str) => str)

  eleventyConfig.addLiquidFilter('markdownify', (str) => markdownItRenderer.render(str ? str.trim() : ''))

  eleventyConfig.addLiquidFilter('markdownifyi', (str) => markdownItRenderer.renderInline(str.trim()))

  eleventyConfig.addLiquidFilter('cldnrysrc', (name) => `https://res.cloudinary.com/starbist/image/upload/w_auto,f_auto,q_auto:eco,dpr_auto,c_scale/${ name }`)

  const exclude_tags = ['blog', 'portfolio', 'projects', 'testimonials', 'story', 'advent']

  eleventyConfig.addLiquidFilter('tagify', (tags) => tags.filter(tag => exclude_tags.indexOf(tag) === -1))

  eleventyConfig.addLiquidFilter('tagify2', (tags) => tags.filter(tag => exclude_tags.indexOf(tag) !== -1))

  const cp_id = (id) => `cp_embed_${id.replace(/\//g, '_')}`

  eleventyConfig.addLiquidShortcode('embed', (code, width, height) => `<div class="embed" style="--padding-bottom: calc(${height}/${width}*100%)">${ code }</div>`)

  eleventyConfig.addLiquidShortcode('codepen', (user, pen, theme, tab, height, width, lazy) => `<iframe id="${cp_id(pen || '')}" src="//codepen.io/${ user }/embed/${ pen }?height=${ height || '300' }&theme-id=${ theme || 'dark' }&slug-hash=${ pen }&default-tab=${ tab || 'result' }" scrolling="no" frameborder="no" height="${ height || '300' }" allowTransparency="true" allowfullscreen="true" class="cp_embed_iframe" style="width:${ width || '100%' };overflow: hidden;"${lazy ? ' loading="lazy"' : ''}></iframe>`)

  eleventyConfig.addLiquidShortcode('caniuse', (feature, periods) => `<p class="ciu_embed" data-feature="${ feature }" data-periods="${ periods }"><a href="http://caniuse.com/#feat=${ feature }">Can I Use ${ feature }?</a> Data on support for the ${ feature } feature across the major browsers from caniuse.com.</p><script async src="//cdn.jsdelivr.net/caniuse-embed/1.1.0/caniuse-embed.min.js"></script>`)

  const cldnry = (src, alt, width, height, classes, classes2) => width ? `<span class="dib pic${ classes2 ? ' ' + classes2 : '' }"><svg width="${ width || '' }" height="${ height || '' }"><rect width="${ width || '' }" height="${ height || '' }" fill="transparent"/></svg><img class="cld-responsive${ classes ? ' ' + classes : '' }" data-src="${'https://res.cloudinary.com/starbist/image/upload/w_auto,f_auto,q_auto:eco,dpr_auto,c_scale/' + src}" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="${ alt || '' }" width="${ width || '' }" height="${ height || '' }" loading="lazy"></span>` :
    `<img class="cld-responsive${ classes ? ' ' + classes : '' }" data-src="${'https://res.cloudinary.com/starbist/image/upload/w_auto,f_auto,q_auto:eco,dpr_auto,c_scale/' + src}" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="${ alt || '' }" loading="lazy">`

  eleventyConfig.addLiquidShortcode('cldnry', cldnry)

  eleventyConfig.addLiquidShortcode('cldnrylink', (link, src, alt, width, height, classes, classes2) => `<a class="link-block" href="${link}">${cldnry(src, alt, width, height, classes, classes2)}</a>`
  )

  const sortlist = (list) => {
    return list.sort((a, b) => {
      if (a.year > b.year) {
        return 1
      } else if (a.year < b.year) {
        return -1
      } else {
        return 0
      }
    })
  }

  eleventyConfig.addLiquidFilter('sortlist', sortlist)

  eleventyConfig.addCollection("mySlides", (collection) => {
    return collection.getFilteredByTag("slides").sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else if (a.date > b.date) {
        return -1
      } else {
        return 0
      }
    })
  })

  eleventyConfig.addCollection("myCSS", (collection) => {
    return collection.getFilteredByTag("invalid css").sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else if (a.date > b.date) {
        return -1
      } else {
        return 0
      }
    })
  })

  eleventyConfig.addCollection("myAdvent", (collection) => {
    return collection.getFilteredByTag("advent").sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else if (a.date > b.date) {
        return -1
      } else {
        return 0
      }
    })
  })

  eleventyConfig.addCollection("myArticles", (collection) => {
    return collection.getFilteredByTag("blog").sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else if (a.date > b.date) {
        return -1
      } else {
        return 0
      }
    })
  })

  eleventyConfig.addCollection("myPublications", (collection) => {
    return collection.getFilteredByTag("publications").sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else if (a.date > b.date) {
        return -1
      } else {
        return 0
      }
    })
  })

  eleventyConfig.addCollection("allArticles", (collection) => {
    return collection.sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else if (a.date > b.date) {
        return -1
      } else {
        return 0
      }
    })
  })

  eleventyConfig.addCollection("allTags", collection => {
    const tagsSet = new Set()
    collection.getAll().forEach(item => {
      if (!item.data.tags) return
      item.data.tags
        .filter(tag => !['post', 'all'].includes(tag))
        .forEach(tag => tagsSet.add(tag))
    })
    return Array.from(tagsSet).sort()
  })

  eleventyConfig.addPassthroughCopy({
    "assets/dist": "."
  })

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    // Optional, default is "---"
    excerpt_separator: "<!-- more -->"
  })

  return {
    dir: {
      input: 'site',
      output: 'public',
      layouts: '_layouts',
      data: '_data',
      htmlTemplateEngine: 'liquid',
      markdownTemplateEngine: 'liquid'
    }
  }
}
