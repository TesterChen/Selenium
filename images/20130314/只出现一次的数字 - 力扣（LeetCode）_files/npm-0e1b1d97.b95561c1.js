(window["nojMonomainWebpackJsonpproduction"]=window["nojMonomainWebpackJsonpproduction"]||[]).push([[25],{"0j0O":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=function(){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(e,t,r){if(t)n(e.prototype,t);if(r)n(e,r);return e}}();var o=r("ERkP");var u=a(o);var i=r("GXx9");function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function c(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function f(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var l=function(e){f(t,e);function t(){s(this,t);return c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}n(t,[{key:"getChildContext",value:function e(){return{miniStore:this.props.store}}},{key:"render",value:function e(){return o.Children.only(this.props.children)}}]);return t}(o.Component);l.propTypes={store:i.storeShape.isRequired};l.childContextTypes={miniStore:i.storeShape.isRequired};t.default=l},"43SE":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e};var s=function(){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(e,t,r){if(t)n(e.prototype,t);if(r)n(e,r);return e}}();t.default=m;var n=r("ERkP");var c=i(n);var o=r("Pu0A");var f=i(o);var u=r("oXkQ");var l=i(u);var p=r("HUCg");var b=r("GXx9");function i(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function v(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function h(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}function y(e){return e.displayName||e.name||"Component"}function _(e){return!e.prototype.render}var O=function e(){return{}};function m(u){var r=!!u;var i=u||O;return function e(o){var t=function(e){h(n,e);s(n,null,[{key:"getDerivedStateFromProps",value:function e(t,r){if(u&&u.length===2&&t!==r.props){return{subscribed:i(r.store.getState(),t),props:t}}return{props:t}}}]);function n(e,t){d(this,n);var r=v(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e,t));r.handleChange=function(){if(!r.unsubscribe){return}var e=i(r.store.getState(),r.props);if(!(0,f.default)(r.state.subscribed,e)){r.setState({subscribed:e})}};r.store=t.miniStore;r.state={subscribed:i(r.store.getState(),e),store:r.store,props:e};return r}s(n,[{key:"componentDidMount",value:function e(){this.trySubscribe()}},{key:"componentWillUnmount",value:function e(){this.tryUnsubscribe()}},{key:"trySubscribe",value:function e(){if(r){this.unsubscribe=this.store.subscribe(this.handleChange);this.handleChange()}}},{key:"tryUnsubscribe",value:function e(){if(this.unsubscribe){this.unsubscribe();this.unsubscribe=null}}},{key:"getWrappedInstance",value:function e(){return this.wrappedInstance}},{key:"render",value:function e(){var r=this;var t=a({},this.props,this.state.subscribed,{store:this.store});if(!_(o)){t=a({},t,{ref:function e(t){return r.wrappedInstance=t}})}return c.default.createElement(o,t)}}]);return n}(n.Component);t.displayName="Connect("+y(o)+")";t.contextTypes={miniStore:b.storeShape.isRequired};(0,p.polyfill)(t);return(0,l.default)(t,o)}}},GXx9:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.storeShape=undefined;var n=r("aWzz");var o=u(n);function u(e){return e&&e.__esModule?e:{default:e}}var i=t.storeShape=o.default.shape({subscribe:o.default.func.isRequired,setState:o.default.func.isRequired,getState:o.default.func.isRequired})},khr3:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.create=t.connect=t.Provider=undefined;var n=r("0j0O");var o=c(n);var u=r("43SE");var i=c(u);var a=r("zuIm");var s=c(a);function c(e){return e&&e.__esModule?e:{default:e}}t.Provider=o.default;t.connect=i.default;t.create=s.default},zuIm:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e};t.default=n;function n(e){var r=e;var n=[];function t(e){r=i({},r,e);for(var t=0;t<n.length;t++){n[t]()}}function o(){return r}function u(r){n.push(r);return function e(){var t=n.indexOf(r);n.splice(t,1)}}return{setState:t,getState:o,subscribe:u}}}}]);