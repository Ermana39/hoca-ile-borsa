import Link from "next/link";

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

export default function HakkimizdaPage() {
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

        <h1 className="mb-6 text-3xl font-bold text-zinc-900">Hakkımızda</h1>

        <div className="space-y-5 rounded-2xl border border-zinc-200 bg-white p-6 text-zinc-700">
          <p>
            Hoca İle Borsa; borsa, halka arz, temettü, fonlar, faiz oranları ve
            piyasa verileri üzerine içerik üreten bir finans içerik platformudur.
          </p>

          <p>
            Platformun amacı; yatırımcıların ve finansla ilgilenen kullanıcıların
            güncel verileri, temel piyasa başlıklarını ve öne çıkan içerikleri
            daha düzenli, hızlı ve anlaşılır şekilde takip edebilmesini
            sağlamaktır.
          </p>

          <p>
            Sitede yer alan içerikler; haber, eğitim, genel bilgilendirme, veri
            derleme, listeleme ve karşılaştırma amacı taşır. Yayınlanan içerikler
            yatırım danışmanlığı kapsamında değildir ve herhangi bir alım-satım
            tavsiyesi niteliği taşımaz.
          </p>

          <p>
            Hoca İle Borsa üzerinde yer alan tablo, liste, oran, takvim ve analiz
            sayfaları; kamuya açık veriler, resmi açıklamalar, finansal kaynaklar
            ve site yönetimi tarafından hazırlanan veri dosyaları üzerinden
            güncellenebilir.
          </p>

          <p>
            Verilerin doğru ve güncel tutulması hedeflenmekle birlikte; zaman zaman
            gecikme, eksiklik, teknik hata veya yazım yanlışı oluşabilir. Bu
            nedenle kullanıcıların özellikle önemli kararlar öncesinde resmi
            kaynaklardan ek kontrol yapması önerilir.
          </p>

          <p>
            Platformda yer alan eğitim içerikleri; finansal kavramların daha
            anlaşılır şekilde aktarılmasına yardımcı olmak için hazırlanır. Bu
            içerikler kişiye özel yatırım önerisi sunmaz.
          </p>

          <p>
            Sitede yayınlanan reklam, iş birliği ve sponsorlu içerikler editoryal
            içeriklerden ayrı değerlendirilir. Reklam ve tanıtım çalışmaları,
            mümkün olduğu ölçüde açık şekilde ayrıştırılmaya çalışılır.
          </p>

          <p>
            İçeriklerde hata, eksik bilgi veya güncelleme ihtiyacı fark edilmesi
            halinde kullanıcılar iletişim sayfası üzerinden bildirim iletebilir.
            Uygun görülen içerikler güncellenir.
          </p>

          <p>
            Hoca İle Borsa, finans içeriklerini daha sade, erişilebilir ve düzenli
            bir yapıda sunmayı hedefleyen bağımsız bir içerik platformudur.
          </p>
        </div>

        <section className="mt-8">
          <ReklamAlani />
        </section>
      </div>
    </main>
  );
}