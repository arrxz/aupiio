import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(ScrollTrigger, Flip);

gsap.defaults({ duration: 0.45, ease: "power2.out" });

export const mm = gsap.matchMedia();
export { gsap, ScrollTrigger, Flip };
