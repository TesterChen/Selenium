(window["nojMonomainWebpackJsonpproduction"]=window["nojMonomainWebpackJsonpproduction"]||[]).push([[217],{"5U1r":function(n,r,t){"use strict";var e=function(n){var r=-1,t=n.length,e,o=n[t-1],u=0;while(++r<t){e=o;o=n[r];u+=e[1]*o[0]-e[0]*o[1]}return u/2};var o=function(n){var r=-1,t=n.length,e=0,o=0,u,a=n[t-1],i,f=0;while(++r<t){u=a;a=n[r];f+=i=u[0]*a[1]-a[0]*u[1];e+=(u[0]+a[0])*i;o+=(u[1]+a[1])*i}return f*=3,[e/f,o/f]};var u=function(n,r,t){return(r[0]-n[0])*(t[1]-n[1])-(r[1]-n[1])*(t[0]-n[0])};function l(n,r){return n[0]-r[0]||n[1]-r[1]}function v(n){var r=n.length,t=[0,1],e=2;for(var o=2;o<r;++o){while(e>1&&u(n[t[e-2]],n[t[e-1]],n[o])<=0)--e;t[e++]=o}return t.slice(0,e)}var a=function(n){if((t=n.length)<3)return null;var r,t,e=new Array(t),o=new Array(t);for(r=0;r<t;++r)e[r]=[+n[r][0],+n[r][1],r];e.sort(l);for(r=0;r<t;++r)o[r]=[e[r][0],-e[r][1]];var u=v(e),a=v(o);var i=a[0]===u[0],f=a[a.length-1]===u[u.length-1],h=[];for(r=u.length-1;r>=0;--r)h.push(n[e[u[r]][2]]);for(r=+i;r<a.length-f;++r)h.push(n[e[a[r]][2]]);return h};var i=function(n,r){var t=n.length,e=n[t-1],o=r[0],u=r[1],a=e[0],i=e[1],f,h,l=false;for(var v=0;v<t;++v){e=n[v],f=e[0],h=e[1];if(h>u!==i>u&&o<(a-f)*(u-h)/(i-h)+f)l=!l;a=f,i=h}return l};var f=function(n){var r=-1,t=n.length,e=n[t-1],o,u,a=e[0],i=e[1],f=0;while(++r<t){o=a;u=i;e=n[r];a=e[0];i=e[1];o-=a;u-=i;f+=Math.sqrt(o*o+u*u)}return f}}}]);