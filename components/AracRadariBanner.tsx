"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import "./AracRadariBanner.css";

export default function AracRadariBanner() {
  const pathname = usePathname();
  const [paused, setPaused] = useState(false);

  if (/^\/(?:yonetim|kontrol-paneli-4827)(?:\/|$)/.test(pathname)) {
    return null;
  }

  return (
    <aside className="arac-radari-banner" aria-label="Araç Radarı reklamı">
      <a
        className={`ar-ad${paused ? " paused" : ""}`}
        href="https://aracradari.com/"
        target="_blank"
        rel="sponsored noopener noreferrer"
        aria-label="Araç Radarı – Güncel sıfır araç fiyatları ve kampanyalar, yeni sekmede açılır"
      >
        {/* Supplied artwork and SVG effects are preserved without image processing. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sponsors/arac-radari-banner.webp" width="2172" height="724" alt="Araç Radarı – Sıfır araç fiyatları ve kampanyalar. Şimdi incele." decoding="async" />
<svg className="speed" viewBox="0 0 1086 362" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="ar-trail"><stop stopColor="#00dfff" stopOpacity="0"/><stop offset=".6" stopColor="#00eaff" stopOpacity=".7"/><stop offset="1" stopColor="#e0ffff"/></linearGradient><filter id="ar-roadblur" x="-30%" y="-100%" width="160%" height="300%"><feGaussianBlur stdDeviation="1.8"/></filter></defs><g fill="none" stroke="url(#ar-trail)" strokeLinecap="round"><path d="M -80 236 L 112 257" strokeWidth="3" filter="url(#ar-roadblur)"/><path d="M -50 339 L 151 329" strokeWidth="4" filter="url(#ar-roadblur)"/><path d="M 477 279 Q 599 304 880 375" strokeWidth="3" filter="url(#ar-roadblur)"/></g></svg>
<svg className="headlights" viewBox="0 0 1086 362" preserveAspectRatio="none" aria-hidden="true"><defs>
<radialGradient id="ar-lamp"><stop stopColor="#ffffff" stopOpacity=".98"/><stop offset=".2" stopColor="#e8fcff" stopOpacity=".95"/><stop offset=".42" stopColor="#9beeff" stopOpacity=".64"/><stop offset="1" stopColor="#23cfff" stopOpacity="0"/></radialGradient>
<radialGradient id="ar-reflect"><stop stopColor="#e5fdff" stopOpacity=".7"/><stop offset=".4" stopColor="#59dfff" stopOpacity=".38"/><stop offset="1" stopColor="#00cfff" stopOpacity="0"/></radialGradient>
<linearGradient id="ar-beam"><stop stopColor="#e7fdff" stopOpacity=".55"/><stop offset="1" stopColor="#8ae5ff" stopOpacity="0"/></linearGradient>
<filter id="ar-blur" x="-50%" y="-100%" width="200%" height="300%"><feGaussianBlur stdDeviation="4"/></filter></defs>
<ellipse cx="281" cy="337" rx="65" ry="13" transform="rotate(-8 281 337)" fill="url(#ar-reflect)"/>
<ellipse cx="406" cy="330" rx="58" ry="11" transform="rotate(-12 406 330)" fill="url(#ar-reflect)"/>
<path d="M 251 264 L 490 270 L 510 330 L 251 270 Z" fill="url(#ar-beam)" opacity=".45" filter="url(#ar-blur)"/>
<path d="M 375 270 L 543 281 L 550 316 L 375 275 Z" fill="url(#ar-beam)" opacity=".5" filter="url(#ar-blur)"/>
<ellipse cx="254" cy="264" rx="37" ry="18" fill="url(#ar-lamp)" transform="rotate(8 254 264)"/>
<ellipse cx="374" cy="270" rx="21" ry="15" fill="url(#ar-lamp)" transform="rotate(20 374 270)"/>
<path d="M227 257 Q245 260 282 264 L270 270 Q244 269 232 267 Z" fill="#f1fdff" opacity=".95"/>
<path d="M365 264 L377 266 L381 273 L372 274 Z" fill="#f1fdff" opacity=".95"/>
<path d="M213 264 H296 M354 270 H397" stroke="#b9f5ff" strokeWidth="1" opacity=".55"/>
</svg><span className="road-glow" aria-hidden="true"></span><span className="logo-glow" aria-hidden="true"></span><span className="cta-glow" aria-hidden="true"></span><span className="shine" aria-hidden="true"></span>
      </a>
      <button
        type="button"
        className="animation-toggle"
        aria-pressed={paused}
        onClick={() => setPaused((value) => !value)}
      >
        {paused ? "Animasyonu başlat" : "Animasyonu durdur"}
      </button>
    </aside>
  );
}

