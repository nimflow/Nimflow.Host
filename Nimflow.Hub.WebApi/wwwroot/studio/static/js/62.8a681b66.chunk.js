(this["webpackJsonpnimflow-studio"]=this["webpackJsonpnimflow-studio"]||[]).push([[62],{1259:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(9),c=n(483),a=n(3397),o=n(545),s=n(129),i=function(){var e=Object(c.b)(),t=Object(a.a)().t;return Object(r.useCallback)((function(n){var r,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e({title:c.title,description:Object(s.jsx)("span",{style:{display:"block",maxHeight:"200px"},children:Object(s.jsx)(o.a,{error:n})}),dialogProps:c.dialogProps,mapCloseTo:"close",actions:[{type:"close",text:null!==(r=c.closeText)&&void 0!==r?r:t("Close"),buttonProps:c.closeButtonProps}]}).then((function(){})).catch((function(){}))}),[e,t])}},2126:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(4),c=n.n(r),a=n(68),o=n(0),s=n(21),i=n(427),u=n(61),b=n(554),l=n(29),p=n(130),f=function(){var e=Object(s.a)(c.a.mark((function e(t){var n,r,s,f,j,O,d,v,m,h,x,y,g,k,S;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(delete t.jsInitializers,s=Object(l.e)(t),!Object(l.b)(s)){e.next=4;break}return e.abrupt("return",Object(u.a)(Object(u.c)(s.errors)));case 4:delete(f=Object(i.a)(t)).$schema,"object"===typeof f.jsonSchema&&(f.jsonSchema=JSON.stringify(f.jsonSchema,void 0,2)),"object"===typeof(null===(n=f.settings)||void 0===n?void 0:n.uiSchemaCommon)&&(f.settings.uiSchemaCommon=JSON.stringify(f.settings.uiSchemaCommon,void 0,2)),j=Object(o.a)(f.actions);try{for(j.s();!(O=j.n()).done;)d=O.value,v=d.settings,"object"===typeof(m=null===v||void 0===v?void 0:v.uiSchema)&&(v.uiSchema=JSON.stringify(m,void 0,2))}catch(c){j.e(c)}finally{j.f()}h=Object(o.a)(f.tasks.flatMap((function(e){return e.validResponses})));try{for(h.s();!(x=h.n()).done;)y=x.value,g=y.settings,"object"===typeof(k=null===g||void 0===g?void 0:g.uiSchema)&&(g.uiSchema=JSON.stringify(k,void 0,2))}catch(c){h.e(c)}finally{h.f()}return e.next=14,Object(p.b)(b.c,f,{context:(r={},Object(a.a)(r,b.j,f.jsCommon),Object(a.a)(r,b.k,f.jsonSchema),r)});case 14:if(!((S=e.sent).length>0)){e.next=17;break}return e.abrupt("return",Object(u.a)(S));case 17:return e.abrupt("return",Object(u.b)(f));case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},3355:function(e,t,n){"use strict";n.r(t),n.d(t,"ContextTypeImporter",(function(){return y}));var r=n(4),c=n.n(r),a=n(21),o=n(1),s=n(9),i=n(636),u=n.n(i),b=n(531),l=n(635),p=n(3397),f=n(2198),j=n(659),O=n(2126),d=n(499),v=n(1259),m=n(597),h=n(483),x=n(129),y=function(){var e=Object(p.a)().t,t=Object(b.i)().blobUrl,n=Object(b.h)(),r=Object(l.b)().enqueueSnackbar,i=Object(v.a)(),y=Object(d.c)(),g=y.contextTypes_FindOne,k=y.contextTypes_Update,S=y.contextTypes_Add,C=Object(s.useState)(),w=Object(o.a)(C,2),T=w[0],J=w[1],N=Object(m.a)(),P=Object(h.c)();Object(s.useEffect)((function(){var r=atob(t);r&&u.a.get(r,{responseType:"blob"}).then(function(){var t=Object(a.a)(c.a.mark((function t(r){var a,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(j.c)(r.data);case 2:return a=t.sent,t.next=5,Object(O.a)(a);case 5:if("success"!==(o=t.sent).type){t.next=11;break}return J(o.result),t.abrupt("return");case 11:N(e("FileIsNotAValidContextType"),o.errors,{dialogProps:{maxWidth:"lg"}}),n("../..");case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(){n("../..")})).finally((function(){URL.revokeObjectURL(r)}))}),[t,n,r,i,e,N]);var U=Object(s.useCallback)(function(){var t=Object(a.a)(c.a.mark((function t(r){var a,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g({name:r.name});case 2:if(!(a=t.sent)){t.next=15;break}return t.next=6,P({description:e("ConfirmOverwriteContextType",{name:r.name})});case 6:if(t.sent){t.next=9;break}return t.abrupt("return",!1);case 9:return r.version=a.version,t.next=12,k(r);case 12:o=t.sent,t.next=18;break;case 15:return t.next=17,S(r);case 17:o=t.sent;case 18:return J(o),n("../../edit/".concat(o.name),{replace:!0}),t.abrupt("return",!0);case 21:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[g,n,P,e,k,S]);return T?Object(x.jsx)(f.a,{value:T,onApplyChanges:U}):null};t.default=y}}]);
//# sourceMappingURL=62.8a681b66.chunk.js.map