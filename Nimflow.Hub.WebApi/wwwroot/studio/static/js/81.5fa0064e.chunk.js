(this["webpackJsonpnimflow-studio"]=this["webpackJsonpnimflow-studio"]||[]).push([[81],{1858:function(e,t,n){"use strict";n.d(t,"b",(function(){return O})),n.d(t,"a",(function(){return g}));var r=n(485),a=n(484),i=n.n(a),c=n(5),o=n(781),u=n(688),s=n(597),l=n(591),d=n(14),f=n(38),b=n(639),h=n(74),j=n(695),p=n(642),m=n(128),O=function(e){var t=Object(j.b)().getModules,n=Object(p.a)(t),a=Object(l.a)(n,Object(r.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(!0);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),{revalidateOnFocus:!1}).data,o=Object(c.useMemo)((function(){return function(e,t){if(!e&&!t)return h;var n=Object(d.c)(h);if(t&&(n.definitions.UseElement.properties.name.enum=Object.keys(t)),e){var r={properties:{moduleName:{enum:e.map((function(e){return e.name})).filter(f.isPresent)}},allOf:e.map((function(e){var t,n;return{if:{properties:{moduleName:{const:e.name}},required:["moduleName"]},then:{properties:{functionName:{enum:null!==(t=null===(n=e.functions)||void 0===n?void 0:n.map((function(e){return e.name})).filter(f.isPresent))&&void 0!==t?t:[]}},required:["moduleName","functionName"]}}}))},a=n.definitions.OptionsSource;a.properties=r.properties,a.allOf=r.allOf;var i=n.definitions.DocumentSchemasSource;i.properties=r.properties,i.allOf=r.allOf;var c=n.definitions.OcrFunction;c.properties=r.properties,c.allOf=r.allOf}return n}(a,e)}),[a,e]);return o},v=function(e){e.focus()},g=function(e){var t=e.value,n=e.onChange,r=e.height,a=e.width,i=e.uiSchemaLibrary,l=Object(o.a)(),d=Object(c.useRef)(),f=O(i);Object(c.useEffect)((function(){var e=d.current;e&&f&&function(e,t){t.languages.json.jsonDefaults.setDiagnosticsOptions({validate:!0,schemas:[{uri:e.$id,fileMatch:["inmemory://model/*"],schema:e}]})}(f,e)}),[f]);var h=Object(c.useCallback)((function(e){d.current=e}),[]),j=Object(c.useMemo)((function(){return{width:null!==a&&void 0!==a?a:"100%",height:null!==r&&void 0!==r?r:"100%"}}),[r,a]);return Object(m.jsx)("div",{style:j,children:Object(m.jsx)(s.a,{children:function(e){var r=e.height,a=e.width;return Object(m.jsx)(u.b,{width:a,height:r,language:"json",theme:"light"===l.palette.mode?"vs-light":"vs-dark",value:t,options:b.a,onChange:n,editorWillMount:h,editorDidMount:v})}})})}},2973:function(e,t,n){"use strict";n.r(t),n.d(t,"UiSchemaLibraryEditorModal",(function(){return q}));var r=n(130),a=n(485),i=n(464),c=n(49),o=n(484),u=n.n(o),s=n(5),l=n(480),d=n(2986),f=n(2618),b=n(2923),h=n(3018),j=n(3017),p=n(2929),m=n(2550),O=n(3006),v=n(688),g=n(781),x=n(2425),k=n(9),w=n(14),C=n(597),y=n(132),M=n(76),S=n(907),N=n(924),D=n(639),E=n(1858),R=n(128),J=Object(d.a)((function(e){return Object(f.a)({dialogPaper:{height:"90vh"}})})),P=Object(l.a)(j.a)({display:"grid",gridTemplateColumns:"auto",gridTemplateRows:"auto",rowGap:"5px",height:"100%",overflowY:"hidden"}),W=Object(l.a)("div")({gridColumn:"1 / 2",gridRow:"1 / 99",alignSelf:"stretch"}),L=Object(l.a)("div")({gridColumn:"1 / 2",gridRow:"99 / 100",overflowY:"auto"}),U=function(e){e.focus()},$=k.m().uiSchema(N.m),q=function(e){var t=e.open,n=e.defaultValue,o=e.jsonSchema,l=e.onChange,d=e.onClose,f=Object(O.a)().t,j=Object(g.a)(),k=J(),q=Object(S.a)(),F=Object(s.useState)(),T=Object(i.a)(F,2),Y=T[0],A=T[1],G=Object(s.useRef)(),V=Object(E.b)(),z=Object(s.useMemo)((function(){return n?n.includes("\n")?n:JSON.stringify(JSON.parse(n),void 0,2):""}),[n]),B=Object(s.useState)(z),H=Object(i.a)(B,2),I=H[0],K=H[1];Object(s.useEffect)((function(){var e=G.current;e&&V&&function(e,t){t.languages.json.jsonDefaults.setDiagnosticsOptions({validate:!0,schemas:[{uri:e.$id,fileMatch:["inmemory://model/*"],schema:e},{uri:M.$id,fileMatch:["inmemory://model/*"],schema:M}]});var n,r=Object(c.a)(t.editor.getModels());try{for(r.s();!(n=r.n()).done;){var a=n.value;console.log(a)}}catch(i){r.e(i)}finally{r.f()}}(V,e)}),[V]);var Q=Object(s.useCallback)(Object(a.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==I.trim().length){e.next=4;break}return null===l||void 0===l||l(void 0),d(),e.abrupt("return");case 4:return e.t0=w.k,e.next=7,Object(y.b)($,I,{context:Object(r.a)({},N.m,o)});case 7:if(e.t1=e.sent,!(t=(0,e.t0)(e.t1))){e.next=12;break}return A(t.message),e.abrupt("return");case 12:null===l||void 0===l||l(I),d();case 14:case"end":return e.stop()}}),e)}))),[I,l,d,o]),X=Object(s.useCallback)(Object(a.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=z!==I,!e.t0){e.next=5;break}return e.next=4,q();case 4:e.t0=!e.sent;case 5:if(!e.t0){e.next=7;break}return e.abrupt("return");case 7:d();case 8:case"end":return e.stop()}}),e)}))),[I,z,q,d]),Z=Object(s.useCallback)(function(){var e=Object(a.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=z!==I,!e.t0){e.next=5;break}return e.next=4,q();case 4:e.t0=!e.sent;case 5:if(!e.t0){e.next=7;break}return e.abrupt("return");case 7:"backdropClick"!==n&&(null===d||void 0===d||d());case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[I,z,q,d]),_=Object(s.useCallback)((function(e){G.current=e}),[]);return Object(R.jsxs)(b.a,{open:t,onClose:Z,maxWidth:"xl",fullWidth:!0,classes:{paper:k.dialogPaper},children:[Object(R.jsx)(p.a,{children:f("EditingUiSchemaLibrary")}),Object(R.jsxs)(P,{children:[Object(R.jsx)(W,{children:Object(R.jsx)(C.a,{children:function(e){var t=e.height,n=e.width;return Object(R.jsx)(v.b,{width:n,height:t-50,language:"json",theme:"light"===j.palette.mode?"vs-light":"vs-dark",value:I,options:D.a,onChange:K,editorWillMount:_,editorDidMount:U})}})}),Object(R.jsx)(L,{children:Object(R.jsx)(x.a,{component:"span",error:!0,children:Y})})]}),Object(R.jsxs)(h.a,{children:[Object(R.jsx)(m.a,{onClick:Q,color:"primary",children:f("Accept")}),Object(R.jsx)(m.a,{onClick:X,color:"primary",children:f("Cancel")})]})]})};t.default=q}}]);
//# sourceMappingURL=81.5fa0064e.chunk.js.map