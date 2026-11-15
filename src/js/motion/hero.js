import { mm, gsap, ScrollTrigger } from "./gsap-setup.js";

export function initHeroAnimation() {
  const heroSection = document.querySelector("#heroSection");
  if (!heroSection) return;

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    const h1 = heroSection.querySelector("h1");
    const p = heroSection.querySelector("p");
    const btns = heroSection.querySelectorAll(".hero-btn");
    const visual = heroSection.querySelector(".hero-visual");

    if (h1) {
      tl.fromTo(h1, { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.8 });
    }
    if (p) {
      tl.fromTo(p, { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6 }, "-=0.5");
    }
    if (btns.length) {
      tl.fromTo(btns, { y: 15, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.1 }, "-=0.4");
    }
    if (visual) {
      tl.fromTo(visual, { scale: 0.95, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.8 }, "-=0.6");

      // Subtle parallax (maks. 40px sesuai Bagian 8)
      gsap.to(visual, {
        y: 35,
        ease: "none",
        scrollTrigger: {
          trigger: heroSection,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  });
}
