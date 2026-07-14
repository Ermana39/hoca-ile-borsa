import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const slug = "8-temmuz-2026-onemli-kap-escar-astor-arzum-etkileri";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel = "https://www.hocaileborsa.com/kap-ozeti-discover.webp";

export const metadata: Metadata = {
  title: "8 Temmuz 2026 Önemli KAP: ESCAR, ASTOR, ARZUM Etkileri",
  description:
    "8 Temmuz 2026 önemli KAP haberlerinde ESCAR pay devri, ASTOR 42,5 milyon dolarlık sözleşme, ARZUM tahsisli sermaye artırımı, ARDYZ siparişi ve TRALT mahkeme kararı öne çıktı.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "8 Temmuz 2026 Önemli KAP: ESCAR, ASTOR, ARZUM Etkileri",
    description:
      "ESCAR’da pay devri tamamlandı, ASTOR ABD’de yeni sözleşme imzaladı, ARZUM 240 milyon TL tahsisli sermaye artırımı için başvuru kararı aldı.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "8 Temmuz 2026 önemli KAP haberleri ESCAR ASTOR ARZUM etkileri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "8 Temmuz 2026 Önemli KAP: ESCAR, ASTOR, ARZUM Etkileri",
    description:
      "8 Temmuz 2026 gün sonu önemli KAP haberlerinde ESCAR, ASTOR, ARZUM, ARDYZ ve TRALT öne çıktı.",
    images: [haberGorsel],
  },
};

type EtkiTipi = "pozitif" | "negatif" | "notr";

const etkiStilleri: Record<EtkiTipi, string> = {
  pozitif: "border-emerald-200 bg-emerald-50 text-emerald-700",
  negatif: "border-red-200 bg-red-50 text-red-700",
  notr: "border-slate-200 bg-slate-50 text-slate-700",
};

