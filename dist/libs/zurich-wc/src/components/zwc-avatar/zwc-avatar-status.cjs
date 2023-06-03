"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const n=require("../../../../../node_modules/@lit/reactive-element/decorators/custom-element.cjs"),a=require("../../../../../node_modules/@lit/reactive-element/decorators/property.cjs");require("../../../../../node_modules/@lit/reactive-element/decorators/query-assigned-elements.cjs");require("../../../../../node_modules/@lit/reactive-element/reactive-element.cjs");const u=require("../../../../../node_modules/lit-html/lit-html.cjs"),d=require("../../../../../node_modules/lit-element/lit-element.cjs");require("./zwc-avatar.cjs");require("../zwc-badge/zwc-badge.cjs");const p=require("../../../../../node_modules/@lit/reactive-element/css-tag.cjs");var m=Object.defineProperty,v=Object.getOwnPropertyDescriptor,e=(c,o,s,r)=>{for(var t=r>1?void 0:r?v(o,s):o,l=c.length-1,i;l>=0;l--)(i=c[l])&&(t=(r?i(o,s,t):i(t))||t);return r&&t&&m(o,s,t),t};exports.ZwcAvatarStatus=class extends d.LitElement{constructor(){super(...arguments),this.backgroundColor="",this.color="",this.size="md",this.outline=!1}render(){return u.html`
      <div class="avatar-status">
        <zwc-avatar
          size=${this.size}
          background-color="${this.backgroundColor}"
          color="${this.color}"
          outline="${this.outline}"
        >
          <slot name="icon"></slot>
          <slot name="image"></slot>
          <slot></slot>
        </zwc-avatar>
        <div class="badge badge-top">
          <slot name="badge-top"></slot>
        </div>
        <div class="badge badge-bottom">
          <slot name="badge-bottom"></slot>
        </div>
      </div>
    `}};exports.ZwcAvatarStatus.styles=[p.css`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      :host {
        height: fit-content;
        width: fit-content;
        display: block;
      }

      .avatar-status {
        position: relative;
        cursor: pointer;
        display: inline-flex;
        text-decoration: none;
      }

      .badge {
        --zwc-badge-border: var(--c-white);
        display: flex;
        position: absolute;
        right: 0px;
      }

      .badge-top {
        top: 0px;
      }

      .badge-bottom {
        bottom: 0px;
      }

      .avatar-status .avatar-basic {
        background-color: var(--c-zurichblue);
        color: white;
      }
    `];e([a.property({type:String,attribute:"background-color",reflect:!0})],exports.ZwcAvatarStatus.prototype,"backgroundColor",2);e([a.property({type:String})],exports.ZwcAvatarStatus.prototype,"color",2);e([a.property({type:String})],exports.ZwcAvatarStatus.prototype,"size",2);e([a.property({type:Boolean})],exports.ZwcAvatarStatus.prototype,"outline",2);exports.ZwcAvatarStatus=e([n.customElement("zwc-avatar-status")],exports.ZwcAvatarStatus);
//# sourceMappingURL=zwc-avatar-status.cjs.map
