(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(426);
;// CONCATENATED MODULE: external "@emotion/react"
const external_emotion_react_namespaceObject = require("@emotion/react");
;// CONCATENATED MODULE: external "next-seo"
const external_next_seo_namespaceObject = require("next-seo");
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./next-seo.config.js
/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "nextchakra-starter",
  titleTemplate: "%s | nextchakra-starter",
  defaultTitle: "nextchakra-starter",
  description: "Next.js + chakra-ui + TypeScript template",
  canonical: "https://nextchakra-starter.sznm.dev",
  openGraph: {
    url: "https://nextchakra-starter.sznm.dev",
    title: "nextchakra-starter",
    description: "Next.js + chakra-ui + TypeScript template",
    images: [{
      url: "https://og-image.sznm.dev/**nextchakra-starter**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
      alt: "nextchakra-starter.sznm.dev og-image"
    }],
    site_name: "nextchakra-starter"
  },
  twitter: {
    handle: "@sozonome",
    cardType: "summary_large_image"
  }
};
/* harmony default export */ const next_seo_config = (defaultSEOConfig);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./src/components/layout/Footer.tsx




const Footer = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
    as: "footer",
    width: "full",
    align: "center",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Text, {
      children: [new Date().getFullYear(), " - Me myself and npm community :)"]
    })
  });
};

/* harmony default export */ const layout_Footer = (Footer);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: ./node_modules/react-icons/ri/index.esm.js
var index_esm = __webpack_require__(352);
;// CONCATENATED MODULE: ./src/components/layout/ThemeToggle.tsx




const ThemeToggle = () => {
  const {
    colorMode,
    toggleColorMode
  } = (0,react_.useColorMode)();
  return /*#__PURE__*/jsx_runtime_.jsx(react_.IconButton, {
    "aria-label": "theme toggle",
    icon: colorMode === "light" ? /*#__PURE__*/jsx_runtime_.jsx(index_esm/* RiMoonFill */.BUV, {}) : /*#__PURE__*/jsx_runtime_.jsx(index_esm/* RiSunLine */.sEY, {}),
    onClick: toggleColorMode
  });
};

/* harmony default export */ const layout_ThemeToggle = (ThemeToggle);
;// CONCATENATED MODULE: ./src/components/layout/Header.tsx






const Header = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
    as: "header",
    width: "full",
    align: "center",
    children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Heading, {
      as: "h1",
      size: "md",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/",
        children: "nextchakra-starter"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
      marginLeft: "auto",
      children: /*#__PURE__*/jsx_runtime_.jsx(layout_ThemeToggle, {})
    })]
  });
};

/* harmony default export */ const layout_Header = (Header);
;// CONCATENATED MODULE: ./src/components/layout/index.tsx






const Layout = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
    margin: "0 auto",
    maxWidth: 800,
    transition: "0.5s ease-out",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
      margin: "8",
      children: [/*#__PURE__*/jsx_runtime_.jsx(layout_Header, {}), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
        as: "main",
        marginY: 22,
        children: children
      }), /*#__PURE__*/jsx_runtime_.jsx(layout_Footer, {})]
    })
  });
};

/* harmony default export */ const layout = (Layout);
// EXTERNAL MODULE: ./src/styles/createEmotionCache.ts + 1 modules
var createEmotionCache = __webpack_require__(87);
;// CONCATENATED MODULE: ./src/styles/customTheme/colors.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** extend additional color here */
const extendedColors = {
  brand: {
    100: "",
    200: "",
    300: "",
    400: "",
    500: "",
    600: "",
    700: "",
    800: "",
    900: ""
  }
};
/** override chakra colors here */

const overridenChakraColors = {};

const colors = _objectSpread(_objectSpread({}, overridenChakraColors), extendedColors);

/* harmony default export */ const customTheme_colors = (colors);
;// CONCATENATED MODULE: ./src/styles/customTheme/components/button.ts
const Button = {
  baseStyle: {
    borderRadius: "full"
  }
};
/* harmony default export */ const components_button = (Button);
;// CONCATENATED MODULE: ./src/styles/customTheme/fonts.ts
const fonts = {
  body: "Lexend, sans-serif",
  heading: "Lexend, serif"
};
/* harmony default export */ const customTheme_fonts = (fonts);
;// CONCATENATED MODULE: ./src/styles/customTheme/index.ts




const customTheme = (0,react_.extendTheme)({
  fonts: customTheme_fonts,
  colors: customTheme_colors,
  components: {
    Button: components_button
  }
});
/* harmony default export */ const styles_customTheme = (customTheme);
;// CONCATENATED MODULE: ./src/pages/_app.tsx
function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/jsx-props-no-spreading */












const clientSideEmotionCache = (0,createEmotionCache/* default */.Z)();

const MyApp = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(external_emotion_react_namespaceObject.CacheProvider, {
    value: emotionCache,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.ChakraProvider, {
      theme: styles_customTheme,
      children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
        children: /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "viewport",
          content: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(external_next_seo_namespaceObject.DefaultSeo, _app_objectSpread({}, next_seo_config)), /*#__PURE__*/jsx_runtime_.jsx(layout, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))
      })]
    })
  });
};

MyApp.defaultProps = {
  emotionCache: clientSideEmotionCache
};
/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 87:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

/***/ 426:
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,352], () => (__webpack_exec__(245)));
module.exports = __webpack_exports__;

})();