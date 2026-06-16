import Link from "next/link";
import FonEtkiTable, { type FonEtkiRow } from "../_components/FonEtkiTable";

export const metadata = {
  title: "PBR Fonu Kapanış Etki Analizi | Hoca İle Borsa",
  description:
    "PBR (Pusula Portföy Birinci Değişken Fon) portföyündeki hisselerin güncel kapanış marjlarına göre fonun ertesi gün fiyatına etkisini gösteren güncel hesaplama tablosu.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/fonlar/etki-analizi/pbr",
  },
};

const rows: FonEtkiRow[] = [
  { sembol: "GUNDG", fonOrani: 12.4, kapanisMarji: 5.83, etki: 0.72292 },
  { sembol: "KTLEV", fonOrani: 10.68, kapanisMarji: -2.549999952, etki: -0.272339995 },
  { sembol: "ODINE", fonOrani: 10.28, kapanisMarji: 2.45, etki: 0.25186 },
  { sembol: "HEDEF", fonOrani: 6.97, kapanisMarji: 3, etki: 0.2091 },
  { sembol: "PASEU", fonOrani: 4.95, kapanisMarji: 2.24000001, etki: 0.11088 },
  { sembol: "TATEN", fonOrani: 4.23, kapanisMarji: 1.45, etki: 0.061335 },
  { sembol: "AKBNK", fonOrani: 3.62, kapanisMarji: 0.46000008, etki: 0.016652 },
  { sembol: "YKBNK", fonOrani: 3.25, kapanisMarji: 0.100000001, etki: 0.00325 },
  { sembol: "THYAO", fonOrani: 2.93, kapanisMarji: 0.230000004, etki: 0.006739 },
  { sembol: "TRALT", fonOrani: 2.19, kapanisMarji: 3.400000095, etki: 0.074460002 },
  { sembol: "DSTKF", fonOrani: 1.93, kapanisMarji: 0, etki: 0 },
  { sembol: "AKSEN", fonOrani: 1.46, kapanisMarji: -0.300000012, etki: -0.00438 },
  { sembol: "TCELL", fonOrani: 1.24, kapanisMarji: 0.25999999, etki: 0.003224 },
  { sembol: "DAPGM", fonOrani: 1.2, kapanisMarji: -0.56, etki: -0.00672 },
  { sembol: "SKBNK", fonOrani: 1.12, kapanisMarji: -0.949999988, etki: -0.01064 },
  { sembol: "MGROS", fonOrani: 0.87, kapanisMarji: -0.07, etki: -0.000609 },
  { sembol: "TERA", fonOrani: 0.74, kapanisMarji: -9.96, etki: -0.073704 },
  { sembol: "MPARK", fonOrani: 0.67, kapanisMarji: -5.03, etki: -0.033701 },
  { sembol: "ISCTR", fonOrani: 0.61, kapanisMarji: 0.810000002, etki: 0.004941 },
  { sembol: "PGSUS", fonOrani: 0.56, kapanisMarji: 1.549999952, etki: 0.00868 },
  { sembol: "DCTTR", fonOrani: 0.54, kapanisMarji: 0.42, etki: 0.002268 },
  { sembol: "BRSAN", fonOrani: 0.51, kapanisMarji: -3.359999895, etki: -0.017135999 },
  { sembol: "IZFAS", fonOrani: 0.49, kapanisMarji: 0.569999993, etki: 0.002793 },
  { sembol: "PEKGY", fonOrani: 0.48, kapanisMarji: 3.5, etki: 0.0168 },
  { sembol: "ANSGR", fonOrani: 0.31, kapanisMarji: -0.49000001, etki: -0.001519 },
];

export default function PbrEtkiAnaliziPage() {
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
          <span className="font-medium text-slate-700">PBR</span>
        </nav>

        <h1 className="mb-2 text-2xl font-bold text-slate-900 md:text-3xl">
          PBR Fonu Kapanış Etki Analizi
        </h1>

        <p className="mb-6 max-w-3xl text-base leading-7 text-slate-600">
          PBR (Pusula Portföy Birinci Değişken Fon) portföyünde yer alan hisselerin son açıklanan fon
          dağılımındaki ağırlıkları ile bu hisselerin günlük kapanış marjları
          kullanılarak, fonun ertesi gün ilan edilecek fiyatına olan tahmini
          katkısı hesaplanmıştır.
        </p>

        <FonEtkiTable rows={rows} toplamFonOrani={74.23} toplamEtki={1.08} />

        <section className="mt-10 space-y-5 rounded-2xl border border-slate-200 bg-white p-5 md:p-7">
          <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
            PBR Fon Etki Analizi Nasıl Hesaplanır?
          </h2>

          <p className="text-sm leading-7 text-slate-600 md:text-base">
            PBR (Pusula Portföy Birinci Değişken Fon) fonunun günlük fiyat değişimini önceden tahmin edebilmek için,
            fonun portföyünde bulunan her hissenin fon içindeki ağırlığı ile
            o hissenin gün içindeki kapanış marjı (kapanış fiyatının önceki
            kapanışa göre yüzdesel değişimi) çarpılır. Her hisse için elde
            edilen bu &quot;etki&quot; değerleri toplanarak fonun birim pay
            değerindeki tahmini yüzdesel değişim bulunur.
          </p>

          <p className="text-sm leading-7 text-slate-600 md:text-base">
            <strong>Fon Oranı</strong> sütunu, ilgili hissenin PBR portföyü
            içindeki yüzdesel ağırlığını gösterir. <strong>Kapanış Marjı</strong>{" "}
            sütunu, hissenin o günkü kapanış fiyatının önceki güne göre yüzde
            değişimini ifade eder. <strong>Etki</strong> sütunu ise bu iki
            değerin çarpımıyla elde edilen, hissenin fonun toplam getirisine
            yaptığı katkıyı gösterir. Tablonun en altındaki toplam etki değeri,
            tüm hisselerin birleşik etkisinin PBR fonunun ertesi gün fiyatına
            yansıması beklenen tahmini yüzdesel değişimi temsil eder.
          </p>

          <p className="text-sm leading-7 text-slate-600 md:text-base">
            Bu hesaplama, PBR (Pusula Portföy Birinci Değişken Fon) yatırımcıları için fonun açıklanacak günlük
            birim pay değerine yönelik bir ön gösterge niteliği taşır. Fon
            fiyatları TEFAS tarafından gün sonunda ilan edildiğinden, burada
            paylaşılan etki tablosu yatırımcıların portföydeki hisse
            hareketlerini takip ederek fon performansı hakkında erken bir fikir
            edinmesine yardımcı olur.
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
