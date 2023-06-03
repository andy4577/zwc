"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const u=require("../../../../../node_modules/@lit/reactive-element/decorators/custom-element.cjs"),a=require("../../../../../node_modules/@lit/reactive-element/decorators/property.cjs");require("../../../../../node_modules/@lit/reactive-element/decorators/query-assigned-elements.cjs");require("../../../../../node_modules/@lit/reactive-element/reactive-element.cjs");const d=require("../../../../../node_modules/lit-html/lit-html.cjs"),m=require("../../../../../node_modules/lit-element/lit-element.cjs"),p=require("../../../../../node_modules/lit-html/directives/class-map.cjs"),v=require("../../../../../node_modules/lit-html/directives/style-map.cjs");require("../../utils/pictograms.cjs");const n=require("../../utils/color.cjs"),g=require("../../../../../node_modules/@lit/reactive-element/css-tag.cjs");var h=Object.defineProperty,b=Object.getOwnPropertyDescriptor,r=(o,t,l,s)=>{for(var e=s>1?void 0:s?b(t,l):t,i=o.length-1,c;i>=0;i--)(c=o[i])&&(e=(s?c(t,l,e):c(e))||e);return s&&e&&h(t,l,e),e};exports.ZwcAvatar=class extends m.LitElement{constructor(){super(...arguments),this.backgroundColor="",this.color="",this.size="md",this.outline=!1}render(){const o={avatar:!0,[`${this.size}`]:this.size,"background-color":`${this.backgroundColor}`},t={backgroundColor:this.backgroundColor?n.getColorVar(this.backgroundColor):null,border:this.outline?`1.5px solid ${n.getColorVar(this.color)}`:null,color:this.color?`${n.getColorVar(this.color)}`:null};return d.html`
      <div class="${p.classMap(o)}" style="${v.styleMap(t)}">
        <slot name="icon"></slot>
        <slot name="image"></slot>
        <slot></slot>
      </div>
    `}};exports.ZwcAvatar.styles=[g.css`
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
    `];r([a.property({type:String,attribute:"background-color",reflect:!0})],exports.ZwcAvatar.prototype,"backgroundColor",2);r([a.property({type:String})],exports.ZwcAvatar.prototype,"color",2);r([a.property({type:String})],exports.ZwcAvatar.prototype,"size",2);r([a.property({type:Boolean})],exports.ZwcAvatar.prototype,"outline",2);exports.ZwcAvatar=r([u.customElement("zwc-avatar")],exports.ZwcAvatar);
//# sourceMappingURL=zwc-avatar.cjs.map
