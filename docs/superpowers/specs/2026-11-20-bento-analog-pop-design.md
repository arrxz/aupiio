# Rombak Total aupiio: Bento "Warm Analog Pop"

Tanggal: 2026-11-20

## Intent

Pemilik merasa desain aupiio (tema Amber Paper) "terlalu generic dan biasa-biasa saja". Yang diinginkan: tampilan yang beda dan gampang diingat, palet warna baru, layout bento grid, dan rombak total seluruh situs. Prioritasnya enak dipandang. Kerumitan teknis tidak jadi masalah.

Arah visual yang dipilih dari tiga mockup adalah **B · Warm Analog Pop**: alas krem dengan blok warna berani, tipografi tebal yang ekspresif, motif piringan hitam, dan rasa toko rekaman indie. Mockup ada di `.superpowers/brainstorm/*/content/arah-desain.html` (kartu B).

## Goals

- Semua 7 halaman (`index`, `catalog`, `product-detail`, `cart`, `checkout`, `about`, `contact`) memakai palet, font, dan bahasa kartu yang baru.
- `index.html` menjadi bento penuh: satu komposisi grid kartu dengan ukuran bervariasi.
- Header dan footer identik di semua halaman.
- Situs tetap jalan di mobile (375px) tanpa scroll horizontal.

## Non-goals

- Tidak menambah fitur baru (wishlist, halaman panduan, search yang berfungsi, filter yang berfungsi).
- Tidak mengubah logika cart (`assets/js/cart.js`, localStorage `aupiio_cart`) dan data produk (`assets/js/products.js`), kecuali markup yang dirender JS ikut di-restyle.
- Dark mode tidak wajib. Token dark lama dihapus, dan situs cukup satu tema terang.
- Tidak memperbaiki `dist/` yang tidak menyertakan script klasik `assets/js/*` (masalah lama, di luar scope).

## Anti-goals (gagal walau "jalan")

- Masih terasa template generic: kartu putih seragam, bayangan halus, aksen satu warna.
- Warna berani dipakai sampai teks sulit dibaca. Kontras teks wajib ≥ 4.5:1 (≥ 3:1 untuk teks besar ≥ 24px atau bold ≥ 18.66px).
- Form checkout dan cart dipecah jadi bento sehingga alur bayar membingungkan.
- Animasi berlebihan yang menunda konten. Konten di layar pertama harus langsung terlihat.

## Constraints

- Stack tetap: HTML statis multi-halaman, Tailwind v4 (`src/css/app.css` → `npm run css` → `assets/css/style.css`), Vite untuk dev dan build, script klasik di `assets/js/` (ui.js, cart.js, main.js, products.js, content.js), GSAP + Lenis via CDN, ikon `bootstrap-icons`.
- Halaman tetap bisa dibuka langsung dari file (`file://`), jadi tanpa partial dan tanpa plugin build baru.
- Hormati `prefers-reduced-motion` (fallback sudah ada di main.js dan app.css).
- Teks dan klaim mengikuti aturan di `assets/js/content.js`: tanpa klaim fiktif.

## Approaches

1. **Rombak di tempat (dipilih).** Ganti token dan font di `app.css`, lalu tulis ulang markup tiap halaman. Header dan footer disalin dari satu versi acuan. Tidak ada tooling baru dan tetap bisa dibuka via `file://`.
2. **Rombak plus partial HTML** lewat plugin Vite. Header cukup ditulis sekali, tapi ada dependency baru dan `file://` tidak bisa lagi dipakai. Hasil visualnya identik dengan nomor 1.
3. **Bertahap** (index dulu). Hasil cepat terlihat, tapi tampilan tidak konsisten selama transisi.

Pemilik menyerahkan pilihan ("yang penting enak dipandang"). Dipilih nomor 1 karena hasil visualnya sama dengan nomor 2 tanpa menambah tooling. Ini keputusan builder, bukan pilihan pemilik.

## Sistem Visual

### Palet (token di `app.css`, menggantikan Amber Paper)

