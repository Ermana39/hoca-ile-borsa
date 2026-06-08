import KiraArtisHesaplayici from "./KiraArtisHesaplayici";

export const metadata = {
  title: "Kira Artış Hesaplayıcı (TÜFE)",
  description:
    "TÜFE 12 aylık ortalama tavan oranına göre yeni kira bedelinizi ve artış tutarınızı hesaplayın. 2026 güncel TÜFE oranı varsayılan olarak yüklüdür.",
  alternates: { canonical: "https://www.hocaileborsa.com/hesaplayici/kira-artis" },
};

export default function Page() {
  return <KiraArtisHesaplayici />;
}
