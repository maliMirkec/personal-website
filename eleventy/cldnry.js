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
    outputDir: './assets/gfx/cldnry/'
  })

  let imageAttributes = {
    alt,
    class: classes || '',
    sizes: '100vw',
    loading: lazy ? "lazy" : "eager",
    decoding: lazy ? "async": "sync",
  }

  return Image.generateHTML(metadata, imageAttributes)

  console.log('alt, width, height, classes, instant', alt, width, height, classes, instant);
  // (src, alt, widths = [300, 600], sizes = "100vh") {
	// 	let metadata = await Image(src, {
	// 		widths,
	// 		formats: ["avif", "jpeg"],
	// 	});

	// 	let imageAttributes = {
	// 		alt,
	// 		sizes,
	// 		loading: "lazy",
	// 		decoding: "async",
	// 	};

	// 	// You bet we throw an error on a missing alt (alt="" works okay)
	// 	return Image.generateHTML(metadata, imageAttributes);
	// }
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

  const src = `${'https://res.cloudinary.com/starbist/image/upload/ar_' + width + ':' + height + ',w_' + width + ',f_auto,q_auto:eco,dpr_auto,c_scale/' + img}`

  const srcset = `${'https://res.cloudinary.com/starbist/image/upload/ar_' + width + ':' + height + ',w_' + width * 2 + ',f_auto,q_auto:eco,dpr_auto,c_scale/' + img} 2x, ${src}`

  return `<img srcset="${srcset}" src="${src}" alt="${ alt || '' }" ${attr} ${classList}>`
}

const cldnrylink = async (link, src, alt, width, height, classes, instant) => {
  return `<a href="${link}">${await cldnryimg(src, alt, width, height, classes, instant)}</a>`
}

export {
  cldnryimg,
  cldnrylink,
  cldnryfetch
};
