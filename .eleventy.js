const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const markdownIt = require('markdown-it')
const markdownItRenderer = new markdownIt()
const markdownItAnchor = require('markdown-it-anchor')
const uslug = require('uslug')

const fs = require('fs')
const env = require('./site/_data/env')
const package = require('./package.json')

const social = require('./eleventy/social')
const tagify = require('./eleventy/tagify')
const { codepen, caniuse, twrapper, embed, video, note } = require('./eleventy/embeds')
const { cldnryimg, cldnrylink } = require('./eleventy/cldnry')
const { collections, tags } = require('./eleventy/collections')

module.exports = (eleventyConfig) => {
  eleventyConfig.ignores.add('site/_drafts/*')

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

  eleventyConfig.addPlugin(syntaxHighlight)

  eleventyConfig.setLiquidOptions({
    extname: '.liquid',
    strictFilters: false,
    jsTruthy: true
  })

  eleventyConfig.setLibrary(
    'md',
    markdownIt({
      html: true,
      linkify: true
    }).use(markdownItAnchor, {
      slugify: uslug
    })
  )

  eleventyConfig.addLiquidFilter('markdownify', async (str) => markdownItRenderer.render(str ? str.trim() : ''))

  eleventyConfig.addLiquidFilter('markdownifyi', async (str) => markdownItRenderer.renderInline(str.trim()))

  eleventyConfig.addLiquidFilter('slug', async (data) => uslug(data))

  eleventyConfig.addLiquidFilter('social', async (str, type) => social(str, type))

  eleventyConfig.addLiquidFilter('tagify', async (tags) => tagify(tags))

  eleventyConfig.addLiquidFilter('findItem', async (array, key, value) => array.filter(item => item.data[key] === value))

  eleventyConfig.addLiquidFilter('randomItems', async (array) => array.sort((a, b) => 0.5 - Math.random()))

  eleventyConfig.addLiquidFilter('generator', async () => `Eleventy ${package.dependencies['@11ty/eleventy'].replace('^', '')}`)

  eleventyConfig.addLiquidShortcode('codepen', async (user, pen, theme, tab, height, width, lazy) => codepen(user, pen, theme, tab, height, width, lazy))

  eleventyConfig.addLiquidShortcode('caniuse', async (feature, periods) => caniuse(feature, periods))

  eleventyConfig.addLiquidShortcode('embed', async (code, width, height) => embed(code, width, height))

  eleventyConfig.addLiquidShortcode('video', async (src, width, height, autoplay, loop, muted, gif, classes) => video(src, width, height, autoplay, loop, muted, gif, classes))

  eleventyConfig.addLiquidShortcode('cldnryimg', async (img, alt, width, height, classes, instant) => cldnryimg(img, alt, width, height, classes, instant))

  eleventyConfig.addLiquidShortcode('cldnrylink', async (link, src, alt, width, height, classes, instant) => cldnrylink(link, src, alt, width, height, classes, instant))

  eleventyConfig.addPairedLiquidShortcode('note', async (str, title) => note(str, title))

  eleventyConfig.addPairedLiquidShortcode('twrapper', async (table) => twrapper(table))

  eleventyConfig.addLiquidFilter('getCritical', (critical) => {
    if(fs.existsSync(`./assets/critical/${critical}.critical.min.css`) ) {
      return fs.readFileSync(`./assets/critical/${critical}.critical.min.css`)
    }

    return false
  })

  eleventyConfig.addLiquidFilter('criticalExists', (critical) => {
    return fs.existsSync(`./assets/critical/${critical}.critical.min.css`)
  })

  eleventyConfig.addCollection('my-articles', async (collection) => collections('blog', collection))

  eleventyConfig.addCollection('my-publications', async (collection) => collections('publications', collection))

  eleventyConfig.addCollection('my-reads', async (collection) => collections('reads', collection))

  eleventyConfig.addCollection('my-redesign', async (collection) => collections('redesign-2024', collection))

  eleventyConfig.addCollection('my-slides', async (collection) => collections('slides', collection))

  eleventyConfig.addCollection('my-css', async (collection) => collections('invalid-css', collection))

  eleventyConfig.addCollection('my-advent', async (collection) => collections('advent', collection))

  eleventyConfig.addCollection('all-tags', async (collection) => tags(collection))

  // eleventyConfig.addWatchTarget('./assets/src/**/*')
  // eleventyConfig.addWatchTarget('./assets/dist/**/*')

  // eleventyConfig.setServerOptions({
  //   port: 8080,
  //   liveReload: true,
  //   domDiff: true,
  //   watchFiles: ['./site/**/*', './assets/**/*']
  // })

  return {
    dir: {
      input: 'site',
      output: 'public'
    }
  }
}
