(this["webpackJsonpnimflow-studio"]=this["webpackJsonpnimflow-studio"]||[]).push([[60],{508:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={selectOnLineNumbers:!0,automaticLayout:!0,minimap:{enabled:!1},fixedOverflowWidgets:!0}},570:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(3),r=n(3408),c=n(9),i=n(484),o=function(){var e=Object(r.a)().t,t=Object(i.c)();return Object(c.useCallback)((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object(a.a)({title:e("ThereArePendingChanges"),description:e("ChangesWillBeLost_Continue")},n);return t(r)}),[t,e])}},896:function(e,t,n){"use strict";n.r(t),n.d(t,"JsonSchemaEditorModal",(function(){return Y}));var a=n(4),r=n.n(a),c=n(21),i=n(1),o=n(14),s=n(9),u=n(2275),l=n(2269),d=n(590),h=n(3320),b=n(3336),j=n(3326),p=n(3325),f=n(2295),m=n(3408),O=n(574),g=n(2294),v=n(6),x=n(515),C=n(130),w=n(570),k=n(508),y=n(619),S=n(77),J=n(79),N=n(73),M=n(76),W=n(80),E=n(81),R=n(82),D=n(129),L=Object(u.a)((function(e){return Object(l.a)({dialogPaper:{height:"80vh"},dialogContent:{display:"grid",gridTemplateColumns:"auto",gridTemplateRows:function(e){return e.showErrors?"auto ".concat(100,"px"):"auto"},rowGap:"5px",placeItems:"stretch",height:"100%",overflowY:"hidden"},editorContainer:{gridColumn:"1 / 2",gridRow:"1 / 2"},errorContainer:{gridColumn:"1 / 2",gridRow:"2 / 3",overflowY:"auto"}})})),P=function(e){e.focus()},T=v.m().jsonSchema(),A=function(e){return Object(C.b)(T,e)},Y=function(e){var t=e.open,n=e.defaultValue,a=e.onChange,u=e.onClose,l=e.title,v=e.extraJsonSchemas,C=e.validator,T=Object(m.a)().t,Y=Object(d.a)(),$=Object(w.a)(),q=Object(s.useState)([]),B=Object(i.a)(q,2),G=B[0],I=B[1],V=L({showErrors:G.length>0}),_=Object(s.useMemo)((function(){return n?n.includes("\n")?n:JSON.stringify(JSON.parse(n),void 0,2):'{\n    "type": "object",\n    "definitions": {\n\n    }\n}'}),[n]),z=Object(s.useState)(_),F=Object(i.a)(z,2),H=F[0],K=F[1],Q=Object(s.useCallback)(Object(c.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=null!==C&&void 0!==C?C:A,e.next=3,t(H);case 3:(n=e.sent).length>0?I(n.map((function(e){return e.message}))):(null===a||void 0===a||a(H),u());case 5:case"end":return e.stop()}}),e)}))),[H,a,u,C]),U=Object(s.useCallback)(Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=_!==H,!e.t0){e.next=5;break}return e.next=4,$();case 4:e.t0=!e.sent;case 5:if(!e.t0){e.next=7;break}return e.abrupt("return");case 7:u();case 8:case"end":return e.stop()}}),e)}))),[H,_,$,u]),X=Object(s.useCallback)(function(){var e=Object(c.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=_!==H,!e.t0){e.next=5;break}return e.next=4,$();case 4:e.t0=!e.sent;case 5:if(!e.t0){e.next=7;break}return e.abrupt("return");case 7:"backdropClick"!==n&&(null===u||void 0===u||u());case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[H,_,$,u]),Z=Object(s.useCallback)((function(e){!function(e,t){var n={validate:!0,schemas:[{uri:"http://json-schema.org/draft-07/schema",fileMatch:["inmemory://model/*"]}],enableSchemaRequest:!0},a=[N,M,S,J,W,E,R];t&&a.push.apply(a,Object(o.a)(t));for(var r=0,c=a;r<c.length;r++){var i=c[r];Object(y.b)(i)&&i.$id&&n.schemas.push({uri:i.$id,schema:i})}e.languages.json.jsonDefaults.setDiagnosticsOptions(n)}(e,v)}),[v]);return Object(D.jsxs)(h.a,{open:t,onClose:X,maxWidth:"xl",fullWidth:!0,classes:{paper:V.dialogPaper},children:[Object(D.jsx)(p.a,{children:null!==l&&void 0!==l?l:T("EditingJsonSchema")}),Object(D.jsxs)(j.a,{className:V.dialogContent,children:[Object(D.jsx)("div",{className:V.editorContainer,children:Object(D.jsx)(x.a,{children:function(e){var t=e.height,n=e.width;return Object(D.jsx)(O.a,{width:n,height:t,language:"json",theme:"light"===Y.palette.type?"vs-light":"vs-dark",value:H,options:k.a,onChange:K,editorWillMount:Z,editorDidMount:P})}})}),G.length>0&&Object(D.jsx)("div",{className:V.errorContainer,children:Object(D.jsx)(g.a,{component:"span",error:!0,children:G.map((function(e,t){return Object(D.jsx)("p",{children:e},t)}))})})]}),Object(D.jsxs)(b.a,{children:[Object(D.jsx)(f.a,{onClick:Q,color:"primary",children:T("Accept")}),Object(D.jsx)(f.a,{onClick:U,color:"primary",children:T("Cancel")})]})]})};t.default=Y}}]);
//# sourceMappingURL=60.893e75a1.chunk.js.map