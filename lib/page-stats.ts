export function getDailySeries(
  viewsOrSince: ViewsMap | Date,
  maybeDays?: number
) {
  let sinceDate = "";

  if (viewsOrSince instanceof Date) {
    sinceDate = toDateKey(viewsOrSince);
  } else if (typeof maybeDays === "number") {
    const d = new Date();
    d.setDate(d.getDate() - maybeDays + 1);
    sinceDate = toDateKey(d);
  } else {
    const d = new Date();
    d.setDate(d.getDate() - 29);
    sinceDate = toDateKey(d);
  }

  const viewHistory = readViewsHistory();
  const clicks = readClicks();

  const grouped = new Map<
    string,
    {
      date: string;
      views: number;
      clicks: number;
      count: number;
    }
  >();

  for (const item of viewHistory) {
    if (item.date >= sinceDate) {
      const current = grouped.get(item.date) || {
        date: item.date,
        views: 0,
        clicks: 0,
        count: 0,
      };

      current.views += item.count;
      current.count += item.count;
      grouped.set(item.date, current);
    }
  }

  for (const item of clicks) {
    if (item.date >= sinceDate) {
      const current = grouped.get(item.date) || {
        date: item.date,
        views: 0,
        clicks: 0,
        count: 0,
      };

      current.clicks += item.count;
      grouped.set(item.date, current);
    }
  }

  return Array.from(grouped.values()).sort((a, b) => a.date.localeCompare(b.date));
}