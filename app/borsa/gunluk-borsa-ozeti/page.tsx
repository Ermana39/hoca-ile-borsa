<div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
  <div className="grid min-h-[320px] grid-rows-4 text-center">
    <div className="flex items-center justify-center border-b border-zinc-200">
      <div>
        <div className="text-2xl font-semibold text-zinc-700">XU100</div>
        <div className="mt-3 text-4xl font-bold text-zinc-900">
          {bistVeri.kapanis}
        </div>
      </div>
    </div>

    <div className="flex items-center justify-center border-b border-zinc-200">
      <div
        className={`text-4xl font-semibold ${
          pozitif ? "text-green-700" : "text-red-700"
        }`}
      >
        %{bistVeri.degisimYuzde.toFixed(2)}
      </div>
    </div>

    <div className="flex items-center justify-center border-b border-zinc-200">
      <div>
        <div className="text-sm font-semibold text-zinc-500">
          BIST Toplam Hacim
        </div>
        <div className="mt-2 text-2xl font-bold text-zinc-800">
          351.316.661.806
        </div>
      </div>
    </div>

    <div className="flex items-center justify-center">
      <div className="text-2xl font-semibold text-zinc-700">
        {bistVeri.tarih}
      </div>
    </div>
  </div>
</div>