"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const o=require("lit/decorators.js"),n=require("lit/directives/class-map.js"),u=require("lit"),p=require("../base/base.cjs");require("../base/template.cjs");var h=Object.defineProperty,g=Object.getOwnPropertyDescriptor,i=(t,s,a,r)=>{for(var e=r>1?void 0:r?g(s,a):s,c=t.length-1,l;c>=0;c--)(l=t[c])&&(e=(r?l(s,a,e):l(e))||e);return r&&e&&h(s,a,e),e};exports.ZwcTag=class extends p.Base{constructor(){super(...arguments),this.label="Label",this.theme="white"}get key(){return`tag-${this.label.toLocaleLowerCase().split(" ").join("-")}`}render(){const t={tag:!0,"tags-control":!0,[`tags-control--${this.theme}`]:!0};return u.html`
      <div class=${n.classMap(t)}>
        <input
          type="checkbox"
          id="${this.key}"
          name="${this.key}"
          checked
          @change=${this.emitChange}
        />
        <label for="${this.key}">${this.label}</label>
      </div>
    `}emitChange(){this.dispatchEvent(new CustomEvent("zwcTagChange",{composed:!0,cancelable:!0,bubbles:!0}))}};i([o.property({type:String,reflect:!0})],exports.ZwcTag.prototype,"label",2);i([o.property({type:String,reflect:!0})],exports.ZwcTag.prototype,"theme",2);exports.ZwcTag=i([o.customElement("zwc-tag")],exports.ZwcTag);
//# sourceMappingURL=zwc-tag.cjs.map
