(this["webpackJsonpnimflow-portal"]=this["webpackJsonpnimflow-portal"]||[]).push([[18],{2051:function(e,a,t){"use strict";var n=t(84);e.exports=function(e){if(e&&e.length){var a,t=n(e);try{for(t.s();!(a=t.n()).done;){var m=a.value,r=void 0;switch(m.keyword){case"additionalItems":case"items":r="",r+="mag niet meer dan "+(s=m.params.limit)+" item",1!=s&&(r+="s"),r+=" bevatten";break;case"additionalProperties":r="mag geen extra eigenschappen bevatten";break;case"anyOf":r='moet overeenkomen met een schema in "anyOf"';break;case"const":r="moet gelijk zijn aan constante";break;case"contains":r="moet een geldig item bevatten";break;case"dependencies":case"dependentRequired":r="";var s=m.params.depsCount;r+="moet de eigenschap",1!=s&&(r+="pen"),r+=" "+m.params.deps+" bevatten als "+m.params.property+" is gedefinieerd";break;case"discriminator":switch(m.params.error){case"tag":r='tag "'+m.params.tag+'" moet een tekenreeks zijn';break;case"mapping":r='de waarde van het veld "'+m.params.tag+'" moet voorkomen in de oneOf';break;default:r='moet sleutelwoord validatie "'+m.keyword+'" doorstaan'}break;case"enum":r="moet overeenkomen met \xe9\xe9n van de voorgedefinieerde waarden";break;case"false schema":r="boolean schema is fout";break;case"format":r='moet overeenkomen met het volgende formaat: "'+m.params.format+'"';break;case"formatMaximum":case"formatExclusiveMaximum":r="",r+="moet "+(m.params.comparison+" "+m.params.limit)+" zijn";break;case"formatMinimum":case"formatExclusiveMinimum":r="",r+="moet "+(m.params.comparison+" "+m.params.limit)+" zijn";break;case"if":r='moet overeenkomen met "'+m.params.failingKeyword+'" schema';break;case"maximum":case"exclusiveMaximum":r="",r+="moet "+(m.params.comparison+" "+m.params.limit)+" zijn";break;case"maxItems":r="",r+="mag niet meer dan "+(s=m.params.limit)+" item",1!=s&&(r+="s"),r+=" bevatten";break;case"maxLength":r="",r+="mag niet langer dan "+(s=m.params.limit)+" karakter",1!=s&&(r+="s"),r+=" zijn";break;case"maxProperties":r="",r+="mag niet meer dan "+(s=m.params.limit)+" eigenschap",1!=s&&(r+="pen"),r+=" bevatten";break;case"minimum":case"exclusiveMinimum":r="",r+="moet "+(m.params.comparison+" "+m.params.limit)+" zijn";break;case"minItems":r="",r+="mag niet minder dan "+(s=m.params.limit)+" item",1!=s&&(r+="s"),r+=" bevatten";break;case"minLength":r="",r+="mag niet korter dan "+(s=m.params.limit)+" karakter",1!=s&&(r+="s"),r+=" zijn";break;case"minProperties":r="",r+="mag niet minder dan "+(s=m.params.limit)+" eigenschap",1!=s&&(r+="pen"),r+=" bevatten";break;case"multipleOf":r="moet een veelvoud van "+m.params.multipleOf+" zijn";break;case"not":r='mag niet overeenkomen met een schema in "not"';break;case"oneOf":r='moet overeenkomen met \xe9\xe9n schema in "oneOf"';break;case"pattern":r='moet overeenkomen met het volgende patroon: "'+m.params.pattern+'"';break;case"patternRequired":r='moet een eigenschap bevatten die overeenkomt met het pattroon: "'+m.params.missingPattern+'"';break;case"propertyNames":r="eigenschapnaam is ongeldig";break;case"required":r="moet de eigenschap "+m.params.missingProperty+" bevatten";break;case"type":r="";var i=m.params.type;r+="moet een ","number"==i?r+="nummer":"integer"==i?r+="geheel getal":"string"==i?r+="tekenreeks":"boolean"==i&&(r+="ja of nee waarde"),r+=" ("+i+") bevatten";break;case"unevaluatedItems":r="",r+="mag niet meer dan "+(s=m.params.len)+" item",1!=s&&(r+="s"),r+=" bevatten";break;case"unevaluatedProperties":r="mag geen ongecontroleerde eigenschappen bevatten";break;case"uniqueItems":r="mag geen gedupliceerde items bevatten (items ## "+m.params.j+" en "+m.params.i+" zijn identiek)";break;default:r='moet sleutelwoord validatie "'+m.keyword+'" doorstaan'}m.message=r}}catch(o){t.e(o)}finally{t.f()}}}}}]);
//# sourceMappingURL=18.6067b946.chunk.js.map