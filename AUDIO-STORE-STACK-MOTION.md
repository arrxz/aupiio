# AUDIO-STORE-STACK-MOTION.md

Addendum untuk `AUDIO-STORE-STYLE.md` dan `AUDIO-STORE-FRONTEND-SPEC.md`. Mengubah **teknologi** (Tailwind 90% + Bootstrap 10%) dan menambah **sistem gerak** (GSAP, Lenis, dan penilaian Anime.js). Palet, tipografi, wireframe, model data, dan alur halaman **tidak berubah**.

## 0. Bagian Dokumen Lama yang Digantikan

| Dokumen | Bagian | Status |
|---|---|---|
| STYLE | 7 (Implementasi Bootstrap 5.3) | Diganti bagian 3-5 di sini |
| STYLE | 12 (Padanan Tailwind) | Menjadi implementasi utama (bagian 4) |
| FRONTEND-SPEC | 1 (teknologi: "tanpa build tool") | Diganti: sekarang memakai Vite |
| FRONTEND-SPEC | 2 (struktur folder) | Disesuaikan (bagian 3.2) |
| FRONTEND-SPEC | 10 (tahap pengerjaan) | Ditambah tahap gerak (bagian 11) |

---

## 1. Keputusan Teknologi

| Lapisan | Pilihan | Peran |
|---|---|---|
| Styling utama (~90%) | **Tailwind CSS v4** | Semua tata letak, kartu, tombol, tipografi, halaman |
| Komponen interaktif (~10%) | **Bootstrap 5.3 (subset)** | Navbar + collapse, offcanvas (mini-cart, filter mobile), dropdown, modal |
| Animasi utama | **GSAP** + ScrollTrigger (+ Flip) | Timeline, scroll, reveal, transisi grid |
| Smooth scroll | **Lenis** | Gulir halus, disinkronkan dengan GSAP |
| Animasi mikro (opsional) | **Anime.js v4** | Lihat bagian 9, tidak wajib |
| Build | **Vite** | Dev server, bundling, Tailwind plugin |

**Kenapa Vite:** Laravel memakai Vite secara bawaan. Struktur `src/`, import modul, dan konfigurasi yang dibuat sekarang bisa dipindahkan ke proyek Laravel nanti hampir tanpa perubahan.

---

## 2. Aturan Pembagian 90/10

### 2.1 Apa yang boleh memakai Bootstrap

| Boleh (10%) | Tetap Tailwind (90%) |
|---|---|
| Navbar dan tombol collapse mobile | Grid, section, kartu produk |
| Offcanvas (mini-cart, panel filter mobile) | Tombol, chip, badge, form |
| Dropdown (menu kategori, sortir) | Tabel spek, tab detail produk (pakai markup sendiri) |
| Modal (zoom galeri, konfirmasi) | Hero, footer, semua halaman |
| Toast (opsional) | Tipografi, warna, spasi |

**Prinsip:** Bootstrap hanya dipakai untuk **perilaku (JS) dan struktur komponen yang rumit**, sedangkan tampilan akhir (warna, radius, spasi) tetap diatur token dan utilitas Tailwind.

### 2.2 Aturan pakai

1. **Dilarang** memakai class grid/utilitas Bootstrap (`row`, `col-*`, `d-flex`, `mb-3`, dst.) di luar komponen yang diizinkan. Semua tata letak memakai Tailwind.
2. **Jangan** mengimpor seluruh `bootstrap.css`. Impor hanya partial yang dibutuhkan (bagian 3.3).
3. **Jangan** memakai Reboot Bootstrap. Preflight Tailwind yang mereset gaya dasar.
4. Variabel `--bs-*` dipetakan ke token proyek, bukan memakai warna bawaan Bootstrap.
5. Tambahkan class Tailwind **pada elemen yang sama** dengan class Bootstrap hanya untuk penyesuaian kecil (misalnya `navbar px-4`), dan pastikan urutan layer benar (bagian 2.3).

### 2.3 Benturan yang perlu diantisipasi

