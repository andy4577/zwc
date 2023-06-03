const L = "has-scroll-left", e = "has-scroll-right", n = "has-scroller", i = (s, t) => {
  const o = t.scrollLeft, l = t.scrollWidth, c = t.offsetWidth;
  l > c ? s.classList.add(n) : s.classList.remove(n), o > 0 ? s.classList.add(L) : s.classList.remove(L), o + c >= l ? s.classList.remove(e) : s.classList.add(e);
};
export {
  i as toggleHorizontalScrollArrows
};
//# sourceMappingURL=layout.js.map
