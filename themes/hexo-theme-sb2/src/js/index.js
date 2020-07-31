// Cookies
// import Cookies from 'js-cookie'

// // color mode switch
// const $toggle = document.querySelector('.toggle')

// if ($toggle) {
//   $toggle.addEventListener('click', () => {
//     const thisColorMode = document.body.classList.contains('body--dark');

//     Cookies.set('sb-color-mode', thisColorMode ? 'dark' : 'light', {
//       expires: 7
//     });
//   })
// }

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
