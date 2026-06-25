export const metadata = {
  title: "Hesaplayıcılar",
  description:
    "Mevduat, kredi, borsa, temettü, gayrimenkul, emeklilik, vergi, döviz ve altın için tüm finansal hesaplayıcılara tek sayfadan ulaşın.",
  alternates: { canonical: "https://www.hocaileborsa.com/hesaplayici" },
};

import Link from "next/link";
import { IconTile } from "@/components/icons/IconTile";
import type { CategoryIconName } from "@/components/icons/CategoryIcon";

type Kutu = { title: string; href: string; description: string; icon: CategoryIconName };
type Grup = { baslik: string; kutular: Kutu[] };

const gruplar: Grup[] = [
  {
    baslik: "Birikim & Faiz",
    kutular: [
      {
        title: "Mevduat Faizi Hesaplayıcı",
        href: "/mevduat-kredi-faizleri/mevduat-faizi-oranlari",
        description: "Ana para, faiz oranı, vade ve stopaja göre mevduat getirinizi hesaplayın.",
        icon: "mevduat-faizi",
      },
      {
        title: "Bileşik Faiz / Birikim Simülatörü",
        href: "/hesaplayici/bilesik-faiz",
        description: "Düzenli aylık katkıyla bileşik faiz altında birikiminizin yıl bazında gelişimini görün.",
        icon: "bilesik-faiz",
      },
      {
        title: "Enflasyon / Satın Alma Gücü",
        href: "/hesaplayici/enflasyon",
        description: "Bir TL tutarın enflasyon karşısında satın alma gücünü ve değer kaybını hesaplayın.",
        icon: "enflasyon",
      },
    ],
  },
  {
    baslik: "Kredi",
    kutular: [
      {
        title: "Konut Kredisi Hesaplayıcı",
        href: "/mevduat-kredi-faizleri/konut-kredisi-oranlari",
        description: "Konut kredisi taksit ve toplam ödeme tutarınızı hesaplayın.",
        icon: "konut-kredisi",
      },
      {
        title: "Tüketici Kredisi Hesaplayıcı",
        href: "/mevduat-kredi-faizleri/tuketici-faizi-oranlari",
        description: "Tüketici kredisi taksit ve geri ödeme tutarınızı hesaplayın.",
        icon: "tuketici-faizi",
      },
      {
        title: "Taşıt Kredisi Hesaplayıcı",
        href: "/mevduat-kredi-faizleri/tasit-kredisi-oranlari",
        description: "Taşıt kredisi taksit ve geri ödeme tutarınızı hesaplayın.",
        icon: "tasit-kredisi",
      },
    ],
  },
  {
    baslik: "Borsa & Yatırım",
    kutular: [
      {
        title: "Hisse Kâr / Zarar Hesaplama",
        href: "/borsa/kar-zarar-hesaplama",
        description: "Alış-satış fiyatına, komisyon ve stopaja göre net kâr/zarar ve getiri oranınızı bulun.",
        icon: "kar-zarar",
      },
      {
        title: "Ortalama Maliyet Hesaplama",
        href: "/borsa/ortalama-maliyet",
        description: "Birden çok alımdan ağırlıklı ortalama hisse maliyetinizi hesaplayın.",
        icon: "ortalama-maliyet",
      },
      {
        title: "Sermaye Artırımı Hesaplama",
        href: "/borsa/sermaye-artirimi",
        description: "Bedelli ve bedelsiz sermaye artırımı sonrası lot ve maliyetinizi hesaplayın.",
        icon: "sermaye-artirimi",
      },
      {
        title: "Eurobond Getiri Hesaplayıcı",
        href: "/hesaplayici/eurobond",
        description: "Eurobondun kupon getirisini, YTM ve TL karşılığı kazancını hesaplayın.",
        icon: "tahvil-eurobond",
      },
      {
        title: "Tahvil / Bono Getiri Hesaplayıcı",
        href: "/hesaplayici/tahvil",
        description: "Tahvil kupon geliri, basit getiri ve vadeye kadar getiriyi (YTM) hesaplayın.",
        icon: "tahvil-eurobond",
      },
    ],
  },
  {
    baslik: "Halka Arz",
    kutular: [
      {
        title: "Halka Arz Kazanç Hesaplama",
        href: "/halka-arz/kazanc-hesapla",
        description: "Halka arz fiyatı, lot ve beklenen tavan serisine göre tahmini kazancınızı hesaplayın.",
        icon: "halka-arz",
      },
      {
        title: "Halka Arz Talep (Lot) Hesaplama",
        href: "/halka-arz/talep-hesapla",
        description: "Başvuru tutarı ve dağıtım varsayımına göre size düşebilecek tahmini lot ve maliyeti hesaplayın.",
        icon: "halka-arz",
      },
    ],
  },
  {
    baslik: "Temettü",
    kutular: [
      {
        title: "Temettü Hesaplama Aracı",
        href: "/temettu/temettu-hesaplama-araci",
        description: "Lot ve lot başına temettüye göre brüt/net temettü tutarını hesaplayın.",
        icon: "temettu",
      },
      {
        title: "Temettü Verimi Hesaplama",
        href: "/temettu/temettu-verimi-hesaplama",
        description: "Hisse fiyatı ve temettüye göre temettü verim oranınızı bulun.",
        icon: "oran-analizi",
      },
    ],
  },
  {
    baslik: "Gayrimenkul",
    kutular: [
      {
        title: "Kira Artış Hesaplayıcı (TÜFE)",
        href: "/hesaplayici/kira-artis",
        description: "TÜFE 12 aylık ortalama tavanına veya özel orana göre yeni kira bedelinizi hesaplayın.",
        icon: "kira-artis",
      },
    ],
  },
  {
    baslik: "Emeklilik & Vergi",
    kutular: [
      {
        title: "BES Birikim Hesaplayıcı",
        href: "/hesaplayici/bes",
        description: "Aylık katkı ve devlet katkısıyla emeklilikteki birikiminizi grafik üzerinde görün.",
        icon: "emeklilik-fonlari",
      },
      {
        title: "Yatırım Geliri Vergi Hesaplayıcı",
        href: "/hesaplayici/gelir-vergisi",
        description: "Faiz, temettü ve menkul kıymet gelirinizin stopaj ve net tutarını hesaplayın.",
        icon: "vergi",
      },
      {
        title: "Kıdem Tazminatı Hesaplayıcı",
        href: "/hesaplayici/kidem-tazminati",
        description: "Brüt maaş ve çalışma sürenize göre kıdem tazminatınızı tavan dahilinde hesaplayın.",
        icon: "kidem-tazminati",
      },
    ],
  },
  {
    baslik: "Döviz & Altın",
    kutular: [
      {
        title: "Altın Hesaplama Aracı",
        href: "/hesaplayici/altin",
        description: "Gram, çeyrek, yarım veya tam altın için toplam değer ve spread hesaplaması.",
        icon: "altin",
      },
      {
        title: "Döviz Bazlı Getiri Hesaplama",
        href: "/hesaplayici/doviz-getiri",
        description: "Başlangıç-bitiş kuruna göre TL bazında getirinizi ve enflasyon karşılaştırmasını yapın.",
        icon: "doviz",
      },
    ],
  },
];

