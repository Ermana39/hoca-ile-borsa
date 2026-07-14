import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HaberIlgiliBolumler from "@/components/HaberIlgiliBolumler";
import AuthorBox from "@/components/AuthorBox";
import HaberAltKisim from "@/components/HaberAltKisim";

export const metadata: Metadata = {
  title:
    "Midas Ödeme Sistemleri Alanına Giriyor: Dijital Cüzdan ve Ön Ödemeli Kart Hamlesi",
  description:
    "Midas, elektronik para kurumu lisansı için TCMB’ye başvurdu. Şirket dijital cüzdan, ön ödemeli kart ve para transferi hizmetleriyle ödeme sistemleri alanına hazırlanıyor.",
  alternates: {
    canonical:
      "https://www.hocaileborsa.com/haber/midas-odeme-sistemleri-isine-giriyor",
  },
  openGraph: {
    type: "article",
    images: [
      {
        url: "https://www.hocaileborsa.com/midas-odeme-sistemleri.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.hocaileborsa.com/midas-odeme-sistemleri.webp"],
  },
};

const midasBasliklari = [
  {
    baslik: "Midas TCMB’ye Lisans Başvurusu Yaptı",
    metin:
      "Finans teknolojileri şirketi Midas, tüketici ödeme sistemleri alanında faaliyet gösterebilmek için Türkiye Cumhuriyet Merkez Bankası’na elektronik para kurumu lisansı başvurusunda bulundu. Bu adım, şirketin yalnızca yatırım işlemleriyle sınırlı kalmayıp daha geniş bir finansal teknoloji ekosistemine yönelmek istediğini gösteriyor.",
  },
  {
    baslik: "Dijital Cüzdan ve Ön Ödemeli Kart Hazırlığı",
    metin:
      "Midas’ın planladığı yeni yapı kapsamında kullanıcıların hesaplarındaki bakiyeyi dijital cüzdan üzerinden kullanabilmesi ve ön ödemeli kart aracılığıyla harcama yapabilmesi hedefleniyor. Bu model, yatırım hesabında duran nakit bakiyenin günlük finansal işlemlerde daha aktif kullanılabilmesinin önünü açabilir.",
  },
  {
    baslik: "Yatırım Uygulamasından Finansal Platforma Geçiş",
    metin:
      "Midas bugüne kadar hisse senedi ve yatırım ürünlerine erişim sağlayan dijital platform kimliğiyle öne çıkıyordu. Ödeme sistemleri tarafına atılacak adım ise şirketin kullanıcıyla temasını yalnızca alım satım işlemleriyle sınırlı bırakmayıp günlük para yönetimi, ödeme ve transfer tarafına da taşımayı amaçladığını gösteriyor.",
  },
  {
    baslik: "Para Transferi Hizmetleri de Gündemde",
    metin:
      "Şirketin yeni hizmet kapsamında yurt içi ve yurt dışı para transferi hizmetlerini de değerlendirdiği belirtiliyor. Bu alanın devreye alınması durumunda Midas, yatırım uygulaması kimliğinin yanında daha kapsamlı bir finansal teknoloji platformu olarak konumlanabilir.",
  },
  {
    baslik: "Süreç Henüz Başvuru Aşamasında",
    metin:
      "Haberde öne çıkan kritik nokta, sürecin henüz lisans başvurusu aşamasında olmasıdır. Elektronik para ve ödeme hizmetleri alanında faaliyete geçilebilmesi için gerekli yasal izinlerin tamamlanması gerekiyor. Bu nedenle gelişme, kesinleşmiş bir faaliyet başlangıcından çok stratejik hazırlık ve regülasyon süreci olarak okunmalıdır.",
  },
  {
    baslik: "Türkiye’de Elektronik Para Rekabeti Büyüyor",
    metin:
      "Türkiye’de dijital cüzdan, ön ödemeli kart, elektronik para ve para transferi hizmetleri son yıllarda hızla büyüyen alanlar arasında yer alıyor. Bloomberg HT’de yer alan habere göre TCMB verileri itibarıyla Türkiye’de faaliyet gösteren 57 elektronik para kurumu bulunuyor. Midas’ın bu alana yönelmesi, fintech rekabetinin daha da hareketlenebileceğine işaret ediyor.",
  },
  {
    baslik: "Kullanıcı Deneyimi Belirleyici Olacak",
    metin:
      "Midas’ın ödeme sistemleri tarafındaki başarısında lisans sürecinin yanı sıra ürünün kullanıcı deneyimi, kart ve cüzdan özellikleri, transfer hizmetlerinin kapsamı ve yatırım hesabıyla ödeme deneyiminin ne kadar sorunsuz birleştirileceği belirleyici olacak.",
  },
  {
    baslik: "Fintech Sektörü İçin Dikkat Çeken Hamle",
    metin:
      "Bu gelişme, finans teknolojileri sektöründe yatırım, ödeme, cüzdan ve para transferi hizmetlerinin giderek birbirine yaklaştığını gösteriyor. Midas’ın hamlesi, kullanıcıların tek bir platform üzerinden hem yatırım hem de günlük finansal işlemlerini yönetebileceği daha bütünleşik modellerin öne çıkabileceğine işaret ediyor.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline:
    "Midas Ödeme Sistemleri Alanına Giriyor: Dijital Cüzdan ve Ön Ödemeli Kart Hamlesi",
  description:
    "Midas, elektronik para kurumu lisansı için TCMB’ye başvurdu. Şirket dijital cüzdan, ön ödemeli kart ve para transferi hizmetleriyle ödeme sistemleri alanına hazırlanıyor.",
  datePublished: "2026-06-19T15:23:00+03:00",
  dateModified: "2026-06-19T15:23:00+03:00",
  url: "https://www.hocaileborsa.com/haber/midas-odeme-sistemleri-isine-giriyor",
  author: {
    "@type": "Person",
    "@id": "https://www.hocaileborsa.com/yazar/erman-hoca#person",
    name: "Erman Hoca",
    url: "https://www.hocaileborsa.com/yazar/erman-hoca",
  },
  publisher: {
    "@type": "Organization",
    "@id": "https://www.hocaileborsa.com/#organization",
    name: "Hoca İle Borsa",
    url: "https://www.hocaileborsa.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.hocaileborsa.com/icon-512.png",
    },
  },
  image: "https://www.hocaileborsa.com/midas-odeme-sistemleri.webp",
  inLanguage: "tr",
};

export default function HaberMidasOdemeSistemleriPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-6 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.07)]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
            <Image
              src="/midas-odeme-sistemleri.webp"
              alt="Midas ödeme sistemleri dijital cüzdan ve ön ödemeli kart hazırlığı"
              fill

              sizes="(min-width: 1024px) 896px, 100vw"
