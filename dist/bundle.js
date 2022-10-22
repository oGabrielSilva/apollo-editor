/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/module/Apollo.ts":
/*!******************************!*\
  !*** ./src/module/Apollo.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Apollo = /** @class */ (function () {
    function Apollo(root) {
        this.root = root;
        this.editor = null;
        this.uuid = 'u' + globalThis.uuid().replace(/-/g, '');
    }
    Apollo.prototype.run = function () {
        this.editor = htmlCreator({
            element: 'div',
            attributes: [
                { attribute: 'contenteditable', value: 'true' },
                { attribute: 'id', value: this.uuid },
            ],
        });
        this.root.appendChild(this.editor);
    };
    Apollo.prototype.remove = function () {
        if (!!this.editor) {
            document.getElementById(this.uuid).remove();
            this.editor = null;
        }
    };
    Apollo.create = function (root) {
        if (typeof root === 'string') {
            var element = document.querySelector(root.startsWith('#') || root.startsWith('.') ? root : '#' + root);
            if (!element) {
                element = document.querySelector('.' + root);
                if (!element) {
                    console.error("Apollo error: root element with id ".concat(root, " not found."));
                    return;
                }
            }
            return new Apollo(element);
        }
        else if (root instanceof HTMLElement) {
            return new Apollo(root);
        }
        console.error("Apollo error: root element not found.");
    };
    return Apollo;
}());
exports["default"] = Apollo;


/***/ }),

/***/ "./src/utils/html.ts":
/*!***************************!*\
  !*** ./src/utils/html.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.html = void 0;
var createChild = function (child, att, textContent, children) {
    var c = document.createElement(child);
    if (!!att && !!att.length)
        att.forEach(function (a) { return c.setAttribute(a.attribute, a.value); });
    if (!!textContent)
        c.textContent = textContent;
    if (!!children && !!children.length) {
        children.forEach(function (ch) {
            c.appendChild(createChild(ch.element, ch.attributes, ch.textContent, ch.children));
        });
    }
    return c;
};
var html = function (tag) {
    var element = document.createElement(tag.element);
    var children = tag.children, attributes = tag.attributes, textContent = tag.textContent;
    if (!!attributes && !!attributes.length)
        attributes.forEach(function (att) { return element.setAttribute(att.attribute, att.value); });
    if (!!textContent)
        element.textContent = textContent;
    if (!!children && !!children.length) {
        children.forEach(function (child) {
            element.appendChild(createChild(child.element, child.attributes, child.textContent, child.children));
        });
    }
    return element;
};
exports.html = html;


/***/ }),

