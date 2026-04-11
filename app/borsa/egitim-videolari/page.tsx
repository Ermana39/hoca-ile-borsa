import Image from "next/image";
import Link from "next/link";

type VideoItem = {
  id: string;
  url: string;
};

const videoLinks: VideoItem[] = [
  { id: "xllOFuh78Zc", url: "https://youtu.be/xllOFuh78Zc" },
  { id: "NpM3QhBF2xk", url: "https://youtu.be/NpM3QhBF2xk" },
  { id: "_mzojct2biM", url: "https://youtu.be/_mzojct2biM" },
  { id: "y3BjISSngow", url: "https://youtu.be/y3BjISSngow" },
  { id: "islCvIYcSsQ", url: "https://youtu.be/islCvIYcSsQ" },
  { id: "2m2-2IjIPF4", url: "https://youtu.be/2m2-2IjIPF4" },
  { id: "MJ-HF_Lhwv4", url: "https://youtu.be/MJ-HF_Lhwv4" },
  { id: "LrOMk3d6OVI", url: "https://youtu.be/LrOMk3d6OVI" },
  { id: "HFFDy5RB6yw", url: "https://youtu.be/HFFDy5RB6yw" },
  { id: "1xu1frvfqaA", url: "https://youtu.be/1xu1frvfqaA" },
  { id: "q8s9nNO5-8U", url: "https://youtu.be/q8s9nNO5-8U" },
  { id: "3g2jU1eqBAU", url: "https://youtu.be/3g2jU1eqBAU" },
  { id: "ASucJsTjdeE", url: "https://youtu.be/ASucJsTjdeE" },
  { id: "P3GKe2f_MU0", url: "https://youtu.be/P3GKe2f_MU0" },
];

type ResolvedVideo = {
  id: string;
  url: string;
  title: string;
  thumbnail: string;
};

function ReklamAlani({ variant = "yatay" }: { variant?: "yatay" | "icerik" }) {
  const alanClass =
    variant === "icerik"
      ? "min-h-[220px] sm:min-h-[250px] lg:min-h-[280px]"
      : "min-h-[100px] sm:min-h-[110px] lg:min-h-[120px]";

  return (
    <section
      aria-label="Reklam alanı"
      className={`w-full overflow-hidden rounded-2xl ${alanClass}`}
    >
      <div className={`w-full ${alanClass}`} />
    </section>
  );
}

async function getVideoMeta(video: VideoItem): Promise<ResolvedVideo> {
  const fallback: ResolvedVideo = {
    id: video.id,
    url: video.url,
    title: "Eğitim Videosu",
    thumbnail: `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
  };

  try {
    const oembedUrl = `https://www.youtube.com/oembed?url=${encodeURIComponent(video.url)}&format=json`;

    const response = await fetch(oembedUrl, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return fallback;
    }

    const data = (await response.json()) as {
      title?: string;
      thumbnail_url?: string;
    };

    return {
      id: video.id,
      url: video.url,
      title: data.title?.trim() || fallback.title,
      thumbnail: data.thumbnail_url || fallback.thumbnail,
    };
  } catch {
    return fallback;
  }
}

export default async function EgitimVideolariPage() {
  const videos = await Promise.all(videoLinks.map(getVideoMeta));

  return (
    <main className="min-h-screen bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/borsa"
            className="inline-block rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            Geri
          </Link>
        </div>

        <h1 className="mb-2 text-3xl font-bold text-zinc-900">Eğitim Videoları</h1>
        <p className="mb-8 max-w-3xl text-base text-zinc-600">
          Borsa eğitim videolarına aşağıdaki kartlardan ulaşabilirsiniz.
        </p>

        <section className="mb-8">
          <ReklamAlani variant="yatay" />
        </section>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {videos.map((video) => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[260px] flex-col rounded-2xl border border-zinc-200 bg-white p-3 transition hover:bg-zinc-50"
              aria-label={video.title}
            >
              <div className="relative mb-4 overflow-hidden rounded-2xl bg-zinc-100">
                <div className="relative aspect-video w-full">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    unoptimized
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>
              </div>

              <div className="flex flex-1 items-center justify-center px-2 pb-2 text-center">
                <h2 className="text-lg font-semibold leading-tight text-zinc-900 md:text-xl">
                  {video.title}
                </h2>
              </div>
            </a>
          ))}
        </section>

        <section className="mt-8">
          <ReklamAlani variant="icerik" />
        </section>
      </div>
    </main>
  );
}