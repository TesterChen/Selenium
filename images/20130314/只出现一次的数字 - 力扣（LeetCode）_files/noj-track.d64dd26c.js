(window["nojMonomainWebpackJsonpproduction"]=window["nojMonomainWebpackJsonpproduction"]||[]).push([[10],{"8NtH":function(n,t,e){"use strict";var u=e("D57K");var o=e("BlJA");var r=e.n(o);var i=e("CzFL");var a=e.n(i);function s(t){r()(t).forEach(function(r){var i=t[r];var n=function(){var n=[];for(var t=0;t<arguments.length;t++){n[t]=arguments[t]}var e={};try{e=i.apply(void 0,u["__spread"](n))}catch(n){console.error(n);return e}var o=e.gio;if(o&&window.gio&&"production"==="production"){gio("track",o.event?o.event:a()(r),o.data)}return e};t[r]=n});return t}var c=s({switchToOldButtonClicked:function(){return{gio:{data:{}}}},confirmSwitchToOld:function(){return{gio:{data:{}}}},cancelSwitchToOld:function(){return{gio:{data:{}}}},returnToNew:function(){return{gio:{data:{}}}}});var d=s({openDiscuss:function(n){return{gio:{data:{question_slug:n}}}},closeDiscuss:function(n){return{gio:{data:{question_slug:n}}}}});var f=s({submitComment:function(n,t,e){return{gio:{data:{mention_count:t.length,comment_type:n,question_slug:e}}}},cancelComment:function(n){return{gio:{data:{question_slug:n}}}},deleteComment:function(n,t){return{gio:{data:p(n,t)}}},cancelDeleteComment:function(n,t){return{gio:{data:p(n,t)}}},confirmDeleteComment:function(n,t){return{gio:{data:p(n,t)}}}});function p(n,t){return{question_slug:n,comment_type:t?"reply":"comment",parent_comment_id:t||null}}var g={discuss:d,comment:f};var l=s({resizeComponents:function(n){return{ga:{eventCategory:"question",eventAction:"resize-components",eventValue:n},gio:{data:n}}}});var m=s({runCode:function(n,t){return{gio:{data:{codeLang:n,questionSlug:t}}}},submitCode:function(n,t){return{gio:{data:{codeLang:n,questionSlug:t}}}}});var v=u["__assign"]({submit:m},l);var w=u["__assign"]({},g,v);e.d(t,"a",function(){return _});var _={questionDetail:w,navbar:c}},Lcnu:function(n,t,e){"use strict";e.d(t,"a",function(){return c});var i=e("D57K");var o=e("ERkP");var r=e.n(o);var u=e("nnm9");var a=e.n(u);var s=function(n){window.gio=window.gio||function(){var n=[];for(var t=0;t<arguments.length;t++){n[t]=arguments[t]}return(window.gio.q=window.gio.q||[]).push(n)};gio("init","a2873925c34ecbd2",{imp:false});var e=document.createElement("script");e.type="text/javascript";e.async=true;var t=new Promise(function(n,t){e.addEventListener("load",n);e.addEventListener("error",t)});e.src="https://assets.growingio.com/2.1/gio.js";var o=document.getElementsByTagName("script")[0];o.parentNode&&o.parentNode.insertBefore(e,o);if(false){}if(n.isStaff){return t}if(n.userSlug){gio("setUserId",n.userSlug)}var r={};if(n.username){Object.assign(r,{USERNAME:n.username})}gio("people.set",i["__assign"]({},r,{SUPPORT_PWA:"ServiceWorker"in window?"yes":"no",SUPPORT_WASM:"WebAssembly"in window?"yes":"no"}));gio("send");return t};var c=function(n){i["__extends"](t,n);function t(){return n!==null&&n.apply(this,arguments)||this}t.prototype.componentDidMount=function(){if(true){s(this.props.userStatus)}else{}};t.prototype.render=function(){return this.props.children};return t}(r.a.PureComponent)},PqrJ:function(n,t,e){"use strict";e.d(t,"a",function(){return u});var r=e("D57K");var o=e("ERkP");var i=e.n(o);function u(o){return function(e){return function(n){r["__extends"](t,n);function t(){return n!==null&&n.apply(this,arguments)||this}t.prototype.componentDidMount=function(){if(window.gio){o(this.props,gio)}};t.prototype.render=function(){return i.a.createElement(e,r["__assign"]({},this.props))};return t}(i.a.PureComponent)}}}}]);