const kapHaberleri: {
  kod: string;
  baslik: string;
  etki: EtkiTipi;
  kapLink: string;
  neOldu: string;
  olasiEtki: string;
}[] = [
  {
    kod: "ESCAR",
    baslik: "ESCAR’da %77,62 Pay Devri Tamamlandı",
    etki: "pozitif",
    kapLink: "https://www.kap.org.tr/Bildirim/1629698",
    neOldu:
      "ESCAR’da şirket sermayesinin %77,62’sini temsil eden payların Bulls Yatırım Holding’e devri tamamlandı. Nihai devir bedeli 141,41 milyon dolar, TL karşılığı 6,63 milyar TL olarak açıklandı.",
    olasiEtki:
      "Kontrol değişimi netleştiği için hisse tarafında ana başlık yeni ortaklık yapısı, zorunlu pay alım teklifi süreci ve yeni yönetimin atacağı adımlar olacak.",
  },
  {
    kod: "ASTOR",
    baslik: "ASTOR ABD’de 42,5 Milyon Dolarlık Sözleşme İmzaladı",
    etki: "pozitif",
    kapLink: "https://www.kap.org.tr/Bildirim/1627788",
    neOldu:
      "ASTOR, Amerika’da yerleşik bir firma ile 100 MVA ile 350 MVA arasında değişen güç transformatörlerinin tedariki için 42,51 milyon dolarlık sözleşme imzaladı.",
    olasiEtki:
      "Döviz bazlı büyük sipariş, ihracat ve sipariş defteri görünümü açısından pozitif. Teslimatların 2027 Mart, Ağustos ve Ekim aylarında yapılması planlanıyor.",
  },
  {
    kod: "ARZUM",
    baslik: "ARZUM 240 Milyon TL Tahsisli Sermaye Artırımı İçin Başvuruyor",
    etki: "notr",
    kapLink: "https://www.kap.org.tr/Bildirim/1629919",
    neOldu:
      "ARZUM, mevcut 600 milyon TL çıkarılmış sermayesini 840 milyon TL’ye çıkarmak için 240 milyon TL tutarında tahsisli sermaye artırımı kararı aldı.",
    olasiEtki:
      "Özkaynak yapısını güçlendirme amacı pozitif okunabilir. Rüçhan haklarının kısıtlanması ve tahsisli satış yapısı nedeniyle yatırımcı tarafında detaylar ayrıca izlenecek.",
  },
  {
    kod: "ARDYZ",
    baslik: "ARDYZ 3,45 Milyon Euroluk Yapay Zekâ Destekli Sipariş Aldı",
    etki: "pozitif",
    kapLink: "https://www.kap.org.tr/Bildirim/1627660",
    neOldu:
      "ARDYZ, son kullanıcısı kamu tüzel kişisi olan yapay zekâ destekli güvenlik cihazları ve dijital dönüşüm sistemleri projesi için KDV dahil 3,45 milyon euro tutarında sipariş aldı.",
    olasiEtki:
      "Sipariş tutarı ve proje başlığı teknoloji odaklı iş akışı açısından pozitif. Etkinin daha net görülmesi için teslimat ve ciroya yansıma takvimi izlenecek.",
  },
  {
    kod: "TRALT",
    baslik: "TRALT Karapınar Projesinde Yürütmeyi Durdurma Kararı",
    etki: "negatif",
    kapLink: "https://www.kap.org.tr/Bildirim/1627648",
    neOldu:
      "TRALT, Çanakkale Karapınar Altın-Gümüş Madeni Açık Ocak İşletmesi Projesi için açılan davada yürütmenin durdurulması talebinin kesin olarak kabul edildiğini açıkladı.",
    olasiEtki:
      "Proje takvimi açısından negatif. Nihai karar verilmediği için konu hukuki süreç ve şirketin sonraki açıklamalarıyla takip edilecek.",
  },
  {
    kod: "KLYPV",
    baslik: "KLYPV 141,5 Milyon TL’lik GES Panel Kurulum Sözleşmesi İmzaladı",
    etki: "pozitif",
    kapLink: "https://www.kap.org.tr/Bildirim/1627645",
    neOldu:
      "KLYPV, yurt içi yerleşik bir şirketle güneş enerjisi panellerinin anahtar teslim kurulumu ve devreye alınmasına ilişkin KDV hariç 141,52 milyon TL tutarında sözleşme imzaladı.",
    olasiEtki:
      "Şirket, projenin 2026 yılı sonuna kadar tamamlanmasını ve hasılata yansımasını bekliyor. Ciro ve kârlılık tarafında pozitif etki beklentisi öne çıktı.",
  },
  {
    kod: "ENDAE",
    baslik: "ENDAE Bağlı Ortaklığında Büyük Bedelsiz Sermaye Artırımı",
    etki: "pozitif",
    kapLink: "https://www.kap.org.tr/Bildirim/1628571",
    neOldu:
      "ENDAE’nin %74,53 oranında pay sahibi olduğu Egenda Ege Enerji, 210 milyon TL olan sermayesini iç kaynaklardan 890 milyon TL artırarak 1,1 milyar TL’ye çıkardı.",
    olasiEtki:
      "ENDAE’nin Egenda sermayesindeki payı 156,51 milyon TL’den 819,80 milyon TL’ye yükseldi. Bağlı ortaklık değerlemesi ve özkaynak görünümü açısından pozitif okunabilir.",
  },
  {
    kod: "DENIZ",
    baslik: "DENIZ 2,03 Milyar TL Ana Para Tutarındaki TGA Portföylerini Sattı",
    etki: "notr",
    kapLink: "https://www.kap.org.tr/Bildirim/1628437",
    neOldu:
      "DENIZ, kanuni takip hesaplarında izlenen toplam 2,03 milyar TL bakiye ana para tutarlı tahsili gecikmiş alacak portföylerinin satış ve devir işlemlerinin tamamlandığını açıkladı.",
    olasiEtki:
      "Takipteki alacak portföylerinin devri bilanço sadeleşmesi açısından izlenir. Satış bedeli açıklamada yer almadığı için finansal etki sınırlı detayla okunabilir.",
  },
  {
    kod: "KORTS",
    baslik: "KORTS’ta Toplu İş Sözleşmesi İmzalandı, Grev Sona Erdi",
    etki: "pozitif",
    kapLink: "https://www.kap.org.tr/Bildirim/1627800",
    neOldu:
      "KORTS, TEKSİF ile 01.01.2026-31.12.2027 dönemini kapsayan toplu iş sözleşmesinin 7 Temmuz 2026’da imzalandığını ve grev uygulamasının sona erdiğini açıkladı.",
    olasiEtki:
      "Üretim ve operasyon sürekliliği açısından pozitif. Grev riskinin kalkması şirketin operasyonel görünümünü rahatlatan başlık oldu.",
  },
  {
    kod: "ISCTR",
    baslik: "ISCTR Yurt Dışı Tier 2 Eurobond İhracı İçin Bankaları Yetkilendirdi",
    etki: "notr",
    kapLink: "https://www.kap.org.tr/Bildirim/1627822",
    neOldu:
      "İş Bankası, yurt dışında yerleşik yatırımcılara satılmak üzere ABD doları cinsinden Basel III uyumlu katkı sermayeye dahil edilebilir borçlanma aracı ihracı için bankalar grubunu yetkilendirdi.",
    olasiEtki:
      "İhraç büyüklüğü ve koşulları netleşmeden etki sınırlı okunur. Ancak katkı sermaye niteliği nedeniyle bankanın sermaye yapısı açısından takip edilecek bir gelişme.",
  },
  {
    kod: "TKNSA",
    baslik: "TKNSA’da Genel Müdürlük Görevine Mustafa Öget Kantarcı Atandı",
    etki: "notr",
    kapLink: "https://www.kap.org.tr/Bildirim/1627849",
    neOldu:
      "TKNSA, Mustafa Öget Kantarcı’nın 1 Ağustos 2026 tarihinden itibaren geçerli olmak üzere Genel Müdür olarak atanmasına karar verdi.",
    olasiEtki:
      "Yönetim tarafında değişim haberi. Özellikle e-ticaret ve dijital büyüme geçmişi nedeniyle şirket stratejisinde dijital kanal adımları izlenecek.",
  },
  {
    kod: "ENPRA",
    baslik: "ENPRA Hakim Ortağı QNB’nin Finansal Sonuçlarını Duyurdu",
    etki: "notr",
    kapLink: "https://www.kap.org.tr/Bildirim/1629438",
    neOldu:
      "ENPRA, hakim ortağı Qatar National Bank’in 30 Haziran 2026 dönemine ilişkin sınırlı denetimden geçmiş konsolide finansal tablolarının yayımlandığını açıkladı.",
    olasiEtki:
      "Doğrudan yeni operasyonel karar içermiyor. Bankanın grup raporlaması içindeki finansal verileri nedeniyle bilgi amaçlı izlenecek nitelikte.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "8 Temmuz 2026 Önemli KAP: ESCAR, ASTOR, ARZUM Etkileri",
  description:
    "8 Temmuz 2026 önemli KAP haberlerinde ESCAR pay devri, ASTOR 42,5 milyon dolarlık sözleşme, ARZUM tahsisli sermaye artırımı, ARDYZ siparişi ve TRALT mahkeme kararı öne çıktı.",
  image: haberGorsel,
  datePublished: "2026-07-08T19:30:00+03:00",
  dateModified: "2026-07-08T19:30:00+03:00",
  url: haberUrl,
  inLanguage: "tr",
  author: {
    "@type": "Person",
    "@id": "https://www.hocaileborsa.com/yazar/erman-hoca#person",
    name: "Erman Hoca",
    url: "https://www.hocaileborsa.com/yazar/erman-hoca",
  },
  publisher: {
    "@type": "Organization",
    "@id": "https://www.hocaileborsa.com/#organization",
    name: "Hoca İle Borsa",
    url: "https://www.hocaileborsa.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.hocaileborsa.com/icon-512.png",
    },
  },
};

