window.addEventListener('load', () => {
  const $elem = document.querySelector('.js-page-loaded-in')
  if(!$elem) {
    console.log('Element not found. Please add `.js-page-loaded-in` class to the element.')
    return false
  }

  if ($elem) {
    // Wait for the page to finish loading
    const pageLoadedIn = performance.mark("pageLoadedIn")
    const loadTime = pageLoadedIn.startTime / 1000
    const loadTimeRounded = loadTime.toLocaleString('en-US', {minimumFractionDigits: 3, maximumFractionDigits: 3})

    $elem.innerHTML = `Page loaded in ${loadTimeRounded}s.`
  }
})

const lastfm = () => {
  const $lastfm = document.querySelector('.js-lastfm')

  if ($lastfm) {
    const $tracks = document.querySelector('.js-lastfm-tracks')
    const $refresh = document.querySelector('.js-lastfm-refresh')

    if ($tracks && $refresh) {
      $refresh.addEventListener('click', () => {
        fetch('/api/lastfm.js')
          .then(response => response.json())
          .then(data => {
            if (data) {
              $tracks.innerHTML = '';

              data.forEach((item, i) => {
                if (i < 5) {
                  const li = document.createElement('li')
                  const a = document.createElement('a')
                  a.href = item.trackUrl
                  a.innerHTML = `${item.artist} - ${item.song}`
                  li.appendChild(a)
                  $tracks.appendChild(li)
                }
              })
            }
          })
      })
    }
  }
}

setTimeout(() => {
  lastfm()
}, 100)
