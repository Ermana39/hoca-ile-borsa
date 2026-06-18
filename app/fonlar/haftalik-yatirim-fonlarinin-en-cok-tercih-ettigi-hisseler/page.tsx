import Link from "next/link";
import fonTercihData from "./data/tercih-edilen-hisseler.json";
import FonTercihTableClient, {
  type FonSatiri,
} from "./_components/FonTercihTableClient";

export const metadata = {
  title:
    "Haftalık Yatırım Fonlarının En Çok Tercih Ettiği Hisseler | Fon Takas Verileri",
  description:
    "Yatırım fonlarının ve emeklilik fonlarının haftalık bazda en çok tercih ettiği Borsa İstanbul hisselerini, fon takas değişimlerini ve kurumsal para hareketlerini inceleyin.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/fonlar/haftalik-yatirim-fonlarinin-en-cok-tercih-ettigi-hisseler",
  },
};

export const revalidate = false;

type JsonRow = Record<string, string | number | null>;

function temizMetin(deger: unknown) {
  if (deger === null || deger === undefined) return "";
  return String(deger).trim();
}

function fonVerileriniOku(): FonSatiri[] {
  const rows = (fonTercihData.rows || []) as JsonRow[];

  if (!rows.length) return [];

  const headers =
    Array.isArray(fonTercihData.columns) && fonTercihData.columns.length > 0
      ? fonTercihData.columns
      : Object.keys(rows[0] || {});

  return rows
    .map((row) => ({
      sembol: temizMetin(row[headers[0]]) || null,
      degisim: row[headers[1]] ?? null,
      sonToplamYuzde: row[headers[2]] ?? null,
      ilkToplamYuzde: row[headers[3]] ?? null,
      sonToplamTakasTl: row[headers[4]] ?? null,
      ilkToplamTakasTl: row[headers[5]] ?? null,
      takasTlSonEmeklilikFon: row[headers[6]] ?? null,
      yuzdeSonEmeklilikFon: row[headers[7]] ?? null,
      takasTlIlkEmeklilikFon: row[headers[8]] ?? null,
      yuzdeIlkEmeklilikFon: row[headers[9]] ?? null,
      takasTlSonYatirimFon: row[headers[10]] ?? null,
      yuzdeSonYatirimFon: row[headers[11]] ?? null,
      takasTlIlkYatirimFon: row[headers[12]] ?? null,
      yuzdeIlkYatirimFon: row[headers[13]] ?? null,
    }))
    .filter((item) => item.sembol);
}

