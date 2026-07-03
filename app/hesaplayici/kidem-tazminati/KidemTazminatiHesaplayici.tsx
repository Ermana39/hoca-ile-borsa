"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { HesaplayiciRehberi } from "@/components/HesaplayiciRehberi";

const VARSAYILAN_TAVAN = 48000;
const DAMGA_VERGISI_ORANI = 0.00759;

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

const kidemAdimlari = [
  {
    baslik: "Brüt aylık ücret yazılır",
    aciklama:
      "Kıdem tazminatı net maaş üzerinden değil brüt ücret üzerinden hesaplanır. Düzenli ve süreklilik taşıyan bazı yan ödemeler varsa bordroda ayrıca değerlendirilmelidir.",
  },
  {
    baslik: "Çalışma süresi yıl ve ay olarak girilir",
    aciklama:
      "Her tam yıl için 30 günlük brüt ücret esas alınır. Tam yıl dışındaki aylar oransal olarak hesaba katılır; ancak hak kazanma için genel koşul en az bir yıllık çalışmadır.",
  },
  {
    baslik: "Kıdem tazminatı tavanı kontrol edilir",
    aciklama:
      "Brüt ücret tavanın üzerindeyse hesaplama gerçek brüt maaş yerine tavan tutarı üzerinden yapılır. Bu nedenle güncel tavan alanı hesaplamada kritik öneme sahiptir.",
  },
  {
    baslik: "Brüt kıdem tazminatı bulunur",
    aciklama:
      "Aylık esas tutar çalışma süresiyle çarpılır. Sonuç, damga vergisi düşülmeden önceki brüt kıdem tazminatı tutarıdır.",
  },
  {
    baslik: "Damga vergisi düşülerek net tutar hesaplanır",
    aciklama:
      "Hesaplanan brüt kıdem tazminatından damga vergisi kesintisi düşülür ve çalışana ödenecek yaklaşık net kıdem tazminatı gösterilir.",
  },
];

const kidemKavramlari = [
  {
    baslik: "Brüt ücret",
    aciklama:
      "Çalışanın vergi ve kesintilerden önceki ücretidir. Kıdem tazminatı hesabında net maaş değil brüt ücret dikkate alınır.",
  },
  {
    baslik: "Giydirilmiş ücret",
    aciklama:
      "Süreklilik taşıyan yemek, yol, prim veya benzeri menfaatler bazı durumlarda hesaba dahil edilebilir. Bu kalemler iş sözleşmesi ve bordro kayıtlarına göre ayrıca incelenmelidir.",
  },
  {
    baslik: "Kıdem tazminatı tavanı",
    aciklama:
      "Hesaplamaya alınabilecek en yüksek aylık brüt tutardır. Maaşınız tavanı aşarsa araç tavan tutarını esas alarak brüt kıdemi hesaplar.",
  },
  {
    baslik: "Damga vergisi",
    aciklama:
      "Kıdem tazminatı ödemesinden kesilen vergidir. Araçta kullanılan oran, net tutarın yaklaşık hesaplanması için brüt tazminata uygulanır.",
  },
  {
    baslik: "Hak kazanma şartı",
    aciklama:
      "Genel olarak aynı işverene bağlı en az bir yıl çalışma ve kanunda sayılan uygun ayrılış nedenlerinden biri gerekir. Uyuşmazlıklarda profesyonel destek alınmalıdır.",
  },
  {
    baslik: "Net kıdem tazminatı",
    aciklama:
      "Tavan uygulanmış brüt kıdem tazminatından damga vergisi çıkarıldıktan sonra ortaya çıkan yaklaşık ödenecek tutardır.",
  },
];

const kidemSenaryolari = [
  {
    baslik: "Maaş tavanın altında",
    aciklama:
      "Brüt maaş kıdem tazminatı tavanının altındaysa hesaplama brüt maaş üzerinden yapılır. Örneğin 35.000 TL brüt ücret için aylık esas 35.000 TL olur.",
  },
  {
    baslik: "Maaş tavanın üzerinde",
    aciklama:
      "Brüt maaş tavanın üzerindeyse hesaplamada tavan dikkate alınır. Bu nedenle yüksek brüt maaş alan çalışanlarda tavan uygulanmadan görünen tutar ile ödenecek tutar farklılaşır.",
  },
  {
    baslik: "Tam yıl ve ek aylar",
    aciklama:
      "5 yıl 6 ay çalışan bir kişi için süre 5,5 yıl olarak hesaplanır. Araç, yıl ve ay bilgisini birlikte okuyarak oransal hesap yapar.",
  },
  {
    baslik: "Bir yıldan kısa çalışma",
    aciklama:
      "Kıdem tazminatı için genel hak kazanma koşulu en az bir yıllık çalışmadır. Bu nedenle bir yıldan kısa süreler için hesap sonucu tek başına hak doğduğu anlamına gelmez.",
  },
];

