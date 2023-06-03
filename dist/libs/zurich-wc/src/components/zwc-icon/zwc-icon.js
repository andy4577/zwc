import { customElement as m } from "../../../../../node_modules/@lit/reactive-element/decorators/custom-element.js";
import { property as l } from "../../../../../node_modules/@lit/reactive-element/decorators/property.js";
import "../../../../../node_modules/@lit/reactive-element/decorators/query-assigned-elements.js";
import "../../../../../node_modules/@lit/reactive-element/reactive-element.js";
import { html as a } from "../../../../../node_modules/lit-html/lit-html.js";
import { LitElement as f } from "../../../../../node_modules/lit-element/lit-element.js";
import { classMap as y } from "../../../../../node_modules/lit-html/directives/class-map.js";
import { styleMap as h } from "../../../../../node_modules/lit-html/directives/style-map.js";
import "../../utils/pictograms.js";
import { getColorVar as u } from "../../utils/color.js";
import v from "../../../../styles/css/icons.js";
import { unsafeCSS as g, css as z } from "../../../../../node_modules/@lit/reactive-element/css-tag.js";
var _ = Object.defineProperty, b = Object.getOwnPropertyDescriptor, i = (s, r, c, e) => {
  for (var o = e > 1 ? void 0 : e ? b(r, c) : r, n = s.length - 1, p; n >= 0; n--)
    (p = s[n]) && (o = (e ? p(r, c, o) : p(o)) || o);
  return e && o && _(r, c, o), o;
};
let t = class extends f {
  constructor() {
    super(...arguments), this.size = "", this.icon = "communication-alert-circle_solid", this.color = void 0;
  }
  render() {
    const s = {
      icon: !0,
      [`icon-${this.size}`]: this.size,
      [`icon--${this.icon}`]: this.icon
    }, r = { color: this.color ? u(this.color) : null };
    return a`<span
      style="${h(r)}"
      class="${y(s)}"
    ></span>`;
  }
};
t.styles = [
  g(v),
  z`
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
  l({ type: String })
], t.prototype, "size", 2);
i([
  l({ type: String })
], t.prototype, "icon", 2);
i([
  l({ type: String })
], t.prototype, "color", 2);
t = i([
  m("zwc-icon")
], t);
export {
  t as ZwcIcon
};
//# sourceMappingURL=zwc-icon.js.map
