(this["webpackJsonpnimflow-studio"]=this["webpackJsonpnimflow-studio"]||[]).push([[66],{3416:function(e,t,n){"use strict";n.r(t),n.d(t,"ContextSimulationImporter",(function(){return w}));var r=n(4),a=n.n(r),i=n(21),s=n(1),c=n(9),o=n(2298),u=n(531),m=n(635),d=n(3413),p=n(637),f=n.n(p),l=n(499),j=n(1205),b=n(2056),h=n(682),y=n(662),v=n(68),x=n(1580),O=n(18),k=n(61),S=n(2146),g=n(29),q=n(130),N=n(557),C=function(){var e=Object(i.a)(a.a.mark((function e(t,n){var r,i,s,c,o,u,m,d;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=Object(g.h)(t),!Object(g.b)(c)){e.next=3;break}return e.abrupt("return",Object(k.a)(Object(k.c)(c.errors)));case 3:if(delete(o=t).$schema,!(u=o.contextType)){e.next=10;break}m=Object(x.b)(u),e.next=18;break;case 10:return e.next=12,n(o.contextTypeName);case 12:if(u=e.sent){e.next=15;break}return e.abrupt("return",Object(k.a)([O.a.t("InvalidContextTypeName",{contextTypeName:t.contextTypeName})]));case 15:return e.next=17,Object(x.c)(o.contextTypeName,n,u);case 17:m=e.sent;case 18:return o.history=null!==(r=o.history)&&void 0!==r?r:[],o.pendingEvents=null!==(i=o.pendingEvents)&&void 0!==i?i:[],e.next=22,Object(q.b)(S.a,o,{context:(s={},Object(v.a)(s,S.b,u),Object(v.a)(s,N.j,u.jsCommon),Object(v.a)(s,N.k,u.jsonSchema),s)});case 22:if(!((d=e.sent).length>0)){e.next=25;break}return e.abrupt("return",Object(k.a)(d));case 25:return e.abrupt("return",Object(k.b)([o,m]));case 26:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),K=n(1260),E=n(1249),T=n(692),D=n(129),w=function(e){var t=Object(d.a)().t,n=Object(u.h)(),r=Object(u.i)().blobUrl,p=Object(m.b)().enqueueSnackbar,v=Object(K.a)(),x=Object(l.c)().contextTypes_FindOne,O=Object(E.b)().simulations_InsertOne,k=Object(c.useState)(),S=Object(s.a)(k,2),g=S[0],q=S[1],N=Object(c.useState)(),w=Object(s.a)(N,2),I=w[0],A=w[1];Object(c.useEffect)((function(){var e=atob(r);e&&f.a.get(e,{responseType:"blob"}).then(function(){var e=Object(i.a)(a.a.mark((function e(r){var i,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.c)(r.data);case 2:return i=e.sent,e.next=5,C(i,(function(e){return x({name:e})}));case 5:if("success"!==(s=e.sent).type){e.next=12;break}return q(s.result[0]),A(s.result[1]),e.abrupt("return");case 12:p(t("FileIsNotAValidContextSimulation"),{variant:"error",action:Object(D.jsx)(o.a,{onClick:function(){return v(s.errors,{title:t("ImportErrors")})},children:t("ShowDetails")})}),n("../..");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(){n("../..")})).finally((function(){URL.revokeObjectURL(e)}))}),[r,n,p,v,t,x]);var F=Object(c.useCallback)(function(){var e=Object(i.a)(a.a.mark((function e(t){var r,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O(t);case 3:r=e.sent,n("../../edit/".concat(r),{replace:!0}),e.next=12;break;case 7:return e.prev=7,e.t0=e.catch(0),i=e.t0.toString(),T.a.isApiException(e.t0)&&(i=e.t0.message,"status"in e.t0&&(i+=" (status: ".concat(e.t0.status,")"))),e.abrupt("return",[{message:i}]);case 12:return e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),[n,O]);return g&&I?Object(D.jsx)(j.a,{contextTypeProvider:I,simulation:g,children:Object(D.jsx)(b.a,{onSaveChanges:F})}):Object(D.jsx)(h.b,{})};t.default=w},557:function(e,t,n){"use strict";n.d(t,"j",(function(){return x})),n.d(t,"k",(function(){return O})),n.d(t,"i",(function(){return q})),n.d(t,"a",(function(){return C})),n.d(t,"b",(function(){return K})),n.d(t,"d",(function(){return T})),n.d(t,"e",(function(){return D})),n.d(t,"g",(function(){return I})),n.d(t,"h",(function(){return A})),n.d(t,"f",(function(){return R})),n.d(t,"c",(function(){return _}));var r=n(0),a=n(68),i=n(3),s=n(2),c=n(8),o=n(19),u=n(13),m=n(16),d=n(17),p=n(6),f=n(18),l=n(428),j=n(244),b=n(430),h=n(840),y=n(155),v=n(1003),x="jsCommon",O="jsonSchema",k="uiSchemaJsonSchema",S=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e,r,a){var i;return Object(s.a)(this,n),(i=t.call(this)).definitionNameKey=e,i.contextKey=r,i.jsonSchemaKey=a,i}return Object(c.a)(n,[{key:"_validate",value:function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2?arguments[2]:void 0,c=r,m=null===(t=c.context)||void 0===t?void 0:t[this.jsonSchemaKey],d=e[this.definitionNameKey];if(m&&"string"===typeof d){var p;"function"===typeof m&&(m=m()),"string"===typeof m&&(m=JSON.parse(m));var f=Object(v.a)(m,d),l=Object(i.a)(Object(i.a)({},null===(p=c)||void 0===p?void 0:p.context),{},Object(a.a)({},this.contextKey,f));c=Object(i.a)(Object(i.a)({},c),{},{context:l})}return Object(o.a)(Object(u.a)(n.prototype),"_validate",this).call(this,e,c,s)}},{key:"clone",value:function(e){var t=Object(o.a)(Object(u.a)(n.prototype),"clone",this).call(this,e);return t.definitionNameKey=this.definitionNameKey,t.contextKey=this.contextKey,t.jsonSchemaKey=this.jsonSchemaKey,t}}]),n}(p.b),g=function(e,t,n){return new S(e,t,n)},q=p.k().shape({jsValidator:p.m().required().jsExpression({paramNames:["state","payload","task"],scriptContextKey:x}),errorMessageTemplate:p.m().required()}),N=p.k().shape({uiSchema:p.m().uiSchema(k)}),C=Object(h.a)(p.m().required().identifier(),p.m().required().jsExpression({paramNames:["state","payload"],scriptContextKey:x})),K=g("payloadSchemaDefinitionName",k,O).shape({name:p.m().required().identifier().min(3).max(50),payloadSchemaDefinitionName:p.m().jsonSchemaDefinitionName(O),validators:p.e().of(q.required()),jsSetters:C,settings:N,excludePayloadKeysFromEventStorage:p.m()}),E=(p.k().shape({name:p.m().required(),family:p.m()}),p.k().shape({uiSchema:p.m().uiSchema(k),commandText:p.m(),actionInProgressText:p.m(),actionCompletedText:p.m(),icon:p.i()})),T=Object(h.a)(p.m().required().identifier(),p.m().required().jsExpression({paramNames:["state","payload","task","responseData"],scriptContextKey:x})).required(),D=g("payloadSchemaDefinitionName",k,O).shape({name:p.m().required().identifier().min(3),payloadSchemaDefinitionName:p.m().jsonSchemaDefinitionName(O),validators:p.e().of(q.required()),jsSetters:T,settings:E,jsInitialPayloadBuilder:p.m().jsExpression({paramNames:["state","task"],scriptContextKey:x}),excludePayloadKeysFromEventStorage:p.m()}),w=p.k(),I=Object(h.a)(p.m().required().identifier(),p.m().required().jsExpression({paramNames:["state"],scriptContextKey:x})).required(),A=p.k().shape({name:p.m().required().identifier().min(3),titleTemplate:p.m().required(),jsCondition:p.m().jsExpression({paramNames:["state"],scriptContextKey:x}),jsTaskDataSetters:I,jsAssignedTo:p.m().jsExpression({paramNames:["state","task"],scriptContextKey:x}),jsDueDate:p.m().jsExpression({paramNames:["state","task"],scriptContextKey:x}),jsImportance:p.m().jsExpression({paramNames:["state","task"],scriptContextKey:x}),validResponses:p.e().of(D.required()).defined().uniqueBy((function(e){return e.name}),(function(e){var t=e.duplicates;return f.a.t("DuplicateResponseTypeNames",{names:t.join(", ")})})),excludeTaskDataKeysFromEventsStorage:p.m(),settings:w}),F=p.k().shape({name:p.m().required(),final:p.g()}),P=p.k().shape({name:p.m().required()}),B=p.k().shape({name:p.m().required()}),J=p.k().shape({uiSchemaCommon:p.m().uiSchema("uiSchemaCommon")}),R=p.k().shape({key:p.m().required().identifier(),jsExpression:p.m().required().jsExpression({paramNames:["state"],scriptContextKey:x}),dependencies:p.e().of(p.m())}),_=p.k().shape({version:p.j(),name:p.m().required().identifier().min(3).max(50),description:p.m(),actions:p.e().of(K.required()).defined().uniqueBy((function(e){return e.name}),(function(e){var t=e.duplicates;return f.a.t("DuplicateActionNames",{names:t.join(", ")})})),jsInitializers:Object(h.a)(p.m().required().identifier(),p.m().required()),selectors:p.e().of(R).test({message:function(){return f.a.t("SelectorCircularDependencyFound")},test:function(e){var t=e;if(!t||0===t.length)return!0;for(var n=Object(l.a)((function(e){return Object(j.a)(e.flatMap((function(e){var t;return null!==(t=e.dependencies)&&void 0!==t?t:[]})))}),Object(b.a)((function(e){return e.key}),t.filter((function(e){return e.key})))),r=0,a=Object.keys(n);r<a.length;r++){var i=a[r],s=Object(y.b)(i,{getNeighbors:function(e){var t;return null!==(t=n[e])&&void 0!==t?t:[]}});if(s)return this.createError({path:this.path,message:f.a.t("SelectorCircularDependencyFound",{cycle:s.join(" -> ")})})}return!0}}),tasks:p.e().of(A.required()).defined().uniqueBy((function(e){return e.name}),(function(e){var t=e.duplicates;return f.a.t("DuplicateTaskTypeNames",{names:t.join(", ")})})),initialActions:p.e().of(p.m().required()).defined().test({message:function(){return f.a.t("InvalidInitialActions")},test:function(e){var t,n=this,a=e,i=null===(t=this.parent)||void 0===t?void 0:t.actions;if(Array.isArray(i)){var s,c=Object(r.a)(a);try{var o=function(){var e=s.value;if(!i.find((function(t){return t.name===e})))return{v:n.createError({path:n.path,message:f.a.t("InvalidActionName",{actionName:a})})}};for(c.s();!(s=c.n()).done;){var u=o();if("object"===typeof u)return u.v}}catch(m){c.e(m)}finally{c.f()}}return!0}}),milestones:p.e().of(F.required()),tags:p.e().of(P),metrics:p.e().of(B),jsCommon:p.m().jsModule(),jsonSchema:p.m().jsonSchema(),settings:J,excludeNewContextStateKeysFromEventsStorage:p.m()})}}]);
//# sourceMappingURL=66.067fdaf4.chunk.js.map