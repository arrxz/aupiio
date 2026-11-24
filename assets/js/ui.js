/**
 * ui.js - Pengganti Bootstrap JS: collapse, dropdown, dan offcanvas (<dialog>).
 * Markup: data-toggle="collapse|dropdown|offcanvas", data-target="#id", data-dismiss="offcanvas".
 */
(() => {
  const setExpanded = (btn, open) => {
    btn.setAttribute("aria-expanded", String(open));
    const isDropdown = btn.dataset.toggle === "dropdown";
    const panel = isDropdown ? btn.nextElementSibling : document.querySelector(btn.dataset.target);
    if (!panel) return;

    // Search bar: animasi ekspansi tinggi (bar hitam header meluncur mulus ke bawah)
    if (panel.id === "searchPanel" || btn.dataset.target === "#searchPanel") {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (open) {
        if (panel._closeTimer) {
          clearTimeout(panel._closeTimer);
          panel._closeTimer = null;
        }
        panel.classList.remove("hidden");
        if (prefersReduced) {
          panel.classList.add("is-open");
        } else {
          // Trigger reflow agar transisi height berjalan mulus dari 0
          void panel.offsetHeight;
          panel.classList.add("is-open");
        }
        const input = panel.querySelector("input");
        if (input) setTimeout(() => input.focus(), 60);
      } else {
        panel.classList.remove("is-open");
        if (prefersReduced) {
          panel.classList.add("hidden");
        } else {
          if (panel._closeTimer) clearTimeout(panel._closeTimer);
          panel._closeTimer = setTimeout(() => {
            panel.classList.add("hidden");
            panel._closeTimer = null;
          }, 280);
        }
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

  // Preloader kunjungan pertama: tutup saat halaman siap, minimal 800ms supaya tidak berkedip.
  // Pengaman bila skrip ini gagal ada di CSS (#preloader, 3.5 detik).
  const pre = document.getElementById("preloader");
  const root = document.documentElement;
  if (pre && root.classList.contains("preload")) {
    const t0 = performance.now();
    const hide = () => {
      pre.classList.add("done");
      // Tunggu fade selesai; menghapus .preload lebih awal membuat overlay hilang tanpa transisi
      setTimeout(() => {
        root.classList.remove("preload");
        pre.remove();
      }, 450);
    };
    const ready = () => setTimeout(hide, Math.max(0, 800 - (performance.now() - t0)));
    document.readyState === "complete" ? ready() : addEventListener("load", ready, { once: true });
  }
})();
