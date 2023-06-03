import { property as m, customElement as l } from "lit/decorators.js";
import { unsafeCSS as g, css as f, LitElement as h, html as u } from "lit";
import y from "../../../../assets/css/main.min.js";
import { PICTOGRAMS as p } from "../../utils/pictograms.js";
var P = Object.defineProperty, d = Object.getOwnPropertyDescriptor, c = (n, e, o, s) => {
  for (var t = s > 1 ? void 0 : s ? d(e, o) : e, i = n.length - 1, a; i >= 0; i--)
    (a = n[i]) && (t = (s ? a(e, o, t) : a(t)) || t);
  return s && t && P(e, o, t), t;
};
let r = class extends h {
  constructor() {
    super(...arguments), this.dark = !1, this.pictogram = "career-analysis";
  }
  get pictogramClass() {
    return this.pictogram in p ? `pictogram--${p[this.pictogram].class}${this.dark ? "-dark" : ""}` : (console.error(`This pictogram does not exist ${this.pictogram}`), console.log("Please select from following", Object.keys(p)), "");
  }
  render() {
    return u`<span class="pictogram ${this.pictogramClass}"></span>`;
  }
};
r.styles = [
  g(y),
  f`
      :host {
        display: inline-flex;
        justify-content: center;
        align-items: center;
      }
    `
];
c([
  m({ type: Boolean })
], r.prototype, "dark", 2);
c([
  m({ type: String })
], r.prototype, "pictogram", 2);
r = c([
  l("zwc-pictogram")
], r);
export {
  r as ZwcPictogram
};
//# sourceMappingURL=zwc-pictogram.js.map
