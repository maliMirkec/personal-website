const puppeteer = require('puppeteer')

exports.handler = async function (event) {
  try {
    const url = event.rawUrl.replace('og-img', 'og-svg')

    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    const buffer = await page.screenshot({
      fullPage: true
    })
    await page.close()
    await browser.close()

    console.log('buffer');

    console.log(buffer);

    return {
      statusCode: 200,
      body: buffer.toString('base64'),
      headers: {
        "content-type": "image/jpeg"
      },
      isBase64Encoded: true,
    }
  } catch (error) {
    console.log(error);
    return {
      statusCode: 200,
      body: 'Error!',
      headers: {
        "content-type": "text"
      }
    }
  }
}
