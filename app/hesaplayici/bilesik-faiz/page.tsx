import BilesikFaizHesaplayici from "./BilesikFaizHesaplayici";

export const metadata = {
  title: "Bileşik Faiz / Birikim Simülatörü",
  description:
    "Başlangıç anaparası ve aylık katkı payına göre bileşik faizle birikiminizin yıl bazında nasıl büyüdüğünü hesaplayın ve grafik üzerinde görün.",
  alternates: { canonical: "https://www.hocaileborsa.com/hesaplayici/bilesik-faiz" },
};

export default function Page() {
  return <BilesikFaizHesaplayici />;
}
