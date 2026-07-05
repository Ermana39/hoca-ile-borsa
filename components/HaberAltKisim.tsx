import Link from "next/link";
import HaberAltBilgi from "@/components/HaberAltBilgi";
import HaberNavigasyon from "@/components/HaberNavigasyon";
import IlgiliTerimler from "@/components/IlgiliTerimler";
import { getAllNews } from "@/lib/haberler";

/**
 * Haber detay sayfalarının ortak alt bölümü: haber başlığında geçen borsa
 * terimlerinin sözlük çipleri (IlgiliTerimler) + ilgili haberler / iç
 * yönlendirme bloğu (HaberAltBilgi) + Önceki/Sonraki Haber gezinmesi
 * (HaberNavigasyon).
 *
 * Yeni bir haber sayfası eklerken içeriğin en altına tek satır koymak yeterli:
 *   <HaberAltKisim href="/haber/<slug>" />
 */
export default function HaberAltKisim({ href }: { href: string }) {
  const haber = getAllNews().find((item) => item.href === href);

  return (
    <>
      {haber && <IlgiliTerimler metin={haber.title} className="mt-8" />}
      <p className="mt-6 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs leading-6 text-slate-500">
        Bu içerik KAP bildirimleri ve resmî kaynaklardaki duyurulara dayanır;
        yatırım tavsiyesi değildir. İçerik üretim sürecimiz ve düzeltme
        politikamız için{" "}
        <Link
          href="/editoryal-ilkeler"
          prefetch={false}
          className="font-semibold text-blue-700 hover:underline"
        >
          editoryal ilkeler
        </Link>{" "}
        sayfamıza bakabilirsiniz.
      </p>
      <HaberAltBilgi href={href} />
      <HaberNavigasyon href={href} className="mt-8" />
    </>
  );
}
