(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+wNj":function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}n.d(t,"a",(function(){return r}))},HbGN:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("+wNj");function c(e,t){if(null==e)return{};var n,c,o=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},Km8e:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},Yk0I:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var r=n("cxan"),c=n("HbGN"),o=n("ERkP"),a=n.n(o),i=n("ZVZ0"),s=(a.a.createElement,{}),l="wrapper";function p(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(i.b)(l,Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("nav",{className:"toc"},Object(i.b)("ol",Object(r.a)({parentName:"nav"},{className:"toc-level toc-level-1"}),Object(i.b)("li",Object(r.a)({parentName:"ol"},{className:"toc-item toc-item-h2"}),Object(i.b)("a",Object(r.a)({parentName:"li"},{className:"toc-link toc-link-h2",href:"#best-practice"}),"Best practice"),Object(i.b)("ol",Object(r.a)({parentName:"li"},{className:"toc-level toc-level-2"}),Object(i.b)("li",Object(r.a)({parentName:"ol"},{className:"toc-item toc-item-h3"}),Object(i.b)("a",Object(r.a)({parentName:"li"},{className:"toc-link toc-link-h3",href:"#component-with-styles"}),"Component with styles")))))),Object(i.b)("h1",{id:"components"},"Components"),Object(i.b)("p",null,"\u57fa\u4e8e ",Object(i.b)("inlineCode",{parentName:"p"},"material-ui"),"\u3001",Object(i.b)("inlineCode",{parentName:"p"},"formik"),"\u3001",Object(i.b)("inlineCode",{parentName:"p"},"react-dnd")," \u7b49\u6d41\u884c\u7ec4\u4ef6\u5e93\u7684\u5c01\u88c5\u3002"),Object(i.b)("h2",{id:"best-practice"},"Best practice"),Object(i.b)("h3",{id:"component-with-styles"},"Component with styles"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"import { createStyles, Theme, withStyles } from '@material-ui/core';\nimport React from 'react';\n\nexport interface MyAwesomeProps {\n  children: ReactElement | ReactElement[];\n  classes?: {\n    root?: string;\n    ...\n  };\n  ...\n}\n\nconst styles = (theme: Theme) =>\n  createStyles({\n    root: {\n      width: (props: MyAwesomeProps) => props.xxx ? 123 : 456,\n      ...\n    },\n    ...\n  });\n\n// name starts with `Mui` to make class names deterministic\nexport const MyAwesome = withStyles(styles, { name: 'MuiIdeMyAwesome' })(\n  ({\n    children,\n    classes,\n    ...,\n    ...props\n  }: MyAwesomeProps) => {\n    // bla bla bla\n\n    return (\n      <div className={classes.root} {...props}>\n        ...\n      </div>\n    );\n  },\n);\n")))}p.isMDXComponent=!0},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n("ERkP"),c=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=c.a.createContext({}),p=function(e){var t=c.a.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=p(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},b="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,f=u["".concat(a,".").concat(b)]||u[b]||m[b]||o;return n?c.a.createElement(f,i({ref:t},l,{components:n})):c.a.createElement(f,i({ref:t},l))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[b]="string"===typeof e?e:r,a[1]=i;for(var l=2;l<o;l++)a[l]=n[l];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},cC24:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components",function(){return n("Yk0I")}])},cxan:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))}},[["cC24",0,1]]]);