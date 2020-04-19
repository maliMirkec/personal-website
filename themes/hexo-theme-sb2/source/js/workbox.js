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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/workbox.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/workbox-window/build/workbox-window.prod.es5.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-window/build/workbox-window.prod.es5.mjs ***!
  \***********************************************************************/
/*! exports provided: Workbox, messageSW */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Workbox", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageSW", function() { return n; });
try{self["workbox:window:5.1.1"]&&_()}catch(n){}function n(n,t){return new Promise((function(r){var i=new MessageChannel;i.port1.onmessage=function(n){r(n.data)},n.postMessage(t,[i.port2])}))}function t(n,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}try{self["workbox:core:5.1.1"]&&_()}catch(n){}var r=function(){var n=this;this.promise=new Promise((function(t,r){n.resolve=t,n.reject=r}))};function i(n,t){var r=location.href;return new URL(n,r).href===new URL(t,r).href}var e=function(n,t){this.type=n,Object.assign(this,t)};function o(n,t,r){return r?t?t(n):n:(n&&n.then||(n=Promise.resolve(n)),t?n.then(t):n)}function u(){}var a=function(u){var a,f;function s(n,t){var a,c;return void 0===t&&(t={}),(a=u.call(this)||this).t={},a.i=0,a.o=new r,a.u=new r,a.s=new r,a.v=0,a.h=new Set,a.l=function(){var n=a.g,t=n.installing;a.i>0||!i(t.scriptURL,a.m)||performance.now()>a.v+6e4?(a.P=t,n.removeEventListener("updatefound",a.l)):(a.p=t,a.h.add(t),a.o.resolve(t)),++a.i,t.addEventListener("statechange",a.k)},a.k=function(n){var t=a.g,r=n.target,i=r.state,o=r===a.P,u=o?"external":"",c={sw:r,originalEvent:n};!o&&a.j&&(c.isUpdate=!0),a.dispatchEvent(new e(u+i,c)),"installed"===i?a.O=self.setTimeout((function(){"installed"===i&&t.waiting===r&&a.dispatchEvent(new e(u+"waiting",c))}),200):"activating"===i&&(clearTimeout(a.O),o||a.u.resolve(r))},a.R=function(n){var t=a.p;t===navigator.serviceWorker.controller&&(a.dispatchEvent(new e("controlling",{sw:t,originalEvent:n,isUpdate:a.j})),a.s.resolve(t))},a.S=(c=function(n){var t=n.data,r=n.source;return o(a.getSW(),(function(){a.h.has(r)&&a.dispatchEvent(new e("message",{data:t,sw:r,originalEvent:n}))}))},function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];try{return Promise.resolve(c.apply(this,n))}catch(n){return Promise.reject(n)}}),a.m=n,a.t=t,navigator.serviceWorker.addEventListener("message",a.S),a}f=u,(a=s).prototype=Object.create(f.prototype),a.prototype.constructor=a,a.__proto__=f;var v,h,w,l=s.prototype;return l.register=function(n){var t=(void 0===n?{}:n).immediate,r=void 0!==t&&t;try{var u=this;return function(n,t){var r=n();if(r&&r.then)return r.then(t);return t(r)}((function(){if(!r&&"complete"!==document.readyState)return c(new Promise((function(n){return window.addEventListener("load",n)})))}),(function(){return u.j=Boolean(navigator.serviceWorker.controller),u.U=u.B(),o(u.L(),(function(n){u.g=n,u.U&&(u.p=u.U,u.u.resolve(u.U),u.s.resolve(u.U),u.U.addEventListener("statechange",u.k,{once:!0}));var t=u.g.waiting;return t&&i(t.scriptURL,u.m)&&(u.p=t,Promise.resolve().then((function(){u.dispatchEvent(new e("waiting",{sw:t,wasWaitingBeforeRegister:!0}))})).then((function(){}))),u.p&&(u.o.resolve(u.p),u.h.add(u.p)),u.g.addEventListener("updatefound",u.l),navigator.serviceWorker.addEventListener("controllerchange",u.R,{once:!0}),u.g}))}))}catch(n){return Promise.reject(n)}},l.update=function(){try{return this.g?c(this.g.update()):void 0}catch(n){return Promise.reject(n)}},l.getSW=function(){try{return void 0!==this.p?this.p:this.o.promise}catch(n){return Promise.reject(n)}},l.messageSW=function(t){try{return o(this.getSW(),(function(r){return n(r,t)}))}catch(n){return Promise.reject(n)}},l.B=function(){var n=navigator.serviceWorker.controller;return n&&i(n.scriptURL,this.m)?n:void 0},l.L=function(){try{var n=this;return function(n,t){try{var r=n()}catch(n){return t(n)}if(r&&r.then)return r.then(void 0,t);return r}((function(){return o(navigator.serviceWorker.register(n.m,n.t),(function(t){return n.v=performance.now(),t}))}),(function(n){throw n}))}catch(n){return Promise.reject(n)}},v=s,(h=[{key:"active",get:function(){return this.u.promise}},{key:"controlling",get:function(){return this.s.promise}}])&&t(v.prototype,h),w&&t(v,w),s}(function(){function n(){this.M=new Map}var t=n.prototype;return t.addEventListener=function(n,t){this._(n).add(t)},t.removeEventListener=function(n,t){this._(n).delete(t)},t.dispatchEvent=function(n){n.target=this;var t=this._(n.type),r=Array.isArray(t),i=0;for(t=r?t:t[Symbol.iterator]();;){var e;if(r){if(i>=t.length)break;e=t[i++]}else{if((i=t.next()).done)break;e=i.value}e(n)}},t._=function(n){return this.M.has(n)||this.M.set(n,new Set),this.M.get(n)},n}());function c(n,t){if(!t)return n&&n.then?n.then(u):Promise.resolve()}
//# sourceMappingURL=workbox-window.prod.es5.mjs.map


