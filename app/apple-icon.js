import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Apple touch icon (<link rel="apple-touch-icon">) — badge "Z" brand.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0f3a5a",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "120px",
            height: "120px",
            borderRadius: "30px",
            backgroundColor: "#eb8317",
            color: "#0b2c44",
            fontSize: "82px",
            fontWeight: 700,
            fontFamily: "sans-serif",
          }}
        >
          Z
        </div>
      </div>
    ),
    { ...size }
  );
}
