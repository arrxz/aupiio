# AUDIO-STORE-STYLE.md — Amber Paper

Panduan style web e-commerce khusus audiophile: IEM, DAC/Amp, DAP, TWS, kabel, eartips, dan aksesoris.

**Stack:** Tailwind CSS v4 (±90%) + Bootstrap 5.3 subset (±10%) · Vite · GSAP · Lenis · (Anime.js opsional)
**Pasangan dokumen:** `AUDIO-STORE-FRONTEND-SPEC.md` (data, halaman, state, perilaku).

> Nama toko memakai placeholder **`[NamaToko]`**. Ganti sesuai pilihanmu.

---

## 1. Konsep & Tema

**Tema: "Amber Paper"**: katalog hi-fi cetak yang tenang. Latar kertas hangat, kartu putih bersih, teks cokelat-hitam, satu aksen amber-tembaga. Sentuhan "ruang dengar malam" dipertahankan lewat pita gelap terbatas (footer dan satu strip).

| Aspek | Keputusan | Alasan |
|---|---|---|
| Mood | Hangat, tenang, premium, teknis tapi tidak dingin | Audiophile lama membaca spek dan ulasan |
| Mode utama | **Light hangat** | Foto produk umumnya berlatar putih/abu, menyatu alami di latar terang |
| Mode tambahan | Dark (opsional, dikerjakan terakhir) | Nilai tambah kecil, biaya uji ulang besar |
| Aksen | Satu warna: amber-tembaga | Konsisten dan mudah dikenali |
| Karakter | Detail teknis dihormati (tabel spek, grafik, tag signature) | Audiophile mempercayai data, bukan slogan |

### Prinsip UX agar pengunjung betah

Warna hanya sebagian kecil. Yang membuat orang betah dan akhirnya membeli:

1. **Cepat.** Halaman termuat di bawah 3 detik di HP, gambar WebP dan lazy-load.
2. **Mudah menyaring.** Filter khas audio (driver, impedansi, konektor, signature) lebih berharga daripada animasi.
3. **Data jelas.** Harga, stok, spek, dan garansi terlihat tanpa dicari.
4. **Dipercaya.** Keaslian, garansi, retur, dan ulasan nyata ditampilkan terang-terangan.
5. **Tidak mengganggu.** Tanpa pop-up agresif, auto-play suara, atau banner berkedip.
6. **Membantu memilih.** Bandingkan produk dan rekomendasi "cocok untuk" menekan kebingungan.
7. **Foto adalah bintangnya.** Semua keputusan visual melayani foto produk (bagian 7).

---

## 2. Color Palette

### 2.1 Token warna (Light, default)

| Token | Hex | Fungsi |
|---|---|---|
| `--bg` | `#F6F4F0` | Latar halaman (kertas hangat) |
| `--surface` | `#FFFFFF` | Kartu produk, header, panel filter, input |
| `--surface-2` | `#EFECE6` | Hover, baris tabel selang-seling, area sekunder |
| `--photo-tile` | `#F0EEEA` | Latar kotak foto produk |
| `--line` | `#E3DED5` | Garis pembatas |
| `--ink` | `#1C1917` | Teks utama |
| `--ink-muted` | `#6B645B` | Teks sekunder, label spek |
| `--accent` | `#B45309` | Isi tombol utama, badge, ikon aktif |
| `--accent-hover` | `#92400E` | Hover tombol |
| `--accent-ink` | `#FFFFFF` | Teks di atas isi aksen |
| `--accent-strong` | `#92400E` | **Teks/link** beraksen di latar terang |
| `--accent-soft` | `rgba(180,83,9,.08)` | Latar chip aktif, highlight halus |
| `--ok` | `#15803D` | Stok tersedia |
| `--warn` | `#A16207` | Stok menipis (selalu dengan ikon + teks) |
| `--bad` | `#B91C1C` | Habis, error |

### 2.2 Pita gelap (pelengkap, bukan tema)

| Token | Hex | Fungsi |
|---|---|---|
| `--band` | `#1C1917` | Footer, satu strip hero/banner, bagian "Kenapa belanja di sini" |
| `--band-ink` | `#F2EBE3` | Teks di pita |
| `--band-muted` | `#A39A90` | Teks sekunder di pita |
| `--band-accent` | `#D9A441` | Aksen di pita (amber terang) |

**Batas:** pita gelap maksimal sekitar **15%** tinggi halaman. Lebih dari itu halaman terasa gelap dan foto putih mulai bermasalah lagi.

### 2.3 Dark mode (opsional, ditunda)

Jika nanti ditambahkan sebagai toggle, **kotak foto tetap terang** (`--photo-tile` tidak berubah) supaya foto tidak bocor ke latar gelap.

| Token | Hex |
|---|---|
| `--bg` | `#14110F` |
| `--surface` | `#1C1815` |
| `--surface-2` | `#26211D` |
| `--line` | `#3A332D` |
| `--ink` | `#F2EBE3` |
| `--ink-muted` | `#A39A90` |
| `--accent` | `#D9A441` |
| `--accent-hover` | `#E8BA62` |
| `--accent-ink` | `#14110F` |
| `--accent-strong` | `#E8BA62` |

Kerjakan ini **terakhir** dan hanya bila waktu tersisa.

### 2.4 Aturan 60-30-10

