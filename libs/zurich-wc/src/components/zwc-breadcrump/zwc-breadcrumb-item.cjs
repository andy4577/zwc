"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const d=require("lit/directives/class-map.js"),r=require("lit/decorators.js"),p=require("lit/directives/if-defined.js"),s=require("lit");var u=Object.defineProperty,m=Object.getOwnPropertyDescriptor,t=(o,c,a,i)=>{for(var e=i>1?void 0:i?m(c,a):c,n=o.length-1,l;n>=0;n--)(l=o[n])&&(e=(i?l(c,a,e):l(e))||e);return i&&e&&u(c,a,e),e};exports.ZwcBreadcrumbItem=class extends s.LitElement{constructor(){super(...arguments),this.rel="noreferrer noopener",this.text="",this.inverted=!1}render(){const o={inverted:this.inverted};return s.html`
      <a
        class="breadcrumb-item ${d.classMap(o)}"
        part="label"
        href="${this.href}"
        target="${p.ifDefined(this.target?this.target:void 0)}"
        rel=${p.ifDefined(this.target?this.rel:void 0)}
      >
        ${this.icon?s.html`<zwc-icon size="sm" icon=${this.icon}></zwc-icon>`:this.text}
      </a>
    `}};exports.ZwcBreadcrumbItem.styles=[s.css`
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
    `];t([r.property()],exports.ZwcBreadcrumbItem.prototype,"href",2);t([r.property()],exports.ZwcBreadcrumbItem.prototype,"icon",2);t([r.property()],exports.ZwcBreadcrumbItem.prototype,"target",2);t([r.property()],exports.ZwcBreadcrumbItem.prototype,"rel",2);t([r.property()],exports.ZwcBreadcrumbItem.prototype,"text",2);t([r.property({type:Boolean,reflect:!0})],exports.ZwcBreadcrumbItem.prototype,"inverted",2);exports.ZwcBreadcrumbItem=t([r.customElement("zwc-breadcrumb-item")],exports.ZwcBreadcrumbItem);
//# sourceMappingURL=zwc-breadcrumb-item.cjs.map
