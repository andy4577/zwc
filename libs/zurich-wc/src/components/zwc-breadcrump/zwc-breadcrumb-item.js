import { classMap as v } from "lit/directives/class-map.js";
import { property as o, customElement as f } from "lit/decorators.js";
import { ifDefined as p } from "lit/directives/if-defined.js";
import { css as m, LitElement as d, html as h } from "lit";
var u = Object.defineProperty, w = Object.getOwnPropertyDescriptor, r = (i, c, s, n) => {
  for (var t = n > 1 ? void 0 : n ? w(c, s) : c, a = i.length - 1, l; a >= 0; a--)
    (l = i[a]) && (t = (n ? l(c, s, t) : l(t)) || t);
  return n && t && u(c, s, t), t;
};
let e = class extends d {
  constructor() {
    super(...arguments), this.rel = "noreferrer noopener", this.text = "", this.inverted = !1;
  }
  render() {
    const i = {
      inverted: this.inverted
    };
    return h`
      <a
        class="breadcrumb-item ${v(i)}"
        part="label"
        href="${this.href}"
        target="${p(this.target ? this.target : void 0)}"
        rel=${p(this.target ? this.rel : void 0)}
      >
        ${this.icon ? h`<zwc-icon size="sm" icon=${this.icon}></zwc-icon>` : this.text}
      </a>
    `;
  }
};
e.styles = [
  m`
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
  f("zwc-breadcrumb-item")
], e);
export {
  e as ZwcBreadcrumbItem
};
//# sourceMappingURL=zwc-breadcrumb-item.js.map
