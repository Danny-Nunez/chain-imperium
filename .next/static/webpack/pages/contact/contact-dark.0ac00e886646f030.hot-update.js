"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/contact/contact-dark",{

/***/ "./src/pages/contact/contact-dark.jsx":
/*!********************************************!*\
  !*** ./src/pages/contact/contact-dark.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Contact_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Contact-header */ \"./src/components/Contact-header/index.jsx\");\n/* harmony import */ var _components_Contact_with_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Contact-with-map */ \"./src/components/Contact-with-map/index.jsx\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Navbar */ \"./src/components/Navbar/index.jsx\");\n/* harmony import */ var _layouts_Dark__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layouts/Dark */ \"./src/layouts/Dark.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Contact = function() {\n    _s();\n    var fixedHeader = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var MainContent = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var navbarRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function() {\n        setInterval(function() {\n            if (fixedHeader.current) {\n                var slidHeight = fixedHeader.current.offsetHeight;\n            }\n            if (MainContent.current) {\n                MainContent.current.style.marginTop = slidHeight + \"px\";\n            }\n        }, 1000);\n        var navbar = navbarRef.current;\n        if (window.pageYOffset > 300) {\n            navbar.classList.add(\"nav-scroll\");\n        } else {\n            navbar.classList.remove(\"nav-scroll\");\n        }\n        window.addEventListener(\"scroll\", function() {\n            if (window.pageYOffset > 300) {\n                navbar.classList.add(\"nav-scroll\");\n            } else {\n                navbar.classList.remove(\"nav-scroll\");\n            }\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Dark__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        __source: {\n            fileName: \"/Users/dannynunez/Desktop/chain imperium/avo_react/src/pages/contact/contact-dark.jsx\",\n            lineNumber: 35,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                nr: navbarRef,\n                __source: {\n                    fileName: \"/Users/dannynunez/Desktop/chain imperium/avo_react/src/pages/contact/contact-dark.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Contact_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                sliderRef: fixedHeader,\n                __source: {\n                    fileName: \"/Users/dannynunez/Desktop/chain imperium/avo_react/src/pages/contact/contact-dark.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"main-content\",\n                ref: MainContent,\n                __source: {\n                    fileName: \"/Users/dannynunez/Desktop/chain imperium/avo_react/src/pages/contact/contact-dark.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"iframe\", {\n                        src: \"https://google.com\",\n                        width: \"100%\",\n                        __source: {\n                            fileName: \"/Users/dannynunez/Desktop/chain imperium/avo_react/src/pages/contact/contact-dark.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 7\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Contact_with_map__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        __source: {\n                            fileName: \"/Users/dannynunez/Desktop/chain imperium/avo_react/src/pages/contact/contact-dark.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s(Contact, \"7sI1BiKeD9U9QSxdYZ2BUPONuW8=\");\n_c = Contact;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29udGFjdC9jb250YWN0LWRhcmsuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ2tDO0FBQ0c7QUFDbEI7QUFDRjs7O0FBRTFDLEdBQUssQ0FBQ0ssT0FBTyxHQUFHLFFBQVEsR0FBRixDQUFDOztJQUNyQixHQUFLLENBQUNDLFdBQVcsR0FBR04sbURBQVksQ0FBQyxJQUFJO0lBQ3JDLEdBQUssQ0FBQ1EsV0FBVyxHQUFHUixtREFBWSxDQUFDLElBQUk7SUFDckMsR0FBSyxDQUFDUyxTQUFTLEdBQUdULG1EQUFZLENBQUMsSUFBSTtJQUNuQ0Esc0RBQWUsQ0FBQyxRQUFRLEdBQUYsQ0FBQztRQUNyQlcsV0FBVyxDQUFDLFFBQVEsR0FBRixDQUFDO1lBQ2pCLEVBQUUsRUFBRUwsV0FBVyxDQUFDTSxPQUFPLEVBQUUsQ0FBQztnQkFDeEIsR0FBRyxDQUFDQyxVQUFVLEdBQUdQLFdBQVcsQ0FBQ00sT0FBTyxDQUFDRSxZQUFZO1lBQ25ELENBQUM7WUFDRCxFQUFFLEVBQUVOLFdBQVcsQ0FBQ0ksT0FBTyxFQUFFLENBQUM7Z0JBQ3hCSixXQUFXLENBQUNJLE9BQU8sQ0FBQ0csS0FBSyxDQUFDQyxTQUFTLEdBQUdILFVBQVUsR0FBRyxDQUFJO1lBQ3pELENBQUM7UUFDSCxDQUFDLEVBQUUsSUFBSTtRQUNQLEdBQUcsQ0FBQ0ksTUFBTSxHQUFHUixTQUFTLENBQUNHLE9BQU87UUFDOUIsRUFBRSxFQUFFTSxNQUFNLENBQUNDLFdBQVcsR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUM3QkYsTUFBTSxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxDQUFZO1FBQ25DLENBQUMsTUFBTSxDQUFDO1lBQ05KLE1BQU0sQ0FBQ0csU0FBUyxDQUFDRSxNQUFNLENBQUMsQ0FBWTtRQUN0QyxDQUFDO1FBQ0RKLE1BQU0sQ0FBQ0ssZ0JBQWdCLENBQUMsQ0FBUSxTQUFFLFFBQVEsR0FBRixDQUFDO1lBQ3ZDLEVBQUUsRUFBRUwsTUFBTSxDQUFDQyxXQUFXLEdBQUcsR0FBRyxFQUFFLENBQUM7Z0JBQzdCRixNQUFNLENBQUNHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLENBQVk7WUFDbkMsQ0FBQyxNQUFNLENBQUM7Z0JBQ05KLE1BQU0sQ0FBQ0csU0FBUyxDQUFDRSxNQUFNLENBQUMsQ0FBWTtZQUN0QyxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDLENBQUM7SUFDTCxNQUFNLHVFQUNIbEIscURBQVM7Ozs7Ozs7O2lGQUNQRCwwREFBTTtnQkFBQ3FCLEVBQUUsRUFBRWYsU0FBUzs7Ozs7Ozs7aUZBQ3BCUixrRUFBYTtnQkFBQ3dCLFNBQVMsRUFBRW5CLFdBQVc7Ozs7Ozs7O2tGQUNwQ29CLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFjO2dCQUFDQyxHQUFHLEVBQUVwQixXQUFXOzs7Ozs7Ozt5RkFFN0NxQixDQUFNO3dCQUFDQyxHQUFHLEVBQUMsQ0FBb0I7d0JBQUNDLEtBQUssRUFBQyxDQUFNOzs7Ozs7Ozt5RkFFMUM3QixvRUFBYzs7Ozs7Ozs7Ozs7O0FBSXZCLENBQUM7R0F2Q0tHLE9BQU87S0FBUEEsT0FBTztBQXlDYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9jb250YWN0L2NvbnRhY3QtZGFyay5qc3g/NjMxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb250YWN0SGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NvbnRhY3QtaGVhZGVyXCI7XHJcbmltcG9ydCBDb250YWN0V2l0aE1hcCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Db250YWN0LXdpdGgtbWFwXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTmF2YmFyXCI7XHJcbmltcG9ydCBEYXJrVGhlbWUgZnJvbSBcIi4uLy4uL2xheW91dHMvRGFya1wiO1xyXG5cclxuY29uc3QgQ29udGFjdCA9ICgpID0+IHtcclxuICBjb25zdCBmaXhlZEhlYWRlciA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICBjb25zdCBNYWluQ29udGVudCA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICBjb25zdCBuYXZiYXJSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgaWYgKGZpeGVkSGVhZGVyLmN1cnJlbnQpIHtcclxuICAgICAgICB2YXIgc2xpZEhlaWdodCA9IGZpeGVkSGVhZGVyLmN1cnJlbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChNYWluQ29udGVudC5jdXJyZW50KSB7XHJcbiAgICAgICAgTWFpbkNvbnRlbnQuY3VycmVudC5zdHlsZS5tYXJnaW5Ub3AgPSBzbGlkSGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICB9XHJcbiAgICB9LCAxMDAwKTtcclxuICAgIHZhciBuYXZiYXIgPSBuYXZiYXJSZWYuY3VycmVudDtcclxuICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAzMDApIHtcclxuICAgICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJuYXYtc2Nyb2xsXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtc2Nyb2xsXCIpO1xyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMzAwKSB7XHJcbiAgICAgICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJuYXYtc2Nyb2xsXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LXNjcm9sbFwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8RGFya1RoZW1lPlxyXG4gICAgICA8TmF2YmFyIG5yPXtuYXZiYXJSZWZ9IC8+XHJcbiAgICAgIDxDb250YWN0SGVhZGVyIHNsaWRlclJlZj17Zml4ZWRIZWFkZXJ9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50XCIgcmVmPXtNYWluQ29udGVudH0+XHJcbiAgICAgIFxyXG4gICAgICA8aWZyYW1lIHNyYz1cImh0dHBzOi8vZ29vZ2xlLmNvbVwiIHdpZHRoPVwiMTAwJVwiPjwvaWZyYW1lPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxDb250YWN0V2l0aE1hcCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRGFya1RoZW1lPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb250YWN0SGVhZGVyIiwiQ29udGFjdFdpdGhNYXAiLCJOYXZiYXIiLCJEYXJrVGhlbWUiLCJDb250YWN0IiwiZml4ZWRIZWFkZXIiLCJ1c2VSZWYiLCJNYWluQ29udGVudCIsIm5hdmJhclJlZiIsInVzZUVmZmVjdCIsInNldEludGVydmFsIiwiY3VycmVudCIsInNsaWRIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJzdHlsZSIsIm1hcmdpblRvcCIsIm5hdmJhciIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5yIiwic2xpZGVyUmVmIiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwiaWZyYW1lIiwic3JjIiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/contact/contact-dark.jsx\n");

/***/ })

});