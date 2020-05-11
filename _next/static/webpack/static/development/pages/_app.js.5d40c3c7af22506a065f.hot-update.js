webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ide_dog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ide/dog */ "../../node_modules/@ide/dog/src/index.ts");
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scope */ "./scope.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes */ "./routes.ts");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme */ "./theme.ts");
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sentry/browser */ "../../node_modules/@sentry/browser/esm/index.js");


var _this = undefined,
    _jsxFileName = "/Users/liwenfu/iot-studio/applications/doc/pages/_app.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var Arnoo = function Arnoo(props) {
  return __jsx("svg", props, __jsx("path", {
    fill: "currentColor",
    d: "M23.548 22.924h-6.28v-9.937c0-1.65-.434-3.016-1.29-4.06-.917-1.118-2.203-1.708-3.718-1.708-1.38 0-2.585.505-3.58 1.499-.997.994-1.502 2.198-1.502 3.577 0 1.42.467 2.62 1.389 3.562.919.942 2.136 1.44 3.52 1.44.258 0 .512-.017.762-.05v6.175a8.643 8.643 0 0 1-.589.022c-3.338 0-6.033-1.057-8.24-3.232C1.82 18.044.75 15.39.75 12.097c0-3.196 1.084-5.828 3.313-8.047 2.23-2.22 4.871-3.3 8.073-3.3 3.613 0 6.356 1 8.386 3.056 2.036 2.062 3.026 4.847 3.026 8.513v10.605z"
  }));
};

Arnoo.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
};

var Gitlab = function Gitlab(props) {
  return __jsx("svg", props, __jsx("path", {
    fill: "currentColor",
    d: "M2 14l9.38 9v-9l-4-12.28c-.205-.632-1.176-.632-1.38 0zM34 14l-9.38 9v-9l4-12.28c.205-.632 1.176-.632 1.38 0z"
  }), __jsx("path", {
    fill: "currentColor",
    d: "M18 34.38L3 14h30z"
  }), __jsx("path", {
    fill: "currentColor",
    d: "M18 34.38L11.38 14H2l4 11zM18 34.38L24.62 14H34l-4 11z"
  }), __jsx("path", {
    fill: "currentColor",
    d: "M2 14L.1 20.16c-.18.565 0 1.2.5 1.56l17.42 12.66z"
  }), __jsx("path", {
    fill: "currentColor",
    d: "M34 14l1.9 6.16c.18.565 0 1.2-.5 1.56L18 34.38z"
  }));
};

Gitlab.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 36 36"
};

console.log('Sentry======START');
_sentry_browser__WEBPACK_IMPORTED_MODULE_6__["init"]({
  dsn: 'https://0cd211f84d7f4478bafd877d204ee1c8@o389545.ingest.sentry.io/5227833'
});
console.log('Sentry======END');

var MyApp = function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return __jsx(_ide_dog__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    logo: __jsx(Arnoo, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }
    }),
    title: "Studio",
    description: "Documentation for IoT Studio",
    favicon: "/favicon.png",
    copyright: "arnoo.com",
    repo: __jsx(Gitlab, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }
    }),
    theme: _theme__WEBPACK_IMPORTED_MODULE_5__["themeConfig"],
    scope: _scope__WEBPACK_IMPORTED_MODULE_3__["scope"],
    routes: _routes__WEBPACK_IMPORTED_MODULE_4__["routes"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 3
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ })

})
//# sourceMappingURL=_app.js.5d40c3c7af22506a065f.hot-update.js.map