const hakKazanmaNotlari = [
  "İşverenin haklı neden dışında iş sözleşmesini sona erdirmesi kıdem tazminatı gündeme getirebilir.",
  "Emeklilik, yaş dışındaki emeklilik koşulları, askerlik veya kanunda belirtilen evlilik nedeniyle ayrılış gibi durumlarda kıdem hakkı doğabilir.",
  "Çalışanın kendi isteğiyle ayrıldığı her durumda kıdem tazminatı alınmaz; ayrılış nedeni ve belge düzeni önemlidir.",
  "Aynı işverene bağlı çalışma süresi, işyeri devri veya grup şirketi geçişleri gibi durumlarda ayrıca değerlendirilmelidir.",
  "Kullanılmamış yıllık izin, ihbar tazminatı ve ücret alacağı kıdem tazminatından farklı kalemlerdir.",
];

const kidemFaq = [
  {
    soru: "Kıdem tazminatı net maaşa göre mi hesaplanır?",
    cevap:
      "Hayır. Kıdem tazminatı hesabında net maaş değil brüt ücret esas alınır. Brüt ücret tavanı aşıyorsa hesaplama tavan tutarı üzerinden yapılır.",
  },
  {
    soru: "Kıdem tazminatı tavanı ne işe yarar?",
    cevap:
      "Tavan, her çalışma yılı için hesaba alınabilecek en yüksek brüt tutarı sınırlar. Brüt maaşınız tavanın üzerindeyse aracın hesapladığı brüt kıdem tazminatı tavan üzerinden oluşur.",
  },
  {
    soru: "Kıdem tazminatından gelir vergisi kesilir mi?",
    cevap:
      "Kıdem tazminatı için genel uygulamada gelir vergisi yerine damga vergisi kesintisi dikkate alınır. Yine de ödeme türü, ek kalemler ve istisnai durumlar için bordro veya hukuk kontrolü yapılmalıdır.",
  },
  {
    soru: "Kıdem tazminatı almak için kaç yıl çalışmak gerekir?",
    cevap:
      "Genel koşul aynı işverene bağlı en az bir yıl çalışmış olmaktır. Bir yıl tamamlanmadan kıdem tazminatı hakkı normal şartlarda doğmaz.",
  },
  {
    soru: "İstifa eden çalışan kıdem tazminatı alabilir mi?",
    cevap:
      "Her istifa kıdem hakkı doğurmaz. Emeklilik, askerlik, belirli evlilik hali veya kanunda tanınan özel nedenler gibi durumlarda sonuç farklı olabilir.",
  },
  {
    soru: "Kıdem tazminatı ile ihbar tazminatı aynı mı?",
    cevap:
      "Hayır. Kıdem tazminatı çalışma süresine ve ayrılış nedenine bağlıdır. İhbar tazminatı ise bildirim süresine uyulmaması halinde gündeme gelen ayrı bir alacak kalemidir.",
  },
];

