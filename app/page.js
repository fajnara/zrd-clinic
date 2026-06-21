import Image from "next/image";
import Header from "@/components/Header";
import BeforeAfter from "@/components/BeforeAfter";
import ScrollReveal from "@/components/ScrollReveal";
import FloatingWA from "@/components/FloatingWA";
import { site, wa, waMain } from "@/lib/site";

// priceFrom = harga "mulai dari" (rupiah). ⚠️ null = baris harga disembunyikan.
// Isi angkanya kalau mau tampil, mis. priceFrom: 150000.
const treatments = [
  {
    no: "01",
    name: "Laser Tato",
    tag: "Tattoo removal",
    star: true,
    priceFrom: 150000, // ⚠️ DUMMY — ganti harga asli sebelum live
    for: "Penghapusan tato yang bertahap dan aman.",
    desc: "Menggunakan teknologi laser presisi untuk memecah pigmen tinta secara efektif di setiap sesinya.",
    wa: wa("Halo ZRD Clinic, saya tertarik Laser Tato (hapus tato)"),
  },
  {
    no: "02",
    name: "Skin Booster",
    tag: "Hydrating",
    priceFrom: 350000, // ⚠️ DUMMY
    for: "Solusi intensif untuk kulit kusam dan kering..",
    desc: "Nutrisi disuntikkan secara terarah untuk mengembalikan kelembapan, elastisitas, dan kilau alami dari dalam.",
    wa: wa("Halo ZRD Clinic, saya tertarik Skin Booster"),
  },
  {
    no: "03",
    name: "Perawatan Jerawat",
    tag: "Acne & facial",
    priceFrom: 100000, // ⚠️ DUMMY
    for: "Penanganan tuntas untuk jerawat aktif dan bekas membandel.",
    desc: "Pendekatan bertahap dan terukur—dari tindakan di klinik hingga panduan skincare di rumah.",
    wa: wa("Halo ZRD Clinic, saya mau perawatan jerawat / facial"),
  },
  {
    no: "04",
    name: "Pencerahan & Peeling",
    tag: "Brightening",
    priceFrom: 200000, // ⚠️ DUMMY
    for: "Kembalikan kecerahan pada warna kulit yang tidak merata.",
    desc: "Menggunakan eksfoliasi medis yang aman untuk mengangkat sel kulit mati dengan lembut.",
    wa: wa("Halo ZRD Clinic, saya tertarik pencerahan / peeling"),
  },
];

// Format rupiah ringkas: 150000 -> "Rp150.000"
const rupiah = (n) => "Rp" + n.toLocaleString("id-ID");

