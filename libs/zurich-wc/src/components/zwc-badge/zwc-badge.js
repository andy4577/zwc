import { property as s, state as d, customElement as g } from "lit/decorators.js";
import { css as h, LitElement as x, html as u } from "lit";
import { classMap as m } from "lit/directives/class-map.js";
import { styleMap as b } from "lit/directives/style-map.js";
import "../../utils/pictograms.js";
import { getColorVar as l } from "../../utils/color.js";
import "../zwc-icon/zwc-icon.js";
var f = Object.defineProperty, y = Object.getOwnPropertyDescriptor, n = (e, t, a, i) => {
  for (var r = i > 1 ? void 0 : i ? y(t, a) : t, p = e.length - 1, c; p >= 0; p--)
    (c = e[p]) && (r = (i ? c(t, a, r) : c(r)) || r);
  return i && r && f(t, a, r), r;
};
let o = class extends x {
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
    return u`
      <span style="${b(t)}" class="${m(e)}">
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
  h`
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
n([
  s()
], o.prototype, "status", 2);
n([
  s({ type: String, attribute: "text" })
], o.prototype, "text", 2);
n([
  s({ type: String })
], o.prototype, "color", 2);
n([
  s({ type: String })
], o.prototype, "backgroundColor", 2);
n([
  s({ type: String })
], o.prototype, "size", 2);
n([
  d()
], o.prototype, "hasPadding", 2);
o = n([
  g("zwc-badge")
], o);
export {
  o as ZwcBadge
};
//# sourceMappingURL=zwc-badge.js.map
