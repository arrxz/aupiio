# AUDIO-STORE-STYLE.md: Warm Analog Pop

Sistem desain aupiio, toko personal audio (IEM, DAC/Amp, aksesoris). Dokumen ini menggambarkan tampilan yang **sudah terpasang** di kode. Sumber kebenarannya `src/css/app.css`. Riwayat keputusan desain ada di [`docs/superpowers/specs/2026-11-20-bento-analog-pop-design.md`](docs/superpowers/specs/2026-11-20-bento-analog-pop-design.md).

Tema ini menggantikan "Amber Paper" (krem tenang, satu aksen amber, kartu putih bayangan halus), yang dinilai terlalu generic.

---

## 1. Konsep

Rasa toko rekaman indie: alas kertas krem, blok warna berani, tipografi tebal, dan motif piringan hitam.

| Aspek | Keputusan | Alasan |
|---|---|---|
| Layout | Bento grid: kartu beragam ukuran dalam satu grid | Beranda terasa seperti satu poster, bukan deretan section seragam |
| Warna | Tiga aksen (tomat, kobalt, mustard) di atas krem dan tinta | Gampang diingat; tiap kategori punya warna |
| Kartu | Border tinta 2px atau blok warna solid, bayangan keras offset | Kesan cetak dan grafis, bukan template SaaS |
| Foto | Tetap di ubin terang | Foto produk berlatar putih menyatu tanpa tepi |

### Prinsip UX

1. **Cepat dan jelas.** Harga, stok, dan spek terlihat tanpa dicari.
2. **Membantu memilih.** Konsultasi WhatsApp dan filter karakter suara lebih berharga daripada animasi.
3. **Jujur.** Tanpa klaim fiktif (aturan di `assets/js/content.js`). Data contoh ditandai sebagai contoh.
4. **Tidak mengganggu.** Tanpa pop-up agresif, auto-play, atau banner berkedip.
5. **Foto adalah bintangnya.** Keputusan visual melayani foto produk.

---

## 2. Warna

### 2.1 Token (`:root` di `src/css/app.css`)

Nama token lama dipertahankan agar class di HTML tidak perlu diganti. Nilainya yang berubah.

| Token | Hex | Peran | Class Tailwind |
|---|---|---|---|
| `--bg` | `#F3EDE2` | alas krem halaman | `bg-bg` |
| `--surface` | `#FFFBF4` | kartu terang, ubin foto | `bg-surface` |
| `--surface-2` | `#EAE1D1` | field form, isi sekunder | `bg-surface-2` |
| `--line` | `#D8CCB8` | garis pemisah halus | `border-line` |
| `--ink` | `#1A1714` | teks utama, border kartu, blok gelap | `text-ink`, `border-ink`, `bg-ink` |
| `--ink-muted` | `#5C544B` | teks sekunder | `text-ink-muted` |
| `--accent` | `#C8361F` | tomat: CTA, hero, blok aksen | `bg-accent` |
| `--accent-hover` | `#A82C18` | hover tombol tomat | `hover:bg-accent-hover` |
| `--accent-strong` | `#B32D1B` | teks merah di atas krem (harga) | `text-accent-strong` |
| `--cobalt` | `#2D4BD8` | aksen kedua | `bg-cobalt` |
| `--mustard` | `#F2B33D` | aksen ketiga, badge keranjang | `bg-mustard` |
| `--ok` / `--warn` / `--bad` | `#1F7A3A` / `#8A5300` / `#B91C1C` | status stok, error form | `text-ok` dst. |
| `--band*` | tinta + krem + mustard | footer dan ubin gelap | `bg-band`, `text-band-muted` |

### 2.2 Kontras (dihitung)

