export function uxui() {
    const smoother = ScrollSmoother.create({
        wrapper: ".container",
        content: "main",
        smooth: 1,
        normalizeScroll: true,
        ignoreMobileResize: true,
        effects: true,
        preventDefault: true
      });
}