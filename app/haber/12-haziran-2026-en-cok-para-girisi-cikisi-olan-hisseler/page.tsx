import type { Metadata } from "next";
import HaberAltKisim from "@/components/HaberAltKisim";

export const metadata: Metadata = {
  title: "12 Haziran 2026 En Çok Para Girişi ve Çıkışı Olan Hisseler | Hoca İle Borsa",
  description:
    "12 Haziran 2026 tarihinde Borsa İstanbul’da en çok para girişi ve para çıkışı olan hisseler, fiyat değişimleri ve günlük para akışı tablosu.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/12-haziran-2026-en-cok-para-girisi-cikisi-olan-hisseler",
  },
};

const paraGirisi = [
  { hisse: "TERA", tutar: "572.039.622", fiyat: "217.50", degisim: "-3.12%" },
  { hisse: "AKBNK", tutar: "482.624.958", fiyat: "72.60", degisim: "8.68%" },
  { hisse: "YKBNK", tutar: "325.448.338", fiyat: "38.10", degisim: "8.79%" },
  { hisse: "THYAO", tutar: "316.713.195", fiyat: "307.75", degisim: "4.94%" },
  { hisse: "TTKOM", tutar: "164.782.855", fiyat: "64.10", degisim: "3.89%" },
  { hisse: "GARAN", tutar: "156.376.383", fiyat: "135.90", degisim: "5.35%" },
  { hisse: "SAHOL", tutar: "125.709.359", fiyat: "95.95", degisim: "4.75%" },
  { hisse: "EREGL", tutar: "109.113.900", fiyat: "39.36", degisim: "2.50%" },
  { hisse: "ISCTR", tutar: "104.607.969", fiyat: "14.31", degisim: "4.15%" },
  { hisse: "TEHOL", tutar: "91.793.706", fiyat: "32.40", degisim: "-1.82%" },
  { hisse: "KCHOL", tutar: "72.006.867", fiyat: "187.50", degisim: "1.79%" },
  { hisse: "SISE", tutar: "58.403.654", fiyat: "44.76", degisim: "2.52%" },
  { hisse: "KRDMD", tutar: "55.875.902", fiyat: "39.34", degisim: "2.02%" },
  { hisse: "TAVHL", tutar: "55.132.041", fiyat: "275.00", degisim: "6.18%" },
  { hisse: "EKGYO", tutar: "54.674.771", fiyat: "19.91", degisim: "3.91%" },
  { hisse: "TCELL", tutar: "52.723.669", fiyat: "110.70", degisim: "2.98%" },
];

const paraCikisi = [
  { hisse: "ASTOR", tutar: "-371.201.615", fiyat: "263.50", degisim: "-10.00%" },
  { hisse: "BIMAS", tutar: "-103.247.544", fiyat: "380.00", degisim: "-0.13%" },
  { hisse: "PETKM", tutar: "-72.472.087", fiyat: "19.39", degisim: "-1.62%" },
  { hisse: "DOFRB", tutar: "-40.210.903", fiyat: "153.70", degisim: "-5.65%" },
  { hisse: "ULKER", tutar: "-40.197.652", fiyat: "113.20", degisim: "1.89%" },
  { hisse: "MAGEN", tutar: "-37.751.208", fiyat: "33.90", degisim: "1.50%" },
  { hisse: "TUPRS", tutar: "-30.974.359", fiyat: "233.80", degisim: "-0.93%" },
  { hisse: "GUBRF", tutar: "-30.781.800", fiyat: "478.75", degisim: "2.13%" },
  { hisse: "HALKB", tutar: "-28.224.969", fiyat: "45.56", degisim: "0.71%" },
  { hisse: "KTLEV", tutar: "-28.176.055", fiyat: "172.40", degisim: "3.23%" },
  { hisse: "NETCD", tutar: "-28.116.286", fiyat: "161.10", degisim: "-3.76%" },
  { hisse: "DAPGM", tutar: "-27.054.682", fiyat: "10.66", degisim: "-3.09%" },
  { hisse: "GLRMK", tutar: "-26.471.377", fiyat: "169.00", degisim: "1.20%" },
  { hisse: "RALYH", tutar: "-26.124.194", fiyat: "211.50", degisim: "-7.84%" },
  { hisse: "FROTO", tutar: "-23.441.086", fiyat: "86.70", degisim: "0.17%" },
  { hisse: "GENIL", tutar: "-23.245.493", fiyat: "7.82", degisim: "-3.69%" },
];

function degisimRengi(degisim: string) {
  return degisim.trim().startsWith("-") ? "text-red-700" : "text-green-700";
}

