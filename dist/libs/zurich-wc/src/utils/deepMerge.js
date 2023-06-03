const t = (c, n) => {
  const i = (s) => s && typeof s == "object", r = (s) => Array.isArray(s);
  return !i(c) || !i(n) ? n : (Object.keys(n).forEach((s) => {
    const o = c[s], e = n[s];
    r(o) && r(e) ? c[s] = o.concat(e) : i(o) && i(e) ? c[s] = t(
      Object.assign({}, o),
      e
    ) : c[s] = e;
  }), c);
};
export {
  t as deepMerge
};
//# sourceMappingURL=deepMerge.js.map
