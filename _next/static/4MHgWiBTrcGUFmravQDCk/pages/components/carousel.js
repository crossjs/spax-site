(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+wNj":function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",(function(){return n}))},CzTr:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));var n=a("cxan"),r=a("HbGN"),c=a("ERkP"),o=a.n(c),b=a("ZVZ0"),l=(o.a.createElement,{}),i="wrapper";function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)(i,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("nav",{className:"toc"},Object(b.b)("ol",Object(n.a)({parentName:"nav"},{className:"toc-level toc-level-1"}),Object(b.b)("li",Object(n.a)({parentName:"ol"},{className:"toc-item toc-item-h2"}),Object(b.b)("a",Object(n.a)({parentName:"li"},{className:"toc-link toc-link-h2",href:"#usage"}),"Usage")),Object(b.b)("li",Object(n.a)({parentName:"ol"},{className:"toc-item toc-item-h2"}),Object(b.b)("a",Object(n.a)({parentName:"li"},{className:"toc-link toc-link-h2",href:"#props"}),"Props")),Object(b.b)("li",Object(n.a)({parentName:"ol"},{className:"toc-item toc-item-h2"}),Object(b.b)("a",Object(n.a)({parentName:"li"},{className:"toc-link toc-link-h2",href:"#examples"}),"Examples")),Object(b.b)("li",Object(n.a)({parentName:"ol"},{className:"toc-item toc-item-h2"}),Object(b.b)("a",Object(n.a)({parentName:"li"},{className:"toc-link toc-link-h2",href:"#carouselwitharrows"}),"CarouselWithArrows"),Object(b.b)("ol",Object(n.a)({parentName:"li"},{className:"toc-level toc-level-2"}),Object(b.b)("li",Object(n.a)({parentName:"ol"},{className:"toc-item toc-item-h3"}),Object(b.b)("a",Object(n.a)({parentName:"li"},{className:"toc-link toc-link-h3",href:"#usage-1"}),"Usage")),Object(b.b)("li",Object(n.a)({parentName:"ol"},{className:"toc-item toc-item-h3"}),Object(b.b)("a",Object(n.a)({parentName:"li"},{className:"toc-link toc-link-h3",href:"#props-1"}),"Props")),Object(b.b)("li",Object(n.a)({parentName:"ol"},{className:"toc-item toc-item-h3"}),Object(b.b)("a",Object(n.a)({parentName:"li"},{className:"toc-link toc-link-h3",href:"#examples-1"}),"Examples")))))),Object(b.b)("h1",{id:"carousel"},"Carousel"),Object(b.b)("p",null,"\u8f6e\u64ad\u3002"),Object(b.b)("h2",{id:"usage"},"Usage"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import { Carousel } from '@ide/carousel';\n\nReactDOM.render(<Carousel ... />, document.body);\n")),Object(b.b)("h2",{id:"props"},"Props"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Props"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"children*"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ReactElement | ReactElement[]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),""),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"classes?"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"{\nroot?: string;\ncontent?: string;\n}"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),""),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"distance*"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),""),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"offset?"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"direction?"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"'row' | 'column'"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"'row'"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"duration?"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),""),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"")))),Object(b.b)("h2",{id:"examples"},"Examples"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx",metastring:"live",live:!0}),"const [offset, setOffset] = React.useState(0);\nconst [direction, setDirection] = React.useState('row');\n\nreturn (\n  <>\n    <Box display=\"flex\" alignItems=\"center\" mb={1}>\n      <Box display=\"flex\" alignItems=\"center\" mx={1}>\n        Offset:\n      </Box>\n      <Box display=\"flex\" alignItems=\"center\" mx={1}>\n        <OutlinedInput\n          inputProps={{ size: '1' }}\n          value={offset}\n          onChange={(e) => setOffset(+e.target.value)} />\n      </Box>\n      <Box display=\"flex\" alignItems=\"center\" mx={1}>\n        Direction:\n      </Box>\n      <Box display=\"flex\" alignItems=\"center\" mx={1}>\n        <RadioGroup\n          row\n          value={direction}\n          onChange={(e) => setDirection(e.target.value)}>\n          <FormControlLabel value=\"row\" control={<Radio />} label=\"Row\" />\n          <FormControlLabel value=\"column\" control={<Radio />} label=\"Column\" />\n        </RadioGroup>\n      </Box>\n    </Box>\n    <Carousel distance={500} offset={offset} direction={direction}>\n      <Box style={{ [direction === 'row' ? 'height' : 'width']: 500, background: 'rgb(200, 0, 0)' }}>1</Box>\n      <Box style={{ [direction === 'row' ? 'height' : 'width']: 500, background: 'rgb(0, 200, 0)' }}>2</Box>\n      <Box style={{ [direction === 'row' ? 'height' : 'width']: 500, background: 'rgb(0, 0, 200)' }}>3</Box>\n      <Box style={{ [direction === 'row' ? 'height' : 'width']: 500, background: 'rgb(200, 200, 0)' }}>4</Box>\n      <Box style={{ [direction === 'row' ? 'height' : 'width']: 500, background: 'rgb(200, 0, 200)' }}>5</Box>\n      <Box style={{ [direction === 'row' ? 'height' : 'width']: 500, background: 'rgb(0, 200, 200)' }}>6</Box>\n    </Carousel>\n  </>\n);\n")),Object(b.b)("h2",{id:"carouselwitharrows"},"CarouselWithArrows"),Object(b.b)("p",null,"\u5728 Carousel \u7684\u57fa\u7840\u4e0a\u589e\u52a0\u63a7\u5236\u6309\u94ae"),Object(b.b)("h3",{id:"usage-1"},"Usage"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import { CarouselWithArrows } from '@ide/components';\n\nReactDOM.render(<CarouselWithArrows ... />, document.body);\n")),Object(b.b)("h3",{id:"props-1"},"Props"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Props"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"classes?"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"{\nroot?: string;\nwrapper?: string;\ncontrol?: string;\nmain?: string;\ncontent?: string;\n}"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),""),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"loop?"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"false"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"")))),Object(b.b)("h3",{id:"examples-1"},"Examples"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx",metastring:"live",live:!0}),"const [loop, setLoop] = React.useState(false);\n\nreturn (\n  <>\n    <FormControlLabel\n      control={<Switch\n        checked={loop}\n        onChange={(e) => setLoop(e.target.checked)} name=\"checkedA\" />\n      }\n      label=\"Loop\"\n    />\n    <CarouselWithArrows loop={loop} distance={500}>\n      <Box style={{ height: 500, background: 'rgb(200, 0, 0)' }}>1</Box>\n      <Box style={{ height: 500, background: 'rgb(0, 200, 0)' }}>2</Box>\n      <Box style={{ height: 500, background: 'rgb(0, 0, 200)' }}>3</Box>\n      <Box style={{ height: 500, background: 'rgb(200, 200, 0)' }}>4</Box>\n      <Box style={{ height: 500, background: 'rgb(200, 0, 200)' }}>5</Box>\n      <Box style={{ height: 500, background: 'rgb(0, 200, 200)' }}>6</Box>\n    </CarouselWithArrows>\n  </>\n);\n")))}s.isMDXComponent=!0},HbGN:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("+wNj");function r(e,t){if(null==e)return{};var a,r,c=Object(n.a)(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}},Km8e:function(e,t,a){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},ZVZ0:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a("ERkP"),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),s=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"===typeof e?e(t):b({},t,{},e)),a},p=function(e){var t=s(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},O="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=s(a),O=n,j=p["".concat(o,".").concat(O)]||p[O]||m[O]||c;return a?r.a.createElement(j,b({ref:t},i,{components:a})):r.a.createElement(j,b({ref:t},i))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"===typeof e||n){var c=a.length,o=new Array(c);o[0]=j;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b[O]="string"===typeof e?e:n,o[1]=b;for(var i=2;i<c;i++)o[i]=a[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},cxan:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))},mnvN:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/carousel",function(){return a("CzTr")}])}},[["mnvN",0,1]]]);