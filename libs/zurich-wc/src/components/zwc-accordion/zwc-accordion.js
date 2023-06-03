import { property as l, queryAll as u, customElement as m } from "lit/decorators.js";
import { html as p } from "lit";
import { classMap as f } from "lit/directives/class-map.js";
import { repeat as h } from "lit/directives/repeat.js";
import { Base as v } from "../base/base.js";
import "../base/template.js";
import { slideToggle as d } from "../../utils/animation.js";
var y = Object.defineProperty, b = Object.getOwnPropertyDescriptor, c = (e, t, o, r) => {
  for (var i = r > 1 ? void 0 : r ? b(t, o) : t, n = e.length - 1, a; n >= 0; n--)
    (a = e[n]) && (i = (r ? a(t, o, i) : a(i)) || i);
  return r && i && y(t, o, i), i;
};
let s = class extends v {
  constructor() {
    super(...arguments), this.iconPosition = "left", this.openMultiple = !1, this.data = [];
  }
  render() {
    const e = {
      accordion: !0,
      [`accordion--icon-${this.iconPosition}`]: !0
    };
    return p`
      <div
        class=${f(e)}
        ?data-open-multiple=${this.openMultiple}
        @click=${this.clickHandler}
      >
        ${h(
      this.data,
      (t) => t.key,
      (t) => this.renderAccordionItem(t)
    )}
      </div>
    `;
  }
  renderAccordionItem(e) {
    const { key: t, title: o, bodyText: r } = e;
    return p`
      <div class="accordion-item">
        <h5 class="accordion-header">
          <button
            class="accordion-button"
            type="button"
            aria-expanded="false"
            aria-controls="item-${t}"
          >
            ${o}
          </button>
        </h5>
        <div id="item-${t}" class="accordion-body">
          <p>${r}</p>
        </div>
      </div>
    `;
  }
  clickHandler(e) {
    var r;
    if (e.target === null || ((r = e.target) == null ? void 0 : r.nodeName) !== "BUTTON")
      return;
    const t = e.target, o = this.getAccordionItem(t);
    o != null && o.classList.contains("active") ? this.closeItem(o, t) : o && (this.openMultiple || this.activeDivs.length > 0 && this.closeAll(this.activeDivs), this.openItem(o, t));
  }
  closeAll(e) {
    e.forEach((t) => {
      const o = t.querySelector(
        ".accordion-button"
      );
      o && this.closeItem(t, o);
    });
  }
  closeItem(e, t) {
    t.setAttribute("area-expanded", "false"), e.classList.remove("active");
    const o = t.getAttribute("aria-controls");
    let r;
    e && (r = e.querySelector(`#${o}`), r && d(r, "up", 32));
  }
  openItem(e, t) {
    t.setAttribute("aria-expanded", "true"), e.classList.add("active");
    const o = t.getAttribute("aria-controls");
    let r;
    e && (r = e.querySelector(`#${o}`), r && d(r, "down", 32));
  }
  getAccordionItem(e) {
    var t;
    return (t = e.parentNode) == null ? void 0 : t.parentNode;
  }
};
c([
  l({ type: String, attribute: "icon-position" })
], s.prototype, "iconPosition", 2);
c([
  l({ type: Boolean, attribute: "open-multiple" })
], s.prototype, "openMultiple", 2);
c([
  l({
    type: Object,
    converter: {
      fromAttribute(e) {
        let t;
        if (e)
          try {
            return t = JSON.parse(e), t;
          } catch (o) {
            console.error(o);
          }
        return null;
      }
    }
  })
], s.prototype, "data", 2);
c([
  u("div.active")
], s.prototype, "activeDivs", 2);
s = c([
  m("zwc-accordion")
], s);
export {
  s as ZwcAccordion
};
//# sourceMappingURL=zwc-accordion.js.map
