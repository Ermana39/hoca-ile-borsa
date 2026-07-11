"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { HesaplayiciRehberi } from "@/components/HesaplayiciRehberi";

function parseNumber(value: string) {
  const normalized = value.replace(/\./g, "").replace(",", ".");
  const number = Number(normalized);
  return Number.isFinite(number) ? number : 0;
}

function formatMoney(value: number) {
  return value.toLocaleString("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function formatPercent(value: number) {
  return value.toLocaleString("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function hesaplaYTM(alis: number, nominal: number, yillikKupon: number, yilSayisi: number) {
  let r = 0.1;
  const donem = yilSayisi;
  for (let i = 0; i < 80; i++) {
    let pv = 0;
    let dpv = 0;
    const adimSayi = Math.max(1, Math.round(donem));
    for (let t = 1; t <= adimSayi; t++) {
      pv += yillikKupon / Math.pow(1 + r, t);
      dpv += (-t * yillikKupon) / Math.pow(1 + r, t + 1);
    }
    pv += nominal / Math.pow(1 + r, adimSayi);
    dpv += (-adimSayi * nominal) / Math.pow(1 + r, adimSayi + 1);
    const diff = pv - alis;
    if (Math.abs(diff) < 1e-8) break;
    r = r - diff / dpv;
    if (!Number.isFinite(r) || r <= -0.99) r = 0.01;
  }
  return r * 100;
}

const tahvilAdimlari = [
  {
    baslik: "Nominal değer belirlenir",
    aciklama:
      "Nominal değer, tahvilin vade sonunda geri ödemesi beklenen anapara tutarıdır. Hesaplamanın ana omurgası bu tutardır.",
  },
  {
    baslik: "Yıllık kupon geliri hesaplanır",
    aciklama:
      "Nominal değer yıllık kupon oranıyla çarpılır. Örneğin 100.000 TL nominal değer ve yüzde 40 kupon oranı yıllık 40.000 TL brüt kupon geliri anlamına gelir.",
  },
  {
    baslik: "Stopaj düşülür",
    aciklama:
      "Kupon gelirinden girilen stopaj oranı kadar vergi kesintisi ayrılır. Böylece yatırımcının net kupon geliri daha gerçekçi şekilde görülür.",
  },
  {
    baslik: "Alış fiyatı ile nominal değer karşılaştırılır",
    aciklama:
      "Tahvil nominal değerin altında alındıysa vade sonunda ek ana para kazancı oluşabilir. Nominal değerin üzerinde alındıysa bu fark toplam getiriyi aşağı çeker.",
  },
  {
    baslik: "Basit getiri ve YTM ayrı ayrı okunur",
    aciklama:
      "Basit getiri toplam kazancı alış fiyatına böler. Vadeye kadar getiri ise nakit akışlarının zamanını da hesaba katarak yıllıklaştırılmış bir oran üretir.",
  },
];

const tahvilKavramlari = [
  {
    baslik: "Kupon oranı",
    aciklama:
      "Tahvilin nominal değeri üzerinden hesaplanan yıllık faiz oranıdır. Sabit kuponlu tahvilde oran vade boyunca değişmez; değişken kuponlu tahvilde dönemsel olarak güncellenebilir.",
  },
  {
    baslik: "Alış fiyatı",
    aciklama:
      "Tahvili piyasadan hangi tutara aldığınızı gösterir. Aynı kupon oranına sahip iki tahvilde alış fiyatı farklıysa yatırımcının gerçek getirisi de farklı olur.",
  },
  {
    baslik: "Vade",
    aciklama:
      "Tahvilin anapara ödemesinin yapılacağı süredir. Vade uzadıkça faiz oranı değişimlerinin tahvil fiyatı üzerindeki etkisi genellikle daha görünür hale gelir.",
  },
  {
    baslik: "Stopaj",
    aciklama:
      "Faiz gelirinden yapılan vergi kesintisidir. Araca kendi durumunuza uygun stopaj oranı girerek brüt ve net kupon farkını görebilirsiniz.",
  },
  {
    baslik: "Vadeye kadar getiri",
    aciklama:
      "Tahvil vade sonuna kadar elde tutulursa, kupon ödemeleri ve vade sonu anapara ödemesi dikkate alınarak hesaplanan yıllık bileşik getiri yaklaşımıdır.",
  },
  {
    baslik: "Piyasa fiyatı",
    aciklama:
      "Tahvil vade sonuna kadar beklenmeden satılırsa oluşabilecek alım satım fiyatıdır. Faizler, likidite ve ihraççı riski fiyatı değiştirebilir.",
  },
];

const tahvilSenaryolari = [
  {
    baslik: "Nominalin altında alış",
    aciklama:
      "Tahvili 100.000 TL nominal değer yerine 95.000 TL'den alan yatırımcı, kupon gelirine ek olarak vade sonunda 5.000 TL ana para farkı elde edebilir.",
  },
  {
    baslik: "Nominalin üzerinde alış",
    aciklama:
      "Tahvil 100.000 TL nominal değere karşılık 105.000 TL'den alınırsa kupon geliri yüksek görünse bile vade sonunda ana para tarafında 5.000 TL fiyat farkı geri verilir.",
  },
  {
    baslik: "Uzun vadeli tahvil",
    aciklama:
      "Kalan vade uzadıkça kupon akışı daha uzun sürer; fakat piyasa faizlerindeki değişim fiyat üzerinde daha sert dalgalanma yaratabilir.",
  },
  {
    baslik: "Vade sonuna kadar elde tutma",
    aciklama:
      "Hesaplayıcının en anlaşılır sonucu, tahvilin vade sonuna kadar taşındığı varsayımında okunur. Ara satış yapılırsa gerçek getiri satış fiyatına göre değişir.",
  },
];

const tahvilDikkat = [
  "Bu araç kupon ödemelerini yıllık varsayımla sadeleştirir; gerçek ihraçlarda ödeme sıklığı ve birikmiş faiz ayrıntıları farklı olabilir.",
  "Tahvil fiyatı piyasa faizleriyle ters yönde hareket edebilir. Faizler yükselirse mevcut tahvilin piyasa fiyatı düşebilir.",
  "Özel sektör tahvillerinde ihraççı riski devlet tahviline göre daha belirgin olabilir; sadece kupon oranına bakmak yeterli değildir.",
  "Net getiri hesabında stopaj, komisyon, saklama ücreti ve alım satım masrafları sonucu etkileyebilir.",
  "Enflasyon yüksekse nominal getiri pozitif olsa bile reel getiri daha düşük kalabilir.",
  "Likiditesi zayıf tahvillerde vade öncesi satışta istenen fiyattan işlem yapmak zorlaşabilir.",
];

const tahvilFaq = [
  {
    soru: "Tahvil faizi nasıl hesaplanır?",
    cevap:
      "Tahvil faizi nominal değer ile yıllık kupon oranının çarpılmasıyla bulunur. Net kupon geliri için bu brüt faizden stopaj düşülür. Toplam getiri hesabında ise kupon gelirine ek olarak alış fiyatı ile vade sonunda alınacak nominal değer arasındaki fark da dikkate alınır.",
  },
  {
    soru: "Basit getiri ile vadeye kadar getiri aynı şey mi?",
    cevap:
      "Hayır. Basit getiri, toplam kazancı alış fiyatına oranlar ve hızlı bir bakış sağlar. Vadeye kadar getiri (YTM), kuponların hangi yıllarda alınacağını ve vade sonunda anaparanın geri dönüşünü de hesaba kattığı için daha ayrıntılı bir ölçüdür.",
  },
  {
    soru: "Tahvil getirisi neden kupon oranından farklı çıkar?",
    cevap:
      "Çünkü yatırımcının gerçek getirisi sadece kupon oranına bağlı değildir. Tahvili kaç TL'den aldığı, vade süresi, stopaj, nominal değer ve vade sonunda oluşacak fiyat farkı nihai oranı değiştirir.",
  },
  {
    soru: "Tahvil nominal değerin altında alınırsa avantajlı mı?",
    cevap:
      "Nominalin altında alış, vade sonunda ana para farkı kazancı yaratabileceği için getiriyi artırabilir. Ancak bu tek başına yeterli değildir; kalan vade, ihraççı riski, likidite ve piyasa faizleri birlikte değerlendirilmelidir.",
  },
  {
    soru: "Tahvili vade sonundan önce satarsam hesap değişir mi?",
    cevap:
      "Evet. Bu hesaplayıcı vade sonuna kadar elde tutma varsayımıyla anlamlıdır. Vade öncesi satışta gerçek kazanç, o gün oluşan piyasa fiyatına ve satış masraflarına göre yeniden hesaplanmalıdır.",
  },
  {
    soru: "Devlet tahvili ile özel sektör tahvili aynı riskte midir?",
    cevap:
      "Aynı riskte kabul edilmez. Devlet tahvili kamu borçlanma aracı iken özel sektör tahvilinde şirketin ödeme gücü, borçluluğu, nakit akışı ve kredi riski ayrıca incelenmelidir.",
  },
];

export default function TahvilHesaplayici() {
  const [nominal, setNominal] = useState("100.000");
  const [kupon, setKupon] = useState("40");
  const [vadeAy, setVadeAy] = useState("24");
  const [alis, setAlis] = useState("95.000");
  const [stopaj, setStopaj] = useState("10");

  const sonuc = useMemo(() => {
    const n = parseNumber(nominal);
    const k = parseNumber(kupon);
    const v = parseNumber(vadeAy);
    const a = parseNumber(alis);
    const s = parseNumber(stopaj);

    if ([nominal, kupon, vadeAy, alis, stopaj].some((x) => x.trim() === "")) {
      return { hazir: false, hata: "" };
    }
    if (n <= 0 || k < 0 || v <= 0 || a <= 0 || s < 0) {
      return { hazir: false, hata: "Değerler 0'dan büyük olmalı (stopaj 0 olabilir)." };
    }

    const yilSayisi = v / 12;
    const yillikKupon = n * (k / 100);
    const toplamBrutKupon = yillikKupon * yilSayisi;
    const toplamStopaj = toplamBrutKupon * (s / 100);
    const toplamNetKupon = toplamBrutKupon - toplamStopaj;
    const anaParaKazanci = n - a;
    const basitGetiri = ((toplamNetKupon + anaParaKazanci) / a) * 100;
    const ytm = hesaplaYTM(a, n, yillikKupon, yilSayisi);

    return {
      hazir: true,
      hata: "",
      toplamBrutKupon,
      toplamStopaj,
      toplamNetKupon,
      anaParaKazanci,
      basitGetiri,
      ytm,
    };
  }, [nominal, kupon, vadeAy, alis, stopaj]);

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex gap-3">
          <Link href="/" className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">Ana Sayfa</Link>
          <Link href="/hesaplayici" className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">Geri</Link>
        </div>

        <h1 className="mb-2 text-3xl font-bold text-zinc-900">Tahvil / Devlet Tahvili Hesaplayıcı</h1>
        <p className="mb-6 text-base text-zinc-600">
          Tahvilinizin kupon gelirini, vadeye kadar getirisini (YTM) ve net kazancınızı hesaplayın.
        </p>

        <div className="space-y-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">Nominal Değer (TL)</label>
            <input type="text" inputMode="decimal" value={nominal} onChange={(e) => setNominal(e.target.value)} className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none" placeholder="Örn: 100.000" />
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-700">Kupon Oranı (% yıllık)</label>
              <input type="text" inputMode="decimal" value={kupon} onChange={(e) => setKupon(e.target.value)} className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none" placeholder="Örn: 40" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-700">Vade (Ay)</label>
              <input type="text" inputMode="decimal" value={vadeAy} onChange={(e) => setVadeAy(e.target.value)} className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none" placeholder="Örn: 24" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-700">Alış Fiyatı (TL)</label>
              <input type="text" inputMode="decimal" value={alis} onChange={(e) => setAlis(e.target.value)} className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none" placeholder="Örn: 95.000" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-700">Stopaj Oranı (%)</label>
              <input type="text" inputMode="decimal" value={stopaj} onChange={(e) => setStopaj(e.target.value)} className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none" placeholder="Örn: 10" />
            </div>
          </div>
        </div>

        {sonuc.hata && (
          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">{sonuc.hata}</div>
        )}

        {sonuc.hazir && !sonuc.hata && (
          <>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-blue-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">Toplam Brüt Kupon</div>
                <div className="text-2xl font-bold text-zinc-900">{formatMoney(sonuc.toplamBrutKupon ?? 0)} TL</div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-red-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">Stopaj Tutarı</div>
                <div className="text-2xl font-bold text-zinc-900">{formatMoney(sonuc.toplamStopaj ?? 0)} TL</div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-green-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">Toplam Net Kupon</div>
                <div className="text-2xl font-bold text-zinc-900">{formatMoney(sonuc.toplamNetKupon ?? 0)} TL</div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-amber-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">Ana Para Kazancı</div>
                <div className="text-2xl font-bold text-zinc-900">{formatMoney(sonuc.anaParaKazanci ?? 0)} TL</div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-purple-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">Basit Getiri Oranı</div>
                <div className="text-2xl font-bold text-zinc-900">%{formatPercent(sonuc.basitGetiri ?? 0)}</div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-sky-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">Vadeye Kadar Getiri (YTM)</div>
                <div className="text-2xl font-bold text-zinc-900">%{formatPercent(sonuc.ytm ?? 0)}</div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-600">
              <div>Bu araç yatırım tavsiyesi değildir. Bilgilendirme amaçlıdır.</div>
            </div>
          </>
        )}

        <section className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 md:p-6">
          <h2 className="mb-4 text-xl font-bold text-zinc-900">Tahvil Faizi Hesaplama Nasıl Yapılır?</h2>
          <div className="space-y-3 text-sm leading-7 text-zinc-600">
            <p>
              Tahvil faizi hesaplama, yalnızca kupon oranına bakılarak yapılmaz. Tahvilin nominal değeri,
              hangi fiyattan alındığı, kalan vadesi, kupon oranı, stopaj oranı ve vade sonunda geri alınacak
              anapara birlikte değerlendirilir. Bu nedenle aynı kupon oranına sahip iki tahvil, farklı alış
              fiyatlarından alındığında yatırımcıya farklı getiri sunabilir.
            </p>
            <p>
              Bu hesaplayıcı, tahvili vade sonuna kadar taşıma varsayımıyla brüt kuponu, stopaj tutarını,
              net kupon gelirini, ana para farkını, basit getiri oranını ve vadeye kadar getiri oranını
              birlikte gösterir. Böylece yalnızca &quot;yıllık faiz kaç&quot; sorusuna değil, &quot;bu tahvili bu fiyattan
              alırsam toplamda ne kadar kazanırım&quot; sorusuna da cevap verir.
            </p>
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-zinc-200 bg-white p-5 md:p-6">
          <h2 className="mb-4 text-xl font-bold text-zinc-900">Hesaplama Adımları</h2>
          <ol className="space-y-3">
            {tahvilAdimlari.map((adim, index) => (
              <li key={adim.baslik} className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                <div className="mb-1 text-xs font-bold uppercase tracking-wide text-blue-700">{index + 1}. adım</div>
                <h3 className="mb-1 text-sm font-bold text-zinc-900">{adim.baslik}</h3>
                <p className="text-sm leading-6 text-zinc-600">{adim.aciklama}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 md:p-6">
          <h2 className="mb-4 text-xl font-bold text-zinc-900">Tahvil Getirisinde Bilinmesi Gereken Kavramlar</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {tahvilKavramlari.map((kavram) => (
              <div key={kavram.baslik} className="rounded-xl border border-zinc-200 bg-white p-4">
                <h3 className="mb-2 text-sm font-bold text-zinc-900">{kavram.baslik}</h3>
                <p className="text-sm leading-6 text-zinc-600">{kavram.aciklama}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-zinc-200 bg-white p-5 md:p-6">
          <h2 className="mb-4 text-xl font-bold text-zinc-900">Basit Getiri ve Vadeye Kadar Getiri Farkı</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
              <h3 className="mb-2 text-sm font-bold text-zinc-900">Basit getiri</h3>
              <p className="text-sm leading-6 text-zinc-600">
                Basit getiri, tahvilin vade boyunca sağlayacağı net kupon geliri ve ana para farkını alış
                fiyatına böler. Pratik bir karşılaştırma sağlar; ancak kuponların hangi tarihlerde alınacağını
                ayrıntılı biçimde hesaba katmaz.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
              <h3 className="mb-2 text-sm font-bold text-zinc-900">Vadeye kadar getiri</h3>
              <p className="text-sm leading-6 text-zinc-600">
                Vadeye kadar getiri, kupon ödemelerinin zaman değerini ve vade sonunda nominal değerin geri
                dönüşünü birlikte ele alır. Tahvilin piyasa fiyatıyla uyumlu yıllık getiri oranını anlamak
                isteyen yatırımcılar için daha kapsamlı bir göstergedir.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 md:p-6">
          <h2 className="mb-4 text-xl font-bold text-zinc-900">Örnek Tahvil Getiri Senaryoları</h2>
          <div className="space-y-3">
            {tahvilSenaryolari.map((senaryo) => (
              <div key={senaryo.baslik} className="rounded-xl border border-zinc-200 bg-white p-4">
                <h3 className="mb-1 text-sm font-bold text-zinc-900">{senaryo.baslik}</h3>
                <p className="text-sm leading-6 text-zinc-600">{senaryo.aciklama}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-zinc-200 bg-white p-5 md:p-6">
          <h2 className="mb-4 text-xl font-bold text-zinc-900">Tahvil Alırken Nelere Dikkat Edilmeli?</h2>
          <ul className="space-y-3">
            {tahvilDikkat.map((madde) => (
              <li key={madde} className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm leading-6 text-zinc-600">
                {madde}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 md:p-6">
          <h2 className="mb-4 text-xl font-bold text-zinc-900">Sık Sorulan Sorular</h2>
          <div className="space-y-4">
            {tahvilFaq.map((item) => (
              <div key={item.soru}>
                <h3 className="mb-1 text-sm font-bold text-zinc-800">{item.soru}</h3>
                <p className="text-sm leading-6 text-zinc-600">{item.cevap}</p>
              </div>
            ))}
          </div>
        </section>
        <HesaplayiciRehberi slug="tahvil" />
      </div>
    </main>
  );
}
