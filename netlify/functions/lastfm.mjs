import fetch from 'node-fetch'
import * as cheerio from 'cheerio'

exports.handler = async function (event) {
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

      return {
        statusCode: 200,
        body: JSON.stringify(tracks),
        headers: {
          'content-type': 'text'
        }
      }
    })
}
