import OnayliIzahnameDetayPage, {
  generateMetadata as detayMetadata,
} from "../OnayliIzahnameDetay";

const slug = "quick-sigorta";

export function generateMetadata() {
  return detayMetadata({ params: Promise.resolve({ slug }) });
}

export default function QuickSigortaPage() {
  return <OnayliIzahnameDetayPage params={Promise.resolve({ slug })} />;
}
