import GelirVergisiHesaplayici from "./GelirVergisiHesaplayici";

export const metadata = {
  title: "Yatırım Geliri Vergi Hesaplayıcı",
  description:
    "Faiz, temettü ve menkul kıymet gelirinizden kesilen stopajları ve net ele geçen tutarı hesaplayın. Yatırım kazancınız üzerindeki vergi yükünü görün.",
  alternates: { canonical: "https://www.hocaileborsa.com/hesaplayici/gelir-vergisi" },
};

export default function Page() {
  return <GelirVergisiHesaplayici />;
}
