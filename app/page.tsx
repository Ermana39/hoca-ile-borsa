"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import TrackedLink from "@/components/tracked-link";

type NewsItem = {
  id: number;
  title: string;
  href: string;
  image: string;
  alt: string;
};

type GuncellemeItem = {
  title: string;
  href: string;
  updatedAt: string;
};

const kategoriKutulari = [
  {
    title: "Borsa Analiz",
    href: "/borsa",
    alt: "Borsa analiz sayfası görseli",
    image: "/kategori-borsa-analiz.png",
  },
  {
    title: "Halka Arz",
    href: "/halka-arz",
    alt: "Halka arz sayfası görseli",
    image: "/kategori-halka-arz.png",
  },
  {
    title: "Fonlar",
    href: "/fonlar",
    alt: "Fonlar sayfası görseli",
    image: "/kategori-fonlar.png",
  },
  {
    title: "Temettü",
    href: "/temettu",
    alt: "Temettü sayfası görseli",
    image: "/kategori-temettu.png",
  },
  {
    title: "Faiz Oranları",
    href: "/mevduat-kredi-faizleri",
    alt: "Faiz oranları sayfası görseli",
    image: "/Mevduat-kredi-faiz.png?v=2",
  },
];

function SonGuncellemelerBar({
  items,
  loading,
}: {
  items: GuncellemeItem[];
  loading: boolean;
}) {
  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  if (items.length === 0) {
    return <div>Veri yok</div>;
  }

  return (
    <section className="px-4 pb-6 md:px-6">
      <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="shrink-0 border-b border-zinc-200 bg-zinc-900 px-4 py-3 text-sm font-bold text-white md:border-b-0 md:border-r">
            Son Güncellemeler
          </div>

          <div className="ticker-wrap relative min-w-0 flex-1 overflow-hidden">
            <div className="ticker-track flex min-w-max items-center gap-6 px-4 py-3">
              {items.map((item, index) => (
                <TrackedLink
                  key={`${item.href}-${item.updatedAt}-${index}`}
                  href={item.href}
                  label={item.title}
                  className="inline-flex shrink-0 items-center gap-2 text-sm text-zinc-700 hover:text-zinc-900"
                >
                  <span className="font-semibold">{item.title}</span>

                  {/* ✅ DÜZELTİLEN YER */}
                  <span className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs font-semibold text-zinc-600">
                    {(() => {
                      const date = new Date(item.updatedAt + "Z");

                      return (
                        date.toLocaleDateString("tr-TR") +
                        " " +
                        date.toLocaleTimeString("tr-TR", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                      );
                    })()}
                  </span>
                </TrackedLink>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ticker-track {
          width: max-content;
          padding-left: 100%;
          animation: ticker-scroll 55s linear infinite;
        }

        .ticker-wrap:hover .ticker-track {
          animation-play-state: paused;
        }

        @keyframes ticker-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  );
}

export default function HomePage() {
  const [guncellemeler, setGuncellemeler] = useState<GuncellemeItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUpdates = async () => {
      try {
        const res = await fetch("/api/recent-updates", { cache: "no-store" });
        const data = await res.json();

        if (Array.isArray(data)) {
          setGuncellemeler(data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadUpdates();
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl">
        <section className="px-4 pt-4 md:px-6 md:pt-6">
          <img src="/banner.png" className="w-full rounded-2xl" />
        </section>

        <SonGuncellemelerBar items={guncellemeler} loading={loading} />
      </div>
    </main>
  );
}