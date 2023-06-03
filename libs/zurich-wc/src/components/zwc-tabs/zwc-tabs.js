import { property as i, query as h, customElement as u } from "lit/decorators.js";
import { html as n } from "lit";
import { Base as b } from "../base/base.js";
import "../base/template.js";
import "./zwc-tabs-template.js";
import "./zwc-tabs-renderer.js";
var d = Object.defineProperty, y = Object.getOwnPropertyDescriptor, o = (r, s, l, a) => {
  for (var t = a > 1 ? void 0 : a ? y(s, l) : s, p = r.length - 1, c; p >= 0; p--)
    (c = r[p]) && (t = (a ? c(s, l, t) : c(t)) || t);
  return a && t && d(s, l, t), t;
};
let e = class extends b {
  constructor() {
    super(...arguments), this.data = [], this.layout = "stretch", this.icons = "", this.scrollToTab = !0;
  }
  render() {
    return n`${this.data.length > 0 ? n` <zwc-tabs-renderer
          .tabsData=${this.data}
          .icons=${this.icons}
          .layout=${this.layout}
          .scrollToTab=${this.scrollToTab}
        >
        </zwc-tabs-renderer>` : ""}`;
  }
  firstUpdated() {
    this.collector && this.collector.addEventListener("change", (r) => this.handleChange(r));
  }
  handleChange(r) {
    this.data = r.detail, this.requestUpdate();
  }
};
o([
  i({ type: Object })
], e.prototype, "data", 2);
o([
  i({ type: String })
], e.prototype, "layout", 2);
o([
  i({ type: String, attribute: "icons" })
], e.prototype, "icons", 2);
o([
  i({ type: Boolean, attribute: "scroll" })
], e.prototype, "scrollToTab", 2);
o([
  h("zwc-tabs-template")
], e.prototype, "collector", 2);
e = o([
  u("zwc-tabs")
], e);
export {
  e as ZwcTabs
};
//# sourceMappingURL=zwc-tabs.js.map
