import FonEtkiSeoPage from "../_components/FonEtkiSeoPage";
import {
  fonEtkiMetadataOlustur,
  fonEtkiSayfaVerisiGetir,
} from "../_data/fonEtkiOzetleri";

export const metadata = fonEtkiMetadataOlustur("thf");

const veri = fonEtkiSayfaVerisiGetir("thf");

export default function ThfEtkiAnaliziPage() {
  return <FonEtkiSeoPage {...veri} />;
}
