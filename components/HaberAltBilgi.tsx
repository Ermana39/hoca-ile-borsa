import {
  getAllNews,
  getHaberKategorisi,
  getIlgiliHaberler,
  getHaberIlgiliHisseler,
} from "@/lib/haberler";
import { getEnGuncelGunlukOzet } from "@/lib/gunluk-ozet";
import { getHisseIcerikHedefi } from "@/lib/hisse-icerik-hedefi";
import Link from "next/link";
import HaberKategoriEtiketi from "@/components/HaberKategoriEtiketi";
import HaberIlgiliHaberler from "@/components/HaberIlgiliHaberler";
import ContinueReading from "@/components/ContinueReading";
import RelatedContent, { type RelatedContentItem } from "@/components/RelatedContent";

const HALKA_ARZ_LINKLERI: {
  keywords: string[];
  items: RelatedContentItem[];
}[] = [
  {
    keywords: ["soho-giyim", "sohoe"],
    items: [
      {
        title: "SOHOE halka arz dağıtım sonuçları",
        href: "/haber/soho-giyim-halka-arzinda-dagitimlar-sonuclandi",
        description: "SOHOE dağıtım sonucu, eşit dağıtım yapısı ve lot bilgileri.",
        type: "Dağıtım sonucu",
      },
    ],
  },
  {
    keywords: ["beta-enerji", "betae"],
    items: [
      {
        title: "Beta Enerji halka arzı kaç lot verir?",
        href: "/haber/beta-enerji-halka-arzi-kac-lot-verir",
        description: "Katılımcı sayısına göre olası lot dağılımı senaryoları.",
        type: "Lot rehberi",
      },
    ],
  },
  {
    keywords: ["quick-sigorta"],
    items: [
      {
        title: "Quick Sigorta onaylı izahname sayfası",
        href: "/halka-arz/onayli-izahnameler/quick-sigorta",
        description: "Quick Sigorta halka arz fiyatı, pay yapısı ve fon kullanım bilgileri.",
        type: "Onaylı izahname",
      },
    ],
  },
  {
    keywords: ["saytek"],
    items: [
      {
        title: "Saytek Medikal taslak izahname sayfası",
        href: "/halka-arz/taslak-izahnameler/saytek-medikal-ve-plastik-san-tic",
        description: "Saytek halka arz başvuru süreci ve taslak izahname özeti.",
        type: "Taslak izahname",
      },
    ],
  },
];

function haberBasligi(href: string) {
  return getAllNews().find((item) => item.href === href)?.title || "";
}

// getAllNews() en yeniden en eskiye sıralı döner; ilk eşleşme en güncel olanıdır.
function enGuncelKapHaberi(haricHref?: string): RelatedContentItem | null {
  const item = getAllNews().find(
    (n) => n.category === "kap-bildirimleri" && n.href !== haricHref
  );
  if (!item) return null;
  return {
    title: item.title,
    href: item.href,
    description: "Borsa İstanbul'da öne çıkan güncel şirket bildirimleri.",
    type: "KAP",
  };
}

function enGuncelGunlukOzetLinki(): RelatedContentItem | null {
  const ozet = getEnGuncelGunlukOzet();
  if (!ozet) return null;
  return {
    title: `${ozet.tarihGosterim} borsa gündemi ve günlük piyasa özeti`,
    href: `/borsa/gunluk-borsa-ozeti/${ozet.slug}`,
    description: "Endeks, yükselenler, düşenler ve para girişi olan hisseler.",
    type: "Günlük özet",
  };
}

function halkaArzOzelLinkleri(href: string, title: string) {
  const metin = `${href} ${title}`.toLocaleLowerCase("tr");
  return HALKA_ARZ_LINKLERI.find((grup) =>
    grup.keywords.some((keyword) => metin.includes(keyword))
  )?.items ?? [];
}

