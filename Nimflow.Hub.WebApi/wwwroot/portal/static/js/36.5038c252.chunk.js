(this["webpackJsonpnimflow-portal"]=this["webpackJsonpnimflow-portal"]||[]).push([[36],{639:function(e,a,i){"use strict";var n=i(102);e.exports=function(e){if(e&&e.length){var a,i=n(e);try{for(i.s();!(a=i.n()).done;){var r=a.value,s=void 0;switch(r.keyword){case"additionalItems":case"items":s="",s+="nie powinien mie\u0107 wi\u0119cej ni\u017c "+(m=r.params.limit)+" element",s+=1==m?"u":"\xf3w";break;case"additionalProperties":s="nie powinien zawiera\u0107 dodatkowych p\xf3l";break;case"anyOf":s='powinien pasowa\u0107 do wzoru z sekcji "anyOf"';break;case"const":s="powinien by\u0107 r\xf3wny sta\u0142ej";break;case"contains":s="must contain a valid item";break;case"dependencies":case"dependentRequired":s="";var m=r.params.depsCount;s+="powinien zawiera\u0107 pol",s+=1==m?"e":"a",s+=" "+r.params.deps+" kiedy pole "+r.params.property+" jest obecne";break;case"discriminator":switch(r.params.error){case"tag":s='tag "'+r.params.tag+'" must be string';break;case"mapping":s='value of tag "'+r.params.tag+'" must be in oneOf';break;default:s='powinien przej\u015b\u0107 walidacj\u0119 "'+r.keyword+'"'}break;case"enum":s="powinien by\u0107 r\xf3wny jednej z predefiniowanych warto\u015bci";break;case"false schema":s="boolean schema is false";break;case"format":s='powinien zgadza\u0107 si\u0119 z formatem "'+r.params.format+'"';break;case"formatMaximum":case"formatExclusiveMaximum":s="",s+="powinien by\u0107 "+(r.params.comparison+" "+r.params.limit);break;case"formatMinimum":case"formatExclusiveMinimum":s="",s+="powinien by\u0107 "+(r.params.comparison+" "+r.params.limit);break;case"if":s='must match "'+r.params.failingKeyword+'" schema';break;case"maximum":case"exclusiveMaximum":s="",s+="powinien by\u0107 "+(r.params.comparison+" "+r.params.limit);break;case"maxItems":s="",s+="nie powinien mie\u0107 wi\u0119cej ni\u017c "+(m=r.params.limit)+" element",s+=1==m?"u":"\xf3w";break;case"maxLength":s="",s+="nie powinien by\u0107 d\u0142u\u017cszy ni\u017c "+(m=r.params.limit)+" znak",1!=m&&(s+="\xf3w");break;case"maxProperties":s="",s+="nie powinien zawiera\u0107 wi\u0119cej ni\u017c "+(m=r.params.limit)+" ",s+=1==m?"pole":"p\xf3l";break;case"minimum":case"exclusiveMinimum":s="",s+="powinien by\u0107 "+(r.params.comparison+" "+r.params.limit);break;case"minItems":s="",s+="nie powinien mie\u0107 mniej ni\u017c "+(m=r.params.limit)+" element",s+=1==m?"u":"\xf3w";break;case"minLength":s="",s+="nie powinien by\u0107 kr\xf3tszy ni\u017c "+(m=r.params.limit)+" znak",1!=m&&(s+="\xf3w");break;case"minProperties":s="",s+="nie powinien zawiera\u0107 mniej ni\u017c "+(m=r.params.limit)+" ",s+=1==m?"pole":"p\xf3l";break;case"multipleOf":s="powinien by\u0107 wielokrotno\u015bci\u0105 "+r.params.multipleOf;break;case"not":s='nie powinien pasowa\u0107 do wzoru z sekcji "not"';break;case"oneOf":s='powinien pasowa\u0107 do jednego wzoru z sekcji "oneOf"';break;case"pattern":s='powinien zgadza\u0107 si\u0119 ze wzorem "'+r.params.pattern+'"';break;case"patternRequired":s='powinien mie\u0107 pole pasuj\u0105ce do wzorca "'+r.params.missingPattern+'"';break;case"propertyNames":s="property name is invalid";break;case"required":s="powinien zawiera\u0107 wymagane pole "+r.params.missingProperty;break;case"type":s="powinien by\u0107 "+r.params.type;break;case"unevaluatedItems":s="",s+="must NOT have more than "+(m=r.params.len)+" item",1!=m&&(s+="s");break;case"unevaluatedProperties":s="must NOT have unevaluated properties";break;case"uniqueItems":s="nie powinien zawiera\u0107 element\xf3w kt\xf3re si\u0119 powtarzaj\u0105 (elementy "+r.params.j+" i "+r.params.i+" s\u0105 identyczne)";break;default:s='powinien przej\u015b\u0107 walidacj\u0119 "'+r.keyword+'"'}r.message=s}}catch(p){i.e(p)}finally{i.f()}}}}}]);
//# sourceMappingURL=36.5038c252.chunk.js.map