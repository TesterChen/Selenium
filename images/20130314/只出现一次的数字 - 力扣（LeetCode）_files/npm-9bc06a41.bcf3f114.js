(window["nojMonomainWebpackJsonpproduction"]=window["nojMonomainWebpackJsonpproduction"]||[]).push([[141],{WcXn:function(r,e,t){"use strict";var a=t("Xpb+");function s(r,e){var t,n,i=r.posMax,o=true,c=true;t=e>0?r.src.charCodeAt(e-1):-1;n=e+1<=i?r.src.charCodeAt(e+1):-1;if(t===32||t===9||n>=48&&n<=57){c=false}if(n===32||n===9){o=false}return{can_open:o,can_close:c}}function l(r,e){var t,n,i,o,c,a;if(r.src[r.pos]!=="$"){return false}o=s(r,r.pos);if(!o.can_open){if(!e){r.pending+="$"}r.pos+=1;return true}t=r.pos+1;n=t;while((n=r.src.indexOf("$",n))!==-1){c=n-1;while(r.src[c]==="\\"){c-=1}if((n-c)%2==1){break}n+=1}if(n===-1){if(!e){r.pending+="$"}r.pos=t;return true}if(n-t===0){if(!e){r.pending+="$$"}r.pos=t+1;return true}o=s(r,n);if(!o.can_close){if(!e){r.pending+="$"}r.pos=t;return true}if(!e){i=r.push("math_inline","math",0);i.markup="$";i.content=r.src.slice(t,n)}r.pos=n+1;return true}function u(r,e,t,n){var i,o,c,a,s=false,l,u=r.bMarks[e]+r.tShift[e],f=r.eMarks[e];if(u+2>f){return false}if(r.src.slice(u,u+2)!=="$$"){return false}u+=2;i=r.src.slice(u,f);if(n){return true}if(i.trim().slice(-2)==="$$"){i=i.trim().slice(0,-2);s=true}for(c=e;!s;){c++;if(c>=t){break}u=r.bMarks[c]+r.tShift[c];f=r.eMarks[c];if(u<f&&r.tShift[c]<r.blkIndent){break}if(r.src.slice(u,f).trim().slice(-2)==="$$"){a=r.src.slice(0,f).lastIndexOf("$$");o=r.src.slice(u,a);s=true}}r.line=c+1;l=r.push("math_block","math",0);l.block=true;l.content=(i&&i.trim()?i+"\n":"")+r.getLines(e+1,c,r.tShift[e],true)+(o&&o.trim()?o:"");l.map=[e,r.line];l.markup="$$";return true}function f(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}r.exports=function r(e,t){t=t||{};var n=function(e){t.displayMode=false;try{return a.renderToString(e,t)}catch(r){if(t.throwOnError){console.log(r)}return"<span class='katex-error' title='"+f(r.toString())+"'>"+f(e)+"</span>"}};var i=function(r,e){return n(r[e].content)};var o=function(e){t.displayMode=true;try{return"<p class='katex-block'>"+a.renderToString(e,t)+"</p>"}catch(r){if(t.throwOnError){console.log(r)}return"<p class='katex-block katex-error' title='"+f(r.toString())+"'>"+f(e)+"</p>"}};var c=function(r,e){return o(r[e].content)+"\n"};e.inline.ruler.after("escape","math_inline",l);e.block.ruler.after("blockquote","math_block",u,{alt:["paragraph","reference","blockquote","list"]});e.renderer.rules.math_inline=i;e.renderer.rules.math_block=c}}}]);