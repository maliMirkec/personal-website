// const captureWebsite = require('capture-website')

exports.handler = async function (event) {
  try {
    return {
      statusCode: 200,
      body: 'Success!',
      headers: {
        "content-type": "text"
      }
    }

    // const url = event.rawUrl.replace('og-img', 'og-svg')

    // const buffer = captureWebsite.buffer(url)

    // console.log('buffer');

    // console.log(buffer);

    return {
      statusCode: 200,
      // body: buffer.toString('base64'),
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