export default function HaftalikYatirimFonlarininEnCokTercihEttigiHisselerPage() {
  const fonVerileri = fonVerileriniOku();

  return (
    <main className="min-h-screen bg-white px-4 py-6 pb-24 md:px-6">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-6 flex gap-3">
          <Link
            href="/"
            prefetch={false}
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/fonlar"
            prefetch={false}
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <section className="mb-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 md:p-8">
          <h1 className="mb-3 text-3xl font-bold text-zinc-900">
            Haftalık Yatırım Fonlarının En Çok Tercih Ettiği Hisseler
          </h1>

          <p className="max-w-5xl text-sm leading-7 text-zinc-700 md:text-base">
            Bu sayfada yatırım fonlarının ve emeklilik fonlarının haftalık bazda
            Borsa İstanbul hisselerinde oluşturduğu takas değişimleri yer alır.
            Fonların hangi hisselerde ağırlığını artırdığı, hangi hisselerde
            kurumsal talebin güçlendiği ve toplam fon takasındaki değişimin nasıl
            şekillendiği tablo üzerinden takip edilebilir.
          </p>

          <div className="mt-5 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm font-medium leading-7 text-blue-900">
            Tablodaki veriler fon hareketlerini yorumlamak için hazırlanmıştır.
            Fonların bir hissede ağırlık artırması tek başına alım sinyali
            değildir; fiyat, bilanço, sektör beklentisi, haber akışı ve genel
            piyasa koşullarıyla birlikte değerlendirilmelidir.
          </div>
        </section>

        <FonTercihTableClient rows={fonVerileri} />

        <section className="mt-12 space-y-8">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-bold text-zinc-900">
              Haftalık Yatırım Fonlarının En Çok Tercih Ettiği Hisseler
              Hakkında
            </h2>

            <p className="mb-4 leading-7 text-zinc-700">
              Haftalık yatırım fonlarının en çok tercih ettiği hisseler tablosu,
              fonların belirli bir dönem içinde hangi hisse senetlerinde
              ağırlığını artırdığını veya azalttığını görmek için hazırlanır.
              Bu veri, piyasadaki kurumsal yatırımcı davranışını anlamak
              isteyen yatırımcılar açısından önemli bir takip aracıdır.
            </p>

            <p className="mb-4 leading-7 text-zinc-700">
              Yatırım fonları ve emeklilik fonları, portföylerini belirli
              stratejiler, risk yönetimi kriterleri, sektör beklentileri ve
              şirket bazlı analizler doğrultusunda yönetir. Bu nedenle fonların
              bir hisseye yönelmesi, o hissede kurumsal ilginin arttığını
              gösterebilir. Ancak bu hareketin nedeni her zaman kısa vadeli fiyat
              beklentisi olmayabilir; fonlar bazen uzun vadeli pozisyonlanma,
              endeks ağırlığı, temettü beklentisi veya portföy dengelemesi
              amacıyla da hisse alabilir.
            </p>

            <p className="leading-7 text-zinc-700">
              Bu sayfada yer alan fon takas verileri, yatırımcıya yalnızca
              “hangi hisseler alındı?” sorusunun cevabını vermez. Aynı zamanda
              fonların hangi hisselerde toplam portföy ağırlığını artırdığı,
              hangi hisselerde önceki döneme göre daha güçlü pozisyon aldığı ve
              emeklilik fonları ile yatırım fonları arasındaki dağılımın nasıl
              değiştiği konusunda da fikir verir.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 md:p-8">
            <h2 className="mb-4 text-xl font-bold text-zinc-900 md:text-2xl">
              Bu Tablo Nasıl Okunmalı?
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                <h3 className="mb-2 font-semibold text-green-900">
                  Değişim Verisi
                </h3>
                <p className="text-sm leading-6 text-zinc-700">
                  Değişim alanı, fonların ilgili hissedeki pozisyonunun önceki
                  döneme göre nasıl hareket ettiğini gösterir. Pozitif değişim,
                  fon ilgisinin arttığına; negatif değişim ise ağırlığın
                  azaldığına işaret edebilir.
                </p>
              </div>

              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                <h3 className="mb-2 font-semibold text-blue-900">
                  Toplam Takas Tutarı
                </h3>
                <p className="text-sm leading-6 text-zinc-700">
                  Toplam takas tutarı, fonların ilgili hissede taşıdığı yaklaşık
                  pozisyon büyüklüğünü gösterir. Yüksek tutarlar, hissenin fon
                  portföylerinde daha fazla yer tuttuğunu gösterebilir.
                </p>
              </div>

              <div className="rounded-xl border border-purple-200 bg-purple-50 p-4">
                <h3 className="mb-2 font-semibold text-purple-900">
                  Emeklilik Fonları
                </h3>
                <p className="text-sm leading-6 text-zinc-700">
                  Emeklilik fonları genellikle daha uzun vadeli ve dengeli
                  portföy yapısıyla hareket eder. Bu fonların belirli hisselerde
                  ağırlık artırması, uzun vadeli kurumsal ilgi açısından ayrıca
                  takip edilebilir.
                </p>
              </div>

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                <h3 className="mb-2 font-semibold text-amber-900">
                  Yatırım Fonları
                </h3>
                <p className="text-sm leading-6 text-zinc-700">
                  Yatırım fonları farklı stratejilerle yönetilebilir. Hisse
                  senedi yoğun fonlar, değişken fonlar veya karma fonlar piyasa
                  koşullarına göre daha aktif pozisyon değişimi yapabilir.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 md:p-8">
            <h2 className="mb-4 text-xl font-bold text-zinc-900 md:text-2xl">
              Fonların Tercih Ettiği Hisseler Neden Önemli?
            </h2>

            <p className="mb-4 leading-7 text-zinc-700">
              Fon hareketleri, piyasadaki kurumsal para akışını takip etmek için
              kullanılan önemli göstergelerden biridir. Bir hissede fon
              pozisyonlarının artması, o hissede profesyonel yatırımcıların
              ilgisinin yükseldiğini gösterebilir. Özellikle aynı hissede hem
              yatırım fonu hem de emeklilik fonu tarafında artış görülmesi,
              kurumsal talebin daha geniş tabana yayıldığı şeklinde
              yorumlanabilir.
            </p>

            <p className="mb-4 leading-7 text-zinc-700">
              Buna rağmen fon alımı her zaman hissenin kısa vadede yükseleceği
              anlamına gelmez. Fonlar bazen hisseyi uzun vadeli portföy
              stratejisi için alır, bazen endeks değişimleri nedeniyle pozisyon
              artırır, bazen de fiyat geri çekilmelerini fırsat olarak
              değerlendirebilir. Bu yüzden fon verileri mutlaka teknik analiz,
              temel analiz ve piyasa koşullarıyla birlikte okunmalıdır.
            </p>

            <p className="leading-7 text-zinc-700">
              Haftalık fon tercihleri özellikle orta ve uzun vadeli yatırımcılar
              için faydalı olabilir. Çünkü fonların düzenli olarak aynı
              hisselerde pozisyon artırması, şirketin kurumsal yatırımcılar
              tarafından yakından takip edildiğini gösterebilir. Ancak bu veri,
              tek başına yatırım kararı için yeterli değildir.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 md:p-8">
            <h2 className="mb-4 text-xl font-bold text-zinc-900 md:text-2xl">
              Bu Sayfa Nasıl Kullanılabilir?
            </h2>

            <ul className="space-y-3 text-zinc-700">
              <li className="flex items-start gap-2 leading-relaxed">
                <span className="mt-1 text-blue-500">•</span>
                <span>
                  Fonların haftalık bazda hangi hisselerde ağırlık artırdığını
                  görmek için kullanılabilir.
                </span>
              </li>
              <li className="flex items-start gap-2 leading-relaxed">
                <span className="mt-1 text-blue-500">•</span>
                <span>
                  Emeklilik fonları ile yatırım fonlarının aynı hissedeki
                  davranışı karşılaştırılabilir.
                </span>
              </li>
              <li className="flex items-start gap-2 leading-relaxed">
                <span className="mt-1 text-blue-500">•</span>
                <span>
                  Fon takas tutarı artan hisseler teknik ve temel analiz için
                  ayrı bir takip listesine alınabilir.
                </span>
              </li>
              <li className="flex items-start gap-2 leading-relaxed">
                <span className="mt-1 text-blue-500">•</span>
                <span>
                  Aynı hissede birkaç hafta üst üste fon ilgisi artıyorsa,
                  kurumsal talebin devam edip etmediği izlenebilir.
                </span>
              </li>
              <li className="flex items-start gap-2 leading-relaxed">
                <span className="mt-1 text-blue-500">•</span>
                <span>
                  Fon çıkışı görülen hisselerde satış baskısının fiyat davranışı
                  üzerindeki etkisi ayrıca incelenebilir.
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 md:p-8">
            <h2 className="mb-4 text-xl font-bold text-amber-950 md:text-2xl">
              Dikkat Edilmesi Gerekenler
            </h2>

            <p className="mb-4 leading-7 text-amber-950">
              Fon verileri yatırımcılar için değerli bir takip aracı olsa da,
              tek başına alım veya satım kararı için yeterli değildir. Bir
              hissenin fonlar tarafından tercih edilmesi olumlu bir sinyal
              olabilir; ancak fiyatın zaten yükselmiş olması, değerleme
              çarpanlarının pahalılaşması veya bilanço beklentilerinin değişmesi
              gibi unsurlar ayrıca dikkate alınmalıdır.
            </p>

            <p className="leading-7 text-amber-950">
              Bu sayfada yer alan fon tercihleri, takas değişimleri ve kurumsal
              para hareketleri bilgilendirme amacıyla sunulmaktadır. Buradaki
              veriler yatırım tavsiyesi değildir. Yatırım kararı vermeden önce
              şirketin finansal tabloları, sektör görünümü, teknik seviyesi,
              haber akışı ve kişisel risk profiliniz birlikte
              değerlendirilmelidir.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}