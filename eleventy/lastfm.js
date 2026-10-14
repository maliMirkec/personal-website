// Fetches recent tracks from the Last.fm API. Shared by the build-time data
// file (site/_data/lastfm.js) and the refresh function (netlify/functions/lastfm.js).
// Requires the LASTFM_API_KEY environment variable.

const API_URL = 'https://ws.audioscrobbler.com/2.0/'
const USER = 'maliMirkec'
const LIMIT = 10

/**
 * Fetch the recent tracks.
 * @returns {Promise<Array<{ song: string, artist: string, trackUrl: string }>>}
 */
export const getTracks = async () => {
  const apiKey = process.env.LASTFM_API_KEY

  if (!apiKey) {
    throw new Error('LASTFM_API_KEY is not set')
  }

  const params = new URLSearchParams({
    method: 'user.getrecenttracks',
    user: USER,
    api_key: apiKey,
    format: 'json',
    limit: LIMIT,
  })
  const response = await fetch(`${API_URL}?${params}`)

  if (!response.ok) {
    throw new Error(`Last.fm responded with ${response.status}`)
  }

  const { recenttracks } = await response.json()

  return recenttracks.track.map((track) => ({
    song: track.name,
    artist: track.artist['#text'],
    trackUrl: track.url,
  }))
}
