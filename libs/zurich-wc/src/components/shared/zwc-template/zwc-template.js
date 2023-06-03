import { customElement as c } from "lit/decorators.js";
import { LitElement as i, html as h } from "lit";
var m = Object.defineProperty, d = Object.getOwnPropertyDescriptor, p = (t, s, r, n) => {
  for (var e = n > 1 ? void 0 : n ? d(s, r) : s, l = t.length - 1, o; l >= 0; l--)
    (o = t[l]) && (e = (n ? o(s, r, e) : o(e)) || e);
  return n && e && m(s, r, e), e;
};
let a = class extends i {
  constructor() {
    super(...arguments), this.allText = null;
  }
  render() {
    return h`<slot @slotchange=${this.handleSlotChange}></slot>`;
  }
  handleSlotChange(t) {
    if (t) {
      const r = t.target.assignedNodes({
        flatten: !0
      }).filter(
        (l) => l.nodeType !== this.TEXT_NODE
      ), [n] = r, e = n.innerHTML.trim();
      this.emitTagContent(e);
    }
  }
  emitTagContent(t) {
    this.dispatchEvent(
      new CustomEvent("change", {
        composed: !0,
        cancelable: !0,
        bubbles: !0,
        detail: t
      })
    );
  }
};
a = p([
  c("zwc-template")
], a);
export {
  a as ZwcTemplate
};
//# sourceMappingURL=zwc-template.js.map
