import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "26 Mayıs 2026 Salı KAP Bildirimleri Özeti",
  description:
    "26 Mayıs 2026 Salı KAP Bildirimleri Özeti",
};

function ReklamAlani({ variant = "yatay" }: { variant?: "yatay" | "icerik" }) {
  const alanClass =
    variant === "icerik"
      ? "min-h-[220px] sm:min-h-[250px] lg:min-h-[280px]"
      : "min-h-[100px] sm:min-h-[110px] lg:min-h-[120px]";

  return (
    <section
      aria-label="Reklam alanı"
      className={`w-full overflow-hidden rounded-2xl ${alanClass}`}
    >
      <div className={`w-full ${alanClass}`} />
    </section>
  );
}

export default function Haber980Page() {
  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
            <Image
              src="/haber980.png"
              alt="fitch not"
              fill
              unoptimized
              className="object-contain"
            />
          </div>

          <div className="p-5 md:p-8">
            <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
              26 Mayıs 2026 Salı KAP Bildirimleri Özeti
            </h1>

            <div className="mt-6 space-y-4 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                
              </p>
<p>Borsa İstanbul’da 26 Mayıs 2026 Salı günü yarım gün işlem gerçekleşti. Gün içinde KAP’a düşen başlıca bildirimlerde bedelsiz sermaye artırımı, VBTS tedbirleri, genel kurul kararları, kâr payı açıklamaları ve özel durum bildirimleri öne çıktı.

MHR GYO (MHRGY)
Şirket, iç kaynaklardan bedelsiz sermaye artırımı kararı aldı. Mevcut sermayenin 1,24 milyar TL’den 3 milyar TL’ye çıkarılması planlanıyor.

Borsa İstanbul / VBTS Tedbirleri
GESAN, HRKET ve ICBCT payları için Volatilite Bazlı Tedbir Sistemi kapsamında işlem tedbiri uygulanacağı duyuruldu.

GESAN
GESAN payında işlem sırasında pay bazında devre kesici uygulaması devreye girdi.

ALCTL
Şirket, 2025 faaliyet yılına ilişkin olağan genel kurul gündemi ve kâr payı dağıtım bildirimini açıkladı.

SMARTİKS (SMART)
Şirket tarafından özel durum açıklaması yapıldı. Bildirimin genel özel durum açıklaması niteliğinde olduğu görüldü.

FLAP Kongre (FLAP)
Şirket, “pay devri” konulu özel durum açıklaması yaptı.

AHES GYO (AHSGY)
2025 yılı kâr payı dağıtımına ilişkin yönetim kurulu önerisinde düzeltme yapıldı. GYO statüsü nedeniyle stopaj oranının sıfır olduğu belirtildi.

KARSAN (KARSN)
İsveç/Göteborg’da hizmet veren otonom araçla ilgili basında çıkan haberlere ilişkin açıklama yapıldı.

REEDER (REEDR)
Kurumsal Yönetim Bilgi Formu güncellendi. Bildirim daha çok idari/kurumsal güncelleme niteliğinde.

BOR Şeker (BORSK)
Şirket, nakit kâr payı ve pay biçiminde kâr payı dağıtılmamasını teklif etti. VUK kayıtlarında dönem kârı görünmesine rağmen SPK/TFRS tarafında zarar bulunduğu belirtildi.

Klimasan (KLMSN)
Şirket tarafından özel durum açıklaması yapıldı.

⚠️ Bu özet bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.</p>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
        </article>

        <section className="mt-8">
          <ReklamAlani variant="icerik" />
        </section>
      </div>
    </main>
  );
}