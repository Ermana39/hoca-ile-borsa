import Link from "next/link";
import type { Metadata } from "next";
import SirketLogo from "@/components/SirketLogo";
import { getOnayliIzahnameListesi } from "@/lib/halka-arz";
import { getIzahnameLogo } from "@/lib/izahname-logolar";

export const metadata: Metadata = {
  title: "Onaylı İzahnameler | Halka Arz SPK Onay Süreci ve Şirket Detayları",
  description:
    "SPK tarafından onaylanan halka arz izahnamelerini, şirket detaylarını, halka arz fiyatlarını, talep toplama bilgilerini ve halka arz onay sürecine dair bilgilendirici açıklamaları inceleyin.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/halka-arz/onayli-izahnameler",
  },
};

const statikOnayliIzahnameler = [
  {
    kod: "BETA",
    sirket: "Beta Enerji ve Teknoloji A.Ş.",
    href: "/halka-arz/onayli-izahnameler/beta-enerji-teknoloji-betae",
  },
  {
    kod: "EKNDC",
    sirket: "Ekinciler Demir ve Çelik Sanayi A.Ş.",
    href: "/halka-arz/onayli-izahnameler/ekinciler-demir-celik-ekdmr",
  },
];

const yeniOnayliIzahnameler = [
  {
    kod: "-",
    sirket: "Orzaks İlaç ve Kimya San. Tic. A.Ş.",
    href: "/halka-arz/onayli-izahnameler/orzaks-ilac-ve-kimya-san-tic",
  },
  {
    kod: "EKIM",
    sirket: "Ekim Turizm Ticaret ve Sanayi A.Ş.",
    href: "/halka-arz/onayli-izahnameler/ekim-turizm-tic-ve-san",
  },
  {
    kod: "-",
    sirket: "Soho Giyim ve Enerji A.Ş.",
    href: "/halka-arz/onayli-izahnameler/soho-giyim-ve-enerji",
  },
  {
    kod: "-",
    sirket: "İsvea Seramik ve Banyo Ürünleri Sanayi A.Ş.",
    href: "/halka-arz/onayli-izahnameler/isvea-seramik-ve-banyo-urunleri-sanayi",
  },
  {
    kod: "-",
    sirket: "Golda Gıda San. ve Tic. A.Ş.",
    href: "/halka-arz/onayli-izahnameler/golda-gida-san-ve-tic",
  },
];