/***/ "./src/utils/uuid.ts":
/*!***************************!*\
  !*** ./src/utils/uuid.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.uuid = void 0;
var uuid = function () {
    return Date.now().toString(16) +
        Math.random().toString(32).slice(1).replace('.', '-') +
        '-' +
        Math.random().toString(36).slice(2);
};
exports.uuid = uuid;


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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var Apollo_1 = __webpack_require__(/*! ./module/Apollo */ "./src/module/Apollo.ts");
var html_1 = __webpack_require__(/*! ./utils/html */ "./src/utils/html.ts");
var uuid_1 = __webpack_require__(/*! ./utils/uuid */ "./src/utils/uuid.ts");
__webpack_require__.g.Apollo = Apollo_1.default;
__webpack_require__.g.htmlCreator = html_1.html;
__webpack_require__.g.uuid = uuid_1.uuid;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxDQUFDO0FBckJXLFlBQUksUUFxQmY7Ozs7Ozs7Ozs7Ozs7O0FDbERLLElBQU0sSUFBSSxHQUFHO0lBQ2xCLFdBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO1FBQ3JELEdBQUc7UUFDSCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFIbkMsQ0FHbUMsQ0FBQztBQUp6QixZQUFJLFFBSXFCOzs7Ozs7O1VDSnRDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDUEQsb0ZBQXdDO0FBQ3hDLDRFQUFvQztBQUNwQyw0RUFBK0M7QUFFL0MscUJBQU0sQ0FBQyxNQUFNLEdBQUcsZ0JBQVMsQ0FBQztBQUMxQixxQkFBTSxDQUFDLFdBQVcsR0FBRyxXQUFJLENBQUM7QUFDMUIscUJBQU0sQ0FBQyxJQUFJLEdBQUcsV0FBTyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBvbGxvLWVkaXRvci8uL3NyYy9tb2R1bGUvQXBvbGxvLnRzIiwid2VicGFjazovL2Fwb2xsby1lZGl0b3IvLi9zcmMvdXRpbHMvaHRtbC50cyIsIndlYnBhY2s6Ly9hcG9sbG8tZWRpdG9yLy4vc3JjL3V0aWxzL3V1aWQudHMiLCJ3ZWJwYWNrOi8vYXBvbGxvLWVkaXRvci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hcG9sbG8tZWRpdG9yL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYXBvbGxvLWVkaXRvci8uL3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBvbGxvIHtcbiAgcHJpdmF0ZSBlZGl0b3I6IEhUTUxEaXZFbGVtZW50ID0gbnVsbDtcbiAgcHJpdmF0ZSByZWFkb25seSB1dWlkID0gJ3UnICsgZ2xvYmFsVGhpcy51dWlkKCkucmVwbGFjZSgvLS9nLCAnJyk7XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHJvb3Q6IEhUTUxEaXZFbGVtZW50KSB7fVxuXG4gIHB1YmxpYyBydW4oKTogdm9pZCB7XG4gICAgdGhpcy5lZGl0b3IgPSBodG1sQ3JlYXRvcih7XG4gICAgICBlbGVtZW50OiAnZGl2JyxcbiAgICAgIGF0dHJpYnV0ZXM6IFtcbiAgICAgICAgeyBhdHRyaWJ1dGU6ICdjb250ZW50ZWRpdGFibGUnLCB2YWx1ZTogJ3RydWUnIH0sXG4gICAgICAgIHsgYXR0cmlidXRlOiAnaWQnLCB2YWx1ZTogdGhpcy51dWlkIH0sXG4gICAgICBdLFxuICAgIH0pIGFzIEhUTUxEaXZFbGVtZW50O1xuXG4gICAgdGhpcy5yb290LmFwcGVuZENoaWxkKHRoaXMuZWRpdG9yKTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmUoKTogdm9pZCB7XG4gICAgaWYgKCEhdGhpcy5lZGl0b3IpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMudXVpZCkucmVtb3ZlKCk7XG4gICAgICB0aGlzLmVkaXRvciA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBjcmVhdGUocm9vdDogc3RyaW5nIHwgSFRNTEVsZW1lbnQpOiBBcG9sbG8ge1xuICAgIGlmICh0eXBlb2Ygcm9vdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgcm9vdC5zdGFydHNXaXRoKCcjJykgfHwgcm9vdC5zdGFydHNXaXRoKCcuJykgPyByb290IDogJyMnICsgcm9vdFxuICAgICAgKTtcblxuICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIHJvb3QpO1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgYEFwb2xsbyBlcnJvcjogcm9vdCBlbGVtZW50IHdpdGggaWQgJHtyb290fSBub3QgZm91bmQuYFxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IEFwb2xsbyhlbGVtZW50IGFzIEhUTUxEaXZFbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHJvb3QgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgcmV0dXJuIG5ldyBBcG9sbG8ocm9vdCBhcyBIVE1MRGl2RWxlbWVudCk7XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoYEFwb2xsbyBlcnJvcjogcm9vdCBlbGVtZW50IG5vdCBmb3VuZC5gKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcG9sbG87XG4iLCJ0eXBlIEF0dHJpYnV0ZXMgPSB7IGF0dHJpYnV0ZTogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH07XG5leHBvcnQgdHlwZSBIdG1sID0ge1xuICBlbGVtZW50OiBzdHJpbmc7XG4gIGF0dHJpYnV0ZXM/OiBBdHRyaWJ1dGVzW107XG4gIHRleHRDb250ZW50Pzogc3RyaW5nO1xuICBjaGlsZHJlbj86IEh0bWxbXTtcbn07XG5cbmNvbnN0IGNyZWF0ZUNoaWxkID0gKFxuICBjaGlsZDogc3RyaW5nLFxuICBhdHQ/OiBBdHRyaWJ1dGVzW10sXG4gIHRleHRDb250ZW50Pzogc3RyaW5nLFxuICBjaGlsZHJlbj86IEh0bWxbXVxuKSA9PiB7XG4gIGNvbnN0IGMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGNoaWxkKTtcbiAgaWYgKCEhYXR0ICYmICEhYXR0Lmxlbmd0aClcbiAgICBhdHQuZm9yRWFjaCgoYSkgPT4gYy5zZXRBdHRyaWJ1dGUoYS5hdHRyaWJ1dGUsIGEudmFsdWUpKTtcblxuICBpZiAoISF0ZXh0Q29udGVudCkgYy50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICBpZiAoISFjaGlsZHJlbiAmJiAhIWNoaWxkcmVuLmxlbmd0aCkge1xuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoKSA9PiB7XG4gICAgICBjLmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVDaGlsZChjaC5lbGVtZW50LCBjaC5hdHRyaWJ1dGVzLCBjaC50ZXh0Q29udGVudCwgY2guY2hpbGRyZW4pXG4gICAgICApO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBjO1xufTtcblxuZXhwb3J0IGNvbnN0IGh0bWwgPSAodGFnOiBIdG1sKTogSFRNTEVsZW1lbnQgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcuZWxlbWVudCk7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGF0dHJpYnV0ZXMsIHRleHRDb250ZW50IH0gPSB0YWc7XG4gIGlmICghIWF0dHJpYnV0ZXMgJiYgISFhdHRyaWJ1dGVzLmxlbmd0aClcbiAgICBhdHRyaWJ1dGVzLmZvckVhY2goKGF0dCkgPT4gZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0LmF0dHJpYnV0ZSwgYXR0LnZhbHVlKSk7XG5cbiAgaWYgKCEhdGV4dENvbnRlbnQpIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcblxuICBpZiAoISFjaGlsZHJlbiAmJiAhIWNoaWxkcmVuLmxlbmd0aCkge1xuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVDaGlsZChcbiAgICAgICAgICBjaGlsZC5lbGVtZW50LFxuICAgICAgICAgIGNoaWxkLmF0dHJpYnV0ZXMsXG4gICAgICAgICAgY2hpbGQudGV4dENvbnRlbnQsXG4gICAgICAgICAgY2hpbGQuY2hpbGRyZW5cbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZWxlbWVudDtcbn07XG4iLCJleHBvcnQgY29uc3QgdXVpZCA9ICgpID0+XG4gIERhdGUubm93KCkudG9TdHJpbmcoMTYpICtcbiAgTWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoMSkucmVwbGFjZSgnLicsICctJykgK1xuICAnLScgK1xuICBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsImltcG9ydCBBcG9sbG9BcHAgZnJvbSAnLi9tb2R1bGUvQXBvbGxvJztcbmltcG9ydCB7IGh0bWwgfSBmcm9tICcuL3V0aWxzL2h0bWwnO1xuaW1wb3J0IHsgdXVpZCBhcyBnZW5VdWlkIH0gZnJvbSAnLi91dGlscy91dWlkJztcblxuZ2xvYmFsLkFwb2xsbyA9IEFwb2xsb0FwcDtcbmdsb2JhbC5odG1sQ3JlYXRvciA9IGh0bWw7XG5nbG9iYWwudXVpZCA9IGdlblV1aWQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=