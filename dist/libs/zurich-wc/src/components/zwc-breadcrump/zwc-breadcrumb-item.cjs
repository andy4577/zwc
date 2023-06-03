"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const d=require("../../../../../node_modules/lit-html/directives/class-map.cjs"),u=require("../../../../../node_modules/@lit/reactive-element/decorators/custom-element.cjs"),r=require("../../../../../node_modules/@lit/reactive-element/decorators/property.cjs");require("../../../../../node_modules/@lit/reactive-element/decorators/query-assigned-elements.cjs");const a=require("../../../../../node_modules/lit-html/directives/if-defined.cjs");require("../../../../../node_modules/@lit/reactive-element/reactive-element.cjs");const m=require("../../../../../node_modules/lit-html/lit-html.cjs"),p=require("../../../../../node_modules/lit-element/lit-element.cjs"),v=require("../../../../../node_modules/@lit/reactive-element/css-tag.cjs");var h=Object.defineProperty,f=Object.getOwnPropertyDescriptor,t=(o,c,s,i)=>{for(var e=i>1?void 0:i?f(c,s):c,l=o.length-1,n;l>=0;l--)(n=o[l])&&(e=(i?n(c,s,e):n(e))||e);return i&&e&&h(c,s,e),e};exports.ZwcBreadcrumbItem=class extends p.LitElement{constructor(){super(...arguments),this.rel="noreferrer noopener",this.text="",this.inverted=!1}render(){const o={inverted:this.inverted};return m.html`
      <a
        class="breadcrumb-item ${d.classMap(o)}"
        part="label"
        href="${this.href}"
        target="${a.ifDefined(this.target?this.target:void 0)}"
        rel=${a.ifDefined(this.target?this.rel:void 0)}
      >
        ${this.icon?m.html`<zwc-icon size="sm" icon=${this.icon}></zwc-icon>`:this.text}
      </a>
    `}};exports.ZwcBreadcrumbItem.styles=[v.css`
      :host {
        --zwc-icon-color: var(--c-zurichblue);
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 3px;
      }
      a {
        margin-right: 4px;
        list-style: none;
        padding: 0;
        margin: 0;
        font-size: var(--font-size-root);
        font-family: var(--f-sans-regular);
        color: var(--c-zurichblue);
        text-decoration: none;
        white-space: nowrap;
      }
      a:hover {
        color: var(--c-midblue);
      }
      :host(:last-of-type) a {
        pointer-events: none;
        color: var(--c-darkblue);
      }
      :host(:last-of-type) a:hover {
        color: var(--c-midblue);
      }
      ::slotted(zwc-icon) {
        margin: 0 4px;
      }
      .inverted {
        color: var(--c-white);
      }
      .inverted:hover {
        color: var(--c-lightblue);
      }
      :host(:last-of-type) .inverted {
        color: var(--c-white);
        opacity: 0.66;
      }
      .inverted + zwc-icon,
      .inverted > zwc-icon {
        --zwc-icon-color: var(--c-white);
      }
    `];t([r.property()],exports.ZwcBreadcrumbItem.prototype,"href",2);t([r.property()],exports.ZwcBreadcrumbItem.prototype,"icon",2);t([r.property()],exports.ZwcBreadcrumbItem.prototype,"target",2);t([r.property()],exports.ZwcBreadcrumbItem.prototype,"rel",2);t([r.property()],exports.ZwcBreadcrumbItem.prototype,"text",2);t([r.property({type:Boolean,reflect:!0})],exports.ZwcBreadcrumbItem.prototype,"inverted",2);exports.ZwcBreadcrumbItem=t([u.customElement("zwc-breadcrumb-item")],exports.ZwcBreadcrumbItem);
//# sourceMappingURL=zwc-breadcrumb-item.cjs.map
