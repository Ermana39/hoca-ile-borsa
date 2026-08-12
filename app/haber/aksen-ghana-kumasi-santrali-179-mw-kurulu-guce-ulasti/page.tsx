import { seoAciklamasi } from "@/lib/seo-metadata";
import Image from "next/image";
import Link from "@/components/NoPrefetchLink";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";
import { formatHaberTarihi, getHaberDosyaTarihi } from "@/lib/haber-tarih";

const haberSaati = getHaberDosyaTarihi(import.meta.url);
const haberTarihi = formatHaberTarihi(haberSaati);

const slug = "aksen-ghana-kumasi-santrali-179-mw-kurulu-guce-ulasti";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel =
  "https://www.hocaileborsa.com/aksen-ghana-kumasi-santrali-179-mw-kurulu-guce-ulasti.webp";

export const metadata: Metadata = {
  title: "AKSEN Ghana Kumasi Santrali 179 MW Kurulu Güce Ulaştı",
  description:
    seoAciklamasi("Aksa Enerji, Ghana Kumasi kombine çevrim doğalgaz santralinin ilk fazında kombine çevrim sürecinin tamamlandığını ve kurulu gücün 179 MW seviyesine ulaştığını açıkladı.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: {
    canonical: haberUrl,
  },
  openGraph: {
    type: "article",
    title: "AKSEN Ghana Kumasi Santrali 179 MW Kurulu Güce Ulaştı",
    description:
      "AKSEN’in Ghana Kumasi projesinde ilk faz tamamlandı. 350 MW toplam kapasiteli santralde ikinci faz 171 MW olarak takip edilecek.",
    url: haberUrl,
    images: [
      {
        url: haberGorsel,
        width: 1200,
        height: 675,
        alt: "AKSEN Ghana Kumasi santrali 179 MW kurulu güce ulaştı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AKSEN Ghana Kumasi Santrali 179 MW Kurulu Güce Ulaştı",
    description:
      "AKSEN, Ghana Kumasi santralinin ilk fazında kombine çevrim sürecinin tamamlandığını duyurdu.",
    images: [haberGorsel],
  },
};

const ozetKartlari = [
  {
    baslik: "İlk Faz Kapasite",
    deger: "179 MW",
    aciklama: "Kombine çevrim sonrası ulaşılan güç",
  },
  {
    baslik: "Toplam Proje",
    deger: "350 MW",
    aciklama: "Kumasi doğalgaz santrali hedef kapasitesi",
  },
  {
    baslik: "İkinci Faz",
    deger: "171 MW",
    aciklama: "Gelişmeleri ayrıca açıklanacak bölüm",
  },
  {
    baslik: "Satış Anlaşması",
    deger: "20 Yıl",
    aciklama: "ABD doları bazlı garantili satış",
  },
];

const haberDetaylari = [
  { etiket: "Şirket", deger: "Aksa Enerji Üretim A.Ş." },
  { etiket: "Hisse Kodu", deger: "AKSEN" },
  { etiket: "Bildirim Tarihi", deger: "13.07.2026" },
  { etiket: "Bildirim Saati", deger: "16:26:46" },
  { etiket: "Proje", deger: "Ghana Kumasi Kombine Çevrim Doğalgaz Santrali" },
  { etiket: "Sözleşme Tarafı", deger: "Electricity Company of Ghana" },
  { etiket: "Toplam Planlanan Kapasite", deger: "350 MW" },
  { etiket: "İlk Faz Önceki Aşama", deger: "130 MW basit çevrim" },
  { etiket: "İlk Faz Güncel Aşama", deger: "179 MW kombine çevrim" },
  { etiket: "İkinci Faz", deger: "171 MW" },
  { etiket: "Enerji Satış Yapısı", deger: "ABD doları bazlı, 20 yıl süreli garantili satış anlaşması" },
  { etiket: "Açıklama Türü", deger: "Özel Durum Açıklaması / Proje gelişmesi" },
];

const zamanCizelgesi = [
  {
    tarih: "7 Nisan 2023",
    baslik: "Enerji satış anlaşması açıklandı",
    aciklama:
      "AKSEN, Electricity Company of Ghana ile 350 MW kurulu gücünde Kumasi kombine çevrim doğalgaz santrali kurulumu, elektrik üretimi ve üretilen elektriğin garantili satışı için ABD doları bazlı 20 yıllık anlaşma imzalandığını açıklamıştı.",
  },
  {
    tarih: "19 Ocak 2026",
    baslik: "İlk faz basit çevrimde 130 MW seviyesine ulaştı",
    aciklama:
      "Santralin ilk fazı basit çevrim olarak 130 MW'a denk kurulu güce ulaşmıştı. Bu aşama, projenin üretim kapasitesinin devreye alınması açısından ilk önemli eşikti.",
  },
  {
    tarih: "13 Temmuz 2026",
    baslik: "İlk faz kombine çevrime geçti ve 179 MW oldu",
    aciklama:
      "Şirket, ilk fazın kombine çevrim sürecinin tamamlandığını ve kurulu gücün 179 MW seviyesine ulaştığını duyurdu. Bundan sonraki ana başlık 171 MW’lık ikinci faz olacak.",
  },
];

const finansalOkuma = [
  "Proje, ABD doları bazlı 20 yıllık garantili satış anlaşmasına dayanıyor.",
  "Kapasitenin 130 MW basit çevrimden 179 MW kombine çevrim seviyesine çıkması, ilk fazın üretim verimliliği ve gelir üretme kapasitesi açısından önemli bir eşik.",
  "Kombine çevrim yapısı, doğalgaz santrallerinde aynı yakıt girdisinden daha fazla elektrik üretimi sağlayabildiği için operasyonel verimlilik açısından ayrıca takip edilir.",
  "İlk fazın tamamlanması, proje riskinin bir bölümünün geride kaldığını gösterirken, ikinci fazın devreye alınması toplam proje büyüklüğü açısından hâlâ kritik başlık olarak duruyor.",
  "Gelir etkisinin finansallara yansıması; üretim miktarı, kapasite kullanımı, satış anlaşmasının uygulanma takvimi ve ilgili ülkedeki operasyonel süreçlerle birlikte izlenecek.",
];

const stratejikBasliklar = [
  {
    baslik: "Afrika operasyonlarında ölçek etkisi",
    aciklama:
      "AKSEN’in yurt dışı büyüme stratejisinde Afrika pazarı önemli yer tutuyor. Ghana Kumasi projesinde ilk fazın kombine çevrime ulaşması, şirketin bölgedeki operasyonel ölçeğini güçlendiren bir gelişme.",
  },
  {
    baslik: "Garantili satış anlaşması",
    aciklama:
      "Projede üretilen elektriğin 20 yıl süreyle ABD doları bazlı garantili satış anlaşmasına bağlanmış olması, haberin yalnızca kapasite artışı değil, uzun vadeli gelir görünümü açısından da okunmasını sağlıyor.",
  },
  {
    baslik: "Kombine çevrim geçişi",
    aciklama:
      "Basit çevrimden kombine çevrime geçiş, santralin teknik olarak daha verimli bir yapıya ulaşması anlamına gelir. Bu nedenle 179 MW seviyesi, sadece kapasite rakamı değil, proje olgunlaşması açısından da önemli.",
  },
  {
    baslik: "İkinci faz beklentisi",
    aciklama:
      "Toplam 350 MW hedefin kalan 171 MW’lık kısmı ikinci faz olarak takip edilecek. Şirket, bu faza ilişkin gelişmeler oldukça kamuoyu ile paylaşacağını açıkladı.",
  },
];

const takipBasliklari = [
  "171 MW’lık ikinci faza ilişkin yeni KAP açıklamaları",
  "179 MW ilk fazın üretim ve satış performansı",
  "Santralin kapasite kullanım oranı",
  "ABD doları bazlı gelirlerin finansallara yansıma hızı",
  "Ghana operasyonlarının AKSEN’in toplam yurt dışı gelirleri içindeki payı",
  "Kumasi projesinin nakit akışına katkısı",
];

const seoSorular = [
  {
    soru: "AKSEN Ghana Kumasi santrali ne açıkladı?",
    cevap:
      "AKSEN, Ghana Kumasi kombine çevrim doğalgaz santralinin ilk fazında kombine çevrim sürecinin tamamlandığını ve kurulu gücün 179 MW seviyesine ulaştığını açıkladı.",
  },
  {
    soru: "AKSEN Kumasi santralinin toplam kapasitesi kaç MW?",
    cevap:
      "KAP açıklamasına göre Ghana Kumasi kombine çevrim doğalgaz santrali projesinin toplam kurulu güç hedefi 350 MW seviyesinde.",
  },
  {
    soru: "AKSEN Kumasi santralinde ikinci faz kaç MW olacak?",
    cevap:
      "Şirket açıklamasında ikinci fazın 171 MW olduğu ve bu faza ilişkin gelişmeler oldukça kamuoyuna ayrıca bilgi verileceği belirtildi.",
  },
  {
    soru: "AKSEN Ghana projesinin satış anlaşması nasıl?",
    cevap:
      "AKSEN, Electricity Company of Ghana ile elektrik üretimi ve üretilen elektriğin ABD doları bazlı garantili satışı için 20 yıl süreli enerji satış anlaşması imzalamıştı.",
  },
  {
    soru: "AKSEN haberi hisse için neden önemli?",
    cevap:
      "Haber, AKSEN’in yurt dışı enerji üretim portföyünde önemli bir projenin ilk fazının kombine çevrim seviyesine geçtiğini gösteriyor. Gelir etkisi ise üretim, kapasite kullanımı ve satış anlaşmasının finansallara yansımasıyla izlenecek.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "AKSEN Ghana Kumasi Santrali 179 MW Kurulu Güce Ulaştı",
  description:
    "Aksa Enerji, Ghana Kumasi kombine çevrim doğalgaz santralinin ilk fazında kombine çevrim sürecinin tamamlandığını ve kurulu gücün 179 MW seviyesine ulaştığını açıkladı.",
  image: haberGorsel,
  datePublished: "2026-07-13T16:26:46+03:00",
  dateModified: "2026-07-13T16:26:46+03:00",
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
  children: ReactNode;
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

export default function AksenGhanaKumasiSantraliPage() {
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
              src="/aksen-ghana-kumasi-santrali-179-mw-kurulu-guce-ulasti.webp"
              alt="AKSEN Ghana Kumasi santrali 179 MW kurulu güce ulaştı"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              AKSEN Ghana Kumasi Santrali 179 MW Kurulu Güce Ulaştı
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Yurt Dışı Enerji Projesi
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
                Aksa Enerji Üretim A.Ş. (<strong>AKSEN</strong>), Ghana Kumasi
                kombine çevrim doğalgaz santrali projesinde ilk faza ilişkin
                önemli bir gelişme açıkladı. Şirket, ilk fazın kombine çevrim
                sürecinin tamamlandığını ve santralin bu bölümünde kurulu gücün{" "}
                <strong>179 MW</strong> seviyesine ulaştığını duyurdu.
              </p>

              <p>
                Proje, Electricity Company of Ghana ile imzalanan{" "}
                <strong>ABD doları bazlı 20 yıl süreli garantili enerji satış
                anlaşması</strong> kapsamında ilerliyor. Toplam 350 MW kurulu güç
                hedefi bulunan santralde, ikinci faza ilişkin kapasite{" "}
                <strong>171 MW</strong> olarak takip edilecek.
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
                  AKSEN, Ghana Kumasi santralinin ilk fazında basit çevrimden
                  kombine çevrim aşamasına geçişin tamamlandığını açıkladı.
                  İlk faz, 19 Ocak 2026 itibarıyla 130 MW basit çevrim güce
                  ulaşmıştı. 13 Temmuz 2026 itibarıyla kombine çevrim tamamlandı
                  ve kurulu güç 179 MW seviyesine çıktı.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Bu açıklama, yeni bir proje başlangıcından çok devam eden büyük
                  bir yurt dışı enerji yatırımında teknik ve operasyonel bir eşiğin
                  geçildiğini gösteriyor.
                </p>
              </Section>

              <Section title="Proje geçmişi ve zaman çizelgesi">
                <div className="space-y-4">
                  {zamanCizelgesi.map((item) => (
                    <div
                      key={item.tarih}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="text-sm font-bold text-blue-700">
                        {item.tarih}
                      </div>
                      <h3 className="mt-1 text-base font-bold text-slate-900">
                        {item.baslik}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
                        {item.aciklama}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Projenin ana detayları">
                <div className="overflow-x-auto">
                  <table className="min-w-full overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <tbody>
                      {haberDetaylari.map((item, index) => (
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

              <Section title="AKSEN için neden önemli?">
                <div className="grid gap-4">
                  {stratejikBasliklar.map((item) => (
                    <div
                      key={item.baslik}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <h3 className="text-base font-bold text-slate-900">
                        {item.baslik}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
                        {item.aciklama}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Finansal etki nasıl okunmalı?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  Ghana Kumasi projesi, yalnızca kurulu güç artışı olarak değil,
                  uzun vadeli satış anlaşması ve döviz bazlı gelir yapısı
                  nedeniyle finansal görünüm açısından da önemli. İlk fazın
                  kombine çevrime ulaşması, projenin gelir üretme kapasitesini
                  artırabilecek bir aşama olarak okunabilir.
                </p>

                <div className="mt-4 grid gap-3">
                  {finansalOkuma.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold leading-6 text-emerald-900"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Hisse açısından nasıl okunmalı?">
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  AKSEN tarafında bu haber, şirketin yurt dışı enerji üretim
                  portföyünde somut ilerleme gösteren güçlü bir proje gelişmesi
                  olarak öne çıkıyor. Özellikle 20 yıllık ABD doları bazlı
                  garantili satış anlaşması, projenin yalnızca kapasite tarafıyla
                  değil, uzun vadeli nakit akışı potansiyeliyle de izlenmesini
                  sağlıyor.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  Kısa vadede haber akışı pozitif algılanabilir. Orta vadede ise
                  179 MW’lık ilk fazın üretim performansı, finansallara katkı hızı
                  ve 171 MW’lık ikinci fazdaki gelişmeler daha belirleyici olacak.
                </p>
              </Section>

              <Section title="Takip edilecek başlıklar">
                <div className="grid gap-3">
                  {takipBasliklari.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="AKSEN Ghana Kumasi projesi hakkında kısa soru-cevap">
                <div className="space-y-4">
                  {seoSorular.map((item) => (
                    <div
                      key={item.soru}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <h3 className="text-base font-bold text-slate-900">
                        {item.soru}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
                        {item.cevap}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                <div className="font-semibold text-slate-800">Kaynak</div>
                <a
                  href="https://www.kap.org.tr/Bildirim/1632567"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-2 inline-block font-medium text-slate-700 underline underline-offset-2"
                >
                  AKSEN — Orjinal Kap içeriği
                </a>
              </div>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="AKSEN Ghana Kumasi Santrali 179 MW Kurulu Güce Ulaştı"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım
                tavsiyesi değildir. Projenin finansal etkisi; üretim performansı,
                kapasite kullanımı, ikinci faz gelişmeleri ve şirketin sonraki
                finansal tablolarıyla birlikte değerlendirilmelidir.
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