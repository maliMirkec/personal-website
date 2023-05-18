require('page-loaded-in')

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

const animate = () => {
  const $animates = document.querySelectorAll('.js-animate')

  if ($animates.length) {
    const options = {
      root: null,
      rootMargin: "0%",
      threshold: 1.0,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          const className = entry.target.classList.contains('button') ? 'animate--alpha' : 'animate--beta'

          // entry.target.classList.remove(className)

          setTimeout(() => {
            entry.target.classList.add(className)
          }, 1000)
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    $animates.forEach($animate => {
      observer.observe($animate);
    })
  }
}

setTimeout(() => {
  animate()
}, 0)
animate()

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
