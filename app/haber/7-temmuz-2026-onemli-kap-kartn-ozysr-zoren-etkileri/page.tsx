import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import KapCardLinks from "@/components/KapCardLinks";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const slug = "7-temmuz-2026-onemli-kap-kartn-ozysr-zoren-etkileri";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel = "https://www.hocaileborsa.com/kap-ozeti-discover.webp";

const title = "7 Temmuz 2026 Önemli KAP: KARTN, OZYSR, ZOREN Etkileri";
const description =
  "KARTN 72 milyon dolarlık pay devri, OZYSR 60 ton kapasiteli yeni ürün, ZOREN Tekkehamam II hukuki süreci ve 7 Temmuz KAP haberlerinde olası etkiler.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title,
    description,
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [haberGorsel],
  },
};

const etkiStilleri: Record<string, string> = {
  Pozitif: "border-emerald-200 bg-emerald-50 text-emerald-800",
  "Pozitif / Takip Edilmeli": "border-emerald-200 bg-emerald-50 text-emerald-800",
  "Sınırlı Pozitif": "border-teal-200 bg-teal-50 text-teal-800",
  Negatif: "border-red-200 bg-red-50 text-red-800",
  "Negatif / Takip Edilmeli": "border-red-200 bg-red-50 text-red-800",
  "Sınırlı Negatif": "border-orange-200 bg-orange-50 text-orange-800",
  "Nötr / Takip Edilmeli": "border-slate-200 bg-white text-slate-700",
};

