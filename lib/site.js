// Satu sumber kebenaran untuk data bisnis & situs.
// Override lewat Environment Variables di Vercel — TANPA ngubah kode:
//   NEXT_PUBLIC_WA_NUMBER   → nomor WhatsApp (format internasional, tanpa "+")
//   NEXT_PUBLIC_SITE_URL    → domain produksi (mis. https://zrdclinic.com)
//
// ⚠️ VERIFIKASI sebelum tayang: nomor & domain di bawah masih nilai sementara.

const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER || "6281809569169"; // ⚠️ verifikasi (≈ 0818-0956-9169)
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://zrd-clinic.vercel.app").replace(/\/$/, "");

export const site = {
  name: "ZRD Clinic",
  url: SITE_URL,
  waNumber: WA_NUMBER,
  phoneE164: `+${WA_NUMBER}`,
  phoneDisplay: "0818-0956-9169", // tampilan lokal; samakan kalau nomor berubah
  instagram: "https://instagram.com/zrdclinic",
  igHandle: "@zrdclinic",
  hours: "Selasa–Minggu · 10.00–18.00",
  address: {
    street: "Sei Taib (samping Salon Winda)",
    city: "Kotabaru",
    region: "Kalimantan Selatan",
    country: "ID",
  },
};

// Bangun link wa.me dengan pesan terisi otomatis.
export const wa = (text) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

export const waMain = wa("Halo ZRD Clinic, saya mau konsultasi");
