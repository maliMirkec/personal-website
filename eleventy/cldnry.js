import Image from '@11ty/eleventy-img';
const link = `https://res.cloudinary.com/starbist/image/upload/w_2400,f_auto,q_auto,c_scale/`

const cldnryfetch = async (src, alt, widths, lazy, classes, svg) => {
  const formats = svg ? ["svg"] : ["webp"]
  const linkUrl = svg ? link.replace('f_auto,', '') : link

  let metadata = await Image(`${linkUrl}${src}`, {
    widths: widths || [400, 700, 1000, 1300, 1600],
    formats: formats,
    svgShortCircuit: true,
    urlPath: '/gfx/cldnry/',
    outputDir: '.cache/cldnry/'
  })

  let imageAttributes = {
    alt,
    class: classes || '',
    sizes: '100vw',
    loading: lazy ? "lazy" : "eager",
    decoding: lazy ? "async": "sync",
  }

  return Image.generateHTML(metadata, imageAttributes)
}

const cldnryimg = async (img, alt, width, height, classes, instant) => {
  let attr = ''

  if(width) {
    attr += ` width="${ width }"`
  }

  if(height) {
    attr += ` height="${ height }"`
  }

  if(instant) {
    attr += ` fetchpriority="high"`
  } else {
    attr += ` loading="lazy"`
  }

  const classList = classes ? ` class="${classes}"` : ''

  let ar = ''
  let ar2 = ''

  if(width && width !== 'auto' && height && height !== 'auto') {
    ar = `ar_${width}:${height},w_${width},`
    ar2 = `ar_${width}:${height},w_${width * 2},`
  }

  const src = `https://res.cloudinary.com/starbist/image/upload/${ar}f_auto,q_auto:eco,dpr_auto,c_scale/${img}`

  const srcset = `https://res.cloudinary.com/starbist/image/upload/${ar2}f_auto,q_auto:eco,dpr_auto,c_scale/${img} 2x, ${src}`

  return `<img srcset="${srcset}" src="${src}" alt="${ alt || '' }" ${attr} ${classList}>`
}

const cldnrylink = async (link, src, alt, width, height, classes, instant) => {
  return `<a href="${link}">${await cldnryimg(src, alt, width, height, classes, instant)}</a>`
}

const cldnrysrc = async (img, width = 1200) => {
  const src = `${'https://res.cloudinary.com/starbist/image/upload/w_' + width + ',f_auto,q_auto:eco,dpr_auto,c_scale/' + img}`

  return src
}

export {
  cldnryimg,
  cldnrylink,
  cldnryfetch,
  cldnrysrc
};
