(this["webpackJsonpnimflow-portal"]=this["webpackJsonpnimflow-portal"]||[]).push([[42],{646:function(a,e,s){"use strict";var r=s(102);a.exports=function(a){if(a&&a.length){var e,s=r(a);try{for(s.s();!(e=s.n()).done;){var m=e.value,i=void 0;switch(m.keyword){case"additionalItems":case"items":i="",i+="\u4e0d\u53ef\u4ee5\u8d85\u904e"+m.params.limit+"\u500b\u5143\u7d20";break;case"additionalProperties":i="\u4e0d\u53ef\u4ee5\u6709\u984d\u5916\u7684\u5c6c\u6027";break;case"anyOf":i="\u4e0d\u7b26\u5408 anyOf \u6307\u5b9a\u7684\u6a21\u5f0f";break;case"const":i="\u61c9\u8a72\u7b49\u65bc\u5e38\u6578";break;case"contains":i="\u61c9\u8a72\u5305\u542b\u4e00\u500b\u6709\u6548\u5143\u7d20";break;case"dependencies":case"dependentRequired":i="";m.params.depsCount;i+="\u61c9\u8a72\u8981\u6709\u5c6c\u6027"+m.params.property+"\u7684\u4f9d\u8cf4\u5c6c\u6027"+m.params.deps;break;case"discriminator":switch(m.params.error){case"tag":i='\u6a19\u7c64 "'+m.params.tag+'" \u7684\u985e\u578b\u5fc5\u9808\u662f\u5b57\u4e32';break;case"mapping":i='\u6a19\u7c64 "'+m.params.tag+'" \u5fc5\u9808\u5728 oneOf \u5176\u4e2d\u4e4b\u4e00';break;default:i='\u61c9\u8a72\u901a\u904e "'+m.keyword+' \u95dc\u9375\u8a5e\u6aa2\u9a57"'}break;case"enum":i="\u61c9\u8a72\u8981\u5728\u9810\u8a2d\u7684\u503c\u4e4b\u4e2d";break;case"false schema":i="\u5e03\u6797\u6a21\u5f0f\u4e0d\u6b63\u78ba";break;case"format":i="\u61c9\u8a72\u8981\u7b26\u5408"+m.params.format+"\u683c\u5f0f";break;case"formatMaximum":case"formatExclusiveMaximum":i="",i+="\u61c9\u8a72\u662f "+(m.params.comparison+" "+m.params.limit);break;case"formatMinimum":case"formatExclusiveMinimum":i="",i+="\u61c9\u8a72\u662f "+(m.params.comparison+" "+m.params.limit);break;case"if":i='\u61c9\u8a72\u7b26\u5408 "'+m.params.failingKeyword+'" schema';break;case"maximum":case"exclusiveMaximum":i="",i+="\u61c9\u8a72\u8981 "+(m.params.comparison+" "+m.params.limit);break;case"maxItems":i="",i+="\u4e0d\u61c9\u8a72\u591a\u65bc "+m.params.limit+" \u500b";break;case"maxLength":i="",i+="\u4e0d\u61c9\u8a72\u591a\u65bc "+m.params.limit+" \u500b\u5b57\u5143";break;case"maxProperties":i="",i+="\u4e0d\u61c9\u8a72\u591a\u65bc "+m.params.limit+" \u500b\u5c6c\u6027";break;case"minimum":case"exclusiveMinimum":i="",i+="\u61c9\u8a72\u8981 "+(m.params.comparison+" "+m.params.limit);break;case"minItems":i="",i+="\u4e0d\u61c9\u8a72\u5c11\u65bc "+m.params.limit+" \u500b";break;case"minLength":i="",i+="\u4e0d\u61c9\u8a72\u5c11\u65bc "+m.params.limit+" \u500b\u5b57\u5143";break;case"minProperties":i="",i+="\u4e0d\u61c9\u8a72\u5c11\u65bc "+m.params.limit+" \u500b\u5c6c\u6027";break;case"multipleOf":i="\u61c9\u8a72\u662f "+m.params.multipleOf+" \u7684\u6574\u6578\u500d";break;case"not":i='\u4e0d\u61c9\u8a72\u7b26\u5408 "not" schema';break;case"oneOf":i='\u53ea\u80fd\u7b26\u5408\u4e00\u500b "oneOf" \u4e2d\u7684 schema';break;case"pattern":i='\u61c9\u8a72\u7b26\u5408\u6a21\u5f0f "'+m.params.pattern+'"';break;case"patternRequired":i="\u61c9\u8a72\u6709\u5c6c\u6027\u5c0d\u61c9\u6a21\u5f0f "+m.params.missingPattern;break;case"propertyNames":i="\u5c5e\u6027\u540d \u7121\u6548";break;case"required":i="\u61c9\u8a72\u6709\u5fc5\u9808\u5c6c\u6027 "+m.params.missingProperty;break;case"type":i="\u61c9\u8a72\u662f "+m.params.type+" \u985e\u578b";break;case"unevaluatedItems":i="",i+=" \u7684\u5143\u7d20\u4e0d\u53ef\u4ee5\u8d85\u904e "+m.params.len+" \u500b";break;case"unevaluatedProperties":i="\u4e0d\u61c9\u8a72\u6709\u672a\u9a57\u8b49\u7684\u5c6c\u6027";break;case"uniqueItems":i="\u4e0d\u61c9\u8a72\u6709\u91cd\u8907\u9805\u76ee (\u7b2c "+m.params.j+" \u9805\u548c\u7b2c "+m.params.i+" \u9805\u662f\u91cd\u8907\u7684)";break;default:i='\u61c9\u8a72\u901a\u904e "'+m.keyword+' \u95dc\u9375\u8a5e\u6aa2\u9a57"'}m.message=i}}catch(t){s.e(t)}finally{s.f()}}}}}]);
//# sourceMappingURL=42.e246b0b7.chunk.js.map