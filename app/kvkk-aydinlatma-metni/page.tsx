import type { Metadata } from "next";
import Link from "@/components/NoPrefetchLink";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | Hoca İle Borsa",
  robots: { index: false, follow: true },
};

export default function KvkkAydinlatmaMetniPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-8 md:px-6">
      <article className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 text-slate-700 shadow-sm md:p-8">
        <Link href="/gizlilik-politikasi" prefetch={false} className="text-sm font-semibold text-blue-700">← Gizlilik Politikası</Link>
        <h1 className="mt-5 text-3xl font-bold text-slate-950">KVKK Aydınlatma Metni</h1>
        <p className="mt-2 text-sm text-slate-500">Sürüm: 9 Eylül 2026</p>
        <div className="mt-7 space-y-5 leading-7">
          <p>Hoca İle Borsa üzerinde üyelik, kullanıcı kaydı, kullanıcı girişi ve abonelik hizmeti sunulmamaktadır. Site içeriğine hesap oluşturmadan erişebilirsiniz.</p>
          <h2 className="text-xl font-bold text-slate-900">İşleme amaçları</h2>
          <p>İletişim formu üzerinden ilettiğiniz bilgiler, başvurunuzun yanıtlanması ve hizmet güvenliğinin sağlanması amacıyla işlenir.</p>
          <h2 className="text-xl font-bold text-slate-900">Hukuki sebep ve aktarım</h2>
          <p>İletişim ve teknik verilerin işlenmesine ilişkin ayrıntılar Gizlilik Politikası sayfasında açıklanmaktadır.</p>
          <h2 className="text-xl font-bold text-slate-900">Saklama ve silme</h2>
          <p>Kişisel verilerinize ilişkin saklama ve silme taleplerinizi aşağıdaki iletişim adresine iletebilirsiniz.</p>
          <h2 className="text-xl font-bold text-slate-900">Haklarınız</h2>
          <p>KVKK kapsamındaki bilgi alma, düzeltme, silme, itiraz ve diğer başvurularınızı destekhocaileborsa@gmail.com adresine iletebilirsiniz.</p>
          <p>Daha ayrıntılı bilgi için <Link href="/gizlilik-politikasi" prefetch={false} className="font-semibold text-blue-700 underline">Gizlilik Politikası</Link> sayfasını inceleyebilirsiniz.</p>
        </div>
      </article>
    </main>
  );
}
