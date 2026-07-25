import type { Metadata } from "next";
import ContinueReading from "@/components/ContinueReading";
import HalkaArzKarnesi from "@/components/HalkaArzKarnesi";
import HalkaArzSSS from "@/components/HalkaArzSSS";
import {
  bekleyenDeger,
  tahsisatMetni,
  type BilgiKarti,
  type HalkaArzVeri,
} from "@/lib/halka-arz";

const veri: HalkaArzVeri = {
  "slug": "golda-gida-san-ve-tic",
  "sirketAdi": "Golda Gıda Sanayi ve Ticaret A.Ş.",
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
    "title": "Golda Gıda Sanayi ve Ticaret A.Ş. Halka Arz Detayları 2026 | Onaylı İzahname",
    "description": "Golda Gıda Sanayi ve Ticaret A.Ş. onaylı izahname bilgileri, 9,20 TL halka arz fiyatı, 87.499.998 lot toplam halka arz payı, %35 halka açıklık, fon kullanım planı ve finansal görünüm."
  },
  "ozet": {
    "halkaArzTarihi": "1-2 Temmuz 2026 (Çarşamba-Perşembe / 10.30-13.00)",
    "fiyatAralik": "9,20 TL",
    "dagitimYontemi": "Tamamı Eşit Dağıtım",
    "pay": "87.499.998 Lot",
    "araciKurum": "Gedik Yatırım Menkul Değerler A.Ş.",
    "pazar": "Yıldız Pazar",
    "bistKodu": "GOLDA",
    "katilimEndeksi": "Katılım Endeksine Uygun"
  },
  "toplamPay": "87.499.998",
  "halkaAciklikOrani": "%35",
  "halkaArzSekli": [
    "Sermaye Artırımı: 50.000.000 Lot",
    "Ortak Satışı: 37.499.998 Lot"
  ],
  "fonKullanim": [
    "%50-60 Kapasite artışı, modernizasyon",
    "%40-50 İşletme sermayesinin güçlendirilmesi"
  ],
  "satisYontemi": [
    "Sabit fiyatla talep toplama",
    "Tamamı eşit dağıtım"
  ],
  "fonKullanimYorumu": "Golda Gıda halka arzında fon kullanım planı iki ana başlıkta toplanmaktadır. Kaynağın %50-60 aralığındaki bölümü kapasite artışı ve modernizasyon yatırımlarında değerlendirilecektir. Bu başlık; üretim hatlarının yenilenmesi, verimlilik artışı, kapasite kullanımı, ürün kalitesi, depolama ve paketleme süreçleri açısından önem taşır. Kaynağın %40-50 aralığındaki bölümü ise işletme sermayesinin güçlendirilmesine ayrılmıştır. Gıda üretiminde hammadde alımı, stok yönetimi, ambalaj giderleri, ihracat-tahsilat döngüsü ve dönemsel nakit ihtiyacı işletme sermayesi tarafını kritik hale getirir. Halka arzda sermaye artırımıyla birlikte ortak satışı da bulunduğu için, şirket kasasına girecek kaynak ile ortak satışından doğacak tutar ayrı değerlendirilmelidir.",
  "finansalDonemler": [
    "2024",
    "2025",
    "2026/3"
  ],
  "finansalVeriler": [
    {
      "kalem": "Dönen Varlıklar",
      "donemler": {
        "2024": "1,2 Milyar TL",
        "2025": "1,3 Milyar TL",
        "2026/3": "1,2 Milyar TL"
      }
    },
    {
      "kalem": "Duran Varlıklar",
      "donemler": {
        "2024": "3,3 Milyar TL",
        "2025": "3,8 Milyar TL",
        "2026/3": "3,7 Milyar TL"
      }
    },
    {
      "kalem": "Toplam Varlıklar",
      "donemler": {
        "2024": "4,6 Milyar TL",
        "2025": "5,1 Milyar TL",
        "2026/3": "4,9 Milyar TL"
      }
    },
    {
      "kalem": "Kısa Vadeli Yükümlülükler",
      "donemler": {
        "2024": "458 Milyon TL",
        "2025": "297 Milyon TL",
        "2026/3": "239 Milyon TL"
      }
    },
    {
      "kalem": "Uzun Vadeli Yükümlülükler",
      "donemler": {
        "2024": "569 Milyon TL",
        "2025": "743 Milyon TL",
        "2026/3": "751 Milyon TL"
      }
    },
    {
      "kalem": "Özkaynaklar",
      "donemler": {
        "2024": "3,6 Milyar TL",
        "2025": "4,0 Milyar TL",
        "2026/3": "3,9 Milyar TL"
      }
    },
    {
      "kalem": "Hasılat",
      "donemler": {
        "2024": "2,9 Milyar TL",
        "2025": "2,5 Milyar TL",
        "2026/3": "680 Milyon TL"
      }
    },
    {
      "kalem": "Esas Faaliyet Kârı",
      "donemler": {
        "2024": "120 Milyon TL",
        "2025": "76 Milyon TL",
        "2026/3": "33 Milyon TL"
      }
    },
    {
      "kalem": "Dönem Kârı / Zararı",
      "donemler": {
        "2024": "7 Milyon TL Kâr",
        "2025": "19 Milyon TL Kâr",
        "2026/3": "82 Milyon TL Zarar"
      }
    }
  ],
  "finansalYorum": "Golda Gıda'nın finansal görünümünde 2025 yılında hasılatın 2024'e göre gerilediği, buna karşılık dönem kârının düşük bazdan artış gösterdiği görülüyor. Esas faaliyet kârının 120 milyon TL'den 76 milyon TL'ye düşmesi, operasyonel kârlılık tarafında baskı olduğuna işaret eder. 2026/3 döneminde ise şirketin 82 milyon TL zarar açıklaması dikkat çekicidir; bu veri üç aylık dönemi kapsadığı için yıllık sonuçlarla bire bir karşılaştırılmamalı, ancak kârlılığın sürdürülebilirliği açısından yakından izlenmelidir. Bilanço tarafında 2025'te özkaynakların 4,0 milyar TL seviyesinde olması olumlu görünürken, kısa vadeli yükümlülüklerin dönen varlıklara göre düşük kalması likidite tarafını desteklemektedir. Gıda üretimi tarafında şirket performansı; hammadde maliyetleri, enerji giderleri, kapasite kullanımı, stok yönetimi, ihracat pazarı, kur hareketleri ve modernizasyon yatırımlarının verimliliğe katkısıyla birlikte değerlendirilmelidir.",
  "oneCikanlar": [
    {
      "title": "Talep Tarihi",
      "value": "1-2 Temmuz",
      "desc": "Talep toplama çarşamba ve perşembe günleri 10.30-13.00 saatleri arasında yapılacaktır."
    },
    {
      "title": "Halka Arz Fiyatı",
      "value": "9,20 TL",
      "desc": "1 TL nominal değerli paylar 9,20 TL sabit fiyatla satışa sunulacaktır. Halka arz iskontosu %37 olarak paylaşılmıştır."
    },
    {
      "title": "Toplam Pay",
      "value": "87.499.998 Lot",
      "desc": "50.000.000 lot sermaye artırımı ve 37.499.998 lot ortak satışı bulunmaktadır."
    },
    {
      "title": "Katılım Endeksi",
      "value": "Uygun",
      "desc": "Golda Gıda halka arzı katılım endeksine uygundur."
    }
  ],
  "tahsisat": [],
  "tahsisatNotlari": [
    "Talep toplama 1-2 Temmuz 2026 tarihlerinde, çarşamba-perşembe günleri yapılacaktır.",
    "Dağıtım şekli tamamen eşit dağıtım olarak açıklanmıştır.",
    "Katılım endeksine uygundur.",
    "Halka arz büyüklüğü 804.999.982 TL olarak paylaşılmıştır."
  ],
  "taahhutOzeti": {
    "fiyatIstikrari": "30 gün. Brüt halka arz gelirinin %20'si ile fiyat istikrarı sağlayıcı işlemler planlanmaktadır.",
    "satmamaTaahhudu": "1 yıl ihraççı, 1 yıl ortaklar.",
    "halkaAciklik": "%35."
  },
  "sirketHakkinda": "Golda Gıda Sanayi ve Ticaret A.Ş., Bera Holding A.Ş. bünyesinde faaliyet gösteren, un, irmik, makarna ve bakliyat üretimi üzerine uzmanlaşmış büyük ölçekli bir gıda şirketidir. Şirketin resmi unvanı Golda Gıda Sanayi ve Ticaret Anonim Şirketi olarak paylaşılmıştır. Bera Holding’in şirkette pay sahibi olduğu belirtilmektedir. Şirketin genel merkezi ve entegre üretim tesisleri Karaman’ın Kazımkarabekir ilçesinde yer almaktadır. Ana üretim alanları un, irmik, makarna ve bakliyat çeşitleridir. Bunun yanında farklı gıda ürünlerinin üretimi, pazarlaması ve ihracatı da şirketin faaliyet alanları içinde değerlendirilmektedir. Gıda üretimi sektöründe şirket performansı; hammadde fiyatları, kapasite kullanımı, ihracat pazarı, enerji maliyetleri, ürün karması, marka gücü, stok yönetimi ve işletme sermayesi ihtiyacıyla yakından ilişkilidir.",
  "eksikBilgiNotu": "Sayfadaki veriler paylaşılan halka arz tablosundaki bilgilere göre güncellenmiştir. Resmi izahname/satış duyurusu verileriyle uyumsuzluk görülürse ilgili alanlar yeniden kontrol edilmelidir.",
  "yasalUyari": "Bu sayfadaki bilgiler SPK onayı sonrası açıklanan onaylı izahname/satış duyurusu ve paylaşılan halka arz tablo verilerine göre genel bilgilendirme amacıyla hazırlanmıştır, yatırım tavsiyesi değildir.",
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
    },
    {
      "label": "Talep Toplama Tarihi",
      "value": "1-2 Temmuz 2026"
    },
    {
      "label": "Katılım Endeksi",
      "value": "Uygun"
    },
    {
      "label": "Halka Arz Büyüklüğü",
      "value": "804.999.982 TL"
    }
  ]
}

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




