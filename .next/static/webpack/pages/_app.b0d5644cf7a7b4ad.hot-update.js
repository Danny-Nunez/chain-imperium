"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/common/mouseEffect.js":
/*!***********************************!*\
  !*** ./src/common/mouseEffect.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar mousecursor = function() {\n    var cursorInner = document.querySelector(\".cursor-inner\"), cursorOuter = document.querySelector(\".cursor-outer\");\n    var n, i = 0, o = false;\n    window.onmousemove = function mousecursor(s) {\n        if (!o) {\n            cursorOuter.style.transform = \"translate(\".concat(s.clientX, \"px, \").concat(s.clientY, \"px)\");\n        }\n        cursorInner.style.transform = \"translate(\".concat(s.clientX, \"px, \").concat(s.clientY, \"px)\");\n        n = s.clientY;\n        i = s.clientX;\n    };\n    if (document.querySelector(\".cursor-pointer\")) {\n        document.querySelector(\".cursor-pointer\").addEventListener(\"mouseenter\", function() {\n            cursorInner.classList.add(\"cursor-hover\");\n            cursorOuter.classList.add(\"cursor-hover\");\n        });\n        document.querySelector(\".cursor-pointer\").addEventListener(\"mouseleave\", function() {\n            cursorInner.classList.remove(\"cursor-hover\");\n            cursorOuter.classList.remove(\"cursor-hover\");\n        });\n        cursorInner.style.visibility = \"visible\";\n        cursorOuter.style.visibility = \"visible\";\n    }\n    document.querySelectorAll(\"a\").forEach(function(item) {\n        item.addEventListener(\"mouseenter\", function() {\n            cursorInner.classList.add(\"cursor-hover\");\n            cursorOuter.classList.add(\"cursor-hover\");\n        });\n        item.addEventListener(\"mouseleave\", function() {\n            cursorInner.classList.remove(\"cursor-hover\");\n            cursorOuter.classList.remove(\"cursor-hover\");\n        });\n        item.addEventListener(\"click\", function() {\n            cursorInner.classList.remove(\"cursor-hover\");\n            cursorOuter.classList.remove(\"cursor-hover\");\n        });\n    });\n    cursorInner.style.visibility = \"visible\";\n    cursorOuter.style.visibility = \"visible\";\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (mousecursor);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxHQUFHLENBQVM7SUFDeENmLFdBQVcsQ0FBQ08sS0FBSyxDQUFDUSxVQUFVLEdBQUcsQ0FBUztBQUMxQyxDQUFDO0FBRUQsK0RBQWVuQixXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbW1vbi9tb3VzZUVmZmVjdC5qcz81YThkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vdXNlY3Vyc29yID0gKCkgPT4ge1xyXG4gIGNvbnN0IGN1cnNvcklubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJzb3ItaW5uZXJcIiksXHJcbiAgICBjdXJzb3JPdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3Vyc29yLW91dGVyXCIpO1xyXG4gIGxldCBuLFxyXG4gICAgaSA9IDAsXHJcbiAgICBvID0gZmFsc2U7XHJcblxyXG4gIHdpbmRvdy5vbm1vdXNlbW92ZSA9IGZ1bmN0aW9uIChzKSB7XHJcbiAgICBpZiAoIW8pIHtcclxuICAgICAgY3Vyc29yT3V0ZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3MuY2xpZW50WH1weCwgJHtzLmNsaWVudFl9cHgpYDtcclxuICAgIH1cclxuICAgIGN1cnNvcklubmVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHtzLmNsaWVudFh9cHgsICR7cy5jbGllbnRZfXB4KWA7XHJcbiAgICBuID0gcy5jbGllbnRZO1xyXG4gICAgaSA9IHMuY2xpZW50WDtcclxuICB9O1xyXG5cclxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJzb3ItcG9pbnRlclwiKSkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJzb3ItcG9pbnRlclwiKS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGN1cnNvcklubmVyLmNsYXNzTGlzdC5hZGQoXCJjdXJzb3ItaG92ZXJcIik7XHJcbiAgICAgIGN1cnNvck91dGVyLmNsYXNzTGlzdC5hZGQoXCJjdXJzb3ItaG92ZXJcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnNvci1wb2ludGVyXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgY3Vyc29ySW5uZXIuY2xhc3NMaXN0LnJlbW92ZShcImN1cnNvci1ob3ZlclwiKTtcclxuICAgICAgY3Vyc29yT3V0ZXIuY2xhc3NMaXN0LnJlbW92ZShcImN1cnNvci1ob3ZlclwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGN1cnNvcklubmVyLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgIGN1cnNvck91dGVyLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICB9XHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBjdXJzb3JJbm5lci5jbGFzc0xpc3QuYWRkKFwiY3Vyc29yLWhvdmVyXCIpO1xyXG4gICAgICBjdXJzb3JPdXRlci5jbGFzc0xpc3QuYWRkKFwiY3Vyc29yLWhvdmVyXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGN1cnNvcklubmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJzb3ItaG92ZXJcIik7XHJcbiAgICAgIGN1cnNvck91dGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJzb3ItaG92ZXJcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGN1cnNvcklubmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJzb3ItaG92ZXJcIik7XHJcbiAgICAgIGN1cnNvck91dGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJzb3ItaG92ZXJcIik7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgY3Vyc29ySW5uZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gIGN1cnNvck91dGVyLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vdXNlY3Vyc29yO1xyXG5cclxuIl0sIm5hbWVzIjpbIm1vdXNlY3Vyc29yIiwiY3Vyc29ySW5uZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjdXJzb3JPdXRlciIsIm4iLCJpIiwibyIsIndpbmRvdyIsIm9ubW91c2Vtb3ZlIiwicyIsInN0eWxlIiwidHJhbnNmb3JtIiwiY2xpZW50WCIsImNsaWVudFkiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwidmlzaWJpbGl0eSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/common/mouseEffect.js\n");

/***/ })

});