export default function OnayliIzahnamelerPage() {
  const dinamikOnayliIzahnameler = getOnayliIzahnameListesi().map((item) => ({
    kod: item.kod || "-",
    sirket: item.label,
    href: `/halka-arz/onayli-izahnameler/${item.klasor}`,
  }));
  const onayliIzahnameler = Array.from(
    new Map(
      [
        ...statikOnayliIzahnameler,
        ...yeniOnayliIzahnameler,
        ...dinamikOnayliIzahnameler,
      ].map((item) => [item.href, item])
    ).values()
  );

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

        <section className="mb-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 md:p-8">
          <h1 className="mb-4 text-3xl font-bold text-zinc-900">
            Onaylı İzahnameler
          </h1>
          <p className="text-base leading-7 text-zinc-700">
            Onaylı izahnameler sayfasında, Sermaye Piyasası Kurulu tarafından
            halka arz başvurusu onaylanan şirketlere ait temel bilgilere ve
            detay sayfalarına ulaşabilirsiniz. Bu bölümde yer alan şirketlerin
            halka arz süreci taslak aşamayı geçmiş, SPK onayı sonrasında
            yatırımcıların inceleyebileceği daha net bilgilerle birlikte
            yayımlanmıştır.
          </p>
        </section>

        <div className="space-y-3">
          {onayliIzahnameler.map((item) => {
            const slug = item.href.split("/").filter(Boolean).pop() || "";
            return (
              <Link
                key={`${item.kod}-${item.sirket}`}
                href={item.href}
                className="flex items-center gap-4 rounded-xl border border-green-200 bg-green-50 px-4 py-4 transition hover:bg-green-100"
              >
                <SirketLogo logo={getIzahnameLogo(slug)} ad={item.sirket} />
                <div className="w-20 shrink-0 text-base font-bold text-zinc-900">
                  {item.kod}
                </div>
                <div className="text-base font-medium text-zinc-900">
                  {item.sirket}
                </div>
              </Link>
            );
          })}
        </div>

        <section className="mt-10 space-y-8">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 md:p-8">
            <h2 className="mb-4 text-xl font-bold text-zinc-900 md:text-2xl">
              Onaylı İzahname Nedir?
            </h2>
            <p className="text-zinc-700 leading-relaxed">
              Onaylı izahname, halka arz başvurusu yapan şirketin finansal
              durumu, faaliyet alanı, ortaklık yapısı, riskleri, halka arz
              yöntemi, fon kullanım planı ve yatırımcı açısından önemli diğer
              bilgilerini içeren resmi belgedir. Taslak izahname başvuru
              sürecinde yayımlanabilirken, onaylı izahname SPK incelemesi
              sonrasında kesinleşen ve yatırımcıların halka arz öncesinde
              dikkate alması gereken en önemli kaynaklardan biridir.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 md:p-8">
            <h2 className="mb-4 text-xl font-bold text-zinc-900 md:text-2xl">
              Halka Arzlar Nasıl Onay Alır?
            </h2>
            <p className="mb-4 text-zinc-700 leading-relaxed">
              Bir şirketin halka arz edilebilmesi için öncelikle izahname
              hazırlaması ve Sermaye Piyasası Kurulu’na başvuruda bulunması
              gerekir. Bu süreçte şirketin mali tabloları, faaliyet yapısı,
              ortaklık bilgileri, halka arzdan elde edilecek kaynağın kullanım
              amacı ve yatırımcıları ilgilendiren risk unsurları incelenir.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              SPK inceleme sürecinde şirketten ek bilgi, belge veya düzeltme
              talep edebilir. Gerekli güncellemeler tamamlandıktan sonra
              izahname uygun görülürse halka arz onayı verilir. Onay sonrasında
              talep toplama tarihleri, halka arz fiyatı, dağıtım yöntemi,
              tahsisat grupları ve konsorsiyum bilgileri yatırımcıların
              erişimine açılır.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 md:p-8">
            <h2 className="mb-4 text-xl font-bold text-zinc-900 md:text-2xl">
              Yatırımcı Onaylı İzahnamede Nelere Bakmalı?
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                <h3 className="mb-2 font-semibold text-blue-900">
                  Halka Arz Fiyatı ve Büyüklüğü
                </h3>
                <p className="text-sm leading-6 text-zinc-700">
                  Pay başına satış fiyatı, toplam halka arz payı ve halka arz
                  büyüklüğü yatırımcının ilk incelemesi gereken temel
                  başlıklardır.
                </p>
              </div>

              <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                <h3 className="mb-2 font-semibold text-green-900">
                  Fon Kullanım Alanları
                </h3>
                <p className="text-sm leading-6 text-zinc-700">
                  Halka arzdan elde edilecek kaynağın yatırım, işletme
                  sermayesi, borç ödemesi veya farklı alanlarda nasıl
                  kullanılacağı dikkatle incelenmelidir.
                </p>
              </div>

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                <h3 className="mb-2 font-semibold text-amber-900">
                  Finansal Tablolar
                </h3>
                <p className="text-sm leading-6 text-zinc-700">
                  Gelir tablosu, bilanço, kârlılık, borçluluk ve nakit akışı
                  verileri şirketin halka arz öncesi finansal görünümünü
                  anlamak için önemlidir.
                </p>
              </div>

              <div className="rounded-xl border border-purple-200 bg-purple-50 p-4">
                <h3 className="mb-2 font-semibold text-purple-900">
                  Dağıtım ve Tahsisat Bilgileri
                </h3>
                <p className="text-sm leading-6 text-zinc-700">
                  Bireysel yatırımcıya ayrılan pay, dağıtım yöntemi ve
                  kurumsal tahsisat oranları halka arzdan alınabilecek olası
                  lot miktarını etkileyebilir.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 md:p-8">
            <h2 className="mb-4 text-xl font-bold text-zinc-900 md:text-2xl">
              Onaylı İzahname Neden Önemlidir?
            </h2>
            <p className="mb-4 text-zinc-700 leading-relaxed">
              Halka arzlarda yalnızca şirketin adı, sektörü veya kısa vadeli
              tavan beklentisiyle karar vermek sağlıklı bir yaklaşım değildir.
              Onaylı izahname, yatırımcının şirketi daha bütünlüklü şekilde
              değerlendirmesini sağlar. Şirketin ne iş yaptığı, gelirlerini
              nereden elde ettiği, borç yapısı, kârlılık durumu, büyüme planı
              ve halka arz gelirini nasıl kullanacağı bu belgede yer alır.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Bu nedenle onaylı izahname sayfaları, halka arzlara katılmadan
              önce hızlı bilgi almak isteyen yatırımcılar için önemli bir
              rehber niteliği taşır. Buradaki bilgiler yatırım kararı yerine
              geçmez; ancak yatırımcının resmi belgelerde yer alan temel
              başlıkları daha düzenli ve anlaşılır şekilde incelemesine yardımcı
              olur.
            </p>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 md:p-8">
            <h2 className="mb-4 text-xl font-bold text-amber-950 md:text-2xl">
              Bilgilendirme Notu
            </h2>
            <p className="text-amber-950 leading-relaxed">
              Bu sayfada yer alan onaylı izahname özetleri ve halka arz
              açıklamaları bilgilendirme amacıyla hazırlanmıştır. Halka arzlara
              katılmadan önce güncel izahname, tasarruf sahiplerine satış
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
