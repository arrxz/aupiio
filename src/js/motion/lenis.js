import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export let lenis = null;

const isCheckout = typeof window !== "undefined" && window.location.pathname.includes("checkout");
const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Nonaktifkan Lenis di halaman checkout (sesuai aturan 6.1) atau saat prefers-reduced-motion
if (!reduce && !isCheckout && typeof window !== "undefined") {
  lenis = new Lenis({ duration: 1.0, smoothWheel: true });

  // Sinkronkan Lenis dengan ScrollTrigger dan ticker GSAP
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // Hentikan Lenis saat overlay (offcanvas/modal) terbuka
  document.addEventListener("show.bs.offcanvas", () => lenis?.stop());
  document.addEventListener("hidden.bs.offcanvas", () => lenis?.start());
  document.addEventListener("show.bs.modal", () => lenis?.stop());
  document.addEventListener("hidden.bs.modal", () => lenis?.start());
}

export function scrollToTarget(target, offset = -80) {
  if (lenis) lenis.scrollTo(target, { offset });
  else document.querySelector(target)?.scrollIntoView({ behavior: "auto", block: "start" });
}
