import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    " CHP KURULTAY DAVASI'NDA 'MUTLAK BUTLAN' KARARI ÇIKTI",
  description:
    " CHP KURULTAY DAVASI'NDA 'MUTLAK BUTLAN' KARARI ÇIKTI",
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

export default function Haber982Page() {
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
              src="/haber982.jpg"
              alt="fitch not"
              fill
              unoptimized
              className="object-contain"
            />
          </div>

          <div className="p-5 md:p-8">
            <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
               CHP KURULTAY DAVASI'NDA 'MUTLAK BUTLAN' KARARI ÇIKTI
            </h1>

            <div className="mt-6 space-y-4 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                Ankara’daki mahkeme sürecinde, CHP’nin 4-5 Kasım 2023 tarihlerinde gerçekleştirilen 38. Olağan Kurultayı’na ilişkin önemli bir karar verildi.
              </p>
<p>Mahkeme, çeşitli davaların birleştirilmesi sonrası yapılan değerlendirmede istinaf başvurularını kabul ederek önceki yerel mahkeme kararını kaldırdı. Yeni kararda, CHP’nin 38. Olağan Kurultayı’nın “mutlak butlan” yani kesin hükümsüzlük nedeniyle geçersiz olduğunun tespitine hükmedildi.  </p>
<p>Karar kapsamında:</p>
<p></p>
              <p>4-5 Kasım 2023 tarihli CHP 38. Olağan Kurultayı’nın iptaline,</p>
              <p>Bu tarihten sonra yapılan olağan ve olağanüstü kurultaylar ile alınan kararların geçersiz sayılmasına,</p>
              <p>Kurultay öncesindeki yönetime dönülmesine,</p>
              <p>Eski Genel Başkan Kemal Kılıçdaroğlu ve önceki parti organlarının görevlerine aynen devam etmesine karar verildi.</p>
              <p>Mahkeme ayrıca, 8 Ekim 2023 tarihinde yapılan CHP İstanbul İl Kongresi’nin de geçersiz olduğuna hükmetti. Bu kapsamda il kongresi öncesindeki yönetimin görevine devam etmesi kararlaştırıldı.</p>
              <p>Öte yandan mahkeme, ihtiyati tedbir talebini de kabul ederek mevcut Genel Başkan Özgür Özel ile birlikte Merkez Yönetim Kurulu, Parti Meclisi ve Yüksek Disiplin Kurulu üyelerinin tedbiren görevden uzaklaştırılmasına karar verdi.</p>
              <p>Kararın kesinleşme sürecinin ardından siyasi ve hukuki tartışmaların devam etmesi bekleniyor.</p>
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