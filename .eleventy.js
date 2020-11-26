module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({"assets/dist": "."})

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    // Optional, default is "---"
    excerpt_separator: "<!-- more -->"
  });

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
