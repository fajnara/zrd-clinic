"use client";

import { useEffect, useState } from "react";
import { waMain as WA } from "@/lib/site";

const links = [
  ["#perawatan", "Perawatan"],
  ["#testimoni", "Testimoni"],
  ["#proses", "Proses"],
  ["#kunjungi", "Kunjungi"],
];

export default function Header() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        stuck ? "border-b border-line bg-base-50/85 backdrop-blur" : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#beranda" className="flex items-center gap-2" aria-label="ZRD Clinic — beranda">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-orange-500 font-display text-sm font-semibold text-navy-950">
            Z
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-navy-900">
            ZRD<span className="text-orange-600">.</span>Clinic
          </span>
        </a>

        <nav aria-label="Navigasi utama" className="flex items-center gap-2">
          <button
            type="button"
            className="grid h-11 w-11 place-items-center text-navy-900 sm:hidden"
            aria-expanded={open}
            aria-controls="nav-list"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Tutup menu" : "Buka menu"}</span>
            <span aria-hidden="true" className="text-2xl leading-none">
              {open ? "×" : "≡"}
            </span>
          </button>

          <ul
            id="nav-list"
            onClick={() => setOpen(false)}
            className={`${
              open ? "flex" : "hidden"
            } absolute inset-x-0 top-full flex-col gap-1 border-b border-line bg-base-50/97 px-5 pb-4 backdrop-blur sm:static sm:flex sm:flex-row sm:items-center sm:gap-7 sm:border-0 sm:bg-transparent sm:p-0`}
          >
            {links.map(([href, label]) => (
              <li key={href}>
                <a
                  href={href}
                  className="block py-2 text-sm text-slate-700 transition-colors hover:text-orange-700"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="pt-2 sm:pt-0">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-orange-500/50 px-4 py-2 text-sm font-semibold text-orange-700 transition-colors hover:bg-orange-500 hover:text-navy-950"
              >
                Konsultasi
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