| Masalah | Penyebab | Solusi |
|---|---|---|
| Utilitas Tailwind "kalah" dari Bootstrap | Di Tailwind v4 utilitas berada di cascade layer, sedangkan CSS tanpa layer menang atas CSS ber-layer | Bungkus CSS Bootstrap dalam layer sendiri yang urutannya **di bawah** `utilities` (bagian 3.3) |
| Reset ganda | Preflight vs Reboot | Jangan impor Reboot |
| Nama class bentrok (`.container`, `.collapse`, `.show`, `.hidden`) | Dua sistem memakai nama serupa | Pakai `.container` Tailwind versi sendiri (`mx-auto max-w-7xl px-4`), jangan impor grid/containers Bootstrap. Hati-hati dengan `.collapse` dan `.show` (milik Bootstrap, jangan dipakai di luar komponennya) |
| Ukuran CSS membengkak | Mengimpor semua Bootstrap | Impor subset saja |
| Gaya terasa tidak konsisten | Warna Bootstrap bawaan terpakai | Petakan `--bs-*` ke token (bagian 3.4) |

> Catatan: aturan layer di atas berlaku untuk Tailwind v4. Jika memakai v3, tidak ada layer pada utilitas, jadi cukup pastikan CSS Bootstrap dimuat **sebelum** CSS Tailwind. Verifikasi dengan DevTools bahwa utilitas benar-benar menimpa gaya Bootstrap.

### 2.4 Konfirmasi ke dosen

Tugas awalnya mensyaratkan Bootstrap. Komposisi 90/10 tetap memakai Bootstrap (navbar, offcanvas, modal, dropdown), tapi **pastikan dosen menerima porsi sekecil ini** sebelum dikumpulkan. Jika dosen menilai penguasaan Bootstrap lewat grid dan komponen visual, risikonya nilai berkurang.

---

## 3. Setup Proyek

### 3.1 Dependensi

```bash
npm create vite@latest audio-store -- --template vanilla
cd audio-store
npm i gsap lenis bootstrap
npm i -D tailwindcss @tailwindcss/vite sass
# opsional:
npm i animejs
```

`vite.config.js`:

```js
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: { target: "es2020" },
});
```

`package.json` (skrip tambahan untuk kompilasi subset Bootstrap):

```json
{
  "scripts": {
    "css:bs": "sass --load-path=node_modules src/scss/bootstrap-subset.scss src/css/bootstrap-subset.css",
    "dev": "npm run css:bs && vite",
    "build": "npm run css:bs && vite build"
  }
}
```

### 3.2 Struktur folder

```
audio-store/
├── index.html, produk.html, detail.html, keranjang.html, ...
├── public/
│   ├── data/products.json
│   └── img/products/<slug>/1.webp
├── src/
│   ├── css/
│   │   ├── app.css                  # entry Tailwind + layer + token
│   │   └── bootstrap-subset.css     # hasil kompilasi (jangan diedit)
│   ├── scss/
│   │   └── bootstrap-subset.scss
│   ├── js/
│   │   ├── main.js                  # entry
│   │   ├── motion/
│   │   │   ├── lenis.js             # smooth scroll + sinkron GSAP
│   │   │   ├── gsap-setup.js        # register plugin, matchMedia, token gerak
│   │   │   ├── reveal.js            # reveal saat scroll
│   │   │   ├── hero.js
│   │   │   └── micro.js             # animasi mikro (GSAP, atau Anime.js jika dipakai)
│   │   ├── data.js, store.js, filter.js, render.js, format.js
│   │   └── pages/ (home, catalog, detail, cart, checkout)
│   └── partials/ (header.html, footer.html)
└── vite.config.js
```

### 3.3 Subset Bootstrap

`src/scss/bootstrap-subset.scss`:

```scss
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/variables-dark";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/root";
@import "bootstrap/scss/transitions";   // .collapse, .collapsing
@import "bootstrap/scss/nav";
@import "bootstrap/scss/navbar";
@import "bootstrap/scss/dropdown";
@import "bootstrap/scss/close";
@import "bootstrap/scss/offcanvas";
@import "bootstrap/scss/modal";
@import "bootstrap/scss/toasts";
// TIDAK diimpor: reboot, containers, grid, utilities, buttons, cards, forms
```