type TalepDagitimSatiri = {
  kategori: string;
  yatirimciSayisi: string;
  planlananTahsisat: string;
  gerceklesenTalep: string;
  dagitilanPay: string;
  dagitimOrani: string;
  talepKati: string;
};

const talepDagitimSonuclari: TalepDagitimSatiri[] = [
  {
    kategori: "Yurt İçi Bireysel Yatırımcılar",
    yatirimciSayisi: "748.056",
    planlananTahsisat: "Tamamı eşit dağıtım",
    gerceklesenTalep: "Toplam talebe dahil",
    dagitilanPay: "87.313.096 Lot",
    dagitimOrani: "%99,78",
    talepKati: "2,20 kat toplam",
  },
  {
    kategori: "Yurt İçi Kurumsal Yatırımcılar",
    yatirimciSayisi: "25",
    planlananTahsisat: "Tamamı eşit dağıtım",
    gerceklesenTalep: "Toplam talebe dahil",
    dagitilanPay: "2.745 Lot",
    dagitimOrani: "%0,00",
    talepKati: "2,20 kat toplam",
  },
  {
    kategori: "Yurt Dışı Bireysel Yatırımcılar",
    yatirimciSayisi: "1.593",
    planlananTahsisat: "Tamamı eşit dağıtım",
    gerceklesenTalep: "Toplam talebe dahil",
    dagitilanPay: "184.157 Lot",
    dagitimOrani: "%0,21",
    talepKati: "2,20 kat toplam",
  },
  {
    kategori: "Toplam",
    yatirimciSayisi: "749.674",
    planlananTahsisat: "87.499.998 Lot",
    gerceklesenTalep: "2,20 kat talep",
    dagitilanPay: "87.499.998 Lot",
    dagitimOrani: "%100,00",
    talepKati: "2,20 kat",
  },
];

