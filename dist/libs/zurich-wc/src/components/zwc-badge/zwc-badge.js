import { customElement as d } from "../../../../../node_modules/@lit/reactive-element/decorators/custom-element.js";
import { property as a } from "../../../../../node_modules/@lit/reactive-element/decorators/property.js";
import { state as g } from "../../../../../node_modules/@lit/reactive-element/decorators/state.js";
import "../../../../../node_modules/@lit/reactive-element/decorators/query-assigned-elements.js";
import "../../../../../node_modules/@lit/reactive-element/reactive-element.js";
import { html as h } from "../../../../../node_modules/lit-html/lit-html.js";
import { LitElement as m } from "../../../../../node_modules/lit-element/lit-element.js";
import { classMap as x } from "../../../../../node_modules/lit-html/directives/class-map.js";
import { styleMap as u } from "../../../../../node_modules/lit-html/directives/style-map.js";
import "../../utils/pictograms.js";
import { getColorVar as l } from "../../utils/color.js";
import "../zwc-icon/zwc-icon.js";
import { css as f } from "../../../../../node_modules/@lit/reactive-element/css-tag.js";
var b = Object.defineProperty, y = Object.getOwnPropertyDescriptor, s = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? y(t, n) : t, p = e.length - 1, c; p >= 0; p--)
    (c = e[p]) && (r = (i ? c(t, n, r) : c(r)) || r);
  return i && r && b(t, n, r), r;
};
let o = class extends m {
  constructor() {
    super(...arguments), this.status = "primary", this.text = "", this.color = void 0, this.backgroundColor = void 0, this.size = "", this.hasPadding = !0;
  }
  render() {
    const e = {
      badge: !0,
      [`${this.status}`]: this.status,
      [`${this.size}`]: this.size,
      "no-padding": !this.hasPadding
    }, t = {
      color: this.color ? l(this.color) : null,
      backgroundColor: this.backgroundColor ? l(this.backgroundColor) : null
    };
    return h`
      <span style="${u(t)}" class="${x(e)}">
        <slot name="icon" part="icon"></slot>
        <slot @slotchange=${this.handleDefaultSlot}></slot>
      </span>
    `;
  }
  handleDefaultSlot(e) {
    if (e) {
      const i = e.target.assignedNodes({
        flatten: !0
      }).map((r) => this.sanitize(r)).filter(Boolean);
      this.hasPadding = i[0] ? i[0].length > 1 : !1;
    }
  }
  sanitize(e) {
    var t;
    return (t = e.textContent) == null ? void 0 : t.trim();
  }
};
o.styles = [
  f`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      :host {
        display: inline-flex;
        justify-content: center;
        align-items: center;
      }
      .badge {
        display: inline-flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 4px;
        text-align: center;
        border: 1px solid var(--zwc-badge-border, transparent);
        border-radius: 26px;
        height: 22px;
        font-size: 12px;
        line-height: 22px;
        padding: 0px 8px;
        font-family: var(--zwc-badge-font, var(--f-sans-medium));
        font-weight: 500;
        min-width: 22px;
        box-shadow: 0 1px 5px 0 rgb(0 0 0 / 7%), 0 2px 2px 0 rgb(0 0 0 / 5%),
          0 3px 1px -2px rgb(0 0 0 / 3%);
        color: var(--zwc-badge-color, var(--c-white));
        background-color: var(--zwc-badge-background, var(--c-zurichblue));
      }

      .primary {
        background-color: var(--c-theme-primary);
      }
      .dark {
        background-color: var(--c-theme-secondary);
      }
      .success {
        background-color: var(--c-theme-success);
      }
      .danger {
        background-color: var(--c-theme-danger);
      }
      .info {
        background-color: var(--c-theme-info);
      }
      .unknown {
        background-color: var(--c-theme-unknown);
      }

      .lg {
        height: 26px;
        font-size: 14px;
        line-height: 28px;
        min-width: 28px;
        padding: 0 10px;
      }
      .sm {
        height: 18px;
        min-width: 18px;
        line-height: 18px;
        padding: 0 6px;
      }
      .xs {
        height: 14px;
        font-size: 10px;
        line-height: 14px;
        min-width: 14px;
        padding: 0 4px;
      }

      .no-padding {
        padding: 0px;
        aspect-ratio: 1 / 1;
      }
    `
];
s([
  a()
], o.prototype, "status", 2);
s([
  a({ type: String, attribute: "text" })
], o.prototype, "text", 2);
s([
  a({ type: String })
], o.prototype, "color", 2);
s([
  a({ type: String })
], o.prototype, "backgroundColor", 2);
s([
  a({ type: String })
], o.prototype, "size", 2);
s([
  g()
], o.prototype, "hasPadding", 2);
o = s([
  d("zwc-badge")
], o);
export {
  o as ZwcBadge
};
//# sourceMappingURL=zwc-badge.js.map