Jika kompilasi menampilkan peringatan deprecation Sass dari Bootstrap, itu normal untuk versi Bootstrap 5.3; abaikan atau tambahkan `--quiet-deps`.

### 3.4 Entry CSS dan token (`src/css/app.css`)

```css
/* Urutan layer: Bootstrap di bawah utilities supaya Tailwind menang */
@layer theme, base, bootstrap, components, utilities;

@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/preflight.css" layer(base);
@import "./bootstrap-subset.css" layer(bootstrap);
@import "tailwindcss/utilities.css" layer(utilities);

/* ===== Token (sama dengan AUDIO-STORE-STYLE.md) ===== */
:root,
[data-theme="dark"] {
  --bg: #14110F;
  --surface: #1C1815;
  --surface-2: #26211D;
  --line: #3A332D;
  --ink: #F2EBE3;
  --ink-muted: #A39A90;
  --accent: #D9A441;
  --accent-hover: #E8BA62;
  --accent-ink: #14110F;
  --ok: #6FCF97;
  --warn: #F2C94C;
  --bad: #F26B5B;
}
[data-theme="light"] {
  --bg: #FAF7F2; --surface: #FFFFFF; --surface-2: #F1ECE4; --line: #DDD5C9;
  --ink: #1F1B17; --ink-muted: #6B6359;
  --accent: #9A6A12; --accent-hover: #7E560C; --accent-ink: #FFFFFF;
}

/* Daftarkan token ke Tailwind (membaca CSS variable, jadi tema bisa berganti) */
@theme inline {
  --color-bg: var(--bg);
  --color-surface: var(--surface);
  --color-surface-2: var(--surface-2);
  --color-line: var(--line);
  --color-ink: var(--ink);
  --color-ink-muted: var(--ink-muted);
  --color-accent: var(--accent);
  --color-accent-hover: var(--accent-hover);
  --color-accent-ink: var(--accent-ink);
  --color-ok: var(--ok);
  --color-warn: var(--warn);
  --color-bad: var(--bad);

  --font-sans: "Inter", system-ui, -apple-system, "Segoe UI", sans-serif;
  --font-display: "Fraunces", Georgia, serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;

  --radius-card: 14px;
  --radius-btn: 10px;
}

/* Dasar halaman */
@layer base {
  html { background: var(--bg); color: var(--ink); font-family: var(--font-sans); }
  body { line-height: 1.7; }
  h1, h2 { font-family: var(--font-display); font-weight: 600; }
  :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
}

/* Petakan variabel Bootstrap ke token proyek */
@layer bootstrap {
  :root {
    --bs-body-bg: var(--bg);
    --bs-body-color: var(--ink);
    --bs-border-color: var(--line);
    --bs-link-color: var(--accent);
  }
  .navbar {
    --bs-navbar-color: var(--ink-muted);
    --bs-navbar-hover-color: var(--accent);
    --bs-navbar-active-color: var(--accent);
    --bs-navbar-toggler-border-color: var(--line);
  }
  .offcanvas { --bs-offcanvas-bg: var(--surface); --bs-offcanvas-color: var(--ink); --bs-offcanvas-border-color: var(--line); }
  .dropdown-menu { --bs-dropdown-bg: var(--surface); --bs-dropdown-color: var(--ink); --bs-dropdown-border-color: var(--line);
                   --bs-dropdown-link-color: var(--ink); --bs-dropdown-link-hover-bg: var(--surface-2); }
  .modal { --bs-modal-bg: var(--surface); --bs-modal-color: var(--ink); --bs-modal-border-color: var(--line); }
}
```

Kontras, 60-30-10, dan tabel kontras di `AUDIO-STORE-STYLE.md` bagian 2 tetap berlaku.

---

## 4. Padanan Komponen (Tailwind)

