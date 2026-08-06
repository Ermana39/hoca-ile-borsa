"use client";

import { usePathname } from "next/navigation";
import Link from "@/components/NoPrefetchLink";

/**
 * Bulunulan route için görünür "Son güncelleme" damgası.
 * Tarih haritası server tarafında (layout) page-updates.generated.json'dan
 * yalnızca ilgili bölümün route'ları için üretilip prop olarak geçilir;
 * böylece üretilen JSON'un tamamı client paketine girmez.
 */
export default function SonGuncelleme({
  tarihler,
  yazar,
}: {
  tarihler: Record<string, string>;
  yazar?: { isim: string; href: string };
}) {
  const pathname = usePathname() || "/";
  const iso = tarihler[pathname];
  if (!iso) return null;

  const tarih = new Date(iso);
  if (Number.isNaN(tarih.getTime())) return null;

  const metin = tarih.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="mx-auto w-full max-w-4xl px-4 md:px-6">
      <div className="flex flex-wrap items-center justify-end gap-x-3 gap-y-1 pt-4 text-xs text-slate-400">
        {yazar ? (
          <p>
            Hazırlayan:{" "}
            <Link
              href={yazar.href}
              className="font-medium text-slate-600 hover:text-blue-700 hover:underline"
            >
              {yazar.isim}
            </Link>
          </p>
        ) : null}
        <p>
          Son güncelleme:{" "}
          <time dateTime={iso} className="font-medium text-slate-500">
            {metin}
          </time>
        </p>
      </div>
    </div>
  );
}
