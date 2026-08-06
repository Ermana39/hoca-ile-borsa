import Link from "@/components/NoPrefetchLink";
import { hisseVarMi } from "@/lib/hisseler";

// Bir hisse kodunu, künyesi VARSA /hisse/<kod> linkine çevirir;
// künyesi yoksa düz metin olarak bırakır (ölü link oluşmaz).
export default function HisseLink({
  sembol,
  className = "",
}: {
  sembol: string;
  className?: string;
}) {
  if (!sembol) return null;

  if (hisseVarMi(sembol)) {
    return (
      <Link
        href={`/hisse/${sembol.toLowerCase()}`}
        prefetch={false}
        className={`text-blue-700 transition hover:text-blue-800 hover:underline ${className}`}
      >
        {sembol}
      </Link>
    );
  }

  return <span className={className}>{sembol}</span>;
}
