(this["webpackJsonpnimflow-studio"]=this["webpackJsonpnimflow-studio"]||[]).push([[14],{1052:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(7),r=a(3),c=a(73),o=a(6),i=a(964),l=a(491),u=a(136),s=["name","controlValueAdapter","onChange","onBlur","renderInput","multiple","loading","disabled"],d=function(e){var t,a=e.name,d=e.controlValueAdapter,b=e.onChange,j=e.onBlur,O=e.renderInput,f=e.multiple,v=e.loading,p=e.disabled,m=Object(c.a)(e,s),h=Object(l.g)(),g=h.isSubmitting,x=h.setFieldTouched,C=Object(l.f)({name:a}),y=Object(r.a)(C,3),k=y[0],S=y[1],w=y[2],I=S.error,V=S.touched&&!!I,N=Object(o.useCallback)((function(e,t,a,n){var r=d?d(t):t;w.setValue(null!==r&&void 0!==r?r:void 0),null===b||void 0===b||b(e,t,a,n)}),[d,w,b]),M=Object(o.useCallback)((function(e){x(k.name),k.onBlur(e),null===j||void 0===j||j(e)}),[k,j,x]),z=Object(o.useCallback)((function(e){return O?O(Object(n.a)(Object(n.a)({},e),{},{error:V,helperText:V?I:void 0})):null}),[I,O,V]);return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(i.a,Object(n.a)(Object(n.a)({},k),{},{value:null!==(t=k.value)&&void 0!==t?t:null,onChange:N,onBlur:M,renderInput:z,disabled:null!==p&&void 0!==p?p:g,loading:v||g,multiple:f},m))})}},1263:function(e,t,a){"use strict";var n=a(14),r=Object(n.a)((function(e,t){return Array.prototype.slice.call(t,0).sort((function(t,a){var n=e(t),r=e(a);return n<r?-1:n>r?1:0}))}));t.a=r},2384:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(9),r=a(700),c=Object(r.a)(n.m().required().identifier(),n.k().shape({replaceAll:n.g(),filter:n.k(),ids:n.e().of(n.m())})),o=n.k().shape({name:n.m().required().identifier(),requiredSecretNames:n.e().of(n.m()),contextTypeNames:n.e().of(n.m()),majorVersion:n.j().integer().required().min(0),minorVersion:n.j().integer().required().min(0),customCollections:c,userDefinedFunctionNames:n.e().of(n.m()),eventListenerIds:n.e().of(n.m())})},2427:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(22),o=a(8),i=a.n(o),l=a(6),u=a(3161),s=a(586),d=a(529),b=a(491),j=a(3145),O=a(2491),f=a(537),v=a(499),p=a(540),m=a(592),h=a(670),g=a(675),x=a(3155),C=a(519),y=a(2260),k=a(2240),S=a(2215),w=a(637),I=a.n(w),V=a(656),N=a.n(V),M=a(1052),z=a(514),T=a(535),L=a(567),D=a(1263),E=a(802),R=a(618),F=a(574),P=a(1125),W=a(1584),_=a(626),A=a(2223),q=a(518),B=a.n(q),G=a(523),H=a.n(G),K=a(136),U=function(e){var t=e.name,a=e.label,r=e.textFieldClassName,c=Object(b.f)({name:t}),o=Object(n.a)(c,1)[0],i=Object(u.a)().t;return Object(K.jsx)(K.Fragment,{children:Object(K.jsx)(b.b,{name:t,children:function(e){var n=e.remove,c=e.push;return Object(K.jsxs)(x.a,{container:!0,children:[Object(K.jsxs)(x.a,{item:!0,xs:12,children:[i(a),Object(K.jsx)(S.a,{onClick:function(){return c("")},children:Object(K.jsx)(H.a,{})})]}),o.value&&o.value.map((function(e,a){return Object(K.jsxs)(x.a,{item:!0,xs:12,children:[Object(K.jsx)(C.a,{name:"".concat(t,".").concat(a),label:"",variant:"standard",InputLabelProps:{required:!0},required:!0,className:r}),Object(K.jsx)(b.a,{name:"".concat(t,".").concat(a),component:"div",className:"field-error"}),Object(K.jsx)(S.a,{edge:"end","aria-label":"delete",onClick:function(){return n(a)},children:Object(K.jsx)(B.a,{})})]},a)}))]})}})})},J=Object(j.a)((function(e){return Object(O.a)({root:{flexGrow:1},form:{height:"100%"},toolbar:{minHeight:"48px",paddingLeft:0},secretTextField:{width:"60ch"}})})),Q=function(e){var t=e.onChange,a=function(){var e=Object(z.c)().contextTypes_Search,t=Object(L.a)(e),a=Object(T.a)(t,Object(c.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e({limit:100});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),{revalidateOnFocus:!1}),n=a.data,r=a.isValidating,o=a.mutate,u=a.error;return Object(l.useMemo)((function(){return{contextTypeInfos:null!==n&&void 0!==n?n:[],isValidating:r,error:u,revalidate:o}}),[n,r,o,u])}(),n=a.contextTypeInfos,o=a.isValidating,s=Object(u.a)().t,d=Object(l.useMemo)((function(){return n.map((function(e){return e.name})).sort()}),[n]),b=Object(l.useCallback)((function(e,a){null===t||void 0===t||t(null!==a&&void 0!==a?a:void 0)}),[t]);return Object(K.jsx)(M.a,{name:"contextTypeNames",options:d,multiple:!0,loading:o,onChange:b,fullWidth:!0,renderInput:function(e){return Object(K.jsx)(A.a,Object(r.a)(Object(r.a)({},e),{},{variant:"standard",label:s("ContextTypes")}))}})},X=function(e){var t=e.onChange,a=function(){var e=Object(R.j)().dashboards_GetInfos,t=Object(L.a)(e),a=Object(T.a)([t],function(){var t=Object(c.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e({});case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),{revalidateOnFocus:!1}),n=a.data,r=a.error,o=a.mutate,u=a.isValidating;return Object(l.useMemo)((function(){return{data:null!==n&&void 0!==n?n:[],isValidating:u,error:r,revalidate:o}}),[n,u,o,r])}(),n=a.data,o=a.isValidating,s=Object(u.a)().t,d=Object(l.useMemo)((function(){return n?Object(D.a)((function(e){return e.name}),n).map((function(e){return e.id})):[]}),[n]),b=Object(l.useCallback)((function(e,a){null===t||void 0===t||t(null!==a&&void 0!==a?a:void 0)}),[t]);return Object(K.jsx)(M.a,{name:"customCollections.NimflowDashboards.ids",options:d,multiple:!0,loading:o,getOptionLabel:function(e){var t,a;return null!==(t=null===(a=n.find((function(t){return t.id===e})))||void 0===a?void 0:a.name)&&void 0!==t?t:"".concat(e,"?")},onChange:b,fullWidth:!0,renderInput:function(e){return Object(K.jsx)(A.a,Object(r.a)(Object(r.a)({},e),{},{variant:"standard",label:s("Dashboards")}))}})},Y=function(e){var t=e.onChange,a=function(){var e=Object(F.n)().dashboardWidgets_GetInfos,t=Object(L.a)(e),a=Object(T.a)([t],function(){var t=Object(c.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e({});case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),{revalidateOnFocus:!1}),n=a.data,r=a.error,o=a.mutate,u=a.isValidating;return Object(l.useMemo)((function(){return{data:null!==n&&void 0!==n?n:[],isValidating:u,error:r,revalidate:o}}),[n,u,o,r])}(),n=a.data,o=a.isValidating,s=Object(u.a)().t,d=Object(l.useMemo)((function(){return n?Object(D.a)((function(e){return e.name}),n).map((function(e){return e.id})):[]}),[n]),b=Object(l.useCallback)((function(e,a){null===t||void 0===t||t(null!==a&&void 0!==a?a:void 0)}),[t]);return Object(K.jsx)(M.a,{name:"customCollections.NimflowDashboardWidgets.ids",options:d,multiple:!0,loading:o,getOptionLabel:function(e){var t,a;return null!==(t=null===(a=n.find((function(t){return t.id===e})))||void 0===a?void 0:a.name)&&void 0!==t?t:"".concat(e,"?")},onChange:b,fullWidth:!0,renderInput:function(e){return Object(K.jsx)(A.a,Object(r.a)(Object(r.a)({},e),{},{variant:"standard",label:s("Widgets")}))}})},Z=function(e){var t=function(){var e=Object(_.b)().getAllUdFunctions,t=Object(L.a)(e),a=Object(T.a)(t,Object(c.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))),n=a.data,r=a.error,o=a.mutate,u=a.isValidating;return Object(l.useMemo)((function(){return{data:null!==n&&void 0!==n?n:[],isValidating:u,error:r,revalidate:o}}),[n,u,o,r])}(),a=t.data,n=t.isValidating,o=Object(u.a)().t,s=Object(l.useMemo)((function(){return a?Object(D.a)((function(e){return e.name}),a).map((function(e){return e.name})):[]}),[a]);return Object(K.jsx)(M.a,{name:"userDefinedFunctionNames",options:s,multiple:!0,loading:n,fullWidth:!0,renderInput:function(e){return Object(K.jsx)(A.a,Object(r.a)(Object(r.a)({},e),{},{variant:"standard",label:o("UdFunctions")}))}})},$=function(e){var t=function(){var e=Object(P.b)().simulations_GetInfos,t=Object(L.a)(e),a=Object(T.a)(t,Object(c.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))),n=a.data,r=a.error,o=a.mutate,u=a.isValidating;return Object(l.useMemo)((function(){return{data:null!==n&&void 0!==n?n:[],isValidating:u,error:r,revalidate:o}}),[n,u,o,r])}(),a=t.data,n=t.isValidating,o=Object(u.a)().t,s=Object(l.useMemo)((function(){return a?Object(D.a)((function(e){return e.name}),a).map((function(e){return e.id})):[]}),[a]);return Object(K.jsx)(M.a,{name:"customCollections.NimflowContextSimulations.ids",options:s,multiple:!0,loading:n,getOptionLabel:function(e){var t,n;return null!==(t=null===(n=a.find((function(t){return t.id===e})))||void 0===n?void 0:n.name)&&void 0!==t?t:"".concat(e,"?")},fullWidth:!0,renderInput:function(e){return Object(K.jsx)(A.a,Object(r.a)(Object(r.a)({},e),{},{variant:"standard",label:o("SimulationsCatalog")}))}})},ee=function(e){var t=function(){var e=Object(W.b)().localizations_GetAll,t=Object(L.a)(e),a=Object(T.a)(t,Object(c.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))),n=a.data,r=a.error,o=a.mutate,u=a.isValidating;return Object(l.useMemo)((function(){return{data:null!==n&&void 0!==n?n:[],isValidating:u,error:r,revalidate:o}}),[n,u,o,r])}(),a=t.data,n=t.isValidating,o=Object(u.a)().t,s=Object(l.useMemo)((function(){return a?Object(D.a)((function(e){var t;return null!==(t=e.id)&&void 0!==t?t:"?"}),a).map((function(e){return e.id})):[]}),[a]);return Object(K.jsx)(M.a,{name:"customCollections.NimflowLocalizations.ids",options:s,multiple:!0,loading:n,fullWidth:!0,getOptionLabel:function(e){return null!==(t=a.find((function(t){return t.id===e})))&&void 0!==t&&t.translations?t.translations[Object.keys(t.translations)[0]]:"";var t},renderInput:function(e){return Object(K.jsx)(A.a,Object(r.a)(Object(r.a)({},e),{},{variant:"standard",label:o("Localizations")}))}})},te=function(e){var t=function(){var e=Object(z.c)().events_SearchContextEventListeners,t=Object(L.a)(e),a=Object(T.a)(t,Object(c.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e({});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))),n=a.data,r=a.error,o=a.mutate,u=a.isValidating;return Object(l.useMemo)((function(){return{data:null!==n&&void 0!==n?n:[],isValidating:u,error:r,revalidate:o}}),[n,u,o,r])}(),a=t.data,n=t.isValidating,o=Object(u.a)().t,s=Object(l.useMemo)((function(){var e;return null!==(e=null===a||void 0===a?void 0:a.map((function(e){return e.id})))&&void 0!==e?e:[]}),[a]);return Object(K.jsx)(M.a,{name:"eventListenerIds",options:s,multiple:!0,loading:n,getOptionLabel:function(e){var t;if(!e||!a)return"";var n=a.find((function(t){return t.id===e}));return n?"".concat(n.event," => ").concat(null===(t=n.call)||void 0===t?void 0:t.functionName):"".concat(e,"?")},fullWidth:!0,renderInput:function(e){return Object(K.jsx)(A.a,Object(r.a)(Object(r.a)({},e),{},{variant:"standard",label:o("EventListeners")}))}})},ae=function(e){var t=e.onSave,a=Object(u.a)().t,n=J(),r=Object(f.h)(),o=Object(b.g)(),s=o.isSubmitting,d=o.dirty,j=o.setFieldValue,O=!s,v=Object(l.useMemo)((function(){return{description:a("ExitingEditorWithoutSavingWarning")}}),[a]);Object(h.a)(d,v);var p=Object(g.a)(Object(l.useCallback)(Object(c.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=3;break}return e.next=3,t();case 3:case"end":return e.stop()}}),e)}))),[t])),m=Object(l.useCallback)((function(){r(-1)}),[r]),w=Object(l.useCallback)((function(e){j("contextTypeNames",e)}),[j]);return Object(K.jsxs)(x.a,{container:!0,spacing:3,children:[Object(K.jsx)(x.a,{item:!0,xs:12,children:Object(K.jsxs)(y.a,{className:n.toolbar,children:[Object(K.jsx)(k.a,{title:a("GoBack"),children:Object(K.jsx)(S.a,{onClick:m,disabled:s,size:"large",children:Object(K.jsx)(I.a,{})})}),Object(K.jsx)(k.a,{title:a("SaveChanges"),children:Object(K.jsx)(S.a,{onClick:p,disabled:!O,size:"large",children:Object(K.jsx)(N.a,{})})})]})}),Object(K.jsx)(x.a,{item:!0,xs:10,children:Object(K.jsx)(C.a,{name:"name",label:a("Name"),variant:"standard",fullWidth:!0,InputLabelProps:{required:!0},required:!0})}),Object(K.jsx)(x.a,{item:!0,xs:1,children:Object(K.jsx)(E.a,{name:"majorVersion",label:a("MajorVersion")})}),Object(K.jsx)(x.a,{item:!0,xs:1,children:Object(K.jsx)(E.a,{name:"minorVersion",label:a("MinorVersion")})}),Object(K.jsx)(x.a,{item:!0,xs:12,children:Object(K.jsx)(Q,{onChange:w})}),Object(K.jsx)(x.a,{item:!0,xs:12,children:Object(K.jsx)($,{})}),Object(K.jsx)(x.a,{item:!0,xs:12,children:Object(K.jsx)(ee,{})}),Object(K.jsx)(x.a,{item:!0,xs:12,children:Object(K.jsx)(Y,{})}),Object(K.jsx)(x.a,{item:!0,xs:12,children:Object(K.jsx)(X,{})}),Object(K.jsx)(x.a,{item:!0,xs:12,children:Object(K.jsx)(Z,{})}),Object(K.jsx)(x.a,{item:!0,xs:12,children:Object(K.jsx)(te,{})}),Object(K.jsx)(x.a,{item:!0,xs:12,children:Object(K.jsx)(U,{name:"requiredSecretNames",label:"RequiredSecretNames",textFieldClassName:"secretTextField"})})]})};t.a=function(e){var t=e.value,a=e.schema,o=e.onSave,j=J(),O=Object(v.b)(),f=Object(u.a)().t,h=Object(l.useRef)(),g=Object(s.b)().enqueueSnackbar,x=Object(l.useState)(function(e){var t=Object(r.a)({},e);function a(e,t){e[t]||(e[t]={ids:[],replaceAll:!1})}return t.customCollections||(t.customCollections={}),a(t.customCollections,"NimflowDashboardWidgets"),a(t.customCollections,"NimflowDashboards"),a(t.customCollections,"NimflowLocalizations"),a(t.customCollections,"NimflowContextSimulations"),t}(t)),C=Object(n.a)(x,1)[0];Object(l.useEffect)((function(){var e;null===(e=h.current)||void 0===e||e.resetForm({values:C})}),[C]);var y=Object(l.useRef)(),k=Object(l.useCallback)((function(){var e=h.current;return e&&o&&(y.current=function(){var e=Object(c.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o(t);case 3:if(e.sent){e.next=6;break}return e.abrupt("return");case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),a=Object(K.jsx)(p.a,{error:e.t0});case 11:if(!a){e.next=16;break}return e.next=14,O({title:f("ErrorSavingPackageDefinition"),description:a,mapCloseTo:"ok",actions:[{type:"ok",text:f("Ok")}]});case 14:e.next=17;break;case 16:g(f("PackageDefinitionSaved"),{variant:"success"});case 17:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),Object(m.a)(e)),Promise.resolve()}),[O,g,o,f]),S=Object(l.useCallback)(function(){var e=Object(c.a)(i.a.mark((function e(t,a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!y.current){e.next=5;break}return e.next=4,y.current(t);case 4:y.current=void 0;case 5:return e.prev=5,a.setSubmitting(!1),e.finish(5);case 8:case"end":return e.stop()}}),e,null,[[0,,5,8]])})));return function(t,a){return e.apply(this,arguments)}}(),[]);return Object(K.jsx)(d.a,{children:Object(K.jsx)(b.d,{innerRef:function(e){return h.current=e},initialValues:C,onSubmit:S,validationSchema:a,validateOnChange:!0,validateOnBlur:!0,children:Object(K.jsx)(b.c,{autoComplete:"off",className:j.form,children:Object(K.jsx)(ae,Object(r.a)(Object(r.a)({},e),{},{onSave:k}))})})})}},518:function(e,t,a){"use strict";var n=a(476);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(480)),c=a(136),o=(0,r.default)((0,c.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=o},519:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(7),r=a(3),c=a(73),o=a(6),i=a(2223),l=a(491),u=a(51),s=a(136),d=["name","debounce","onChange","onBlur","helperText","error","disabled","controlValueAdapter"],b=function(e){var t=e.name,a=e.debounce,b=e.onChange,j=e.onBlur,O=e.helperText,f=(e.error,e.disabled),v=e.controlValueAdapter,p=Object(c.a)(e,d),m=Object(l.g)().isSubmitting,h=Object(l.f)({name:t}),g=Object(r.a)(h,3),x=g[0],C=g[1],y=g[2],k=C.error,S=C.touched&&!!k,w=Object(o.useState)(x.value),I=Object(r.a)(w,2),V=I[0],N=I[1],M=Object(o.useState)(),z=Object(r.a)(M,2),T=z[0],L=z[1];Object(o.useEffect)((function(){N(x.value)}),[x.value]);var D=Object(o.useCallback)((function(e){var t=e.target.value;y.setValue(v?v(t):t),null===b||void 0===b||b(e)}),[v,y,b]),E=Object(o.useCallback)((function(e){N((function(t){var a=e.target.value;return a||t})),Object(u.isPresent)(a)?(e.persist(),T&&clearTimeout(T),L(setTimeout((function(){return D(e)}),a))):D(e)}),[D,a,T]),R=Object(o.useCallback)((function(e){x.onBlur(e),null===j||void 0===j||j(e)}),[x,j]);return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(i.a,Object(n.a)(Object(n.a)({},x),{},{variant:"standard",value:null!==V&&void 0!==V?V:"",onChange:E,onBlur:R,error:S,helperText:S?k:O,disabled:null!==f&&void 0!==f?f:m},p))})}},523:function(e,t,a){"use strict";var n=a(476);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(480)),c=a(136),o=(0,r.default)((0,c.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=o},529:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(2),r=a(1),c=a(12),o=a(16),i=a(6),l=a(2491),u=a(3145),s=a(2216),d=a(912),b=a(914),j=a(913),O=a(610),f=a.n(O),v=a(136),p=Object(u.a)((function(e){return Object(l.a)({errorDetails:{overflow:"auto"}})})),m=function(e){var t=e.error,a=e.stack,n=p();return Object(v.jsxs)(d.a,{children:[Object(v.jsx)(j.a,{expandIcon:Object(v.jsx)(f.a,{}),children:Object(v.jsx)(s.a,{variant:"h5",color:"error",children:t})}),Object(v.jsx)(b.a,{className:n.errorDetails,children:Object(v.jsx)("pre",{children:a})})]})},h=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={hasError:!1},e}return Object(r.a)(a,[{key:"componentDidCatch",value:function(e,t){console.log({error:e,errorInfo:t}),this.setState({errorInfo:t})}},{key:"render",value:function(){var e,t,a=this.state,n=a.hasError,r=a.error,c=a.errorInfo;return n?Object(v.jsx)(m,{error:null!==(e=null===r||void 0===r?void 0:r.message)&&void 0!==e?e:"",stack:null!==(t=null===c||void 0===c?void 0:c.componentStack)&&void 0!==t?t:""}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0,error:e}}}]),a}(i.Component)},547:function(e,t,a){"use strict";a.d(t,"b",(function(){return c}));var n=a(3065),r=a(3066);function c(e){return Object(n.a)("MuiChip",e)}var o=Object(r.a)("MuiChip",["root","sizeSmall","sizeMedium","colorPrimary","colorSecondary","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","focusVisible"]);t.a=o},592:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return o}));var n=a(51),r=function e(t){var a={};if(t)for(var r=function(){var r=o[c];Array.isArray(t[r])?t[r].forEach((function(t,c){var o=a[r];Object(n.isPresent)(o)||(a[r]=o=[]),o[c]=e(t)})):"object"===typeof t[r]&&null!==t[r]?a[r]=e(t[r]):a[r]=!0},c=0,o=Object.keys(t);c<o.length;c++)r();return a},c=function(e){return e.validateForm().then((function(t){return Object.keys(t).length>0&&e.setTouched(r(t)),t}))},o=function(e){return e.validateForm().then((function(t){Object.keys(t).length>0?e.setTouched(r(t)):e.handleSubmit()}))}},670:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(22),r=a(7),c=a(8),o=a.n(c),i=a(6),l=a(3161),u=a(537),s=a(499),d=function(e,t){var a=Object(s.c)(),c=Object(l.a)().t,d=Object(i.useMemo)((function(){return Object(r.a)({description:c("ExitingWithoutSavingWarning"),confirmationText:c("Continue")},t)}),[t,c]),b=Object(i.useCallback)(function(){var e=Object(n.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(d);case 2:e.sent&&t.retry();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[a,d]);Object(u.e)(b,e)}},683:function(e,t,a){"use strict";var n=a(24),r=a(137),c=a(475),o=a(6),i=a(479),l=a(3064),u=a(3060),s=a(528),d=a(136),b=Object(s.a)(Object(d.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),j=a(573),O=a(500),f=a(3148),v=a(482),p=a(481),m=a(547),h=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"],g=Object(p.a)("div",{name:"MuiChip",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState,r=a.color,c=a.clickable,o=a.onDelete,i=a.size,l=a.variant;return[Object(n.a)({},"& .".concat(m.a.avatar),t.avatar),Object(n.a)({},"& .".concat(m.a.avatar),t["avatar".concat(Object(O.a)(i))]),Object(n.a)({},"& .".concat(m.a.avatar),t["avatarColor".concat(Object(O.a)(r))]),Object(n.a)({},"& .".concat(m.a.icon),t.icon),Object(n.a)({},"& .".concat(m.a.icon),t["icon".concat(Object(O.a)(i))]),Object(n.a)({},"& .".concat(m.a.icon),t["iconColor".concat(Object(O.a)(r))]),Object(n.a)({},"& .".concat(m.a.deleteIcon),t.deleteIcon),Object(n.a)({},"& .".concat(m.a.deleteIcon),t["deleteIcon".concat(Object(O.a)(i))]),Object(n.a)({},"& .".concat(m.a.deleteIcon),t["deleteIconColor".concat(Object(O.a)(r))]),Object(n.a)({},"& .".concat(m.a.deleteIcon),t["deleteIconOutlinedColor".concat(Object(O.a)(r))]),t.root,t["size".concat(Object(O.a)(i))],t["color".concat(Object(O.a)(r))],c&&t.clickable,c&&"default"!==r&&t["clickableColor".concat(Object(O.a)(r),")")],o&&t.deletable,o&&"default"!==r&&t["deletableColor".concat(Object(O.a)(r))],t[l],"outlined"===l&&t["outlined".concat(Object(O.a)(r))]]}})((function(e){var t,a=e.theme,r=e.ownerState,o=Object(u.a)(a.palette.text.primary,.26);return Object(c.a)((t={fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:a.palette.text.primary,backgroundColor:a.palette.action.selected,borderRadius:16,whiteSpace:"nowrap",transition:a.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box"},Object(n.a)(t,"&.".concat(m.a.disabled),{opacity:a.palette.action.disabledOpacity,pointerEvents:"none"}),Object(n.a)(t,"& .".concat(m.a.avatar),{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===a.palette.mode?a.palette.grey[700]:a.palette.grey[300],fontSize:a.typography.pxToRem(12)}),Object(n.a)(t,"& .".concat(m.a.avatarColorPrimary),{color:a.palette.primary.contrastText,backgroundColor:a.palette.primary.dark}),Object(n.a)(t,"& .".concat(m.a.avatarColorSecondary),{color:a.palette.secondary.contrastText,backgroundColor:a.palette.secondary.dark}),Object(n.a)(t,"& .".concat(m.a.avatarSmall),{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:a.typography.pxToRem(10)}),Object(n.a)(t,"& .".concat(m.a.icon),Object(c.a)({color:"light"===a.palette.mode?a.palette.grey[700]:a.palette.grey[300],marginLeft:5,marginRight:-6},"small"===r.size&&{fontSize:18,marginLeft:4,marginRight:-4},"default"!==r.color&&{color:"inherit"})),Object(n.a)(t,"& .".concat(m.a.deleteIcon),Object(c.a)({WebkitTapHighlightColor:"transparent",color:o,fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(u.a)(o,.4)}},"small"===r.size&&{fontSize:16,marginRight:4,marginLeft:-4},"default"!==r.color&&{color:Object(u.a)(a.palette[r.color].contrastText,.7),"&:hover, &:active":{color:a.palette[r.color].contrastText}})),t),"small"===r.size&&{height:24},"default"!==r.color&&{backgroundColor:a.palette[r.color].main,color:a.palette[r.color].contrastText},r.onDelete&&Object(n.a)({},"&.".concat(m.a.focusVisible),{backgroundColor:Object(u.a)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}),r.onDelete&&"default"!==r.color&&Object(n.a)({},"&.".concat(m.a.focusVisible),{backgroundColor:a.palette[r.color].dark}))}),(function(e){var t,a=e.theme,r=e.ownerState;return Object(c.a)({},r.clickable&&(t={userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:Object(u.a)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)}},Object(n.a)(t,"&.".concat(m.a.focusVisible),{backgroundColor:Object(u.a)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}),Object(n.a)(t,"&:active",{boxShadow:a.shadows[1]}),t),r.clickable&&"default"!==r.color&&Object(n.a)({},"&:hover, &.".concat(m.a.focusVisible),{backgroundColor:a.palette[r.color].dark}))}),(function(e){var t,a,r=e.theme,o=e.ownerState;return Object(c.a)({},"outlined"===o.variant&&(t={backgroundColor:"transparent",border:"1px solid ".concat("light"===r.palette.mode?r.palette.grey[400]:r.palette.grey[700])},Object(n.a)(t,"&.".concat(m.a.clickable,":hover"),{backgroundColor:r.palette.action.hover}),Object(n.a)(t,"&.".concat(m.a.focusVisible),{backgroundColor:r.palette.action.focus}),Object(n.a)(t,"& .".concat(m.a.avatar),{marginLeft:4}),Object(n.a)(t,"& .".concat(m.a.avatarSmall),{marginLeft:2}),Object(n.a)(t,"& .".concat(m.a.icon),{marginLeft:4}),Object(n.a)(t,"& .".concat(m.a.iconSmall),{marginLeft:2}),Object(n.a)(t,"& .".concat(m.a.deleteIcon),{marginRight:5}),Object(n.a)(t,"& .".concat(m.a.deleteIconSmall),{marginRight:3}),t),"outlined"===o.variant&&"default"!==o.color&&(a={color:r.palette[o.color].main,border:"1px solid ".concat(Object(u.a)(r.palette[o.color].main,.7))},Object(n.a)(a,"&.".concat(m.a.clickable,":hover"),{backgroundColor:Object(u.a)(r.palette[o.color].main,r.palette.action.hoverOpacity)}),Object(n.a)(a,"&.".concat(m.a.focusVisible),{backgroundColor:Object(u.a)(r.palette[o.color].main,r.palette.action.focusOpacity)}),Object(n.a)(a,"& .".concat(m.a.deleteIcon),{color:Object(u.a)(r.palette[o.color].main,.7),"&:hover, &:active":{color:r.palette[o.color].main}}),a))})),x=Object(p.a)("span",{name:"MuiChip",slot:"Label",overridesResolver:function(e,t){var a=e.ownerState.size;return[t.label,t["label".concat(Object(O.a)(a))]]}})((function(e){var t=e.ownerState;return Object(c.a)({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},"small"===t.size&&{paddingLeft:8,paddingRight:8})}));function C(e){return"Backspace"===e.key||"Delete"===e.key}var y=o.forwardRef((function(e,t){var a=Object(v.a)({props:e,name:"MuiChip"}),n=a.avatar,u=a.className,s=a.clickable,p=a.color,y=void 0===p?"default":p,k=a.component,S=a.deleteIcon,w=a.disabled,I=void 0!==w&&w,V=a.icon,N=a.label,M=a.onClick,z=a.onDelete,T=a.onKeyDown,L=a.onKeyUp,D=a.size,E=void 0===D?"medium":D,R=a.variant,F=void 0===R?"filled":R,P=Object(r.a)(a,h),W=o.useRef(null),_=Object(j.a)(W,t),A=function(e){e.stopPropagation(),z&&z(e)},q=!(!1===s||!M)||s,B="small"===E,G=q||z?f.a:k||"div",H=Object(c.a)({},a,{component:G,disabled:I,size:E,color:y,onDelete:!!z,clickable:q,variant:F}),K=function(e){var t=e.classes,a=e.disabled,n=e.size,r=e.color,c=e.onDelete,o=e.clickable,i=e.variant,u={root:["root",i,a&&"disabled","size".concat(Object(O.a)(n)),"color".concat(Object(O.a)(r)),o&&"clickable",o&&"clickableColor".concat(Object(O.a)(r)),c&&"deletable",c&&"deletableColor".concat(Object(O.a)(r)),"".concat(i).concat(Object(O.a)(r))],label:["label","label".concat(Object(O.a)(n))],avatar:["avatar","avatar".concat(Object(O.a)(n)),"avatarColor".concat(Object(O.a)(r))],icon:["icon","icon".concat(Object(O.a)(n)),"iconColor".concat(Object(O.a)(r))],deleteIcon:["deleteIcon","deleteIcon".concat(Object(O.a)(n)),"deleteIconColor".concat(Object(O.a)(r)),"deleteIconOutlinedColor".concat(Object(O.a)(r))]};return Object(l.a)(u,m.b,t)}(H),U=G===f.a?Object(c.a)({component:k||"div",focusVisibleClassName:K.focusVisible},z&&{disableRipple:!0}):{},J=null;if(z){var Q=Object(i.default)("default"!==y&&("outlined"===F?K["deleteIconOutlinedColor".concat(Object(O.a)(y))]:K["deleteIconColor".concat(Object(O.a)(y))]),B&&K.deleteIconSmall);J=S&&o.isValidElement(S)?o.cloneElement(S,{className:Object(i.default)(S.props.className,K.deleteIcon,Q),onClick:A}):Object(d.jsx)(b,{className:Object(i.default)(K.deleteIcon,Q),onClick:A})}var X=null;n&&o.isValidElement(n)&&(X=o.cloneElement(n,{className:Object(i.default)(K.avatar,n.props.className)}));var Y=null;return V&&o.isValidElement(V)&&(Y=o.cloneElement(V,{className:Object(i.default)(K.icon,V.props.className)})),Object(d.jsxs)(g,Object(c.a)({as:G,className:Object(i.default)(K.root,u),disabled:!(!q||!I)||void 0,onClick:M,onKeyDown:function(e){e.currentTarget===e.target&&C(e)&&e.preventDefault(),T&&T(e)},onKeyUp:function(e){e.currentTarget===e.target&&(z&&C(e)?z(e):"Escape"===e.key&&W.current&&W.current.blur()),L&&L(e)},ref:_,ownerState:H},U,P,{children:[X||Y,Object(d.jsx)(x,{className:Object(i.default)(K.label),ownerState:H,children:N}),J]}))}));t.a=y},700:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n=a(7),r=a(3),c=a(2),o=a(1),i=a(20),l=a(11),u=a(12),s=a(16),d=a(9),b=a(839),j=a.n(b);function O(e,t){return new f(e,t)}var f=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.m(),r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d.i();return Object(c.a)(this,a),(e=t.call(this,{type:"map"})).key=n,e.value=r,e}return Object(o.a)(a,[{key:"_typeCheck",value:function(e){return e&&"object"===typeof e}},{key:"_cast",value:function(e,t){var n=this,c=Object(i.a)(Object(l.a)(a.prototype),"_cast",this).call(this,e,t),o={};return Object.entries(c).forEach((function(e){var t=Object(r.a)(e,2),a=t[0],c=t[1];o[n.key.cast(a)]=n.value.cast(c)})),o}},{key:"_validate",value:function(e){var t=this,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0,u=[],s=c.abortEarly,b=c.sync,O=c.path,f=void 0===O?"":O,v=null!=c.originalValue?c.originalValue:e,p=this.key,m=this.value;Object(i.a)(Object(l.a)(a.prototype),"_validate",this).call(this,e,c,(function(e,a){var i;if(e){if(!d.c.isError(e)||s)return o(e,a);u.push(e)}if(!t._typeCheck(a))return u.length&&o(u[0]),void o(null,a);v=null!==(i=v)&&void 0!==i?i:a;for(var l=[],O=function(){var e=Object(r.a)(g[h],2),t=e[0],o=e[1],i=Object(n.a)(Object(n.a)({},c),{},{strict:!0,parent:a,path:f?"".concat(f,".").concat(t):t,originalValue:v[t]});l.push((function(e,a){p.validate(t,i).then((function(e){return a(null,e)})).catch((function(e){return a(e)}))})),l.push((function(e,t){m.validate(o,i).then((function(e){return t(null,e)})).catch((function(e){return t(e)}))}))},h=0,g=Object.entries(a);h<g.length;h++)O();return j()({sync:b,path:f,value:a,errors:u,tests:l,endEarly:s},o)}))}},{key:"clone",value:function(e){var t,n,r=Object(i.a)(Object(l.a)(a.prototype),"clone",this).call(this,e);return r.key=null===(t=this.key)||void 0===t?void 0:t.clone(),r.value=null===(n=this.value)||void 0===n?void 0:n.clone(),r}}]),a}(d.a);function v(e,t){return O(e,t)}O.prototype=f.prototype},802:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(7),r=a(519),c=a(136),o=function(e){if(e)try{return parseInt(e)}catch(t){return}},i=function(e){return Object(c.jsx)(r.a,Object(n.a)({type:"number",controlValueAdapter:o},e))}}}]);
//# sourceMappingURL=14.99955ee1.chunk.js.map