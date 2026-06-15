import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "https://www.hocaileborsa.com/gizlilik-politikasi",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GizlilikPolitikasiPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>
          <Link
            href="/"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">
          Gizlilik Politikası
        </h1>

        <div className="space-y-5 rounded-2xl border border-zinc-200 bg-white p-6 text-zinc-700">
          <p>
            Bu sayfa, Hoca İle Borsa internet sitesini kullanan ziyaretçilere
            yönelik gizlilik ve kişisel veri işleme bilgilendirmesini içerir.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900">1. Veri sorumlusu</h2>
          <p>
            Site kapsamında veri sorumlusu Hoca İle Borsa’dır. İletişim için:
            destekhocaileborsa@gmail.com
          </p>

          <h2 className="text-xl font-semibold text-zinc-900">2. İşlenebilecek veriler</h2>
          <p>
            İletişim formu ya da e-posta yoluyla paylaşmanız halinde ad-soyad,
            e-posta adresi, mesaj içeriği ve teknik kullanım verileri işlenebilir.
            Ayrıca site güvenliği, trafik ölçümü, hata takibi ve kullanıcı
            deneyimini geliştirme amacıyla teknik kullanım verileri, IP adresi,
            cihaz ve tarayıcı bilgileri, ziyaret edilen sayfalar ve benzeri
            veriler işlenebilir.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900">3. İşleme amaçları</h2>
          <p>
            İletişim taleplerini cevaplamak, site güvenliğini sağlamak, teknik
            sorunları gidermek, hizmet kalitesini geliştirmek, kullanıcı
            deneyimini iyileştirmek, içerikleri daha verimli sunmak, reklam
            gösterimi ve ölçümleme süreçlerini yürütmek ve yasal yükümlülükleri
            yerine getirmek amacıyla veri işlenebilir.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900">4. Aktarım</h2>
          <p>
            Kişisel veriler; yalnızca teknik altyapı sağlayıcıları, barındırma
            hizmeti sağlayıcıları, analiz ve reklam hizmeti sağlayıcıları ile
            kanunen yetkili kurum ve kuruluşlarla, gerekli olduğu ölçüde
            paylaşılabilir.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900">5. Hukuki sebep</h2>
          <p>
            Veriler; açık rıza, sözleşmenin kurulması veya ifası, meşru menfaat
            ve hukuki yükümlülük sebeplerine dayanılarak işlenebilir.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900">
            6. Google AdSense, reklamlar ve çerezler
          </h2>
          <p>
            hocaileborsa.com üzerinde Google AdSense reklamları yayınlanabilir.
            Google dahil olmak üzere üçüncü taraf reklam sağlayıcıları,
            kullanıcıların bu siteye veya internetteki diğer sitelere yaptığı
            önceki ziyaretlere dayanarak reklam göstermek için çerezler
            kullanabilir.
          </p>
          <p>
            Google’ın reklam çerezleri kullanması, Google ve iş ortaklarının
            kullanıcılara bu siteyi ve/veya internetteki diğer siteleri
            ziyaretlerine göre reklam sunmasına yardımcı olabilir.
          </p>
          <p>
            Kullanıcılar, Google reklam ayarları üzerinden kişiselleştirilmiş
            reklamları devre dışı bırakabilir. Ayrıca kullanıcılar tarayıcı
            ayarları üzerinden çerezleri silebilir, engelleyebilir veya çerez
            kullanımına ilişkin tercihlerini değiştirebilir.
          </p>
          <p>
            Üçüncü taraf reklam sağlayıcıları veya reklam ağları da bu sitede
            reklam sunarken çerez, web işaretçisi veya benzeri teknolojiler
            kullanabilir. Bu sağlayıcıların topladığı veriler, ilgili üçüncü
            tarafların kendi gizlilik politikalarına tabidir.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900">7. Çerez kullanımı</h2>
          <p>
            hocaileborsa.com; reklam gösterimi, site trafiğinin ölçümlenmesi,
            kullanıcı deneyiminin iyileştirilmesi, güvenliğin sağlanması ve
            içeriklerin daha verimli sunulması amacıyla çerezlerden ve benzeri
            teknolojilerden yararlanabilir.
          </p>
          <p>
            Çerezlerin devre dışı bırakılması, sitenin bazı özelliklerinin veya
            reklamların çalışma şeklini etkileyebilir.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900">8. Haklarınız</h2>
          <p>
            KVKK kapsamındaki başvuru haklarınız doğrultusunda; verinizin işlenip
            işlenmediğini öğrenme, düzeltme, silme, aktarıldığı kişileri öğrenme
            ve itiraz etme haklarınızı kullanabilirsiniz.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900">9. Finansal içerik uyarısı</h2>
          <p>
            Bu site üzerinde yer alan finansal içerikler, haberler, analizler,
            tablolar ve hesaplama araçları bilgilendirme amacıyla hazırlanır.
            Buradaki hiçbir içerik yatırım tavsiyesi kapsamında
            değerlendirilmemelidir.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900">10. Başvuru</h2>
          <p>
            Gizlilik, çerezler ve kişisel veri talepleriniz için
            destekhocaileborsa@gmail.com adresine e-posta gönderebilirsiniz.
          </p>
        </div>
      </div>
    </main>
  );
}
