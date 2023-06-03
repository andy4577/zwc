import { customElement as h } from "../../../../../node_modules/@lit/reactive-element/decorators/custom-element.js";
import { state as p } from "../../../../../node_modules/@lit/reactive-element/decorators/state.js";
import "../../../../../node_modules/@lit/reactive-element/decorators/query-assigned-elements.js";
import { createRef as l, ref as d } from "../../../../../node_modules/lit-html/directives/ref.js";
import "../../../../../node_modules/@lit/reactive-element/reactive-element.js";
import { html as m } from "../../../../../node_modules/lit-html/lit-html.js";
import "../../../../../node_modules/lit-element/lit-element.js";
import { Base as f } from "../base/base.js";
import "../base/template.js";
import { Chart as u } from "../../../../../node_modules/chart.js/dist/chart.js";
import { legendMargin as v } from "../../plugins/legendMargin.js";
import "../../utils/pictograms.js";
import { deepMerge as g } from "../../utils/deepMerge.js";
var C = Object.defineProperty, w = Object.getOwnPropertyDescriptor, c = (t, e, i, r) => {
  for (var s = r > 1 ? void 0 : r ? w(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (s = (r ? o(e, i, s) : o(s)) || s);
  return r && s && C(e, i, s), s;
};
let n = class extends f {
  constructor() {
    super(...arguments), this.chartConstructor = u, this.plugins = [], this.canvasRef = l(), this.defaultPlugins = [v];
  }
  get mergedOptions() {
    return g(this.defaultOptions, this.options);
  }
  firstUpdated() {
    var t;
    if (!this.chart) {
      const e = (t = this.canvasRef.value) == null ? void 0 : t.getContext("2d");
      e && (this.chartConstructor.register(...this.componentsToRegister), this.chart = new this.chartConstructor(e, {
        type: this.type,
        options: this.mergedOptions,
        data: this.data,
        plugins: [...this.defaultPlugins, ...this.plugins]
      }));
    }
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("resize", this.handleResize.bind(this));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), window.removeEventListener("resize", this.handleResize);
  }
  handleResize() {
    var t;
    (t = this.chart) == null || t.resize();
  }
  render() {
    return m`
      <style>
        .chart-size {
          position: relative;
        }
        canvas {
          width: 400px;
          height: 400px;
        }
      </style>
      <div class="chart-size">
        <canvas ${d(this.canvasRef)}></canvas>
      </div>
    `;
  }
};
c([
  p()
], n.prototype, "mergedOptions", 1);
n = c([
  h("zwc-base-chart")
], n);
export {
  n as ZwcBaseChart
};
//# sourceMappingURL=zwc-chart-base.js.map
