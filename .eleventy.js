module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({"assets/dist": "."})

  return {
    dir: {
      input: 'site',
      layouts: '_layouts',
      data: '_data',
      htmlTemplateEngine: 'pug',
      markdownTemplateEngine: 'pug'
    }
  }
}
