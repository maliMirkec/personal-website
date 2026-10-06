// Legacy design mobile menu. Without JavaScript every link stays visible; the
// script marks the nav with data-menu so CSS can collapse it behind the button.

export const menuToggle = () => {
  const $nav = document.querySelector('.js-menu')
  if (!$nav) {
    return
  }

  const $button = $nav.querySelector('.js-menu-btn')
  if (!$button) {
    return
  }

  const isOpen = () => $button.getAttribute('aria-expanded') === 'true'

  const setMenu = (open) => {
    $button.setAttribute('aria-expanded', String(open))
    $nav.classList.toggle('active', open)
  }

  $nav.dataset.menu = 'ready'

  $button.addEventListener('click', () => setMenu(!isOpen()))

  $nav.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || !isOpen()) {
      return
    }

    setMenu(false)
    $button.focus()
  })
}
