import { customElement as b } from "../../../../../node_modules/@lit/reactive-element/decorators/custom-element.js";
import { property as c } from "../../../../../node_modules/@lit/reactive-element/decorators/property.js";
import "../../../../../node_modules/@lit/reactive-element/decorators/query-assigned-elements.js";
import { Colors as u, BarController as m, BarElement as y, CategoryScale as C, LinearScale as _, Legend as S, Tooltip as A, Title as O, SubTitle as v } from "../../../../../node_modules/chart.js/dist/chart.js";
import { ZwcBaseChart as P } from "../zwc-chart-base/zwc-chart-base.js";
import "../../utils/pictograms.js";
import { isSameData as T } from "../../utils/validations.js";
var k = Object.defineProperty, B = Object.getOwnPropertyDescriptor, p = (s, t, a, l) => {
  for (var e = l > 1 ? void 0 : l ? B(t, a) : t, o = s.length - 1, r; o >= 0; o--)
    (r = s[o]) && (e = (l ? r(t, a, e) : r(e)) || e);
  return l && e && k(t, a, e), e;
};
let n = class extends P {
  constructor() {
    super(...arguments), this.componentsToRegister = [
      u,
      m,
      y,
      C,
      _,
      S,
      A,
      O,
      v
    ], this.type = "bar", this.defaultOptions = {
      animation: {
        duration: 2e3
      },
      plugins: {
        legendMargin: {
          margin: 20
        },
        legend: {
          position: "top",
          align: "start",
          labels: {
            usePointStyle: !0
          }
        },
        tooltip: {
          mode: "point",
          intersect: !1,
          backgroundColor: "#edeef0",
          titleColor: "black",
          titleAlign: "center",
          bodyColor: "black",
          bodyAlign: "center",
          footerColor: "black",
          footerAlign: "center",
          position: "nearest",
          xAlign: "center",
          yAlign: "bottom"
        }
      },
      layout: {
        padding: {
          top: 20,
          left: 20,
          right: 20,
          bottom: 20
        }
      },
      elements: {
        bar: {
          backgroundColor: ["#0f67c0"],
          borderRadius: Number.MAX_VALUE,
          borderSkipped: !1
        }
      },
      scales: {
        x: {
          ticks: {
            display: !0
          },
          border: {
            color: "#929a9c",
            width: 1
          },
          grid: {
            display: !1
          }
        },
        y: {
          ticks: {
            display: !0
          },
          grid: {
            color: "#f7f8f7",
            drawTicks: !1,
            lineWidth: 2
          },
          border: {
            display: !1
          }
        }
      }
    }, this.plugins = [], this.options = {}, this.data = {
      labels: [2010, 2011, 2012],
      datasets: [
        {
          label: "Sample chart",
          data: [15, 20, null],
          maxBarThickness: 32
        }
      ]
    };
  }
  updated(s) {
    var t, a, l;
    if (s.has("data") && s.get("data") && this.chart) {
      const { labels: e, dataSetsDiff: o } = this.handleDataChange(
        this.chart,
        this.data
      );
      e && ((a = (t = this.chart) == null ? void 0 : t.data.labels) == null || a.push(...e)), (l = this.chart) == null || l.data.datasets.forEach((r, i) => {
        o[i] && r.data.push(...o[i]);
      }), this.chart.update("normal");
    }
  }
  handleDataChange(s, t) {
    var r, i, h, f;
    const a = (i = (r = s.data.labels) == null ? void 0 : r.length) != null ? i : 0, l = (h = t.labels) != null && h.length ? t.labels.length - a : 0 - a;
    let e = [], o = [];
    if (l !== 0)
      if (l > 0) {
        e = t.labels ? t.labels.slice(a != null ? a : 0) : [];
        const d = e.length;
        o = t.datasets.map(
          (g) => g.data.slice(-d)
        );
      } else
        l < 0 && ((f = s.data.labels) == null || f.pop(), s.data.datasets.forEach((d) => d.data.pop()));
    return { labels: e, dataSetsDiff: o, direction: l };
  }
};
p([
  c()
], n.prototype, "plugins", 2);
p([
  c({ type: Object })
], n.prototype, "options", 2);
p([
  c({
    type: Object,
    hasChanged: (s, t) => !T(s, t)
  })
], n.prototype, "data", 2);
n = p([
  b("zwc-chart-bar")
], n);
export {
  n as ZwcChartBar
};
//# sourceMappingURL=zwc-chart-bar.js.map
