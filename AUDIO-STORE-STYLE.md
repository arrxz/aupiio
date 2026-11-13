# AUDIO-STORE-STYLE.md — Amber Studio

Panduan style web e-commerce khusus audiophile: IEM, DAC/Amp, DAP, TWS, kabel, eartips, dan aksesoris. Patokan utama untuk Bootstrap 5.3, dengan padanan Tailwind di bagian akhir.

> Nama toko di dokumen ini memakai placeholder **`[NamaToko]`**. Ganti sesuai pilihanmu.

---

## 1. Konsep & Tema

**Tema: "Amber Studio"**: nuansa ruang dengar malam hari. Latar gelap hangat seperti panel studio, dengan satu aksen amber seperti cahaya tabung vakum (vacuum tube) pada amplifier hi-fi.

| Aspek | Keputusan | Alasan |
|---|---|---|
| Mood | Hangat, tenang, premium, teknis tapi tidak dingin | Audiophile menghabiskan waktu lama membaca spesifikasi dan ulasan |
| Mode utama | Dark hangat (bukan hitam murni) | Produk berbahan logam/resin tampil menonjol, nyaman di mata saat malam |
| Mode tambahan | Light "Paper" (opsional, toggle) | Sebagian orang lebih nyaman membaca spek panjang di mode terang |
| Aksen | Satu warna: amber/champagne | Konsisten, mudah dikenali, tidak melelahkan |
| Karakter | Detail teknis dihormati (tabel spek, grafik, tag signature) | Audiophile mempercayai data, bukan slogan |

### Prinsip UX agar pengunjung betah

Warna hanya sebagian kecil. Yang membuat orang betah dan akhirnya membeli:

1. **Cepat.** Halaman termuat di bawah 3 detik di HP, gambar WebP dan lazy-load.
2. **Mudah menyaring.** Filter spesifik audio (jenis driver, impedansi, konektor, signature) lebih berharga dari animasi.
3. **Data jelas.** Harga, stok, spek, dan garansi terlihat tanpa harus dicari.
4. **Dipercaya.** Keaslian barang, garansi, kebijakan retur, dan ulasan nyata ditampilkan terang-terangan.
5. **Tidak mengganggu.** Tanpa pop-up agresif, auto-play suara, atau banner berkedip.
6. **Membantu memilih.** Fitur bandingkan produk dan rekomendasi "cocok untuk" menekan kebingungan.

---

## 2. Color Palette

### 2.1 Token warna (Dark, default)

| Token | Hex | Fungsi |
|---|---|---|
| `--bg` | `#14110F` | Latar halaman |
| `--surface` | `#1C1815` | Kartu produk, header, footer, panel filter |
| `--surface-2` | `#26211D` | Hover, input, tabel baris selang-seling |
| `--border` | `#3A332D` | Garis pembatas |
| `--text` | `#F2EBE3` | Teks utama |
| `--text-muted` | `#A39A90` | Teks sekunder, label spek |
| `--accent` | `#D9A441` | Tombol utama, harga promo, link, ikon aktif |
| `--accent-hover` | `#E8BA62` | Hover aksen |
| `--accent-ink` | `#14110F` | Teks di atas tombol aksen |
| `--success` | `#6FCF97` | Stok tersedia, berhasil |
| `--warning` | `#F2C94C` | Stok menipis (hindari mirip aksen: pakai dengan ikon) |
| `--danger` | `#F26B5B` | Habis, error, validasi |

### 2.2 Aturan 60-30-10

| Porsi | Warna | Dipakai untuk |
|---|---|---|
| **60%** dominan | `--bg` `#14110F` | Latar halaman, ruang napas antar section |
| **30%** sekunder | `--surface` `#1C1815` | Header, kartu produk, panel filter, section selang-seling, footer |
| **10%** aksen | `--accent` `#D9A441` | Tombol "Tambah ke Keranjang", harga, badge, ikon keranjang, garis aktif |

Warna teks dan warna status (success/warning/danger) tidak dihitung dalam 60-30-10. Jika amber terlihat di lebih dari sekitar 10% layar, kurangi.

### 2.3 Light mode "Paper" (opsional)

