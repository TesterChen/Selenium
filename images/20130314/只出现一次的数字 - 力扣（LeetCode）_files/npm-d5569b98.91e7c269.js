(window["nojMonomainWebpackJsonpproduction"]=window["nojMonomainWebpackJsonpproduction"]||[]).push([[200],{i5YB:function(r,e,n){"use strict";n.d(e,"c",function(){return s});n.d(e,"d",function(){return c});n.d(e,"a",function(){return f});n.d(e,"b",function(){return v});n.d(e,"e",function(){return l});n.d(e,"g",function(){return h});n.d(e,"f",function(){return y});var d=n("D57K");var p=n("EDoe");var o=n("Vvrm");var t={includeQuery:true,includeExtensions:false};var a={accept:"*/*","content-type":"application/json"};var i={method:"POST"};var s={http:t,headers:a,options:i};var u=function(r,e,n){var t=new Error(n);t.name="ServerError";t.response=r;t.statusCode=r.status;t.result=e;throw t};var c=function(e){return function(t){return t.text().then(function(e){try{return JSON.parse(e)}catch(r){var n=r;n.name="ServerParseError";n.response=t;n.statusCode=t.status;n.bodyText=e;return Promise.reject(n)}}).then(function(r){if(t.status>=300){u(t,r,"Response not successful: Received status code "+t.status)}if(!Array.isArray(r)&&!r.hasOwnProperty("data")&&!r.hasOwnProperty("errors")){u(t,r,"Server response was missing for query '"+(Array.isArray(e)?e.map(function(r){return r.operationName}):e.operationName)+"'.")}return r})}};var f=function(r){if(!r&&typeof fetch==="undefined"){var e="unfetch";if(typeof window==="undefined")e="node-fetch";throw true?new o["a"](1):undefined}};var v=function(){if(typeof AbortController==="undefined")return{controller:false,signal:false};var r=new AbortController;var e=r.signal;return{controller:r,signal:e}};var l=function(r,e){var n=[];for(var t=2;t<arguments.length;t++){n[t-2]=arguments[t]}var o=Object(d["__assign"])({},e.options,{headers:e.headers,credentials:e.credentials});var a=e.http;n.forEach(function(r){o=Object(d["__assign"])({},o,r.options,{headers:Object(d["__assign"])({},o.headers,r.headers)});if(r.credentials)o.credentials=r.credentials;a=Object(d["__assign"])({},a,r.http)});var i=r.operationName,s=r.extensions,u=r.variables,c=r.query;var f={operationName:i,variables:u};if(a.includeExtensions)f.extensions=s;if(a.includeQuery)f.query=Object(p["a"])(c);return{options:o,body:f}};var h=function(r,e){var n;try{n=JSON.stringify(r)}catch(r){var t=true?new o["a"](2):undefined;t.parseError=r;throw t}return n};var y=function(r,e){var n=r.getContext();var t=n.uri;if(t){return t}else if(typeof e==="function"){return e(r)}else{return e||"/graphql"}}}}]);