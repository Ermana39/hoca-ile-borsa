import OnayliIzahnameDetayPage, {
  generateMetadata as detayMetadata,
} from "../OnayliIzahnameDetay";

const slug = "kapeks-kimya";

export function generateMetadata() {
  return detayMetadata({ params: Promise.resolve({ slug }) });
}

export default function KapeksKimyaPage() {
  return <OnayliIzahnameDetayPage params={Promise.resolve({ slug })} />;
}