| Token | Hex |
|---|---|
| `--bg` | `#FAF7F2` |
| `--surface` | `#FFFFFF` |
| `--surface-2` | `#F1ECE4` |
| `--border` | `#DDD5C9` |
| `--text` | `#1F1B17` |
| `--text-muted` | `#6B6359` |
| `--accent` | `#9A6A12` |
| `--accent-hover` | `#7E560C` |
| `--accent-ink` | `#FFFFFF` |

Aksen di mode terang sengaja lebih gelap agar tetap lulus kontras.

### 2.4 Cek kontras (perkiraan)

| Pasangan | Rasio | Status |
|---|---|---|
| `--text` di `--bg` | ±15:1 | Lulus |
| `--text-muted` di `--bg` | ±6.3:1 | Lulus |
| `--text-muted` di `--surface` | ±5.6:1 | Lulus |
| `--accent` di `--bg` | ±8.5:1 | Lulus |
| `--accent-ink` di `--accent` | ±8.5:1 | Lulus |
| Aksen Paper di `#FAF7F2` | ±4.9:1 | Lulus |

Verifikasi ulang dengan WebAIM Contrast Checker jika ada perubahan warna.

---

## 3. Tipografi

| Peran | Font | Keterangan |
|---|---|---|
| Display (hero, judul section) | **Fraunces** 600 | Serif hangat, kesan premium. Hanya untuk judul besar |
| UI & body | **Inter** 400/500/600 | Terbaca jelas untuk deskripsi, tombol, menu |
| Data spek & harga | **IBM Plex Mono** 500 | Angka rata (`font-variant-numeric: tabular-nums`), kesan teknis |

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
| Section padding | `5rem` desktop, `3rem` mobile |
| Gap grid produk | `1.25rem` mobile, `1.5rem` desktop |
| Radius kartu | `14px` |
| Radius tombol / input | `10px` |
| Radius chip / badge | `999px` |
| Shadow kartu | `0 1px 0 rgba(255,255,255,.04) inset, 0 10px 28px rgba(0,0,0,.4)` |
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

