import Link from "next/link";
import HaberAltBilgi from "@/components/HaberAltBilgi";
import HaberNavigasyon from "@/components/HaberNavigasyon";
import IlgiliTerimler from "@/components/IlgiliTerimler";
import { getOnayliIzahnameListesi } from "@/lib/halka-arz";
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
export default function HaberAltKisim({
  href,
  halkaArzMerkeziGoster = true,
}: {
  href: string;
  halkaArzMerkeziGoster?: boolean;
}) {
  const haber = getAllNews().find((item) => item.href === href);
  const kategori = getHaberKategorisi(href);
  const kaynaklar = kaynakLinkleri(kategori);
  const ilgiliKodlar = new Set(
    (haber?.ilgiliHisseler ?? []).map((kod) =>
      kod.trim().toLocaleUpperCase("tr-TR")
    )
  );
  const ilgiliIzahnameler =
    halkaArzMerkeziGoster && kategori === "halka-arz"
      ? getOnayliIzahnameListesi()
          .filter(
            (izahname) =>
              izahname.kod &&
              ilgiliKodlar.has(
                izahname.kod.trim().toLocaleUpperCase("tr-TR")
              )
          )
          .slice(0, 4)
      : [];

  return (
    <>
      {ilgiliIzahnameler.length > 0 && (
        <section className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 px-5 py-5">
          <div className="text-base font-bold text-slate-900">
            Güncel halka arz bilgileri
          </div>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            Bu haber süreçteki gelişmeyi anlatır. Güncel fiyat, talep tarihi,
            lot, dağıtım ve izahname bilgileri şirketlerin merkez sayfalarında
            tutulur.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {ilgiliIzahnameler.map((izahname) => (
              <Link
                key={izahname.klasor}
                href={`/halka-arz/onayli-izahnameler/${izahname.klasor}`}
                prefetch={false}
                className="rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-700 transition hover:border-blue-400 hover:bg-blue-100"
              >
                {izahname.kod} halka arz detayları
              </Link>
            ))}
          </div>
        </section>
      )}
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
