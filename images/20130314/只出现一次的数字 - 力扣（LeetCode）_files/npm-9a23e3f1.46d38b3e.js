(window["nojMonomainWebpackJsonpproduction"]=window["nojMonomainWebpackJsonpproduction"]||[]).push([[139],{"aq/t":function(n,t,r){"use strict";var e=function(u,f){var o;if(u==null)u=0;if(f==null)f=0;function t(){var n,t=o.length,r,e=0,i=0;for(n=0;n<t;++n){r=o[n],e+=r.x,i+=r.y}for(e=e/t-u,i=i/t-f,n=0;n<t;++n){r=o[n],r.x-=e,r.y-=i}}t.initialize=function(n){o=n};t.x=function(n){return arguments.length?(u=+n,t):u};t.y=function(n){return arguments.length?(f=+n,t):f};return t};var d=function(n){return function(){return n}};var p=function(){return(Math.random()-.5)*1e-6};var w=r("H8NG");function c(n){return n.x+n.vx}function l(n){return n.y+n.vy}var i=function(e){var u,f,s=1,o=1;if(typeof e!=="function")e=d(e==null?1:+e);function t(){var n,t=u.length,r,v,h,y,g,x;for(var e=0;e<o;++e){r=Object(w["a"])(u,c,l).visitAfter(a);for(n=0;n<t;++n){v=u[n];g=f[v.index],x=g*g;h=v.x+v.vx;y=v.y+v.vy;r.visit(i)}}function i(n,t,r,e,i){var u=n.data,f=n.r,o=g+f;if(u){if(u.index>v.index){var a=h-u.x-u.vx,c=y-u.y-u.vy,l=a*a+c*c;if(l<o*o){if(a===0)a=p(),l+=a*a;if(c===0)c=p(),l+=c*c;l=(o-(l=Math.sqrt(l)))/l*s;v.vx+=(a*=l)*(o=(f*=f)/(x+f));v.vy+=(c*=l)*o;u.vx-=a*(o=1-o);u.vy-=c*o}}return}return t>h+o||e<h-o||r>y+o||i<y-o}}function a(n){if(n.data)return n.r=f[n.data.index];for(var t=n.r=0;t<4;++t){if(n[t]&&n[t].r>n.r){n.r=n[t].r}}}function r(){if(!u)return;var n,t=u.length,r;f=new Array(t);for(n=0;n<t;++n)r=u[n],f[r.index]=+e(r,n,u)}t.initialize=function(n){u=n;r()};t.iterations=function(n){return arguments.length?(o=+n,t):o};t.strength=function(n){return arguments.length?(s=+n,t):s};t.radius=function(n){return arguments.length?(e=typeof n==="function"?n:d(+n),r(),t):e};return t};var s=r("A06w");function M(n){return n.index}function A(n,t){var r=n.get(t);if(!r)throw new Error("missing: "+t);return r}var u=function(v){var u=M,r=n,h,e=d(30),y,f,o,g,x=1;if(v==null)v=[];function n(n){return 1/Math.min(o[n.source.index],o[n.target.index])}function t(n){for(var t=0,r=v.length;t<x;++t){for(var e=0,i,u,f,o,a,c,l;e<r;++e){i=v[e],u=i.source,f=i.target;o=f.x+f.vx-u.x-u.vx||p();a=f.y+f.vy-u.y-u.vy||p();c=Math.sqrt(o*o+a*a);c=(c-y[e])/c*n*h[e];o*=c,a*=c;f.vx-=o*(l=g[e]);f.vy-=a*l;u.vx+=o*(l=1-l);u.vy+=a*l}}}function i(){if(!f)return;var n,t=f.length,r=v.length,e=Object(s["a"])(f,u),i;for(n=0,o=new Array(t);n<r;++n){i=v[n],i.index=n;if(typeof i.source!=="object")i.source=A(e,i.source);if(typeof i.target!=="object")i.target=A(e,i.target);o[i.source.index]=(o[i.source.index]||0)+1;o[i.target.index]=(o[i.target.index]||0)+1}for(n=0,g=new Array(r);n<r;++n){i=v[n],g[n]=o[i.source.index]/(o[i.source.index]+o[i.target.index])}h=new Array(r),a();y=new Array(r),c()}function a(){if(!f)return;for(var n=0,t=v.length;n<t;++n){h[n]=+r(v[n],n,v)}}function c(){if(!f)return;for(var n=0,t=v.length;n<t;++n){y[n]=+e(v[n],n,v)}}t.initialize=function(n){f=n;i()};t.links=function(n){return arguments.length?(v=n,i(),t):v};t.id=function(n){return arguments.length?(u=n,t):u};t.iterations=function(n){return arguments.length?(x=+n,t):x};t.strength=function(n){return arguments.length?(r=typeof n==="function"?n:d(+n),a(),t):r};t.distance=function(n){return arguments.length?(e=typeof n==="function"?n:d(+n),c(),t):e};return t};var g=r("ge/T");var x=r("wAkE");function o(n){return n.x}function N(n){return n.y}var b=10,q=Math.PI*(3-Math.sqrt(5));var f=function(l){var r,e=1,t=.001,i=1-Math.pow(t,1/300),u=0,f=.6,o=Object(s["a"])(),n=Object(x["c"])(c),a=Object(g["a"])("tick","end");if(l==null)l=[];function c(){v();a.call("tick",r);if(e<t){n.stop();a.call("end",r)}}function v(){var n,t=l.length,r;e+=(u-e)*i;o.each(function(n){n(e)});for(n=0;n<t;++n){r=l[n];if(r.fx==null)r.x+=r.vx*=f;else r.x=r.fx,r.vx=0;if(r.fy==null)r.y+=r.vy*=f;else r.y=r.fy,r.vy=0}}function h(){for(var n=0,t=l.length,r;n<t;++n){r=l[n],r.index=n;if(isNaN(r.x)||isNaN(r.y)){var e=b*Math.sqrt(n),i=n*q;r.x=e*Math.cos(i);r.y=e*Math.sin(i)}if(isNaN(r.vx)||isNaN(r.vy)){r.vx=r.vy=0}}}function y(n){if(n.initialize)n.initialize(l);return n}h();return r={tick:v,restart:function(){return n.restart(c),r},stop:function(){return n.stop(),r},nodes:function(n){return arguments.length?(l=n,h(),o.each(y),r):l},alpha:function(n){return arguments.length?(e=+n,r):e},alphaMin:function(n){return arguments.length?(t=+n,r):t},alphaDecay:function(n){return arguments.length?(i=+n,r):+i},alphaTarget:function(n){return arguments.length?(u=+n,r):u},velocityDecay:function(n){return arguments.length?(f=1-n,r):1-f},force:function(n,t){return arguments.length>1?(t==null?o.remove(n):o.set(n,y(t)),r):o.get(n)},find:function(n,t,r){var e=0,i=l.length,u,f,o,a,c;if(r==null)r=Infinity;else r*=r;for(e=0;e<i;++e){a=l[e];u=n-a.x;f=t-a.y;o=u*u+f*f;if(o<r)c=a,r=o}return c},on:function(n,t){return arguments.length>1?(a.on(n,t),r):a.on(n)}}};var a=function(){var i,a,c,e=d(-30),l,v=1,h=Infinity,y=.81;function t(n){var t,r=i.length,e=Object(w["a"])(i,o,N).visitAfter(u);for(c=n,t=0;t<r;++t)a=i[t],e.visit(f)}function r(){if(!i)return;var n,t=i.length,r;l=new Array(t);for(n=0;n<t;++n)r=i[n],l[r.index]=+e(r,n,i)}function u(n){var t=0,r,e,i=0,u,f,o;if(n.length){for(u=f=o=0;o<4;++o){if((r=n[o])&&(e=Math.abs(r.value))){t+=r.value,i+=e,u+=e*r.x,f+=e*r.y}}n.x=u/i;n.y=f/i}else{r=n;r.x=r.data.x;r.y=r.data.y;do{t+=l[r.data.index]}while(r=r.next)}n.value=t}function f(n,t,r,e){if(!n.value)return true;var i=n.x-a.x,u=n.y-a.y,f=e-t,o=i*i+u*u;if(f*f/y<o){if(o<h){if(i===0)i=p(),o+=i*i;if(u===0)u=p(),o+=u*u;if(o<v)o=Math.sqrt(v*o);a.vx+=i*n.value*c/o;a.vy+=u*n.value*c/o}return true}else if(n.length||o>=h)return;if(n.data!==a||n.next){if(i===0)i=p(),o+=i*i;if(u===0)u=p(),o+=u*u;if(o<v)o=Math.sqrt(v*o)}do{if(n.data!==a){f=l[n.data.index]*c/o;a.vx+=i*f;a.vy+=u*f}}while(n=n.next)}t.initialize=function(n){i=n;r()};t.strength=function(n){return arguments.length?(e=typeof n==="function"?n:d(+n),r(),t):e};t.distanceMin=function(n){return arguments.length?(v=n*n,t):Math.sqrt(v)};t.distanceMax=function(n){return arguments.length?(h=n*n,t):Math.sqrt(h)};t.theta=function(n){return arguments.length?(y=n*n,t):Math.sqrt(y)};return t};var v=function(r,a,c){var l,e=d(.1),v,h;if(typeof r!=="function")r=d(+r);if(a==null)a=0;if(c==null)c=0;function t(n){for(var t=0,r=l.length;t<r;++t){var e=l[t],i=e.x-a||1e-6,u=e.y-c||1e-6,f=Math.sqrt(i*i+u*u),o=(h[t]-f)*v[t]*n/f;e.vx+=i*o;e.vy+=u*o}}function i(){if(!l)return;var n,t=l.length;v=new Array(t);h=new Array(t);for(n=0;n<t;++n){h[n]=+r(l[n],n,l);v[n]=isNaN(h[n])?0:+e(l[n],n,l)}}t.initialize=function(n){l=n,i()};t.strength=function(n){return arguments.length?(e=typeof n==="function"?n:d(+n),i(),t):e};t.radius=function(n){return arguments.length?(r=typeof n==="function"?n:d(+n),i(),t):r};t.x=function(n){return arguments.length?(a=+n,t):a};t.y=function(n){return arguments.length?(c=+n,t):c};return t};var h=function(r){var e=d(.1),i,u,f;if(typeof r!=="function")r=d(r==null?0:+r);function t(n){for(var t=0,r=i.length,e;t<r;++t){e=i[t],e.vx+=(f[t]-e.x)*u[t]*n}}function o(){if(!i)return;var n,t=i.length;u=new Array(t);f=new Array(t);for(n=0;n<t;++n){u[n]=isNaN(f[n]=+r(i[n],n,i))?0:+e(i[n],n,i)}}t.initialize=function(n){i=n;o()};t.strength=function(n){return arguments.length?(e=typeof n==="function"?n:d(+n),o(),t):e};t.x=function(n){return arguments.length?(r=typeof n==="function"?n:d(+n),o(),t):r};return t};var y=function(r){var e=d(.1),i,u,f;if(typeof r!=="function")r=d(r==null?0:+r);function t(n){for(var t=0,r=i.length,e;t<r;++t){e=i[t],e.vy+=(f[t]-e.y)*u[t]*n}}function o(){if(!i)return;var n,t=i.length;u=new Array(t);f=new Array(t);for(n=0;n<t;++n){u[n]=isNaN(f[n]=+r(i[n],n,i))?0:+e(i[n],n,i)}}t.initialize=function(n){i=n;o()};t.strength=function(n){return arguments.length?(e=typeof n==="function"?n:d(+n),o(),t):e};t.y=function(n){return arguments.length?(r=typeof n==="function"?n:d(+n),o(),t):r};return t}}}]);