/**
 * main.js - Core application entry point
 * Stack: Tailwind v4 + Bootstrap 5.3 Subset + GSAP Motion + Lenis
 */

// Import subset komponen JavaScript Bootstrap
import Collapse from "bootstrap/js/dist/collapse";
import Dropdown from "bootstrap/js/dist/dropdown";
import Offcanvas from "bootstrap/js/dist/offcanvas";
import Modal from "bootstrap/js/dist/modal";

// Pastikan instance bootstrap tersedia di window
window.bootstrap = { Collapse, Dropdown, Offcanvas, Modal };

// Import sistem gerak & scroll
import { lenis } from "./motion/lenis.js";
import { initReveal } from "./motion/reveal.js";
import { initHeroAnimation } from "./motion/hero.js";
import { popHeart } from "./motion/micro.js";

// Import data & keranjang
import { addToCart, removeFromCart, updateQuantity, updateCartUI } from "./cart.js";

// Expose ke window untuk atribut onclick HTML
window.aupiioAddToCart = addToCart;
window.aupiioRemoveFromCart = removeFromCart;
window.aupiioUpdateQty = updateQuantity;
window.aupiioPopHeart = popHeart;

document.addEventListener("DOMContentLoaded", () => {
  // Tandai bahwa JS aktif
  document.documentElement.classList.add("js");

  // Inisialisasi sistem gerak
  initReveal();
  initHeroAnimation();

  // Inisialisasi keranjang
  updateCartUI();

  // Efek shadow halus navbar saat scroll > 8px (Bagian 8)
  const header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 8) {
        header.classList.add("shadow-lg", "backdrop-blur-md", "bg-surface/95");
      } else {
        header.classList.remove("shadow-lg", "backdrop-blur-md", "bg-surface/95");
      }
    });
  }
});
