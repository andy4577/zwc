import { property as p, customElement as m } from "lit/decorators.js";
import { unsafeCSS as a, css as f, LitElement as h, html as y } from "lit";
import { classMap as u } from "lit/directives/class-map.js";
import { styleMap as v } from "lit/directives/style-map.js";
import "../../utils/pictograms.js";
import { getColorVar as g } from "../../utils/color.js";
import z from "../../../../styles/css/icons.js";
var _ = Object.defineProperty, b = Object.getOwnPropertyDescriptor, i = (e, t, c, s) => {
  for (var o = s > 1 ? void 0 : s ? b(t, c) : t, n = e.length - 1, l; n >= 0; n--)
    (l = e[n]) && (o = (s ? l(t, c, o) : l(o)) || o);
  return s && o && _(t, c, o), o;
};
let r = class extends h {
  constructor() {
    super(...arguments), this.size = "", this.icon = "communication-alert-circle_solid", this.color = void 0;
  }
  render() {
    const e = {
      icon: !0,
      [`icon-${this.size}`]: this.size,
      [`icon--${this.icon}`]: this.icon
    }, t = { color: this.color ? g(this.color) : null };
    return y`<span
      style="${v(t)}"
      class="${u(e)}"
    ></span>`;
  }
};
r.styles = [
  a(z),
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
        color: var(--zwc-icon-color, inherit);
      }
    `
];
i([
  p({ type: String })
], r.prototype, "size", 2);
i([
  p({ type: String })
], r.prototype, "icon", 2);
i([
  p({ type: String })
], r.prototype, "color", 2);
r = i([
  m("zwc-icon")
], r);
export {
  r as ZwcIcon
};
//# sourceMappingURL=zwc-icon.js.map
