import { property as p, customElement as l } from "lit/decorators.js";
import { unsafeCSS as a, LitElement as d, html as f } from "lit";
import { classMap as u } from "lit/directives/class-map.js";
import h from "./zwc-image_styles.js";
var y = Object.defineProperty, g = Object.getOwnPropertyDescriptor, r = (s, o, n, i) => {
  for (var e = i > 1 ? void 0 : i ? g(o, n) : o, c = s.length - 1, m; c >= 0; c--)
    (m = s[c]) && (e = (i ? m(o, n, e) : m(e)) || e);
  return i && e && y(o, n, e), e;
};
let t = class extends d {
  constructor() {
    super(...arguments), this.src = "", this.size = "", this.rounded = !1, this.centered = !1;
  }
  render() {
    const s = {
      [`img-${this.size}`]: this.size,
      "img-rounded": this.rounded,
      "img-centered": this.centered
    };
    return f`<img
      src="${this.src}"
      alt="image"
      class="${u(s)}"
    />`;
  }
};
t.styles = a(h);
r([
  p({ type: String })
], t.prototype, "src", 2);
r([
  p({ type: String })
], t.prototype, "size", 2);
r([
  p({ type: Boolean })
], t.prototype, "rounded", 2);
r([
  p({ type: Boolean })
], t.prototype, "centered", 2);
t = r([
  l("zwc-image")
], t);
export {
  t as ZwcImage
};
//# sourceMappingURL=zwc-image.js.map
