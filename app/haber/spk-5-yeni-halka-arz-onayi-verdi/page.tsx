import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SPK’dan 5 Yeni Halka Arz Onayı Geldi",
  description:
    "SPK, Orzaks İlaç, Ekim Turizm, Soho Giyim, İsvea Seramik ve Golda Gıda halka arzlarına onay verdi. Halka arz fiyatları ve detaylar haberimizde.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/spk-5-yeni-halka-arz-onayi-verdi",
  },
  openGraph: {
    title: "SPK’dan 5 Yeni Halka Arz Onayı Geldi",
    description:
      "SPK, 5 şirketin halka arzına onay verdi. Orzaks İlaç, Ekim Turizm, Soho Giyim, İsvea Seramik ve Golda Gıda halka arz detayları.",
    url: "https://www.hocaileborsa.com/haber/spk-5-yeni-halka-arz-onayi-verdi",
    siteName: "Hoca ile Borsa",
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/images/haber/spk-5-yeni-halka-arz-onayi.webp",
        width: 1200,
        height: 675,
        alt: "SPK 5 yeni halka arz onayı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SPK’dan 5 Yeni Halka Arz Onayı Geldi",
    description:
      "SPK, Orzaks İlaç, Ekim Turizm, Soho Giyim, İsvea Seramik ve Golda Gıda halka arzlarına onay verdi.",
    images: [
      "https://www.hocaileborsa.com/images/haber/spk-5-yeni-halka-arz-onayi.webp",
    ],
  },
};

