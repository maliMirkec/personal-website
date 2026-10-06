// Generates Open Graph images: the `text` query parameter is drawn onto a
// Cloudinary template. Used by the og meta tags and RSS enclosures (/og.png).

const LETTER_LIMIT = 28
const FONT_SIZE = 44
const TEMPLATE = 'social_s4tndg.png'

// Wraps words into lines of at most `maxLineLength` characters.
const balanceText = (text, maxLineLength) => {
  const lines = []
  let currentLine = ''

  text.split(' ').forEach((word) => {
    if ((currentLine + word).length > maxLineLength) {
      lines.push(currentLine.trim())
      currentLine = ''
    }
    currentLine += `${word} `
  })

  lines.push(currentLine.trim())

  return lines.join('\n')
}

// Cloudinary text layers need commas dropped and slashes double-escaped.
const encodeLayerText = (text) => encodeURIComponent(text.replaceAll(',', '')).replace(/%2F/g, '%252F')

export default async (req) => {
  const text = new URL(req.url).searchParams.get('text') || ''
  const layer = encodeLayerText(balanceText(text, LETTER_LIMIT))
  const url = `https://res.cloudinary.com/starbist/image/upload/f_png/co_rgb:043A73,l_text:Montserrat_${FONT_SIZE}_bold_normal_left:${layer}/fl_layer_apply,g_west,x_180,y_0/${TEMPLATE}`

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`Cloudinary responded with ${response.status}`)
    }

    return new Response(response.body, {
      status: 200,
      headers: { 'Content-Type': 'image/png' },
    })
  } catch (error) {
    console.error(error)
    return new Response('Could not generate the image.', {
      status: 502,
      headers: { 'Content-Type': 'text/plain' },
    })
  }
}
