type RehberSlug =
  | "altin"
  | "bes"
  | "bilesik-faiz"
  | "doviz-getiri"
  | "enflasyon"
  | "eurobond"
  | "gelir-vergisi"
  | "kidem-tazminati"
  | "kira-artis"
  | "tahvil"
  | "kar-zarar"
  | "ortalama-maliyet"
  | "sermaye-artirimi"
  | "temettu"
  | "temettu-verimi"
  | "mevduat"
  | "konut-kredisi"
  | "tuketici-kredisi"
  | "tasit-kredisi";

type Rehber = {
  aciklama?: string;
  adimlar: [string, string, string];
  ornek?: {
    girdi: string;
    sonuc: string;
  };
  sss?: Array<{
    soru: string;
    cevap: string;
  }>;
};

const rehberler: Record<RehberSlug, Rehber> = {
  altin: {
    adimlar: [
      "Hesaplamak istediğiniz altın türünü seçin.",
      "Güncel gram altın fiyatını ve elinizdeki adedi girin.",
      "Toplam değeri ve varsa alış-satış farkının etkisini inceleyin.",
    ],
    ornek: {
      girdi: "5 çeyrek altın ve gram altın fiyatı 4.000 TL",
      sonuc: "Yaklaşık ağırlık 8,75 gram, makas hariç tahmini toplam değer 35.000 TL olur.",
    },
  },
  bes: {
    aciklama:
      "BES birikim hesaplayıcı; yaş, aylık katkı, tahmini reel getiri ve devlet katkısına göre emeklilik dönemindeki olası birikimi gösterir.",
    adimlar: [
      "Mevcut yaşınızı ve hedef emeklilik yaşınızı girin.",
      "Aylık katkı payınızı ve beklediğiniz yıllık reel getiri oranını belirleyin.",
      "Devlet katkısını dahil edip etmemeyi seçerek grafiği ve toplam birikimi karşılaştırın.",
    ],
    ornek: {
      girdi: "30 yaş, 56 yaş hedefi, aylık 3.000 TL katkı, yıllık %4 reel getiri ve devlet katkısı",
      sonuc: "Aynı katkının sürdüğü varsayımıyla tahmini reel birikim yaklaşık 2,05 milyon TL olur.",
    },
    sss: [
      {
        soru: "BES hesaplaması kesin sonuç verir mi?",
        cevap:
          "Hayır. Fon getirileri, katkı tutarı, kesintiler ve mevzuat zaman içinde değişebileceği için sonuç bir tahmindir.",
      },
      {
        soru: "Devlet katkısının tamamı hemen alınabilir mi?",
        cevap:
          "Hayır. Devlet katkısına hak kazanma oranı sistemde kalış süresine ve emeklilik koşullarına bağlıdır.",
      },
      {
        soru: "Reel getiri ne anlama gelir?",
        cevap:
          "Reel getiri, yatırım getirisinin enflasyon etkisinden arındırılmış halidir ve satın alma gücündeki değişimi gösterir.",
      },
    ],
  },
  "bilesik-faiz": {
    aciklama:
      "Bileşik faiz hesaplayıcı, başlangıç tutarı ile düzenli katkıların kazançlarıyla birlikte zaman içinde nasıl büyüyebileceğini gösterir.",
    adimlar: [
      "Başlangıç birikiminizi ve varsa aylık düzenli katkınızı girin.",
      "Yıllık tahmini getiri oranını ve yatırım süresini belirleyin.",
      "Yatırılan ana para ile getiri kazancını grafik ve sonuç kartlarından karşılaştırın.",
    ],
    ornek: {
      girdi: "10.000 TL başlangıç tutarı, ek katkı olmadan yıllık %20 getiri ve 3 yıl",
      sonuc: "Yıllık bileşik hesaplamada dönem sonu değer 17.280 TL olur.",
    },
    sss: [
      {
        soru: "Bileşik faiz ile basit faiz arasındaki fark nedir?",
        cevap:
          "Basit faizde kazanç yalnızca ana para üzerinden, bileşik faizde ise ana para ve önceki dönem kazançları üzerinden hesaplanır.",
      },
      {
        soru: "Hesaplanan getiri garanti midir?",
        cevap:
          "Hayır. Girilen oran sabit kabul edilen bir senaryodur; gerçek yatırım getirileri dönem boyunca değişebilir.",
      },
      {
        soru: "Düzenli katkı neden sonucu bu kadar değiştirir?",
        cevap:
          "Her yeni katkı kalan süre boyunca getiri üretme fırsatı bulduğu için uzun vadede toplam birikimi belirgin biçimde artırabilir.",
      },
    ],
  },
  "doviz-getiri": {
    adimlar: [
      "Başlangıç yatırım tutarını ve alım günündeki döviz kurunu girin.",
      "Güncel veya satış anındaki kuru ve karşılaştırmak istediğiniz enflasyon oranını ekleyin.",
      "TL bazlı getiri, döviz miktarı ve reel performans sonuçlarını birlikte değerlendirin.",
    ],
  },
  enflasyon: {
    adimlar: [
      "Bugünkü veya geçmişteki para tutarını girin.",
      "Karşılaştırma dönemi için enflasyon oranını ve süreyi belirleyin.",
      "Eşdeğer tutarı, satın alma gücünü ve değer kaybını sonuçlardan inceleyin.",
    ],
    ornek: {
      girdi: "100.000 TL ve bir yıllık %50 enflasyon",
      sonuc: "Tutar değişmezse dönem sonundaki satın alma gücü bugünün parasıyla yaklaşık 66.667 TL'ye iner.",
    },
  },
  eurobond: {
    adimlar: [
      "Eurobondun nominal değerini, piyasa fiyatını ve kupon oranını girin.",
      "Kupon sıklığını, vadeyi ve gerekiyorsa döviz kurunu belirleyin.",
      "Kupon geliri, vadeye kadar getiri ve TL karşılığı sonuçlarını karşılaştırın.",
    ],
    ornek: {
      girdi: "10.000 USD nominal değer, yıllık %7 kupon ve altı ayda bir ödeme",
      sonuc: "Yıllık brüt kupon 700 USD, her altı aylık kupon ödemesi 350 USD olur.",
    },
  },
  "gelir-vergisi": {
    adimlar: [
      "Faiz, temettü veya diğer yatırım geliri türünü seçin.",
      "Brüt gelir tutarını ve uygulanacak stopaj oranını girin.",
      "Kesilecek vergi ile elinize geçecek net tutarı kontrol edin.",
    ],
    ornek: {
      girdi: "10.000 TL brüt yatırım geliri ve %15 stopaj",
      sonuc: "1.500 TL vergi kesilir, tahmini net gelir 8.500 TL olur.",
    },
  },
  "kidem-tazminati": {
    adimlar: [
      "Brüt ücretinizi ve toplam çalışma sürenizi girin.",
      "Hesap dönemine ait kıdem tazminatı tavanını kontrol edin.",
      "Brüt tazminat, damga vergisi ve tahmini net tutarı inceleyin.",
    ],
    ornek: {
      girdi: "40.000 TL brüt ücret ve 5 tam yıl çalışma",
      sonuc: "Tavan aşılmıyorsa brüt kıdem 200.000 TL, damga vergisi sonrası yaklaşık net tutar 198.482 TL olur.",
    },
  },
  "kira-artis": {
    adimlar: [
      "Mevcut aylık kira bedelini girin.",
      "Sözleşme yenileme dönemindeki 12 aylık ortalama TÜFE oranını yazın.",
      "Artış tutarını ve yeni aylık kira bedelini sonuç kartından kontrol edin.",
    ],
    ornek: {
      girdi: "15.000 TL mevcut kira ve %32,24 artış oranı",
      sonuc: "Artış 4.836 TL, yeni aylık kira 19.836 TL olur.",
    },
  },
  tahvil: {
    adimlar: [
      "Tahvilin nominal değerini, alış fiyatını ve kupon oranını girin.",
      "Vadeyi ve yıllık kupon ödeme sıklığını belirleyin.",
      "Kupon geliri, basit getiri ve vadeye kadar getiri sonuçlarını inceleyin.",
    ],
    ornek: {
      girdi: "100.000 TL nominal değer, yıllık %30 kupon ve altı ayda bir ödeme",
      sonuc: "Yıllık kupon geliri 30.000 TL, her kupon ödemesi 15.000 TL olur.",
    },
  },
  "kar-zarar": {
    adimlar: [
      "Hissenin alış fiyatını, satış fiyatını ve lot adedini girin.",
      "Varsa alış ve satış komisyon oranlarını ekleyin.",
      "Net kâr veya zararı ve yüzde getiriyi sonuç alanından kontrol edin.",
    ],
    ornek: {
      girdi: "50 TL alış, 60 TL satış ve 100 lot",
      sonuc: "Komisyonlar hariç brüt kâr 1.000 TL, getiri oranı %20 olur.",
    },
  },
  "ortalama-maliyet": {
    adimlar: [
      "Her alım için lot adedi ile birim fiyatı ayrı satıra girin.",
      "Gerekirse yeni alım satırları ekleyin veya hatalı satırları kaldırın.",
      "Toplam lot, toplam yatırım ve ağırlıklı ortalama maliyeti kontrol edin.",
    ],
    ornek: {
      girdi: "50 TL'den 100 lot ve 40 TL'den 200 lot",
      sonuc: "Toplam 300 lot için ağırlıklı ortalama maliyet yaklaşık 43,33 TL olur.",
    },
  },
  "sermaye-artirimi": {
    adimlar: [
      "Mevcut lot adedinizi ve ortalama maliyetinizi girin.",
      "Bedelli veya bedelsiz artırım türünü ve oranını seçin.",
      "Yeni lot sayısını, teorik fiyatı ve güncellenmiş maliyeti inceleyin.",
    ],
    ornek: {
      girdi: "100 lot, 30 TL maliyet ve %50 bedelsiz sermaye artırımı",
      sonuc: "Lot sayısı 150'ye çıkar; toplam maliyet değişmezse lot başına teorik maliyet 20 TL olur.",
    },
  },
  temettu: {
    adimlar: [
      "Sahip olduğunuz lot adedini ve lot başına brüt temettüyü girin.",
      "Uygulanacak stopaj oranını kontrol edin.",
      "Brüt temettü, vergi kesintisi ve net ödeme tutarını inceleyin.",
    ],
    ornek: {
      girdi: "1.000 lot, lot başına 2 TL brüt temettü ve %15 stopaj",
      sonuc: "Brüt temettü 2.000 TL, stopaj 300 TL ve net ödeme 1.700 TL olur.",
    },
  },
  "temettu-verimi": {
    adimlar: [
      "Hissenin güncel veya maliyet bazlı fiyatını girin.",
      "Lot başına brüt temettü ve stopaj oranını ekleyin.",
      "Brüt ve net temettü verimini karşılaştırın.",
    ],
  },
  mevduat: {
    adimlar: [
      "Mevduata yatıracağınız ana parayı ve yıllık faiz oranını girin.",
      "Vade gün sayısını ve uygulanacak stopaj oranını belirleyin.",
      "Brüt faiz, vergi kesintisi ve vade sonu net tutarı karşılaştırın.",
    ],
    ornek: {
      girdi: "100.000 TL, yıllık %45 faiz ve 32 gün vade",
      sonuc: "365 gün esasıyla brüt faiz yaklaşık 3.945 TL olur; net tutar seçilen stopaja göre hesaplanır.",
    },
    sss: [
      {
        soru: "Mevduat getirisi neden bankadaki tutardan farklı olabilir?",
        cevap:
          "Bankanın gün hesabı, stopaj oranı, kampanya koşulları ve vade bozma kuralları nihai tutarı değiştirebilir.",
      },
      {
        soru: "Brüt faiz ile net faiz arasındaki fark nedir?",
        cevap: "Brüt faiz vergi öncesi kazançtır; net faiz ise stopaj kesildikten sonra kalan kazançtır.",
      },
    ],
  },
  "konut-kredisi": {
    adimlar: [
      "Kullanmak istediğiniz kredi tutarını girin.",
      "Aylık faiz oranını ve vade sayısını belirleyin.",
      "Aylık taksit ile toplam geri ödeme tutarını bütçenizle karşılaştırın.",
    ],
    ornek: {
      girdi: "1.000.000 TL kredi, aylık %3 faiz ve 120 ay vade",
      sonuc: "Masraflar hariç eşit taksit yaklaşık 30.890 TL, toplam ödeme yaklaşık 3,71 milyon TL olur.",
    },
    sss: [
      {
        soru: "Konut kredisi hesaplamasına tüm masraflar dahil midir?",
        cevap:
          "Genellikle hayır. Ekspertiz, sigorta, tahsis ücreti ve diğer banka masrafları toplam maliyeti artırabilir.",
      },
      {
        soru: "Faiz oranı küçük değişince taksit neden belirgin değişir?",
        cevap:
          "Uzun vadede faiz her taksit dönemine uygulandığı için küçük oran farkları toplam geri ödemede büyür.",
      },
    ],
  },
  "tuketici-kredisi": {
    adimlar: [
      "İhtiyacınız olan kredi tutarını girin.",
      "Aylık faiz oranını ve vade süresini seçin.",
      "Aylık taksit ve toplam geri ödeme sonuçlarını karşılaştırın.",
    ],
    ornek: {
      girdi: "100.000 TL kredi, aylık %4 faiz ve 12 ay vade",
      sonuc: "Vergi ve masraflar hariç eşit taksit yaklaşık 10.655 TL olur.",
    },
    sss: [
      {
        soru: "Hesaplanan taksit bankanın teklifiyle aynı olur mu?",
        cevap:
          "Vergiler, tahsis ücreti, sigorta ve bankanın efektif maliyet hesabı nedeniyle küçük farklar oluşabilir.",
      },
      {
        soru: "Vade uzadığında ne olur?",
        cevap:
          "Aylık taksit genellikle düşer ancak daha uzun süre faiz ödendiği için toplam geri ödeme artar.",
      },
    ],
  },
  "tasit-kredisi": {
    adimlar: [
      "Kullanacağınız taşıt kredisi tutarını girin.",
      "Aylık faiz oranını ve ödeme vadesini belirleyin.",
      "Aylık taksit ve toplam geri ödemeyi araç bütçenizle karşılaştırın.",
    ],
    ornek: {
      girdi: "500.000 TL kredi, aylık %3,5 faiz ve 36 ay vade",
      sonuc: "Vergi ve masraflar hariç eşit taksit yaklaşık 24.642 TL olur.",
    },
    sss: [
      {
        soru: "Taşıt kredisinde aracın tamamı kredilendirilebilir mi?",
        cevap:
          "Kredi oranı ve azami vade aracın değeri, yaşı ve yürürlükteki bankacılık düzenlemelerine göre sınırlanabilir.",
      },
      {
        soru: "Araç kredisi hesaplamasına kasko dahil midir?",
        cevap:
          "Hayır. Kasko, sigorta, rehin ve tahsis gibi ek maliyetler banka teklifinde ayrıca yer alabilir.",
      },
    ],
  },
};

