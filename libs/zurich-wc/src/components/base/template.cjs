"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const o=require("lit/decorators.js"),i=require("./base.cjs");var d=Object.defineProperty,h=Object.getOwnPropertyDescriptor,p=(a,e,s,n)=>{for(var t=n>1?void 0:n?h(e,s):e,r=a.length-1,c;r>=0;r--)(c=a[r])&&(t=(n?c(e,s,t):c(t))||t);return n&&t&&d(e,s,t),t};class l extends i.Base{connectedCallback(){var e;super.connectedCallback(),(e=this.content)==null||e.addEventListener("change",this.handleChange.bind(this))}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.content)==null||e.removeEventListener("change",this.handleChange)}handleChange(e){this.data=e.detail}}p([o.query("zwc-template")],l.prototype,"content",2);exports.Template=l;
//# sourceMappingURL=template.cjs.map