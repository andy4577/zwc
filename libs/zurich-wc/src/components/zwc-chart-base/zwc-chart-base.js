import { state as h, customElement as p } from "lit/decorators.js";
import { createRef as l, ref as d } from "lit/directives/ref.js";
import { html as m } from "lit";
import { Base as f } from "../base/base.js";
import "../base/template.js";
import { Chart as u } from "../../../../../node_modules/chart.js/dist/chart.js";
import { legendMargin as v } from "../../plugins/legendMargin.js";
import "../../utils/pictograms.js";
import { deepMerge as g } from "../../utils/deepMerge.js";
var C = Object.defineProperty, w = Object.getOwnPropertyDescriptor, c = (t, e, i, r) => {
  for (var s = r > 1 ? void 0 : r ? w(e, i) : e, a = t.length - 1, n; a >= 0; a--)
    (n = t[a]) && (s = (r ? n(e, i, s) : n(s)) || s);
  return r && s && C(e, i, s), s;
};
let o = class extends f {
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
  h()
], o.prototype, "mergedOptions", 1);
o = c([
  p("zwc-base-chart")
], o);
export {
  o as ZwcBaseChart
};
//# sourceMappingURL=zwc-chart-base.js.map
