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

    $elem.innerHTML += `Page loaded in ${loadTimeRounded}s.`
  }
})

// Theme toggle
const $toggle = document.querySelector('.js-toggle')

if ($toggle) {
  $toggle.addEventListener('click', () => {
    document.documentElement.classList.add('switch')
    document.documentElement.classList.toggle('dark')

    localStorage.setItem('sb-dark-mode', document.documentElement.classList.contains('dark'))

    setTimeout(() => {
      document.documentElement.classList.remove('switch')
    }, 1000)
  })
}

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
                  const a = document.createElement('a')
                  a.href = item.trackUrl
                  a.innerHTML = `${item.artist} - ${item.song}`
                  $tracks.appendChild(a)
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
