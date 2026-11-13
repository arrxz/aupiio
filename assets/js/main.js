/**
 * main.js - Core functionality & UI interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Bootstrap Tooltips if any
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));

  // Navbar scroll behavior (optional subtle shadow)
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        navbar.classList.add('shadow-sm');
      } else {
        navbar.classList.remove('shadow-sm');
      }
    });
  }

  // Update Cart Count Badge
  updateCartBadge();
});

function updateCartBadge() {
  const badge = document.getElementById('cart-count-badge');
  if (!badge) return;

  try {
    const cart = JSON.parse(localStorage.getItem('audiophile_cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'inline-block' : 'none';
  } catch (e) {
    badge.textContent = '0';
  }
}

