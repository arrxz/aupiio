# AUDIO-STORE-STACK-MOTION.md

Arsitektur teknis dan sistem gerak aupiio, sesuai kode yang terpasang. Tampilan (warna, tipografi, komponen) dibahas di [`AUDIO-STORE-STYLE.md`](AUDIO-STORE-STYLE.md).

---

## 1. Keputusan Teknologi

| Kebutuhan | Pilihan | Catatan |
|---|---|---|
| Styling | Tailwind CSS v4 | Satu-satunya framework CSS |
| Interaksi UI | `assets/js/ui.js` (vanilla) | Menggantikan Bootstrap JS: collapse, dropdown, offcanvas |
| Panel samping | `<dialog>` bawaan browser | Esc, fokus, dan inert sudah gratis dari browser |
| Gerak scroll & masuk | GSAP + ScrollTrigger (CDN) | Reveal dan animasi hero |
| Smooth scroll | Lenis (CDN) | Mati di checkout dan saat reduced motion |
| Micro animation | CSS murni di `app.css` | Tanpa JS, otomatis berlaku di semua halaman |
| Build | Vite 6 + `@tailwindcss/cli` | Multi-halaman (`vite.config.js`) |

Bootstrap sudah dihapus (sebelumnya subset Bootstrap 5.3 untuk navbar dan offcanvas). Alasannya: class `.collapse` Bootstrap bentrok dengan utility `collapse` Tailwind (`visibility: collapse`), sehingga menu tidak terlihat sama sekali. Yang tersisa hanya icon font `bootstrap-icons`.

---

## 2. Alur CSS

```text
src/css/app.css  --(npm run css)-->  assets/css/style.css  <--  <link> di setiap .html
```

- `app.css` berisi `@import` Tailwind (theme, preflight, utilities), token `:root`, `@theme inline`, komponen, dan semua animasi.
- Urutan layer: `theme, base, components, utilities`. Aturan yang harus menang atas utility (misalnya `.nav-link[aria-current]`, `select`, `.field-error`) sengaja ditulis **di luar layer**, karena CSS tanpa layer mengalahkan semua layer.
- `npm run dev` dan `npm run build` menjalankan `npm run css` lebih dulu. Selama dev server berjalan, CSS tidak di-compile ulang otomatis.

---

## 3. JavaScript

Script klasik (bukan module) dimuat di akhir `<body>` dengan urutan berikut. Urutan ini penting.

| Urutan | File | Tugas |
|---|---|---|
| CDN | GSAP, ScrollTrigger, Lenis | Library gerak |
| 1 | `ui.js` | Interaksi UI (lihat tabel di bawah) |
| 2 | `content.js` | Teks beranda `COPY` (hanya `index.html`) |
| 3 | `products.js` | Data produk `AUDIO_PRODUCTS` + `formatRupiah()` |
| 4 | `cart.js` | Keranjang `localStorage` (`aupiio_cart`), `aupiioAddToCart()`, `updateCartUI()` |
| 5 | `main.js` | Lenis, reveal, animasi hero, shadow header saat scroll |

### `ui.js`

| Fitur | Markup | Perilaku |
|---|---|---|
| Collapse | `data-toggle="collapse" data-target="#id"` | Toggle class `hidden` + `aria-expanded` (menu mobile, panel search) |
| Dropdown | `data-toggle="dropdown"`, menu = elemen berikutnya | Tutup saat klik di luar atau Esc |
| Offcanvas | `data-toggle="offcanvas" data-target="#dialogId"`, `data-dismiss="offcanvas"` | `showModal()`; klik backdrop menutup; memicu event `offcanvas:show` / `offcanvas:hidden` |
| Nav aktif | `#mainNav a` | Set `aria-current="page"` dari URL; `product-detail` dihitung sebagai Katalog |
| Saring input | `data-allow="name\|digits\|code"` | Buang karakter terlarang saat diketik atau ditempel |
| Error form | atribut HTML `required`, `pattern`, `minlength`, `type=email` | Bubble native dimatikan, diganti `<p class="field-error">` + `aria-invalid` |

