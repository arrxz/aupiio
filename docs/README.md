
# Dokumentasi Desain & Wireframe (aupiio)

Folder ini disediakan khusus untuk menyimpan aset perencanaan, wireframe, rancangan UI/UX, dan catatan palet warna Anda sebelum atau selama implementasi kode HTML/Bootstrap.

---

## 📁 Struktur Rekomendasi Dalam Folder `docs/`

Anda dapat menambahkan file atau sub-folder berikut:

- `wireframes/` : Ekspor gambar / PDF dari Figma, Whimsical, atau sketsa kertas.
- `palette.md` : Catatan kode warna HEX/RGB yang telah Anda pilih.
- `specifications.md` : Catatan kebutuhan fitur atau daftar produk audio yang ingin dimasukkan.

---

## 🎨 Panduan Menghubungkan Palet Warna ke Kode

Setelah Anda menentukan palet warna, Anda tidak perlu mengubah setiap elemen satu per satu. Cukup buka:
👉 [`assets/css/style.css`](../assets/css/style.css)

Dan sesuaikan bagian `:root`:

```css
:root {
  /* Ganti kode warna sesuai palet pilihan Anda */
  --audio-primary: #0d6efd; /* Warna tombol utama & aksen */
  --audio-primary-hover: #0b5ed7; /* Warna hover tombol */
  --audio-secondary: #6c757d; /* Warna elemen netral */
  --audio-dark-bg: #121214; /* Latar belakang gelap (bila dark theme) */
  --audio-card-bg: #ffffff; /* Latar kartu produk */
  --audio-gold: #d4af37; /* Aksen signature/badge audiophile */
}
```
