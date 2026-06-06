import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TCELL Grafik Analiz | Hoca İle Borsa",
  description:
    "TCELL için grafik analiz görünümü ve kısa teknik değerlendirme.",
  alternates: {
    canonical: "/borsa/grafik-analiz/tcell",
  },
};

const analizMetni = `Destek ve Direnç Seviyeleri (Anlık fiyat 101 TL)
Son barda gelen sert kırmızı mum, hisseyi teknik olarak önemli bir eşiğe taşımış durumda:

Ana Destek Bölgesi (~98.00 - 100.00 TL): Psikolojik olarak 100.00 TL sınırı en sıcak destek noktasıdır. Grafik geçmişine baktığımızda (Şubat-Mart ayları civarındaki sarkmalarda) fiyatın kabaca 98.00 - 100.00 TL bandından daha önce de güçlü alıcılar bulduğunu ve oradan yukarı yönlü tepki verdiğini görebiliyoruz.
 Eğer bu psikolojik ve teknik taban kırılırsa, düşüş trendi hızlanarak çift haneli fiyatlarda kalıcılaşabilir.

İlk Güçlü Direnç (~103.94 TL): Grafikte pembe renkle gösterilen uzun vadeli ana yön belirleyici MAV(233) = 103.94 TL seviyesidir. Fiyat bu seviyenin altına sarktığı için artık bu ortalama, fiyatın önündeki ilk ve en önemli direnç haline gelmiş durumda.
 Hissede rahatlama görülmesi için öncelikle 104.00 TL'nin üzerine geri dönülmesi gerekir.

Ana Direnç Kümesi (~107.00 - 111.00 TL): Grafik üzerinde kısa ve orta vadeli hareketli ortalamaların (MAV 21, 55, 89) neredeyse birbirine paralel olarak kümelendiği bölge burasıdır. 
Kalıcı ve güçlü bir yükseliş trendinin tekrar başlayabilmesi için fiyatın bu yoğun direnç hattını (özellikle 111.00 TL üzerini) hacimli geçmesi şarttır.

TCELL şu an teknik yay gibi gerilmiş durumda. Önümüzdeki günlerde şu iki senaryoyu takip edeceğiz:

📈 Olumlu Senaryo (Tepki ve İkili Dip Çabası)
Stochastic RSI ve normal RSI'ın aşırı satım bölgesinin dibinde olması, 100.00 TL psikolojik desteğiyle birleştiğinde buralardan yukarı yönlü sert bir tepki hareketini tetikleyebilir. 
Fiyat hızla kafayı kaldırıp 103.94 TL (MAV 233) üzerine atabilirse, düşüş riski masadan kalkar ve yeniden 107.00 - 111.00 TL direnç kümesine doğru bir toparlanma izleyebiliriz.

📉 Olumsuz Senaryo (Düşüşün Derinleşmesi)
Eğer 98.00 - 100.00 TL destek bandı da alıcı bulamaz ve aşağı yönlü kırılırsa, hissede teknik bozulma derinleşir. 
Bu durumda düşüş trendi yeni dip arayışlarıyla devam edebilir ve toparlanma süreci çok daha uzun bir zamana yayılabilir.

Özetle: TCELL şu an çok bariz bir "aşırı satım" noktasında ve psikolojik bir destek sınırında (101.00 TL).
 Kısa vadeli tepki yükselişi olasılığı teknik göstergelere göre yüksek görünse de, alım yönlü güvenli bir teyit için Stochastic RSI'ın dipten yukarı kesişini ve fiyatın yeniden 104.00 TL üzerine yerleşmesini izlemek mantıklı bir strateji olabilir.


TCELL’in son KAP haber akışı genel olarak nötr-pozitif görünmektedir.
 Şirket tarafında doğrudan olumsuz kabul edilebilecek belirgin bir açıklama öne çıkmamaktadır. 
1Ç 2026 finansal sonuçlarında net kâr ve FAVÖK tarafındaki güçlü görünüm destekleyici olurken, maliyet artışları ve marj baskısı izlenmesi gereken başlıklar arasında yer almaktadır. 
Kar payı dağıtım kararı yatırımcı açısından pozitif okunabilir.`;

export default function TcellGrafikAnalizPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <section className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/borsa/grafik-analiz"
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </section>

        <article className="rounded-2xl border border-zinc-200 bg-white p-5 md:p-8">
          <header>
            <h1 className="text-2xl font-bold leading-tight text-zinc-900 md:text-4xl">
              TCELL Teknik Analiz ve KAP Haber Akışı
            </h1>

            <p className="mt-3 text-sm leading-7 text-zinc-600 md:text-base">
              TCELL için kısa grafik analiz değerlendirmesi.
            </p>
          </header>

          <section className="pt-6">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950">
              <div className="relative aspect-video w-full">
                <Image
                  src="/analiz-1.jpg"
                  alt="TCELL analiz görseli"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </section>

          <section className="pt-6">
            <div className="rounded-2xl bg-zinc-50 p-4 md:p-6">
              <div className="whitespace-pre-line text-base leading-8 text-zinc-700 md:text-lg">
                {analizMetni}
              </div>

              <p className="mt-4 border-t border-zinc-200 pt-4 text-sm text-zinc-500 md:text-base">
                Bu içerikte yer alan teknik değerlendirmeler genel niteliktedir
                ve yatırım danışmanlığı kapsamında değildir.
              </p>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}