| Porsi | Warna | Dipakai untuk |
|---|---|---|
| **60%** dominan | `--bg` `#F6F4F0` | Latar halaman, ruang napas |
| **30%** sekunder | `--surface` `#FFFFFF` + pita `--band` `#1C1917` | Kartu, header, panel filter, tabel; footer dan satu strip gelap |
| **10%** aksen | `--accent` `#B45309` | Tombol "Tambah ke Keranjang", badge, ikon aktif, garis aktif navbar |

Warna teks dan warna status tidak dihitung dalam 60-30-10. Jika aksen terlihat di lebih dari sekitar 10% layar, kurangi.

### 2.5 Cek kontras (perkiraan)

| Pasangan | Rasio | Status |
|---|---|---|
| `--ink` di `--bg` | ±16:1 | Lulus |
| `--ink-muted` di `--bg` | ±5.3:1 | Lulus |
| `--ink-muted` di `--surface` | ±5.8:1 | Lulus |
| `--accent-ink` di `--accent` | ±5.0:1 | Lulus |
| `--accent-strong` di `--bg` | ±6.5:1 | Lulus |
| `--accent` sebagai teks di `--bg` | ±4.6:1 | Batas: **jangan untuk teks kecil**, pakai `--accent-strong` |
| `--ok` / `--warn` / `--bad` di `--surface` | ±5 / 4.9 / 6.5:1 | Lulus (sertakan ikon + teks) |
| `--band-accent` di `--band` | ±8:1 | Lulus |

Verifikasi ulang dengan WebAIM Contrast Checker setelah nilai final dipilih.

---

## 3. Tipografi

| Peran | Font | Keterangan |
|---|---|---|
| Display (hero, judul section) | **Fraunces** 600 | Serif hangat, kesan premium. Hanya untuk judul besar |
| UI & body | **Inter** 400/500/600 | Terbaca jelas untuk deskripsi, tombol, menu |
| Data spek & harga | **IBM Plex Mono** 500 | Angka rata (`tabular-nums`), kesan teknis |

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600&family=IBM+Plex+Mono:wght@500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

| Elemen | Ukuran |
|---|---|
| H1 hero | `clamp(2.2rem, 5vw, 3.75rem)` |
| H2 section | `clamp(1.6rem, 3vw, 2.25rem)` |
| Body | `1rem`, line-height `1.7` |
| Label/spek | `.85rem` |
| Harga di kartu | `1.15rem` mono |

Fallback: `system-ui, -apple-system, "Segoe UI", sans-serif` dan `Georgia, serif`.

---

## 4. Spacing, Radius, Shadow

| Token | Nilai |
|---|---|
| Section padding | `5rem` desktop, `3rem` mobile (`py-12 md:py-20`) |
| Gap grid produk | `1.25rem` mobile, `1.5rem` desktop |
| Radius kartu | `14px` |
| Radius tombol / input | `10px` |
| Radius chip / badge | `999px` |
| Shadow kartu | `0 1px 2px rgba(28,25,23,.06), 0 8px 24px rgba(28,25,23,.08)` |
| Shadow bar sticky bawah | `0 -4px 16px rgba(28,25,23,.08)` |
| Transisi | `.2s ease` |

---

## 5. Struktur Halaman & Wireframe

### 5.1 Peta situs

```
Beranda
├── Katalog (/produk)
│   ├── IEM
│   ├── DAC / Amp
│   ├── DAP
│   ├── TWS
│   ├── Kabel
│   ├── Eartips
│   └── Aksesoris (case, adaptor, pembersih)
├── Detail Produk (/produk/:slug)
├── Bandingkan (/bandingkan)
├── Wishlist
├── Keranjang
├── Checkout
├── Akun (pesanan, alamat)
├── Panduan (cara memilih IEM, apa itu DAC, dll.)
└── Garansi & Retur / Kontak
```

### 5.2 Beranda (desktop ≥ 992px)

Label di kanan menunjukkan latar tiap bagian.

```
┌────────────────────────────────────────────────────────────────┐
│ TOP BAR  Gratis ongkir min. Rp xxx · Garansi resmi             │  ← --surface-2
├────────────────────────────────────────────────────────────────┤
│ HEADER  [Logo]  [ 🔍 Cari IEM, DAC, kabel...       ]  ♡  🛒(2) │  ← sticky, --surface
│ NAV     IEM  DAC/Amp  DAP  TWS  Kabel  Eartips  Aksesoris Panduan│
├────────────────────────────────────────────────────────────────┤
│ HERO                                                           │  ← --bg
│  ┌──────────────────────────────┐  ┌──────────────────────┐    │
│  │ Dengar detail yang sebelumnya │  │                      │    │
│  │ tersembunyi.                 │  │  Foto produk unggulan │    │
│  │ Sub: 1 kalimat nilai toko    │  │  (kotak foto terang)  │    │
│  │ [Belanja Sekarang] [Panduan] │  │                      │    │
│  └──────────────────────────────┘  └──────────────────────┘    │
├────────────────────────────────────────────────────────────────┤
│ KATEGORI  (6-7 ubin ikon/gambar)                               │  ← --surface
│  [IEM] [DAC/Amp] [DAP] [TWS] [Kabel] [Eartips] [Aksesoris]     │
├────────────────────────────────────────────────────────────────┤
│ CARI BERDASARKAN KARAKTER SUARA                                │  ← --bg
│  [Warm] [Neutral] [V-shaped] [Bright] [Bassy] [Analitis]       │
├────────────────────────────────────────────────────────────────┤
│ PRODUK UNGGULAN  (4 kartu, carousel di mobile)                 │  ← --bg
│  ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐                       │
│  │ foto  │ │ foto  │ │ foto  │ │ foto  │                       │
│  │ nama  │ │ nama  │ │ nama  │ │ nama  │                       │
│  │ Rp xxx│ │ Rp xxx│ │ Rp xxx│ │ Rp xxx│                       │
│  └───────┘ └───────┘ └───────┘ └───────┘                       │
├────────────────────────────────────────────────────────────────┤
│ KENAPA BELANJA DI SINI  (pita gelap)                           │  ← --band
│  ✔ 100% Original  ✔ Garansi  ✔ Retur 7 hari  ✔ Konsultasi      │
├────────────────────────────────────────────────────────────────┤
│ PANDUAN TERBARU (3 artikel)  +  ULASAN PELANGGAN               │  ← --bg
├────────────────────────────────────────────────────────────────┤
│ FOOTER  Tentang · Kontak · Garansi · Pengiriman · Sosmed       │  ← --band
└────────────────────────────────────────────────────────────────┘
```

