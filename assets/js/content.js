/**
 * assets/js/content.js
 * Pusat seluruh teks pemasaran & konten beranda toko audio "aupiio"
 * 
 * ATURAN:
 * - Tidak ada klaim pemasaran yang tidak bisa dibuktikan (tanpa sertifikasi fiktif, "berstandar medis", dsb.)
 * - Beri komentar "SESUAIKAN DENGAN KEBIJAKAN TOKO" pada klaim kebijakan
 * - Beri komentar "DATA CONTOH" pada data produk
 */

const COPY = {
  header: {
    searchPlaceholder: "Cari IEM, DAC, kabel...",
    wishlistTitle: "Wishlist",
    cartTitle: "Keranjang",
    emptyCartTitle: "Keranjang Belanja",
    emptyCartMessage: "Keranjang Anda masih kosong.",
    browseCatalogCta: "Jelajahi Katalog",
  },
  hero: {
    headline: "Dengar detail yang sebelumnya tersembunyi.",
    subtext: "Pilihan IEM, DAC/Amp, DAP, TWS, kabel, dan eartips untuk pendengar yang peduli detail.",
    primaryCta: "Belanja Sekarang",
    secondaryCta: "Panduan Pemula Audio",
    // SESUAIKAN DENGAN KEBIJAKAN TOKO
    trustRow: [
      {
        id: "trust-orig",
        text: "Produk Original",
        note: "Distributor resmi"
      },
      {
        id: "trust-warranty",
        text: "Garansi Distributor",
        note: "Klaim dibantu"
      },
      {
        id: "trust-packing",
        text: "Pengemasan Aman",
        note: "Hardbox & proteksi ekstra"
      }
    ]
  },
  categories: [
    { name: "IEM", slug: "iem" },
    { name: "DAC/Amp", slug: "dac-amp" },
    { name: "DAP", slug: "dap" },
    { name: "TWS", slug: "tws" },
    { name: "Kabel", slug: "kabel" },
    { name: "Eartips", slug: "eartips" },
    { name: "Aksesoris", slug: "aksesoris" }
  ],
  // SESUAIKAN DENGAN KEBIJAKAN TOKO: 4 Pilar Nilai Toko di Pita Kepercayaan
  trustBand: [
    {
      id: "band-original",
      title: "100% Produk Original",
      description: "Unit resmi distributor dengan jaminan keaslian."
    },
    {
      id: "band-warranty",
      title: "Garansi Resmi Distributor",
      description: "Bantuan klaim garansi tanpa prosedur berbelit."
    },
    {
      id: "band-packing",
      title: "Pengemasan Ekstra Rapi",
      description: "Lapisan hardbox & bubble wrap tebal untuk tiap paket."
    },
    {
      id: "band-consult",
      title: "Konsultasi Karakter Suara",
      description: "Diskusi kebutuhan sound signature sebelum Anda membeli."
    }
  ]
};

// DATA CONTOH: Produk pilihan utama untuk kartu kanan hero
const FEATURED = {
  tag: "PILIHAN UTAMA",
  name: "7Hz Timeless Planar",
  price: "Rp 3.150.000",
  priceNum: 3150000,
  image: "assets/images/products/7hz timeless.png",
  alt: "7Hz Timeless Planar Magnetic IEM",
  // 3 keterangan spek bergaya mono terhubung ke foto
  specs: [
    { label: "Driver", value: "14.2mm Planar" },
    { label: "Impedansi", value: "14.8Ω @ 1kHz" },
    { label: "Bodi", value: "CNC Aluminum" }
  ]
};

if (typeof window !== "undefined") {
  window.COPY = COPY;
  window.FEATURED = FEATURED;
}
