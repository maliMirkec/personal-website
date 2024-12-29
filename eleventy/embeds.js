const markdownIt = require('markdown-it')
const markdownItRenderer = new markdownIt()

const cp_id = (id) => `cp_embed_${id.replace(/\//g, '_')}`

const codepen = async (user, pen, theme, tab, height, width, lazy) => `<iframe id="${cp_id(pen || '')}" src="//codepen.io/${ user }/embed/${ pen }?height=${ height || '300' }&theme-id=${ theme || 'dark' }&slug-hash=${ pen }&default-tab=${ tab || 'result' }" scrolling="no" frameborder="no" height="${ height || '300' }" allowTransparency="true" allowfullscreen="true" class="cp_embed_iframe" style="width:${ width || '100%' };overflow: hidden;"${lazy ? ' loading="lazy"' : ''}></iframe>`

const caniuse = async (feature, periods) => `<p class="ciu_embed" data-feature="${ feature }" data-periods="${ periods }"><a href="http://caniuse.com/#feat=${ feature }">Can I Use ${ feature }?</a> Data on support for the ${ feature } feature across the major browsers from caniuse.com.</p><script async src="//cdn.jsdelivr.net/caniuse-embed/1.1.0/caniuse-embed.min.js"></script>`

const twrapper = async (table) => `<div class="table-wrapper">${ markdownItRenderer.render(table.trim()) }</div>`

const embed = async (code, width, height) => `<div class="embed" style="aspect-ratio:${width}/${height}">${ code }</div>`

const video = async (src, width, height, autoplay, loop, muted, gif, classes) => `<video width="${ width || '' }" height="${ height || '' }" controls playsinline ${autoplay ? ' autoplay': ''}${loop ? ' loop': ''}${muted ? ' muted': ''} poster="${src}.jpg"${classes ? ' class="' + classes + '"' : ''}><source type="video/mp4" src="${src}.mp4"><source type="video/webm" src="${src}.webm">${gif ? 'Your browser does not support HTML5 video tag. <a href="' + src + '.gif">Click here to view original GIF</a>.' : ''}</video>`

const note = async (str, title) => {
  let dataTitle = title ? ` data-title="${title}"` : ''
  return `<div class="note"${dataTitle}>${ markdownItRenderer.render(str.trim()) }</div>`
}

module.exports = {
  codepen: codepen,
  caniuse: caniuse,
  twrapper: twrapper,
  embed: embed,
  video: video,
  note: note
}