const kapHaberleri = [
  {
    baslik: "Kartonsan (KARTN)",
    etki: "Pozitif / Takip Edilmeli",
    kapLink: "https://www.kap.org.tr/Bildirim/1625589",
    neOldu:
      "KARTN’de Pak Holding, Asil Holding ve Pak Gıda’nın sahip olduğu toplam %77,21 oranındaki payların Hasan Peker ve Aydın Veli Serin’e toplam 72 milyon ABD doları bedelle satışı için pay alım satım sözleşmesi imzalandı.",
    olasiEtki:
      "Şirket kontrol değişimi ve devir sonrası zorunlu pay alım teklifi süreci nedeniyle haber güçlü takip başlığı oluşturuyor. İşlem kapanış koşullarına bağlı olduğu için kesin devir ve pay alım teklifi açıklamaları izlenecek.",
  },
  {
    baslik: "Özyaşar Tel (OZYSR)",
    etki: "Pozitif",
    kapLink: "https://www.kap.org.tr/Bildirim/1626609",
    neOldu:
      "OZYSR, Ar-Ge Merkezi tarafından geliştirilen alüminyum kaynak telinde ilk müşteri siparişlerinin ardından üretime geçtiğini açıkladı. Ürün için aylık üretim kapasitesi 60 ton olarak belirlendi.",
    olasiEtki:
      "Yeni ürün portföyü ve ciro katkısı açısından pozitif. Açıklamada sipariş büyüklüğü veya beklenen yıllık katkı paylaşılmadığı için etkinin finansallara yansıması sonraki satış gelişmeleriyle takip edilmeli.",
  },
  {
    baslik: "Zorlu Enerji (ZOREN)",
    etki: "Nötr / Takip Edilmeli",
    kapLink: "https://www.kap.org.tr/Bildirim/1627268",
    neOldu:
      "ZOREN bağlı ortaklığı Zorlu Doğal Elektrik Üretimi A.Ş., Tekkehamam II Jeotermal Enerji Santrali Projesi kapsamında idari işlemin iptali için Ankara 18. İdare Mahkemesi’ne başvurdu.",
    olasiEtki:
      "Haber proje sürecine ilişkin hukuki takip başlığıdır. Kısa vadede doğrudan finansal etki yerine mahkeme süreci, idari kararın sonucu ve projenin ilerleme takvimi izlenecek.",
  },
  {
    baslik: "QNB Finansal Kiralama (QNBFK)",
    etki: "Pozitif",
    kapLink: "https://www.kap.org.tr/Bildirim/1627382",
    neOldu:
      "QNBFK, Societe Generale’nin tek global koordinatörlüğünde uluslararası finansal kurumlardan 117 milyon ABD doları ve 53 milyon avro tutarında sendikasyon kredisi temini için anlaşma imzaladı.",
    olasiEtki:
      "Döviz bazlı sendikasyon kredisi finansman kaynaklarının çeşitlenmesi ve büyüme kapasitesi açısından pozitif okunabilir. Maliyet, vade ve kullanım alanı sonraki finansal etkide belirleyici olacak.",
  },
  {
    baslik: "Balsu Gıda (BALSU)",
    etki: "Pozitif / Takip Edilmeli",
    kapLink: "https://www.kap.org.tr/Bildirim/1627419",
    neOldu:
      "BALSU, BG Holding A.Ş.’ye yönelik tahsisli sermaye artırımı için SPK’ya başvurdu. Planlanan toplam satış hasılatı 4,64 milyar TL olarak açıklandı.",
    olasiEtki:
      "Yüksek tutarlı tahsisli sermaye artırımı şirket finansmanı açısından önemli. Süreç SPK başvurusu aşamasında olduğu için onay, satış fiyatı ve nihai nominal artırım tutarı izlenecek.",
  },
  {
    baslik: "İş Girişim Sermayesi Yatırım Ortaklığı (ISGSY)",
    etki: "Nötr / Takip Edilmeli",
    kapLink: "https://www.kap.org.tr/Bildirim/1626407",
    neOldu:
      "ISGSY’de %487,89748 oranındaki bedelsiz sermaye artırımı tescil edildi. Şirket sermayesi 85.048.841,27 TL’den 500.000.000 TL’ye yükseldi.",
    olasiEtki:
      "Bedelsiz sermaye artırımı sürecinin tescil edilmesi teknik olarak sürecin tamamlandığını gösteriyor. Haber daha önceki bedelsiz gündemin devamı niteliğinde olduğu için etki sınırlı takip edilebilir.",
  },
  {
    baslik: "Huzur Faktoring (HUZFA)",
    etki: "Nötr / Takip Edilmeli",
    kapLink: "https://www.kap.org.tr/Bildirim/1626950",
    neOldu:
      "HUZFA, iç kaynaklardan karşılanmak üzere %100 bedelsiz sermaye artırımı yaptı. Şirket sermayesi 271 milyon TL’den 375 milyon TL’ye çıkarıldı ve işlem 7 Temmuz 2026 tarihli TTSG ile tescil edildi.",
    olasiEtki:
      "Bedelsiz artırımın tescili sermaye yapısı açısından takip başlığıdır. İşlem tamamlanma aşamasında olduğu için yeni bir başvuru/onay etkisinden çok teknik süreç etkisi öne çıkıyor.",
  },
  {
    baslik: "Anadolu Hayat Emeklilik (ANHYT)",
    etki: "Pozitif",
    kapLink: "https://www.kap.org.tr/Bildirim/1627064",
    neOldu:
      "ANHYT, 01.01.2026-30.06.2026 döneminde toplam brüt prim üretiminin 11,86 milyar TL olduğunu açıkladı. Hayat dalı prim üretimi 11,86 milyar TL seviyesinde gerçekleşti.",
    olasiEtki:
      "Prim üretimi operasyonel büyüme açısından pozitif izlenebilir. Nihai etki için teknik kâr, yatırım gelirleri ve dönem kârlılığı birlikte değerlendirilmelidir.",
  },
  {
    baslik: "Anadolu Sigorta (ANSGR)",
    etki: "Pozitif",
    kapLink: "https://www.kap.org.tr/Bildirim/1627397",
    neOldu:
      "ANSGR, 2026 yılı ilk yarısına ilişkin brüt prim üretimi verisini açıkladı. Şirketin prim üretimi geçen yılın aynı dönemine göre büyüme gösterdi.",
    olasiEtki:
      "Sigorta şirketlerinde prim üretimi ana operasyonel takip verilerinden biridir. Büyümenin kârlılığa etkisi hasar oranı, teknik denge ve yatırım gelirleriyle birlikte izlenecek.",
  },
  {
    baslik: "Ebebek Mağazacılık (EBEBK)",
    etki: "Pozitif",
    kapLink: "https://www.kap.org.tr/Bildirim/1627421",
    neOldu:
      "EBEBK, Haziran 2026’da Türkiye’deki mağaza ziyaretçi sayısının 4.762.968, ebebek.com ziyaret sayısının ise 10.633.631 olduğunu açıkladı. İlk 6 ayda mağaza ziyaretçi sayısı 29.169.781’e, internet sitesi ziyaret sayısı 74.133.825’e ulaştı.",
    olasiEtki:
      "Ziyaretçi sayılarındaki artış satış potansiyeli açısından pozitif izlenebilir. Ciro ve kârlılık etkisi için sepet büyüklüğü, dönüşüm oranı ve finansal sonuçlar belirleyici olacak.",
  },
  {
    baslik: "Sümer Varlık Yönetim (SMRVA)",
    etki: "Sınırlı Pozitif",
    kapLink: "https://www.kap.org.tr/Bildirim/1627140",
    neOldu:
      "SMRVA, Denizbank’ın gerçekleştirdiği tahsili gecikmiş alacak ihalesinde kazandığı iki bireysel portföyün devir ve temlik işlemlerinin tamamlandığını açıkladı. Portföyler 7 Temmuz 2026 itibarıyla tahsilat sürecine dahil edildi.",
    olasiEtki:
      "Portföylerin tahsilat sürecine alınması operasyonel gelir potansiyeli açısından pozitif. Tahsilat performansı ve portföy kârlılığı sonraki dönemlerde izlenecek.",
  },
  {
    baslik: "Akiş GYO (AKSGY)",
    etki: "Nötr / Takip Edilmeli",
    kapLink: "https://www.kap.org.tr/Bildirim/1626997",
    neOldu:
      "AKSGY, tek pay sahibi olduğu Akiş Global Gayrimenkul Yatırımı A.Ş.’nin sermayesinin 3 milyon TL’den 126 milyon TL’ye artırılması kapsamında 123 milyon TL tutarındaki payı taahhüt etti.",
    olasiEtki:
      "Bağlı ortaklık sermaye artırımına katılım kurumsal yapı ve finansman yönetimi açısından takip edilecek. Doğrudan piyasa etkisi sınırlı olabilir.",
  },
  {
    baslik: "Orzaks İlaç (ORZAX)",
    etki: "Nötr / Takip Edilmeli",
    kapLink: "https://www.kap.org.tr/Bildirim/1626404",
    neOldu:
      "ORZAX, halka arz izahnamesinde yer alan ilişkili taraflardan diğer alacak bakiyesine ilişkin taahhüt kapsamında, ortak satışından elde edilen gelirin ilgili bakiyenin kapatılmasında kullanılmasına yönelik açıklama yaptı.",
    olasiEtki:
      "Halka arz sonrası finansal yapı ve ilişkili taraf alacakları açısından takip edilecek bir başlık. Etki, taahhüdün gerçekleşme süreci ve alacak bakiyesinin kapanmasıyla netleşecek.",
  },
  {
    baslik: "Mobiltel (MOBTL)",
    etki: "Nötr / Takip Edilmeli",
    kapLink: "https://www.kap.org.tr/Bildirim/1626626",
    neOldu:
      "MOBTL, Ali Burç Tutanç’ın Genel Müdür olarak atanmasına karar verildiğini açıkladı.",
    olasiEtki:
      "Üst yönetim değişikliği şirketin operasyonel yönetimi açısından takip edilecek. Kısa vadeli finansal etkiden çok yönetim geçişi ve yeni dönem stratejisi izlenecek.",
  },
  {
    baslik: "TR Anadolu Metal / TR Doğal Enerji (TRMET)",
    etki: "Nötr / Takip Edilmeli",
    kapLink: "https://www.kap.org.tr/Bildirim/1625587",
    neOldu:
      "ATP Marin Inc.-Sentinel davasında, yaklaşık 10 milyon avro güncel değere sahip 3 yatın mülkiyetinin ATP Marin Inc. tarafından geri alınmasına ilişkin kararın kesinleştiği açıklandı.",
    olasiEtki:
      "Dava sürecinin şirket lehine kesinleşmesi varlıkların geri kazanımı açısından olumlu; ancak doğrudan finansal yansıma ve kayıt süreci sonraki açıklamalarla netleşecek.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: title,
  description,
  image: haberGorsel,
  datePublished: "2026-07-07T20:40:00+03:00",
  dateModified: "2026-07-07T20:40:00+03:00",
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

export default function YediTemmuzKapHaberleriPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
            <Image
              src="/kap-ozeti-discover.webp"
              alt={title}
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              {title}
            </h1>

            <div className="mb-4 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                KAP Bildirimleri
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

            <div className="mt-6 space-y-6 text-base leading-8 text-slate-700 md:text-lg">
              <p>
                7 Temmuz 2026 gün sonu KAP özetinde KARTN’de 72 milyon ABD
                dolarlık çoğunluk pay devri, OZYSR’nin 60 ton aylık kapasiteli
                alüminyum kaynak teli üretimine başlaması ve ZOREN’in Tekkehamam
                II JES projesine ilişkin hukuki süreci öne çıktı.
              </p>

              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm font-medium leading-7 text-blue-900 md:text-base">
                Günün diğer takip başlıklarında QNBFK’nin 117 milyon dolar ve
                53 milyon avroluk sendikasyon kredisi, BALSU’nun 4,64 milyar TL
                planlanan hasılatlı tahsisli sermaye artırımı başvurusu, ISGSY ve
                HUZFA bedelsiz sermaye süreçleri, ANHYT ve ANSGR prim üretimi
                verileri ile EBEBK ziyaretçi sayıları yer aldı.
              </div>

              <div className="space-y-5">
                {kapHaberleri.map((haber) => (
                  <section
                    key={haber.baslik + haber.kapLink}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                      <h2 className="text-base font-semibold text-slate-800">
                        {haber.baslik}
                      </h2>
                      <span
                        className={`inline-flex w-fit rounded-md border px-2.5 py-1 text-xs font-semibold ${
                          etkiStilleri[haber.etki] ??
                          etkiStilleri["Nötr / Takip Edilmeli"]
                        }`}
                      >
                        Olası Etki: {haber.etki}
                      </span>
                    </div>

                    <div className="mt-3 rounded-lg bg-white px-3 py-2 text-sm leading-7 text-slate-600 ring-1 ring-slate-200">
                      <span className="font-semibold text-slate-900">
                        Ne oldu?{" "}
                      </span>
                      {haber.neOldu}
                    </div>

                    <div className="mt-2 rounded-lg bg-white px-3 py-2 text-sm leading-7 text-slate-600 ring-1 ring-slate-200">
                      <span className="font-semibold text-slate-900">
                        Olası Etki:{" "}
                      </span>
                      {haber.olasiEtki}
                    </div>

                    <a
                      href={haber.kapLink}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="mt-3 inline-block text-sm font-medium text-slate-700 underline underline-offset-2"
                    >
                      Orjinal Kap içeriği
                    </a>

                    <KapCardLinks baslik={haber.baslik} />
                  </section>
                ))}
              </div>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium leading-7 text-emerald-900 md:text-base">
                Günün pozitif algılanabilecek tarafında KARTN’de kontrol değişimi
                potansiyeli, OZYSR’de yeni ürün üretimi, QNBFK’de dış finansman
                temini ve BALSU’da yüksek tutarlı tahsisli sermaye artırımı
                başvurusu öne çıktı.
              </div>

              <HaberIlgiliBolumler slug={slug} baslik={title} />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu özet bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
                KAP bildirimlerinde yer alan bazı süreçler başvuru, tescil,
                sözleşme, operasyonel veri veya hukuki süreç niteliğindedir.
                Nihai etki için şirketlerin sonraki açıklamaları ve finansal
                sonuçları takip edilmelidir.
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
