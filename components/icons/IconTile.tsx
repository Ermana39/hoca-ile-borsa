import { CategoryIcon, type CategoryIconName } from "./CategoryIcon";

export function IconTile({
  name,
  className = "",
}: {
  name: CategoryIconName;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/60 ring-1 ring-inset ring-blue-200/60 shadow-[0_1px_2px_rgba(15,23,42,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] ${className}`}
    >
      <CategoryIcon name={name} className="h-[62%] w-[62%]" />
    </div>
  );
}
