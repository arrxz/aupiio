/**
 * ui.js - Pengganti Bootstrap JS: collapse, dropdown, dan offcanvas (<dialog>).
 * Markup: data-toggle="collapse|dropdown|offcanvas", data-target="#id", data-dismiss="offcanvas".
 */
(() => {
  // Animasi tinggi panel (search bar) pakai max-height transition
  const animatePanel = (panel, open) => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (open) {
      if (panel._closeTimer) {
        clearTimeout(panel._closeTimer);
        panel._closeTimer = null;
      }
      panel.style.overflow = "hidden";
      panel.style.maxHeight = "0px";
      panel.style.transition = "none";
      panel.style.opacity = "0";
      panel.classList.remove("is-closing");
      panel.classList.remove("hidden");

      if (prefersReduced) {
        panel.style.maxHeight = "";
        panel.style.overflow = "";
        panel.style.opacity = "";
        return;
      }

      requestAnimationFrame(() => {
        const target = panel.scrollHeight;
        panel.style.transition = "max-height 0.32s cubic-bezier(0.16,1,0.3,1), opacity 0.22s ease";
        panel.style.maxHeight = target + "px";
        panel.style.opacity = "1";

        const cleanup = () => {
          panel.style.maxHeight = "";
          panel.style.overflow = "";
          panel.style.transition = "";
          panel.style.opacity = "";
          panel.removeEventListener("transitionend", cleanup);
        };
        panel.addEventListener("transitionend", cleanup);
      });
    } else {
      if (panel.classList.contains("hidden")) return;

      if (prefersReduced) {
        panel.classList.add("hidden");
        return;
      }

      const current = panel.scrollHeight;
      panel.style.overflow = "hidden";
      panel.style.maxHeight = current + "px";
      panel.style.opacity = "1";
      panel.classList.add("is-closing");

      if (panel._closeTimer) clearTimeout(panel._closeTimer);

      requestAnimationFrame(() => {
        panel.style.transition = "max-height 0.22s cubic-bezier(0.16,1,0.3,1), opacity 0.18s ease";
        panel.style.maxHeight = "0px";
        panel.style.opacity = "0";
      });

      const finishClose = () => {
        panel.classList.remove("is-closing");
        panel.classList.add("hidden");
        panel.style.maxHeight = "";
        panel.style.overflow = "";
        panel.style.transition = "";
        panel.style.opacity = "";
        panel._closeTimer = null;
      };
      panel._closeTimer = setTimeout(finishClose, 260);
    }
  };

  const setExpanded = (btn, open) => {
    btn.setAttribute("aria-expanded", String(open));
    const isDropdown = btn.dataset.toggle === "dropdown";
    const panel = isDropdown ? btn.nextElementSibling : document.querySelector(btn.dataset.target);
    if (!panel) return;

    // Pakai animasi max-height hanya untuk searchPanel (bukan dropdown listbox)
    const isSearch = panel.id === "searchPanel" || btn.dataset.target === "#searchPanel";
    if (isSearch) {
      animatePanel(panel, open);
      if (open) {
        const input = panel.querySelector("input");
        if (input) setTimeout(() => input.focus(), 60);
      }
      return;
    }

    if (open) {
      if (panel._closeTimer) {
        clearTimeout(panel._closeTimer);
        panel._closeTimer = null;
      }
      panel.classList.remove("is-closing");
      panel.classList.remove("hidden");
    } else {
      if (panel.classList.contains("hidden")) return;

      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) {
        panel.classList.remove("is-closing");
        panel.classList.add("hidden");
        return;
      }

      panel.classList.add("is-closing");
      if (panel._closeTimer) clearTimeout(panel._closeTimer);

      const finishClose = () => {
        panel.classList.remove("is-closing");
        panel.classList.add("hidden");
        panel._closeTimer = null;
        panel.removeEventListener("animationend", onAnimEnd);
      };

      const onAnimEnd = (ev) => {
        if (ev.target === panel) finishClose();
      };

      panel.addEventListener("animationend", onAnimEnd);
      panel._closeTimer = setTimeout(finishClose, 260);
    }
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
    // 1. Klik opsi custom dropdown (listbox)
    const opt = e.target.closest('[role="listbox"] [role="option"]');
    if (opt) {
      const listbox = opt.closest('[role="listbox"]');
      const container = listbox.closest(".relative") || listbox.parentElement;
      const btn = container?.querySelector('[data-toggle="dropdown"]');
      const select = container?.querySelector("select");
      const label = container?.querySelector("#ct-topic-label, .dropdown-selected-label");

      if (listbox) {
        listbox.querySelectorAll('[role="option"]').forEach((o) => {
          const isSel = o === opt;
          o.setAttribute("aria-selected", String(isSel));
          o.classList.toggle("bg-ink", isSel);
          o.classList.toggle("text-bg", isSel);
          o.classList.toggle("font-bold", isSel);
          o.classList.toggle("text-ink", !isSel);
        });
        if (label) label.textContent = opt.textContent.trim();
        if (select) {
          select.value = opt.dataset.value;
          select.dispatchEvent(new Event("change", { bubbles: true }));
        }
        if (btn) setExpanded(btn, false);
        return;
      }
    }

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

  // Tandai link nav halaman aktif. Detail produk dianggap bagian dari Katalog.
  const page = (p) => p.split("/").pop() || "index.html";
  const here = page(location.pathname).replace("product-detail.html", "catalog.html");
  const cat = new URLSearchParams(location.search).get("cat");
  document.querySelectorAll("#mainNav a").forEach((a) => {
    const u = new URL(a.href);
    if (page(u.pathname) === here && u.searchParams.get("cat") === cat) a.setAttribute("aria-current", "page");
  });

  // Saring karakter terlarang saat mengetik/menempel (data-allow). Hanya kenyamanan: server tetap wajib validasi.
  const ALLOW = { name: /[^A-Za-zÀ-ÿ' .-]/g, digits: /[^0-9]/g, code: /[^A-Z0-9]/g };
  document.addEventListener("input", (e) => {
    const el = e.target;
    const re = ALLOW[el.dataset?.allow];
    if (re) {
      const clean = (el.dataset.allow === "code" ? el.value.toUpperCase() : el.value).replace(re, "");
      if (clean !== el.value) el.value = clean;
    }
    // Field yang sedang error dicek ulang tiap ketikan; checkValidity memicu 'invalid' bila masih salah
    if (el.hasAttribute?.("aria-invalid") && el.checkValidity()) showError(el, "");
  });

  const message = (el) => {
    const v = el.validity;
    return v.valueMissing ? "Kolom ini wajib diisi."
      : v.typeMismatch ? "Format email belum benar, contoh: nama@email.com"
      : v.tooShort ? `Minimal ${el.minLength} karakter (sekarang ${el.value.length}).`
      : v.patternMismatch ? el.title
      : el.validationMessage;
  };

  // Pesan error inline bergaya tema, menggantikan bubble native yang tidak bisa di-styling
  const showError = (el, msg) => {
    let p = el.nextElementSibling?.classList.contains("field-error") ? el.nextElementSibling : null;
    if (!msg) {
      p?.remove();
      el.removeAttribute("aria-invalid");
      el.removeAttribute("aria-describedby");
      return;
    }
    if (!p) {
      p = document.createElement("p");
      p.className = "field-error";
      p.id = `${el.id || el.name || "field"}-error`;
      el.after(p);
      el.setAttribute("aria-describedby", p.id);
    }
    p.textContent = msg;
    el.setAttribute("aria-invalid", "true");
  };

  // Event 'invalid' tidak bubble, jadi pakai capture
  document.addEventListener(
    "invalid",
    (e) => {
      e.preventDefault(); // matikan bubble native
      const el = e.target;
      showError(el, message(el));
      // Saat submit, fokus ke field salah yang pertama saja
      if (el.form?.querySelector(":invalid") === el && document.activeElement !== el) el.focus();
    },
    true
  );

  // Event 'close' milik <dialog> tidak bubble, jadi dipasang per dialog
  document
    .querySelectorAll("dialog")
    .forEach((d) => d.addEventListener("close", () => document.dispatchEvent(new Event("offcanvas:hidden"))));
})();
