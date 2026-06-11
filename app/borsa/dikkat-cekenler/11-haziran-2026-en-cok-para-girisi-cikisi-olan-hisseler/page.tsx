import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "11 Haziran 2026 En Çok Para Girişi ve Çıkışı Olan Hisseler | Hoca İle Borsa",
  description:
    "11 Haziran 2026 tarihinde Borsa İstanbul’da en çok para girişi ve para çıkışı olan hisseler, fiyat değişimleri ve günlük para akışı tablosu.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/borsa/dikkat-cekenler/11-haziran-2026-en-cok-para-girisi-cikisi-olan-hisseler",
  },
};

const paraGirisi = [
  { hisse: "SASA", tutar: "278.576.331", fiyat: "2.63", degisim: "5.20%" },
  { hisse: "TERA", tutar: "153.928.575", fiyat: "224.50", degisim: "10.00%" },
  { hisse: "TCELL", tutar: "121.604.673", fiyat: "107.50", degisim: "2.77%" },
  { hisse: "GARAN", tutar: "73.428.218", fiyat: "129.00", degisim: "0.62%" },
  { hisse: "ASTOR", tutar: "67.057.295", fiyat: "295.00", degisim: "3.51%" },
  { hisse: "EREGL", tutar: "63.148.067", fiyat: "38.40", degisim: "-0.62%" },
  { hisse: "TEHOL", tutar: "53.128.066", fiyat: "33.00", degisim: "4.76%" },
  { hisse: "KRDMD", tutar: "46.688.819", fiyat: "38.56", degisim: "1.26%" },
  { hisse: "PEKGY", tutar: "43.040.950", fiyat: "12.74", degisim: "4.86%" },
  { hisse: "DSTKF", tutar: "42.343.888", fiyat: "2.600.00", degisim: "0.00%" },
  { hisse: "SAHOL", tutar: "41.315.331", fiyat: "91.60", degisim: "0.49%" },
  { hisse: "TUPRS", tutar: "37.065.766", fiyat: "236.00", degisim: "0.51%" },
  { hisse: "FROTO", tutar: "31.557.066", fiyat: "66.55", degisim: "-1.03%" },
  { hisse: "PASEU", tutar: "31.477.542", fiyat: "116.50", degisim: "-0.43%" },
  { hisse: "DOAS", tutar: "27.394.406", fiyat: "205.40", degisim: "2.24%" },
];

const paraCikisi = [
  { hisse: "BIMAS", tutar: "-103.195.774", fiyat: "380.50", degisim: "0.00%" },
  { hisse: "NETCD", tutar: "-84.337.147", fiyat: "167.40", degisim: "-10.00%" },
  { hisse: "THYAO", tutar: "-79.655.663", fiyat: "293.25", degisim: "-0.76%" },
  { hisse: "RALYH", tutar: "-52.334.398", fiyat: "229.50", degisim: "-10.00%" },
  { hisse: "DAPGM", tutar: "-51.347.985", fiyat: "11.00", degisim: "-3.85%" },
  { hisse: "ULKER", tutar: "-48.478.859", fiyat: "111.10", degisim: "-2.97%" },
  { hisse: "ISCTR", tutar: "-36.159.730", fiyat: "13.74", degisim: "0.07%" },
  { hisse: "HALKB", tutar: "-33.633.776", fiyat: "45.24", degisim: "0.00%" },
  { hisse: "CVKMD", tutar: "-33.488.557", fiyat: "39.46", degisim: "-3.99%" },
  { hisse: "EKDMR", tutar: "-31.642.836", fiyat: "67.10", degisim: "4.84%" },
  { hisse: "TOASO", tutar: "-31.188.637", fiyat: "283.00", degisim: "-2.41%" },
  { hisse: "EUPWR", tutar: "-29.646.730", fiyat: "95.35", degisim: "-1.29%" },
  { hisse: "ATATP", tutar: "-29.034.016", fiyat: "18.65", degisim: "-3.72%" },
  { hisse: "TRALT", tutar: "-28.797.618", fiyat: "42.58", degisim: "-0.98%" },
  { hisse: "ASELS", tutar: "-24.475.248", fiyat: "377.75", degisim: "0.27%" },
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
    <section className="mx-auto w-full max-w-[560px] rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
      <h2 className="mb-4 text-xl font-bold text-slate-900 md:text-2xl">
        {baslik}
      </h2>

      <div className="rounded-2xl border border-slate-200">
        <table className="w-full border-collapse text-[11px] sm:text-xs md:text-sm">
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
        <nav className="mb-5 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" prefetch={false} className="transition hover:text-blue-600">
            Ana Sayfa
          </Link>
          <span className="text-slate-300">/</span>
          <Link
            href="/borsa/dikkat-cekenler"
            prefetch={false}
            className="transition hover:text-blue-600"
          >
            Dikkat Çekenler
          </Link>
          <span className="text-slate-300">/</span>
          <span className="font-medium text-slate-700">11 Haziran 2026 Para Girişi Çıkışı</span>
        </nav>

        <section className="mb-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-bold text-slate-950 md:text-3xl">
            11 Haziran 2026 En Çok Para Girişi ve Para Çıkışı Olan Hisseler
          </h1>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600">
            11 Haziran 2026 tarihinde Borsa İstanbul’da gün içinde en çok para girişi ve para çıkışı görülen
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
              11 Haziran 2026 tarihinde en çok para girişi olan hisseler, yatırımcıların
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
            11 Haziran 2026 Borsa İstanbul Para Akışı Özeti
          </h2>
          <p className="mb-4 text-sm leading-7 text-slate-600">
            11 Haziran 2026 seansında Borsa İstanbul’da en çok para girişi olan hisseler
            arasında SASA, TERA, TCELL, GARAN ve ASTOR öne çıktı. Para çıkışı tarafında
            ise BIMAS, NETCD, THYAO, RALYH ve DAPGM ilk sıralarda yer aldı. Bu sayfa,
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
      </div>
    </main>
  );
}
