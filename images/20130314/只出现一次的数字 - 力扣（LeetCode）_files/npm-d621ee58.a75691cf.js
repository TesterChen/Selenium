(window["nojMonomainWebpackJsonpproduction"]=window["nojMonomainWebpackJsonpproduction"]||[]).push([[201],{"4C0C":function(e,n,r){var a={}.hasOwnProperty;var t=r("dAMF");e.exports={handleCharge:function(e){var n=e.credential[e.channel];if(a.call(n,"transaction_no")){this.tradePay(n.transaction_no)}else{t.innerCallback("fail",t.error("invalid_credential","missing_field_transaction_no"))}},ready:function(e){if(window.AlipayJSBridge){e&&e()}else{document.addEventListener("AlipayJSBridgeReady",e,false)}},tradePay:function(e){this.ready(function(){AlipayJSBridge.call("tradePay",{tradeNO:e},function(e){if("9000"==e.resultCode){t.innerCallback("success")}else if("6001"==e.resultCode){t.innerCallback("cancel",t.error(e.result))}else{t.innerCallback("fail",t.error(e.result))}})})}}},"7eav":function(e,n,r){var a=r("KWps");e.exports={handleCharge:function(e){a.handleCharge(e)}}},CtNv:function(e,n,r){var t=r("gzCe");var i={}.hasOwnProperty;e.exports={handleCharge:function(e){var n=e.channel;var r=e.credential[n];var a;if(i.call(r,"channel_url")){a=r.channel_url;delete r.channel_url}t.formSubmit(a,"post",r)}}},F78e:function(e,n,r){var a=r("dAMF");e.exports={PINGPP_NOTIFY_URL_BASE:"https://notify.pingxx.com/notify",handleCharge:function(e){var n=e.credential[e.channel];if(n){this.callpay(n)}else{a.innerCallback("fail",a.error("invalid_credential","missing_alipay_lite"))}},alipayLiteEnabled:function(){return typeof my!=="undefined"&&my.tradePay},callpay:function(e){if(!this.alipayLiteEnabled()){console.log("请在支付宝小程序中打开");return}var n={};n.tradeNO=e;n.complete=function(e){if(e.resultCode==9e3){a.innerCallback("success")}else if(e.resultCode==6001){a.innerCallback("cancel",a.error("用户取消支付"))}else{a.innerCallback("fail",a.error("支付失败"))}};my.tradePay(n)},runTestMode:function(e){var n="/charges/"+e.id;my.httpRequest({url:this.PINGPP_NOTIFY_URL_BASE+n+"?livemode=false",success:function(e){if(e.data=="success"){a.innerCallback("success")}else{a.innerCallback("fail",a.error("testmode_notify_fail"))}},fail:function(){a.innerCallback("fail",a.error("network_err"))}})}}},FFQW:function(e,n){e.exports={}},Iuxs:function(e,n,r){var a=r("gzCe");e.exports={CP_B2B_URL:"https://payment.chinapay.com/CTITS/service/rest/page/nref/000000000017/0/0/0/0/0",handleCharge:function(e){var n=e.credential[e.channel];a.formSubmit(this.CP_B2B_URL,"post",n)}}},K3LP:function(m,e){(function(){function f(e,n){var r=(e&65535)+(n&65535);var a=(e>>16)+(n>>16)+(r>>16);return a<<16|r&65535}function l(e,n){return e<<n|e>>>32-n}function o(e,n,r,a,t,i){return f(l(f(f(n,e),f(a,i)),t),r)}function d(e,n,r,a,t,i,l){return o(n&r|~n&a,e,n,t,i,l)}function p(e,n,r,a,t,i,l){return o(n&a|r&~a,e,n,t,i,l)}function h(e,n,r,a,t,i,l){return o(n^r^a,e,n,t,i,l)}function _(e,n,r,a,t,i,l){return o(r^(n|~a),e,n,t,i,l)}function c(e,n){e[n>>5]|=128<<n%32;e[(n+64>>>9<<4)+14]=n;var r;var a;var t;var i;var l;var o=1732584193;var c=-271733879;var s=-1732584194;var u=271733878;for(r=0;r<e.length;r+=16){a=o;t=c;i=s;l=u;o=d(o,c,s,u,e[r],7,-680876936);u=d(u,o,c,s,e[r+1],12,-389564586);s=d(s,u,o,c,e[r+2],17,606105819);c=d(c,s,u,o,e[r+3],22,-1044525330);o=d(o,c,s,u,e[r+4],7,-176418897);u=d(u,o,c,s,e[r+5],12,1200080426);s=d(s,u,o,c,e[r+6],17,-1473231341);c=d(c,s,u,o,e[r+7],22,-45705983);o=d(o,c,s,u,e[r+8],7,1770035416);u=d(u,o,c,s,e[r+9],12,-1958414417);s=d(s,u,o,c,e[r+10],17,-42063);c=d(c,s,u,o,e[r+11],22,-1990404162);o=d(o,c,s,u,e[r+12],7,1804603682);u=d(u,o,c,s,e[r+13],12,-40341101);s=d(s,u,o,c,e[r+14],17,-1502002290);c=d(c,s,u,o,e[r+15],22,1236535329);o=p(o,c,s,u,e[r+1],5,-165796510);u=p(u,o,c,s,e[r+6],9,-1069501632);s=p(s,u,o,c,e[r+11],14,643717713);c=p(c,s,u,o,e[r],20,-373897302);o=p(o,c,s,u,e[r+5],5,-701558691);u=p(u,o,c,s,e[r+10],9,38016083);s=p(s,u,o,c,e[r+15],14,-660478335);c=p(c,s,u,o,e[r+4],20,-405537848);o=p(o,c,s,u,e[r+9],5,568446438);u=p(u,o,c,s,e[r+14],9,-1019803690);s=p(s,u,o,c,e[r+3],14,-187363961);c=p(c,s,u,o,e[r+8],20,1163531501);o=p(o,c,s,u,e[r+13],5,-1444681467);u=p(u,o,c,s,e[r+2],9,-51403784);s=p(s,u,o,c,e[r+7],14,1735328473);c=p(c,s,u,o,e[r+12],20,-1926607734);o=h(o,c,s,u,e[r+5],4,-378558);u=h(u,o,c,s,e[r+8],11,-2022574463);s=h(s,u,o,c,e[r+11],16,1839030562);c=h(c,s,u,o,e[r+14],23,-35309556);o=h(o,c,s,u,e[r+1],4,-1530992060);u=h(u,o,c,s,e[r+4],11,1272893353);s=h(s,u,o,c,e[r+7],16,-155497632);c=h(c,s,u,o,e[r+10],23,-1094730640);o=h(o,c,s,u,e[r+13],4,681279174);u=h(u,o,c,s,e[r],11,-358537222);s=h(s,u,o,c,e[r+3],16,-722521979);c=h(c,s,u,o,e[r+6],23,76029189);o=h(o,c,s,u,e[r+9],4,-640364487);u=h(u,o,c,s,e[r+12],11,-421815835);s=h(s,u,o,c,e[r+15],16,530742520);c=h(c,s,u,o,e[r+2],23,-995338651);o=_(o,c,s,u,e[r],6,-198630844);u=_(u,o,c,s,e[r+7],10,1126891415);s=_(s,u,o,c,e[r+14],15,-1416354905);c=_(c,s,u,o,e[r+5],21,-57434055);o=_(o,c,s,u,e[r+12],6,1700485571);u=_(u,o,c,s,e[r+3],10,-1894986606);s=_(s,u,o,c,e[r+10],15,-1051523);c=_(c,s,u,o,e[r+1],21,-2054922799);o=_(o,c,s,u,e[r+8],6,1873313359);u=_(u,o,c,s,e[r+15],10,-30611744);s=_(s,u,o,c,e[r+6],15,-1560198380);c=_(c,s,u,o,e[r+13],21,1309151649);o=_(o,c,s,u,e[r+4],6,-145523070);u=_(u,o,c,s,e[r+11],10,-1120210379);s=_(s,u,o,c,e[r+2],15,718787259);c=_(c,s,u,o,e[r+9],21,-343485551);o=f(o,a);c=f(c,t);s=f(s,i);u=f(u,l)}return[o,c,s,u]}function s(e){var n;var r="";for(n=0;n<e.length*32;n+=8){r+=String.fromCharCode(e[n>>5]>>>n%32&255)}return r}function u(e){var n;var r=[];r[(e.length>>2)-1]=undefined;for(n=0;n<r.length;n+=1){r[n]=0}for(n=0;n<e.length*8;n+=8){r[n>>5]|=(e.charCodeAt(n/8)&255)<<n%32}return r}function n(e){return s(c(u(e),e.length*8))}function r(e,n){var r;var a=u(e);var t=[];var i=[];var l;t[15]=i[15]=undefined;if(a.length>16){a=c(a,e.length*8)}for(r=0;r<16;r+=1){t[r]=a[r]^909522486;i[r]=a[r]^1549556828}l=c(t.concat(u(n)),512+n.length*8);return s(c(i.concat(l),512+128))}function a(e){var n="0123456789abcdef";var r="";var a;var t;for(t=0;t<e.length;t+=1){a=e.charCodeAt(t);r+=n.charAt(a>>>4&15)+n.charAt(a&15)}return r}function t(e){return unescape(encodeURIComponent(e))}function i(e){return n(t(e))}function v(e){return a(i(e))}function y(e,n){return r(t(e),t(n))}function g(e,n){return a(y(e,n))}function e(e,n,r){if(!n){if(!r){return v(e)}return i(e)}if(!r){return g(n,e)}return y(n,e)}m.exports=e})()},KWps:function(e,n,r){var a=r("gzCe");var t=r("dAMF");var i={}.hasOwnProperty;e.exports={handleCharge:function(e){var n=e.credential[e.channel];var r;if(typeof n==="string"){r=n}else if(i.call(n,"url")){r=n.url}else{t.innerCallback("fail",t.error("invalid_credential","credential format is incorrect"));return}a.redirectTo(r,e.channel)}}},Knjk:function(e,n,r){var i={}.hasOwnProperty;var l=r("dAMF");var o=r("gzCe");e.exports={signAgreement:function(e){var n;if(typeof e==="string"){try{n=JSON.parse(e)}catch(e){l.innerAgreementCallback("fail",l.error("json_decode_fail",e));return false}}else{n=e}if(typeof n==="undefined"){l.innerAgreementCallback("fail",l.error("json_decode_fail"));return false}if(!i.call(n,"object")||n.object!=="agreement"||!i.call(n,"channel")||!i.call(n,"credential")||typeof n.credential!=="object"){l.innerAgreementCallback("fail",l.error("invalid_object"));return false}if(!i.call(n.credential,n.channel)){l.innerAgreementCallback("fail",l.error("invalid_credential"));return false}var r=n.credential[n.channel];var a;if(typeof r==="string"){a=r}else if(i.call(r,"credential")&&typeof r.credential==="string"){a=r.credential}if(typeof a==="undefined"){l.innerAgreementCallback("fail",l.error("invalid_credential"));return false}if(n.channel.substring(0,6)==="alipay"){var t=new URL(a);a="http://d.alipay.com/i/index.htm?iframeSrc="+encodeURIComponent("alipays://platformapi/startapp?appId=60000157"+"&appClearTop=false&startMultApp=YES&sign_params="+encodeURIComponent(t.search.substring(1)))}setTimeout(function(){o.redirectTo(a)},0);return true}}},MEUE:function(e,n,r){var a=r("Yqz/").v;var l={}.hasOwnProperty;var t=function(){r("mos0").init()};t.prototype.version=a;e.exports=new t;var o=r("oNsJ");var c=r("dAMF");var s=r("zsDl");var u=r("FFQW");var f=r("lOoC");var d=r("dyHZ");t.prototype.createPayment=function(e,n,r,a){if(typeof n==="function"){c.userCallback=n}d.init(e);if(!l.call(d,"id")){c.innerCallback("fail",c.error("invalid_charge","no_charge_id"));return}if(!l.call(d,"channel")){c.innerCallback("fail",c.error("invalid_charge","no_channel"));return}if(l.call(d,"app")){if(typeof d.app==="string"){u.app_id=d.app}else if(typeof d.app==="object"&&typeof d.app.id==="string"){u.app_id=d.app.id}}f.report({type:u.type||"pure_sdk_click",channel:d.channel,ch_id:d.id});var t=d.channel;if(!l.call(d,"credential")){c.innerCallback("fail",c.error("invalid_charge","no_credential"));return}if(!d.credential){c.innerCallback("fail",c.error("invalid_credential","credential_is_undefined"));return}if(!l.call(d.credential,t)){c.innerCallback("fail",c.error("invalid_credential","credential_is_incorrect"));return}if(!l.call(d,"livemode")){c.innerCallback("fail",c.error("invalid_charge","no_livemode_field"));return}var i=s.getChannelModule(t);if(typeof i==="undefined"){console.error('channel module "'+t+'" is undefined');c.innerCallback("fail",c.error("invalid_channel",'channel module "'+t+'" is undefined'));return}if(d.livemode===false){if(l.call(i,"runTestMode")){i.runTestMode(d)}else{o.runTestMode(d)}return}if(typeof r!="undefined"){u.signature=r}if(typeof a=="boolean"){u.debug=a}i.handleCharge(d)};t.prototype.setAPURL=function(e){u.APURL=e};t.prototype.setUrlReturnCallback=function(e,n){if(typeof e==="function"){c.urlReturnCallback=e}else{throw"callback need to be a function"}if(typeof n!=="undefined"){if(Array.isArray(n)){c.urlReturnChannels=n}else{throw"channels need to be an array"}}};t.prototype.signAgreement=function(e,n){if(typeof n==="function"){c.userAgreementCallback=n}var r=s.getExtraModule("agreement");if(typeof r==="undefined"){console.error('module "agreement" is undefined');c.innerCallback("fail",c.error("invalid_module",'module "agreement" is undefined'));return false}return r.signAgreement(e)}},Nxlw:function(e,n,r){var a=r("gzCe");var t=r("dAMF");var i={}.hasOwnProperty;e.exports={handleCharge:function(e){var n=e.channel;var r=e.credential[n];if(!i.call(r,"url")){t.innerCallback("fail",t.error("invalid_credential","missing_field:url"));return}a.redirectTo(r.url+"?"+a.stringifyData(r,n),n)}}},PpCG:function(e,n,r){var a=r("gzCe");var t={}.hasOwnProperty;e.exports={JDPAY_WAP_URL_OLD:"https://m.jdpay.com/wepay/web/pay",JDPAY_H5_URL:"https://h5pay.jd.com/jdpay/saveOrder",JDPAY_PC_URL:"https://wepay.jd.com/jdpay/saveOrder",handleCharge:function(e){var n=e.credential[e.channel];var r=this.JDPAY_H5_URL;if(t.call(n,"channelUrl")){r=n.channelUrl;delete n.channelUrl}else if(t.call(n,"merchantRemark")){r=this.JDPAY_WAP_URL_OLD}a.formSubmit(r,"post",n)}}},PxCC:function(e,n,r){var t=r("dAMF");var a=r("gzCe");var i=r("FFQW");var l=r("zsDl");var o={}.hasOwnProperty;e.exports={PINGPP_NOTIFY_URL_BASE:"https://notify.pingxx.com/notify",handleCharge:function(e){var n=e.credential[e.channel];var r=["appId","timeStamp","nonceStr","package","signType","paySign"];for(var a=0;a<r.length;a++){if(!o.call(n,r[a])){t.innerCallback("fail",t.error("invalid_credential","missing_field_"+r[a]));return}}i.jsApiParameters=n;this.callpay()},callpay:function(){var e=this;var n=l.getExtraModule("wx_jssdk");if(typeof n!=="undefined"&&n.jssdkEnabled()){n.callpay()}else if(typeof WeixinJSBridge=="undefined"){var r=function(){e.jsApiCall()};if(document.addEventListener){document.addEventListener("WeixinJSBridgeReady",r,false)}else if(document.attachEvent){document.attachEvent("WeixinJSBridgeReady",r);document.attachEvent("onWeixinJSBridgeReady",r)}}else{this.jsApiCall()}},jsApiCall:function(){if(o.call(i,"jsApiParameters")){WeixinJSBridge.invoke("getBrandWCPayRequest",i.jsApiParameters,function(e){delete i.jsApiParameters;if(e.err_msg=="get_brand_wcpay_request:ok"){t.innerCallback("success")}else if(e.err_msg=="get_brand_wcpay_request:cancel"){t.innerCallback("cancel")}else{t.innerCallback("fail",t.error("wx_result_fail",e.err_msg))}})}},runTestMode:function(e){var n=confirm("模拟付款？");if(n){var r="/charges/"+e.id;a.request(this.PINGPP_NOTIFY_URL_BASE+r+"?livemode=false","GET",null,function(e,n){if(n>=200&&n<400&&e=="success"){t.innerCallback("success")}else{var r="http_code:"+n+";response:"+e;t.innerCallback("fail",t.error("testmode_notify_fail",r))}},function(){t.innerCallback("fail",t.error("network_err"))})}}}},Qp4X:function(e,n,r){var o=r("gzCe");var c=r("zsDl");var s={}.hasOwnProperty;e.exports={ALIPAY_WAP_URL:"https://intlmapi.alipay.com/gateway.do",handleCharge:function(e){var n=e.channel;var r=e.credential[n];var a=this.ALIPAY_WAP_URL;if(s.call(r,"channel_url")){a=r.channel_url}if(!s.call(r,"_input_charset")){if(s.call(r,"service")&&r.service==="create_forex_trade_wap"){r._input_charset="utf-8"}}var t=o.stringifyData(r,n,true);var i=a+"?"+t;var l=c.getExtraModule("ap");if(o.inWeixin()&&typeof l!=="undefined"){l.pay(i)}else{o.redirectTo(i,n)}}}},QrKj:function(e,n,r){var a=r("dAMF");var t=r("gzCe");var i=r("FFQW");var l={}.hasOwnProperty;e.exports={SRC_URL:"https://open.mobile.qq.com/sdk/qqapi.js?_bid=152",ID:"mqq_api",handleCharge:function(e){var n=e.credential[e.channel];if(!l.call(n,"token_id")){a.innerCallback("fail",a.error("invalid_credential","missing_token_id"));return}i.tokenId=n.token_id;t.loadUrlJs(this.ID,this.SRC_URL,this.callpay)},callpay:function(){if(typeof mqq!="undefined"){if(mqq.QQVersion==0){a.innerCallback("fail",a.error("Not in the QQ client"));delete i.tokenId;return}mqq.tenpay.pay({tokenId:i.tokenId},function(e){if(e.resultCode==0){a.innerCallback("success")}else{a.innerCallback("fail",a.error(e.retmsg))}})}else{a.innerCallback("fail",a.error("network_err"))}delete i.tokenId}}},Vu7M:function(e,n,r){var a=r("r3zz");a.callpay=function(){var e=this;if(typeof WeixinJSBridge=="undefined"){var n=function(){e.jsApiCall()};if(document.addEventListener){document.addEventListener("WeixinJSBridgeReady",n,false)}else if(document.attachEvent){document.attachEvent("WeixinJSBridgeReady",n);document.attachEvent("onWeixinJSBridgeReady",n)}}else{this.jsApiCall()}};e.exports=a},WuYt:function(e,n,r){var a=r("KWps");var t=r("dAMF");var i=r("gzCe");var l={}.hasOwnProperty;e.exports={handleCharge:function(e){var n=e.extra;if(l.call(n,"pay_channel")){var r=n.pay_channel;if(r==="wx"&&!i.inWeixin()){t.innerCallback("fail",t.error("Not in the WeChat browser"));return}else if(r==="alipay"&&!i.inAlipay()){t.innerCallback("fail",t.error("Not in the Alipay browser"));return}}else{t.innerCallback("fail",t.error("invalid_charge","charge 格式不正确"));return}a.handleCharge(e)}}},"Yqz/":function(e,n){e.exports={v:"2.2.12"}},ZNlJ:function(e,n,r){var a=r("gzCe");e.exports={UPACP_WAP_URL:"https://gateway.95516.com/gateway/api/frontTransReq.do",handleCharge:function(e){var n=e.credential[e.channel];a.formSubmit(this.UPACP_WAP_URL,"post",n)}}},"c+Ee":function(e,n,r){var a=r("gzCe");var t=r("dAMF");var i={}.hasOwnProperty;e.exports={handleCharge:function(e){var n=e.credential[e.channel];if(typeof n==="string"){a.redirectTo(n,e.channel)}else if(typeof n==="object"&&i.call(n,"url")){a.redirectTo(n.url,e.channel)}else{t.innerCallback("fail",t.error("invalid_credential","credential 格式不正确"))}}}},dAMF:function(e,n,r){var a=r("dyHZ");e.exports={userCallback:undefined,urlReturnCallback:undefined,urlReturnChannels:["alipay_pc_direct"],userAgreementCallback:undefined,innerCallback:function(e,n){if(typeof this.userCallback==="function"){if(typeof n==="undefined"){n=this.error()}this.userCallback(e,n);this.userCallback=undefined;a.clear()}},error:function(e,n){e=typeof e==="undefined"?"":e;n=typeof n==="undefined"?"":n;return{msg:e,extra:n}},triggerUrlReturnCallback:function(e,n){if(typeof this.urlReturnCallback==="function"){this.urlReturnCallback(e,n)}},shouldReturnUrlByCallback:function(e){if(typeof this.urlReturnCallback!=="function"){return false}return this.urlReturnChannels.indexOf(e)!==-1},innerAgreementCallback:function(e,n){if(typeof this.userAgreementCallback==="function"){if(typeof n==="undefined"){n=this.error()}this.userAgreementCallback(e,n);this.userAgreementCallback=undefined}}}},dyHZ:function(e,n,r){var i=r("dAMF");var l={}.hasOwnProperty;e.exports={id:null,or_id:null,channel:null,app:null,credential:{},extra:null,livemode:null,order_no:null,time_expire:null,init:function(e){var n;if(typeof e==="string"){try{n=JSON.parse(e)}catch(e){i.innerCallback("fail",i.error("json_decode_fail",e));return}}else{n=e}if(typeof n==="undefined"){i.innerCallback("fail",i.error("json_decode_fail"));return}if(l.call(n,"object")&&n.object=="order"){n.or_id=n.id;n.order_no=n.merchant_order_no;var r=n.charge_essentials;n.channel=r.channel;n.credential=r.credential;n.extra=r.extra;if(l.call(n,"charge")&&n.charge!=null){n.id=n.charge}else if(l.call(r,"id")&&r.id!=null){n.id=r.id}else if(l.call(n,"charges")){for(var a=0;a<n.charges.data.length;a++){if(n.charges.data[a].channel===r.channel){n.id=n.charges.data[a].id;break}}}}else if(l.call(n,"object")&&n.object=="recharge"){n=n.charge}for(var t in this){if(l.call(n,t)){this[t]=n[t]}}return this},clear:function(){for(var e in this){if(typeof this[e]!=="function"){this[e]=null}}}}},dzus:function(e,n,r){var a=r("gzCe");e.exports={UPACP_PC_URL:"https://gateway.95516.com/gateway/api/frontTransReq.do",handleCharge:function(e){var n=e.credential[e.channel];a.formSubmit(this.UPACP_PC_URL,"post",n)}}},e8wh:function(e,n,r){var l=r("gzCe");var o=r("dAMF");var c={}.hasOwnProperty;e.exports={YEEPAY_WAP_URL:"https://ok.yeepay.com/paymobile/api/pay/request",YEEPAY_WAP_TEST_URL:"http://mobiletest.yeepay.com/paymobile/api/pay/request",handleCharge:function(e){var n=e.channel;var r=e.credential[n];var a=["merchantaccount","encryptkey","data"];for(var t=0;t<a.length;t++){if(!c.call(r,a[t])){o.innerCallback("fail",o.error("invalid_credential","missing_field_"+a[t]));return}}var i;if(c.call(r,"mode")&&r.mode=="test"){i=this.YEEPAY_WAP_TEST_URL}else{i=this.YEEPAY_WAP_URL}l.redirectTo(i+"?"+l.stringifyData(r,n,true),e.channel)}}},gzCe:function(e,n,r){var a=r("dAMF");var c={}.hasOwnProperty;var s=e.exports={stringifyData:function(e,n,r){if(typeof r=="undefined"){r=false}var a=[];for(var t in e){if(!c.call(e,t)||typeof e[t]==="function"){continue}if(n=="bfb_wap"&&t=="url"){continue}if(n=="yeepay_wap"&&t=="mode"){continue}if(t=="channel_url"){continue}a.push(t+"="+(r?encodeURIComponent(e[t]):e[t]))}return a.join("&")},request:function(e,n,r,a,t,i){if(typeof XMLHttpRequest==="undefined"){console.log("Function XMLHttpRequest is undefined.");return}var l=new XMLHttpRequest;if(typeof l.timeout!=="undefined"){l.timeout=6e3}n=n.toUpperCase();if(n==="GET"&&typeof r==="object"&&r){e+="?"+s.stringifyData(r,"",true)}l.open(n,e,true);if(typeof i!=="undefined"){for(var o in i){if(c.call(i,o)){l.setRequestHeader(o,i[o])}}}if(n==="POST"){l.setRequestHeader("Content-type","application/json; charset=utf-8");l.send(JSON.stringify(r))}else{l.send()}if(typeof a=="undefined"){a=function(){}}if(typeof t=="undefined"){t=function(){}}l.onreadystatechange=function(){if(l.readyState==4){a(l.responseText,l.status,l)}};l.onerror=function(e){t(l,0,e)}},formSubmit:function(e,n,r){if(typeof window==="undefined"){console.log("Not a browser, form submit url: "+e);return}var a=document.createElement("form");a.setAttribute("method",n);a.setAttribute("action",e);for(var t in r){if(c.call(r,t)){var i=document.createElement("input");i.setAttribute("type","hidden");i.setAttribute("name",t);i.setAttribute("value",r[t]);a.appendChild(i)}}document.body.appendChild(a);a.submit()},randomString:function(e){if(typeof e=="undefined"){e=32}var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";var r=n.length;var a="";for(var t=0;t<e;t++){a+=n.charAt(Math.floor(Math.random()*r))}return a},redirectTo:function(e,n){if(a.shouldReturnUrlByCallback(n)){a.triggerUrlReturnCallback(null,e);return}if(typeof window==="undefined"){console.log("Not a browser, redirect url: "+e);return}window.location.href=e},inWeixin:function(){if(typeof navigator==="undefined"){return false}var e=navigator.userAgent.toLowerCase();return e.indexOf("micromessenger")!==-1},inAlipay:function(){if(typeof navigator==="undefined"){return false}var e=navigator.userAgent.toLowerCase();return e.indexOf("alipayclient")!==-1},inWxLite:function(){if(typeof wx==="undefined"){return false}return wx.miniProgram||wx.requestPayment},inAlipayLite:function(){if(typeof my==="undefined"){return false}return my.tradePay},documentReady:function(e){if(typeof document==="undefined"){e();return}if(document.readyState!="loading"){e()}else{document.addEventListener("DOMContentLoaded",e)}},loadUrlJs:function(e,n,r){var a=document.getElementsByTagName("head")[0];var t=null;if(document.getElementById(e)==null){t=document.createElement("script");t.setAttribute("type","text/javascript");t.setAttribute("src",n);t.setAttribute("id",e);t.async=true;if(r!=null){t.onload=t.onreadystatechange=function(){if(t.ready){return false}if(!t.readyState||t.readyState=="loaded"||t.readyState=="complete"){t.ready=true;r()}}}a.appendChild(t)}else{if(r!=null){r()}}}}},hEu4:function(e,n,r){var a=r("FFQW");var t={}.hasOwnProperty;(function(){var r={};var c={};c.PADCHAR="=";c.ALPHA="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";c.makeDOMException=function(){try{return new DOMException(DOMException.INVALID_CHARACTER_ERR)}catch(e){var n=new Error("DOM Exception 5");n.code=n.number=5;n.name=n.description="INVALID_CHARACTER_ERR";n.toString=function(){return"Error: "+n.name+": "+n.message};return n}};c.getbyte64=function(e,n){var r=c.ALPHA.indexOf(e.charAt(n));if(r===-1){throw c.makeDOMException()}return r};c.decode=function(e){e=""+e;var n=c.getbyte64;var r,a,t;var i=e.length;if(i===0){return e}if(i%4!==0){throw c.makeDOMException()}r=0;if(e.charAt(i-1)===c.PADCHAR){r=1;if(e.charAt(i-2)===c.PADCHAR){r=2}i-=4}var l=[];for(a=0;a<i;a+=4){t=n(e,a)<<18|n(e,a+1)<<12|n(e,a+2)<<6|n(e,a+3);l.push(String.fromCharCode(t>>16,t>>8&255,t&255))}switch(r){case 1:t=n(e,a)<<18|n(e,a+1)<<12|n(e,a+2)<<6;l.push(String.fromCharCode(t>>16,t>>8&255));break;case 2:t=n(e,a)<<18|n(e,a+1)<<12;l.push(String.fromCharCode(t>>16));break}return l.join("")};c.getbyte=function(e,n){var r=e.charCodeAt(n);if(r>255){throw c.makeDOMException()}return r};c.encode=function(e){if(arguments.length!==1){throw new SyntaxError("Not enough arguments")}var n=c.PADCHAR;var r=c.ALPHA;var a=c.getbyte;var t,i;var l=[];e=""+e;var o=e.length-e.length%3;if(e.length===0){return e}for(t=0;t<o;t+=3){i=a(e,t)<<16|a(e,t+1)<<8|a(e,t+2);l.push(r.charAt(i>>18));l.push(r.charAt(i>>12&63));l.push(r.charAt(i>>6&63));l.push(r.charAt(i&63))}switch(e.length-o){case 1:i=a(e,t)<<16;l.push(r.charAt(i>>18)+r.charAt(i>>12&63)+n+n);break;case 2:i=a(e,t)<<16|a(e,t+1)<<8;l.push(r.charAt(i>>18)+r.charAt(i>>12&63)+r.charAt(i>>6&63)+n);break}return l.join("")};r.url="pay.htm";r.pay=function(e){var n=encodeURIComponent(c.encode(e));if(t.call(a,"APURL")){r.url=a.APURL}location.href=r.url+"?goto="+n};r.decode=function(e){return c.decode(decodeURIComponent(e))};e.exports=r})()},jhc5:function(e,n,r){var a=r("gzCe");var t={}.hasOwnProperty;e.exports={CMB_WALLET_URL:"https://netpay.cmbchina.com/netpayment/BaseHttp.dll?MB_EUserPay",handleCharge:function(e){var n=e.credential[e.channel];var r=this.CMB_WALLET_URL;if(t.call(n,"ChannelUrl")){r=n.ChannelUrl;delete n.ChannelUrl}if(t.call(n,"channelVersion")){delete n.channelVersion}a.formSubmit(r,"post",n)}}},lOoC:function(e,n,r){var l=r("gzCe");var i=r("FFQW");var o=r("K3LP");var a={seperator:"###",limit:1,report_url:"https://statistics.pingxx.com/one_stats",timeout:100};var c=function(e,n){var r=new RegExp("(^|&)"+n+"=([^&]*)(&|$)","i");var a=e.substring(0).match(r);if(a!==null)return unescape(a[2]);return null};var s=function(){return navigator.userAgent};var u=function(){return window.location.host};a.store=function(e){if(typeof localStorage==="undefined"||localStorage===null)return;var n=this;var r={};r.app_id=e.app_id||i.app_id||"app_not_defined";r.ch_id=e.ch_id||"";r.channel=e.channel||"";r.type=e.type||"";r.user_agent=s();r.host=u();r.time=(new Date).getTime();r.puid=i.puid;var a="app_id="+r.app_id+"&channel="+r.channel+"&ch_id="+r.ch_id+"&host="+r.host+"&time="+r.time+"&type="+r.type+"&user_agent="+r.user_agent+"&puid="+r.puid;var t=a;if(localStorage.getItem("PPP_ONE_STATS")!==null&&localStorage.getItem("PPP_ONE_STATS").length!==0){t=localStorage.getItem("PPP_ONE_STATS")+n.seperator+a}try{localStorage.setItem("PPP_ONE_STATS",t)}catch(e){}};a.send=function(){if(typeof localStorage==="undefined"||localStorage===null)return;var e=this;var n=localStorage.getItem("PPP_ONE_STATS");if(n===null||n.split(e.seperator).length<e.limit){return}try{var r=[];var a=n.split(e.seperator);var t=o(a.join("&"));for(var i=0;i<a.length;i++){r.push({app_id:c(a[i],"app_id"),channel:c(a[i],"channel"),ch_id:c(a[i],"ch_id"),host:c(a[i],"host"),time:c(a[i],"time"),type:c(a[i],"type"),user_agent:c(a[i],"user_agent"),puid:c(a[i],"puid")})}l.request(e.report_url,"POST",r,function(e,n){if(n==200){localStorage.removeItem("PPP_ONE_STATS")}},undefined,{"X-Pingpp-Report-Token":t})}catch(e){}};a.report=function(e){var n=this;n.store(e);setTimeout(function(){!l.inWxLite()&&n.send()},n.timeout)};e.exports=a},mos0:function(e,n,r){var a=r("FFQW");var t=r("gzCe");var i=r("lOoC");e.exports={SRC_URL:"https://cookie.pingxx.com",init:function(){var e=this;t.documentReady(function(){try{!(t.inWxLite()||t.inAlipayLite())&&e.initPuid()}catch(e){}})},initPuid:function(){if(typeof window==="undefined"||typeof localStorage==="undefined"||localStorage===null){return}var e=localStorage.getItem("pingpp_uid");if(e===null){e=t.randomString();try{localStorage.setItem("pingpp_uid",e)}catch(e){}}a.puid=e;if(!document.getElementById("p_analyse_iframe")){var n;try{n=document.createElement("iframe")}catch(e){n=document.createElement('<iframe name="ifr"></iframe>')}n.id="p_analyse_iframe";n.src=this.SRC_URL+"/?puid="+e;n.style.display="none";document.body.appendChild(n)}setTimeout(function(){i.send()},0)}}},oNsJ:function(e,n,r){var a=r("gzCe");var t={}.hasOwnProperty;e.exports={PINGPP_MOCK_URL:"http://sissi.pingxx.com/mock.php",runTestMode:function(e){var n={ch_id:e.id,scheme:"http",channel:e.channel};if(t.call(e,"order_no")){n.order_no=e.order_no}else if(t.call(e,"orderNo")){n.order_no=e.orderNo}if(t.call(e,"time_expire")){n.time_expire=e.time_expire}else if(t.call(e,"timeExpire")){n.time_expire=e.timeExpire}if(t.call(e,"extra")){n.extra=encodeURIComponent(JSON.stringify(e.extra))}a.redirectTo(this.PINGPP_MOCK_URL+"?"+a.stringifyData(n),e.channel)}}},r3zz:function(e,n,r){var t=r("dAMF");var a=r("gzCe");var i=r("FFQW");var l=r("zsDl");var o={}.hasOwnProperty;e.exports={PINGPP_NOTIFY_URL_BASE:"https://notify.pingxx.com/notify",handleCharge:function(e){var n=e.credential[e.channel];var r=["appId","timeStamp","nonceStr","package","signType","paySign"];for(var a=0;a<r.length;a++){if(!o.call(n,r[a])){t.innerCallback("fail",t.error("invalid_credential","missing_field_"+r[a]));return}}i.jsApiParameters=n;this.callpay()},callpay:function(){var e=this;var n=l.getExtraModule("wx_jssdk");if(typeof n!=="undefined"&&n.jssdkEnabled()){n.callpay()}else if(typeof WeixinJSBridge=="undefined"){var r=function(){e.jsApiCall()};if(document.addEventListener){document.addEventListener("WeixinJSBridgeReady",r,false)}else if(document.attachEvent){document.attachEvent("WeixinJSBridgeReady",r);document.attachEvent("onWeixinJSBridgeReady",r)}}else{this.jsApiCall()}},jsApiCall:function(){if(o.call(i,"jsApiParameters")){WeixinJSBridge.invoke("getBrandWCPayRequest",i.jsApiParameters,function(e){delete i.jsApiParameters;if(e.err_msg=="get_brand_wcpay_request:ok"){t.innerCallback("success")}else if(e.err_msg=="get_brand_wcpay_request:cancel"){t.innerCallback("cancel")}else{t.innerCallback("fail",t.error("wx_result_fail",e.err_msg))}})}},runTestMode:function(e){var n=confirm("模拟付款？");if(n){var r="/charges/"+e.id;a.request(this.PINGPP_NOTIFY_URL_BASE+r+"?livemode=false","GET",null,function(e,n){if(n>=200&&n<400&&e=="success"){t.innerCallback("success")}else{var r="http_code:"+n+";response:"+e;t.innerCallback("fail",t.error("testmode_notify_fail",r))}},function(){t.innerCallback("fail",t.error("network_err"))})}}}},sVn1:function(e,n,r){var t=r("gzCe");var i={}.hasOwnProperty;e.exports={handleCharge:function(e){var n=e.channel;var r=e.credential[n];var a;if(i.call(r,"channel_url")){a=r.channel_url;delete r.channel_url}t.formSubmit(a,"post",r)}}},tCCl:function(e,n,r){var i=r("gzCe");var l={}.hasOwnProperty;e.exports={ALIPAY_PC_DIRECT_URL:"https://intlmapi.alipay.com/gateway.do",handleCharge:function(e){var n=e.channel;var r=e.credential[n];var a=this.ALIPAY_PC_DIRECT_URL;if(l.call(r,"channel_url")){a=r.channel_url}if(!l.call(r,"_input_charset")){if(l.call(r,"service")&&r.service==="create_forex_trade"){r._input_charset="utf-8"}}var t=i.stringifyData(r,n,true);i.redirectTo(a+"?"+t,n)}}},u41C:function(e,n,r){var o=r("gzCe");var c=r("zsDl");var s={}.hasOwnProperty;e.exports={ALIPAY_WAP_URL_OLD:"https://wappaygw.alipay.com/service/rest.htm",ALIPAY_WAP_URL:"https://mapi.alipay.com/gateway.do",handleCharge:function(e){var n=e.channel;var r=e.credential[n];var a=this.ALIPAY_WAP_URL;if(s.call(r,"req_data")){a=this.ALIPAY_WAP_URL_OLD}else if(s.call(r,"channel_url")){a=r.channel_url}if(!s.call(r,"_input_charset")){if(s.call(r,"service")&&r.service==="alipay.wap.create.direct.pay.by.user"||s.call(r,"req_data")){r._input_charset="utf-8"}}var t=o.stringifyData(r,n,true);var i=a+"?"+t;var l=c.getExtraModule("ap");if(o.inWeixin()&&typeof l!=="undefined"){l.pay(i)}else{o.redirectTo(i,n)}}}},v9jy:function(e,n,r){var a=r("gzCe");e.exports={handleCharge:function(e){var n=e.credential[e.channel];a.redirectTo(n,e.channel)}}},yNAe:function(e,n,r){var i=r("gzCe");var l={}.hasOwnProperty;e.exports={ALIPAY_PC_DIRECT_URL:"https://mapi.alipay.com/gateway.do",handleCharge:function(e){var n=e.channel;var r=e.credential[n];var a=this.ALIPAY_PC_DIRECT_URL;if(l.call(r,"channel_url")){a=r.channel_url}if(!l.call(r,"_input_charset")){if(l.call(r,"service")&&r.service==="create_direct_pay_by_user"){r._input_charset="utf-8"}}var t=i.stringifyData(r,n,true);i.redirectTo(a+"?"+t,n)}}},zGy8:function(e,n,r){var t=r("FFQW");var i=r("dAMF");var l={}.hasOwnProperty;e.exports={PINGPP_NOTIFY_URL_BASE:"https://notify.pingxx.com/notify",handleCharge:function(e){var n=e.credential[e.channel];var r=["appId","timeStamp","nonceStr","package","signType","paySign"];for(var a=0;a<r.length;a++){if(!l.call(n,r[a])){i.innerCallback("fail",i.error("invalid_credential","missing_field_"+r[a]));return}}t.jsApiParameters=n;this.callpay()},wxLiteEnabled:function(){return typeof wx!=="undefined"&&wx.requestPayment},callpay:function(){if(!this.wxLiteEnabled()){console.log("请在微信小程序中打开");return}var e=t.jsApiParameters;delete e.appId;e.complete=function(e){if(e.errMsg==="requestPayment:ok"){i.innerCallback("success")}if(e.errMsg==="requestPayment:cancel"||e.errMsg==="requestPayment:fail cancel"){i.innerCallback("cancel",i.error("用户取消支付"))}if(e.err_code!=="undefined"&&e.err_desc!=="undefined"){i.innerCallback("fail",i.error(e.err_desc,e))}};wx.requestPayment(e)},runTestMode:function(e){var n="/charges/"+e.id;wx.request({url:this.PINGPP_NOTIFY_URL_BASE+n+"?livemode=false",success:function(e){if(e.data=="success"){i.innerCallback("success")}else{i.innerCallback("fail",i.error("testmode_notify_fail"))}},fail:function(){i.innerCallback("fail",i.error("network_err"))}})}}},zsDl:function(e,n,r){var a={}.hasOwnProperty;var t={};e.exports=t;t.channels={alipay_lite:r("F78e"),alipay_pc_direct:r("yNAe"),alipay_qr:r("4C0C"),alipay_wap:r("u41C"),bfb_wap:r("Nxlw"),cb_alipay_pc_direct:r("tCCl"),cb_alipay_wap:r("Qp4X"),cb_wx_pub:r("PxCC"),ccb_qr:r("7eav"),cmb_pc_qr:r("CtNv"),cmb_wallet:r("jhc5"),cp_b2b:r("Iuxs"),isv_wap:r("WuYt"),jdpay_wap:r("PpCG"),paypal:r("v9jy"),qpay_pub:r("QrKj"),upacp_b2b:r("sVn1"),upacp_pc:r("dzus"),upacp_wap:r("ZNlJ"),wx_lite:r("zGy8"),wx_pub:r("r3zz"),wx_pub_hzbank:r("Vu7M"),wx_wap:r("c+Ee"),yeepay_wap:r("e8wh")};t.extras={ap:r("hEu4"),agreement:r("Knjk")};t.getChannelModule=function(e){if(a.call(t.channels,e)){return t.channels[e]}return undefined};t.getExtraModule=function(e){if(a.call(t.extras,e)){return t.extras[e]}return undefined}}}]);