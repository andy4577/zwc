import { property as s, customElement as p } from "lit/decorators.js";
import { css as b, LitElement as d, html as u } from "lit";
import "./zwc-avatar.js";
import "../zwc-badge/zwc-badge.js";
var g = Object.defineProperty, v = Object.getOwnPropertyDescriptor, e = (c, r, i, a) => {
  for (var t = a > 1 ? void 0 : a ? v(r, i) : r, l = c.length - 1, n; l >= 0; l--)
    (n = c[l]) && (t = (a ? n(r, i, t) : n(t)) || t);
  return a && t && g(r, i, t), t;
};
let o = class extends d {
  constructor() {
    super(...arguments), this.backgroundColor = "", this.color = "", this.size = "md", this.outline = !1;
  }
  render() {
    return u`
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
  b`
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
e([
  s({ type: String, attribute: "background-color", reflect: !0 })
], o.prototype, "backgroundColor", 2);
e([
  s({ type: String })
], o.prototype, "color", 2);
e([
  s({ type: String })
], o.prototype, "size", 2);
e([
  s({ type: Boolean })
], o.prototype, "outline", 2);
o = e([
  p("zwc-avatar-status")
], o);
export {
  o as ZwcAvatarStatus
};
//# sourceMappingURL=zwc-avatar-status.js.map
