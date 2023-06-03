import { customElement as h } from "../../../../../node_modules/@lit/reactive-element/decorators/custom-element.js";
import { property as i } from "../../../../../node_modules/@lit/reactive-element/decorators/property.js";
import { query as m } from "../../../../../node_modules/@lit/reactive-element/decorators/query.js";
import "../../../../../node_modules/@lit/reactive-element/decorators/query-assigned-elements.js";
import "../../../../../node_modules/@lit/reactive-element/reactive-element.js";
import { html as n } from "../../../../../node_modules/lit-html/lit-html.js";
import "../../../../../node_modules/lit-element/lit-element.js";
import { Base as u } from "../base/base.js";
import "../base/template.js";
import "./zwc-tabs-template.js";
import "./zwc-tabs-renderer.js";
var y = Object.defineProperty, b = Object.getOwnPropertyDescriptor, o = (e, s, p, a) => {
  for (var t = a > 1 ? void 0 : a ? b(s, p) : s, l = e.length - 1, c; l >= 0; l--)
    (c = e[l]) && (t = (a ? c(s, p, t) : c(t)) || t);
  return a && t && y(s, p, t), t;
};
let r = class extends u {
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
    this.collector && this.collector.addEventListener("change", (e) => this.handleChange(e));
  }
  handleChange(e) {
    this.data = e.detail, this.requestUpdate();
  }
};
o([
  i({ type: Object })
], r.prototype, "data", 2);
o([
  i({ type: String })
], r.prototype, "layout", 2);
o([
  i({ type: String, attribute: "icons" })
], r.prototype, "icons", 2);
o([
  i({ type: Boolean, attribute: "scroll" })
], r.prototype, "scrollToTab", 2);
o([
  m("zwc-tabs-template")
], r.prototype, "collector", 2);
r = o([
  h("zwc-tabs")
], r);
export {
  r as ZwcTabs
};
//# sourceMappingURL=zwc-tabs.js.map
