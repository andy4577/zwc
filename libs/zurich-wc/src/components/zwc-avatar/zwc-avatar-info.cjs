"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const t=require("lit/decorators.js"),l=require("lit"),v=require("lit/directives/class-map.js");require("./zwc-avatar.cjs");var p=Object.defineProperty,u=Object.getOwnPropertyDescriptor,a=(e,o,s,i)=>{for(var r=i>1?void 0:i?u(o,s):o,n=e.length-1,c;n>=0;n--)(c=e[n])&&(r=(i?c(o,s,r):c(r))||r);return i&&r&&p(o,s,r),r};exports.ZwcAvatarInfo=class extends l.LitElement{constructor(){super(...arguments),this.backgroundColor="",this.color="",this.title="",this.subtitle="",this.size="sm",this.outline=!1,this.orientation="horizontal"}render(){const e={"avatar-vertical":this.orientation==="vertical"};return l.html`
      <div class="avatar-info ${v.classMap(e)}">
        <zwc-avatar
          size=${this.size}
          background-color="${this.backgroundColor}"
          color="${this.color}"
          ?outline="${this.outline}"
        >
          <slot name="icon"></slot>
          <slot name="image"></slot>
          <slot></slot>
        </zwc-avatar>
        <div class="avatar-content">
          <span class="avatar-title">${this.title}</span>
          <span class="avatar-subtitle">${this.subtitle}</span>
        </div>
      </div>
    `}};exports.ZwcAvatarInfo.styles=[l.css`
      :host {
        height: fit-content;
        width: fit-content;
        display: block;
      }

      .avatar-info {
        position: relative;
        cursor: pointer;
        display: inline-flex;
        text-decoration: none;
      }

      .avatar-info:hover .avatar-title {
        color: var(--c-zurichblue);
      }

      .avatar-vertical {
        flex-direction: column;
        text-align: center;
        align-items: center;
      }

      .avatar-vertical zwc-avatar {
        margin-bottom: var(--spc-2);
      }

      .avatar-vertical .avatar-basic {
        margin-bottom: var(--spc-2);
      }

      .avatar-vertical .avatar-content {
        margin-left: 0;
      }

      .avatar-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: var(--spc-3);
      }

      .avatar-title {
        color: var(--c-zurichblue);
        font-size: var(--font-size-base-sm);
        line-height: 19px;
        font-family: var(--f-sans-regular);
      }

      .avatar-subtitle {
        color: var(--c-grey-07);
        font-size: 12px;
        font-family: var(--f-sans-medium);
      }

      .avatar-info .avatar-basic {
        background-color: var(--c-zurichblue);
        color: white;
      }

      @media only screen and (max-width: 600px) {
        .avatar-title {
          font-size: var(--font-size-root);
        }
      }
    `];a([t.property({type:String,attribute:"background-color",reflect:!0})],exports.ZwcAvatarInfo.prototype,"backgroundColor",2);a([t.property({type:String})],exports.ZwcAvatarInfo.prototype,"color",2);a([t.property({type:String})],exports.ZwcAvatarInfo.prototype,"title",2);a([t.property({type:String})],exports.ZwcAvatarInfo.prototype,"subtitle",2);a([t.property({type:String})],exports.ZwcAvatarInfo.prototype,"size",2);a([t.property({type:Boolean})],exports.ZwcAvatarInfo.prototype,"outline",2);a([t.property({type:String})],exports.ZwcAvatarInfo.prototype,"orientation",2);exports.ZwcAvatarInfo=a([t.customElement("zwc-avatar-info")],exports.ZwcAvatarInfo);
//# sourceMappingURL=zwc-avatar-info.cjs.map