### 5.3 Katalog / Listing

```
┌────────────────────────────────────────────────────────────────┐
│ Beranda > IEM                          Urutkan: [Terlaris  ▾]  │
├─────────────────┬──────────────────────────────────────────────┤
│ FILTER (kiri)   │  [chip filter aktif ×] [×]      48 produk    │
│ Harga  [min-max]│  ┌───────┐ ┌───────┐ ┌───────┐               │
│ Jenis driver    │  │ kartu │ │ kartu │ │ kartu │               │
│  ☐ DD ☐ BA      │  └───────┘ └───────┘ └───────┘               │
│  ☐ Planar ☐ Hybrid│ ┌───────┐ ┌───────┐ ┌───────┐              │
│ Konektor        │  │ kartu │ │ kartu │ │ kartu │               │
│  ☐ 2-pin ☐ MMCX │  └───────┘ └───────┘ └───────┘               │
│ Plug            │                                              │
│  ☐ 3.5 ☐ 4.4    │            [ 1 2 3 ... › ]                   │
│ Signature       │                                              │
│ Impedansi       │                                              │
│ Stok ☐ Tersedia │                                              │
└─────────────────┴──────────────────────────────────────────────┘
Mobile: filter menjadi tombol [Filter] yang membuka offcanvas dari bawah.
```

### 5.4 Detail Produk

```
┌────────────────────────────────────────────────────────────────┐
│ Beranda > IEM > Nama Produk                                    │
├──────────────────────────────┬─────────────────────────────────┤
│  ┌────────────────────────┐  │ Brand                           │
│  │   GALERI BESAR         │  │ NAMA PRODUK (H1)                │
│  │   (kotak foto terang)  │  │ ★ 4.8 (23 ulasan)               │
│  └────────────────────────┘  │ Rp 1.250.000   [coret harga]    │
│  [th][th][th][th]            │ Tag: [Warm] [Hybrid] [2-pin]    │
│                              │ ● Stok tersedia                 │
│                              │ Kabel: [3.5mm ▾]  Tips: [M ▾]   │
│                              │ Qty [- 1 +]                     │
│                              │ [ Tambah ke Keranjang ]         │
│                              │ [ ♡ Wishlist ] [ ⇄ Bandingkan ] │
│                              │ ✔ Original ✔ Garansi ✔ Retur    │
├──────────────────────────────┴─────────────────────────────────┤
│ TAB:  Deskripsi | Spesifikasi | Grafik Frekuensi | Ulasan | FAQ │
│  Spesifikasi (tabel 2 kolom: label muted, nilai mono)          │
│  Driver · Impedansi · Sensitivitas · Respons Frekuensi · Kabel │
├────────────────────────────────────────────────────────────────┤
│ SERING DIBELI BERSAMA (eartips, kabel, case)                   │
│ PRODUK SERUPA                                                  │
└────────────────────────────────────────────────────────────────┘
Mobile: bar "Tambah ke Keranjang" menempel di bawah layar (sticky).
```

### 5.5 Keranjang & Checkout (mobile-first)

```
KERANJANG                          CHECKOUT (1 halaman, 3 langkah)
┌────────────────────┐             ┌────────────────────┐
│ [foto] Produk  Rp  │             │ 1 Alamat           │
│ Qty [- 1 +]  Hapus │             │ 2 Pengiriman      │
├────────────────────┤             │ 3 Pembayaran      │
│ Subtotal   Rp xxx  │             ├────────────────────┤
│ Ongkir (est.)      │             │ Ringkasan pesanan  │
│ [ Lanjut Checkout ]│             │ [ Bayar Sekarang ] │
└────────────────────┘             └────────────────────┘
```

### 5.6 Pemetaan tata letak (Tailwind)

