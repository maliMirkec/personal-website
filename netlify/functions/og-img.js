// const puppeteer = require('puppeteer')
const { chromium } = require("playwright");

exports.handler = async function (event) {
  const url = event.rawUrl.replace('og-img', 'og-svg')

  try {
    let browser = await chromium.launch();

    let page = await browser.newPage();
    await page.goto(url);
    const buffer = await page.screenshot();
    console.log(buffer);
    await browser.close();

    // const browser = await puppeteer.launch()
    // const page = await browser.newPage()
    // await page.goto(url)
    // const buffer = await page.screenshot({
    //   fullPage: true
    // })
    // await page.close()
    // await browser.close()

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
