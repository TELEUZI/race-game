(()=>{"use strict";var e,r,t,o={},n={};function a(e){var r=n[e];if(void 0!==r)return r.exports;var t=n[e]={id:e,exports:{}};return o[e](t,t.exports,a),t.exports}a.m=o,e=[],a.O=(r,t,o,n)=>{if(!t){var i=1/0;for(c=0;c<e.length;c++){for(var[t,o,n]=e[c],l=!0,u=0;u<t.length;u++)(!1&n||i>=n)&&Object.keys(a.O).every((e=>a.O[e](t[u])))?t.splice(u--,1):(l=!1,n<i&&(i=n));l&&(e.splice(c--,1),r=o())}return r}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[t,o,n]},a.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return a.d(r,{a:r}),r},a.d=(e,r)=>{for(var t in r)a.o(r,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((r,t)=>(a.f[t](e,r),r)),[])),a.u=e=>e+"."+{125:"4b4d2f571a683857d751",709:"55b590208324eb35e9ac",998:"676290f2a88741a59f0b"}[e]+".js",a.miniCssF=e=>{},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r={},t="race-game:",a.l=(e,o,n,i)=>{if(r[e])r[e].push(o);else{var l,u;if(void 0!==n)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var d=c[s];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==t+n){l=d;break}}l||(u=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.setAttribute("data-webpack",t+n),l.src=e),r[e]=[o];var p=(t,o)=>{l.onerror=l.onload=null,clearTimeout(f);var n=r[e];if(delete r[e],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(o))),t)return t(o)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),u&&document.head.appendChild(l)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var r=a.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{var e={666:0};a.f.j=(r,t)=>{var o=a.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else if(666!=r){var n=new Promise(((t,n)=>o=e[r]=[t,n]));t.push(o[2]=n);var i=a.p+a.u(r),l=new Error;a.l(i,(t=>{if(a.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+r+" failed.\n("+n+": "+i+")",l.name="ChunkLoadError",l.type=n,l.request=i,o[1](l)}}),"chunk-"+r,r)}else e[r]=0},a.O.j=r=>0===e[r];var r=(r,t)=>{var o,n,[i,l,u]=t,c=0;for(o in l)a.o(l,o)&&(a.m[o]=l[o]);if(u)var s=u(a);for(r&&r(t);c<i.length;c++)n=i[c],a.o(e,n)&&e[n]&&e[n][0](),e[i[c]]=0;return a.O(s)},t=self.webpackChunkrace_game=self.webpackChunkrace_game||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})()})();