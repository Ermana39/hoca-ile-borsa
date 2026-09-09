import type { Metadata } from "next";
import Link from "@/components/NoPrefetchLink";

export const metadata: Metadata = {
  title: "Üyelik Sözleşmesi | Hoca İle Borsa",
  robots: { index: false, follow: true },
};

export default function UyelikSozlesmesiPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-4 py-8 md:px-6">
      <article className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 text-slate-700 shadow-sm md:p-8">
        <Link href="/kayit" prefetch={false} className="text-sm font-semibold text-blue-700">← Kayıt sayfasına dön</Link>
        <h1 className="mt-5 text-3xl font-bold text-slate-950">Üyelik Sözleşmesi</h1>
        <p className="mt-2 text-sm text-slate-500">Sürüm: 9 Eylül 2026</p>
        <div className="mt-7 space-y-5 leading-7">
          <p>Bu sözleşme, Hoca İle Borsa üyelik hizmetinin kullanım koşullarını düzenler. Üyelik ücretsizdir; şu aşamada ücretli abonelik veya ödeme işlemi bulunmamaktadır.</p>
          <h2 className="text-xl font-bold text-slate-900">Hesap güvenliği</h2>
          <p>Kullanıcı doğru bir e-posta adresi vermek, şifresini gizli tutmak ve hesabındaki yetkisiz kullanımı gecikmeden bildirmekle sorumludur. Hesap başkasına devredilemez.</p>
          <p>Kayıt, e-posta adresine gönderilen süreli bağlantı doğrulanana kadar bekleme durumundadır. Hesap ancak doğrulama tamamlandığında aktifleşir ve kullanıcı giriş yapabilir.</p>
          <h2 className="text-xl font-bold text-slate-900">Hizmetin kapsamı</h2>
          <p>Üyelik; kişiselleştirilebilir özelliklere erişim için temel oluşturur. Sitedeki içerikler yatırım danışmanlığı değildir ve üyelik, herhangi bir getiri veya kesintisiz hizmet garantisi sağlamaz.</p>
          <h2 className="text-xl font-bold text-slate-900">Kurallara uygun kullanım</h2>
          <p>Kullanıcı; hukuka aykırı işlem yapmamayı, başka hesaplara erişmeye çalışmamayı ve hizmetin güvenliğini veya çalışmasını bozacak otomasyonlar kullanmamayı kabul eder.</p>
          <h2 className="text-xl font-bold text-slate-900">Hesabın sona ermesi</h2>
          <p>Kullanıcı hesabını Hesabım sayfasından silebilir. Silme işlemi tamamlandığında üyelik hesabı ve üyeliğe bağlı kişisel veriler, yasal saklama yükümlülükleri hariç, temizlenir.</p>
          <p>Ayrıntılı veri işleme bilgileri için <Link href="/kvkk-aydinlatma-metni" prefetch={false} className="font-semibold text-blue-700 underline">KVKK Aydınlatma Metni</Link> ve <Link href="/gizlilik-politikasi" prefetch={false} className="font-semibold text-blue-700 underline">Gizlilik Politikası</Link> incelenmelidir.</p>
        </div>
      </article>
    </main>
  );
}
