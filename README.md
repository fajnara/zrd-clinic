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
│  ├─ opengraph-image.js   # OG card 1200×630 di-generate (next/og ImageResponse)
│  ├─ twitter-image.js     # twitter:image (reuse generator yang sama)
│  └─ apple-icon.js        # apple-touch-icon 180×180 (generated)
├─ components/
│  ├─ Header.js            # client: sticky navy-frosted + menu mobile
│  ├─ BeforeAfter.js       # client: slider sebelum/sesudah (drag/klik/keyboard, next/image)
│  ├─ FloatingWA.js        # client: CTA WhatsApp mengambang (muncul saat scroll)
│  └─ ScrollReveal.js      # client: reveal on-scroll + fallback aman
├─ lib/
│  ├─ site.js              # SUMBER TUNGGAL: nomor WA, URL, alamat, jam, IG, tim (env-driven)
│  └─ ogImage.js           # desain kartu OG/Twitter (ganti di sini buat art custom)
├─ public/  before.jpg  after.jpg  treatment.jpg  dr-amalia.jpg
├─ .env.example            # template env (WA number, site URL)
└─ ...config (next/postcss/tailwind v4/jsconfig/.eslintrc.json/.gitignore)
```

## ⚠️ FOTO = STOK DEMO (wajib ganti sebelum live)
Semua foto di `public/` adalah **foto stok placeholder** (dipinjam dari demo Galuh) — **bukan** pasien/klinik ZRD asli:
| File | Dipakai di | Catatan |
|---|---|---|
| `/hero.webp` | Hero (foto utama) | stok demo |
| `/treatment.jpg` | Section "Kenapa ZRD" | stok demo |
| `/dr-amalia.jpg` | Kartu Tim — dokter ("dr. Sari Wulandari") | ⚠️ foto stok + **nama dummy**; ganti foto & nama dokter asli |
| `/rina.webp` | Kartu Tim — terapis ("Rina Maharani") | ⚠️ foto stok + **nama dummy**; ganti foto & nama asli |
| `/before.jpg` `/after.jpg` | Slider Testimoni | **stok demo** |

**Before/after JANGAN dipajang sebagai hasil nyata** sebelum diganti foto pasien ZRD **dengan izin tertulis**. Nama file di `public/` semua **lowercase** dan dirujuk sebagai `/nama.jpg` (Vercel = Linux = case-sensitive).

## Perlu diverifikasi / diisi sebelum tayang
- **Nomor WhatsApp** `0818-0956-9169` → `6281809569169` — **PERLU VERIFIKASI** (sumber dari konten pihak ketiga). Sekarang terpusat di `lib/site.js` / env `NEXT_PUBLIC_WA_NUMBER` (ubah sekali, semua tombol ikut). Semua tombol WA pakai pesan ter-isi otomatis (`?text=`), termasuk deep-link per treatment & CTA mengambang.
- **Hari & jam buka** (sekarang "Selasa–Minggu 10.00–18.00" — tandai konfirmasi).
- 🟥 **Tim — NAMA DUMMY** — `site.team` di `lib/site.js` sekarang pakai nama placeholder ("dr. Amalia Sari", "Rina Maharani") biar section keliatan lengkap. **WAJIB ganti nama asli sebelum live.** Kartu terapis pakai avatar inisial (foto stok lama diganti karena keliatan kayak pasien). **Nomor STR & izin klinik sengaja TIDAK dipalsukan** (badge cuma "STR aktif") — isi nomor asli di `cred` / `legal.note`; jangan tayang nomor lisensi karangan.
- 🟥 **Harga "mulai dari" — ANGKA DUMMY** — `priceFrom` tiap treatment di `app/page.js` sekarang diisi nilai contoh (`150000`, `350000`, dst, ditandai `// ⚠️ DUMMY`). **WAJIB ganti harga asli** sebelum dipakai iklan — pengunjung lihat angka ini. Set `null` kalau mau sembunyiin baris harga.
- **FAQ** — draft jawaban di `app/page.js` (array `faqs`); sesuaikan dengan kebijakan klinik asli.
- **Kepatuhan iklan medis** — testimoni & before/after untuk layanan medis-estetik diatur ketat (kode etik + kebijakan Meta Ads). Review dengan penanggung jawab medis sebelum dipakai di iklan berbayar.
- **Palet & logo**: lavender/yellow/orange/navy adalah arah desain (asumsi); ganti token warna di `app/globals.css` (`@theme`) kalau ada brand asli.
- **Disclaimer foto on-page udah dihapus** (sesuai permintaan) — jadi nggak ada lagi penanda "ilustrasi/bukan pasien asli" di situs. Foto `before/after`, `dr-amalia`, `treatment` di `public/` **masih stok demo**; wajib ganti dengan foto asli + izin sebelum live.
- Testimoni = **contoh**, ganti dengan testimoni asli (izin).

## Data terverifikasi (dari riset publik)
- IG **@zrdclinic**; lokasi **Sei Taib, samping Salon Winda, Kotabaru**; layanan termasuk **laser tato**, skin booster, perawatan jerawat.
