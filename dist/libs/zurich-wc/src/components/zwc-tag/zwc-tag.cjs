"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const n=require("../../../../../node_modules/@lit/reactive-element/decorators/custom-element.cjs"),i=require("../../../../../node_modules/@lit/reactive-element/decorators/property.cjs");require("../../../../../node_modules/@lit/reactive-element/decorators/query-assigned-elements.cjs");const u=require("../../../../../node_modules/lit-html/directives/class-map.cjs");require("../../../../../node_modules/@lit/reactive-element/reactive-element.cjs");const m=require("../../../../../node_modules/lit-html/lit-html.cjs");require("../../../../../node_modules/lit-element/lit-element.cjs");const p=require("../base/base.cjs");require("../base/template.cjs");var d=Object.defineProperty,h=Object.getOwnPropertyDescriptor,a=(t,r,l,s)=>{for(var e=s>1?void 0:s?h(r,l):r,c=t.length-1,o;c>=0;c--)(o=t[c])&&(e=(s?o(r,l,e):o(e))||e);return s&&e&&d(r,l,e),e};exports.ZwcTag=class extends p.Base{constructor(){super(...arguments),this.label="Label",this.theme="white"}get key(){return`tag-${this.label.toLocaleLowerCase().split(" ").join("-")}`}render(){const t={tag:!0,"tags-control":!0,[`tags-control--${this.theme}`]:!0};return m.html`
      <div class=${u.classMap(t)}>
        <input
          type="checkbox"
          id="${this.key}"
          name="${this.key}"
          checked
          @change=${this.emitChange}
        />
        <label for="${this.key}">${this.label}</label>
      </div>
    `}emitChange(){this.dispatchEvent(new CustomEvent("zwcTagChange",{composed:!0,cancelable:!0,bubbles:!0}))}};a([i.property({type:String,reflect:!0})],exports.ZwcTag.prototype,"label",2);a([i.property({type:String,reflect:!0})],exports.ZwcTag.prototype,"theme",2);exports.ZwcTag=a([n.customElement("zwc-tag")],exports.ZwcTag);
//# sourceMappingURL=zwc-tag.cjs.map
