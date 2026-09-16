import * as Primitive from "@radix-ui/react-context-menu";
import { ChevronRight } from "lucide-react";
import { cn } from "@/utils";

export const ContextMenu = Primitive.Root;
export const ContextMenuTrigger = Primitive.Trigger;
export const ContextMenuGroup = Primitive.Group;
export const ContextMenuPortal = Primitive.Portal;
export const ContextMenuSub = Primitive.Sub;

export function ContextMenuContent({ className, ...props }: Primitive.ContextMenuContentProps) { return <Primitive.Portal><Primitive.Content className={cn("z-50 min-w-44 overflow-hidden rounded-lg border border-neutral-200 bg-white p-1 text-neutral-900 shadow-xl dark:border-neutral-700 dark:bg-neutral-900 dark:text-white", className)} {...props} /></Primitive.Portal>; }
export function ContextMenuItem({ className, ...props }: Primitive.ContextMenuItemProps) { return <Primitive.Item className={cn("flex cursor-default select-none items-center gap-3 rounded px-3 py-2 text-sm outline-none focus:bg-neutral-100 dark:focus:bg-neutral-800", className)} {...props} />; }
export function ContextMenuCheckboxItem({ className, ...props }: Primitive.ContextMenuCheckboxItemProps) { return <Primitive.CheckboxItem className={cn("relative flex cursor-default select-none items-center rounded py-2 pl-8 pr-3 text-sm outline-none focus:bg-neutral-100 dark:focus:bg-neutral-800", className)} {...props} />; }
export function ContextMenuSeparator({ className, ...props }: Primitive.ContextMenuSeparatorProps) { return <Primitive.Separator className={cn("-mx-1 my-1 h-px bg-neutral-200 dark:bg-neutral-700", className)} {...props} />; }
export function ContextMenuSubTrigger({ className, children, ...props }: Primitive.ContextMenuSubTriggerProps) { return <Primitive.SubTrigger className={cn("flex cursor-default select-none items-center rounded px-3 py-2 text-sm outline-none focus:bg-neutral-100 dark:focus:bg-neutral-800", className)} {...props}>{children}<ChevronRight className="ml-auto size-4" /></Primitive.SubTrigger>; }
export function ContextMenuSubContent({ className, ...props }: Primitive.ContextMenuSubContentProps) { return <Primitive.SubContent className={cn("z-50 min-w-40 overflow-hidden rounded-lg border border-neutral-200 bg-white p-1 text-neutral-900 shadow-xl dark:border-neutral-700 dark:bg-neutral-900 dark:text-white", className)} {...props} />; }
