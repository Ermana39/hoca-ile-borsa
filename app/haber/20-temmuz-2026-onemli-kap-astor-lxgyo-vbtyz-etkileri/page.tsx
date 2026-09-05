import { serializeJsonLd } from "@/lib/json-ld";
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

const slug = "20-temmuz-2026-onemli-kap-astor-lxgyo-vbtyz-etkileri";
const haberUrl = `https://www.hocaileborsa.com/haber/${slug}`;
const haberGorsel = "https://www.hocaileborsa.com/kap-ozeti-discover.webp";

export const metadata: Metadata = {
  title: "20 Temmuz 2026 Önemli KAP: ASTOR, LXGYO, VBTYZ Etkileri",
  description:
    seoAciklamasi("20 Temmuz 2026 önemli KAP haberlerinde ASTOR 351,1 milyon TL’lik TEİAŞ ihalesini kazandı, LXGYO 3,9 milyar TL değerli proje için sözleşme imzaladı, VBTYZ 17 ülkede distribütörlük yetkisi aldı.", "Haberde gelişmenin ayrıntıları, açıklanan veriler ve yatırımcıların izleyebileceği temel noktalar yer alıyor."),
  alternates: { canonical: haberUrl },
  openGraph: {
    type: "article",
    title: "20 Temmuz 2026 Önemli KAP: ASTOR, LXGYO, VBTYZ Etkileri",
    description:
      "Günün öne çıkan KAP bildirimleri, şirketlere olası finansal etkileri ve takip edilmesi gereken başlıklar.",
    url: haberUrl,
    images: [{ url: haberGorsel, width: 1200, height: 675, alt: "20 Temmuz 2026 önemli KAP haberleri" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "20 Temmuz 2026 Önemli KAP: ASTOR, LXGYO, VBTYZ Etkileri",
    description:
      "ASTOR, LXGYO, VBTYZ ve günün diğer önemli KAP gelişmeleri.",
    images: [haberGorsel],
  },
};

const oneCikanlar = [
  {
    kod: "ASTOR",
    baslik: "TEİAŞ’ın 351,1 milyon TL’lik ihalesini kazandı",
    detay:
      "Şirket, 11 adet Mobil Hibrit Modül ve yedek malzeme ihalesinin kendi uhdesinde kaldığını açıkladı. İhale tutarı son brüt satışların %3,78’ine karşılık geliyor.",
    etki:
      "Sipariş görünümü açısından pozitif. Sözleşme, teslimat ve kârlılık ayrıntıları sonraki aşamada belirleyici olacak.",
    href: "/haber/astor-teias-3511-milyon-tl-mobil-hibrit-modul-ihalesini-kazandi",
  },
  {
    kod: "LXGYO",
    baslik: "Zeytinburnu’nda 3,9 milyar TL değerli proje için sözleşme imzaladı",
    detay:
      "Zeytinburnu Sümer Mahallesi’ndeki taşınmaz için %50-%50 hasılat paylaşımı esaslı inşaat sözleşmesi imzalandı.",
    etki:
      "Proje portföyü açısından pozitif. Gerçek finansal katkı satış hızı, inşaat maliyeti ve teslimat takvimine bağlı olacak.",
    href: "/haber/lxgyo-zeytinburnu-39-milyar-tl-degerli-proje-icin-hasilat-paylasimi-sozlesmesi",
  },
  {
    kod: "VBTYZ",
    baslik: "BMC ürünleri için 17 Doğu Avrupa ülkesinde distribütör oldu",
    detay:
      "Bağlı ortaklık Disnet, Hollanda merkezli Disnet Europe üzerinden 31 Aralık 2030’a kadar 17 ülkede dağıtım ve satış geliştirme yetkisi aldı.",
    etki:
      "Stratejik büyüme açısından pozitif. Anlaşma bedeli açıklanmadığı için kısa vadeli finansal katkı henüz ölçülemiyor.",
    href: "/haber/vbtyz-disnet-europe-bmc-17-dogu-avrupa-ulkesi-distributorluk-anlasmasi",
  },
];

const digerGelismeler = [
  {
    kod: "DAPGM",
    baslik: "2026 ikinci dönemde 948,1 milyon TL satış açıkladı",
    detay:
      "Yeni Levent ve Ataşehir projelerinde 42 bağımsız bölüm ve 4.429 metrekare brüt alan için KDV hariç 948,1 milyon TL satış yapıldı.",
    etki:
      "Satış performansı açısından olumlu. Gelir ve kâr etkisi teslimat dönemlerine göre finansallara yansıyacak.",
    href: "/haber/dapgm-2026-ikinci-donem-satis-rakamlari-948-milyon-tl",
  },
  {
    kod: "AKFYE",
    baslik: "%500 bedelsiz sermaye artırımı için SPK’ya başvurdu",
    detay:
      "Sermayenin 1,197 milyar TL’den 7,182 milyar TL’ye çıkarılması planlanıyor.",
    etki:
      "Kısa vadede yatırımcı ilgisini artırabilir; ancak şirkete nakit girişi sağlamaz.",
    href: "/haber/akfye-500-bedelsiz-sermaye-artirimi-spk-basvurusu",
  },
  {
    kod: "FORTE",
    baslik: "MilSOFT üzerinden 1,175 milyon dolarlık sözleşme imzaladı",
    detay:
      "Yurt içi savunma sanayii şirketine ürün ve hizmet tedariki yapılacak.",
    etki:
      "Yeni sipariş ve döviz bazlı gelir açısından pozitif. Teslimat ve kâr marjı açıklanmadı.",
    href: "/haber/forte-milsoft-1175-milyon-dolarlik-savunma-sanayi-sozlesmesi",
  },
  {
    kod: "VAKFN",
    baslik: "%20 bedelsiz sermaye artırımı için hak kullanım tarihi açıklandı",
    detay:
      "Sermaye 5 milyar TL’den 6 milyar TL’ye çıkacak. Hak kullanımı 21 Temmuz’da başlayacak.",
    etki:
      "Takvim etkisi yaratabilir; bedelsiz işlem tek başına şirket değerini değiştirmez.",
    href: "/haber/vakfn-20-bedelsiz-sermaye-artirimi-spk-onayi-ve-baslangic-tarihi",
  },
  {
    kod: "TRILC",
    baslik: "Tetadif aşısının ruhsatı yeniden aktif hale getirildi",
    detay:
      "Ürünün ruhsat askısı kaldırıldı ve aktif ruhsat statüsüne dönüş sağlandı.",
    etki:
      "Operasyonel açıdan olumlu. Üretim ve sipariş katkısı sonraki açıklamalarda netleşecek.",
    href: "/haber/trilc-tetadif-asisinin-ruhsati-yeniden-aktif-hale-getirildi",
  },
  {
    kod: "AVOD",
    baslik: "Bağlı ortaklığa ait krom madeni ruhsatında iptal gelişmesi",
    detay:
      "HASAT’a ait krom madeni ruhsatının iptal edildiği açıklandı.",
    etki:
      "Operasyonel açıdan negatif. Finansal etkinin büyüklüğü şirketin sonraki açıklamalarıyla netleşecek.",
    href: "/haber/avod-bagli-ortakligi-hasatin-krom-madeni-ruhsati-iptal-edildi",
  },
];

const gunSonuNotlari = [
  {
    kod: "ERGLI",
    baslik: "650 bin adet TMSN payı üzerindeki rehin kaldırıldı",
    etki:
      "Doğrudan faaliyet veya kârlılık etkisi sınırlı; ortaklık ve pay hareketleri açısından izlenebilir.",
  },
  {
    kod: "BIGTK",
    baslik: "Genel müdürlük görevinde değişiklik yapıldı",
    etki:
      "Yönetim geçişi nedeniyle takip edilmeli ancak kısa vadeli finansal etkisi belirsiz.",
  },
  {
    kod: "EFOR",
    baslik: "İSO İkinci 500 sıralamasında 284’üncü sıraya yükseldi",
    etki:
      "Üretimden satışlardaki büyümeyi gösteren olumlu bir gösterge; tek başına yeni finansal sonuç anlamına gelmiyor.",
  },
];

const genelYorum = [
  "Günün en güçlü operasyonel haberleri ASTOR, LXGYO, DAPGM ve VBTYZ tarafında toplandı.",
  "ASTOR’da ihale kazanımı doğrudan sipariş görünümünü desteklerken, LXGYO’da proje ölçeği dikkat çekti.",
  "VBTYZ’nin 17 ülkeyi kapsayan distribütörlük anlaşması uzun vadeli büyüme potansiyeli taşıyor; ancak parasal büyüklük açıklanmadı.",
  "AKFYE ve VAKFN tarafındaki sermaye işlemleri yatırımcı ilgisini etkileyebilir ancak doğrudan nakit yaratmaz.",
  "AVOD haberi günün negatif operasyonel gelişmesi olarak öne çıktı.",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "20 Temmuz 2026 Önemli KAP: ASTOR, LXGYO, VBTYZ Etkileri",
  description:
    "20 Temmuz 2026 önemli KAP haberleri ve şirketlere olası etkileri.",
  image: haberGorsel,
  datePublished: "2026-07-20T22:40:00+03:00",
  dateModified: "2026-07-20T22:40:00+03:00",
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
    logo: { "@type": "ImageObject", url: "https://www.hocaileborsa.com/icon-512.png" },
  },
};

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <h2 className="mb-4 text-xl font-bold tracking-tight text-slate-900">{title}</h2>
      {children}
    </section>
  );
}

