"use strict";

// signature animation
var calcPaths = function calcPaths(totalDur) {
  // unset 'animated' class to body which will reset the animation
  document.body.classList.remove('animated'); // get all SVG elements - lines and dots

  var paths = document.querySelectorAll('.autograph__path'); // prepare path length variable

  var len = 0; // prepare animation delay length variable

  var delay = 0; // escape if no elements found

  if (!paths.length) {
    return false;
  } // set duration in seconds of animation to default if not set


  var totalDuration = totalDur || 7; // calculate the full path length

  paths.forEach(function (path) {
    var totalLen = path.getTotalLength();
    len += totalLen;
  });
  paths.forEach(function (path) {
    var pathElem = path; // get current path length

    var totalLen = path.getTotalLength(); // calculate current animation duration

    var duration = totalLen / len * totalDuration; // set animation duration and delay

    pathElem.style.animationDuration = "".concat(duration < 0.2 ? 0.2 : duration, "s");
    pathElem.style.animationDelay = "".concat(delay, "s"); // set dash array and offset to path length - this is how you hide the line

    pathElem.setAttribute('stroke-dasharray', totalLen);
    pathElem.setAttribute('stroke-dashoffset', totalLen); // set delay for the next path - added .2 seconds to make it more realistic

    delay += duration + 0.2;
  }); // set 'animated' class to body which will start the animation

  document.body.classList.add('animated');
  return true;
};

calcPaths(5); // form progress steps

document.addEventListener('click', function (e) {
  // loop parent nodes from the target to the delegation node
  for (var target = e.target; target && target !== this; target = target.parentNode) {
    if (target.matches('.kw-multistep-button')) {
      var $form = document.querySelector('.form');

      if (target.classList.contains('kw-multistep-button-next')) {
        $form.classList.remove('step1');
        $form.classList.add('step2');
      }

      if (target.classList.contains('kw-multistep-button-previous')) {
        $form.classList.remove('step2');
        $form.classList.add('step1');
      }

      break;
    }
  }
}, false); // window.addEventListener('load', (event) => {
//   const $kwButtons = document.querySelectorAll('.kw-multistep-button')
//   const $kwStep = document.querySelector('.kw-form-step')
//   console.log('page is fully loaded')
//   console.log($kwButtons)
//   $kwButtons.forEach(($kwButton) => {
//     console.log($kwButton)
//     $kwButton.addEventListener('click', () => {
//       console.log($kwStep.style.display)
//     })
//   })
// })

console.log('Powered by Starter Project (https://github.com/maliMirkec/starter-project).');