const halkaArzlar = [
  {
    sirket: "Orzaks İlaç ve Kimya Sanayi Ticaret AŞ",
    fiyat: "69,00 TL",
    mevcutSermaye: "307.000.000 TL",
    yeniSermaye: "338.500.000 TL",
    bedelli: "31.500.000 TL",
    mevcutPaySatisi: "21.000.000 TL",
    link: "/halka-arz/onayli-izahnameler/orzaks-ilac-ve-kimya-sanayi-ticaret-as",
  },
  {
    sirket: "Ekim Turizm Ticaret ve Sanayi AŞ",
    fiyat: "30,26 TL",
    mevcutSermaye: "700.000.000 TL",
    yeniSermaye: "832.000.000 TL",
    bedelli: "132.000.000 TL",
    mevcutPaySatisi: "30.000.000 TL",
    link: "/halka-arz/onayli-izahnameler/ekim-turizm-ticaret-ve-sanayi-as",
  },
  {
    sirket: "Soho Giyim ve Enerji AŞ",
    fiyat: "15,00 TL",
    mevcutSermaye: "206.760.337,13 TL",
    yeniSermaye: "306.760.337,13 TL",
    bedelli: "100.000.000 TL",
    mevcutPaySatisi: "-",
    link: "/halka-arz/onayli-izahnameler/soho-giyim-ve-enerji-as",
  },
  {
    sirket: "İsvea Seramik ve Banyo Ürünleri Sanayi AŞ",
    fiyat: "20,90 TL",
    mevcutSermaye: "220.000.000 TL",
    yeniSermaye: "280.000.000 TL",
    bedelli: "60.000.000 TL",
    mevcutPaySatisi: "7.000.000 TL",
    link: "/halka-arz/onayli-izahnameler/isvea-seramik-ve-banyo-urunleri-sanayi-as",
  },
  {
    sirket: "Golda Gıda Sanayi ve Ticaret AŞ",
    fiyat: "9,20 TL",
    mevcutSermaye: "200.000.000 TL",
    yeniSermaye: "250.000.000 TL",
    bedelli: "50.000.000 TL",
    mevcutPaySatisi: "37.499.998 TL",
    link: "/halka-arz/onayli-izahnameler/golda-gida-sanayi-ve-ticaret-as",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50">
      <article className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-blue-600">
              Ana Sayfa
            </Link>
            <span>/</span>
            <Link href="/haber" className="hover:text-blue-600">
              Haberler
            </Link>
            <span>/</span>
            <span>Halka Arz</span>
          </div>

          <span className="mb-3 inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
            Halka Arz Haberi
          </span>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            SPK’dan 5 Yeni Halka Arz Onayı Geldi
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-700">
            Sermaye Piyasası Kurulu, yayımladığı bültende 5 şirketin halka arz
            başvurusuna onay verdi. Onay alan şirketler Orzaks İlaç, Ekim
            Turizm, Soho Giyim ve Enerji, İsvea Seramik ve Golda Gıda oldu.
          </p>

          <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-500">
            <span>Yayınlanma: 24 Haziran 2026</span>
            <span>•</span>
            <span>Kaynak: SPK Bülteni</span>
          </div>
        </div>

        <div className="mb-8 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
          <Image
            src="/images/haber/spk-5-yeni-halka-arz-onayi.webp"
            alt="SPK 5 yeni halka arz onayı"
            width={1200}
            height={675}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-7">
          <h2 className="text-2xl font-bold text-slate-900">Ne oldu?</h2>

          <p className="mt-4 leading-8 text-slate-700">
            SPK tarafından yayımlanan son bültende 5 şirketin ilk halka arzı
            onaylandı. Halka arz onayı verilen şirketlerde sermaye artırımı ve
            mevcut pay satışı kalemleri birlikte dikkat çekti.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[850px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-700">
                  <th className="border border-slate-200 px-3 py-3 font-semibold">
                    Şirket
                  </th>
                  <th className="border border-slate-200 px-3 py-3 font-semibold">
                    Halka Arz Fiyatı
                  </th>
                  <th className="border border-slate-200 px-3 py-3 font-semibold">
                    Mevcut Sermaye
                  </th>
                  <th className="border border-slate-200 px-3 py-3 font-semibold">
                    Yeni Sermaye
                  </th>
                  <th className="border border-slate-200 px-3 py-3 font-semibold">
                    Sermaye Artırımı
                  </th>
                  <th className="border border-slate-200 px-3 py-3 font-semibold">
                    Mevcut Pay Satışı
                  </th>
                  <th className="border border-slate-200 px-3 py-3 font-semibold">
                    Detay
                  </th>
                </tr>
              </thead>
              <tbody>
                {halkaArzlar.map((item) => (
                  <tr key={item.sirket} className="text-slate-700">
                    <td className="border border-slate-200 px-3 py-3 font-medium text-slate-900">
                      {item.sirket}
                    </td>
                    <td className="border border-slate-200 px-3 py-3">
                      {item.fiyat}
                    </td>
                    <td className="border border-slate-200 px-3 py-3">
                      {item.mevcutSermaye}
                    </td>
                    <td className="border border-slate-200 px-3 py-3">
                      {item.yeniSermaye}
                    </td>
                    <td className="border border-slate-200 px-3 py-3">
                      {item.bedelli}
                    </td>
                    <td className="border border-slate-200 px-3 py-3">
                      {item.mevcutPaySatisi}
                    </td>
                    <td className="border border-slate-200 px-3 py-3">
                      <Link
                        href={item.link}
                        className="font-semibold text-blue-600 hover:text-blue-800"
                      >
                        İzahname sayfası
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-7">
          <h2 className="text-2xl font-bold text-slate-900">
            Bu ne anlama geliyor?
          </h2>

          <p className="mt-4 leading-8 text-slate-700">
            Halka arz onayı, şirketlerin borsada işlem görme sürecinde önemli
            bir aşamayı geçtiğini gösterir. Ancak bu onay, tek başına yatırım
            kararı anlamına gelmez. Yatırımcıların talep toplama tarihleri,
            dağıtım yöntemi, halka arz büyüklüğü, fon kullanım alanları ve
            şirketlerin finansal durumunu ayrıca incelemesi gerekir.
          </p>

          <p className="mt-4 leading-8 text-slate-700">
            Bu bültende yer alan halka arzlarda bazı şirketlerde yalnızca
            sermaye artırımı yapılırken, bazı şirketlerde sermaye artırımına ek
            olarak mevcut ortak pay satışı da bulunuyor. Sermaye artırımı
            yoluyla elde edilen kaynak şirket kasasına girerken, mevcut pay
            satışında gelir payını satan ortaklara aktarılır.
          </p>
        </section>

        <section className="mt-8 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-7">
          <h2 className="text-2xl font-bold text-slate-900">
            Şirketler hakkında
          </h2>

          <div className="mt-5 space-y-5">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Orzaks İlaç ve Kimya Sanayi Ticaret AŞ
              </h3>
              <p className="mt-2 leading-8 text-slate-700">
                Halka arz fiyatı 69,00 TL olarak açıklanan Orzaks İlaç ve
                Kimya Sanayi Ticaret AŞ için 31,5 milyon TL nominal değerli
                sermaye artırımı ve 21 milyon TL nominal değerli mevcut pay
                satışı yer alıyor.
              </p>
              <Link
                href="/halka-arz/onayli-izahnameler/orzaks-ilac-ve-kimya-sanayi-ticaret-as"
                className="mt-2 inline-block font-semibold text-blue-600 hover:text-blue-800"
              >
                Orzaks İlaç halka arz detayları
              </Link>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Ekim Turizm Ticaret ve Sanayi AŞ
              </h3>
              <p className="mt-2 leading-8 text-slate-700">
                Ekim Turizm Ticaret ve Sanayi AŞ halka arzında fiyat 30,26 TL
                olarak belirlendi. Şirket için 132 milyon TL nominal değerli
                sermaye artırımı ve 30 milyon TL nominal değerli mevcut pay
                satışı planlanıyor.
              </p>
              <Link
                href="/halka-arz/onayli-izahnameler/ekim-turizm-ticaret-ve-sanayi-as"
                className="mt-2 inline-block font-semibold text-blue-600 hover:text-blue-800"
              >
                Ekim Turizm halka arz detayları
              </Link>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Soho Giyim ve Enerji AŞ
              </h3>
              <p className="mt-2 leading-8 text-slate-700">
                Soho Giyim ve Enerji AŞ halka arzında fiyat 15,00 TL olarak
                açıklandı. Şirket sermayesinin 206,76 milyon TL seviyesinden
                306,76 milyon TL seviyesine çıkarılması planlanıyor.
              </p>
              <Link
                href="/halka-arz/onayli-izahnameler/soho-giyim-ve-enerji-as"
                className="mt-2 inline-block font-semibold text-blue-600 hover:text-blue-800"
              >
                Soho Giyim halka arz detayları
              </Link>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900">
                İsvea Seramik ve Banyo Ürünleri Sanayi AŞ
              </h3>
              <p className="mt-2 leading-8 text-slate-700">
                İsvea Seramik ve Banyo Ürünleri Sanayi AŞ halka arzında fiyat
                20,90 TL olarak belirlendi. Şirket için 60 milyon TL nominal
                değerli sermaye artırımı ve 7 milyon TL nominal değerli mevcut
                pay satışı bulunuyor.
              </p>
              <Link
                href="/halka-arz/onayli-izahnameler/isvea-seramik-ve-banyo-urunleri-sanayi-as"
                className="mt-2 inline-block font-semibold text-blue-600 hover:text-blue-800"
              >
                İsvea Seramik halka arz detayları
              </Link>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Golda Gıda Sanayi ve Ticaret AŞ
              </h3>
              <p className="mt-2 leading-8 text-slate-700">
                Golda Gıda Sanayi ve Ticaret AŞ halka arzında fiyat 9,20 TL
                olarak açıklandı. Şirket sermayesinin 200 milyon TL’den 250
                milyon TL’ye çıkarılması ve mevcut ortak pay satışı yapılması
                planlanıyor.
              </p>
              <Link
                href="/halka-arz/onayli-izahnameler/golda-gida-sanayi-ve-ticaret-as"
                className="mt-2 inline-block font-semibold text-blue-600 hover:text-blue-800"
              >
                Golda Gıda halka arz detayları
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-7">
          <h2 className="text-2xl font-bold text-slate-900">Değerlendirme</h2>

          <p className="mt-4 leading-8 text-slate-700">
            Aynı bültende 5 yeni halka arz onayının yer alması, halka arz
            piyasasında hareketliliğin devam ettiğini gösteriyor. Şirketler
            arasında halka arz fiyatı, sermaye artırımı büyüklüğü ve mevcut pay
            satışı açısından farklılıklar bulunuyor.
          </p>

          <p className="mt-4 leading-8 text-slate-700">
            Yatırımcı açısından yalnızca halka arz fiyatına bakmak yeterli
            değildir. Düşük fiyatlı bir halka arz otomatik olarak ucuz, yüksek
            fiyatlı bir halka arz da otomatik olarak pahalı kabul edilmemelidir.
            Şirketin faaliyet alanı, finansal performansı, borçluluk yapısı,
            halka arz gelirinin kullanım planı ve dağıtım yöntemi birlikte
            değerlendirilmelidir.
          </p>
        </section>

        <section className="mt-8 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-7">
          <h2 className="text-2xl font-bold text-slate-900">
            Sırada ne var?
          </h2>

          <p className="mt-4 leading-8 text-slate-700">
            SPK onayının ardından şirketlerin talep toplama tarihleri, dağıtım
            yöntemi, katılım endeksine uygunluk durumu ve aracı kurum bilgileri
            yatırımcılar tarafından takip edilecek. Onaylı izahname sayfaları
            üzerinden şirketlere ait detaylı bilgiler incelenebilir.
          </p>

          <div className="mt-5 rounded-xl bg-amber-50 p-4 text-sm leading-7 text-amber-900 ring-1 ring-amber-200">
            Bu haber yatırım tavsiyesi değildir. Halka arzlara katılım kararı
            verilmeden önce şirketlerin onaylı izahnameleri, finansal tabloları
            ve risk faktörleri dikkatle incelenmelidir.
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-7">
          <h2 className="text-2xl font-bold text-slate-900">
            Onaylı izahname sayfaları
          </h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {halkaArzlar.map((item) => (
              <Link
                key={item.sirket}
                href={item.link}
                className="rounded-xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <span className="block font-semibold text-slate-900">
                  {item.sirket}
                </span>
                <span className="mt-1 block text-sm text-slate-600">
                  Halka arz fiyatı: {item.fiyat}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}