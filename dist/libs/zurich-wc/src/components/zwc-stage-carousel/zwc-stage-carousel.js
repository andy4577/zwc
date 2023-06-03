import "../../../../../node_modules/@lit/reactive-element/reactive-element.js";
import { html as c } from "../../../../../node_modules/lit-html/lit-html.js";
import "../../../../../node_modules/lit-element/lit-element.js";
import { customElement as d } from "../../../../../node_modules/@lit/reactive-element/decorators/custom-element.js";
import { property as s } from "../../../../../node_modules/@lit/reactive-element/decorators/property.js";
import "../../../../../node_modules/@lit/reactive-element/decorators/query-assigned-elements.js";
import { classMap as u } from "../../../../../node_modules/lit-html/directives/class-map.js";
import { Base as m } from "../base/base.js";
import "../base/template.js";
var g = Object.defineProperty, h = Object.getOwnPropertyDescriptor, i = (r, a, p, o) => {
  for (var t = o > 1 ? void 0 : o ? h(a, p) : a, l = r.length - 1, n; l >= 0; l--)
    (n = r[l]) && (t = (o ? n(a, p, t) : n(t)) || t);
  return o && t && g(a, p, t), t;
};
let e = class extends m {
  constructor() {
    super(...arguments), this.type = "none", this.headline = "Welcome to", this.emphasized = "Zurich Insurance", this.subline = "Zurich Insurance", this.paginationRight = !1, this.inverted = !1;
  }
  render() {
    const r = {
      "stage-carousel": !0,
      "stage-carousel--pagination-right": this.paginationRight,
      "stage-carousel--inverted": this.inverted
    };
    return c`
      <div class=${u(r)}>
        <div
          class="splide"
          aria-labelledby="stage-headline"
          aria-roledescription="carousel"
          role="group"
        >
          <div class="splide__track">
            <ul class="splide__list">
              <li class="splide__slide">item</li>
              <li class="splide__slide">item</li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }
};
i([
  s({ type: String })
], e.prototype, "type", 2);
i([
  s({ type: String })
], e.prototype, "headline", 2);
i([
  s({ type: String })
], e.prototype, "emphasized", 2);
i([
  s({ type: String })
], e.prototype, "subline", 2);
i([
  s({ type: Boolean, attribute: "pagination-right" })
], e.prototype, "paginationRight", 2);
i([
  s({ type: Boolean })
], e.prototype, "inverted", 2);
e = i([
  d("zwc-stage-carousel")
], e);
export {
  e as ZwcStageCarousel
};
//# sourceMappingURL=zwc-stage-carousel.js.map
