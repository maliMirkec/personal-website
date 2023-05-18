const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))
const cheerio = require('cheerio')

exports.handler = async function (event) {
  return await fetch('https://www.last.fm/user/maliMirkec')
    .then((response) => response.text())
    .then((data) => {
      const $ = cheerio.load(data)
      let tracks = []

      $('.chartlist-row--with-artist').each((i,row) => {
        tracks.push({
          song: $(row).find('.chartlist-name').text().trim(),
          artist: $(row).find('.chartlist-artist').text().trim(),
          trackUrl: `https://www.last.fm${$(row).find('.chartlist-name a').attr('href')}`
        })
      })

      const tracksString = JSON.stringify(tracks)

      return {
        statusCode: 200,
        body: tracksString,
        headers: {
          'content-type': 'text'
        }
      }
    })
}
