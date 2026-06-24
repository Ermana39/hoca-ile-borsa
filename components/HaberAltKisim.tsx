import HaberAltBilgi from "@/components/HaberAltBilgi";
import HaberNavigasyon from "@/components/HaberNavigasyon";

/**
 * Haber detay sayfalarının ortak alt bölümü: ilgili haberler / iç yönlendirme
 * bloğu (HaberAltBilgi) + Önceki/Sonraki Haber gezinmesi (HaberNavigasyon).
 *
 * Yeni bir haber sayfası eklerken içeriğin en altına tek satır koymak yeterli:
 *   <HaberAltKisim href="/haber/<slug>" />
 */
export default function HaberAltKisim({ href }: { href: string }) {
  return (
    <>
      <HaberAltBilgi href={href} />
      <HaberNavigasyon href={href} className="mt-8" />
    </>
  );
}
