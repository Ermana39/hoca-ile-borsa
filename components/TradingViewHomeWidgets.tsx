"use client";

import { useEffect, useRef, useState } from "react";

type TradingViewTheme = "light" | "dark";

type TradingViewEmbedProps = {
  src: string;
  config: Record<string, unknown>;
  minHeight: number;
  label: string;
};

function TradingViewEmbed({
  src,
  config,
  minHeight,
  label,
}: TradingViewEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const configJson = JSON.stringify(config);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.replaceChildren();

    const widget = document.createElement("div");
    widget.className = "tradingview-widget-container__widget";
    widget.style.width = "100%";
    widget.style.height = "100%";
    container.appendChild(widget);

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    script.async = true;
    script.textContent = configJson;
    script.onerror = () => {
      const message = document.createElement("div");
      message.className =
        "flex h-full min-h-[126px] items-center justify-center bg-white px-4 text-center text-sm text-slate-500";
      message.textContent = "TradingView verileri şu anda yüklenemiyor.";
      container.replaceChildren(message);
    };
    container.appendChild(script);

    return () => {
      container.replaceChildren();
    };
  }, [configJson, src]);

  return (
    <div className="w-full" style={{ minHeight }}>
      <div
        ref={containerRef}
        className="tradingview-widget-container h-full w-full overflow-hidden"
        style={{ minHeight }}
        role="region"
        aria-label={label}
      />
    </div>
  );
}

function useTradingViewTheme() {
  const [theme, setTheme] = useState<TradingViewTheme>("dark");

  useEffect(() => {
    const root = document.documentElement;
    const syncTheme = () => {
      setTheme(root.dataset.theme === "light" ? "light" : "dark");
    };

    syncTheme();
    const observer = new MutationObserver(syncTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });

    return () => observer.disconnect();
  }, []);

  return theme;
}

export default function TradingViewHomeWidgets() {
  const colorTheme = useTradingViewTheme();

  return (
    <section className="px-4 pt-5 pb-6 md:px-6 md:pt-6">
      <div className="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
          Piyasa Özeti
        </h2>
        <p className="text-xs text-slate-500 md:text-sm">
          Döviz piyasalarını tek ekranda takip edin.
        </p>
      </div>

      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white p-2 shadow-sm md:p-3">
        <TradingViewEmbed
          src="https://s3.tradingview.com/external-embedding/embed-widget-tickers.js"
          minHeight={126}
          label="TradingView piyasa özeti"
          config={{
            symbols: [
              { description: "Dolar / TL", proName: "FX_IDC:USDTRY" },
              { description: "Euro / TL", proName: "FX_IDC:EURTRY" },
            ],
            colorTheme,
            isTransparent: false,
            showSymbolLogo: true,
            locale: "tr",
            width: "100%",
            height: 126,
          }}
        />
        <div className="px-2 pb-1 pt-2 text-right text-[10px] text-slate-400">
          <a
            href="https://www.tradingview.com/markets/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="hover:text-blue-600"
          >
            Piyasa verileri TradingView tarafından sağlanır.
          </a>
        </div>
      </div>
    </section>
  );
}