| Bagian | Class kunci |
|---|---|
| Container | `mx-auto w-full max-w-7xl px-4 sm:px-6` |
| Grid produk | `grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4` |
| Listing + filter | `grid gap-8 lg:grid-cols-[260px_1fr]`; mobile: offcanvas |
| Detail produk | `grid gap-10 lg:grid-cols-[7fr_5fr]` |
| Kategori | `grid grid-cols-3 gap-3 md:grid-cols-4 lg:grid-cols-7` |
| Section | `py-12 md:py-20` (selang-seling `bg-surface`) |
| Header | Navbar Bootstrap + utilitas Tailwind (bagian 8.6) |

---

## 6. Komponen Utama

### 6.1 Kartu produk
- Kotak foto rasio `1:1` berlatar `--photo-tile` (bagian 7).
- Hover (desktop): ganti ke foto kedua, tampil tombol "Tambah" dan checkbox "Bandingkan".
- Isi: brand (muted kecil) → nama (maks 2 baris) → chip signature → harga mono → status stok.
- Badge: `Baru`, `Promo`, `Terbatas` (maks 1 per kartu).

### 6.2 Chip karakter suara
`Warm` `Neutral` `V-shaped` `Bright` `Bassy` `Analitis`. Gaya: border `--line`, teks `--ink-muted`; aktif berlatar `--accent-soft` dengan teks `--accent-strong`.

### 6.3 Tabel spesifikasi
Dua kolom: label `--ink-muted`, nilai `IBM Plex Mono`. Baris selang-seling `--surface-2`.

### 6.4 Grafik respons frekuensi
Gambar/SVG berlatar `--surface`, garis `--accent`. Beri alt text ringkasan (misal: "bass terangkat, treble halus").

### 6.5 Bandingkan produk
Pilih 2-4 produk sekategori. Tabel sejajar, baris yang berbeda ditandai garis aksen halus (bukan blok warna). Mobile: gulir horizontal dengan kolom label tetap.

### 6.6 Bar kepercayaan
Ikon garis tipis + teks pendek: Original, Garansi, Retur, Konsultasi via WhatsApp. Di beranda tampil sebagai pita gelap.

### 6.7 Status stok
`Tersedia` (hijau + ikon), `Sisa sedikit` (kuning + ikon), `Habis` (merah + tombol "Beritahu saya"). Jangan mengandalkan warna saja.

---

## 7. Foto Produk & Konten

Foto adalah isi utama toko, jadi aturannya lebih ketat daripada warna.

### 7.1 Kotak foto

```css
.photo-tile { background: var(--photo-tile); aspect-ratio: 1 / 1; display: grid; place-items: center; }
.photo-tile img { width: 100%; height: 100%; object-fit: contain; padding: 8%; mix-blend-mode: multiply; }
```

Padanan Tailwind: kotak `grid aspect-square place-items-center bg-photo-tile`, gambar `h-full w-full object-contain p-[8%] mix-blend-multiply`.

- `multiply` melebur latar **putih** foto ke warna kotak sehingga tepi persegi hilang.
- Latar **abu muda** (kira-kira `#EDEDED` ke atas) tetap tampak sedikit lebih gelap dari kotak, tapi selisihnya nyaris tak terlihat.
- `padding: 8%` menjaga produk berbagai ukuran terlihat seimbang.
- Jangan menambah filter (blur, brightness) pada foto. Jujur pada warna asli produk.
- Di dark mode, kotak foto tetap terang.

### 7.2 Standar foto

| Aspek | Standar |
|---|---|
| Latar | Putih murni atau abu sangat muda. Hindari latar berwarna/bertekstur |
| Rasio | 1:1, produk memenuhi sekitar 80% kanvas |
| Resolusi | 1200 x 1200 px, WebP, di bawah 150 KB |
| Sudut | Minimal 3: depan, samping, detail konektor; satu foto skala/pemakaian bila ada |
| Bayangan | Lembut atau tanpa bayangan |
| Konsistensi | Satu kategori memakai pencahayaan dan jarak yang mirip |

Pemotongan latar (cut-out) hanya untuk foto yang benar-benar bermasalah, bukan syarat.
Foto promosi brand berlatar gelap hanya dipakai di pita gelap, bukan di kartu katalog.

### 7.3 Konten

- Deskripsi dimulai dari karakter suara dan untuk siapa produk cocok, baru spek teknis.
- Hindari klaim berlebihan ("terbaik di dunia"). Audiophile menyukai deskripsi jujur, termasuk kekurangannya.
- Judul produk: `Brand Model, jenis, fitur kunci` (konsisten untuk SEO).
- Pakai foto milik sendiri atau berlisensi, bukan salinan dari situs brand atau toko lain.

---

## 8. Implementasi: Tailwind 90% + Bootstrap 10%

### 8.1 Pembagian peran

| Bootstrap (±10%, perilaku & struktur kompleks) | Tailwind (±90%) |
|---|---|
| Navbar + collapse mobile | Grid, section, kartu produk |
| Offcanvas (mini-cart, filter mobile) | Tombol, chip, badge, form |
| Dropdown (menu kategori, sortir) | Tabel spek, tab detail |
| Modal (zoom galeri, konfirmasi) | Hero, footer, semua halaman |
| Toast (opsional) | Tipografi, warna, spasi |

**Aturan:**
1. Dilarang memakai class grid/utilitas Bootstrap (`row`, `col-*`, `d-flex`, `mb-3`, dst.) di luar komponen yang diizinkan.
2. Jangan mengimpor seluruh `bootstrap.css`, hanya subset (8.3).
3. Jangan memakai Reboot Bootstrap. Preflight Tailwind yang mereset gaya dasar.
4. Variabel `--bs-*` dipetakan ke token proyek, bukan warna bawaan Bootstrap.
5. Tambahan class Tailwind pada elemen Bootstrap hanya untuk penyesuaian kecil.

