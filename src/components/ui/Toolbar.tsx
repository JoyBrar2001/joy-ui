import * as Primitive from "@radix-ui/react-toolbar";
import { cn } from "@/utils";

export function Toolbar({ className, ...props }: Primitive.ToolbarProps) { return <Primitive.Root className={cn("flex flex-wrap items-center gap-1 rounded-lg border border-neutral-200 bg-white p-1 dark:border-neutral-800 dark:bg-neutral-950", className)} {...props} />; }
export function ToolbarButton({ className, ...props }: Primitive.ToolbarButtonProps) { return <Primitive.Button className={cn("inline-flex h-8 items-center justify-center rounded px-2 text-sm transition-colors hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 dark:hover:bg-neutral-800", className)} {...props} />; }
export function ToolbarLink({ className, ...props }: Primitive.ToolbarLinkProps) { return <Primitive.Link className={cn("inline-flex h-8 items-center rounded px-2 text-sm text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800", className)} {...props} />; }
export function ToolbarSeparator({ className, ...props }: Primitive.ToolbarSeparatorProps) { return <Primitive.Separator className={cn("mx-1 h-5 w-px bg-neutral-200 dark:bg-neutral-700", className)} {...props} />; }
export const ToolbarToggleGroup = Primitive.ToggleGroup;
export function ToolbarToggleItem({ className, ...props }: Primitive.ToolbarToggleItemProps) { return <Primitive.ToggleItem className={cn("inline-flex h-8 items-center justify-center rounded px-2 text-sm transition-colors hover:bg-neutral-100 data-[state=on]:bg-neutral-900 data-[state=on]:text-white dark:hover:bg-neutral-800 dark:data-[state=on]:bg-white dark:data-[state=on]:text-black", className)} {...props} />; }
