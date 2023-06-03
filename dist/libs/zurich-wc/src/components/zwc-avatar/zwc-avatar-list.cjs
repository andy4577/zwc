"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const m=require("../../../../../node_modules/@lit/reactive-element/decorators/custom-element.cjs"),n=require("../../../../../node_modules/@lit/reactive-element/decorators/property.cjs");require("../../../../../node_modules/@lit/reactive-element/decorators/query-assigned-elements.cjs");require("../../../../../node_modules/@lit/reactive-element/reactive-element.cjs");const c=require("../../../../../node_modules/lit-html/lit-html.cjs"),d=require("../../../../../node_modules/lit-element/lit-element.cjs");require("./zwc-avatar.cjs");const u=require("../../../../../node_modules/@lit/reactive-element/css-tag.cjs");var v=Object.defineProperty,p=Object.getOwnPropertyDescriptor,a=(e,r,l,s)=>{for(var t=s>1?void 0:s?p(r,l):r,i=e.length-1,o;i>=0;i--)(o=e[i])&&(t=(s?o(r,l,t):o(t))||t);return s&&t&&v(r,l,t),t};exports.ZwcAvatarList=class extends d.LitElement{constructor(){super(...arguments),this.backgroundColor="",this.size="md",this.avatars=[]}render(){return c.html`
      <div class="avatar-list-${this.size}">
        ${this.avatars.length>0?this.avatars.map(e=>c.html`<zwc-avatar
                  size="${this.size}"
                  background-color="${e.backgroundColor}"
                >
                  ${e.text}
                </zwc-avatar>`):c.html`<slot></slot>`}
      </div>
    `}};exports.ZwcAvatarList.styles=[u.css`
      .avatar-list-sm :not(:first-child) {
        margin-left: -10px;
      }
      .avatar-list-md :not(:first-child) {
        margin-left: -15px;
      }
      .avatar-list-lg :not(:first-child) {
        margin-left: -15px;
      }
      .avatar-list-sm ::slotted(:not(:first-child)) {
        margin-left: -10px;
      }
      .avatar-list-md ::slotted(:not(:first-child)) {
        margin-left: -15px;
      }
      .avatar-list-lg ::slotted(:not(:first-child)) {
        margin-left: -15px;
      }
    `];a([n.property({type:String,attribute:"background-color",reflect:!0})],exports.ZwcAvatarList.prototype,"backgroundColor",2);a([n.property({type:String})],exports.ZwcAvatarList.prototype,"size",2);a([n.property({type:Array})],exports.ZwcAvatarList.prototype,"avatars",2);exports.ZwcAvatarList=a([m.customElement("zwc-avatar-list")],exports.ZwcAvatarList);
//# sourceMappingURL=zwc-avatar-list.cjs.map
