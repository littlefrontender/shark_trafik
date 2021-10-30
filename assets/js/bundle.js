/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/modules/downdrop.js":
/*!***************************************!*\
  !*** ./assets/js/modules/downdrop.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ downdrop)
/* harmony export */ });
function downdrop() {

    function hideBlockFunc(toggler, hide, block, heit) {
        const togglePromo = document.querySelector(toggler),
              hideBlockPromo = document.querySelector(hide),
              blockPromo = document.querySelector(block),
              computedBlockPromo = parseInt(getComputedStyle(blockPromo).height);

        function animateClose(count, min, block, hideBlock) {
            const int = setInterval(() => {
                count -= 130;
                block.style.height = count +'px';
                if (count <= min) {
                    clearInterval(int);
                    block.style.height = min +'px';
                    hideBlock.style.display = 'none';
                }
                }, 20)
            }
        
        function animateOpen(count, min, block, openBlock) {
            const int = setInterval(() => {
                min += 130;
                block.style.height = min +'px';
                if (min >= count) {
                    clearInterval(int);
                    block.style.height = 'auto';
                    openBlock.style.display = 'block';
                }
                }, 20)
            }

        function toggle(switcher) {
            switcher.classList.toggle('closed');
            if (switcher.classList.contains('closed')) {
                animateClose(computedBlockPromo, heit, blockPromo, hideBlockPromo);
            } else {
                animateOpen(computedBlockPromo, heit, blockPromo, hideBlockPromo);
            }
        }

        togglePromo.addEventListener('click', (e) => {
            e.preventDefault();
            toggle(togglePromo);
        })
    }
    hideBlockFunc('.promotion__divider--round a', '.promotion__hide', '.promotion__block', 396);
    hideBlockFunc('.development__divider--round a', '.development__hide', '.development__block', 396);
    hideBlockFunc('.optimization__divider--round a', '.optimization__hide', '.optimization__block', 396);

}

/***/ }),

/***/ "./assets/js/modules/toggleHeader.js":
/*!*******************************************!*\
  !*** ./assets/js/modules/toggleHeader.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toggleHeader)
/* harmony export */ });
function toggleHeader() {

    const headerLinks = document.querySelector('.header__links');

    console.log(headerLinks);

}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_downdrop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/downdrop.js */ "./assets/js/modules/downdrop.js");
/* harmony import */ var _modules_toggleHeader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleHeader.js */ "./assets/js/modules/toggleHeader.js");



window.addEventListener('DOMContentLoaded', () => {
    (0,_modules_toggleHeader_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_modules_downdrop_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map