parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"2yOG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.attrs,a=void 0===r?{}:r,d=t.children,i=void 0===d?[]:d,o=Object.create(null);return Object.assign(o,{tagName:e,attrs:a,children:i})},t=e;exports.default=t;
},{}],"q4BD":[function(require,module,exports) {
"use strict";function t(t,o){return n(t)||e(t,o)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function e(t,r){var e=[],n=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(n=(i=u.next()).done)&&(e.push(i.value),!r||e.length!==r);n=!0);}catch(l){o=!0,a=l}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return e}function n(t){if(Array.isArray(t))return t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o=function(r){for(var e=r.tagName,n=r.attrs,o=void 0===n?{}:n,i=r.children,u=void 0===i?[]:i,l=document.createElement(e),c=Object.entries(o),f=0;f<c.length;f++){var d=t(c[f],2),v=d[0],y=d[1];l.setAttribute(v,y)}var s=!0,h=!1,p=void 0;try{for(var m,b=u[Symbol.iterator]();!(s=(m=b.next()).done);s=!0){var x=m.value;l.appendChild(a(x))}}catch(g){h=!0,p=g}finally{try{s||null==b.return||b.return()}finally{if(h)throw p}}return l},a=function(t){return"string"==typeof t?document.createTextNode(t):o(t)},i=a;exports.default=i;
},{}],"sxPg":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(e,t){return t.replaceWith(e),e},t=e;exports.default=t;
},{}],"7PyI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=t(require("./render"));function t(r){return r&&r.__esModule?r:{default:r}}function n(r,t){return i(r)||u(r,t)||e()}function e(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(r,t){var n=[],e=!0,u=!1,i=void 0;try{for(var o,a=r[Symbol.iterator]();!(e=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);e=!0);}catch(f){u=!0,i=f}finally{try{e||null==a.return||a.return()}finally{if(u)throw i}}return n}function i(r){if(Array.isArray(r))return r}var o=function(r,t){for(var e=[],u=Object.entries(t),i=function(){var r=n(u[o],2),t=r[0],i=r[1];e.push(function(r){return r.setAttribute(t,i),r})},o=0;o<u.length;o++)i();var a=function(r){r in t||e.push(function(t){return t.removeAttribute(r),t})};for(var f in r)a(f);return function(r){for(var t=0;t<e.length;t++){(0,e[t])(r)}return r}},a=function(r,t){for(var n=[],e=0;e<Math.min(r.length,t.length);e++)n.push([r[e],t[e]]);return n},f=function(t,e){var u=[];t.forEach(function(r,t){u.push(l(r,e[t]))});var i=[],o=!0,f=!1,c=void 0;try{for(var v,h=function(){var t=v.value;i.push(function(n){return n.appendChild((0,r.default)(t)),n})},d=e.slice(t.length)[Symbol.iterator]();!(o=(v=d.next()).done);o=!0)h()}catch(s){f=!0,c=s}finally{try{o||null==d.return||d.return()}finally{if(f)throw c}}return function(r){var t=!0,e=!1,o=void 0;try{for(var f,l=a(u,r.childNodes)[Symbol.iterator]();!(t=(f=l.next()).done);t=!0){var c=n(f.value,2);(0,c[0])(c[1])}}catch(s){e=!0,o=s}finally{try{t||null==l.return||l.return()}finally{if(e)throw o}}for(var v=0;v<i.length;v++){(0,i[v])(r)}return r}},l=function(t,n){if(void 0===n)return function(r){r.remove()};if("string"==typeof t||"string"==typeof n)return t!==n?function(t){var e=(0,r.default)(n);return t.replaceWith(e),e}:function(r){return r};if(t.tagName!==n.tagName)return function(t){var e=(0,r.default)(n);return t.replaceWith(e),e};var e=o(t.attrs,n.attrs),u=f(t.children,n.children);return function(r){return e(r),u(r),r}},c=l;exports.default=c;
},{"./render":"q4BD"}],"epB2":[function(require,module,exports) {
"use strict";var e=u(require("./vdom/createElement")),t=u(require("./vdom/render")),r=u(require("./vdom/mount")),n=u(require("./vdom/diff"));function u(e){return e&&e.__esModule?e:{default:e}}var d=function(t){return(0,e.default)("div",{attrs:{id:"app",dataCount:t},children:["The current count is: ",String(t),(0,e.default)("div",{children:Array.from({length:t},function(){return(0,e.default)("img",{attrs:{style:"height: 50px; width: 50px",src:"http://cdn.arguments.cn/logo.png"}})})})]})},a=d(0),i=(0,t.default)(a),o=(0,r.default)(i,document.getElementById("app"));setInterval(function(){var e=~~(10*Math.random()),t=d(e),r=(0,n.default)(a,t);o=r(o),a=t},1e3);
},{"./vdom/createElement":"2yOG","./vdom/render":"q4BD","./vdom/mount":"sxPg","./vdom/diff":"7PyI"}]},{},["epB2"], null)
//# sourceMappingURL=/main.56aace53.map