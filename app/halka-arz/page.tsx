export const metadata = {
  title: "Halka Arz | Hoca İle Borsa",
  description:
    "Güncel halka arz verileri, kazanç hesaplama, talep hesaplama ve izahname bilgileri.",
  alternates: { canonical: "https://www.hocaileborsa.com/halka-arz" },
};

import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import * as XLSX from "xlsx";

type ExcelSatiri = {
  kurum: string;
  alis: number;
  ortalamaAlis: number;
  satis: number;
  ortalamaSatis: number;
  toplam: number;
  yuzde: number;
  net: number;
  maliyet: number;
};

type ListeSatiri = {
  kurum: string;
  lot: string;
  yuzde: string;
  maliyet: string;
  sagDeger: string;
};

const excelDosyaYolu = path.join(
  process.cwd(),
  "app",
  "halka-arz",
  "data",
  "ekdemir-araci-kurum.xlsx"
);

function sayiCevir(deger: unknown) {
  if (typeof deger === "number") return deger;
  if (deger === null || deger === undefined || deger === "") return 0;

  const metin = String(deger)
    .trim()
    .replace(/\s/g, "")
    .replace(/\./g, "")
    .replace(",", ".");

  const sayi = Number(metin);
  return Number.isNaN(sayi) ? 0 : sayi;
}

function metinCevir(deger: unknown) {
  if (deger === null || deger === undefined) return "";
  return String(deger).trim();
}

function formatSayi(deger: number, maxFraction = 0) {
  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: maxFraction,
  }).format(deger);
}

function formatYuzde(deger: number) {
  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(deger);
}

function bosSatir(): ListeSatiri {
  return {
    kurum: "",
    lot: "",
    yuzde: "",
    maliyet: "",
    sagDeger: "",
  };
}

function besSatiraTamamla(liste: ListeSatiri[]) {
  const sonuc = [...liste];

  while (sonuc.length < 5) {
    sonuc.push(bosSatir());
  }

  return sonuc.slice(0, 5);
}

function excelOku() {
  try {
    const buffer = fs.readFileSync(excelDosyaYolu);
    const workbook = XLSX.read(buffer, { type: "buffer" });
    const sheetName = workbook.SheetNames[0];
    const ws = workbook.Sheets[sheetName];

    const rawRows = XLSX.utils.sheet_to_json<(string | number)[]>(ws, {
      header: 1,
      defval: "",
    }) as (string | number)[][];

    return rawRows
      .slice(1)
      .map((row) => ({
        kurum: metinCevir(row[0]),
        alis: sayiCevir(row[1]),
        ortalamaAlis: sayiCevir(row[2]),
        satis: sayiCevir(row[3]),
        ortalamaSatis: sayiCevir(row[4]),
        toplam: sayiCevir(row[5]),
        yuzde: sayiCevir(row[6]),
        net: sayiCevir(row[7]),
        maliyet: sayiCevir(row[8]),
      }))
      .filter((item) => item.kurum);
  } catch {
    return [] as ExcelSatiri[];
  }
}

function aliciListesi(veri: ExcelSatiri[]): ListeSatiri[] {
  const pozitifler = veri.filter((item) => item.net > 0);
  const toplamPozitifNet = pozitifler.reduce((sum, item) => sum + item.net, 0);

  const liste = pozitifler
    .sort((a, b) => b.net - a.net)
    .slice(0, 5)
    .map((item) => ({
      kurum: item.kurum,
      lot: formatSayi(item.net, 0),
      yuzde: formatYuzde(
        toplamPozitifNet > 0 ? (item.net / toplamPozitifNet) * 100 : 0
      ),
      maliyet: formatSayi(item.maliyet, 3),
      sagDeger: formatSayi(item.toplam, 0),
    }));

  return besSatiraTamamla(liste);
}

function saticiListesi(veri: ExcelSatiri[]): ListeSatiri[] {
  const negatifler = veri.filter((item) => item.net < 0);
  const toplamNegatifNet = Math.abs(
    negatifler.reduce((sum, item) => sum + item.net, 0)
  );

  const liste = negatifler
    .sort((a, b) => a.net - b.net)
    .slice(0, 5)
    .map((item) => ({
      kurum: item.kurum,
      lot: formatSayi(Math.abs(item.net), 0),
      yuzde: formatYuzde(
        toplamNegatifNet > 0
          ? (Math.abs(item.net) / toplamNegatifNet) * 100
          : 0
      ),
      maliyet: formatSayi(item.maliyet, 3),
      sagDeger: formatSayi(item.toplam, 0),
    }));

  return besSatiraTamamla(liste);
}

