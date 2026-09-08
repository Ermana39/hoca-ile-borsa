"use client";

import { useEffect, useRef } from "react";

export default function HomeMarketSummary() {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.replaceChildren();

    const widget = document.createElement("div");
    widget.className = "tradingview-widget-container__widget";
    widget.style.width = "100%";
    widget.style.height = "72px";
    container.appendChild(widget);

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-tickers.js";
    script.async = true;
    script.textContent = JSON.stringify({
      symbols: [
        { description: "Dolar / TL", proName: "FX_IDC:USDTRY" },
        { description: "Euro / TL", proName: "FX_IDC:EURTRY" },
        { description: "Gram Altın", proName: "FX_IDC:XAUTRYG" },
        { description: "Ons Altın", proName: "OANDA:XAUUSD" }
      ],
      colorTheme: "light",
      isTransparent: false,
      showSymbolLogo: true,
      locale: "tr",
      width: "100%",
      height: 72
    });

    script.onerror = () => {
      const message = document.createElement("div");
      message.className =
        "flex h-[72px] items-center justify-center px-4 text-center text-xs text-slate-500";
      message.textContent = "Piyasa verileri şu anda yüklenemiyor.";
      container.replaceChildren(message);
    };

    container.appendChild(script);

    return () => {
      container.replaceChildren();
    };
  }, []);

  return (
    <section className="px-4 pb-3 md:px-6">
      <div className="flex flex-col gap-2 md:flex-row">
        <div className="min-w-0 flex-1 overflow-hidden rounded-lg border border-slate-200 bg-white">
          <div
            ref={containerRef}
            className="tradingview-widget-container h-[72px] w-full"
            aria-label="Dolar, euro, gram altın ve ons altın piyasa fiyatları"
          />
        </div>

        <a
          href="https://www.youtube.com/@hocaileborsa/streams"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-[72px] shrink-0 items-center justify-center gap-2 rounded-lg bg-red-600 px-5 text-sm font-bold text-white transition hover:bg-red-700 md:w-[170px]"
          aria-label="Hoca İle Borsa canlı yayınlarını YouTube'da aç"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
            ▶
          </span>
          <span>Canlı Yayın</span>
        </a>
      </div>
    </section>
  );
}
