(window["nojMonomainWebpackJsonpproduction"]=window["nojMonomainWebpackJsonpproduction"]||[]).push([[234],{bqB3:function(t,n,e){"use strict";var r="http://www.w3.org/1999/xhtml";var i={svg:"http://www.w3.org/2000/svg",xhtml:r,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};var u=function(t){var n=t+="",e=n.indexOf(":");if(e>=0&&(n=t.slice(0,e))!=="xmlns")t=t.slice(e+1);return i.hasOwnProperty(n)?{space:i[n],local:t}:t};function o(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===r&&t.documentElement.namespaceURI===r?t.createElement(e):t.createElementNS(n,e)}}function a(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}var c=function(t){var n=u(t);return(n.local?a:o)(n)};function s(){}var l=function(t){return t==null?s:function(){return this.querySelector(t)}};var f=function(t){if(typeof t!=="function")t=l(t);for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i){for(var u=n[i],o=u.length,a=r[i]=new Array(o),c,s,f=0;f<o;++f){if((c=u[f])&&(s=t.call(c,c.__data__,f,u))){if("__data__"in c)s.__data__=c.__data__;a[f]=s}}}return new Wt(r,this._parents)};function h(){return[]}var p=function(t){return t==null?h:function(){return this.querySelectorAll(t)}};var v=function(t){if(typeof t!=="function")t=p(t);for(var n=this._groups,e=n.length,r=[],i=[],u=0;u<e;++u){for(var o=n[u],a=o.length,c,s=0;s<a;++s){if(c=o[s]){r.push(t.call(c,c.__data__,s,o));i.push(c)}}}return new Wt(r,i)};var _=function(t){return function(){return this.matches(t)}};if(typeof document!=="undefined"){var d=document.documentElement;if(!d.matches){var m=d.webkitMatchesSelector||d.msMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector;_=function(t){return function(){return m.call(this,t)}}}}var y=_;var g=function(t){if(typeof t!=="function")t=y(t);for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i){for(var u=n[i],o=u.length,a=r[i]=[],c,s=0;s<o;++s){if((c=u[s])&&t.call(c,c.__data__,s,u)){a.push(c)}}}return new Wt(r,this._parents)};var w=function(t){return new Array(t.length)};var A=function(){return new Wt(this._enter||this._groups.map(w),this._parents)};function x(t,n){this.ownerDocument=t.ownerDocument;this.namespaceURI=t.namespaceURI;this._next=null;this._parent=t;this.__data__=n}x.prototype={constructor:x,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};var S=function(t){return function(){return t}};var b="$";function E(t,n,e,r,i,u){var o=0,a,c=n.length,s=u.length;for(;o<s;++o){if(a=n[o]){a.__data__=u[o];r[o]=a}else{e[o]=new x(t,u[o])}}for(;o<c;++o){if(a=n[o]){i[o]=a}}}function N(t,n,e,r,i,u,o){var a,c,s={},f=n.length,l=u.length,h=new Array(f),p;for(a=0;a<f;++a){if(c=n[a]){h[a]=p=b+o.call(c,c.__data__,a,n);if(p in s){i[a]=c}else{s[p]=c}}}for(a=0;a<l;++a){p=b+o.call(t,u[a],a,u);if(c=s[p]){r[a]=c;c.__data__=u[a];s[p]=null}else{e[a]=new x(t,u[a])}}for(a=0;a<f;++a){if((c=n[a])&&s[h[a]]===c){i[a]=c}}}var C=function(t,n){if(!t){p=new Array(this.size()),s=-1;this.each(function(t){p[++s]=t});return p}var e=n?N:E,r=this._parents,i=this._groups;if(typeof t!=="function")t=S(t);for(var u=i.length,o=new Array(u),a=new Array(u),c=new Array(u),s=0;s<u;++s){var f=r[s],l=i[s],h=l.length,p=t.call(f,f&&f.__data__,s,r),v=p.length,_=a[s]=new Array(v),d=o[s]=new Array(v),m=c[s]=new Array(h);e(f,l,_,d,m,p,n);for(var y=0,g=0,w,A;y<v;++y){if(w=_[y]){if(y>=g)g=y+1;while(!(A=d[g])&&++g<v);w._next=A||null}}}o=new Wt(o,r);o._enter=a;o._exit=c;return o};var M=function(){return new Wt(this._exit||this._groups.map(w),this._parents)};var L=function(t){for(var n=this._groups,e=t._groups,r=n.length,i=e.length,u=Math.min(r,i),o=new Array(r),a=0;a<u;++a){for(var c=n[a],s=e[a],f=c.length,l=o[a]=new Array(f),h,p=0;p<f;++p){if(h=c[p]||s[p]){l[p]=h}}}for(;a<r;++a){o[a]=n[a]}return new Wt(o,this._parents)};var P=function(){for(var t=this._groups,n=-1,e=t.length;++n<e;){for(var r=t[n],i=r.length-1,u=r[i],o;--i>=0;){if(o=r[i]){if(u&&u!==o.nextSibling)u.parentNode.insertBefore(o,u);u=o}}}return this};var T=function(e){if(!e)e=B;function t(t,n){return t&&n?e(t.__data__,n.__data__):!t-!n}for(var n=this._groups,r=n.length,i=new Array(r),u=0;u<r;++u){for(var o=n[u],a=o.length,c=i[u]=new Array(a),s,f=0;f<a;++f){if(s=o[f]){c[f]=s}}c.sort(t)}return new Wt(i,this._parents).order()};function B(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}var q=function(){var t=arguments[0];arguments[0]=this;t.apply(null,arguments);return this};var D=function(){var t=new Array(this.size()),n=-1;this.each(function(){t[++n]=this});return t};var O=function(){for(var t=this._groups,n=0,e=t.length;n<e;++n){for(var r=t[n],i=0,u=r.length;i<u;++i){var o=r[i];if(o)return o}}return null};var V=function(){var t=0;this.each(function(){++t});return t};var k=function(){return!this.node()};var j=function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e){for(var i=n[e],u=0,o=i.length,a;u<o;++u){if(a=i[u])t.call(a,a.__data__,u,i)}}return this};function R(t){return function(){this.removeAttribute(t)}}function z(t){return function(){this.removeAttributeNS(t.space,t.local)}}function H(t,n){return function(){this.setAttribute(t,n)}}function I(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function U(n,e){return function(){var t=e.apply(this,arguments);if(t==null)this.removeAttribute(n);else this.setAttribute(n,t)}}function G(n,e){return function(){var t=e.apply(this,arguments);if(t==null)this.removeAttributeNS(n.space,n.local);else this.setAttributeNS(n.space,n.local,t)}}var X=function(t,n){var e=u(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((n==null?e.local?z:R:typeof n==="function"?e.local?G:U:e.local?I:H)(e,n))};var J=function(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView};function W(t){return function(){this.style.removeProperty(t)}}function Y(t,n,e){return function(){this.style.setProperty(t,n,e)}}function $(n,e,r){return function(){var t=e.apply(this,arguments);if(t==null)this.style.removeProperty(n);else this.style.setProperty(n,t,r)}}var F=function(t,n,e){return arguments.length>1?this.each((n==null?W:typeof n==="function"?$:Y)(t,n,e==null?"":e)):K(this.node(),t)};function K(t,n){return t.style.getPropertyValue(n)||J(t).getComputedStyle(t,null).getPropertyValue(n)}function Q(t){return function(){delete this[t]}}function Z(t,n){return function(){this[t]=n}}function tt(n,e){return function(){var t=e.apply(this,arguments);if(t==null)delete this[n];else this[n]=t}}var nt=function(t,n){return arguments.length>1?this.each((n==null?Q:typeof n==="function"?tt:Z)(t,n)):this.node()[t]};function et(t){return t.trim().split(/^|\s+/)}function rt(t){return t.classList||new it(t)}function it(t){this._node=t;this._names=et(t.getAttribute("class")||"")}it.prototype={add:function(t){var n=this._names.indexOf(t);if(n<0){this._names.push(t);this._node.setAttribute("class",this._names.join(" "))}},remove:function(t){var n=this._names.indexOf(t);if(n>=0){this._names.splice(n,1);this._node.setAttribute("class",this._names.join(" "))}},contains:function(t){return this._names.indexOf(t)>=0}};function ut(t,n){var e=rt(t),r=-1,i=n.length;while(++r<i)e.add(n[r])}function ot(t,n){var e=rt(t),r=-1,i=n.length;while(++r<i)e.remove(n[r])}function at(t){return function(){ut(this,t)}}function ct(t){return function(){ot(this,t)}}function st(t,n){return function(){(n.apply(this,arguments)?ut:ot)(this,t)}}var ft=function(t,n){var e=et(t+"");if(arguments.length<2){var r=rt(this.node()),i=-1,u=e.length;while(++i<u)if(!r.contains(e[i]))return false;return true}return this.each((typeof n==="function"?st:n?at:ct)(e,n))};function lt(){this.textContent=""}function ht(t){return function(){this.textContent=t}}function pt(n){return function(){var t=n.apply(this,arguments);this.textContent=t==null?"":t}}var vt=function(t){return arguments.length?this.each(t==null?lt:(typeof t==="function"?pt:ht)(t)):this.node().textContent};function _t(){this.innerHTML=""}function dt(t){return function(){this.innerHTML=t}}function mt(n){return function(){var t=n.apply(this,arguments);this.innerHTML=t==null?"":t}}var yt=function(t){return arguments.length?this.each(t==null?_t:(typeof t==="function"?mt:dt)(t)):this.node().innerHTML};function gt(){if(this.nextSibling)this.parentNode.appendChild(this)}var wt=function(){return this.each(gt)};function At(){if(this.previousSibling)this.parentNode.insertBefore(this,this.parentNode.firstChild)}var xt=function(){return this.each(At)};var St=function(t){var n=typeof t==="function"?t:c(t);return this.select(function(){return this.appendChild(n.apply(this,arguments))})};function bt(){return null}var Et=function(t,n){var e=typeof t==="function"?t:c(t),r=n==null?bt:typeof n==="function"?n:l(n);return this.select(function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)})};function Nt(){var t=this.parentNode;if(t)t.removeChild(this)}var Ct=function(){return this.each(Nt)};function Mt(){return this.parentNode.insertBefore(this.cloneNode(false),this.nextSibling)}function Lt(){return this.parentNode.insertBefore(this.cloneNode(true),this.nextSibling)}var Pt=function(t){return this.select(t?Lt:Mt)};var Tt=function(t){return arguments.length?this.property("__data__",t):this.node().__data__};var Bt={};var qt=null;if(typeof document!=="undefined"){var Dt=document.documentElement;if(!("onmouseenter"in Dt)){Bt={mouseenter:"mouseover",mouseleave:"mouseout"}}}function Ot(e,t,n){e=Vt(e,t,n);return function(t){var n=t.relatedTarget;if(!n||n!==this&&!(n.compareDocumentPosition(this)&8)){e.call(this,t)}}}function Vt(e,r,i){return function(t){var n=qt;qt=t;try{e.call(this,this.__data__,r,i)}finally{qt=n}}}function kt(t){return t.trim().split(/^|\s+/).map(function(t){var n="",e=t.indexOf(".");if(e>=0)n=t.slice(e+1),t=t.slice(0,e);return{type:t,name:n}})}function jt(u){return function(){var t=this.__on;if(!t)return;for(var n=0,e=-1,r=t.length,i;n<r;++n){if(i=t[n],(!u.type||i.type===u.type)&&i.name===u.name){this.removeEventListener(i.type,i.listener,i.capture)}else{t[++e]=i}}if(++e)t.length=e;else delete this.__on}}function Rt(c,s,f){var l=Bt.hasOwnProperty(c.type)?Ot:Vt;return function(t,n,e){var r=this.__on,i,u=l(s,n,e);if(r)for(var o=0,a=r.length;o<a;++o){if((i=r[o]).type===c.type&&i.name===c.name){this.removeEventListener(i.type,i.listener,i.capture);this.addEventListener(i.type,i.listener=u,i.capture=f);i.value=s;return}}this.addEventListener(c.type,u,f);i={type:c.type,name:c.name,value:s,listener:u,capture:f};if(!r)this.__on=[i];else r.push(i)}}var zt=function(t,n,e){var r=kt(t+""),i,u=r.length,o;if(arguments.length<2){var a=this.node().__on;if(a)for(var c=0,s=a.length,f;c<s;++c){for(i=0,f=a[c];i<u;++i){if((o=r[i]).type===f.type&&o.name===f.name){return f.value}}}return}a=n?Rt:jt;if(e==null)e=false;for(i=0;i<u;++i)this.each(a(r[i],n,e));return this};function Ht(t,n,e,r){var i=qt;t.sourceEvent=qt;qt=t;try{return n.apply(e,r)}finally{qt=i}}function It(t,n,e){var r=J(t),i=r.CustomEvent;if(typeof i==="function"){i=new i(n,e)}else{i=r.document.createEvent("Event");if(e)i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail;else i.initEvent(n,false,false)}t.dispatchEvent(i)}function Ut(t,n){return function(){return It(this,t,n)}}function Gt(t,n){return function(){return It(this,t,n.apply(this,arguments))}}var Xt=function(t,n){return this.each((typeof n==="function"?Gt:Ut)(t,n))};var Jt=[null];function Wt(t,n){this._groups=t;this._parents=n}function Yt(){return new Wt([[document.documentElement]],Jt)}Wt.prototype=Yt.prototype={constructor:Wt,select:f,selectAll:v,filter:g,data:C,enter:A,exit:M,merge:L,order:P,sort:T,call:q,nodes:D,node:O,size:V,empty:k,each:j,attr:X,style:F,property:nt,classed:ft,text:vt,html:yt,raise:wt,lower:xt,append:St,insert:Et,remove:Ct,clone:Pt,datum:Tt,on:zt,dispatch:Xt};var $t=Yt;var Ft=function(t){return typeof t==="string"?new Wt([[document.querySelector(t)]],[document.documentElement]):new Wt([[t]],Jt)};var Kt=function(t){return Ft(c(t).call(document.documentElement))};var Qt=0;function Zt(){return new tn}function tn(){this._="@"+(++Qt).toString(36)}tn.prototype=Zt.prototype={constructor:tn,get:function(t){var n=this._;while(!(n in t))if(!(t=t.parentNode))return;return t[n]},set:function(t,n){return t[this._]=n},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}};var nn=function(){var t=qt,n;while(n=t.sourceEvent)t=n;return t};var en=function(t,n){var e=t.ownerSVGElement||t;if(e.createSVGPoint){var r=e.createSVGPoint();r.x=n.clientX,r.y=n.clientY;r=r.matrixTransform(t.getScreenCTM().inverse());return[r.x,r.y]}var i=t.getBoundingClientRect();return[n.clientX-i.left-t.clientLeft,n.clientY-i.top-t.clientTop]};var rn=function(t){var n=nn();if(n.changedTouches)n=n.changedTouches[0];return en(t,n)};var un=function(t){return typeof t==="string"?new Wt([document.querySelectorAll(t)],[document.documentElement]):new Wt([t==null?[]:t],Jt)};var on=function(t,n,e){if(arguments.length<3)e=n,n=nn().changedTouches;for(var r=0,i=n?n.length:0,u;r<i;++r){if((u=n[r]).identifier===e){return en(t,u)}}return null};var an=function(t,n){if(n==null)n=nn().touches;for(var e=0,r=n?n.length:0,i=new Array(r);e<r;++e){i[e]=en(t,n[e])}return i};e.d(n,"c",function(){return y});e.d(n,"d",function(){return rn});e.d(n,"e",function(){return u});e.d(n,"f",function(){return Ft});e.d(n,"g",function(){return $t});e.d(n,"h",function(){return l});e.d(n,"i",function(){return p});e.d(n,"j",function(){return K});e.d(n,"k",function(){return on});e.d(n,"b",function(){return qt});e.d(n,"a",function(){return Ht})}}]);