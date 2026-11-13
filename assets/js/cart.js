/**
 * cart.js - Simple Cart Handler (LocalStorage)
 */

function getCart() {
  return JSON.parse(localStorage.getItem('audiophile_cart')) || [];
}

function saveCart(cart) {
  localStorage.setItem('audiophile_cart', JSON.stringify(cart));
  if (typeof updateCartBadge === 'function') {
    updateCartBadge();
  }
}

function addToCart(productId, quantity = 1) {
  const cart = getCart();
  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.quantity += quantity;
  } else {
    // Cari data produk dari AUDIO_PRODUCTS bila ada
    const product = typeof AUDIO_PRODUCTS !== 'undefined' 
      ? AUDIO_PRODUCTS.find(p => p.id === productId)
      : null;

    cart.push({
      id: productId,
      name: product ? product.name : 'Audio Product',
      price: product ? product.price : 0,
      image: product ? product.image : '',
      quantity: quantity
    });
  }

  saveCart(cart);
  alert('Produk berhasil ditambahkan ke keranjang!');
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
}

function updateQuantity(productId, newQty) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (item) {
    if (newQty <= 0) {
      removeFromCart(productId);
    } else {
      item.quantity = newQty;
      saveCart(cart);
    }
  }
}

