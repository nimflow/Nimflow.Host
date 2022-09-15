(this["webpackJsonpnimflow-studio"]=this["webpackJsonpnimflow-studio"]||[]).push([[75],{2722:function(e,t,a){"use strict";var c=a(433);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(a(436)),n=a(125),r=(0,o.default)((0,n.jsx)("path",{d:"M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"}),"SettingsInputComponent");t.default=r},2995:function(e,t,a){"use strict";a.r(t),a.d(t,"DigitalWorkersViewer",(function(){return G}));var c=a(13),o=a(4),n=a(19),r=a(8),l=a.n(r),i=a(6),b=a(2976),d=a(2991),s=a(18),u=a(645),j=a.n(u),O=a(474),f=a.n(O),p=a(481),v=a.n(p),m=a(470),h=a.n(m),g=a(2722),x=a.n(g),y=a(489),C=a(485),k=a(501),w=a(464),S=a(453),R=a(519),z=a(2322),I=a(2975),V=a(2254),T=a(2910),M=a(3003),P=a(3002),D=a(2917),L=a(2986),W=a(2041),N=a(634),A=a(869),E=a(125),H=Object(I.a)((function(e){return Object(z.a)({paper:{backgroundColor:e.palette.background.default,height:"100%",width:"100%",maxHeight:"50vh"},dialogTitle:{height:64},dialogContent:{height:"calc(100% - ".concat(64,"px - ").concat(52,"px)"),width:"100%"},dialogFooter:{height:52}})})),F=function(e){var t=e.open,a=e.digitalWorker,c=e.onClose,r=H(),b=Object(d.a)().t,s=Object(N.c)(),u=s.unit,j=s.hubBaseUrl,O=Object(w.c)().apim_GetUnitSubscriptionKey,f=Object(A.c)().isFeatureSupported,p=Object(i.useState)(),v=Object(o.a)(p,2),m=v[0],h=v[1];return Object(i.useEffect)((function(){var e=function(){var e=Object(n.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u&&f(A.a.UnitSubscriptionKey)||h(void 0),e.t0=h,e.next=4,O();case 4:e.t1=e.sent,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[O,f,h,u]),Object(E.jsxs)(T.a,{open:t,onClose:c,fullWidth:!0,maxWidth:"md",classes:{paper:r.paper},children:[Object(E.jsx)(D.a,{className:r.dialogTitle,children:b("DigitalWorkerConfiguration")}),Object(E.jsx)(P.a,{className:r.dialogContent,children:Object(E.jsxs)(L.a,{container:!0,spacing:2,children:[Object(E.jsx)(L.a,{item:!0,xs:12,children:Object(E.jsx)(W.a,{label:b("Name"),value:a.name,InputProps:{readOnly:!0},variant:"standard",fullWidth:!0})}),Object(E.jsx)(L.a,{item:!0,xs:12,children:Object(E.jsx)(W.a,{label:b("EndpointUrl"),value:j,InputProps:{readOnly:!0},variant:"standard",fullWidth:!0})}),m&&Object(E.jsx)(L.a,{item:!0,xs:12,children:Object(E.jsx)(W.a,{label:"subscription-key",value:m,InputProps:{readOnly:!0},variant:"standard",fullWidth:!0})}),Object(E.jsx)(L.a,{item:!0,xs:12,children:Object(E.jsx)(W.a,{label:"x-api-key",value:a.apiKey,InputProps:{readOnly:!0},variant:"standard",fullWidth:!0})}),Object(E.jsx)(L.a,{item:!0,xs:12,children:Object(E.jsx)(W.a,{label:b("unit-id"),value:null===u||void 0===u?void 0:u.id,InputProps:{readOnly:!0},fullWidth:!0,variant:"standard"})})]})}),Object(E.jsx)(M.a,{className:r.dialogFooter,children:Object(E.jsx)(V.a,{onClick:c,color:"primary",children:b("Close")})})]})},_=a(14),K=[{field:"name",title:s.a.t("Name")},{field:"roles",title:s.a.t("Roles"),render:function(e){var t,a;return(e.role?Object(_.H)([e.role],null!==(t=e.roles)&&void 0!==t?t:[]):null!==(a=e.roles)&&void 0!==a?a:[]).join(",")}},{field:"expires",title:s.a.t("Expires"),type:"date"},{field:"active",title:s.a.t("Active"),type:"boolean"}],U=function(e){return function(t,a){Array.isArray(a)&&(a=a[0]),e(a)}},B=function(e){return{icon:v.a,tooltip:s.a.t("Edit"),onClick:U(e)}},J=function(e){return{icon:h.a,tooltip:s.a.t("Delete"),onClick:U(e)}},G=function(){var e=Object(d.a)().t,t=Object(S.c)(),a=Object(w.c)().digitalWorkers_Remove,r=Object(y.h)(),u=function(){var e=Object(w.c)().digitalWorkers_Search,t=Object(R.a)(e),a=Object(C.a)(t,Object(n.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e({});case 2:return a=t.sent,t.abrupt("return",a);case 4:case"end":return t.stop()}}),t)})))),c=a.data,o=a.error,r=a.mutate,b=a.isValidating;return Object(i.useMemo)((function(){return{digitalWorkers:null!==c&&void 0!==c?c:[],isValidating:b,error:o,revalidate:r}}),[c,b,r,o])}(),O=u.digitalWorkers,p=u.error,v=u.revalidate,m=u.isValidating,h=Object(i.useState)(),g=Object(o.a)(h,2),z=g[0],I=g[1],V=Object(i.useMemo)((function(){return e=v,{icon:j.a,tooltip:s.a.t("RefreshData"),isFreeAction:!0,onClick:e};var e}),[v]),T=Object(i.useMemo)((function(){return e=function(){r("new")},{icon:f.a,tooltip:s.a.t("AddDigitalWorker"),isFreeAction:!0,onClick:e};var e}),[r]),M=Object(i.useMemo)((function(){return[(c=function(e){I(e)},{icon:x.a,tooltip:s.a.t("ShowDigitalWorkerConfiguration"),onClick:U(c)}),B((function(e){r("edit/".concat(e.name))})),J(function(){var c=Object(n.a)(l.a.mark((function c(o){var n;return l.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,t({description:e("ConfirmDeleteDigitalWorker",{name:o.name})});case 2:if(!(n=c.sent)){c.next=8;break}return c.next=6,a({id:o.id});case 6:n=c.sent,v();case 8:return c.abrupt("return",n);case 9:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}())];var c}),[t,a,r,v,e]);return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(k.a,{columns:K,data:null!==O&&void 0!==O?O:[],title:e("DigitalWorkers"),actions:[T,V].concat(Object(c.a)(M))}),!m&&!!p&&Object(E.jsx)(b.a,{severity:"error",children:p.toString()}),!!z&&Object(E.jsx)(F,{open:!!z,digitalWorker:z,onClose:function(){return I(void 0)}})]})};t.default=G},495:function(e,t,a){"use strict";a.d(t,"b",(function(){return n}));var c=a(2902),o=a(2904);function n(e){return Object(c.a)("MuiChip",e)}var r=Object(o.a)("MuiChip",["root","sizeSmall","sizeMedium","colorPrimary","colorSecondary","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","focusVisible"]);t.a=r},496:function(e,t,a){"use strict";var c=a(433);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(a(436)),n=a(125),r=(0,o.default)((0,n.jsx)("path",{d:"M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67 2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"}),"SaveAlt");t.default=r},501:function(e,t,a){"use strict";var c=a(99),o=a(4),n=a(3),r=a(6),l=a(701),i=a(570),b=a.n(i),d=a(2042),s=a(2090),u=a(1978),j=a(2044),O=a(2091),f=a(474),p=a.n(f),v=a(602),m=a.n(v),h=a(632),g=a.n(h),x=a(665),y=a.n(x),C=a(666),k=a.n(C),w=a(664),S=a.n(w),R=a(470),z=a.n(R),I=a(481),V=a.n(I),T=a(689),M=a.n(T),P=a(644),D=a.n(P),L=a(643),W=a.n(L),N=a(688),A=a.n(N),E=a(496),H=a.n(E),F=a(660),_=a.n(F),K=a(541),U=a.n(K),B=a(18),J=a(14),G=a(125),q=["forwardedRef"],Q={Add:Object(r.forwardRef)((function(e,t){return Object(G.jsx)(p.a,Object(n.a)(Object(n.a)({},e),{},{ref:t}))})),Check:Object(r.forwardRef)((function(e,t){return Object(G.jsx)(g.a,Object(n.a)(Object(n.a)({},e),{},{ref:t}))})),Clear:Object(r.forwardRef)((function(e,t){return Object(G.jsx)(S.a,Object(n.a)(Object(n.a)({},e),{},{ref:t}))})),Delete:Object(r.forwardRef)((function(e,t){return Object(G.jsx)(z.a,Object(n.a)(Object(n.a)({},e),{},{ref:t}))})),DetailPanel:Object(r.forwardRef)((function(e,t){return Object(G.jsx)(k.a,Object(n.a)(Object(n.a)({},e),{},{ref:t}))})),Edit:Object(r.forwardRef)((function(e,t){return Object(G.jsx)(V.a,Object(n.a)(Object(n.a)({},e),{},{ref:t}))})),Export:Object(r.forwardRef)((function(e,t){return Object(G.jsx)(H.a,Object(n.a)(Object(n.a)({},e),{},{ref:t}))})),Filter:Object(r.forwardRef)((function(e,t){return Object(G.jsx)(M.a,Object(n.a)(Object(n.a)({},e),{},{ref:t}))})),FirstPage:Object(r.forwardRef)((function(e,t){return Object(G.jsx)(D.a,Object(n.a)(Object(n.a)({},e),{},{ref:t}))})),LastPage:Object(r.forwardRef)((function(e,t){return Object(G.jsx)(W.a,Object(n.a)(Object(n.a)({},e),{},{ref:t}))})),NextPage:Object(r.forwardRef)((function(e,t){return Object(G.jsx)(k.a,Object(n.a)(Object(n.a)({},e),{},{ref:t}))})),PreviousPage:Object(r.forwardRef)((function(e,t){return Object(G.jsx)(y.a,Object(n.a)(Object(n.a)({},e),{},{ref:t}))})),ResetSearch:Object(r.forwardRef)((function(e,t){return Object(G.jsx)(S.a,Object(n.a)(Object(n.a)({},e),{},{ref:t}))})),Search:Object(r.forwardRef)((function(e,t){return Object(G.jsx)(_.a,Object(n.a)(Object(n.a)({},e),{},{ref:t}))})),SortArrow:Object(r.forwardRef)((function(e,t){return Object(G.jsx)(m.a,Object(n.a)(Object(n.a)({},e),{},{ref:t}))})),ThirdStateCheck:Object(r.forwardRef)((function(e,t){return Object(G.jsx)(A.a,Object(n.a)(Object(n.a)({},e),{},{ref:t}))})),ViewColumn:Object(r.forwardRef)((function(e,t){return Object(G.jsx)(U.a,Object(n.a)(Object(n.a)({},e),{},{ref:t}))}))},X=function e(t,a){for(var c={},n=0,r=Object.entries(t);n<r.length;n++){var l=Object(o.a)(r[n],2),i=l[0],b=l[1];"object"===typeof b?(a.push(i),c[i]=e(b,a),a.pop()):c[i]=B.a.t("".concat(a.join("."),".").concat(i))}return c}({body:{emptyDataSourceMessage:"",filterRow:{filterTooltip:""},editRow:{saveTooltip:"",cancelTooltip:"",deleteText:""},addTooltip:"",deleteTooltip:"",editTooltip:""},header:{actions:""},grouping:{groupedBy:"",placeholder:""},pagination:{firstTooltip:"",firstAriaLabel:"",previousTooltip:"",previousAriaLabel:"",nextTooltip:"",nextAriaLabel:"",labelDisplayedRows:"",labelRowsPerPage:"",lastTooltip:"",lastAriaLabel:"",labelRowsSelect:""},toolbar:{addRemoveColumns:"",nRowsSelected:function(e){return""},showColumnsTitle:"",showColumnsAriaLabel:"",exportTitle:"",exportAriaLabel:"",exportCSVName:"",exportPDFName:"",searchTooltip:"",searchPlaceholder:"",searchAriaLabel:"",clearSearchAriaLabel:""}},["MaterialTable"]),Y={padding:0,width:24,marginLeft:24},Z=function(e){var t=e.forwardedRef,a=Object(c.a)(e,q);return Object(G.jsxs)(d.a,{error:Boolean(a.error),ref:t,component:"fieldset",children:[Object(G.jsx)(s.a,{children:Object(G.jsx)(O.a,{label:"",control:Object(G.jsx)(u.a,Object(n.a)(Object(n.a)({},a),{},{value:String(a.value),checked:Boolean(a.value),onChange:function(e){return a.onChange(e.target.checked)},style:Y,color:"default",inputProps:{"aria-label":a.columnDef.title}}))})}),Object(G.jsx)(j.a,{children:a.helperText})]})},$=function(e){return"boolean"===e.columnDef.type?Object(G.jsx)(Z,Object(n.a)({},e)):Object(G.jsx)(i.MTableEditField,Object(n.a)({},e))},ee={EditField:function(e){return Object(G.jsx)($,Object(n.a)({},e))}};t.a=function(e){var t=Object(l.a)(),a=Object(r.useMemo)((function(){return e.icons?Object(n.a)(Object(n.a)({},Q),e.icons):Q}),[e.icons]),c=Object(r.useMemo)((function(){return e.localization?Object(n.a)(Object(n.a)({},X),e.localization):X}),[e.localization]),o=Object(r.useMemo)((function(){var a=function(e){return{actionsColumnIndex:-1,padding:"normal",pageSize:10,headerStyle:{fontWeight:"bold",backgroundColor:e.palette.background.paper}}}(t);return e.options&&(a=Object(J.u)(a,e.options)),a}),[t,e.options]),i=Object(r.useMemo)((function(){return e.components?Object(n.a)(Object(n.a)({},ee),e.components):ee}),[e.components]),d={boxShadow:"none",backgroundColor:t.palette.background.default};return Object(G.jsx)(b.a,Object(n.a)(Object(n.a)({},e),{},{icons:a,options:o,components:i,localization:c,style:d}))}},541:function(e,t,a){"use strict";var c=a(433);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(a(436)),n=a(125),r=(0,o.default)((0,n.jsx)("path",{d:"M14.67 5v14H9.33V5h5.34zm1 14H21V5h-5.33v14zm-7.34 0V5H3v14h5.33z"}),"ViewColumn");t.default=r},627:function(e,t,a){"use strict";var c=a(20),o=a(126),n=a(428),r=a(6),l=a(432),i=a(2901),b=a(2897),d=a(476),s=a(125),u=Object(d.a)(Object(s.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),j=a(506),O=a(452),f=a(2978),p=a(440),v=a(439),m=a(495),h=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"],g=Object(v.a)("div",{name:"MuiChip",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState,o=a.color,n=a.clickable,r=a.onDelete,l=a.size,i=a.variant;return[Object(c.a)({},"& .".concat(m.a.avatar),t.avatar),Object(c.a)({},"& .".concat(m.a.avatar),t["avatar".concat(Object(O.a)(l))]),Object(c.a)({},"& .".concat(m.a.avatar),t["avatarColor".concat(Object(O.a)(o))]),Object(c.a)({},"& .".concat(m.a.icon),t.icon),Object(c.a)({},"& .".concat(m.a.icon),t["icon".concat(Object(O.a)(l))]),Object(c.a)({},"& .".concat(m.a.icon),t["iconColor".concat(Object(O.a)(o))]),Object(c.a)({},"& .".concat(m.a.deleteIcon),t.deleteIcon),Object(c.a)({},"& .".concat(m.a.deleteIcon),t["deleteIcon".concat(Object(O.a)(l))]),Object(c.a)({},"& .".concat(m.a.deleteIcon),t["deleteIconColor".concat(Object(O.a)(o))]),Object(c.a)({},"& .".concat(m.a.deleteIcon),t["deleteIconOutlinedColor".concat(Object(O.a)(o))]),t.root,t["size".concat(Object(O.a)(l))],t["color".concat(Object(O.a)(o))],n&&t.clickable,n&&"default"!==o&&t["clickableColor".concat(Object(O.a)(o),")")],r&&t.deletable,r&&"default"!==o&&t["deletableColor".concat(Object(O.a)(o))],t[i],"outlined"===i&&t["outlined".concat(Object(O.a)(o))]]}})((function(e){var t,a=e.theme,o=e.ownerState,r=Object(b.a)(a.palette.text.primary,.26);return Object(n.a)((t={maxWidth:"100%",fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:a.palette.text.primary,backgroundColor:a.palette.action.selected,borderRadius:16,whiteSpace:"nowrap",transition:a.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box"},Object(c.a)(t,"&.".concat(m.a.disabled),{opacity:a.palette.action.disabledOpacity,pointerEvents:"none"}),Object(c.a)(t,"& .".concat(m.a.avatar),{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===a.palette.mode?a.palette.grey[700]:a.palette.grey[300],fontSize:a.typography.pxToRem(12)}),Object(c.a)(t,"& .".concat(m.a.avatarColorPrimary),{color:a.palette.primary.contrastText,backgroundColor:a.palette.primary.dark}),Object(c.a)(t,"& .".concat(m.a.avatarColorSecondary),{color:a.palette.secondary.contrastText,backgroundColor:a.palette.secondary.dark}),Object(c.a)(t,"& .".concat(m.a.avatarSmall),{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:a.typography.pxToRem(10)}),Object(c.a)(t,"& .".concat(m.a.icon),Object(n.a)({color:"light"===a.palette.mode?a.palette.grey[700]:a.palette.grey[300],marginLeft:5,marginRight:-6},"small"===o.size&&{fontSize:18,marginLeft:4,marginRight:-4},"default"!==o.color&&{color:"inherit"})),Object(c.a)(t,"& .".concat(m.a.deleteIcon),Object(n.a)({WebkitTapHighlightColor:"transparent",color:r,fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(b.a)(r,.4)}},"small"===o.size&&{fontSize:16,marginRight:4,marginLeft:-4},"default"!==o.color&&{color:Object(b.a)(a.palette[o.color].contrastText,.7),"&:hover, &:active":{color:a.palette[o.color].contrastText}})),t),"small"===o.size&&{height:24},"default"!==o.color&&{backgroundColor:a.palette[o.color].main,color:a.palette[o.color].contrastText},o.onDelete&&Object(c.a)({},"&.".concat(m.a.focusVisible),{backgroundColor:Object(b.a)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}),o.onDelete&&"default"!==o.color&&Object(c.a)({},"&.".concat(m.a.focusVisible),{backgroundColor:a.palette[o.color].dark}))}),(function(e){var t,a=e.theme,o=e.ownerState;return Object(n.a)({},o.clickable&&(t={userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:Object(b.a)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)}},Object(c.a)(t,"&.".concat(m.a.focusVisible),{backgroundColor:Object(b.a)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}),Object(c.a)(t,"&:active",{boxShadow:a.shadows[1]}),t),o.clickable&&"default"!==o.color&&Object(c.a)({},"&:hover, &.".concat(m.a.focusVisible),{backgroundColor:a.palette[o.color].dark}))}),(function(e){var t,a,o=e.theme,r=e.ownerState;return Object(n.a)({},"outlined"===r.variant&&(t={backgroundColor:"transparent",border:"1px solid ".concat("light"===o.palette.mode?o.palette.grey[400]:o.palette.grey[700])},Object(c.a)(t,"&.".concat(m.a.clickable,":hover"),{backgroundColor:o.palette.action.hover}),Object(c.a)(t,"&.".concat(m.a.focusVisible),{backgroundColor:o.palette.action.focus}),Object(c.a)(t,"& .".concat(m.a.avatar),{marginLeft:4}),Object(c.a)(t,"& .".concat(m.a.avatarSmall),{marginLeft:2}),Object(c.a)(t,"& .".concat(m.a.icon),{marginLeft:4}),Object(c.a)(t,"& .".concat(m.a.iconSmall),{marginLeft:2}),Object(c.a)(t,"& .".concat(m.a.deleteIcon),{marginRight:5}),Object(c.a)(t,"& .".concat(m.a.deleteIconSmall),{marginRight:3}),t),"outlined"===r.variant&&"default"!==r.color&&(a={color:o.palette[r.color].main,border:"1px solid ".concat(Object(b.a)(o.palette[r.color].main,.7))},Object(c.a)(a,"&.".concat(m.a.clickable,":hover"),{backgroundColor:Object(b.a)(o.palette[r.color].main,o.palette.action.hoverOpacity)}),Object(c.a)(a,"&.".concat(m.a.focusVisible),{backgroundColor:Object(b.a)(o.palette[r.color].main,o.palette.action.focusOpacity)}),Object(c.a)(a,"& .".concat(m.a.deleteIcon),{color:Object(b.a)(o.palette[r.color].main,.7),"&:hover, &:active":{color:o.palette[r.color].main}}),a))})),x=Object(v.a)("span",{name:"MuiChip",slot:"Label",overridesResolver:function(e,t){var a=e.ownerState.size;return[t.label,t["label".concat(Object(O.a)(a))]]}})((function(e){var t=e.ownerState;return Object(n.a)({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},"small"===t.size&&{paddingLeft:8,paddingRight:8})}));function y(e){return"Backspace"===e.key||"Delete"===e.key}var C=r.forwardRef((function(e,t){var a=Object(p.a)({props:e,name:"MuiChip"}),c=a.avatar,b=a.className,d=a.clickable,v=a.color,C=void 0===v?"default":v,k=a.component,w=a.deleteIcon,S=a.disabled,R=void 0!==S&&S,z=a.icon,I=a.label,V=a.onClick,T=a.onDelete,M=a.onKeyDown,P=a.onKeyUp,D=a.size,L=void 0===D?"medium":D,W=a.variant,N=void 0===W?"filled":W,A=Object(o.a)(a,h),E=r.useRef(null),H=Object(j.a)(E,t),F=function(e){e.stopPropagation(),T&&T(e)},_=!(!1===d||!V)||d,K="small"===L,U=_||T?f.a:k||"div",B=Object(n.a)({},a,{component:U,disabled:R,size:L,color:C,onDelete:!!T,clickable:_,variant:N}),J=function(e){var t=e.classes,a=e.disabled,c=e.size,o=e.color,n=e.onDelete,r=e.clickable,l=e.variant,b={root:["root",l,a&&"disabled","size".concat(Object(O.a)(c)),"color".concat(Object(O.a)(o)),r&&"clickable",r&&"clickableColor".concat(Object(O.a)(o)),n&&"deletable",n&&"deletableColor".concat(Object(O.a)(o)),"".concat(l).concat(Object(O.a)(o))],label:["label","label".concat(Object(O.a)(c))],avatar:["avatar","avatar".concat(Object(O.a)(c)),"avatarColor".concat(Object(O.a)(o))],icon:["icon","icon".concat(Object(O.a)(c)),"iconColor".concat(Object(O.a)(o))],deleteIcon:["deleteIcon","deleteIcon".concat(Object(O.a)(c)),"deleteIconColor".concat(Object(O.a)(o)),"deleteIconOutlinedColor".concat(Object(O.a)(o))]};return Object(i.a)(b,m.b,t)}(B),G=U===f.a?Object(n.a)({component:k||"div",focusVisibleClassName:J.focusVisible},T&&{disableRipple:!0}):{},q=null;if(T){var Q=Object(l.default)("default"!==C&&("outlined"===N?J["deleteIconOutlinedColor".concat(Object(O.a)(C))]:J["deleteIconColor".concat(Object(O.a)(C))]),K&&J.deleteIconSmall);q=w&&r.isValidElement(w)?r.cloneElement(w,{className:Object(l.default)(w.props.className,J.deleteIcon,Q),onClick:F}):Object(s.jsx)(u,{className:Object(l.default)(J.deleteIcon,Q),onClick:F})}var X=null;c&&r.isValidElement(c)&&(X=r.cloneElement(c,{className:Object(l.default)(J.avatar,c.props.className)}));var Y=null;return z&&r.isValidElement(z)&&(Y=r.cloneElement(z,{className:Object(l.default)(J.icon,z.props.className)})),Object(s.jsxs)(g,Object(n.a)({as:U,className:Object(l.default)(J.root,b),disabled:!(!_||!R)||void 0,onClick:V,onKeyDown:function(e){e.currentTarget===e.target&&y(e)&&e.preventDefault(),M&&M(e)},onKeyUp:function(e){e.currentTarget===e.target&&(T&&y(e)?T(e):"Escape"===e.key&&E.current&&E.current.blur()),P&&P(e)},ref:H,ownerState:B},G,A,{children:[X||Y,Object(s.jsx)(x,{className:Object(l.default)(J.label),ownerState:B,children:I}),q]}))}));t.a=C},645:function(e,t,a){"use strict";var c=a(433);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(a(436)),n=a(125),r=(0,o.default)((0,n.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}),"Refresh");t.default=r}}]);
//# sourceMappingURL=75.b71b76ee.chunk.js.map