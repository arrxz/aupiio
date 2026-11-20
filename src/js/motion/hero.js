import { mm, gsap } from "./gsap-setup.js";

export function initHeroAnimation() {
  const heroSection = document.querySelector("#heroSection");
  if (!heroSection) return;

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    // 1. Gambar kurva grafik respons frekuensi dengan strokeDashoffset (±1.6s, power2.out)
    const curve = heroSection.querySelector("#frequencyCurve");
    if (curve) {
      try {
        const length = curve.getTotalLength ? curve.getTotalLength() : 1200;
        gsap.set(curve, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(curve, { strokeDashoffset: 0, duration: 1.6, ease: "power2.out" });
      } catch (e) {
        // Fallback jika SVG belum dihitung dimensinya
        gsap.to(curve, { autoAlpha: 1, duration: 1.0 });
      }
    }

    // 2. Timeline masuk hero sekali (±0.8s): subteks, tombol, baris kepercayaan, dan kartu muncul bergantian (y 24→0, autoAlpha)
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    const h1 = heroSection.querySelector("h1");
    const subtext = heroSection.querySelector(".hero-subtext, p");
    const actions = heroSection.querySelector(".hero-actions");
    const trust = heroSection.querySelector(".hero-trust");
    const card = heroSection.querySelector(".hero-visual");

    if (h1) {
      tl.fromTo(h1, { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6 });
    }
    if (subtext) {
      tl.fromTo(subtext, { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5 }, "-=0.35");
    }
    if (actions) {
      tl.fromTo(actions, { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.45 }, "-=0.3");
    }
    if (trust) {
      tl.fromTo(trust, { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.4 }, "-=0.25");
    }
    if (card) {
      tl.fromTo(card, { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6 }, "-=0.35");
    }
  });
}
