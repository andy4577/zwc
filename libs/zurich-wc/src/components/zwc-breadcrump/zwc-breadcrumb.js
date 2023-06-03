import { query as c, property as p, customElement as d } from "lit/decorators.js";
import { css as u, LitElement as m, html as f } from "lit";
import { classMap as h } from "lit/directives/class-map.js";
import "./zwc-breadcrumb-item.js";
import "../shared/zwc-template/zwc-template.js";
var b = Object.defineProperty, v = Object.getOwnPropertyDescriptor, l = (r, e, o, t) => {
  for (var a = t > 1 ? void 0 : t ? v(e, o) : e, n = r.length - 1, i; n >= 0; n--)
    (i = r[n]) && (a = (t ? i(e, o, a) : i(a)) || a);
  return t && a && b(e, o, a), a;
};
let s = class extends m {
  constructor() {
    super(...arguments), this.inverted = !1;
  }
  getSeparator() {
    var o;
    const e = ((o = this.separatorSlot) == null ? void 0 : o.assignedElements({
      flatten: !0
    })[0]).cloneNode(!0);
    return [e, ...e.querySelectorAll("[id]")].forEach(
      (t) => t.removeAttribute("id")
    ), e.setAttribute("data-default", ""), e.slot = "separator", e;
  }
  handleSlotChange() {
    if (this.defaultSlot) {
      const r = [
        ...this.defaultSlot.assignedElements({ flatten: !0 })
      ].filter(
        (e) => e.tagName.toLowerCase() === "zwc-breadcrumb-item"
      );
      r.forEach((e, o) => {
        var t;
        o !== r.length - 1 && e.querySelector('[slot="separator"]') === null && ((t = e.shadowRoot) == null || t.append(this.getSeparator()));
      });
    }
  }
  render() {
    const r = {
      breadcrumbs: !0,
      inverted: this.inverted
    };
    return f` <div class="${h(r)}" aria-label="breadcrumbs">
      <slot @slotchange=${this.handleSlotChange}></slot>
      <slot name="separator" hidden aria-hidden="true">
        <zwc-icon size="xs" icon="action-arrow-right_outline"></zwc-icon>
      </slot>
    </div>`;
  }
};
s.styles = [
  u`
      .breadcrumbs {
        display: flex;
        flex-direction: row;
        gap: 3px;
      }
    `
];
l([
  c("slot")
], s.prototype, "defaultSlot", 2);
l([
  c('slot[name="separator"]')
], s.prototype, "separatorSlot", 2);
l([
  p({ type: Boolean, reflect: !0 })
], s.prototype, "inverted", 2);
s = l([
  d("zwc-breadcrumb")
], s);
export {
  s as ZwcBreadcrumb
};
//# sourceMappingURL=zwc-breadcrumb.js.map
