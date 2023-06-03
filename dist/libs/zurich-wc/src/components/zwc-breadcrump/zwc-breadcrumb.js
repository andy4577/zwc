import { customElement as c } from "../../../../../node_modules/@lit/reactive-element/decorators/custom-element.js";
import { property as m } from "../../../../../node_modules/@lit/reactive-element/decorators/property.js";
import { query as p } from "../../../../../node_modules/@lit/reactive-element/decorators/query.js";
import "../../../../../node_modules/@lit/reactive-element/decorators/query-assigned-elements.js";
import "../../../../../node_modules/@lit/reactive-element/reactive-element.js";
import { html as d } from "../../../../../node_modules/lit-html/lit-html.js";
import { LitElement as u } from "../../../../../node_modules/lit-element/lit-element.js";
import { classMap as f } from "../../../../../node_modules/lit-html/directives/class-map.js";
import "./zwc-breadcrumb-item.js";
import "../shared/zwc-template/zwc-template.js";
import { css as h } from "../../../../../node_modules/@lit/reactive-element/css-tag.js";
var b = Object.defineProperty, v = Object.getOwnPropertyDescriptor, l = (r, e, o, t) => {
  for (var a = t > 1 ? void 0 : t ? v(e, o) : e, i = r.length - 1, n; i >= 0; i--)
    (n = r[i]) && (a = (t ? n(e, o, a) : n(a)) || a);
  return t && a && b(e, o, a), a;
};
let s = class extends u {
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
    return d` <div class="${f(r)}" aria-label="breadcrumbs">
      <slot @slotchange=${this.handleSlotChange}></slot>
      <slot name="separator" hidden aria-hidden="true">
        <zwc-icon size="xs" icon="action-arrow-right_outline"></zwc-icon>
      </slot>
    </div>`;
  }
};
s.styles = [
  h`
      .breadcrumbs {
        display: flex;
        flex-direction: row;
        gap: 3px;
      }
    `
];
l([
  p("slot")
], s.prototype, "defaultSlot", 2);
l([
  p('slot[name="separator"]')
], s.prototype, "separatorSlot", 2);
l([
  m({ type: Boolean, reflect: !0 })
], s.prototype, "inverted", 2);
s = l([
  c("zwc-breadcrumb")
], s);
export {
  s as ZwcBreadcrumb
};
//# sourceMappingURL=zwc-breadcrumb.js.map
