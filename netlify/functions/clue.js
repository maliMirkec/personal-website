exports.handler = async function (event, context) {
  const {
    GoogleSpreadsheet
  } = require('google-spreadsheet');

  let now = new Date();
  const url = event.queryStringParameters.url;
  const ua = event.headers['user-agent'];

  try {
    // Initialize the sheet - doc ID is the long id in the sheets URL
    const doc = new GoogleSpreadsheet(process.env.GGL_SHTS_ID);

    await doc.useServiceAccountAuth({
      client_email: process.env.GGL_SHTS_EMAIL,
      private_key: process.env.GGL_SHTS_KEY.replace(/\\n/gm, "\n"),
    });

    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0]

    await sheet.addRow({
      date: now,
      url: url,
      ua: ua
    });
  } catch (error) {
    console.log(error);
  }

  return {
    statusCode: 200,
    body: "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    headers: {
      "content-type": "image/gif"
    },
    isBase64Encoded: true,
  };
};
