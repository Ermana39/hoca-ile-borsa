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
  { sembol: "GUNDG", fonOrani: 12.4, kapanisMarji: -1.153212521, etki: -0.142998353 },
  { sembol: "KTLEV", fonOrani: 10.68, kapanisMarji: 0, etki: 0 },
  { sembol: "ODINE", fonOrani: 10.28, kapanisMarji: 3.690000057, etki: 0.379332006 },
  { sembol: "HEDEF", fonOrani: 6.97, kapanisMarji: 1.299999952, etki: 0.090609997 },
  { sembol: "PASEU", fonOrani: 4.95, kapanisMarji: -2.107111501, etki: -0.104302019 },
  { sembol: "TATEN", fonOrani: 4.23, kapanisMarji: -1.962110961, etki: -0.082997294 },
  { sembol: "AKBNK", fonOrani: 3.62, kapanisMarji: 5.71999979, etki: 0.207063992 },
  { sembol: "YKBNK", fonOrani: 3.25, kapanisMarji: 6.194225722, etki: 0.201312336 },
  { sembol: "THYAO", fonOrani: 2.93, kapanisMarji: 5.848903331, etki: 0.171372868 },
  { sembol: "TRALT", fonOrani: 2.19, kapanisMarji: 7.340000153, etki: 0.160746003 },
  { sembol: "DSTKF", fonOrani: 1.93, kapanisMarji: 7.559999943, etki: 0.145907999 },
  { sembol: "AKSEN", fonOrani: 1.46, kapanisMarji: 2.692548528, etki: 0.039311209 },
  { sembol: "TCELL", fonOrani: 1.24, kapanisMarji: 3.789999962, etki: 0.046996 },
  { sembol: "DAPGM", fonOrani: 1.2, kapanisMarji: 0.938086304, etki: 0.011257036 },
  { sembol: "SKBNK", fonOrani: 1.12, kapanisMarji: 5.300000191, etki: 0.059360002 },
  { sembol: "MGROS", fonOrani: 0.87, kapanisMarji: 3.940000057, etki: 0.034278 },
  { sembol: "TERA", fonOrani: 0.74, kapanisMarji: -9.977011494, etki: -0.073829885 },
  { sembol: "MPARK", fonOrani: 0.67, kapanisMarji: 2.259887006, etki: 0.015141243 },
  { sembol: "ISCTR", fonOrani: 0.61, kapanisMarji: 4.050000191, etki: 0.024705001 },
  { sembol: "PGSUS", fonOrani: 0.56, kapanisMarji: 5.349999905, etki: 0.029959999 },
  { sembol: "DCTTR", fonOrani: 0.54, kapanisMarji: 0.25, etki: 0.00135 },
  { sembol: "BRSAN", fonOrani: 0.51, kapanisMarji: 2.980000019, etki: 0.015198 },
  { sembol: "IZFAS", fonOrani: 0.49, kapanisMarji: 0.405515004, etki: 0.001987024 },
  { sembol: "PEKGY", fonOrani: 0.48, kapanisMarji: 0.31225605, etki: 0.001498829 },
  { sembol: "ANSGR", fonOrani: 0.31, kapanisMarji: 1.790830946, etki: 0.005551576 },
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

        <FonEtkiTable rows={rows} toplamFonOrani={74.23} toplamEtki={1.24} />

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
