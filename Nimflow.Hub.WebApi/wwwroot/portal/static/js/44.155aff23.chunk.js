(this["webpackJsonpnimflow-portal"]=this["webpackJsonpnimflow-portal"]||[]).push([[44],{1207:function(e,a,r){"use strict";var s=r(84).default;e.exports=function(e){if(e&&e.length){var a,r=s(e);try{for(r.s();!(a=r.n()).done;){var t=a.value,i=void 0;switch(t.keyword){case"additionalItems":case"items":i="",i+="borde ha fler \xe4n "+(n=t.params.limit)+" sak",1!=n&&(i+="er");break;case"additionalProperties":i="borde inte ha fler egenskaper";break;case"anyOf":i='borde matcha n\xe5got schema i "anyOf"';break;case"const":i="b\xf6r vara en konstant";break;case"contains":i="b\xf6r inneh\xe5lla ett giltigt objekt";break;case"dependencies":case"dependentRequired":i="";var n=t.params.depsCount;i+="borde ha egenskap",1!=n&&(i+="er"),i+=" "+t.params.deps+" n\xe4r egenskap "+t.params.property+" finns tillg\xe4ngligt";break;case"discriminator":switch(t.params.error){case"tag":i='tag "'+t.params.tag+'" must be string';break;case"mapping":i='value of tag "'+t.params.tag+'" must be in oneOf';break;default:i='b\xf6r passera "'+t.keyword+'" nyckelord validering'}break;case"enum":i="borde vara ekvivalent med en av dess f\xf6rdefinierade v\xe4rden";break;case"false schema":i="boolean schema \xe4r falskt";break;case"format":i='borde matcha formatet "'+t.params.format+'"';break;case"formatMaximum":case"formatExclusiveMaximum":case"formatMinimum":case"formatExclusiveMinimum":i="",i+="b\xf6r vara "+(t.params.comparison+" "+t.params.limit);break;case"if":i='must match "'+t.params.failingKeyword+'" schema';break;case"maximum":case"exclusiveMaximum":case"minimum":case"exclusiveMinimum":i="",i+="borde vara "+(t.params.comparison+" "+t.params.limit);break;case"maxItems":i="",i+="borde inte ha fler \xe4n "+(n=t.params.limit)+" sak",1!=n&&(i+="er");break;case"maxLength":i="",i+="borde inte vara l\xe4ngre \xe4n "+(n=t.params.limit)+" tecken";break;case"maxProperties":i="",i+="borde inte ha fler \xe4n "+(n=t.params.limit)+" egenskap",1!=n&&(i+="er");break;case"minItems":i="",i+="borde inte ha f\xe4rre \xe4n "+(n=t.params.limit)+" sak",1!=n&&(i+="er");break;case"minLength":i="",i+="borde inte vara kortare \xe4n "+(n=t.params.limit)+" tecken";break;case"minProperties":i="",i+="borde inte ha f\xe4rre \xe4n "+(n=t.params.limit)+" egenskap",1!=n&&(i+="er");break;case"multipleOf":i="borde vara en multipel av "+t.params.multipleOf;break;case"not":i='borde inte vara giltigt enligt schema i "not"';break;case"oneOf":i='borde matcha exakt ett schema i "oneOf"';break;case"pattern":i='borde matcha m\xf6nstret "'+t.params.pattern+'"';break;case"patternRequired":i='b\xf6r ha en egenskap som matchar m\xf6nstret "'+t.params.missingPattern+'"';break;case"propertyNames":i="egenskap med namnet \xe4r inte giltig";break;case"required":i="borde ha den n\xf6dv\xe4ndiga egenskapen "+t.params.missingProperty;break;case"type":i="borde vara "+t.params.type;break;case"unevaluatedItems":i="",i+="must NOT have more than "+(n=t.params.len)+" item",1!=n&&(i+="s");break;case"unevaluatedProperties":i="must NOT have unevaluated properties";break;case"uniqueItems":i="borde inte ha duplicerade saker (sakerna ## "+t.params.j+" och "+t.params.i+" \xe4r identiska)";break;default:i='b\xf6r passera "'+t.keyword+'" nyckelord validering'}t.message=i}}catch(m){r.e(m)}finally{r.f()}}}}}]);
//# sourceMappingURL=44.155aff23.chunk.js.map