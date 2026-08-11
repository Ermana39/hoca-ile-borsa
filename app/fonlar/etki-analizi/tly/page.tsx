import FonEtkiSeoPage from "../_components/FonEtkiSeoPage";
import {
  fonEtkiMetadataOlustur,
  fonEtkiSayfaVerisiGetir,
} from "../_data/fonEtkiOzetleri";

export const metadata = fonEtkiMetadataOlustur("tly");

const veri = fonEtkiSayfaVerisiGetir("tly");

export default function TlyEtkiAnaliziPage() {
  return <FonEtkiSeoPage {...veri} />;
}
