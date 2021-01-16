const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require('markdown-it')
const markdownItRenderer = new markdownIt()
const env = require('./site/_data/env');

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addLiquidFilter('markdownify', (str) => markdownItRenderer.render(str.trim()))

  eleventyConfig.addLiquidFilter('markdownifyi', (str) => markdownItRenderer.renderInline(str.trim()))

  eleventyConfig.addLiquidFilter('cldnrysrc', (name) => `https://res.cloudinary.com/starbist/image/upload/w_auto,f_auto,q_auto:eco,dpr_auto,c_scale/${ name }`)

  const cp_id = (id) => `cp_embed_${id.replace(/\//g, '_')}`

  eleventyConfig.addLiquidShortcode('codepen', (user, pen, theme, tab, height, width) => `<iframe id="${cp_id(pen || '')}" src="//codepen.io/${ user }/embed/${ pen }?height=${ height || '300' }&theme-id=${ theme || 'dark' }&slug-hash=${ pen }&default-tab=${ tab || 'result' }" scrolling="no" frameborder="no" height="${ height || '300' }" allowTransparency="true" allowfullscreen="true" class="cp_embed_iframe" style="width:${ width || '100%' };overflow: hidden;"></iframe>`)

  eleventyConfig.addLiquidShortcode('caniuse', (feature, periods) => `<p class="ciu_embed" data-feature="${ feature }" data-periods="${ periods }"><a href="http://caniuse.com/#feat=${ feature }">Can I Use ${ feature }?</a> Data on support for the ${ feature } feature across the major browsers from caniuse.com.</p><script async src="//cdn.jsdelivr.net/caniuse-embed/1.1.0/caniuse-embed.min.js"></script>`)

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