`window.openOffcanvas(dialog)` dipakai `cart.js` untuk membuka mini-cart setelah produk ditambahkan.

> Validasi di browser hanya untuk kenyamanan dan kerapian data, **bukan keamanan**. Siapa pun bisa melewatinya. Situs ini belum punya backend.

### `src/js/`

Versi ES module dari JS yang sama (`cart.js`, `content.js`, `data.js`, `main.js`, `motion/*`). Belum dimuat halaman mana pun. Pertahankan atau hapus bersamaan dengan rencana migrasi ke module.

---

## 4. Sistem Gerak

### 4.1 Pembagian tugas

| Mesin | Dipakai untuk |
|---|---|
| GSAP + ScrollTrigger | Reveal `[data-reveal]` (batch, `once`), timeline masuk hero, bump badge keranjang |
| Lenis | Smooth scroll; berhenti saat `<dialog>` terbuka |
| CSS transition/animation | Semua micro animation, panel `<dialog>`, dropdown, menu mobile, error form |

Aturan: satu elemen hanya dianimasikan oleh satu mesin. Animasikan `transform`, `translate`, `scale`, dan `opacity` saja.

### 4.2 Katalog micro animation (`app.css`)

| Target | Efek |
|---|---|
| `.rounded-btn` | `scale(0.95)` saat ditekan |
| `a.rounded-card`, `article.rounded-card` | Naik 3px + bayangan keras saat hover |
| `.photo-tile img` | `scale(1.06) rotate(-3deg)` dengan easing membal |
| `.bi-arrow-right`, `.bi-arrow-up-right` | Bergeser ke arah tujuan saat link di-hover |
| `.bi-plus-lg` | Berputar 90° |
| Input fokus | Bayangan offset tomat `4px 4px 0` |
| `.nav-link::after` | Garis bawah tomat memanjang dari kiri |
| Wordmark `iio` | Bergoyang (`wobble`) saat logo di-hover |
| `.field-error` / `[aria-invalid]` | Muncul membal / field bergoyang |

### 4.3 Panel dan dropdown

Animasi keluar memakai `transition-behavior: allow-discrete` pada `display` dan `overlay`, plus `@starting-style` untuk animasi masuk:

```css
dialog { transition: translate .3s, display .3s allow-discrete, overlay .3s allow-discrete; }
dialog.right-0 { translate: 100% 0; }
dialog[open] { translate: 0 0; }
@starting-style { dialog[open].right-0 { translate: 100% 0; } }
```

Dropdown (`::picker(select)`) memakai pola yang sama. Dukungan browser:
- **Chrome/Edge:** animasi penuh.
- **Firefox:** `overlay` belum didukung, jadi panel menutup tanpa animasi. Fungsinya tetap normal.
- **Dropdown kustom:** hanya Chrome/Edge 135+.

### 4.4 Reduced motion

- Semua aturan gerak CSS dibungkus `@media (prefers-reduced-motion: no-preference)`.
- `main.js` tidak menyalakan Lenis dan GSAP saat reduced motion, dan langsung menampilkan semua `[data-reveal]`.
- Konten `[data-reveal]` hanya disembunyikan bila JS aktif (`.js [data-reveal]`), jadi tetap terlihat kalau JS gagal.

---

## 5. Masalah Teknis yang Diketahui

| Masalah | Dampak | Arah perbaikan |
|---|---|---|
| Vite tidak menyalin script klasik ke `dist/` | Hasil build tanpa interaksi | Jadikan `assets/js/*` ES module, atau salin lewat `public/` |
| `cart.html` tidak punya `#miniCart` | Tombol Keranjang di header halaman itu tidak membuka apa-apa | Tambahkan dialog, atau arahkan tombol ke `cart.html` |
| Reveal menunggu scroll | Kartu bisa terlambat muncul di layar pertama | Langsung tampilkan elemen yang sudah terlihat saat load |
| Header dan footer disalin manual ke 7 file | Perubahan harus diulang di setiap halaman | Partial HTML (plugin Vite) bila jumlah halaman bertambah |