className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              Midas Ödeme Sistemleri Alanına Giriyor: Dijital Cüzdan ve Ön
              Ödemeli Kart Hamlesi
            </h1>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">
                Fintech
              </span>
              <time dateTime="2026-06-19" className="text-sm text-slate-500">
                19 Haziran 2026
              </time>
              <span className="text-slate-300">·</span>
              <Link
                href="/yazar/erman-hoca"
                className="text-sm font-semibold text-slate-500 hover:text-blue-600"
              >
                Erman Hoca
              </Link>
            </div>

            <div className="mt-6 space-y-6 text-base leading-8 text-slate-700 md:text-lg">
              <p>
                Türkiye’de yatırım uygulamasıyla bilinen Midas, faaliyet alanını
                ödeme sistemleri tarafına genişletmek için yeni bir adım attı.
                Şirketin, elektronik para kurumu lisansı almak amacıyla Türkiye
                Cumhuriyet Merkez Bankası’na başvurduğu belirtildi.
              </p>

              <p>
                Bloomberg HT’de yer alan habere göre Midas’ın kurucusu Egem
                Eraslan, şirketin müşterilerin hesaplarındaki parayı
                harcayabilmelerini sağlayacak dijital cüzdan ve ön ödemeli kart
                hizmeti üzerinde çalıştığını ifade etti. Bu gelişme, Midas’ın
                yatırım platformu kimliğini ödeme, kart ve para transferi gibi
                günlük finansal işlemlerle genişletme hedefini öne çıkarıyor.
              </p>

              <div className="space-y-5">
                {midasBasliklari.map((haber) => (
                  <section
                    key={haber.baslik}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <h2 className="text-base font-semibold text-slate-800">
                      {haber.baslik}
                    </h2>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      {haber.metin}
                    </p>
                  </section>
                ))}
              </div>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium leading-7 text-emerald-900 md:text-base">
                Haberin ana mesajı; Midas’ın yatırım uygulaması kimliğini ödeme
                sistemleri tarafına taşıyacak bir hazırlık içinde olmasıdır.
                Şirketin dijital cüzdan, ön ödemeli kart ve para transferi
                hizmetleriyle kullanıcıların günlük finansal işlemlerine de
                dokunmayı hedeflediği görülüyor.
              </div>

              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm font-medium leading-7 text-blue-900 md:text-base">
                Bu gelişme kesinleşmiş bir faaliyet başlangıcı değil, lisans
                başvurusu ve hazırlık süreci olarak izlenmelidir. Ödeme
                sistemleri tarafında asıl belirleyici başlıklar; TCMB lisans
                sürecinin sonucu, hizmetlerin kapsamı, kullanıcı deneyimi ve
                Midas’ın yatırım hesabı ile ödeme altyapısını nasıl
                birleştireceği olacak.
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm leading-7 text-slate-600 md:text-base">
                <span className="font-semibold text-slate-800">Kaynak: </span>
                <a
                  href="https://www.bloomberght.com/midas-odeme-sistemleri-isine-giriyor-3780677"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-700 hover:text-blue-800"
                >
                  Bloomberg HT
                </a>
              </div>

              <HaberIlgiliBolumler
                slug="midas-odeme-sistemleri-isine-giriyor"
                baslik="Midas Ödeme Sistemleri Alanına Giriyor"
              />

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-medium leading-7 text-amber-900 md:text-base">
                ⚠️ Bu haber bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
              </div>
            </div>
          </div>

          <HaberAltKisim href="/haber/midas-odeme-sistemleri-isine-giriyor" />

          <AuthorBox />
        </article>
      </div>
    </main>
  );
}