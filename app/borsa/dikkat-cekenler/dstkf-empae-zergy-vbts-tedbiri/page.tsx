import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";

export const metadata: Metadata = {
  title: "DSTKF, EMPAE ve ZERGY Paylarına VBTS Tedbiri Geldi",
  description:
    "Borsa İstanbul, DSTKF, EMPAE ve ZERGY paylarına VBTS kapsamında açığa satış ve kredili işlem yasağı getirdi. Tedbir 14 Mayıs – 12 Haziran 2026 arası geçerli.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/borsa/dikkat-cekenler/dstkf-empae-zergy-vbts-tedbiri",
  },
};

export default function VbtsTedbiriPage() {
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
              DSTKF, EMPAE ve ZERGY Paylarına VBTS Tedbiri Geldi
            </h1>
            <p className="mt-2 text-sm text-zinc-500">08.06.2026</p>
          </header>

          <div className="mt-5 space-y-4 text-base leading-8 text-zinc-700 md:text-lg">
            <p>
              Borsa İstanbul, Volatilite Bazlı Tedbir Sistemi kapsamında üç
              hisse için yeni işlem tedbiri uygulanacağını duyurdu. Kamuyu
              Aydınlatma Platformu'nda yayımlanan açıklamaya göre DSTKF.E,
              EMPAE.E ve ZERGY.E payları belirli bir süre boyunca açığa satışa
              ve kredili işlemlere konu edilemeyecek.
            </p>

            <p>
              Alınan karar doğrultusunda söz konusu tedbir, 14 Mayıs 2026 seans
              başından itibaren başlayacak ve 12 Haziran 2026 seans sonuna kadar
              geçerli olacak. Bu süre boyunca ilgili paylarda yatırımcılar
              kredili işlem yapamayacak ve açığa satış gerçekleştiremeyecek.
            </p>

            <p>
              VBTS kapsamında uygulanan bu tür tedbirler, pay piyasasında olağan
              dışı fiyat ve miktar hareketlerinin ardından devreye
              alınabiliyor. Amaç, işlem düzeninin korunması ve piyasada sağlıklı
              fiyat oluşumunun desteklenmesi olarak değerlendiriliyor.
            </p>

            <p>
              Borsa İstanbul açıklamasında ayrıca, VBTS tedbirlerinin payın
              işlem gördüğü pazar, platform ya da diğer işlem esaslarından
              bağımsız olarak uygulandığı belirtildi. Yani ilgili hisselerde
              başka nedenlerle farklı işlem kuralları geçerli olsa bile, VBTS
              kapsamında alınan bu karar tedbir süresinin sonuna kadar devam
              edecek.
            </p>

            <p>
              Bu gelişme, özellikle DSTKF, EMPAE ve ZERGY hisselerinde işlem
              yapan yatırımcılar açısından yakından takip edilmesi gereken bir
              başlık olarak öne çıkıyor. Tedbir kararı hisse işlemlerini
              tamamen durdurmamakla birlikte, kredili işlem ve açığa satış
              imkanını geçici olarak sınırlandırıyor.
            </p>
          </div>

          <p className="mt-6 text-sm text-zinc-400">
            08.06.2026 – Bu paylaşım yatırım tavsiyesi değildir.
          </p>
        </article>

        <div className="mt-8">
          <HaberIlgiliBolumler
            slug="dstkf-empae-zergy-vbts-tedbiri"
            baslik="VBTS Tedbir Borsa İstanbul"
          />
        </div>
      </div>
    </main>
  );
}
