"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const a=require("../../../../../node_modules/@lit/reactive-element/decorators/custom-element.cjs"),n=require("../../../../../node_modules/@lit/reactive-element/decorators/property.cjs");require("../../../../../node_modules/@lit/reactive-element/decorators/query-assigned-elements.cjs");require("../../../../../node_modules/@lit/reactive-element/reactive-element.cjs");const m=require("../../../../../node_modules/lit-html/lit-html.cjs"),p=require("../../../../../node_modules/lit-element/lit-element.cjs"),d=require("../../../../../node_modules/lit-html/directives/class-map.cjs"),y=require("../../../../../node_modules/lit-html/directives/style-map.cjs");require("../../utils/pictograms.cjs");const v=require("../../utils/color.cjs"),_=require("../../../../styles/css/icons.cjs"),u=require("../../../../../node_modules/@lit/reactive-element/css-tag.cjs");var h=Object.defineProperty,j=Object.getOwnPropertyDescriptor,r=(s,t,c,o)=>{for(var e=o>1?void 0:o?j(t,c):t,i=s.length-1,l;i>=0;i--)(l=s[i])&&(e=(o?l(t,c,e):l(e))||e);return o&&e&&h(t,c,e),e};exports.ZwcIcon=class extends p.LitElement{constructor(){super(...arguments),this.size="",this.icon="communication-alert-circle_solid",this.color=void 0}render(){const s={icon:!0,[`icon-${this.size}`]:this.size,[`icon--${this.icon}`]:this.icon},t={color:this.color?v.getColorVar(this.color):null};return m.html`<span
      style="${y.styleMap(t)}"
      class="${d.classMap(s)}"
    ></span>`}};exports.ZwcIcon.styles=[u.unsafeCSS(_),u.css`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      :host {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        color: var(--zwc-icon-color, inherit);
      }
    `];r([n.property({type:String})],exports.ZwcIcon.prototype,"size",2);r([n.property({type:String})],exports.ZwcIcon.prototype,"icon",2);r([n.property({type:String})],exports.ZwcIcon.prototype,"color",2);exports.ZwcIcon=r([a.customElement("zwc-icon")],exports.ZwcIcon);
//# sourceMappingURL=zwc-icon.cjs.map