export default function HesaplayiciHubPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <nav className="mb-5 flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
          <Link href="/" prefetch={false} className="hover:text-blue-600 transition">Ana Sayfa</Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-700 font-medium">Hesaplayıcılar</span>
        </nav>

        <section className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900 md:text-4xl">Hesaplayıcılar</h1>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-500 md:text-base">
            Borsa, mevduat, kredi, temettü, gayrimenkul, emeklilik, vergi, döviz ve altın için hazırlanmış tüm hesaplama
            araçlarına bu sayfa üzerinden ulaşabilirsiniz. Tüm hesaplamalar tarayıcınızda yapılır, sunucuya veri
            gönderilmez.
          </p>
        </section>

        {gruplar.map((grup) => (
          <section key={grup.baslik} className="mb-10">
            <h2 className="mb-4 text-xl font-bold text-slate-900 md:text-2xl">{grup.baslik}</h2>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
              {grup.kutular.map((item) => (
                <Link
                  key={item.href + item.title}
                  href={item.href}
                  prefetch={false}
                  aria-label={item.title}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_8px_30px_rgba(15,23,42,0.10)] md:p-5"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <IconTile
                      name={item.icon}
                      className="h-11 w-11 shrink-0 transition duration-300 group-hover:bg-blue-100"
                    />
                    <h3 className="text-base font-bold text-slate-900 md:text-lg">{item.title}</h3>
                  </div>
                  <p className="text-sm leading-6 text-slate-500">{item.description}</p>
                  <div className="mt-auto pt-3 flex items-center gap-1 text-xs font-semibold text-blue-600 transition duration-300 group-hover:gap-2">
                    <span>Hesapla</span>
                    <span>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <section className="rounded-2xl bg-white p-5 md:p-7">
          <h2 className="mb-4 text-2xl font-bold text-zinc-900">Hesaplayıcılar hakkında</h2>
          <div className="space-y-4 text-sm leading-7 text-zinc-700 md:text-base">
            <p>
              Bu sayfada borsa yatırımcıları, tasarruf sahipleri ve çalışanlar için hazırlanmış kâr/zarar, ortalama
              maliyet, temettü, mevduat, kredi, kira, BES, vergi, kıdem tazminatı, altın ve döviz getirisi gibi araçları
              bir arada bulabilirsiniz.
            </p>
            <p className="text-zinc-500">Bu araçlar yatırım tavsiyesi değildir.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