| Pasangan | Rasio | Pemakaian |
|---|---|---|
| Putih di atas tomat `#C8361F` | 5.25:1 | teks tombol dan hero |
| Tomat strong `#B32D1B` di atas krem | 5.45:1 | harga, teks merah kecil |
| Putih di atas kobalt | 6.75:1 | ubin kobalt |
| Tinta di atas mustard | 9.60:1 | ubin mustard (teks selalu tinta) |
| `--ink-muted` di atas krem | 6.38:1 | teks sekunder |
| Putih di atas `--bad` | 6.47:1 | pesan error form |

Tomat asli dari mockup, `#E2412E`, **tidak dipakai**. Kontras putih di atasnya hanya 4.18:1, dan tomat di atas krem 3.58:1.

### 2.3 Aturan warna

- Teks di atas mustard selalu tinta, tidak pernah putih.
- Teks merah kecil di atas krem memakai `--accent-strong`, bukan `--accent`.
- Satu ubin, satu warna latar. Variasi warna antar ubin dijaga supaya bento tidak monoton.

---

## 3. Tipografi

| Peran | Font | Pemakaian |
|---|---|---|
| Judul & UI | **Bricolage Grotesque** 500/700/800 | `h1`/`h2` weight 800, tracking −0.02em, line-height 1 |
| Aksen | **Instrument Serif** italic | satu-dua kata di headline, kutipan testimoni (`font-serif italic`) |
| Data | **JetBrains Mono** 500/700 | harga, spesifikasi, label kecil uppercase (`font-mono`) |

Pola headline: kata kunci tetap sans tebal, satu frasa diberi serif italic. Contoh: "Sebut lagu favoritmu, *kami carikan* IEM-nya."

---

## 4. Bentuk & Kartu

| Token | Nilai | Catatan |
|---|---|---|
| `--radius-card` | 20px | `rounded-card` untuk kartu |
| `--radius-btn` | 999px | `rounded-btn` = pill, **hanya** untuk tombol, chip, nav link, search |
| Field form | `rounded-xl` | bukan pill, supaya teks tidak mepet lengkungan |
| Kotak besar non-tombol | `rounded-2xl` | thumbnail galeri, tabel, opsi radio checkout |

Bahasa kartu:
- **Kartu terang:** `bg-surface border-2 border-ink`.
- **Blok warna:** solid tanpa border (`bg-accent`, `bg-cobalt`, `bg-mustard`, `bg-ink`).
- **Kedalaman:** tanpa bayangan blur. Saat hover, kartu yang bisa diklik memakai bayangan keras `6px 6px 0 var(--ink)`.
- **Latar halaman:** tekstur titik halus (`radial-gradient` di `body`) mengisi margin di layar lebar.
- **Dekorasi `.vinyl`:** piringan hitam dari CSS gradient, wajib `aria-hidden="true"`. Maksimal 1–2 per halaman.

---

## 5. Layout

- **Kontainer:** `max-w-[1600px]` di header, isi, dan footer.
- **Bento beranda:** `grid-cols-2 lg:grid-cols-4`, `auto-rows-[minmax(150px,auto)]`, gap 12/16px. Hero dan produk pilihan wajib di baris pertama desktop.
- **Halaman lain:** layout fungsional (sidebar katalog, galeri + panel beli, form satu kolom) dengan bahasa kartu yang sama.
- **Cart dan checkout tidak dipecah jadi bento**, karena form harus satu alur lurus.
- **Breakpoint `lg`:** 62rem (992px).

---

## 6. Komponen

| Komponen | Aturan |
|---|---|
| Header | Sticky, border bawah 2px tinta. Nav link pill dengan garis bawah tomat saat hover; halaman aktif berupa pill tinta (`aria-current="page"`). Checkout memakai header minimal tanpa nav. |
| Footer | Blok tinta, empat kolom tautan, wordmark besar maks 9rem. |
| Kartu produk | Ubin foto 1:1 → label mono (brand · karakter) → nama → harga mono `text-accent-strong` → tombol `+` bulat. |
| Chip karakter suara | Pill berwarna: Warm (tomat), Neutral (outline), V-shaped (mustard), Bright (kobalt), Bassy (tinta), Analitis (outline). |
| Mini-cart & filter mobile | `<dialog>` slide dari samping, backdrop tinta 55%. |
| Field form | `border-2 border-ink bg-surface-2 rounded-xl`. Fokus: bayangan offset tomat. Error: border merah + pesan inline. |
| Dropdown | Panah kustom di semua browser; daftar pilihan kustom (krem, border tinta, bayangan keras) di Chrome/Edge 135+. |
| Scrollbar | Thumb tomat pill di atas track `--surface-2`. |

