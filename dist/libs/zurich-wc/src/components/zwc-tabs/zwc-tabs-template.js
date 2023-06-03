import { customElement as h } from "../../../../../node_modules/@lit/reactive-element/decorators/custom-element.js";
import "../../../../../node_modules/@lit/reactive-element/decorators/query-assigned-elements.js";
import "../../../../../node_modules/@lit/reactive-element/reactive-element.js";
import { html as d } from "../../../../../node_modules/lit-html/lit-html.js";
import { LitElement as b } from "../../../../../node_modules/lit-element/lit-element.js";
var p = Object.defineProperty, u = Object.getOwnPropertyDescriptor, f = (s, o, a, n) => {
  for (var t = n > 1 ? void 0 : n ? u(o, a) : o, e = s.length - 1, r; e >= 0; e--)
    (r = s[e]) && (t = (n ? r(o, a, t) : r(t)) || t);
  return n && t && p(o, a, t), t;
};
let i = class extends b {
  constructor() {
    super(...arguments), this.allText = null;
  }
  render() {
    return d`<slot @slotchange=${this.handleSlotChange}></slot>`;
  }
  handleSlotChange(s) {
    if (s) {
      const a = s.target.assignedNodes({
        flatten: !0
      }).filter(
        (t) => t.nodeType !== this.TEXT_NODE
      ), n = [];
      a.forEach((t) => {
        const e = {}, r = Array.from(t.content.children), [c] = r.filter(
          (l) => l.classList.contains("label")
        ), [m] = r.filter(
          (l) => l.classList.contains("body")
        );
        e.id = t.getAttribute("tab"), e.label = c.innerHTML.trim(), e.body = m.innerHTML.trim(), n.push(e);
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
i = f([
  h("zwc-tabs-template")
], i);
export {
  i as ZwcTabsTemplate
};
//# sourceMappingURL=zwc-tabs-template.js.map
