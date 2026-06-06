"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Borsa Analiz", href: "/borsa" },
  { label: "Halka Arz", href: "/halka-arz" },
  { label: "Temettü", href: "/temettu" },
  { label: "Fonlar", href: "/fonlar" },
  { label: "Faiz Oranları", href: "/mevduat-kredi-faizleri" },
  { label: "Haberler", href: "/#haberler" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950 shadow-[0_2px_16px_rgba(0,0,0,0.35)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-0 md:px-6">
        <Link
          href="/"
          prefetch={false}
          className="flex items-center gap-2.5 py-3.5 font-bold text-white"
          aria-label="Hoca İle Borsa - Ana Sayfa"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-sm font-black text-white">
            H
          </span>
          <span className="text-base font-bold tracking-tight text-blue-400">
            Hoca İle Borsa
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Ana navigasyon">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              prefetch={false}
              className="rounded-md px-3 py-2 text-sm font-semibold text-slate-100 transition duration-150 hover:bg-slate-700 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-700 bg-slate-800 text-slate-300 transition hover:bg-slate-700 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menüyü aç/kapat"
          aria-expanded={open}
        >
          {open ? (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-800 bg-slate-900 px-4 pb-4 pt-2 lg:hidden" aria-label="Mobil navigasyon">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              prefetch={false}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}