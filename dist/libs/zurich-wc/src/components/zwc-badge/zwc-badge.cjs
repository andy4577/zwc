"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const d=require("../../../../../node_modules/@lit/reactive-element/decorators/custom-element.cjs"),i=require("../../../../../node_modules/@lit/reactive-element/decorators/property.cjs"),p=require("../../../../../node_modules/@lit/reactive-element/decorators/state.cjs");require("../../../../../node_modules/@lit/reactive-element/decorators/query-assigned-elements.cjs");require("../../../../../node_modules/@lit/reactive-element/reactive-element.cjs");const g=require("../../../../../node_modules/lit-html/lit-html.cjs"),u=require("../../../../../node_modules/lit-element/lit-element.cjs"),h=require("../../../../../node_modules/lit-html/directives/class-map.cjs"),m=require("../../../../../node_modules/lit-html/directives/style-map.cjs");require("../../utils/pictograms.cjs");const l=require("../../utils/color.cjs");require("../zwc-icon/zwc-icon.cjs");const x=require("../../../../../node_modules/@lit/reactive-element/css-tag.cjs");var b=Object.defineProperty,y=Object.getOwnPropertyDescriptor,s=(t,e,n,o)=>{for(var r=o>1?void 0:o?y(e,n):e,a=t.length-1,c;a>=0;a--)(c=t[a])&&(r=(o?c(e,n,r):c(r))||r);return o&&r&&b(e,n,r),r};exports.ZwcBadge=class extends u.LitElement{constructor(){super(...arguments),this.status="primary",this.text="",this.color=void 0,this.backgroundColor=void 0,this.size="",this.hasPadding=!0}render(){const t={badge:!0,[`${this.status}`]:this.status,[`${this.size}`]:this.size,"no-padding":!this.hasPadding},e={color:this.color?l.getColorVar(this.color):null,backgroundColor:this.backgroundColor?l.getColorVar(this.backgroundColor):null};return g.html`
      <span style="${m.styleMap(e)}" class="${h.classMap(t)}">
        <slot name="icon" part="icon"></slot>
        <slot @slotchange=${this.handleDefaultSlot}></slot>
      </span>
    `}handleDefaultSlot(t){if(t){const o=t.target.assignedNodes({flatten:!0}).map(r=>this.sanitize(r)).filter(Boolean);this.hasPadding=o[0]?o[0].length>1:!1}}sanitize(t){var e;return(e=t.textContent)==null?void 0:e.trim()}};exports.ZwcBadge.styles=[x.css`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      :host {
        display: inline-flex;
        justify-content: center;
        align-items: center;
      }
      .badge {
        display: inline-flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 4px;
        text-align: center;
        border: 1px solid var(--zwc-badge-border, transparent);
        border-radius: 26px;
        height: 22px;
        font-size: 12px;
        line-height: 22px;
        padding: 0px 8px;
        font-family: var(--zwc-badge-font, var(--f-sans-medium));
        font-weight: 500;
        min-width: 22px;
        box-shadow: 0 1px 5px 0 rgb(0 0 0 / 7%), 0 2px 2px 0 rgb(0 0 0 / 5%),
          0 3px 1px -2px rgb(0 0 0 / 3%);
        color: var(--zwc-badge-color, var(--c-white));
        background-color: var(--zwc-badge-background, var(--c-zurichblue));
      }

      .primary {
        background-color: var(--c-theme-primary);
      }
      .dark {
        background-color: var(--c-theme-secondary);
      }
      .success {
        background-color: var(--c-theme-success);
      }
      .danger {
        background-color: var(--c-theme-danger);
      }
      .info {
        background-color: var(--c-theme-info);
      }
      .unknown {
        background-color: var(--c-theme-unknown);
      }

      .lg {
        height: 26px;
        font-size: 14px;
        line-height: 28px;
        min-width: 28px;
        padding: 0 10px;
      }
      .sm {
        height: 18px;
        min-width: 18px;
        line-height: 18px;
        padding: 0 6px;
      }
      .xs {
        height: 14px;
        font-size: 10px;
        line-height: 14px;
        min-width: 14px;
        padding: 0 4px;
      }

      .no-padding {
        padding: 0px;
        aspect-ratio: 1 / 1;
      }
    `];s([i.property()],exports.ZwcBadge.prototype,"status",2);s([i.property({type:String,attribute:"text"})],exports.ZwcBadge.prototype,"text",2);s([i.property({type:String})],exports.ZwcBadge.prototype,"color",2);s([i.property({type:String})],exports.ZwcBadge.prototype,"backgroundColor",2);s([i.property({type:String})],exports.ZwcBadge.prototype,"size",2);s([p.state()],exports.ZwcBadge.prototype,"hasPadding",2);exports.ZwcBadge=s([d.customElement("zwc-badge")],exports.ZwcBadge);
//# sourceMappingURL=zwc-badge.cjs.map
