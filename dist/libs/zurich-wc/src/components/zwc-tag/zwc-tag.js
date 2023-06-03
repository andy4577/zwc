import { customElement as m } from "../../../../../node_modules/@lit/reactive-element/decorators/custom-element.js";
import { property as c } from "../../../../../node_modules/@lit/reactive-element/decorators/property.js";
import "../../../../../node_modules/@lit/reactive-element/decorators/query-assigned-elements.js";
import { classMap as n } from "../../../../../node_modules/lit-html/directives/class-map.js";
import "../../../../../node_modules/@lit/reactive-element/reactive-element.js";
import { html as h } from "../../../../../node_modules/lit-html/lit-html.js";
import "../../../../../node_modules/lit-element/lit-element.js";
import { Base as u } from "../base/base.js";
import "../base/template.js";
var g = Object.defineProperty, b = Object.getOwnPropertyDescriptor, p = (t, r, a, s) => {
  for (var e = s > 1 ? void 0 : s ? b(r, a) : r, l = t.length - 1, i; l >= 0; l--)
    (i = t[l]) && (e = (s ? i(r, a, e) : i(e)) || e);
  return s && e && g(r, a, e), e;
};
let o = class extends u {
  constructor() {
    super(...arguments), this.label = "Label", this.theme = "white";
  }
  get key() {
    return `tag-${this.label.toLocaleLowerCase().split(" ").join("-")}`;
  }
  render() {
    const t = {
      tag: !0,
      "tags-control": !0,
      [`tags-control--${this.theme}`]: !0
    };
    return h`
      <div class=${n(t)}>
        <input
          type="checkbox"
          id="${this.key}"
          name="${this.key}"
          checked
          @change=${this.emitChange}
        />
        <label for="${this.key}">${this.label}</label>
      </div>
    `;
  }
  emitChange() {
    this.dispatchEvent(
      new CustomEvent("zwcTagChange", {
        composed: !0,
        cancelable: !0,
        bubbles: !0
      })
    );
  }
};
p([
  c({ type: String, reflect: !0 })
], o.prototype, "label", 2);
p([
  c({ type: String, reflect: !0 })
], o.prototype, "theme", 2);
o = p([
  m("zwc-tag")
], o);
export {
  o as ZwcTag
};
//# sourceMappingURL=zwc-tag.js.map
