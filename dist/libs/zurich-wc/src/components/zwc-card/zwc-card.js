import { customElement as m } from "../../../../../node_modules/@lit/reactive-element/decorators/custom-element.js";
import { property as o } from "../../../../../node_modules/@lit/reactive-element/decorators/property.js";
import { state as f } from "../../../../../node_modules/@lit/reactive-element/decorators/state.js";
import "../../../../../node_modules/@lit/reactive-element/decorators/query-assigned-elements.js";
import { classMap as i } from "../../../../../node_modules/lit-html/directives/class-map.js";
import "../../../../../node_modules/@lit/reactive-element/reactive-element.js";
import { html as l } from "../../../../../node_modules/lit-html/lit-html.js";
import "../../../../../node_modules/lit-element/lit-element.js";
import { unsafeHTML as h } from "../../../../../node_modules/lit-html/directives/unsafe-html.js";
import "../base/base.js";
import { Template as u } from "../base/template.js";
import "../shared/zwc-template/zwc-template.js";
var C = Object.defineProperty, v = Object.getOwnPropertyDescriptor, a = (s, e, c, n) => {
  for (var r = n > 1 ? void 0 : n ? v(e, c) : e, p = s.length - 1, d; p >= 0; p--)
    (d = s[p]) && (r = (n ? d(e, c, r) : d(r)) || r);
  return n && r && C(e, c, r), r;
};
let t = class extends u {
  constructor() {
    super(...arguments), this.cardBackground = "", this.hasCenteredContent = !1, this.hasInvertedContent = !1, this.hasCardClickable = !1, this.link = { href: "", target: "" }, this.data = "";
  }
  render() {
    const s = {
      card: !0,
      "card--centered": this.hasCenteredContent,
      [`${this.cardBackground}`]: this.cardBackground
    }, e = {
      "card-content": !0,
      inverted: this.hasInvertedContent
    };
    return l`
      ${this.hasCardClickable ? l` <a
            .href=${this.link.href}
            .target=${this.link.target}
            class=${i(s)}
          >
            <div class=${i(e)}>
              ${h(this.data)}
            </div>
          </a>` : l`<div class=${i(s)}>
            <div class=${i(e)}>
              ${h(this.data)}
            </div>
          </div>`}
    `;
  }
};
a([
  o({ type: String, attribute: "background-class" })
], t.prototype, "cardBackground", 2);
a([
  o({ type: Boolean, attribute: "centered" })
], t.prototype, "hasCenteredContent", 2);
a([
  o({ type: Boolean, attribute: "inverted" })
], t.prototype, "hasInvertedContent", 2);
a([
  o({ type: Boolean, attribute: "clickable" })
], t.prototype, "hasCardClickable", 2);
a([
  o({ type: Object })
], t.prototype, "link", 2);
a([
  f()
], t.prototype, "data", 2);
t = a([
  m("zwc-card")
], t);
export {
  t as ZwcCard
};
//# sourceMappingURL=zwc-card.js.map
