import * as Primitive from "@radix-ui/react-toggle-group";
import { cn } from "@/utils";

export function ToggleGroup({
  className,
  ...props
}: Primitive.ToggleGroupSingleProps | Primitive.ToggleGroupMultipleProps) {
  return (
    <Primitive.Root
      className={cn(
        "flex flex-wrap items-center gap-2 data-[orientation=vertical]:flex-col",
        className,
      )}
      {...props}
    />
  );
}

export function ToggleGroupItem({
  className,
  ...props
}: Primitive.ToggleGroupItemProps) {
  return (
    <Primitive.Item
      className={cn(
        "inline-flex h-9 items-center justify-center rounded-md px-3 text-sm font-medium text-neutral-600 outline-none transition hover:bg-neutral-100 data-[state=on]:bg-neutral-900 data-[state=on]:text-white focus-visible:ring-2 focus-visible:ring-neutral-500 disabled:pointer-events-none disabled:opacity-50 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:data-[state=on]:bg-white dark:data-[state=on]:text-black",
        className,
      )}
      {...props}
    />
  );
}