```
┌────────────────────────────────────────────────────────────────┐
│ TOP BAR  Gratis ongkir min. Rp xxx · Garansi resmi             │  ← tipis, --surface-2
├────────────────────────────────────────────────────────────────┤
│ HEADER  [Logo]  [ 🔍 Cari IEM, DAC, kabel...       ]  ♡  🛒(2) │  ← sticky, --surface
│ NAV     IEM  DAC/Amp  DAP  TWS  Kabel  Eartips  Aksesoris Panduan│
├────────────────────────────────────────────────────────────────┤
│ HERO                                                           │  ← --bg
│  ┌──────────────────────────────┐  ┌──────────────────────┐    │
│  │ Dengar detail yang sebelumnya │  │                      │    │
│  │ tersembunyi.                 │  │  Foto produk unggulan │    │
│  │ Sub: 1 kalimat nilai toko    │  │  (cutout, cahaya amber)│   │
│  │ [Belanja Sekarang] [Panduan] │  │                      │    │
│  └──────────────────────────────┘  └──────────────────────┘    │
├────────────────────────────────────────────────────────────────┤
│ KATEGORI  (6-7 ubin ikon/gambar)                               │  ← --surface
│  [IEM] [DAC/Amp] [DAP] [TWS] [Kabel] [Eartips] [Aksesoris]     │
├────────────────────────────────────────────────────────────────┤
│ CARI BERDASARKAN KARAKTER SUARA                                │  ← --bg
│  [Warm] [Neutral] [V-shaped] [Bright] [Bassy] [Analitis]       │
├────────────────────────────────────────────────────────────────┤
│ PRODUK UNGGULAN  (4 kartu, carousel di mobile)                 │
│  ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐                       │
│  │ foto  │ │ foto  │ │ foto  │ │ foto  │                       │
│  │ nama  │ │ nama  │ │ nama  │ │ nama  │                       │
│  │ Rp xxx│ │ Rp xxx│ │ Rp xxx│ │ Rp xxx│                       │
│  └───────┘ └───────┘ └───────┘ └───────┘                       │
├────────────────────────────────────────────────────────────────┤
│ KENAPA BELANJA DI SINI                                         │  ← --surface
│  ✔ 100% Original  ✔ Garansi  ✔ Retur 7 hari  ✔ Konsultasi      │
├────────────────────────────────────────────────────────────────┤
│ PANDUAN TERBARU (3 artikel)  +  ULASAN PELANGGAN               │  ← --bg
├────────────────────────────────────────────────────────────────┤
│ FOOTER  Tentang · Kontak · Garansi · Pengiriman · Sosmed       │  ← --surface
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
│  └────────────────────────┘  │ ★ 4.8 (23 ulasan)               │
│  [th][th][th][th]            │ Rp 1.250.000   [coret harga]    │
│                              │ Tag: [Warm] [Hybrid] [2-pin]    │
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

### 5.6 Pemetaan grid Bootstrap

| Bagian | Class kunci |
|---|---|
| Grid produk | `row g-3 g-lg-4`, kartu `col-6 col-md-4 col-xl-3` |
| Listing + filter | `col-lg-3` (filter), `col-lg-9` (produk); mobile: `offcanvas` |
| Detail produk | `col-lg-7` (galeri), `col-lg-5` (info) |
| Kategori | `row row-cols-3 row-cols-md-4 row-cols-lg-7` |
| Header | `navbar navbar-expand-lg sticky-top` |

---

## 6. Komponen Utama

### 6.1 Kartu produk
- Foto rasio `1:1`, latar `--surface-2`, `object-fit: contain`.
- Hover (desktop): ganti ke foto kedua, tampil tombol "Tambah" dan checkbox "Bandingkan".
- Isi: brand (muted kecil) → nama (maks 2 baris) → tag signature → harga mono → status stok.
- Badge: `Baru`, `Promo`, `Terbatas` (maks 1 per kartu).

### 6.2 Tag karakter suara (chip)
`Warm` `Neutral` `V-shaped` `Bright` `Bassy` `Analitis`. Gaya: border `--border`, teks `--text-muted`, aktif berlatar aksen transparan.

### 6.3 Tabel spesifikasi
Dua kolom: label `--text-muted`, nilai `IBM Plex Mono`. Baris selang-seling `--surface-2`. Dapat disalin per baris (opsional).

### 6.4 Grafik respons frekuensi
Gambar/SVG grafik dengan latar `--surface`, garis aksen. Sediakan alt text yang menjelaskan ringkasan (misal: "bass terangkat, treble halus").

### 6.5 Bandingkan produk
Pilih 2-4 produk, tampil tabel sejajar dengan baris spek yang berbeda ditandai halus (bukan warna menyala).

### 6.6 Bar kepercayaan (trust)
Ikon garis tipis + teks pendek: Original, Garansi, Retur, Konsultasi via WhatsApp.

### 6.7 Status stok
`Tersedia` (hijau + ikon), `Sisa sedikit` (kuning + ikon), `Habis` (merah + tombol "Beritahu saya"). Jangan mengandalkan warna saja, selalu sertakan ikon/teks.

---

## 7. Implementasi Bootstrap 5.3

### 7.1 Aktifkan tema

```html
<html lang="id" data-bs-theme="dark">
```

### 7.2 `css/theme.css` (muat setelah `bootstrap.min.css`)

```css
:root,
[data-bs-theme="dark"] {
  --bg: #14110F;
  --surface: #1C1815;
  --surface-2: #26211D;
  --border: #3A332D;
  --text: #F2EBE3;
  --text-muted: #A39A90;
  --accent: #D9A441;
  --accent-hover: #E8BA62;
  --accent-ink: #14110F;
  --success: #6FCF97;
  --warning: #F2C94C;
  --danger: #F26B5B;

  --bs-body-bg: var(--bg);
  --bs-body-color: var(--text);
  --bs-secondary-color: var(--text-muted);
  --bs-border-color: var(--border);
  --bs-link-color: var(--accent);
  --bs-link-hover-color: var(--accent-hover);
  --bs-body-font-family: "Inter", system-ui, -apple-system, "Segoe UI", sans-serif;
}

[data-bs-theme="light"] {
  --bg: #FAF7F2; --surface: #FFFFFF; --surface-2: #F1ECE4; --border: #DDD5C9;
  --text: #1F1B17; --text-muted: #6B6359;
  --accent: #9A6A12; --accent-hover: #7E560C; --accent-ink: #FFFFFF;
}

h1, h2 { font-family: "Fraunces", Georgia, serif; font-weight: 600; }
h3, h4, h5 { font-weight: 600; }
.mono { font-family: "IBM Plex Mono", ui-monospace, monospace; font-variant-numeric: tabular-nums; }

