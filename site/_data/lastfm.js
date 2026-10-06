// Recent Last.fm tracks for the lastfm component. Fetched only in production
// builds; a failed request renders the page without the list.
import env from './env.js'
import { getTracks } from '../../eleventy/lastfm.js'

export default async () => {
  if (!env.production) {
    return false
  }

  try {
    return await getTracks()
  } catch (error) {
    console.error(error)
    return false
  }
}