| Komponen | Class Tailwind |
|---|---|
| Tombol utama | `inline-flex items-center justify-center rounded-btn bg-accent px-5 py-2.5 font-semibold text-accent-ink transition hover:bg-accent-hover` |
| Tombol sekunder | `rounded-btn border border-line px-5 py-2.5 text-ink transition hover:border-accent hover:text-accent` |
| Kartu produk | `group h-full overflow-hidden rounded-card border border-line bg-surface shadow-[0_10px_28px_rgba(0,0,0,.4)] transition hover:-translate-y-1 hover:border-accent` |
| Thumbnail kartu | `aspect-square bg-surface-2` + `img: h-full w-full object-contain` |
| Harga | `font-mono text-lg text-accent tabular-nums` |
| Chip signature | `rounded-full border border-line px-2.5 py-0.5 text-xs text-ink-muted` (aktif: `border-accent text-accent bg-accent/10`) |
| Baris tabel spek | `even:bg-surface-2` dengan sel `px-4 py-2.5`, label `text-ink-muted w-2/5`, nilai `font-mono` |
| Grid produk | `grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4` |
| Layout katalog | `grid gap-8 lg:grid-cols-[260px_1fr]` |
| Detail produk | `grid gap-10 lg:grid-cols-[7fr_5fr]` |
| Container | `mx-auto w-full max-w-7xl px-4 sm:px-6` |
| Section | `py-12 md:py-20` (selang-seling `bg-surface`) |
| Bar beli sticky mobile | `fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface p-3 pb-[calc(.75rem+env(safe-area-inset-bottom))] lg:hidden` |
| Skeleton | `animate-pulse rounded-card bg-surface-2` |

### 4.1 Navbar (Bootstrap + sentuhan Tailwind)

```html
<nav class="navbar navbar-expand-lg sticky-top border-b border-line bg-surface">
  <div class="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6">
    <a class="navbar-brand font-display text-xl text-ink" href="/">[NamaToko]<span class="text-accent">.</span></a>

    <button class="navbar-toggler lg:hidden" type="button"
            data-bs-toggle="collapse" data-bs-target="#mainNav"
            aria-controls="mainNav" aria-expanded="false" aria-label="Buka menu">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div id="mainNav" class="collapse navbar-collapse">
      <ul class="navbar-nav mx-auto gap-1">
        <li class="nav-item"><a class="nav-link" href="/produk.html?kategori=iem">IEM</a></li>
        <li class="nav-item"><a class="nav-link" href="/produk.html?kategori=dac-amp">DAC/Amp</a></li>
        <!-- DAP, TWS, Kabel, Eartips, Aksesoris, Panduan -->
      </ul>
      <div class="flex items-center gap-3">
        <button data-bs-toggle="offcanvas" data-bs-target="#miniCart" aria-label="Keranjang"
                class="relative rounded-btn border border-line p-2 text-ink hover:border-accent">
          <!-- ikon keranjang -->
          <span id="cartBadge" class="absolute -right-1.5 -top-1.5 rounded-full bg-accent px-1.5 text-xs font-semibold text-accent-ink">0</span>
        </button>
      </div>
    </div>
  </div>
</nav>
```

Catatan: `navbar-expand-lg` memakai breakpoint Bootstrap (992px), sedangkan breakpoint Tailwind `lg` adalah 1024px. Beda 32px ini bisa menimbulkan celah aneh. Samakan dengan menyetel `--breakpoint-lg: 62rem` (992px) pada `@theme`, atau gunakan `navbar-expand-xl` dan uji di kedua lebar.

### 4.2 Mini-cart (offcanvas)

```html
<div class="offcanvas offcanvas-end" tabindex="-1" id="miniCart" aria-labelledby="miniCartLabel" data-lenis-prevent>
  <div class="offcanvas-header border-b border-line">
    <h2 id="miniCartLabel" class="text-lg">Keranjang</h2>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Tutup"></button>
  </div>
  <div class="offcanvas-body flex flex-col gap-4"> <!-- item dirender JS --> </div>
</div>
```

---

## 5. Sistem Gerak: Pembagian Tugas

| Library | Dipakai untuk | Tidak dipakai untuk |
|---|---|---|
| **GSAP** (+ScrollTrigger, Flip) | Semua yang terikat scroll, timeline berurutan, reveal, stagger, transisi susun ulang grid | Hover sederhana (cukup CSS transition Tailwind) |
| **Lenis** | Gulir halus global | Area yang punya gulir sendiri (offcanvas, modal, daftar panjang) |
| **CSS / Tailwind** | Hover, fokus, transisi warna, `animate-pulse` | Urutan kompleks |
| **Anime.js** (opsional) | Animasi mikro mandiri yang dipicu event | Apa pun yang terikat scroll atau timeline GSAP |

