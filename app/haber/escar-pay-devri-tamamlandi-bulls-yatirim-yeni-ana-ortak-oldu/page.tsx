import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const slug = "escar-pay-devri-tamamlandi-bulls-yatirim-yeni-ana-ortak-oldu";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/escar-pay-devri-tamamlandi-bulls-yatirim-yeni-ana-ortak-oldu.webp";

export const metadata: Metadata = {
  title: "ESCAR’da Pay Devri Tamamlandı: Bulls Yatırım Yeni Ana Ortak Oldu",
  description:
    "ESCAR’da şirket sermayesinin yüzde 77,62’sini temsil eden payların Bulls Yatırım Holding’e devri tamamlandı. Nihai devir bedeli 141,41 milyon dolar olarak açıklandı.",
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "ESCAR’da Pay Devri Tamamlandı: Bulls Yatırım Yeni Ana Ortak Oldu",
    description:
      "ESCAR’da yüzde 77,62 pay devri tamamlandı. Nihai devir bedeli 141,41 milyon dolar, TL karşılığı 6,63 milyar TL oldu.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "ESCAR pay devri tamamlandı Bulls Yatırım yeni ana ortak oldu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ESCAR’da Pay Devri Tamamlandı: Bulls Yatırım Yeni Ana Ortak Oldu",
    description:
      "ESCAR’da yüzde 77,62 pay devri tamamlandı. Nihai devir bedeli 141,41 milyon dolar olarak açıklandı.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "Devredilen Pay",
    deger: "%77,62",
    aciklama: "ESCAR sermayesini temsil eden pay oranı",
  },
  {
    baslik: "Nihai Bedel",
    deger: "141,41 Mn $",
    aciklama: "Kapanış uyarlaması sonrası devir bedeli",
  },
  {
    baslik: "TL Karşılığı",
    deger: "6,63 Mr TL",
    aciklama: "TCMB 46,9070 USD/TL kuru esas alındı",
  },
  {
    baslik: "Yeni Alıcı",
    deger: "Bulls Yatırım",
    aciklama: "Bulls Yatırım Holding A.Ş.",
  },
];

const payDetaylari = [
  {
    etiket: "Şirket",
    deger: "Escar Filo Kiralama Hizmetleri A.Ş.",
  },
  {
    etiket: "Hisse Kodu",
    deger: "ESCAR",
  },
  {
    etiket: "Alıcı",
    deger: "Bulls Yatırım Holding A.Ş.",
  },
  {
    etiket: "Satıcılar",
    deger: "Daryo Kebudi, Azra Kebudi, Betina Halyo ve Nora Karakaş",
  },
  {
    etiket: "Devredilen Toplam Pay",
    deger: "388.066.295,74 TL nominal",
  },
  {
    etiket: "Sermayedeki Oran",
    deger: "%77,62",
  },
  {
    etiket: "Nihai Devir Bedeli",
    deger: "141.410.134,585 ABD doları",
  },
  {
    etiket: "TL Karşılığı",
    deger: "6.633.125.183,00 TL",
  },
  {
    etiket: "Kur",
    deger: "07.07.2026 TCMB efektif döviz satış kuru: 46,9070",
  },
  {
    etiket: "Devir Tarihi",
    deger: "08.07.2026",
  },
];

const saticiPaylari = [
  {
    isim: "Daryo Kebudi",
    oran: "%34,86",
    nominal: "174.290.975,268 TL",
  },
  {
    isim: "Azra Kebudi",
    oran: "%31,90",
    nominal: "159.484.345,268 TL",
  },
  {
    isim: "Betina Halyo",
    oran: "%9,00",
    nominal: "44.999.999,211 TL",
  },
  {
    isim: "Nora Karakaş",
    oran: "%1,86",
    nominal: "9.290.975,993 TL",
  },
];

