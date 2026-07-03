import Link from "next/link";
import AuthorBox from "@/components/AuthorBox";
import RelatedNews from "@/components/RelatedNews";
import { rehberler } from "@/lib/rehberler";

function rehberHaberleri(currentHref: string) {
  if (currentHref.includes("sermaye-artirimlari")) {
    return [
      {
        title: "ORGE'den yüzde 400 bedelsiz sermaye artırımı başvurusu",
        href: "/haber/orge-400-bedelsiz-sermaye-artirimi-basvurusu",
        description: "Bedelsiz sermaye artırımı başvurusunun yatırımcı açısından okunuşu.",
        type: "Bedelsiz",
      },
      {
        title: "HLGYO'dan yüzde 56,25 bedelsiz sermaye artırımı kararı",
        href: "/haber/hlgyo-5625-bedelsiz-sermaye-artirimi-karari",
        description: "Bedelsiz kararının sermaye ve pay sayısı tarafındaki etkisi.",
        type: "Bedelsiz",
      },
      {
        title: "BMSTL'de yüzde 100 bedelsiz sermaye artırımı için SPK onayı",
        href: "/haber/bmstl-100-bedelsiz-sermaye-artirimi-spk-onayi",
        description: "SPK onayı sonrası hak kullanım sürecine yönelik örnek haber.",
        type: "SPK onayı",
      },
    ];
  }

  if (currentHref.includes("kap-aciklamalari-nasil-okunur")) {
    return [
      {
        title: "23 Haziran 2026 önemli KAP haberleri",
        href: "/haber/23-haziran-2026-onemli-kap-haberleri",
        description: "Gün sonu KAP bildirimlerini kısa yorumlarla birlikte okuyun.",
        type: "KAP",
      },
      {
        title: "22 Haziran 2026 önemli KAP haberleri",
        href: "/haber/22-haziran-2026-onemli-kap-haberleri",
        description: "Şirket açıklamalarının piyasa etkisi nasıl sınıflanıyor?",
        type: "KAP",
      },
      {
        title: "19 Haziran 2026 önemli KAP haberleri",
        href: "/haber/19-haziran-2026-onemli-kap-haberleri",
        description: "KAP haberlerinde öne çıkan iş ilişkisi, sermaye ve finansman başlıkları.",
        type: "KAP",
      },
    ];
  }

  if (
    currentHref.includes("halka-arz") ||
    currentHref.includes("esit-dagitim") ||
    currentHref.includes("oransal-dagitim") ||
    currentHref.includes("t1-t2-bakiye") ||
    currentHref.includes("izahname")
  ) {
    return [
      {
        title: "Beta Enerji halka arzı başladı",
        href: "/haber/beta-enerji-halka-arzi-basladi-talep-toplama-ve-lot-dagilimi",
        description: "Talep toplama tarihleri, fiyat ve olası lot dağılımı.",
        type: "Halka arz",
      },
      {
        title: "Beta Enerji halka arzı kaç lot verir?",
        href: "/haber/beta-enerji-halka-arzi-kac-lot-verir",
        description: "Katılımcı sayısına göre olası dağıtım senaryoları.",
        type: "Lot rehberi",
      },
      {
        title: "Beta Enerji onaylı izahname sayfası",
        href: "/halka-arz/onayli-izahnameler/beta-enerji-teknoloji-betae",
        description: "İzahname, fon kullanımı ve finansal görünüm özeti.",
        type: "İzahname",
      },
    ];
  }

  if (currentHref.includes("temettu")) {
    return [
      {
        title: "KTLEV ve SVGYO için temettü günü",
        href: "/haber/ktlev-svgyo-23-haziran-2026-temettu-gundemi",
        description: "Hak kullanım tarihi ve temettü sonrası teorik fiyat bilgileri.",
        type: "Temettü",
      },
      {
        title: "Temettü takvimi",
        href: "/temettu",
        description: "Yaklaşan temettü tarihleri ve ilgili hesaplama araçları.",
        type: "Takvim",
      },
    ];
  }

  return [];
}

export default function RehberAltBolumler({
  currentHref,
}: {
  currentHref: string;
}) {
  const ilgiliRehberler = rehberler
    .filter((rehber) => rehber.href !== currentHref);
  const haberler = rehberHaberleri(currentHref);

  return (
    <section className="space-y-6 border-t border-slate-200 pt-8">
      <RelatedNews items={haberler} />

      <div>
        <h2 className="text-xl font-bold text-slate-900">İlgili Rehberler</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {ilgiliRehberler.map((rehber) => (
            <Link
              key={rehber.href}
              href={rehber.href}
              prefetch={false}
              className="group rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-200 hover:bg-blue-50"
            >
              <h3 className="text-sm font-bold leading-6 text-slate-900 group-hover:text-blue-700">
                {rehber.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {rehber.description}
              </p>
              <div className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 transition group-hover:gap-2">
                <span>Oku</span>
                <span aria-hidden>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <AuthorBox slug="erman-hoca" />
    </section>
  );
}
