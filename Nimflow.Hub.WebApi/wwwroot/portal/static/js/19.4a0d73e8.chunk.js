(this["webpackJsonpnimflow-portal"]=this["webpackJsonpnimflow-portal"]||[]).push([[19],{1148:function(e,t,r){"use strict";var a=r(1),n=a.createContext({});t.a=n},155:function(e,t,r){"use strict";var a=r(75);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(81)),o=r(30),c=(0,n.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=c},1896:function(e,t,r){"use strict";var a=r(75);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(81)),o=r(30),c=(0,n.default)((0,o.jsx)("path",{d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"PersonAdd");t.default=c},197:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var a=r(3),n=r(2),o=r(7),c=r(10),i=r(1),s=r(1306),u=r(1994),l=r(1996),d=r(1995),b=r(324),f=r.n(b),j=r(30),O=function(e){var t=e.error,r=e.stack;return Object(j.jsxs)(u.a,{children:[Object(j.jsx)(d.a,{expandIcon:Object(j.jsx)(f.a,{}),children:Object(j.jsx)(s.a,{variant:"h5",color:"error",children:t})}),Object(j.jsx)(l.a,{children:Object(j.jsx)("pre",{children:r})})]})},p=function(e){Object(o.a)(r,e);var t=Object(c.a)(r);function r(){var e;Object(a.a)(this,r);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={hasError:!1},e}return Object(n.a)(r,[{key:"componentDidCatch",value:function(e,t){console.log({error:e,errorInfo:t}),this.setState({errorInfo:t})}},{key:"render",value:function(){var e,t,r=this.state,a=r.hasError,n=r.error,o=r.errorInfo;return a?Object(j.jsx)(O,{error:null!==(e=null===n||void 0===n?void 0:n.message)&&void 0!==e?e:"",stack:null!==(t=null===o||void 0===o?void 0:o.componentStack)&&void 0!==t?t:""}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0,error:e}}}]),r}(i.Component)},1994:function(e,t,r){"use strict";var a=r(41),n=r(4),o=r(8),c=r(31),i=r(63),s=r(1),u=(r(547),r(68)),l=r(2064),d=r(76),b=r(79),f=r(1470),j=r(1305),O=r(1148),p=r(556),v=r(2065),h=r(2066);function m(e){return Object(v.a)("MuiAccordion",e)}var x=Object(h.a)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),g=r(30),w=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],R=Object(d.a)(j.a,{name:"MuiAccordion",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[Object(o.a)({},"& .".concat(x.region),t.region),t.root,!r.square&&t.rounded,!r.disableGutters&&t.gutters]}})((function(e){var t,r=e.theme,a={duration:r.transitions.duration.shortest};return t={position:"relative",transition:r.transitions.create(["margin"],a),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(r.vars||r).palette.divider,transition:r.transitions.create(["opacity","background-color"],a)},"&:first-of-type":{"&:before":{display:"none"}}},Object(o.a)(t,"&.".concat(x.expanded),{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}}),Object(o.a)(t,"&.".concat(x.disabled),{backgroundColor:(r.vars||r).palette.action.disabledBackground}),t}),(function(e){var t=e.theme,r=e.ownerState;return Object(i.a)({},!r.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(t.vars||t).shape.borderRadius,borderTopRightRadius:(t.vars||t).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(t.vars||t).shape.borderRadius,borderBottomRightRadius:(t.vars||t).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!r.disableGutters&&Object(o.a)({},"&.".concat(x.expanded),{margin:"16px 0"}))})),k=s.forwardRef((function(e,t){var r=Object(b.a)({props:e,name:"MuiAccordion"}),o=r.children,d=r.className,j=r.defaultExpanded,v=void 0!==j&&j,h=r.disabled,x=void 0!==h&&h,k=r.disableGutters,y=void 0!==k&&k,C=r.expanded,S=r.onChange,M=r.square,A=void 0!==M&&M,N=r.TransitionComponent,T=void 0===N?f.a:N,L=r.TransitionProps,P=Object(c.a)(r,w),U=Object(p.a)({controlled:C,default:v,name:"Accordion",state:"expanded"}),E=Object(n.a)(U,2),I=E[0],V=E[1],G=s.useCallback((function(e){V(!I),S&&S(e,!I)}),[I,S,V]),D=s.Children.toArray(o),z=Object(a.a)(D),q=z[0],F=z.slice(1),B=s.useMemo((function(){return{expanded:I,disabled:x,disableGutters:y,toggle:G}}),[I,x,y,G]),_=Object(i.a)({},r,{square:A,disabled:x,disableGutters:y,expanded:I}),W=function(e){var t=e.classes,r={root:["root",!e.square&&"rounded",e.expanded&&"expanded",e.disabled&&"disabled",!e.disableGutters&&"gutters"],region:["region"]};return Object(l.a)(r,m,t)}(_);return Object(g.jsxs)(R,Object(i.a)({className:Object(u.default)(W.root,d),ref:t,ownerState:_,square:A},P,{children:[Object(g.jsx)(O.a.Provider,{value:B,children:q}),Object(g.jsx)(T,Object(i.a)({in:I,timeout:"auto"},L,{children:Object(g.jsx)("div",{"aria-labelledby":q.props.id,id:q.props["aria-controls"],role:"region",className:W.region,children:F})}))]}))}));t.a=k},1995:function(e,t,r){"use strict";var a=r(8),n=r(31),o=r(63),c=r(1),i=r(68),s=r(2064),u=r(76),l=r(79),d=r(2118),b=r(1148),f=r(2065),j=r(2066);function O(e){return Object(f.a)("MuiAccordionSummary",e)}var p=Object(j.a)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),v=r(30),h=["children","className","expandIcon","focusVisibleClassName","onClick"],m=Object(u.a)(d.a,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t,r=e.theme,n=e.ownerState,c={duration:r.transitions.duration.shortest};return Object(o.a)((t={display:"flex",minHeight:48,padding:r.spacing(0,2),transition:r.transitions.create(["min-height","background-color"],c)},Object(a.a)(t,"&.".concat(p.focusVisible),{backgroundColor:(r.vars||r).palette.action.focus}),Object(a.a)(t,"&.".concat(p.disabled),{opacity:(r.vars||r).palette.action.disabledOpacity}),Object(a.a)(t,"&:hover:not(.".concat(p.disabled,")"),{cursor:"pointer"}),t),!n.disableGutters&&Object(a.a)({},"&.".concat(p.expanded),{minHeight:64}))})),x=Object(u.a)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:function(e,t){return t.content}})((function(e){var t=e.theme,r=e.ownerState;return Object(o.a)({display:"flex",flexGrow:1,margin:"12px 0"},!r.disableGutters&&Object(a.a)({transition:t.transitions.create(["margin"],{duration:t.transitions.duration.shortest})},"&.".concat(p.expanded),{margin:"20px 0"}))})),g=Object(u.a)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:function(e,t){return t.expandIconWrapper}})((function(e){var t=e.theme;return Object(a.a)({display:"flex",color:(t.vars||t).palette.action.active,transform:"rotate(0deg)",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})},"&.".concat(p.expanded),{transform:"rotate(180deg)"})})),w=c.forwardRef((function(e,t){var r=Object(l.a)({props:e,name:"MuiAccordionSummary"}),a=r.children,u=r.className,d=r.expandIcon,f=r.focusVisibleClassName,j=r.onClick,p=Object(n.a)(r,h),w=c.useContext(b.a),R=w.disabled,k=void 0!==R&&R,y=w.disableGutters,C=w.expanded,S=w.toggle,M=Object(o.a)({},r,{expanded:C,disabled:k,disableGutters:y}),A=function(e){var t=e.classes,r=e.expanded,a=e.disabled,n=e.disableGutters,o={root:["root",r&&"expanded",a&&"disabled",!n&&"gutters"],focusVisible:["focusVisible"],content:["content",r&&"expanded",!n&&"contentGutters"],expandIconWrapper:["expandIconWrapper",r&&"expanded"]};return Object(s.a)(o,O,t)}(M);return Object(v.jsxs)(m,Object(o.a)({focusRipple:!1,disableRipple:!0,disabled:k,component:"div","aria-expanded":C,className:Object(i.default)(A.root,u),focusVisibleClassName:Object(i.default)(A.focusVisible,f),onClick:function(e){S&&S(e),j&&j(e)},ref:t,ownerState:M},p,{children:[Object(v.jsx)(x,{className:A.content,ownerState:M,children:a}),d&&Object(v.jsx)(g,{className:A.expandIconWrapper,ownerState:M,children:d})]}))}));t.a=w},1996:function(e,t,r){"use strict";var a=r(63),n=r(31),o=r(1),c=r(68),i=r(2064),s=r(76),u=r(79),l=r(2065),d=r(2066);function b(e){return Object(l.a)("MuiAccordionDetails",e)}Object(d.a)("MuiAccordionDetails",["root"]);var f=r(30),j=["className"],O=Object(s.a)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){return{padding:e.theme.spacing(1,2,2)}})),p=o.forwardRef((function(e,t){var r=Object(u.a)({props:e,name:"MuiAccordionDetails"}),o=r.className,s=Object(n.a)(r,j),l=r,d=function(e){var t=e.classes;return Object(i.a)({root:["root"]},b,t)}(l);return Object(f.jsx)(O,Object(a.a)({className:Object(c.default)(d.root,o),ref:t,ownerState:l},s))}));t.a=p},203:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var a=r(1),n=r(1620),o=r(327),c=r(2128),i=r(195),s=r(557),u=r(996),l=r(30),d=function(){var e=Object(c.a)().t,t=Object(o.b)().enqueueSnackbar,r=Object(i.b)();return Object(a.useCallback)((function(a,o,c){var i,d,b=null!==(i=null===c||void 0===c?void 0:c.variant)&&void 0!==i?i:"error",f=null!==(d=null===c||void 0===c?void 0:c.dialogTitle)&&void 0!==d?d:e("Error");if(Object(u.b)(o)&&"string"===typeof a){var j,O=!1===(null===(j=window.navigator)||void 0===j?void 0:j.onLine);a=e(O?"BrowserOfflineMessage":"NetworkErrorMessage",{message:a})}t(a,{variant:b,action:Object(l.jsx)(n.a,{onClick:function(){r({title:f,description:Object(l.jsx)(s.a,{error:o})})},children:e("ShowDetails")})})}),[r,t,e])}},2122:function(e,t,r){"use strict";r.r(t),r.d(t,"Security",(function(){return se}));var a=r(0),n=r(36),o=r(4),c=r(11),i=r.n(c),s=r(1),u=r(2115),l=r(2071),d=r(343),b=r.n(d),f=r(1896),j=r.n(f),O=r(2117),p=r(2128),v=r(37),h=r(2126),m=r(139),x=r(197),g=r(601),w=r(8),R=r(5),k=r(1620),y=r(2073),C=r(2133),S=r(2132),M=r(2080),A=r(2125),N=r(1485),T=r(1490),L=r(2085),P=r(1539),U=r(1540),E=r(1493),I=r(1616),V=r(327),G=r(203),D=r(34),z=r(126),q=r(548),F=r(30),B="https://portal.nimflow.com/",_="https://studio.nimflow.com/";var W=function(){throw new Error("You forgot to wrap your component in <SecurityServiceProvider>.")},H={users:[],isRefreshingUsers:!1,refreshUsers:W,inviteUser:W,updateUserRoles:W,getRoleNames:W},J=Object(s.createContext)(H),Z=function(e){var t=e.children,r=Object(z.c)(),c=r.users_GetUnitUsers,u=r.users_SearchRoles,l=r.users_InviteUsersOrRequestToVerifyEmails,d=r.users_SetRoles,b=r.roleDefinitions_GetAll,f=Object(q.c)().isFeatureSupported,j=Object(s.useCallback)(Object(n.a)(i.a.mark((function e(){var t,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f(q.a.UserDefinedCollection)){e.next=2;break}return e.abrupt("return",["Worker","Maker","Owner"]);case 2:return e.next=4,b({});case 4:return r=e.sent,e.abrupt("return",null!==(t=null===r||void 0===r?void 0:r.map((function(e){return e.name})))&&void 0!==t?t:[]);case 6:case"end":return e.stop()}}),e)}))),[f,b]),O=Object(m.a)("users",Object(n.a)(i.a.mark((function e(){var t,r,n,s,l,d,b,f,O;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([c(),u({useCache:!0}),j()]);case 2:t=e.sent,r=Object(o.a)(t,3),n=r[0],s=r[1],l=r[2],d=n.map((function(e){var t,r;return{fullName:e.fullName,email:e.email,emailVerified:null!==(t=e.emailVerified)&&void 0!==t&&t,picture:null===(r=e.props)||void 0===r?void 0:r.Picture,roles:{}}})),d=Object(D.s)((function(e){return e.fullName}),d),b=Object(a.a)(s),e.prev=10,O=function(){var e=f.value,t=e.roleNames;if(!t||0===t.length)return"continue";var r=d.find((function(t){return t.email===e.emailAddress}));if(r){r.roles={};var n,o=Object(a.a)(l);try{for(o.s();!(n=o.n()).done;){var c=n.value;r.roles[c]=Object(D.i)(c,t)}}catch(i){o.e(i)}finally{o.f()}}},b.s();case 13:if((f=b.n()).done){e.next=19;break}if("continue"!==O()){e.next=17;break}return e.abrupt("continue",17);case 17:e.next=13;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(10),b.e(e.t0);case 24:return e.prev=24,b.f(),e.finish(24);case 27:return e.abrupt("return",d);case 28:case"end":return e.stop()}}),e,null,[[10,21,24,27]])}))),{revalidateOnFocus:!1}),p=O.data,v=O.error,h=O.isValidating,x=O.mutate,g=Object(s.useCallback)(function(){var e=Object(n.a)(i.a.mark((function e(t,r){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d({emailAddress:t,roleNames:Object.keys(r).filter((function(e){return!!r[e]}))});case 2:return a=[{description:"nimFlow Portal",url:B}],r.Maker&&a.push({description:"nimFlow Studio",url:_}),e.next=6,l({invitations:[{apps:a,email:t}]});case 6:return e.next=8,x();case 8:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),[x,l,d]),w=Object(s.useCallback)(function(){var e=Object(n.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d({emailAddress:t.email,roleNames:Object.keys(t.roles).filter((function(e){return t.roles[e]}))});case 2:x((function(e){return e}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[x,d]),R={users:null!==p&&void 0!==p?p:[],userLoadError:v,isRefreshingUsers:h,refreshUsers:x,inviteUser:g,updateUserRoles:w,getRoleNames:j};return Object(F.jsx)(J.Provider,{value:R,children:t})},Y=function(){return Object(s.useContext)(J)},$=Object(u.a)((function(e){return Object(l.a)({formControl:{},formGroup:{marginTop:e.spacing(1)}})})),K=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,Q=function(e){var t=void 0;return e?function(e){return K.test(String(e).toLowerCase())}(e)||(t=v.a.t("InvalidEmail")):t=v.a.t("EmailRequired"),t},X=function(e){var t=void 0;return Object.values(e).some((function(e){return!!e}))||(t=v.a.t("AtLeastOneRoleRequired")),t},ee=function(e){var t=e.open,r=e.onClose,a=Object(p.a)().t,c=$(),u=Object(s.useState)(),l=Object(o.a)(u,2),d=l[0],b=l[1],f=Object(s.useState)({}),j=Object(o.a)(f,2),O=j[0],v=j[1],h=Object(s.useRef)(!1),g=Object(s.useRef)(!1),D=Object(s.useState)(),z=Object(o.a)(D,2),q=z[0],B=z[1],_=Object(s.useState)(),W=Object(o.a)(_,2),H=W[0],J=W[1],Z=Object(G.a)(),K=Object(V.b)().enqueueSnackbar,ee=Y(),te=ee.inviteUser,re=ee.getRoleNames,ae=Object(s.useCallback)((function(e){var t=e.target.value;b(t),h.current=!0,B(Q(t))}),[]),ne=Object(s.useCallback)((function(){h.current=!0,B(Q(d))}),[d]),oe=Object(s.useCallback)((function(e){var t=void 0;v((function(r){var a=Object(R.a)(Object(R.a)({},r),{},Object(w.a)({},e.target.name,e.target.checked));return t=X(a),a})),g.current=!0,J(t)}),[]),ce=Object(s.useCallback)((function(){g.current=!0}),[]),ie=Object(s.useCallback)(Object(n.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h.current=!0,g.current=!0,t=Q(d),n=X(O),!t&&!n){e.next=8;break}return B(t),J(n),e.abrupt("return");case 8:return e.prev=8,e.next=11,te(d,O);case 11:e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(8),Z(a("CouldNotInviteUser"),e.t0),e.abrupt("return",!1);case 17:K(a("InvitationSucessful"),{variant:"success"}),b(void 0),v({}),null===r||void 0===r||r(!0);case 21:case"end":return e.stop()}}),e,null,[[8,13]])}))),[d,K,te,r,Z,O,a]),se=Object(s.useCallback)((function(){null===r||void 0===r||r(!1)}),[r]),ue=Object(s.useCallback)((function(e,t){"backdropClick"!==t&&(null===r||void 0===r||r(!1))}),[r]),le=!!q&&h.current,de=!!H&&g.current,be=Object(m.a)("roleNames",(function(){return re()})).data;return Object(F.jsx)(x.a,{children:Object(F.jsxs)(y.a,{open:t,onClose:ue,maxWidth:"sm",fullWidth:!0,children:[Object(F.jsx)(M.a,{children:a("InvitingUser")}),Object(F.jsx)(S.a,{children:Object(F.jsxs)(A.a,{container:!0,spacing:3,children:[Object(F.jsx)(A.a,{item:!0,xs:12,children:Object(F.jsx)(N.a,{label:a("Email"),value:d,onChange:ae,onBlur:ne,required:!0,fullWidth:!0,InputProps:{required:!0},error:le,helperText:q,variant:"standard"})}),Object(F.jsx)(A.a,{item:!0,xs:12,children:Object(F.jsxs)(T.a,{required:!0,error:de,component:"fieldset",className:c.formControl,margin:"none",children:[Object(F.jsx)(L.a,{component:"legend",children:a("Roles")}),Object(F.jsx)(P.a,{className:c.formGroup,children:be&&be.map((function(e){return Object(F.jsx)(U.a,{control:Object(F.jsx)(I.a,{checked:O[e],onBlur:ce,onChange:oe,name:e,color:"default"}),label:e},e)}))}),Object(F.jsx)(E.a,{children:H})]})})]})}),Object(F.jsxs)(C.a,{children:[Object(F.jsx)(k.a,{onClick:ie,color:"primary",children:a("Invite")}),Object(F.jsx)(k.a,{onClick:se,color:"primary",children:a("Close")})]})]})})},te=r(195),re=r(2130),ae=function(e){return Object(F.jsxs)(re.a,Object(R.a)(Object(R.a)({viewBox:"0 0 413.435 365.722"},e),{},{children:[Object(F.jsx)("defs",{children:Object(F.jsxs)("radialGradient",{id:"a",cx:"173.781",cy:"150.833",r:"206.904",gradientTransform:"matrix(-.6101 .66198 -.68292 -.6294 402.986 80.15)",gradientUnits:"userSpaceOnUse",children:[Object(F.jsx)("stop",{"stop-color":"#fff","stop-opacity":".629",offset:"0"}),Object(F.jsx)("stop",{"stop-color":"#fff","stop-opacity":"0",offset:"1"})]})}),Object(F.jsx)("path",{d:"M222.264 25.585s-5.09-11.01-15.546-11.008c-10.457 0-15.56 11.007-15.56 11.007L17.76 325.936s-6.988 9.912-1.76 18.969c5.23 9.056 17.313 7.97 17.313 7.97l346.813.01s12.078 1.097 17.306-7.96c5.229-9.055-1.753-18.976-1.753-18.976z",fill:"#ff0",stroke:"#df1800","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"21.656"}),Object(F.jsx)("path",{d:"M242.837 138.137c-1.03 4.049-19.715 77.85-22.036 86.526-2.32 8.676-4.512 16.898-6.579 24.665 0 0-1.074 4.9-6.691 4.9h-1.694c-5.617 0-6.691-4.9-6.691-4.9-2.067-7.767-4.259-15.989-6.58-24.665-2.319-8.676-21.001-82.477-22.034-86.526-13.239-51.866 85.913-53.3 72.305 0z"}),Object(F.jsx)("circle",{cx:"206.718",cy:"301.477",r:"25.594"}),Object(F.jsx)("path",{d:"M207.422 3.749c-16.633 0-23.865 14.115-24.948 16.426L9.072 320.531h.03c-1.483 2.128-10.085 15.395-1.784 29.777 8.323 14.413 24.173 13.598 26.701 13.38.042-.003.151.004.185 0l346.62.032v-.031c2.576.22 18.396 1.037 26.701-13.35 8.332-14.429-.346-27.75-1.784-29.808h.031L232.462 20.39l-.123-.216c-1.097-2.341-8.304-16.428-24.917-16.426z",fill:"url(#a)",transform:"translate(-.706)"})]}))},ne=r(210),oe=r(367),ce=Object(u.a)((function(e){return Object(l.a)({small:{width:e.spacing(3),height:e.spacing(3)}})})),ie=function(){var e=Object(p.a)().t,t=ce(),r=Y(),c=r.users,u=r.userLoadError,l=r.isRefreshingUsers,d=r.refreshUsers,f=r.updateUserRoles,x=r.getRoleNames,w=Object(s.useState)(!1),R=Object(o.a)(w,2),k=R[0],y=R[1],C=Object(ne.c)().authenticatedUser,S=Object(te.c)(),M=Object(s.useCallback)((function(t){if(null===t||void 0===t||!t.roles.Owner){var r=c.filter((function(e){return e.roles&&e.roles.Owner}));if(1===r.length&&r[0].email===t.email)return e("ThereMustBeAtLeastOneOwnerInUnit")}return!0}),[e,c]),A=Object(m.a)([Object(oe.a)(x)],Object(n.a)(i.a.mark((function e(){var r,n,o,c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[{field:"picture",title:"",width:50,render:function(e){return Object(F.jsx)(h.a,{alt:e.fullName,src:e.picture,className:t.small})},editable:"never"},{field:"fullName",title:v.a.t("FullName"),editable:"never"},{field:"email",title:v.a.t("Email"),editable:"never"},{field:"emailVerified",title:v.a.t("EmailVerified"),type:"boolean",editable:"never"}],e.next=3,x();case 3:n=e.sent,o=Object(a.a)(n);try{for(o.s();!(c=o.n()).done;)s=c.value,r.push({field:"roles.".concat(s),title:v.a.t(s),type:"boolean",validate:"Owner"===s?M:function(e){return!0}})}catch(i){o.e(i)}finally{o.f()}return e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))),N=A.data,T=Object(s.useMemo)((function(){return e=d,{icon:b.a,tooltip:v.a.t("RefreshData"),isFreeAction:!0,onClick:e};var e}),[d]),L=Object(s.useMemo)((function(){return e=function(){return y(!0)},{icon:j.a,tooltip:v.a.t("InviteUser"),isFreeAction:!0,onClick:e};var e}),[]),P=Object(s.useMemo)((function(){var t={onRowUpdate:function(){var t=Object(n.a)(i.a.mark((function t(r,a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(!(r.roles&&r.roles.Owner)&&(null===C||void 0===C?void 0:C.email)===r.email)){t.next=7;break}return t.next=4,S({title:Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(ae,{style:{verticalAlign:"text-bottom"}})," ",e("LosingOwnershipTitle")]}),description:e("LosingOwnershipDescription")});case 4:if(t.sent){t.next=7;break}return t.abrupt("return");case 7:return t.next=9,f(r);case 9:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()};return t}),[C,S,e,f]);return Object(F.jsxs)(F.Fragment,{children:[N&&Object(F.jsx)(g.a,{columns:N,data:c,title:e("Users"),editable:P,actions:[L,T]}),!l&&!!u&&Object(F.jsx)(O.a,{severity:"error",children:u.toString()}),!!k&&Object(F.jsx)(ee,{open:!!k,onClose:function(e){return y(!1)}})]})},se=function(){return Object(F.jsx)(x.a,{children:Object(F.jsx)(Z,{children:Object(F.jsx)(ie,{})})})};t.default=se},213:function(e,t,r){"use strict";var a=r(75);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(81)),o=r(30),c=(0,n.default)((0,o.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=c},343:function(e,t,r){"use strict";var a=r(75);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(81)),o=r(30),c=(0,n.default)((0,o.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}),"Refresh");t.default=c},601:function(e,t,r){"use strict";var a=r(28),n=r(4),o=r(5),c=r(1),i=r(151),s=r(558),u=r.n(s),l=r(1490),d=r(1539),b=r(1616),f=r(1493),j=r(1540),O=r(213),p=r.n(O),v=r(335),h=r.n(v),m=r(1004),x=r.n(m),g=r(1001),w=r.n(g),R=r(1002),k=r.n(R),y=r(575),C=r.n(y),S=r(155),M=r.n(S),A=r(336),N=r.n(A),T=r(1028),L=r.n(T),P=r(561),U=r.n(P),E=r(560),I=r.n(E),V=r(1027),G=r.n(V),D=r(1029),z=r.n(D),q=r(999),F=r.n(q),B=r(1026),_=r.n(B),W=r(37),H=r(34),J=r(30),Z=["forwardedRef"],Y={Add:Object(c.forwardRef)((function(e,t){return Object(J.jsx)(p.a,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),Check:Object(c.forwardRef)((function(e,t){return Object(J.jsx)(x.a,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),Clear:Object(c.forwardRef)((function(e,t){return Object(J.jsx)(C.a,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),Delete:Object(c.forwardRef)((function(e,t){return Object(J.jsx)(M.a,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),DetailPanel:Object(c.forwardRef)((function(e,t){return Object(J.jsx)(k.a,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),Edit:Object(c.forwardRef)((function(e,t){return Object(J.jsx)(N.a,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),Export:Object(c.forwardRef)((function(e,t){return Object(J.jsx)(z.a,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),Filter:Object(c.forwardRef)((function(e,t){return Object(J.jsx)(L.a,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),FirstPage:Object(c.forwardRef)((function(e,t){return Object(J.jsx)(U.a,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),LastPage:Object(c.forwardRef)((function(e,t){return Object(J.jsx)(I.a,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),NextPage:Object(c.forwardRef)((function(e,t){return Object(J.jsx)(k.a,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),PreviousPage:Object(c.forwardRef)((function(e,t){return Object(J.jsx)(w.a,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),ResetSearch:Object(c.forwardRef)((function(e,t){return Object(J.jsx)(C.a,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),Search:Object(c.forwardRef)((function(e,t){return Object(J.jsx)(F.a,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),SortArrow:Object(c.forwardRef)((function(e,t){return Object(J.jsx)(h.a,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),ThirdStateCheck:Object(c.forwardRef)((function(e,t){return Object(J.jsx)(G.a,Object(o.a)(Object(o.a)({},e),{},{ref:t}))})),ViewColumn:Object(c.forwardRef)((function(e,t){return Object(J.jsx)(_.a,Object(o.a)(Object(o.a)({},e),{},{ref:t}))}))},$=function e(t,r){for(var a={},o=0,c=Object.entries(t);o<c.length;o++){var i=Object(n.a)(c[o],2),s=i[0],u=i[1];"object"===typeof u?(r.push(s),a[s]=e(u,r),r.pop()):a[s]=W.a.t("".concat(r.join("."),".").concat(s))}return a}({body:{emptyDataSourceMessage:"",filterRow:{filterTooltip:""},editRow:{saveTooltip:"",cancelTooltip:"",deleteText:""},addTooltip:"",deleteTooltip:"",editTooltip:""},header:{actions:""},grouping:{groupedBy:"",placeholder:""},pagination:{firstTooltip:"",firstAriaLabel:"",previousTooltip:"",previousAriaLabel:"",nextTooltip:"",nextAriaLabel:"",labelDisplayedRows:"",labelRowsPerPage:"",lastTooltip:"",lastAriaLabel:"",labelRowsSelect:""},toolbar:{addRemoveColumns:"",nRowsSelected:function(e){return""},showColumnsTitle:"",showColumnsAriaLabel:"",exportTitle:"",exportAriaLabel:"",exportCSVName:"",exportPDFName:"",searchTooltip:"",searchPlaceholder:"",searchAriaLabel:"",clearSearchAriaLabel:""}},["MaterialTable"]),K={padding:0,width:24,marginLeft:24},Q=function(e){var t=e.forwardedRef,r=Object(a.a)(e,Z);return Object(J.jsxs)(l.a,{error:Boolean(r.error),ref:t,component:"fieldset",children:[Object(J.jsx)(d.a,{children:Object(J.jsx)(j.a,{label:"",control:Object(J.jsx)(b.a,Object(o.a)(Object(o.a)({},r),{},{value:String(r.value),checked:Boolean(r.value),onChange:function(e){return r.onChange(e.target.checked)},style:K,color:"default",inputProps:{"aria-label":r.columnDef.title}}))})}),Object(J.jsx)(f.a,{children:r.helperText})]})},X=function(e){return"boolean"===e.columnDef.type?Object(J.jsx)(Q,Object(o.a)({},e)):Object(J.jsx)(s.MTableEditField,Object(o.a)({},e))},ee={EditField:function(e){return Object(J.jsx)(X,Object(o.a)({},e))}};t.a=function(e){var t=Object(i.a)(),r=Object(c.useMemo)((function(){return e.icons?Object(o.a)(Object(o.a)({},Y),e.icons):Y}),[e.icons]),a=Object(c.useMemo)((function(){return e.localization?Object(o.a)(Object(o.a)({},$),e.localization):$}),[e.localization]),n=Object(c.useMemo)((function(){var r=function(e){return{actionsCellStyle:{color:e.palette.text.secondary},actionsColumnIndex:-1,padding:"dense",pageSize:10,rowStyle:{fontSize:14}}}(t);return e.options&&(r=Object(H.o)(r,e.options)),r}),[t,e.options]),s=Object(c.useMemo)((function(){return e.components?Object(o.a)(Object(o.a)({},ee),e.components):ee}),[e.components]),l={boxShadow:"none",backgroundColor:t.palette.background.default};return Object(J.jsx)(u.a,Object(o.a)(Object(o.a)({},e),{},{icons:r,options:n,components:s,localization:a,style:l}))}}}]);
//# sourceMappingURL=19.4a0d73e8.chunk.js.map