const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))
const cheerio = require('cheerio')
const fs = require('fs')
const env = require('./env')

module.exports = async function (event) {
  // if(!env.production) {
  //   return false
  // }

  let tracks = []

  const tracksFile = './netlify/functions/lastfm.json'

  const loadTracks = fs.readFileSync(tracksFile, 'utf8')

  if(loadTracks) {
    return JSON.parse(loadTracks)
  }

  return await fetch('https://www.last.fm/user/maliMirkec')
    .then((response) => response.text())
    .then((data) => {
      const $ = cheerio.load(data)

      $('.chartlist-row--with-artist').each((i, row) => {
        tracks.push({
          song: $(row).find('.chartlist-name').text().trim(),
          artist: $(row).find('.chartlist-artist').text().trim(),
          trackUrl: `https://www.last.fm${$(row).find('.chartlist-name a').attr('href')}`
        })
      })

      fs.writeFileSync(tracksFile, JSON.stringify(tracks));

      return tracks
    })
}
