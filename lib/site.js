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

  // Versi NETRAL (tanpa nama palsu) supaya aman ditayangkan sekarang.
  // Kalau sudah ada data asli: ganti `name` jadi nama dokter, isi STR di `cred`,
  // ganti foto, dan update `legal.note` dengan nomor izin + alamat lengkap.
  showTeam: true,
  team: [
    {
      name: "dr. Amalia Sari", // ⚠️ DUMMY — ganti nama dokter asli
      role: "Dokter Penanggung Jawab",
      cred: "Tenaga medis berlisensi · STR aktif", // ⚠️ isi No. STR asli kalau ada
      photo: "/dr-amalia.jpg", // ⚠️ foto stok — ganti foto asli
    },
    {
      name: "Rina Maharani", // ⚠️ DUMMY — ganti nama terapis asli
      role: "Terapis Estetika",
      cred: "Bersertifikat",
      photo: null, // pakai avatar inisial sampai ada foto asli
    },
  ],
  legal: {
    note: "ZRD Clinic beroperasi sesuai izin & standar layanan yang berlaku. Dokumen izin lengkap tersedia di klinik.",
  },
};

// Bangun link wa.me dengan pesan terisi otomatis.
export const wa = (text) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

export const waMain = wa("Halo ZRD Clinic, saya mau konsultasi");
