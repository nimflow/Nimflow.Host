(this["webpackJsonpnimflow-studio"]=this["webpackJsonpnimflow-studio"]||[]).push([[56],{1068:function(e,t,n){"use strict";n.d(t,"b",(function(){return L})),n.d(t,"a",(function(){return Y}));var r=n(68),a=n(1),c=n(4),i=n.n(c),o=n(21),s=n(9),u=n(2261),l=n(2255),d=n(3309),b=n(3325),f=n(3315),j=n(3314),p=n(2281),h=n(3397),m=n(574),O=n(589),v=n(2280),g=n(6),x=n(427),C=n(1235),k=n(515),w=n(49),y=n(505),S=n(130),N=n(73),M=n(570),R=n(554),W=n(508),D=n(590),P=n(538),E=n(129),J=Object(u.a)((function(e){return Object(l.a)({dialogPaper:{height:"90vh"},dialogContent:{display:"grid",gridTemplateColumns:"auto",gridTemplateRows:"auto",rowGap:"5px",height:"100%",overflowY:"hidden"},editorContainer:{gridColumn:"1 / 2",gridRow:"1 / 99",alignSelf:"stretch"},errorContainer:{gridColumn:"1 / 2",gridRow:"99 / 100",overflowY:"auto"}})})),L=function(e){var t=Object(D.a)().getModules,n=Object(P.a)(t),r=Object(y.a)(n,Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(!0);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),{revalidateOnFocus:!1}).data;return Object(s.useMemo)((function(){if(!r&&!e)return N;var t=Object(x.a)(N);e&&(t.definitions.UseElement.properties.name.enum=Object.keys(e));if(r){var n={properties:{moduleName:{enum:r.map((function(e){return e.name})).filter(w.isPresent)}},allOf:r.map((function(e){var t,n;return{if:{properties:{moduleName:{const:e.name}},required:["moduleName"]},then:{properties:{functionName:{enum:null!==(t=null===(n=e.functions)||void 0===n?void 0:n.map((function(e){return e.name})).filter(w.isPresent))&&void 0!==t?t:[]}},required:["moduleName","functionName"]}}}))},a=t.definitions.OptionsSource;a.properties=n.properties,a.allOf=n.allOf;var c=t.definitions.DocumentSchemasSource;c.properties=n.properties,c.allOf=n.allOf}return t}),[r,e])},T=function(e){e.focus()},U=g.m().uiSchema(R.k),Y=function(e){var t=e.open,n=e.defaultValue,c=e.jsonSchema,u=e.uiSchemaLibrary,l=e.onChange,g=e.onClose,x=Object(h.a)().t,w=Object(O.a)(),y=J(),N=Object(M.a)(),D=Object(s.useState)(),P=Object(a.a)(D,2),Y=P[0],A=P[1],$=Object(s.useRef)(),q=L(u),G=Object(s.useMemo)((function(){return n?n.includes("\n")?n:JSON.stringify(JSON.parse(n),void 0,2):""}),[n]),V=Object(s.useState)(G),B=Object(a.a)(V,2),F=B[0],_=B[1];Object(s.useEffect)((function(){var e=$.current;e&&q&&function(e,t){t.languages.json.jsonDefaults.setDiagnosticsOptions({validate:!0,schemas:[{uri:e.$id,fileMatch:["inmemory://model/*"],schema:e}]})}(q,e)}),[q]);var z=Object(s.useCallback)(Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==F.trim().length){e.next=4;break}return null===l||void 0===l||l(void 0),g(),e.abrupt("return");case 4:return e.t0=C.a,e.next=7,Object(S.b)(U,F,{context:Object(r.a)({},R.k,c)});case 7:if(e.t1=e.sent,!(t=(0,e.t0)(e.t1))){e.next=12;break}return A(t.message),e.abrupt("return");case 12:null===l||void 0===l||l(F),g();case 14:case"end":return e.stop()}}),e)}))),[F,l,g,c]),H=Object(s.useCallback)(Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=G!==F,!e.t0){e.next=5;break}return e.next=4,N();case 4:e.t0=!e.sent;case 5:if(!e.t0){e.next=7;break}return e.abrupt("return");case 7:g();case 8:case"end":return e.stop()}}),e)}))),[F,G,N,g]),I=Object(s.useCallback)(function(){var e=Object(o.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=G!==F,!e.t0){e.next=5;break}return e.next=4,N();case 4:e.t0=!e.sent;case 5:if(!e.t0){e.next=7;break}return e.abrupt("return");case 7:"backdropClick"!==n&&(null===g||void 0===g||g());case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[F,G,N,g]),K=Object(s.useCallback)((function(e){$.current=e}),[]);return Object(E.jsxs)(d.a,{open:t,onClose:I,maxWidth:"xl",fullWidth:!0,classes:{paper:y.dialogPaper},children:[Object(E.jsx)(j.a,{children:x("EditingUiSchema")}),Object(E.jsxs)(f.a,{className:y.dialogContent,children:[Object(E.jsx)("div",{className:y.editorContainer,children:Object(E.jsx)(k.a,{children:function(e){var t=e.height,n=e.width;return Object(E.jsx)(m.a,{width:n,height:t-50,language:"json",theme:"light"===w.palette.type?"vs-light":"vs-dark",value:F,options:W.a,onChange:_,editorWillMount:K,editorDidMount:T})}})}),Object(E.jsx)("div",{className:y.errorContainer,children:Object(E.jsx)(v.a,{component:"span",error:!0,children:Y})})]}),Object(E.jsxs)(b.a,{children:[Object(E.jsx)(p.a,{onClick:z,color:"primary",children:x("Accept")}),Object(E.jsx)(p.a,{onClick:H,color:"primary",children:x("Cancel")})]})]})}},1235:function(e,t,n){"use strict";var r=n(1090),a=Object(r.a)(0);t.a=a},3376:function(e,t,n){"use strict";n.r(t),n.d(t,"UiSchemaLibraryEditorModal",(function(){return J}));var r=n(4),a=n.n(r),c=n(68),i=n(21),o=n(1),s=n(0),u=n(9),l=n(2261),d=n(2255),b=n(3309),f=n(3325),j=n(3315),p=n(3314),h=n(2281),m=n(3397),O=n(574),v=n(589),g=n(2280),x=n(6),C=n(1235),k=n(515),w=n(130),y=n(76),S=n(570),N=n(554),M=n(508),R=n(1068),W=n(129),D=Object(l.a)((function(e){return Object(d.a)({dialogPaper:{height:"90vh"},dialogContent:{display:"grid",gridTemplateColumns:"auto",gridTemplateRows:"auto",rowGap:"5px",height:"100%",overflowY:"hidden"},editorContainer:{gridColumn:"1 / 2",gridRow:"1 / 99",alignSelf:"stretch"},errorContainer:{gridColumn:"1 / 2",gridRow:"99 / 100",overflowY:"auto"}})})),P=function(e){e.focus()},E=x.m().uiSchema(N.k),J=function(e){var t=e.open,n=e.defaultValue,r=e.jsonSchema,l=e.onChange,d=e.onClose,x=Object(m.a)().t,J=Object(v.a)(),L=D(),T=Object(S.a)(),U=Object(u.useState)(),Y=Object(o.a)(U,2),A=Y[0],$=Y[1],q=Object(u.useRef)(),G=Object(R.b)(),V=Object(u.useMemo)((function(){return n?n.includes("\n")?n:JSON.stringify(JSON.parse(n),void 0,2):""}),[n]),B=Object(u.useState)(V),F=Object(o.a)(B,2),_=F[0],z=F[1];Object(u.useEffect)((function(){var e=q.current;e&&G&&function(e,t){t.languages.json.jsonDefaults.setDiagnosticsOptions({validate:!0,schemas:[{uri:e.$id,fileMatch:["inmemory://model/*"],schema:e},{uri:y.$id,fileMatch:["inmemory://model/*"],schema:y}]});var n,r=Object(s.a)(t.editor.getModels());try{for(r.s();!(n=r.n()).done;){var a=n.value;console.log(a)}}catch(c){r.e(c)}finally{r.f()}}(G,e)}),[G]);var H=Object(u.useCallback)(Object(i.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==_.trim().length){e.next=4;break}return null===l||void 0===l||l(void 0),d(),e.abrupt("return");case 4:return e.t0=C.a,e.next=7,Object(w.b)(E,_,{context:Object(c.a)({},N.k,r)});case 7:if(e.t1=e.sent,!(t=(0,e.t0)(e.t1))){e.next=12;break}return $(t.message),e.abrupt("return");case 12:null===l||void 0===l||l(_),d();case 14:case"end":return e.stop()}}),e)}))),[_,l,d,r]),I=Object(u.useCallback)(Object(i.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=V!==_,!e.t0){e.next=5;break}return e.next=4,T();case 4:e.t0=!e.sent;case 5:if(!e.t0){e.next=7;break}return e.abrupt("return");case 7:d();case 8:case"end":return e.stop()}}),e)}))),[_,V,T,d]),K=Object(u.useCallback)(function(){var e=Object(i.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=V!==_,!e.t0){e.next=5;break}return e.next=4,T();case 4:e.t0=!e.sent;case 5:if(!e.t0){e.next=7;break}return e.abrupt("return");case 7:"backdropClick"!==n&&(null===d||void 0===d||d());case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[_,V,T,d]),Q=Object(u.useCallback)((function(e){q.current=e}),[]);return Object(W.jsxs)(b.a,{open:t,onClose:K,maxWidth:"xl",fullWidth:!0,classes:{paper:L.dialogPaper},children:[Object(W.jsx)(p.a,{children:x("EditingUiSchemaLibrary")}),Object(W.jsxs)(j.a,{className:L.dialogContent,children:[Object(W.jsx)("div",{className:L.editorContainer,children:Object(W.jsx)(k.a,{children:function(e){var t=e.height,n=e.width;return Object(W.jsx)(O.a,{width:n,height:t-50,language:"json",theme:"light"===J.palette.type?"vs-light":"vs-dark",value:_,options:M.a,onChange:z,editorWillMount:Q,editorDidMount:P})}})}),Object(W.jsx)("div",{className:L.errorContainer,children:Object(W.jsx)(g.a,{component:"span",error:!0,children:A})})]}),Object(W.jsxs)(f.a,{children:[Object(W.jsx)(h.a,{onClick:H,color:"primary",children:x("Accept")}),Object(W.jsx)(h.a,{onClick:I,color:"primary",children:x("Cancel")})]})]})};t.default=J},508:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={selectOnLineNumbers:!0,automaticLayout:!0,minimap:{enabled:!1},fixedOverflowWidgets:!0}},570:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(3),a=n(3397),c=n(9),i=n(483),o=function(){var e=Object(a.a)().t,t=Object(i.c)();return Object(c.useCallback)((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(r.a)({title:e("ThereArePendingChanges"),description:e("ChangesWillBeLost_Continue")},n);return t(a)}),[t,e])}}}]);
//# sourceMappingURL=56.994a3170.chunk.js.map