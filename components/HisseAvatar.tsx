const PALETLER = [
  "bg-teal-50 text-teal-900 ring-teal-200",
  "bg-blue-50 text-blue-900 ring-blue-200",
  "bg-violet-50 text-violet-900 ring-violet-200",
  "bg-rose-50 text-rose-900 ring-rose-200",
  "bg-amber-50 text-amber-900 ring-amber-200",
  "bg-emerald-50 text-emerald-900 ring-emerald-200",
  "bg-indigo-50 text-indigo-900 ring-indigo-200",
  "bg-sky-50 text-sky-900 ring-sky-200",
] as const;

function paletSec(kod: string) {
  let hash = 0;
  for (const karakter of kod) hash = (hash * 31 + karakter.charCodeAt(0)) >>> 0;
  return PALETLER[hash % PALETLER.length];
}

export default function HisseAvatar({
  kod,
  boyut = "md",
}: {
  kod: string;
  boyut?: "md" | "lg";
}) {
  const temizKod = kod.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 5);
  const boyutSinifi =
    boyut === "lg" ? "h-14 w-14 text-sm" : "h-12 w-12 text-xs";

  return (
    <span
      aria-hidden="true"
      className={`flex shrink-0 items-center justify-center rounded-xl font-black tracking-tight ring-1 ring-inset ${boyutSinifi} ${paletSec(temizKod)}`}
    >
      {temizKod}
    </span>
  );
}
