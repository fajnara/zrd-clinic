import { ImageResponse } from "next/og";

// Generator kartu social-share (Open Graph & Twitter) — dipakai bersama oleh
// app/opengraph-image.js & app/twitter-image.js. Ganti desain di sini sekali,
// keduanya ikut. Satori butuh display:flex eksplisit di div yang punya >1 anak.

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";
export const ogAlt = "ZRD Clinic — Klinik Kulit & Laser di Kotabaru";

export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0f3a5a",
          color: "#ffffff",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* aksen glow */}
        <div
          style={{
            position: "absolute",
            top: "-160px",
            right: "-120px",
            width: "520px",
            height: "520px",
            borderRadius: "9999px",
            background: "radial-gradient(circle, rgba(235,131,23,0.35), rgba(235,131,23,0) 70%)",
          }}
        />

        {/* brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "76px",
              height: "76px",
              borderRadius: "20px",
              backgroundColor: "#eb8317",
              color: "#0b2c44",
              fontSize: "46px",
              fontWeight: 700,
            }}
          >
            Z
          </div>
          <div style={{ fontSize: "42px", fontWeight: 700 }}>ZRD Clinic</div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "28px",
              letterSpacing: "7px",
              textTransform: "uppercase",
              color: "#f4a23f",
              fontWeight: 600,
            }}
          >
            Klinik Kulit &amp; Laser · Kotabaru
          </div>
          <div style={{ fontSize: "74px", fontWeight: 700, lineHeight: 1.1, maxWidth: "940px" }}>
            Laser tato, skin booster &amp; perawatan jerawat.
          </div>
        </div>

        {/* footer */}
        <div style={{ display: "flex", fontSize: "26px", color: "#b3c3d4" }}>
          Konsultasi via WhatsApp · Instagram @zrdclinic
        </div>
      </div>
    ),
    { ...ogSize }
  );
}
