require('page-loaded-in')

if(window.cloudinary) {
  const cl = window.cloudinary.Cloudinary.new({cloud_name: "starbist"})
  cl.responsive()
}

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

// 10up
const gallery = () => {
  // Set defaults
  let $activeElem = false
  let timeout = 0

  // Get favorites element
  const $fav = document.querySelector('.js-favs')

  // Get the transition timeout from CSS
  const getTimeouts = () => {
    const durationOn = parseFloat(getComputedStyle(document.documentElement)
      .getPropertyValue('--duration'))

    timeout = parseFloat(durationOn) * 1000
  }

  // Get the top offset
  const getTop = ($elem) => {
    const elemRect = $elem.getBoundingClientRect()

    return elemRect.top
  }

  // Set data attributes for calculations
  const setDataAttrs = ($elems, $parent) => {
    // Get the top offset of the first element
    let top = getTop($elems[0])

    // Set grid gap from CSS
    const gridColumnGap = parseFloat(getComputedStyle(document.documentElement)
      .getPropertyValue('--ggap'))

    $parent.setAttribute('data-gap', gridColumnGap)

    // Set grid item width from CSS
    const eStyle = getComputedStyle($elems[0])
    $parent.setAttribute('data-width', eStyle.width)
    $parent.setAttribute('data-height', eStyle.height)

    let colsSet = false

    // Iterate through grid items
    $elems.forEach(($elem, i) => {
      if(!colsSet) {
        const t = getTop($elem)

        // Check when top offset changes
        if (t !== top) {
          // Set the number of columns and break stop the loop

          colsSet = true

          $parent.setAttribute('data-cols', i)
        }
      }
    })
  }

  // Deactivate grid items
  const deactiveElems = ($elems, $parent, $currentElem, $button) => {
    // Unset parent class
    $parent.classList.remove('is-zoomed')

    $elems.forEach($elem => {
      let $thisElem = $elem

      // Unset item class
      $thisElem.classList.remove('is-zoomed')
      // Unset item CSS transform
      $thisElem.style.transform = 'none'

      // Skip the rest if the item is the current item
      if ($thisElem !== $currentElem) {
        if ($button) {
          $button.setAttribute('aria-expanded', false)
        }

        // After a half of the timeout, reset CSS z-index to avoid overlay issues
        setTimeout(() => {
          $thisElem.style.zIndex = 0
        }, timeout)
      }
    })
  }

  // Set active item
  const activateElem = ($elems, $parent, $elem, $button, lengthOfElems, i) => {
    let $currentElem = $elem

    // Get data attributes from parent
    const cols = parseInt($parent.getAttribute('data-cols'), 10)
    const width = parseFloat($parent.getAttribute('data-width'))
    const height = parseFloat($parent.getAttribute('data-height'))
    const gap = parseFloat($parent.getAttribute('data-gap')) + 1


    // If there is only a single column, prevent from executing
    if (cols === 1) {
      return
    }

    // Calculate the number of rows
    const rows = Math.ceil(lengthOfElems / cols) - 1

    // If there is only a single row, prevent from executing
    if (rows === 0) {
      return
    }

    // Reset all elements
    deactiveElems($elems, $parent, $currentElem, $button)

    // If there is active element, set focus to it,
    // unset global active element, and prevent from further executing
    // if ($activeElem) {
    //   $activeElem.focus()
    //   $activeElem = false
    //   return
    // }

    // When there is active element, deactivate it
    if ($activeElem === $button) {
      $activeElem = false
    } else {
      // Calculate if the item is in the last row
      const isLastRow = i + 1 > rows * cols
      // Set default transform direction to top (expand down)
      let transformOrigin = 'top'

      if (isLastRow) {
        // If the item is in the last row, set transform direction to bottom (expand up)
        transformOrigin = 'bottom'
      }

      // Calculate if the item is the most right
      const isRight = (i + 1) % cols !== 0

      if (isRight) {
        // If the item is the most right, set transform direction to left (expand right)
        transformOrigin += ' left'
      } else {
        // If the item is the most right, set transform direction to right (expand left)
        transformOrigin += ' right'
      }

      $currentElem.style.transformOrigin = transformOrigin

      // Calculate the scale coefficient
      const scaleX = (width * 2 + gap) / width
      const scaleY = (height * 2 + gap) / height

      // After a whole timeout, set CSS high z-index to avoid overlay issues
      setTimeout(() => {
        // Set high CSS z-index to avoid overlay issues
        $currentElem.style.zIndex = 10
        // Set parent class
        $parent.classList.add('is-zoomed')
        // Set item class
        $currentElem.classList.add('is-zoomed')
        // Set item CSS transform
        $currentElem.style.transform = `scaleX(${scaleX}) scaleY(${scaleY})`
        // Set item aria expanded
        $button.setAttribute('aria-expanded', true)
        // Set global active item
        $activeElem = $button
      }, timeout)
    }
  }

  // Set sibling as an active item
  const activateSibling = ($sibling) => {
    // Find anchor
    const $siblingButton = $sibling.querySelector('button')

    // Unset global active element
    $activeElem = false

    // Focus and click on current
    $siblingButton.focus()
    $siblingButton.click()
  }

  // Set click events on anchors
  const setClicks = ($elems, $parent) => {
    $elems.forEach(($elem, i) => {
      // Find anchor
      const $button = $elem.querySelector('button')

      $button.addEventListener('click', () => {
        // Set active item on click
        activateElem($elems, $parent, $elem,  $button, $elems.length, i)
      })
    })
  }

  // Set keyboard events
  const setKeyboardEvents = () => {
    document.addEventListener('keydown', (e) => {
      // Take action only if global active element exists
      if ($activeElem) {
        // If key is “escape”, emulate the click on the global active element
        if (e.code === 'Escape') {
          $activeElem.click()
        }

        // If key is “left arrow”, activate the previous sibling
        if (e.code === 'ArrowLeft') {
          const $previousSibling = $activeElem.parentNode.previousElementSibling

          if($previousSibling) {
            activateSibling($previousSibling)
          }
        }

        // If key is “right arrow”, activate the next sibling
        if (e.code === 'ArrowRight') {
          const $nextSibling = $activeElem.parentNode.nextElementSibling

          if($nextSibling) {
            activateSibling($nextSibling)
          }
        }
      }
    })
  }

  // Set resize events
  const setResizeEvents = ($elems, $parent) => {
    window.addEventListener('resize', () => {
      // Set data attributes for calculations
      setDataAttrs($elems, $parent, true)
      // Deactivate grid items
      deactiveElems($elems, $parent)
    })
  }

  // If the favorites element exists, start the functionality
  if ($fav) {
    // Find all list items
    const $favs = $fav.querySelectorAll('li')

    // Check if there are list items
    if ($favs.length) {
      // Get the transition timeout from CSS
      getTimeouts($favs)
      // Set data attributes for calculations
      setDataAttrs($favs, $fav)
      // Set click events on anchors
      setClicks($favs, $fav)
      // Set keyboard events
      setKeyboardEvents()
      // Set resize events
      setResizeEvents($favs, $fav)
    }
  }
}

gallery()

const lastfm = () => {
  const $lastfm = document.querySelector('.js-lastfm')

  if ($lastfm) {
    fetch('/api/lastfm.js')
      .then(response => response.json())
      .then(data => {
        if (data) {
          data.forEach((item, i) => {
            if (i < 5) {
              const a = document.createElement('a')
              a.href = item.trackUrl
              a.innerHTML = `${item.artist} - ${item.track}`
              $lastfm.appendChild(a)
            }
          })
        }
      })
      .catch(err => {
        const span = document.createElement('span')
        span.innerHTML = 'Cannot load data.'
        $lastfm.appendChild(span)
      })
  }
}

lastfm()

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

          entry.target.classList.remove(className)
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

animate()
