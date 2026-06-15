import Link from "next/link";
import FonEtkiTable, { type FonEtkiRow } from "../_components/FonEtkiTable";

export const metadata = {
  title: "TLY Fonu Kapanış Etki Analizi | Hoca İle Borsa",
  description:
    "TLY (Tera Portföy Birinci Serbest Fonu) portföyündeki hisselerin güncel kapanış marjlarına göre fonun ertesi gün fiyatına etkisini gösteren güncel hesaplama tablosu.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/fonlar/etki-analizi/tly",
  },
};

const rows: FonEtkiRow[] = [
  { sembol: "DSTKF", fonOrani: 17.71, kapanisMarji: 7.56, etki: 1.3389 },
  { sembol: "OZATD", fonOrani: 17.16, kapanisMarji: 8.43, etki: 1.4466 },
  { sembol: "TERA", fonOrani: 11.5, kapanisMarji: -9.98, etki: -1.1474 },
  { sembol: "PEKGY", fonOrani: 9.89, kapanisMarji: 0.31, etki: 0.0309 },
  { sembol: "TRHOL", fonOrani: 6.59, kapanisMarji: 3.61, etki: 0.2379 },
  { sembol: "TEHOL", fonOrani: 5.5, kapanisMarji: 1.85, etki: 0.1018 },
  { sembol: "ANELE", fonOrani: 2.15, kapanisMarji: 3.67, etki: 0.0789 },
  { sembol: "ALKLC", fonOrani: 0.66, kapanisMarji: -1.36, etki: -0.0090 },
  { sembol: "SVGYO", fonOrani: 0.55, kapanisMarji: 1.45, etki: 0.0080 },
  { sembol: "TMPOL", fonOrani: 0.33, kapanisMarji: 7.51, etki: 0.0248 },
  { sembol: "HEDEF", fonOrani: 0.28, kapanisMarji: 1.30, etki: 0.0036 },
  { sembol: "CWENE", fonOrani: 0.03, kapanisMarji: 9.01, etki: 0.0027 },
  { sembol: "EUPWR", fonOrani: 0.03, kapanisMarji: 4.99, etki: 0.0015 },
];

export default function TlyEtkiAnaliziPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <div className="mx-auto max-w-4xl">
        <nav className="mb-5 flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
          <Link href="/" prefetch={false} className="transition hover:text-blue-600">
            Ana Sayfa
          </Link>
          <span className="text-slate-300">/</span>
          <Link href="/fonlar" prefetch={false} className="transition hover:text-blue-600">
            Fonlar
          </Link>
          <span className="text-slate-300">/</span>
          <Link href="/fonlar/etki-analizi" prefetch={false} className="transition hover:text-blue-600">
            Fon Kapanış Etki Analizi
          </Link>
          <span className="text-slate-300">/</span>
          <span className="font-medium text-slate-700">TLY</span>
        </nav>

        <h1 className="mb-2 text-2xl font-bold text-slate-900 md:text-3xl">
          TLY Fonu Kapanış Etki Analizi
        </h1>

        <p className="mb-6 max-w-3xl text-base leading-7 text-slate-600">
          TLY (Tera Portföy Birinci Serbest Fonu) portföyünde yer alan
          hisselerin son açıklanan fon dağılımındaki ağırlıkları ile bu
          hisselerin günlük kapanış marjları kullanılarak, fonun ertesi gün
          ilan edilecek fiyatına olan tahmini katkısı hesaplanmıştır.
        </p>

        <FonEtkiTable rows={rows} toplamFonOrani={72.38} toplamEtki={2.12} />

        <section className="mt-10 space-y-5 rounded-2xl border border-slate-200 bg-white p-5 md:p-7">
          <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
            TLY Fon Etki Analizi Nasıl Hesaplanır?
          </h2>

          <p className="text-sm leading-7 text-slate-600 md:text-base">
            TLY fonunun günlük fiyat değişimini önceden tahmin edebilmek için,
            fonun portföyünde bulunan her hissenin fon içindeki ağırlığı ile
            o hissenin gün içindeki kapanış marjı (kapanış fiyatının önceki
            kapanışa göre yüzdesel değişimi) çarpılır. Her hisse için elde
            edilen bu &quot;etki&quot; değerleri toplanarak fonun birim pay
            değerindeki tahmini yüzdesel değişim bulunur.
          </p>

          <p className="text-sm leading-7 text-slate-600 md:text-base">
            <strong>Fon Oranı</strong> sütunu, ilgili hissenin TLY portföyü
            içindeki yüzdesel ağırlığını gösterir. <strong>Kapanış Marjı</strong>{" "}
            sütunu, hissenin o günkü kapanış fiyatının önceki güne göre yüzde
            değişimini ifade eder. <strong>Etki</strong> sütunu ise bu iki
            değerin çarpımıyla elde edilen, hissenin fonun toplam getirisine
            yaptığı katkıyı gösterir. Tablonun en altındaki toplam etki değeri,
            tüm hisselerin birleşik etkisinin TLY fonunun ertesi gün fiyatına
            yansıması beklenen tahmini yüzdesel değişimi temsil eder.
          </p>

          <p className="text-sm leading-7 text-slate-600 md:text-base">
            Bu hesaplama, TLY (Tera Portföy Birinci Serbest Fonu) yatırımcıları
            için fonun açıklanacak günlük birim pay değerine yönelik bir ön
            gösterge niteliği taşır. Fon fiyatları TEFAS tarafından gün sonunda
            ilan edildiğinden, burada paylaşılan etki tablosu yatırımcıların
            portföydeki hisse hareketlerini takip ederek fon performansı
            hakkında erken bir fikir edinmesine yardımcı olur.
          </p>

          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
            ⚠️ Bu sayfadaki hesaplamalar bilgilendirme amaçlıdır, yatırım
            tavsiyesi değildir. Fonun gerçek günlük getirisi; nakit, vadeli
            işlem pozisyonları, gider kesintileri ve portföydeki güncel
            ağırlık değişiklikleri nedeniyle bu tahminden farklı
            gerçekleşebilir.
          </div>
        </section>
      </div>
    </main>
  );
}
