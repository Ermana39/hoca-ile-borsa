import Link from "next/link";

const egitimIcerikleri = [
  {
    title: "Temettü Nedir?",
    href: "/temettu/temettu-egitimi/temettu-nedir",
    description:
      "Temettü, bir şirketin elde ettiği kârın belirli kısmını ortaklarıyla nakit veya bedelsiz pay şeklinde paylaşmasıdır. Borsada temettü yatırımı denildiğinde genelde yatırımcının hesabına nakit geçen kâr payı anlaşılır. Temettü almak, sadece hisseyi taşımaktan ibaret değildir; şirketin kârlılığı, nakit üretme gücü ve dağıtım politikası da önemlidir.",
  },
  {
    title: "Brüt / Net Temettü Farkı",
    href: "/temettu/temettu-egitimi/brut-net-temettu-farki",
    description:
      "Brüt temettü, şirketin hisse başına açıkladığı toplam kâr payıdır. Net temettü ise yasal kesintiler sonrası yatırımcının hesabına geçen gerçek tutardır. Yani ekranda gördüğünüz temettü miktarı ile hesabınıza geçen para her zaman aynı olmayabilir. Bu farkı bilmek, gerçek nakit getiriyi doğru hesaplamak için önemlidir.",
  },
  {
    title: "Hak Kullanım Tarihi Ne Demek?",
    href: "/temettu/temettu-egitimi/hak-kullanim-tarihi-ne-demek",
    description:
      "Hak kullanım tarihi, temettü alma hakkının resmen devreye girdiği gündür. Bir yatırımcının temettüden yararlanabilmesi için ilgili tarihten önce hisseye sahip olması gerekir. Bu tarih geldiğinde hisse fiyatında teorik bir düzeltme görülür. Bu nedenle temettüde en çok karıştırılan konulardan biri hak kullanım gününün ne zaman olduğu ve yatırımcıyı nasıl etkilediğidir.",
  },
  {
    title: "Ödeme Tarihi Ne Demek?",
    href: "/temettu/temettu-egitimi/odeme-tarihi-ne-demek",
    description:
      "Ödeme tarihi, hak kazanılan temettünün yatırımcı hesabına fiilen geçtiği gündür. Hak kullanım tarihi ile ödeme tarihi aynı gün olmayabilir. Bu yüzden bir yatırımcı temettü hakkını kazanmış olsa bile nakdin hesabına geçmesini birkaç gün bekleyebilir. Süreci doğru anlamak, portföy planlaması açısından önem taşır.",
  },
  {
    title: "Temettü Verimi Nasıl Hesaplanır?",
    href: "/temettu/temettu-egitimi/temettu-verimi-nasil-hesaplanir",
    description:
      "Temettü verimi, dağıtılan temettünün hisse fiyatına oranlanmasıyla hesaplanır ve yatırımcının aldığı kâr payının fiyata göre ne kadar güçlü olduğunu gösterir. Ancak yüksek temettü verimi tek başına yeterli değildir. Şirketin düzenli kâr üretip üretmediği, borçluluğu ve gelecekte de benzer dağıtım yapıp yapamayacağı birlikte değerlendirilmelidir.",
  },
  {
    title: "Temettüden Sonra Fiyat Neden Düşer?",
    href: "/temettu/temettu-egitimi/temettuden-sonra-fiyat-neden-duser",
    description:
      "Temettü sonrası hisse fiyatında görülen düşüş, çoğu zaman panik yapılacak bir durum değildir. Bunun nedeni, dağıtılan nakdin şirket bünyesinden çıkması ve teorik olarak hisse fiyatından düşülmesidir. Yani fiyatın geri gelmesi çoğu zaman teknik bir düzeltmedir. Bu mantığı bilmek, temettü günlerinde yanlış yorum yapmayı önler.",
  },
];

export default function TemettuEgitimiPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex gap-3">
          <Link
            href="/"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/temettu"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">Temettü Eğitimi</h1>

        <div className="space-y-4">
          {egitimIcerikleri.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="block rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-4 transition hover:bg-zinc-100"
            >
              <div className="text-base font-semibold text-zinc-900">{item.title}</div>
              <p className="mt-2 text-sm leading-7 text-zinc-600">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}