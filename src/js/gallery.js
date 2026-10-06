// Expandable gallery on the favorites pages: a pressed tile grows to cover its
// neighbours, arrow keys move between tiles, Escape closes. Loaded via the
// `js: gallery` front matter and bundled by esbuild (eleventy/js.js).
import { cssTimeMs, initFn } from './modules/helpers.js'

// Grid gap (0.125rem in src/css/style-2024/gallery.css) plus 1px to cover subpixel seams.
const EXPAND_GAP = 3
const ACTIVE_Z_INDEX = 10

const gallery = () => {
  const $gallery = document.querySelector('.js-favs')
  if (!$gallery) {
    return
  }

  const $items = [...$gallery.querySelectorAll('li')]
  if (!$items.length) {
    return
  }

  const $buttonOf = ($item) => $item.querySelector('button')
  const layout = { cols: 0, width: 0, height: 0 }
  let $active = null
  let timeout = 0

  const measure = () => {
    const top = $items[0].getBoundingClientRect().top
    const style = getComputedStyle($items[0])

    // The first tile on a new row tells how many columns fit.
    layout.cols = Math.max(
      0,
      $items.findIndex(($item) => $item.getBoundingClientRect().top !== top),
    )
    layout.width = parseFloat(style.width)
    layout.height = parseFloat(style.height)
  }

  const reset = ($current) => {
    $items.forEach(($item) => {
      $item.style.transform = 'none'

      if ($item === $current) {
        return
      }

      $buttonOf($item).setAttribute('aria-expanded', 'false')
      // Lower the tile after it has shrunk back, so it doesn't flash under its neighbours.
      setTimeout(() => {
        $item.style.zIndex = 0
      }, timeout)
    })
  }

  const close = () => {
    if (!$active) {
      return
    }

    $active.setAttribute('aria-expanded', 'false')
    $active = null
  }

  const open = ($item, $button, index) => {
    const { cols, width, height } = layout
    if (cols === 1) {
      return
    }

    const rows = Math.ceil($items.length / cols) - 1
    if (rows === 0) {
      return
    }

    reset($item)

    if ($active === $button) {
      close()
      return
    }

    const isLastRow = index + 1 > rows * cols
    const isRightEdge = (index + 1) % cols === 0

    $item.style.transformOrigin = `${isLastRow ? 'bottom' : 'top'} ${isRightEdge ? 'right' : 'left'}`

    const scaleX = (width * 2 + EXPAND_GAP) / width
    const scaleY = (height * 2 + EXPAND_GAP) / height

    setTimeout(() => {
      $item.style.zIndex = ACTIVE_Z_INDEX
      $item.style.transform = `scaleX(${scaleX}) scaleY(${scaleY})`
      $button.setAttribute('aria-expanded', 'true')
      $active = $button
    }, timeout)
  }

  const openSibling = ($sibling) => {
    if (!$sibling) {
      return
    }

    const $button = $buttonOf($sibling)

    $active = null
    $button.focus()
    $button.click()
  }

  $items.forEach(($item, index) => {
    const $button = $buttonOf($item)

    $button.addEventListener('click', () => open($item, $button, index))
  })

  // Keys are handled only while focus is inside the gallery.
  $gallery.addEventListener('keydown', (event) => {
    if (!$active) {
      return
    }

    if (event.key === 'Escape') {
      $active.click()
    } else if (event.key === 'ArrowLeft') {
      openSibling($active.parentElement.previousElementSibling)
    } else if (event.key === 'ArrowRight') {
      openSibling($active.parentElement.nextElementSibling)
    }
  })

  new ResizeObserver(() => {
    measure()
    reset()
    close()
  }).observe($gallery)

  timeout = cssTimeMs('--tr-111')
  measure()
}

initFn(gallery)
