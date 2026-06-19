// Şirket logosu kutusu. logo (base64 data URI) varsa onu, yoksa şirket adının
// baş harflerinden bir avatar gösterir. Hook/olay içermez; hem sunucu hem
// istemci bileşenlerinde kullanılabilir.

const ATLA = new Set([
  "a.ş.",
  "a.ş",
  "aş",
  "as",
  "ve",
  "san",
  "san.",
  "sanayi",
  "tic",
  "tic.",
  "ticaret",
  "holding",
]);

function basHarfler(ad: string): string {
  const kelimeler = ad
    .replace(/[.,]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .filter((k) => !ATLA.has(k.toLocaleLowerCase("tr")));
  const harfler = kelimeler
    .slice(0, 2)
    .map((k) => k[0])
    .join("");
  return (harfler || ad.slice(0, 2)).toLocaleUpperCase("tr");
}

export default function SirketLogo({
  logo,
  ad,
}: {
  logo?: string;
  ad: string;
}) {
  if (logo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={logo}
        alt={`${ad} logo`}
        width={48}
        height={48}
        loading="lazy"
        decoding="async"
        className="h-12 w-12 shrink-0 rounded-xl bg-white object-contain p-1.5 ring-1 ring-inset ring-slate-200"
      />
    );
  }
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/60 text-sm font-black tracking-tight text-blue-700 ring-1 ring-inset ring-blue-200/60">
      {basHarfler(ad)}
    </div>
  );
}
