import Link from "next/link";
import { hisseVarMi } from "@/lib/hisseler";

const KOD_DESENI = /\b[A-ZÇĞİÖŞÜ]{3,6}\b/g;

function hisseKoduBul(baslik: string) {
  const eslesmeler = baslik.match(KOD_DESENI) || [];
  return eslesmeler.find((kod) => hisseVarMi(kod));
}

export default function KapCardLinks({ baslik }: { baslik: string }) {
  const kod = hisseKoduBul(baslik);

  // İlgili hisse yoksa hiç gösterme (boş çerçeve bırakma).
  if (!kod) return null;

  return (
    <div className="mt-3 flex flex-wrap gap-2 border-t border-slate-200 pt-3 text-xs font-semibold">
      <Link
        href={`/hisse/${kod.toLowerCase()}`}
        prefetch={false}
        className="rounded-full border border-blue-200 bg-white px-2.5 py-1 text-blue-700 transition hover:bg-blue-50"
      >
        {kod} ilgili hisse sayfası
      </Link>
    </div>
  );
}
