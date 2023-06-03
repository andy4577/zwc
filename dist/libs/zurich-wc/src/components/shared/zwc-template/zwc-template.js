import { customElement as i } from "../../../../../../node_modules/@lit/reactive-element/decorators/custom-element.js";
import "../../../../../../node_modules/@lit/reactive-element/decorators/query-assigned-elements.js";
import "../../../../../../node_modules/@lit/reactive-element/reactive-element.js";
import { html as c } from "../../../../../../node_modules/lit-html/lit-html.js";
import { LitElement as m } from "../../../../../../node_modules/lit-element/lit-element.js";
var h = Object.defineProperty, p = Object.getOwnPropertyDescriptor, d = (e, s, r, n) => {
  for (var t = n > 1 ? void 0 : n ? p(s, r) : s, o = e.length - 1, l; o >= 0; o--)
    (l = e[o]) && (t = (n ? l(s, r, t) : l(t)) || t);
  return n && t && h(s, r, t), t;
};
let a = class extends m {
  constructor() {
    super(...arguments), this.allText = null;
  }
  render() {
    return c`<slot @slotchange=${this.handleSlotChange}></slot>`;
  }
  handleSlotChange(e) {
    if (e) {
      const r = e.target.assignedNodes({
        flatten: !0
      }).filter(
        (o) => o.nodeType !== this.TEXT_NODE
      ), [n] = r, t = n.innerHTML.trim();
      this.emitTagContent(t);
    }
  }
  emitTagContent(e) {
    this.dispatchEvent(
      new CustomEvent("change", {
        composed: !0,
        cancelable: !0,
        bubbles: !0,
        detail: e
      })
    );
  }
};
a = d([
  i("zwc-template")
], a);
export {
  a as ZwcTemplate
};
//# sourceMappingURL=zwc-template.js.map
