// Cookies
import Cookies from 'js-cookie'

// color mode switch
const $toggle = document.querySelector('.toggle')

if ($toggle) {
  $toggle.addEventListener('click', () => {
    const thisColorMode = document.body.classList.contains('body--dark');

    Cookies.set('sb-color-mode', thisColorMode ? 'dark' : 'light', {
      expires: 7
    });
  })
}

// starter project
console.log('Powered by Starter Project (https://github.com/maliMirkec/starter-project).')

// signature animation
const calcPaths = (totalDur) => {
  // get all SVG elements - lines and dots
  const paths = document.querySelectorAll('.autograph__path')
  // prepare path length variable
  let len = 0
  // prepare animation delay length variable
  let delay = 0

  // escape if no elements found
  if (!paths.length) {
    return false
  }

  // set duration in seconds of animation to default if not set
  const totalDuration = totalDur || 7

  // calculate the full path length
  paths.forEach((path) => {
    const totalLen = path.getTotalLength()
    len += totalLen
  })

  paths.forEach((path) => {
    const pathElem = path
    // get current path length
    const totalLen = path.getTotalLength()
    // calculate current animation duration
    const duration = (totalLen / len) * totalDuration

    // set animation duration and delay
    pathElem.style.animationDuration = `${duration < 0.2 ? 0.2 : duration}s`
    pathElem.style.animationDelay = `${delay}s`

    // set dash array and offset to path length - this is how you hide the line
    pathElem.setAttribute('stroke-dasharray', totalLen)
    pathElem.setAttribute('stroke-dashoffset', totalLen)

    // set delay for the next path - added .2 seconds to make it more realistic
    delay += duration + 0.2
  })

  // set 'animated' class to body which will start the animation
  document.body.classList.add('animated')

  return true
}

// Source: https://codepen.io/jr-cologne/pen/zdYdmx?editors=1000
const $autograph = document.querySelector('.autograph')

function inView($elem) {
  const windowHeight = window.innerHeight
  const scrollY = window.scrollY || window.pageYOffset
  const scrollPosition = scrollY + windowHeight
  const elementPosition = $elem.getBoundingClientRect().top + scrollY + $elem.clientHeight

  if (scrollPosition > elementPosition) {
    return true
  }

  return false
}

if ($autograph) {
  const animate = () => {
    if (inView($autograph)) {
      calcPaths(5)
      document.removeEventListener('scroll', animate)
    }
  }

  document.addEventListener('scroll', animate)
  document.addEventListener('click', animate)
}

// form progress steps
document.addEventListener('click', function (e) {
  // loop parent nodes from the target to the delegation node
  for (let {
      target
    } = e; target && target !== this; target = target.parentNode) {
    if (target.matches('.kw-multistep-button')) {
      const $form = document.querySelector('.form')
      if (target.classList.contains('kw-multistep-button-next')) {
        $form.classList.remove('step1')
        $form.classList.add('step2')
      }
      if (target.classList.contains('kw-multistep-button-previous')) {
        $form.classList.remove('step2')
        $form.classList.add('step1')
      }
      break
    }
  }
}, false)

// CLD
const $ide = document.querySelector('.js-ide');
const $reset = document.querySelector('.js-reset');

const extList = {
  javascript: 'js',
  nodejs: 'js',
}

const ext = (lang) => {
  const l = lang.toLowerCase();
  return extList[l] || l;
}

const htmlEntities = (str) => {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

const buildCLD = (data) => {
  if (!$ide) {
    return false;
  }

  $ide.innerHTML = `<div class="ide__inner">
  <div class="ide__header">
    <p><a href="https://cld.silvestar.codes/line/${data.date}/" target="_blank">${data.date}.${ext(data.language)}</a></p>
  </div>
  <div class="ide__body">
    <p class="ide__line">...</p>
    <p class="ide__line">${htmlEntities(data.line)}</p>
    <p class="ide__line">...</p>
  </div>
  <div class="ide__footer">
    <p>Author: ${data.author}</p>
    <p>${data.language}</p>
    <p><a href="https://cld.silvestar.codes/line/${data.date}/" target="_blank">Details ⇢</a></p>
  </div>
</div>
<div class="ide__details">
  <p>What does this line do? </p>
  <p>${data.note}</p>
</div>`;

  return true;
}

// Fetch data from Code Line Daily
const getCLD = () => {
  return fetch('https://cld.silvestar.codes/api/get-random-line')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // Build HTML code
      buildCLD(data);
      // Set localStorage data for caching purposes
      localStorage.setItem('cldData', JSON.stringify(data));
    });
}


if ($reset) {
  $reset.addEventListener('click', () => {
    // Clear localStorage data and fetch new data
    localStorage.removeItem('cldData');
    getCLD();
  });
}

// Get data from localStorage
const cldData = localStorage.getItem('cldData');
// Parse JSON data, if available
const parsedData = cldData && JSON.parse(cldData);

// Fetch Code Line Daily data if no data in localStorage
// Otherwise append HTML
if (!cldData) {
  getCLD();
} else {
  buildCLD(parsedData);
}
