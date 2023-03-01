const utf8 = require('utf8')
const sharp = require('sharp')

exports.handler = async function (event) {
  try {
    let textArray = []
    let line = ''
    const offset = 28
    let text = 'Home of fearless web developer Silvestar Bistrović'

    if(event.queryStringParameters && event.queryStringParameters.text) {
      text = event.queryStringParameters.text
    }

    let words = text.split(' ')

    for (let i = 0; i < words.length; i++) {
      if(line.length + words[i].length < offset) {
        line.length += words[i].length;
        line += ` ${words[i]}`
      } else {
        textArray.push(line)
        line.length = words[i].length
        line = words[i]
      }

      if (i === words.length - 1) {
        textArray.push(line)
      }
    }

    const yPosition = 320
    const yOffset = 65
    let tspan = ''

    for (let i = 0; i < textArray.length; i++) {
      if(i < 4) {
        tspan += `<tspan x="260" y="${yPosition + (yOffset * i)}">${utf8.encode(textArray[i].trim())}</tspan>`
      }
    }

    const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect width="1200" height="630" rx="20" fill="white"/><rect x="56" y="56" width="1088" height="518" rx="15" stroke="#FF3366" stroke-width="14"/><rect x="100" y="100" width="125" height="126" fill="url(#pattern0)"/><defs><pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0_1411_54" transform="scale(0.004 0.00396825)"/></pattern><image id="image0_1411_54" width="250" height="252" xlink:href="data:image/png;base64,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"/></defs><style>text{background:gold;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';font-size:55px;font-weight:bold;fill:#000;stroke:#000;overflow:hidden;}</style><text x="260" y="279" height="247" width="816">${tspan}</text></svg>`

    const img = await sharp(Buffer.from(utf8.decode(svg)))
      .png()
      .toBuffer()

    return {
      statusCode: 200,
      body: img.toString('base64'),
      headers: {
        "content-type": "image/png"
      },
      isBase64Encoded: true,
    }
  } catch (error) {
    console.log(error)

    return {
      statusCode: 200,
      body: 'Error!',
      headers: {
        "content-type": "text"
      }
    }
  }
}
