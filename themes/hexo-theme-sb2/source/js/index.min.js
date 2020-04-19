/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/js-cookie/src/js.cookie.js":
/*!*************************************************!*\
  !*** ./node_modules/js-cookie/src/js.cookie.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
// Cookies
 // color mode switch

var $toggle = document.querySelector('.toggle');

if ($toggle) {
  $toggle.addEventListener('click', function () {
    var thisColorMode = document.body.classList.contains('body--dark');
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('sb-color-mode', thisColorMode ? 'dark' : 'light', {
      expires: 7
    });
  });
} // starter project


console.log('Powered by Starter Project (https://github.com/maliMirkec/starter-project).'); // signature animation

var calcPaths = function calcPaths(totalDur) {
  // get all SVG elements - lines and dots
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
}; // Source: https://codepen.io/jr-cologne/pen/zdYdmx?editors=1000


var $autograph = document.querySelector('.autograph');

function inView($elem) {
  var windowHeight = window.innerHeight;
  var scrollY = window.scrollY || window.pageYOffset;
  var scrollPosition = scrollY + windowHeight;
  var elementPosition = $elem.getBoundingClientRect().top + scrollY + $elem.clientHeight;

  if (scrollPosition > elementPosition) {
    return true;
  }

  return false;
}

if ($autograph) {
  var animate = function animate() {
    if (inView($autograph)) {
      calcPaths(5);
      document.removeEventListener('scroll', animate);
    }
  };

  document.addEventListener('scroll', animate);
  document.addEventListener('click', animate);
} // form progress steps


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
}, false); // CLD

var $ide = document.querySelector('.js-ide');
var $reset = document.querySelector('.js-reset');
var extList = {
  javascript: 'js',
  nodejs: 'js'
};

var ext = function ext(lang) {
  var l = lang.toLowerCase();
  return extList[l] || l;
};

var htmlEntities = function htmlEntities(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
};

var buildCLD = function buildCLD(data) {
  if (!$ide) {
    return false;
  }

  $ide.innerHTML = "<div class=\"ide__inner\">\n  <div class=\"ide__header\">\n    <p><a href=\"https://cld.silvestar.codes/line/".concat(data.date, "/\" target=\"_blank\">").concat(data.date, ".").concat(ext(data.language), "</a></p>\n  </div>\n  <div class=\"ide__body\">\n    <p class=\"ide__line\">...</p>\n    <p class=\"ide__line\">").concat(htmlEntities(data.line), "</p>\n    <p class=\"ide__line\">...</p>\n  </div>\n  <div class=\"ide__footer\">\n    <p>Author: ").concat(data.author, "</p>\n    <p>").concat(data.language, "</p>\n    <p><a href=\"https://cld.silvestar.codes/line/").concat(data.date, "/\" target=\"_blank\">Details \u21E2</a></p>\n  </div>\n</div>\n<div class=\"ide__details\">\n  <p>What does this line do? </p>\n  <p>").concat(data.note, "</p>\n</div>");
  return true;
}; // Fetch data from Code Line Daily


var getCLD = function getCLD() {
  return fetch('https://cld.silvestar.codes/api/get-random-line').then(function (response) {
    return response.json();
  }).then(function (data) {
    // Build HTML code
    buildCLD(data); // Set localStorage data for caching purposes

    localStorage.setItem('cldData', JSON.stringify(data));
  });
};

if ($reset) {
  $reset.addEventListener('click', function () {
    // Clear localStorage data and fetch new data
    localStorage.removeItem('cldData');
    getCLD();
  });
} // Get data from localStorage


var cldData = localStorage.getItem('cldData'); // Parse JSON data, if available

var parsedData = cldData && JSON.parse(cldData); // Fetch Code Line Daily data if no data in localStorage
// Otherwise append HTML

if (!cldData) {
  getCLD();
} else {
  buildCLD(parsedData);
}

/***/ })

/******/ });
//# sourceMappingURL=index.js.map