**Aturan emas:** satu elemen, satu mesin animasi. Jangan menganimasikan elemen yang sama dengan GSAP dan Anime.js sekaligus, dan jangan menambah `transition` CSS pada properti yang sedang dianimasikan GSAP (`transform`, `opacity`), karena keduanya akan berebut.

### 5.1 Token gerak

| Token | Nilai | Pemakaian |
|---|---|---|
| Durasi cepat | `0.2s` | Hover, toggle |
| Durasi normal | `0.45s` | Reveal, transisi kartu |
| Durasi lambat | `0.8s` | Hero (sekali saja) |
| Ease standar | `power2.out` | Masuk |
| Ease keluar | `power2.in` | Hilang |
| Stagger | `0.06s` (maks. total 0.5s) | Grid kartu |
| Jarak geser reveal | `24px` | `y` |

Hanya animasikan `transform` dan `opacity` (plus `autoAlpha`). Jangan menganimasikan `width`, `height`, `top`, atau `left`.

---

## 6. Integrasi Lenis + GSAP

`src/js/motion/lenis.js`:

```js
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export let lenis = null;

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduce) {
  lenis = new Lenis({ duration: 1.0, smoothWheel: true });

  // Sinkronkan Lenis dengan ScrollTrigger dan ticker GSAP
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // Hentikan Lenis saat overlay terbuka
  document.addEventListener("show.bs.offcanvas", () => lenis.stop());
  document.addEventListener("hidden.bs.offcanvas", () => lenis.start());
  document.addEventListener("show.bs.modal", () => lenis.stop());
  document.addEventListener("hidden.bs.modal", () => lenis.start());
}

// Utilitas gulir yang aman dipakai dengan/tanpa Lenis
export function scrollToTarget(target, offset = -80) {
  if (lenis) lenis.scrollTo(target, { offset });
  else document.querySelector(target)?.scrollIntoView({ behavior: "auto", block: "start" });
}
```

**Aturan Lenis:**
- Beri atribut `data-lenis-prevent` pada elemen yang punya gulir sendiri: offcanvas, panel filter, dropdown panjang, dan tabel bandingkan yang bisa digulir horizontal.
- Biarkan gulir sentuh (touch) tetap native (perilaku bawaan Lenis), jangan dipaksa.
- Nonaktif total saat `prefers-reduced-motion`.
- Jangan menimpa gulir pada halaman checkout. Pengguna sedang mengisi form dan butuh gulir yang dapat diprediksi. Cukup tidak memanggil `lenis.js` di halaman itu.
- Panggil `lenis.destroy()` jika halaman dirender ulang sebagai SPA (tidak relevan selama masih multi-halaman).

---

## 7. Setup GSAP & Reveal

`src/js/motion/gsap-setup.js`:

```js
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(ScrollTrigger, Flip);

gsap.defaults({ duration: 0.45, ease: "power2.out" });

export const mm = gsap.matchMedia();
export { gsap, ScrollTrigger, Flip };
```

`src/js/motion/reveal.js`:

```js
import { mm, gsap, ScrollTrigger } from "./gsap-setup";

export function initReveal(root = document) {
  mm.add("(prefers-reduced-motion: no-preference)", () => {
    ScrollTrigger.batch(root.querySelectorAll("[data-reveal]"), {
      start: "top 88%",
      once: true,
      onEnter: (els) =>
        gsap.fromTo(
          els,
          { y: 24, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, stagger: 0.06, overwrite: true }
        ),
    });
  });
}
```

**Cegah konten "hilang" bila JS gagal.** Keadaan awal tersembunyi hanya diterapkan saat JS aktif dan pengguna tidak meminta gerak minimal:

```css
@media (prefers-reduced-motion: no-preference) {
  .js [data-reveal] { opacity: 0; visibility: hidden; }
}
```

