import { Fraunces, Inter } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

// Serif elegan untuk judul — kesan klinik/spa yang hangat (bukan tech).
const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "ZRD Clinic — Klinik Kecantikan & Laser di Kotabaru",
    template: "%s · ZRD Clinic",
  },
  description:
    "ZRD Clinic Kotabaru: laser tato (tattoo removal), skin booster, dan perawatan jerawat. Teknologi kulit yang biasanya cuma ada di kota besar — sekarang di Kotabaru.",
  keywords: [
    "klinik kecantikan Kotabaru",
    "laser tato Kotabaru",
    "tattoo removal Kalimantan Selatan",
    "skin booster Kotabaru",
    "perawatan jerawat Kotabaru",
    "ZRD Clinic",
  ],
  applicationName: "ZRD Clinic",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    title: "ZRD Clinic — Laser & Kulit di Kotabaru",
    description:
      "Laser tato, skin booster, perawatan jerawat. Klinik kulit modern di Kotabaru.",
    url: site.url,
    siteName: "ZRD Clinic",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZRD Clinic — Laser & Kulit di Kotabaru",
    description:
      "Laser tato, skin booster, perawatan jerawat. Klinik kulit modern di Kotabaru.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f2f5fb",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`no-js ${display.variable} ${body.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        {/* enable JS-only reveal styles; content stays visible if JS fails */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.remove('no-js');document.documentElement.classList.add('js');",
          }}
        />
        {children}
      </body>
    </html>
  );
}
