import Link from "next/link";
import HaberAltBilgi from "@/components/HaberAltBilgi";
import HaberNavigasyon from "@/components/HaberNavigasyon";
import IlgiliTerimler from "@/components/IlgiliTerimler";
import { getAllNews, getHaberKategorisi } from "@/lib/haberler";
import type { HaberKategori } from "@/lib/haber-kategorileri";

type KaynakLink = {
  label: string;
  href: string;
};

const KAP: KaynakLink = {
  label: "KAP duyuruları",
  href: "https://www.kap.org.tr/tr/",
};

const SPK: KaynakLink = {
  label: "SPK bültenleri",
  href: "https://www.spk.gov.tr/Bulten",
};

const BIST: KaynakLink = {
  label: "Borsa İstanbul",
  href: "https://www.borsaistanbul.com/tr/",
};

const TCMB: KaynakLink = {
  label: "TCMB verileri",
  href: "https://www.tcmb.gov.tr/",
};

const TEFAS: KaynakLink = {
  label: "TEFAS",
  href: "https://www.tefas.gov.tr/",
};

function kaynakLinkleri(kategori?: HaberKategori): KaynakLink[] {
  if (kategori === "halka-arz") return [SPK, KAP];
  if (kategori === "piyasa-gundemi") return [BIST, TCMB, TEFAS];
  return [KAP, SPK];
}

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
  const kategori = getHaberKategorisi(href);
  const kaynaklar = kaynakLinkleri(kategori);

  return (
    <>
      {haber && <IlgiliTerimler metin={haber.title} className="mt-8" />}
      <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-xs leading-6 text-slate-500">
        <div className="text-sm font-semibold text-slate-800">
          Kaynak ve editoryal not
        </div>
        <p className="mt-1">
          Bu içerik resmî duyurular, şirket açıklamaları ve piyasa verileri
          temel alınarak hazırlanır; yatırım tavsiyesi değildir. İçerik üretim
          sürecimiz, kaynak politikamız ve düzeltme yaklaşımımız için{" "}
          <Link
            href="/editoryal-ilkeler"
            prefetch={false}
            className="font-semibold text-blue-700 hover:underline"
          >
            editoryal ilkeler
          </Link>{" "}
          sayfamıza bakabilirsiniz.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {kaynaklar.map((kaynak) => (
            <a
              key={kaynak.href}
              href={kaynak.href}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="rounded-full border border-slate-200 bg-white px-3 py-1 font-semibold text-slate-600 transition hover:border-blue-200 hover:text-blue-700"
            >
              {kaynak.label}
            </a>
          ))}
        </div>
      </section>
      <HaberAltBilgi href={href} />
      <HaberNavigasyon href={href} className="mt-8" />
    </>
  );
}