function relatedItems(href: string, kategori?: string): RelatedContentItem[] {
  const title = haberBasligi(href);
  const hisseler = getHaberIlgiliHisseler(href);
  const items = new Map<string, RelatedContentItem>();

  for (const kod of hisseler.slice(0, 3)) {
    const hedef = getHisseIcerikHedefi(kod);
    if (!hedef) continue;

    const onayliIzahname = hedef.tur === "onayli-izahname";
    items.set(hedef.href, {
      title: onayliIzahname
        ? `${kod} onaylı izahname ve halka arz detayları`
        : `${kod} hisse künye sayfası`,
      href: hedef.href,
      description: onayliIzahname
        ? `${kod} halka arz fiyatı, pay yapısı, fon kullanımı ve finansal görünüm.`
        : `${kod} şirket bilgileri, faaliyet alanı ve ilgili gelişmeler.`,
      type: onayliIzahname ? "Onaylı izahname" : "İlgili hisse",
    });
  }

  for (const item of halkaArzOzelLinkleri(href, title)) {
    items.set(item.href, item);
  }

  if (kategori === "halka-arz" || href.includes("halka-arz")) {
    items.set("/halka-arz", {
      title: "Güncel halka arz takvimi",
      href: "/halka-arz",
      description: "Talep toplama tarihleri, izahname ve halka arz araçları.",
      type: "Halka arz",
    });
    items.set("/halka-arz/onayli-izahnameler", {
      title: "Onaylı izahnameler",
      href: "/halka-arz/onayli-izahnameler",
      description: "SPK onayından geçen halka arz izahname özetleri.",
      type: "İzahname",
    });
    items.set("/rehberler/halka-arz-nedir", {
      title: "Halka arz nedir, yatırımcı nelere bakmalı?",
      href: "/rehberler/halka-arz-nedir",
      description: "İzahname, fiyat tespit raporu ve dağıtım yöntemleri rehberi.",
      type: "Rehber",
    });
  }

  const kapItem = enGuncelKapHaberi(href);
  if (kapItem) items.set(kapItem.href, kapItem);

  const ozetItem = enGuncelGunlukOzetLinki();
  if (ozetItem) items.set(ozetItem.href, ozetItem);

  items.set("/haberler", {
    title: "Güncel borsa haberleri",
    href: "/haberler",
    description: "Borsa gündemindeki diğer şirket ve piyasa gelişmeleri.",
    type: "Haberler",
  });

  return Array.from(items.values()).slice(0, 6);
}

function ctaMetni(kategori?: string, href?: string) {
  if (kategori === "kap-bildirimleri" || href?.includes("kap")) {
    return {
      text: "Günün öne çıkan diğer KAP bildirimleri için önemli KAP haberleri sayfasını inceleyebilirsiniz.",
      href: enGuncelKapHaberi(href)?.href ?? "/haberler/kategori/kap-bildirimleri",
      label: "Önemli KAP haberlerine git",
    };
  }

  if (kategori === "halka-arz" || href?.includes("halka-arz")) {
    return {
      text: "Güncel halka arz takvimi ve onaylı izahnameler için halka arz sayfasına göz atabilirsiniz.",
      href: "/halka-arz",
      label: "Halka arz sayfasını incele",
    };
  }

  return {
    text: "Borsa gündemindeki diğer gelişmeleri görmek için güncel haberler sayfasını inceleyebilirsiniz.",
    href: "/haberler",
    label: "Güncel haberleri incele",
  };
}

// Haber detay sayfası alt bilgisi: kategori rozeti + ilgili hisseler + ilgili haberler.
export default function HaberAltBilgi({ href }: { href: string }) {
  const slug = getHaberKategorisi(href);
  const ilgiliHisseler = getHaberIlgiliHisseler(href);
  const ilgiliVar = getIlgiliHaberler(href, 4).length > 0;
  const cta = ctaMetni(slug, href);

  return (
    <div className="space-y-4 border-t border-slate-100 px-6 pb-1 pt-5 md:px-10">
      {slug && (
        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <span className="font-medium">Kategori:</span>
          <HaberKategoriEtiketi kategori={slug} />
        </div>
      )}

      {ilgiliHisseler.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <span className="font-medium">İlgili Hisseler:</span>
          {ilgiliHisseler.map((kod) => {
            const hedef = getHisseIcerikHedefi(kod);

            if (!hedef) {
              return (
                <span
                  key={kod}
                  className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600 ring-1 ring-inset ring-slate-200"
                >
                  {kod}
                </span>
              );
            }

            return (
              <Link
                key={kod}
                href={hedef.href}
                prefetch={false}
                aria-label={hedef.etiket}
                title={hedef.baslik}
                className="inline-flex items-center gap-1.5 rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-700 shadow-sm transition hover:border-blue-300 hover:bg-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <span>{kod}</span>
                <span aria-hidden="true">→</span>
              </Link>
            );
          })}
        </div>
      )}

      <RelatedContent
        title="Bu haberle ilgili diğer içerikler"
        items={relatedItems(href, slug)}
      />

      {ilgiliVar && <HaberIlgiliHaberler href={href} />}

      <ContinueReading
        title="Okumaya devam edin"
        items={[
          {
            title: cta.label,
            href: cta.href,
            description: cta.text,
            type: "Devam",
          },
        ]}
      />
    </div>
  );
}
