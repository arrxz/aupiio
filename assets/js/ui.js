/**
 * ui.js - Pengganti Bootstrap JS: collapse, dropdown, dan offcanvas (<dialog>).
 * Markup: data-toggle="collapse|dropdown|offcanvas", data-target="#id", data-dismiss="offcanvas".
 */
(() => {
  const setExpanded = (btn, open) => {
    btn.setAttribute("aria-expanded", String(open));
    const panel =
      btn.dataset.toggle === "dropdown" ? btn.nextElementSibling : document.querySelector(btn.dataset.target);
    panel?.classList.toggle("hidden", !open);
  };

  const closeDropdowns = (except) =>
    document
      .querySelectorAll('[data-toggle="dropdown"][aria-expanded="true"]')
      .forEach((b) => b !== except && setExpanded(b, false));

  window.openOffcanvas = (dialog) => {
    if (!dialog || dialog.open) return;
    dialog.showModal();
    document.dispatchEvent(new Event("offcanvas:show"));
  };

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-toggle]");
    closeDropdowns(btn);

    const dismiss = e.target.closest('[data-dismiss="offcanvas"]');
    if (dismiss) return dismiss.closest("dialog")?.close();

    // Klik pada backdrop <dialog> (di luar isi panel) menutup offcanvas
    if (e.target instanceof HTMLDialogElement) return e.target.close();

    if (!btn) return;
    e.preventDefault();
    if (btn.dataset.toggle === "offcanvas") return window.openOffcanvas(document.querySelector(btn.dataset.target));
    setExpanded(btn, btn.getAttribute("aria-expanded") !== "true");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDropdowns();
  });

  // Event 'close' milik <dialog> tidak bubble, jadi dipasang per dialog
  document
    .querySelectorAll("dialog")
    .forEach((d) => d.addEventListener("close", () => document.dispatchEvent(new Event("offcanvas:hidden"))));
})();
