import { query as l } from "lit/decorators.js";
import { Base as o } from "./base.js";
var h = Object.defineProperty, i = Object.getOwnPropertyDescriptor, p = (a, e, c, n) => {
  for (var t = n > 1 ? void 0 : n ? i(e, c) : e, r = a.length - 1, s; r >= 0; r--)
    (s = a[r]) && (t = (n ? s(e, c, t) : s(t)) || t);
  return n && t && h(e, c, t), t;
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