---

## 7. Foto Produk

```css
.photo-tile { background: var(--photo-tile); aspect-ratio: 1 / 1; display: grid; place-items: center; }
.photo-tile img { object-fit: contain; padding: 8%; mix-blend-mode: multiply; }
```

- `multiply` melebur latar putih foto ke ubin `--surface`, sehingga tepi persegi hilang.
- Jangan beri filter (blur, brightness). Warna produk harus jujur.

| Aspek | Standar |
|---|---|
| Latar | Putih murni atau abu sangat muda |
| Rasio | 1:1, produk mengisi sekitar 80% kanvas |
| Resolusi | 1200×1200 px, WebP, di bawah 150 KB |
| Sudut | Minimal 3: depan, samping, detail konektor |

### Konten

- Deskripsi dimulai dari karakter suara dan untuk siapa produk cocok, baru spek teknis.
- Hindari klaim berlebihan dan buzzword. Angka (harga, "mulai Rp 320 ribu") harus sesuai data produk.
- Pakai foto milik sendiri atau berlisensi.

---

## 8. Gerak

Ringkasan saja; detail teknis ada di [`AUDIO-STORE-STACK-MOTION.md`](AUDIO-STORE-STACK-MOTION.md).

- Micro animation global: tombol mengecil saat ditekan, kartu terangkat, foto miring 3°, ikon panah bergeser, `+` berputar.
- Panel dan dropdown slide/fade masuk dan keluar.
- Semua gerak mati saat `prefers-reduced-motion`.
- Konten penting (harga, tombol beli) tidak boleh tersembunyi di balik animasi.

---

## 9. Aksesibilitas

- Kontras lulus 4.5:1 untuk semua teks (tabel 2.2).
- Status stok tidak hanya dibedakan warna: selalu dengan teks.
- Semua gambar punya `alt`; dekorasi `aria-hidden`; tombol ikon punya `aria-label`.
- Target sentuh tombol header 44×44px.
- Label form terhubung lewat `for`/`id`; error lewat `aria-invalid` + `aria-describedby`.
- Satu `h1` per halaman.

---

## 10. Yang Tidak Boleh Dilakukan

- Teks putih di atas mustard, atau tomat `#E2412E` untuk teks.
- `rounded-btn` (pill) di kotak besar atau field form.
- Bayangan blur lembut di kartu (merusak gaya cetak).
- Memecah form cart/checkout menjadi bento.
- Ubin kategori untuk produk yang belum ada.
- Klaim tanpa dasar ("gratis", "terbaik", "terverifikasi") yang tidak ada di data.
- Mengedit `assets/css/style.css` langsung (akan tertimpa compile).
- Animasi `width/height/top/left`, atau satu elemen dianimasikan dua mesin.

---

## 11. Checklist Sebelum Rilis

- [ ] `npm run build` lulus, tidak ada galat di console
- [ ] Rapi di 375px, 1024px, 1280px, 1920px, tanpa scroll horizontal
- [ ] Nav menandai halaman aktif di setiap halaman
- [ ] Mini-cart terbuka saat tambah produk dan tertutup dengan animasi
- [ ] Validasi form menampilkan pesan inline dan fokus ke field pertama yang salah
- [ ] Kontras token lulus (tabel 2.2)
- [ ] Nomor WhatsApp dan data contoh diganti data asli
