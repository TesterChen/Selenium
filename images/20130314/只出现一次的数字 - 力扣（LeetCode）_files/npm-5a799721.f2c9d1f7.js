(window["nojMonomainWebpackJsonpproduction"]=window["nojMonomainWebpackJsonpproduction"]||[]).push([[86],{LaGA:function(t,j,e){"use strict";(function(t){var r=function(){if(typeof Map!=="undefined"){return Map}function r(t,n){var r=-1;t.some(function(t,e){if(t[0]===n){r=e;return true}return false});return r}return function(){function t(){this.__entries__=[]}Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:true,configurable:true});t.prototype.get=function(t){var e=r(this.__entries__,t);var n=this.__entries__[e];return n&&n[1]};t.prototype.set=function(t,e){var n=r(this.__entries__,t);if(~n){this.__entries__[n][1]=e}else{this.__entries__.push([t,e])}};t.prototype.delete=function(t){var e=this.__entries__;var n=r(e,t);if(~n){e.splice(n,1)}};t.prototype.has=function(t){return!!~r(this.__entries__,t)};t.prototype.clear=function(){this.__entries__.splice(0)};t.prototype.forEach=function(t,e){if(e===void 0){e=null}for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];t.call(e,i[1],i[0])}};return t}()}();var e=typeof window!=="undefined"&&typeof document!=="undefined"&&window.document===document;var n=function(){if(typeof t!=="undefined"&&t.Math===Math){return t}if(typeof self!=="undefined"&&self.Math===Math){return self}if(typeof window!=="undefined"&&window.Math===Math){return window}return Function("return this")()}();var u=function(){if(typeof requestAnimationFrame==="function"){return requestAnimationFrame.bind(n)}return function(t){return setTimeout(function(){return t(Date.now())},1e3/60)}}();var c=2;function i(t,e){var n=false,r=false,i=0;function o(){if(n){n=false;t()}if(r){a()}}function s(){u(o)}function a(){var t=Date.now();if(n){if(t-i<c){return}r=true}else{n=true;r=false;setTimeout(s,e)}i=t}return a}var o=20;var s=["top","right","bottom","left","width","height","size","weight"];var a=typeof MutationObserver!=="undefined";var f=function(){function t(){this.connected_=false;this.mutationEventsAdded_=false;this.mutationsObserver_=null;this.observers_=[];this.onTransitionEnd_=this.onTransitionEnd_.bind(this);this.refresh=i(this.refresh.bind(this),o)}t.prototype.addObserver=function(t){if(!~this.observers_.indexOf(t)){this.observers_.push(t)}if(!this.connected_){this.connect_()}};t.prototype.removeObserver=function(t){var e=this.observers_;var n=e.indexOf(t);if(~n){e.splice(n,1)}if(!e.length&&this.connected_){this.disconnect_()}};t.prototype.refresh=function(){var t=this.updateObservers_();if(t){this.refresh()}};t.prototype.updateObservers_=function(){var t=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});t.forEach(function(t){return t.broadcastActive()});return t.length>0};t.prototype.connect_=function(){if(!e||this.connected_){return}document.addEventListener("transitionend",this.onTransitionEnd_);window.addEventListener("resize",this.refresh);if(a){this.mutationsObserver_=new MutationObserver(this.refresh);this.mutationsObserver_.observe(document,{attributes:true,childList:true,characterData:true,subtree:true})}else{document.addEventListener("DOMSubtreeModified",this.refresh);this.mutationEventsAdded_=true}this.connected_=true};t.prototype.disconnect_=function(){if(!e||!this.connected_){return}document.removeEventListener("transitionend",this.onTransitionEnd_);window.removeEventListener("resize",this.refresh);if(this.mutationsObserver_){this.mutationsObserver_.disconnect()}if(this.mutationEventsAdded_){document.removeEventListener("DOMSubtreeModified",this.refresh)}this.mutationsObserver_=null;this.mutationEventsAdded_=false;this.connected_=false};t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=e===void 0?"":e;var r=s.some(function(t){return!!~n.indexOf(t)});if(r){this.refresh()}};t.getInstance=function(){if(!this.instance_){this.instance_=new t}return this.instance_};t.instance_=null;return t}();var h=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:false,writable:false,configurable:true})}return t};var d=function(t){var e=t&&t.ownerDocument&&t.ownerDocument.defaultView;return e||n};var v=O(0,0,0,0);function p(t){return parseFloat(t)||0}function l(r){var t=[];for(var e=1;e<arguments.length;e++){t[e-1]=arguments[e]}return t.reduce(function(t,e){var n=r["border-"+e+"-width"];return t+p(n)},0)}function _(t){var e=["top","right","bottom","left"];var n={};for(var r=0,i=e;r<i.length;r++){var o=i[r];var s=t["padding-"+o];n[o]=p(s)}return n}function b(t){var e=t.getBBox();return O(0,0,e.width,e.height)}function m(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n){return v}var r=d(t).getComputedStyle(t);var i=_(r);var o=i.left+i.right;var s=i.top+i.bottom;var a=p(r.width),u=p(r.height);if(r.boxSizing==="border-box"){if(Math.round(a+o)!==e){a-=l(r,"left","right")+o}if(Math.round(u+s)!==n){u-=l(r,"top","bottom")+s}}if(!w(t)){var c=Math.round(a+o)-e;var f=Math.round(u+s)-n;if(Math.abs(c)!==1){a-=c}if(Math.abs(f)!==1){u-=f}}return O(i.left,i.top,a,u)}var y=function(){if(typeof SVGGraphicsElement!=="undefined"){return function(t){return t instanceof d(t).SVGGraphicsElement}}return function(t){return t instanceof d(t).SVGElement&&typeof t.getBBox==="function"}}();function w(t){return t===d(t).document.documentElement}function g(t){if(!e){return v}if(y(t)){return b(t)}return m(t)}function E(t){var e=t.x,n=t.y,r=t.width,i=t.height;var o=typeof DOMRectReadOnly!=="undefined"?DOMRectReadOnly:Object;var s=Object.create(o.prototype);h(s,{x:e,y:n,width:r,height:i,top:n,right:e+r,bottom:i+n,left:e});return s}function O(t,e,n,r){return{x:t,y:e,width:n,height:r}}var M=function(){function t(t){this.broadcastWidth=0;this.broadcastHeight=0;this.contentRect_=O(0,0,0,0);this.target=t}t.prototype.isActive=function(){var t=g(this.target);this.contentRect_=t;return t.width!==this.broadcastWidth||t.height!==this.broadcastHeight};t.prototype.broadcastRect=function(){var t=this.contentRect_;this.broadcastWidth=t.width;this.broadcastHeight=t.height;return t};return t}();var A=function(){function t(t,e){var n=E(e);h(this,{target:t,contentRect:n})}return t}();var T=function(){function t(t,e,n){this.activeObservations_=[];this.observations_=new r;if(typeof t!=="function"){throw new TypeError("The callback provided as parameter 1 is not a function.")}this.callback_=t;this.controller_=e;this.callbackCtx_=n}t.prototype.observe=function(t){if(!arguments.length){throw new TypeError("1 argument required, but only 0 present.")}if(typeof Element==="undefined"||!(Element instanceof Object)){return}if(!(t instanceof d(t).Element)){throw new TypeError('parameter 1 is not of type "Element".')}var e=this.observations_;if(e.has(t)){return}e.set(t,new M(t));this.controller_.addObserver(this);this.controller_.refresh()};t.prototype.unobserve=function(t){if(!arguments.length){throw new TypeError("1 argument required, but only 0 present.")}if(typeof Element==="undefined"||!(Element instanceof Object)){return}if(!(t instanceof d(t).Element)){throw new TypeError('parameter 1 is not of type "Element".')}var e=this.observations_;if(!e.has(t)){return}e.delete(t);if(!e.size){this.controller_.removeObserver(this)}};t.prototype.disconnect=function(){this.clearActive();this.observations_.clear();this.controller_.removeObserver(this)};t.prototype.gatherActive=function(){var e=this;this.clearActive();this.observations_.forEach(function(t){if(t.isActive()){e.activeObservations_.push(t)}})};t.prototype.broadcastActive=function(){if(!this.hasActive()){return}var t=this.callbackCtx_;var e=this.activeObservations_.map(function(t){return new A(t.target,t.broadcastRect())});this.callback_.call(t,e,t);this.clearActive()};t.prototype.clearActive=function(){this.activeObservations_.splice(0)};t.prototype.hasActive=function(){return this.activeObservations_.length>0};return t}();var R=typeof WeakMap!=="undefined"?new WeakMap:new r;var x=function(){function r(t){if(!(this instanceof r)){throw new TypeError("Cannot call a class as a function.")}if(!arguments.length){throw new TypeError("1 argument required, but only 0 present.")}var e=f.getInstance();var n=new T(t,e,this);R.set(this,n)}return r}();["observe","unobserve","disconnect"].forEach(function(e){x.prototype[e]=function(){var t;return(t=R.get(this))[e].apply(t,arguments)}});var k=function(){if(typeof n.ResizeObserver!=="undefined"){return n.ResizeObserver}return x}();j["a"]=k}).call(this,e("fRV1"))}}]);