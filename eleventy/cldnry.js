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

  const src = `${'https://res.cloudinary.com/starbist/image/upload/ar_' + width + ':' + height + ',w_' + width + ',f_auto,q_auto:eco,dpr_auto,c_scale/' + img}`

  const srcset = `${'https://res.cloudinary.com/starbist/image/upload/ar_' + width + ':' + height + ',w_' + width * 2 + ',f_auto,q_auto:eco,dpr_auto,c_scale/' + img} 2x, ${src}`

  return `<img srcset="${srcset}" src="${src}" alt="${ alt || '' }" ${attr} ${classList}>`
}

const cldnrylink = async (link, src, alt, width, height, classes, instant) => {
  return `<a href="${link}">${await cldnryimg(src, alt, width, height, classes, instant)}</a>`
}

module.exports = {
  cldnryimg: cldnryimg,
  cldnrylink: cldnrylink
}
