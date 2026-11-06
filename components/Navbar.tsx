"use client";

import Link from "@/components/NoPrefetchLink";
import Image from "next/image";
import { useState } from "react";
import SiteSearch from "@/components/SiteSearch";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hisseler", href: "/hisseler" },
  { label: "Halka Arz", href: "/halka-arz" },
  { label: "Temettü", href: "/temettu" },
  { label: "Fonlar", href: "/fonlar" },
  { label: "Hesaplayıcılar", href: "/hesaplayici" },
  { label: "Haberler", href: "/haberler" },
  { label: "İletişim", href: "/reklam-isbirligi" },
];

const mobileNavLinks = navLinks;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/90 bg-slate-950/95 shadow-[0_8px_30px_rgba(2,6,23,0.28)] backdrop-blur-xl">
      <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent" aria-hidden="true" />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 md:px-4 xl:px-5">
        <Link
          href="/"
          prefetch={false}
          className="flex shrink-0 items-center py-1"
          aria-label="Hoca İle Borsa - Ana Sayfa"
        >
          <Image
            src="/brand/logo-wordmark.png"
            alt="Hoca İle Borsa"
            width={800}
            height={612}
            priority
            className="h-14 w-auto object-contain sm:h-16"
          />
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 min-[1280px]:flex 2xl:gap-1" aria-label="Ana navigasyon">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              prefetch={false}
              className="inline-flex h-9 shrink-0 items-center whitespace-nowrap rounded-lg px-2.5 text-[12px] font-semibold text-slate-300 transition-all duration-200 hover:bg-slate-800 hover:text-white 2xl:px-3 2xl:text-[13px]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <SiteSearch onOpen={() => setOpen(false)} />
          <ThemeToggle />
          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-slate-300 transition hover:border-slate-600 hover:bg-slate-700 hover:text-white min-[1280px]:hidden"
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
      </div>

      {open && (
        <nav className="border-t border-slate-800 bg-slate-900/98 px-4 pb-4 pt-3 shadow-2xl min-[1280px]:hidden" aria-label="Mobil navigasyon">
          {mobileNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              prefetch={false}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