export function HesaplayiciRehberi({ slug }: { slug: RehberSlug }) {
  const rehber = rehberler[slug];
  const faqSchema = rehber.sss
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: rehber.sss.map((item) => ({
          "@type": "Question",
          name: item.soru,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.cevap,
          },
        })),
      }
    : null;

  return (
    <section className="mt-8 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm md:p-7">
      <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">Hesaplayıcı nasıl kullanılır?</h2>
      {rehber.aciklama ? (
        <p className="mt-3 max-w-4xl text-sm leading-7 text-zinc-600 md:text-base">{rehber.aciklama}</p>
      ) : null}

      <ol className="mt-5 grid gap-3 md:grid-cols-3">
        {rehber.adimlar.map((adim, index) => (
          <li key={adim} className="rounded-xl bg-zinc-50 p-4 text-sm leading-6 text-zinc-700">
            <span className="mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
              {index + 1}
            </span>
            {adim}
          </li>
        ))}
      </ol>

      {rehber.ornek ? (
        <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-4 md:p-5">
          <h3 className="font-bold text-zinc-900">Örnek hesaplama</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-700">
            <strong>Girdi:</strong> {rehber.ornek.girdi}
          </p>
          <p className="mt-1 text-sm leading-6 text-zinc-700">
            <strong>Sonuç:</strong> {rehber.ornek.sonuc}
          </p>
        </div>
      ) : null}

      {rehber.sss ? (
        <div className="mt-7">
          <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">Sıkça sorulan sorular</h2>
          <div className="mt-4 space-y-3">
            {rehber.sss.map((item) => (
              <details key={item.soru} className="group rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                <summary className="cursor-pointer list-none pr-6 text-sm font-bold text-zinc-900">
                  {item.soru}
                </summary>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{item.cevap}</p>
              </details>
            ))}
          </div>
        </div>
      ) : null}

      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
        />
      ) : null}
    </section>
  );
}
