const f = {
  id: "legendMargin",
  beforeInit(e, t, i) {
    if (e.legend) {
      const g = e.legend.fit;
      e.legend.fit = function() {
        var n;
        return g.bind(e.legend)(), this.height += (n = i.margin) != null ? n : 15;
      };
    }
  }
};
export {
  f as legendMargin
};
//# sourceMappingURL=legendMargin.js.map
