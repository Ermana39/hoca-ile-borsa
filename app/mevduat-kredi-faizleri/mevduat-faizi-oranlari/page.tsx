function MevduatGrafik({ data }: { data: GunlukOrtalamaSatiri[] }) {
  if (!data.length) {
    return (
      <section className="rounded-2xl border border-zinc-200 bg-white p-4 md:p-6">
        <h2 className="text-2xl font-bold text-zinc-900">
          Günlük Ortalama Mevduat Faizi Grafiği
        </h2>
        <p className="mt-3 text-sm text-zinc-600">
          Grafik için yeterli veri bulunamadı.
        </p>
      </section>
    );
  }

  const width = 960;
  const height = 360;
  const padding = 42;

  const minValue = Math.min(...data.map((item) => item.ortalama));
  const maxValue = Math.max(...data.map((item) => item.ortalama));
  const range = Math.max(maxValue - minValue, 1);

  const points = data.map((item, index) => {
    const x =
      data.length === 1
        ? width / 2
        : padding + (index * (width - padding * 2)) / (data.length - 1);

    const y =
      height -
      60 -
      ((item.ortalama - minValue) / range) * (height - padding - 80);

    return {
      x,
      y,
      label: item.tarih,
      value: item.ortalama,
    };
  });

  const pathD = points
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ");

  return (
    <section className="rounded-2xl border border-zinc-200 bg-white p-4 md:p-6">
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-zinc-900">
          Günlük Ortalama Mevduat Faizi Grafiği
        </h2>
        <p className="mt-2 text-sm text-zinc-600">
          Günlük ortalama mevduat faiz değişimini gösterir.
        </p>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[960px]">
          <svg viewBox={`0 0 ${width} ${height}`} className="h-[360px] w-full">
            <line
              x1={padding}
              y1={height - 50}
              x2={width - padding}
              y2={height - 50}
              stroke="#d4d4d8"
              strokeWidth="1"
            />

            <line
              x1={padding}
              y1={padding}
              x2={padding}
              y2={height - 50}
              stroke="#d4d4d8"
              strokeWidth="1"
            />

            <path
              d={pathD}
              fill="none"
              stroke="#111827"
              strokeWidth="3"
              strokeLinejoin="round"
              strokeLinecap="round"
            />

            {points.map((point, index) => (
              <g key={`${point.label}-${index}`}>
                <circle cx={point.x} cy={point.y} r="4" fill="#111827" />

                <text
                  x={point.x}
                  y={point.y - 12}
                  textAnchor="middle"
                  fontSize="11"
                  fill="#52525b"
                >
                  %{point.value.toFixed(2).replace(".", ",")}
                </text>

                <text
                  x={point.x}
                  y={height - 18}
                  textAnchor="middle"
                  fontSize="11"
                  fill="#71717a"
                >
                  {point.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}