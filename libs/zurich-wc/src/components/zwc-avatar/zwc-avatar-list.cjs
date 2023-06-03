"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const i=require("lit/decorators.js"),a=require("lit");require("./zwc-avatar.cjs");var v=Object.defineProperty,p=Object.getOwnPropertyDescriptor,l=(r,s,o,e)=>{for(var t=e>1?void 0:e?p(s,o):s,c=r.length-1,n;c>=0;c--)(n=r[c])&&(t=(e?n(s,o,t):n(t))||t);return e&&t&&v(s,o,t),t};exports.ZwcAvatarList=class extends a.LitElement{constructor(){super(...arguments),this.backgroundColor="",this.size="md",this.avatars=[]}render(){return a.html`
      <div class="avatar-list-${this.size}">
        ${this.avatars.length>0?this.avatars.map(r=>a.html`<zwc-avatar
                  size="${this.size}"
                  background-color="${r.backgroundColor}"
                >
                  ${r.text}
                </zwc-avatar>`):a.html`<slot></slot>`}
      </div>
    `}};exports.ZwcAvatarList.styles=[a.css`
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
    `];l([i.property({type:String,attribute:"background-color",reflect:!0})],exports.ZwcAvatarList.prototype,"backgroundColor",2);l([i.property({type:String})],exports.ZwcAvatarList.prototype,"size",2);l([i.property({type:Array})],exports.ZwcAvatarList.prototype,"avatars",2);exports.ZwcAvatarList=l([i.customElement("zwc-avatar-list")],exports.ZwcAvatarList);
//# sourceMappingURL=zwc-avatar-list.cjs.map
