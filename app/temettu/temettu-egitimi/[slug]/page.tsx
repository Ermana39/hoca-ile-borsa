import type { Metadata } from "next";
import Link from "next/link";

const icerikler: Record<
  string,
  {
    title: string;
    description: string;
    text: string[];
    seoTitle: string;
    seoDescription: string;
    altAciklama: string;
  }
> = {
  "temettu-nedir": {
    title: "Temettü nedir",
    description:
      "Temettü kavramını temel mantığıyla öğrenin. Şirketler neden temettü dağıtır, yatırımcı için ne ifade eder ve temettü yatırımında nelere dikkat edilir detaylı inceleyin.",
    text: [
      "Temettü, bir şirketin elde ettiği dönem kârının belirli kısmını ortaklarıyla paylaşmasıdır. Bu paylaşım çoğu zaman nakit kâr payı şeklinde yapılır. Bazı durumlarda ise bedelsiz pay dağıtımı da temettü mantığı içinde değerlendirilir. Borsada temettü dendiğinde yatırımcıların büyük bölümü doğrudan hesaba geçen nakit ödemeyi kasteder.",
      "Bir şirket temettü dağıttığında aslında şunu söylemiş olur: “Ben kâr ürettim ve bu kârın bir bölümünü ortaklarımla paylaşıyorum.” Bu nedenle temettü, şirketin kârlılığı, nakit yaratma gücü ve yönetim anlayışı hakkında yatırımcıya önemli sinyaller verir. Ancak her kârlı şirket düzenli temettü dağıtmak zorunda değildir. Bazı şirketler büyümeyi hızlandırmak için kârı içeride bırakmayı tercih eder.",
      "Temettü yatırımı özellikle uzun vadeli düşünen yatırımcılar için önemlidir. Çünkü yatırımcı sadece hisse fiyatındaki yükselişi değil, aynı zamanda düzenli nakit akışını da hedefleyebilir. Bu durum, uzun vadede toplam getiriyi destekleyen önemli unsurlardan biridir. Ancak sadece temettü veriyor diye bir hisseyi iyi yatırım olarak görmek doğru değildir; şirketin borçluluğu, sürdürülebilir kârlılığı ve gelecek planları da mutlaka değerlendirilmelidir.",
      "Özetle temettü, yatırımcıya dağıtılan bir kâr payıdır. Fakat doğru analizde asıl soru sadece “temettü veriyor mu” değil, “bu temettüyü sürdürülebilir şekilde verebiliyor mu” olmalıdır.",
    ],
    seoTitle: "Temettü Nedir? Kâr Payı Mantığı ve Yatırımcıya Etkisi",
    seoDescription:
      "Temettü nedir sorusunun yanıtını, şirketlerin neden kâr payı dağıttığını ve temettü yatırımının temel mantığını detaylı şekilde öğrenin.",
    altAciklama:
      "Temettü, şirket kârının ortaklara dağıtılmasıdır. Ancak yatırımcı açısından önemli olan yalnızca dağıtım yapılması değil, bunun ne kadar sürdürülebilir olduğudur.",
  },
  "brut-net-temettu-farki": {
    title: "Brüt / net temettü farkı",
    description:
      "Brüt temettü ile net temettü arasındaki farkı, stopaj etkisini ve yatırımcının hesabına geçen gerçek tutarın nasıl oluştuğunu öğrenin.",
    text: [
      "Brüt temettü, şirketin hisse başına açıkladığı toplam temettü tutarıdır. Yani herhangi bir vergi veya kesinti düşülmeden önce duyurulan rakamdır. Net temettü ise yasal kesintiler sonrası yatırımcının hesabına geçen gerçek tutardır. Bu nedenle yatırımcı açısından asıl önemli olan, ekranda yazan brüt rakam değil, hesabına fiilen yatan net rakamdır.",
      "Birçok yatırımcı temettü açıklamasını gördüğünde doğrudan o tutarın hesabına yatacağını düşünür. Oysa uygulamada stopaj gibi kesintiler nedeniyle yatırımcıya ulaşan miktar daha düşük olabilir. Bu fark bazen küçük görünse de büyük pozisyonlarda ya da yüksek temettü ödemelerinde toplam tutar üzerinde belirgin etki yaratır.",
      "Brüt ve net temettü farkını bilmek, gerçek getiri hesabı açısından önemlidir. Özellikle temettü verimi hesaplanırken, yatırımcının eline geçen nakit dikkate alınmadan yapılan yorumlar yanıltıcı olabilir. Çünkü teorik olarak yüksek görünen bir ödeme, net bazda daha farklı algılanabilir.",
      "Kısacası brüt temettü açıklanan toplam kâr payını, net temettü ise yatırımcının hesabına geçen gerçek tutarı ifade eder. Temettü kararlarını değerlendirirken bu iki kavramı ayırmak, daha doğru analiz yapmanızı sağlar.",
    ],
    seoTitle: "Brüt ve Net Temettü Farkı Nedir?",
    seoDescription:
      "Brüt temettü ile net temettü arasındaki farkı, stopaj etkisini ve yatırımcının hesabına geçen gerçek temettü tutarını detaylı inceleyin.",
    altAciklama:
      "Brüt temettü şirketin açıkladığı toplam tutarken, net temettü kesintiler sonrası yatırımcının hesabına geçen gerçek kâr payıdır.",
  },
  "hak-kullanim-tarihi-ne-demek": {
    title: "Hak kullanım tarihi ne demek",
    description:
      "Hak kullanım tarihinin ne olduğunu, temettü alabilmek için neden kritik olduğunu ve hisse fiyatı üzerindeki etkisini detaylı öğrenin.",
    text: [
      "Hak kullanım tarihi, yatırımcının temettü alma hakkının resmen devreye girdiği gündür. Temettüden yararlanabilmek için yatırımcının ilgili hisseye bu tarihten önce sahip olması gerekir. Bu yüzden temettü takibinde en çok dikkat edilen başlıklardan biri hak kullanım günüdür.",
      "Bu tarihin önemli olmasının temel nedeni, temettü hakkının bu gün itibarıyla ayrışmasıdır. Hak kullanım günü geldiğinde artık hisse, dağıtılacak temettü hakkı kullanılmış şekilde işlem görmeye başlar. Bu yüzden fiyat tarafında teorik bir düzeltme oluşur. Yani hisse fiyatı temettü tutarı kadar aşağıdan açılabilir veya buna yakın bir düzeltme gösterebilir.",
      "Bir yatırımcı için kritik nokta şudur: Temettü almak istiyorsanız sadece ödeme gününü değil, hak kullanım tarihini bilmeniz gerekir. Çünkü hak kazanım bu tarihle ilgilidir; para hesaba daha sonra geçebilir. Bu ayrım özellikle yeni yatırımcıların en sık karıştırdığı konulardan biridir.",
      "Özetle hak kullanım tarihi, temettü hakkının başladığı ve hisse fiyatında teorik düzeltmenin görüldüğü gündür. Temettü yatırımında doğru zamanlamayı anlamak için bu tarihi mutlaka takip etmek gerekir.",
    ],
    seoTitle: "Hak Kullanım Tarihi Nedir? Temettüde Neden Önemlidir?",
    seoDescription:
      "Hak kullanım tarihi ne demek, temettü alma hakkı nasıl oluşur ve hisse fiyatı neden düzelir sorularının yanıtlarını detaylı öğrenin.",
    altAciklama:
      "Hak kullanım tarihi, yatırımcının temettü alma hakkını kazandığı ve hisse fiyatında teorik düzeltmenin başladığı tarihtir.",
  },
  "odeme-tarihi-ne-demek": {
    title: "Ödeme tarihi ne demek",
    description:
      "Ödeme tarihinin ne olduğunu, hak kullanım tarihinden farkını ve temettünün yatırımcı hesabına geçiş sürecini öğrenin.",
    text: [
      "Ödeme tarihi, yatırımcının hak kazandığı temettünün hesabına fiilen geçtiği gündür. Yani hak kullanım tarihi ile kazanılan kâr payı, ödeme tarihinde nakit olarak yatırımcı hesabına yansır. Bu iki tarih çoğu zaman aynı değildir ve arada birkaç günlük fark olabilir.",
      "Yeni başlayan yatırımcılar çoğu zaman hak kullanım tarihi ile ödeme tarihini karıştırır. Oysa hak kullanım günü temettü hakkı kazanılır, ödeme gününde ise bu hakkın parasal karşılığı hesaba geçer. Bu ayrımı bilmek, özellikle nakit planlaması yapan yatırımcılar için önemlidir.",
      "Ödeme tarihi ayrıca yatırımcının portföy yönetiminde de rol oynar. Çünkü temettü hakkı doğmuş olsa bile para anında kullanılabilir hale gelmeyebilir. Kısa vadeli nakit ihtiyacı olan yatırımcıların bu süreyi dikkate alması gerekir.",
      "Sonuç olarak ödeme tarihi, temettünün gerçekten hesaba geçtiği gündür. Bu tarih, hak kullanım tarihinden farklı olabilir ve yatırımcının nakit akışını planlaması açısından yakından takip edilmelidir.",
    ],
    seoTitle: "Ödeme Tarihi Nedir? Temettü Hesaba Ne Zaman Geçer?",
    seoDescription:
      "Temettüde ödeme tarihi ne demek, hak kullanım tarihiyle farkı nedir ve temettü yatırımcı hesabına ne zaman geçer detaylı öğrenin.",
    altAciklama:
      "Ödeme tarihi, yatırımcının hak kazandığı temettünün hesabına fiilen geçtiği gündür ve hak kullanım tarihinden farklı olabilir.",
  },
  "temettu-verimi-nasil-hesaplanir": {
    title: "Temettü verimi nasıl hesaplanır",
    description:
      "Temettü veriminin nasıl hesaplandığını, formülünü ve bu oranın doğru nasıl yorumlanması gerektiğini detaylı öğrenin.",
    text: [
      "Temettü verimi, hisse başına dağıtılan temettü tutarının hisse fiyatına bölünmesiyle hesaplanır. Sonuç yüzde olarak ifade edilir. Bu oran, yatırımcının mevcut hisse fiyatına göre ne kadar kâr payı getirisi elde ettiğini gösterir.",
      "Örneğin hisse başına 2 TL temettü dağıtan ve 40 TL fiyattan işlem gören bir hissede temettü verimi yaklaşık yüzde 5 olur. Ancak bu oran tek başına yatırım kararı vermek için yeterli değildir. Çünkü bazen hisse fiyatı çok düştüğü için temettü verimi yüksek görünür; fakat şirketin kârlılığı bozulmuş olabilir.",
      "Doğru analizde sadece temettü veriminin yüksekliğine değil, bunun sürdürülebilir olup olmadığına da bakılmalıdır. Şirket düzenli kâr üretiyor mu, borçluluğu kontrol altında mı, geçmişte istikrarlı dağıtım yapmış mı gibi sorular en az formül kadar önemlidir.",
      "Kısacası temettü verimi, yatırımcının kâr payı getirisini ölçen yararlı bir göstergedir. Fakat bu oran mutlaka şirketin genel finansal sağlığı ve uzun vadeli temettü politikasıyla birlikte değerlendirilmelidir.",
    ],
    seoTitle: "Temettü Verimi Nasıl Hesaplanır?",
    seoDescription:
      "Temettü verimi hesaplama formülünü, örnek mantığını ve yüksek temettü veriminin nasıl doğru yorumlanması gerektiğini öğrenin.",
    altAciklama:
      "Temettü verimi, dağıtılan temettünün hisse fiyatına oranlanmasıyla bulunur ve kâr payı getirisini yüzdesel olarak gösterir.",
  },
  "temettuden-sonra-fiyat-neden-duser": {
    title: "Temettüden sonra fiyat neden düşer",
    description:
      "Temettü sonrası hisse fiyatında neden düşüş görüldüğünü, bunun teknik düzeltme mantığını ve yatırımcı açısından ne ifade ettiğini öğrenin.",
    text: [
      "Temettü sonrası hisse fiyatında görülen düşüşün temel nedeni, şirket kasasından yatırımcıya nakit çıkmasıdır. Şirketin bünyesinden çıkan bu değer, teorik olarak hisse fiyatına da yansır. Bu nedenle hak kullanım günü hisse fiyatı temettü tutarı kadar aşağıdan başlayabilir.",
      "Bu durum çoğu zaman yatırımcılar tarafından yanlış yorumlanır ve “hisse düştü” şeklinde algılanır. Oysa burada görülen hareket çoğunlukla teknik bir fiyat düzeltmesidir. Yani şirketten çıkan nakit, hisse değerinin teorik başlangıç seviyesini etkiler.",
      "Elbette piyasadaki genel hava, arz-talep dengesi ve yatırımcı davranışı nedeniyle fiyat hareketi tam olarak teorik tutarla birebir aynı olmak zorunda değildir. Ancak temel mantık değişmez: temettü ödeme sonrası hisse fiyatında düzeltme oluşması normaldir.",
      "Özetle temettü sonrası fiyat düşüşü çoğu zaman olumsuz bir sinyal değil, dağıtılan kâr payının fiyat üzerindeki teknik etkisidir. Bu mantığı bilmek, özellikle temettü günlerinde panik kararlar vermeyi önler.",
    ],
    seoTitle: "Temettüden Sonra Hisse Fiyatı Neden Düşer?",
    seoDescription:
      "Temettü sonrası fiyat düşüşünün nedenini, teknik düzeltme mantığını ve yatırımcı açısından nasıl yorumlanması gerektiğini detaylı öğrenin.",
    altAciklama:
      "Temettü sonrası fiyat düşüşü genelde şirket kasasından çıkan nakdin hisse fiyatına teorik olarak yansıması nedeniyle oluşur.",
  },
};

