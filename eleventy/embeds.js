// Liquid shortcodes for embeds in Markdown content (CodePen, Can I Use, tables, videos, notes).
import markdownIt from 'markdown-it'
import { escapeHtml } from './escape.js'

const markdownItRenderer = new markdownIt()

const DEFAULT_HEIGHT = 300

const codepenId = (id) => `cp_embed_${id.replace(/\//g, '_')}`

const codepenIframe = (path, user, pen, theme, tab, height, width, lazy) => {
  const h = height || DEFAULT_HEIGHT
  const params = new URLSearchParams({
    height: h,
    'theme-id': theme || 'dark',
    'slug-hash': pen,
    'default-tab': tab || 'result',
  })
  const src = `https://codepen.io/${path}?${params}`
  const style = width ? ` style="--codepen-width: ${escapeHtml(width)}"` : ''

  return `<iframe class="codepen" src="${escapeHtml(src)}" id="${escapeHtml(codepenId(pen || ''))}" title="CodePen demo ${escapeHtml(pen)} by ${escapeHtml(user)}" height="${escapeHtml(h)}"${style}${lazy ? ' loading="lazy"' : ''} allowfullscreen></iframe>`
}

const codepen = async (user, pen, theme, tab, height, width, lazy) =>
  codepenIframe(`${user}/embed/${pen}`, user, pen, theme, tab, height, width, lazy)

const codepen2 = async (user, pen, theme, tab, height, width, lazy) =>
  codepenIframe(`editor/${user}/embed/${pen}`, user, pen, theme, tab, height, width, lazy)

const caniuse = async (feature, periods) => {
  const f = escapeHtml(feature)

  return `<p class="ciu_embed" data-feature="${f}" data-periods="${escapeHtml(periods)}"><a href="https://caniuse.com/#feat=${f}">Can I Use ${f}?</a> Data on support for the ${f} feature across the major browsers from caniuse.com.</p><script async src="https://cdn.jsdelivr.net/caniuse-embed/1.1.0/caniuse-embed.min.js"></script>`
}

const twrapper = async (table) => `<div class="table-wrapper">${markdownItRenderer.render(table.trim())}</div>`

// `code` is trusted embed markup written in the post itself.
const embed = async (code, width, height) =>
  `<div class="embed" style="--embed-ratio: ${escapeHtml(width)} / ${escapeHtml(height)}">${code}</div>`

const video = async (src, width, height, autoplay, loop, muted, gif, classes) => {
  const s = escapeHtml(src)
  const attrs = [
    classes ? `class="${escapeHtml(classes)}"` : '',
    width ? `width="${escapeHtml(width)}"` : '',
    height ? `height="${escapeHtml(height)}"` : '',
    `poster="${s}.jpg"`,
    'controls',
    'playsinline',
    autoplay ? 'autoplay' : '',
    loop ? 'loop' : '',
    muted ? 'muted' : '',
  ]
  const fallback = gif ? `Your browser does not support HTML5 video. <a href="${s}.gif">View the original GIF</a>.` : ''

  return `<video ${attrs.filter(Boolean).join(' ')}><source src="${s}.mp4" type="video/mp4"><source src="${s}.webm" type="video/webm">${fallback}</video>`
}

const note = async (str, title) => {
  const dataTitle = title ? ` data-title="${escapeHtml(title)}"` : ''

  return `<div class="note"${dataTitle}>${markdownItRenderer.render(str.trim())}</div>`
}

export { codepen, codepen2, caniuse, twrapper, embed, video, note }
