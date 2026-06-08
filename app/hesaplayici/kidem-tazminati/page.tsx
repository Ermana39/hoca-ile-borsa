import KidemTazminatiHesaplayici from "./KidemTazminatiHesaplayici";

export const metadata = {
  title: "Kıdem Tazminatı Hesaplayıcı",
  description:
    "Brüt maaş, çalışma süresi ve güncel kıdem tazminatı tavanına göre alabileceğiniz kıdem tazminatını ve damga vergisi düşümünü hesaplayın.",
  alternates: { canonical: "https://www.hocaileborsa.com/hesaplayici/kidem-tazminati" },
};

export default function Page() {
  return <KidemTazminatiHesaplayici />;
}
