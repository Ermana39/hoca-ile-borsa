import type { Metadata } from "next";
import ContinueReading from "@/components/ContinueReading";
import HalkaArzSSS from "@/components/HalkaArzSSS";
import {
  bekleyenDeger,
  tahsisatMetni,
  type BilgiKarti,
  type HalkaArzVeri,
} from "@/lib/halka-arz";

const veri: HalkaArzVeri = {
  "slug": "golda-gida-san-ve-tic",
  "sirketAdi": "Golda Gıda San. ve Tic. A.Ş.",
  "seo": {
    "canonical": "https://www.hocaileborsa.com/halka-arz/onayli-izahnameler/golda-gida-san-ve-tic",
    "robots": {
      "index": true,
      "follow": true
    },
    "sitemap": true,
    "contentStatus": "onayli"
  },
  "baslikMeta": {
    "title": "Golda Gıda San. ve Tic. A.Ş. Halka Arz Detayları 2026 | Onaylı İzahname",
    "description": "Golda Gıda San. ve Tic. A.Ş. onaylı izahname bilgileri, 9,20 TL halka arz fiyatı, 87.499.998 lot toplam halka arz payı, sermaye artırımı, ortak satışı, fon kullanım planı ve finansal görünüm."
  },
  "ozet": {
    "halkaArzTarihi": "",
    "fiyatAralik": "9,20 TL",
    "dagitimYontemi": "Eşit Dağıtım",
    "pay": "87.499.998 Lot",
    "araciKurum": "Gedik Yatırım Menkul Değerler A.Ş. / Misyon Yatırım Bankası A.Ş.",
    "pazar": "Yıldız Pazar",
    "bistKodu": "GOLDA"
  },
  "toplamPay": "87.499.998",
  "halkaAciklikOrani": "%35",
  "halkaArzSekli": [
    "Sermaye Artırımı: 50.000.000 Lot",
    "Ortak Satışı: 37.499.998 Lot (Bera Holding A.Ş.)"
  ],
  "fonKullanim": [
    "%50-60 Kapasite artışı, modernizasyon",
    "%40-50 İşletme sermayesi"
  ],
  "satisYontemi": [
    "Borsa'da satış",
    "Sabit fiyatla talep toplama"
  ],
  "fonKullanimYorumu": "Golda Gıda halka arzında fon kullanım planının önemli bölümü kapasite artışı ve modernizasyon yatırımlarına ayrılmıştır. Un, irmik, makarna ve bakliyat üretimi yapan entegre gıda şirketlerinde kapasite, üretim verimliliği, enerji tüketimi, paketleme hattı, depolama gücü ve ihracat kabiliyeti doğrudan kârlılığı etkileyebilir. Modernizasyon yatırımları; üretim kalitesi, ürün çeşitliliği, maliyet kontrolü ve ölçek ekonomisi açısından takip edilmelidir. İşletme sermayesine ayrılan kaynak ise hammadde alımı, stok yönetimi, ihracat-tahsilat döngüsü, ambalaj maliyetleri ve dönemsel nakit ihtiyacı için önemlidir. Halka arzda sermaye artırımıyla birlikte Bera Holding A.Ş.’ye ait ortak satışı da bulunduğu için, şirket kasasına girecek kaynak ile ortak satışından doğacak tutar ayrı değerlendirilmelidir.",
  "finansalDonemler": [
    "2023",
    "2022",
    "2021"
  ],
  "finansalVeriler": [
    {
      "kalem": "Hasılat",
      "donemler": {
        "2021": "1,5 Milyar TL",
        "2022": "1,9 Milyar TL",
        "2023": "1,6 Milyar TL"
      }
    },
    {
      "kalem": "Brüt Kâr",
      "donemler": {
        "2021": "173,5 Milyon TL",
        "2022": "211,5 Milyon TL",
        "2023": "235,5 Milyon TL"
      }
    }
  ],
  "finansalYorum": "Finansal görünümde 2023 yılında hasılatın 2022’ye göre gerilediği, buna karşılık brüt kârın artış eğilimini koruduğu görülüyor. Bu yapı, ürün karması, satış fiyatları, hammadde maliyetleri ve operasyonel verimlilik tarafında ayrıca incelenmesi gereken bir görünüm oluşturuyor. Gıda üretimi tarafında finansal sonuçlar; buğday ve bakliyat fiyatları, enerji maliyetleri, ambalaj giderleri, ihracat talebi, kur hareketleri, kapasite kullanımı ve stok yönetimiyle yakından ilişkilidir. Bu nedenle Golda Gıda değerlendirilirken yalnızca hasılat ve brüt kâr rakamlarına bakmak yeterli olmaz; net kâr, faaliyet kârı, FAVÖK, nakit akışı, borçluluk, kapasite kullanımı, ihracat payı ve modernizasyon yatırımlarının kârlılığa katkısı birlikte incelenmelidir.",
  "oneCikanlar": [
    {
      "title": "Halka Arz Fiyatı",
      "value": "9,20 TL",
      "desc": "1 TL nominal değerli paylar 9,20 TL sabit fiyatla satışa sunulacaktır."
    },
    {
      "title": "Toplam Pay",
      "value": "87.499.998 Lot",
      "desc": "50.000.000 lot sermaye artırımı ve 37.499.998 lot ortak satışı."
    },
    {
      "title": "Halka Açıklık",
      "value": "%35",
      "desc": "Yeni sermaye üzerinden halka açıklık oranı."
    },
    {
      "title": "Satış Yöntemi",
      "value": "Borsa'da Satış",
      "desc": "Sabit fiyatla Borsa'da satış yöntemi uygulanacaktır."
    }
  ],
  "tahsisat": [],
  "tahsisatNotlari": [
    "Taslak yapıda tahsisat grubu bulunmadığı bilgisi yer almaktadır.",
    "Tamamen eşit dağıtım bilgisi bulunmaktadır.",
    "T1-T2 bakiye kullanımına uygundur."
  ],
  "taahhutOzeti": {
    "fiyatIstikrari": "30 gün. Brüt halka arz gelirinin %20'si. Gedik Yatırım Menkul Değerler A.Ş. tarafından yürütülmesi planlanmaktadır.",
    "satmamaTaahhudu": "1 yıl ihraççı, 1 yıl ortaklar.",
    "halkaAciklik": "%35."
  },
  "sirketHakkinda": "Golda Gıda San. ve Tic. A.Ş., Bera Holding A.Ş. bünyesinde faaliyet gösteren, un, irmik, makarna ve bakliyat üretimi üzerine uzmanlaşmış büyük ölçekli bir gıda şirketidir. Şirketin resmi unvanı Golda Gıda Sanayi ve Ticaret Anonim Şirketi olarak paylaşılmıştır. Bera Holding’in şirkette %66 paya sahip olduğu belirtilmektedir. MERSİS numarası 0576 0072 2790’dır. Şirketin genel merkezi ve entegre üretim tesisleri Karaman’ın Kazımkarabekir ilçesinde yer almaktadır. Merkez fabrika adresi Eminettin Mahallesi, Sanayi Bölgesi Küme Evler No:1, Kazımkarabekir / Karaman’dır. Ana üretim alanları un, irmik, makarna ve bakliyat çeşitleridir. Bunun yanında bisküvi, gofret, hayvancılık ve çeşitli tarımsal gıda ürünlerinin imalatı ve pazarlaması gibi faaliyet alanları da paylaşılmıştır. Golda Gıda’nın entegre tesislerinde üretilen ürünlerin hem iç piyasaya sunulduğu hem de farklı ülkelere ihraç edildiği belirtilmektedir. Gıda üretimi sektöründe şirket performansı; hammadde fiyatları, kapasite kullanımı, ihracat pazarı, enerji maliyetleri, ürün karması, marka gücü, stok yönetimi ve işletme sermayesi ihtiyacıyla yakından ilişkilidir.",
  "eksikBilgiNotu": "Talep toplama tarihi ve tahsisat oranları gibi henüz kesinleşmeyen alanlar resmi duyurular geldikçe güncellenmelidir.",
  "yasalUyari": "Bu sayfadaki bilgiler SPK onayı sonrası açıklanan ilk onaylı izahname verilerine göre genel bilgilendirme amacıyla hazırlanmıştır, yatırım tavsiyesi değildir.",
  "bistKodu": "GOLDA",
  "sermayeBilgileri": [
    {
      "label": "Mevcut Sermaye",
      "value": "200.000.000 TL"
    },
    {
      "label": "Yeni Sermaye",
      "value": "250.000.000 TL"
    },
    {
      "label": "Sermaye Artırımı",
      "value": "50.000.000 Lot"
    },
    {
      "label": "Mevcut Pay Satışı",
      "value": "37.499.998 Lot"
    },
    {
      "label": "Ek Pay Satışı",
      "value": "-"
    },
    {
      "label": "Satış Fiyatı",
      "value": "9,20 TL"
    }
  ]
};

