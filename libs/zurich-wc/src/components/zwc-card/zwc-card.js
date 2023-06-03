import { property as o, state as u, customElement as C } from "lit/decorators.js";
import { classMap as i } from "lit/directives/class-map.js";
import { html as l } from "lit";
import { unsafeHTML as h } from "lit/directives/unsafe-html.js";
import "../base/base.js";
import { Template as f } from "../base/template.js";
import "../shared/zwc-template/zwc-template.js";
var m = Object.defineProperty, v = Object.getOwnPropertyDescriptor, a = (s, e, c, n) => {
  for (var r = n > 1 ? void 0 : n ? v(e, c) : e, d = s.length - 1, p; d >= 0; d--)
    (p = s[d]) && (r = (n ? p(e, c, r) : p(r)) || r);
  return n && r && m(e, c, r), r;
};
let t = class extends f {
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
  u()
], t.prototype, "data", 2);
t = a([
  C("zwc-card")
], t);
export {
  t as ZwcCard
};
//# sourceMappingURL=zwc-card.js.map