const yonetimDegisikligi = [
  {
    baslik: "İstifa Edenler",
    metin:
      "Azra Kebudi ve Daryo Kebudi, 8 Temmuz 2026 itibarıyla yönetim kurulundaki görevlerinden istifa etti.",
  },
  {
    baslik: "Yeni Atamalar",
    metin:
      "Kemal Akkaya ve Mahir Can Ereren, ilk genel kurulda onaya sunulmak üzere yönetim kurulu üyeliğine atandı.",
  },
  {
    baslik: "Yeni Görev Dağılımı",
    metin:
      "Kemal Akkaya yönetim kurulu başkanı, Mahir Can Ereren yönetim kurulu başkan vekili olarak görevlendirildi.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "ESCAR’da Pay Devri Tamamlandı: Bulls Yatırım Yeni Ana Ortak Oldu",
  description:
    "ESCAR’da şirket sermayesinin yüzde 77,62’sini temsil eden payların Bulls Yatırım Holding’e devri tamamlandı. Nihai devir bedeli 141,41 milyon dolar olarak açıklandı.",
  image: haberGorsel,
  datePublished: "2026-07-08T18:15:50+03:00",
  dateModified: "2026-07-08T18:15:50+03:00",
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

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <h2 className="mb-4 text-xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function EscarPayDevriTamamlandiPage() {
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
              src="/escar-pay-devri-tamamlandi-bulls-yatirim-yeni-ana-ortak-oldu.webp"
              alt="ESCAR pay devri tamamlandı Bulls Yatırım yeni ana ortak oldu"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              ESCAR’da Pay Devri Tamamlandı: Bulls Yatırım Yeni Ana Ortak Oldu
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Pay Devri
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
                Escar Filo Kiralama Hizmetleri A.Ş. (<strong>ESCAR</strong>),
                şirket paylarının satış ve devrinin tamamlandığını açıkladı.
                KAP bildirimine göre şirket sermayesinin <strong>%77,62</strong>
                ’sini temsil eden paylar Bulls Yatırım Holding A.Ş.’ye devredildi.
              </p>

              <p>
                Devirde nihai bedel <strong>141.410.134,585 ABD doları</strong>
                olarak açıklandı. 07 Temmuz 2026 tarihli TCMB efektif döviz satış
                kuru olan <strong>46,9070</strong> esas alındığında bedelin TL
                karşılığı <strong>6.633.125.183,00 TL</strong> oldu.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {ozetKartlari.map((item) => (
                  <div
                    key={item.baslik}
                    className="rounded-2xl border border-blue-200 bg-blue-50 p-4"
                  >
                    <div className="text-sm font-semibold text-blue-800">
                      {item.baslik}
                    </div>
                    <div className="mt-1 text-2xl font-bold text-blue-950">
                      {item.deger}
                    </div>
                    <div className="mt-1 text-sm text-blue-800">
                      {item.aciklama}
                    </div>
                  </div>
                ))}
              </div>

              <Section title="Ne oldu?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  ESCAR’da daha önce duyurulan pay devri süreci tamamlandı.
                  Daryo Kebudi, Azra Kebudi, Betina Halyo ve Nora Karakaş’ın
                  sahip olduğu, A grubu imtiyazlı paylar dahil şirket sermayesinin
                  %77,62’sini temsil eden payların tamamı Bulls Yatırım Holding
                  A.Ş.’ye satılarak devredildi.
                </p>
              </Section>

              <Section title="Pay devrinin ana detayları">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <tbody>
                      {payDetaylari.map((item, index) => (
                        <tr
                          key={item.etiket}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <th className="px-4 py-3 text-left font-semibold text-slate-800">
                            {item.etiket}
                          </th>
                          <td className="px-4 py-3 font-bold text-slate-700">
                            {item.deger}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="Satıcıların devre konu payları">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="px-4 py-3 text-left font-semibold">
                          Satıcı
                        </th>
                        <th className="px-4 py-3 text-right font-semibold">
                          Sermayedeki Oran
                        </th>
                        <th className="px-4 py-3 text-right font-semibold">
                          Nominal Tutar
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {saticiPaylari.map((item, index) => (
                        <tr
                          key={item.isim}
                          className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                          <td className="px-4 py-3 font-bold text-slate-900">
                            {item.isim}
                          </td>
                          <td className="px-4 py-3 text-right font-semibold text-slate-700">
                            {item.oran}
                          </td>
                          <td className="px-4 py-3 text-right font-semibold text-slate-700">
                            {item.nominal}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section title="Yönetim kurulunda değişiklik">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Pay devriyle aynı gün yayımlanan diğer KAP açıklamasında,
                  yönetim kurulu tarafında da değişiklik yapıldığı duyuruldu.
                </p>

                <div className="mt-4 grid gap-3">
                  {yonetimDegisikligi.map((item) => (
                    <div
                      key={item.baslik}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="font-bold text-slate-900">
                        {item.baslik}
                      </div>
                      <div className="mt-1 text-sm leading-7 text-slate-600">
                        {item.metin}
                      </div>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Hisse açısından nasıl okunmalı?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  ESCAR’da kontrol değişimi netleşti. Şirket sermayesinin
                  %77,62’sini temsil eden payların devredilmesi, yönetim ve
                  strateji tarafında yeni döneme geçildiğini gösteriyor.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Haber, sadece ortaklık yapısındaki değişimle sınırlı değil.
                  Aynı zamanda yönetim kurulu başkanı ve başkan vekili tarafında
                  da yeni görevlendirmeler yapıldı. Bu nedenle sonraki KAP
                  açıklamalarında yeni yönetimin atacağı adımlar, olası strateji
                  değişiklikleri ve zorunlu pay alım teklifi süreci takip
                  edilecek.
                </p>
              </Section>

              <Section title="Neden önemli?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Halka açık şirketlerde çoğunluk pay devri, şirketin kontrol
                  yapısını değiştiren en önemli başlıklardan biridir. ESCAR’da
                  %77,62 payın Bulls Yatırım Holding’e geçmesi, şirketin ana
                  ortaklık yapısında doğrudan değişim anlamına geliyor.
                </p>
              </Section>

              <Section title="Sırada ne var?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Bundan sonraki süreçte zorunlu pay alım teklifiyle ilgili
                  açıklamalar, yeni yönetimin stratejik adımları ve şirketin
                  faaliyet tarafında yapabileceği güncellemeler öne çıkacak.
                </p>
              </Section>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                <div className="font-semibold text-slate-800">Kaynaklar</div>
                <div className="mt-2 flex flex-col gap-2">
                  <a
                    href="https://www.kap.org.tr/Bildirim/1629698"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="font-medium text-slate-700 underline underline-offset-2"
                  >
                    ESCAR — Pay devri Orjinal Kap içeriği
                  </a>
                  <a
                    href="https://www.kap.org.tr/Bildirim/1629699"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="font-medium text-slate-700 underline underline-offset-2"
                  >
                    ESCAR — Yönetim kurulu değişikliği Orjinal Kap içeriği
                  </a>
                </div>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="ESCAR’da Pay Devri Tamamlandı: Bulls Yatırım Yeni Ana Ortak Oldu"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. Kontrol değişimi sonrası süreç, şirketin
                yeni KAP açıklamalarıyla birlikte takip edilmelidir.
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
