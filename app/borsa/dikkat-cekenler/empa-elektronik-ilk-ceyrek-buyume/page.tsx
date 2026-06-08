import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";

export const metadata: Metadata = {
  title: "Empa Elektronik İlk Çeyrekte Güçlü Büyüme Kaydetti",
  description:
    "Empa Elektronik 2026 ilk çeyrek sonuçlarında net satışlarını yüzde 28,3 artırarak 1,07 milyar TL'ye ulaştırdı. FAVÖK yüzde 29,8 büyüdü.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/borsa/dikkat-cekenler/empa-elektronik-ilk-ceyrek-buyume",
  },
};

export default function EmpaElektronikPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 py-6 md:px-6">
        <section className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>
          <Link
            href="/borsa/dikkat-cekenler"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </section>

        <article className="rounded-2xl border border-zinc-200 bg-white p-5 md:p-8">
          <header>
            <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
              Empa Elektronik İlk Çeyrekte Güçlü Büyüme Kaydetti
            </h1>
            <p className="mt-2 text-sm text-zinc-500">08.06.2026</p>
          </header>

          <div className="mt-5 space-y-4 text-base leading-8 text-zinc-700 md:text-lg">
            <p>
              Empa Elektronik, 2026 yılının ilk çeyreğine ilişkin finansal
              sonuçlarında güçlü bir büyüme performansı ortaya koydu. Şirketin
              net satış gelirleri, geçen yılın aynı dönemine göre yüzde 28,3
              artarak 1,07 milyar TL seviyesine ulaştı.
            </p>

            <p>
              Elektronik bileşen, yarı iletken, güç elektroniği ve
              elektromekanik ürün çözümleri alanında faaliyet gösteren Empa
              Elektronik, yılın ilk üç ayında hem gelir hem de kârlılık
              tarafında dikkat çeken sonuçlar açıkladı. Şirketin brüt kârı
              yüzde 29,6 artışla 210,4 milyon TL olurken, FAVÖK tarafında da
              yüzde 29,8'lik yükseliş kaydedildi. Böylece FAVÖK 139,2 milyon
              TL seviyesine çıktı.
            </p>

            <p>
              Şirketin vergi öncesi kârı ise ilk çeyrekte 23,8 milyon TL olarak
              gerçekleşti. Finansal görünümde öne çıkan bir diğer nokta da öz
              kaynaklardaki artış oldu. Empa Elektronik'in öz kaynakları geçen
              yılın ilk çeyreğinde 1,72 milyar TL seviyesindeyken, bu yıl aynı
              dönemde yüzde 51,3 artarak 1,77 milyar TL'ye yükseldi. Şirketin
              aktif büyüklüğü ise çeyrek sonunda 2,24 milyar TL olarak
              açıklandı.
            </p>

            <p>
              Empa Elektronik yönetimi, büyüme performansında yeni yatırımların,
              iş birliklerinin, yeni pazarlara açılma stratejisinin ve
              dijitalleşme adımlarının etkili olduğunu belirtiyor. Şirket,
              özellikle sürdürülebilir büyüme hedefi doğrultusunda teknoloji
              odaklı dönüşüm sürecini ön plana çıkarıyor.
            </p>

            <p>
              İlk çeyrek sonuçlarında dikkat çeken başlıklardan biri de şirketin
              yeni çatı markası TIREMO® oldu. Empa Elektronik, bu marka ile
              teknoloji ekosistemini yeniden konumlandırmayı ve Ar-Ge merkezi
              bünyesinde geliştirilen ürün, proje ve hizmetleri daha bütüncül
              bir yapı altında toplamayı hedefliyor.
            </p>

            <p>
              Genel olarak bakıldığında Empa Elektronik'in 2026 ilk çeyrek
              sonuçları, satış gelirleri ve operasyonel kârlılık tarafında
              büyümenin sürdüğünü gösteriyor. Şirketin yeni marka yapılanması
              ve teknoloji odaklı stratejisi, önümüzdeki dönemlerde
              yatırımcıların takip edeceği önemli başlıklar arasında yer
              alabilir.
            </p>
          </div>

          <p className="mt-6 text-sm text-zinc-400">
            08.06.2026 – Bu paylaşım yatırım tavsiyesi değildir.
          </p>
        </article>

        <div className="mt-8">
          <HaberIlgiliBolumler
            slug="empa-elektronik-ilk-ceyrek-buyume"
            baslik="Empa Elektronik Büyüme Borsa"
          />
        </div>
      </div>
    </main>
  );
}
