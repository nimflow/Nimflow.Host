(this["webpackJsonpnimflow-studio"]=this["webpackJsonpnimflow-studio"]||[]).push([[82],{441:function(e,a,s){"use strict";var r=s(23);e.exports=function(e){if(e&&e.length){var a,s=r(e);try{for(s.s();!(a=s.n()).done;){var n=a.value,i=void 0;switch(n.keyword){case"additionalItems":case"items":i="",i+="no debe tener m\xe1s de "+(o=n.params.limit)+" elemento",1!=o&&(i+="s");break;case"additionalProperties":i="no debe tener propiedades adicionales";break;case"anyOf":i='debe coincidir con alg\xfan esquema en "anyOf"';break;case"const":i="debe ser igual a la constante";break;case"contains":i="debe contener un elemento v\xe1lido";break;case"dependencies":case"dependentRequired":i="";var o=n.params.depsCount;i+="debe contener la",1!=o&&(i+="s"),i+=" propiedad",1!=o&&(i+="es"),i+=" "+n.params.deps+" cuando la propiedad "+n.params.property+" se encuentra presente";break;case"discriminator":switch(n.params.error){case"tag":i='tag "'+n.params.tag+'" must be string';break;case"mapping":i='value of tag "'+n.params.tag+'" must be in oneOf';break;default:i='debe pasar la validaci\xf3n de palabra clave "'+n.keyword+'"'}break;case"enum":i="deber ser igual a uno de los valores predefinidos";break;case"false schema":i="el esquema \xe9s falso";break;case"format":i='debe coincidir con el formato "'+n.params.format+'"';break;case"formatMaximum":case"formatExclusiveMaximum":case"formatMinimum":case"formatExclusiveMinimum":case"maximum":case"exclusiveMaximum":case"minimum":case"exclusiveMinimum":i="",i+="debe ser "+(n.params.comparison+" "+n.params.limit);break;case"if":i='debe corresponderse con el esquema "'+n.params.failingKeyword+'"';break;case"maxItems":i="",i+="no debe contener m\xe1s de "+(o=n.params.limit)+" elemento",1!=o&&(i+="s");break;case"maxLength":i="",i+="no debe contener m\xe1s de "+(o=n.params.limit)+" caracter",1!=o&&(i+="es");break;case"maxProperties":i="",i+="no debe contener m\xe1s de "+(o=n.params.limit)+" propiedad",1!=o&&(i+="es");break;case"minItems":i="",i+="no debe contener menos de "+(o=n.params.limit)+" elemento",1!=o&&(i+="s");break;case"minLength":i="",i+="no debe contener menos de "+(o=n.params.limit)+" caracter",1!=o&&(i+="es");break;case"minProperties":i="",i+="no debe contener menos de "+(o=n.params.limit)+" propiedad",1!=o&&(i+="es");break;case"multipleOf":i="debe ser m\xfaltiplo de "+n.params.multipleOf;break;case"not":i='no debe ser v\xe1lido seg\xfan el esquema en "not"';break;case"oneOf":i='debe coincidir con un solo esquema en "oneOf"';break;case"pattern":i='debe coincidir con el patron "'+n.params.pattern+'"';break;case"patternRequired":i='la propiedad debe coincidir con el patr\xf3n "'+n.params.missingPattern+'"';break;case"propertyNames":i="la propiedad no \xe9s v\xe1lida";break;case"required":i="debe tener la propiedad requerida "+n.params.missingProperty;break;case"type":i="debe ser "+n.params.type;break;case"unevaluatedItems":i="",i+="must NOT have more than "+(o=n.params.len)+" item",1!=o&&(i+="s");break;case"unevaluatedProperties":i="must NOT have unevaluated properties";break;case"uniqueItems":i="no debe contener elementos duplicados, (los elementos ## "+n.params.j+" y "+n.params.i+" son id\xe9nticos)";break;default:i='debe pasar la validaci\xf3n de palabra clave "'+n.keyword+'"'}n.message=i}}catch(t){s.e(t)}finally{s.f()}}}}}]);
//# sourceMappingURL=82.190c9995.chunk.js.map