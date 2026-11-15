import gsap from "gsap";

export function bumpBadge(el) {
  if (!el) return;
  gsap.fromTo(
    el,
    { scale: 1 },
    { scale: 1.4, duration: 0.15, yoyo: true, repeat: 1, ease: "power2.out" }
  );
}

export function popHeart(el) {
  if (!el) return;
  gsap.fromTo(
    el,
    { scale: 0.8 },
    { scale: 1.3, duration: 0.18, yoyo: true, repeat: 1, ease: "back.out(2)" }
  );
}
