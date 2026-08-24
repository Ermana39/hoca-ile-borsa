import FonEtkiSeoPage from "../_components/FonEtkiSeoPage";
import {
  fonEtkiMetadataOlustur,
  fonEtkiSayfaVerisiGetir,
} from "../_data/fonEtkiOzetleri";

export const metadata = fonEtkiMetadataOlustur("tmv");

const veri = fonEtkiSayfaVerisiGetir("tmv");

export default function TmvEtkiAnaliziPage() {
  return <FonEtkiSeoPage {...veri} />;
}
