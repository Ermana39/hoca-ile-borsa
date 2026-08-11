import FonEtkiSeoPage from "../_components/FonEtkiSeoPage";
import {
  fonEtkiMetadataOlustur,
  fonEtkiSayfaVerisiGetir,
} from "../_data/fonEtkiOzetleri";

export const metadata = fonEtkiMetadataOlustur("phe");

const veri = fonEtkiSayfaVerisiGetir("phe");

export default function PheEtkiAnaliziPage() {
  return <FonEtkiSeoPage {...veri} />;
}