section { padding: 5rem 0; }
@media (max-width: 767.98px) { section { padding: 3rem 0; } }
.section-alt { background: var(--surface); }
html { scroll-behavior: smooth; }

/* Header */
.site-header { background: var(--surface); border-bottom: 1px solid var(--border); }
.site-header .nav-link { color: var(--text-muted); }
.site-header .nav-link:hover,
.site-header .nav-link.active { color: var(--accent); }

/* Tombol */
.btn-accent {
  background: var(--accent); color: var(--accent-ink);
  border: 1px solid var(--accent); border-radius: 10px; font-weight: 600;
  transition: all .2s ease;
}
.btn-accent:hover { background: var(--accent-hover); border-color: var(--accent-hover); color: var(--accent-ink); }
.btn-ghost {
  background: transparent; color: var(--text);
  border: 1px solid var(--border); border-radius: 10px;
}
.btn-ghost:hover { border-color: var(--accent); color: var(--accent); }

/* Kartu produk */
.product-card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: 14px; overflow: hidden; height: 100%;
  box-shadow: 0 1px 0 rgba(255,255,255,.04) inset, 0 10px 28px rgba(0,0,0,.4);
  transition: transform .2s ease, border-color .2s ease;
}
.product-card:hover { transform: translateY(-3px); border-color: var(--accent); }
.product-card .thumb { aspect-ratio: 1 / 1; background: var(--surface-2); }
.product-card .thumb img { width: 100%; height: 100%; object-fit: contain; }
.product-card .brand { font-size: .78rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: .06em; }
.product-card .price { font-family: "IBM Plex Mono", monospace; font-size: 1.15rem; color: var(--accent); }

/* Chip signature */
.chip {
  font-size: .78rem; color: var(--text-muted);
  border: 1px solid var(--border); border-radius: 999px; padding: .15rem .65rem;
}
.chip.active { color: var(--accent); border-color: var(--accent); background: rgba(217,164,65,.1); }

/* Tabel spek */
.spec-table td { padding: .65rem .9rem; border-color: var(--border); }
.spec-table td:first-child { color: var(--text-muted); width: 40%; }
.spec-table td:last-child { font-family: "IBM Plex Mono", monospace; }
.spec-table tr:nth-child(even) { background: var(--surface-2); }

/* Sticky add-to-cart (mobile) */
.sticky-buy {
  position: fixed; inset: auto 0 0 0; z-index: 1030;
  background: var(--surface); border-top: 1px solid var(--border);
  padding: .75rem 1rem calc(.75rem + env(safe-area-inset-bottom, 0px));
}
@media (min-width: 992px) { .sticky-buy { display: none; } }

:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
  html { scroll-behavior: auto; }
}
```

### 7.3 Contoh kartu produk

```html
<div class="col-6 col-md-4 col-xl-3">
  <article class="product-card">
    <a href="/produk/nama-produk" class="d-block thumb">
      <img src="img/p1.webp" alt="Nama Produk, IEM hybrid warna hitam" loading="lazy">
    </a>
    <div class="p-3">
      <div class="brand">Brand</div>
      <h3 class="h6 mb-2">Nama Produk</h3>
      <div class="d-flex flex-wrap gap-1 mb-2">
        <span class="chip">Warm</span><span class="chip">Hybrid</span>
      </div>
      <div class="price mb-1">Rp 1.250.000</div>
      <small style="color:var(--success)">● Stok tersedia</small>
    </div>
  </article>
