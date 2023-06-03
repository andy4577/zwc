import { customElement as d } from "lit/decorators.js";
import { LitElement as b, html as m } from "lit";
var u = Object.defineProperty, p = Object.getOwnPropertyDescriptor, f = (s, l, o, n) => {
  for (var t = n > 1 ? void 0 : n ? p(l, o) : l, e = s.length - 1, r; e >= 0; e--)
    (r = s[e]) && (t = (n ? r(l, o, t) : r(t)) || t);
  return n && t && u(l, o, t), t;
};
let c = class extends b {
  constructor() {
    super(...arguments), this.allText = null;
  }
  render() {
    return m`<slot @slotchange=${this.handleSlotChange}></slot>`;
  }
  handleSlotChange(s) {
    if (s) {
      const o = s.target.assignedNodes({
        flatten: !0
      }).filter(
        (t) => t.nodeType !== this.TEXT_NODE
      ), n = [];
      o.forEach((t) => {
        const e = {}, r = Array.from(t.content.children), [i] = r.filter(
          (a) => a.classList.contains("label")
        ), [h] = r.filter(
          (a) => a.classList.contains("body")
        );
        e.id = t.getAttribute("tab"), e.label = i.innerHTML.trim(), e.body = h.innerHTML.trim(), n.push(e);
      }), this.emitTagContent(n);
    }
  }
  emitTagContent(s) {
    this.dispatchEvent(
      new CustomEvent("change", {
        composed: !0,
        cancelable: !0,
        bubbles: !0,
        detail: s
      })
    );
  }
};
c = f([
  d("zwc-tabs-template")
], c);
export {
  c as ZwcTabsTemplate
};
//# sourceMappingURL=zwc-tabs-template.js.map