export const metadata: Metadata = {
  title: veri.baslikMeta.title,
  description: veri.baslikMeta.description,
  alternates: {
    canonical: veri.seo?.canonical || "https://www.hocaileborsa.com/halka-arz/onayli-izahnameler/golda-gida-san-ve-tic",
  },
  robots: veri.seo?.robots,
};

function gorunur(item: BilgiKarti) {
  return !bekleyenDeger(item.value);
}

function InfoCard({ label, value }: BilgiKarti) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-white">
      <div className="text-sm font-medium text-slate-500">{label}</div>
      <div className="mt-2 whitespace-pre-line text-base font-bold text-slate-900">
        {value}
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-xl font-bold text-slate-900">{title}</h2>
      {children}
    </section>
  );
}

function ozetSatirlari(veri: HalkaArzVeri): BilgiKarti[] {
  const o = veri.ozet;
  return [
    { label: "İşlem Kodu", value: veri.bistKodu || o.bistKodu || "" },
    { label: "Talep Toplama Tarihi", value: o.halkaArzTarihi || "" },
    { label: "Halka Arz Fiyatı", value: o.fiyatAralik || "" },
    { label: "Toplam Halka Arz Payı", value: o.pay || veri.toplamPay || "" },
    { label: "Dağıtım Yöntemi", value: o.dagitimYontemi || "" },
    { label: "Halka Açıklık Oranı", value: veri.halkaAciklikOrani || "" },
    { label: "Katılım Endeksi", value: o.katilimEndeksi || "" },
    { label: "Pazar", value: o.pazar || "" },
    { label: "Aracı Kurum", value: o.araciKurum || "" },
  ].filter(gorunur);
}

