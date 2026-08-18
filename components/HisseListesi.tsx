"use client";

import Link from "@/components/NoPrefetchLink";
import { useEffect, useMemo, useState } from "react";
import HisseAvatar from "@/components/HisseAvatar";

type HisseOzet = { kod: string; sirketAdi: string };

export default function HisseListesi({
  hisseler,
  initialArama = "",
}: {
  hisseler: HisseOzet[];
  initialArama?: string;
}) {
  const [arama, setArama] = useState(initialArama);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search).get("q");
    if (query) setArama(query);
  }, []);

  const filtreli = useMemo(() => {
    const q = arama.trim().toLocaleLowerCase("tr");
    if (!q) return hisseler;
    return hisseler.filter(
      (h) =>
        h.kod.toLocaleLowerCase("tr").includes(q) ||
        h.sirketAdi.toLocaleLowerCase("tr").includes(q)
    );
  }, [arama, hisseler]);

  return (
    <div>
      <div className="mb-5">
        <input
          type="search"
          value={arama}
          onChange={(e) => setArama(e.target.value)}
          placeholder="Hisse kodu veya şirket adı ara (örn. ASELS, Aselsan)"
          aria-label="Hisse ara"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:ring-2 focus:ring-blue-100 md:text-base"
        />
      </div>

      {filtreli.length > 0 ? (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtreli.map((h) => (
            <Link
              key={h.kod}
              href={`/hisse/${h.kod.toLowerCase()}`}
              prefetch={false}
              className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_8px_30px_rgba(15,23,42,0.10)]"
            >
              <HisseAvatar kod={h.kod} />
              <div className="min-w-0">
                <div className="text-sm font-bold text-slate-900">{h.kod}</div>
                <div className="line-clamp-1 text-xs text-slate-500">
                  {h.sirketAdi}
                </div>
              </div>
              <span className="ml-auto shrink-0 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-blue-600">
                →
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-10 text-center text-sm text-slate-500">
          {hisseler.length === 0
            ? "Hisse künyeleri yakında eklenecektir."
            : `"${arama}" için sonuç bulunamadı.`}
        </div>
      )}
    </div>
  );
}
