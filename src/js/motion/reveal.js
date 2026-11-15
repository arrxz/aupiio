import { mm, gsap, ScrollTrigger } from "./gsap-setup.js";

export function initReveal(root = document) {
  mm.add("(prefers-reduced-motion: no-preference)", () => {
    const targets = root.querySelectorAll("[data-reveal]");
    if (!targets.length) return;

    ScrollTrigger.batch(targets, {
      start: "top 88%",
      once: true,
      onEnter: (els) =>
        gsap.fromTo(
          els,
          { y: 24, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.45, stagger: 0.06, overwrite: true }
        ),
    });
  });
}
