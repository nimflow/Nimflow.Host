(this["webpackJsonpnimflow-studio"]=this["webpackJsonpnimflow-studio"]||[]).push([[58],{2139:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(4),a=n.n(r),c=n(68),i=n(0),o=n(21),s=n(427),u=n(61),l=n(556),h=n(29),d=n(130),b=function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r,o,b,j,f,m,p,O,g,v,x,C,w,y;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(delete t.jsInitializers,o=Object(h.e)(t),!Object(h.b)(o)){e.next=4;break}return e.abrupt("return",Object(u.a)(Object(u.c)(o.errors)));case 4:delete(b=Object(s.a)(t)).$schema,"object"===typeof b.jsonSchema&&(b.jsonSchema=JSON.stringify(b.jsonSchema,void 0,2)),"object"===typeof(null===(n=b.settings)||void 0===n?void 0:n.uiSchemaCommon)&&(b.settings.uiSchemaCommon=JSON.stringify(b.settings.uiSchemaCommon,void 0,2)),j=Object(i.a)(b.actions);try{for(j.s();!(f=j.n()).done;)m=f.value,p=m.settings,"object"===typeof(O=null===p||void 0===p?void 0:p.uiSchema)&&(p.uiSchema=JSON.stringify(O,void 0,2))}catch(a){j.e(a)}finally{j.f()}g=Object(i.a)(b.tasks.flatMap((function(e){return e.validResponses})));try{for(g.s();!(v=g.n()).done;)x=v.value,C=x.settings,"object"===typeof(w=null===C||void 0===C?void 0:C.uiSchema)&&(C.uiSchema=JSON.stringify(w,void 0,2))}catch(a){g.e(a)}finally{g.f()}return e.next=14,Object(d.b)(l.c,b,{context:(r={},Object(c.a)(r,l.j,b.jsCommon),Object(c.a)(r,l.k,b.jsonSchema),r)});case 14:if(!((y=e.sent).length>0)){e.next=17;break}return e.abrupt("return",Object(u.a)(y));case 17:return e.abrupt("return",Object(u.b)(b));case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},3388:function(e,t,n){"use strict";n.r(t),n.d(t,"ContextTypeJsonEditorModal",(function(){return W}));var r=n(4),a=n.n(r),c=n(21),i=n(1),o=n(9),s=n(2275),u=n(2269),l=n(590),h=n(3320),d=n(3336),b=n(3326),j=n(3325),f=n(2295),m=n(3408),p=n(574),O=n(2294),g=n(515),v=n(508),x=n(570),C=n(2139),w=n(1996),y=n(77),k=n(73),S=n(76),N=n(129),J=Object(s.a)((function(e){return Object(u.a)({dialogPaper:{height:"90vh"},dialogContent:{display:"grid",gridTemplateColumns:"auto",gridTemplateRows:function(e){return e.showErrors?"auto ".concat(100,"px"):"auto"},rowGap:"5px",placeItems:"stretch",height:"100%",overflowY:"hidden"},editorContainer:{gridColumn:"1 / 2",gridRow:"1 / 2"},errorContainer:{gridColumn:"1 / 2",gridRow:"2 / 3",overflowY:"auto"}})})),M=function(e){e.languages.json.jsonDefaults.setDiagnosticsOptions({validate:!0,schemas:[{uri:"http://nimflow.com/schemas/ui-schema.schema.json",schema:k},{uri:"http://nimflow.com/schemas/ui-schema-library.schema.json",schema:S},{uri:"http://nimflow.com/schemas/context-type.schema.json",fileMatch:["inmemory://model/*"],schema:y}]});return{selectOnLineNumbers:!0,minimap:{enabled:!1}}},T=function(e){e.focus()},W=function(e){var t=e.open,n=e.defaultValue,r=e.onChange,s=e.onClose,u=Object(m.a)().t,y=Object(l.a)(),k=Object(x.a)(),S=Object(o.useState)([]),W=Object(i.a)(S,2),E=W[0],L=W[1],R=J({showErrors:E.length>0}),D=Object(o.useMemo)((function(){var e=Object(w.a)(n);return JSON.stringify(e,void 0,4)}),[n]),P=Object(o.useState)(D),A=Object(i.a)(P,2),I=A[0],Y=A[1],z=Object(o.useCallback)(Object(c.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(E.length>0)){e.next=2;break}return e.abrupt("return");case 2:return t=JSON.parse(I),e.next=5,Object(C.a)(t);case 5:"success"===(n=e.sent).type?(null===r||void 0===r||r(n.result),s()):L(n.errors.map((function(e){return e.message})));case 7:case"end":return e.stop()}}),e)}))),[I,E.length,r,s]),B=Object(o.useCallback)(Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=D!==I,!e.t0){e.next=5;break}return e.next=4,k();case 4:e.t0=!e.sent;case 5:if(!e.t0){e.next=7;break}return e.abrupt("return");case 7:s();case 8:case"end":return e.stop()}}),e)}))),[I,D,k,s]),G=Object(o.useCallback)(function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=D!==I,!e.t0){e.next=5;break}return e.next=4,k();case 4:e.t0=!e.sent;case 5:if(!e.t0){e.next=7;break}return e.abrupt("return");case 7:"backdropClick"!==n&&(null===s||void 0===s||s());case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[I,D,k,s]);return Object(N.jsxs)(h.a,{open:t,onClose:G,maxWidth:"xl",fullWidth:!0,classes:{paper:R.dialogPaper},children:[Object(N.jsx)(j.a,{children:u("EditingContextType")}),Object(N.jsxs)(b.a,{className:R.dialogContent,children:[Object(N.jsx)("div",{className:R.editorContainer,children:Object(N.jsx)(g.a,{children:function(e){var t=e.height,n=e.width;return Object(N.jsx)(p.a,{width:n,height:t,language:"json",theme:"light"===y.palette.type?"vs-light":"vs-dark",value:I,options:v.a,onChange:Y,editorWillMount:M,editorDidMount:T})}})}),E.length>0&&Object(N.jsx)("div",{className:R.errorContainer,children:Object(N.jsx)(O.a,{component:"span",error:!0,children:E.map((function(e,t){return Object(N.jsx)("p",{children:e},t)}))})})]}),Object(N.jsxs)(d.a,{children:[Object(N.jsx)(f.a,{onClick:z,color:"primary",children:u("Accept")}),Object(N.jsx)(f.a,{onClick:B,color:"primary",children:u("Cancel")})]})]})};t.default=W},508:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={selectOnLineNumbers:!0,automaticLayout:!0,minimap:{enabled:!1},fixedOverflowWidgets:!0}},570:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(3),a=n(3408),c=n(9),i=n(484),o=function(){var e=Object(a.a)().t,t=Object(i.c)();return Object(c.useCallback)((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(r.a)({title:e("ThereArePendingChanges"),description:e("ChangesWillBeLost_Continue")},n);return t(a)}),[t,e])}}}]);
//# sourceMappingURL=58.8ad19a97.chunk.js.map