(this["webpackJsonpnimflow-studio"]=this["webpackJsonpnimflow-studio"]||[]).push([[78],{435:function(e,a,s){"use strict";var r=s(22);e.exports=function(e){if(e&&e.length){var a,s=r(e);try{for(s.s();!(a=s.n()).done;){var i=a.value,n=void 0;switch(i.keyword){case"additionalItems":case"items":n="",n+="darf nicht mehr als "+(t=i.params.limit)+" Element",1!=t&&(n+="e"),n+=" enthalten";break;case"additionalProperties":n="darf keine zus\xe4tzlichen Attribute haben";break;case"anyOf":n='muss einem der Schemata in "anyOf" entsprechen';break;case"const":n="muss gleich der Konstanten sein";break;case"contains":n="muss ein valides Element enthalten";break;case"dependencies":case"dependentRequired":n="";var t=i.params.depsCount;n+="muss Attribut",1!=t&&(n+="e"),n+=" "+i.params.deps+" aufweisen, wenn Attribut "+i.params.property+" gesetzt ist";break;case"discriminator":switch(i.params.error){case"tag":n='der Tag "'+i.params.tag+'" muss eine Zeichenkette sein';break;case"mapping":n='der Wert vom Tag "'+i.params.tag+'" muss im oneOf enthalten sein';break;default:n='muss die Validierung "'+i.keyword+'" bestehen'}break;case"enum":n="muss einem der vorgegebenen Werte entsprechen";break;case"false schema":n="boolesches Schema ist falsch";break;case"format":n='muss diesem Format entsprechen: "'+i.params.format+'"';break;case"formatMaximum":case"formatExclusiveMaximum":n="",n+="muss "+(i.params.comparison+" "+i.params.limit)+" sein";break;case"formatMinimum":case"formatExclusiveMinimum":n="",n+="muss "+(i.params.comparison+" "+i.params.limit)+" sein";break;case"if":n='muss dem Schema "'+i.params.failingKeyword+'" entsprechen';break;case"maximum":case"exclusiveMaximum":n="",n+="muss "+(i.params.comparison+" "+i.params.limit)+" sein";break;case"maxItems":n="",n+="darf nicht mehr als "+(t=i.params.limit)+" Element",1!=t&&(n+="e"),n+=" haben";break;case"maxLength":n="",n+="darf nicht l\xe4nger als "+(t=i.params.limit)+" Zeichen sein";break;case"maxProperties":n="",n+="darf nicht mehr als "+(t=i.params.limit)+" Attribut",1!=t&&(n+="e"),n+=" haben";break;case"minimum":case"exclusiveMinimum":n="",n+="muss "+(i.params.comparison+" "+i.params.limit)+" sein";break;case"minItems":n="",n+="darf nicht weniger als "+(t=i.params.limit)+" Element",1!=t&&(n+="e"),n+=" haben";break;case"minLength":n="",n+="darf nicht k\xfcrzer als "+(t=i.params.limit)+" Zeichen sein";break;case"minProperties":n="",n+="darf nicht weniger als "+(t=i.params.limit)+" Attribut",1!=t&&(n+="e"),n+=" haben";break;case"multipleOf":n="muss ein Vielfaches von "+i.params.multipleOf+" sein";break;case"not":n='muss dem in "not" angegebenen Schema widersprechen';break;case"oneOf":n='muss genau einem der Schemata in "oneOf" entsprechen';break;case"pattern":n='muss diesem Muster entsprechen: "'+i.params.pattern+'"';break;case"patternRequired":n='muss ein Attribut nach folgendem Muster haben "'+i.params.missingPattern+'"';break;case"propertyNames":n="Attributname ist ung\xfcltig";break;case"required":n="muss das erforderliche Attribut "+i.params.missingProperty+" enthalten";break;case"type":n="muss sein: "+i.params.type;break;case"unevaluatedItems":n="",n+="darf nicht mehr als "+(t=i.params.len)+" Element",1!=t&&(n+="e"),n+=" haben";break;case"unevaluatedProperties":n="darf keine unausgewerteten Attribute haben";break;case"uniqueItems":n="darf keine Duplikate enthalten (Elemente #"+i.params.j+" und #"+i.params.i+" sind gleich)";break;default:n='muss die Validierung "'+i.keyword+'" bestehen'}i.message=n}}catch(m){s.e(m)}finally{s.f()}}}}}]);
//# sourceMappingURL=78.409f0dff.chunk.js.map