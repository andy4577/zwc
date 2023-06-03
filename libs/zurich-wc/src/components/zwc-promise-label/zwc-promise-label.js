import { property as p, customElement as c } from "lit/decorators.js";
import { classMap as h } from "lit/directives/class-map.js";
import { html as a } from "lit";
import { Base as u } from "../base/base.js";
import "../base/template.js";
var b = Object.defineProperty, f = Object.getOwnPropertyDescriptor, r = (o, t, l, i) => {
  for (var e = i > 1 ? void 0 : i ? f(t, l) : t, n = o.length - 1, m; n >= 0; n--)
    (m = o[n]) && (e = (i ? m(t, l, e) : m(e)) || e);
  return i && e && b(t, l, e), e;
};
let s = class extends u {
  constructor() {
    super(...arguments), this.title = "Green", this.subtitle = "Promise", this.promise = "none", this.inverted = !1;
  }
  render() {
    const o = {
      "promise-label": !0,
      "promise-label--inverted": this.inverted,
      "promise-label--social": this.promise === "social"
    }, t = this.promise !== "none" ? a`
            <a class=${h(o)} href="#">
              <span class="promise-label-title">${this.title}</span>
              <span class="promise-label-subtitle">${this.subtitle}</span>
            </a>
          ` : "";
    return a`${t}`;
  }
};
r([
  p({ type: String })
], s.prototype, "title", 2);
r([
  p({ type: String })
], s.prototype, "subtitle", 2);
r([
  p({ type: String })
], s.prototype, "promise", 2);
r([
  p({ type: Boolean })
], s.prototype, "inverted", 2);
s = r([
  c("zwc-promise")
], s);
export {
  s as ZwcPromise
};
//# sourceMappingURL=zwc-promise-label.js.map