/***/ }),

/***/ "./src/js/workbox.js":
/*!***************************!*\
  !*** ./src/js/workbox.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var workbox_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-window */ "./node_modules/workbox-window/build/workbox-window.prod.es5.mjs");


if ('serviceWorker' in navigator) {
  var displayMessage = function displayMessage() {
    var $swButton = document.createElement('div');
    $swButton.className = 'cta cta--beta cta--omega';
    $swButton.innerHTML = '<div class="cta__content"><p><span>The content has been updated. To see the latest changes, refresh the page, please.</span></p></div><button class="btn" type="button" onclick="window.location.reload()"><span>Refresh</span><span>To see updates</span></button>';
    document.body.appendChild($swButton);
  };

  var wb = new workbox_window__WEBPACK_IMPORTED_MODULE_0__["Workbox"]('/sw.js');
  wb.addEventListener('installed', function (event) {
    console.log('installed');

    if (!event.isUpdate) {
      displayMessage();
    }
  });
  wb.addEventListener('activated', function (event) {
    console.log('activated');

    if (!event.isUpdate) {
      console.log('Service Worker has been installed successfully.');
    } else {
      displayMessage();
    }
  });
  wb.addEventListener('message', function (event) {
    console.log('message');

    if (event.data.type === 'CACHE_UPDATED') {
      displayMessage();
    }
  });
  wb.addEventListener('waiting', function () {
    console.log('waiting');
    displayMessage();
  });
  wb.addEventListener('externalinstalled', function (event) {
    console.log('externalinstalled');

    if (!event.isUpdate) {
      displayMessage();
    }
  });
  wb.addEventListener('externalactivated', function (event) {
    console.log('externalactivated');

    if (!event.isUpdate) {
      console.log('Service Worker has been installed successfully.');
    } else {
      displayMessage();
    }
  });
  wb.addEventListener('externalwaiting', function () {
    console.log('externalwaiting');
    displayMessage();
  });
  wb.register();
}

/***/ })

/******/ });
//# sourceMappingURL=workbox.js.map