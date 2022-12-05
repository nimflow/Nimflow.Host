(this["webpackJsonpnimflow-studio"]=this["webpackJsonpnimflow-studio"]||[]).push([[59],{1513:function(e,t,r){"use strict";r.d(t,"a",(function(){return j}));var n=r(1),a=r(4),c=r(98),i=r(6),o=r(2546),u=r(495),s=r(2470),l=r(2423),b=r(123),d=["name","label","onChange","onBlur","helperText","error","disabled","controlValueAdapter","FormHelperTextProps","LabelProps"],j=function(e){var t,r=e.name,j=e.label,O=e.onChange,f=e.onBlur,v=e.helperText,p=(e.error,e.disabled),h=e.controlValueAdapter,x=e.FormHelperTextProps,m=e.LabelProps,g=Object(c.a)(e,d),k=Object(u.g)().isSubmitting,C=Object(u.f)({name:r}),w=Object(a.a)(C,3),S=w[0],y=w[1],F=w[2],D=y.error,E=y.touched&&!!D,T=Object(i.useCallback)((function(e,t){F.setValue(h?h(t):t),null===O||void 0===O||O(e,t)}),[h,F,O]),W=Object(i.useCallback)((function(e){S.onBlur(e),null===f||void 0===f||f(e)}),[S,f]),A=Object(b.jsx)(o.a,Object(n.a)(Object(n.a)({},S),{},{checked:null!==(t=S.checked)&&void 0!==t?t:S.value,onChange:T,onBlur:W,disabled:null!==p&&void 0!==p?p:k},g));return Object(b.jsxs)(b.Fragment,{children:[!!j&&Object(b.jsx)(s.a,Object(n.a)({control:A,label:j},m)),!j&&Object(b.jsx)(b.Fragment,{children:A}),v&&Object(b.jsx)(l.a,Object(n.a)(Object(n.a)({error:E},x),{},{children:E?D:v}))]})}},2202:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(2452),a=r(2549),c=r(17),i=r(9),o=i.k().shape({name:i.m().required().identifier(),role:i.m(),roles:i.e().of(i.m()),expires:i.m().iso8601Formatted().test({message:"ExpirationDateMustBeAFutureDate",test:function(e){if(!e||"string"!==typeof e)return!0;var t=Object(n.default)(e);if(!Object(a.a)(t))return!0;var r=this.parent;return!(t<new Date&&!r.id)||this.createError({path:"expires",message:c.a.t("ExpirationDateMustBeAFutureDate")})}}),active:i.g()})},2378:function(e,t,r){"use strict";r.d(t,"a",(function(){return U}));var n=r(1),a=r(19),c=r(8),i=r.n(c),o=r(6),u=r(2989),s=r(2614),l=r(3002),b=r(2457),d=r(2437),j=r(2416),O=r(736),f=r.n(O),v=r(764),p=r.n(v),h=r(780),x=r.n(h),m=r(495),g=r(3008),k=r(632),C=r(596),w=r(775),S=r(2473),y=r(564),F=r(2202),D=r(521),E=r(590),T=r(770),W=r(624),A=r(127),B=r(630),V=r(553),I=r(1513),P=r(2420),M=r(994),N=r(637),q=r(585),R=r(532),L=r(978),G=r(123),H=Object(u.a)((function(e){return Object(s.a)({textField:{width:"40ch"}})})),_=function(){var e=Object(R.c)().roleDefinitions_GetAll,t=Object(N.a)(e),r=Object(M.c)().isFeatureSupported,n=Object(q.a)(t,Object(a.a)(i.a.mark((function t(){var n,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r(M.a.RoleBasedSecurity)){t.next=2;break}return t.abrupt("return",["Worker","Maker","Owner","DigitalWorker"]);case 2:return t.next=4,e({});case 4:return a=t.sent,t.abrupt("return",null!==(n=null===a||void 0===a?void 0:a.map((function(e){return e.name})))&&void 0!==n?n:[]);case 6:case"end":return t.stop()}}),t)}))),{revalidateOnFocus:!1}),c=n.data,u=n.isValidating,s=n.mutate,l=n.error;return Object(o.useMemo)((function(){return{roleNames:c,isValidating:u,error:l,revalidate:s}}),[c,u,s,l])},z=function(e){var t=e.name,r=e.onChange,a=_(),c=a.roleNames,i=a.isValidating,u=H(),s=Object(g.a)().t,l=Object(o.useCallback)((function(e,t){null===r||void 0===r||r(null!==t&&void 0!==t?t:void 0)}),[r]);return Object(G.jsx)(L.a,{name:t,onChange:l,options:null!==c&&void 0!==c?c:[],loading:i,renderInput:function(e){return Object(G.jsx)(P.a,Object(n.a)(Object(n.a)({},e),{},{variant:"standard",className:u.textField,label:s("Role")}))}})},J=function(e){var t=e.name,r=e.onChange,a=_(),c=a.roleNames,i=a.isValidating,u=H(),s=Object(g.a)().t,l=Object(o.useCallback)((function(e,t){null===r||void 0===r||r(null!==t&&void 0!==t?t:void 0)}),[r]);return Object(G.jsx)(L.a,{name:t,onChange:l,options:null!==c&&void 0!==c?c:[],loading:i,multiple:!0,renderInput:function(e){return Object(G.jsx)(P.a,Object(n.a)(Object(n.a)({},e),{},{variant:"standard",className:u.textField,label:s("Roles")}))}})},K=Object(u.a)((function(e){return Object(s.a)({form:{height:"100%"},root:{flexGrow:1},toolbar:{minHeight:"48px",paddingLeft:0},paper:{padding:e.spacing(2),color:e.palette.text.secondary},grow:{flexGrow:1},actionToolbarButtons:{display:"flex"},textField:{width:"40ch"},button:{margin:e.spacing(1)},saveAsEllipsis:{position:"absolute",left:17,bottom:4,fontWeight:"bold"},booleanEditor:{marginTop:15}})})),Q=function(e){var t,r=e.schema,c=void 0===r?F.a:r,u=e.onSave,s=Object(g.a)().t,O=K(),v=Object(C.h)(),h=Object(k.b)().enqueueSnackbar,y=Object(M.c)().isFeatureSupported,D=Object(m.g)(),E=D.isSubmitting,B=D.errors,N=D.validateForm,q=D.values,R=D.dirty,L=D.setFieldValue,H=!E,_=Object(W.a)(),Q=Object(o.useMemo)((function(){return{description:s("ExitingDigitalWorkerEditorWithoutSavingWarning")}}),[s]);Object(T.a)(R,Q);var U=Object(w.a)(Object(o.useCallback)(Object(a.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!u){e.next=3;break}return e.next=3,u();case 3:case"end":return e.stop()}}),e)}))),[u])),X=Object(o.useCallback)(Object(a.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.b)(c,q);case 2:return t=e.sent,e.next=5,N();case 5:t.length>0?_(s("DigitalWorkerHasValidationErrors"),t,{dialogProps:{maxWidth:"lg"}}):h(s("DigitalWorkerIsValid"),{variant:"success"});case 6:case"end":return e.stop()}}),e)}))),[c,q,N,_,s,h]),Y=Object(o.useCallback)((function(){v(-1)}),[v]),Z=Object(o.useCallback)((function(e){L("expires",e?e.toISOString():void 0)}),[L]);return Object(G.jsxs)(l.a,{container:!0,spacing:3,children:[Object(G.jsx)(l.a,{item:!0,xs:12,children:Object(G.jsxs)(b.a,{className:O.toolbar,children:[Object(G.jsx)(d.a,{title:s("GoBack"),children:Object(G.jsx)(j.a,{onClick:Y,disabled:E,size:"large",children:Object(G.jsx)(f.a,{})})}),Object(G.jsx)(d.a,{title:s("SaveChanges"),children:Object(G.jsx)(j.a,{onClick:U,disabled:!H,size:"large",children:Object(G.jsx)(p.a,{})})}),Object(G.jsx)(d.a,{title:s("Validate"),children:Object(G.jsx)(j.a,{onClick:X,size:"large",children:Object(G.jsx)(x.a,{})})})]})}),Object(G.jsx)(l.a,{item:!0,xs:3,children:Object(G.jsx)(V.a,{name:"name",label:s("Name"),variant:"standard",fullWidth:!0,InputLabelProps:{required:!0},required:!0})}),Object(G.jsx)(l.a,{item:!0,xs:3,children:y(M.a.DigitalWorkersWithMultipleRoles)&&Object(G.jsx)(J,{name:"roles"})||Object(G.jsx)(z,{name:"role"})}),Object(G.jsx)(l.a,{item:!0,xs:6}),!!q.id&&Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(l.a,{item:!0,xs:6,children:Object(G.jsx)(V.a,{name:"apiKey",label:s("ApiKey"),variant:"standard",fullWidth:!0})}),Object(G.jsx)(l.a,{item:!0,xs:6})]}),Object(G.jsx)(l.a,{item:!0,xs:3,children:Object(G.jsx)(S.a,{label:s("Expires"),inputFormat:s("DATE_FORMAT"),renderInput:function(e){return Object(G.jsx)(P.a,Object(n.a)(Object(n.a)({},e),{},{variant:"standard",fullWidth:!0,error:!!B.expires,helperText:B.expires}))},value:null!==(t=q.expires)&&void 0!==t?t:null,onChange:Z})}),Object(G.jsx)(l.a,{item:!0,xs:3,children:!!q.id&&Object(G.jsx)(I.a,{name:"active",label:s("Active"),inputProps:{required:!0},required:!0,LabelProps:{className:O.booleanEditor}})}),Object(G.jsx)(l.a,{item:!0,xs:6})]})},U=function(e){var t=e.value,r=e.schema,c=void 0===r?F.a:r,u=e.onSave,s=Object(g.a)().t,l=K(),b=Object(D.b)(),d=Object(k.b)().enqueueSnackbar,j=Object(o.useRef)();Object(o.useEffect)((function(){var e;null===(e=j.current)||void 0===e||e.resetForm({values:t})}),[t]);var O=Object(o.useRef)(),f=Object(o.useCallback)((function(){var e=j.current;return e&&u&&(O.current=function(){var e=Object(a.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u(t);case 3:if(e.sent){e.next=6;break}return e.abrupt("return");case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),r=Object(G.jsx)(E.a,{error:e.t0});case 11:if(!r){e.next=16;break}return e.next=14,b({title:s("ErrorSavingDigitalWorker"),description:r,mapCloseTo:"ok",actions:[{type:"ok",text:s("Ok")}]});case 14:e.next=17;break;case 16:d(s("DigitalWorkerSaved"),{variant:"success"});case 17:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),Object(B.a)(e)),Promise.resolve()}),[b,d,u,s]),v=Object(o.useCallback)(function(){var e=Object(a.a)(i.a.mark((function e(t,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!O.current){e.next=5;break}return e.next=4,O.current(t);case 4:O.current=void 0;case 5:return e.prev=5,r.setSubmitting(!1),e.finish(5);case 8:case"end":return e.stop()}}),e,null,[[0,,5,8]])})));return function(t,r){return e.apply(this,arguments)}}(),[]);return Object(G.jsx)(y.a,{children:Object(G.jsx)(m.d,{innerRef:function(e){return j.current=e},initialValues:t,onSubmit:v,validationSchema:c,validateOnChange:!0,validateOnBlur:!0,children:Object(G.jsx)(m.c,{autoComplete:"off",className:l.form,children:Object(G.jsx)(Q,Object(n.a)(Object(n.a)({},e),{},{onSave:f}))})})})}},2962:function(e,t,r){"use strict";r.r(t),r.d(t,"DigitalWorkerCreator",(function(){return h}));var n=r(19),a=r(4),c=r(8),i=r.n(c),o=r(6),u=r(2549),s=r(2664),l=r(2452),b=r(596),d=r(9),j=r(3008),O=r(532),f=r(2378),v=r(2202),p=r(123),h=function(){var e=Object(b.h)(),t=Object(j.a)().t,r=Object(O.c)(),c=r.digitalWorkers_Add,h=r.digitalWorkers_Search,x=Object(o.useState)((function(){return{id:"",name:"",active:!0,roles:[]}})),m=Object(a.a)(x,2),g=m[0],k=m[1],C=Object(o.useCallback)(function(){var t=Object(n.a)(i.a.mark((function t(r){var n,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=void 0,r.expires&&(a=Object(l.default)(r.expires),Object(u.a)(a)&&(n=Object(s.a)(a,new Date))),t.next=4,c({name:r.name,role:r.role,roles:r.roles,expiresInDays:n});case 4:return k(r),setTimeout((function(){return e("../edit/".concat(r.name),{replace:!0})}),0),t.abrupt("return",!0);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[c,e]),w=Object(o.useMemo)((function(){return v.a.shape({name:v.a.fields.name.concat(d.m().defined().test({message:function(e){var r=e.value;return t("DigitalWorkerNameAlreadyExists",{name:r})},test:function(){var e=Object(n.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",!0);case 2:return e.next=4,h({name:t});case 4:return r=e.sent,e.abrupt("return",0===r.length);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}))})}),[h,t]);return Object(p.jsx)(f.a,{value:g,schema:w,onSave:C})};t.default=h},553:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(1),a=r(4),c=r(98),i=r(6),o=r(2420),u=r(495),s=r(38),l=r(123),b=["name","debounce","onChange","onBlur","helperText","error","disabled","controlValueAdapter"],d=function(e){var t=e.name,r=e.debounce,d=e.onChange,j=e.onBlur,O=e.helperText,f=(e.error,e.disabled),v=e.controlValueAdapter,p=Object(c.a)(e,b),h=Object(u.g)().isSubmitting,x=Object(u.f)({name:t}),m=Object(a.a)(x,3),g=m[0],k=m[1],C=m[2],w=k.error,S=k.touched&&!!w,y=Object(i.useState)(g.value),F=Object(a.a)(y,2),D=F[0],E=F[1],T=Object(i.useState)(),W=Object(a.a)(T,2),A=W[0],B=W[1];Object(i.useEffect)((function(){E(g.value)}),[g.value]);var V=Object(i.useCallback)((function(e){var t=e.target.value;C.setValue(v?v(t):t),null===d||void 0===d||d(e)}),[v,C,d]),I=Object(i.useCallback)((function(e){E((function(t){var r=e.target.value;return r||t})),Object(s.isPresent)(r)?(e.persist(),A&&clearTimeout(A),B(setTimeout((function(){return V(e)}),r))):V(e)}),[V,r,A]),P=Object(i.useCallback)((function(e){g.onBlur(e),null===j||void 0===j||j(e)}),[g,j]);return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(o.a,Object(n.a)(Object(n.a)({},g),{},{variant:"standard",value:null!==D&&void 0!==D?D:"",onChange:I,onBlur:P,error:S,helperText:S?w:O,disabled:null!==f&&void 0!==f?f:h},p))})}},564:function(e,t,r){"use strict";r.d(t,"a",(function(){return x}));var n=r(2),a=r(3),c=r(14),i=r(15),o=r(6),u=r(2614),s=r(2989),l=r(2417),b=r(1264),d=r(1266),j=r(1265),O=r(733),f=r.n(O),v=r(123),p=Object(s.a)((function(e){return Object(u.a)({errorDetails:{overflow:"auto"}})})),h=function(e){var t=e.error,r=e.stack,n=p();return Object(v.jsxs)(b.a,{children:[Object(v.jsx)(j.a,{expandIcon:Object(v.jsx)(f.a,{}),children:Object(v.jsx)(l.a,{variant:"h5",color:"error",children:t})}),Object(v.jsx)(d.a,{className:n.errorDetails,children:Object(v.jsx)("pre",{children:r})})]})},x=function(e){Object(c.a)(r,e);var t=Object(i.a)(r);function r(){var e;Object(n.a)(this,r);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={hasError:!1},e}return Object(a.a)(r,[{key:"componentDidCatch",value:function(e,t){console.log({error:e,errorInfo:t}),this.setState({errorInfo:t})}},{key:"render",value:function(){var e,t,r=this.state,n=r.hasError,a=r.error,c=r.errorInfo;return n?Object(v.jsx)(h,{error:null!==(e=null===a||void 0===a?void 0:a.message)&&void 0!==e?e:"",stack:null!==(t=null===c||void 0===c?void 0:c.componentStack)&&void 0!==t?t:""}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0,error:e}}}]),r}(o.Component)},624:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var n=r(6),a=r(2548),c=r(632),i=r(3008),o=r(521),u=r(590),s=r(915),l=r(123),b=function(){var e=Object(i.a)().t,t=Object(c.b)().enqueueSnackbar,r=Object(o.b)();return Object(n.useCallback)((function(n,c,i){var o=null!==i&&void 0!==i?i:{},b=o.variant,d=void 0===b?"error":b,j=o.dialogTitle,O=void 0===j?e("Error"):j,f=o.dialogProps;if(Object(s.b)(c)&&"string"===typeof n){var v,p=!1===(null===(v=window.navigator)||void 0===v?void 0:v.onLine);n=e(p?"BrowserOfflineMessage":"NetworkErrorMessage",{message:n})}t(n,{variant:d,action:Object(l.jsx)(a.a,{onClick:function(){r({dialogProps:f,title:O,description:Object(l.jsx)(u.a,{error:c})}).catch((function(){}))},children:e("ShowDetails")})})}),[r,t,e])}},630:function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return i}));var n=r(38),a=function e(t){var r={};if(t)for(var a=function(){var a=i[c];Array.isArray(t[a])?t[a].forEach((function(t,c){var i=r[a];Object(n.isPresent)(i)||(r[a]=i=[]),i[c]=e(t)})):"object"===typeof t[a]&&null!==t[a]?r[a]=e(t[a]):r[a]=!0},c=0,i=Object.keys(t);c<i.length;c++)a();return r},c=function(e){return e.validateForm().then((function(t){return Object.keys(t).length>0&&e.setTouched(a(t)),t}))},i=function(e){return e.validateForm().then((function(t){Object.keys(t).length>0?e.setTouched(a(t)):e.handleSubmit()}))}},770:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var n=r(19),a=r(1),c=r(8),i=r.n(c),o=r(6),u=r(3008),s=r(596),l=r(521),b=function(e,t){var r=Object(l.c)(),c=Object(u.a)().t,b=Object(o.useMemo)((function(){return Object(a.a)({description:c("ExitingWithoutSavingWarning"),confirmationText:c("Continue")},t)}),[t,c]),d=Object(o.useCallback)(function(){var e=Object(n.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(b);case 2:e.sent&&t.retry();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[r,b]);Object(s.e)(d,e)}},978:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var n=r(1),a=r(4),c=r(98),i=r(6),o=r(1303),u=r(495),s=r(123),l=["name","controlValueAdapter","onChange","onBlur","renderInput","multiple","loading","disabled"],b=function(e){var t=e.name,r=e.controlValueAdapter,b=e.onChange,d=e.onBlur,j=e.renderInput,O=e.multiple,f=e.loading,v=e.disabled,p=Object(c.a)(e,l),h=Object(u.g)(),x=h.isSubmitting,m=h.setFieldTouched,g=Object(u.f)({name:t}),k=Object(a.a)(g,3),C=k[0],w=k[1],S=k[2],y=w.error,F=w.touched&&!!y,D=Object(i.useCallback)((function(e,t,n,a){var c=r?r(t):t;S.setValue(null!==c&&void 0!==c?c:void 0),null===b||void 0===b||b(e,t,n,a)}),[r,S,b]),E=Object(i.useCallback)((function(e){m(C.name),C.onBlur(e),null===d||void 0===d||d(e)}),[C,d,m]),T=Object(i.useCallback)((function(e){return j?j(Object(n.a)(Object(n.a)({},e),{},{error:F,helperText:F?y:void 0})):null}),[y,j,F]),W=Object(i.useMemo)((function(){var t=void 0;return void 0===(t=r?e.options.find((function(e){return r(e)===C.value})):C.value)&&(t=O?[]:null),t}),[r,C.value,O,e.options]);return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(o.a,Object(n.a)(Object(n.a)({},C),{},{value:null!==W&&void 0!==W?W:null,onChange:D,onBlur:E,renderInput:T,disabled:null!==v&&void 0!==v?v:x,loading:f||x,multiple:O},p))})}}}]);
//# sourceMappingURL=59.c21dbba0.chunk.js.map