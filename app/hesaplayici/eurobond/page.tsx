import EurobondHesaplayici from "./EurobondHesaplayici";

export const metadata = {
  title: "Eurobond Getiri Hesaplayıcı",
  description:
    "Eurobond kupon geliri, vadeye kadar getiri (YTM) ve TL karşılığı kazanç hesaplaması. Alış fiyatı ve USD/TL kuru üzerinden net getirinizi hesaplayın.",
  alternates: { canonical: "https://www.hocaileborsa.com/hesaplayici/eurobond" },
};

export default function Page() {
  return <EurobondHesaplayici />;
}
