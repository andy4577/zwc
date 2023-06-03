import { customElement as c } from "../../../../../node_modules/@lit/reactive-element/decorators/custom-element.js";
import { property as p } from "../../../../../node_modules/@lit/reactive-element/decorators/property.js";
import "../../../../../node_modules/@lit/reactive-element/decorators/query-assigned-elements.js";
import "../../../../../node_modules/@lit/reactive-element/reactive-element.js";
import { html as l } from "../../../../../node_modules/lit-html/lit-html.js";
import { LitElement as f } from "../../../../../node_modules/lit-element/lit-element.js";
import { classMap as d } from "../../../../../node_modules/lit-html/directives/class-map.js";
import u from "./zwc-image_styles.js";
import { unsafeCSS as y } from "../../../../../node_modules/@lit/reactive-element/css-tag.js";
var h = Object.defineProperty, g = Object.getOwnPropertyDescriptor, t = (s, o, m, i) => {
  for (var e = i > 1 ? void 0 : i ? g(o, m) : o, n = s.length - 1, a; n >= 0; n--)
    (a = s[n]) && (e = (i ? a(o, m, e) : a(e)) || e);
  return i && e && h(o, m, e), e;
};
let r = class extends f {
  constructor() {
    super(...arguments), this.src = "", this.size = "", this.rounded = !1, this.centered = !1;
  }
  render() {
    const s = {
      [`img-${this.size}`]: this.size,
      "img-rounded": this.rounded,
      "img-centered": this.centered
    };
    return l`<img
      src="${this.src}"
      alt="image"
      class="${d(s)}"
    />`;
  }
};
r.styles = y(u);
t([
  p({ type: String })
], r.prototype, "src", 2);
t([
  p({ type: String })
], r.prototype, "size", 2);
t([
  p({ type: Boolean })
], r.prototype, "rounded", 2);
t([
  p({ type: Boolean })
], r.prototype, "centered", 2);
r = t([
  c("zwc-image")
], r);
export {
  r as ZwcImage
};
//# sourceMappingURL=zwc-image.js.map