| Token | Hex | Peran |
|---|---|---|
| `--bg` | `#F3EDE2` | alas krem halaman |
| `--paper` | `#FFFBF4` | kartu terang |
| `--ink` | `#1A1714` | teks utama, garis tebal, kartu gelap |
| `--ink-muted` | `#5C544B` | teks sekunder (kontras ≥ 4.5:1 di `--bg`, harus diverifikasi) |
| `--tomato` | `#E2412E` | aksen utama / CTA / kartu hero |
| `--cobalt` | `#2D4BD8` | aksen kedua |
| `--mustard` | `#F2B33D` | aksen ketiga (teks di atasnya selalu `--ink`) |
| `--line` | `#1A1714` | border kartu terang (2px) |
| `--ok` / `--bad` | pertahankan semantik, sesuaikan kontras | status stok / hapus |

Teks putih (`#FFF6EA`) hanya di atas `--tomato` (untuk teks besar/bold), `--cobalt`, dan `--ink`. Putih di atas tomato terukur ±3.9:1, jadi teks kecil di kartu tomato memakai `--ink`, sedangkan putih hanya untuk teks besar/bold.

Nama class Tailwind mengikuti token (`bg-tomato`, `text-ink`, `bg-paper`, dan seterusnya). Token lama (`accent`, `surface`, `band`, `photo-tile`, dll.) dihapus, dan semua pemakaiannya diganti.

### Tipografi

- **Bricolage Grotesque** 500/800: judul (800, tracking rapat, leading ±0.95) dan UI/body (500).
- **Instrument Serif** italic: kutipan, testimoni, aksen satu-dua kata di headline.
- **JetBrains Mono** 500/700: harga, spesifikasi, label kecil uppercase.
- Fraunces, Inter, dan IBM Plex Mono dihapus dari link Google Fonts di semua halaman.

### Bahasa kartu

- Radius besar (±20px) untuk kartu, pill penuh untuk tombol dan chip.
- Kartu terang: `bg-paper` + border 2px `--ink`. Kartu warna: blok solid tanpa border. Tanpa bayangan blur. Kalau perlu kedalaman, pakai offset shadow keras (`4px 4px 0 var(--ink)`) dan hanya saat hover/aktif.
- Gap grid seragam (±12px mobile, ±16px desktop).
- Motif piringan hitam (lingkaran beralur, CSS `repeating-radial-gradient`) sebagai dekorasi di kartu hero, dan boleh muncul 1–2 kali lagi di situs. Dekorasi wajib `aria-hidden`.
- Foto produk tetap di ubin terang (`--paper`) agar foto ber-background putih menyatu.

### Gerak

- Pertahankan GSAP reveal dan Lenis yang ada. Elemen di atas lipatan pertama tidak boleh disembunyikan menunggu animasi.
- Hover kartu: geser kecil (translate −2px) + offset shadow keras. Piringan hitam boleh berputar pelan saat hover (dimatikan saat reduced motion).

## Struktur per Halaman

### Header & footer (semua halaman)

- Header: wordmark "aupiio" (Bricolage 800), nav kategori, tombol search (membuka panel), dan tombol keranjang pill tomato dengan badge. Link kategori yang tidak muat di lebar 992–1279px masuk ke menu "Kategori" (dropdown `ui.js`) supaya navbar tidak melebar.
- Mobile: wordmark + search + keranjang + hamburger (ukuran sama, ≥ 44px target sentuh).
- Footer: blok `--ink` dengan grid tautan + wordmark besar. Tanpa teks "Stack: ...".
- Link mati diarahkan ulang: `produk.html?kategori=x` → `catalog.html?cat=x`. Tautan `wishlist.html` dan `panduan.html` dihapus atau diarahkan ke halaman yang ada (`about.html` untuk panduan). Ikon wishlist dihapus dari header.

### index.html: bento penuh

Satu komposisi grid desktop 4 kolom (mobile 2 kolom, kartu besar full-width), urutan baca kiri-atas ke kanan-bawah:

