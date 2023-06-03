"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const t=require("lit/decorators.js"),l=require("lit"),n=require("lit/directives/class-map.js"),m=require("./zwc-image_styles.cjs");var u=Object.defineProperty,g=Object.getOwnPropertyDescriptor,s=(r,c,i,o)=>{for(var e=o>1?void 0:o?g(c,i):c,a=r.length-1,p;a>=0;a--)(p=r[a])&&(e=(o?p(c,i,e):p(e))||e);return o&&e&&u(c,i,e),e};exports.ZwcImage=class extends l.LitElement{constructor(){super(...arguments),this.src="",this.size="",this.rounded=!1,this.centered=!1}render(){const r={[`img-${this.size}`]:this.size,"img-rounded":this.rounded,"img-centered":this.centered};return l.html`<img
      src="${this.src}"
      alt="image"
      class="${n.classMap(r)}"
    />`}};exports.ZwcImage.styles=l.unsafeCSS(m);s([t.property({type:String})],exports.ZwcImage.prototype,"src",2);s([t.property({type:String})],exports.ZwcImage.prototype,"size",2);s([t.property({type:Boolean})],exports.ZwcImage.prototype,"rounded",2);s([t.property({type:Boolean})],exports.ZwcImage.prototype,"centered",2);exports.ZwcImage=s([t.customElement("zwc-image")],exports.ZwcImage);
//# sourceMappingURL=zwc-image.cjs.map
