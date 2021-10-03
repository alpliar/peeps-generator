"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _document)
});

;// CONCATENATED MODULE: external "@emotion/server/create-instance"
const create_instance_namespaceObject = require("@emotion/server/create-instance");
var create_instance_default = /*#__PURE__*/__webpack_require__.n(create_instance_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/document.js
var next_document = __webpack_require__(859);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: ./src/styles/createEmotionCache.ts + 1 modules
var createEmotionCache = __webpack_require__(87);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./src/pages/_document.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/jsx-props-no-spreading */

/**
 * @todo: remove this comment below when ready
 * ref: https://github.com/vercel/next.js/issues/13712#issuecomment-910409023
 * */
 // eslint-disable-next-line @next/next/no-document-import-in-page






const APP_NAME = "nextchakra-starter";
const APP_DESCRIPTION = "Next.js app template with Chakra-UI, TypeScript, and PWA configured";

class MyDocument extends next_document.default {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;
    const cache = (0,createEmotionCache/* default */.Z)();
    const {
      extractCriticalToChunks
    } = create_instance_default()(cache);

    ctx.renderPage = () => originalRenderPage({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      enhanceApp: App => props => /*#__PURE__*/jsx_runtime_.jsx(App, _objectSpread({
        emotionCache: cache
      }, props))
    });

    const initialProps = await next_document.default.getInitialProps(ctx);
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map(style => /*#__PURE__*/jsx_runtime_.jsx("style", {
      "data-emotion": `${style.key} ${style.ids.join(" ")}`,
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML: {
        __html: style.css
      }
    }, style.key));
    return _objectSpread(_objectSpread({}, initialProps), {}, {
      styles: [...external_react_.Children.toArray(initialProps.styles), ...emotionStyleTags]
    });
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(next_document.Html, {
      lang: "en",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(next_document.Head, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "application-name",
          content: APP_NAME
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "apple-mobile-web-app-capable",
          content: "yes"
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "apple-mobile-web-app-status-bar-style",
          content: "default"
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "apple-mobile-web-app-title",
          content: APP_NAME
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "description",
          content: APP_DESCRIPTION
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "format-detection",
          content: "telephone=no"
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "mobile-web-app-capable",
          content: "yes"
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "theme-color",
          content: "#FFFFFF"
        }), /*#__PURE__*/jsx_runtime_.jsx("link", {
          rel: "manifest",
          href: "/manifest.json"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("body", {
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_document.Main, {}), /*#__PURE__*/jsx_runtime_.jsx(next_document.NextScript, {})]
      })]
    });
  }

}

/* harmony default export */ const _document = (MyDocument);

/***/ }),

/***/ 87:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ createEmotionCache)
});

;// CONCATENATED MODULE: external "@emotion/cache"
const cache_namespaceObject = require("@emotion/cache");
var cache_default = /*#__PURE__*/__webpack_require__.n(cache_namespaceObject);
;// CONCATENATED MODULE: ./src/styles/createEmotionCache.ts

function createEmotionCache() {
  return cache_default()({
    key: "chakra-emotion-css"
  });
}

/***/ }),

/***/ 15:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 538:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 208:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 44:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 98:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 168:
/***/ ((module) => {

module.exports = require("styled-jsx/server");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [859], () => (__webpack_exec__(586)));
module.exports = __webpack_exports__;

})();