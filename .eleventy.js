const markdownIt = require('markdown-it')
const markdownItRenderer = new markdownIt()

module.exports = (eleventyConfig) => {
  eleventyConfig.addLiquidFilter('markdownify', (str) => markdownItRenderer.render(str))

  eleventyConfig.addLiquidFilter('markdownifyi', (str) => markdownItRenderer.renderInline(str))

  eleventyConfig.addLiquidTag('cldnry', (liquidEngine) => {
    return {
      parse: (tagToken, remainingTokens) => {
        this.args = tagToken.args
      },
      render: (scope, hash) => {
        const args = this.args.split(' ')
        const srcArg = args.find(el => el.indexOf('src=') !== -1)
        const altArg = args.find(el => el.indexOf('alt=') !== -1)
        const widthArg = args.find(el => el.indexOf('width=') !== -1)
        const heightArg = args.find(el => el.indexOf('height=') !== -1)
        const classesArg = args.find(el => el.indexOf('classes=') !== -1)

        const src = srcArg ? liquidEngine.evalValue(srcArg.replace('src=', ''), scope) : ''
        const alt = altArg ? liquidEngine.evalValue(altArg.replace('alt=', ''), scope) : ''
        const width = widthArg ? liquidEngine.evalValue(widthArg.replace('width=', ''), scope) : ''
        const height = heightArg ? liquidEngine.evalValue(heightArg.replace('height=', ''), scope) : ''
        const classes = classesArg ? liquidEngine.evalValue(classesArg.replace('classes=', ''), scope) : ''

        return Promise.resolve(`<img class="${ classes.split('+').join(' ') || '' }" src="${'https://res.cloudinary.com/starbist/image/upload/w_auto,f_auto,q_auto:eco,dpr_auto,c_scale/' + src}" alt="${ alt || '' }" width="${ width || '' }" height="${ height || '' }" sizes="100vw" loading="lazy">`)
      }
    }
  })

  eleventyConfig.addLiquidFilter('cldnrysrc', (name) => "https://res.cloudinary.com/starbist/image/upload/w_auto,f_auto,q_auto:eco,dpr_auto,c_scale/" + name)

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
      htmlTemplateEngine: 'liquid',
      markdownTemplateEngine: 'liquid'
    }
  }
}
