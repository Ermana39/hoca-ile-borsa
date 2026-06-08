import EnflasyonHesaplayici from "./EnflasyonHesaplayici";

export const metadata = {
  title: "Enflasyon / Satın Alma Gücü Hesaplayıcı",
  description:
    "Belirli bir tutarın yıllar içindeki enflasyon karşısında satın alma gücünü hesaplayın. TL'nin değer kaybını ve bugünkü karşılığını görün.",
  alternates: { canonical: "https://www.hocaileborsa.com/hesaplayici/enflasyon" },
};

export default function Page() {
  return <EnflasyonHesaplayici />;
}
