/**
 * main.js - Core UI, Cart & Motion Interactions (Clean Amber Studio)
 * Compatible with standalone HTML opening & modern build tools
 */

document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
  // 1. Inisialisasi Smooth Scroll (Lenis) jika tersedia
  let lenisInstance = null;
  const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isCheckout = window.location.pathname.includes("checkout");

  if (!isReduced && !isCheckout && typeof Lenis !== "undefined") {
    try {
      lenisInstance = new Lenis({ duration: 1.0, smoothWheel: true });
      function raf(time) {
        lenisInstance.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      // Jeda scroll saat offcanvas terbuka (event dari ui.js)
      document.addEventListener("offcanvas:show", () => lenisInstance?.stop());
      document.addEventListener("offcanvas:hidden", () => lenisInstance?.start());
    } catch (e) {
      console.warn("Lenis init skipped:", e);
    }
  }

  // 2. Inisialisasi GSAP Motion & ScrollTrigger jika tersedia
  if (!isReduced && typeof gsap !== "undefined") {
    if (typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      if (lenisInstance) {
        lenisInstance.on("scroll", ScrollTrigger.update);
        gsap.ticker.add((time) => lenisInstance.raf(time * 1000));
        gsap.ticker.lagSmoothing(0);
      }

      // Batch Reveal untuk elemen [data-reveal]
      const revealElements = document.querySelectorAll("[data-reveal]");
      if (revealElements.length > 0) {
        ScrollTrigger.batch(revealElements, {
          start: "top 88%",
          once: true,
          onEnter: (batch) =>
            gsap.fromTo(
              batch,
              { y: 24, autoAlpha: 0 },
              { y: 0, autoAlpha: 1, duration: 0.45, stagger: 0.06, overwrite: true, ease: "power2.out" }
            ),
        });
      }
    }

    // Hero Section Animation Timeline
    const hero = document.querySelector("#heroSection");
    if (hero) {
      // 1. Gambar kurva grafik respons frekuensi dengan strokeDashoffset (±1.6s, power2.out)
      const curve = hero.querySelector("#frequencyCurve");
      if (curve) {
        try {
          const length = curve.getTotalLength ? curve.getTotalLength() : 1200;
          gsap.set(curve, { strokeDasharray: length, strokeDashoffset: length });
          gsap.to(curve, { strokeDashoffset: 0, duration: 1.6, ease: "power2.out" });
        } catch (e) {
          gsap.to(curve, { autoAlpha: 1, duration: 1.0 });
        }
      }

      // 2. Timeline masuk hero sekali (±0.8s): subteks, tombol, baris kepercayaan, dan kartu muncul bergantian (y 24→0, autoAlpha)
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      const h1 = hero.querySelector("h1");
      const subtext = hero.querySelector(".hero-subtext, p");
      const actions = hero.querySelector(".hero-actions");
      const trust = hero.querySelector(".hero-trust");
      const card = hero.querySelector(".hero-visual");

      if (h1) tl.fromTo(h1, { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6 });
      if (subtext) tl.fromTo(subtext, { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5 }, "-=0.35");
      if (actions) tl.fromTo(actions, { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.45 }, "-=0.3");
      if (trust) tl.fromTo(trust, { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.4 }, "-=0.25");
      if (card) tl.fromTo(card, { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6 }, "-=0.35");
    }
  } else {
    // Fallback: pastikan semua elemen [data-reveal] langsung tampil jika GSAP offline/tidak tersedia
    document.querySelectorAll("[data-reveal]").forEach((el) => {
      el.style.opacity = "1";
      el.style.visibility = "visible";
    });
  }

  // 3. Efek shadow halus navbar saat scroll > 8px
  const header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 8) {
        header.classList.add("shadow-lg", "backdrop-blur-md");
      } else {
        header.classList.remove("shadow-lg", "backdrop-blur-md");
      }
    });
  }

  // 4. Inisialisasi Cart UI
  if (typeof updateCartUI === "function") {
    updateCartUI();
  }
});
