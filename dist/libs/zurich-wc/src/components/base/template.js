import { query as l } from "../../../../../node_modules/@lit/reactive-element/decorators/query.js";
import "../../../../../node_modules/@lit/reactive-element/decorators/query-assigned-elements.js";
import { Base as o } from "./base.js";
var i = Object.defineProperty, h = Object.getOwnPropertyDescriptor, p = (a, e, r, n) => {
  for (var t = n > 1 ? void 0 : n ? h(e, r) : e, c = a.length - 1, s; c >= 0; c--)
    (s = a[c]) && (t = (n ? s(e, r, t) : s(t)) || t);
  return n && t && i(e, r, t), t;
};
class d extends o {
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this.content) == null || e.addEventListener("change", this.handleChange.bind(this));
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this.content) == null || e.removeEventListener("change", this.handleChange);
  }
  handleChange(e) {
    this.data = e.detail;
  }
}
p([
  l("zwc-template")
], d.prototype, "content", 2);
export {
  d as Template
};
//# sourceMappingURL=template.js.map