function ReklamAlani({ buyuk = false }: { buyuk?: boolean }) {
  return (
    <section
      aria-label="Reklam alanı"
      className={buyuk ? "min-h-[260px] w-full" : "min-h-[120px] w-full"}
    >
      <div className={buyuk ? "min-h-[260px] w-full" : "min-h-[120px] w-full"} />
    </section>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const icerik = icerikler[slug];

  if (!icerik) {
    return {
      title: "Temettü Eğitimi | İçerik Bulunamadı",
      description: "Temettü eğitimi içeriği bulunamadı.",
    };
  }

  return {
    title: icerik.seoTitle,
    description: icerik.seoDescription,
  };
}

export default async function TemettuEgitimDetayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const icerik = icerikler[slug];

  if (!icerik) {
    return (
      <main className="min-h-screen bg-white px-4 py-6 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex gap-3">
            <Link
              href="/"
              className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
            >
              Ana Sayfa
            </Link>

            <Link
              href="/temettu/temettu-egitimi"
              className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
            >
              Geri
            </Link>
          </div>

          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-4 text-red-700">
            İçerik bulunamadı.
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex gap-3">
          <Link
            href="/"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/temettu/temettu-egitimi"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <section className="mb-8 rounded-2xl bg-zinc-50 p-6">
          <h1 className="mb-3 text-3xl font-bold text-zinc-900">{icerik.title}</h1>
          <p className="text-base leading-7 text-zinc-700">{icerik.description}</p>
        </section>

        <section className="mb-8">
          <ReklamAlani />
        </section>

        <section className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
          <div className="space-y-5">
            {icerik.text.map((paragraph, index) => (
              <p key={index} className="text-base leading-8 text-zinc-700">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <ReklamAlani buyuk />
        </section>

        <section className="mt-8 rounded-2xl bg-zinc-50 p-6">
          <h2 className="mb-3 text-xl font-bold text-zinc-900">{icerik.title} Hakkında</h2>
          <p className="text-base leading-7 text-zinc-700">{icerik.altAciklama}</p>
        </section>
      </div>
    </main>
  );
}