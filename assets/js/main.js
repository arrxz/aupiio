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

      // Jeda scroll saat modal/offcanvas terbuka
      document.addEventListener("show.bs.offcanvas", () => lenisInstance?.stop());
      document.addEventListener("hidden.bs.offcanvas", () => lenisInstance?.start());
      document.addEventListener("show.bs.modal", () => lenisInstance?.stop());
      document.addEventListener("hidden.bs.modal", () => lenisInstance?.start());
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
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      const h1 = hero.querySelector("h1");
      const p = hero.querySelector("p");
      const btns = hero.querySelectorAll(".hero-btn");
      const visual = hero.querySelector(".hero-visual");

      if (h1) tl.fromTo(h1, { y: 25, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7 });
      if (p) tl.fromTo(p, { y: 15, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5 }, "-=0.4");
      if (btns.length) tl.fromTo(btns, { y: 15, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.4, stagger: 0.1 }, "-=0.3");
      if (visual) {
        tl.fromTo(visual, { scale: 0.96, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.7 }, "-=0.5");
        if (typeof ScrollTrigger !== "undefined") {
          gsap.to(visual, {
            y: 35,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      }
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
