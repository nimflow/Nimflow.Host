(this["webpackJsonpnimflow-studio"]=this["webpackJsonpnimflow-studio"]||[]).push([[90],{449:function(e,a,r){"use strict";var s=r(23);e.exports=function(e){if(e&&e.length){var a,r=s(e);try{for(r.s();!(a=r.n()).done;){var m=a.value,n=void 0;switch(m.keyword){case"additionalItems":case"items":n="",n+="kan ikke ha mer enn "+(t=m.params.limit)+" element",1!=t&&(n+="er");break;case"additionalProperties":n="kan ikke ha flere egenskaper";break;case"anyOf":n='m\xe5 samsvare med et schema i "anyOf"';break;case"const":n="m\xe5 v\xe6re lik konstanten";break;case"contains":n="m\xe5 inneholde et gyldig element";break;case"dependencies":case"dependentRequired":n="";var t=m.params.depsCount;n+="m\xe5 ha egenskapen",1!=t&&(n+="e"),n+=" "+m.params.deps+" n\xe5r egenskapen "+m.params.property+" er angitt";break;case"discriminator":switch(m.params.error){case"tag":n='tag "'+m.params.tag+'" must be string';break;case"mapping":n='value of tag "'+m.params.tag+'" must be in oneOf';break;default:n="m\xe5 samsvare med valideringen for "+m.keyword}break;case"enum":n="m\xe5 v\xe6re lik en av de forh\xe5ndsdefinerte verdiene";break;case"false schema":n="boolsk schema er usannt";break;case"format":n='m\xe5 stemme overens med formatet "'+m.params.format+'"';break;case"formatMaximum":case"formatExclusiveMaximum":case"formatMinimum":case"formatExclusiveMinimum":case"maximum":case"exclusiveMaximum":case"minimum":case"exclusiveMinimum":n="",n+="m\xe5 v\xe6re "+(m.params.comparison+" "+m.params.limit);break;case"if":n='must match "'+m.params.failingKeyword+'" schema';break;case"maxItems":n="",n+="kan ikke ha fler enn "+(t=m.params.limit)+" element",1!=t&&(n+="er");break;case"maxLength":n="",n+="kan ikke v\xe6re lengre enn "+(t=m.params.limit)+" tegn";break;case"maxProperties":n="",n+="kan ikke ha mer enn "+(t=m.params.limit)+" egenskap",1!=t&&(n+="er");break;case"minItems":n="",n+="kan ikke ha f\xe6rre enn "+(t=m.params.limit)+" element",1!=t&&(n+="er");break;case"minLength":n="",n+="kan ikke v\xe6re kortere enn "+(t=m.params.limit)+" tegn";break;case"minProperties":n="",n+="kan ikke ha mindre enn "+(t=m.params.limit)+" egenskap",1!=t&&(n+="er");break;case"multipleOf":n="m\xe5 v\xe6re et multiplum av "+m.params.multipleOf;break;case"not":n='kan ikke samsvare med schema i "not"';break;case"oneOf":n='m\xe5 samsvare med n\xf8yaktig ett schema i "oneOf"';break;case"pattern":n='m\xe5 samsvare med m\xf8nsteret "'+m.params.pattern+'"';break;case"patternRequired":n='m\xe5 ha en egenskap som samsvarer med m\xf8nsteret "'+m.params.missingPattern;break;case"propertyNames":n="egenskapen med navnet '",m.params.propertyNameout+="' er ugyldig";break;case"required":n="m\xe5 ha den p\xe5krevde egenskapen "+m.params.missingProperty;break;case"type":n="";var i=m.params.type;n+="m\xe5 v\xe6re ",n+="number"==i?"et tall":"integer"==i?"et heltall":"string"==i?"en streng":"boolean"==i?"ja eller nei":i;break;case"unevaluatedItems":n="",n+="must NOT have more than "+(t=m.params.len)+" item",1!=t&&(n+="s");break;case"unevaluatedProperties":n="must NOT have unevaluated properties";break;case"uniqueItems":n="kan ikke ha duplikate elemeneter (elementene ## "+m.params.j+" og "+m.params.i+" er identiske)";break;default:n="m\xe5 samsvare med valideringen for "+m.keyword}m.message=n}}catch(k){r.e(k)}finally{r.f()}}}}}]);
//# sourceMappingURL=90.1a1a7a34.chunk.js.map