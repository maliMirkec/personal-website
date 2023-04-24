const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")
const { Liquid } = require("liquidjs")
const markdownIt = require('markdown-it')
const markdownItRenderer = new markdownIt()
const markdownItAnchor = require('markdown-it-anchor')
const htmlmin = require("html-minifier")
const uslug = require('uslug')
const fs = require('fs')
const env = require('./site/_data/env')
const package = require('./package.json')
const { log } = require("console")
const { LibManifestPlugin } = require("webpack")

module.exports = (eleventyConfig) => {
  eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
    if((env.production || env.staging) && outputPath && outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      })

      return minified
    }

    return content
  })

  eleventyConfig.ignores.add('site/_drafts/*')

  eleventyConfig.setWatchThrottleWaitTime(2000)

  let options = {
    extname: ".liquid",
    dynamicPartials: false,
    strictFilters: false,
    jsTruthy: true,
    root: ["site/_layouts"]
  }

  eleventyConfig.setLibrary(
    'md',
    markdownIt({
      html: true,
      linkify: true
    }).use(markdownItAnchor, {
      slugify: uslug
    })
  )

  eleventyConfig.setLibrary("liquid", new Liquid(options))

  eleventyConfig.addPlugin(syntaxHighlight)

  eleventyConfig.addLiquidFilter('markdownify', (str) => markdownItRenderer.render(str ? str.trim() : ''))

  eleventyConfig.addLiquidFilter('markdownifyi', (str) => markdownItRenderer.renderInline(str.trim()))

  eleventyConfig.addLiquidFilter('cldnrysrc', (name) => `https://res.cloudinary.com/starbist/image/upload/w_auto,f_auto,q_auto:eco,dpr_auto,c_scale/${ name }`)

  const exclude_tags = ['blog', 'portfolio', 'projects', 'testimonials', 'story', 'advent', 'invalid css', 'favorites']

  eleventyConfig.addLiquidFilter('tagify', (tags) => tags.filter(tag => exclude_tags.indexOf(tag) === -1))

  eleventyConfig.addLiquidFilter('tagify2', (tags) => tags.filter(tag => exclude_tags.indexOf(tag) !== -1))

  eleventyConfig.addLiquidFilter('sortItemsFirst', (array, key, value) => {
    const array1 = array.filter(item => {
      return item.data[key].indexOf(value) !== -1
    })

    const array2 = array.filter(item => {
      return item.data[key].indexOf(value) === -1
    })

    return array1.concat(array2)
  })

  eleventyConfig.addLiquidFilter('findItem', (array, key, value) => {
    return array.filter(item => {
      return item.data[key] === value
    })
  })

  eleventyConfig.addLiquidFilter('randomItems', (array) => {
    return array.sort((a, b) => 0.5 - Math.random())
  })

  eleventyConfig.addLiquidFilter('criticalExists', (critical) => {
    return fs.existsSync(`./assets/critical/${critical}.critical.min.css`) || fs.existsSync(`./assets/dist/css/${critical}.critical.min.css`)
  })

  eleventyConfig.addLiquidFilter('getCritical', (critical) => {
    if(fs.existsSync(`./assets/critical/${critical}.critical.min.css`) ) {
      return fs.readFileSync(`./assets/critical/${critical}.critical.min.css`)
    }

    if(fs.existsSync(`./assets/dist/css/${critical}.critical.min.css`) ) {
      return fs.readFileSync(`./assets/dist/css/${critical}.critical.min.css`)
    }

    return false
  })

  eleventyConfig.addLiquidFilter('generator', () => {
    return `Eleventy ${package.dependencies['@11ty/eleventy'].replace('^', '')}`
  })

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

  const cp_id = (id) => `cp_embed_${id.replace(/\//g, '_')}`

  eleventyConfig.addLiquidShortcode('codepen', (user, pen, theme, tab, height, width, lazy) => `<iframe id="${cp_id(pen || '')}" src="//codepen.io/${ user }/embed/${ pen }?height=${ height || '300' }&theme-id=${ theme || 'dark' }&slug-hash=${ pen }&default-tab=${ tab || 'result' }" scrolling="no" frameborder="no" height="${ height || '300' }" allowTransparency="true" allowfullscreen="true" class="cp_embed_iframe" style="width:${ width || '100%' };overflow: hidden;"${lazy ? ' loading="lazy"' : ''}></iframe>`)

  eleventyConfig.addLiquidShortcode('caniuse', (feature, periods) => `<p class="ciu_embed" data-feature="${ feature }" data-periods="${ periods }"><a href="http://caniuse.com/#feat=${ feature }">Can I Use ${ feature }?</a> Data on support for the ${ feature } feature across the major browsers from caniuse.com.</p><script async src="//cdn.jsdelivr.net/caniuse-embed/1.1.0/caniuse-embed.min.js"></script>`)

  eleventyConfig.addLiquidShortcode('embed', (code, width, height) => `<div class="embed" style="--padding-bottom: calc(${height}/${width}*100%)">${ code }</div>`)

  const cldnry = (src, alt, width, height, classes, classes2, instant) => width ? `<span class="db pic${ classes2 ? ' ' + classes2 : '' }"${ width && height ? ' style="aspect-ratio:' + width + '/' + height + ';max-width:calc(' + width + 'px + .25rem)"' : '' }><img class="cld-responsive${ classes ? ' ' + classes : '' }" data-src="${'https://res.cloudinary.com/starbist/image/upload/w_auto,f_auto,q_auto:eco,dpr_auto,c_scale/' + src}" alt="${ alt || '' }" width="${ width || '' }" height="${ height || '' }"${ instant ? '' : ' loading="lazy"'}></span>` :
    `<img class="cld-responsive${ classes ? ' ' + classes : '' }" data-src="${'https://res.cloudinary.com/starbist/image/upload/w_auto,f_auto,q_auto:eco,dpr_auto,c_scale/' + src}" alt="${ alt || '' }"${ instant ? '' : ' loading="lazy"'}>`

  eleventyConfig.addLiquidShortcode('cldnry', cldnry)

  eleventyConfig.addLiquidShortcode('cldnrylink', (link, src, alt, width, height, classes, classes2, instant) => `<a class="db piclink" href="${link}">${cldnry(src, alt, width, height, classes, classes2, instant)}</a>`)

  eleventyConfig.addLiquidShortcode('gif', (src, alt, width, height, classes, classes2, instant) => `<span class="db pic${ classes2 ? ' ' + classes2 : '' }"${ width && height ? ' style="aspect-ratio:' + width + '/' + height + ';max-width:calc(' + width + 'px + .25rem)"' : '' }><img class="${ classes ? classes : '' }" src="${src || ''}" alt="${ alt || '' }" width="${ width || '' }" height="${ height || '' }"${ instant ? '' : ' loading="lazy"'}></span>`)

  eleventyConfig.addPairedLiquidShortcode('note', (note, title) => {
    let dataTitle = title ? ` data-title="${title}"` : ''
    return `<div class="note"${dataTitle}>${ markdownItRenderer.render(note.trim()) }</div>`
  })

  eleventyConfig.addPairedLiquidShortcode('twrapper', (table) => {
    return `<div class="table-wrapper">${ markdownItRenderer.render(table.trim()) }</div>`
  })

  eleventyConfig.addCollection("my-slides", (collection) => {
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

  eleventyConfig.addCollection("my-css", (collection) => {
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

  eleventyConfig.addCollection("my-advent", (collection) => {
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

  eleventyConfig.addCollection("my-articles", (collection) => {
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

  eleventyConfig.addCollection("my-publications", (collection) => {
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

  eleventyConfig.addCollection("all-articles", (collection) => {
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

  eleventyConfig.addCollection("all-tags", collection => {
    const tagsSet = new Set()
    collection.getAll().forEach(item => {
      if (!item.data.tags) return
      item.data.tags
        .filter(tag => !['post', 'all'].includes(tag))
        .forEach(tag => tagsSet.add(tag))
    })
    return Array.from(tagsSet).sort()
  })

  eleventyConfig.addCollection("all", collection => {
    return collection.sort((a, b) => {
      if (a.url < b.url) {
        return -1
      } else if (a.url > b.url) {
        return 1
      } else {
        return 0
      }
    })
  })

  eleventyConfig.addPassthroughCopy({
    "assets/dist": ".",
    "assets/critical": "css"
  })

  // eleventyConfig.setServerPassthroughCopyBehavior("passthrough")

  eleventyConfig.addWatchTarget("./assets/src/**/*")
  eleventyConfig.addWatchTarget("./assets/dist/**/*")

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    // Optional, default is "---"
    excerpt_separator: "<!-- more -->"
  })


  eleventyConfig.setServerOptions({
    port: 8080,
    liveReload: true,
    domDiff: true,
    watchFiles: ["./site/**/*", "./assets/**/*"]
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
