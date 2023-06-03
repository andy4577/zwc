"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const o=require("lit/decorators.js"),n=require("lit"),u=require("lit/directives/class-map.js");require("./zwc-breadcrumb-item.cjs");require("../shared/zwc-template/zwc-template.cjs");var d=Object.defineProperty,p=Object.getOwnPropertyDescriptor,l=(r,e,a,t)=>{for(var s=t>1?void 0:t?p(e,a):e,c=r.length-1,i;c>=0;c--)(i=r[c])&&(s=(t?i(e,a,s):i(s))||s);return t&&s&&d(e,a,s),s};exports.ZwcBreadcrumb=class extends n.LitElement{constructor(){super(...arguments),this.inverted=!1}getSeparator(){var a;const e=((a=this.separatorSlot)==null?void 0:a.assignedElements({flatten:!0})[0]).cloneNode(!0);return[e,...e.querySelectorAll("[id]")].forEach(t=>t.removeAttribute("id")),e.setAttribute("data-default",""),e.slot="separator",e}handleSlotChange(){if(this.defaultSlot){const r=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()==="zwc-breadcrumb-item");r.forEach((e,a)=>{var t;a!==r.length-1&&e.querySelector('[slot="separator"]')===null&&((t=e.shadowRoot)==null||t.append(this.getSeparator()))})}}render(){const r={breadcrumbs:!0,inverted:this.inverted};return n.html` <div class="${u.classMap(r)}" aria-label="breadcrumbs">
      <slot @slotchange=${this.handleSlotChange}></slot>
      <slot name="separator" hidden aria-hidden="true">
        <zwc-icon size="xs" icon="action-arrow-right_outline"></zwc-icon>
      </slot>
    </div>`}};exports.ZwcBreadcrumb.styles=[n.css`
      .breadcrumbs {
        display: flex;
        flex-direction: row;
        gap: 3px;
      }
    `];l([o.query("slot")],exports.ZwcBreadcrumb.prototype,"defaultSlot",2);l([o.query('slot[name="separator"]')],exports.ZwcBreadcrumb.prototype,"separatorSlot",2);l([o.property({type:Boolean,reflect:!0})],exports.ZwcBreadcrumb.prototype,"inverted",2);exports.ZwcBreadcrumb=l([o.customElement("zwc-breadcrumb")],exports.ZwcBreadcrumb);
//# sourceMappingURL=zwc-breadcrumb.cjs.map
