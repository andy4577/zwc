"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("lit/decorators.js"),l=require("lit");require("./zwc-avatar.cjs");require("../zwc-badge/zwc-badge.cjs");var u=Object.defineProperty,p=Object.getOwnPropertyDescriptor,o=(n,r,s,a)=>{for(var t=a>1?void 0:a?p(r,s):r,i=n.length-1,c;i>=0;i--)(c=n[i])&&(t=(a?c(r,s,t):c(t))||t);return a&&t&&u(r,s,t),t};exports.ZwcAvatarStatus=class extends l.LitElement{constructor(){super(...arguments),this.backgroundColor="",this.color="",this.size="md",this.outline=!1}render(){return l.html`
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
    `}};exports.ZwcAvatarStatus.styles=[l.css`
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
    `];o([e.property({type:String,attribute:"background-color",reflect:!0})],exports.ZwcAvatarStatus.prototype,"backgroundColor",2);o([e.property({type:String})],exports.ZwcAvatarStatus.prototype,"color",2);o([e.property({type:String})],exports.ZwcAvatarStatus.prototype,"size",2);o([e.property({type:Boolean})],exports.ZwcAvatarStatus.prototype,"outline",2);exports.ZwcAvatarStatus=o([e.customElement("zwc-avatar-status")],exports.ZwcAvatarStatus);
//# sourceMappingURL=zwc-avatar-status.cjs.map