function KapCard({
  haber,
  index,
}: {
  haber: (typeof kapHaberleri)[number];
  index: number;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <span className="rounded-lg bg-slate-900 px-3 py-1 text-sm font-bold text-white">
          {index + 1}
        </span>
        <span className="text-xl font-bold text-slate-950">{haber.kod}</span>
        <span
          className={`rounded-full border px-3 py-1 text-xs font-bold ${etkiStilleri[haber.etki]}`}
        >
          {haber.etki === "pozitif"
            ? "Pozitif"
            : haber.etki === "negatif"
              ? "Negatif"
              : "Nötr / Takip"}
        </span>
      </div>

      <h2 className="text-xl font-bold tracking-tight text-slate-900">
        {haber.baslik}
      </h2>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
          <div className="text-sm font-bold text-blue-800">Ne oldu?</div>
          <p className="mt-2 text-sm leading-7 text-blue-950">{haber.neOldu}</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <div className="text-sm font-bold text-slate-800">Olası Etki</div>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            {haber.olasiEtki}
          </p>
        </div>
      </div>

      <a
        href={haber.kapLink}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="mt-4 inline-flex rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
      >
        Orjinal Kap içeriği
      </a>
    </section>
  );
}

export default function SekizTemmuzOnemliKapPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
            <Image
              src="/kap-ozeti-discover.webp"
              alt="8 Temmuz 2026 önemli KAP haberleri ESCAR ASTOR ARZUM etkileri"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              8 Temmuz 2026 Önemli KAP: ESCAR, ASTOR, ARZUM Etkileri
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Gün Sonu KAP Özeti
              </span>
              <time dateTime={haberSaati} className="text-sm text-slate-500">
                {haberTarihi}
              </time>
              <span className="text-slate-300">·</span>
              <Link
                href="/yazar/erman-hoca"
                className="text-sm font-semibold text-slate-500 hover:text-blue-600"
              >
                Erman Hoca
              </Link>
            </div>

            <div className="space-y-6 text-base leading-8 text-slate-700 md:text-lg">
              <p>
                8 Temmuz 2026 KAP bildirimlerinde en güçlü başlıklar{" "}
                <strong>ESCAR</strong>, <strong>ASTOR</strong> ve{" "}
                <strong>ARZUM</strong> tarafında geldi. ESCAR’da çoğunluk pay
                devri tamamlandı, ASTOR ABD’de büyük ölçekli yeni sözleşme
                imzaladı, ARZUM ise 240 milyon TL tahsisli sermaye artırımı için
                başvuru kararı aldı.
              </p>

              <p>
                Günün diğer öne çıkan bildirimlerinde <strong>ARDYZ</strong>{" "}
                yapay zekâ destekli sistem siparişi, <strong>TRALT</strong>{" "}
                Karapınar Projesi için yürütmeyi durdurma kararı,{" "}
                <strong>KLYPV</strong> güneş enerjisi panel kurulum sözleşmesi ve{" "}
                <strong>KORTS</strong> tarafında grevin sona ermesi dikkat çekti.
              </p>

              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                <h2 className="text-lg font-bold text-blue-950">
                  Günün kısa özeti
                </h2>
                <div className="mt-3 grid gap-3 text-sm leading-7 text-blue-900 md:grid-cols-2">
                  <p>
                    <strong>ESCAR:</strong> %77,62 pay Bulls Yatırım Holding’e
                    devredildi.
                  </p>
                  <p>
                    <strong>ASTOR:</strong> ABD’de 42,5 milyon dolarlık güç
                    transformatörü sözleşmesi imzalandı.
                  </p>
                  <p>
                    <strong>ARZUM:</strong> 240 milyon TL tahsisli sermaye
                    artırımı için SPK başvurusu kararı alındı.
                  </p>
                  <p>
                    <strong>TRALT:</strong> Karapınar Projesi için yürütmeyi
                    durdurma kararı açıklandı.
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {kapHaberleri.map((haber, index) => (
                  <KapCard key={haber.kod} haber={haber} index={index} />
                ))}
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <h2 className="text-xl font-bold text-emerald-950">
                  Genel değerlendirme
                </h2>
                <p className="mt-3 text-sm leading-7 text-emerald-900 md:text-base">
                  Günün en güçlü şirket haberi ESCAR’da kontrol değişiminin
                  tamamlanması ve ASTOR’un ABD kaynaklı büyük sözleşmesi oldu.
                  ARZUM tarafındaki tahsisli sermaye artırımı, şirketin özkaynak
                  yapısını güçlendirme başlığıyla öne çıkarken, TRALT’ta hukuki
                  süreç proje tarafında negatif ayrıştı.
                </p>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="8 Temmuz 2026 Önemli KAP: ESCAR, ASTOR, ARZUM Etkileri"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. KAP bildirimlerinin etkisi, şirketlerin
                sonraki açıklamaları ve piyasa koşullarıyla birlikte
                değerlendirilmelidir.
              </div>
            </div>
          </div>

          <HaberAltKisim href={`/haber/${slug}`} />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}
