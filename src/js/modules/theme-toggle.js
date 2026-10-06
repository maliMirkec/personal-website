// Legacy design dark-mode toggle. The saved choice is applied before paint by
// the inline script in _legacy/toggle-check.liquid; the button is rendered
// `hidden` and revealed here.

const STORAGE_KEY = 'sb-dark-mode'

export const themeToggle = () => {
  const $toggle = document.querySelector('.js-toggle')
  if (!$toggle) {
    return
  }

  const $root = document.documentElement

  const sync = () => $toggle.setAttribute('aria-pressed', String($root.classList.contains('dark')))

  $toggle.addEventListener('click', () => {
    const isDark = $root.classList.toggle('dark')

    sync()

    try {
      localStorage.setItem(STORAGE_KEY, String(isDark))
    } catch (error) {
      // Storage can be blocked (private mode); the toggle still works for this page.
      console.warn(error)
    }
  })

  sync()
  $toggle.hidden = false
}
