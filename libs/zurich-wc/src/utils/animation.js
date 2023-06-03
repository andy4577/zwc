const g = (t, o, s) => {
  const i = isNaN(s) ? 0 : s;
  if (o === "down") {
    t.style.maxHeight = "none";
    const e = `${t.offsetHeight + i}px`;
    t.style.maxHeight = "0", requestAnimationFrame(() => {
      t.style.maxHeight = e;
    });
  } else {
    const e = `${t.offsetHeight + i}px`;
    t.style.maxHeight = e, requestAnimationFrame(() => {
      t.style.maxHeight = "0";
    });
  }
};
export {
  g as slideToggle
};
//# sourceMappingURL=animation.js.map
