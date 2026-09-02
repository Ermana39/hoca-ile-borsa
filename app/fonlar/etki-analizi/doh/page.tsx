import FonEtkiSeoPage from "../_components/FonEtkiSeoPage";
import {
  fonEtkiMetadataOlustur,
  fonEtkiSayfaVerisiGetir,
} from "../_data/fonEtkiOzetleri";

export const metadata = fonEtkiMetadataOlustur("doh");

const veri = fonEtkiSayfaVerisiGetir("doh");

export default function DohEtkiAnaliziPage() {
  return <FonEtkiSeoPage {...veri} />;
}
