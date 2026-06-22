import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "2026 Halka Arz Tavan Serisi Takibi | Hoca İle Borsa",
  description:
    "2026 yılında halka arz olan şirketlerin işlem tarihi, katılımcı sayısı, dağıtım şekli, arz fiyatı, gün sonu kapanış fiyatı, marjı ve konsorsiyum bilgileri.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/halka-arz/tavan-serisi",
  },
};

const halkaArzVerileri = [
  {
    hisse: "EKDMR",
    islemTarihi: "22.05.2026",
    katilimciSayisi: "796,542",
    dagitimSekli: "BİREYSEL %40",
    arzFiyati: "45.00",
    guncelFiyat: "59.00",
    marj: "31%",
    konsorsiyum: "A1 CAPITAL",
  },
  {
    hisse: "AAGYO",
    islemTarihi: "09.04.2026",
    katilimciSayisi: "917,413",
    dagitimSekli: "BİREYSELE %63",
    arzFiyati: "21.10",
    guncelFiyat: "16.90",
    marj: "-20%",
    konsorsiyum: "VAKIF-INFO",
  },
  {
    hisse: "MCARD",
    islemTarihi: "11.03.2026",
    katilimciSayisi: "965,336",
    dagitimSekli: "BİREYSEL %48",
    arzFiyati: "80.00",
    guncelFiyat: "181.90",
    marj: "127%",
    konsorsiyum: "TERA",
  },
  {
    hisse: "LXGYO",
    islemTarihi: "10.03.2026",
    katilimciSayisi: "890,173",
    dagitimSekli: "BİREYSELE %40",
    arzFiyati: "12.05",
    guncelFiyat: "16.80",
    marj: "39%",
    konsorsiyum: "TERA",
  },
  {
    hisse: "GENKM",
    islemTarihi: "06.03.2026",
    katilimciSayisi: "805,312",
    dagitimSekli: "TAMAMEN EŞİT",
    arzFiyati: "11.00",
    guncelFiyat: "15.78",
    marj: "43%",
    konsorsiyum: "DENİZ",
  },
  {
    hisse: "SVGYO",
    islemTarihi: "06.03.2026",
    katilimciSayisi: "701,429",
    dagitimSekli: "BİREYSEL %40",
    arzFiyati: "3.64",
    guncelFiyat: "21.26",
    marj: "484%",
    konsorsiyum: "TERA",
  },
  {
    hisse: "EMPAE",
    islemTarihi: "26.02.2026",
    katilimciSayisi: "1,134,537",
    dagitimSekli: "BİREYSELE %60",
    arzFiyati: "22.00",
    guncelFiyat: "95.50",
    marj: "334%",
    konsorsiyum: "HALK",
  },
  {
    hisse: "ATATR",
    islemTarihi: "19.02.2026",
    katilimciSayisi: "627,142",
    dagitimSekli: "BİREYSEL %40",
    arzFiyati: "11.20",
    guncelFiyat: "17.18",
    marj: "53%",
    konsorsiyum: "TERA",
  },
  {
    hisse: "BESTE",
    islemTarihi: "11.02.2026",
    katilimciSayisi: "796,578",
    dagitimSekli: "TAMAMEN EŞİT",
    arzFiyati: "14.70",
    guncelFiyat: "37.80",
    marj: "157%",
    konsorsiyum: "GLOBAL",
  },
  {
    hisse: "AKHAN",
    islemTarihi: "06.02.2026",
    katilimciSayisi: "959,375",
    dagitimSekli: "BİREYSELE %60",
    arzFiyati: "21.50",
    guncelFiyat: "33.10",
    marj: "54%",
    konsorsiyum: "HALK",
  },
  {
    hisse: "NETCD",
    islemTarihi: "05.02.2026",
    katilimciSayisi: "994,998",
    dagitimSekli: "BİREYSEL %60",
    arzFiyati: "46.00",
    guncelFiyat: "163.20",
    marj: "255%",
    konsorsiyum: "INFO",
  },
  {
    hisse: "UCAYM",
    islemTarihi: "22.01.2026",
    katilimciSayisi: "796,720",
    dagitimSekli: "BİREYSELE %70",
    arzFiyati: "18.00",
    guncelFiyat: "36.12",
    marj: "101%",
    konsorsiyum: "KUVEYT TÜRK",
  },
  {
    hisse: "ZGYO",
    islemTarihi: "16.01.2026",
    katilimciSayisi: "431,380",
    dagitimSekli: "BİREYSEL %50",
    arzFiyati: "9.77",
    guncelFiyat: "41.08",
    marj: "320%",
    konsorsiyum: "VAKIF",
  },
  {
    hisse: "FRMPL",
    islemTarihi: "15.01.2026",
    katilimciSayisi: "688,564",
    dagitimSekli: "BİREYSEL %65",
    arzFiyati: "30.24",
    guncelFiyat: "40.94",
    marj: "35%",
    konsorsiyum: "İNTEGRAL-ZİRAAT",
  },
  {
    hisse: "MEYSU",
    islemTarihi: "13.01.2026",
    katilimciSayisi: "648,003",
    dagitimSekli: "BİREYSEL %45",
    arzFiyati: "7.50",
    guncelFiyat: "15.05",
    marj: "101%",
    konsorsiyum: "ALNUS",
  },
  {
    hisse: "ARFYE",
    islemTarihi: "05.01.2026",
    katilimciSayisi: "508,401",
    dagitimSekli: "BİREYSEL %50",
    arzFiyati: "19.50",
    guncelFiyat: "29.38",
    marj: "51%",
    konsorsiyum: "A1 CAPITAL-BULLS",
  },
];

