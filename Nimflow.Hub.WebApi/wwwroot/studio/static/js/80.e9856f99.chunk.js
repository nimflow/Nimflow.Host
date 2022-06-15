(this["webpackJsonpnimflow-studio"]=this["webpackJsonpnimflow-studio"]||[]).push([[80],{501:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={selectOnLineNumbers:!0,automaticLayout:!0,minimap:{enabled:!1},fixedOverflowWidgets:!0}},577:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(3),i=n(3012),a=n(6),o=n(471),s=function(){var e=Object(i.a)().t,t=Object(o.c)();return Object(a.useCallback)((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=Object(r.a)({title:e("ThereArePendingChanges"),description:e("ChangesWillBeLost_Continue")},n);return t(i)}),[t,e])}},791:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return M}));var r,i,a,o=n(543),s=n(126),c=n(6),f=n(720),u=n(564),l=n(510),d=n(501),m=n(71),p=n(72),h=n(69),b=n(70),g=n(73),y=n(74),j=n(75),$=n(619),v=n(792),O=n(124);!function(e){e[e.Draft07=0]="Draft07",e[e.Draft201909=1]="Draft201909",e[e.Nimflow=2]="Nimflow"}(a||(a={}));var x=(r={},Object(s.a)(r,a.Draft07,"http://json-schema.org/draft-07/schema"),Object(s.a)(r,a.Draft201909,"https://json-schema.org/draft/2019-09/schema"),Object(s.a)(r,a.Nimflow,"http://nimflow.com/schemas/nf-json-schema.json"),r),w=(i={},Object(s.a)(i,a.Draft07,void 0),Object(s.a)(i,a.Draft201909,void 0),Object(s.a)(i,a.Nimflow,v),i),I=function(e){e.focus()},M=function(e){var t=e.value,n=e.onChange,r=e.extraJsonSchemas,i=e.height,s=e.width,v=e.mainMetaSchema,M=void 0===v?a.Draft07:v,C=Object(f.a)(),N=Object(c.useCallback)((function(e){!function(e,t,n){var r={validate:!0,schemas:[{uri:x[t],fileMatch:["inmemory://model/*"],schema:w[t]}],enableSchemaRequest:!0},i=[h,b,m,p,g,y,j];n&&i.push.apply(i,Object(o.a)(n));for(var a=0,s=i;a<s.length;a++){var c=s[a];Object($.b)(c)&&c.$id&&r.schemas.push({uri:c.$id,schema:c})}e.languages.json.jsonDefaults.setDiagnosticsOptions(r)}(e,M,r)}),[r,M]),k=Object(c.useMemo)((function(){return{width:null!==s&&void 0!==s?s:"100%",height:null!==i&&void 0!==i?i:"100%"}}),[i,s]);return Object(O.jsx)("div",{style:k,children:Object(O.jsx)(l.a,{children:function(e){var r=e.height,i=e.width;return Object(O.jsx)(u.b,{width:i,height:r,language:"json",theme:"light"===C.palette.mode?"vs-light":"vs-dark",value:t,options:d.a,onChange:n,editorWillMount:N,editorDidMount:I})}})})}},792:function(e){e.exports=JSON.parse('{"$schema":"https://json-schema.org/draft/2019-09/schema#","$id":"http://nimflow.com/schemas/nf-json-schema.json","title":"Json schema meta schema with Nimflow extensions (special version for Monaco editor)","type":"object","properties":{"nfCalculatedValue":{"$ref":"#"},"nfValidate":{"anyOf":[{"$ref":"#"},{"$ref":"#/definitions/schemaArray"}]},"nfMultipleOf":{"$ref":"#"},"nfMaximum":{"$ref":"#"},"nfExclusiveMaximum":{"$ref":"#"},"nfMinimum":{"$ref":"#"},"nfExclusiveMinimum":{"$ref":"#"},"nfMaxLength":{"$ref":"#"},"nfMinLength":{"$ref":"#"},"nfPattern":{"$ref":"#"},"nfMaxItems":{"$ref":"#"},"nfMinItems":{"$ref":"#"},"nfUniqueItems":{"$ref":"#"},"nfMaxProperties":{"$ref":"#"},"nfMinProperties":{"$ref":"#"},"nfRequired":{"$ref":"#"},"nfConst":{"$ref":"#"},"nfEnum":{"$ref":"#"},"nfHidden":{"$ref":"#"},"nfDisabled":{"$ref":"#"},"nfExpr":{"type":"string"},"nfMessage":{"type":"string"},"nfInstancePath":{"type":"string","pattern":"^#?(/[^/]+)+$","description":"JSON Pointer to the field associated with the validation. If the path starts with # it is considered an absolute path, otherwise it is relative to the current location"},"nfData":{},"$id":{"type":"string","format":"uri-reference","$comment":"Non-empty fragments not allowed.","pattern":"^[^#]*#?$"},"$schema":{"type":"string","format":"uri"},"$anchor":{"type":"string","pattern":"^[A-Za-z][-A-Za-z0-9.:_]*$"},"$ref":{"type":"string","format":"uri-reference"},"$recursiveRef":{"type":"string","format":"uri-reference"},"$recursiveAnchor":{"type":"boolean","default":false},"$vocabulary":{"type":"object","propertyNames":{"type":"string","format":"uri"},"additionalProperties":{"type":"boolean"}},"$comment":{"type":"string"},"$defs":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"additionalItems":{"$ref":"#"},"unevaluatedItems":{"$ref":"#"},"items":{"anyOf":[{"$ref":"#"},{"$ref":"#/definitions/schemaArray"}]},"contains":{"$ref":"#"},"additionalProperties":{"$ref":"#"},"unevaluatedProperties":{"$ref":"#"},"properties":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"patternProperties":{"type":"object","additionalProperties":{"$ref":"#"},"propertyNames":{"format":"regex"},"default":{}},"dependentSchemas":{"type":"object","additionalProperties":{"$ref":"#"}},"propertyNames":{"$ref":"#"},"if":{"$ref":"#"},"then":{"$ref":"#"},"else":{"$ref":"#"},"allOf":{"$ref":"#/definitions/schemaArray"},"anyOf":{"$ref":"#/definitions/schemaArray"},"oneOf":{"$ref":"#/definitions/schemaArray"},"not":{"$ref":"#"},"multipleOf":{"type":"number","exclusiveMinimum":0},"maximum":{"type":"number"},"exclusiveMaximum":{"type":"number"},"minimum":{"type":"number"},"exclusiveMinimum":{"type":"number"},"maxLength":{"$ref":"#/definitions/nonNegativeInteger"},"minLength":{"$ref":"#/definitions/nonNegativeIntegerDefault0"},"pattern":{"type":"string","format":"regex"},"maxItems":{"$ref":"#/definitions/nonNegativeInteger"},"minItems":{"$ref":"#/definitions/nonNegativeIntegerDefault0"},"uniqueItems":{"type":"boolean","default":false},"maxContains":{"$ref":"#/definitions/nonNegativeInteger"},"minContains":{"$ref":"#/definitions/nonNegativeInteger","default":1},"maxProperties":{"$ref":"#/definitions/nonNegativeInteger"},"minProperties":{"$ref":"#/definitions/nonNegativeIntegerDefault0"},"required":{"$ref":"#/definitions/stringArray"},"dependentRequired":{"type":"object","additionalProperties":{"$ref":"#/definitions/stringArray"}},"const":true,"enum":{"type":"array","items":true},"type":{"anyOf":[{"$ref":"#/definitions/simpleTypes"},{"type":"array","items":{"$ref":"#/definitions/simpleTypes"},"minItems":1,"uniqueItems":true}]},"title":{"type":"string"},"description":{"type":"string"},"default":true,"deprecated":{"type":"boolean","default":false},"readOnly":{"type":"boolean","default":false},"writeOnly":{"type":"boolean","default":false},"examples":{"type":"array","items":true},"format":{"type":"string"},"contentMediaType":{"type":"string"},"contentEncoding":{"type":"string"},"contentSchema":{"$ref":"#"},"definitions":{"$comment":"While no longer an official keyword as it is replaced by $defs, this keyword is retained in the meta-schema to prevent incompatible extensions as it remains in common use.","type":"object","additionalProperties":{"$ref":"#"},"default":{}},"dependencies":{"$comment":"\\"dependencies\\" is no longer a keyword, but schema authors should avoid redefining it to facilitate a smooth transition to \\"dependentSchemas\\" and \\"dependentRequired\\"","type":"object","additionalProperties":{"anyOf":[{"$ref":"#"},{"$ref":"#/definitions/stringArray"}]}}},"definitions":{"schemaArray":{"type":"array","minItems":1,"items":{"$ref":"#"}},"nonNegativeInteger":{"type":"integer","minimum":0},"nonNegativeIntegerDefault0":{"allOf":[{"$ref":"#/definitions/nonNegativeInteger"},{"default":0}]},"simpleTypes":{"enum":["array","boolean","integer","null","number","object","string"]},"stringArray":{"type":"array","items":{"type":"string"},"uniqueItems":true,"default":[]}},"default":true}')},897:function(e,t,n){"use strict";n.r(t),n.d(t,"JsonSchemaEditorModal",(function(){return k}));var r=n(544),i=n(463),a=n(527),o=n.n(a),s=n(6),c=n(457),f=n(2996),u=n(2343),l=n(2931),d=n(3024),m=n(3023),p=n(2938),h=n(2275),b=n(3012),g=n(2065),y=n(10),j=n(127),$=n(577),v=n(791),O=n(124),x=Object(f.a)((function(e){return Object(u.a)({dialogPaper:{height:"80vh"}})})),w=y.m().jsonSchema(),I=function(e){return Object(j.b)(w,e)},M=Object(c.a)(m.a,{shouldForwardProp:function(e){return"showErrors"!==e}})((function(e){return{display:"grid",gridTemplateColumns:"auto",gridTemplateRows:e.showErrors?"auto ".concat(100,"px"):"auto",rowGap:"5px",placeItems:"stretch",height:"100%",overflowY:"hidden"}})),C=Object(c.a)("div")({gridColumn:"1 / 2",gridRow:"1 / 2"}),N=Object(c.a)("div")({gridColumn:"1 / 2",gridRow:"2 / 3",overflowY:"auto"}),k=function(e){var t=e.open,n=e.defaultValue,a=e.onChange,c=e.onClose,f=e.title,u=e.extraJsonSchemas,m=e.validator,y=e.mainMetaSchema,j=Object(b.a)().t,w=Object($.a)(),k=Object(s.useState)([]),P=Object(i.a)(k,2),S=P[0],D=P[1],A=x(),J=Object(s.useMemo)((function(){return n?n.includes("\n")?n:JSON.stringify(JSON.parse(n),void 0,2):'{\n    "type": "object",\n    "definitions": {\n\n    }\n}'}),[n]),E=Object(s.useState)(J),q=Object(i.a)(E,2),R=q[0],L=q[1],T=Object(s.useCallback)(Object(r.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=null!==m&&void 0!==m?m:I,e.next=3,t(null!==R&&void 0!==R?R:"");case 3:(n=e.sent).length>0?D(n.map((function(e){return e.message}))):(null===a||void 0===a||a(R),c());case 5:case"end":return e.stop()}}),e)}))),[R,a,c,m]),W=Object(s.useCallback)(Object(r.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=J!==R,!e.t0){e.next=5;break}return e.next=4,w();case 4:e.t0=!e.sent;case 5:if(!e.t0){e.next=7;break}return e.abrupt("return");case 7:c();case 8:case"end":return e.stop()}}),e)}))),[R,J,w,c]),V=Object(s.useCallback)(function(){var e=Object(r.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=J!==R,!e.t0){e.next=5;break}return e.next=4,w();case 4:e.t0=!e.sent;case 5:if(!e.t0){e.next=7;break}return e.abrupt("return");case 7:"backdropClick"!==n&&(null===c||void 0===c||c());case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[R,J,w,c]);return Object(O.jsxs)(l.a,{open:t,onClose:V,maxWidth:"xl",fullWidth:!0,classes:{paper:A.dialogPaper},children:[Object(O.jsx)(p.a,{children:null!==f&&void 0!==f?f:j("EditingJsonSchema")}),Object(O.jsxs)(M,{showErrors:S.length>0,children:[Object(O.jsx)(C,{children:Object(O.jsx)(v.a,{value:R,onChange:L,extraJsonSchemas:u,mainMetaSchema:y})}),S.length>0&&Object(O.jsx)(N,{children:Object(O.jsx)(g.a,{component:"span",error:!0,children:S.map((function(e,t){return Object(O.jsx)("p",{children:e},t)}))})})]}),Object(O.jsxs)(d.a,{children:[Object(O.jsx)(h.a,{onClick:T,color:"primary",children:j("Accept")}),Object(O.jsx)(h.a,{onClick:W,color:"primary",children:j("Cancel")})]})]})};t.default=k}}]);
//# sourceMappingURL=80.e9856f99.chunk.js.map