// Inisial untuk avatar fallback (buang gelar "dr."): "Rina Maharani" -> "RM"
const initials = (name) =>
  name
    .replace(/^dr\.?\s*/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

const faqs = [
  [
    "Berapa sesi yang dibutuhkan untuk menghilangkan tato?",
    "Jumlah sesi bergantung pada ukuran, warna tinta, kedalaman, dan usia tato. Biasanya diperlukan beberapa sesi dengan jeda waktu tertentu. Saat konsultasi dan patch test, kami akan memberikan perkiraan medis yang realistis untuk kondisi Anda.",
  ],
  [
    "Apakah perawatannya terasa sakit?",
    "Toleransi rasa sakit setiap orang berbeda. Sensasi laser umumnya seperti terkena jepretan karet gelang. Kenyamanan Anda adalah prioritas kami; kami akan menyesuaikan intensitasnya dan menjelaskan setiap tahapan sebelum perawatan dimulai.",
  ],
  [
    "Apakah ada efek samping atau downtime?",
    "Beberapa perawatan mungkin menimbulkan kemerahan atau kulit sensitif sementara. Kami akan memberikan panduan aftercare (perawatan pasca-tindakan) yang detail agar proses pemulihan kulit Anda berjalan lancar dan aman.",
  ],
  [
    "Apakah perawatannya aman untuk kulit saya?",
    "Kondisi kulit Anda akan dievaluasi secara menyeluruh saat sesi konsultasi. Khusus untuk laser, kami selalu melakukan patch test (uji area kecil) terlebih dahulu sebelum sesi penuh untuk memastikan keamanannya.",
  ],
  [
    "Berapa biaya perawatannya?",
    "Biaya bervariasi tergantung kondisi, area yang dirawat, dan jumlah sesi. Anda bisa melihat estimasi harga “mulai dari” pada menu layanan kami. Rincian biaya yang pasti akan dijelaskan secara transparan saat konsultasi, tanpa ada keharusan untuk langsung mengambil tindakan.",
  ],
  [
    "Apakah harus booking jadwal dulu atau bisa langsung datang?",
    "Kami sangat menyarankan Anda membuat janji temu via WhatsApp agar kami bisa menyiapkan slot waktu tanpa perlu antre lama. Namun, Anda tetap dipersilakan mampir di jam operasional klinik jika hanya ingin berkonsultasi ringan.",
  ],
];

const steps = [
  ["01", "Konsultasi", "Cerita keluhanmu. Kondisi kulit dicek dulu — santai, tanpa paksaan."],
  ["02", "Patch test & rencana", "Untuk laser, dites dulu di area kecil. Rencana disusun sesuai targetmu."],
  ["03", "Sesi treatment", "Dikerjakan & diawasi dengan alat yang terjaga kebersihannya."],
  ["04", "Pemulihan & kontrol", "Kami temani proses pemulihan dan sesi lanjutan kalau perlu."],
];

const quotes = [
  { t: "Tatoku udah 3 sesi dan jelas banget memudarnya. Dijelasin realistis dari awal, nggak overpromise.", n: "Andre", l: "Kotabaru" },
  { t: "Jerawatku berkurang pelan tapi konsisten. Adminnya ramah, tempatnya nyaman.", n: "Putri", l: "Kotabaru" },
  { t: "Baru tahu di Kotabaru ada laser. Hemat nggak usah ke kota besar.", n: "Wahyu", l: "Pulau Laut" },
];

const footerLinks = [
  ["#perawatan", "Perawatan"],
  ["#testimoni", "Testimoni"],
  ["#proses", "Proses"],
  ["#faq", "FAQ"],
  ["#kunjungi", "Kunjungi"],
];

const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: site.name,
  description:
    "Klinik kecantikan & laser di Kotabaru: laser tato, skin booster, perawatan jerawat.",
  url: site.url,
  image: `${site.url}/opengraph-image.png`,
  telephone: site.phoneE164,
  priceRange: "$$",
  medicalSpecialty: "Dermatology",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  areaServed: [
    { "@type": "City", name: "Kotabaru" },
    { "@type": "AdministrativeArea", name: "Pulau Laut" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "10:00",
    closes: "18:00",
  },
  sameAs: [site.instagram],
};

export default function Page() {
  const year = new Date().getFullYear();

  return (
    <>
      <a className="skip-link" href="#main">Lompat ke konten</a>
      <Header />

      <main id="main" tabIndex={-1}>
        {/* ===== HERO ===== */}
        <section id="beranda" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24">
          {/* glow hangat lembut */}
          <div aria-hidden="true" className="pointer-events-none absolute -right-28 -top-24 h-[26rem] w-[26rem] rounded-full opacity-80 blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(235,131,23,.14), transparent 70%)" }} />
          <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-48 h-72 w-72 rounded-full opacity-70 blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(245,197,24,.20), transparent 70%)" }} />

          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:gap-10">
            <div>
              <p data-reveal className="eyebrow mb-5">Klinik Kulit &amp; Laser · Kotabaru</p>
              <h1 data-reveal className="text-4xl font-semibold leading-[1.08] sm:text-6xl">
                Standar Baru,
                <br />
                Perawatan Kulit di{" "}
                <span className="italic text-orange-700">Kotabaru</span>.
              </h1>
              <p data-reveal className="mt-6 max-w-md text-lg text-slate-700">
                <strong className="font-semibold text-navy-900">Hadirkan Teknologi</strong> medis terdepan dan sentuhan ahli untuk kebutuhan estetika Anda. Mulai dari penghapusan tato yang aman, skin booster, hingga perawatan jerawat komprehensif.
              </p>
              <div data-reveal className="mt-8 flex flex-wrap items-center gap-4">
                <a href={waMain} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 font-semibold text-navy-950 shadow-[0_12px_28px_-10px_rgba(235,131,23,.55)] transition hover:bg-orange-600">
                  Konsultasi via WhatsApp
                </a>
                <a href="#perawatan" className="inline-flex items-center gap-2 px-2 py-3 font-medium text-navy-900 transition hover:text-orange-700">
                  Jelajahi Perawatan <span aria-hidden="true">↓</span>
                </a>
              </div>
              {/* <p data-reveal className="mt-4 text-sm text-slate-500">
                Tanya-tanya dulu lewat WhatsApp — santai, tanpa wajib langsung datang.
              </p> */}
              <ul data-reveal className="mt-9 flex flex-wrap gap-2">
                {["Laser Tato", "Skin Booster", "Acne & Facial", "Pencerahan"].map((c) => (
                  <li key={c} className="rounded-full border border-line bg-white/70 px-4 py-1.5 text-sm text-slate-700">
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* foto utama + kartu kepercayaan */}
            <div data-reveal className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] soft-shadow">
                <Image
                  src="/treatment.jpg"
                  alt="Suasana ruang perawatan ZRD Clinic"
                  fill
                  priority
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 soft-shadow sm:-left-6">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-orange-500 text-lg text-navy-950" aria-hidden="true">✦</span>
                <span className="block">
                  <strong className="block font-display text-sm font-semibold text-navy-900">Patch Test Gratis</strong>
                  <span className="text-xs text-slate-500">Pastikan kulitmu siap sebelum mulai</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== ABOUT / KENAPA ZRD ===== */}
        <section id="tentang" className="border-y border-line bg-base-100 py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
            <div data-reveal className="relative h-[440px] overflow-hidden rounded-[2rem] soft-shadow">
              <Image
                src="/dr-amalia.jpg"
                alt="Tim klinik ZRD di ruang perawatan"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <p data-reveal className="eyebrow mb-4">Kenapa ZRD</p>
              <h2 data-reveal className="text-3xl font-semibold sm:text-4xl">
                Perawatan Tepat dari Tangan yang Peduli.
              </h2>
              <p data-reveal className="mt-5 text-slate-700">
                Merawat kulit seharusnya menjadi pengalaman yang menenangkan. Kami hadir di Kotabaru dengan komitmen penuh pada kenyamanan Anda: mengedepankan keamanan prosedur dan memberikan penjelasan medis yang mudah dipahami.
              </p>
              <ul data-reveal className="mt-7 space-y-4">
                {[
                  ["Aman Sebelum Bertindak", "Patch test wajib untuk perawatan laser guna menghindari iritasi."],
                  ["Komunikasi Terbuka", "Tidak ada janji berlebihan, hanya ekspektasi medis yang jujur dan realistis."],
                  ["Standar Medis Ketat", "Alat modern yang selalu terawat dan terjaga kebersihannya untuk ketenangan Anda."],
                ].map(([h, d]) => (
                  <li key={h} className="flex gap-4 border-l-2 border-orange-500 pl-4">
                    <span className="block">
                      <strong className="block font-display text-lg font-semibold text-navy-900">{h}</strong>
                      <span className="text-sm text-slate-500">{d}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ===== TIM & LEGALITAS (tayang saat site.showTeam = true) ===== */}
        {site.showTeam && (
          <section id="tim" className="py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-5">
              <div className="max-w-2xl">
                <p data-reveal className="eyebrow mb-4">Tim Medis &amp; Legalitas</p>
                <h2 data-reveal className="text-3xl font-semibold sm:text-4xl">
                  Keahlian Medis yang Terpercaya.
                </h2>
                <p data-reveal className="mt-4 text-slate-700">
                  Tindakan estetik membutuhkan ketelitian dan lisensi medis. Kenali para profesional kami yang berdedikasi untuk memberikan perawatan terbaik dan teraman untuk Anda.
                </p>
              </div>

              <div className="mt-12 grid max-w-3xl gap-5 sm:grid-cols-2">
                {site.team.map((m) => (
                  <div key={m.name} data-reveal className="rounded-3xl border border-line bg-white p-6">
                    <div className="relative mb-4 h-56 overflow-hidden rounded-2xl">
                      {m.photo ? (
                        <Image
                          src={m.photo}
                          alt={`${m.name} — ${m.role} ZRD Clinic`}
                          fill
                          sizes="(min-width: 640px) 45vw, 100vw"
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-orange-100">
                          <span className="font-display text-5xl font-semibold text-orange-700" aria-hidden="true">
                            {initials(m.name)}
                          </span>
                        </div>
                      )}
                    </div>
                    <h3 className="font-display text-xl font-semibold text-navy-900">{m.name}</h3>
                    <p className="mt-0.5 text-sm text-slate-500">{m.role}</p>
                    <span className="mt-3 inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                      {m.cred}
                    </span>
                  </div>
                ))}
              </div>

              <p data-reveal className="mt-8 text-sm text-slate-500">
                <strong className="font-semibold text-navy-900">Legalitas Aman :</strong>{" "}
                {site.legal.note}
              </p>
            </div>
          </section>
        )}

        {/* ===== TREATMENTS ===== */}
        <section id="perawatan" className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <div className="max-w-2xl">
              <p data-reveal className="eyebrow mb-4">Layanan Unggulan</p>
              <h2 data-reveal className="text-3xl font-semibold sm:text-4xl">
                Yang Paling Sering dicari di ZRD.
              </h2>
              <p data-reveal className="mt-4 text-slate-700">
                Rangkaian layanan yang dikurasi khusus untuk efektivitas maksimal. Penjelasan transparan mengenai ekspektasi hasil, langsung dari ahlinya.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {treatments.map((t) => (
                <a
                  key={t.no}
                  href={t.wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-reveal
                  className={`group relative block overflow-hidden rounded-3xl border bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(15,42,68,.32)] ${
                    t.star ? "border-orange-500/40" : "border-line hover:border-orange-500/40"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="font-display text-lg italic text-orange-600">{t.no}</span>
                      <h3 className="mt-1 font-display text-2xl font-semibold text-navy-900">
                        {t.name}
                        {t.star && (
                          <span className="ml-3 align-middle rounded-full bg-orange-500 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-navy-950">
                            Unggulan
                          </span>
                        )}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-orange-700">{t.tag}</p>
                    </div>
                    <span className="shrink-0 text-slate-500 transition group-hover:text-orange-700" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-slate-700">{t.for}</p>
                  <p className="mt-2 text-sm text-slate-500">{t.desc}</p>
                  {t.priceFrom != null && (
                    <p className="mt-4 text-sm text-navy-900">
                      <span className="text-slate-500">Mulai dari</span>{" "}
                      <span className="font-display text-lg font-semibold">{rupiah(t.priceFrom)}</span>
                    </p>
                  )}
                  <span className="mt-5 inline-block text-sm font-semibold text-orange-700">
                    Tanya via WhatsApp →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TESTIMONI ===== */}
        <section id="testimoni" className="border-y border-line bg-base-100 py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-5">
            <div className="mx-auto max-w-2xl text-center">
              <p data-reveal className="eyebrow mb-4 justify-center">Testimoni</p>
              <h2 data-reveal className="text-3xl font-semibold sm:text-4xl">Geser, lihat bedanya.</h2>
              <p data-reveal className="mt-4 text-slate-700">
                Seret pembanding untuk melihat sebelum &amp; sesudah perawatan.
              </p>
            </div>

            <div data-reveal className="mx-auto mt-10 max-w-3xl">
              <BeforeAfter
                beforeSrc="/before.jpg"
                afterSrc="/after.jpg"
                beforeAlt="Kulit wajah sebelum perawatan — terdapat jerawat aktif"
                afterAlt="Kulit wajah setelah rangkaian perawatan — tampak lebih bersih"
              />
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {quotes.map((q) => (
                <blockquote key={q.n} data-reveal className="rounded-3xl border border-line bg-white p-6">
                  <span className="font-display text-3xl leading-none text-yellow-400" aria-hidden="true">“</span>
                  <p className="mt-1 text-slate-700">{q.t}</p>
                  <footer className="mt-4 text-sm font-medium text-orange-700">
                    {q.n} · <span className="text-slate-500">{q.l}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* ===== STEPS ===== */}
        <section id="proses" className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <div className="max-w-2xl">
              <p data-reveal className="eyebrow mb-4">Proses</p>
              <h2 data-reveal className="text-3xl font-semibold sm:text-4xl">Empat langkah, tanpa drama.</h2>
            </div>
            <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map(([no, h, d]) => (
                <li key={no} data-reveal className="border-t-2 border-line pt-5">
                  <span className="font-display text-4xl font-semibold italic text-orange-600">{no}</span>
                  <h3 className="mt-2 font-display text-lg font-semibold text-navy-900">{h}</h3>
                  <p className="mt-1 text-sm text-slate-500">{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section id="faq" className="py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-5">
            <div className="max-w-2xl">
              <p data-reveal className="eyebrow mb-4">FAQ</p>
              <h2 data-reveal className="text-3xl font-semibold sm:text-4xl">
                Pertanyaan yang Sering Diajukan (FAQ)
              </h2>
              <p data-reveal className="mt-4 text-slate-700">
                Punya pertanyaan sebelum memulai perawatan? Temukan jawabannya di sini. Jika masih ada yang kurang jelas, jangan ragu untuk menghubungi kami via WhatsApp.
              </p>
            </div>

            <div data-reveal className="mt-10 divide-y divide-line overflow-hidden rounded-3xl border border-line bg-white">
              {faqs.map(([q, a]) => (
                <details key={q} className="faq">
                  <summary className="faq__q">
                    <span>{q}</span>
                    <span className="faq__icon" aria-hidden="true">+</span>
                  </summary>
                  <p className="faq__a">{a}</p>
                </details>
              ))}
            </div>

            <p data-reveal className="mt-8 text-center">
              <a href={waMain} target="_blank" rel="noopener noreferrer"
                className="inline-block text-sm font-semibold text-orange-700 hover:text-orange-600">
                Masih ada pertanyaan? Chat WhatsApp →
              </a>
            </p>
          </div>
        </section>

        {/* ===== VISIT ===== */}
        <section id="kunjungi" className="border-y border-line bg-base-100 py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 md:grid-cols-2">
            <div>
              <p data-reveal className="eyebrow mb-4">Kunjungi</p>
              <h2 data-reveal className="text-3xl font-semibold sm:text-4xl">Mampir ke ZRD Clinic.</h2>
              <div data-reveal className="mt-6 border-b border-line pb-5">
                <h3 className="font-display text-xl font-semibold text-navy-900">Kotabaru</h3>
                <p className="mt-1 text-slate-700">{site.address.street}, {site.address.city}, Kalsel.</p>
                <a href={waMain} target="_blank" rel="noopener noreferrer"
                  className="mt-2 inline-block font-medium text-orange-700 underline underline-offset-4 hover:text-orange-600">
                  WhatsApp {site.phoneDisplay}
                </a>
              </div>
              <p data-reveal className="mt-5 text-slate-700">
                <strong className="font-semibold text-navy-900">Jam buka</strong>
                <br />
                {site.hours}
              </p>
            </div>
            <div data-reveal className="overflow-hidden rounded-[2rem] border border-line soft-shadow">
              <iframe
                title="Peta lokasi ZRD Clinic — Kotabaru"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[360px] w-full"
                src="https://maps.google.com/maps?q=Sei%20Taib%2C%20Kotabaru%2C%20Kalimantan%20Selatan&z=14&output=embed"
              />
            </div>
          </div>
        </section>
      </main>

      {/* ===== CTA + FOOTER ===== */}
      <footer id="kontak">
        {/* CTA band */}
        <section className="relative overflow-hidden bg-orange-100">
          <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full opacity-70 blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(235,131,23,.18), transparent 70%)" }} />
          <div className="relative mx-auto max-w-2xl px-5 py-20 text-center sm:py-24">
            <p data-reveal className="eyebrow mb-4 justify-center">Siap mulai?</p>
            <h2 data-reveal className="text-3xl font-semibold sm:text-5xl">
              Satu chat, kami bantu rencanakan perawatanmu.
            </h2>
            <p data-reveal className="mx-auto mt-4 max-w-md text-slate-700">
              Cerita keluhanmu — kami jawab jujur, tanpa paksaan.
            </p>
            <a data-reveal href={waMain} target="_blank" rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-3.5 font-semibold text-navy-950 shadow-[0_14px_30px_-10px_rgba(235,131,23,.5)] transition hover:bg-orange-600">
              Konsultasi via WhatsApp
            </a>
          </div>
        </section>

        {/* kolom footer (navy) */}
        <div className="bg-navy-900 text-slate-300">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4">
            {/* brand */}
            <div className="sm:col-span-2 lg:col-span-2">
              <a href="#beranda" className="inline-flex items-center gap-2" aria-label="ZRD Clinic — beranda">
                <span aria-hidden="true" className="grid h-9 w-9 place-items-center rounded-xl bg-orange-500 font-display text-base font-semibold text-navy-950">Z</span>
                <span className="font-display text-xl font-semibold text-white">
                  ZRD<span className="text-yellow-400">.</span>Clinic
                </span>
              </a>
              <p className="mt-4 max-w-xs text-sm text-slate-300">
                Klinik kulit &amp; laser di Kotabaru — laser tato, skin booster, perawatan jerawat.
                Aman dulu, hasil kemudian.
              </p>
            </div>

            {/* navigasi */}
            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Jelajah</h3>
              <ul className="mt-4 space-y-2.5">
                {footerLinks.map(([href, label]) => (
                  <li key={href}>
                    <a href={href} className="text-sm text-slate-300 transition hover:text-orange-400">{label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* kontak */}
            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Kontak</h3>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a href={waMain} target="_blank" rel="noopener noreferrer"
                    className="text-sm text-slate-300 transition hover:text-orange-400">
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href={`tel:${site.phoneE164}`}
                    className="text-sm text-slate-300 transition hover:text-orange-400">
                    Telepon
                  </a>
                </li>
                <li>
                  <a href={site.instagram} target="_blank" rel="noopener noreferrer"
                    className="text-sm text-slate-300 transition hover:text-orange-400">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* bottom bar */}
          <div className="border-t border-white/10">
            <div className="mx-auto max-w-6xl px-5 py-6 text-xs text-slate-300">
              <p>© {year} ZRD Clinic · Kotabaru, Kalimantan Selatan.</p>
            </div>
          </div>
        </div>
      </footer>

      <FloatingWA />
      <ScrollReveal />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
