"use client";

import Link from "@/components/NoPrefetchLink";
import { type ReactNode, useMemo, useState } from "react";
import SirketLogo from "@/components/SirketLogo";

const ILK_GOSTERIM_ADEDI = 30;
const TABLO_LIMITI = 6;

function aramaIcinTemizle(text: string) {
  return text
    .toLocaleLowerCase("tr")
    .replace(/ı/g, "i")
    .replace(/İ/g, "i")
    .replace(/ğ/g, "g")
    .replace(/Ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/Ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/Ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/Ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/Ç/g, "c")
    .replace(/\s+/g, " ")
    .trim();
}

export type TaslakOgesi = {
  klasor: string;
  label: string;
  logo?: string;
  basvuruTarihi?: string;
  araciKurum?: string;
  pazar?: string;
  dagitimYontemi?: string;
  pay?: string;
  halkaAciklikOrani?: string;
  katilimEndeksi?: string;
  fiyatIstikrari?: string;
  ortakSatisVar: boolean;
  sermayeArtirimiVar: boolean;
};

type KategoriGrubu = {
  ad: string;
  adet: number;
  ornekler: TaslakOgesi[];
};

function tarihDegeri(tarih?: string) {
  if (!tarih) return 0;
  const eslesme = tarih.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);
  if (!eslesme) return 0;
  const [, gun, ay, yil] = eslesme;
  return Number(`${yil}${ay.padStart(2, "0")}${gun.padStart(2, "0")}`);
}

function sayiDegeri(text?: string) {
  if (!text) return 0;
  const temiz = text.replace(/\./g, "").replace(",", ".");
  const eslesme = temiz.match(/\d+(?:\.\d+)?/);
  return eslesme ? Number(eslesme[0]) : 0;
}

function halkaAciklikDegeri(text?: string) {
  if (!text) return 0;
  const eslesme = text.replace(",", ".").match(/\d+(?:\.\d+)?/);
  return eslesme ? Number(eslesme[0]) : 0;
}

function bilgi(text?: string) {
  return text && text.trim() ? text : "Açıklanmadı";
}

function kisaSirketAdi(ad: string) {
  return ad
    .replace(/\s+A\.Ş\.$/i, "")
    .replace(/\s+Anonim Şirketi$/i, "")
    .trim();
}

function kisaKurumAdi(ad: string) {
  return ad
    .replace(/\s+Menkul Değerler A\.Ş\./gi, "")
    .replace(/\s+Menkul Kıymetler A\.Ş\./gi, "")
    .replace(/\s+Yatırım A\.Ş\./gi, " Yatırım")
    .replace(/\s+/g, " ")
    .trim();
}

function kurumlariAyir(araciKurum?: string) {
  if (!araciKurum) return [];
  return Array.from(
    new Set(
      araciKurum
        .split(/\s*(?:\/|\n)\s*/)
        .map(kisaKurumAdi)
        .filter(Boolean)
    )
  );
}

function grupOlustur(
  izahnameler: TaslakOgesi[],
  degerAl: (item: TaslakOgesi) => string[]
) {
  const gruplar = new Map<string, TaslakOgesi[]>();

  for (const item of izahnameler) {
    for (const deger of degerAl(item)) {
      const ad = bilgi(deger);
      gruplar.set(ad, [...(gruplar.get(ad) ?? []), item]);
    }
  }

  return Array.from(gruplar.entries())
    .map(([ad, ornekler]) => ({ ad, adet: ornekler.length, ornekler }))
    .sort((a, b) => b.adet - a.adet || a.ad.localeCompare(b.ad, "tr"));
}

function SirketBaglantisi({ item }: { item: TaslakOgesi }) {
  return (
    <Link
      href={`/halka-arz/taslak-izahnameler/${item.klasor}`}
      prefetch={false}
      className="font-semibold text-blue-700 hover:text-blue-900"
    >
      {kisaSirketAdi(item.label)}
    </Link>
  );
}

function MiniTablo({
  baslik,
  aciklama,
  children,
}: {
  baslik: string;
  aciklama: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm md:p-5">
      <div className="mb-4">
        <h2 className="text-lg font-bold text-zinc-900">{baslik}</h2>
        <p className="mt-1 text-sm leading-6 text-zinc-600">{aciklama}</p>
      </div>
      {children}
    </section>
  );
}

function OrnekSirketler({ items }: { items: TaslakOgesi[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.slice(0, 3).map((item) => (
        <Link
          key={item.klasor}
          href={`/halka-arz/taslak-izahnameler/${item.klasor}`}
          prefetch={false}
          className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-semibold text-zinc-700 hover:bg-zinc-100"
        >
          {kisaSirketAdi(item.label)}
        </Link>
      ))}
    </div>
  );
}

