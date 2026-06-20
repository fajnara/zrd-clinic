import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "ZRD Clinic — Klinik Kecantikan & Laser di Kotabaru",
  description:
    "ZRD Clinic Kotabaru: laser tato (tattoo removal), skin booster, dan perawatan jerawat. Teknologi kulit yang biasanya cuma ada di kota besar — sekarang di Kotabaru.",
  metadataBase: new URL("https://zrd-clinic.example"),
  openGraph: {
    title: "ZRD Clinic — Laser & Kulit di Kotabaru",
    description:
      "Laser tato, skin booster, perawatan jerawat. Klinik kulit modern di Kotabaru.",
    type: "website",
    locale: "id_ID",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#06090c",
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
