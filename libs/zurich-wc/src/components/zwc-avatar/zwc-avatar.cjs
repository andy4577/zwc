"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("lit/decorators.js"),u=require("lit"),p=require("lit/directives/class-map.js"),v=require("lit/directives/style-map.js");require("../../utils/pictograms.cjs");const n=require("../../utils/color.cjs");var d=Object.defineProperty,g=Object.getOwnPropertyDescriptor,o=(s,r,i,a)=>{for(var t=a>1?void 0:a?g(r,i):r,l=s.length-1,c;l>=0;l--)(c=s[l])&&(t=(a?c(r,i,t):c(t))||t);return a&&t&&d(r,i,t),t};exports.ZwcAvatar=class extends u.LitElement{constructor(){super(...arguments),this.backgroundColor="",this.color="",this.size="md",this.outline=!1}render(){const s={avatar:!0,[`${this.size}`]:this.size,"background-color":`${this.backgroundColor}`},r={backgroundColor:this.backgroundColor?n.getColorVar(this.backgroundColor):null,border:this.outline?`1.5px solid ${n.getColorVar(this.color)}`:null,color:this.color?`${n.getColorVar(this.color)}`:null};return u.html`
      <div class="${p.classMap(s)}" style="${v.styleMap(r)}">
        <slot name="icon"></slot>
        <slot name="image"></slot>
        <slot></slot>
      </div>
    `}};exports.ZwcAvatar.styles=[u.css`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      .avatar {
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-family: var(--zwc-avatar-font, var(--f-sans-medium));
        font-size: var(--font-size-base-xs);
        color: var(--zwc-avatar-color, var(--c-white));
        background-color: var(--zwc-avatar-background, var(--c-zurichblue));
        position: relative;
        vertical-align: top;
      }

      ::slotted(img) {
        position: absolute;
        height: inherit;
        border-radius: 50%;
      }

      .avatar.sm,
      .sm ::slotted(img) {
        min-width: 40px;
        height: 40px;
        font-size: var(--font-size-base-xs);
      }

      .avatar.md,
      .md ::slotted(img) {
        min-width: 56px;
        height: 56px;
        font-size: var(--font-size-base);
      }

      .avatar.lg,
      .lg ::slotted(img) {
        min-width: 80px;
        height: 80px;
        font-size: 28px;
        font-family: var(--zwc-avatar-font, var(--f-sans-regular));
      }
    `];o([e.property({type:String,attribute:"background-color",reflect:!0})],exports.ZwcAvatar.prototype,"backgroundColor",2);o([e.property({type:String})],exports.ZwcAvatar.prototype,"color",2);o([e.property({type:String})],exports.ZwcAvatar.prototype,"size",2);o([e.property({type:Boolean})],exports.ZwcAvatar.prototype,"outline",2);exports.ZwcAvatar=o([e.customElement("zwc-avatar")],exports.ZwcAvatar);
//# sourceMappingURL=zwc-avatar.cjs.map
