import { property as h, state as n, customElement as c } from "lit/decorators.js";
import { classMap as f } from "lit/directives/class-map.js";
import { html as m } from "lit";
import { unsafeHTML as g } from "lit/directives/unsafe-html.js";
import "../base/base.js";
import { Template as u } from "../base/template.js";
import "../shared/zwc-template/zwc-template.js";
var b = Object.defineProperty, w = Object.getOwnPropertyDescriptor, r = (s, i, a, o) => {
  for (var t = o > 1 ? void 0 : o ? w(i, a) : i, p = s.length - 1, l; p >= 0; p--)
    (l = s[p]) && (t = (o ? l(i, a, t) : l(t)) || t);
  return o && t && b(i, a, t), t;
};
let e = class extends u {
  constructor() {
    super(...arguments), this.title = "Breaker title", this.showTitle = !1, this.alignRight = !1, this.data = "";
  }
  render() {
    const s = {
      breaker: !0,
      "breaker--right": this.alignRight
    };
    return m`
      <aside class=${f(s)}>
        ${this.showTitle ? m`<p class="breaker-title">${this.title}</p>` : ""}
        ${g(this.data)}
      </aside>
    `;
  }
};
r([
  h({ type: String })
], e.prototype, "title", 2);
r([
  h({ type: Boolean, attribute: "show-title" })
], e.prototype, "showTitle", 2);
r([
  h({ type: Boolean, attribute: "align-right" })
], e.prototype, "alignRight", 2);
r([
  n()
], e.prototype, "data", 2);
e = r([
  c("zwc-breaker")
], e);
export {
  e as ZwcBreaker
};
//# sourceMappingURL=zwc-breaker.js.map
