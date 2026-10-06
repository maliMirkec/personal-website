// Returns recent Last.fm tracks as JSON for the refresh button (src/js/modules/lastfm.js).
import { getTracks } from '../../eleventy/lastfm.js'

export default async () => {
  try {
    return Response.json(await getTracks())
  } catch (error) {
    console.error(error)
    return Response.json({ error: 'Could not load tracks.' }, { status: 502 })
  }
}