Tambahkan `document.documentElement.classList.add("js")` sedini mungkin di `<head>`. Tanpa JS atau saat gerak dimatikan, semua konten tetap terlihat.

Panggil `ScrollTrigger.refresh()` setelah gambar produk selesai dimuat dan setelah grid dirender ulang, supaya posisi pemicu tidak meleset.

---

## 8. Peta Animasi per Halaman

| Halaman | Elemen | Efek | Mesin |
|---|---|---|---|
| Semua | Header | Bayangan/blur tipis muncul setelah gulir > 8px | ScrollTrigger / CSS |
| Semua | Badge keranjang | "Bump" kecil saat jumlah berubah | GSAP (atau Anime.js, lihat 9) |
| Semua | Toast | Masuk dari bawah 0.3s | CSS/GSAP |
| Beranda | Hero | Judul masuk per baris/kata, tombol menyusul, foto produk muncul dan sedikit parallax (maks. 40px) | GSAP timeline + ScrollTrigger |
| Beranda | Ubin kategori | Reveal stagger | GSAP batch |
| Beranda | Produk unggulan | Reveal stagger | GSAP batch |
| Beranda | Angka kepercayaan (opsional) | Hitung naik sekali | GSAP |
| Katalog | Kartu produk | Reveal 12 kartu pertama saja | GSAP batch |
| Katalog | Ganti filter/urutan | Kartu berpindah halus ke posisi baru | GSAP **Flip** |
| Katalog | Panel filter mobile | Offcanvas bawaan Bootstrap (jangan ditimpa) | Bootstrap |
| Detail | Galeri | Ganti gambar utama dengan fade 0.25s | GSAP/CSS |
| Detail | Tabel spek, tab | Reveal sekali, ganti tab dengan fade cepat | GSAP/CSS |
| Detail | Grafik frekuensi | Garis tergambar saat terlihat | GSAP (DrawSVG) atau Anime.js |
| Keranjang | Item | Item dihapus keluar dengan geser + kecil, sisanya naik mengisi | GSAP Flip |
| Checkout | - | **Tanpa animasi gulir/reveal.** Hanya validasi form dan transisi langkah ringan | CSS |
| Wishlist | Ikon hati | "Pop" kecil saat ditandai | GSAP/Anime.js |

Batas animasi per layar: maksimal satu rangkaian animasi besar (hero) dan sisanya ringan.

---

## 9. Anime.js: Penilaian dan Penempatan

**Penilaian jujur:** GSAP sudah mampu melakukan semua hal yang dilakukan Anime.js (timeline, stagger, SVG, ease kustom). Memakai keduanya berarti dua library animasi, dua API untuk dipelajari, dan tambahan ukuran bundel, tanpa kemampuan baru. Untuk proyek ini saya menyarankan **tidak wajib memakai Anime.js**.

Jika tetap ingin memakainya (misalnya untuk belajar atau sebagai nilai tambah tugas), batasi pada peran yang terpisah jelas dari GSAP:

| Penempatan | Alasan cocok | Contoh |
|---|---|---|
| **Animasi mikro event-driven** | Kecil, mandiri, tidak terikat scroll | Bump badge keranjang, pop ikon hati wishlist, tombol "Ditambahkan ✓" |
| **Menggambar garis grafik frekuensi (SVG)** | Pembantu SVG ringkas | Garis respons frekuensi tergambar saat tab dibuka |
| **Penghitung angka** | Satu baris untuk interpolasi angka | Statistik di bagian "Kenapa belanja di sini" |

Contoh (sintaks Anime.js v4, cek dokumentasi resmi untuk versi yang terpasang):

```js
// src/js/motion/micro.js
import { animate } from "animejs";

export function bumpBadge(el) {
  animate(el, { scale: [1, 1.35, 1], duration: 300, ease: "outBack" });
}
```

```js
import { animate, svg } from "animejs";

export function drawFrequencyLine(selector) {
  animate(svg.createDrawable(selector), { draw: ["0 0", "0 1"], duration: 1200, ease: "inOutQuad" });
}
```

