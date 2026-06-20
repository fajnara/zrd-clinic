"use client";

import { useEffect, useState } from "react";

const WA =
  "https://wa.me/6281809569169?text=" +
  encodeURIComponent("Halo ZRD Clinic, saya mau konsultasi");

const links = [
  ["#perawatan", "Perawatan"],
  ["#bukti", "Bukti"],
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
        stuck ? "bg-ink-950/85 backdrop-blur border-b border-line" : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#beranda" className="flex items-center gap-2" aria-label="ZRD Clinic — beranda">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-cyan-400 font-display text-sm font-bold text-ink-950">
            Z
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            ZRD<span className="text-cyan-400">.</span>Clinic
          </span>
        </a>

        <nav aria-label="Navigasi utama" className="flex items-center gap-2">
          <button
            type="button"
            className="grid h-11 w-11 place-items-center sm:hidden"
            aria-expanded={open}
            aria-controls="nav-list"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Buka menu</span>
            <span aria-hidden="true" className="text-2xl leading-none">
              {open ? "×" : "≡"}
            </span>
          </button>

          <ul
            id="nav-list"
            onClick={() => setOpen(false)}
            className={`${
              open ? "flex" : "hidden"
            } absolute inset-x-0 top-full flex-col gap-1 border-b border-line bg-ink-950/95 px-5 pb-4 backdrop-blur sm:static sm:flex sm:flex-row sm:items-center sm:gap-7 sm:border-0 sm:bg-transparent sm:p-0`}
          >
            {links.map(([href, label]) => (
              <li key={href}>
                <a
                  href={href}
                  className="block py-2 text-sm text-mist-300 transition-colors hover:text-cyan-400"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="pt-2 sm:pt-0">
              <a
                href={WA}
                target="_blank"
                rel="noopener"
                className="inline-flex rounded-full border border-cyan-400/60 px-4 py-2 text-sm font-medium text-cyan-300 transition-colors hover:bg-cyan-400 hover:text-ink-950"
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
