import OnayliIzahnameDetayPage, {
  generateMetadata as detayMetadata,
} from "../OnayliIzahnameDetay";

const slug = "net-global-endustriyel-yatirimlar";

export function generateMetadata() {
  return detayMetadata({ params: Promise.resolve({ slug }) });
}

export default function NetGlobalEndustriyelYatirimlarPage() {
  return <OnayliIzahnameDetayPage params={Promise.resolve({ slug })} />;
}
