const markdownIt = require('markdown-it')
const markdownItRenderer = new markdownIt()

module.exports = (eleventyConfig) => {
  eleventyConfig.addLiquidFilter('markdownify', (str) => markdownItRenderer.render(str))

  eleventyConfig.addLiquidFilter('markdownifyi', (str) => markdownItRenderer.renderInline(str))

  eleventyConfig.addPassthroughCopy({"assets/dist": "."})
  eleventyConfig.addPassthroughCopy({"assets/docs": "."})
  eleventyConfig.addPassthroughCopy({"assets/favicon": "."})

  return {
    dir: {
      input: 'site',
      layouts: '_layouts',
      data: '_data',
      htmlTemplateEngine: 'liquid',
      markdownTemplateEngine: 'liquid'
    }
  }
}
