# aupiio

Toko online personal audio (IEM, DAC/Amp, aksesoris) untuk mata kuliah **Web Fundamental**. Situs statis multi-halaman dengan tema visual **Warm Analog Pop**: alas krem, blok warna tomat, kobalt, dan mustard, serta layout bento grid.

## Menjalankan

Butuh Node.js 18+.

```bash
npm install
npm run dev      # compile CSS lalu jalankan Vite di http://localhost:5173
npm run build    # compile CSS lalu build ke dist/
npm run preview  # pratinjau hasil build
```

Halaman juga bisa dibuka langsung dari file (`index.html`) karena CSS sudah ter-compile di `assets/css/style.css`. Setelah menambah atau mengubah class Tailwind di HTML, jalankan ulang `npm run css`. Dev server tidak meng-compile ulang CSS secara otomatis.

## Stack

| Bagian | Teknologi |
|---|---|
| Markup | HTML statis, 7 halaman |
| Styling | Tailwind CSS v4 (`src/css/app.css` ke `assets/css/style.css` lewat `@tailwindcss/cli`) |
| Interaksi UI | `assets/js/ui.js` (vanilla JS, pengganti Bootstrap JS) |
| Gerak | GSAP + ScrollTrigger + Lenis via CDN, plus animasi CSS |
| Ikon & font | Bootstrap Icons (icon font), Google Fonts: Bricolage Grotesque, Instrument Serif, JetBrains Mono |
| Dev server & build | Vite 6 |

Bootstrap (framework CSS/JS) sudah tidak dipakai. Yang tersisa hanya icon font `bootstrap-icons`.

## Halaman

| File | Isi |
|---|---|
| `index.html` | Beranda bento: hero, produk pilihan, kategori, sound signature, testimoni, produk, panduan |
| `catalog.html` | Katalog dengan filter (sidebar desktop, panel `<dialog>` di mobile) |
| `product-detail.html` | Galeri, panel beli, tabel spesifikasi, analisis suara |
| `cart.html` | Tabel keranjang, kode promo, ringkasan |
| `checkout.html` | Form 3 langkah: pengiriman, kurir, pembayaran |
| `about.html` | Cerita toko dan tiga pilar nilai |
| `contact.html` | Form konsultasi, info toko, FAQ |

## Struktur

```text
Web Iem/
├── *.html                    # 7 halaman (lihat tabel di atas)
├── src/
│   ├── css/app.css           # SUMBER styling: token, komponen, animasi
│   └── js/                   # versi ES module dari JS (belum dipakai halaman)
├── assets/
│   ├── css/style.css         # HASIL compile app.css (jangan diedit manual)
│   ├── js/
│   │   ├── ui.js             # collapse, dropdown, offcanvas, nav aktif, validasi form
│   │   ├── cart.js           # keranjang di localStorage (aupiio_cart)
│   │   ├── products.js       # data produk contoh + formatRupiah()
│   │   ├── content.js        # teks pemasaran beranda (COPY)
│   │   └── main.js           # Lenis, GSAP reveal, animasi hero, shadow header
│   └── images/
│       ├── logo/             # favicon
│       └── products/         # foto produk
├── docs/                     # dokumen desain (lihat docs/README.md)
├── AUDIO-STORE-STYLE.md      # sistem desain Warm Analog Pop
├── AUDIO-STORE-STACK-MOTION.md  # arsitektur teknis & sistem gerak
└── vite.config.js            # input build multi-halaman
```

## Fitur

- **Keranjang:** tersimpan di `localStorage`. Badge di header ter-update otomatis dan mini-cart terbuka setiap kali produk ditambahkan.
- **Navigasi:** halaman aktif ditandai pill hitam (`aria-current="page"`). Menu mobile dan panel pencarian slide turun saat dibuka.
- **Validasi form:** karakter terlarang disaring saat diketik (`data-allow`), pesan error inline berbahasa Indonesia, dan fokus otomatis ke field pertama yang salah.
- **Gerak:** micro animation global (tombol, kartu, foto, ikon panah) dan animasi panel serta dropdown. Semuanya mati saat `prefers-reduced-motion`.
- **Aksesibilitas:** label terhubung ke field, target sentuh header 44px, kontras token dicek (lihat `AUDIO-STORE-STYLE.md`).

## Mengubah tampilan

Semua styling bersumber dari `src/css/app.css`. Jangan edit `assets/css/style.css`, karena file itu ditimpa setiap compile.

- **Warna:** ubah variabel di blok `:root`. Nama class Tailwind (`bg-accent`, `text-ink`, `bg-cobalt`, dll.) mengikuti token ini.
- **Font dan radius:** ada di blok `@theme inline`.
- **Header dan footer:** markup-nya disalin ke setiap halaman (tanpa partial), jadi perubahan harus diterapkan ke semua file `.html`.

Detail token, kontras, dan aturan komponen ada di [`AUDIO-STORE-STYLE.md`](AUDIO-STORE-STYLE.md).

## Keterbatasan yang diketahui

- **Belum ada backend.** Form contact dan checkout tidak mengirim ke mana pun, dan validasinya hanya di browser (bisa dilewati). Kalau nanti ada server, validasi wajib diulang di sana.
- **Data contoh.** Harga, stok, testimoni, dan nomor WhatsApp (`6281234567890`) masih placeholder.
- **Filter katalog belum berfungsi.** Parameter `?cat=` dan `?sig=` hanya dipakai untuk penanda nav aktif, produk tidak difilter.
- **`dist/` tanpa JS.** Vite tidak menyalin script klasik di `assets/js/`, jadi hasil `npm run build` belum punya interaksi.
- **`cart.html` tidak punya dialog `#miniCart`**, sehingga tombol Keranjang di header halaman itu tidak membuka apa-apa.
- **Dropdown kustom** (`appearance: base-select`) hanya tampil di Chrome/Edge 135+. Browser lain memakai dropdown native.
