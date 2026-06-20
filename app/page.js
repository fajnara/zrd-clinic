import Header from "@/components/Header";
import BeforeAfter from "@/components/BeforeAfter";
import ScrollReveal from "@/components/ScrollReveal";

const NUM = "6281809569169";
const wa = (t) => `https://wa.me/${NUM}?text=${encodeURIComponent(t)}`;
const waMain = wa("Halo ZRD Clinic, saya mau konsultasi");

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

const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "ZRD Clinic",
  description:
    "Klinik kecantikan & laser di Kotabaru: laser tato, skin booster, perawatan jerawat.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sei Taib (samping Salon Winda)",
    addressLocality: "Kotabaru",
    addressRegion: "Kalimantan Selatan",
    addressCountry: "ID",
  },
  telephone: "+6281809569169",
  sameAs: ["https://instagram.com/zrdclinic"],
};

export default function Page() {
  return (
    <>
      <a className="skip-link" href="#perawatan">Lompat ke perawatan</a>
      <Header />

      <main>
        {/* ===== HERO ===== */}
        <section id="beranda" className="relative flex min-h-[100svh] items-center overflow-hidden pt-24">
          <img
            src="/treatment.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/85 to-ink-950" />
          <div className="tech-grid absolute inset-0 opacity-60" aria-hidden="true" />
          <div
            className="absolute -right-40 -top-40 h-96 w-96 rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(47,214,223,.35), transparent 70%)" }}
            aria-hidden="true"
          />

          <div className="relative mx-auto w-full max-w-6xl px-5">
            <p data-reveal className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Klinik Kulit &amp; Laser — Kotabaru
            </p>
            <h1 data-reveal className="max-w-3xl text-4xl font-bold leading-[1.05] sm:text-6xl">
              Teknologi kulit &amp; laser,
              <br />
              sekarang di{" "}
              <span className="text-cyan-400">Kotabaru</span>.
            </h1>
            <p data-reveal className="mt-6 max-w-xl text-lg text-mist-300">
              <strong className="text-mist-100">Laser tato</strong>, skin booster, dan perawatan
              jerawat — ditangani tim ZRD Clinic. Yang biasanya cuma ada di kota besar.
            </p>
            <div data-reveal className="mt-8 flex flex-wrap items-center gap-4">
              <a href={waMain} target="_blank" rel="noopener"
                className="inline-flex rounded-full bg-cyan-400 px-7 py-3 font-semibold text-ink-950 transition hover:bg-cyan-300">
                Konsultasi via WhatsApp
              </a>
              <a href="#perawatan" className="inline-flex items-center gap-2 px-2 py-3 font-medium text-mist-100 transition hover:text-cyan-400">
                Lihat perawatan <span aria-hidden="true">↓</span>
              </a>
            </div>
            <ul data-reveal className="mt-10 flex flex-wrap gap-2">
              {["Laser Tato", "Skin Booster", "Acne & Facial", "Pencerahan"].map((c) => (
                <li key={c} className="rounded-full border border-line px-4 py-1.5 text-sm text-mist-300">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ===== ABOUT / KENAPA ZRD ===== */}
        <section id="tentang" className="border-t border-line bg-ink-900 py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
            <div data-reveal className="relative overflow-hidden rounded-2xl glow-cyan">
              <img src="/dr-amalia.jpg" alt="Tim klinik ZRD di ruang perawatan" className="h-[420px] w-full object-cover" />
            </div>
            <div>
              <p data-reveal className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Kenapa ZRD
              </p>
              <h2 data-reveal className="text-3xl font-bold sm:text-4xl">
                Hasil nyata butuh alat benar &amp; tangan yang teliti.
              </h2>
              <p data-reveal className="mt-5 text-mist-300">
                Kami bawa teknologi yang biasanya cuma di kota besar ke Kotabaru — dengan satu
                aturan: aman dulu. Untuk laser, selalu ada patch test dan penjelasan realistis
                soal berapa sesi yang dibutuhkan.
              </p>
              <ul data-reveal className="mt-6 space-y-3">
                {[
                  ["Patch test dulu", "Khusus laser, dites di area kecil sebelum sesi penuh."],
                  ["Penjelasan jujur", "Berapa sesi & ekspektasi hasil dijelaskan di awal."],
                  ["Alat terjaga", "Kebersihan & standar jadi prioritas."],
                ].map(([h, d]) => (
                  <li key={h} className="flex gap-3 border-l-2 border-cyan-400 pl-4">
                    <span className="block">
                      <strong className="block font-display text-mist-100">{h}</strong>
                      <span className="text-sm text-mist-500">{d}</span>
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
              <p data-reveal className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Perawatan
              </p>
              <h2 data-reveal className="text-3xl font-bold sm:text-4xl">
                Yang paling dicari di ZRD.
              </h2>
              <p data-reveal className="mt-4 text-mist-300">
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
                  rel="noopener"
                  data-reveal
                  className={`group relative block overflow-hidden rounded-2xl border bg-ink-850 p-7 transition hover:-translate-y-1 ${
                    t.star ? "border-cyan-400/50 md:col-span-2" : "border-line hover:border-cyan-400/40"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="font-display text-sm text-cyan-400">{t.no}</span>
                      <h3 className="mt-1 font-display text-2xl font-semibold text-mist-100">
                        {t.name}
                        {t.star && (
                          <span className="ml-3 align-middle rounded-full bg-cyan-400 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-ink-950">
                            Unggulan
                          </span>
                        )}
                      </h3>
                      <p className="mt-1 text-sm text-cyan-300/80">{t.tag}</p>
                    </div>
                    <span className="shrink-0 text-mist-500 transition group-hover:text-cyan-400" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-mist-300">{t.for}</p>
                  <p className="mt-2 text-sm text-mist-500">{t.desc}</p>
                  <span className="mt-5 inline-block text-sm font-medium text-cyan-400">
                    Tanya via WhatsApp →
                  </span>
                </a>
              ))}
            </div>
            <p data-reveal className="mt-8 text-center text-sm text-mist-500">
              Harga menyesuaikan kondisi &amp; jumlah sesi — paling enak tanya dulu lewat WhatsApp.
            </p>
          </div>
        </section>

        {/* ===== PROOF ===== */}
        <section id="bukti" className="border-y border-line bg-ink-900 py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-5">
            <div className="mx-auto max-w-2xl text-center">
              <p data-reveal className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Bukti
              </p>
              <h2 data-reveal className="text-3xl font-bold sm:text-4xl">Geser, lihat bedanya.</h2>
              <p data-reveal className="mt-4 text-mist-300">
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
                <blockquote key={q.n} data-reveal className="rounded-2xl border border-line bg-ink-850 p-6">
                  <p className="text-mist-100">{`“${q.t}”`}</p>
                  <footer className="mt-4 text-sm text-cyan-300">
                    {q.n} · <span className="text-mist-500">{q.l}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
            <p data-reveal className="mt-6 text-center text-xs text-mist-500">
              Foto &amp; testimoni di atas masih contoh untuk pratinjau — akan diganti milik pasien, atas izin.
            </p>
          </div>
        </section>

        {/* ===== STEPS ===== */}
        <section id="proses" className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <div className="max-w-2xl">
              <p data-reveal className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Proses
              </p>
              <h2 data-reveal className="text-3xl font-bold sm:text-4xl">Empat langkah, tanpa drama.</h2>
            </div>
            <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map(([no, h, d]) => (
                <li key={no} data-reveal className="border-t border-line pt-5">
                  <span className="font-display text-3xl font-bold text-cyan-400">{no}</span>
                  <h3 className="mt-2 font-display text-lg font-semibold text-mist-100">{h}</h3>
                  <p className="mt-1 text-sm text-mist-500">{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ===== VISIT ===== */}
        <section id="kunjungi" className="border-t border-line bg-ink-900 py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 md:grid-cols-2">
            <div>
              <p data-reveal className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Kunjungi
              </p>
              <h2 data-reveal className="text-3xl font-bold sm:text-4xl">Mampir ke ZRD Clinic.</h2>
              <div data-reveal className="mt-6 border-b border-line pb-5">
                <h3 className="font-display text-xl font-semibold text-mist-100">Kotabaru</h3>
                <p className="mt-1 text-mist-300">Sei Taib (samping Salon Winda), Kotabaru, Kalsel.</p>
                <a href={waMain} target="_blank" rel="noopener"
                  className="mt-2 inline-block font-medium text-cyan-400 underline underline-offset-4">
                  WhatsApp 0818-0956-9169
                </a>
              </div>
              <p data-reveal className="mt-5 text-mist-300">
                <strong className="text-mist-100">Jam buka</strong>
                <br />
                Selasa–Minggu · 10.00–18.00
                <br />
                <span className="text-xs text-mist-500">*hari/jam &amp; nomor WA perlu dikonfirmasi klinik.</span>
              </p>
            </div>
            <div data-reveal className="overflow-hidden rounded-2xl border border-line">
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

        {/* ===== FOOTER ===== */}
        <footer id="kontak" className="bg-ink-950">
          <div className="mx-auto max-w-6xl px-5 py-20 text-center">
            <p data-reveal className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Siap mulai?
            </p>
            <h2 data-reveal className="mx-auto max-w-xl text-3xl font-bold sm:text-5xl">
              Satu chat, kami bantu rencanakan.
            </h2>
            <a data-reveal href={waMain} target="_blank" rel="noopener"
              className="mt-8 inline-flex rounded-full bg-cyan-400 px-8 py-3.5 font-semibold text-ink-950 transition hover:bg-cyan-300">
              Konsultasi sekarang
            </a>
          </div>
          <div className="border-t border-line">
            <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-8 sm:flex-row sm:items-center">
              <span className="font-display text-lg font-semibold">
                ZRD<span className="text-cyan-400">.</span>Clinic
              </span>
              <a href="https://instagram.com/zrdclinic" target="_blank" rel="noopener" className="text-sm text-cyan-300 hover:text-mist-100">
                Instagram @zrdclinic
              </a>
              <p className="text-xs text-mist-500">
                © {new Date().getFullYear()} ZRD Clinic · Kotabaru, Kalsel.
                <br />
                Pratinjau desain · foto &amp; testimoni masih contoh.
              </p>
            </div>
          </div>
        </footer>
      </main>

      <ScrollReveal />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
