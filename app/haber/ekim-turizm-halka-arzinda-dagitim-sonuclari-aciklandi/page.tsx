import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberNavigasyon from "@/components/HaberNavigasyon";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const slug = "ekim-turizm-halka-arzinda-dagitim-sonuclari-aciklandi";
const baslik = "Ekim Turizm Halka Arzında Dağıtım Sonuçları Açıklandı";
const aciklama =
  "Ekim Turizm halka arzında dağıtım sonuçları açıklandı. Halka arza 707.851 yatırımcı katılırken, bireysel tarafta talep tahsisatın altında kaldı.";
const gorsel = "/ekim-turizm-halka-arzinda-dagitim-sonuclari-aciklandi.webp";
const url = `https://www.hocaileborsa.com/haber/${slug}`;

export const metadata: Metadata = {
  title: baslik,
  description: aciklama,
  alternates: {
    canonical: url,
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: `https://www.hocaileborsa.com${gorsel}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [`https://www.hocaileborsa.com${gorsel}`],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: baslik,
  description: aciklama,
  datePublished: haberSaati,
  dateModified: haberSaati,
  url,
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
  image: `https://www.hocaileborsa.com${gorsel}`,
};

const dagitimSatirlari = [
  {
    grup: "Yurt İçi Bireysel",
    planlanan: "113.400.000 lot / %70,00",
    basvuru: "725.878",
    talep: "85.748.972 lot / %33,32",
    yatirimci: "706.837",
    dagitim: "85.677.956 lot / %52,89",
  },
  {
    grup: "Yüksek Talepte Bulunacak Yatırımcılar",
    planlanan: "16.200.000 lot / %10,00",
    basvuru: "931",
    talep: "83.505.446 lot / %32,45",
    yatirimci: "923",
    dagitim: "43.922.044 lot / %27,11",
  },
  {
    grup: "Yurt İçi Kurumsal",
    planlanan: "32.400.000 lot / %20,00",
    basvuru: "91",
    talep: "88.109.017 lot / %34,24",
    yatirimci: "91",
    dagitim: "32.400.000 lot / %20,00",
  },
  {
    grup: "TOPLAM",
    planlanan: "162.000.000 lot / %100,00",
    basvuru: "726.900",
    talep: "257.363.435 lot / %100,00",
    yatirimci: "707.851",
    dagitim: "162.000.000 lot / %100,00",
  },
];

export default function EkimTurizmHalkaArzindaDagitimSonuclariAciklandiPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl px-4 py-6 md:px-6">
        <section className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>
          <Link
            href="/haberler"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Tüm Haberler
          </Link>
        </section>

        <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
            <Image
              src={gorsel}
              alt="Ekim Turizm halka arzında dağıtım sonuçları açıklandı"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="p-5 md:p-8">
            <header>
              <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
                Ekim Turizm Halka Arzında Dağıtım Sonuçları Açıklandı
              </h1>
              <p className="mt-2 text-sm text-zinc-500">
                <time dateTime={haberSaati}>{haberTarihi}</time> ·{" "}
                <Link
                  href="/yazar/erman-hoca"
                  className="font-semibold text-slate-600 hover:text-blue-600"
                >
                  Erman Hoca
                </Link>
              </p>
            </header>

            <div className="mt-5 space-y-5 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                Ekim Turizm Ticaret ve Sanayi A.Ş. halka arzında dağıtım sonuçları
                açıklandı. #EKIM koduyla Borsa İstanbul’da işlem görmesi beklenen
                şirketin halka arzına toplam 726.900 başvuru gelirken, gerçekleşen
                dağıtım 707.851 yatırımcıya yapıldı.
              </p>

              <p>
                Halka arzda toplam 257.363.435 lot talep toplandı. Satışa sunulan
                toplam pay miktarı ise 162.000.000 lot oldu. Dağıtım tablosunda en
                dikkat çeken başlık, yurt içi bireysel yatırımcı tarafında planlanan
                tahsisatın altında talep gelmesi oldu.
              </p>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Ne oldu?
                </h2>
                <p>
                  Ekim Turizm halka arzında yurt içi bireysel yatırımcıya planlanan
                  tahsisat 113.400.000 lot seviyesindeydi. Bu grupta toplanan talep
                  85.748.972 lotta kaldı. Gerçekleşen dağıtım ise 706.837 yatırımcıya
                  85.677.956 lot olarak açıklandı.
                </p>
                <p>
                  Bu tablo, bireysel tarafta arz edilen paya göre yeterli talebin
                  oluşmadığını gösterdi. Bu nedenle bireysel başvurularda kesinti
                  etkisi sınırlı kaldı ve bu kategoride yatırımcıların talep ettiği
                  paylar büyük ölçüde karşılandı.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Dağıtım sonuçlarında öne çıkan rakamlar
                </h2>
                <div className="overflow-x-auto rounded-2xl border border-zinc-200">
                  <table className="min-w-[760px] w-full border-collapse text-sm">
                    <thead className="bg-zinc-100 text-zinc-900">
                      <tr>
                        <th className="border-b border-zinc-200 px-4 py-3 text-left font-bold">
                          Yatırımcı Grubu
                        </th>
                        <th className="border-b border-zinc-200 px-4 py-3 text-left font-bold">
                          Planlanan Tahsisat
                        </th>
                        <th className="border-b border-zinc-200 px-4 py-3 text-left font-bold">
                          Başvuru
                        </th>
                        <th className="border-b border-zinc-200 px-4 py-3 text-left font-bold">
                          Toplanan Talep
                        </th>
                        <th className="border-b border-zinc-200 px-4 py-3 text-left font-bold">
                          Dağıtım Yapılan Yatırımcı
                        </th>
                        <th className="border-b border-zinc-200 px-4 py-3 text-left font-bold">
                          Gerçekleşen Dağıtım
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {dagitimSatirlari.map((satir, index) => (
                        <tr
                          key={satir.grup}
                          className={index % 2 === 0 ? "bg-white" : "bg-zinc-50"}
                        >
                          <td className="border-b border-zinc-100 px-4 py-3 font-semibold text-zinc-900">
                            {satir.grup}
                          </td>
                          <td className="border-b border-zinc-100 px-4 py-3 text-zinc-700">
                            {satir.planlanan}
                          </td>
                          <td className="border-b border-zinc-100 px-4 py-3 text-zinc-700">
                            {satir.basvuru}
                          </td>
                          <td className="border-b border-zinc-100 px-4 py-3 text-zinc-700">
                            {satir.talep}
                          </td>
                          <td className="border-b border-zinc-100 px-4 py-3 text-zinc-700">
                            {satir.yatirimci}
                          </td>
                          <td className="border-b border-zinc-100 px-4 py-3 font-semibold text-zinc-900">
                            {satir.dagitim}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Bireysel tarafta talep tahsisatın altında kaldı
                </h2>
                <p>
                  Halka arzda yurt içi bireysel yatırımcıya başlangıçta toplam
                  payların %70’i ayrılmıştı. Ancak bu gruptan gelen talep, ayrılan
                  pay miktarının altında kaldı. Planlanan 113.400.000 lotluk bireysel
                  tahsisata karşılık 85.748.972 lot talep gelmesi, halka arzın en
                  belirgin sonucu oldu.
                </p>
                <p>
                  Gerçekleşen dağıtımda bireysel yatırımcı grubunun toplam dağıtım
                  içindeki payı %52,89 seviyesinde oluştu. Bu nedenle Ekim Turizm
                  halka arzında bireysel katılım, planlanan dağılımın altında kaldı.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Yüksek talepte bulunan yatırımcıların dağıtım oranı %52,6 oldu
                </h2>
                <p>
                  Yüksek talepte bulunacak yatırımcılar grubuna başlangıçta
                  16.200.000 lot ayrılmıştı. Bu gruptan 931 başvuru ile 83.505.446
                  lot talep toplandı. Gerçekleşen dağıtım ise 923 yatırımcıya
                  43.922.044 lot oldu.
                </p>
                <p>
                  Bu rakamlar, yüksek talep grubunda gelen talebin yaklaşık
                  %52,6’sının karşılandığını gösteriyor. Bireysel tarafta talebin
                  tahsisatın altında kalması, yüksek başvurulu yatırımcı grubunun
                  nihai dağıtımda planlanan %10 payın üzerine çıkmasına neden oldu.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Kurumsal yatırımcı tarafında tahsisat tamamen doldu
                </h2>
                <p>
                  Yurt içi kurumsal yatırımcı grubunda 91 başvuru ile 88.109.017 lot
                  talep toplandı. Bu gruba planlanan tahsisat 32.400.000 lot olduğu
                  için gerçekleşen dağıtım da 32.400.000 lot olarak tamamlandı.
                </p>
                <p>
                  Kurumsal tarafta talebin tahsisatın üzerinde kalması, bu grupta
                  planlanan %20’lik dağıtım oranının korunduğunu gösterdi. Toplam
                  dağıtımda kurumsal yatırımcı grubunun payı %20 oldu.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Ekim Turizm halka arzının temel bilgileri
                </h2>
                <p>
                  Intercity markasıyla bilinen Ekim Turizm Ticaret ve Sanayi A.Ş.’nin
                  halka arz fiyatı 30,26 TL olarak belirlenmişti. Halka arzda toplam
                  162.000.000 lot satışa sunuldu. Bu payların 132.000.000 lotu
                  sermaye artırımı, 30.000.000 lotu ise ortak satışı şeklinde
                  gerçekleşti.
                </p>
                <p>
                  Halka arz büyüklüğü 4.902.120.000 TL seviyesinde oluşurken,
                  halka açıklık oranı %19,47 olarak açıklanmıştı. Payların Yıldız
                  Pazar’da işlem görmesi bekleniyor. Ekim Turizm halka arzı katılım
                  endeksine uygun değil.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Fon kullanım planı ne gösteriyor?
                </h2>
                <p>
                  Ekim Turizm halka arzında fon kullanım planının tamamı operasyonel
                  kiralamada kullanılacak kara araçlarının satın alınmasına ayrıldı.
                  Bu yapı, şirketin halka arzdan elde edeceği kaynağı doğrudan ana
                  faaliyet alanı olan filo kiralama operasyonlarına yönlendireceğini
                  gösteriyor.
                </p>
                <p>
                  Araç alımı, şirketin kiralanabilir araç kapasitesini ve müşteri
                  sözleşmelerini destekleyebilir. Ancak filo kiralama modelinde araç
                  finansmanı, ikinci el araç değerleri, bakım-sigorta giderleri ve
                  faiz maliyetleri şirket performansı üzerinde belirleyici olmaya
                  devam eder.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Finansal görünümde hangi başlıklar öne çıkıyor?
                </h2>
                <p>
                  Ekim Turizm’in finansal verilerinde yüksek varlık büyüklüğü dikkat
                  çekiyor. Şirketin toplam varlıkları 2025 yılında 40 milyar TL,
                  2026 yılının ilk çeyreğinde ise 37 milyar TL seviyesinde yer aldı.
                  Özkaynaklar aynı dönemlerde sırasıyla 20 milyar TL ve 19 milyar TL
                  olarak açıklandı.
                </p>
                <p>
                  Gelir tablosunda ise daha dalgalı bir görünüm var. Şirket 2025
                  yılında 15 milyar TL hasılat üretmesine rağmen 2,1 milyar TL dönem
                  zararı yazdı. 2026 yılının ilk çeyreğinde ise 2,8 milyar TL hasılat
                  ve 81 milyon TL dönem kârı açıklandı.
                </p>
                <p>
                  Bu nedenle Ekim Turizm’de sadece halka arz talebi değil, filo
                  yatırımlarının finansmanı, araç değerleri, operasyonel kiralama
                  sözleşmeleri ve kârlılık tarafındaki toparlanmanın kalıcılığı da
                  izlenecek başlıklar arasında yer alıyor.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Değerlendirme
                </h2>
                <p>
                  Ekim Turizm halka arzında toplam talep satışa sunulan payların
                  üzerinde oluşsa da talebin dağılımı dengeli ilerlemedi. Bireysel
                  yatırımcı grubunda planlanan tahsisatın altında talep gelmesi,
                  halka arzın en önemli ayrışma noktası oldu.
                </p>
                <p>
                  Buna karşılık yüksek talepte bulunan yatırımcılar ve kurumsal
                  yatırımcılar tarafında talebin daha güçlü kaldığı görüldü. Bu tablo,
                  halka arz sonrası ilk işlem günlerinde sadece toplam yatırımcı
                  sayısının değil, dağıtımın hangi gruplarda yoğunlaştığının da
                  takip edilmesini gerekli kılıyor.
                </p>
                <p>
                  EKIM tarafında kısa vadede dağıtım sonuçları ve işlem başlangıcı
                  takip edilecek. Orta vadede ise halka arz fonunun araç alımlarına
                  dönüşme hızı, filo büyüklüğüne etkisi ve kârlılık tarafında kalıcı
                  iyileşme sağlanıp sağlanamayacağı daha belirleyici olacaktır.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
                  Sırada ne var?
                </h2>
                <p>
                  Dağıtım sonuçlarının açıklanmasının ardından Ekim Turizm paylarının
                  Borsa İstanbul’da işlem görmeye başlayacağı tarih takip edilecek.
                  İşlem başlangıcıyla birlikte ilk gün fiyat hareketi, halka arz
                  katılımcı sayısı ve dağıtımın yatırımcı gruplarına göre yapısı
                  birlikte değerlendirilecek.
                </p>
                <p>
                  Şirket tarafında ise halka arz gelirinin araç alımlarında kullanımı,
                  fiyat istikrarı süreci ve halka arz sonrası yapılacak finansal
                  açıklamalar EKIM için ana takip başlıkları olacak.
                </p>
              </section>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-900 md:text-base">
                Haber özeti:
              </p>
              <p className="mt-2 text-sm leading-7 text-blue-800 md:text-base">
                Ekim Turizm halka arzına 726.900 başvuru gelirken, 707.851
                yatırımcıya 162.000.000 lot dağıtım yapıldı. Bireysel tarafta talep
                planlanan tahsisatın altında kaldı; yüksek talepte bulunan yatırımcı
                grubunda talep karşılama oranı yaklaşık %52,6 oldu.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-bold text-emerald-900 md:text-base">
                Olası Etki:
              </p>
              <p className="mt-2 text-sm leading-7 text-emerald-800 md:text-base">
                Nötr-Takip — Toplam talep halka arz büyüklüğünün üzerinde oluştu;
                ancak bireysel tarafta planlanan tahsisatın altında kalınması, işlem
                başlangıcı sonrasında arz-talep dengesinin ayrıca izlenmesini
                gerektiriyor.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-900 md:text-base">
                Dikkat edilmesi gereken nokta:
              </p>
              <p className="mt-2 text-sm leading-7 text-amber-800 md:text-base">
                Bireysel yatırımcı grubuna planlanan %70 tahsisata rağmen
                gerçekleşen dağıtımda bu grubun payı %52,89 oldu. Bu nedenle EKIM
                için ilk işlem günlerinde sadece toplam talep değil, dağıtımın grup
                bazlı yapısı da izlenmeli.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-bold text-zinc-900 md:text-base">
                Kaynak:
              </p>
              <p className="mt-2 text-sm leading-7 text-zinc-700 md:text-base">
                Ekim Turizm halka arz dağıtım sonuçları, onaylı izahname bilgileri
                ve halka arz satış verileri.
              </p>
            </div>

            <p className="mt-6 text-sm text-zinc-400">
              Bu içerik bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
            </p>

            <div className="mt-6">
              <AuthorBox />
            </div>
          </div>
        </article>

        <div className="mt-8">
          <HaberIlgiliBolumler
            slug={slug}
            baslik="Ekim Turizm halka arzında dağıtım sonuçları açıklandı"
          />
        </div>

        <HaberNavigasyon href={`/haber/${slug}`} className="mt-8" />
      </div>
    </main>
  );
}