**Benturan yang diantisipasi:**

| Masalah | Penyebab | Solusi |
|---|---|---|
| Utilitas Tailwind kalah dari Bootstrap | Di Tailwind v4 utilitas ada di cascade layer; CSS tanpa layer menang | Bungkus CSS Bootstrap di layer yang urutannya di bawah `utilities` (8.4) |
| Reset ganda | Preflight vs Reboot | Jangan impor Reboot |
| Nama class bentrok (`.container`, `.collapse`, `.show`) | Dua sistem | Pakai container Tailwind sendiri; jangan pakai `.collapse`/`.show` di luar komponen Bootstrap |
| CSS membengkak | Impor semua Bootstrap | Impor subset saja |
| Breakpoint beda (Bootstrap `lg` 992px, Tailwind `lg` 1024px) | Default berbeda | Samakan lewat `--breakpoint-lg: 62rem` (8.4) |

> Untuk Tailwind v3, tidak ada layer pada utilitas, jadi cukup muat CSS Bootstrap **sebelum** CSS Tailwind. Selalu verifikasi di DevTools bahwa utilitas menimpa gaya Bootstrap.

**Konfirmasi ke dosen:** tugas awalnya mensyaratkan Bootstrap. Pastikan porsi 10% dapat diterima sebelum dikumpulkan.

### 8.2 Setup (Vite)

```bash
npm create vite@latest audio-store -- --template vanilla
cd audio-store
npm i gsap lenis bootstrap
npm i -D tailwindcss @tailwindcss/vite sass
npm i animejs        # opsional
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

`package.json` (kompilasi subset Bootstrap):

```json
{
  "scripts": {
    "css:bs": "sass --load-path=node_modules src/scss/bootstrap-subset.scss src/css/bootstrap-subset.css",
    "dev": "npm run css:bs && vite",
    "build": "npm run css:bs && vite build"
  }
}
```

Vite dipilih karena Laravel memakainya secara bawaan, jadi struktur ini mudah dipindah ke backend nanti.

### 8.3 Subset Bootstrap (`src/scss/bootstrap-subset.scss`)

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

Peringatan deprecation Sass dari Bootstrap 5.3 normal; abaikan atau tambahkan `--quiet-deps`.

### 8.4 Entry CSS (`src/css/app.css`)

```css
/* Urutan layer: Bootstrap di bawah utilities supaya Tailwind menang */
@layer theme, base, bootstrap, components, utilities;

@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/preflight.css" layer(base);
@import "./bootstrap-subset.css" layer(bootstrap);
@import "tailwindcss/utilities.css" layer(utilities);

/* ===== Token (Light default) ===== */
:root,
[data-theme="light"] {
  --bg: #F6F4F0;
  --surface: #FFFFFF;
  --surface-2: #EFECE6;
  --photo-tile: #F0EEEA;
  --line: #E3DED5;
  --ink: #1C1917;
  --ink-muted: #6B645B;
  --accent: #B45309;
  --accent-hover: #92400E;
  --accent-ink: #FFFFFF;
  --accent-strong: #92400E;
  --accent-soft: rgba(180, 83, 9, .08);
  --ok: #15803D;
  --warn: #A16207;
  --bad: #B91C1C;

  --band: #1C1917;
  --band-ink: #F2EBE3;
  --band-muted: #A39A90;
  --band-accent: #D9A441;
}

/* Opsional, tunda sampai fitur inti selesai (--photo-tile sengaja tidak diubah) */
[data-theme="dark"] {
  --bg: #14110F; --surface: #1C1815; --surface-2: #26211D;
  --line: #3A332D; --ink: #F2EBE3; --ink-muted: #A39A90;
  --accent: #D9A441; --accent-hover: #E8BA62; --accent-ink: #14110F;
  --accent-strong: #E8BA62; --accent-soft: rgba(217, 164, 65, .12);
}

/* Samakan breakpoint lg dengan Bootstrap (992px) */
@theme { --breakpoint-lg: 62rem; }

/* Daftarkan token ke Tailwind (membaca CSS variable, jadi tema bisa berganti) */
@theme inline {
  --color-bg: var(--bg);
  --color-surface: var(--surface);
  --color-surface-2: var(--surface-2);
  --color-photo-tile: var(--photo-tile);
  --color-line: var(--line);
  --color-ink: var(--ink);
  --color-ink-muted: var(--ink-muted);
  --color-accent: var(--accent);
  --color-accent-hover: var(--accent-hover);
  --color-accent-ink: var(--accent-ink);
  --color-accent-strong: var(--accent-strong);
  --color-accent-soft: var(--accent-soft);
  --color-ok: var(--ok);
  --color-warn: var(--warn);
  --color-bad: var(--bad);
  --color-band: var(--band);
  --color-band-ink: var(--band-ink);
  --color-band-muted: var(--band-muted);
  --color-band-accent: var(--band-accent);

  --font-sans: "Inter", system-ui, -apple-system, "Segoe UI", sans-serif;
  --font-display: "Fraunces", Georgia, serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;

  --radius-card: 14px;
  --radius-btn: 10px;
}

