import { customElement as u } from "../../../../../node_modules/@lit/reactive-element/decorators/custom-element.js";
import { property as s } from "../../../../../node_modules/@lit/reactive-element/decorators/property.js";
import "../../../../../node_modules/@lit/reactive-element/decorators/query-assigned-elements.js";
import "../../../../../node_modules/@lit/reactive-element/reactive-element.js";
import "../../../../../node_modules/lit-html/lit-html.js";
import { LitElement as y } from "../../../../../node_modules/lit-element/lit-element.js";
import { classMap as b } from "../../../../../node_modules/lit-html/directives/class-map.js";
import { styleMap as h } from "../../../../../node_modules/lit-html/directives/style-map.js";
import "../../utils/pictograms.js";
import { getColorVar as m } from "../../utils/color.js";
import d from "./zwc-button_styles.js";
import { literal as c, html as f } from "../../../../../node_modules/lit-html/static.js";
import { unsafeCSS as g } from "../../../../../node_modules/@lit/reactive-element/css-tag.js";
var v = Object.defineProperty, $ = Object.getOwnPropertyDescriptor, o = (l, r, i, p) => {
  for (var e = p > 1 ? void 0 : p ? $(r, i) : r, a = l.length - 1, n; a >= 0; a--)
    (n = l[a]) && (e = (p ? n(r, i, e) : n(e)) || e);
  return p && e && v(r, i, e), e;
};
let t = class extends y {
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
      color: this.color ? m(this.color) : null,
      backgroundColor: this.backgroundColor ? m(this.backgroundColor) : null
    }, i = this.type === "button" ? c`button` : c`a`;
    return f`
        <${i} class="${b(l)}" style="${h(r)}">
            ${this.text}
            <slot name="icon"></slot>
            <slot name="badge"></slot>
            <slot></slot>
        </${i}>
    `;
  }
};
t.styles = g(d);
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
  u("zwc-button")
], t);
export {
  t as ZwcButton
};
//# sourceMappingURL=zwc-button.js.map
