# ZRD Clinic — Kotabaru (website)

Situs marketing **Next.js (App Router) + JavaScript + Tailwind CSS v4**, deploy-ready Vercel. Arah desain: latar **lavender-white**, aksen **orange `#eb8317`** + sorotan **yellow**, struktur/teks/footer **navy**, judul serif (Fraunces). Bersih & tepercaya, dengan **Laser Tato** sebagai bintang utama.

## Jalankan
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # produksi
npm run lint     # ESLint (next/core-web-vitals)
```
Deploy: import folder ini ke Vercel (auto-detect Next.js). **Belum di-push/di-deploy** — itu langkah kamu.

## Konfigurasi (env) — isi ini sebelum live
Semua data bisnis terpusat di **`lib/site.js`** dan bisa dioverride lewat env (lihat `.env.example`):

| Env | Default sementara | Wajib |
|---|---|---|
| `NEXT_PUBLIC_WA_NUMBER` | `6281809569169` (≈ 0818-0956-9169) | ⚠️ verifikasi nomor |
| `NEXT_PUBLIC_SITE_URL` | `https://zrd-clinic.vercel.app` | ⚠️ ganti ke domain asli |

`SITE_URL` dipakai untuk **OG image, canonical, robots.txt, sitemap.xml** — kalau salah, preview share & SEO ikut salah. Set di **Vercel → Project → Settings → Environment Variables**, lalu redeploy.

## Struktur
```
zrd-clinic/
├─ app/
│  ├─ layout.js            # font (Space Grotesk + Inter via next/font), metadata, OG, canonical, robots
│  ├─ page.js              # seluruh section + JSON-LD MedicalClinic (next/image)
│  ├─ robots.js            # /robots.txt (auto Next.js)
│  ├─ sitemap.js           # /sitemap.xml (auto Next.js)
│  ├─ globals.css          # Tailwind v4 + token @theme + CSS before/after & reveal
│  ├─ icon.png             # favicon (auto Next.js)
│  ├─ opengraph-image.png  # OG share card 1200×630 (auto Next.js)
│  └─ twitter-image.png
├─ components/
│  ├─ Header.js            # client: sticky + menu mobile
│  ├─ BeforeAfter.js       # client: slider sebelum/sesudah (drag/klik/keyboard, next/image)
│  ├─ FloatingWA.js        # client: CTA WhatsApp mengambang (muncul saat scroll)
│  └─ ScrollReveal.js      # client: reveal on-scroll + fallback aman
├─ lib/
│  └─ site.js              # SUMBER TUNGGAL: nomor WA, URL, alamat, jam, IG (env-driven)
├─ public/  before.jpg  after.jpg  treatment.jpg  dr-amalia.jpg
├─ .env.example            # template env (WA number, site URL)
└─ ...config (next/postcss/tailwind v4/jsconfig/.eslintrc.json/.gitignore)
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
- **Nomor WhatsApp** `0818-0956-9169` → `6281809569169` — **PERLU VERIFIKASI** (sumber dari konten pihak ketiga). Sekarang terpusat di `lib/site.js` / env `NEXT_PUBLIC_WA_NUMBER` (ubah sekali, semua tombol ikut). Semua tombol WA pakai pesan ter-isi otomatis (`?text=`), termasuk deep-link per treatment & CTA mengambang.
- **Hari & jam buka** (sekarang "Selasa–Minggu 10.00–18.00" — tandai konfirmasi).
- **Tim & Legalitas** — section `#tim` sekarang **tayang versi netral** (tanpa nama palsu: "Dokter Penanggung Jawab" + badge "STR aktif", dll) di `lib/site.js` (`site.team`, `site.legal.note`). Upgrade pas ada data asli: ganti `name` jadi nama dokter, isi nomor STR di `cred`, ganti foto, dan isi `legal.note` dengan nomor izin + alamat lengkap. (Set `showTeam: false` kalau mau sembunyiin lagi.)
- **Harga "mulai dari"** — isi field `priceFrom` (rupiah) tiap treatment di `app/page.js`. Kalau `null`, baris harga otomatis disembunyikan. Detail penuh tetap diarahkan ke WA.
- **FAQ** — draft jawaban di `app/page.js` (array `faqs`); sesuaikan dengan kebijakan klinik asli.
- **Kepatuhan iklan medis** — testimoni & before/after untuk layanan medis-estetik diatur ketat (kode etik + kebijakan Meta Ads). Review dengan penanggung jawab medis sebelum dipakai di iklan berbayar.
- **Palet & logo**: lavender/yellow/orange/navy adalah arah desain (asumsi); ganti token warna di `app/globals.css` (`@theme`) kalau ada brand asli.
- **Disclaimer foto on-page udah dihapus** (sesuai permintaan) — jadi nggak ada lagi penanda "ilustrasi/bukan pasien asli" di situs. Foto `before/after`, `dr-amalia`, `treatment` di `public/` **masih stok demo**; wajib ganti dengan foto asli + izin sebelum live.
- Testimoni = **contoh**, ganti dengan testimoni asli (izin).

## Data terverifikasi (dari riset publik)
- IG **@zrdclinic**; lokasi **Sei Taib, samping Salon Winda, Kotabaru**; layanan termasuk **laser tato**, skin booster, perawatan jerawat.
