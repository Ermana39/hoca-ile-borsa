import TahvilHesaplayici from "./TahvilHesaplayici";

export const metadata = {
  title: "Tahvil / Devlet Tahvili Getiri Hesaplayıcı",
  description:
    "Devlet tahvili veya özel sektör tahvilinizin kupon gelirini, basit getirisini ve vadeye kadar getirisini (YTM) hesaplayın.",
  alternates: { canonical: "https://www.hocaileborsa.com/hesaplayici/tahvil" },
};

export default function Page() {
  return <TahvilHesaplayici />;
}
