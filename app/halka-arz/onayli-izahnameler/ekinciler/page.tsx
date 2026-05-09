import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Ekinciler Demir ve Çelik Sanayi A.Ş. Halka Arz Detayları 2026 | EKDMR Onaylı İzahname",
  description:
    "Ekinciler Demir ve Çelik Sanayi A.Ş. EKDMR halka arz tarihi, fiyatı, lot miktarı, arz büyüklüğü, dağıtım yöntemi, tahmini lot dağılımı ve onaylı izahname bilgileri.",
};

function ReklamAlani({ variant = "yatay" }: { variant?: "yatay" | "buyuk" }) {
  const alanClass =
    variant === "buyuk"
      ? "min-h-[220px] sm:min-h-[260px] lg:min-h-[320px]"
      : "min-h-[110px] sm:min-h-[120px] lg:min-h-[140px]";

  return (
    <section aria-label="Reklam alanı" className={`w-full ${alanClass}`}>
      <div className={`w-full ${alanClass}`} />
    </section>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <h2 className="mb-5 text-xl font-bold text-slate-900">{title}</h2>
      {children}
    </section>
  );
}

function InfoBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="text-sm font-medium text-slate-500">{label}</div>
      <div className="mt-2 whitespace-pre-line text-base font-bold text-slate-900">
        {value}
      </div>
    </div>
  );
}

function SimpleRow({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note?: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="text-sm font-bold text-slate-900">{label}</div>
          {note ? (
            <p className="mt-1 text-sm leading-6 text-slate-600">{note}</p>
          ) : null}
        </div>
        <div className="text-base font-bold text-blue-700 sm:text-right">{value}</div>
      </div>
    </div>
  );
}