function temelBilgiler(veri: HalkaArzVeri): BilgiKarti[] {
  const o = veri.ozet;
  return [
    { label: "Şirket", value: veri.sirketAdi },
    { label: "İşlem Kodu", value: veri.bistKodu || o.bistKodu || "" },
    { label: "Halka Arz Fiyatı", value: o.fiyatAralik || "" },
    { label: "Toplam Lot", value: o.pay || veri.toplamPay || "" },
    { label: "Halka Açıklık", value: veri.halkaAciklikOrani || "" },
    { label: "Katılım Endeksi", value: o.katilimEndeksi || "" },
    { label: "Dağıtım Yöntemi", value: o.dagitimYontemi || "" },
    { label: "Pazar", value: o.pazar || "" },
    { label: "Aracı Kurum", value: o.araciKurum || "" },
  ].filter(gorunur);
}

function tahsisatSatirlari(veri: HalkaArzVeri) {
  return veri.tahsisat.map(tahsisatMetni).filter((item) => !bekleyenDeger(item));
}

function sssSorulari(veri: HalkaArzVeri) {
  const kod = veri.bistKodu || veri.ozet.bistKodu || veri.sirketAdi;
  return [
    {
      soru: `${veri.sirketAdi} halka arz fiyatı kaç TL?`,
      cevap: `${veri.sirketAdi} halka arz fiyatı ${veri.ozet.fiyatAralik || "onaylı izahname/satış duyurusunda açıklanan fiyat"} olarak takip edilmektedir.`,
    },
    {
      soru: `${kod} halka arzında toplam kaç lot satışa sunulacak?`,
      cevap: `Toplam halka arz payı ${veri.ozet.pay || veri.toplamPay || "onaylı izahname verilerine göre güncellenecektir"}. Sermaye artırımı ve ortak satışı detayları sayfadaki sermaye ve satış bilgileri bölümünde yer almaktadır.`,
    },
    {
      soru: `${veri.sirketAdi} halka arzı hangi pazarda işlem görecek?`,
      cevap: `Payların ${veri.ozet.pazar || "Borsa İstanbul tarafından açıklanacak pazarda"} işlem görmesi beklenmektedir.`,
    },
    {
      soru: `${veri.sirketAdi} halka arz fonu nerede kullanılacak?`,
      cevap:
        veri.fonKullanim.length > 0
          ? `Fon kullanım başlıkları: ${veri.fonKullanim.join("; ")}.`
          : "Fon kullanım alanları onaylı izahname ve satış duyurusu üzerinden takip edilmelidir.",
    },
  ];
}

