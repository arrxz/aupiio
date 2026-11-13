# 🎧 aupiio - E-Commerce Audiophile & In-Ear Monitors (IEM)

Proyek website e-commerce khusus personal audio, In-Ear Monitor (IEM), DAC/Amp, dan aksesoris audiophile untuk mata kuliah **Web Fundamental**. Dibangun menggunakan **HTML5**, **CSS3**, **JavaScript**, dan framework responsif **Bootstrap 5.3** dengan tema visual **"Amber Studio"** (mengacu pada panduan [AUDIO-STORE-STYLE.md](file:///d:/KAMPUS/Sem%203/Web%20Fundamental/Web%20Iem/AUDIO-STORE-STYLE.md)).

---

## 📂 Struktur Direktori Proyek

```text
Web Iem/
│
├── assets/                           # Folder aset statis
│   ├── css/
│   │   └── style.css                 # Custom styling & variabel palet warna
│   ├── js/
│   │   ├── main.js                   # Interaksi UI, scroll navbar, badge keranjang
│   │   ├── products.js               # Data dummy produk & spesifikasi audio (IEM, DAC, Tips)
│   │   └── cart.js                   # Logika penambahan keranjang (localStorage)
│   ├── images/
│   │   ├── banners/                  # Banner slider & promosi homepage
│   │   ├── brands/                   # Logo brand (Moondrop, Tangzu, FiiO, 7Hz, SpinFit)
│   │   ├── icons/                    # Favicon & icon audio
│   │   └── products/                 # Foto produk IEM, DAC, kabel, eartips
│   └── fonts/                        # Folder font lokal (opsional)
│
├── docs/                             # Tempat menyimpan dokumen perencanaan
│   └── README.md                     # Panduan integrasi wireframe & palet warna
│
├── index.html                        # Halaman Beranda (Hero, Featured Gear, Kategori)
├── catalog.html                      # Katalog Produk (Filter Driver, Sound Signature, Range Harga)
├── product-detail.html               # Halaman Detail Produk (Specs Teknis Audiophile, FR Graph, Review)
├── cart.html                         # Keranjang Belanja (Tabel Produk, Promo, Ringkasan)
├── checkout.html                     # Checkout & Pembayaran (Alamat Kirim, Pilihan QRIS/VA)
├── about.html                        # Tentang Kami & Filosofi Audiophile
├── contact.html                      # Bantuan Konsultan Audio, FAQ & Klaim Garansi
└── README.md                         # Dokumentasi panduan proyek
```

---

## 🌟 Fitur Khusus Dunia Audiophile yang Sudah Disediakan

1. **Filter Berbasis Spesifikasi Audio (`catalog.html`):**
   - **Tipe Driver:** Dynamic Driver (DD), Planar Magnetic, Balanced Armature (BA), Hybrid.
   - **Sound Signature:** Warm-Balanced, Neutral / Harman, V-Shape, Bright / Analytical.
2. **Tab Spesifikasi Audiophile (`product-detail.html`):**
   - Tabel driver configuration, impedance ($\Omega$), sensitivity (dB), pin connector (0.78mm 2-Pin / MMCX), jack plug termination (3.5mm SE vs 4.4mm Balanced).
   - Slot visual **Frequency Response Graph (FR Graph)**.
   - Analisis suara terbagi menjadi 4 pilar: _Bass, Midrange/Vokal, Treble, dan Soundstage_.
3. **Simulasi Keranjang Belanja (`cart.js` & `cart.html`):**
   - Menggunakan `localStorage` browser sehingga jumlah barang langsung terhitung dinamis pada badge navbar.
4. **Desain Mobile-First & Responsif:**
   - Menggunakan grid system Bootstrap 5.3 yang ramah diakses dari layar smartphone, tablet, maupun laptop.

---

## 🎨 Cara Menerapkan Palet Warna & Wireframe Anda

1. **Palet Warna:**
   - Buka file [`assets/css/style.css`](file:///d:/KAMPUS/Sem%203/Web%20Fundamental/Web%20Iem/assets/css/style.css).
   - Ubah variabel warna di dalam blok `:root` (`--audio-primary`, `--audio-secondary`, `--audio-gold`, dll.) sesuai kode HEX dari palet Anda.
2. **Wireframe & Desain:**
   - Simpan sketsa atau ekspor gambar desain di folder [`docs/`](file:///d:/KAMPUS/Sem%203/Web%20Fundamental/Web%20Iem/docs/).
3. **Gambar Produk & Banner:**
   - Letakkan foto-foto IEM / DAC di [`assets/images/products/`](file:///d:/KAMPUS/Sem%203/Web%20Fundamental/Web%20Iem/assets/images/products/) dan ganti placeholder icon di file HTML menjadi tag `<img src="assets/images/products/nama-file.png">`.

---

## 🚀 Cara Menjalankan Website

1. Buka folder proyek di VS Code.
2. Klik kanan pada [`index.html`](file:///d:/KAMPUS/Sem%203/Web%20Fundamental/Web%20Iem/index.html) lalu pilih **Open with Live Server** (jika ekstensi Live Server terpasang), atau cukup **klik ganda (double click)** file `index.html` untuk membukanya langsung di browser (Chrome, Edge, Firefox).
