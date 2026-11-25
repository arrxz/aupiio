/**
 * products.js - Dummy Data Produk Audio & Audiophile
 * Berguna untuk simulasi katalog, filter, keranjang, dan detail produk
 */

const AUDIO_PRODUCTS = [
  {
    id: 'iem-001',
    name: "Tangzu Wan'er S.G",
    brand: 'Tangzu Audio',
    category: 'iem',
    price: 320000,
    rating: 4.8,
    reviewsCount: 142,
    driverType: '1 Dynamic Driver (PET)',
    impedance: '20 Ohm',
    sensitivity: '107 dB',
    soundSignature: 'Warm-Balanced',
    pinType: '0.78mm 2-Pin',
    stock: 'in_stock',
    stockText: 'Tersedia',
    isFeatured: true,
    image: 'assets/images/products/tangzu wan er sg.jpg',
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
    stock: 'in_stock',
    stockText: 'Tersedia',
    isFeatured: true,
    image: 'assets/images/products/moondrop chu 2.png',
    description: 'Upgrade dari Chu original dengan bodi zinc alloy dan kabel detachable, menyajikan treble renyah dan clarity tinggi khas Moondrop.'
  },
  {
    id: 'iem-003',
    name: '7Hz Timeless Planar',
    brand: '7Hz Audio',
    category: 'iem',
    price: 3150000,
    rating: 4.9,
    reviewsCount: 88,
    driverType: '14.2mm Planar Magnetic',
    impedance: '14.8 Ohm',
    sensitivity: '104 dB',
    soundSignature: 'Neutral-Bright / Resolving',
    pinType: 'MMCX',
    stock: 'low_stock',
    stockText: 'Sisa 2 unit',
    isFeatured: true,
    image: 'assets/images/products/7hz timeless.png',
    description: 'Standard benchmark untuk planar IEM dengan micro-detail luar biasa, speed bass instan, dan separasi instrumen lapang.'
  },
  {
    id: 'iem-004',
    name: '7Hz x Crinacle Zero:2',
    brand: '7Hz Audio',
    category: 'iem',
    price: 345000,
    rating: 4.8,
    reviewsCount: 198,
    driverType: '10mm Dynamic Driver (PU+Composite)',
    impedance: '32 Ohm',
    sensitivity: '108 dB',
    soundSignature: 'Warm-Balanced / Fun',
    pinType: '0.78mm 2-Pin',
    stock: 'in_stock',
    stockText: 'Tersedia',
    isFeatured: true,
    image: 'assets/images/products/7hz zero 2.png',
    description: 'Kolaborasi tuning legendaris bersama Crinacle dengan peningkatan respon sub-bass lebih punchy dan vokal natural.'
  },
  {
    id: 'iem-005',
    name: 'KZ Castor Harman Target',
    brand: 'KZ Acoustics',
    category: 'iem',
    price: 220000,
    rating: 4.6,
    reviewsCount: 312,
    driverType: 'Dual Dynamic Driver (10mm + 8mm)',
    impedance: '31-35 Ohm',
    sensitivity: '102 dB',
    soundSignature: 'Harman Target / Switch Tunable',
    pinType: '0.75mm QDC 2-Pin',
    stock: 'in_stock',
    stockText: 'Tersedia',
    isFeatured: false,
    image: 'assets/images/products/kz castor.png',
    description: 'IEM dual dynamic driver dengan 4 switch tuning fisik untuk kostumisasi respon bass dan treble sesuai selera musik Anda.'
  },
  {
    id: 'iem-006',
    name: 'Truthear x Crinacle Zero: RED',
    brand: 'Truthear',
    category: 'iem',
    price: 890000,
    rating: 4.9,
    reviewsCount: 184,
    driverType: 'Dual Dynamic (10mm + 7.8mm Polyurethane)',
    impedance: '17.5 Ohm',
    sensitivity: '117.5 dB',
    soundSignature: 'Diffuse-Field Neutral',
    pinType: '0.78mm 2-Pin',
    stock: 'in_stock',
    stockText: 'Tersedia',
    isFeatured: true,
    image: 'assets/images/products/truthear zero red.png',
    description: 'Tuning neutral benchmark dengan distorsi sangat rendah, dilengkapi adapter bass 10 Ohm terpisah untuk fleksibilitas karakter suara.'
  },
  {
    id: 'iem-007',
    name: 'Moondrop Blessing 3',
    brand: 'Moondrop',
    category: 'iem',
    price: 4950000,
    rating: 5.0,
    reviewsCount: 56,
    driverType: '2DD + 4BA Hybrid (H.O.D.D.D.U.S)',
    impedance: '14.8 Ohm',
    sensitivity: '120 dB',
    soundSignature: 'Reference Neutral',
    pinType: '0.78mm 2-Pin',
    stock: 'low_stock',
    stockText: 'Sisa 1 unit',
    isFeatured: true,
    image: 'assets/images/products/moondrop blessing 3.png',
    description: 'Standard emas IEM hybrid kelas menengah dengan faceplate stainless steel presisi 3D dan kejernihan vokal luar biasa.'
  },
  {
    id: 'iem-008',
    name: 'Sennheiser IE 200',
    brand: 'Sennheiser',
    category: 'iem',
    price: 2390000,
    rating: 4.7,
    reviewsCount: 89,
    driverType: '7mm TrueResponse Transducer',
    impedance: '18 Ohm',
    sensitivity: '119 dB',
    soundSignature: 'Smooth Neutral / Warm',
    pinType: 'MMCX (Fidelity+)',
    stock: 'in_stock',
    stockText: 'Tersedia',
    isFeatured: false,
    image: 'assets/images/products/sennheiser ie 200.png',
    description: 'Transduser 7mm buatan Jerman dengan fitur dual-tuning eartips untuk memilih bass bertenaga atau soundstage luas.'
  },
  {
    id: 'dac-001',
    name: 'FiiO KA13 Portable DAC',
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
    stock: 'in_stock',
    stockText: 'Tersedia',
    isFeatured: true,
    image: 'assets/images/products/fiio ka13.png',
    description: 'Portable DAC/Amp bertenaga monster dengan tombol Desktop Mode dan output 4.4mm balanced.'
  },
  {
    id: 'dac-002',
    name: 'Moondrop Dawn Pro Portable DAC',
    brand: 'Moondrop',
    category: 'dac-amp',
    price: 780000,
    rating: 4.8,
    reviewsCount: 115,
    driverType: 'Dual CS43131 High-Performance DAC',
    impedance: 'Up to 400mW @32 Ohm (4.4mm Balanced)',
    sensitivity: 'SNR 131 dB',
    soundSignature: 'Clean, Transparent & Airy',
    pinType: 'Type-C to 3.5mm SE / 4.4mm Balanced',
    stock: 'in_stock',
    stockText: 'Tersedia',
    isFeatured: true,
    image: 'assets/images/products/moondrop dawn pro.png',
    description: 'Dongle DAC aluminium CNC berbobot ringan dengan tombol volume fisik independen 100-step dan output 4.4mm balanced.'
  },
  {
    id: 'dac-003',
    name: 'iFi Audio GO Link',
    brand: 'iFi Audio',
    category: 'dac-amp',
    price: 990000,
    rating: 4.8,
    reviewsCount: 92,
    driverType: 'ESS Sabre ES9219MQ/Q',
    impedance: '70mW @32 Ohm (S-Balanced)',
    sensitivity: 'DSD256, MQA, PCM 32-bit/384kHz',
    soundSignature: 'Warm & Musical',
    pinType: 'Type-C to 3.5mm (Included Lightning)',
    stock: 'in_stock',
    stockText: 'Tersedia',
    isFeatured: false,
    image: 'assets/images/products/ifi go link.png',
    description: 'Dongle mungil dengan kabel pilin berlapis perak dan teknologi S-Balanced khas iFi untuk staging natural tanpa desis.'
  },
  {
    id: 'acc-001',
    name: 'SpinFit CP100+ Medical Eartips',
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
    stock: 'in_stock',
    stockText: 'Tersedia',
    isFeatured: false,
    image: 'assets/images/products/cp100.png',
    description: 'Eartips medis dengan nozzle berputar unik menyesuaikan lekukan liang telinga untuk isolasi maksimal.'
  },
  {
    id: 'acc-002',
    name: 'Tripowin Zonie 16-Core Silver Cable',
    brand: 'Tripowin',
    category: 'accessories',
    price: 285000,
    rating: 4.9,
    reviewsCount: 270,
    driverType: '16-Core Silver-Plated OCC Copper',
    impedance: 'Ultra Low Resistance',
    sensitivity: '-',
    soundSignature: 'Tangle-Free & Smooth Midrange',
    pinType: '0.78mm 2-Pin to 3.5mm Gold-Plated',
    stock: 'in_stock',
    stockText: 'Tersedia',
    isFeatured: false,
    image: 'assets/images/products/tripowin zonie.png',
    description: 'Kabel upgrade fleksibel dan super lentur tanpa efek microphonics, meningkatkan kenyamanan pemakaian IEM harian.'
  },
  {
    id: 'acc-003',
    name: 'Tangzu Tang Sancai Silicone Eartips',
    brand: 'Tangzu Audio',
    category: 'accessories',
    price: 125000,
    rating: 4.8,
    reviewsCount: 160,
    driverType: 'Medical Grade Matte Silicone',
    impedance: '-',
    sensitivity: '-',
    soundSignature: 'Pressure Relief & Wide Staging',
    pinType: 'Bore Size 4.0mm',
    stock: 'in_stock',
    stockText: 'Tersedia',
    isFeatured: false,
    image: 'assets/images/products/tang sancai.png',
    description: 'Eartips bertekstur matte antik dengan teknologi pelepas tekanan udara telinga, sangat nyaman untuk sesi dengar maraton.'
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

// --- Category Filtering Engine for catalog.html ---
const CATEGORY_NAMES = {
  all: "Semua Produk",
  iem: "In-Ear Monitor",
  "dac-amp": "DAC & Amplifier",
  accessories: "Aksesoris Audio",
  aksesoris: "Aksesoris Audio",
};

function normalizeCategory(cat) {
  if (!cat) return "all";
  const c = String(cat).toLowerCase().trim();
  if (c === "aksesoris") return "accessories";
  if (c === "dac" || c === "amp" || c === "dacamp") return "dac-amp";
  return ["iem", "dac-amp", "accessories"].includes(c) ? c : "all";
}

window.aupiioSetCategory = function (rawCategory, pushUrl = true) {
  const category = normalizeCategory(rawCategory);
  const cards = document.querySelectorAll(".product-card");
  if (!cards.length) return;

  let visibleCount = 0;
  cards.forEach((card) => {
    const cardCat = card.dataset.category;
    if (category === "all" || cardCat === category) {
      card.style.display = "";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  // Update empty state
  const emptyState = document.getElementById("catalogEmptyState");
  if (emptyState) {
    if (visibleCount === 0) {
      emptyState.classList.remove("hidden");
    } else {
      emptyState.classList.add("hidden");
    }
  }

  // Update counter
  const counter = document.getElementById("catalogCount");
  if (counter) {
    if (category === "all") {
      counter.textContent = `Menampilkan ${visibleCount} gear audio terkurasi`;
    } else {
      counter.textContent = `Menampilkan ${visibleCount} gear audio terkurasi (${CATEGORY_NAMES[category] || category})`;
    }
  }

  // Update active category badge in filter tags
  const activeBadge = document.getElementById("activeCatBadge");
  const activeText = document.getElementById("activeCatText");
  if (activeBadge && activeText) {
    if (category === "all") {
      activeBadge.classList.add("hidden");
      activeBadge.classList.remove("inline-flex");
    } else {
      activeBadge.classList.remove("hidden");
      activeBadge.classList.add("inline-flex");
      activeText.textContent = CATEGORY_NAMES[category] || category;
    }
  }

  // Update Category Quick Pills
  document.querySelectorAll(".cat-pill").forEach((pill) => {
    const pillCat = pill.dataset.categoryFilter;
    if (pillCat === category) {
      pill.classList.remove("bg-surface", "text-ink");
      pill.classList.add("bg-ink", "text-bg");
    } else {
      pill.classList.remove("bg-ink", "text-bg");
      pill.classList.add("bg-surface", "text-ink");
    }
  });

  // Update Radio Desktop & Mobile
  const radioDesktop = document.querySelector(
    `input[name="catFilterDesktop"][value="${category}"]`
  );
  if (radioDesktop) radioDesktop.checked = true;

  const radioMobile = document.querySelector(
    `input[name="catFilterMobile"][value="${category}"]`
  );
  if (radioMobile) radioMobile.checked = true;

  // Update Header Nav Links aria-current
  document.querySelectorAll("#mainNav .nav-link").forEach((link) => {
    const href = link.getAttribute("href") || "";
    if (category === "all") {
      if (href === "catalog.html" || href.endsWith("/catalog.html")) {
        link.setAttribute("aria-current", "page");
      } else if (href.includes("cat=")) {
        link.removeAttribute("aria-current");
      }
    } else {
      if (href.includes(`cat=${category}`) || (category === "accessories" && href.includes("cat=aksesoris"))) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    }
  });

  // Micro animation saat pengguna mengganti filter: kartu muncul berurutan, penghitung membal
  if (pushUrl && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    let i = 0;
    cards.forEach((card) => {
      if (card.style.display === "none") return;
      card.animate(
        [
          { opacity: 0, translate: "0 14px", scale: "0.96" },
          { opacity: 1, translate: "0 0", scale: "1" },
        ],
        { duration: 340, delay: Math.min(i++ * 45, 360), easing: "cubic-bezier(0.34, 1.56, 0.64, 1)", fill: "backwards" }
      );
    });
    counter?.animate([{ scale: "1" }, { scale: "1.05" }, { scale: "1" }], { duration: 260, easing: "ease-out" });
  }

  // Sync URL history without full reload
  if (pushUrl && window.history && window.history.pushState) {
    const newUrl = category === "all" ? "catalog.html" : `catalog.html?cat=${category === "accessories" ? "aksesoris" : category}`;
    if (window.location.search || category !== "all") {
      window.history.pushState({ category }, "", newUrl);
    }
  }
};

// Inisialisasi logika katalog & detail produk
document.addEventListener("DOMContentLoaded", () => {
  // 1. Inisialisasi Filter Kategori di catalog.html
  if (document.getElementById("productGrid") || document.querySelector(".product-card")) {
    const params = new URLSearchParams(window.location.search);
    const initialCat = params.get("cat") || "all";
    window.aupiioSetCategory(initialCat, false);

    // Click handler untuk tombol active badge (hapus filter)
    const activeBadge = document.getElementById("activeCatBadge");
    if (activeBadge) {
      activeBadge.addEventListener("click", () => window.aupiioSetCategory("all"));
    }

    // Click handlers untuk Quick Pills
    document.querySelectorAll(".cat-pill").forEach((pill) => {
      pill.addEventListener("click", () => {
        const cat = pill.dataset.categoryFilter;
        window.aupiioSetCategory(cat);
      });
    });

    // Radio Desktop Change
    document.querySelectorAll('input[name="catFilterDesktop"]').forEach((radio) => {
      radio.addEventListener("change", (e) => {
        if (e.target.checked) window.aupiioSetCategory(e.target.value);
      });
    });

    // Radio Mobile Change
    document.querySelectorAll('input[name="catFilterMobile"]').forEach((radio) => {
      radio.addEventListener("change", (e) => {
        if (e.target.checked) window.aupiioSetCategory(e.target.value);
      });
    });

    // Intercept navbar category links if already on catalog page
    document.querySelectorAll('#mainNav a[href*="catalog.html"]').forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href") || "";
        const url = new URL(href, window.location.href);
        const cat = url.searchParams.get("cat") || "all";
        e.preventDefault();
        window.aupiioSetCategory(cat);
      });
    });

    // Popstate back/forward button support
    window.addEventListener("popstate", () => {
      const p = new URLSearchParams(window.location.search);
      window.aupiioSetCategory(p.get("cat") || "all", false);
    });
  }

  // 2. Inisialisasi detail produk dinamis bila berada di product-detail.html
  const detailTitleEl = document.getElementById("detailTitle");
  if (!detailTitleEl) return;

  const detailParams = new URLSearchParams(window.location.search);
  const productId = detailParams.get("id") || "iem-001";
  const p = AUDIO_PRODUCTS.find((item) => item.id === productId) || AUDIO_PRODUCTS[0];
  if (!p) return;

  const catInfo = {
    iem: { label: "In-Ear Monitor", badge: "In-Ear Monitor", href: "catalog.html?cat=iem", icon: "bi-headphones" },
    "dac-amp": { label: "DAC & Amplifier", badge: "DAC & Amp", href: "catalog.html?cat=dac-amp", icon: "bi-cpu" },
    accessories: { label: "Aksesoris Audio", badge: "Aksesoris", href: "catalog.html?cat=aksesoris", icon: "bi-disc" },
  }[p.category] || { label: "Gear Audio", badge: "Audio", href: "catalog.html", icon: "bi-headphones" };

  document.title = `${p.name} | aupiio`;

  // Update Breadcrumb & Judul
  detailTitleEl.textContent = p.category === "iem" && !p.name.toLowerCase().includes("iem") ? `${p.name} In-Ear Monitor` : p.name;

  const breadcrumbCat = document.getElementById("detailBreadcrumbCat");
  if (breadcrumbCat) {
    breadcrumbCat.textContent = catInfo.badge;
    breadcrumbCat.href = catInfo.href;
  }

  const breadcrumbName = document.getElementById("detailBreadcrumbName");
  if (breadcrumbName) breadcrumbName.textContent = p.name;

  const galleryBadge = document.getElementById("detailGalleryBadge");
  if (galleryBadge) galleryBadge.textContent = catInfo.label;

  // Brand, Deskripsi & Rating
  const brandEl = document.getElementById("detailBrand");
  if (brandEl) brandEl.textContent = p.brand;

  const descEl = document.getElementById("detailDesc");
  if (descEl) descEl.textContent = p.description;

  const ratingStars = document.getElementById("detailRatingStars");
  if (ratingStars) {
    const full = Math.floor(p.rating);
    const half = p.rating - full >= 0.3 ? 1 : 0;
    const empty = 5 - full - half;
    ratingStars.innerHTML =
      '<i class="bi bi-star-fill"></i>'.repeat(full) +
      (half ? '<i class="bi bi-star-half"></i>' : "") +
      '<i class="bi bi-star"></i>'.repeat(empty);
  }

  const ratingNum = document.getElementById("detailRatingNum");
  if (ratingNum) ratingNum.textContent = String(p.rating);

  const reviewCount = document.getElementById("detailReviewCount");
  if (reviewCount) reviewCount.textContent = `(${p.reviewsCount} ulasan audiophile)`;

  // Harga & Status Stok
  const priceEl = document.getElementById("detailPrice");
  if (priceEl) priceEl.textContent = formatRupiah(p.price);

  const oldPriceEl = document.getElementById("detailOldPrice");
  if (oldPriceEl) {
    if (p.id === "iem-001") {
      oldPriceEl.classList.remove("hidden");
    } else {
      oldPriceEl.classList.add("hidden");
    }
  }

  const stockEl = document.getElementById("detailStock");
  if (stockEl) {
    if (p.stock === "low_stock") {
      stockEl.className = "mt-1.5 flex items-center gap-1.5 text-xs text-warn font-medium";
      stockEl.innerHTML = `<i class="bi bi-exclamation-circle-fill"></i> ${p.stockText} (Segera pesan sebelum kehabisan)`;
    } else {
      stockEl.className = "mt-1.5 flex items-center gap-1.5 text-xs text-ok font-medium";
      stockEl.innerHTML = `<i class="bi bi-check-circle-fill"></i> ${p.stockText} (Siap kirim hari ini)`;
    }
  }

  // Chips Karakter & Driver
  const chipsEl = document.getElementById("detailChips");
  if (chipsEl) {
    const chips = [p.soundSignature, p.driverType, p.pinType].filter((v) => v && v !== "-");
    chipsEl.innerHTML = chips
      .map((c, idx) =>
        idx === 0
          ? `<span class="rounded-full border border-accent bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-strong">${c}</span>`
          : `<span class="rounded-full border border-line px-3 py-1 text-xs text-ink-muted">${c}</span>`
      )
      .join("");
  }

  // Varian Pilihan sesuai kategori + interaksi klik
  const variantLabelEl = document.getElementById("detailVariantLabel");
  const variantListEl = document.getElementById("detailVariantList");
  if (variantLabelEl && variantListEl) {
    let vLabel = "Pilihan Varian:";
    let variants = ["Standard Edition"];
    if (p.id === "iem-001") {
      vLabel = "Warna Faceplate:";
      variants = ["White (Jade)", "Black (Classic)", "Clear (Limited)"];
    } else if (p.category === "iem") {
      vLabel = "Opsi Kabel / Terminasi:";
      variants = ["3.5mm Non-Mic", "3.5mm + Mic", "4.4mm Balanced"];
    } else if (p.category === "dac-amp") {
      vLabel = "Konektor Sumber:";
      variants = ["USB Type-C", "USB-C + Lightning Adapter"];
    } else if (p.id === "acc-002") {
      vLabel = "Tipe Konektor IEM:";
      variants = ["0.78mm 2-Pin", "MMCX", "QDC 2-Pin"];
    } else {
      vLabel = "Ukuran Eartips:";
      variants = ["Set S / M / L (3 Pasang)", "Size M (2 Pasang)", "Size S (2 Pasang)"];
    }

    variantLabelEl.textContent = vLabel;
    variantListEl.innerHTML = variants
      .map((v, i) =>
        i === 0
          ? `<button type="button" class="variant-btn rounded-btn border-2 border-accent bg-accent-soft px-4 py-2 text-xs font-semibold text-accent-strong cursor-pointer transition">${v}</button>`
          : `<button type="button" class="variant-btn rounded-btn border-2 border-ink bg-surface px-4 py-2 text-xs text-ink hover:border-accent hover:text-accent-strong cursor-pointer transition">${v}</button>`
      )
      .join("");

    variantListEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".variant-btn");
      if (!btn) return;
      variantListEl.querySelectorAll(".variant-btn").forEach((b) => {
        const active = b === btn;
        b.className = active
          ? "variant-btn rounded-btn border-2 border-accent bg-accent-soft px-4 py-2 text-xs font-semibold text-accent-strong cursor-pointer transition"
          : "variant-btn rounded-btn border-2 border-ink bg-surface px-4 py-2 text-xs text-ink hover:border-accent hover:text-accent-strong cursor-pointer transition";
      });
    });
  }

  // Tabel Spesifikasi Teknis Hardware
  const specsBody = document.getElementById("detailSpecsBody");
  if (specsBody) {
    const rows = [
      ["Brand / Pabrikan", p.brand],
      ["Kategori", catInfo.label],
      ["Konfigurasi Driver / Chip", p.driverType],
      [p.category === "dac-amp" ? "Output Power" : "Impedansi", p.impedance],
      [p.category === "dac-amp" ? "Dukungan Format / SNR" : "Sensitivitas", p.sensitivity],
      ["Karakter Suara", p.soundSignature],
      ["Konektor / Ukuran", p.pinType],
    ].filter(([, val]) => val && val !== "-");

    specsBody.innerHTML = rows
      .map(
        ([k, v]) => `
        <tr class="even:bg-surface-2">
          <td class="w-2/5 px-4 py-3 text-ink-muted">${k}</td>
          <td class="px-4 py-3 font-mono text-ink">${v}</td>
        </tr>`
      )
      .join("");
  }

  // Analisis 4 Pilar sesuai kategori
  const soundSection = document.getElementById("detailSoundSection");
  if (soundSection) {
    let cardsHtml = "";
    if (p.category === "accessories") {
      cardsHtml = `
        <div class="rounded-2xl border-2 border-ink bg-surface-2 p-4">
          <h5 class="text-xs font-semibold uppercase tracking-wider text-accent mb-1"><i class="bi bi-earbuds mr-1"></i> Kenyamanan & Fit</h5>
          <p class="text-xs text-ink-muted">Dirancang ergonomis untuk mengurangi tekanan di liang telinga saat sesi dengar berjam-jam.</p>
        </div>
        <div class="rounded-2xl border-2 border-ink bg-surface-2 p-4">
          <h5 class="text-xs font-semibold uppercase tracking-wider text-accent mb-1"><i class="bi bi-shield-check mr-1"></i> Material Pilihan</h5>
          <p class="text-xs text-ink-muted">${p.driverType} berkualitas tinggi yang lentur, awet, dan ramah di kulit.</p>
        </div>
        <div class="rounded-2xl border-2 border-ink bg-surface-2 p-4">
          <h5 class="text-xs font-semibold uppercase tracking-wider text-accent mb-1"><i class="bi bi-plug mr-1"></i> Kompatibilitas</h5>
          <p class="text-xs text-ink-muted">Cocok untuk standar ${p.pinType} pada mayoritas IEM modern di katalog aupiio.</p>
        </div>
        <div class="rounded-2xl border-2 border-ink bg-surface-2 p-4">
          <h5 class="text-xs font-semibold uppercase tracking-wider text-accent mb-1"><i class="bi bi-soundwave mr-1"></i> Efek Akustik</h5>
          <p class="text-xs text-ink-muted">${p.soundSignature} dengan isolasi suara pasif yang lebih kedap dan konsisten.</p>
        </div>`;
    } else if (p.category === "dac-amp") {
      cardsHtml = `
        <div class="rounded-2xl border-2 border-ink bg-surface-2 p-4">
          <h5 class="text-xs font-semibold uppercase tracking-wider text-accent mb-1"><i class="bi bi-lightning-charge mr-1"></i> Tenaga & Headroom</h5>
          <p class="text-xs text-ink-muted">Daya ${p.impedance} mampu men-drive IEM sensitif hingga headphone planar ringan dengan mudah.</p>
        </div>
        <div class="rounded-2xl border-2 border-ink bg-surface-2 p-4">
          <h5 class="text-xs font-semibold uppercase tracking-wider text-accent mb-1"><i class="bi bi-cpu mr-1"></i> Arsitektur DAC</h5>
          <p class="text-xs text-ink-muted">Menggunakan ${p.driverType} untuk konversi sinyal digital yang presisi dan bebas noise lantai.</p>
        </div>
        <div class="rounded-2xl border-2 border-ink bg-surface-2 p-4">
          <h5 class="text-xs font-semibold uppercase tracking-wider text-accent mb-1"><i class="bi bi-soundwave mr-1"></i> Karakter Output</h5>
          <p class="text-xs text-ink-muted">Menyajikan karakter ${p.soundSignature} yang menjaga detail rekaman asli tetap utuh.</p>
        </div>
        <div class="rounded-2xl border-2 border-ink bg-surface-2 p-4">
          <h5 class="text-xs font-semibold uppercase tracking-wider text-accent mb-1"><i class="bi bi-phone mr-1"></i> Plug & Play</h5>
          <p class="text-xs text-ink-muted">Kompatibel langsung dengan Android, iOS, Windows, dan macOS via ${p.pinType}.</p>
        </div>`;
    }
    if (cardsHtml) {
      soundSection.innerHTML = `
        <h4 class="font-display text-lg font-extrabold tracking-tight text-ink mb-4">
          ${p.category === "accessories" ? "Keunggulan & Kompatibilitas" : "Karakter Audio & Performa"}
        </h4>
        <div class="grid gap-6 sm:grid-cols-2">${cardsHtml}</div>`;
    }
  }

  // Mobile Sticky Bar & Tombol Add to Cart
  const mobilePriceEl = document.querySelector(".fixed.bottom-0 .font-mono.text-base.font-bold");
  if (mobilePriceEl) mobilePriceEl.textContent = formatRupiah(p.price);

  const mobileNameEl = document.querySelector(".fixed.bottom-0 .block.text-\\[11px\\]");
  if (mobileNameEl) mobileNameEl.textContent = p.name;

  const addToCartBtn = document.querySelector('button[onclick*="window.aupiioAddToCart"]');
  if (addToCartBtn) {
    addToCartBtn.setAttribute("onclick", `window.aupiioAddToCart('${p.id}', parseInt(document.getElementById('pQty').value))`);
  }
  const mobileAddToCartBtn = document.querySelector('.fixed.bottom-0 button[onclick*="window.aupiioAddToCart"]');
  if (mobileAddToCartBtn) {
    mobileAddToCartBtn.setAttribute("onclick", `window.aupiioAddToCart('${p.id}', 1)`);
  }

  // Update Foto Produk Utama & Thumbnail (dengan fallback ikon)
  const applyImageWithFallback = (imgEl, iconSizeClass) => {
    if (!imgEl) return;
    imgEl.src = p.image;
    imgEl.alt = p.name;
    imgEl.classList.remove("hidden");
    imgEl.parentElement?.querySelector(".product-icon-fallback")?.remove();
    imgEl.onerror = () => {
      imgEl.classList.add("hidden");
      const parent = imgEl.parentElement;
      if (parent && !parent.querySelector(".product-icon-fallback")) {
        const iconDiv = document.createElement("div");
        iconDiv.className = "product-icon-fallback flex h-full w-full items-center justify-center text-ink-muted";
        iconDiv.innerHTML = `<i class="bi ${catInfo.icon} ${iconSizeClass} text-accent"></i>`;
        parent.appendChild(iconDiv);
      }
    };
  };

  applyImageWithFallback(document.getElementById("detailMainImg"), "text-7xl");
  applyImageWithFallback(document.getElementById("detailThumbImg"), "text-2xl");
});