@layer base {
  html { background: var(--bg); color: var(--ink); font-family: var(--font-sans); }
  body { line-height: 1.7; }
  h1, h2 { font-family: var(--font-display); font-weight: 600; }
  :focus-visible { outline: 2px solid var(--accent-strong); outline-offset: 3px; }
}

/* Petakan variabel Bootstrap ke token proyek */
@layer bootstrap {
  :root {
    --bs-body-bg: var(--bg);
    --bs-body-color: var(--ink);
    --bs-border-color: var(--line);
    --bs-link-color: var(--accent-strong);
  }
  .navbar {
    --bs-navbar-color: var(--ink-muted);
    --bs-navbar-hover-color: var(--accent-strong);
    --bs-navbar-active-color: var(--accent-strong);
    --bs-navbar-toggler-border-color: var(--line);
  }
  .offcanvas { --bs-offcanvas-bg: var(--surface); --bs-offcanvas-color: var(--ink); --bs-offcanvas-border-color: var(--line); }
  .dropdown-menu { --bs-dropdown-bg: var(--surface); --bs-dropdown-color: var(--ink); --bs-dropdown-border-color: var(--line);
                   --bs-dropdown-link-color: var(--ink); --bs-dropdown-link-hover-bg: var(--surface-2); }
  .modal { --bs-modal-bg: var(--surface); --bs-modal-color: var(--ink); --bs-modal-border-color: var(--line); }
}
```

### 8.5 Padanan komponen (Tailwind)

| Komponen | Class |
|---|---|
| Tombol utama | `inline-flex items-center justify-center rounded-btn bg-accent px-5 py-2.5 font-semibold text-accent-ink transition hover:bg-accent-hover` |
| Tombol sekunder | `rounded-btn border border-line px-5 py-2.5 text-ink transition hover:border-accent hover:text-accent-strong` |
| Kartu produk | `group h-full overflow-hidden rounded-card border border-line bg-surface shadow-[0_1px_2px_rgba(28,25,23,.06),0_8px_24px_rgba(28,25,23,.08)] transition hover:-translate-y-1 hover:border-accent` |
| Kotak foto | `grid aspect-square place-items-center bg-photo-tile` (gambar: `h-full w-full object-contain p-[8%] mix-blend-multiply`) |
| Harga | `font-mono text-lg tabular-nums text-accent-strong` |
| Link teks | `text-accent-strong underline-offset-2 hover:underline` |
| Chip | `rounded-full border border-line px-2.5 py-0.5 text-xs text-ink-muted` (aktif: `border-accent bg-accent-soft text-accent-strong`) |
| Tabel spek | sel `px-4 py-2.5`, baris `even:bg-surface-2`, label `w-2/5 text-ink-muted`, nilai `font-mono` |
| Bar beli sticky mobile | `fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface p-3 pb-[calc(.75rem+env(safe-area-inset-bottom))] shadow-[0_-4px_16px_rgba(28,25,23,.08)] lg:hidden` |
| Footer / pita gelap | `bg-band text-band-ink`, teks sekunder `text-band-muted`, link `text-band-accent` |
| Skeleton | `animate-pulse rounded-card bg-surface-2` |

### 8.6 Navbar (Bootstrap + Tailwind)

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
      <button data-bs-toggle="offcanvas" data-bs-target="#miniCart" aria-label="Keranjang"
              class="relative rounded-btn border border-line p-2 text-ink hover:border-accent">
        <!-- ikon keranjang -->
        <span id="cartBadge" class="absolute -right-1.5 -top-1.5 rounded-full bg-accent px-1.5 text-xs font-semibold text-accent-ink">0</span>
      </button>
    </div>
  </div>
</nav>
```

### 8.7 Mini-cart (offcanvas)

```html
<div class="offcanvas offcanvas-end" tabindex="-1" id="miniCart" aria-labelledby="miniCartLabel" data-lenis-prevent>
  <div class="offcanvas-header border-b border-line">
    <h2 id="miniCartLabel" class="text-lg">Keranjang</h2>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Tutup"></button>
  </div>
  <div class="offcanvas-body flex flex-col gap-4"><!-- item dirender JS --></div>
</div>
```

---

## 9. Interaksi & Gerak

### 9.1 Interaksi yang membuat betah

| Fitur | Perilaku |
|---|---|
| Pencarian instan | Saran produk muncul saat mengetik, tanpa reload |
| Filter tanpa reload | Hasil diperbarui, chip filter aktif bisa dihapus satu per satu |
| Skeleton loading | Kerangka kartu saat data dimuat, bukan layar kosong |
| Mini-cart | Klik ikon keranjang membuka offcanvas ringkas |
| Wishlist & bandingkan | Tersimpan di perangkat (localStorage) untuk tamu |
| Toast konfirmasi | "Ditambahkan ke keranjang" singkat, tidak menutupi tombol |
| Terakhir dilihat | Baris "Terakhir kamu lihat" di beranda/detail |
| Konsultasi cepat | Tombol WhatsApp di pojok, tidak berkedip |
| Notifikasi stok | "Beritahu saya" untuk produk habis |

### 9.2 Pembagian tugas library gerak