1. **Hero** (2×2, tomato): headline dari `COPY.hero`, CTA, piringan hitam.
2. **Produk pilihan utama** (2×2, paper): foto 7Hz Timeless + 3 spek mono + harga.
3. **Ubin kategori** (1×1 masing-masing, warna bergantian cobalt/mustard/paper/ink): IEM, DAC/Amp, DAP, TWS, Kabel, Eartips, Aksesoris.
4. **Sound signature** (lebar 2–4, ink): chip Warm/Neutral/V-shaped/Bright/Bassy/Analitis yang menautkan ke catalog.
5. **Produk unggulan**: kartu produk dari data yang sudah ada. Satu di antaranya boleh berukuran 2×1 sebagai sorotan.
6. **Trust** (4 ubin kecil, dari `COPY` trust/feature).
7. **Testimoni** (2×1, ink, Instrument Serif italic). Kutipan yang ada dipertahankan, tapi label "Pembeli Terverifikasi" dihapus dan diberi komentar `<!-- DATA CONTOH -->` sesuai aturan `content.js`. *(Keputusan builder.)*
8. **Panduan** (2×1, paper).

Detail pembagian sel, jumlah produk yang tampil, dan breakpoint tablet diserahkan ke builder, selama hero dan produk pilihan tetap di baris pertama desktop.

### catalog.html

- Sidebar filter tetap (desktop) / offcanvas (mobile), di-restyle jadi kartu paper ber-border tebal.
- Grid produk bento ringan: 3 kolom desktop, kartu produk pertama atau unggulan 2×2. Chip sound signature berwarna.

### product-detail.html

- Galeri (kiri) dan info + CTA (kanan) tetap dua kolom.
- Spesifikasi (driver, impedansi, sensitivitas, konektor, dll.) jadi ubin bento kecil berwarna di bawah, menggantikan tabel. Kalau ada data yang tidak cocok jadi ubin, tabel boleh dipertahankan di bawahnya.

### cart.html & checkout.html

- Palet, font, kartu, dan tombol baru. Layout tetap: daftar/form satu kolom + ringkasan di samping (desktop) / di bawah (mobile).
- Form: label terhubung ke input (`for`/`id`), input ber-border 2px ink, fokus jelas.
- Perbaiki teks ongkir yang kontradiktif: samakan cart dan checkout (angka atau aturan gratis ongkir yang sama di kedua halaman). Angka contoh boleh tetap, yang penting konsisten.

### about.html & contact.html

- Restyle dengan bahasa kartu baru. Konten tetap. Boleh pakai susunan bento untuk blok nilai/fitur.

## Diserahkan ke builder

- Pembagian sel bento persis tiap breakpoint, selama aturan di atas terpenuhi.
- Pilihan warna ubin individual (menjaga variasi dan kontras).
- Ikon per kategori (pakai ikon yang sudah ada / bootstrap-icons).
- Restyle markup yang dirender JS (`updateCartUI`, mini-cart) mengikuti bahasa kartu baru.
- Memperbarui dokumentasi (`README.md`, `AUDIO-STORE-STYLE.md`) agar sesuai tema baru.

## Verifikasi

- `npm run build` lulus, dan semua halaman dicek di browser pada 375px, 1024px, dan 1280px tanpa scroll horizontal.
- Kontras token utama dicek (teks body, teks muted, teks putih di atas tomato/cobalt).
- Nav, dropdown, offcanvas, mini-cart, add-to-cart, dan hapus item tetap berfungsi.

## Keputusan implementasi (2026-11-21)

- Nama token lama dipertahankan (`accent`, `surface`, `band`, dst.) dengan nilai baru, ditambah `cobalt`, `mustard`, dan `font-serif`. Dengan begitu tidak perlu mengganti class di tiap halaman.
- Tomat: `--accent #C8361F` (teks putih 5.25:1) dan `--accent-strong #B32D1B` untuk teks merah di atas krem (5.45:1). `#E2412E` tidak dipakai karena kontrasnya kurang.
- Tanpa filter katalog. Ubin kategori di bento hanya IEM, DAC/Amp, Aksesoris, dan Katalog. DAP, TWS, Kabel, dan Eartips dibuang karena belum ada produknya.
- Ongkir flat Rp 18.000. Cart sekarang sama dengan checkout (total Rp 503.000).
- Header dan footer seragam di semua halaman, kecuali checkout yang memakai header minimal. Wishlist dihapus dari header.
- Spesifikasi product-detail tetap berupa tabel (belum jadi ubin bento).
