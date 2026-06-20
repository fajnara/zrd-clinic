import Image from "next/image";
import Header from "@/components/Header";
import BeforeAfter from "@/components/BeforeAfter";
import ScrollReveal from "@/components/ScrollReveal";
import FloatingWA from "@/components/FloatingWA";
import { site, wa, waMain } from "@/lib/site";

const treatments = [
  {
    no: "01",
    name: "Laser Tato",
    tag: "Tattoo removal",
    star: true,
    for: "Buat kamu yang mau hapus tato — bertahap & lebih aman.",
    desc: "Teknologi laser memecah pigmen tinta supaya memudar tiap sesi. Jarang ada di kota kecil; di ZRD bisa.",
    wa: wa("Halo ZRD Clinic, saya tertarik Laser Tato (hapus tato)"),
  },
  {
    no: "02",
    name: "Skin Booster",
    tag: "Hydrating",
    for: "Kulit kusam & kering yang pengen lembap dari dalam.",
    desc: "Nutrisi disuntik terarah untuk kelembapan, elastisitas, dan kilau alami.",
    wa: wa("Halo ZRD Clinic, saya tertarik Skin Booster"),
  },
  {
    no: "03",
    name: "Perawatan Jerawat",
    tag: "Acne & facial",
    for: "Jerawat aktif dan bekas yang membandel.",
    desc: "Pendekatan bertahap: facial, perawatan, sampai rencana di rumah. Sabar, bukan dipaksa.",
    wa: wa("Halo ZRD Clinic, saya mau perawatan jerawat / facial"),
  },
  {
    no: "04",
    name: "Pencerahan & Peeling",
    tag: "Brightening",
    for: "Warna kulit nggak rata, mau tampak lebih cerah.",
    desc: "Angkat sel kulit mati & ratakan warna kulit dengan peeling terukur.",
    wa: wa("Halo ZRD Clinic, saya tertarik pencerahan / peeling"),
  },
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

/* ikon garis tipis, mengikuti warna teks */
function IconPin(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 21s-7-5.2-7-11a7 7 0 0 1 14 0c0 5.8-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
function IconClock(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export default function Page() {
  const year = new Date().getFullYear();

  return (
    <>
      <a className="skip-link" href="#perawatan">Lompat ke perawatan</a>
      <Header />

      <main>
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
                Rawat kulitmu,
                <br />
                tenang &amp; aman di{" "}
                <span className="italic text-orange-700">Kotabaru</span>.
              </h1>
              <p data-reveal className="mt-6 max-w-md text-lg text-slate-700">
                <strong className="font-semibold text-navy-900">Laser tato</strong>, skin booster,
                dan perawatan jerawat — ditangani tim ZRD Clinic dengan aman dan penjelasan yang jujur.
              </p>
              <div data-reveal className="mt-8 flex flex-wrap items-center gap-4">
                <a href={waMain} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 font-semibold text-navy-950 shadow-[0_12px_28px_-10px_rgba(235,131,23,.55)] transition hover:bg-orange-600">
                  Konsultasi via WhatsApp
                </a>
                <a href="#perawatan" className="inline-flex items-center gap-2 px-2 py-3 font-medium text-navy-900 transition hover:text-orange-700">
                  Lihat perawatan <span aria-hidden="true">↓</span>
                </a>
              </div>
              <p data-reveal className="mt-4 text-sm text-slate-500">
                Tanya-tanya dulu lewat WhatsApp — santai, tanpa wajib langsung datang.
              </p>
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
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-yellow-400 text-lg text-navy-950" aria-hidden="true">✦</span>
                <span className="block">
                  <strong className="block font-display text-sm font-semibold text-navy-900">Patch test dulu</strong>
                  <span className="text-xs text-slate-500">Aman sebelum sesi penuh</span>
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
                Hasil nyata butuh alat yang benar &amp; tangan yang teliti.
              </h2>
              <p data-reveal className="mt-5 text-slate-700">
                Kami bawa perawatan yang biasanya cuma ada di kota besar ke Kotabaru — dengan satu
                aturan: aman dulu. Untuk laser, selalu ada patch test dan penjelasan realistis
                soal berapa sesi yang dibutuhkan.
              </p>
              <ul data-reveal className="mt-7 space-y-4">
                {[
                  ["Patch test dulu", "Khusus laser, dites di area kecil sebelum sesi penuh."],
                  ["Penjelasan jujur", "Berapa sesi & ekspektasi hasil dijelaskan di awal."],
                  ["Alat terjaga", "Kebersihan & standar jadi prioritas."],
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

        {/* ===== TREATMENTS ===== */}
        <section id="perawatan" className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <div className="max-w-2xl">
              <p data-reveal className="eyebrow mb-4">Perawatan</p>
              <h2 data-reveal className="text-3xl font-semibold sm:text-4xl">
                Yang paling dicari di ZRD.
              </h2>
              <p data-reveal className="mt-4 text-slate-700">
                Dikurasi, bukan didaftar semua. Penjelasan jujur: untuk siapa &amp; apa yang bisa
                diharapkan. Klik untuk tanya langsung di WhatsApp.
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
                    t.star ? "border-orange-500/40 md:col-span-2" : "border-line hover:border-orange-500/40"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="font-display text-lg italic text-orange-600">{t.no}</span>
                      <h3 className="mt-1 font-display text-2xl font-semibold text-navy-900">
                        {t.name}
                        {t.star && (
                          <span className="ml-3 align-middle rounded-full bg-yellow-400 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-navy-950">
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
            <div className="sm:col-span-2 lg:col-span-1">
              <a href="#beranda" className="inline-flex items-center gap-2" aria-label="ZRD Clinic — beranda">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-orange-500 font-display text-base font-semibold text-navy-950">Z</span>
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

            {/* kunjungi */}
            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Kunjungi</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li className="flex gap-2.5">
                  <IconPin className="mt-0.5 shrink-0 text-orange-400" />
                  <span>{site.address.street}, {site.address.city}, Kalsel.</span>
                </li>
                <li className="flex gap-2.5">
                  <IconClock className="mt-0.5 shrink-0 text-orange-400" />
                  <span>{site.hours}</span>
                </li>
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
            <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-5 py-6 text-xs text-slate-300 sm:flex-row sm:items-center">
              <p>© {year} ZRD Clinic · Kotabaru, Kalimantan Selatan.</p>
              <p>Pratinjau desain.</p>
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
