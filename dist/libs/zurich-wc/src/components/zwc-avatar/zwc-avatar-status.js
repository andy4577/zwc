import { customElement as c } from "../../../../../node_modules/@lit/reactive-element/decorators/custom-element.js";
import { property as s } from "../../../../../node_modules/@lit/reactive-element/decorators/property.js";
import "../../../../../node_modules/@lit/reactive-element/decorators/query-assigned-elements.js";
import "../../../../../node_modules/@lit/reactive-element/reactive-element.js";
import { html as b } from "../../../../../node_modules/lit-html/lit-html.js";
import { LitElement as d } from "../../../../../node_modules/lit-element/lit-element.js";
import "./zwc-avatar.js";
import "../zwc-badge/zwc-badge.js";
import { css as m } from "../../../../../node_modules/@lit/reactive-element/css-tag.js";
var u = Object.defineProperty, g = Object.getOwnPropertyDescriptor, r = (n, e, i, a) => {
  for (var t = a > 1 ? void 0 : a ? g(e, i) : e, l = n.length - 1, p; l >= 0; l--)
    (p = n[l]) && (t = (a ? p(e, i, t) : p(t)) || t);
  return a && t && u(e, i, t), t;
};
let o = class extends d {
  constructor() {
    super(...arguments), this.backgroundColor = "", this.color = "", this.size = "md", this.outline = !1;
  }
  render() {
    return b`
      <div class="avatar-status">
        <zwc-avatar
          size=${this.size}
          background-color="${this.backgroundColor}"
          color="${this.color}"
          outline="${this.outline}"
        >
          <slot name="icon"></slot>
          <slot name="image"></slot>
          <slot></slot>
        </zwc-avatar>
        <div class="badge badge-top">
          <slot name="badge-top"></slot>
        </div>
        <div class="badge badge-bottom">
          <slot name="badge-bottom"></slot>
        </div>
      </div>
    `;
  }
};
o.styles = [
  m`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      :host {
        height: fit-content;
        width: fit-content;
        display: block;
      }

      .avatar-status {
        position: relative;
        cursor: pointer;
        display: inline-flex;
        text-decoration: none;
      }

      .badge {
        --zwc-badge-border: var(--c-white);
        display: flex;
        position: absolute;
        right: 0px;
      }

      .badge-top {
        top: 0px;
      }

      .badge-bottom {
        bottom: 0px;
      }

      .avatar-status .avatar-basic {
        background-color: var(--c-zurichblue);
        color: white;
      }
    `
];
r([
  s({ type: String, attribute: "background-color", reflect: !0 })
], o.prototype, "backgroundColor", 2);
r([
  s({ type: String })
], o.prototype, "color", 2);
r([
  s({ type: String })
], o.prototype, "size", 2);
r([
  s({ type: Boolean })
], o.prototype, "outline", 2);
o = r([
  c("zwc-avatar-status")
], o);
export {
  o as ZwcAvatarStatus
};
//# sourceMappingURL=zwc-avatar-status.js.map