export default function KidemTazminatiHesaplayici() {
  const [brutMaas, setBrutMaas] = useState("");
  const [yil, setYil] = useState("");
  const [ay, setAy] = useState("");
  const [tavan, setTavan] = useState(VARSAYILAN_TAVAN.toLocaleString("tr-TR"));

  const sonuc = useMemo(() => {
    const m = parseNumber(brutMaas);
    const y = parseNumber(yil);
    const a = parseNumber(ay);
    const tv = parseNumber(tavan);

    if (brutMaas.trim() === "" || (yil.trim() === "" && ay.trim() === "")) {
      return { hazir: false, hata: "" };
    }
    if (m <= 0) return { hazir: false, hata: "Brüt maaş 0'dan büyük olmalı." };
    if (y < 0 || a < 0 || (y === 0 && a === 0)) return { hazir: false, hata: "Çalışma süresi 0'dan büyük olmalı." };
    if (tv <= 0) return { hazir: false, hata: "Tavan değeri 0'dan büyük olmalı." };

    const toplamYil = y + a / 12;
    const tavanUygulanmamis = m * toplamYil;

    const aylikEsas = Math.min(m, tv);
    const tavanaGoreTutar = aylikEsas * toplamYil;
    const tavanUygulandi = m > tv;

    const damgaVergisi = tavanaGoreTutar * DAMGA_VERGISI_ORANI;
    const netKidem = tavanaGoreTutar - damgaVergisi;

    return {
      hazir: true,
      hata: "",
      toplamYil,
      tavanUygulanmamis,
      tavanaGoreTutar,
      tavanUygulandi,
      damgaVergisi,
      netKidem,
    };
  }, [brutMaas, yil, ay, tavan]);

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex gap-3">
          <Link href="/" className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">Ana Sayfa</Link>
          <Link href="/hesaplayici" className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100">Geri</Link>
        </div>

        <h1 className="mb-2 text-3xl font-bold text-zinc-900">Kıdem Tazminatı Hesaplayıcı</h1>
        <p className="mb-6 text-base text-zinc-600">
          Her çalışma yılı için 30 günlük brüt maaş üzerinden, güncel kıdem tazminatı tavanı dikkate alınarak tazminat tutarınızı hesaplayın.
        </p>

        <div className="space-y-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">Brüt Aylık Maaş (TL)</label>
            <input type="text" inputMode="decimal" value={brutMaas} onChange={(e) => setBrutMaas(e.target.value)} className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none" placeholder="Örn: 50.000" />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-700">Çalışma Süresi - Yıl</label>
              <input type="text" inputMode="numeric" value={yil} onChange={(e) => setYil(e.target.value)} className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none" placeholder="Örn: 5" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-zinc-700">Çalışma Süresi - Ay</label>
              <input type="text" inputMode="numeric" value={ay} onChange={(e) => setAy(e.target.value)} className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none" placeholder="Örn: 6" />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-700">Kıdem Tazminatı Tavanı (TL / Aylık)</label>
            <input type="text" inputMode="decimal" value={tavan} onChange={(e) => setTavan(e.target.value)} className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none" placeholder="Örn: 48.000" />
            <p className="mt-1 text-xs text-zinc-500">Varsayılan değer örnek amaçlıdır. Güncel kıdem tazminatı tavanını resmi duyuruya göre değiştirebilirsiniz.</p>
          </div>
        </div>

        {sonuc.hata && (
          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">{sonuc.hata}</div>
        )}

        {sonuc.hazir && !sonuc.hata && (
          <>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-blue-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">Tavan Uygulanmadan Tutar</div>
                <div className="text-2xl font-bold text-zinc-900">{formatMoney(sonuc.tavanUygulanmamis ?? 0)} TL</div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-amber-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">Brüt Kıdem Tazminatı</div>
                <div className="text-2xl font-bold text-zinc-900">{formatMoney(sonuc.tavanaGoreTutar ?? 0)} TL</div>
                {sonuc.tavanUygulandi && (
                  <div className="mt-1 text-xs text-amber-700">Maaşınız tavanı aştığı için tavan uygulandı.</div>
                )}
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-red-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">Damga Vergisi (‰7,59)</div>
                <div className="text-2xl font-bold text-zinc-900">{formatMoney(sonuc.damgaVergisi ?? 0)} TL</div>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-green-50 p-4">
                <div className="mb-2 text-sm font-semibold text-zinc-600">Ödenecek Net Kıdem Tazminatı</div>
                <div className="text-2xl font-bold text-zinc-900">{formatMoney(sonuc.netKidem ?? 0)} TL</div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-600 space-y-2">
              <div>Her çalışma yılı için 30 günlük brüt maaş esas alınır. Hesaplanan aylık esas, kıdem tazminatı tavanını aşamaz.</div>
              <div>Bu araç hukuki danışmanlık yerine geçmez. Bilgilendirme ve yaklaşık hesaplama amaçlıdır.</div>
            </div>
          </>
        )}

        <section className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 md:p-6">
          <h2 className="mb-4 text-xl font-bold text-zinc-900">Kıdem Tazminatı Nasıl Hesaplanır?</h2>
          <div className="space-y-3 text-sm leading-7 text-zinc-600">
            <p>
              Kıdem tazminatı, belirli koşullarla işten ayrılan çalışanın hizmet süresine bağlı olarak
              hesaplanan bir işçilik alacağıdır. Temel mantık, her tam çalışma yılı için 30 günlük brüt
              ücret esas alınmasıdır. Çalışma süresi tam yılın yanında ay içeriyorsa bu süre oransal olarak
              hesaba katılır.
            </p>
            <p>
              Hesaplamada en kritik noktalardan biri kıdem tazminatı tavanıdır. Brüt maaşınız tavanın
              altındaysa brüt ücretiniz esas alınır; tavanın üzerindeyse hesaplama tavan tutarı üzerinden
              yapılır. Bu sayede yüksek brüt ücretlerde görünen teorik tutar ile ödenebilecek tutar arasındaki
              fark açıkça anlaşılır.
            </p>
            <p>
              Araç, brüt maaş ve çalışma süresini kullanarak önce tavan uygulanmamış tutarı, ardından tavan
              uygulanmış brüt kıdem tazminatını, damga vergisini ve yaklaşık net ödenecek tutarı gösterir.
              Sonuçlar bilgi amaçlıdır; resmi bordro hesabı için güncel tavan, ödeme tarihi ve işten ayrılış
              nedeni birlikte kontrol edilmelidir.
            </p>
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-zinc-200 bg-white p-5 md:p-6">
          <h2 className="mb-4 text-xl font-bold text-zinc-900">Hesaplama Adımları</h2>
          <ol className="space-y-3">
            {kidemAdimlari.map((adim, index) => (
              <li key={adim.baslik} className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                <div className="mb-1 text-xs font-bold uppercase tracking-wide text-blue-700">{index + 1}. adım</div>
                <h3 className="mb-1 text-sm font-bold text-zinc-900">{adim.baslik}</h3>
                <p className="text-sm leading-6 text-zinc-600">{adim.aciklama}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 md:p-6">
          <h2 className="mb-4 text-xl font-bold text-zinc-900">Kıdem Tazminatı Hesabında Önemli Kavramlar</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {kidemKavramlari.map((kavram) => (
              <div key={kavram.baslik} className="rounded-xl border border-zinc-200 bg-white p-4">
                <h3 className="mb-2 text-sm font-bold text-zinc-900">{kavram.baslik}</h3>
                <p className="text-sm leading-6 text-zinc-600">{kavram.aciklama}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-zinc-200 bg-white p-5 md:p-6">
          <h2 className="mb-4 text-xl font-bold text-zinc-900">Kıdem Tazminatı Formülü</h2>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <p className="text-sm leading-7 text-zinc-600">
              <strong className="text-zinc-900">Aylık esas tutar</strong> = Brüt maaş ile kıdem tazminatı tavanından düşük olan tutar.
              <br />
              <strong className="text-zinc-900">Brüt kıdem tazminatı</strong> = Aylık esas tutar x çalışma yılı.
              <br />
              <strong className="text-zinc-900">Net kıdem tazminatı</strong> = Brüt kıdem tazminatı - damga vergisi.
            </p>
          </div>
          <p className="mt-3 text-sm leading-7 text-zinc-600">
            Örneğin brüt ücretiniz tavanın altındaysa çalıştığınız her yıl için yaklaşık bir aylık brüt ücret
            üzerinden hesaplama yapılır. Brüt ücret tavanın üzerindeyse her yıl için bir aylık gerçek brüt
            ücret değil, tavan tutarı esas alınır.
          </p>
        </section>

        <section className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 md:p-6">
          <h2 className="mb-4 text-xl font-bold text-zinc-900">Örnek Kıdem Tazminatı Senaryoları</h2>
          <div className="space-y-3">
            {kidemSenaryolari.map((senaryo) => (
              <div key={senaryo.baslik} className="rounded-xl border border-zinc-200 bg-white p-4">
                <h3 className="mb-1 text-sm font-bold text-zinc-900">{senaryo.baslik}</h3>
                <p className="text-sm leading-6 text-zinc-600">{senaryo.aciklama}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-zinc-200 bg-white p-5 md:p-6">
          <h2 className="mb-4 text-xl font-bold text-zinc-900">Kıdem Tazminatı Hakkında Dikkat Edilecekler</h2>
          <ul className="space-y-3">
            {hakKazanmaNotlari.map((madde) => (
              <li key={madde} className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm leading-6 text-zinc-600">
                {madde}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 md:p-6">
          <h2 className="mb-4 text-xl font-bold text-zinc-900">Sık Sorulan Sorular</h2>
          <div className="space-y-4">
            {kidemFaq.map((item) => (
              <div key={item.soru}>
                <h3 className="mb-1 text-sm font-bold text-zinc-800">{item.soru}</h3>
                <p className="text-sm leading-6 text-zinc-600">{item.cevap}</p>
              </div>
            ))}
          </div>
        </section>
        <HesaplayiciRehberi slug="kidem-tazminati" />
      </div>
    </main>
  );
}
