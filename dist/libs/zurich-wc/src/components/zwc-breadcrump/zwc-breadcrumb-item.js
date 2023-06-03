import { classMap as h } from "../../../../../node_modules/lit-html/directives/class-map.js";
import { customElement as v } from "../../../../../node_modules/@lit/reactive-element/decorators/custom-element.js";
import { property as o } from "../../../../../node_modules/@lit/reactive-element/decorators/property.js";
import "../../../../../node_modules/@lit/reactive-element/decorators/query-assigned-elements.js";
import { ifDefined as p } from "../../../../../node_modules/lit-html/directives/if-defined.js";
import "../../../../../node_modules/@lit/reactive-element/reactive-element.js";
import { html as m } from "../../../../../node_modules/lit-html/lit-html.js";
import { LitElement as f } from "../../../../../node_modules/lit-element/lit-element.js";
import { css as d } from "../../../../../node_modules/@lit/reactive-element/css-tag.js";
var u = Object.defineProperty, y = Object.getOwnPropertyDescriptor, r = (i, s, a, c) => {
  for (var t = c > 1 ? void 0 : c ? y(s, a) : s, n = i.length - 1, l; n >= 0; n--)
    (l = i[n]) && (t = (c ? l(s, a, t) : l(t)) || t);
  return c && t && u(s, a, t), t;
};
let e = class extends f {
  constructor() {
    super(...arguments), this.rel = "noreferrer noopener", this.text = "", this.inverted = !1;
  }
  render() {
    const i = {
      inverted: this.inverted
    };
    return m`
      <a
        class="breadcrumb-item ${h(i)}"
        part="label"
        href="${this.href}"
        target="${p(this.target ? this.target : void 0)}"
        rel=${p(this.target ? this.rel : void 0)}
      >
        ${this.icon ? m`<zwc-icon size="sm" icon=${this.icon}></zwc-icon>` : this.text}
      </a>
    `;
  }
};
e.styles = [
  d`
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
    `
];
r([
  o()
], e.prototype, "href", 2);
r([
  o()
], e.prototype, "icon", 2);
r([
  o()
], e.prototype, "target", 2);
r([
  o()
], e.prototype, "rel", 2);
r([
  o()
], e.prototype, "text", 2);
r([
  o({ type: Boolean, reflect: !0 })
], e.prototype, "inverted", 2);
e = r([
  v("zwc-breadcrumb-item")
], e);
export {
  e as ZwcBreadcrumbItem
};
//# sourceMappingURL=zwc-breadcrumb-item.js.map
