import Link from "next/link";
export const metadata = {
  robots: {
    index: false,
    follow: true,
  },
};
function ReklamAlani() {
  return (
    <section
      aria-label="Reklam alanı"
      className="w-full overflow-hidden rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 min-h-[220px] sm:min-h-[250px] lg:min-h-[280px]"
    >
      <div className="w-full min-h-[220px] sm:min-h-[250px] lg:min-h-[280px]" />
    </section>
  );
}

export default function GizlilikPolitikasiPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link href="/" className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">
            Ana Sayfa
          </Link>
          <Link href="/" className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">
            Geri
          </Link>
        </div>

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">Gizlilik Politikası</h1>

        <div className="space-y-5 rounded-2xl border border-zinc-200 bg-white p-6 text-zinc-700">
          <p>
            Bu sayfa, Hoca İle Borsa internet sitesini kullanan ziyaretçilere
            yönelik gizlilik ve kişisel veri işleme bilgilendirmesini içerir.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900">1. Veri sorumlusu</h2>
          <p>
            Site kapsamında veri sorumlusu Hoca İle Borsa’dır. İletişim için:
            hocaileborsa@gmail.com
          </p>

          <h2 className="text-xl font-semibold text-zinc-900">2. İşlenebilecek veriler</h2>
          <p>
            İletişim formu ya da e-posta yoluyla paylaşmanız halinde ad-soyad,
            e-posta adresi, mesaj içeriği ve teknik kullanım verileri işlenebilir.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900">3. İşleme amaçları</h2>
          <p>
            İletişim taleplerini cevaplamak, site güvenliğini sağlamak, teknik
            sorunları gidermek, hizmet kalitesini geliştirmek ve yasal
            yükümlülükleri yerine getirmek amacıyla veri işlenebilir.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900">4. Aktarım</h2>
          <p>
            Kişisel veriler; yalnızca teknik altyapı sağlayıcıları, barındırma
            hizmeti sağlayıcıları ve kanunen yetkili kurum ve kuruluşlarla,
            gerekli olduğu ölçüde paylaşılabilir.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900">5. Hukuki sebep</h2>
          <p>
            Veriler; açık rıza, sözleşmenin kurulması veya ifası, meşru menfaat ve
            hukuki yükümlülük sebeplerine dayanılarak işlenebilir.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900">6. Haklarınız</h2>
          <p>
            KVKK kapsamındaki başvuru haklarınız doğrultusunda; verinizin işlenip
            işlenmediğini öğrenme, düzeltme, silme, aktarıldığı kişileri öğrenme ve
            itiraz etme haklarınızı kullanabilirsiniz.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900">7. Başvuru</h2>
          <p>
            Gizlilik ve kişisel veri talepleriniz için hocaileborsa@gmail.com
            adresine e-posta gönderebilirsiniz.
          </p>
        </div>

        <section className="mt-8">
          <ReklamAlani />
        </section>
      </div>
    </main>
  );
}