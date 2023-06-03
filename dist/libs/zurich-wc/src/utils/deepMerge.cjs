"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const o=(s,r)=>{const t=e=>e&&typeof e=="object",n=e=>Array.isArray(e);return!t(s)||!t(r)?r:(Object.keys(r).forEach(e=>{const i=s[e],c=r[e];n(i)&&n(c)?s[e]=i.concat(c):t(i)&&t(c)?s[e]=o(Object.assign({},i),c):s[e]=c}),s)};exports.deepMerge=o;
//# sourceMappingURL=deepMerge.cjs.map
