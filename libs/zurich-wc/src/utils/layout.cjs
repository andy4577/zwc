"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const c="has-scroll-left",i="has-scroll-right",n="has-scroller",L=(s,t)=>{const o=t.scrollLeft,l=t.scrollWidth,e=t.offsetWidth;l>e?s.classList.add(n):s.classList.remove(n),o>0?s.classList.add(c):s.classList.remove(c),o+e>=l?s.classList.remove(i):s.classList.add(i)};exports.toggleHorizontalScrollArrows=L;
//# sourceMappingURL=layout.cjs.map
