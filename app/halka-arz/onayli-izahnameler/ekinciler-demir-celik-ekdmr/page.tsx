import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import HalkaArzSSS from "@/components/HalkaArzSSS";

export const metadata: Metadata = {
  title:
    "Ekinciler Demir ve Çelik Sanayi A.Ş. Halka Arz Detayları 2026 | EKDMR Onaylı İzahname",
  description:
    "Ekinciler Demir ve Çelik Sanayi A.Ş. EKDMR onaylı izahname bilgileri, talep toplama tarihleri, halka arz fiyatı, lot dağılımı, finansal görünüm, çarpan analizi ve tahmini lot tablosu.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/halka-arz/onayli-izahnameler/ekinciler-demir-celik-ekdmr",
  },
};

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <h2 className="mb-5 text-lg font-bold text-slate-900 sm:text-xl">{title}</h2>
      {children}
    </section>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="text-sm font-medium text-slate-500">{label}</div>
      <div className="mt-2 whitespace-pre-line text-base font-bold text-slate-900">
        {value}
      </div>
    </div>
  );
}

export default function EkincilerDemirVeCelikSanayiASPage() {
  const temelBilgiler = [
    { label: "İşlem Kodu", value: "EKDMR" },
    { label: "Talep Toplama Tarihi", value: "13-14-15 Mayıs 2026" },
    { label: "Talep Saati", value: "09.00 - 17.00" },
    { label: "Halka Arz Fiyatı", value: "45,00 TL" },
    { label: "İskonto Oranı", value: "%37,72" },
    { label: "Katılım Endeksi", value: "BIST Katılım Endeksi’ne Uygun Değil" },
    { label: "Pazar", value: "Yıldız Pazar" },
    { label: "Aracı Kurum", value: "A1 Capital Yatırım Menkul Değerler A.Ş." },
    { label: "T1 - T2", value: "Kullanılamaz" },
  ];

  const tahsisat = [
    {
      grup: "Yurt İçi Bireysel Yatırımcılar",
      oran: "%40",
      lot: "20.800.000 Lot",
      detay: "10.000 lot ve altı başvurular için bireysele eşit dağıtım",
    },
    {
      grup: "Yüksek Başvurulu Yatırımcı",
      oran: "%10",
      lot: "5.200.000 Lot",
      detay: "10.001 lot ve üzeri başvurular için oransal dağıtım",
    },
    {
      grup: "Yurt İçi Kurumsal Yatırımcılar",
      oran: "%30",
      lot: "15.600.000 Lot",
      detay: "Kurumsal yatırımcı grubu",
    },
    {
      grup: "Yurt Dışı Kurumsal Yatırımcılar",
      oran: "%20",
      lot: "10.400.000 Lot",
      detay: "Yurt dışı kurumsal yatırımcı grubu",
    },
  ];

  const lotOzeti = [
    { label: "Sermaye Artırımı", value: "40.000.000 Lot" },
    { label: "Ortak Satışı", value: "12.000.000 Lot" },
    { label: "Toplam Dağıtılacak Lot", value: "52.000.000 Lot" },
    { label: "Halka Açıklık Oranı", value: "%16,25" },
    { label: "Arz Büyüklüğü", value: "2.340.000.000 TL" },
  ];

  const fonKullanim = [
    {
      oran: "%40",
      alan: "Hammadde tedariki ve işletme sermayesi ihtiyacının finansmanı",
    },
    {
      oran: "%25",
      alan: "Yenilenebilir enerji yatırımları",
    },
    {
      oran: "%25",
      alan:
        "Yeşil Çelik Haddehane modernizasyonu ve mevcut üretim tesislerinde kapasite artışı yatırımları",
    },
    {
      oran: "%10",
      alan: "Kütük kaynatma sistemi yatırımı",
    },
  ];

  const finansalVeriler = [
    {
      kalem: "Dönen Varlıklar",
      d2023: "2,3 Milyar TL",
      d2024: "4,3 Milyar TL",
      d2025: "5 Milyar TL",
    },
    {
      kalem: "Duran Varlıklar",
      d2023: "10 Milyar TL",
      d2024: "12 Milyar TL",
      d2025: "16 Milyar TL",
    },
    {
      kalem: "Toplam Varlıklar",
      d2023: "12 Milyar TL",
      d2024: "16 Milyar TL",
      d2025: "21 Milyar TL",
    },
    {
      kalem: "Kısa Vadeli Yükümlülükler",
      d2023: "2,7 Milyar TL",
      d2024: "4,6 Milyar TL",
      d2025: "5,2 Milyar TL",
    },
    {
      kalem: "Uzun Vadeli Yükümlülükler",
      d2023: "475 Milyon TL",
      d2024: "911 Milyon TL",
      d2025: "1,5 Milyar TL",
    },
    {
      kalem: "Özkaynaklar",
      d2023: "9 Milyar TL",
      d2024: "11 Milyar TL",
      d2025: "14 Milyar TL",
    },
    {
      kalem: "Hasılat",
      d2023: "11 Milyar TL",
      d2024: "16 Milyar TL",
      d2025: "20 Milyar TL",
    },
    {
      kalem: "Esas Faaliyet Kârı",
      d2023: "416 Milyon TL",
      d2024: "873 Milyon TL",
      d2025: "810 Milyon TL",
    },
    {
      kalem: "Dönem Kârı",
      d2023: "272 Milyon TL",
      d2024: "621 Milyon TL",
      d2025: "446 Milyon TL",
    },
  ];

  const carpanlar = [
    {
      carpan: "PD / Hasılat",
      d2023: "1,31",
      d2024: "0,90",
      d2025: "0,72x",
    },
    {
      carpan: "F/K",
      d2023: "52,9",
      d2024: "23,2",
      d2025: "32,3",
    },
    {
      carpan: "PD / Defter Değeri",
      d2023: "1,60",
      d2024: "1,31",
      d2025: "1,03",
    },
    {
      carpan: "PD / Esas Faaliyet Kârı",
      d2023: "34,6",
      d2024: "16,5",
      d2025: "17,8",
    },
  ];

  const tahminiLot = [
    { katilimci: "700.000", lot: "30 Lot", tutar: "1.350 TL" },
    { katilimci: "800.000", lot: "26 Lot", tutar: "1.170 TL" },
    { katilimci: "900.000", lot: "23 Lot", tutar: "1.035 TL" },
    { katilimci: "1.000.000", lot: "21 Lot", tutar: "945 TL" },
  ];

  const sssSorulari = [
    {
      soru: "Ekinciler Demir Çelik (EKDMR) halka arzı kaç lot verir?",
      cevap:
        "Yurt içi bireysel yatırımcılarda (10.000 lot ve altı başvurular) bireysele eşit dağıtım uygulanacağından kesin lot, başvuran yatırımcı sayısına göre belli olacaktır. Bireysele ayrılan tahsisat 20.800.000 lottur (toplam payın %40'ı). Kesin dağıtım sonuçları açıklandığında bu alan güncellenecektir.",
    },
    {
      soru: "EKDMR halka arzı katılım endeksine uygun mu?",
      cevap:
        "Hayır. Onaylı izahnameye göre Ekinciler Demir ve Çelik (EKDMR) payları BIST Katılım Endeksi'ne uygun değildir.",
    },
    {
      soru: "Ekinciler halka arzı hangi bankalarda / aracı kurumlarda var?",
      cevap:
        "Halka arza aracılık eden kurum A1 Capital Yatırım Menkul Değerler A.Ş.'dir. A1 Capital liderliğindeki konsorsiyumda Garanti, Yapı Kredi, İş Yatırım, QNB, TEB, Halk, Vakıf, Ak Yatırım, Deniz, ING, Kuveyt ve Ziraat Yatırım dahil çok sayıda aracı kurum yer almaktadır.",
    },
    {
      soru: "Ekinciler halka arzı ne zaman işlem görecek?",
      cevap:
        "Talep toplama 13-14-15 Mayıs 2026 tarihlerinde yapılacaktır. Borsada işlem görmeye başlama tarihi, dağıtım ve takas işlemleri tamamlandıktan sonra Borsa İstanbul tarafından açıklanacak; kesin tarih belli olduğunda bu alan güncellenecektir.",
    },
    {
      soru: "Ekinciler halka arz fonu nerede kullanılacak?",
      cevap:
        "Halka arz gelirinin %40'ı hammadde tedariki ve işletme sermayesinde, %25'i yenilenebilir enerji yatırımlarında, %25'i Yeşil Çelik Haddehane modernizasyonu ve kapasite artışında, %10'u ise kütük kaynatma sistemi yatırımında kullanılacaktır.",
    },
    {
      soru: "Ekinciler halka arzı eşit dağıtım mı, oransal dağıtım mı?",
      cevap:
        "İkisi birlikte uygulanır: Yurt içi bireysel yatırımcı grubunda (10.000 lot ve altı) bireysele eşit dağıtım, yüksek başvurulu yatırımcı grubunda (10.001 lot ve üzeri) oransal dağıtım yapılacaktır.",
    },
  ];

  const konsorsiyum =
    "A1 Capital Yatırım liderliğinde; Acar, Ahlatcı, Ak Yatırım, Alnus, Alternatif, Ata, Bizim, BTC Türk, Bulls, Burgan, Colendi, Deniz, Destek, Dinamik, Fiba, Garanti, Gedik, Global, Halk, ICBC, ING, Investaz, İnfo, Integral, İş Yatırım, Kuveyt, Marbaş, Meksa, Osmanlı, Oyak, PhillipCapital, Piramit, Pusula, QNB, Şeker, Tacirler, TEB, Tera, Trive, Turkish, Ünlü, Vakıf, Yapı Kredi, Yatırım Finansman ve Ziraat Yatırım yer almaktadır.";

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/halka-arz/onayli-izahnameler"
            className="inline-flex items-center rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <section className="mb-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-3 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
            Onaylı İzahname
          </div>

          <h1 className="text-2xl font-bold text-slate-950 sm:text-3xl">
            Ekinciler Demir ve Çelik Sanayi A.Ş.
          </h1>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
            EKDMR halka arzına ait temel bilgiler, tahsisat dağılımı, finansal görünüm,
            çarpan analizi ve tahmini lot tablosu aşağıda sade ve kolay anlaşılır şekilde
            yer almaktadır.
          </p>
        </section>

        <div className="space-y-8">
          <Section title="Temel Bilgiler">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {temelBilgiler.map((item) => (
                <InfoCard key={item.label} label={item.label} value={item.value} />
              ))}
            </div>
          </Section>

          <Section title="Tahsisat ve Lot Dağılımı">
            <div className="grid gap-4 md:grid-cols-2">
              {tahsisat.map((item) => (
                <div
                  key={item.grup}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm font-bold text-slate-900">{item.grup}</div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{item.detay}</p>
                    </div>
                    <div className="shrink-0 text-right">
                      <div className="text-sm font-bold text-blue-700">{item.oran}</div>
                      <div className="mt-1 text-sm font-bold text-slate-900">{item.lot}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-amber-900">
              Bireysel yatırımcı tarafında 10.000 lot ve altı başvurular için eşit
              dağıtım uygulanacaktır. Yüksek başvurulu yatırımcı grubunda 10.001 lot ve
              üzeri başvurular için oransal dağıtım yapılacaktır. T1 ve T2 bakiye
              kullanılamaz.
            </p>
          </Section>

          <Section title="Lot ve Arz Özeti">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {lotOzeti.map((item) => (
                <InfoCard key={item.label} label={item.label} value={item.value} />
              ))}
            </div>
          </Section>

          <Section title="Halka Arz Geliri ile Ne Yapacak?">
            <div className="grid gap-4 md:grid-cols-2">
              {fonKullanim.map((item) => (
                <div
                  key={item.alan}
                  className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4"
                >
                  <div className="text-xl font-bold text-emerald-700">{item.oran}</div>
                  <p className="mt-2 text-sm leading-6 text-emerald-900">{item.alan}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Finansal Görünüm">
            <div className="overflow-x-auto">
              <table className="min-w-full overflow-hidden rounded-2xl border border-slate-200">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-3 py-3 text-left text-xs font-bold text-slate-700 sm:px-4 sm:text-sm">
                      Kalem
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-bold text-slate-700 sm:px-4 sm:text-sm">
                      2023
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-bold text-slate-700 sm:px-4 sm:text-sm">
                      2024
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-bold text-slate-700 sm:px-4 sm:text-sm">
                      2025
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {finansalVeriler.map((row, index) => (
                    <tr
                      key={row.kalem}
                      className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <td className="px-3 py-3 text-xs font-semibold text-slate-900 sm:px-4 sm:text-sm">
                        {row.kalem}
                      </td>
                      <td className="px-3 py-3 text-xs text-slate-700 sm:px-4 sm:text-sm">
                        {row.d2023}
                      </td>
                      <td className="px-3 py-3 text-xs text-slate-700 sm:px-4 sm:text-sm">
                        {row.d2024}
                      </td>
                      <td className="px-3 py-3 text-xs text-slate-700 sm:px-4 sm:text-sm">
                        {row.d2025}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-4">
              <div className="text-sm font-bold text-blue-900">
                Yaklaşık halka arz sonrası piyasa değeri
              </div>
              <div className="mt-1 text-xl font-bold text-blue-700">14,4 Milyar TL</div>
              <p className="mt-2 text-xs leading-6 text-blue-900">
                Hesaplama: 2,34 milyar TL arz büyüklüğü / %16,25 halka açıklık oranı.
              </p>
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="min-w-full overflow-hidden rounded-2xl border border-slate-200">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-3 py-3 text-left text-xs font-bold text-slate-700 sm:px-4 sm:text-sm">
                      Çarpan
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-bold text-slate-700 sm:px-4 sm:text-sm">
                      2023
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-bold text-slate-700 sm:px-4 sm:text-sm">
                      2024
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-bold text-slate-700 sm:px-4 sm:text-sm">
                      2025
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {carpanlar.map((row, index) => (
                    <tr
                      key={row.carpan}
                      className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <td className="px-3 py-3 text-xs font-semibold text-slate-900 sm:px-4 sm:text-sm">
                        {row.carpan}
                      </td>
                      <td className="px-3 py-3 text-xs text-slate-700 sm:px-4 sm:text-sm">
                        {row.d2023}
                      </td>
                      <td className="px-3 py-3 text-xs text-slate-700 sm:px-4 sm:text-sm">
                        {row.d2024}
                      </td>
                      <td className="px-3 py-3 text-xs text-slate-700 sm:px-4 sm:text-sm">
                        {row.d2025}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-amber-900">
              <strong>Kısa değerlendirme:</strong> EKDMR halka arzında 14,4 milyar TL
              civarı piyasa değeriyle 2025 verilerine göre PD/Hasılat 0,72, PD/DD 1,03
              seviyesinde oluşuyor. Ancak 2025 dönem kârına göre F/K yaklaşık 32
              seviyesinde. Bu nedenle şirket satış ve özkaynak tarafında makul görünürken,
              kârlılık çarpanı tarafında daha dikkatli değerlendirme gerektiriyor.
              <br />
              <br />
              Yatırım tavsiyesi değildir.
            </div>
          </Section>

          <Section title="Tahmini Lot Tablosu">
            <div className="overflow-x-auto">
              <table className="min-w-full overflow-hidden rounded-2xl border border-slate-200">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-3 py-3 text-left text-xs font-bold text-slate-700 sm:px-4 sm:text-sm">
                      Katılımcı Sayısı
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-bold text-slate-700 sm:px-4 sm:text-sm">
                      Lot Sayısı
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-bold text-slate-700 sm:px-4 sm:text-sm">
                      Tutar
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tahminiLot.map((row, index) => (
                    <tr
                      key={row.katilimci}
                      className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <td className="px-3 py-3 text-xs font-semibold text-slate-900 sm:px-4 sm:text-sm">
                        {row.katilimci}
                      </td>
                      <td className="px-3 py-3 text-xs text-slate-700 sm:px-4 sm:text-sm">
                        {row.lot}
                      </td>
                      <td className="px-3 py-3 text-xs text-slate-700 sm:px-4 sm:text-sm">
                        {row.tutar}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs leading-6 text-slate-500">
              Tahmini lot dağılımı katılımcı sayısına göre yaklaşık hesaplanmıştır. Kesin
              sonuçlar resmi dağıtım açıklamasıyla netleşir.
            </p>
          </Section>

          <Section title="Önemli Taahhütler">
            <div className="space-y-3 text-sm leading-7 text-slate-600">
              <p className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                Fiyat istikrarı sağlayıcı işlemler planlanmamaktadır.
              </p>
              <p className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                1 yıl boyunca bedelli ve bedelsiz sermaye artırımı yapılmayacağı,
                dolaşımdaki payların artmasına sebep olacak satış yapılmayacağı ve halka
                arz fiyatının altında pay satılmayacağı taahhüt edilmiştir.
              </p>
            </div>
          </Section>

          <Section title="Konsorsiyum Lideri ve Üyeleri">
            <p className="text-sm leading-7 text-slate-600">{konsorsiyum}</p>
          </Section>

          <Section title="YouTube Videoları">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                <div className="relative w-full overflow-hidden pt-[56.25%]">
                  <iframe
                    className="absolute left-0 top-0 h-full w-full"
                    src="https://www.youtube.com/embed/Hs__b6dgmZY"
                    title="Ekinciler Demir ve Çelik Sanayi A.Ş. YouTube Videosu"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                <div className="relative w-full overflow-hidden pt-[56.25%]">
                  <iframe
                    className="absolute left-0 top-0 h-full w-full"
                    src="https://www.youtube.com/embed/VzyUd5CE1qI"
                    title="Ekinciler Demir ve Çelik Sanayi A.Ş. Halka Arz YouTube Videosu"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </Section>

          <HalkaArzSSS items={sssSorulari} />
        </div>
      </div>
    </main>
  );
}
