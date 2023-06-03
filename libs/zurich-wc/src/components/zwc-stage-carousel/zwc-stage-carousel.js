import { html as c } from "lit";
import { property as s, customElement as d } from "lit/decorators.js";
import { classMap as u } from "lit/directives/class-map.js";
import { Base as g } from "../base/base.js";
import "../base/template.js";
var h = Object.defineProperty, m = Object.getOwnPropertyDescriptor, i = (r, a, l, o) => {
  for (var t = o > 1 ? void 0 : o ? m(a, l) : a, p = r.length - 1, n; p >= 0; p--)
    (n = r[p]) && (t = (o ? n(a, l, t) : n(t)) || t);
  return o && t && h(a, l, t), t;
};
let e = class extends g {
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
