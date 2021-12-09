/*! For license information please see 64.6bf0e822.chunk.js.LICENSE.txt */
(this["webpackJsonpnimflow-studio"]=this["webpackJsonpnimflow-studio"]||[]).push([[64],{1056:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(593),o=n(3);function a(t,e,n){void 0===e&&(e=[]),void 0===n&&(n={loading:!1});var a=Object(o.useRef)(0),c=function(){var t=Object(o.useRef)(!1),e=Object(o.useCallback)((function(){return t.current}),[]);return Object(o.useEffect)((function(){return t.current=!0,function(){t.current=!1}}),[]),e}(),u=Object(o.useState)(n),i=u[0],f=u[1],l=Object(o.useCallback)((function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var o=++a.current;return i.loading||f((function(t){return Object(r.__assign)(Object(r.__assign)({},t),{loading:!0})})),t.apply(void 0,e).then((function(t){return c()&&o===a.current&&f({value:t,loading:!1}),t}),(function(t){return c()&&o===a.current&&f({error:t,loading:!1}),t}))}),e);return[i,l]}},1310:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(3),o=n(1056);function a(t,e){void 0===e&&(e=[]);var n=Object(o.a)(t,e,{loading:!0}),a=n[0],c=n[1];return Object(r.useEffect)((function(){c()}),[c]),a}},3197:function(t,e,n){"use strict";n.r(e),n.d(e,"ContextSimulationGeneratorFromContext",(function(){return j}));var r=n(5),o=n.n(r),a=n(21),c=n(1),u=n(3),i=n(830),f=n(1310),l=n(952),s=n(1060),p=n.n(s),d=n(735),b=n(1133),y=n(1875),v=n(1606),h=n(2281),w=n(1788),_=n(1132),O=n(1062),m=n(133),j=function(){var t=Object(i.h)(),e=Object(i.i)().blobUrl,n=Object(u.useState)(),r=Object(c.a)(n,2),s=r[0],j=r[1],g=Object(u.useState)(),x=Object(c.a)(g,2),S=x[0],P=x[1],k=Object(d.c)().contextTypes_FindOne,E=Object(w.b)().simulations_InsertOne,T=Object(f.a)(Object(a.a)(o.a.mark((function n(){var r,a,c,u,i,f;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return");case 2:if(r=atob(e)){n.next=5;break}return n.abrupt("return");case 5:return n.prev=5,n.next=8,p.a.get(r,{responseType:"blob"});case 8:return c=n.sent,n.next=11,Object(O.c)(c.data);case 11:a=n.sent,n.next=17;break;case 14:n.prev=14,n.t0=n.catch(5),t("../..");case 17:return n.prev=17,URL.revokeObjectURL(r),n.finish(17);case 20:if(!a){n.next=30;break}return n.next=23,k({name:a.context.typeName});case 23:return u=n.sent,i={name:"".concat(a.context.typeName,"-").concat(a.context.id),contextTypeName:a.context.typeName,pendingEvents:a.pendingEvents,history:[]},n.next=27,Object(y.c)(u.name,(function(t){return k({name:t})}));case 27:f=n.sent,j(i),P(f);case 30:case"end":return n.stop()}}),n,null,[[5,14,17,20]])}))),[e,t]),R=T.loading,C=T.error,I=Object(u.useCallback)(function(){var e=Object(a.a)(o.a.mark((function e(n){var r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E(n);case 3:r=e.sent,t("../../edit/".concat(r),{replace:!0}),e.next=12;break;case 7:return e.prev=7,e.t0=e.catch(0),a=e.t0.toString(),_.a.isApiException(e.t0)&&(a=e.t0.message,"status"in e.t0&&(a+=" (status: ".concat(e.t0.status,")"))),e.abrupt("return",[{message:a}]);case 12:return e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),[t,E]);return R?Object(m.jsx)(b.b,{}):C?Object(m.jsx)(l.a,{severity:"error",children:C.toString()}):S?Object(m.jsx)(v.a,{contextTypeProvider:S,simulation:s,children:Object(m.jsx)(h.a,{onSaveChanges:I})}):null};e.default=j},593:function(t,e,n){"use strict";n.r(e),n.d(e,"__extends",(function(){return o})),n.d(e,"__assign",(function(){return a})),n.d(e,"__rest",(function(){return c})),n.d(e,"__decorate",(function(){return u})),n.d(e,"__param",(function(){return i})),n.d(e,"__metadata",(function(){return f})),n.d(e,"__awaiter",(function(){return l})),n.d(e,"__generator",(function(){return s})),n.d(e,"__createBinding",(function(){return p})),n.d(e,"__exportStar",(function(){return d})),n.d(e,"__values",(function(){return b})),n.d(e,"__read",(function(){return y})),n.d(e,"__spread",(function(){return v})),n.d(e,"__spreadArrays",(function(){return h})),n.d(e,"__spreadArray",(function(){return w})),n.d(e,"__await",(function(){return _})),n.d(e,"__asyncGenerator",(function(){return O})),n.d(e,"__asyncDelegator",(function(){return m})),n.d(e,"__asyncValues",(function(){return j})),n.d(e,"__makeTemplateObject",(function(){return g})),n.d(e,"__importStar",(function(){return S})),n.d(e,"__importDefault",(function(){return P})),n.d(e,"__classPrivateFieldGet",(function(){return k})),n.d(e,"__classPrivateFieldSet",(function(){return E}));var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)};function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var a=function(){return a=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},a.apply(this,arguments)};function c(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n}function u(t,e,n,r){var o,a=arguments.length,c=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(c=(a<3?o(c):a>3?o(e,n,c):o(e,n))||c);return a>3&&c&&Object.defineProperty(e,n,c),c}function i(t,e){return function(n,r){e(n,r,t)}}function f(t,e){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)}function l(t,e,n,r){return new(n||(n=Promise))((function(o,a){function c(t){try{i(r.next(t))}catch(e){a(e)}}function u(t){try{i(r.throw(t))}catch(e){a(e)}}function i(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,u)}i((r=r.apply(t,e||[])).next())}))}function s(t,e){var n,r,o,a,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,r=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){c=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){c.label=a[1];break}if(6===a[0]&&c.label<o[1]){c.label=o[1],o=a;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(a);break}o[2]&&c.ops.pop(),c.trys.pop();continue}a=e.call(t,c)}catch(u){a=[6,u],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}}var p=Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]};function d(t,e){for(var n in t)"default"===n||Object.prototype.hasOwnProperty.call(e,n)||p(e,t,n)}function b(t){var e="function"===typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function y(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,a=n.call(t),c=[];try{for(;(void 0===e||e-- >0)&&!(r=a.next()).done;)c.push(r.value)}catch(u){o={error:u}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return c}function v(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(y(arguments[e]));return t}function h(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var a=arguments[e],c=0,u=a.length;c<u;c++,o++)r[o]=a[c];return r}function w(t,e,n){if(n||2===arguments.length)for(var r,o=0,a=e.length;o<a;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))}function _(t){return this instanceof _?(this.v=t,this):new _(t)}function O(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(t,e||[]),a=[];return r={},c("next"),c("throw"),c("return"),r[Symbol.asyncIterator]=function(){return this},r;function c(t){o[t]&&(r[t]=function(e){return new Promise((function(n,r){a.push([t,e,n,r])>1||u(t,e)}))})}function u(t,e){try{(n=o[t](e)).value instanceof _?Promise.resolve(n.value.v).then(i,f):l(a[0][2],n)}catch(r){l(a[0][3],r)}var n}function i(t){u("next",t)}function f(t){u("throw",t)}function l(t,e){t(e),a.shift(),a.length&&u(a[0][0],a[0][1])}}function m(t){var e,n;return e={},r("next"),r("throw",(function(t){throw t})),r("return"),e[Symbol.iterator]=function(){return this},e;function r(r,o){e[r]=t[r]?function(e){return(n=!n)?{value:_(t[r](e)),done:"return"===r}:o?o(e):e}:o}}function j(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,n=t[Symbol.asyncIterator];return n?n.call(t):(t=b(t),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(n){e[n]=t[n]&&function(e){return new Promise((function(r,o){(function(t,e,n,r){Promise.resolve(r).then((function(e){t({value:e,done:n})}),e)})(r,o,(e=t[n](e)).done,e.value)}))}}}function g(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}var x=Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e};function S(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&p(e,t,n);return x(e,t),e}function P(t){return t&&t.__esModule?t:{default:t}}function k(t,e,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"===typeof e?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(t):r?r.value:e.get(t)}function E(t,e,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"===typeof e?t!==e||!o:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(t,n):o?o.value=n:e.set(t,n),n}}}]);
//# sourceMappingURL=64.6bf0e822.chunk.js.map