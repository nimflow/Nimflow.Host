(this["webpackJsonpnimflow-portal"]=this["webpackJsonpnimflow-portal"]||[]).push([[43],{1206:function(a,e,s){"use strict";var m=s(84).default;a.exports=function(a){if(a&&a.length){var e,s=m(a);try{for(s.s();!(e=s.n()).done;){var r=e.value,o=void 0;switch(r.keyword){case"additionalItems":case"items":o="",o+="nem\xf4\u017ee obsahova\u0165 viac, ne\u017e "+(i=r.params.limit)+" prv",o+=1==i?"ok":"kov";break;case"additionalProperties":o="nem\xf4\u017ee obsahova\u0165 \u010fal\u0161ie polo\u017eky";break;case"anyOf":o='mus\xed spl\u0148ova\u0165 aspo\u0148 jednu zo sch\xe9m v "anyOf"';break;case"const":o="mus\xed by\u0165 kon\u0161tanta";break;case"contains":o="mus\xed obsahova\u0165 prvok zodpovedaj\xfaci sch\xe9me";break;case"dependencies":case"dependentRequired":o="";var i=r.params.depsCount;o+=" mus\xed obsahova\u0165 polo\u017e",o+=i>=2&&i<=4?"ky":1!=i?"iek":"ka",o+=": "+r.params.deps+", ak obsahuje "+r.params.property;break;case"discriminator":switch(r.params.error){case"tag":o='tag "'+r.params.tag+'" must be string';break;case"mapping":o='value of tag "'+r.params.tag+'" must be in oneOf';break;default:o='mus\xed splni\u0165 "'+r.keyword+'" valid\xe1ciu'}break;case"enum":o="mus\xed by\u0165 jedna z definovan\xfdch hodn\xf4t";break;case"false schema":o="sch\xe9ma je false";break;case"format":o='mus\xed obsahova\u0165 form\xe1t "'+r.params.format+'"';break;case"formatMaximum":case"formatExclusiveMaximum":case"formatMinimum":case"formatExclusiveMinimum":case"maximum":case"exclusiveMaximum":case"minimum":case"exclusiveMinimum":o="",o+="mus\xed by\u0165 "+(r.params.comparison+" "+r.params.limit);break;case"if":o='must match "'+r.params.failingKeyword+'" schema';break;case"maxItems":o="",o+="nesmie obsahova\u0165 viac ne\u017e "+(i=r.params.limit)+" prv",o+=1==i?"ok":"kov";break;case"maxLength":o="",o+="nesmie by\u0165 dlh\u0161\xed ne\u017e "+(i=r.params.limit)+" znak",1!=i&&(o+="ov");break;case"maxProperties":o="",o+="nesmie obsahova\u0165 viac ne\u017e "+(i=r.params.limit)+" polo\u017e",o+=i>=2&&i<=4?"ky":1!=i?"iek":"ka";break;case"minItems":o="",o+="nesmie obsahova\u0165 menej ne\u017e "+(i=r.params.limit)+" prv",o+=1==i?"ok":"kov";break;case"minLength":o="",o+="nesmie by\u0165 krat\u0161\xed ne\u017e "+(i=r.params.limit)+" znak",1!=i&&(o+="ov");break;case"minProperties":o="",o+="nesmie obsahova\u0165 menej ne\u017e "+(i=r.params.limit)+" polo\u017e",o+=i>=2&&i<=4?"ky":1!=i?"iek":"ka";break;case"multipleOf":o="mus\xed by\u0165 n\xe1sobkom "+r.params.multipleOf;break;case"not":o='nesmie spl\u0148ova\u0165 sch\xe9mu v "not"';break;case"oneOf":o='mus\xed spl\u0148ova\u0165 pr\xe1ve jednu sch\xe9mu v "oneOf"';break;case"pattern":o='mus\xed spl\u0148ova\u0165 regul\xe1rny v\xfdraz "'+r.params.pattern+'"';break;case"patternRequired":o='mus\xed obsahova\u0165 polo\u017eku spl\u0148j\xfacu regul\xe1rny v\xfdraz "'+r.params.missingPattern+'"';break;case"propertyNames":o="n\xe1zov polo\u017eky nezodpoved\xe1 sch\xe9me";break;case"required":o="mus\xed obsahova\u0165 po\u017eadovan\xfa polo\u017eku "+r.params.missingProperty;break;case"type":o="mus\xed by\u0165 "+r.params.type;break;case"unevaluatedItems":o="",o+="must NOT have more than "+(i=r.params.len)+" item",1!=i&&(o+="s");break;case"unevaluatedProperties":o="must NOT have unevaluated properties";break;case"uniqueItems":o="nesmie obsahova\u0165 duplicitn\xe9 prvky (prvky ## "+r.params.j+" a "+r.params.i+" s\xfa rovnak\xe9)";break;default:o='mus\xed splni\u0165 "'+r.keyword+'" valid\xe1ciu'}r.message=o}}catch(n){s.e(n)}finally{s.f()}}}}}]);
//# sourceMappingURL=43.0320bdf8.chunk.js.map