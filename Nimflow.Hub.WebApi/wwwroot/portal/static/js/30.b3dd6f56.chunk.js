(this["webpackJsonpnimflow-portal"]=this["webpackJsonpnimflow-portal"]||[]).push([[30],{633:function(a,e,r){"use strict";var i=r(102);a.exports=function(a){if(a&&a.length){var e,r=i(a);try{for(r.s();!(e=r.n()).done;){var s=e.value,m=void 0;switch(s.keyword){case"additionalItems":case"items":m="",m+=" tidak boleh memiliki lebih dari "+(t=s.params.limit)+" item";break;case"additionalProperties":m="tidak boleh memiliki properti tambahan";break;case"anyOf":m='harus cocok dengan beberapa skema pada "anyOf"';break;case"const":m="harus sama dengan konstan";break;case"contains":m="harus berisi item yang valid";break;case"dependencies":case"dependentRequired":m="";var t=s.params.depsCount;m+=" harus memiliki properti "+s.params.deps+" ketika properti "+s.params.property+" hadir";break;case"discriminator":switch(s.params.error){case"tag":m='tag "'+s.params.tag+'" must be string';break;case"mapping":m='value of tag "'+s.params.tag+'" must be in oneOf';break;default:m='harus lulus validasi kata kunci "'+s.keyword+'"'}break;case"enum":m="harus sama dengan salah satu dari nilai yang telah ditentukan";break;case"false schema":m="skema boolean salah";break;case"format":m='harus cocok dengan format "'+s.params.format+'"';break;case"formatMaximum":case"formatExclusiveMaximum":m="",m+="harus "+(s.params.comparison+" "+s.params.limit);break;case"formatMinimum":case"formatExclusiveMinimum":m="",m+="harus "+(s.params.comparison+" "+s.params.limit);break;case"if":m='harus cocok dengan skema "'+s.params.failingKeyword+'"';break;case"maximum":case"exclusiveMaximum":m="",m+="harus "+(s.params.comparison+" "+s.params.limit);break;case"maxItems":m="",m+=" tidak boleh memiliki lebih dari "+(t=s.params.limit)+" item";break;case"maxLength":m="",m+=" tidak boleh lebih dari "+(t=s.params.limit)+" karakter";break;case"maxProperties":m="",m+=" tidak boleh memiliki lebih dari "+(t=s.params.limit)+" properti";break;case"minimum":case"exclusiveMinimum":m="",m+="harus "+(s.params.comparison+" "+s.params.limit);break;case"minItems":m="",m+=" tidak boleh kurang dari "+(t=s.params.limit)+" item";break;case"minLength":m="",m+=" tidak boleh lebih pendek dari "+(t=s.params.limit)+" karakter";break;case"minProperties":m="",m+=" tidak boleh kurang dari "+(t=s.params.limit)+" properti";break;case"multipleOf":m="harus merupakan kelipatan dari "+s.params.multipleOf;break;case"not":m='tidak boleh valid sesuai dengan skema pada "not"';break;case"oneOf":m='harus sama persis dengan satu skema pada "oneOf"';break;case"pattern":m='harus cocok dengan pola "'+s.params.pattern+'"';break;case"patternRequired":m='harus memiliki pola pencocokan properti "'+s.params.missingPattern+'"';break;case"propertyNames":m="nama properti tidak valid";break;case"required":m="harus memiliki properti "+s.params.missingProperty;break;case"type":m="harus berupa "+s.params.type;break;case"unevaluatedItems":m="",m+="must NOT have more than "+(t=s.params.len)+" item",1!=t&&(m+="s");break;case"unevaluatedProperties":m="must NOT have unevaluated properties";break;case"uniqueItems":m="tidak boleh memiliki item duplikat (item ## "+s.params.j+" dan "+s.params.i+" identik)";break;default:m='harus lulus validasi kata kunci "'+s.keyword+'"'}s.message=m}}catch(n){r.e(n)}finally{r.f()}}}}}]);
//# sourceMappingURL=30.b3dd6f56.chunk.js.map