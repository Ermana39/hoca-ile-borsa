import type { Metadata } from "next";
import OnayliIzahnameDetayPage, {
  generateMetadata as generateOnayliMetadata,
} from "../OnayliIzahnameDetay";

const slug = "soho-giyim-ve-enerji";

export function generateMetadata(): Promise<Metadata> {
  return generateOnayliMetadata({ params: Promise.resolve({ slug }) });
}

export default function Page() {
  return <OnayliIzahnameDetayPage params={Promise.resolve({ slug })} />;
}
