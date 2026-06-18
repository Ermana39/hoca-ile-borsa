"use client";

import Link from "next/link";
import { useMemo, useState } from "react";






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


type TaslakOgesi = { klasor: string; label: string };

export default function TaslakIzahnamelerClient({
  izahnameler,
}: {
  izahnameler: TaslakOgesi[];
}) {
  const [arama, setArama] = useState("");
  const taslakIzahnameler = izahnameler;

  const filtrelenmisIzahnameler = useMemo(() => {
    const temizArama = aramaIcinTemizle(arama);

    if (!temizArama) return taslakIzahnameler;

    return taslakIzahnameler.filter((item) =>
      aramaIcinTemizle(item.label).includes(temizArama)
    );
  }, [arama, taslakIzahnameler]);

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/halka-arz"
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
            onChange={(e) => setArama(e.target.value)}
            placeholder="Şirket adı yazın..."
            className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-400"
          />
        </section>

        <div className="space-y-3">
          {filtrelenmisIzahnameler.length > 0 ? (
            filtrelenmisIzahnameler.map((item, index) => (
              <div key={`${item.klasor}-${index}`} className="space-y-3">
                <Link
                  href={`/halka-arz/taslak-izahnameler/${item.klasor}`}
                  className="block rounded-xl border border-red-200 bg-red-50 px-4 py-4 text-base font-medium text-zinc-900 transition hover:bg-red-100"
                >
                  {item.label}
                </Link>
              </div>
            ))
          ) : (
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-8 text-center text-sm text-zinc-500">
              Aramanıza uygun şirket bulunamadı.
            </div>
          )}
        </div>

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