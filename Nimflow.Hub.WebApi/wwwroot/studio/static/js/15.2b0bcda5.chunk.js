(this["webpackJsonpnimflow-studio"]=this["webpackJsonpnimflow-studio"]||[]).push([[15],{1233:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(1),r=a(553),c=a(123),o=function(e){if(e)try{return parseInt(e)}catch(t){return}},i=function(e){return Object(c.jsx)(r.a,Object(n.a)({type:"number",controlValueAdapter:o},e))}},1312:function(e,t,a){"use strict";a.d(t,"b",(function(){return c}));var n=a(2917),r=a(2919);function c(e){return Object(n.a)("MuiChip",e)}var o=Object(r.a)("MuiChip",["root","sizeSmall","sizeMedium","colorPrimary","colorSecondary","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","focusVisible"]);t.a=o},1962:function(e,t,a){"use strict";var n=a(58),r=a(452),c=a(438),o=a(6),i=a(459),l=a(2916),u=a(2912),s=a(671),d=a(123),b=Object(s.a)(Object(d.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),j=a(855),O=a(533),f=a(2994),v=a(478),m=a(475),p=a(1312),h=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"],g=Object(m.a)("div",{name:"MuiChip",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState,r=a.color,c=a.clickable,o=a.onDelete,i=a.size,l=a.variant;return[Object(n.a)({},"& .".concat(p.a.avatar),t.avatar),Object(n.a)({},"& .".concat(p.a.avatar),t["avatar".concat(Object(O.a)(i))]),Object(n.a)({},"& .".concat(p.a.avatar),t["avatarColor".concat(Object(O.a)(r))]),Object(n.a)({},"& .".concat(p.a.icon),t.icon),Object(n.a)({},"& .".concat(p.a.icon),t["icon".concat(Object(O.a)(i))]),Object(n.a)({},"& .".concat(p.a.icon),t["iconColor".concat(Object(O.a)(r))]),Object(n.a)({},"& .".concat(p.a.deleteIcon),t.deleteIcon),Object(n.a)({},"& .".concat(p.a.deleteIcon),t["deleteIcon".concat(Object(O.a)(i))]),Object(n.a)({},"& .".concat(p.a.deleteIcon),t["deleteIconColor".concat(Object(O.a)(r))]),Object(n.a)({},"& .".concat(p.a.deleteIcon),t["deleteIconOutlinedColor".concat(Object(O.a)(r))]),t.root,t["size".concat(Object(O.a)(i))],t["color".concat(Object(O.a)(r))],c&&t.clickable,c&&"default"!==r&&t["clickableColor".concat(Object(O.a)(r),")")],o&&t.deletable,o&&"default"!==r&&t["deletableColor".concat(Object(O.a)(r))],t[l],"outlined"===l&&t["outlined".concat(Object(O.a)(r))]]}})((function(e){var t,a=e.theme,r=e.ownerState,o=Object(u.a)(a.palette.text.primary,.26);return Object(c.a)((t={maxWidth:"100%",fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:a.palette.text.primary,backgroundColor:a.palette.action.selected,borderRadius:16,whiteSpace:"nowrap",transition:a.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box"},Object(n.a)(t,"&.".concat(p.a.disabled),{opacity:a.palette.action.disabledOpacity,pointerEvents:"none"}),Object(n.a)(t,"& .".concat(p.a.avatar),{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===a.palette.mode?a.palette.grey[700]:a.palette.grey[300],fontSize:a.typography.pxToRem(12)}),Object(n.a)(t,"& .".concat(p.a.avatarColorPrimary),{color:a.palette.primary.contrastText,backgroundColor:a.palette.primary.dark}),Object(n.a)(t,"& .".concat(p.a.avatarColorSecondary),{color:a.palette.secondary.contrastText,backgroundColor:a.palette.secondary.dark}),Object(n.a)(t,"& .".concat(p.a.avatarSmall),{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:a.typography.pxToRem(10)}),Object(n.a)(t,"& .".concat(p.a.icon),Object(c.a)({color:"light"===a.palette.mode?a.palette.grey[700]:a.palette.grey[300],marginLeft:5,marginRight:-6},"small"===r.size&&{fontSize:18,marginLeft:4,marginRight:-4},"default"!==r.color&&{color:"inherit"})),Object(n.a)(t,"& .".concat(p.a.deleteIcon),Object(c.a)({WebkitTapHighlightColor:"transparent",color:o,fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(u.a)(o,.4)}},"small"===r.size&&{fontSize:16,marginRight:4,marginLeft:-4},"default"!==r.color&&{color:Object(u.a)(a.palette[r.color].contrastText,.7),"&:hover, &:active":{color:a.palette[r.color].contrastText}})),t),"small"===r.size&&{height:24},"default"!==r.color&&{backgroundColor:a.palette[r.color].main,color:a.palette[r.color].contrastText},r.onDelete&&Object(n.a)({},"&.".concat(p.a.focusVisible),{backgroundColor:Object(u.a)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}),r.onDelete&&"default"!==r.color&&Object(n.a)({},"&.".concat(p.a.focusVisible),{backgroundColor:a.palette[r.color].dark}))}),(function(e){var t,a=e.theme,r=e.ownerState;return Object(c.a)({},r.clickable&&(t={userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:Object(u.a)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)}},Object(n.a)(t,"&.".concat(p.a.focusVisible),{backgroundColor:Object(u.a)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}),Object(n.a)(t,"&:active",{boxShadow:a.shadows[1]}),t),r.clickable&&"default"!==r.color&&Object(n.a)({},"&:hover, &.".concat(p.a.focusVisible),{backgroundColor:a.palette[r.color].dark}))}),(function(e){var t,a,r=e.theme,o=e.ownerState;return Object(c.a)({},"outlined"===o.variant&&(t={backgroundColor:"transparent",border:"1px solid ".concat("light"===r.palette.mode?r.palette.grey[400]:r.palette.grey[700])},Object(n.a)(t,"&.".concat(p.a.clickable,":hover"),{backgroundColor:r.palette.action.hover}),Object(n.a)(t,"&.".concat(p.a.focusVisible),{backgroundColor:r.palette.action.focus}),Object(n.a)(t,"& .".concat(p.a.avatar),{marginLeft:4}),Object(n.a)(t,"& .".concat(p.a.avatarSmall),{marginLeft:2}),Object(n.a)(t,"& .".concat(p.a.icon),{marginLeft:4}),Object(n.a)(t,"& .".concat(p.a.iconSmall),{marginLeft:2}),Object(n.a)(t,"& .".concat(p.a.deleteIcon),{marginRight:5}),Object(n.a)(t,"& .".concat(p.a.deleteIconSmall),{marginRight:3}),t),"outlined"===o.variant&&"default"!==o.color&&(a={color:r.palette[o.color].main,border:"1px solid ".concat(Object(u.a)(r.palette[o.color].main,.7))},Object(n.a)(a,"&.".concat(p.a.clickable,":hover"),{backgroundColor:Object(u.a)(r.palette[o.color].main,r.palette.action.hoverOpacity)}),Object(n.a)(a,"&.".concat(p.a.focusVisible),{backgroundColor:Object(u.a)(r.palette[o.color].main,r.palette.action.focusOpacity)}),Object(n.a)(a,"& .".concat(p.a.deleteIcon),{color:Object(u.a)(r.palette[o.color].main,.7),"&:hover, &:active":{color:r.palette[o.color].main}}),a))})),x=Object(m.a)("span",{name:"MuiChip",slot:"Label",overridesResolver:function(e,t){var a=e.ownerState.size;return[t.label,t["label".concat(Object(O.a)(a))]]}})((function(e){var t=e.ownerState;return Object(c.a)({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},"small"===t.size&&{paddingLeft:8,paddingRight:8})}));function C(e){return"Backspace"===e.key||"Delete"===e.key}var k=o.forwardRef((function(e,t){var a=Object(v.a)({props:e,name:"MuiChip"}),n=a.avatar,u=a.className,s=a.clickable,m=a.color,k=void 0===m?"default":m,y=a.component,S=a.deleteIcon,w=a.disabled,V=void 0!==w&&w,I=a.icon,N=a.label,M=a.onClick,D=a.onDelete,z=a.onKeyDown,T=a.onKeyUp,L=a.size,F=void 0===L?"medium":L,E=a.variant,R=void 0===E?"filled":E,W=Object(r.a)(a,h),P=o.useRef(null),_=Object(j.a)(P,t),A=function(e){e.stopPropagation(),D&&D(e)},q=!(!1===s||!M)||s,B="small"===F,G=q||D?f.a:y||"div",H=Object(c.a)({},a,{component:G,disabled:V,size:F,color:k,onDelete:!!D,clickable:q,variant:R}),K=function(e){var t=e.classes,a=e.disabled,n=e.size,r=e.color,c=e.onDelete,o=e.clickable,i=e.variant,u={root:["root",i,a&&"disabled","size".concat(Object(O.a)(n)),"color".concat(Object(O.a)(r)),o&&"clickable",o&&"clickableColor".concat(Object(O.a)(r)),c&&"deletable",c&&"deletableColor".concat(Object(O.a)(r)),"".concat(i).concat(Object(O.a)(r))],label:["label","label".concat(Object(O.a)(n))],avatar:["avatar","avatar".concat(Object(O.a)(n)),"avatarColor".concat(Object(O.a)(r))],icon:["icon","icon".concat(Object(O.a)(n)),"iconColor".concat(Object(O.a)(r))],deleteIcon:["deleteIcon","deleteIcon".concat(Object(O.a)(n)),"deleteIconColor".concat(Object(O.a)(r)),"deleteIconOutlinedColor".concat(Object(O.a)(r))]};return Object(l.a)(u,p.b,t)}(H),U=G===f.a?Object(c.a)({component:y||"div",focusVisibleClassName:K.focusVisible},D&&{disableRipple:!0}):{},J=null;if(D){var Q=Object(i.default)("default"!==k&&("outlined"===R?K["deleteIconOutlinedColor".concat(Object(O.a)(k))]:K["deleteIconColor".concat(Object(O.a)(k))]),B&&K.deleteIconSmall);J=S&&o.isValidElement(S)?o.cloneElement(S,{className:Object(i.default)(S.props.className,K.deleteIcon,Q),onClick:A}):Object(d.jsx)(b,{className:Object(i.default)(K.deleteIcon,Q),onClick:A})}var X=null;n&&o.isValidElement(n)&&(X=o.cloneElement(n,{className:Object(i.default)(K.avatar,n.props.className)}));var Y=null;return I&&o.isValidElement(I)&&(Y=o.cloneElement(I,{className:Object(i.default)(K.icon,I.props.className)})),Object(d.jsxs)(g,Object(c.a)({as:G,className:Object(i.default)(K.root,u),disabled:!(!q||!V)||void 0,onClick:M,onKeyDown:function(e){e.currentTarget===e.target&&C(e)&&e.preventDefault(),z&&z(e)},onKeyUp:function(e){e.currentTarget===e.target&&(D&&C(e)?D(e):"Escape"===e.key&&P.current&&P.current.blur()),T&&T(e)},ref:_,ownerState:H},U,W,{children:[X||Y,Object(d.jsx)(x,{className:Object(i.default)(K.label),ownerState:H,children:N}),J]}))}));t.a=k},2502:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(9),r=a(988),c=Object(r.a)(n.m().required().identifier(),n.k().shape({replaceAll:n.g(),filter:n.k(),ids:n.e().of(n.m())})),o=n.k().shape({name:n.m().required().identifier(),requiredSecretNames:n.e().of(n.m()),contextTypeNames:n.e().of(n.m()),majorVersion:n.j().integer().required().min(0),minorVersion:n.j().integer().required().min(0),customCollections:c,userDefinedFunctionNames:n.e().of(n.m()),eventListenerIds:n.e().of(n.m()),collectionDefinitionNames:n.e().of(n.m())})},2550:function(e,t,a){"use strict";var n=a(1),r=a(12),c=a(4),o=a(19),i=a(8),l=a.n(i),u=a(6),s=a(3008),d=a(632),b=a(564),j=a(495),O=a(2989),f=a(2614),v=a(596),m=a(521),p=a(590),h=a(630),g=a(770),x=a(775),C=a(3002),k=a(553),y=a(2457),S=a(2437),w=a(2416),V=a(736),I=a.n(V),N=a(764),M=a.n(N),D=a(978),z=a(532),T=a(585),L=a(637),F=a(13),E=a(1233),R=a(767),W=a(675),P=a(1574),_=a(2064),A=a(690),q=a(2420),B=a(569),G=a.n(B),H=a(591),K=a.n(H),U=a(123),J=function(e){var t=e.name,a=e.label,n=e.textFieldClassName,r=Object(j.f)({name:t}),o=Object(c.a)(r,1)[0],i=Object(s.a)().t;return Object(U.jsx)(U.Fragment,{children:Object(U.jsx)(j.b,{name:t,children:function(e){var r=e.remove,c=e.push;return Object(U.jsxs)(C.a,{container:!0,children:[Object(U.jsxs)(C.a,{item:!0,xs:12,children:[i(a),Object(U.jsx)(w.a,{onClick:function(){return c("")},children:Object(U.jsx)(K.a,{})})]}),o.value&&o.value.map((function(e,a){return Object(U.jsxs)(C.a,{item:!0,xs:12,children:[Object(U.jsx)(k.a,{name:"".concat(t,".").concat(a),label:"",variant:"standard",InputLabelProps:{required:!0},required:!0,className:n}),Object(U.jsx)(j.a,{name:"".concat(t,".").concat(a),component:"div",className:"field-error"}),Object(U.jsx)(w.a,{edge:"end","aria-label":"delete",onClick:function(){return r(a)},children:Object(U.jsx)(G.a,{})})]},a)}))]})}})})},Q=Object(O.a)((function(e){return Object(f.a)({root:{flexGrow:1},form:{height:"100%"},toolbar:{minHeight:"48px",paddingLeft:0},secretTextField:{width:"60ch"}})})),X=function(e){var t=e.name,a=e.options,o=Object(j.f)({name:t}),i=Object(c.a)(o,3)[2],l=Object(u.useMemo)((function(){return["*"].concat(Object(r.a)(a))}),[a]),s=Object(u.useCallback)((function(e,t){if(Array.isArray(t)&&t.indexOf("*")>=0){i.setValue(["*"])}else i.setValue(t)}),[i]);return Object(U.jsx)(D.a,Object(n.a)(Object(n.a)({},e),{},{multiple:!0,options:l,onChange:s}))},Y=function(e){var t=e.onChange,a=function(){var e=Object(z.c)().contextTypes_Search,t=Object(L.a)(e),a=Object(T.a)(t,Object(o.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e({limit:100});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),{revalidateOnFocus:!1}),n=a.data,r=a.isValidating,c=a.mutate,i=a.error;return Object(u.useMemo)((function(){return{contextTypeInfos:null!==n&&void 0!==n?n:[],isValidating:r,error:i,revalidate:c}}),[n,r,c,i])}(),r=a.contextTypeInfos,c=a.isValidating,i=Object(s.a)().t,d=Object(u.useMemo)((function(){return r.map((function(e){return e.name})).sort()}),[r]),b=Object(u.useCallback)((function(e,a){null===t||void 0===t||t(null!==a&&void 0!==a?a:void 0)}),[t]);return Object(U.jsx)(X,{name:"contextTypeNames",options:d,loading:c,multiple:!0,onChange:b,fullWidth:!0,renderInput:function(e){return Object(U.jsx)(q.a,Object(n.a)(Object(n.a)({},e),{},{variant:"standard",label:i("ContextTypes")}))}})},Z=function(e){var t=e.onChange,a=function(){var e=Object(R.j)().dashboards_GetInfos,t=Object(L.a)(e),a=Object(T.a)([t],function(){var t=Object(o.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e({});case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),{revalidateOnFocus:!1}),n=a.data,r=a.error,c=a.mutate,i=a.isValidating;return Object(u.useMemo)((function(){return{data:null!==n&&void 0!==n?n:[],isValidating:i,error:r,revalidate:c}}),[n,i,c,r])}(),r=a.data,c=a.isValidating,i=Object(s.a)().t,d=Object(u.useMemo)((function(){return r?Object(F.C)((function(e){return e.name}),r).map((function(e){return e.id})):[]}),[r]),b=Object(u.useCallback)((function(e,a){null===t||void 0===t||t(null!==a&&void 0!==a?a:void 0)}),[t]);return Object(U.jsx)(X,{name:"customCollections.NimflowDashboards.ids",options:d,multiple:!0,loading:c,getOptionLabel:function(e){var t,a;return"*"===e?e:null!==(t=null===(a=r.find((function(t){return t.id===e})))||void 0===a?void 0:a.name)&&void 0!==t?t:"".concat(e,"?")},onChange:b,fullWidth:!0,renderInput:function(e){return Object(U.jsx)(q.a,Object(n.a)(Object(n.a)({},e),{},{variant:"standard",label:i("Dashboards")}))}})},$=function(e){var t=e.onChange,a=function(){var e=Object(W.n)().dashboardWidgets_GetInfos,t=Object(L.a)(e),a=Object(T.a)([t],function(){var t=Object(o.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e({});case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),{revalidateOnFocus:!1}),n=a.data,r=a.error,c=a.mutate,i=a.isValidating;return Object(u.useMemo)((function(){return{data:null!==n&&void 0!==n?n:[],isValidating:i,error:r,revalidate:c}}),[n,i,c,r])}(),r=a.data,c=a.isValidating,i=Object(s.a)().t,d=Object(u.useMemo)((function(){return r?Object(F.C)((function(e){return e.name}),r).map((function(e){return e.id})):[]}),[r]),b=Object(u.useCallback)((function(e,a){null===t||void 0===t||t(null!==a&&void 0!==a?a:void 0)}),[t]);return Object(U.jsx)(X,{name:"customCollections.NimflowDashboardWidgets.ids",options:d,multiple:!0,loading:c,getOptionLabel:function(e){var t,a;return"*"===e?e:null!==(t=null===(a=r.find((function(t){return t.id===e})))||void 0===a?void 0:a.name)&&void 0!==t?t:"".concat(e,"?")},onChange:b,fullWidth:!0,renderInput:function(e){return Object(U.jsx)(q.a,Object(n.a)(Object(n.a)({},e),{},{variant:"standard",label:i("Widgets")}))}})},ee=function(e){var t=function(){var e=Object(A.b)().getAllUdFunctions,t=Object(L.a)(e),a=Object(T.a)(t,Object(o.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),{revalidateOnFocus:!1}),n=a.data,r=a.error,c=a.mutate,i=a.isValidating;return Object(u.useMemo)((function(){return{data:null!==n&&void 0!==n?n:[],isValidating:i,error:r,revalidate:c}}),[n,i,c,r])}(),a=t.data,r=t.isValidating,c=Object(s.a)().t,i=Object(u.useMemo)((function(){return a?Object(F.C)((function(e){return e.name}),a).map((function(e){return e.name})):[]}),[a]);return Object(U.jsx)(X,{name:"userDefinedFunctionNames",options:i,multiple:!0,loading:r,fullWidth:!0,renderInput:function(e){return Object(U.jsx)(q.a,Object(n.a)(Object(n.a)({},e),{},{variant:"standard",label:c("UdFunctions")}))}})},te=function(e){var t=function(){var e=Object(z.c)().collections_SearchDefinitions,t=Object(L.a)(e),a=Object(T.a)(t,Object(o.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e({});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),{revalidateOnFocus:!1}),n=a.data,r=a.isValidating,c=a.mutate,i=a.error;return Object(u.useMemo)((function(){return{collectionDefinitions:null!==n&&void 0!==n?n:[],isValidating:r,error:i,revalidate:c}}),[n,r,c,i])}(),a=t.collectionDefinitions,r=t.isValidating,c=Object(s.a)().t,i=Object(u.useMemo)((function(){return a?Object(F.C)((function(e){return e.collectionName}),a).map((function(e){return e.collectionName})):[]}),[a]);return Object(U.jsx)(X,{name:"collectionDefinitionNames",options:i,multiple:!0,loading:r,fullWidth:!0,renderInput:function(e){return Object(U.jsx)(q.a,Object(n.a)(Object(n.a)({},e),{},{variant:"standard",label:c("CollectionDefinitions")}))}})},ae=function(e){var t=function(){var e=Object(P.b)().simulations_GetInfos,t=Object(L.a)(e),a=Object(T.a)(t,Object(o.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),{revalidateOnFocus:!1}),n=a.data,r=a.error,c=a.mutate,i=a.isValidating;return Object(u.useMemo)((function(){return{data:null!==n&&void 0!==n?n:[],isValidating:i,error:r,revalidate:c}}),[n,i,c,r])}(),a=t.data,r=t.isValidating,c=Object(s.a)().t,i=Object(u.useMemo)((function(){return a?Object(F.C)((function(e){return e.name}),a).map((function(e){return e.id})):[]}),[a]);return Object(U.jsx)(X,{name:"customCollections.NimflowContextSimulations.ids",options:i,multiple:!0,loading:r,getOptionLabel:function(e){var t,n;return"*"===e?e:null!==(t=null===(n=a.find((function(t){return t.id===e})))||void 0===n?void 0:n.name)&&void 0!==t?t:"".concat(e,"?")},fullWidth:!0,renderInput:function(e){return Object(U.jsx)(q.a,Object(n.a)(Object(n.a)({},e),{},{variant:"standard",label:c("SimulationsCatalog")}))}})},ne=function(e){var t=function(){var e=Object(_.b)().localizations_GetAll,t=Object(L.a)(e),a=Object(T.a)(t,Object(o.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),{revalidateOnFocus:!1}),n=a.data,r=a.error,c=a.mutate,i=a.isValidating;return Object(u.useMemo)((function(){return{data:null!==n&&void 0!==n?n:[],isValidating:i,error:r,revalidate:c}}),[n,i,c,r])}(),a=t.data,r=t.isValidating,c=Object(s.a)().t,i=Object(u.useMemo)((function(){return a?Object(F.C)((function(e){var t;return null!==(t=e.id)&&void 0!==t?t:"?"}),a).map((function(e){return e.id})):[]}),[a]);return Object(U.jsx)(X,{name:"customCollections.NimflowLocalizations.ids",options:i,multiple:!0,loading:r,fullWidth:!0,getOptionLabel:function(e){return"*"===e?e:null!==(t=a.find((function(t){return t.id===e})))&&void 0!==t&&t.translations?t.translations[Object.keys(t.translations)[0]]:"";var t},renderInput:function(e){return Object(U.jsx)(q.a,Object(n.a)(Object(n.a)({},e),{},{variant:"standard",label:c("Localizations")}))}})},re=function(e){var t=function(){var e=Object(z.c)().events_SearchContextEventListeners,t=Object(L.a)(e),a=Object(T.a)(t,Object(o.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e({});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),{revalidateOnFocus:!1}),n=a.data,r=a.error,c=a.mutate,i=a.isValidating;return Object(u.useMemo)((function(){return{data:null!==n&&void 0!==n?n:[],isValidating:i,error:r,revalidate:c}}),[n,i,c,r])}(),a=t.data,r=t.isValidating,c=Object(s.a)().t,i=Object(u.useMemo)((function(){var e;return null!==(e=null===a||void 0===a?void 0:a.map((function(e){return e.id})))&&void 0!==e?e:[]}),[a]);return Object(U.jsx)(X,{name:"eventListenerIds",options:i,multiple:!0,loading:r,getOptionLabel:function(e){var t;if(!e||!a)return"";if("*"===e)return e;var n=a.find((function(t){return t.id===e}));return n?"".concat(n.event," => ").concat(null===(t=n.call)||void 0===t?void 0:t.functionName):"".concat(e,"?")},fullWidth:!0,renderInput:function(e){return Object(U.jsx)(q.a,Object(n.a)(Object(n.a)({},e),{},{variant:"standard",label:c("EventListeners")}))}})},ce=function(e){var t=e.onSave,a=Object(s.a)().t,n=Q(),r=Object(v.h)(),c=Object(j.g)(),i=c.isSubmitting,d=c.dirty,b=c.setFieldValue,O=!i,f=Object(u.useMemo)((function(){return{description:a("ExitingEditorWithoutSavingWarning")}}),[a]);Object(g.a)(d,f);var m=Object(x.a)(Object(u.useCallback)(Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=3;break}return e.next=3,t();case 3:case"end":return e.stop()}}),e)}))),[t])),p=Object(u.useCallback)((function(){r(-1)}),[r]),h=Object(u.useCallback)((function(e){b("contextTypeNames",e)}),[b]);return Object(U.jsxs)(C.a,{container:!0,spacing:3,children:[Object(U.jsx)(C.a,{item:!0,xs:12,children:Object(U.jsxs)(y.a,{className:n.toolbar,children:[Object(U.jsx)(S.a,{title:a("GoBack"),children:Object(U.jsx)(w.a,{onClick:p,disabled:i,size:"large",children:Object(U.jsx)(I.a,{})})}),Object(U.jsx)(S.a,{title:a("SaveChanges"),children:Object(U.jsx)(w.a,{onClick:m,disabled:!O,size:"large",children:Object(U.jsx)(M.a,{})})})]})}),Object(U.jsx)(C.a,{item:!0,xs:10,children:Object(U.jsx)(k.a,{name:"name",label:a("Name"),variant:"standard",fullWidth:!0,InputLabelProps:{required:!0},required:!0})}),Object(U.jsx)(C.a,{item:!0,xs:1,children:Object(U.jsx)(E.a,{name:"majorVersion",label:a("MajorVersion")})}),Object(U.jsx)(C.a,{item:!0,xs:1,children:Object(U.jsx)(E.a,{name:"minorVersion",label:a("MinorVersion")})}),Object(U.jsx)(C.a,{item:!0,xs:12,children:Object(U.jsx)(Y,{onChange:h})}),Object(U.jsx)(C.a,{item:!0,xs:12,children:Object(U.jsx)(ae,{})}),Object(U.jsx)(C.a,{item:!0,xs:12,children:Object(U.jsx)(ne,{})}),Object(U.jsx)(C.a,{item:!0,xs:12,children:Object(U.jsx)($,{})}),Object(U.jsx)(C.a,{item:!0,xs:12,children:Object(U.jsx)(Z,{})}),Object(U.jsx)(C.a,{item:!0,xs:12,children:Object(U.jsx)(ee,{})}),Object(U.jsx)(C.a,{item:!0,xs:12,children:Object(U.jsx)(te,{})}),Object(U.jsx)(C.a,{item:!0,xs:12,children:Object(U.jsx)(re,{})}),Object(U.jsx)(C.a,{item:!0,xs:12,children:Object(U.jsx)(J,{name:"requiredSecretNames",label:"RequiredSecretNames",textFieldClassName:"secretTextField"})})]})};t.a=function(e){var t=e.value,a=e.schema,r=e.onSave,i=Q(),O=Object(m.b)(),f=Object(s.a)().t,v=Object(u.useRef)(),g=Object(d.b)().enqueueSnackbar,x=Object(u.useState)(function(e){var t=Object(n.a)({},e);function a(e,t){e[t]||(e[t]={ids:[],replaceAll:!1})}return t.customCollections||(t.customCollections={}),a(t.customCollections,"NimflowDashboardWidgets"),a(t.customCollections,"NimflowDashboards"),a(t.customCollections,"NimflowLocalizations"),a(t.customCollections,"NimflowContextSimulations"),t}(t)),C=Object(c.a)(x,1)[0];Object(u.useEffect)((function(){var e;null===(e=v.current)||void 0===e||e.resetForm({values:C})}),[C]);var k=Object(u.useRef)(),y=Object(u.useCallback)((function(){var e=v.current;return e&&r&&(k.current=function(){var e=Object(o.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r(t);case 3:if(e.sent){e.next=6;break}return e.abrupt("return");case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),a=Object(U.jsx)(p.a,{error:e.t0});case 11:if(!a){e.next=16;break}return e.next=14,O({title:f("ErrorSavingPackageDefinition"),description:a,mapCloseTo:"ok",actions:[{type:"ok",text:f("Ok")}]});case 14:e.next=17;break;case 16:g(f("PackageDefinitionSaved"),{variant:"success"});case 17:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),Object(h.a)(e)),Promise.resolve()}),[O,g,r,f]),S=Object(u.useCallback)(function(){var e=Object(o.a)(l.a.mark((function e(t,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!k.current){e.next=5;break}return e.next=4,k.current(t);case 4:k.current=void 0;case 5:return e.prev=5,a.setSubmitting(!1),e.finish(5);case 8:case"end":return e.stop()}}),e,null,[[0,,5,8]])})));return function(t,a){return e.apply(this,arguments)}}(),[]);return Object(U.jsx)(b.a,{children:Object(U.jsx)(j.d,{innerRef:function(e){return v.current=e},initialValues:C,onSubmit:S,validationSchema:a,validateOnChange:!0,validateOnBlur:!0,children:Object(U.jsx)(j.c,{autoComplete:"off",className:i.form,children:Object(U.jsx)(ce,Object(n.a)(Object(n.a)({},e),{},{onSave:y}))})})})}},553:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(1),r=a(4),c=a(98),o=a(6),i=a(2420),l=a(495),u=a(38),s=a(123),d=["name","debounce","onChange","onBlur","helperText","error","disabled","controlValueAdapter"],b=function(e){var t=e.name,a=e.debounce,b=e.onChange,j=e.onBlur,O=e.helperText,f=(e.error,e.disabled),v=e.controlValueAdapter,m=Object(c.a)(e,d),p=Object(l.g)().isSubmitting,h=Object(l.f)({name:t}),g=Object(r.a)(h,3),x=g[0],C=g[1],k=g[2],y=C.error,S=C.touched&&!!y,w=Object(o.useState)(x.value),V=Object(r.a)(w,2),I=V[0],N=V[1],M=Object(o.useState)(),D=Object(r.a)(M,2),z=D[0],T=D[1];Object(o.useEffect)((function(){N(x.value)}),[x.value]);var L=Object(o.useCallback)((function(e){var t=e.target.value;k.setValue(v?v(t):t),null===b||void 0===b||b(e)}),[v,k,b]),F=Object(o.useCallback)((function(e){N((function(t){var a=e.target.value;return a||t})),Object(u.isPresent)(a)?(e.persist(),z&&clearTimeout(z),T(setTimeout((function(){return L(e)}),a))):L(e)}),[L,a,z]),E=Object(o.useCallback)((function(e){x.onBlur(e),null===j||void 0===j||j(e)}),[x,j]);return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(i.a,Object(n.a)(Object(n.a)({},x),{},{variant:"standard",value:null!==I&&void 0!==I?I:"",onChange:F,onBlur:E,error:S,helperText:S?y:O,disabled:null!==f&&void 0!==f?f:p},m))})}},564:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(2),r=a(3),c=a(14),o=a(15),i=a(6),l=a(2614),u=a(2989),s=a(2417),d=a(1264),b=a(1266),j=a(1265),O=a(733),f=a.n(O),v=a(123),m=Object(u.a)((function(e){return Object(l.a)({errorDetails:{overflow:"auto"}})})),p=function(e){var t=e.error,a=e.stack,n=m();return Object(v.jsxs)(d.a,{children:[Object(v.jsx)(j.a,{expandIcon:Object(v.jsx)(f.a,{}),children:Object(v.jsx)(s.a,{variant:"h5",color:"error",children:t})}),Object(v.jsx)(b.a,{className:n.errorDetails,children:Object(v.jsx)("pre",{children:a})})]})},h=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={hasError:!1},e}return Object(r.a)(a,[{key:"componentDidCatch",value:function(e,t){console.log({error:e,errorInfo:t}),this.setState({errorInfo:t})}},{key:"render",value:function(){var e,t,a=this.state,n=a.hasError,r=a.error,c=a.errorInfo;return n?Object(v.jsx)(p,{error:null!==(e=null===r||void 0===r?void 0:r.message)&&void 0!==e?e:"",stack:null!==(t=null===c||void 0===c?void 0:c.componentStack)&&void 0!==t?t:""}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0,error:e}}}]),a}(i.Component)},569:function(e,t,a){"use strict";var n=a(469);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(474)),c=a(123),o=(0,r.default)((0,c.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=o},591:function(e,t,a){"use strict";var n=a(469);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(474)),c=a(123),o=(0,r.default)((0,c.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=o},630:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return o}));var n=a(38),r=function e(t){var a={};if(t)for(var r=function(){var r=o[c];Array.isArray(t[r])?t[r].forEach((function(t,c){var o=a[r];Object(n.isPresent)(o)||(a[r]=o=[]),o[c]=e(t)})):"object"===typeof t[r]&&null!==t[r]?a[r]=e(t[r]):a[r]=!0},c=0,o=Object.keys(t);c<o.length;c++)r();return a},c=function(e){return e.validateForm().then((function(t){return Object.keys(t).length>0&&e.setTouched(r(t)),t}))},o=function(e){return e.validateForm().then((function(t){Object.keys(t).length>0?e.setTouched(r(t)):e.handleSubmit()}))}},770:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(19),r=a(1),c=a(8),o=a.n(c),i=a(6),l=a(3008),u=a(596),s=a(521),d=function(e,t){var a=Object(s.c)(),c=Object(l.a)().t,d=Object(i.useMemo)((function(){return Object(r.a)({description:c("ExitingWithoutSavingWarning"),confirmationText:c("Continue")},t)}),[t,c]),b=Object(i.useCallback)(function(){var e=Object(n.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(d);case 2:e.sent&&t.retry();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[a,d]);Object(u.e)(b,e)}},978:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(1),r=a(4),c=a(98),o=a(6),i=a(1303),l=a(495),u=a(123),s=["name","controlValueAdapter","onChange","onBlur","renderInput","multiple","loading","disabled"],d=function(e){var t=e.name,a=e.controlValueAdapter,d=e.onChange,b=e.onBlur,j=e.renderInput,O=e.multiple,f=e.loading,v=e.disabled,m=Object(c.a)(e,s),p=Object(l.g)(),h=p.isSubmitting,g=p.setFieldTouched,x=Object(l.f)({name:t}),C=Object(r.a)(x,3),k=C[0],y=C[1],S=C[2],w=y.error,V=y.touched&&!!w,I=Object(o.useCallback)((function(e,t,n,r){var c=a?a(t):t;S.setValue(null!==c&&void 0!==c?c:void 0),null===d||void 0===d||d(e,t,n,r)}),[a,S,d]),N=Object(o.useCallback)((function(e){g(k.name),k.onBlur(e),null===b||void 0===b||b(e)}),[k,b,g]),M=Object(o.useCallback)((function(e){return j?j(Object(n.a)(Object(n.a)({},e),{},{error:V,helperText:V?w:void 0})):null}),[w,j,V]),D=Object(o.useMemo)((function(){var t=void 0;return void 0===(t=a?e.options.find((function(e){return a(e)===k.value})):k.value)&&(t=O?[]:null),t}),[a,k.value,O,e.options]);return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(i.a,Object(n.a)(Object(n.a)({},k),{},{value:null!==D&&void 0!==D?D:null,onChange:I,onBlur:N,renderInput:M,disabled:null!==v&&void 0!==v?v:h,loading:f||h,multiple:O},m))})}},988:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n=a(1),r=a(4),c=a(2),o=a(3),i=a(16),l=a(11),u=a(14),s=a(15),d=a(9),b=a(1197),j=a.n(b);function O(e,t){return new f(e,t)}var f=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.m(),r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d.i();return Object(c.a)(this,a),(e=t.call(this,{type:"map"})).key=n,e.value=r,e}return Object(o.a)(a,[{key:"_typeCheck",value:function(e){return e&&"object"===typeof e}},{key:"_cast",value:function(e,t){var n=this,c=Object(i.a)(Object(l.a)(a.prototype),"_cast",this).call(this,e,t),o={};return Object.entries(c).forEach((function(e){var t=Object(r.a)(e,2),a=t[0],c=t[1];o[n.key.cast(a)]=n.value.cast(c)})),o}},{key:"_validate",value:function(e){var t=this,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0,u=[],s=c.abortEarly,b=c.sync,O=c.path,f=void 0===O?"":O,v=null!=c.originalValue?c.originalValue:e,m=this.key,p=this.value;Object(i.a)(Object(l.a)(a.prototype),"_validate",this).call(this,e,c,(function(e,a){var i;if(e){if(!d.c.isError(e)||s)return o(e,a);u.push(e)}if(!t._typeCheck(a))return u.length&&o(u[0]),void o(null,a);v=null!==(i=v)&&void 0!==i?i:a;for(var l=[],O=function(){var e=Object(r.a)(g[h],2),t=e[0],o=e[1],i=Object(n.a)(Object(n.a)({},c),{},{strict:!0,parent:a,path:f?"".concat(f,".").concat(t):t,originalValue:v[t]});l.push((function(e,a){m.validate(t,i).then((function(e){return a(null,e)})).catch((function(e){return a(e)}))})),l.push((function(e,t){p.validate(o,i).then((function(e){return t(null,e)})).catch((function(e){return t(e)}))}))},h=0,g=Object.entries(a);h<g.length;h++)O();return j()({sync:b,path:f,value:a,errors:u,tests:l,endEarly:s},o)}))}},{key:"clone",value:function(e){var t,n,r=Object(i.a)(Object(l.a)(a.prototype),"clone",this).call(this,e);return r.key=null===(t=this.key)||void 0===t?void 0:t.clone(),r.value=null===(n=this.value)||void 0===n?void 0:n.clone(),r}}]),a}(d.a);function v(e,t){return O(e,t)}O.prototype=f.prototype}}]);
//# sourceMappingURL=15.2b0bcda5.chunk.js.map