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
      private_key: process.env.GGL_SHTS_KEY,
    });

    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0]

    sheet.addRow({
      date: now,
      url: url,
      ua: ua
    });
  } catch (error) {
    console.log(error);
  }

  console.log('client-ip:', event.headers['client-ip']);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello World"
    }),
  };
};
