const puppeteer = require('puppeteer')

exports.handler = async function (event) {
  const url = event.rawUrl.replace('og-img', 'og-svg')

  try {
    const browser = await puppeteer.launch()
    console.log('browser');
    console.log(browser);
    const page = await browser.newPage()
    await page.goto(url)
    const buffer = await page.screenshot({
      fullPage: true
    })
    console.log('buffer');
    console.log(buffer);
    await page.close()
    await browser.close()

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
