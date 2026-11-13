/**
 * products.js - Dummy Data Produk Audio & Audiophile
 * Berguna untuk simulasi katalog, filter, dan detail produk
 */

const AUDIO_PRODUCTS = [
  {
    id: 'iem-001',
    name: 'Tangzu Wan\'er S.G',
    brand: 'Tangzu',
    category: 'iem',
    price: 320000,
    rating: 4.8,
    reviewsCount: 142,
    driverType: '1 Dynamic Driver (PET)',
    impedance: '20 Ohm',
    sensitivity: '107 dB',
    soundSignature: 'Warm-Balanced',
    pinType: '0.78mm 2-Pin',
    isFeatured: true,
    image: 'assets/images/products/waner.png',
    description: 'Entry-level IEM legendaris dengan vokal jernih, bass empuk, dan tuning balanced yang ramah untuk pemula audiophile.'
  },
  {
    id: 'iem-002',
    name: 'Moondrop Chu II',
    brand: 'Moondrop',
    category: 'iem',
    price: 350000,
    rating: 4.7,
    reviewsCount: 215,
    driverType: '10mm Dynamic Driver (Al-Mg Alloy)',
    impedance: '18 Ohm',
    sensitivity: '119 dB/Vrms',
    soundSignature: 'Harman Neutral',
    pinType: '0.78mm 2-Pin (Detachable)',
    isFeatured: true,
    image: 'assets/images/products/chu2.png',
    description: 'Upgrade dari Chu original dengan bodi zinc alloy dan kabel detachable, menyajikan treble renyah dan clarity tinggi khas Moondrop.'
  },
  {
    id: 'iem-003',
    name: '7Hz Timeless',
    brand: '7Hz',
    category: 'iem',
    price: 3150000,
    rating: 4.9,
    reviewsCount: 88,
    driverType: '14.2mm Planar Magnetic',
    impedance: '14.8 Ohm',
    sensitivity: '104 dB',
    soundSignature: 'Neutral-Bright / Resolving',
    pinType: 'MMCX',
    isFeatured: true,
    image: 'assets/images/products/timeless.png',
    description: 'Standard benchmark untuk planar IEM dengan micro-detail luar biasa, speed bass instan, dan separasi instrumen lapang.'
  },
  {
    id: 'dac-001',
    name: 'FiiO KA13',
    brand: 'FiiO',
    category: 'dac-amp',
    price: 1150000,
    rating: 4.8,
    reviewsCount: 64,
    driverType: 'Dual CS43131 + Dual SGM8262',
    impedance: 'Up to 550mW @32 Ohm (Desktop Mode)',
    sensitivity: 'SNR > 122dB',
    soundSignature: 'Clean & Dynamic',
    pinType: 'Type-C to 3.5mm / 4.4mm Balanced',
    isFeatured: true,
    image: 'assets/images/products/ka13.png',
    description: 'Portable DAC/Amp bertenaga monster dengan tombol Desktop Mode dan output 4.4mm balanced.'
  },
  {
    id: 'acc-001',
    name: 'SpinFit CP100+ Medical Grade Eartips',
    brand: 'SpinFit',
    category: 'accessories',
    price: 165000,
    rating: 4.9,
    reviewsCount: 310,
    driverType: 'Silicone 3D Duct',
    impedance: '-',
    sensitivity: '-',
    soundSignature: 'Better Seal & Bass Extension',
    pinType: 'Bore Size 4.5mm - 5.5mm',
    isFeatured: false,
    image: 'assets/images/products/cp100.png',
    description: 'Eartips medis dengan nozzle berputar unik menyesuaikan lekukan liang telinga untuk isolasi maksimal.'
  }
];

// Helper format Rupiah
function formatRupiah(number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(number);
}

