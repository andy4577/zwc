import { customElement as c } from "../../../../../node_modules/@lit/reactive-element/decorators/custom-element.js";
import { property as p } from "../../../../../node_modules/@lit/reactive-element/decorators/property.js";
import "../../../../../node_modules/@lit/reactive-element/decorators/query-assigned-elements.js";
import { classMap as f } from "../../../../../node_modules/lit-html/directives/class-map.js";
import "../../../../../node_modules/@lit/reactive-element/reactive-element.js";
import { html as n } from "../../../../../node_modules/lit-html/lit-html.js";
import "../../../../../node_modules/lit-element/lit-element.js";
import { Base as h } from "../base/base.js";
import "../base/template.js";
var u = Object.defineProperty, b = Object.getOwnPropertyDescriptor, r = (o, t, l, i) => {
  for (var e = i > 1 ? void 0 : i ? b(t, l) : t, m = o.length - 1, a; m >= 0; m--)
    (a = o[m]) && (e = (i ? a(t, l, e) : a(e)) || e);
  return i && e && u(t, l, e), e;
};
let s = class extends h {
  constructor() {
    super(...arguments), this.title = "Green", this.subtitle = "Promise", this.promise = "none", this.inverted = !1;
  }
  render() {
    const o = {
      "promise-label": !0,
      "promise-label--inverted": this.inverted,
      "promise-label--social": this.promise === "social"
    }, t = this.promise !== "none" ? n`
            <a class=${f(o)} href="#">
              <span class="promise-label-title">${this.title}</span>
              <span class="promise-label-subtitle">${this.subtitle}</span>
            </a>
          ` : "";
    return n`${t}`;
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
