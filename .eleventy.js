const markdownIt = require('markdown-it')
const markdownItRenderer = new markdownIt()

module.exports = (eleventyConfig) => {
  eleventyConfig.addLiquidFilter('markdownify', (str) => markdownItRenderer.render(str))

  eleventyConfig.addLiquidFilter('markdownifyi', (str) => markdownItRenderer.renderInline(str))

  eleventyConfig.addLiquidFilter('cldnrysrc', (name) => "https://res.cloudinary.com/starbist/image/upload/w_auto,f_auto,q_auto:eco,dpr_auto,c_scale/" + name)

  eleventyConfig.addLiquidShortcode('cldnry', (src, alt, width, height, classes) => width ? `<span class="pic" style="width:${ width || 0 }px"><svg width="${ width || '' }" height="${ height || '' }"><rect width="${ width || '' }" height="${ height || '' }" fill="transparent"/></svg><img class="cld-responsive${ classes ? ' ' + classes : '' }" data-src="${'https://res.cloudinary.com/starbist/image/upload/w_auto,f_auto,q_auto:eco,dpr_auto,c_scale/' + src}" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="${ alt || '' }" width="${ width || '' }" height="${ height || '' }" sizes="800px" loading="lazy"></span>`
  : `<img class="cld-responsive${ classes ? ' ' + classes : '' }" data-src="${'https://res.cloudinary.com/starbist/image/upload/w_auto,f_auto,q_auto:eco,dpr_auto,c_scale/' + src}" alt="${ alt || '' }" sizes="800px" loading="lazy">`
  )

  eleventyConfig.addPassthroughCopy({"assets/dist": "."})

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    // Optional, default is "---"
    excerpt_separator: "<!-- more -->"
  });

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
