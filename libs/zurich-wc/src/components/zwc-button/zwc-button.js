import { property as s, customElement as y } from "lit/decorators.js";
import { unsafeCSS as b, LitElement as h } from "lit";
import { classMap as m } from "lit/directives/class-map.js";
import { styleMap as d } from "lit/directives/style-map.js";
import "../../utils/pictograms.js";
import { getColorVar as c } from "../../utils/color.js";
import f from "./zwc-button_styles.js";
import { literal as u, html as g } from "lit/static-html.js";
var v = Object.defineProperty, C = Object.getOwnPropertyDescriptor, o = (l, r, i, p) => {
  for (var e = p > 1 ? void 0 : p ? C(r, i) : r, n = l.length - 1, a; n >= 0; n--)
    (a = l[n]) && (e = (p ? a(r, i, e) : a(e)) || e);
  return p && e && v(r, i, e), e;
};
let t = class extends h {
  constructor() {
    super(...arguments), this.type = "button", this.size = "lg", this.status = "primary", this.text = "", this.isInverted = !1, this.isDisabled = !1, this.isIconAlt = !1, this.color = void 0, this.backgroundColor = void 0;
  }
  render() {
    const l = {
      btn: !0,
      [`btn--${this.status}`]: this.status,
      [`btn--${this.size}`]: this.size,
      inverted: this.isInverted,
      disabled: this.isDisabled,
      alt: this.isIconAlt
    }, r = {
      color: this.color ? c(this.color) : null,
      backgroundColor: this.backgroundColor ? c(this.backgroundColor) : null
    }, i = this.type === "button" ? u`button` : u`a`;
    return g`
        <${i} class="${m(l)}" style="${d(r)}">
            ${this.text}
            <slot name="icon"></slot>
            <slot name="badge"></slot>
            <slot></slot>
        </${i}>
    `;
  }
};
t.styles = b(f);
o([
  s()
], t.prototype, "type", 2);
o([
  s()
], t.prototype, "size", 2);
o([
  s()
], t.prototype, "status", 2);
o([
  s({ type: String, attribute: "text" })
], t.prototype, "text", 2);
o([
  s({ type: Boolean, attribute: "inverted" })
], t.prototype, "isInverted", 2);
o([
  s({ type: Boolean, attribute: "disabled" })
], t.prototype, "isDisabled", 2);
o([
  s({ type: Boolean, attribute: "alt" })
], t.prototype, "isIconAlt", 2);
o([
  s({ type: String })
], t.prototype, "color", 2);
o([
  s({ type: String })
], t.prototype, "backgroundColor", 2);
t = o([
  y("zwc-button")
], t);
export {
  t as ZwcButton
};
//# sourceMappingURL=zwc-button.js.map