export default function GoldaGidaPage() {
  const summaryItems = ozetSatirlari(veri);
  const temel = temelBilgiler(veri);
  const sermayeBilgileri = veri.sermayeBilgileri || [];
  const tahsisat = tahsisatSatirlari(veri);
  const donemler =
    veri.finansalDonemler && veri.finansalDonemler.length > 0
      ? veri.finansalDonemler
      : Array.from(
          new Set(veri.finansalVeriler.flatMap((r) => Object.keys(r.donemler)))
        );
  const kod = veri.bistKodu || veri.ozet.bistKodu;

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="mb-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-7 text-white">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-2 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide">
                  Onaylı İzahname
                </p>
                <h1 className="text-2xl font-bold sm:text-3xl">
                  {veri.sirketAdi} Halka Arz Detayları
                </h1>
                <p className="mt-2 text-sm text-blue-100 sm:text-base">
                  {kod ? `#${kod} ` : ""}
                  halka arz fiyatı, sermaye ve satış bilgileri, fon kullanımı ve finansal görünüm
                </p>
              </div>

              {(veri.ozet.fiyatAralik || veri.toplamPay || veri.halkaAciklikOrani) && (
                <div className="grid grid-cols-2 gap-3 md:min-w-[320px]">
                  {veri.ozet.fiyatAralik && (
                    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                      <div className="text-xs text-blue-100">Halka Arz Fiyatı</div>
                      <div className="mt-1 text-lg font-bold">{veri.ozet.fiyatAralik}</div>
                    </div>
                  )}
                  {veri.toplamPay && (
                    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                      <div className="text-xs text-blue-100">Toplam Pay</div>
                      <div className="mt-1 text-lg font-bold">{veri.toplamPay}</div>
                    </div>
                  )}
                  {veri.halkaAciklikOrani && (
                    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                      <div className="text-xs text-blue-100">Halka Açıklık</div>
                      <div className="mt-1 text-lg font-bold">{veri.halkaAciklikOrani}</div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="grid gap-4 p-6 sm:grid-cols-2 xl:grid-cols-4">
            {summaryItems.map((item) => (
              <InfoCard key={item.label} {...item} />
            ))}
          </div>
        </section>

        {veri.oneCikanlar.length > 0 && (
          <section className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">Öne Çıkan Noktalar</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {veri.oneCikanlar.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="text-sm font-medium text-slate-500">{item.title}</div>
                  <div className="mt-2 text-2xl font-bold text-blue-700">{item.value}</div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="mb-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-xl font-bold text-slate-900">Temel Bilgiler</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {temel.map((item) => (
              <InfoCard key={item.label} {...item} />
            ))}
          </div>
        </section>

        <section className="grid gap-8 xl:grid-cols-3">
          <div className="space-y-8 xl:col-span-2">
            {veri.halkaArzSekli.length > 0 && (
              <Section title="Halka Arz Şekli">
                <div className="grid gap-3">
                  {veri.halkaArzSekli.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {sermayeBilgileri.length > 0 && (
              <Section title="Sermaye ve Satış Bilgileri">
                <div className="grid gap-4 sm:grid-cols-2">
                  {sermayeBilgileri.map((item) => (
                    <InfoCard key={item.label} {...item} />
                  ))}
                </div>
              </Section>
            )}

            {veri.satisYontemi && veri.satisYontemi.length > 0 && (
              <Section title="Satış Yöntemi">
                <div className="grid gap-3">
                  {veri.satisYontemi.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-medium text-blue-900"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {veri.fonKullanim.length > 0 && (
              <Section title="Fon Kullanım Yeri">
                <div className="grid gap-4 md:grid-cols-2">
                  {veri.fonKullanim.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium text-emerald-950"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                {veri.fonKullanimYorumu && (
                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    {veri.fonKullanimYorumu}
                  </p>
                )}
              </Section>
            )}

            {veri.finansalVeriler.length > 0 && (
              <Section title="Finansal Görünüm">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-2xl border border-slate-200">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-bold text-slate-700">
                          Kalem
                        </th>
                        {donemler.map((d) => (
                          <th
                            key={d}
                            className="px-4 py-3 text-left text-sm font-bold text-slate-700"
                          >
                            {d}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {veri.finansalVeriler.map((row, index) => (
                        <tr
                          key={row.kalem}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <td className="px-4 py-4 text-sm font-semibold text-slate-800">
                            {row.kalem}
                          </td>
                          {donemler.map((d) => (
                            <td key={d} className="px-4 py-4 text-sm text-slate-700">
                              {row.donemler[d] ?? "-"}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {veri.finansalYorum && (
                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    {veri.finansalYorum}
                  </p>
                )}
              </Section>
            )}

            <Section title={`${veri.sirketAdi} Halka Arz Yorumu`}>
              <p className="text-sm leading-7 text-slate-600">
                {veri.fonKullanimYorumu ||
                  `${veri.sirketAdi} halka arzı değerlendirilirken satış fiyatı, halka arz büyüklüğü, sermaye artırımı ve ortak satışı dengesi, fon kullanım planı, şirketin faaliyet alanı ve finansal görünümü birlikte ele alınmalıdır.`}
              </p>
            </Section>
          </div>

          <aside className="space-y-8">
            <Section title="Tahsisat Grupları">
              <div className="space-y-3">
                {tahsisat.length > 0 ? (
                  tahsisat.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900"
                    >
                      {item}
                    </div>
                  ))
                ) : (
                  <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
                    Tahsisat oranları ve lot kırılımı kesinleştiğinde bu alan güncellenecektir.
                  </div>
                )}
                {veri.tahsisatNotlari?.map((item, index) => (
                  <div
                    key={`not-${index}`}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Diğer Bilgiler">
              <div className="space-y-4">
                {[
                  { label: "İşlem Kodu", value: kod || "" },
                  { label: "Pazar", value: veri.ozet.pazar || "" },
                  { label: "Aracı Kurum", value: veri.ozet.araciKurum || "" },
                  { label: "Katılım Endeksi", value: veri.ozet.katilimEndeksi || "" },
                  { label: "Dağıtım", value: veri.ozet.dagitimYontemi || "" },
                ]
                  .filter(gorunur)
                  .map((item) => (
                    <InfoCard key={item.label} {...item} />
                  ))}
              </div>
            </Section>

            {veri.taahhutOzeti && (
              <Section title="Taahhüt Özeti">
                <div className="space-y-4">
                  {veri.taahhutOzeti.fiyatIstikrari && (
                    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
                      <div className="text-sm font-semibold text-blue-800">
                        Fiyat İstikrarı
                      </div>
                      <p className="mt-2 text-sm text-blue-900">
                        {veri.taahhutOzeti.fiyatIstikrari}
                      </p>
                    </div>
                  )}
                  {veri.taahhutOzeti.satmamaTaahhudu && (
                    <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-4">
                      <div className="text-sm font-semibold text-indigo-800">
                        Satmama Taahhüdü
                      </div>
                      <p className="mt-2 text-sm text-indigo-900">
                        {veri.taahhutOzeti.satmamaTaahhudu}
                      </p>
                    </div>
                  )}
                  {veri.taahhutOzeti.halkaAciklik && (
                    <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-4">
                      <div className="text-sm font-semibold text-cyan-800">
                        Halka Açıklık
                      </div>
                      <p className="mt-2 text-sm text-cyan-900">
                        {veri.taahhutOzeti.halkaAciklik}
                      </p>
                    </div>
                  )}
                </div>
              </Section>
            )}
          </aside>
        </section>

        {veri.sirketHakkinda && (
          <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-bold text-slate-900">
              Şirket Hakkında
            </h2>
            <p className="text-sm leading-7 text-slate-600">{veri.sirketHakkinda}</p>
          </section>
        )}

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-lg font-bold text-slate-900">
            {veri.sirketAdi} Halka Arz Bilgileri
          </h2>
          <p className="text-sm leading-7 text-slate-600">
            Bu sayfada {kod ? `${kod} ` : ""}
            halka arzına ait onaylı izahname bilgileri sade ve kolay incelenebilir
            şekilde özetlenmiştir. Halka arz fiyatı, toplam pay, sermaye artırımı,
            mevcut pay satışı, fon kullanım planı, taahhütler ve finansal görünüm
            başlıkları yatırım kararı yerine geçmez; resmi izahname, satış duyurusu
            ve KAP açıklamalarıyla birlikte değerlendirilmelidir.
          </p>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-xs leading-6 text-slate-500">
            {veri.yasalUyari ||
              "Bu sayfadaki bilgiler onaylı izahname/halka arz sürecine dair genel bilgilendirme amaçlıdır, yatırım tavsiyesi değildir."}
          </p>
        </section>

        <HalkaArzSSS className="mt-8" items={sssSorulari(veri)} />

        <ContinueReading
          title="Halka arz gündeminde devam edin"
          className="mt-6"
          items={[
            {
              title: "Güncel halka arz takvimi",
              href: "/halka-arz",
              description: "Talep toplama tarihleri, halka arz araçları ve güncel gündem.",
              type: "Halka arz",
            },
            {
              title: "Onaylı izahnameler",
              href: "/halka-arz/onayli-izahnameler",
              description: "SPK onayından geçen halka arz şirketlerini inceleyin.",
              type: "İzahname",
            },
            {
              title: "Halka arz kaç lot verir?",
              href: "/halka-arz/talep-hesapla",
              description: "Dağıtım varsayımlarına göre olası lot hesabı yapın.",
              type: "Lot hesabı",
            },
          ]}
        />
      </div>
    </main>
  );
}
