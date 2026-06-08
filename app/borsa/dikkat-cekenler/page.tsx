export const metadata = {
  title: "Dikkat Çeken Haberler ve Borsa Gelişmeleri",
  description:
    "Borsa İstanbul'da dikkat çeken şirket haberleri, prim üretimi, ihracat, sermaye artırımı, temettü ve satış verileri. Güncel piyasa gündemi.",
  alternates: {
    canonical: "https://www.hocaileborsa.com/borsa/dikkat-cekenler",
  },
};

import Link from "next/link";

const haberler = [
  {
    title: "DSTKF, EMPAE ve ZERGY Paylarına VBTS Tedbiri Geldi",
    href: "/borsa/dikkat-cekenler/dstkf-empae-zergy-vbts-tedbiri",
    tarih: "08.06.2026",
    etiket: "Tedbir",
  },
  {
    title: "Empa Elektronik İlk Çeyrekte Güçlü Büyüme Kaydetti",
    href: "/borsa/dikkat-cekenler/empa-elektronik-ilk-ceyrek-buyume",
    tarih: "08.06.2026",
    etiket: "Bilanço",
  },
  {
    title: "Sigorta Şirketlerinde Prim Üretimi Artışı – AGESA ve ANSGR",
    href: "/borsa/dikkat-cekenler/sigorta-prim-uretimi-artisi-agesa-ansgr",
    tarih: "08.06.2026",
    etiket: "Sigorta",
  },
  {
    title: "AKHAN'dan Gana Pazarına Makarna İhracatı",
    href: "/borsa/dikkat-cekenler/akhan-gana-makarna-ihracati",
    tarih: "08.06.2026",
    etiket: "İhracat",
  },
  {
    title: "ALTNY'de Kayıtlı Sermaye Tavanı 5 Milyar TL'ye Yükseltildi",
    href: "/borsa/dikkat-cekenler/altny-kayitli-sermaye-tavani-artisi",
    tarih: "08.06.2026",
    etiket: "Sermaye",
  },
  {
    title: "CWENE'den ABD'de 100 MW Kapasiteli Lisans Anlaşması",
    href: "/borsa/dikkat-cekenler/cwene-abd-lisans-anlasmasi",
    tarih: "08.06.2026",
    etiket: "Enerji",
  },
  {
    title: "EBEBK Satış Adedi Artışı – Mayıs 2026 Verileri",
    href: "/borsa/dikkat-cekenler/ebebk-satis-adedi-artisi",
    tarih: "08.06.2026",
    etiket: "Perakende",
  },
  {
    title: "DERHL'den Yüzde 401 Oranında Bedelsiz Sermaye Artırımı Kararı",
    href: "/borsa/dikkat-cekenler/derhl-bedelsiz-sermaye-artirimi",
    tarih: "08.06.2026",
    etiket: "Sermaye",
  },
  {
    title: "Borsa İstanbul'da 10 Şirketten Temettü Kararı",
    href: "/borsa/dikkat-cekenler/bist-temettu-kararlari",
    tarih: "06.06.2026",
    etiket: "Temettü",
  },
  {
    title: "Borsa İstanbul'da 4 Şirketten Pay Geri Alımı",
    href: "/borsa/dikkat-cekenler/bist-pay-geri-alim-islemleri",
    tarih: "05.06.2026",
    etiket: "Geri Alım",
  },
];

const ETIKET_RENK: Record<string, string> = {
  Sigorta: "text-purple-700",
  İhracat: "text-sky-700",
  Sermaye: "text-amber-700",
  Enerji: "text-green-700",
  Perakende: "text-rose-700",
  Temettü: "text-emerald-700",
  "Geri Alım": "text-blue-700",
  Tedbir: "text-red-700",
  Bilanço: "text-indigo-700",
};

export default function DikkatCekenlerPage() {
  return (
    <main className="min-h-screen px-4 py-6 md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex gap-3">
          <Link
            href="/"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>
          <Link
            href="/borsa"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <section className="mb-6">
          <h1 className="text-3xl font-bold text-zinc-900">
            Dikkat Çeken Haberler
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-700 md:text-base">
            Borsa İstanbul ve finans gündeminde öne çıkan şirket haberleri,
            dikkat çeken piyasa gelişmeleri ve yatırımcıların takip ettiği önemli
            başlıkları bu sayfadan inceleyebilirsiniz.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 xl:grid-cols-3">
          {haberler.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_8px_30px_rgba(15,23,42,0.10)] md:p-5"
            >
              <div className="mb-2 flex items-center justify-between">
                <p
                  className={`text-[11px] font-bold uppercase tracking-[0.16em] ${ETIKET_RENK[item.etiket] ?? "text-blue-700"}`}
                >
                  {item.etiket}
                </p>
                <span className="text-[11px] text-zinc-400">{item.tarih}</span>
              </div>
              <h2 className="text-base font-black leading-snug tracking-tight text-slate-950 transition group-hover:text-blue-700 md:text-lg">
                {item.title}
              </h2>
              <div className="mt-auto flex items-center gap-1 pt-3 text-xs font-semibold text-blue-600 transition duration-300 group-hover:gap-2">
                <span>Oku</span>
                <span>→</span>
              </div>
            </Link>
          ))}
        </section>

        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">
            Dikkat Çeken Haberler Hakkında
          </h2>

          <p className="mb-4 leading-7 text-zinc-700">
            Dikkat çeken haberler sayfası, Borsa İstanbul ve finans
            piyasalarında öne çıkan gelişmeleri hızlı şekilde takip etmek
            isteyen kullanıcılar için hazırlanmıştır. Bu sayfada yatırımcıların
            ilgisini çeken şirket haberleri, prim üretimi verileri, ihracat
            gelişmeleri, sermaye artırımı kararları ve temettü duyuruları tek
            alanda listelenmektedir.
          </p>

          <p className="mb-4 leading-7 text-zinc-700">
            Gün içerisinde yayınlanan KAP bildirimleri, şirket aksiyonları ve
            sektörel gelişmeler yatırım kararlarında yol gösterici olabilir. Bu
            nedenle güncel haberleri takip etmek isteyen kullanıcılar için
            dikkat çekenler bölümü önemli bir kaynak sunar.
          </p>

          <p className="leading-7 text-zinc-700">
            Güncel borsa haberleri, dikkat çeken şirket gelişmeleri, sermaye
            artırımı kararları, temettü duyuruları ve piyasadaki önemli
            gelişmeler için bu sayfayı düzenli olarak takip edebilirsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}