function hacimListesi(veri: ExcelSatiri[]): ListeSatiri[] {
  const toplamIslemLotu = veri.reduce((sum, item) => sum + item.toplam, 0);

  const liste = [...veri]
    .sort((a, b) => b.toplam - a.toplam)
    .slice(0, 5)
    .map((item) => ({
      kurum: item.kurum,
      lot: formatSayi(item.toplam, 0),
      yuzde: formatYuzde(
        toplamIslemLotu > 0 ? (item.toplam / toplamIslemLotu) * 100 : 0
      ),
      maliyet: formatSayi(item.maliyet, 3),
      sagDeger: formatSayi(item.net, 0),
    }));

  return besSatiraTamamla(liste);
}

function KurumTablosu({
  title,
  rows,
  lotBaslik,
  sagBaslik,
  bgColor,
}: {
  title: string;
  rows: ListeSatiri[];
  lotBaslik: string;
  sagBaslik: string;
  bgColor: string;
}) {
  return (
    <div
      className="overflow-hidden rounded-2xl border border-zinc-300 shadow-sm"
      style={{ backgroundColor: bgColor }}
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[470px] border-collapse text-zinc-900">
          <thead>
            <tr className="bg-white/60 text-[11px] font-medium text-zinc-700 md:text-xs">
              <th className="border-b border-r border-zinc-300 px-3 py-2 text-left">
                Kurum
              </th>
              <th className="border-b border-r border-zinc-300 px-3 py-2 text-right">
                {lotBaslik}
              </th>
              <th className="border-b border-r border-zinc-300 px-3 py-2 text-right">
                %
              </th>
              <th className="border-b border-r border-zinc-300 px-3 py-2 text-right">
                Maliyet
              </th>
              <th className="border-b border-zinc-300 px-3 py-2 text-right">
                {sagBaslik}
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((item, index) => {
              const bosMu = !item.kurum;

              return (
                <tr key={`${item.kurum || "bos"}-${index}`}>
                  <td className="border-b border-r border-zinc-300 px-3 py-2 text-left text-[12px] font-semibold md:text-[13px]">
                    {bosMu ? (
                      <span className="block min-h-[20px]" />
                    ) : (
                      <span>{item.kurum}</span>
                    )}
                  </td>
                  <td className="border-b border-r border-zinc-300 px-3 py-2 text-right text-[12px] md:text-[13px]">
                    {item.lot}
                  </td>
                  <td className="border-b border-r border-zinc-300 px-3 py-2 text-right text-[12px] md:text-[13px]">
                    {item.yuzde}
                  </td>
                  <td className="border-b border-r border-zinc-300 px-3 py-2 text-right text-[12px] md:text-[13px]">
                    {item.maliyet}
                  </td>
                  <td className="border-b border-zinc-300 px-3 py-2 text-right text-[12px] md:text-[13px]">
                    {item.sagDeger}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div
        className="border-t border-zinc-300 px-4 py-2 text-xs font-semibold text-zinc-800"
        style={{ backgroundColor: bgColor }}
      >
        {title}
      </div>
    </div>
  );
}

export default function HalkaArzPage() {
  const veri = excelOku();
  const alicilar = aliciListesi(veri);
  const saticilar = saticiListesi(veri);
  const hacimciler = hacimListesi(veri);

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            prefetch={false}
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>
        </div>

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">Halka Arz</h1>

        <div className="mb-8 grid grid-cols-1 gap-3 md:grid-cols-2">
          <Link
            href="/halka-arz/kazanc-hesapla"
            prefetch={false}
            className="rounded-xl border border-blue-200 bg-blue-100 px-4 py-4 text-center text-base font-semibold text-zinc-900 transition hover:bg-blue-200"
          >
            Kazanç Hesapla
          </Link>

          <Link
            href="/halka-arz/talep-hesapla"
            prefetch={false}
            className="rounded-xl border border-purple-200 bg-purple-100 px-4 py-4 text-center text-base font-semibold text-zinc-900 transition hover:bg-purple-200"
          >
            Talep Hesapla
          </Link>
        </div>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Link
            href="/halka-arz/onayli-izahnameler"
            prefetch={false}
            aria-label="Onaylı İzahnameler"
            className="group flex min-h-[240px] flex-col rounded-2xl border border-zinc-200 bg-zinc-50 p-3 transition hover:bg-zinc-100"
          >
            <div className="relative mb-4 overflow-hidden rounded-2xl bg-white">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/onayli-izahnameler.png"
                  alt="Onaylı izahnameler görseli"
                  fill
                  className="object-cover transition duration-300 group-hover:scale-[1.03]"
                />
              </div>
            </div>

            <div className="flex flex-1 items-center justify-center px-2 pb-2 text-center">
              <h2 className="text-2xl font-semibold leading-tight text-zinc-900 md:text-3xl">
                Onaylı İzahnameler
              </h2>
            </div>
          </Link>

          <Link
            href="/halka-arz/taslak-izahnameler"
            prefetch={false}
            aria-label="Taslak İzahnameler"
            className="group flex min-h-[240px] flex-col rounded-2xl border border-zinc-200 bg-zinc-50 p-3 transition hover:bg-zinc-100"
          >
            <div className="relative mb-4 overflow-hidden rounded-2xl bg-white">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/taslak-izahnameler.png"
                  alt="Taslak izahnameler görseli"
                  fill
                  className="object-cover transition duration-300 group-hover:scale-[1.03]"
                />
              </div>
            </div>

            <div className="flex flex-1 items-center justify-center px-2 pb-2 text-center">
              <h2 className="text-2xl font-semibold leading-tight text-zinc-900 md:text-3xl">
                Taslak İzahnameler
              </h2>
            </div>
          </Link>
        </section>

        <section className="mt-8">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 md:p-6">
            <div className="mb-5 text-center">
              <h2 className="text-2xl font-bold text-zinc-900 md:text-3xl">
                EKDMR Güncel Veriler
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1.02fr)_minmax(0,1.18fr)]">
              <div className="flex items-center justify-center overflow-hidden rounded-2xl border border-zinc-200 bg-white p-3 md:p-5">
                <Image
                  src="/ekdmr.jpg"
                  alt="EKDMR halka arz görseli"
                  width={900}
                  height={1200}
                  className="h-auto max-h-[900px] w-auto max-w-full object-contain"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 gap-4">
                <KurumTablosu
                  title="En Çok Alıcı Kurumlar"
                  rows={alicilar}
                  lotBaslik="Net Lot"
                  sagBaslik="Toplam"
                  bgColor="#dcfce7"
                />

                <KurumTablosu
                  title="En Çok Satıcı Kurumlar"
                  rows={saticilar}
                  lotBaslik="Net Lot"
                  sagBaslik="Toplam"
                  bgColor="#fee2e2"
                />

                <KurumTablosu
                  title="En Çok İşlem Yapan Kurumlar"
                  rows={hacimciler}
                  lotBaslik="Toplam Lot"
                  sagBaslik="Net"
                  bgColor="#dbeafe"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SEO Açıklama Bölümü */}
        <section className="mt-12 space-y-8">

          {/* Halka Arz Nedir */}
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 md:p-8">
            <h2 className="mb-4 text-xl font-bold text-zinc-900 md:text-2xl">
              Halka Arz Nedir?
            </h2>
            <p className="text-zinc-700 leading-relaxed">
              Halka arz, bir şirketin hisselerini ilk kez veya ek olarak kamuya açık şekilde satışa sunması işlemidir. Türkiye&apos;de halka arzlar, Sermaye Piyasası Kurulu (SPK) denetiminde gerçekleştirilir ve Borsa İstanbul (BIST) üzerinde işlem görmeye başlar. Yatırımcılar, halka arz sürecinde belirlenen fiyat üzerinden hisse talep ederek şirketin ortağı olabilir. Halka arz yatırımcılara kısa vadede kazanç fırsatı sunabileceği gibi uzun vadeli portföy çeşitlendirmesi için de önemli bir araçtır.
            </p>
          </div>

          {/* Halka Arz Nasıl Takip Edilir */}
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 md:p-8">
            <h2 className="mb-4 text-xl font-bold text-zinc-900 md:text-2xl">
              Halka Arz Takvimi ve Başvuru Süreci
            </h2>
            <p className="mb-4 text-zinc-700 leading-relaxed">
              Halka arz süreci, SPK&apos;ya izahname başvurusuyla başlar. Onaylanan izahname, yatırımcıların şirket hakkında detaylı bilgi edinebileceği resmi belgedir. Talep toplama dönemi boyunca yatırımcılar aracı kurumlar aracılığıyla hisse talebinde bulunabilir. Talep toplama süresi genellikle 2-3 iş günüdür.
            </p>
            <ul className="space-y-2 text-zinc-700">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-blue-500">•</span>
                <span><strong>İzahname İncelemesi:</strong> Onaylı ve taslak izahnameleri inceleyerek şirketin finansal durumunu, risk faktörlerini ve kullanım amaçlarını öğrenin.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-blue-500">•</span>
                <span><strong>Talep Hesaplama:</strong> Talep hesaplama aracımızla kaç lot talep edeceğinizi ve tahmini maliyet tutarınızı önceden hesaplayın.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-blue-500">•</span>
                <span><strong>Kazanç Hesaplama:</strong> Beklenen halka arz primini ve lot başına tahmini kazancınızı kazanç hesaplama aracıyla öğrenin.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-blue-500">•</span>
                <span><strong>Kurum Verilerini Takip Edin:</strong> Aracı kurum alım-satım verilerini analiz ederek piyasa eğilimini değerlendirin.</span>
              </li>
            </ul>
          </div>

          {/* Aracı Kurum Verileri */}
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 md:p-8">
            <h2 className="mb-4 text-xl font-bold text-zinc-900 md:text-2xl">
              Aracı Kurum Verileri Ne Anlama Gelir?
            </h2>
            <p className="mb-4 text-zinc-700 leading-relaxed">
              Halka arz sonrasında aracı kurumların alım-satım verileri, hissenin piyasadaki arz-talep dengesi hakkında önemli ipuçları verir. Bu veriler Borsa İstanbul&apos;un açıkladığı resmi işlem raporlarından derlenmektedir.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                <h3 className="mb-2 font-semibold text-green-800">En Çok Alıcı Kurumlar</h3>
                <p className="text-sm text-zinc-700">
                  Net alım yapan kurumlar, hisseye olan kurumsal talebi gösterir. Güçlü kurumsal alım, hisse için olumlu bir sinyal olarak değerlendirilebilir.
                </p>
              </div>
              <div className="rounded-xl border border-red-200 bg-red-50 p-4">
                <h3 className="mb-2 font-semibold text-red-800">En Çok Satıcı Kurumlar</h3>
                <p className="text-sm text-zinc-700">
                  Net satış yapan kurumlar, piyasaya arz baskısının nereden geldiğini ortaya koyar. Yoğun kurumsal satış, kısa vadeli fiyat baskısına işaret edebilir.
                </p>
              </div>
              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                <h3 className="mb-2 font-semibold text-blue-800">En Çok İşlem Yapan Kurumlar</h3>
                <p className="text-sm text-zinc-700">
                  Toplam işlem hacmine göre sıralanan kurumlar, hissede en aktif olan aracı kurumları gösterir. Yüksek hacimli kurumların pozisyon yönü önem taşır.
                </p>
              </div>
            </div>
          </div>

          {/* Sık Sorulan Sorular */}
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 md:p-8">
            <h2 className="mb-6 text-xl font-bold text-zinc-900 md:text-2xl">
              Sık Sorulan Sorular
            </h2>
            <div className="space-y-5">
              <div className="border-b border-zinc-200 pb-5">
                <h3 className="mb-2 font-semibold text-zinc-900">
                  Halka arza nasıl katılabilirim?
                </h3>
                <p className="text-zinc-700 leading-relaxed text-sm">
                  Halka arza katılmak için bir aracı kurumda yatırım hesabınızın bulunması gerekir. Talep toplama döneminde aracı kurumunuzun mobil uygulaması, internet bankacılığı veya şubesi aracılığıyla talep iletebilirsiniz. Talep başına minimum 1 lot olacak şekilde, halka arz fiyatı üzerinden başvuru yapılır.
                </p>
              </div>
              <div className="border-b border-zinc-200 pb-5">
                <h3 className="mb-2 font-semibold text-zinc-900">
                  İzahname neden önemlidir?
                </h3>
                <p className="text-zinc-700 leading-relaxed text-sm">
                  İzahname, şirketin mali tabloları, faaliyet alanı, risk faktörleri, halka arz gelirlerin kullanım amacı ve yönetim kadrosu hakkında kapsamlı bilgi içerir. Yatırım kararı vermeden önce mutlaka incelenmesi gereken resmi belgedir. Taslak izahname süreç devam ederken yayımlanır; onaylı izahname ise SPK onayından sonra kesinleşmiş haldir.
                </p>
              </div>
              <div className="border-b border-zinc-200 pb-5">
                <h3 className="mb-2 font-semibold text-zinc-900">
                  Halka arz primi nasıl hesaplanır?
                </h3>
                <p className="text-zinc-700 leading-relaxed text-sm">
                  Halka arz primi, hissenin borsada işlem gördüğü ilk gün oluşan fiyatın, halka arz fiyatına oranından hesaplanır. Örneğin halka arz fiyatı 10 TL olan bir hisse ilk gün 15 TL&apos;den işlem görüyorsa prim %50&apos;dir. Kazanç hesaplama aracımızla talebinize göre beklenen kazancı önceden tahmin edebilirsiniz.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-zinc-900">
                  Tüm talep eden yatırımcılar hisse alabilir mi?
                </h3>
                <p className="text-zinc-700 leading-relaxed text-sm">
                  Halka arz talebinin arzı aşması durumunda orantılı dağıtım yapılır. Yani talep edilen lot miktarı tam olarak karşılanmayabilir. Bu nedenle talep hesaplama aracını kullanarak oran düşse bile karlı olabileceğiniz senaryoları değerlendirmeniz önerilir.
                </p>
              </div>
            </div>
          </div>

        </section>
      </div>
    </main>
  );
}