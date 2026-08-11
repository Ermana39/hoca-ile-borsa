import type { Metadata } from "next";
import Link from "@/components/NoPrefetchLink";
import { FlowTable, FonBreadcrumb, PeriodLinks } from "../_components/FonUi";
import { getCurrentFundsData, type PeriodKey } from "@/lib/fon-platform";
import { formatDate } from "@/lib/fon-format";

const validPeriods = new Set<PeriodKey>(["gunluk", "besGun", "birAy", "ucAy"]);

export const metadata: Metadata = {
  title: "Fon Para Girişi ve Çıkışı: Güncel Fon Para Akışı",
  description:
    "Yatırım fonlarında günlük, 5 günlük, 1 aylık ve 3 aylık net para girişi çıkışı tabloları.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/fonlar/para-girisi",
  },
};

export default async function FonParaGirisiPage({
  searchParams,
}: {
  searchParams: Promise<{ period?: string }>;
}) {
  const params = await searchParams;
  const period = validPeriods.has(params.period as PeriodKey)
    ? (params.period as PeriodKey)
    : "gunluk";
  const data = getCurrentFundsData();
  const activeFunds = data.fonlar.filter((fund) => fund.aktifMi);

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <FonBreadcrumb current="Para Girişi" />

        <section className="mb-6">
          <p className="text-sm font-semibold text-blue-700">
            Son işlem tarihi: {formatDate(data.sonIslemTarihi)}
          </p>
          <h1 className="mt-2 text-2xl font-bold text-slate-950 md:text-4xl">
            Fon Para Girişi ve Çıkışı
          </h1>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600">
            Yatırım fonlarına yönelen ve fonlardan çıkan net tutarları günlük,
            5 günlük, 1 aylık ve 3 aylık dönemlerde inceleyin. Para akışının
            yönünü fon getirisi, büyüklüğü ve yatırımcı değişimiyle birlikte
            değerlendirerek güncel yatırımcı ilgisini takip edin.
          </p>
        </section>

        <div className="mb-5">
          <PeriodLinks active={period} basePath="/fonlar/para-girisi" />
        </div>

        <section className="space-y-8">
          <div>
            <h2 className="mb-3 text-xl font-bold text-slate-950">
              En Çok Para Girişi Alan Fonlar
            </h2>
            <FlowTable funds={activeFunds} period={period} direction="in" />
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-slate-950">
              En Çok Para Çıkışı Yaşayan Fonlar
            </h2>
            <FlowTable funds={activeFunds} period={period} direction="out" />
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10">
          <h2 className="text-2xl font-bold text-slate-950">
            Fon Para Girişi ve Çıkışı Ne Anlama Gelir?
          </h2>
          <div className="mt-5 grid gap-8 text-sm leading-7 text-slate-600 md:text-base lg:grid-cols-2">
            <div className="space-y-4">
              <p>
                Pozitif para akışı, incelenen dönemde fona yönelen net tutarın
                fondan çıkan tutardan daha yüksek olduğunu gösterir. Negatif para
                akışı ise fondan çıkışın daha güçlü olduğuna işaret eder. Bu hareket,
                fonun yatırımcılar arasındaki güncel ilgi yönünü anlamaya yardımcı olur.
              </p>
              <p>
                Günlük akışlar kısa vadeli haberlerden ve piyasa hareketlerinden
                etkilenebilir. Beş günlük, bir aylık ve üç aylık dönemleri birlikte
                incelemek, tek güne bağlı geçici hareketlerle daha kalıcı eğilimleri
                ayırmayı kolaylaştırır.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Para girişi tek başına alım sinyali değildir. Fonun dönemsel
                getirisi, risk değeri, portföy stratejisi, toplam büyüklüğü ve
                yatırımcı sayısındaki değişimle birlikte değerlendirilmelidir.
                Güçlü para girişi gelecekte pozitif getiri oluşacağını garanti etmez.
              </p>
              <p>
                Akışı güçlü fonların ayrıntılı grafiklerine fon kodundan ulaşabilir,
                farklı ölçütler için <Link href="/fonlar/fon-tarayici" className="font-semibold text-blue-700 hover:underline">fon tarayıcıyı</Link> ve
                seçtiğiniz fonları yan yana görmek için <Link href="/fonlar/fon-karsilastirma" className="font-semibold text-blue-700 hover:underline">fon karşılaştırma aracını</Link> inceleyebilirsiniz.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 border-t border-slate-200 pt-8 md:grid-cols-3">
            <div>
              <h3 className="font-bold text-slate-950">Pozitif para akışı</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Fona giren net tutarın çıkan tutardan daha yüksek olduğunu gösterir.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-950">Negatif para akışı</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Fondan çıkan net tutarın fona yönelen tutardan daha yüksek olduğunu gösterir.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-950">Dönem seçimi</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Farklı dönemler kısa vadeli hareket ile daha uzun süreli eğilimi ayırmaya yardım eder.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
