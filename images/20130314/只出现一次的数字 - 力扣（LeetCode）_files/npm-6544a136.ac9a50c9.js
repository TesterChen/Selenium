(window["nojMonomainWebpackJsonpproduction"]=window["nojMonomainWebpackJsonpproduction"]||[]).push([[93],{FYRI:function(f,e,d){var h;!function(t){"use strict";var r=0?undefined:function(){};var n=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(e){return setTimeout(e,16)};function e(){var e=this;e.reads=[];e.writes=[];e.raf=n.bind(t);r("initialized",e)}e.prototype={constructor:e,measure:function(e,t){r("measure");var n=!t?e:e.bind(t);this.reads.push(n);s(this);return n},mutate:function(e,t){r("mutate");var n=!t?e:e.bind(t);this.writes.push(n);s(this);return n},clear:function(e){r("clear",e);return o(this.reads,e)||o(this.writes,e)},extend:function(e){r("extend",e);if(typeof e!="object")throw new Error("expected object");var t=Object.create(this);u(t,e);t.fastdom=this;if(t.initialize)t.initialize();return t},catch:null};function s(e){if(!e.scheduled){e.scheduled=true;e.raf(i.bind(null,e));r("flush scheduled")}}function i(e){r("flush");var t=e.writes;var n=e.reads;var i;try{r("flushing reads",n.length);a(n);r("flushing writes",t.length);a(t)}catch(e){i=e}e.scheduled=false;if(n.length||t.length)s(e);if(i){r("task errored",i.message);if(e.catch)e.catch(i);else throw i}}function a(e){r("run tasks");var t;while(t=e.shift())t()}function o(e,t){var n=e.indexOf(t);return!!~n&&!!e.splice(n,1)}function u(e,t){for(var n in t){if(t.hasOwnProperty(n))e[n]=t[n]}}var c=t.fastdom=t.fastdom||new e;if(true)!(h=function(){return c}.call(c,d,c,f),h!==undefined&&(f.exports=h));else{}}(typeof window!=="undefined"?window:this)}}]);