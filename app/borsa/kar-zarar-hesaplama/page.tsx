import KarZararHesaplayici from "./KarZararHesaplayici";

export const metadata = {
  title: "Hisse Kâr / Zarar Hesaplama",
  description:
    "Alış-satış fiyatı, lot adedi, komisyon ve stopaj oranlarına göre BIST hisse işlemlerinde brüt/net kâr-zarar ve getiri oranınızı hesaplayın.",
  alternates: { canonical: "https://www.hocaileborsa.com/borsa/kar-zarar-hesaplama" },
};

export default function Page() {
  return <KarZararHesaplayici />;
}
