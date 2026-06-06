import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TÜRK-İŞ Mayıs 2026 Açlık ve Yoksulluk Sınırı Araştırması",
  description: "TÜRK-İŞ Mayıs 2026 açlık ve yoksulluk sınırı araştırması sonuçları. Dört kişilik bir ailenin aylık açlık ve yoksulluk sınırı rakamları açıklandı.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/haber/turk-is-mayis-2026-aclik-ve-yoksulluk-siniri-arastirmasi",
  },
};

const gostergeVerileri = [
  {
    baslik: "Açlık Sınırı",
    metin:
      "Ankara’da yaşayan dört kişilik bir ailenin sağlıklı, dengeli ve yeterli beslenebilmesi için yapması gereken aylık gıda harcaması 35.174,85 TL’ye yükseldi.",
  },
  {
    baslik: "Yoksulluk Sınırı",
    metin:
      "Gıda harcaması ile giyim, konut, ulaşım, eğitim, sağlık ve benzeri zorunlu harcamaların toplamı 114.576,10 TL olarak hesaplandı.",
  },
  {
    baslik: "Bekâr Çalışanın Yaşama Maliyeti",
    metin:
      "Bekâr bir çalışanın aylık yaşama maliyeti Mayıs 2026 itibarıyla 45.488,25 TL’ye çıktı.",
  },
];

const mutfakEnflasyonu = [
  {
    baslik: "Aylık Mutfak Harcaması Artışı",
    metin:
      "Dört kişilik bir ailenin sağlıklı ve dengeli beslenebilmesi için gerekli aylık gıda harcaması son bir ayda 588 TL arttı.",
  },
  {
    baslik: "İlk 5 Ayda Ek Yük",
    metin:
      "Aylık artışların birikimli etkisiyle yılın ilk beş ayında aile bütçesine yansıyan ilave mutfak harcaması 3.950 TL’ye ulaştı.",
  },
  {
    baslik: "Mutfak Enflasyonu",
    metin:
      "TÜRK-İŞ’e göre gıda için yapılması gereken asgari harcama tutarı bir önceki aya göre yüzde 1,70 arttı.",
  },
  {
    baslik: "12 Aylık Değişim",
    metin: "On iki aylık değişim oranı yüzde 40,18 olarak gerçekleşti.",
  },
  {
    baslik: "Yıllık Ortalama Artış",
    metin: "Yıllık ortalama artış oranı yüzde 40,58 oldu.",
  },
  {
    baslik: "5 Aylık Artış",
    metin: "Beş aylık artış oranı yüzde 16,69 olarak hesaplandı.",
  },
];

