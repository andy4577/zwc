import { state as c, property as o, query as l, customElement as m } from "lit/decorators.js";
import { classMap as y } from "lit/directives/class-map.js";
import { html as h } from "lit";
import { Base as d } from "../base/base.js";
var g = Object.defineProperty, b = Object.getOwnPropertyDescriptor, e = (s, a, p, i) => {
  for (var r = i > 1 ? void 0 : i ? b(a, p) : a, u = s.length - 1, n; u >= 0; u--)
    (n = s[u]) && (r = (i ? n(a, p, r) : n(r)) || r);
  return i && r && g(a, p, r), r;
};
let t = class extends d {
  constructor() {
    super(...arguments), this.data = "", this.quoteText = "", this.author = "", this.title = "", this.showAuthorInfo = !1, this.showAuthorImage = !1, this.hasInvertedContent = !1, this.background = "", this.picture = { src: "", alt: "" };
  }
  render() {
    const s = {
      "quote-inner": !0,
      [`${this.background}`]: this.background,
      inverted: this.hasInvertedContent
    };
    return h`
      <div class=${y(s)}>
        <span class="icon icon--communication-quote-closed_solid"></span>
        <blockquote class="quote">&#8220;${this.quoteText}&#8222;</blockquote>
        ${this.showAuthorInfo ? h`<p class="quote-author caption-large">${this.author}</p>
              <p class="quote-author-title caption-small">${this.title}</p>` : ""}
        ${this.showAuthorImage ? h` <img
              class="img-rounded img-100"
              .src=${this.picture.src}
              .alt=${this.picture.alt}
            />` : ""}
      </div>
    `;
  }
};
e([
  c()
], t.prototype, "data", 2);
e([
  o({ type: String, attribute: "text" })
], t.prototype, "quoteText", 2);
e([
  o({ type: String, attribute: "author" })
], t.prototype, "author", 2);
e([
  o({ type: String, attribute: "title" })
], t.prototype, "title", 2);
e([
  o({ type: Boolean, attribute: "author-info" })
], t.prototype, "showAuthorInfo", 2);
e([
  o({ type: Boolean, attribute: "author-image" })
], t.prototype, "showAuthorImage", 2);
e([
  o({ type: Boolean, attribute: "inverted" })
], t.prototype, "hasInvertedContent", 2);
e([
  o({ type: String, attribute: "background-class" })
], t.prototype, "background", 2);
e([
  o({ type: Object })
], t.prototype, "picture", 2);
e([
  l("zwc-template")
], t.prototype, "content", 2);
t = e([
  m("zwc-quote")
], t);
export {
  t as ZwcQuote
};
//# sourceMappingURL=zwc-quote.js.map
