(this["webpackJsonpnimflow-studio"]=this["webpackJsonpnimflow-studio"]||[]).push([[4],{470:function(t,n,e){"use strict";var r=e(433);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(e(436)),u=e(125),i=(0,o.default)((0,u.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");n.default=i},474:function(t,n,e){"use strict";var r=e(433);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(e(436)),u=e(125),i=(0,o.default)((0,u.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");n.default=i},481:function(t,n,e){"use strict";var r=e(433);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(e(436)),u=e(125),i=(0,o.default)((0,u.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");n.default=i},803:function(t,n,e){"use strict";e.d(n,"a",(function(){return l})),e.d(n,"b",(function(){return p})),e.d(n,"c",(function(){return s})),e.d(n,"d",(function(){return f}));var r=e(3);function o(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var u="function"===typeof Symbol&&Symbol.observable||"@@observable",i=function(){return Math.random().toString(36).substring(7).split("").join(".")},a={INIT:"@@redux/INIT"+i(),REPLACE:"@@redux/REPLACE"+i(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+i()}};function c(t){if("object"!==typeof t||null===t)return!1;for(var n=t;null!==Object.getPrototypeOf(n);)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(t)===n}function f(t,n,e){var r;if("function"===typeof n&&"function"===typeof e||"function"===typeof e&&"function"===typeof arguments[3])throw new Error(o(0));if("function"===typeof n&&"undefined"===typeof e&&(e=n,n=void 0),"undefined"!==typeof e){if("function"!==typeof e)throw new Error(o(1));return e(f)(t,n)}if("function"!==typeof t)throw new Error(o(2));var i=t,d=n,p=[],s=p,l=!1;function v(){s===p&&(s=p.slice())}function b(){if(l)throw new Error(o(3));return d}function h(t){if("function"!==typeof t)throw new Error(o(4));if(l)throw new Error(o(5));var n=!0;return v(),s.push(t),function(){if(n){if(l)throw new Error(o(6));n=!1,v();var e=s.indexOf(t);s.splice(e,1),p=null}}}function m(t){if(!c(t))throw new Error(o(7));if("undefined"===typeof t.type)throw new Error(o(8));if(l)throw new Error(o(9));try{l=!0,d=i(d,t)}finally{l=!1}for(var n=p=s,e=0;e<n.length;e++){(0,n[e])()}return t}function g(t){if("function"!==typeof t)throw new Error(o(10));i=t,m({type:a.REPLACE})}function y(){var t,n=h;return(t={subscribe:function(t){if("object"!==typeof t||null===t)throw new Error(o(11));function e(){t.next&&t.next(b())}return e(),{unsubscribe:n(e)}}})[u]=function(){return this},t}return m({type:a.INIT}),(r={dispatch:m,subscribe:h,getState:b,replaceReducer:g})[u]=y,r}function d(t,n){return function(){return n(t.apply(this,arguments))}}function p(t,n){if("function"===typeof t)return d(t,n);if("object"!==typeof t||null===t)throw new Error(o(16));var e={};for(var r in t){var u=t[r];"function"===typeof u&&(e[r]=d(u,n))}return e}function s(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return 0===n.length?function(t){return t}:1===n.length?n[0]:n.reduce((function(t,n){return function(){return t(n.apply(void 0,arguments))}}))}function l(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return function(t){return function(){var e=t.apply(void 0,arguments),u=function(){throw new Error(o(15))},i={getState:e.getState,dispatch:function(){return u.apply(void 0,arguments)}},a=n.map((function(t){return t(i)}));return u=s.apply(void 0,a)(e.dispatch),Object(r.a)(Object(r.a)({},e),{},{dispatch:u})}}}},982:function(t,n,e){"use strict";n.a=function(t){var n=[],e=null,r=function(){for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];n=o,e||(e=requestAnimationFrame((function(){e=null,t.apply(void 0,n)})))};return r.cancel=function(){e&&(cancelAnimationFrame(e),e=null)},r}},983:function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return u}));var r=e(6);function o(t,n){var e=Object(r.useState)((function(){return{inputs:n,result:t()}}))[0],o=Object(r.useRef)(!0),u=Object(r.useRef)(e),i=o.current||Boolean(n&&u.current.inputs&&function(t,n){if(t.length!==n.length)return!1;for(var e=0;e<t.length;e++)if(t[e]!==n[e])return!1;return!0}(n,u.current.inputs))?u.current:{inputs:n,result:t()};return Object(r.useEffect)((function(){o.current=!1,u.current=i}),[i]),i.result}var u=o,i=function(t,n){return o((function(){return t}),n)}},991:function(t,n,e){"use strict";e.d(n,"a",(function(){return p})),e.d(n,"b",(function(){return z}));var r=e(6),o=e.n(r),u=o.a.createContext(null);var i=function(t){t()};function a(){var t=i,n=null,e=null;return{clear:function(){n=null,e=null},notify:function(){t((function(){for(var t=n;t;)t.callback(),t=t.next}))},get:function(){for(var t=[],e=n;e;)t.push(e),e=e.next;return t},subscribe:function(t){var r=!0,o=e={callback:t,next:null,prev:e};return o.prev?o.prev.next=o:n=o,function(){r&&null!==n&&(r=!1,o.next?o.next.prev=o.prev:e=o.prev,o.prev?o.prev.next=o.next:n=o.next)}}}}var c={notify:function(){},get:function(){return[]}};function f(t,n){var e,r=c;function o(){i.onStateChange&&i.onStateChange()}function u(){e||(e=n?n.addNestedSub(o):t.subscribe(o),r=a())}var i={addNestedSub:function(t){return u(),r.subscribe(t)},notifyNestedSubs:function(){r.notify()},handleChangeWrapper:o,isSubscribed:function(){return Boolean(e)},trySubscribe:u,tryUnsubscribe:function(){e&&(e(),e=void 0,r.clear(),r=c)},getListeners:function(){return r}};return i}var d="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?r.useLayoutEffect:r.useEffect;var p=function(t){var n=t.store,e=t.context,i=t.children,a=Object(r.useMemo)((function(){var t=f(n);return{store:n,subscription:t}}),[n]),c=Object(r.useMemo)((function(){return n.getState()}),[n]);d((function(){var t=a.subscription;return t.onStateChange=t.notifyNestedSubs,t.trySubscribe(),c!==n.getState()&&t.notifyNestedSubs(),function(){t.tryUnsubscribe(),t.onStateChange=null}}),[a,c]);var p=e||u;return o.a.createElement(p.Provider,{value:a},i)},s=e(428),l=e(126),v=e(597),b=e.n(v),h=e(598),m=["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"],g=["reactReduxForwardedRef"],y=[],O=[null,null];function w(t,n){var e=t[1];return[n.payload,e+1]}function P(t,n,e){d((function(){return t.apply(void 0,n)}),e)}function E(t,n,e,r,o,u,i){t.current=r,n.current=o,e.current=!1,u.current&&(u.current=null,i())}function j(t,n,e,r,o,u,i,a,c,f){if(t){var d=!1,p=null,s=function(){if(!d){var t,e,s=n.getState();try{t=r(s,o.current)}catch(l){e=l,p=l}e||(p=null),t===u.current?i.current||c():(u.current=t,a.current=t,i.current=!0,f({type:"STORE_UPDATED",payload:{error:e}}))}};e.onStateChange=s,e.trySubscribe(),s();return function(){if(d=!0,e.tryUnsubscribe(),e.onStateChange=null,p)throw p}}}var S=function(){return[null,0]};function x(t,n){void 0===n&&(n={});var e=n,i=e.getDisplayName,a=void 0===i?function(t){return"ConnectAdvanced("+t+")"}:i,c=e.methodName,d=void 0===c?"connectAdvanced":c,p=e.renderCountProp,v=void 0===p?void 0:p,x=e.shouldHandleStateChanges,N=void 0===x||x,C=e.storeKey,M=void 0===C?"store":C,R=(e.withRef,e.forwardRef),T=void 0!==R&&R,B=e.context,q=void 0===B?u:B,A=Object(l.a)(e,m),D=q;return function(n){var e=n.displayName||n.name||"Component",u=a(e),i=Object(s.a)({},A,{getDisplayName:a,methodName:d,renderCountProp:v,shouldHandleStateChanges:N,storeKey:M,displayName:u,wrappedComponentName:e,WrappedComponent:n}),c=A.pure;var p=c?r.useMemo:function(t){return t()};function m(e){var u=Object(r.useMemo)((function(){var t=e.reactReduxForwardedRef,n=Object(l.a)(e,g);return[e.context,t,n]}),[e]),a=u[0],c=u[1],d=u[2],v=Object(r.useMemo)((function(){return a&&a.Consumer&&Object(h.isContextConsumer)(o.a.createElement(a.Consumer,null))?a:D}),[a,D]),b=Object(r.useContext)(v),m=Boolean(e.store)&&Boolean(e.store.getState)&&Boolean(e.store.dispatch);Boolean(b)&&Boolean(b.store);var x=m?e.store:b.store,C=Object(r.useMemo)((function(){return function(n){return t(n.dispatch,i)}(x)}),[x]),M=Object(r.useMemo)((function(){if(!N)return O;var t=f(x,m?null:b.subscription),n=t.notifyNestedSubs.bind(t);return[t,n]}),[x,m,b]),R=M[0],T=M[1],B=Object(r.useMemo)((function(){return m?b:Object(s.a)({},b,{subscription:R})}),[m,b,R]),q=Object(r.useReducer)(w,y,S),A=q[0][0],_=q[1];if(A&&A.error)throw A.error;var I=Object(r.useRef)(),L=Object(r.useRef)(d),W=Object(r.useRef)(),F=Object(r.useRef)(!1),H=p((function(){return W.current&&d===L.current?W.current:C(x.getState(),d)}),[x,A,d]);P(E,[L,I,F,d,H,W,T]),P(j,[N,x,R,C,L,I,F,W,T,_],[x,R,C]);var U=Object(r.useMemo)((function(){return o.a.createElement(n,Object(s.a)({},H,{ref:c}))}),[c,n,H]);return Object(r.useMemo)((function(){return N?o.a.createElement(v.Provider,{value:B},U):U}),[v,U,B])}var x=c?o.a.memo(m):m;if(x.WrappedComponent=n,x.displayName=m.displayName=u,T){var C=o.a.forwardRef((function(t,n){return o.a.createElement(x,Object(s.a)({},t,{reactReduxForwardedRef:n}))}));return C.displayName=u,C.WrappedComponent=n,b()(C,n)}return b()(x,n)}}function N(t,n){return t===n?0!==t||0!==n||1/t===1/n:t!==t&&n!==n}function C(t,n){if(N(t,n))return!0;if("object"!==typeof t||null===t||"object"!==typeof n||null===n)return!1;var e=Object.keys(t),r=Object.keys(n);if(e.length!==r.length)return!1;for(var o=0;o<e.length;o++)if(!Object.prototype.hasOwnProperty.call(n,e[o])||!N(t[e[o]],n[e[o]]))return!1;return!0}function M(t){return function(n,e){var r=t(n,e);function o(){return r}return o.dependsOnOwnProps=!1,o}}function R(t){return null!==t.dependsOnOwnProps&&void 0!==t.dependsOnOwnProps?Boolean(t.dependsOnOwnProps):1!==t.length}function T(t,n){return function(n,e){e.displayName;var r=function(t,n){return r.dependsOnOwnProps?r.mapToProps(t,n):r.mapToProps(t)};return r.dependsOnOwnProps=!0,r.mapToProps=function(n,e){r.mapToProps=t,r.dependsOnOwnProps=R(t);var o=r(n,e);return"function"===typeof o&&(r.mapToProps=o,r.dependsOnOwnProps=R(o),o=r(n,e)),o},r}}var B=[function(t){return"function"===typeof t?T(t):void 0},function(t){return t?void 0:M((function(t){return{dispatch:t}}))},function(t){return t&&"object"===typeof t?M((function(n){return function(t,n){var e={},r=function(r){var o=t[r];"function"===typeof o&&(e[r]=function(){return n(o.apply(void 0,arguments))})};for(var o in t)r(o);return e}(t,n)})):void 0}];var q=[function(t){return"function"===typeof t?T(t):void 0},function(t){return t?void 0:M((function(){return{}}))}];function A(t,n,e){return Object(s.a)({},e,t,n)}var D=[function(t){return"function"===typeof t?function(t){return function(n,e){e.displayName;var r,o=e.pure,u=e.areMergedPropsEqual,i=!1;return function(n,e,a){var c=t(n,e,a);return i?o&&u(c,r)||(r=c):(i=!0,r=c),r}}}(t):void 0},function(t){return t?void 0:function(){return A}}];var _=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function I(t,n,e,r){return function(o,u){return e(t(o,u),n(r,u),u)}}function L(t,n,e,r,o){var u,i,a,c,f,d=o.areStatesEqual,p=o.areOwnPropsEqual,s=o.areStatePropsEqual,l=!1;function v(o,l){var v=!p(l,i),b=!d(o,u);return u=o,i=l,v&&b?(a=t(u,i),n.dependsOnOwnProps&&(c=n(r,i)),f=e(a,c,i)):v?(t.dependsOnOwnProps&&(a=t(u,i)),n.dependsOnOwnProps&&(c=n(r,i)),f=e(a,c,i)):b?function(){var n=t(u,i),r=!s(n,a);return a=n,r&&(f=e(a,c,i)),f}():f}return function(o,d){return l?v(o,d):(a=t(u=o,i=d),c=n(r,i),f=e(a,c,i),l=!0,f)}}function W(t,n){var e=n.initMapStateToProps,r=n.initMapDispatchToProps,o=n.initMergeProps,u=Object(l.a)(n,_),i=e(t,u),a=r(t,u),c=o(t,u);return(u.pure?L:I)(i,a,c,t,u)}var F=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function H(t,n,e){for(var r=n.length-1;r>=0;r--){var o=n[r](t);if(o)return o}return function(n,r){throw new Error("Invalid value of type "+typeof t+" for "+e+" argument when connecting component "+r.wrappedComponentName+".")}}function U(t,n){return t===n}function k(t){var n=void 0===t?{}:t,e=n.connectHOC,r=void 0===e?x:e,o=n.mapStateToPropsFactories,u=void 0===o?q:o,i=n.mapDispatchToPropsFactories,a=void 0===i?B:i,c=n.mergePropsFactories,f=void 0===c?D:c,d=n.selectorFactory,p=void 0===d?W:d;return function(t,n,e,o){void 0===o&&(o={});var i=o,c=i.pure,d=void 0===c||c,v=i.areStatesEqual,b=void 0===v?U:v,h=i.areOwnPropsEqual,m=void 0===h?C:h,g=i.areStatePropsEqual,y=void 0===g?C:g,O=i.areMergedPropsEqual,w=void 0===O?C:O,P=Object(l.a)(i,F),E=H(t,u,"mapStateToProps"),j=H(n,a,"mapDispatchToProps"),S=H(e,f,"mergeProps");return r(p,Object(s.a)({methodName:"connect",getDisplayName:function(t){return"Connect("+t+")"},shouldHandleStateChanges:Boolean(t),initMapStateToProps:E,initMapDispatchToProps:j,initMergeProps:S,pure:d,areStatesEqual:b,areOwnPropsEqual:m,areStatePropsEqual:y,areMergedPropsEqual:w},P))}}var z=k();var K,V=e(66);K=V.unstable_batchedUpdates,i=K},992:function(t,n,e){"use strict";e.d(n,"a",(function(){return s})),e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return u})),e.d(n,"d",(function(){return l})),e.d(n,"e",(function(){return o})),e.d(n,"f",(function(){return d})),e.d(n,"g",(function(){return p}));var r="Invariant failed";var o=function(t){var n=t.top,e=t.right,r=t.bottom,o=t.left;return{top:n,right:e,bottom:r,left:o,width:e-o,height:r-n,x:o,y:n,center:{x:(e+o)/2,y:(r+n)/2}}},u=function(t,n){return{top:t.top-n.top,left:t.left-n.left,bottom:t.bottom+n.bottom,right:t.right+n.right}},i=function(t,n){return{top:t.top+n.top,left:t.left+n.left,bottom:t.bottom-n.bottom,right:t.right-n.right}},a={top:0,right:0,bottom:0,left:0},c=function(t){var n=t.borderBox,e=t.margin,r=void 0===e?a:e,c=t.border,f=void 0===c?a:c,d=t.padding,p=void 0===d?a:d,s=o(u(n,r)),l=o(i(n,f)),v=o(i(l,p));return{marginBox:s,borderBox:o(n),paddingBox:l,contentBox:v,margin:r,border:f,padding:p}},f=function(t){var n=t.slice(0,-2);if("px"!==t.slice(-2))return 0;var e=Number(n);return isNaN(e)&&function(t,n){if(!t)throw new Error(r)}(!1),e},d=function(t,n){var e,r,o=t.borderBox,u=t.border,i=t.margin,a=t.padding,f=(r=n,{top:(e=o).top+r.y,left:e.left+r.x,bottom:e.bottom+r.y,right:e.right+r.x});return c({borderBox:f,border:u,margin:i,padding:a})},p=function(t,n){return void 0===n&&(n={x:window.pageXOffset,y:window.pageYOffset}),d(t,n)},s=function(t,n){var e={top:f(n.marginTop),right:f(n.marginRight),bottom:f(n.marginBottom),left:f(n.marginLeft)},r={top:f(n.paddingTop),right:f(n.paddingRight),bottom:f(n.paddingBottom),left:f(n.paddingLeft)},o={top:f(n.borderTopWidth),right:f(n.borderRightWidth),bottom:f(n.borderBottomWidth),left:f(n.borderLeftWidth)};return c({borderBox:t,margin:e,padding:r,border:o})},l=function(t){var n=t.getBoundingClientRect(),e=window.getComputedStyle(t);return s(n,e)}}}]);
//# sourceMappingURL=4.0443e998.chunk.js.map