function TalepDagitimSonuclariTablosu() {
  return (
    <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">
        Halka Arz Talep ve Dağıtım Sonuçları
      </h2>
      <p className="mt-2 text-sm leading-7 text-slate-600">
        Golda Gıda halka arzında tamamı eşit dağıtım uygulanmış, halka arza
        749.674 yatırımcı katılmış ve toplam talep halka arz büyüklüğünün
        2,20 katına ulaşmıştır.
      </p>

      <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200 xl:overflow-x-visible">
        <table className="w-full min-w-[900px] table-fixed text-xs xl:min-w-0 xl:text-[12px] 2xl:text-sm">
          <thead className="bg-slate-900 text-white">
            <tr>
              <th className="w-[22%] px-2 py-3 text-left font-bold">
                Yatırımcı Grubu
              </th>
              <th className="px-2 py-3 text-right font-bold">
                Yatırımcı Sayısı
              </th>
              <th className="px-2 py-3 text-right font-bold">
                Planlanan Tahsisat
              </th>
              <th className="px-2 py-3 text-right font-bold">
                Gerçekleşen Talep
              </th>
              <th className="px-2 py-3 text-right font-bold">
                Dağıtılan Pay
              </th>
              <th className="px-2 py-3 text-right font-bold">
                Dağıtım Oranı
              </th>
              <th className="px-2 py-3 text-right font-bold">
                Talep Katı
              </th>
            </tr>
          </thead>

          <tbody>
            {talepDagitimSonuclari.map((satir, index) => {
              const toplamSatiri = satir.kategori === "Toplam";

              return (
                <tr
                  key={satir.kategori}
                  className={
                    toplamSatiri
                      ? "bg-slate-100 font-bold"
                      : index % 2 === 0
                        ? "bg-white"
                        : "bg-slate-50"
                  }
                >
                  <td className="border-t border-slate-200 px-2 py-3 font-semibold leading-5 text-slate-900">
                    {satir.kategori}
                  </td>
                  <td className="border-t border-slate-200 px-2 py-3 text-right leading-5 text-slate-700">
                    {satir.yatirimciSayisi}
                  </td>
                  <td className="border-t border-slate-200 px-2 py-3 text-right leading-5 text-slate-700">
                    {satir.planlananTahsisat}
                  </td>
                  <td className="border-t border-slate-200 px-2 py-3 text-right leading-5 text-slate-700">
                    {satir.gerceklesenTalep}
                  </td>
                  <td className="border-t border-slate-200 px-2 py-3 text-right leading-5 text-slate-700">
                    {satir.dagitilanPay}
                  </td>
                  <td className="border-t border-slate-200 px-2 py-3 text-right leading-5 text-slate-700">
                    {satir.dagitimOrani}
                  </td>
                  <td className="border-t border-slate-200 px-2 py-3 text-right font-bold leading-5 text-emerald-700">
                    {satir.talepKati}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function YouTubeVideoCards() {
  const videolar = [
    {
      title: "Golda Gıda halka arz videosu",
      description: "Golda Gıda halka arz detaylarını video anlatımıyla izleyin.",
      videoId: "Ttr_7BX0jhE",
      href: "https://youtu.be/Ttr_7BX0jhE",
    },
    {
      title: "Golda Gıda halka arz short videosu",
      description: "Golda Gıda halka arzının öne çıkan detaylarını kısa video ile izleyin.",
      videoId: "QuAQ9TiblW4",
      href: "https://youtu.be/QuAQ9TiblW4",
    },
  ];

  return (
    <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-bold text-slate-900">Video İçerikler</h2>
        <span className="w-fit rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-700">
          YouTube
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {videolar.map((video) => (
          <a
            key={video.videoId}
            href={video.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition hover:border-red-300 hover:bg-white hover:shadow-md"
          >
            <div className="relative aspect-video overflow-hidden bg-slate-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                alt={video.title}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition group-hover:scale-110">
                  <span className="ml-1 text-xl">▶</span>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="text-sm font-bold text-slate-900">{video.title}</div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {video.description}
              </p>
              <div className="mt-3 text-sm font-semibold text-red-600">
                Videoyu İzle →
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function ozetSatirlari(veri: HalkaArzVeri): BilgiKarti[] {
  const o = veri.ozet;
  return [
    { label: "İşlem Kodu", value: veri.bistKodu || o.bistKodu || "" },
    { label: "Talep Toplama Tarihi", value: o.halkaArzTarihi || "" },
    { label: "Dağıtım Yöntemi", value: o.dagitimYontemi || "" },
    { label: "Katılım Endeksi", value: o.katilimEndeksi || "" },
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
  const sermayeBilgileri = (veri.sermayeBilgileri || []).filter(
    (item) =>
      !["Satış Fiyatı", "Talep Toplama Tarihi", "Katılım Endeksi"].includes(
        item.label
      )
  );
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

        <HalkaArzKarnesi
          sirketAdi={veri.sirketAdi}
          kod={kod || veri.sirketAdi}
          talepTarihi={veri.ozet.halkaArzTarihi}
          halkaArzFiyati={veri.ozet.fiyatAralik}
          dagitimYontemi={veri.ozet.dagitimYontemi}
          toplamPay={veri.ozet.pay || veri.toplamPay}
          araciKurum={veri.ozet.araciKurum}
          tahsisat={veri.tahsisat}
        />

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

        <TalepDagitimSonuclariTablosu />

        <YouTubeVideoCards />

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