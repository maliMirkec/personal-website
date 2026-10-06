// Scrapes recent tracks from the public Last.fm profile. Shared by the
// build-time data file (site/_data/lastfm.js) and the refresh function
// (netlify/functions/lastfm.js).
import * as cheerio from 'cheerio'

const PROFILE_URL = 'https://www.last.fm/user/maliMirkec'
const SITE_URL = 'https://www.last.fm'

/**
 * Fetch and parse the recent tracks.
 * @returns {Promise<Array<{ song: string, artist: string, trackUrl: string }>>}
 */
export const getTracks = async () => {
  const response = await fetch(PROFILE_URL)

  if (!response.ok) {
    throw new Error(`Last.fm responded with ${response.status}`)
  }

  const $ = cheerio.load(await response.text())

  return $('.chartlist-row--with-artist')
    .map((index, row) => ({
      song: $(row).find('.chartlist-name').text().trim(),
      artist: $(row).find('.chartlist-artist').text().trim(),
      trackUrl: `${SITE_URL}${$(row).find('.chartlist-name a').attr('href')}`,
    }))
    .get()
}
