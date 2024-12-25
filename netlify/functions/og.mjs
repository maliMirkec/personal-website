const base64 = require('base-64');

const balanceText = (text, maxLineLength) => {
  const words = text.split(' ');
  let balancedText = '';
  let currentLine = '';

  words.forEach(word => {
    if ((currentLine + word).length > maxLineLength) {
      balancedText += currentLine.trim() + '\n';
      currentLine = word + ' ';
    } else {
      currentLine += word + ' ';
    }
  });

  balancedText += currentLine.trim();
  return balancedText;
}

export default async (req, context) => {
  const urlParams = new URLSearchParams(req.url.split('?').pop())
  const text = urlParams.get('text') || ''
  const letterLimit = 28
  let fontSize = 60

  const balancedText = balanceText(text, letterLimit)
  // const linesLength = balancedText.split('\n').map(line => line.length)
  // const maxLineLength = Math.max(...linesLength)

  // if(maxLineLength >= 25) {
  //   fontSize = 48
  // } else if(maxLineLength >= 23) {
  //   fontSize = 51
  // } else if(maxLineLength >= 20) {
  //   fontSize = 56
  // }

  let query = encodeURI(balancedText.replace(',', ''))

  const img = await fetch(`https://res.cloudinary.com/starbist/image/upload/co_rgb:043A73,l_text:Montserrat_${fontSize}_bold_normal_left:${query}/fl_layer_apply,g_west,x_120,y_0/social_s4tndg.png`)

  console.log('img', img);

  return new Response(base64.encode(img), {
    status: 200,
    headers: { 'Content-Type': 'application/png' },
    isBase64Encoded: true
  })

  // return {
  //     statusCode: 200,
  //     body: img.toString('base64'),
  //     headers: {
  //       'content-type': 'image/png'
  //     },
  //     isBase64Encoded: true,
  //   }
}
