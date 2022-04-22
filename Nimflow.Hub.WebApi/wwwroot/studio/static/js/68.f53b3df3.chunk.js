(this["webpackJsonpnimflow-studio"]=this["webpackJsonpnimflow-studio"]||[]).push([[68],{1297:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var o=a(0),c=a(7),n=a(444),r=function(e){var t,a=Object(c.a)({$schema:"http://nimflow.com/schemas/context-type.schema.json",name:e.name},Object(n.a)(e));e.jsonSchema&&(a.jsonSchema=JSON.parse(e.jsonSchema)),null!==(t=e.settings)&&void 0!==t&&t.uiSchemaCommon&&(a.settings.uiSchemaCommon=JSON.parse(e.settings.uiSchemaCommon));var r,i=Object(o.a)(a.actions);try{for(i.s();!(r=i.n()).done;){var l=r.value.settings,s=null===l||void 0===l?void 0:l.uiSchema;"string"===typeof s&&(l.uiSchema=JSON.parse(s))}}catch(f){i.e(f)}finally{i.f()}var u,b=Object(o.a)(a.tasks.flatMap((function(e){return e.validResponses})));try{for(b.s();!(u=b.n()).done;){var d=u.value.settings,j=null===d||void 0===d?void 0:d.uiSchema;"string"===typeof j&&(d.uiSchema=JSON.parse(j))}}catch(f){b.e(f)}finally{b.f()}return a}},3100:function(e,t,a){"use strict";a.r(t),a.d(t,"ContextTypesViewer",(function(){return F}));var o=a(15),c=a(22),n=a(8),r=a.n(n),i=a(6),l=a(3145),s=a(2491),u=a(3146),b=a(3161),d=a(19),j=a(669),f=a.n(j),O=a(523),p=a.n(O),m=a(536),v=a.n(m),h=a(552),g=a.n(h),y=a(518),x=a.n(y),C=a(968),w=a.n(C),S=a(537),k=a(535),R=a(564),T=a(514),I=a(590),z=a(499),M=a(1297),L=a(567),P=a(136),V=[{field:"name",title:d.a.t("Name")},{field:"description",title:d.a.t("Description")}],D=Object(l.a)((function(e){return Object(s.a)({fileInput:{opacity:0,position:"absolute",top:0,left:0,right:0,bottom:0,width:"100%"}})})),N=function(e){return function(t,a){Array.isArray(a)&&(a=a[0]),e(a)}},A=function(e){return{icon:g.a,tooltip:d.a.t("Export"),onClick:N(e)}},E=function(e){return{icon:x.a,tooltip:d.a.t("Delete"),onClick:N(e)}},F=function(){var e=Object(b.a)().t,t=Object(z.c)(),a=Object(T.c)(),n=a.contextTypes_FindOne,l=a.contextTypes_Delete,s=Object(S.h)(),j=D(),O=function(){var e=Object(T.c)().contextTypes_Search,t=Object(L.a)(e),a=Object(k.a)(t,Object(c.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e({limit:100});case 2:return a=t.sent,t.abrupt("return",a);case 4:case"end":return t.stop()}}),t)})))),o=a.data,n=a.error,l=a.mutate,s=a.isValidating;return Object(i.useMemo)((function(){return{contextTypeInfos:null!==o&&void 0!==o?o:[],isValidating:s,error:n,mutate:l}}),[o,s,l,n])}(),m=O.contextTypeInfos,h=O.error,g=O.mutate,y=O.isValidating,x=Object(i.useCallback)(function(){var e=Object(c.a)(r.a.mark((function e(t){var a,o,c,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null!==(c=null===(a=t.target)||void 0===a||null===(o=a.files)||void 0===o?void 0:o[0])&&void 0!==c&&c.type.match(/.+\/json/)&&(n=URL.createObjectURL(c),s("import/".concat(btoa(n))));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[s]),C=Object(i.useMemo)((function(){return e=g,{icon:f.a,tooltip:d.a.t("RefreshData"),isFreeAction:!0,onClick:e};var e}),[g]),F=Object(i.useMemo)((function(){return e=function(){s("new")},{icon:p.a,tooltip:d.a.t("AddContextType"),isFreeAction:!0,onClick:e};var e}),[s]),_=Object(i.useMemo)((function(){return e=function(){},{icon:function(){return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(w.a,{}),Object(P.jsx)("input",{type:"file",title:"",accept:".context.json",className:j.fileInput,onChange:x})]})},tooltip:d.a.t("ImportContextType"),isFreeAction:!0,onClick:e};var e}),[j.fileInput,x]),H=Object(i.useMemo)((function(){return[(a=function(e){s("edit/".concat(e.name))},{icon:v.a,tooltip:d.a.t("Edit"),onClick:N(a)}),A(function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n({name:t.name});case 2:a=e.sent,Object(I.a)(Object(M.a)(a),"".concat(a.name,".context.json"));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),E(function(){var a=Object(c.a)(r.a.mark((function a(o){var c;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t({description:e("ConfirmDeleteContextType",{name:o.name})});case 2:if(!(c=a.sent)){a.next=8;break}return a.next=6,l({name:o.name});case 6:c=a.sent,g();case 8:return a.abrupt("return",c);case 9:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())];var a}),[s,g,e,t,n,l]);return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(R.a,{columns:V,data:m,title:e("ContextTypeCatalog"),actions:[F,_,C].concat(Object(o.a)(H))}),!y&&!!h&&Object(P.jsx)(u.a,{severity:"error",children:h.toString()})]})};t.default=F},547:function(e,t,a){"use strict";a.d(t,"b",(function(){return n}));var o=a(3065),c=a(3066);function n(e){return Object(o.a)("MuiChip",e)}var r=Object(c.a)("MuiChip",["root","sizeSmall","sizeMedium","colorPrimary","colorSecondary","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","focusVisible"]);t.a=r},552:function(e,t,a){"use strict";var o=a(476);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=o(a(480)),n=a(136),r=(0,c.default)((0,n.jsx)("path",{d:"M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67 2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"}),"SaveAlt");t.default=r},564:function(e,t,a){"use strict";var o=a(73),c=a(3),n=a(7),r=a(6),i=a(747),l=a(627),s=a.n(l),u=a(2225),b=a(2274),d=a(2172),j=a(2227),f=a(2275),O=a(523),p=a.n(O),m=a(677),v=a.n(m),h=a(684),g=a.n(h),y=a(711),x=a.n(y),C=a(712),w=a.n(C),S=a(710),k=a.n(S),R=a(518),T=a.n(R),I=a(536),z=a.n(I),M=a(744),L=a.n(M),P=a(699),V=a.n(P),D=a(698),N=a.n(D),A=a(743),E=a.n(A),F=a(552),_=a.n(F),H=a(703),U=a.n(H),B=a(595),J=a.n(B),K=a(19),W=a(3087),$=a(136),q=["forwardedRef"],G={Add:Object(r.forwardRef)((function(e,t){return Object($.jsx)(p.a,Object(n.a)(Object(n.a)({},e),{},{ref:t}))})),Check:Object(r.forwardRef)((function(e,t){return Object($.jsx)(g.a,Object(n.a)(Object(n.a)({},e),{},{ref:t}))})),Clear:Object(r.forwardRef)((function(e,t){return Object($.jsx)(k.a,Object(n.a)(Object(n.a)({},e),{},{ref:t}))})),Delete:Object(r.forwardRef)((function(e,t){return Object($.jsx)(T.a,Object(n.a)(Object(n.a)({},e),{},{ref:t}))})),DetailPanel:Object(r.forwardRef)((function(e,t){return Object($.jsx)(w.a,Object(n.a)(Object(n.a)({},e),{},{ref:t}))})),Edit:Object(r.forwardRef)((function(e,t){return Object($.jsx)(z.a,Object(n.a)(Object(n.a)({},e),{},{ref:t}))})),Export:Object(r.forwardRef)((function(e,t){return Object($.jsx)(_.a,Object(n.a)(Object(n.a)({},e),{},{ref:t}))})),Filter:Object(r.forwardRef)((function(e,t){return Object($.jsx)(L.a,Object(n.a)(Object(n.a)({},e),{},{ref:t}))})),FirstPage:Object(r.forwardRef)((function(e,t){return Object($.jsx)(V.a,Object(n.a)(Object(n.a)({},e),{},{ref:t}))})),LastPage:Object(r.forwardRef)((function(e,t){return Object($.jsx)(N.a,Object(n.a)(Object(n.a)({},e),{},{ref:t}))})),NextPage:Object(r.forwardRef)((function(e,t){return Object($.jsx)(w.a,Object(n.a)(Object(n.a)({},e),{},{ref:t}))})),PreviousPage:Object(r.forwardRef)((function(e,t){return Object($.jsx)(x.a,Object(n.a)(Object(n.a)({},e),{},{ref:t}))})),ResetSearch:Object(r.forwardRef)((function(e,t){return Object($.jsx)(k.a,Object(n.a)(Object(n.a)({},e),{},{ref:t}))})),Search:Object(r.forwardRef)((function(e,t){return Object($.jsx)(U.a,Object(n.a)(Object(n.a)({},e),{},{ref:t}))})),SortArrow:Object(r.forwardRef)((function(e,t){return Object($.jsx)(v.a,Object(n.a)(Object(n.a)({},e),{},{ref:t}))})),ThirdStateCheck:Object(r.forwardRef)((function(e,t){return Object($.jsx)(E.a,Object(n.a)(Object(n.a)({},e),{},{ref:t}))})),ViewColumn:Object(r.forwardRef)((function(e,t){return Object($.jsx)(J.a,Object(n.a)(Object(n.a)({},e),{},{ref:t}))}))},Q=function e(t,a){for(var o={},n=0,r=Object.entries(t);n<r.length;n++){var i=Object(c.a)(r[n],2),l=i[0],s=i[1];"object"===typeof s?(a.push(l),o[l]=e(s,a),a.pop()):o[l]=K.a.t("".concat(a.join("."),".").concat(l))}return o}({body:{emptyDataSourceMessage:"",filterRow:{filterTooltip:""},editRow:{saveTooltip:"",cancelTooltip:"",deleteText:""},addTooltip:"",deleteTooltip:"",editTooltip:""},header:{actions:""},grouping:{groupedBy:"",placeholder:""},pagination:{firstTooltip:"",firstAriaLabel:"",previousTooltip:"",previousAriaLabel:"",nextTooltip:"",nextAriaLabel:"",labelDisplayedRows:"",labelRowsPerPage:"",lastTooltip:"",lastAriaLabel:"",labelRowsSelect:""},toolbar:{addRemoveColumns:"",nRowsSelected:function(e){return""},showColumnsTitle:"",showColumnsAriaLabel:"",exportTitle:"",exportAriaLabel:"",exportCSVName:"",exportPDFName:"",searchTooltip:"",searchPlaceholder:"",searchAriaLabel:"",clearSearchAriaLabel:""}},["MaterialTable"]),X={padding:0,width:24,marginLeft:24},Y=function(e){var t=e.forwardedRef,a=Object(o.a)(e,q);return Object($.jsxs)(u.a,{error:Boolean(a.error),ref:t,component:"fieldset",children:[Object($.jsx)(b.a,{children:Object($.jsx)(f.a,{label:"",control:Object($.jsx)(d.a,Object(n.a)(Object(n.a)({},a),{},{value:String(a.value),checked:Boolean(a.value),onChange:function(e){return a.onChange(e.target.checked)},style:X,color:"default",inputProps:{"aria-label":a.columnDef.title}}))})}),Object($.jsx)(j.a,{children:a.helperText})]})},Z=function(e){return"boolean"===e.columnDef.type?Object($.jsx)(Y,Object(n.a)({},e)):Object($.jsx)(l.MTableEditField,Object(n.a)({},e))},ee={EditField:function(e){return Object($.jsx)(Z,Object(n.a)({},e))}};t.a=function(e){var t=Object(i.a)(),a=Object(r.useMemo)((function(){return e.icons?Object(n.a)(Object(n.a)({},G),e.icons):G}),[e.icons]),o=Object(r.useMemo)((function(){return e.localization?Object(n.a)(Object(n.a)({},Q),e.localization):Q}),[e.localization]),c=Object(r.useMemo)((function(){var a=function(e){return{actionsCellStyle:{color:e.palette.text.secondary},actionsColumnIndex:-1,padding:"dense",pageSize:10}}(t);return e.options&&(a=Object(W.a)(a,e.options)),a}),[t,e.options]),l=Object(r.useMemo)((function(){return e.components?Object(n.a)(Object(n.a)({},ee),e.components):ee}),[e.components]);return Object($.jsx)(s.a,Object(n.a)(Object(n.a)({},e),{},{icons:a,options:c,components:l,localization:o}))}},590:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return r}));var o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"file.json",a=JSON.stringify(e,void 0,4);c(a,t,"application/json")},c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"file.txt",a=arguments.length>2?arguments[2]:void 0,o=new Blob([e]);n(o,t,a)},n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"file.txt",a=arguments.length>2?arguments[2]:void 0;if("msSaveBlob"in navigator)navigator.msSaveBlob(e,t);else{var o=URL.createObjectURL(e),c=document.createElement("a");c.href=o,c.download=t,a&&(c.type=a),document.body.appendChild(c);try{c.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window}))}finally{document.body.removeChild(c),setTimeout((function(){return URL.revokeObjectURL(c.href)}),0)}}},r=function(e){return new Promise((function(t,a){var o=new FileReader;o.onload=function(e){var o,c=null===(o=e.target)||void 0===o?void 0:o.result;if("string"===typeof c){var n=JSON.parse(c);t(n)}a("Invalid data type in blob ".concat(typeof c))},o.onerror=function(e){a("Error reading blob")},o.readAsText(e)}))}},595:function(e,t,a){"use strict";var o=a(476);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=o(a(480)),n=a(136),r=(0,c.default)((0,n.jsx)("path",{d:"M14.67 5v14H9.33V5h5.34zm1 14H21V5h-5.33v14zm-7.34 0V5H3v14h5.33z"}),"ViewColumn");t.default=r},669:function(e,t,a){"use strict";var o=a(476);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=o(a(480)),n=a(136),r=(0,c.default)((0,n.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}),"Refresh");t.default=r},683:function(e,t,a){"use strict";var o=a(24),c=a(137),n=a(475),r=a(6),i=a(479),l=a(3064),s=a(3060),u=a(528),b=a(136),d=Object(u.a)(Object(b.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),j=a(573),f=a(500),O=a(3148),p=a(482),m=a(481),v=a(547),h=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"],g=Object(m.a)("div",{name:"MuiChip",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState,c=a.color,n=a.clickable,r=a.onDelete,i=a.size,l=a.variant;return[Object(o.a)({},"& .".concat(v.a.avatar),t.avatar),Object(o.a)({},"& .".concat(v.a.avatar),t["avatar".concat(Object(f.a)(i))]),Object(o.a)({},"& .".concat(v.a.avatar),t["avatarColor".concat(Object(f.a)(c))]),Object(o.a)({},"& .".concat(v.a.icon),t.icon),Object(o.a)({},"& .".concat(v.a.icon),t["icon".concat(Object(f.a)(i))]),Object(o.a)({},"& .".concat(v.a.icon),t["iconColor".concat(Object(f.a)(c))]),Object(o.a)({},"& .".concat(v.a.deleteIcon),t.deleteIcon),Object(o.a)({},"& .".concat(v.a.deleteIcon),t["deleteIcon".concat(Object(f.a)(i))]),Object(o.a)({},"& .".concat(v.a.deleteIcon),t["deleteIconColor".concat(Object(f.a)(c))]),Object(o.a)({},"& .".concat(v.a.deleteIcon),t["deleteIconOutlinedColor".concat(Object(f.a)(c))]),t.root,t["size".concat(Object(f.a)(i))],t["color".concat(Object(f.a)(c))],n&&t.clickable,n&&"default"!==c&&t["clickableColor".concat(Object(f.a)(c),")")],r&&t.deletable,r&&"default"!==c&&t["deletableColor".concat(Object(f.a)(c))],t[l],"outlined"===l&&t["outlined".concat(Object(f.a)(c))]]}})((function(e){var t,a=e.theme,c=e.ownerState,r=Object(s.a)(a.palette.text.primary,.26);return Object(n.a)((t={fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:a.palette.text.primary,backgroundColor:a.palette.action.selected,borderRadius:16,whiteSpace:"nowrap",transition:a.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box"},Object(o.a)(t,"&.".concat(v.a.disabled),{opacity:a.palette.action.disabledOpacity,pointerEvents:"none"}),Object(o.a)(t,"& .".concat(v.a.avatar),{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===a.palette.mode?a.palette.grey[700]:a.palette.grey[300],fontSize:a.typography.pxToRem(12)}),Object(o.a)(t,"& .".concat(v.a.avatarColorPrimary),{color:a.palette.primary.contrastText,backgroundColor:a.palette.primary.dark}),Object(o.a)(t,"& .".concat(v.a.avatarColorSecondary),{color:a.palette.secondary.contrastText,backgroundColor:a.palette.secondary.dark}),Object(o.a)(t,"& .".concat(v.a.avatarSmall),{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:a.typography.pxToRem(10)}),Object(o.a)(t,"& .".concat(v.a.icon),Object(n.a)({color:"light"===a.palette.mode?a.palette.grey[700]:a.palette.grey[300],marginLeft:5,marginRight:-6},"small"===c.size&&{fontSize:18,marginLeft:4,marginRight:-4},"default"!==c.color&&{color:"inherit"})),Object(o.a)(t,"& .".concat(v.a.deleteIcon),Object(n.a)({WebkitTapHighlightColor:"transparent",color:r,fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(s.a)(r,.4)}},"small"===c.size&&{fontSize:16,marginRight:4,marginLeft:-4},"default"!==c.color&&{color:Object(s.a)(a.palette[c.color].contrastText,.7),"&:hover, &:active":{color:a.palette[c.color].contrastText}})),t),"small"===c.size&&{height:24},"default"!==c.color&&{backgroundColor:a.palette[c.color].main,color:a.palette[c.color].contrastText},c.onDelete&&Object(o.a)({},"&.".concat(v.a.focusVisible),{backgroundColor:Object(s.a)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}),c.onDelete&&"default"!==c.color&&Object(o.a)({},"&.".concat(v.a.focusVisible),{backgroundColor:a.palette[c.color].dark}))}),(function(e){var t,a=e.theme,c=e.ownerState;return Object(n.a)({},c.clickable&&(t={userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:Object(s.a)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)}},Object(o.a)(t,"&.".concat(v.a.focusVisible),{backgroundColor:Object(s.a)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}),Object(o.a)(t,"&:active",{boxShadow:a.shadows[1]}),t),c.clickable&&"default"!==c.color&&Object(o.a)({},"&:hover, &.".concat(v.a.focusVisible),{backgroundColor:a.palette[c.color].dark}))}),(function(e){var t,a,c=e.theme,r=e.ownerState;return Object(n.a)({},"outlined"===r.variant&&(t={backgroundColor:"transparent",border:"1px solid ".concat("light"===c.palette.mode?c.palette.grey[400]:c.palette.grey[700])},Object(o.a)(t,"&.".concat(v.a.clickable,":hover"),{backgroundColor:c.palette.action.hover}),Object(o.a)(t,"&.".concat(v.a.focusVisible),{backgroundColor:c.palette.action.focus}),Object(o.a)(t,"& .".concat(v.a.avatar),{marginLeft:4}),Object(o.a)(t,"& .".concat(v.a.avatarSmall),{marginLeft:2}),Object(o.a)(t,"& .".concat(v.a.icon),{marginLeft:4}),Object(o.a)(t,"& .".concat(v.a.iconSmall),{marginLeft:2}),Object(o.a)(t,"& .".concat(v.a.deleteIcon),{marginRight:5}),Object(o.a)(t,"& .".concat(v.a.deleteIconSmall),{marginRight:3}),t),"outlined"===r.variant&&"default"!==r.color&&(a={color:c.palette[r.color].main,border:"1px solid ".concat(Object(s.a)(c.palette[r.color].main,.7))},Object(o.a)(a,"&.".concat(v.a.clickable,":hover"),{backgroundColor:Object(s.a)(c.palette[r.color].main,c.palette.action.hoverOpacity)}),Object(o.a)(a,"&.".concat(v.a.focusVisible),{backgroundColor:Object(s.a)(c.palette[r.color].main,c.palette.action.focusOpacity)}),Object(o.a)(a,"& .".concat(v.a.deleteIcon),{color:Object(s.a)(c.palette[r.color].main,.7),"&:hover, &:active":{color:c.palette[r.color].main}}),a))})),y=Object(m.a)("span",{name:"MuiChip",slot:"Label",overridesResolver:function(e,t){var a=e.ownerState.size;return[t.label,t["label".concat(Object(f.a)(a))]]}})((function(e){var t=e.ownerState;return Object(n.a)({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},"small"===t.size&&{paddingLeft:8,paddingRight:8})}));function x(e){return"Backspace"===e.key||"Delete"===e.key}var C=r.forwardRef((function(e,t){var a=Object(p.a)({props:e,name:"MuiChip"}),o=a.avatar,s=a.className,u=a.clickable,m=a.color,C=void 0===m?"default":m,w=a.component,S=a.deleteIcon,k=a.disabled,R=void 0!==k&&k,T=a.icon,I=a.label,z=a.onClick,M=a.onDelete,L=a.onKeyDown,P=a.onKeyUp,V=a.size,D=void 0===V?"medium":V,N=a.variant,A=void 0===N?"filled":N,E=Object(c.a)(a,h),F=r.useRef(null),_=Object(j.a)(F,t),H=function(e){e.stopPropagation(),M&&M(e)},U=!(!1===u||!z)||u,B="small"===D,J=U||M?O.a:w||"div",K=Object(n.a)({},a,{component:J,disabled:R,size:D,color:C,onDelete:!!M,clickable:U,variant:A}),W=function(e){var t=e.classes,a=e.disabled,o=e.size,c=e.color,n=e.onDelete,r=e.clickable,i=e.variant,s={root:["root",i,a&&"disabled","size".concat(Object(f.a)(o)),"color".concat(Object(f.a)(c)),r&&"clickable",r&&"clickableColor".concat(Object(f.a)(c)),n&&"deletable",n&&"deletableColor".concat(Object(f.a)(c)),"".concat(i).concat(Object(f.a)(c))],label:["label","label".concat(Object(f.a)(o))],avatar:["avatar","avatar".concat(Object(f.a)(o)),"avatarColor".concat(Object(f.a)(c))],icon:["icon","icon".concat(Object(f.a)(o)),"iconColor".concat(Object(f.a)(c))],deleteIcon:["deleteIcon","deleteIcon".concat(Object(f.a)(o)),"deleteIconColor".concat(Object(f.a)(c)),"deleteIconOutlinedColor".concat(Object(f.a)(c))]};return Object(l.a)(s,v.b,t)}(K),$=J===O.a?Object(n.a)({component:w||"div",focusVisibleClassName:W.focusVisible},M&&{disableRipple:!0}):{},q=null;if(M){var G=Object(i.default)("default"!==C&&("outlined"===A?W["deleteIconOutlinedColor".concat(Object(f.a)(C))]:W["deleteIconColor".concat(Object(f.a)(C))]),B&&W.deleteIconSmall);q=S&&r.isValidElement(S)?r.cloneElement(S,{className:Object(i.default)(S.props.className,W.deleteIcon,G),onClick:H}):Object(b.jsx)(d,{className:Object(i.default)(W.deleteIcon,G),onClick:H})}var Q=null;o&&r.isValidElement(o)&&(Q=r.cloneElement(o,{className:Object(i.default)(W.avatar,o.props.className)}));var X=null;return T&&r.isValidElement(T)&&(X=r.cloneElement(T,{className:Object(i.default)(W.icon,T.props.className)})),Object(b.jsxs)(g,Object(n.a)({as:J,className:Object(i.default)(W.root,s),disabled:!(!U||!R)||void 0,onClick:z,onKeyDown:function(e){e.currentTarget===e.target&&x(e)&&e.preventDefault(),L&&L(e)},onKeyUp:function(e){e.currentTarget===e.target&&(M&&x(e)?M(e):"Escape"===e.key&&F.current&&F.current.blur()),P&&P(e)},ref:_,ownerState:K},$,E,{children:[Q||X,Object(b.jsx)(y,{className:Object(i.default)(W.label),ownerState:K,children:I}),q]}))}));t.a=C},968:function(e,t,a){"use strict";var o=a(476);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=o(a(480)),n=a(136),r=(0,c.default)((0,n.jsx)("path",{d:"M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6-4 4h3v6h2v-6h3l-4-4z"}),"OpenInBrowser");t.default=r}}]);
//# sourceMappingURL=68.f53b3df3.chunk.js.map