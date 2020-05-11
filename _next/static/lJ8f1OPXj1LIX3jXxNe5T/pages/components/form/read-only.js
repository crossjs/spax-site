(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"+wNj":function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}t.d(n,"a",(function(){return r}))},"2Iaj":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/form/read-only",function(){return t("ayOX")}])},HbGN:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t("+wNj");function a(e,n){if(null==e)return{};var t,a,o=Object(r.a)(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}},Km8e:function(e,n,t){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},ZVZ0:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t("ERkP"),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),s=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"===typeof e?e(n):i({},n,{},e)),t},p=function(e){var n=s(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},b="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},O=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),b=r,O=p["".concat(c,".").concat(b)]||p[b]||f[b]||o;return t?a.a.createElement(O,i({ref:n},u,{components:t})):a.a.createElement(O,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"===typeof e||r){var o=t.length,c=new Array(o);c[0]=O;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[b]="string"===typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=t[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}O.displayName="MDXCreateElement"},ayOX:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));var r=t("cxan"),a=t("HbGN"),o=t("ERkP"),c=t.n(o),i=t("ZVZ0"),l=(c.a.createElement,{}),u="wrapper";function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)(u,Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("nav",{className:"toc"},Object(i.b)("ol",Object(r.a)({parentName:"nav"},{className:"toc-level toc-level-1"}),Object(i.b)("li",Object(r.a)({parentName:"ol"},{className:"toc-item toc-item-h2"}),Object(i.b)("a",Object(r.a)({parentName:"li"},{className:"toc-link toc-link-h2",href:"#on-form"}),"On Form")),Object(i.b)("li",Object(r.a)({parentName:"ol"},{className:"toc-item toc-item-h2"}),Object(i.b)("a",Object(r.a)({parentName:"li"},{className:"toc-link toc-link-h2",href:"#on-field"}),"On Field")))),Object(i.b)("h1",{id:"readonly"},"ReadOnly"),Object(i.b)("h2",{id:"on-form"},"On Form"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:"live",live:!0}),"<JsonForm\n  readOnly\n  name=\"f-01\"\n  layout=\"horizontal-inline\"\n  data={{ string: 'initial value' }}\n  dataSchema={{\n    string: {\n      type: 'string',\n      title: 'String',\n      required: true,\n    },\n    string2: {\n      type: 'string',\n      title: 'String2',\n      required: true,\n    },\n  }}\n/>\n")),Object(i.b)("h2",{id:"on-field"},"On Field"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:"live",live:!0}),"<JsonForm\n  name=\"f-02\"\n  layout=\"horizontal-inline\"\n  data={{ string: 'initial value' }}\n  dataSchema={{\n    string: {\n      type: 'string',\n      title: 'String',\n      required: true,\n      readOnly: true,\n    },\n    string2: {\n      type: 'string',\n      title: 'String2',\n      required: true,\n      readOnly: true,\n    },\n  }}\n/>\n")))}s.isMDXComponent=!0},cxan:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return r}))}},[["2Iaj",0,1]]]);