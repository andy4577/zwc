import { property as i, customElement as m } from "lit/decorators.js";
import { css as u, LitElement as v, html as d } from "lit";
import { classMap as f } from "lit/directives/class-map.js";
import { styleMap as g } from "lit/directives/style-map.js";
import "../../utils/pictograms.js";
import { getColorVar as p } from "../../utils/color.js";
var h = Object.defineProperty, b = Object.getOwnPropertyDescriptor, e = (a, r, l, s) => {
  for (var t = s > 1 ? void 0 : s ? b(r, l) : r, n = a.length - 1, c; n >= 0; n--)
    (c = a[n]) && (t = (s ? c(r, l, t) : c(t)) || t);
  return s && t && h(r, l, t), t;
};
let o = class extends v {
  constructor() {
    super(...arguments), this.backgroundColor = "", this.color = "", this.size = "md", this.outline = !1;
  }
  render() {
    const a = {
      avatar: !0,
      [`${this.size}`]: this.size,
      "background-color": `${this.backgroundColor}`
    }, r = {
      backgroundColor: this.backgroundColor ? p(this.backgroundColor) : null,
      border: this.outline ? `1.5px solid ${p(this.color)}` : null,
      color: this.color ? `${p(this.color)}` : null
    };
    return d`
      <div class="${f(a)}" style="${g(r)}">
        <slot name="icon"></slot>
        <slot name="image"></slot>
        <slot></slot>
      </div>
    `;
  }
};
o.styles = [
  u`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      .avatar {
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-family: var(--zwc-avatar-font, var(--f-sans-medium));
        font-size: var(--font-size-base-xs);
        color: var(--zwc-avatar-color, var(--c-white));
        background-color: var(--zwc-avatar-background, var(--c-zurichblue));
        position: relative;
        vertical-align: top;
      }

      ::slotted(img) {
        position: absolute;
        height: inherit;
        border-radius: 50%;
      }

      .avatar.sm,
      .sm ::slotted(img) {
        min-width: 40px;
        height: 40px;
        font-size: var(--font-size-base-xs);
      }

      .avatar.md,
      .md ::slotted(img) {
        min-width: 56px;
        height: 56px;
        font-size: var(--font-size-base);
      }

      .avatar.lg,
      .lg ::slotted(img) {
        min-width: 80px;
        height: 80px;
        font-size: 28px;
        font-family: var(--zwc-avatar-font, var(--f-sans-regular));
      }
    `
];
e([
  i({ type: String, attribute: "background-color", reflect: !0 })
], o.prototype, "backgroundColor", 2);
e([
  i({ type: String })
], o.prototype, "color", 2);
e([
  i({ type: String })
], o.prototype, "size", 2);
e([
  i({ type: Boolean })
], o.prototype, "outline", 2);
o = e([
  m("zwc-avatar")
], o);
export {
  o as ZwcAvatar
};
//# sourceMappingURL=zwc-avatar.js.map
