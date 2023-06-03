import { customElement as l } from "../../../../../node_modules/@lit/reactive-element/decorators/custom-element.js";
import { property as n } from "../../../../../node_modules/@lit/reactive-element/decorators/property.js";
import "../../../../../node_modules/@lit/reactive-element/decorators/query-assigned-elements.js";
import "../../../../../node_modules/@lit/reactive-element/reactive-element.js";
import { html as f } from "../../../../../node_modules/lit-html/lit-html.js";
import { LitElement as g } from "../../../../../node_modules/lit-element/lit-element.js";
import h from "../../../../assets/css/main.min.js";
import { PICTOGRAMS as p } from "../../utils/pictograms.js";
import { unsafeCSS as u, css as y } from "../../../../../node_modules/@lit/reactive-element/css-tag.js";
var P = Object.defineProperty, d = Object.getOwnPropertyDescriptor, m = (c, e, o, s) => {
  for (var r = s > 1 ? void 0 : s ? d(e, o) : e, i = c.length - 1, a; i >= 0; i--)
    (a = c[i]) && (r = (s ? a(e, o, r) : a(r)) || r);
  return s && r && P(e, o, r), r;
};
let t = class extends g {
  constructor() {
    super(...arguments), this.dark = !1, this.pictogram = "career-analysis";
  }
  get pictogramClass() {
    return this.pictogram in p ? `pictogram--${p[this.pictogram].class}${this.dark ? "-dark" : ""}` : (console.error(`This pictogram does not exist ${this.pictogram}`), console.log("Please select from following", Object.keys(p)), "");
  }
  render() {
    return f`<span class="pictogram ${this.pictogramClass}"></span>`;
  }
};
t.styles = [
  u(h),
  y`
      :host {
        display: inline-flex;
        justify-content: center;
        align-items: center;
      }
    `
];
m([
  n({ type: Boolean })
], t.prototype, "dark", 2);
m([
  n({ type: String })
], t.prototype, "pictogram", 2);
t = m([
  l("zwc-pictogram")
], t);
export {
  t as ZwcPictogram
};
//# sourceMappingURL=zwc-pictogram.js.map
