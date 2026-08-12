export const metadata = {
  title: "Halka Arz Takvimi ve Şirket Bilgileri",
  description:
    "Güncel halka arz takvimi, onaylı ve taslak izahnameler, fiyat, talep tarihleri, lot hesaplama ve işlem başlangıcı açıklanan şirket bilgilerini inceleyin.",
  alternates: { canonical: "https://www.hocaileborsa.com/halka-arz" },
};

import Link from "@/components/NoPrefetchLink";
import { IconTile } from "@/components/icons/IconTile";
import PopulerAramalar from "@/components/PopulerAramalar";

export default function HalkaArzPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 hidden flex-wrap gap-3">
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
            Lot Senaryosu Hesapla
          </Link>

        </div>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          <Link
            href="/halka-arz/takvim"
            prefetch={false}
            aria-label="Halka Arz Takvimi"
            className="group relative flex min-h-[240px] flex-col rounded-2xl border border-blue-300 bg-blue-50 p-3 shadow-sm transition hover:border-blue-400 hover:bg-blue-100"
          >
            <span className="absolute right-5 top-5 z-10 rounded-full bg-blue-700 px-3 py-1 text-xs font-bold text-white">
              Güncel
            </span>
            <div className="relative mb-4 flex aspect-[16/10] items-center justify-center overflow-hidden rounded-2xl bg-white">
              <IconTile
                name="temettu-takvim"
                className="h-28 w-28 transition duration-300 group-hover:bg-blue-100"
              />
            </div>

            <div className="flex flex-1 items-center justify-center px-2 pb-2 text-center">
              <div>
                <h2 className="text-2xl font-semibold leading-tight text-zinc-900 md:text-3xl">
                  Halka Arz Takvimi
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Talep, dağıtım ve işlem tarihlerini takip et
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/halka-arz/onayli-izahnameler"
            prefetch={false}
            aria-label="Onaylı İzahnameler"
            className="group flex min-h-[240px] flex-col rounded-2xl border border-zinc-200 bg-zinc-50 p-3 transition hover:bg-zinc-100"
          >
            <div className="relative mb-4 flex aspect-[16/10] items-center justify-center overflow-hidden rounded-2xl bg-white">
              <IconTile
                name="onayli-izahnameler"
                className="h-28 w-28 transition duration-300 group-hover:bg-blue-100"
              />
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
            <div className="relative mb-4 flex aspect-[16/10] items-center justify-center overflow-hidden rounded-2xl bg-white">
              <IconTile
                name="taslak-izahnameler"
                className="h-28 w-28 transition duration-300 group-hover:bg-blue-100"
              />
            </div>

            <div className="flex flex-1 items-center justify-center px-2 pb-2 text-center">
              <h2 className="text-2xl font-semibold leading-tight text-zinc-900 md:text-3xl">
                Taslak İzahnameler
              </h2>
            </div>
          </Link>

          <Link
            href="/halka-arz/tavan-serisi"
            prefetch={false}
            aria-label="Halka Arz Tavan Serisi"
            className="group flex min-h-[240px] flex-col rounded-2xl border border-zinc-200 bg-zinc-50 p-3 transition hover:bg-zinc-100"
          >
            <div className="relative mb-4 flex aspect-[16/10] items-center justify-center overflow-hidden rounded-2xl bg-white">
              <IconTile
                name="tavan-serisi"
                className="h-28 w-28 transition duration-300 group-hover:bg-blue-100"
              />
            </div>

            <div className="flex flex-1 items-center justify-center px-2 pb-2 text-center">
              <h2 className="text-2xl font-semibold leading-tight text-zinc-900 md:text-3xl">
                Halka Arz Tavan Serisi
              </h2>
            </div>
          </Link>
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
                <span><strong>Lot Senaryosu:</strong> Geçmiş katılım verilerine göre düşük, normal ve yüksek senaryolarda tahmini lotu ve gerekli parayı hesaplayın.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-blue-500">•</span>
                <span><strong>Kazanç Hesaplama:</strong> Beklenen halka arz primini ve lot başına tahmini kazancınızı kazanç hesaplama aracıyla öğrenin.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-blue-500">•</span>
                <span><strong>Tavan Serisi Takibi:</strong> İşlem görmeye başlayan halka arzlarda tavan sayısı, güncel getiri ve son durumu takip edin.</span>
              </li>
            </ul>
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

        <PopulerAramalar className="mt-12" />
      </div>
    </main>
  );
}
