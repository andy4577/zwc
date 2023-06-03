import { property as p, customElement as n } from "lit/decorators.js";
import { classMap as h } from "lit/directives/class-map.js";
import { html as m } from "lit";
import { Base as u } from "../base/base.js";
import "../base/template.js";
var g = Object.defineProperty, b = Object.getOwnPropertyDescriptor, i = (t, r, a, s) => {
  for (var e = s > 1 ? void 0 : s ? b(r, a) : r, l = t.length - 1, c; l >= 0; l--)
    (c = t[l]) && (e = (s ? c(r, a, e) : c(e)) || e);
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
    return m`
      <div class=${h(t)}>
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
i([
  p({ type: String, reflect: !0 })
], o.prototype, "label", 2);
i([
  p({ type: String, reflect: !0 })
], o.prototype, "theme", 2);
o = i([
  n("zwc-tag")
], o);
export {
  o as ZwcTag
};
//# sourceMappingURL=zwc-tag.js.map
