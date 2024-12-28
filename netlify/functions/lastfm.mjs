import fetch from 'node-fetch'
import * as cheerio from 'cheerio'

export default async (req, context) => {
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

      return new Response(tracksString, {
        status: 200,
        headers: { 'Content-Type': 'application/text' },
      })
    })
}
