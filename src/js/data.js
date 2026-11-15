/**
 * data.js - Audio & Audiophile Products Catalog
 */

export const AUDIO_PRODUCTS = [
  {
    id: "iem-001",
    slug: "tangzu-waner-sg",
    name: "Tangzu Wan'er S.G",
    brand: "Tangzu",
    category: "iem",
    price: 320000,
    rating: 4.8,
    reviewsCount: 142,
    driverType: "1 Dynamic Driver (PET)",
    impedance: "20 Ohm",
    sensitivity: "107 dB",
    soundSignature: "Warm-Balanced",
    pinType: "0.78mm 2-Pin",
    stock: "in_stock",
    stockText: "Stok tersedia",
    isFeatured: true,
    image: "assets/images/products/tangzu wan er sg.jpg",
    description: "Entry-level IEM legendaris dengan vokal jernih, bass empuk, dan tuning balanced yang ramah untuk pemula audiophile."
  },
  {
    id: "iem-002",
    slug: "moondrop-chu-ii",
    name: "Moondrop Chu II",
    brand: "Moondrop",
    category: "iem",
    price: 350000,
    rating: 4.7,
    reviewsCount: 215,
    driverType: "10mm Dynamic Driver (Al-Mg Alloy)",
    impedance: "18 Ohm",
    sensitivity: "119 dB/Vrms",
    soundSignature: "Harman Neutral",
    pinType: "0.78mm 2-Pin (Detachable)",
    stock: "in_stock",
    stockText: "Stok tersedia",
    isFeatured: true,
    image: "assets/images/products/moondrop chu 2.png",
    description: "Upgrade dari Chu original dengan bodi zinc alloy dan kabel detachable, menyajikan treble renyah dan clarity tinggi khas Moondrop."
  },
  {
    id: "iem-003",
    slug: "7hz-timeless",
    name: "7Hz Timeless",
    brand: "7Hz Audio",
    category: "iem",
    price: 3150000,
    rating: 4.9,
    reviewsCount: 88,
    driverType: "14.2mm Planar Magnetic",
    impedance: "14.8 Ohm",
    sensitivity: "104 dB",
    soundSignature: "Neutral-Bright / Resolving",
    pinType: "MMCX",
    stock: "low_stock",
    stockText: "Sisa 2 unit",
    isFeatured: true,
    image: "assets/images/products/7hz timeless.png",
    description: "Standard benchmark untuk planar IEM dengan micro-detail luar biasa, speed bass instan, dan separasi instrumen lapang."
  },
  {
    id: "dac-001",
    slug: "fiio-ka13",
    name: "FiiO KA13",
    brand: "FiiO",
    category: "dac-amp",
    price: 1150000,
    rating: 4.8,
    reviewsCount: 64,
    driverType: "Dual CS43131 + Dual SGM8262",
    impedance: "Up to 550mW @32 Ohm (Desktop Mode)",
    sensitivity: "SNR > 122dB",
    soundSignature: "Clean & Dynamic",
    pinType: "Type-C to 3.5mm / 4.4mm Balanced",
    stock: "in_stock",
    stockText: "Stok tersedia",
    isFeatured: true,
    image: "assets/images/products/fiio ka13.png",
    description: "Portable DAC/Amp bertenaga monster dengan tombol Desktop Mode dan output 4.4mm balanced."
  },
  {
    id: "acc-001",
    slug: "spinfit-cp100-plus",
    name: "SpinFit CP100+ Medical Eartips",
    brand: "SpinFit",
    category: "eartips",
    price: 165000,
    rating: 4.9,
    reviewsCount: 310,
    driverType: "Silicone 3D Duct",
    impedance: "-",
    sensitivity: "-",
    soundSignature: "Better Seal & Bass Extension",
    pinType: "Bore Size 4.5mm - 5.5mm",
    stock: "in_stock",
    stockText: "Stok tersedia",
    isFeatured: false,
    image: "assets/images/products/cp100.png",
    description: "Eartips medis dengan nozzle berputar unik menyesuaikan lekukan liang telinga untuk isolasi maksimal."
  }
];

export function formatRupiah(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(number);
}
