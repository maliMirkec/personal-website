// Refreshes the Last.fm tracks list from the Netlify function when the
// refresh button is pressed. The list is server-rendered, so it works without JS.

const TRACK_LIMIT = 5
const ENDPOINT = '/api/lastfm.js'

export const lastfm = () => {
  const $lastfm = document.querySelector('.js-lastfm')
  if (!$lastfm) {
    return
  }

  const $tracks = $lastfm.querySelector('.js-lastfm-tracks')
  const $refresh = $lastfm.querySelector('.js-lastfm-refresh')
  const $status = $lastfm.querySelector('.js-lastfm-status')
  if (!$tracks || !$refresh) {
    return
  }

  const setStatus = (message, visible) => {
    if (!$status) {
      return
    }
    $status.textContent = message
    $status.classList.toggle('vh', !visible)
  }

  const renderTracks = (tracks) => {
    const $items = tracks.slice(0, TRACK_LIMIT).map(({ artist, song, trackUrl }) => {
      const $item = document.createElement('li')
      const $link = document.createElement('a')

      $link.href = trackUrl
      $link.textContent = `${artist} - ${song}`
      $item.append($link)

      return $item
    })

    $tracks.replaceChildren(...$items)
  }

  $refresh.addEventListener('click', async () => {
    $lastfm.setAttribute('aria-busy', 'true')

    try {
      const response = await fetch(ENDPOINT)

      if (!response.ok) {
        throw new Error(`Last.fm request failed with ${response.status}`)
      }

      renderTracks(await response.json())
      setStatus('Tracks updated.', false)
    } catch (error) {
      console.error(error)
      setStatus('Could not load the latest tracks. Please try again later.', true)
    } finally {
      $lastfm.removeAttribute('aria-busy')
    }
  })
}
