# ZRD Clinic — Kotabaru (website)

Situs marketing **Next.js (App Router) + JavaScript + Tailwind CSS v4**, deploy-ready Vercel. Pola & standar mengikuti `galuh-banjar-site`. Arah desain: **tech-noir** (gelap + aksen cyan), dengan **Laser Tato** sebagai bintang utama.

## Jalankan
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # produksi
```
Deploy: import folder ini ke Vercel (auto-detect Next.js). **Belum di-push/di-deploy** — itu langkah kamu.

## Struktur
```
zrd-clinic/
├─ app/
│  ├─ layout.js            # font (Space Grotesk + Inter via next/font), metadata, OG
│  ├─ page.js              # seluruh section + JSON-LD MedicalClinic
│  ├─ globals.css          # Tailwind v4 + token @theme + CSS before/after & reveal
│  ├─ icon.png             # favicon (auto Next.js)
│  ├─ opengraph-image.png  # OG share card 1200×630 (auto Next.js)
│  └─ twitter-image.png
├─ components/
│  ├─ Header.js            # client: sticky + menu mobile
│  ├─ BeforeAfter.js       # client: slider sebelum/sesudah (drag/klik/keyboard)
│  └─ ScrollReveal.js      # client: reveal on-scroll + fallback aman
├─ public/  before.jpg  after.jpg  treatment.jpg  dr-amalia.jpg
└─ ...config (next/postcss/tailwind v4/jsconfig/.gitignore)
```

## ⚠️ FOTO = STOK DEMO (wajib ganti sebelum live)
Semua foto di `public/` adalah **foto stok placeholder** (dipinjam dari demo Galuh) — **bukan** pasien/klinik ZRD asli:
| File | Dipakai di | Catatan |
|---|---|---|
| `/treatment.jpg` | Hero (background gelap) | stok demo |
| `/dr-amalia.jpg` | Section "Kenapa ZRD" | stok demo (bukan dokter ZRD) |
| `/before.jpg` `/after.jpg` | Slider Bukti | **stok demo** |

**Before/after JANGAN dipajang sebagai hasil nyata** sebelum diganti foto pasien ZRD **dengan izin tertulis**. Nama file di `public/` semua **lowercase** dan dirujuk sebagai `/nama.jpg` (Vercel = Linux = case-sensitive).

## Perlu diverifikasi / diisi sebelum tayang
- **Nomor WhatsApp** `0818-0956-9169` → di kode `6281809569169` — **PERLU VERIFIKASI** (sumber dari konten pihak ketiga). Semua tombol WA sudah pakai pesan ter-isi otomatis (`?text=`), termasuk deep-link per treatment.
- **Hari & jam buka** (sekarang "Selasa–Minggu 10.00–18.00" — tandai konfirmasi).
- **Nama dokter/tim** (riset menyebut "Dr. Hmes" & "Cinnia" — belum dipasang sebagai klaim; konfirmasi dulu).
- **Harga** sengaja tidak ditampilkan (diarahkan ke WA) — sesuaikan kalau mau dipasang.
- **Palet & logo**: warna cyan/teal adalah arah desain (asumsi); ganti di `app/globals.css` (`@theme`) kalau ada brand asli.
- Testimoni = **contoh**, ganti dengan testimoni asli (izin).

## Data terverifikasi (dari riset publik)
- IG **@zrdclinic**; lokasi **Sei Taib, samping Salon Winda, Kotabaru**; layanan termasuk **laser tato**, skin booster, perawatan jerawat.
