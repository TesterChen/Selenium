(window["nojMonomainWebpackJsonpproduction"]=window["nojMonomainWebpackJsonpproduction"]||[]).push([[183],{r2q8:function(e,t){function i(){this._events=this._events||{};this._maxListeners=this._maxListeners||undefined}e.exports=i;i.EventEmitter=i;i.prototype._events=undefined;i.prototype._maxListeners=undefined;i.defaultMaxListeners=10;i.prototype.setMaxListeners=function(e){if(!s(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");this._maxListeners=e;return this};i.prototype.emit=function(e){var t,s,i,n,r,o;if(!this._events)this._events={};if(e==="error"){if(!this._events.error||f(this._events.error)&&!this._events.error.length){t=arguments[1];if(t instanceof Error){throw t}else{var h=new Error('Uncaught, unspecified "error" event. ('+t+")");h.context=t;throw h}}}s=this._events[e];if(v(s))return false;if(l(s)){switch(arguments.length){case 1:s.call(this);break;case 2:s.call(this,arguments[1]);break;case 3:s.call(this,arguments[1],arguments[2]);break;default:n=Array.prototype.slice.call(arguments,1);s.apply(this,n)}}else if(f(s)){n=Array.prototype.slice.call(arguments,1);o=s.slice();i=o.length;for(r=0;r<i;r++)o[r].apply(this,n)}return true};i.prototype.addListener=function(e,t){var s;if(!l(t))throw TypeError("listener must be a function");if(!this._events)this._events={};if(this._events.newListener)this.emit("newListener",e,l(t.listener)?t.listener:t);if(!this._events[e])this._events[e]=t;else if(f(this._events[e]))this._events[e].push(t);else this._events[e]=[this._events[e],t];if(f(this._events[e])&&!this._events[e].warned){if(!v(this._maxListeners)){s=this._maxListeners}else{s=i.defaultMaxListeners}if(s&&s>0&&this._events[e].length>s){this._events[e].warned=true;console.error("(node) warning: possible EventEmitter memory "+"leak detected. %d listeners added. "+"Use emitter.setMaxListeners() to increase limit.",this._events[e].length);if(typeof console.trace==="function"){console.trace()}}}return this};i.prototype.on=i.prototype.addListener;i.prototype.once=function(e,t){if(!l(t))throw TypeError("listener must be a function");var s=false;function i(){this.removeListener(e,i);if(!s){s=true;t.apply(this,arguments)}}i.listener=t;this.on(e,i);return this};i.prototype.removeListener=function(e,t){var s,i,n,r;if(!l(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;s=this._events[e];n=s.length;i=-1;if(s===t||l(s.listener)&&s.listener===t){delete this._events[e];if(this._events.removeListener)this.emit("removeListener",e,t)}else if(f(s)){for(r=n;r-- >0;){if(s[r]===t||s[r].listener&&s[r].listener===t){i=r;break}}if(i<0)return this;if(s.length===1){s.length=0;delete this._events[e]}else{s.splice(i,1)}if(this._events.removeListener)this.emit("removeListener",e,t)}return this};i.prototype.removeAllListeners=function(e){var t,s;if(!this._events)return this;if(!this._events.removeListener){if(arguments.length===0)this._events={};else if(this._events[e])delete this._events[e];return this}if(arguments.length===0){for(t in this._events){if(t==="removeListener")continue;this.removeAllListeners(t)}this.removeAllListeners("removeListener");this._events={};return this}s=this._events[e];if(l(s)){this.removeListener(e,s)}else if(s){while(s.length)this.removeListener(e,s[s.length-1])}delete this._events[e];return this};i.prototype.listeners=function(e){var t;if(!this._events||!this._events[e])t=[];else if(l(this._events[e]))t=[this._events[e]];else t=this._events[e].slice();return t};i.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(l(t))return 1;else if(t)return t.length}return 0};i.listenerCount=function(e,t){return e.listenerCount(t)};function l(e){return typeof e==="function"}function s(e){return typeof e==="number"}function f(e){return typeof e==="object"&&e!==null}function v(e){return e===void 0}}}]);