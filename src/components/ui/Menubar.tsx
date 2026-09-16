import * as Primitive from "@radix-ui/react-menubar";
import { cn } from "@/utils";

export const Menubar = Primitive.Root;
export const MenubarMenu = Primitive.Menu;
export const MenubarTrigger = Primitive.Trigger;
export const MenubarGroup = Primitive.Group;
export const MenubarLabel = Primitive.Label;
export const MenubarSeparator = Primitive.Separator;
export const MenubarCheckboxItem = Primitive.CheckboxItem;
export const MenubarRadioGroup = Primitive.RadioGroup;
export const MenubarRadioItem = Primitive.RadioItem;

export function MenubarContent({ className, ...props }: Primitive.MenubarContentProps) { return <Primitive.Portal><Primitive.Content className={cn("z-50 min-w-44 overflow-hidden rounded-lg border border-neutral-200 bg-white p-1 text-neutral-900 shadow-xl dark:border-neutral-700 dark:bg-neutral-900 dark:text-white", className)} {...props} /></Primitive.Portal>; }
export function MenubarItem({ className, ...props }: Primitive.MenubarItemProps) { return <Primitive.Item className={cn("flex cursor-default select-none items-center rounded px-3 py-2 text-sm outline-none focus:bg-neutral-100 dark:focus:bg-neutral-800", className)} {...props} />; }
export function MenubarSub({ ...props }: Primitive.MenubarSubProps) { return <Primitive.Sub {...props} />; }
export function MenubarSubTrigger({ className, ...props }: Primitive.MenubarSubTriggerProps) { return <Primitive.SubTrigger className={cn("flex cursor-default select-none items-center rounded px-3 py-2 text-sm outline-none focus:bg-neutral-100 dark:focus:bg-neutral-800", className)} {...props} />; }
export function MenubarSubContent({ className, ...props }: Primitive.MenubarSubContentProps) { return <Primitive.SubContent className={cn("z-50 min-w-40 rounded-lg border border-neutral-200 bg-white p-1 shadow-xl dark:border-neutral-700 dark:bg-neutral-900", className)} {...props} />; }
