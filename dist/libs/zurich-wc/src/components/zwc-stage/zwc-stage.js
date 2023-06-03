import { Base as c } from "../base/base.js";
import { customElement as l } from "../../../../../node_modules/@lit/reactive-element/decorators/custom-element.js";
import { property as r } from "../../../../../node_modules/@lit/reactive-element/decorators/property.js";
import "../../../../../node_modules/@lit/reactive-element/decorators/query-assigned-elements.js";
import "../../../../../node_modules/@lit/reactive-element/reactive-element.js";
import { html as a } from "../../../../../node_modules/lit-html/lit-html.js";
import "../../../../../node_modules/lit-element/lit-element.js";
import { classMap as h } from "../../../../../node_modules/lit-html/directives/class-map.js";
import "../zwc-pictogram/zwc-pictogram.js";
import "../zwc-promise-label/zwc-promise-label.js";
var y = Object.defineProperty, d = Object.getOwnPropertyDescriptor, t = (i, o, n, p) => {
  for (var s = p > 1 ? void 0 : p ? d(o, n) : o, m = i.length - 1, g; m >= 0; m--)
    (g = i[m]) && (s = (p ? g(o, n, s) : g(s)) || s);
  return p && s && y(o, n, s), s;
};
let e = class extends c {
  constructor() {
    super(...arguments), this.type = "image", this.reversed = !1, this.inverted = !1, this.leftAligned = !1, this.background = "", this.preline = "Pre line", this.headline = "Head Line", this.pictogram = "career-analysis", this.pictogramDark = !1, this.imageSrc = "", this.promiseTitle = "Green", this.promiseSubtitle = "Promise", this.promiseType = "none";
  }
  get getImageSrc() {
    return this.type !== "pictogram" && this.imageSrc === "" && console.error('image-src="value" needs to be set.'), this.imageSrc;
  }
  renderPromise() {
    return this.promiseType !== "none" ? a` <zwc-promise
          .title=${this.promiseTitle}
          .subtitle=${this.promiseSubtitle}
          .promise=${this.promiseType}
          .inverted=${this.inverted}
        ></zwc-promise>` : "";
  }
  render() {
    const i = {
      ["stage-banner"]: !0,
      [`stage-banner--${this.type}`]: !0,
      [`${this.background}`]: !0,
      reversed: this.reversed,
      inverted: this.inverted,
      "stage-banner--left": this.leftAligned
    };
    return a`
      <div class=${h(i)}>
        ${this.renderPromise()}
        <div class="stage-banner-container">
          <div class="stage-banner-image">
            ${this.type === "pictogram" ? a`<zwc-pictogram
                  .pictogram="${this.pictogram}"
                  ?dark="${this.pictogramDark}"
                ></zwc-pictogram>` : a`<img src=${this.getImageSrc} alt="image" /> `}
          </div>
          <div class="stage-banner-content">
            <p><strong>${this.preline}</strong></p>
            <h1>${this.headline}</h1>
          </div>
        </div>
      </div>
    `;
  }
};
t([
  r({
    type: String,
    converter: {
      fromAttribute(i) {
        return i === "image" || i === "shape" || i === "pictogram" || console.error(
          `<zwc-stage 'type="${i}" ...> - is not valid attribute value, please provide "image | shape | pictogram"`
        ), String(i);
      }
    }
  })
], e.prototype, "type", 2);
t([
  r({ type: Boolean })
], e.prototype, "reversed", 2);
t([
  r({ type: Boolean })
], e.prototype, "inverted", 2);
t([
  r({ type: Boolean, attribute: "left-aligned" })
], e.prototype, "leftAligned", 2);
t([
  r({ type: String })
], e.prototype, "background", 2);
t([
  r({ type: String })
], e.prototype, "preline", 2);
t([
  r({ type: String })
], e.prototype, "headline", 2);
t([
  r({ type: String })
], e.prototype, "pictogram", 2);
t([
  r({ type: Boolean, attribute: "pictogram-dark" })
], e.prototype, "pictogramDark", 2);
t([
  r({ type: String, attribute: "image-src" })
], e.prototype, "imageSrc", 2);
t([
  r({ type: String, attribute: "promise-title" })
], e.prototype, "promiseTitle", 2);
t([
  r({ type: String, attribute: "promise-subtitle" })
], e.prototype, "promiseSubtitle", 2);
t([
  r({ type: String, attribute: "promise-type" })
], e.prototype, "promiseType", 2);
e = t([
  l("zwc-stage")
], e);
export {
  e as ZwcStage
};
//# sourceMappingURL=zwc-stage.js.map
