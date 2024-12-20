const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const { Liquid } = require('liquidjs')
const markdownIt = require('markdown-it')
const markdownItRenderer = new markdownIt()
const markdownItAnchor = require('markdown-it-anchor')
const htmlmin = require('html-minifier')
const uslug = require('uslug')
const fs = require('fs')
const env = require('./site/_data/env')
const package = require('./package.json')

module.exports = (eleventyConfig) => {
  eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
    if((env.production || env.staging) && outputPath && outputPath.endsWith('.html')) {
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

  // eleventyConfig.setServerPassthroughCopyBehavior('passthrough')

  let passthroughCopy = {
    'assets/': '.',
    'site/side-projects/ui-dev-newsletter/admin/config.yml': '/side-projects/ui-dev-newsletter/admin/config.yml'
  }


  if(env.production) {
    passthroughCopy['extras/robots_prod.txt'] = './robots.txt'
  } else {
    passthroughCopy['extras/robots_dev.txt'] = './robots.txt'
  }

  eleventyConfig.addPassthroughCopy(passthroughCopy)

  eleventyConfig.setWatchThrottleWaitTime(2000)

  let options = {
    extname: '.liquid',
    dynamicPartials: false,
    strictFilters: false,
    jsTruthy: true,
    root: ['site/_layouts']
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

  eleventyConfig.setLibrary('liquid', new Liquid(options))

  eleventyConfig.addPlugin(syntaxHighlight)

  eleventyConfig.addLiquidFilter('markdownify', (str) => markdownItRenderer.render(str ? str.trim() : ''))

  eleventyConfig.addLiquidFilter('markdownifyi', (str) => markdownItRenderer.renderInline(str.trim()))

  eleventyConfig.addLiquidFilter('social', (str, type, title) => {
    const social = [{
      'name': 'Mastodon',
      'url': 'https://s2f.kytta.dev/?text='
    },
    {
      'name': 'BlueSky',
      'url': 'https://bsky.app/intent/compose?text='
    },
    {
      'name': 'LinkedIn',
      'url': 'https://www.linkedin.com/shareArticle?mini=true&url='
    },
    {
      'name': 'Reddit',
      'url': 'https://www.reddit.com/submit?url='
    }].find(link => {
      return link.name === type
    })

    return `${social.url}${str}`
  })

  eleventyConfig.addLiquidFilter('slug', (data) => {
    return data && data.length && data
      .toLowerCase()
      .trim()
      .replace(/[\/]/g, '-')
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '')
  })

  eleventyConfig.addLiquidFilter('cldnrysrc', (name) => `https://res.cloudinary.com/starbist/image/upload/w_auto,f_auto,q_auto:eco,dpr_auto,c_scale/${ name }`)

  const exclude_tags = ['blog', 'portfolio', 'projects', 'testimonials', 'story', 'advent', 'redesign-2024', 'invalid-css', 'favorites']

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
    return fs.existsSync(`./assets/critical/${critical}.critical.min.css`)
  })

  eleventyConfig.addLiquidFilter('getCritical', (critical) => {
    if(fs.existsSync(`./assets/critical/${critical}.critical.min.css`) ) {
      return fs.readFileSync(`./assets/critical/${critical}.critical.min.css`)
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

  eleventyConfig.addLiquidShortcode('embed', (code, width, height) => `<div class="embed" style="aspect-ratio:${width}/${height}">${ code }</div>`)

  const cldnry = (img, alt, width, height, classes, instant) => {
    let attr = ''

    if(width) {
      attr += ` width="${ width }"`
    }

    if(height) {
      attr += ` height="${ height }"`
    }

    if(instant) {
      attr += ` fetchpriority="high"`
    } else {
      attr += ` loading="lazy"`
    }

    const classList = classes ? ` class="${classes}"` : ''

    const src = `${'https://res.cloudinary.com/starbist/image/upload/ar_' + width + ':' + height + ',w_' + width + ',f_auto,q_auto:eco,dpr_auto,c_scale/' + img}`

    const srcset = `${'https://res.cloudinary.com/starbist/image/upload/ar_' + width + ':' + height + ',w_' + width * 2 + ',f_auto,q_auto:eco,dpr_auto,c_scale/' + img} 2x, ${src}`

    return `<img srcset="${srcset}" src="${src}" alt="${ alt || '' }" ${attr} ${classList}>`
  }

  eleventyConfig.addLiquidShortcode('cldnry', cldnry)

  const cldnry2 = (img, alt, width, height, sizes, instant) => {
    let attr = ''

    if(width) {
      attr += ` width="${ width }"`
    }

    if(height) {
      attr += ` height="${ height }"`
    }

    if(instant) {
      attr += ` fetchpriority="high"`
    } else {
      attr += ` loading="lazy"`
    }

    let srcset = ''
    let srcsetArray = []
    let szs = []
    let sizesArray = []

    if(sizes) {
      sizes.split(';').forEach(size => {
        const s = size.split(':')

        srcsetArray.push(`${'https://res.cloudinary.com/starbist/image/upload/ar_' + width + ':' + height + ',w_' + s[0] + ',f_auto,q_auto:eco,dpr_auto,c_scale/' + img} ${s[0]}w`)

        sizesArray.push(s[2] ? `(min-width: ${s[2]}) ${s[1]}` : s[1])
      })

      srcset = srcsetArray.join(', ')
      szs = sizesArray.reverse().join(', ')
    }

    const src = `${'https://res.cloudinary.com/starbist/image/upload/ar_' + width + ':' + height + ',w_' + width + ',f_auto,q_auto:eco,dpr_auto,c_scale/' + img}`

    return `<img srcset="${srcset}" src="${src}" sizes="${szs}" alt="${ alt || '' }" ${attr}>`
  }

  eleventyConfig.addLiquidShortcode('cldnry2', cldnry2)

  eleventyConfig.addLiquidShortcode('cldnrylink', (link, src, alt, width, height, classes, instant) => `<a href="${link}">${cldnry(src, alt, width, height, classes, instant)}</a>`)

  eleventyConfig.addLiquidShortcode('gif', (src, alt, width, height, classes, instant) => `<img class="${ classes || '' }" src="${src || ''}" alt="${ alt || '' }" width="${ width || '' }" height="${ height || '' }"${ instant ? '' : ' loading="lazy"'}>`)

  eleventyConfig.addLiquidShortcode('video', (src, width, height, autoplay, loop, muted, gif, classes) => `<video width="${ width || '' }" height="${ height || '' }" controls playsinline ${autoplay ? ' autoplay': ''}${loop ? ' loop': ''}${muted ? ' muted': ''} poster="${src}.jpg"${classes ? ' class="' + classes + '"' : ''}><source type="video/mp4" src="${src}.mp4"><source type="video/webm" src="${src}.webm">${gif ? 'Your browser does not support HTML5 video tag. <a href="' + src + '.gif">Click here to view original GIF</a>.' : ''}</video>`)

  eleventyConfig.addPairedLiquidShortcode('note', (note, title) => {
    let dataTitle = title ? ` data-title="${title}"` : ''
    return `<div class="note"${dataTitle}>${ markdownItRenderer.render(note.trim()) }</div>`
  })

  eleventyConfig.addPairedLiquidShortcode('twrapper', (table) => {
    return `<div class="table-wrapper">${ markdownItRenderer.render(table.trim()) }</div>`
  })

  eleventyConfig.addCollection('my-reads', (collection) => {
    return collection.getFilteredByTag('reads').sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else if (a.date > b.date) {
        return -1
      } else {
        return 0
      }
    })
  })

  eleventyConfig.addCollection('my-slides', (collection) => {
    return collection.getFilteredByTag('slides').sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else if (a.date > b.date) {
        return -1
      } else {
        return 0
      }
    })
  })

  eleventyConfig.addCollection('my-css', (collection) => {
    return collection.getFilteredByTag('invalid-css').sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else if (a.date > b.date) {
        return -1
      } else {
        return 0
      }
    })
  })

  eleventyConfig.addCollection('my-redesign', (collection) => {
    return collection.getFilteredByTag('redesign-2024').sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else if (a.date > b.date) {
        return -1
      } else {
        return 0
      }
    })
  })

  eleventyConfig.addCollection('my-advent', (collection) => {
    return collection.getFilteredByTag('advent').sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else if (a.date > b.date) {
        return -1
      } else {
        return 0
      }
    })
  })

  eleventyConfig.addCollection('my-articles', (collection) => {
    return collection.getFilteredByTag('blog').sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else if (a.date > b.date) {
        return -1
      } else {
        return 0
      }
    })
  })

  eleventyConfig.addCollection('my-publications', (collection) => {
    return collection.getFilteredByTag('publications').sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else if (a.date > b.date) {
        return -1
      } else {
        return 0
      }
    })
  })

  eleventyConfig.addCollection('all-articles', (collection) => {
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

  eleventyConfig.addCollection('all-tags', collection => {
    const tagsSet = new Set()
    collection.getAll().forEach(item => {
      if (!item.data.tags) return
      item.data.tags
        .filter(tag => !['post', 'all'].includes(tag))
        .forEach(tag => tagsSet.add(tag))
    })
    return Array.from(tagsSet).sort()
  })

  eleventyConfig.addCollection('all', collection => {
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

  eleventyConfig.addWatchTarget('./assets/src/**/*')
  eleventyConfig.addWatchTarget('./assets/dist/**/*')

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    // Optional, default is '---'
    excerpt_separator: '<!-- more -->'
  })


  eleventyConfig.setServerOptions({
    port: 8080,
    liveReload: true,
    domDiff: true,
    watchFiles: ['./site/**/*', './assets/**/*']
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