export default function GunSonuKapOzetiPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />

      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
            <Image
              src="/kap-ozeti-discover.webp"
              alt="20 Temmuz 2026 önemli KAP haberleri ASTOR LXGYO VBTYZ etkileri"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              20 Temmuz 2026 Önemli KAP: ASTOR, LXGYO, VBTYZ Etkileri
            </h1>

            <div className="mb-5 mt-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Gün Sonu KAP Özeti
              </span>
              <time dateTime={haberSaati} className="text-sm text-slate-500">{haberTarihi}</time>
              <span className="text-slate-300">·</span>
              <Link href="/yazar/erman-hoca" className="text-sm font-semibold text-slate-500 hover:text-blue-600">
                Erman Hoca
              </Link>
            </div>

            <div className="space-y-6 text-base leading-8 text-slate-700 md:text-lg">
              <p>
                20 Temmuz 2026 tarihli KAP bildirimlerinde <strong>ASTOR’un 351,1 milyon TL’lik TEİAŞ ihalesini kazanması</strong>,
                <strong> LXGYO’nun 3,9 milyar TL değerli proje için sözleşme imzalaması</strong> ve
                <strong> VBTYZ’nin 17 Doğu Avrupa ülkesinde distribütörlük yetkisi alması</strong> günün en güçlü gelişmeleri oldu.
              </p>

              <Section title="Günün öne çıkan 3 KAP haberi">
                <div className="grid gap-4">
                  {oneCikanlar.map((item) => (
                    <div key={item.kod} className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
                      <div className="text-sm font-black text-blue-700">{item.kod}</div>
                      <h3 className="mt-1 text-lg font-bold text-slate-900">{item.baslik}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">{item.detay}</p>
                      <p className="mt-2 text-sm font-semibold leading-7 text-blue-950">{item.etki}</p>
                      <Link href={item.href} className="mt-3 inline-block text-sm font-bold text-blue-700 underline underline-offset-4">
                        Haberin detayları
                      </Link>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Ayrı haber yapılan diğer önemli gelişmeler">
                <div className="grid gap-4">
                  {digerGelismeler.map((item) => (
                    <div key={item.kod} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className="text-sm font-black text-slate-500">{item.kod}</div>
                      <h3 className="mt-1 text-base font-bold text-slate-900">{item.baslik}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">{item.detay}</p>
                      <p className="mt-2 text-sm font-semibold leading-7 text-slate-800">{item.etki}</p>
                      <Link href={item.href} className="mt-3 inline-block text-sm font-bold text-blue-700 underline underline-offset-4">
                        Haberin detayları
                      </Link>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Gün sonu özetine eklenen diğer KAP bildirimleri">
                <div className="grid gap-4">
                  {gunSonuNotlari.map((item) => (
                    <div key={item.kod} className="rounded-xl border border-slate-200 bg-white p-4">
                      <div className="text-sm font-black text-slate-500">{item.kod}</div>
                      <h3 className="mt-1 text-base font-bold text-slate-900">{item.baslik}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{item.etki}</p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Hisse etkisi açısından genel değerlendirme">
                <div className="grid gap-3">
                  {genelYorum.map((item) => (
                    <div key={item} className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-semibold leading-7 text-emerald-950">
                      {item}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Öne çıkan KAP kaynakları">
                <div className="grid gap-3 text-sm">
                  <a href="https://www.kap.org.tr/Bildirim/1635127" target="_blank" rel="noopener noreferrer nofollow" className="font-semibold text-slate-700 underline underline-offset-4">
                    ASTOR — Orjinal Kap içeriği
                  </a>
                  <a href="https://www.kap.org.tr/Bildirim/1635121" target="_blank" rel="noopener noreferrer nofollow" className="font-semibold text-slate-700 underline underline-offset-4">
                    LXGYO — Orjinal Kap içeriği
                  </a>
                  <a href="https://www.kap.org.tr/Bildirim/1635151" target="_blank" rel="noopener noreferrer nofollow" className="font-semibold text-slate-700 underline underline-offset-4">
                    VBTYZ — Orjinal Kap içeriği
                  </a>
                  <a href="https://www.kap.org.tr/Bildirim/1635123" target="_blank" rel="noopener noreferrer nofollow" className="font-semibold text-slate-700 underline underline-offset-4">
                    DAPGM — Orjinal Kap içeriği
                  </a>
                </div>
              </Section>

              <HaberIlgiliBolumler
                slug={slug}
                baslik="20 Temmuz 2026 Önemli KAP: ASTOR, LXGYO, VBTYZ Etkileri"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amacıyla hazırlanmıştır, yatırım tavsiyesi değildir.
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