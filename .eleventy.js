import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight'
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img"
import markdownIt from 'markdown-it'
import markdownItAnchor from 'markdown-it-anchor'
import uslug from 'uslug'
import fs from 'fs'

import env from './site/_data/env.js'
import social from './eleventy/social.js'
import tagify from './eleventy/tagify.js'
import { codepen, caniuse, twrapper, embed, video, note } from './eleventy/embeds.js'
import { cldnryimg, cldnrylink, cldnryfetch, cldnrysrc } from './eleventy/cldnry.js'
import { collections, tags } from './eleventy/collections.js'

const markdownItRenderer = new markdownIt()

export default async (eleventyConfig) => {
  eleventyConfig.ignores.add('site/_drafts/*')
  eleventyConfig.ignores.add('assets/gfx/cldnry/*')

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

  eleventyConfig.addPlugin(eleventyImageTransformPlugin)


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

  eleventyConfig.addLiquidShortcode('codepen', async (user, pen, theme, tab, height, width, lazy) => codepen(user, pen, theme, tab, height, width, lazy))

  eleventyConfig.addLiquidShortcode('caniuse', async (feature, periods) => caniuse(feature, periods))

  eleventyConfig.addLiquidShortcode('embed', async (code, width, height) => embed(code, width, height))

  eleventyConfig.addLiquidShortcode('video', async (src, width, height, autoplay, loop, muted, gif, classes) => video(src, width, height, autoplay, loop, muted, gif, classes))

  eleventyConfig.addLiquidShortcode('cldnryimg', async (img, alt, width, height, classes, instant) => cldnryimg(img, alt, width, height, classes, instant))

  eleventyConfig.addLiquidShortcode('cldnrylink', async (link, src, alt, width, height, classes, instant) => cldnrylink(link, src, alt, width, height, classes, instant))

  eleventyConfig.addLiquidShortcode('cldnryfetch', async (src, alt, widths, lazy = true, classes = '', svg = false) => {
    return env.development ? cldnryimg(src, alt, 'auto', 'auto', classes, !lazy) : cldnryfetch(src, alt, widths, lazy, classes, svg)
  })

  eleventyConfig.addLiquidShortcode('cldnrysrc', async (img, width) => cldnrysrc(img, width))

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

  eleventyConfig.addCollection('my-zoo', async (collection) => collections('zoo', collection))

  eleventyConfig.addCollection('all-tags', async (collection) => tags(collection))

  eleventyConfig.addWatchTarget('./assets/**/*')
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
