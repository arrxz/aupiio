/**
 * cart.js - Cart Management & LocalStorage with Mini-Cart Drawer
 */
import { AUDIO_PRODUCTS, formatRupiah } from "./data.js";
import { bumpBadge } from "./motion/micro.js";

const STORAGE_KEY = "aupiio_cart";

export function getCart() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch (e) {
    return [];
  }
}

export function saveCart(cart) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  updateCartUI();
}

export function addToCart(productId, quantity = 1) {
  const cart = getCart();
  const existing = cart.find((item) => item.id === productId);

  if (existing) {
    existing.quantity += quantity;
  } else {
    const product = AUDIO_PRODUCTS.find((p) => p.id === productId);
    cart.push({
      id: productId,
      name: product ? product.name : "Produk Audio",
      price: product ? product.price : 0,
      image: product ? product.image : "",
      quantity: quantity,
    });
  }

  saveCart(cart);
  const badge = document.querySelector("#cartBadge, #cart-count-badge");
  bumpBadge(badge);

  // Buka mini-cart offcanvas bila tersedia
  window.openOffcanvas?.(document.getElementById("miniCart"));
}

export function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter((item) => item.id !== productId);
  saveCart(cart);
}

export function updateQuantity(productId, qty) {
  const cart = getCart();
  const item = cart.find((i) => i.id === productId);
  if (item) {
    if (qty <= 0) {
      removeFromCart(productId);
    } else {
      item.quantity = qty;
      saveCart(cart);
    }
  }
}

export function updateCartUI() {
  const cart = getCart();
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const badges = document.querySelectorAll("#cartBadge, #cart-count-badge");

  badges.forEach((b) => {
    b.textContent = totalItems;
    b.style.display = totalItems > 0 ? "inline-flex" : "none";
  });

  // Render Mini-Cart Body jika elemen ada
  const miniCartBody = document.querySelector("#miniCartBody");
  const miniCartSubtotal = document.querySelector("#miniCartSubtotal");

  if (miniCartBody) {
    if (cart.length === 0) {
      miniCartBody.innerHTML = `
        <div class="py-12 text-center text-ink-muted">
          <i class="bi bi-bag text-3xl mb-2 block opacity-40"></i>
          <p class="text-sm">Keranjang Anda masih kosong.</p>
          <a href="catalog.html" class="inline-block mt-3 text-xs text-accent hover:underline">Mulai Jelajahi Produk</a>
        </div>
      `;
      if (miniCartSubtotal) miniCartSubtotal.textContent = "Rp 0";
    } else {
      let subtotal = 0;
      miniCartBody.innerHTML = cart
        .map((item) => {
          const itemTotal = item.price * item.quantity;
          subtotal += itemTotal;
          return `
          <div class="flex items-center gap-3 border-b border-line pb-3">
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-btn bg-surface-2">
              <i class="bi bi-headphones text-accent"></i>
            </div>
            <div class="min-w-0 flex-1">
              <h4 class="truncate text-sm font-semibold text-ink">${item.name}</h4>
              <span class="font-mono text-xs text-accent">${formatRupiah(item.price)} x ${item.quantity}</span>
            </div>
            <button onclick="window.aupiioRemoveFromCart('${item.id}')" class="text-xs text-bad hover:underline p-1">
              <i class="bi bi-trash"></i>
            </button>
          </div>
        `;
        })
        .join("");

      if (miniCartSubtotal) miniCartSubtotal.textContent = formatRupiah(subtotal);
    }
  }
}
