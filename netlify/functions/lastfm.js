const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))
const cheerio = require('cheerio')
const fs = require('fs')

exports.handler = async function (event) {
  const tracksFile = './netlify/functions/lastfm.json'

  return await fetch('https://www.last.fm/user/maliMirkec')
    .then((response) => response.text())
    .then((data) => {
      const $ = cheerio.load(data)
      let tracks = []

      $('.chartlist-row--with-artist').each((i,row) => {
        tracks.push({
          track: $(row).find('.chartlist-name').text().trim(),
          artist: $(row).find('.chartlist-artist').text().trim(),
          trackUrl: `https://www.last.fm${$(row).find('.chartlist-name a').attr('href')}`
        })
      })

      const tracksString = JSON.stringify(tracks)

      fs.writeFileSync(tracksFile, tracksString);

      return {
        statusCode: 200,
        body: tracksString,
        headers: {
          'content-type': 'text'
        }
      }
    })
}