</div>
```

---

## 8. Interaksi yang Membuat Betah

| Fitur | Perilaku |
|---|---|
| Pencarian instan | Saran produk muncul saat mengetik, tanpa reload |
| Filter tanpa reload | Hasil diperbarui, chip filter aktif bisa dihapus satu per satu |
| Skeleton loading | Kerangka kartu abu saat memuat, bukan layar kosong |
| Mini-cart | Klik ikon keranjang membuka offcanvas ringkas, tanpa pindah halaman |
| Wishlist & bandingkan | Tersimpan di perangkat (localStorage) untuk tamu |
| Toast konfirmasi | "Ditambahkan ke keranjang" singkat, tidak menutupi tombol |
| Lacak terakhir dilihat | Baris "Terakhir kamu lihat" di beranda/detail |
| Konsultasi cepat | Tombol WhatsApp di pojok, tidak berkedip |
| Notifikasi stok | "Beritahu saya" untuk produk habis |

Animasi dibatasi: transisi 200 ms, tanpa parallax berat, hormati `prefers-reduced-motion`.

---

## 9. Gaya Foto & Konten

- Foto produk: latar netral gelap atau cutout bersih, pencahayaan hangat, minimal 3 sudut (depan, samping, detail konektor) plus foto skala.
- Resolusi 1200px sisi terpanjang, simpan WebP, di bawah 150 KB per foto.
- Deskripsi: mulai dari karakter suara dan untuk siapa produk cocok, baru spek teknis.
- Hindari klaim berlebihan ("terbaik di dunia"). Audiophile menyukai deskripsi jujur, lengkap dengan kekurangan.
- Judul produk: `Brand Model, jenis, fitur kunci` (konsisten untuk SEO).

---

## 10. Aksesibilitas

- Kontras ≥ 4.5:1 (lihat 2.4).
- Status stok/harga tidak hanya dibedakan warna.
- Semua gambar punya `alt`, ikon tombol punya `aria-label`.
- Navigasi lengkap via keyboard, fokus terlihat.
- Target sentuh minimal 44x44 px di mobile.
- Satu `h1` per halaman, heading berurutan.

---

## 11. Yang Tidak Boleh Dilakukan

- Lebih dari satu warna aksen.
- Hitam murni `#000` sebagai latar (terlalu keras, foto terlihat mengambang).
- Pop-up diskon yang muncul langsung saat halaman dibuka.
- Auto-play audio/video.
- Menyembunyikan ongkir atau biaya tambahan sampai langkah terakhir.
- Spek penting hanya dalam gambar (tidak bisa dicari/dibaca pembaca layar).
- Badge dan label berwarna di setiap kartu sampai semua terlihat penting.

---

## 12. Padanan Tailwind (migrasi nanti)

```js
// tailwind.config.js
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        bg: "#14110F",
        surface: { DEFAULT: "#1C1815", 2: "#26211D" },
        line: "#3A332D",
        ink: { DEFAULT: "#F2EBE3", muted: "#A39A90" },
        accent: { DEFAULT: "#D9A441", hover: "#E8BA62", ink: "#14110F" },
        ok: "#6FCF97", warn: "#F2C94C", bad: "#F26B5B",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      borderRadius: { card: "14px" },
    },
  },
};
```

| Bootstrap | Tailwind |
|---|---|
| `row g-4` + `col-6 col-md-4 col-xl-3` | `grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-4` |
| `.product-card` | `bg-surface border border-line rounded-card overflow-hidden hover:-translate-y-1 hover:border-accent transition` |
| `.btn-accent` | `bg-accent text-accent-ink font-semibold rounded-[10px] px-5 py-2.5 hover:bg-accent-hover transition` |
| `.chip` | `text-xs text-ink-muted border border-line rounded-full px-2.5 py-0.5` |
| `.price` | `font-mono text-lg text-accent` |
| `.sticky-buy` | `fixed inset-x-0 bottom-0 z-40 bg-surface border-t border-line p-3 lg:hidden` |
| `offcanvas` (filter) | komponen drawer dengan `fixed inset-y-0 left-0 translate-x-...` |

Untuk light mode, gunakan `darkMode: "class"` dan definisikan token terang di CSS variable, lalu rujuk lewat `colors: { bg: "var(--bg)" }`.

---

## 13. Checklist Sebelum Rilis

- [ ] Beranda menjelaskan apa yang dijual dan keunggulan toko dalam satu layar
- [ ] Filter audio (driver, konektor, plug, signature, impedansi) berfungsi
- [ ] Halaman produk punya galeri, spek, stok, garansi, ulasan
- [ ] Bar "Tambah ke Keranjang" sticky di mobile
- [ ] Ongkir dan total terlihat sebelum checkout akhir
- [ ] Tampilan rapi di 360px, 768px, 1280px
- [ ] Kontras lulus, fokus keyboard terlihat
- [ ] Gambar dikompres, Lighthouse performa di atas 85
- [ ] Halaman Garansi, Retur, dan Kontak tersedia
