import { property as c, queryAll as p, query as f, customElement as u } from "lit/decorators.js";
import { html as n } from "lit";
import { classMap as x } from "lit/directives/class-map.js";
import { repeat as h } from "lit/directives/repeat.js";
import { unsafeHTML as m } from "lit/directives/unsafe-html.js";
import { Base as v } from "../base/base.js";
import "../base/template.js";
import "../zwc-icon/zwc-icon.js";
import "../../utils/pictograms.js";
import { toggleHorizontalScrollArrows as S } from "../../utils/layout.js";
import { calcLeftOffsets as g } from "../../utils/horizontal-scroll.js";
var w = Object.defineProperty, y = Object.getOwnPropertyDescriptor, i = (e, t, r, o) => {
  for (var s = o > 1 ? void 0 : o ? y(t, r) : t, d = e.length - 1, l; d >= 0; d--)
    (l = e[d]) && (s = (o ? l(t, r, s) : l(s)) || s);
  return o && s && w(t, r, s), s;
};
let a = class extends v {
  constructor() {
    super(...arguments), this.tabsData = [], this.layout = "stretch", this.icons = "", this.scrollToTab = !0, this.currentTabIndex = 0;
  }
  render() {
    const e = {
      tabs: !0,
      [`tabs--${this.layout}`]: !0,
      "tabs-icons": this.icons
    };
    return n`
      <div class="${x(e)}" ?data-scroll-to-tab=${this.scrollToTab}>
        <nav>
          <div class="tabs-header-wrapper">
            <span
              class="slider-arrow slider-back icon icon--arrow-long-left_24"
              data-direction="back"
              @click=${this.handleSliderScroll}
            >
            </span>
            <span
              class="slider-arrow slider-forward icon icon--arrow-long-right_24"
              data-direction="forward"
              @click=${this.handleSliderScroll}
            >
            </span>
            <div class="tabs-header" role="tablist">
              ${this.renderTabHeaders(this.tabsData)}
            </div>
          </div>
        </nav>
        <div class="tabs-content-wrapper">
          ${this.renderTabContents(this.tabsData)}
        </div>
      </div>
    `;
  }
  firstUpdated() {
    this.setHeaderTabSelected(this.headers[0]), this.setContentTabSelected(this.headers[0]), this.toggleTabsSliderArrows(), this.tabsHeader.addEventListener(
      "scroll",
      () => this.toggleTabsSliderArrows()
    );
  }
  toggleTabsSliderArrows() {
    S(this.tabsWrapper, this.tabsHeader);
  }
  handleSliderScroll(e) {
    const r = e.target.dataset.direction, o = this.tabsWrapper.offsetWidth / 2, s = Array.from(
      this.tabsHeader.children
    ).map((b) => b.offsetWidth), d = g(s), l = d.findIndex(
      (b) => b > o
    );
    this.currentTabIndex === 0 ? (this.currentTabIndex = l, this.nextTabIndex = this.currentTabIndex) : (this.nextTabIndex = this.currentTabIndex + 1, this.prevTabIndex = this.currentTabIndex - 1);
    const T = this.getLeftScroll(
      r,
      o,
      d
    );
    this.tabsHeader.scroll({
      top: 0,
      left: T,
      behavior: "smooth"
    });
  }
  renderTabContents(e) {
    return n`
      ${h(
      e,
      (t) => t.id,
      (t, r) => n`
            <div
              data-tab-index=${r}
              class="tabs-content"
              .id=${t.id}
              role="tabpanel"
              aria-labelledby="nav-${t.id}-tab"
            >
              ${m(t.body)}
            </div>
          `
    )}
    `;
  }
  renderTabHeaders(e) {
    return n`
      ${h(
      e,
      (t) => t.id,
      (t, r) => n` <button
            tabindex="0"
            role="tab"
            data-tab-index="${r}"
            aria-controls="${t.id}"
            aria-expanded="false"
            @click=${this.handleTabSwitch}
          >
            ${this.icons ? n`<zwc-icon .icon=${this.icons}></zwc-icon>${t.label}` : n`${t.label}`}
          </button>`
    )}
    `;
  }
  handleTabSwitch(e) {
    e.target.nodeName === "BUTTON" && (this.setHeaderTabSelected(e.target), this.setContentTabSelected(e.target));
  }
  setHeaderTabSelected(e) {
    if (!e)
      return;
    const t = e;
    this.headers.forEach((r) => {
      r.classList.toggle("selected", r === t), r === t ? r.setAttribute("aria-expanded", "true") : r.setAttribute("aria-expanded", "false");
    });
  }
  setContentTabSelected(e) {
    if (!e)
      return;
    const t = e.dataset.tabIndex;
    this.contentDivs.forEach((r) => {
      r.classList.toggle(
        "selected",
        r.dataset.tabIndex === t
      );
    });
  }
  getLeftScroll(e, t, r) {
    return e === "forward" ? (this.currentTabIndex = this.nextTabIndex, r[this.nextTabIndex] - t) : (this.currentTabIndex = this.prevTabIndex, r[this.prevTabIndex] - t);
  }
};
i([
  c({ type: Object })
], a.prototype, "tabsData", 2);
i([
  c({ type: String })
], a.prototype, "layout", 2);
i([
  c({ type: String })
], a.prototype, "icons", 2);
i([
  c({ type: Boolean })
], a.prototype, "scrollToTab", 2);
i([
  p(".tabs-header > button")
], a.prototype, "headers", 2);
i([
  p(".tabs-content")
], a.prototype, "contentDivs", 2);
i([
  f(".tabs-header-wrapper")
], a.prototype, "tabsWrapper", 2);
i([
  f(".tabs-header")
], a.prototype, "tabsHeader", 2);
a = i([
  u("zwc-tabs-renderer")
], a);
export {
  a as ZwcTabsRenderer
};
//# sourceMappingURL=zwc-tabs-renderer.js.map
