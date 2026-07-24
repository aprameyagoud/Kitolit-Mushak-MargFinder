import { type LucideIcon } from "lucide-react";
import { cn } from "../ui/utils";

export type FeatureChip = {
  icon: LucideIcon;
  label: string;
};

type FeatureChipsProps = {
  items: FeatureChip[];
  className?: string;
  itemClassName?: string;
  iconClassName?: string;
};

export function FeatureChips({ items, className, itemClassName, iconClassName }: FeatureChipsProps) {
  return (
    <ul className={cn("flex flex-wrap", className)}>
      {items.map(({ icon: Icon, label }) => (
        <li key={label} className={cn(itemClassName)}>
          <Icon className={cn("shrink-0", iconClassName)} />
          <span>{label}</span>
        </li>
      ))}
    </ul>
  );
}