function KategoriTablosu({ gruplar }: { gruplar: KategoriGrubu[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[520px] text-left text-sm">
        <thead className="border-b border-zinc-200 text-xs uppercase text-zinc-500">
          <tr>
            <th className="pb-3 font-semibold">Kategori</th>
            <th className="pb-3 font-semibold">Adet</th>
            <th className="pb-3 font-semibold">Örnek şirketler</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-100">
          {gruplar.slice(0, TABLO_LIMITI).map((grup) => (
            <tr key={grup.ad}>
              <td className="py-3 font-semibold text-zinc-900">{grup.ad}</td>
              <td className="py-3 text-zinc-700">{grup.adet}</td>
              <td className="py-3">
                <OrnekSirketler items={grup.ornekler} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function TaslakIzahnamelerClient({
  izahnameler,
}: {
  izahnameler: TaslakOgesi[];
}) {
  const [arama, setArama] = useState("");
  const [gorunenAdet, setGorunenAdet] = useState(ILK_GOSTERIM_ADEDI);
  const taslakIzahnameler = izahnameler;

  const filtrelenmisIzahnameler = useMemo(() => {
    const temizArama = aramaIcinTemizle(arama);

    if (!temizArama) return taslakIzahnameler;

    return taslakIzahnameler.filter((item) =>
      aramaIcinTemizle(item.label).includes(temizArama)
    );
  }, [arama, taslakIzahnameler]);

  const gorunenIzahnameler = filtrelenmisIzahnameler.slice(0, gorunenAdet);

  const yeniBasvurular = useMemo(
    () =>
      taslakIzahnameler
        .filter((item) => tarihDegeri(item.basvuruTarihi) > 0)
        .sort(
          (a, b) =>
            tarihDegeri(b.basvuruTarihi) - tarihDegeri(a.basvuruTarihi) ||
            a.label.localeCompare(b.label, "tr")
        )
        .slice(0, TABLO_LIMITI),
    [taslakIzahnameler]
  );

  const buyukPaylar = useMemo(
    () =>
      taslakIzahnameler
        .filter((item) => sayiDegeri(item.pay) > 0)
        .sort(
          (a, b) =>
            sayiDegeri(b.pay) - sayiDegeri(a.pay) ||
            a.label.localeCompare(b.label, "tr")
        )
        .slice(0, TABLO_LIMITI),
    [taslakIzahnameler]
  );

  const yuksekHalkaAciklik = useMemo(
    () =>
      taslakIzahnameler
        .filter((item) => halkaAciklikDegeri(item.halkaAciklikOrani) > 0)
        .sort(
          (a, b) =>
            halkaAciklikDegeri(b.halkaAciklikOrani) -
              halkaAciklikDegeri(a.halkaAciklikOrani) ||
            a.label.localeCompare(b.label, "tr")
        )
        .slice(0, TABLO_LIMITI),
    [taslakIzahnameler]
  );

  const konsorsiyumGruplari = useMemo(
    () =>
      grupOlustur(taslakIzahnameler, (item) => {
        const kurumlar = kurumlariAyir(item.araciKurum);
        return kurumlar.length > 0 ? kurumlar : ["Aracı kurum bekleniyor"];
      }),
    [taslakIzahnameler]
  );

  const pazarGruplari = useMemo(
    () =>
      grupOlustur(taslakIzahnameler, (item) => [
        item.pazar || "Pazar bilgisi bekleniyor",
      ]),
    [taslakIzahnameler]
  );

  const dagitimGruplari = useMemo(
    () =>
      grupOlustur(taslakIzahnameler, (item) => [
        item.dagitimYontemi || "Dağıtım yöntemi bekleniyor",
      ]),
    [taslakIzahnameler]
  );

  const arzYapisiGruplari = useMemo(
    () =>
      grupOlustur(taslakIzahnameler, (item) => {
        if (item.sermayeArtirimiVar && item.ortakSatisVar) {
          return ["Sermaye artırımı + ortak satışı"];
        }
        if (item.sermayeArtirimiVar) return ["Sadece sermaye artırımı"];
        if (item.ortakSatisVar) return ["Sadece ortak satışı"];
        return ["Arz şekli detayı bekleniyor"];
      }),
    [taslakIzahnameler]
  );

  const aramayiGuncelle = (value: string) => {
    setArama(value);
    setGorunenAdet(ILK_GOSTERIM_ADEDI);
  };

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

          <Link
            href="/halka-arz"
            prefetch={false}
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">
          Taslak İzahnameler
        </h1>

        <section className="mb-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 md:p-5">
          <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <h2 className="text-lg font-semibold text-zinc-900">Şirket Ara</h2>
            <span className="text-sm text-zinc-500">
              {filtrelenmisIzahnameler.length} sonuç
            </span>
          </div>

          <input
            type="text"
            value={arama}
            onChange={(e) => aramayiGuncelle(e.target.value)}
            placeholder="Şirket adı yazın..."
            className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-400"
          />
        </section>

        <section className="mb-8 space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-zinc-900">
              Taslakları Hızlı Karşılaştır
            </h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              Başvuru sürecindeki şirketleri tarih, konsorsiyum, pazar,
              dağıtım yöntemi ve arz büyüklüğü kırılımlarında inceleyin.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <MiniTablo
              baslik="Başvuru Tarihine Göre"
              aciklama="Başvuru tarihi girilmiş taslaklar içinde en yeni kayıtlar."
            >
              <div className="overflow-x-auto">
                <table className="w-full min-w-[520px] text-left text-sm">
                  <thead className="border-b border-zinc-200 text-xs uppercase text-zinc-500">
                    <tr>
                      <th className="pb-3 font-semibold">Şirket</th>
                      <th className="pb-3 font-semibold">Başvuru</th>
                      <th className="pb-3 font-semibold">Aracı kurum</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100">
                    {yeniBasvurular.map((item) => (
                      <tr key={item.klasor}>
                        <td className="py-3">
                          <SirketBaglantisi item={item} />
                        </td>
                        <td className="py-3 text-zinc-700">
                          {bilgi(item.basvuruTarihi)}
                        </td>
                        <td className="py-3 text-zinc-700">
                          {bilgi(item.araciKurum)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </MiniTablo>

            <MiniTablo
              baslik="Konsorsiyum Liderine Göre"
              aciklama="Taslaklarda adı geçen aracı kurumlara göre yoğunlaşma."
            >
              <KategoriTablosu gruplar={konsorsiyumGruplari} />
            </MiniTablo>

            <MiniTablo
              baslik="Pazar Bilgisine Göre"
              aciklama="Yıldız Pazar, Ana Pazar veya henüz açıklanmayan pazar kırılımı."
            >
              <KategoriTablosu gruplar={pazarGruplari} />
            </MiniTablo>

            <MiniTablo
              baslik="Dağıtım Yöntemine Göre"
              aciklama="Eşit dağıtım, oransal dağıtım ve açıklanmayan dağıtım yöntemi."
            >
              <KategoriTablosu gruplar={dagitimGruplari} />
            </MiniTablo>

            <MiniTablo
              baslik="Planlanan Pay Büyüklüğüne Göre"
              aciklama="Lot bilgisi girilmiş taslaklarda en büyük planlanan pay satışları."
            >
              <div className="overflow-x-auto">
                <table className="w-full min-w-[520px] text-left text-sm">
                  <thead className="border-b border-zinc-200 text-xs uppercase text-zinc-500">
                    <tr>
                      <th className="pb-3 font-semibold">Şirket</th>
                      <th className="pb-3 font-semibold">Pay</th>
                      <th className="pb-3 font-semibold">Halka açıklık</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100">
                    {buyukPaylar.map((item) => (
                      <tr key={item.klasor}>
                        <td className="py-3">
                          <SirketBaglantisi item={item} />
                        </td>
                        <td className="py-3 text-zinc-700">{bilgi(item.pay)}</td>
                        <td className="py-3 text-zinc-700">
                          {bilgi(item.halkaAciklikOrani)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </MiniTablo>

            <MiniTablo
              baslik="Halka Açıklık Oranına Göre"
              aciklama="Halka açıklık oranı girilmiş taslaklarda en yüksek oranlar."
            >
              <div className="overflow-x-auto">
                <table className="w-full min-w-[520px] text-left text-sm">
                  <thead className="border-b border-zinc-200 text-xs uppercase text-zinc-500">
                    <tr>
                      <th className="pb-3 font-semibold">Şirket</th>
                      <th className="pb-3 font-semibold">Halka açıklık</th>
                      <th className="pb-3 font-semibold">Arz yapısı</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100">
                    {yuksekHalkaAciklik.map((item) => (
                      <tr key={item.klasor}>
                        <td className="py-3">
                          <SirketBaglantisi item={item} />
                        </td>
                        <td className="py-3 text-zinc-700">
                          {bilgi(item.halkaAciklikOrani)}
                        </td>
                        <td className="py-3 text-zinc-700">
                          {item.sermayeArtirimiVar && item.ortakSatisVar
                            ? "Sermaye artırımı + ortak satışı"
                            : item.sermayeArtirimiVar
                              ? "Sermaye artırımı"
                              : item.ortakSatisVar
                                ? "Ortak satışı"
                                : "Açıklanmadı"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </MiniTablo>

            <MiniTablo
              baslik="Arz Yapısına Göre"
              aciklama="Sermaye artırımı ve ortak satışı içeren taslakları ayırır."
            >
              <KategoriTablosu gruplar={arzYapisiGruplari} />
            </MiniTablo>

            <MiniTablo
              baslik="Eklenebilecek Faydalı Alanlar"
              aciklama="Veri girişi düzenli yapılırsa bu kırılımlar da ayrı takip alanına çevrilebilir."
            >
              <ul className="space-y-3 text-sm leading-6 text-zinc-700">
                <li>
                  <strong>Katılım uygunluğu:</strong> uygun, uygun değil veya
                  açıklanmadı olarak ayrı liste.
                </li>
                <li>
                  <strong>Fiyat istikrarı:</strong> planlanan süre ve kaynak
                  oranına göre takip.
                </li>
                <li>
                  <strong>Fon kullanım amacı:</strong> yatırım, borç kapama,
                  işletme sermayesi ve satın alma kırılımları.
                </li>
                <li>
                  <strong>Sektör kırılımı:</strong> sanayi, enerji, gıda,
                  teknoloji ve finans gibi alanlara göre gruplama.
                </li>
              </ul>
            </MiniTablo>
          </div>
        </section>

        <div className="space-y-3">
          {filtrelenmisIzahnameler.length > 0 ? (
            gorunenIzahnameler.map((item) => (
              <div key={item.klasor} className="space-y-3">
                <Link
                  href={`/halka-arz/taslak-izahnameler/${item.klasor}`}
                  prefetch={false}
                  className="flex items-center gap-4 rounded-xl border border-red-200 bg-red-50 px-4 py-4 text-base font-medium text-zinc-900 transition hover:bg-red-100"
                >
                  <SirketLogo logo={item.logo} ad={item.label} />
                  <span>{item.label}</span>
                </Link>
              </div>
            ))
          ) : (
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-8 text-center text-sm text-zinc-500">
              Aramanıza uygun şirket bulunamadı.
            </div>
          )}
        </div>

        {gorunenAdet < filtrelenmisIzahnameler.length && (
          <button
            type="button"
            onClick={() => setGorunenAdet((adet) => adet + ILK_GOSTERIM_ADEDI)}
            className="mt-5 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50"
          >
            Daha fazla şirket göster
          </button>
        )}

        <section className="mt-12 space-y-8">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 md:p-8">
            <h2 className="mb-4 text-xl font-bold text-zinc-900 md:text-2xl">
              Taslak İzahname Nedir?
            </h2>
            <p className="text-zinc-700 leading-relaxed">
              Taslak izahname, halka arz başvurusu yapan şirketin Sermaye
              Piyasası Kurulu onayı öncesinde hazırladığı ilk bilgilendirme
              dokümanlarından biridir. Bu belgede şirketin faaliyet alanı,
              ortaklık yapısı, finansal durumu, halka arz planı, fon kullanım
              amacı, risk faktörleri ve yatırımcıların bilmesi gereken temel
              bilgiler yer alır. Taslak izahname, halka arz sürecinin henüz
              kesinleşmediğini gösterir; bu nedenle burada yer alan bilgiler
              SPK incelemesi ve şirket güncellemeleri sonrasında değişebilir.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 md:p-8">
            <h2 className="mb-4 text-xl font-bold text-zinc-900 md:text-2xl">
              Taslak İzahname Süreci Nasıl İşler?
            </h2>
            <p className="mb-4 text-zinc-700 leading-relaxed">
              Halka arz edilmek isteyen şirketler, öncelikle faaliyetlerini,
              finansal tablolarını, ortaklık yapısını ve halka arzdan elde
              edilecek kaynağın kullanım planını içeren izahname taslağını
              hazırlar. Bu taslak, SPK incelemesine sunulur ve süreç boyunca
              şirketten ek bilgi, açıklama veya düzeltme istenebilir.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Taslak izahname aşamasında şirket halka arz için başvuru yapmış
              olsa da bu durum halka arzın kesin olarak gerçekleşeceği anlamına
              gelmez. SPK incelemesi tamamlanmadan talep toplama tarihi, halka
              arz fiyatı, dağıtım yöntemi ve nihai arz büyüklüğü kesinleşmiş
              kabul edilmemelidir.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 md:p-8">
            <h2 className="mb-4 text-xl font-bold text-zinc-900 md:text-2xl">
              Taslak İzahname ile Onaylı İzahname Arasındaki Fark
            </h2>
            <p className="text-zinc-700 leading-relaxed">
              Taslak izahname, halka arz sürecinin başvuru ve inceleme
              aşamasındaki belgeyi ifade eder. Onaylı izahname ise SPK
              incelemesi tamamlandıktan sonra yayımlanan ve halka arzın daha net
              şartlarını içeren belgedir. Bu nedenle yatırımcılar taslak
              izahnameyi şirketi erken aşamada tanımak için kullanabilir; ancak
              nihai karar öncesinde mutlaka onaylı izahname, tasarruf
              sahiplerine satış duyurusu ve resmi KAP açıklamalarını kontrol
              etmelidir.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 md:p-8">
            <h2 className="mb-4 text-xl font-bold text-zinc-900 md:text-2xl">
              Yatırımcı Taslak İzahnamede Nelere Bakmalı?
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                <h3 className="mb-2 font-semibold text-blue-900">
                  Şirketin Faaliyet Alanı
                </h3>
                <p className="text-sm leading-6 text-zinc-700">
                  Şirketin hangi sektörde faaliyet gösterdiği, gelirlerini
                  hangi ürün veya hizmetlerden elde ettiği ve sektör içindeki
                  konumu incelenmelidir.
                </p>
              </div>

              <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                <h3 className="mb-2 font-semibold text-green-900">
                  Finansal Görünüm
                </h3>
                <p className="text-sm leading-6 text-zinc-700">
                  Hasılat, kârlılık, borçluluk, özkaynak yapısı ve nakit akışı
                  gibi finansal göstergeler şirketin halka arz öncesi durumunu
                  anlamak için önemlidir.
                </p>
              </div>

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                <h3 className="mb-2 font-semibold text-amber-900">
                  Fon Kullanım Planı
                </h3>
                <p className="text-sm leading-6 text-zinc-700">
                  Halka arzdan elde edilecek kaynağın yatırım, işletme
                  sermayesi, borç azaltımı veya farklı alanlarda nasıl
                  kullanılacağı dikkatle değerlendirilmelidir.
                </p>
              </div>

              <div className="rounded-xl border border-purple-200 bg-purple-50 p-4">
                <h3 className="mb-2 font-semibold text-purple-900">
                  Risk Faktörleri
                </h3>
                <p className="text-sm leading-6 text-zinc-700">
                  Şirketin faaliyet, sektör, finansman, döviz, hammadde,
                  rekabet ve operasyonel riskleri yatırımcı açısından önemli
                  sinyaller verebilir.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 md:p-8">
            <h2 className="mb-4 text-xl font-bold text-zinc-900 md:text-2xl">
              Taslak İzahnameler Neden Takip Edilir?
            </h2>
            <p className="mb-4 text-zinc-700 leading-relaxed">
              Taslak izahnameler, halka arz piyasasını erken aşamada takip
              etmek isteyen yatırımcılar için önemli bir ön bilgi kaynağıdır.
              Henüz talep toplama tarihi açıklanmamış şirketler hakkında fikir
              edinmek, şirketin faaliyet alanını görmek ve olası halka arz
              takvimini önceden takip etmek için taslak izahname listeleri
              düzenli olarak incelenebilir.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Ancak taslak aşamasındaki her şirketin halka arzı kısa sürede
              gerçekleşmeyebilir. Bazı başvurular güncellenebilir, ertelenebilir
              veya süreç içinde farklı değişikliklere konu olabilir. Bu nedenle
              taslak izahname bilgileri kesin halka arz bilgisi olarak değil,
              sürecin takip edilmesini sağlayan ön hazırlık verisi olarak
              değerlendirilmelidir.
            </p>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 md:p-8">
            <h2 className="mb-4 text-xl font-bold text-amber-950 md:text-2xl">
              Bilgilendirme Notu
            </h2>
            <p className="text-amber-950 leading-relaxed">
              Bu sayfada yer alan taslak izahname listesi ve açıklamalar
              bilgilendirme amacıyla hazırlanmıştır. Taslak izahname aşamasında
              yer alan bilgiler zaman içinde değişebilir. Halka arzlara
              katılmadan önce SPK onaylı izahname, tasarruf sahiplerine satış
              duyurusu, KAP açıklamaları ve yetkili kurumların resmi
              bilgilendirmeleri mutlaka kontrol edilmelidir. Buradaki içerikler
              yatırım tavsiyesi değildir.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