**Yang tidak boleh dilakukan dengan Anime.js:** animasi terikat scroll, reveal grid, hero, transisi Flip, atau apa pun yang sudah ditangani GSAP.

Dengan impor modular (`import { animate } from "animejs"`), hanya fungsi yang dipakai yang masuk bundel, jadi biayanya kecil. Tetap, tunda keputusan sampai fitur inti selesai: tambahkan di tahap poles bila memang masih terasa ada manfaatnya.

---

## 10. Aksesibilitas & Performa Gerak

**Aksesibilitas**
- Hormati `prefers-reduced-motion`: Lenis mati, semua reveal dan parallax mati, konten langsung tampil.
- Tidak ada animasi berkedip lebih dari 3 kali per detik.
- Jangan menyembunyikan informasi penting (harga, stok, tombol beli) di balik animasi yang belum selesai.
- Fokus keyboard tetap terlihat dan tidak ikut "terbawa" animasi.
- Beri `aria-live="polite"` pada toast dan jumlah keranjang.
- Sediakan cara menggulir normal. Jangan mengubah kecepatan atau arah gulir secara agresif.

**Performa**
- Muat GSAP/ScrollTrigger/Flip hanya di halaman yang membutuhkan (impor dinamis), terutama jangan membebani halaman checkout.
- Hanya `transform` dan `opacity`. Gunakan `will-change` seperlunya dan lepas setelah selesai.
- Gunakan `once: true` pada reveal supaya pemicu tidak terus dihitung.
- Hapus animasi saat halaman/komponen dirender ulang: bungkus dalam `gsap.context()` lalu `ctx.revert()` sebelum render ulang.
- Batasi total stagger (maks. 0.5s) dan jumlah elemen teranimasi per layar.
- Anggaran target: skor Lighthouse Performance tetap ≥ 85 setelah animasi ditambahkan. Jika turun, kurangi animasi, bukan tidak mengukurnya.

**Prinsip "betah":** gerak yang baik terasa halus dan nyaris tak disadari. Pengunjung toko ingin menyaring dan membeli, jadi hindari intro panjang, parallax berlebihan, dan scroll-jacking.

---

## 11. Tahap Pengerjaan (Pembaruan)

| Tahap | Hasil |
|---|---|
| 0 | Vite + Tailwind v4 + subset Bootstrap + token + font, uji bahwa utilitas Tailwind menimpa Bootstrap |
| 1 | Header (navbar Bootstrap), footer, mini-cart offcanvas |
| 2-7 | Halaman sesuai `AUDIO-STORE-FRONTEND-SPEC.md` (tanpa animasi dulu) |
| 8 | Lenis + GSAP dasar: reveal, hero, header saat gulir |
| 9 | Flip untuk filter/keranjang, animasi mikro |
| 10 | Aksesibilitas, `prefers-reduced-motion`, ukur Lighthouse, uji perangkat |
| 11 | (Opsional) Anime.js untuk grafik frekuensi dan mikro |

**Penting:** bangun dulu seluruh fungsi tanpa animasi, baru tambahkan gerak. Animasi di atas fondasi yang belum stabil membuat debugging jauh lebih sulit.

---

## 12. Checklist

- [ ] Utilitas Tailwind menimpa gaya Bootstrap pada elemen navbar (cek DevTools)
- [ ] Tidak ada class grid/utilitas Bootstrap di luar komponen yang diizinkan
- [ ] Breakpoint navbar Bootstrap dan Tailwind sinkron (992px)
- [ ] Ukuran CSS akhir wajar (Bootstrap hanya subset)
- [ ] Lenis tersinkron dengan ScrollTrigger, mati di checkout dan saat reduced-motion
- [ ] Offcanvas/modal menghentikan Lenis dan punya `data-lenis-prevent`
- [ ] Konten tetap terlihat bila JS gagal atau gerak dimatikan
- [ ] Tidak ada elemen yang dianimasikan oleh dua mesin sekaligus
- [ ] Tidak ada animasi `width/height/top/left`
- [ ] Lighthouse Performance ≥ 85 dan Accessibility ≥ 90 setelah animasi
- [ ] Dosen mengonfirmasi porsi Bootstrap 10% dapat diterima
