import { customElement as m } from "../../../../../node_modules/@lit/reactive-element/decorators/custom-element.js";
import { property as i } from "../../../../../node_modules/@lit/reactive-element/decorators/property.js";
import "../../../../../node_modules/@lit/reactive-element/decorators/query-assigned-elements.js";
import "../../../../../node_modules/@lit/reactive-element/reactive-element.js";
import { html as f } from "../../../../../node_modules/lit-html/lit-html.js";
import { LitElement as u } from "../../../../../node_modules/lit-element/lit-element.js";
import { classMap as v } from "../../../../../node_modules/lit-html/directives/class-map.js";
import { styleMap as d } from "../../../../../node_modules/lit-html/directives/style-map.js";
import "../../utils/pictograms.js";
import { getColorVar as p } from "../../utils/color.js";
import { css as g } from "../../../../../node_modules/@lit/reactive-element/css-tag.js";
var h = Object.defineProperty, b = Object.getOwnPropertyDescriptor, e = (a, r, l, s) => {
  for (var t = s > 1 ? void 0 : s ? b(r, l) : r, n = a.length - 1, c; n >= 0; n--)
    (c = a[n]) && (t = (s ? c(r, l, t) : c(t)) || t);
  return s && t && h(r, l, t), t;
};
let o = class extends u {
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
    return f`
      <div class="${v(a)}" style="${d(r)}">
        <slot name="icon"></slot>
        <slot name="image"></slot>
        <slot></slot>
      </div>
    `;
  }
};
o.styles = [
  g`
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
