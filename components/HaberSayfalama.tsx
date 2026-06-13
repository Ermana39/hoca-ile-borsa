import Link from "next/link";

// Sayfa 1 -> basePath, sayfa N -> basePath/sayfa/N
function sayfaUrl(basePath: string, sayfa: number): string {
  return sayfa <= 1 ? basePath : `${basePath}/sayfa/${sayfa}`;
}

// Aktif sayfanın etrafında pencereli sayfa numaraları (1, ..., n-1, n, n+1, ..., son)
function sayfaNumaralari(aktif: number, toplam: number): (number | "...")[] {
  const set = new Set<number>([1, toplam, aktif, aktif - 1, aktif + 1]);
  const liste = Array.from(set)
    .filter((n) => n >= 1 && n <= toplam)
    .sort((a, b) => a - b);

  const sonuc: (number | "...")[] = [];
  let onceki = 0;
  for (const n of liste) {
    if (onceki && n - onceki > 1) sonuc.push("...");
    sonuc.push(n);
    onceki = n;
  }
  return sonuc;
}

export default function HaberSayfalama({
  basePath,
  aktifSayfa,
  toplamSayfa,
}: {
  basePath: string;
  aktifSayfa: number;
  toplamSayfa: number;
}) {
  if (toplamSayfa <= 1) return null;

  const numaralar = sayfaNumaralari(aktifSayfa, toplamSayfa);
  const oncekiVar = aktifSayfa > 1;
  const sonrakiVar = aktifSayfa < toplamSayfa;

  return (
    <nav
      className="mt-8 flex flex-wrap items-center justify-center gap-2"
      aria-label="Sayfalar arası gezinme"
    >
      {oncekiVar ? (
        <Link
          href={sayfaUrl(basePath, aktifSayfa - 1)}
          prefetch={false}
          rel="prev"
          className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50"
        >
          <span aria-hidden>←</span> Önceki
        </Link>
      ) : (
        <span className="inline-flex items-center gap-1 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-300">
          <span aria-hidden>←</span> Önceki
        </span>
      )}

      <div className="flex flex-wrap items-center gap-1">
        {numaralar.map((n, i) =>
          n === "..." ? (
            <span
              key={`bosluk-${i}`}
              className="px-2 text-sm font-semibold text-slate-400"
            >
              …
            </span>
          ) : n === aktifSayfa ? (
            <span
              key={n}
              aria-current="page"
              className="inline-flex h-9 min-w-9 items-center justify-center rounded-lg bg-blue-600 px-3 text-sm font-bold text-white"
            >
              {n}
            </span>
          ) : (
            <Link
              key={n}
              href={sayfaUrl(basePath, n)}
              prefetch={false}
              className="inline-flex h-9 min-w-9 items-center justify-center rounded-lg border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50"
            >
              {n}
            </Link>
          )
        )}
      </div>

      {sonrakiVar ? (
        <Link
          href={sayfaUrl(basePath, aktifSayfa + 1)}
          prefetch={false}
          rel="next"
          className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50"
        >
          Sonraki <span aria-hidden>→</span>
        </Link>
      ) : (
        <span className="inline-flex items-center gap-1 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-300">
          Sonraki <span aria-hidden>→</span>
        </span>
      )}
    </nav>
  );
}