function marjRengi(marj: string) {
  const sayi = Number(
    marj.replace("%", "").replace("+", "").replace(",", ".").trim()
  );

  return sayi < 0 ? "bg-red-500" : "bg-green-500";
}

export default function HalkaArzTavanSerisiPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <div className="mx-auto max-w-7xl">
        <nav
          className="mb-5 flex items-center gap-2 text-sm text-slate-500"
          aria-label="Breadcrumb"
        >
          <Link href="/" prefetch={false} className="transition hover:text-blue-600">
            Ana Sayfa
          </Link>
          <span className="text-slate-300">/</span>
          <Link
            href="/halka-arz"
            prefetch={false}
            className="transition hover:text-blue-600"
          >
            Halka Arz
          </Link>
          <span className="text-slate-300">/</span>
          <span className="font-medium text-slate-700">Tavan Serisi</span>
        </nav>

        <section className="mb-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-bold text-slate-950 md:text-3xl">
            2026 Halka Arz Tavan Serisi Takibi
          </h1>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600">
            2026 yılında halka arz olan şirketlerin işlem tarihi, katılımcı sayısı,
            dağıtım şekli, arz fiyatı, gün sonu kapanış fiyatı, halka arzdan bugüne marjı ve
            konsorsiyum bilgileri aşağıdaki tabloda yer almaktadır.
          </p>

          <div className="mt-5 rounded-2xl border border-blue-200 bg-blue-50 p-4 text-sm font-medium leading-7 text-blue-900">
            Bu sayfadaki kapanış fiyatları ve marj oranları gün içerisinde anlık olarak
            güncellenmez. Veriler, Borsa İstanbul seans kapanışı sonrasında gün sonu
            kapanış rakamlarına göre güncellenmektedir.
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-3 shadow-sm md:p-5">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xl font-bold text-slate-900">
              Halka Arz Performans Tablosu
            </h2>
            <div className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
              2026 Yılı Halka Arzları
            </div>
          </div>

          <div className="mb-4 rounded-2xl border border-sky-200 bg-sky-50 px-4 py-3 text-xs font-semibold leading-6 text-sky-900 md:text-sm">
            Tablodaki “Güncel Fiyat” alanı, gün içi anlık fiyatı değil; gün sonunda
            güncellenen kapanış fiyatını ifade eder.
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-300">
            <table className="min-w-[980px] w-full border-collapse text-center text-xs font-bold md:text-sm">
              <thead>
                <tr>
                  <th className="border border-slate-800 bg-yellow-300 px-2 py-3 text-red-700">
                    HİSSE
                  </th>
                  <th className="border border-slate-800 bg-yellow-300 px-2 py-3 text-red-700">
                    İŞLEM TARİHİ
                  </th>
                  <th className="border border-slate-800 bg-yellow-300 px-2 py-3 text-red-700">
                    KATILIMCI SAYISI
                  </th>
                  <th className="border border-slate-800 bg-yellow-300 px-2 py-3 text-red-700">
                    DAĞITIM ŞEKLİ
                  </th>
                  <th className="border border-slate-800 bg-yellow-300 px-2 py-3 text-red-700">
                    ARZ FİYATI
                  </th>
                  <th className="border border-slate-800 bg-yellow-300 px-2 py-3 text-red-700">
                    GÜN SONU KAPANIŞ FİYATI
                  </th>
                  <th className="border border-slate-800 bg-yellow-300 px-2 py-3 text-red-700">
                    MARJ
                  </th>
                  <th className="border border-slate-800 bg-slate-700 px-2 py-3 text-white">
                    KONSORSİYUM
                  </th>
                </tr>
              </thead>

              <tbody>
                {halkaArzVerileri.map((item) => (
                  <tr key={item.hisse}>
                    <td className="border border-slate-800 bg-yellow-300 px-2 py-2 text-slate-950">
                      {item.hisse}
                    </td>
                    <td className="border border-slate-800 bg-yellow-100 px-2 py-2 text-slate-950">
                      {item.islemTarihi}
                    </td>
                    <td className="border border-slate-800 bg-lime-100 px-2 py-2 text-slate-950">
                      {item.katilimciSayisi}
                    </td>
                    <td className="border border-slate-800 bg-red-300 px-2 py-2 text-slate-950">
                      {item.dagitimSekli}
                    </td>
                    <td className="border border-slate-800 bg-blue-100 px-2 py-2 text-slate-950">
                      {item.arzFiyati}
                    </td>
                    <td className="border border-slate-800 bg-blue-100 px-2 py-2 text-slate-950">
                      {item.guncelFiyat}
                    </td>
                    <td
                      className={`border border-slate-800 px-2 py-2 text-slate-950 ${marjRengi(
                        item.marj
                      )}`}
                    >
                      {item.marj}
                    </td>
                    <td className="border border-slate-800 bg-emerald-100 px-2 py-2 text-slate-950">
                      {item.konsorsiyum}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs leading-6 text-slate-500">
            Gün sonu kapanış fiyatı ve marj bilgileri piyasa hareketlerine göre değişebilir.
            Bu tablo gün içinde anlık veri sunmaz; kapanış rakamları gün sonunda güncellenir.
            Bu tablo bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
          </p>
        </section>
      </div>
    </main>
  );
}