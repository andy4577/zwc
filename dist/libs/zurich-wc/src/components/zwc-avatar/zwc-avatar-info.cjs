"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const c=require("../../../../../node_modules/@lit/reactive-element/decorators/custom-element.cjs"),r=require("../../../../../node_modules/@lit/reactive-element/decorators/property.cjs");require("../../../../../node_modules/@lit/reactive-element/decorators/query-assigned-elements.cjs");require("../../../../../node_modules/@lit/reactive-element/reactive-element.cjs");const v=require("../../../../../node_modules/lit-html/lit-html.cjs"),p=require("../../../../../node_modules/lit-element/lit-element.cjs"),u=require("../../../../../node_modules/lit-html/directives/class-map.cjs");require("./zwc-avatar.cjs");const m=require("../../../../../node_modules/@lit/reactive-element/css-tag.cjs");var d=Object.defineProperty,f=Object.getOwnPropertyDescriptor,t=(a,o,s,i)=>{for(var e=i>1?void 0:i?f(o,s):o,n=a.length-1,l;n>=0;n--)(l=a[n])&&(e=(i?l(o,s,e):l(e))||e);return i&&e&&d(o,s,e),e};exports.ZwcAvatarInfo=class extends p.LitElement{constructor(){super(...arguments),this.backgroundColor="",this.color="",this.title="",this.subtitle="",this.size="sm",this.outline=!1,this.orientation="horizontal"}render(){const a={"avatar-vertical":this.orientation==="vertical"};return v.html`
      <div class="avatar-info ${u.classMap(a)}">
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
    `}};exports.ZwcAvatarInfo.styles=[m.css`
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
    `];t([r.property({type:String,attribute:"background-color",reflect:!0})],exports.ZwcAvatarInfo.prototype,"backgroundColor",2);t([r.property({type:String})],exports.ZwcAvatarInfo.prototype,"color",2);t([r.property({type:String})],exports.ZwcAvatarInfo.prototype,"title",2);t([r.property({type:String})],exports.ZwcAvatarInfo.prototype,"subtitle",2);t([r.property({type:String})],exports.ZwcAvatarInfo.prototype,"size",2);t([r.property({type:Boolean})],exports.ZwcAvatarInfo.prototype,"outline",2);t([r.property({type:String})],exports.ZwcAvatarInfo.prototype,"orientation",2);exports.ZwcAvatarInfo=t([c.customElement("zwc-avatar-info")],exports.ZwcAvatarInfo);
//# sourceMappingURL=zwc-avatar-info.cjs.map
