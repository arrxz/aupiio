# Dokumentasi aupiio

Peta dokumen proyek. Mulai dari README di root untuk cara menjalankan dan gambaran umum.

| Dokumen | Isi | Kapan dibaca |
|---|---|---|
| [`../README.md`](../README.md) | Cara menjalankan, stack, struktur, fitur, keterbatasan | Pertama kali membuka proyek |
| [`../AUDIO-STORE-STYLE.md`](../AUDIO-STORE-STYLE.md) | Sistem desain Warm Analog Pop: token warna, kontras, tipografi, kartu, komponen, foto | Sebelum mengubah tampilan |
| [`../AUDIO-STORE-STACK-MOTION.md`](../AUDIO-STORE-STACK-MOTION.md) | Alur CSS, peran tiap file JS, `ui.js`, sistem gerak, masalah teknis | Sebelum mengubah JS atau animasi |
| [`superpowers/specs/2026-11-20-bento-analog-pop-design.md`](superpowers/specs/2026-11-20-bento-analog-pop-design.md) | Riwayat keputusan rombak desain: alasan, alternatif yang ditolak, keputusan implementasi | Untuk tahu *kenapa* desainnya begini |

## Menambah dokumen

- **Spec desain baru:** `superpowers/specs/YYYY-MM-DD-<topik>-design.md`.
- **Wireframe atau ekspor gambar:** `wireframes/`.
- **Perubahan token warna:** perbarui tabel di `AUDIO-STORE-STYLE.md` sekaligus, karena sumber kebenarannya `src/css/app.css`.