| Library | Dipakai untuk | Tidak dipakai untuk |
|---|---|---|
| **GSAP** (+ScrollTrigger, Flip) | Yang terikat scroll, timeline, reveal, stagger, transisi susun ulang grid | Hover sederhana (cukup CSS) |
| **Lenis** | Gulir halus global | Area bergulir sendiri (offcanvas, modal, tabel bandingkan) dan halaman checkout |
| **CSS / Tailwind** | Hover, fokus, transisi warna, `animate-pulse` | Urutan kompleks |
| **Anime.js** (opsional) | Animasi mikro event-driven | Apa pun yang terikat scroll atau timeline GSAP |

**Aturan emas:** satu elemen, satu mesin animasi. Jangan menambah `transition` CSS pada properti (`transform`, `opacity`) yang sedang dianimasikan GSAP.

### 9.3 Token gerak

| Token | Nilai | Pemakaian |
|---|---|---|
| Durasi cepat | `0.2s` | Hover, toggle |
| Durasi normal | `0.45s` | Reveal, transisi kartu |
| Durasi lambat | `0.8s` | Hero (sekali saja) |
| Ease masuk / keluar | `power2.out` / `power2.in` | |
| Stagger | `0.06s` (total maks. 0.5s) | Grid kartu |
| Jarak geser reveal | `24px` | `y` |

Hanya animasikan `transform` dan `opacity` (`autoAlpha`). Jangan `width`, `height`, `top`, `left`.

### 9.4 Lenis + GSAP (`src/js/motion/lenis.js`)

```js
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export let lenis = null;
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduce) {
  lenis = new Lenis({ duration: 1.0, smoothWheel: true });
  lenis.on("scroll", ScrollTrigger.update);               // sinkron dengan ScrollTrigger
  gsap.ticker.add((time) => lenis.raf(time * 1000));      // satu ticker untuk keduanya
  gsap.ticker.lagSmoothing(0);

  // Hentikan Lenis saat overlay terbuka
  document.addEventListener("show.bs.offcanvas", () => lenis.stop());
  document.addEventListener("hidden.bs.offcanvas", () => lenis.start());
  document.addEventListener("show.bs.modal", () => lenis.stop());
  document.addEventListener("hidden.bs.modal", () => lenis.start());
}

export function scrollToTarget(target, offset = -80) {
  if (lenis) lenis.scrollTo(target, { offset });
  else document.querySelector(target)?.scrollIntoView({ behavior: "auto", block: "start" });
}
```

**Aturan Lenis:**
- Beri `data-lenis-prevent` pada elemen yang punya gulir sendiri (offcanvas, panel filter, dropdown panjang, tabel bandingkan).
- Gulir sentuh tetap native (perilaku bawaan).
- Nonaktif saat `prefers-reduced-motion`.
- **Jangan dipasang di halaman checkout.** Pengguna sedang mengisi form dan butuh gulir yang dapat diprediksi.

### 9.5 Setup GSAP & reveal

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
        gsap.fromTo(els, { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.06, overwrite: true }),
    });
  });
}
```

Cegah konten "hilang" bila JS gagal. Keadaan awal tersembunyi hanya saat JS aktif dan gerak tidak dibatasi:

```css
@media (prefers-reduced-motion: no-preference) {
  .js [data-reveal] { opacity: 0; visibility: hidden; }
}
```

Tambahkan `document.documentElement.classList.add("js")` sedini mungkin di `<head>`. Panggil `ScrollTrigger.refresh()` setelah gambar produk selesai dimuat dan setelah grid dirender ulang.

### 9.6 Peta animasi per halaman

| Halaman | Elemen | Efek | Mesin |
|---|---|---|---|
| Semua | Header | Bayangan halus muncul setelah gulir > 8px | ScrollTrigger / CSS |
| Semua | Badge keranjang | "Bump" kecil saat jumlah berubah | GSAP (atau Anime.js) |
| Semua | Toast | Masuk dari bawah 0.3s | CSS/GSAP |
| Beranda | Hero | Judul masuk per baris/kata, tombol menyusul, foto parallax halus (maks. 40px) | GSAP timeline + ScrollTrigger |
| Beranda | Ubin kategori, produk unggulan | Reveal stagger | GSAP batch |
| Katalog | Kartu produk | Reveal 12 kartu pertama saja | GSAP batch |
| Katalog | Ganti filter/urutan | Kartu berpindah halus ke posisi baru | GSAP **Flip** |
| Katalog | Panel filter mobile | Offcanvas bawaan Bootstrap (jangan ditimpa) | Bootstrap |
| Detail | Galeri | Ganti gambar utama dengan fade 0.25s | GSAP/CSS |
| Detail | Grafik frekuensi | Garis tergambar saat terlihat | GSAP (DrawSVG) atau Anime.js |
| Keranjang | Item dihapus | Keluar dengan geser + mengecil, sisanya naik mengisi | GSAP Flip |
| Checkout | - | **Tanpa animasi gulir/reveal.** Hanya validasi form dan transisi langkah ringan | CSS |
| Wishlist | Ikon hati | "Pop" kecil saat ditandai | GSAP/Anime.js |

Batas: satu rangkaian animasi besar per layar (hero), sisanya ringan.

### 9.7 Anime.js (opsional)

GSAP sudah mampu semua yang dilakukan Anime.js. Memakai keduanya berarti dua library dan dua API tanpa kemampuan baru, jadi **tidak wajib**. Jika tetap dipakai (misalnya untuk belajar), batasi pada:

- animasi mikro event-driven (badge keranjang, ikon hati),
- penggambaran garis grafik frekuensi (SVG),
- penghitung angka di bagian kepercayaan.

```js
// Sintaks Anime.js v4, cek dokumentasi untuk versi yang terpasang
import { animate, svg } from "animejs";

