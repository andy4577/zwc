const n = (c) => {
  const r = [];
  return c.reduce((l, o, t, e) => {
    let s;
    return t === 0 ? [o / 2] : (s = e.slice(0, t).reduce((u, a) => u + a, 0) + e[t] / 2, [...l, s]);
  }, r);
};
export {
  n as calcLeftOffsets
};
//# sourceMappingURL=horizontal-scroll.js.map
