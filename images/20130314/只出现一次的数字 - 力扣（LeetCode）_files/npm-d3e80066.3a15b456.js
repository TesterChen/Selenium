(window["nojMonomainWebpackJsonpproduction"]=window["nojMonomainWebpackJsonpproduction"]||[]).push([[196],{YZPX:function(e,n,r){"use strict";var c=r("ERkP");var t=r.n(c);var a=r("7nmT");var f=r("LaGA");var l=r("xHP7");var o=r("aWzz");var i=r("1aPi");var u=r("DYG5");var s={debounce:i["a"],throttle:u["a"]};var p=function e(n){return s[n]};var h=function e(n){return typeof n==="function"};var b=function e(){return typeof window==="undefined"};function d(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){d=function e(n){return typeof n}}else{d=function e(n){return n&&typeof Symbol==="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n}}return d(e)}function y(e,n){if(!(e instanceof n)){throw new TypeError("Cannot call a class as a function")}}function v(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||false;t.configurable=true;if("value"in t)t.writable=true;Object.defineProperty(e,t.key,t)}}function m(e,n,r){if(n)v(e.prototype,n);if(r)v(e,r);return e}function O(e,n){if(n&&(d(n)==="object"||typeof n==="function")){return n}return g(e)}function g(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function w(e){w=Object.setPrototypeOf?Object.getPrototypeOf:function e(n){return n.__proto__||Object.getPrototypeOf(n)};return w(e)}function j(e,n){if(typeof n!=="function"&&n!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:true,configurable:true}});if(n)P(e,n)}function P(e,n){P=Object.setPrototypeOf||function e(n,r){n.__proto__=r;return n};return P(e,n)}var z=function(e){j(n,e);function n(){y(this,n);return O(this,w(n).apply(this,arguments))}m(n,[{key:"render",value:function e(){return this.props.children}}]);return n}(c["PureComponent"]);var E=z;function R(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){R=function e(n){return typeof n}}else{R=function e(n){return n&&typeof Symbol==="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n}}return R(e)}function S(e,n){if(!(e instanceof n)){throw new TypeError("Cannot call a class as a function")}}function k(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||false;t.configurable=true;if("value"in t)t.writable=true;Object.defineProperty(e,t.key,t)}}function _(e,n,r){if(n)k(e.prototype,n);if(r)k(e,r);return e}function H(e,n){if(n&&(R(n)==="object"||typeof n==="function")){return n}return T(e)}function M(e){M=Object.setPrototypeOf?Object.getPrototypeOf:function e(n){return n.__proto__||Object.getPrototypeOf(n)};return M(e)}function T(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function C(e,n){if(typeof n!=="function"&&n!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:true,configurable:true}});if(n)W(e,n)}function W(e,n){W=Object.setPrototypeOf||function e(n,r){n.__proto__=r;return n};return W(e,n)}function A(e,n,r){if(n in e){Object.defineProperty(e,n,{value:r,enumerable:true,configurable:true,writable:true})}else{e[n]=r}return e}var q=function(e){C(u,e);function u(e){var d;S(this,u);d=H(this,M(u).call(this,e));A(T(d),"cancelHandler",function(){if(d.resizeHandler&&d.resizeHandler.cancel){d.resizeHandler.cancel();d.resizeHandler=null}});A(T(d),"rafClean",function(){if(d.raf&&d.raf.cancel){d.raf.cancel();d.raf=null}});A(T(d),"toggleObserver",function(e){var n=d.getElement();if(!n||!d.resizeObserver[e])return;d.resizeObserver[e](n)});A(T(d),"getElement",function(){var e=d.props.querySelector;if(b())return undefined;if(e)return document.querySelector(e);var n=d.element&&Object(a["findDOMNode"])(d.element);if(!n)return undefined;return n.parentElement});A(T(d),"createUpdater",function(){d.rafClean();d.raf=Object(l["a"])(function(e){var n=e.width,r=e.height;var t=d.props.onResize;if(h(t)){t(n,r)}d.setState({width:n,height:r})});return d.raf});A(T(d),"createResizeHandler",function(e){var n=d.state,f=n.width,c=n.height;var r=d.props,l=r.handleWidth,s=r.handleHeight;if(!l&&!s)return;var p=d.createUpdater();e.forEach(function(e){var n=e&&e.contentRect||{},r=n.width,t=n.height;var o=l&&f!==r;var i=s&&c!==t;var u=o||i;var a=!d.skipOnMount&&u&&!b();if(a){p({width:r,height:t})}d.skipOnMount=false})});A(T(d),"onRef",function(e){d.element=e});A(T(d),"getRenderType",function(){var e=d.props,n=e.render,r=e.children;if(h(n)){return"renderProp"}if(h(r)){return"childFunction"}if(Object(c["isValidElement"])(r)){return"child"}if(Array.isArray(r)){return"childArray"}return"parent"});A(T(d),"getTargetComponent",function(){var e=d.props,n=e.render,r=e.children,t=e.nodeType;var o=d.state,i=o.width,u=o.height;var a={width:i,height:u};var f=d.getRenderType();switch(f){case"renderProp":return Object(c["cloneElement"])(n(a),{key:"resize-detector"});case"childFunction":return Object(c["cloneElement"])(r(a));case"child":return Object(c["cloneElement"])(r,a);case"childArray":return r.map(function(e){return Object(c["cloneElement"])(e,a)});default:return Object(c["createElement"])(t)}});var n=e.skipOnMount,r=e.refreshMode,t=e.refreshRate,o=e.refreshOptions;d.state={width:undefined,height:undefined};d.skipOnMount=n;d.raf=null;d.element=null;d.unmounted=false;var i=p(r);d.resizeHandler=i?i(d.createResizeHandler,t,o):d.createResizeHandler;d.resizeObserver=new f["a"](d.resizeHandler);return d}_(u,[{key:"componentDidMount",value:function e(){this.toggleObserver("observe")}},{key:"componentWillUnmount",value:function e(){this.toggleObserver("unobserve");this.rafClean();this.cancelHandler();this.unmounted=true}},{key:"render",value:function e(){return t.a.createElement(E,{ref:this.onRef},this.getTargetComponent())}}]);return u}(c["PureComponent"]);q.propTypes={handleWidth:o["bool"],handleHeight:o["bool"],skipOnMount:o["bool"],refreshRate:o["number"],refreshMode:o["string"],refreshOptions:Object(o["shape"])({leading:o["bool"],trailing:o["bool"]}),querySelector:o["string"],onResize:o["func"],render:o["func"],children:o["any"],nodeType:o["node"]};q.defaultProps={handleWidth:false,handleHeight:false,skipOnMount:false,refreshRate:1e3,refreshMode:undefined,refreshOptions:undefined,querySelector:null,onResize:null,render:undefined,children:null,nodeType:"div"};var x=q;var D=n["a"]=x}}]);