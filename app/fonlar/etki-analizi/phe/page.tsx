import Link from "next/link";
import FonEtkiTable, { type FonEtkiRow } from "../_components/FonEtkiTable";

export const metadata = {
  title: "PHE Fonu Kapanış Etki Analizi | Hoca İle Borsa",
  description:
    "PHE (Pusula Portföy Hisse Senedi Fonu) portföyündeki hisselerin güncel kapanış marjlarına göre fonun ertesi gün fiyatına etkisini gösteren güncel hesaplama tablosu.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/fonlar/etki-analizi/phe",
  },
};

const rows: FonEtkiRow[] = [
  { sembol: "GUNDG", fonOrani: 12.38, kapanisMarji: -1.15, etki: -0.14276771 },
  { sembol: "KTLEV", fonOrani: 10.7, kapanisMarji: 0.0, etki: 0 },
  { sembol: "ODINE", fonOrani: 9.17, kapanisMarji: 3.69, etki: 0.338373005 },
  { sembol: "PASEU", fonOrani: 7.79, kapanisMarji: -2.11, etki: -0.164143986 },
  { sembol: "HEDEF", fonOrani: 4.54, kapanisMarji: 1.3, etki: 0.059019998 },
  { sembol: "THYAO", fonOrani: 4.36, kapanisMarji: 5.85, etki: 0.255012185 },
  { sembol: "TATEN", fonOrani: 3.79, kapanisMarji: -1.96, etki: -0.074364005 },
  { sembol: "TRALT", fonOrani: 3.29, kapanisMarji: 7.34, etki: 0.241486005 },
  { sembol: "AKBNK", fonOrani: 3.17, kapanisMarji: 5.72, etki: 0.181323993 },
  { sembol: "DSTKF", fonOrani: 3.09, kapanisMarji: 7.56, etki: 0.233603998 },
  { sembol: "YKBNK", fonOrani: 2.98, kapanisMarji: 6.19, etki: 0.184587927 },
  { sembol: "TCELL", fonOrani: 2.94, kapanisMarji: 3.79, etki: 0.111425999 },
  { sembol: "MGROS", fonOrani: 2.49, kapanisMarji: 3.94, etki: 0.098106001 },
  { sembol: "SAHOL", fonOrani: 2.35, kapanisMarji: 5.47, etki: 0.128544995 },
  { sembol: "KCHOL", fonOrani: 2.11, kapanisMarji: 4.96, etki: 0.104656001 },
  { sembol: "ISCTR", fonOrani: 1.81, kapanisMarji: 4.05, etki: 0.073305003 },
  { sembol: "ALKLC", fonOrani: 1.29, kapanisMarji: -1.36, etki: -0.017607759 },
  { sembol: "BIMAS", fonOrani: 1.28, kapanisMarji: 3.68, etki: 0.047104001 },
  { sembol: "DAPGM", fonOrani: 1.14, kapanisMarji: 0.94, etki: 0.010694184 },
  { sembol: "TTKOM", fonOrani: 0.89, kapanisMarji: 1.48, etki: 0.013172 },
  { sembol: "TERA", fonOrani: 0.85, kapanisMarji: -9.98, etki: -0.084804598 },
  { sembol: "GARAN", fonOrani: 0.83, kapanisMarji: 3.75, etki: 0.031125 },
  { sembol: "ENKAI", fonOrani: 0.58, kapanisMarji: 3.33, etki: 0.019333333 },
  { sembol: "PEKGY", fonOrani: 0.44, kapanisMarji: 0.31, etki: 0.001373927 },
  { sembol: "AKSEN", fonOrani: 0.42, kapanisMarji: 2.69, etki: 0.011308704 },
  { sembol: "ALVES", fonOrani: 0.37, kapanisMarji: 2.24, etki: 0.008283582 },
  { sembol: "PGSUS", fonOrani: 0.35, kapanisMarji: 5.35, etki: 0.01872093 },
  { sembol: "IZFAS", fonOrani: 0.29, kapanisMarji: 0.41, etki: 0.001175994 },
  { sembol: "GUBRF", fonOrani: 0.26, kapanisMarji: 9.97, etki: 0.025932115 },
  { sembol: "TRHOL", fonOrani: 0.22, kapanisMarji: 3.61, etki: 0.007942 },
  { sembol: "TEHOL", fonOrani: 0.04, kapanisMarji: 1.85, etki: 0.00074 },
  { sembol: "TOASO", fonOrani: 0.02, kapanisMarji: 6.68, etki: 0.001336 },
];

export default function PheEtkiAnaliziPage() {
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
          <span className="font-medium text-slate-700">PHE</span>
        </nav>

        <h1 className="mb-2 text-2xl font-bold text-slate-900 md:text-3xl">
          PHE Fonu Kapanış Etki Analizi
        </h1>

        <p className="mb-6 max-w-3xl text-base leading-7 text-slate-600">
          PHE (Pusula Portföy Hisse Senedi Fonu) portföyünde yer alan
          hisselerin son açıklanan fon dağılımındaki ağırlıkları ile bu
          hisselerin günlük kapanış marjları kullanılarak, fonun ertesi gün
          ilan edilecek fiyatına olan tahmini katkısı hesaplanmıştır.
        </p>

        <FonEtkiTable rows={rows} toplamFonOrani={86.23} toplamEtki={1.72} />

        <section className="mt-10 space-y-5 rounded-2xl border border-slate-200 bg-white p-5 md:p-7">
          <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
            PHE Fon Etki Analizi Nasıl Hesaplanır?
          </h2>

          <p className="text-sm leading-7 text-slate-600 md:text-base">
            PHE fonunun günlük fiyat değişimini önceden tahmin edebilmek için,
            fonun portföyünde bulunan her hissenin fon içindeki ağırlığı ile
            o hissenin gün içindeki kapanış marjı (kapanış fiyatının önceki
            kapanışa göre yüzdesel değişimi) çarpılır. Her hisse için elde
            edilen bu &quot;etki&quot; değerleri toplanarak fonun birim pay
            değerindeki tahmini yüzdesel değişim bulunur.
          </p>

          <p className="text-sm leading-7 text-slate-600 md:text-base">
            <strong>Fon Oranı</strong> sütunu, ilgili hissenin PHE portföyü
            içindeki yüzdesel ağırlığını gösterir. <strong>Kapanış Marjı</strong>{" "}
            sütunu, hissenin o günkü kapanış fiyatının önceki güne göre yüzde
            değişimini ifade eder. <strong>Etki</strong> sütunu ise bu iki
            değerin çarpımıyla elde edilen, hissenin fonun toplam getirisine
            yaptığı katkıyı gösterir. Tablonun en altındaki toplam etki değeri,
            tüm hisselerin birleşik etkisinin PHE fonunun ertesi gün fiyatına
            yansıması beklenen tahmini yüzdesel değişimi temsil eder.
          </p>

          <p className="text-sm leading-7 text-slate-600 md:text-base">
            Bu hesaplama, PHE (Pusula Portföy Hisse Senedi Fonu) yatırımcıları
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
