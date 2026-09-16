import * as Primitive from "@radix-ui/react-navigation-menu";
import { cn } from "@/utils";

export const NavigationMenu = Primitive.Root;
export const NavigationMenuList = Primitive.List;
export const NavigationMenuItem = Primitive.Item;
export const NavigationMenuLink = Primitive.Link;
export const NavigationMenuTrigger = Primitive.Trigger;

export function NavigationMenuContent({ className, ...props }: Primitive.NavigationMenuContentProps) { return <Primitive.Content className={cn("absolute left-0 top-0 w-full rounded-lg border border-neutral-200 bg-white p-4 shadow-xl data-[motion=from-end]:animate-slideDownAndFadeIn dark:border-neutral-700 dark:bg-neutral-950", className)} {...props} />; }
export function NavigationMenuViewport({ className, ...props }: Primitive.NavigationMenuViewportProps) { return <Primitive.Viewport className={cn("absolute left-0 top-full mt-2 w-full origin-top overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-xl dark:border-neutral-700 dark:bg-neutral-950 md:w-[var(--radix-navigation-menu-viewport-width)]", className)} {...props} />; }