export default function EkincilerDemirVeCelikSanayiASPage() {
  const temelBilgiler = [
    { label: "İşlem Kodu", value: "EKDMR" },
    { label: "Talep Toplama", value: "13-14-15 Mayıs 2026" },
    { label: "Talep Saati", value: "09.00 - 17.00" },
    { label: "Halka Arz Fiyatı", value: "45,00 TL" },
    { label: "İskonto Oranı", value: "%37,72" },
    { label: "Katılım Endeksi", value: "Uygun Değil" },
    { label: "Toplam Lot", value: "52.000.000 Lot" },
    { label: "Halka Açıklık", value: "%16,25" },
    { label: "Arz Büyüklüğü", value: "2.340.000.000 TL" },
    { label: "Pazar", value: "Yıldız Pazar" },
    { label: "Aracı Kurum", value: "A1 Capital Yatırım Menkul Değerler A.Ş." },
    { label: "T1 - T2", value: "Kullanılamaz" },
  ];

  const ozetKartlar = [
    { label: "Fiyat", value: "45,00 TL" },
    { label: "Talep", value: "13-15 Mayıs" },
    { label: "Toplam Lot", value: "52 Milyon" },
    { label: "Arz Büyüklüğü", value: "2,34 Milyar TL" },
  ];

  const tahsisat = [
    {
      label: "Yurt İçi Bireysel Yatırımcılar",
      value: "%40 / 20.800.000 Lot",
      note: "10.000 lot ve altı başvurular için bireysele eşit dağıtım.",
    },
    {
      label: "Yüksek Başvurulu Yatırımcı",
      value: "%10 / 5.200.000 Lot",
      note: "10.001 lot ve üzeri başvurular için oransal dağıtım.",
    },
    {
      label: "Yurt İçi Kurumsal Yatırımcılar",
      value: "%30 / 15.600.000 Lot",
    },
    {
      label: "Yurt Dışı Kurumsal Yatırımcılar",
      value: "%20 / 10.400.000 Lot",
    },
  ];

  const toplamLot = [
    { label: "Sermaye Artırımı", value: "40.000.000 Lot" },
    { label: "Ortak Satışı", value: "12.000.000 Lot" },
    { label: "Toplam Dağıtılacak Pay", value: "52.000.000 Lot" },
  ];

  const fonKullanim = [
    {
      label: "Hammadde ve işletme sermayesi",
      value: "%40",
      note: "Hammadde tedariki ve işletme sermayesi ihtiyacının finansmanı.",
    },
    {
      label: "Yenilenebilir enerji yatırımları",
      value: "%25",
    },
    {
      label: "Yeşil Çelik Haddehane modernizasyonu",
      value: "%25",
      note: "Mevcut üretim tesislerinde kapasite artışı yatırımları.",
    },
    {
      label: "Kütük kaynatma sistemi yatırımı",
      value: "%10",
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

  const tahminiLot = [
    { katilimci: "700.000", lot: "30 Lot", tutar: "1.350 TL" },
    { katilimci: "750.000", lot: "28 Lot", tutar: "1.260 TL" },
    { katilimci: "800.000", lot: "26 Lot", tutar: "1.170 TL" },
    { katilimci: "850.000", lot: "25 Lot", tutar: "1.125 TL" },
    { katilimci: "900.000", lot: "23 Lot", tutar: "1.035 TL" },
    { katilimci: "950.000", lot: "22 Lot", tutar: "990 TL" },
    { katilimci: "1.000.000", lot: "21 Lot", tutar: "945 TL" },
  ];

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
          <div className="mb-5 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
            Onaylı İzahname
          </div>

          <h1 className="text-2xl font-bold text-slate-950 sm:text-3xl">
            Ekinciler Demir ve Çelik Sanayi A.Ş. Halka Arz Bilgileri
          </h1>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
            EKDMR halka arzına ait talep toplama tarihi, halka arz fiyatı, toplam lot,
            tahsisat grupları, tahmini lot dağılımı ve fon kullanım alanları sade şekilde
            aşağıda özetlenmiştir.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ozetKartlar.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="text-sm font-medium text-slate-500">{item.label}</div>
                <div className="mt-2 text-xl font-bold text-slate-950">{item.value}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <ReklamAlani />
        </section>

        <div className="space-y-8">
          <Section title="Temel Bilgiler">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {temelBilgiler.map((item) => (
                <InfoBox key={item.label} label={item.label} value={item.value} />
              ))}
            </div>
          </Section>

          <Section title="Dağıtım ve Alım Şekli">
            <div className="grid gap-4 md:grid-cols-2">
              {tahsisat.map((item) => (
                <SimpleRow
                  key={item.label}
                  label={item.label}
                  value={item.value}
                  note={item.note}
                />
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-amber-900">
              Bireysel yatırımcı tarafında 10.000 lot ve altı başvurular için eşit
              dağıtım uygulanacaktır. Yüksek başvurulu yatırımcı grubunda 10.001 lot ve
              üzeri başvurular için oransal dağıtım yapılacaktır. T1 ve T2 bakiye
              kullanılamaz.
            </div>
          </Section>

          <Section title="Toplam Dağıtılacak Lot">
            <div className="grid gap-4 sm:grid-cols-3">
              {toplamLot.map((item) => (
                <InfoBox key={item.label} label={item.label} value={item.value} />
              ))}
            </div>
          </Section>

          <Section title="Fon Kullanım Alanları">
            <div className="grid gap-4 md:grid-cols-2">
              {fonKullanim.map((item) => (
                <SimpleRow
                  key={item.label}
                  label={item.label}
                  value={item.value}
                  note={item.note}
                />
              ))}
            </div>
          </Section>

          <Section title="Tahmini Lot Dağılımı">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {tahminiLot.map((item) => (
                <div
                  key={item.katilimci}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="text-sm font-semibold text-slate-500">
                    Katılımcı: {item.katilimci}
                  </div>
                  <div className="mt-3 flex items-end justify-between gap-4">
                    <div>
                      <div className="text-xs font-semibold text-slate-500">Tahmini Lot</div>
                      <div className="mt-1 text-xl font-bold text-slate-950">{item.lot}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-semibold text-slate-500">Tutar</div>
                      <div className="mt-1 text-xl font-bold text-blue-700">{item.tutar}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs leading-6 text-slate-500">
              Tahmini lot dağılımı katılımcı sayısına göre yaklaşık hesaplanmıştır. Kesin
              sonuçlar resmi dağıtım açıklamasıyla netleşir.
            </p>
          </Section>

          <Section title="Finansal Görünüm">
            <div className="space-y-3">
              {finansalVeriler.map((item) => (
                <div
                  key={item.kalem}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="mb-3 text-sm font-bold text-slate-950">{item.kalem}</div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="rounded-xl bg-white p-3">
                      <div className="text-xs font-semibold text-slate-500">2023</div>
                      <div className="mt-1 font-bold text-slate-900">{item.d2023}</div>
                    </div>
                    <div className="rounded-xl bg-white p-3">
                      <div className="text-xs font-semibold text-slate-500">2024</div>
                      <div className="mt-1 font-bold text-slate-900">{item.d2024}</div>
                    </div>
                    <div className="rounded-xl bg-white p-3">
                      <div className="text-xs font-semibold text-slate-500">2025</div>
                      <div className="mt-1 font-bold text-slate-900">{item.d2025}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="YouTube Video">
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
          </Section>

          <section>
            <ReklamAlani />
          </section>

          <Section title="Taahhütler ve Ek Bilgiler">
            <div className="space-y-4 text-sm leading-7 text-slate-600">
              <p>
                Fiyat istikrarı sağlayıcı işlemler planlanmamaktadır. Şirket ve ortaklar
                için 1 yıl boyunca sermaye artırımı, dolaşımdaki payların artmasına sebep
                olacak satış ve halka arz fiyatının altında pay satışı yapılmayacağına
                ilişkin taahhüt bulunmaktadır.
              </p>

              <p>
                Konsorsiyum lideri A1 Capital Yatırım’dır. Halka arzda Acar, Ahlatcı,
                Ak Yatırım, Alnus, Alternatif, Ata, Bizim, BTC Türk, Bulls, Burgan,
                Colendi, Deniz, Destek, Dinamik, Fiba, Garanti, Gedik, Global, Halk,
                ICBC, ING, Investaz, İnfo, Integral, İş Yatırım, Kuveyt, Marbaş, Meksa,
                Osmanlı, Oyak, PhillipCapital, Piramit, Pusula, QNB, Şeker, Tacirler,
                TEB, Tera, Trive, Turkish, Ünlü, Vakıf, Yapı Kredi, Yatırım Finansman ve
                Ziraat Yatırım yer almaktadır.
              </p>
            </div>
          </Section>

          <section className="mt-8">
            <ReklamAlani variant="buyuk" />
          </section>

          <Section title="Ekinciler Demir ve Çelik Halka Arz Değerlendirmesi">
            <p className="text-sm leading-7 text-slate-600">
              Ekinciler Demir ve Çelik Sanayi A.Ş. halka arz sayfasında EKDMR işlem
              kodu, halka arz tarihi, halka arz fiyatı, toplam lot miktarı, arz büyüklüğü,
              halka açıklık oranı, tahsisat grupları, fon kullanım alanları, tahmini lot
              dağılımı ve temel finansal veriler sade bir şekilde sunulmuştur. Bu sayfadaki
              bilgiler onaylı izahname verilerine göre hazırlanmıştır ve yatırım tavsiyesi
              değildir.
            </p>
          </Section>
        </div>
      </div>
    </main>
  );
}