function Tablo({
  baslik,
  veriler,
  tip,
}: {
  baslik: string;
  veriler: typeof paraGirisi;
  tip: "giris" | "cikis";
}) {
  return (
    <section className="mx-auto w-full min-w-0 max-w-[560px] rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
      <h2 className="mb-4 text-xl font-bold text-slate-900 md:text-2xl">
        {baslik}
      </h2>

      <div className="overflow-x-auto rounded-2xl border border-slate-200">
        <table className="w-full min-w-[360px] border-collapse text-[11px] sm:text-xs md:text-sm">
          <thead>
            <tr className="bg-slate-100 text-slate-700">
              <th className="w-8 border-b border-slate-200 px-1.5 py-2.5 text-left">#</th>
              <th className="w-20 border-b border-slate-200 px-1.5 py-2.5 text-left">Hisse</th>
              <th className="border-b border-slate-200 px-1.5 py-2.5 text-right whitespace-nowrap">
                Para {tip === "giris" ? "Girişi" : "Çıkışı"}
              </th>
              <th className="border-b border-slate-200 px-1.5 py-2.5 text-right whitespace-nowrap">Fiyat</th>
              <th className="border-b border-slate-200 px-1.5 py-2.5 text-right whitespace-nowrap">
                Değişim
              </th>
            </tr>
          </thead>

          <tbody>
            {veriler.map((item, index) => (
              <tr key={item.hisse} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                <td className="w-8 border-b border-slate-100 px-1.5 py-2 font-semibold">
                  {index + 1}
                </td>
                <td className="w-20 border-b border-slate-100 px-1.5 py-2 font-bold text-slate-950">
                  {item.hisse}
                </td>
                <td
                  className={`border-b border-slate-100 px-1.5 py-2 text-right font-bold whitespace-nowrap ${
                    tip === "giris" ? "text-green-700" : "text-red-700"
                  }`}
                >
                  {item.tutar}
                </td>
                <td className="border-b border-slate-100 px-1.5 py-2 text-right font-semibold whitespace-nowrap">
                  {item.fiyat}
                </td>
                <td
                  className={`border-b border-slate-100 px-1.5 py-2 text-right font-bold whitespace-nowrap ${degisimRengi(
                    item.degisim
                  )}`}
                >
                  {item.degisim}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function EnCokParaGirisiCikisiPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <div className="mx-auto max-w-7xl">
        <section className="mb-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-bold text-slate-950 md:text-3xl">
            12 Haziran 2026 En Çok Para Girişi ve Para Çıkışı Olan Hisseler
          </h1>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600">
            12 Haziran 2026 tarihinde Borsa İstanbul’da gün içinde en çok para girişi ve para çıkışı görülen
            hisseler aşağıdaki tablolarda listelenmiştir. Hisse kodu 5 karakterden uzun
            olan semboller listeye dahil edilmemiştir.
          </p>
        </section>

        <div className="grid justify-center gap-6 xl:grid-cols-2">
          <Tablo baslik="En Çok Para Girişi Olan Hisseler" veriler={paraGirisi} tip="giris" />
          <Tablo baslik="En Çok Para Çıkışı Olan Hisseler" veriler={paraCikisi} tip="cikis" />
        </div>

        <section className="mt-8 grid gap-4 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-bold text-slate-900">
              Para Girişi Nedir?
            </h2>
            <p className="text-sm leading-7 text-slate-600">
              Para girişi, ilgili hissede alım tarafının satış tarafına göre daha güçlü
              göründüğü durumları takip etmek için kullanılan piyasa verilerinden biridir.
              12 Haziran 2026 tarihinde en çok para girişi olan hisseler, yatırımcıların
              gün içinde yoğun ilgi gösterdiği sembolleri öne çıkarır.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-bold text-slate-900">
              Para Çıkışı Nedir?
            </h2>
            <p className="text-sm leading-7 text-slate-600">
              Para çıkışı, ilgili hissede satış baskısının daha belirgin olduğu
              durumları gösterir. En çok para çıkışı olan hisseler tablosu; gün içinde
              yatırımcıların satış yönlü işlem yaptığı, zayıf kalan veya kâr satışı
              görülen hisseleri takip etmek için kullanılabilir.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-bold text-slate-900">
              Bu Tablo Nasıl Kullanılmalı?
            </h2>
            <p className="text-sm leading-7 text-slate-600">
              Para girişi ve para çıkışı verileri tek başına kesin yön göstermez. Bu
              veriler; fiyat değişimi, işlem hacmi, teknik görünüm, KAP haberleri ve
              genel piyasa koşullarıyla birlikte değerlendirilmelidir.
            </p>
          </div>
        </section>

        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-slate-900">
            12 Haziran 2026 Borsa İstanbul Para Akışı Özeti
          </h2>
          <p className="mb-4 text-sm leading-7 text-slate-600">
            12 Haziran 2026 seansında Borsa İstanbul’da en çok para girişi olan hisseler
            arasında TERA, AKBNK, YKBNK, THYAO ve TTKOM öne çıktı. Para çıkışı tarafında
            ise ASTOR, BIMAS, PETKM, DOFRB ve ULKER ilk sıralarda yer aldı. Bu sayfa,
            günün para akışı görünümünü hızlı şekilde takip etmek isteyen yatırımcılar
            için hazırlanmıştır.
          </p>
          <p className="text-sm leading-7 text-slate-600">
            Tablolarda hisse kodu 5 karakterden uzun olan semboller liste dışı
            bırakılmıştır. Böylece Borsa İstanbul’da daha sade, okunabilir ve takip
            edilebilir bir para girişi-çıkışı görünümü sunulmuştur.
          </p>
        </section>

        <section className="mt-6 rounded-3xl border border-amber-200 bg-amber-50 p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold text-amber-950">
            Önemli Uyarı
          </h2>
          <p className="text-sm leading-7 text-amber-900">
            Bu sayfada yer alan para girişi ve para çıkışı verileri bilgilendirme
            amaçlıdır. Veriler yatırım tavsiyesi değildir. Alım-satım kararı vermeden
            önce şirket haberleri, bilanço verileri, teknik seviyeler ve genel piyasa
            koşulları ayrıca değerlendirilmelidir.
          </p>
        </section>
        <HaberAltKisim href="/haber/12-haziran-2026-en-cok-para-girisi-cikisi-olan-hisseler" />
      </div>
    </main>
  );
}