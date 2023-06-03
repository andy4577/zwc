"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const c=require("lit/decorators.js"),r=require("lit"),a=require("lit/directives/class-map.js"),u=require("lit/directives/style-map.js");require("../../utils/pictograms.cjs");const y=require("../../utils/color.cjs"),h=require("../../../../styles/css/icons.cjs");var j=Object.defineProperty,m=Object.getOwnPropertyDescriptor,i=(t,s,n,o)=>{for(var e=o>1?void 0:o?m(s,n):s,l=t.length-1,p;l>=0;l--)(p=t[l])&&(e=(o?p(s,n,e):p(e))||e);return o&&e&&j(s,n,e),e};exports.ZwcIcon=class extends r.LitElement{constructor(){super(...arguments),this.size="",this.icon="communication-alert-circle_solid",this.color=void 0}render(){const t={icon:!0,[`icon-${this.size}`]:this.size,[`icon--${this.icon}`]:this.icon},s={color:this.color?y.getColorVar(this.color):null};return r.html`<span
      style="${u.styleMap(s)}"
      class="${a.classMap(t)}"
    ></span>`}};exports.ZwcIcon.styles=[r.unsafeCSS(h),r.css`
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
    `];i([c.property({type:String})],exports.ZwcIcon.prototype,"size",2);i([c.property({type:String})],exports.ZwcIcon.prototype,"icon",2);i([c.property({type:String})],exports.ZwcIcon.prototype,"color",2);exports.ZwcIcon=i([c.customElement("zwc-icon")],exports.ZwcIcon);
//# sourceMappingURL=zwc-icon.cjs.map
