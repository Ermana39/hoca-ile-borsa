import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";

export const metadata: Metadata = {
  title: "MSCI’den Türkiye Uyarısı: Şeffaflık ve Bilgi Akışı İzlenecek",
  description:
    "MSCI, Türkiye piyasasında hissedarlık şeffaflığı, bilgi akışı ve olası koordineli işlem davranışlarına ilişkin gelişmeleri Kasım 2026 MSCI Endeks Gözden Geçirmesi’ne kadar izlemeye devam edeceğini açıkladı.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/msci-turkiye-uyarisi-seffaflik-bilgi-akisi",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/msci-turkiye-uyarisi-seffaflik-bilgi-akisi.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://www.hocaileborsa.com/msci-turkiye-uyarisi-seffaflik-bilgi-akisi.webp",
    ],
  },
};

export default function MsciTurkiyeUyarisiPage() {
  return (
    <main className="min-h-screen bg-white">
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
              src="/msci-turkiye-uyarisi-seffaflik-bilgi-akisi.webp"
              alt="MSCI’den Türkiye piyasası için şeffaflık ve bilgi akışı uyarısı"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="p-5 md:p-8">
            <header>
              <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
                MSCI’den Türkiye Uyarısı: Şeffaflık ve Bilgi Akışı İzlenecek
              </h1>
              <p className="mt-2 text-sm text-zinc-500">
                24.06.2026 ·{" "}
                <Link
                  href="/yazar/erman-hoca"
                  className="font-semibold text-slate-600 hover:text-blue-600"
                >
                  Erman Hoca
                </Link>
              </p>
            </header>

            <div className="mt-5 space-y-4 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                MSCI, 2026 piyasa sınıflandırma değerlendirmesi kapsamında
                Türkiye piyasasına ilişkin dikkat çeken bir uyarı yayımladı.
                Açıklamada, Türkiye hisse senedi piyasasında özellikle
                hissedarlık şeffaflığı, bilgi akışı ve bazı hisselerde olası
                koordineli işlem davranışlarına yönelik yatırımcı endişelerinin
                izlenmeye devam ettiği belirtildi.
              </p>

              <p>
                MSCI değerlendirmesinde, uluslararası kurumsal yatırımcıların
                Türkiye’de bazı küçük ölçekli halka açık şirketlerle yakından
                ilişkili fon varlıkları üzerinden serbest dolaşım oranlarının
                olduğundan farklı görünebildiğine yönelik endişeler taşıdığı
                ifade edildi. Bu başlık, yabancı yatırımcıların şirketlerin
                gerçek halka açıklık yapısını ve piyasa fiyatlamasının sağlıklı
                oluşup oluşmadığını değerlendirmesi açısından önem taşıyor.
              </p>

              <p>
                Açıklamada, Sermaye Piyasası Kurulu’nun fonlarda tutulan bazı
                payların Borsa İstanbul serbest dolaşım hesaplamalarından
                çıkarılmasına yönelik yeni çerçevesinin MSCI tarafından not
                edildiği belirtildi. Ancak MSCI, yatırımcıların bu düzenlemenin
                piyasadaki etkisini uygulamada görmek istediğine dikkat çekti.
              </p>

              <p>
                MSCI’ye göre Türkiye piyasasında ilerleme beklenen alanlar
                arasında nihai faydalanıcı sahipliğine ilişkin daha zamanında ve
                detaylı açıklama yapılması, koordineli işlem davranışlarına karşı
                daha güçlü gözetim ve yaptırım mekanizmaları ile serbest dolaşımı
                yapısal olarak bozulan menkul kıymetlerin tespitine yönelik daha
                şeffaf ve kurallı bir çerçeve bulunuyor.
              </p>

              <p>
                Kurum, Kasım 2026 MSCI Endeks Gözden Geçirmesi’ne kadar Türkiye
                piyasasında yeterli, somut ve güvenilir ilerleme görülmemesi
                durumunda Türkiye ve Türkiye’den endekslere dahil edilecek uygun
                menkul kıymetlerin nasıl ele alınacağına yönelik bir istişare
                süreci başlatabileceğini bildirdi.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-900 md:text-base">
                Hoca ile Borsa yorumu:
              </p>
              <p className="mt-2 text-sm leading-7 text-amber-800 md:text-base">
                MSCI açıklaması, Borsa İstanbul açısından doğrudan bir
                sınıflandırma değişikliği kararı anlamına gelmiyor. Ancak
                yabancı yatırımcı güveni, serbest dolaşım hesaplamaları ve piyasa
                şeffaflığı başlıklarının uluslararası endeks sağlayıcıları
                tarafından yakından izlendiğini göstermesi bakımından önemli.
                Kasım 2026’ya kadar SPK ve piyasa kurumlarının atacağı somut
                adımlar, bu uyarının piyasa üzerindeki etkisinin sınırlı kalıp
                kalmayacağını belirleyebilir.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-900 md:text-base">
                Haber özeti:
              </p>
              <p className="mt-2 text-sm leading-7 text-blue-800 md:text-base">
                MSCI, Türkiye piyasasında bilgi akışı, hissedarlık şeffaflığı ve
                olası koordineli işlem davranışlarına ilişkin endişelerin
                sürdüğünü açıkladı. Kurum, Kasım 2026’ya kadar somut ilerleme
                görülmezse Türkiye için istişare süreci başlatabileceğini
                bildirdi.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-sm font-bold text-zinc-900 md:text-base">
                Kaynak:
              </p>
              <a
                href="https://www.stocktitan.net/news/MSCI/msci-announces-the-results-of-the-msci-2026-market-classification-7myjxbl3paj2.html"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-sm font-semibold text-blue-700 hover:text-blue-800 md:text-base"
              >
                MSCI 2026 Market Classification Review
              </a>
              <a
                href="https://www.msci.com/downloads/documents/press-releases/media-room/MSCI_2026_MAR_PR.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-sm font-semibold text-blue-700 hover:text-blue-800 md:text-base"
              >
                MSCI 2026 Global Market Accessibility Review
              </a>
            </div>

            <p className="mt-6 text-sm text-zinc-400">
              24.06.2026 – Bu paylaşım yatırım tavsiyesi değildir.
            </p>

            <div className="mt-6">
              <AuthorBox />
            </div>
          </div>
        </article>

        <div className="mt-8">
          <HaberIlgiliBolumler
            slug="msci-turkiye-uyarisi-seffaflik-bilgi-akisi"
            baslik="MSCI Türkiye Uyarısı Şeffaflık Bilgi Akışı"
          />
        </div>
        <HaberAltKisim href="/haber/msci-turkiye-uyarisi-seffaflik-bilgi-akisi" />
      </div>
    </main>
  );
}