import Image from "next/image";
import Link from "next/link";

export default async function HalkaArzDetayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="mb-6 inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
        >
          Ana Sayfa’ya Dön
        </Link>

        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
          <Image
            src={`/${slug}.png`}
            alt={slug}
            width={1200}
            height={1600}
            className="h-auto w-full rounded-xl"
          />
        </div>
      </div>
    </main>
  );
}