const gidaGruplari = [
  {
    baslik: "Süt, Yoğurt ve Peynir",
    metin:
      "Süt ürünlerindeki fiyat artışları bu ay daha belirgin hale geldi. Süt fiyatlarında bir önceki aya göre yaklaşık yüzde 6 artış tespit edilirken, peynir ve yoğurt fiyatlarında da yükseliş gözlemlendi.",
  },
  {
    baslik: "Et, Tavuk, Balık, Yumurta ve Bakliyat",
    metin:
      "Kurban Bayramı’nın etkisiyle kıyma ve kuşbaşı et fiyatlarında artış görüldü. Kuzu etinde sınırlı gerileme olurken, balık fiyatlarındaki artış sürdü. Tavuk eti fiyatında gerileme tespit edildi.",
  },
  {
    baslik: "Meyve ve Sebze",
    metin:
      "Meyve-sebze fiyatlarındaki artış sınırlı kaldı. Mevsim etkisiyle ürün çeşitliliği artarken bazı ürünlerde fiyatlar aşağı yönlü seyretti. Buna karşın patates ve soğan gibi temel ürünlerde artış eğilimi görüldü.",
  },
  {
    baslik: "Ekmek ve Tahıl Ürünleri",
    metin:
      "Ekmek fiyatında değişim görülmedi. Makarna ve irmik fiyatlarında artış tespit edilirken, pirinç, un ve bulgur fiyatlarında önemli bir değişiklik olmadı.",
  },
  {
    baslik: "Yağ ve Zeytin Ürünleri",
    metin:
      "Tereyağı fiyatında artış olduğu belirlendi. Siyah zeytinde sınırlı artış görülürken, yeşil zeytin fiyatı sabit kaldı. Genel ortalamada önemli bir değişiklik tespit edilmedi.",
  },
  {
    baslik: "Baharat, Çay, Bal ve Diğer Ürünler",
    metin:
      "Baharat fiyatlarında sınırlı azalma görülürken, çay fiyatındaki artış devam etti. Bal fiyatlarında gerileme yaşandı; şeker, reçel ve salça fiyatlarında artış gözlemlendi.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "TÜRK-İŞ Mayıs 2026 Açlık ve Yoksulluk Sınırı Araştırması",
  description:
    "TÜRK-İŞ Mayıs 2026 açlık ve yoksulluk sınırı araştırması sonuçları. Dört kişilik bir ailenin aylık açlık ve yoksulluk sınırı rakamları açıklandı.",
  datePublished: "2026-06-05T09:00:00+03:00",
  dateModified: "2026-06-05T09:00:00+03:00",
  url: "https://www.hocaileborsa.com/haber/turk-is-mayis-2026-aclik-ve-yoksulluk-siniri-arastirmasi",
  author: { "@type": "Organization", name: "Hoca İle Borsa", url: "https://www.hocaileborsa.com" },
  publisher: {
    "@type": "Organization",
    name: "Hoca İle Borsa",
    url: "https://www.hocaileborsa.com",
    logo: { "@type": "ImageObject", url: "https://www.hocaileborsa.com/icon-512.png" },
  },
  image: "https://www.hocaileborsa.com/haber979.png",
  inLanguage: "tr",
};

export default function Haber979Page() {
  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
            <Image
              src="/haber979.png"
              alt="TÜRK-İŞ Mayıs 2026 Açlık ve Yoksulluk Sınırı Araştırması"
              fill
              unoptimized
              className="object-contain"
            />
          </div>

          <div className="p-5 md:p-8">
            <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
              TÜRK-İŞ Mayıs 2026 Açlık ve Yoksulluk Sınırı Araştırması
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-zinc-500">
              <time dateTime="2026-06-05" className="flex items-center gap-1 font-medium">
                📅 5 Haziran 2026
              </time>
              <span>·</span>
              <span>Hoca İle Borsa</span>
            </div>

            <div className="mt-6 space-y-6 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                TÜRK-İŞ tarafından açıklanan Mayıs 2026 açlık ve yoksulluk
                sınırı araştırmasına göre, dört kişilik bir ailenin sağlıklı ve
                dengeli beslenebilmesi için yapması gereken aylık gıda
                harcaması artmaya devam etti.
              </p>

              <p>
                Araştırmada, temel ihtiyaçların karşılanmasını giderek
                zorlaştıran bu gelişmelerin ücretli çalışanlar ile emeklilerin
                geçim koşullarını daha da ağırlaştırdığına dikkat çekildi.
                TÜRK-İŞ’e göre ücret gelirlerinin yalnızca gerçekleşen enflasyon
                oranı dikkate alınarak belirlenmesi yeterli görülmüyor.
              </p>

              <div className="space-y-5">
                {gostergeVerileri.map((veri) => (
                  <section
                    key={veri.baslik}
                    className="rounded-xl border border-zinc-200 bg-zinc-50 p-4"
                  >
                    <h2 className="text-lg font-bold text-zinc-900">
                      {veri.baslik}
                    </h2>
                    <p className="mt-2 text-zinc-700">{veri.metin}</p>
                  </section>
                ))}
              </div>

              <p>
                Mayıs ayı verileri, aile bütçelerinde özellikle gıda ve temel
                yaşam giderleri üzerindeki baskının sürdüğünü ortaya koydu.
                Araştırmaya göre aylık mutfak harcamasındaki artışın yılın ilk
                beş ayında oluşturduğu ek yük 3.950 TL’ye ulaştı.
              </p>

              <div className="space-y-5">
                {mutfakEnflasyonu.map((veri) => (
                  <section
                    key={veri.baslik}
                    className="rounded-xl border border-zinc-200 bg-zinc-50 p-4"
                  >
                    <h2 className="text-lg font-bold text-zinc-900">
                      {veri.baslik}
                    </h2>
                    <p className="mt-2 text-zinc-700">{veri.metin}</p>
                  </section>
                ))}
              </div>

              <p>
                TÜRK-İŞ hesaplamasında doğrudan çarşı, pazar ve marketlerden
                derlenen gıda fiyatları dikkate alındı. Harcama gruplarında
                Mayıs 2026 itibarıyla öne çıkan değişimler şöyle sıralandı:
              </p>

              <div className="space-y-5">
                {gidaGruplari.map((grup) => (
                  <section
                    key={grup.baslik}
                    className="rounded-xl border border-zinc-200 bg-zinc-50 p-4"
                  >
                    <h2 className="text-lg font-bold text-zinc-900">
                      {grup.baslik}
                    </h2>
                    <p className="mt-2 text-zinc-700">{grup.metin}</p>
                  </section>
                ))}
              </div>

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}