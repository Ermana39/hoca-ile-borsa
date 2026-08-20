import { ekRehberOzetleri } from "@/app/rehberler/_data/ekRehberler";

export type RehberOzet = {
  title: string;
  href: string;
  description: string;
};

export const rehberler: RehberOzet[] = [
  {
    title: "Halka Arz Nedir? Halka Arza Katılırken Nelere Dikkat Edilmeli?",
    href: "/rehberler/halka-arz-nedir",
    description:
      "Halka arz süreci, izahname, fiyat tespit raporu, dağıtım yöntemleri ve yatırımcı açısından dikkat edilecek noktalar.",
  },
  {
    title: "Halka Arz Kaç Lot Verir? Lot Hesaplama ve Dağıtım Rehberi",
    href: "/rehberler/halka-arz-kac-lot-verir",
    description:
      "Halka arzda kişi başı lot tahmini, bireysel tahsisat, katılımcı sayısı, eşit dağıtım ve oransal dağıtım hesaplama yöntemi.",
  },
  {
    title: "Eşit Dağıtım Nedir? Halka Arzda Eşit Dağıtım Nasıl Yapılır?",
    href: "/rehberler/esit-dagitim-nedir",
    description:
      "Eşit dağıtımın mantığı, küçük yatırımcıya etkisi, kişi başı lot hesabı, avantajları ve dikkat edilmesi gereken riskler.",
  },
  {
    title: "Oransal Dağıtım Nedir? Halka Arzda Oransal Dağıtım Nasıl Hesaplanır?",
    href: "/rehberler/oransal-dagitim-nedir",
    description:
      "Oransal dağıtımda talep büyüklüğü, talep çarpanı, karşılanma oranı, nakit blokajı ve lot hesaplama örnekleri.",
  },
  {
    title: "T1 ve T2 Bakiye Nedir? Borsada Takas ve Halka Arz Bakiyesi",
    href: "/rehberler/t1-t2-bakiye-nedir",
    description:
      "T1 ve T2 bakiye, takas süresi, kullanılabilir bakiye, çekilebilir bakiye ve halka arz talebinde bakiye kullanımı.",
  },
  {
    title: "Katılım Endeksi Nedir? Katılım Endeksi Hisseleri Nasıl Belirlenir?",
    href: "/rehberler/katilim-endeksi",
    description:
      "Katılım endeksinin ne olduğu, hangi kriterlere göre oluştuğu ve yatırımcıların bu listeyi nasıl okuyabileceği hakkında rehber.",
  },
  {
    title: "Halka Arz Tavan Bozarsa Ne Olur? Tavan Serisi ve Riskler",
    href: "/rehberler/halka-arz-tavan-bozarsa-ne-olur",
    description:
      "Halka arz tavan bozma anlamı, tavan serisinin bitmesi, kar satışı, oynaklık, satış kararı ve yatırımcı risk yönetimi.",
  },
  {
    title: "Halka Arzdan Sonra Hisse Ne Zaman Satılır?",
    href: "/rehberler/halka-arzdan-sonra-hisse-ne-zaman-satilir",
    description:
      "İlk işlem günü, tavan serisi, hedef getiri, kademeli satış, uzun vadeli tutma ve halka arz sonrası çıkış planı rehberi.",
  },
  {
    title: "BIST İşlem Kodu Nedir? Hisse Sembolü ve Halka Arz Kodu",
    href: "/rehberler/bist-islem-kodu-nedir",
    description:
      "BIST işlem kodu, hisse sembolü, halka arz kodunun ne zaman belli olduğu ve emir girerken doğru kod kontrolü.",
  },
  {
    title: "İzahname Nedir? Halka Arz İzahnamesi Nasıl Okunur?",
    href: "/rehberler/izahname-nedir",
    description:
      "İzahname bölümleri, risk faktörleri, fon kullanım planı, finansal tablolar, ortaklık yapısı ve yatırımcı için kritik noktalar.",
  },
  {
    title: "Sermaye Artırımı Nedir? Bedelli ve Bedelsiz Sermaye Artırımı Rehberi",
    href: "/rehberler/sermaye-artirimlari",
    description:
      "Bedelli, bedelsiz ve tahsisli sermaye artırımlarının yatırımcı açısından ne anlama geldiğini açıklayan rehber.",
  },
  {
    title: "Rüçhan Hakkı Nedir? Bedelli Sermaye Artırımında Nasıl Kullanılır?",
    href: "/rehberler/ruchan-hakki-nedir",
    description:
      "Rüçhan hakkı kullanımı, rüçhan kuponu satışı ve bedelli sermaye artırımı sürecinde dikkat edilecek noktalar.",
  },
  {
    title: "Bilanço Nasıl Okunur? Şirket Finansal Tabloları Nasıl Analiz Edilir?",
    href: "/rehberler/bilanco-nasil-okunur",
    description:
      "Bilanço, gelir tablosu, nakit akışı, borçluluk, karlılık ve temel finansal oranları okuma rehberi.",
  },
  {
    title: "F/K, PD/DD ve FD/FAVÖK Nedir? Hisse Değerleme Oranları Nasıl Okunur?",
    href: "/rehberler/fk-pddd-fdfavok-nedir",
    description:
      "Hisse değerleme oranlarının nasıl hesaplandığını ve yatırımcı açısından nasıl yorumlanabileceğini anlatan rehber.",
  },
  {
    title: "KAP Açıklamaları Nasıl Okunur?",
    href: "/rehberler/kap-aciklamalari-nasil-okunur",
    description:
      "Özel durum açıklamaları, finansal raporlar, sözleşme haberleri ve yatırımcı için önemli KAP bildirimleri.",
  },
  {
    title: "Pay Geri Alım Programı Nedir? Şirketler Neden Kendi Hissesini Alır?",
    href: "/rehberler/pay-geri-alim-programi-nedir",
    description:
      "Pay geri alım programlarının amacı, KAP bildirimleri, azami fon tutarı ve yatırımcı açısından olası etkileri.",
  },
  {
    title: "Brüt Takas Nedir? Brüt Takas Hisseyi Nasıl Etkiler?",
    href: "/rehberler/brut-takas-nedir",
    description:
      "Brüt takas uygulamasının normal takastan farkı, işlem kuralları, likidite ve yatırımcı etkileri.",
  },
  {
    title: "Devre Kesici Nedir? Borsada Devre Kesici Hisseyi Nasıl Etkiler?",
    href: "/rehberler/devre-kesici-nedir",
    description:
      "Pay bazında devre kesici, tek fiyat emir toplama süreci ve yatırımcıların takip etmesi gereken başlıklar.",
  },
  ...ekRehberOzetleri,
];
