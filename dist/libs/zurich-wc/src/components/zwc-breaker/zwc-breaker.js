import { customElement as n } from "../../../../../node_modules/@lit/reactive-element/decorators/custom-element.js";
import { property as m } from "../../../../../node_modules/@lit/reactive-element/decorators/property.js";
import { state as f } from "../../../../../node_modules/@lit/reactive-element/decorators/state.js";
import "../../../../../node_modules/@lit/reactive-element/decorators/query-assigned-elements.js";
import { classMap as c } from "../../../../../node_modules/lit-html/directives/class-map.js";
import "../../../../../node_modules/@lit/reactive-element/reactive-element.js";
import { html as h } from "../../../../../node_modules/lit-html/lit-html.js";
import "../../../../../node_modules/lit-element/lit-element.js";
import { unsafeHTML as g } from "../../../../../node_modules/lit-html/directives/unsafe-html.js";
import "../base/base.js";
import { Template as u } from "../base/template.js";
import "../shared/zwc-template/zwc-template.js";
var y = Object.defineProperty, b = Object.getOwnPropertyDescriptor, r = (o, s, a, i) => {
  for (var t = i > 1 ? void 0 : i ? b(s, a) : s, p = o.length - 1, l; p >= 0; p--)
    (l = o[p]) && (t = (i ? l(s, a, t) : l(t)) || t);
  return i && t && y(s, a, t), t;
};
let e = class extends u {
  constructor() {
    super(...arguments), this.title = "Breaker title", this.showTitle = !1, this.alignRight = !1, this.data = "";
  }
  render() {
    const o = {
      breaker: !0,
      "breaker--right": this.alignRight
    };
    return h`
      <aside class=${c(o)}>
        ${this.showTitle ? h`<p class="breaker-title">${this.title}</p>` : ""}
        ${g(this.data)}
      </aside>
    `;
  }
};
r([
  m({ type: String })
], e.prototype, "title", 2);
r([
  m({ type: Boolean, attribute: "show-title" })
], e.prototype, "showTitle", 2);
r([
  m({ type: Boolean, attribute: "align-right" })
], e.prototype, "alignRight", 2);
r([
  f()
], e.prototype, "data", 2);
e = r([
  n("zwc-breaker")
], e);
export {
  e as ZwcBreaker
};
//# sourceMappingURL=zwc-breaker.js.map
