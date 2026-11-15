/**
 * cart.js - Cart Management & LocalStorage with Mini-Cart Drawer
 */
const STORAGE_KEY = "aupiio_cart";

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  updateCartUI();
}

function aupiioAddToCart(productId, quantity = 1) {
  const cart = getCart();
  const existing = cart.find((item) => item.id === productId);

  // Cari data dari AUDIO_PRODUCTS jika ada
  const product = (typeof AUDIO_PRODUCTS !== "undefined")
    ? AUDIO_PRODUCTS.find((p) => p.id === productId)
    : null;

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: productId,
      name: product ? product.name : "Produk Audio",
      price: product ? product.price : 320000,
      image: product ? product.image : "",
      quantity: quantity,
    });
  }

  saveCart(cart);

  // Bump Badge Animation
  const badge = document.querySelector("#cartBadge, #cart-count-badge");
  if (badge && typeof gsap !== "undefined") {
    gsap.fromTo(badge, { scale: 1 }, { scale: 1.4, duration: 0.15, yoyo: true, repeat: 1, ease: "power2.out" });
  }

  // Buka Mini-Cart Offcanvas
  const offcanvasEl = document.getElementById("miniCart");
  if (offcanvasEl && typeof bootstrap !== "undefined" && bootstrap.Offcanvas) {
    const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);
    bsOffcanvas.show();
  }
}

function aupiioRemoveFromCart(productId) {
  let cart = getCart();
  cart = cart.filter((item) => item.id !== productId);
  saveCart(cart);
}

function aupiioPopHeart(el) {
  if (el && typeof gsap !== "undefined") {
    gsap.fromTo(el, { scale: 0.8 }, { scale: 1.3, duration: 0.18, yoyo: true, repeat: 1, ease: "back.out(2)" });
  }
}

function formatRupiahSimple(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(number);
}

function updateCartUI() {
  const cart = getCart();
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const badges = document.querySelectorAll("#cartBadge, #cart-count-badge");

  badges.forEach((b) => {
    b.textContent = totalItems;
    b.style.display = totalItems > 0 ? "inline-flex" : "none";
  });

  const miniCartBody = document.querySelector("#miniCartBody");
  const miniCartSubtotal = document.querySelector("#miniCartSubtotal");

  if (miniCartBody) {
    if (cart.length === 0) {
      miniCartBody.innerHTML = `
        <div class="py-12 text-center text-ink-muted">
          <i class="bi bi-bag text-3xl mb-2 block opacity-40"></i>
          <p class="text-xs">Keranjang Anda masih kosong.</p>
          <a href="catalog.html" class="inline-block mt-3 text-xs font-semibold text-accent-strong hover:underline">Mulai Jelajahi Produk</a>
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
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-btn bg-photo-tile overflow-hidden p-1">
              ${item.image ? `<img src="${item.image}" alt="${item.name}" class="h-full w-full object-contain mix-blend-multiply" />` : `<i class="bi bi-headphones text-accent"></i>`}
            </div>
            <div class="min-w-0 flex-1">
              <h4 class="truncate text-xs font-semibold text-ink">${item.name}</h4>
              <span class="font-mono text-[11px] font-semibold text-accent-strong">${formatRupiahSimple(item.price)} x ${item.quantity}</span>
            </div>
            <button onclick="aupiioRemoveFromCart('${item.id}')" class="text-xs text-bad hover:underline p-1" title="Hapus">
              <i class="bi bi-trash"></i>
            </button>
          </div>
        `;
        })
        .join("");

      if (miniCartSubtotal) miniCartSubtotal.textContent = formatRupiahSimple(subtotal);
    }
  }
}

// Binds to window
window.aupiioAddToCart = aupiioAddToCart;
window.aupiioRemoveFromCart = aupiioRemoveFromCart;
window.aupiioPopHeart = aupiioPopHeart;
window.updateCartUI = updateCartUI;
