(window["nojMonomainWebpackJsonpproduction"]=window["nojMonomainWebpackJsonpproduction"]||[]).push([[166],{OeP0:function(e,n,r){"use strict";function f(e,n){var r,t;var a=e.attrs[e.attrIndex("href")][1];for(r=0;r<n.length;++r){t=n[r];if(!t.pattern||new RegExp(t.pattern).test(a)){return t}}}function c(t,a,o){Object.keys(o).forEach(function(e){var n;var r=o[e];if(e==="className"){e="class"}n=a[t].attrIndex(e);if(n<0){a[t].attrPush([e,r])}else{a[t].attrs[n][1]=r}})}function t(e,s){if(!s){s=[]}else{s=Array.isArray(s)?s:[s]}Object.freeze(s);var u=e.renderer.rules.link_open||this.defaultRender;e.renderer.rules.link_open=function(e,n,r,t,a){var o=f(e[n],s);var i=o&&o.attrs;if(i){c(n,e,i)}return u(e,n,r,t,a)}}t.defaultRender=function(e,n,r,t,a){return a.renderToken(e,n,r)};e.exports=t}}]);