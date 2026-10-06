// Fills the footer note with how long the page took to load. The note is
// rendered as “Page loaded in …” so the footer keeps its height until then.

const SECONDS_FORMAT = { minimumFractionDigits: 3, maximumFractionDigits: 3 }

export const pageLoadedIn = () => {
  const $elem = document.querySelector('.js-page-loaded-in')
  if (!$elem) {
    return
  }

  const show = () => {
    const [navigation] = performance.getEntriesByType('navigation')
    const ms = navigation?.loadEventStart || performance.now()
    const seconds = (ms / 1000).toLocaleString('en-US', SECONDS_FORMAT)

    $elem.textContent = `Page loaded in ${seconds}s.`
  }

  if (document.readyState === 'complete') {
    show()
  } else {
    window.addEventListener('load', show, { once: true })
  }
}
