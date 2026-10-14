import Image from '@11ty/eleventy-img'
import path from 'path'
import { promises as fsp } from 'fs'
import { escapeHtml } from './escape.js'

const link = `https://res.cloudinary.com/starbist/image/upload/w_2400,f_auto,q_auto,c_scale/`

const OUTPUT_DIR = 'public/gfx/cldnry/'

// `sizes` should describe the rendered width, so the browser can pick the
// smallest srcset candidate. Eager images are above the fold and may be the
// LCP element, so they get a high fetch priority.
const cldnryfetch = async (src, alt, widths, lazy, classes, svg, sizes) => {
  const formats = svg ? ['svg'] : ['webp']
  const linkUrl = svg ? link.replace('f_auto,', '') : link

  const metadata = await Image(`${linkUrl}${src}`, {
    widths: widths || [400, 700, 1000, 1300, 1600],
    formats: formats,
    svgShortCircuit: true,
    urlPath: '/gfx/cldnry/',
    outputDir: '.cache/cldnry/',
    cacheOptions: {
      directory: '.cache/cldnry-fetch/',
    },
  })

  const entries = Object.values(metadata).flat()

  await fsp.mkdir(OUTPUT_DIR, { recursive: true })
  await Promise.all(entries.map((entry) => fsp.copyFile(entry.outputPath, path.join(OUTPUT_DIR, entry.filename))))

  const imageAttributes = {
    alt,
    class: classes || '',
    sizes: sizes || '100vw',
    loading: lazy ? 'lazy' : 'eager',
    decoding: 'async',
  }

  if (!lazy) {
    imageAttributes.fetchpriority = 'high'
  }

  return Image.generateHTML(metadata, imageAttributes)
}

// Dev builds skip image processing, but still read the original dimensions
// (fetch is cached in .cache/) so the browser can reserve space before an
// image loads and the page doesn't jump.
const cldnrydev = async (src, alt, lazy, classes, svg) => {
  const linkUrl = svg ? link.replace('f_auto,', '') : link
  const metadata = await Image(`${linkUrl}${src}`, {
    statsOnly: true,
    formats: [svg ? 'svg' : 'webp'],
    cacheOptions: {
      directory: '.cache/cldnry-fetch/',
    },
  })
  const { width, height } = Object.values(metadata).flat().at(-1)

  // Same Cloudinary URLs as before; only the dimensions are added.
  const html = await cldnryimg(src, alt, null, null, classes, !lazy)

  return html.replace(' src=', ` width="${width}" height="${height}" src=`)
}

const cldnryimg = async (img, alt, width, height, classes, instant) => {
  let attr = ''

  if (width) {
    attr += ` width="${escapeHtml(width)}"`
  }

  if (height) {
    attr += ` height="${escapeHtml(height)}"`
  }

  if (instant) {
    attr += ` fetchpriority="high"`
  } else {
    attr += ` loading="lazy"`
  }

  const classList = classes ? ` class="${escapeHtml(classes)}"` : ''

  let ar = ''
  let ar2 = ''

  if (width && width !== 'auto' && height && height !== 'auto') {
    ar = `ar_${width}:${height},w_${width},`
    ar2 = `ar_${width}:${height},w_${width * 2},`
  }

  const src = `https://res.cloudinary.com/starbist/image/upload/${ar}f_auto,q_auto:eco,dpr_auto,c_scale/${img}`

  const srcset = `https://res.cloudinary.com/starbist/image/upload/${ar2}f_auto,q_auto:eco,dpr_auto,c_scale/${img} 2x, ${src}`

  return `<img${classList} src="${escapeHtml(src)}" srcset="${escapeHtml(srcset)}" alt="${escapeHtml(alt)}"${attr}>`
}

const cldnrylink = async (link, src, alt, width, height, classes, instant) => {
  return `<a href="${escapeHtml(link)}">${await cldnryimg(src, alt, width, height, classes, instant)}</a>`
}

const cldnrysrc = async (img, width = 1200) => {
  return `https://res.cloudinary.com/starbist/image/upload/w_${width},f_auto,q_auto:eco,dpr_auto,c_scale/${img}`
}

export { cldnryimg, cldnrylink, cldnryfetch, cldnrydev, cldnrysrc }
