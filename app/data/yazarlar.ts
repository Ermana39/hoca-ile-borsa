export type Yazar = {
  slug: string;
  isim: string;
  unvan: string;
  avatar: string;
  bioKisa: string;
  bioUzun: string[];
  // Başlığın hemen altında kullanıcıya gösterilen kısa deneyim/odak özeti.
  // (Aynı zamanda E-E-A-T için görünür uzmanlık sinyali.)
  deneyimOzeti?: string;
  // Profil sayfasındaki görünür "Son güncelleme" tarihi (ISO 8601).
  // Verilmezse görünür tarih gösterilmez.
  guncellemeTarihi?: string;
  // Opsiyonel — yalnızca GERÇEK bilgi girilmeli (uydurma değer yok).
  // Doldurulursa Person JSON-LD'ye alumniOf / hasCredential olarak eklenir.
  egitim?: string;
  sertifika?: string;
  odaklandigiAlanlar: string[];
  sosyal: {
    x: string;
    instagram: string;
    telegram: string;
    youtube: string;
    youtubeGlobal: string;
  };
  email: string;
};

export const yazarlar: Yazar[] = [
  {
    slug: "erman-hoca",
    isim: "Erman Hoca",
    unvan: "Kurucu & Editör — Hoca İle Borsa",
    avatar: "/yazarlar/erman-hoca.webp",
    bioKisa:
      "2002'den bu yana Borsa İstanbul'u takip eden, 2022'den beri sosyal medyada finans içerikleri üreten Hoca İle Borsa kurucusu. Halka arz, temettü ve KAP bildirimleri alanlarında yazmaktadır.",
    deneyimOzeti:
      "2002'den beri Borsa İstanbul takipçisi · 2022'den beri finans içerik üreticisi · Halka arz, temettü ve KAP odaklı",
    guncellemeTarihi: "2026-06-13T00:00:00+03:00",
    bioUzun: [
      "Erman Hoca, 2002 yılından bu yana Borsa İstanbul'u ve Türkiye finans piyasalarını aktif olarak takip eden bağımsız bir piyasa takipçisi ve içerik üreticisidir. Yirmi yılı aşkın süredir hisse senetleri, halka arzlar, temettü politikaları, yatırım fonları ve faiz piyasalarını yakından izlemektedir.",
      "2022 yılından bu yana sosyal medyada finans içerikleri üretmekte; KAP bildirimlerini, halka arz süreçlerini ve piyasa gelişmelerini sade ve anlaşılır bir dille binlerce takipçisine aktarmaktadır. 2026 yılında, bu içerikleri daha düzenli ve takip edilebilir bir yapıda sunmak amacıyla Hoca İle Borsa platformunu kurmuştur.",
      "Erman Hoca'nın içerik üretiminde önceliği; resmi kaynaklara (KAP, SPK, TCMB, TEFAS) dayalı, doğrulanabilir ve güncel bilgi sunmaktır. Karmaşık finansal gelişmeleri yeni başlayan yatırımcının da anlayabileceği bir dille aktarmayı ilke edinmiştir.",
    ],
    odaklandigiAlanlar: [
      "Halka arz süreçleri ve izahname incelemeleri",
      "Temettü takvimi ve kâr payı analizleri",
      "KAP bildirimleri ve şirket haberleri",
      "Yatırım fonları ve TEFAS verileri",
      "Mevduat ve kredi faiz oranları",
      "Borsa İstanbul teknik analiz",
      "Temel analiz ve bilanço değerlendirmeleri",
    ],
    sosyal: {
      x: "https://x.com/HocaileBorsa",
      instagram: "https://www.instagram.com/hocaileborsa/",
      telegram: "https://t.me/halkaarz_0",
      youtube: "https://www.youtube.com/@hocaileborsa",
      youtubeGlobal: "https://www.youtube.com/@HocaileGlobalPiyasalar",
    },
    email: "destekhocaileborsa@gmail.com",
  },
];

export const varsayilanYazar = "erman-hoca";

export function getYazar(slug: string): Yazar | undefined {
  return yazarlar.find((y) => y.slug === slug);
}