export const bumpBadge = (el) => animate(el, { scale: [1, 1.35, 1], duration: 300, ease: "outBack" });
export const drawLine = (sel) => animate(svg.createDrawable(sel), { draw: ["0 0", "0 1"], duration: 1200, ease: "inOutQuad" });
```

Tidak untuk animasi terikat scroll, reveal grid, hero, atau Flip. Tambahkan hanya di tahap poles.

---

## 10. Aksesibilitas

- Kontras ≥ 4.5:1 (lihat 2.5). Teks beraksen memakai `--accent-strong`.
- Status stok/harga tidak hanya dibedakan warna: selalu ikon + teks.
- Semua gambar punya `alt`, ikon tombol punya `aria-label`.
- Navigasi penuh via keyboard, fokus terlihat.
- Target sentuh minimal 44x44 px di mobile.
- Satu `h1` per halaman, heading berurutan.
- Hormati `prefers-reduced-motion`: Lenis mati, reveal dan parallax mati, konten langsung tampil.
- Tidak ada animasi berkedip lebih dari 3 kali per detik.
- Jangan menyembunyikan informasi penting (harga, stok, tombol beli) di balik animasi yang belum selesai.
- `aria-live="polite"` pada toast dan jumlah keranjang.

### Performa

- Muat GSAP/ScrollTrigger/Flip hanya di halaman yang membutuhkan (impor dinamis).
- `once: true` pada reveal. Bungkus animasi dalam `gsap.context()` dan `ctx.revert()` sebelum render ulang.
- Batasi total stagger (maks. 0.5s) dan jumlah elemen teranimasi per layar.
- Target Lighthouse Performance tetap ≥ 85 setelah animasi ditambahkan. Jika turun, kurangi animasi.

---

## 11. Yang Tidak Boleh Dilakukan

- Lebih dari satu warna aksen.
- **Menaruh foto berlatar putih di atas latar gelap** (di mode gelap, foto selalu di kotak foto terang).
- Memakai `--accent` untuk teks kecil di latar terang (pakai `--accent-strong`).
- Pita gelap lebih dari sekitar 15% halaman.
- Pop-up diskon yang muncul langsung saat halaman dibuka.
- Auto-play audio/video.
- Menyembunyikan ongkir atau biaya tambahan sampai langkah terakhir.
- Spek penting hanya dalam gambar (tidak bisa dicari/dibaca pembaca layar).
- Badge dan label berwarna di setiap kartu sampai semua terlihat penting.
- Class grid/utilitas Bootstrap di luar komponen yang diizinkan.
- Menganimasikan elemen yang sama dengan dua mesin, atau menganimasikan `width/height/top/left`.
- Scroll-jacking agresif, intro panjang, atau Lenis di halaman checkout.

---

## 12. Checklist Sebelum Rilis

**Tampilan & foto**
- [ ] 10 foto uji (latar putih, abu muda, dan satu tidak rata) tampil rapi di kartu katalog, detail, dan mini-cart
- [ ] Tidak ada tepi persegi mencolok di sekitar produk
- [ ] Aksen tembaga tidak terasa kusam di layar HP dan laptop (jika kusam, uji `#C2410C` atau `#A16207` yang tetap lulus 4.5:1 dengan teks putih)
- [ ] Pita gelap tidak melebihi sekitar 15% halaman
- [ ] Rapi di 360px, 768px, 1280px, tanpa gulir horizontal pada halaman

**Stack**
- [ ] Utilitas Tailwind menimpa gaya Bootstrap pada navbar (cek DevTools)
- [ ] Tidak ada class grid/utilitas Bootstrap di luar komponen yang diizinkan
- [ ] Breakpoint navbar Bootstrap dan Tailwind sinkron (992px)
- [ ] CSS Bootstrap hanya subset
- [ ] Dosen mengonfirmasi porsi Bootstrap 10% dapat diterima

**Gerak**
- [ ] Lenis tersinkron dengan ScrollTrigger, mati di checkout dan saat reduced-motion
- [ ] Offcanvas/modal menghentikan Lenis dan punya `data-lenis-prevent`
- [ ] Konten tetap terlihat bila JS gagal atau gerak dimatikan
- [ ] Tidak ada elemen yang dianimasikan dua mesin sekaligus

**Toko**
- [ ] Beranda menjelaskan apa yang dijual dan keunggulan toko dalam satu layar
- [ ] Filter audio (driver, konektor, plug, signature, impedansi) berfungsi
- [ ] Halaman produk punya galeri, spek, stok, garansi, ulasan
- [ ] Bar "Tambah ke Keranjang" sticky di mobile
- [ ] Ongkir dan total terlihat sebelum checkout akhir
- [ ] Halaman Garansi, Retur, dan Kontak tersedia

**Kualitas**
- [ ] Kontras lulus, fokus keyboard terlihat
- [ ] Gambar dikompres, Lighthouse Performance ≥ 85 dan Accessibility ≥ 90
- [ ] Tidak ada galat di console