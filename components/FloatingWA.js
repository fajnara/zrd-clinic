"use client";

import { useEffect, useState } from "react";
import { waMain } from "@/lib/site";

// CTA WhatsApp mengambang. Muncul setelah pengguna scroll sedikit, dan
// disembunyikan saat footer (yang punya CTA besar) terlihat — biar nggak dobel.
export default function FloatingWA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 220;
      setShow(window.scrollY > 600 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={waMain}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Konsultasi via WhatsApp"
      className={`fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-orange-500 px-4 py-3 font-semibold text-navy-950 shadow-[0_10px_30px_-8px_rgba(235,131,23,.6)] transition-all duration-300 hover:bg-orange-600 focus-visible:bg-orange-600 ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.8 14.03c-.25.69-1.45 1.32-1.99 1.37-.53.05-1.03.24-3.48-.73-2.94-1.16-4.81-4.18-4.96-4.37-.14-.2-1.18-1.57-1.18-2.99 0-1.42.74-2.12 1.01-2.41.27-.29.59-.36.79-.36.2 0 .39.002.56.01.18.008.42-.07.66.5.25.59.84 2.04.91 2.19.07.15.12.32.02.51-.09.2-.14.32-.27.49-.14.17-.29.38-.41.51-.14.14-.28.29-.12.57.16.27.71 1.17 1.52 1.9 1.05.93 1.93 1.22 2.21 1.36.27.14.43.12.59-.07.16-.2.68-.79.86-1.06.18-.27.36-.22.61-.13.25.09 1.59.75 1.86.89.27.14.45.2.52.32.07.12.07.66-.18 1.35Z" />
      </svg>
      <span className="hidden sm:inline">Chat WhatsApp</span>
    </a>
  );
}
