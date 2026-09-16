import * as Primitive from "@radix-ui/react-navigation-menu";
import { cn } from "@/utils";

export function NavigationMenu({
  className,
  ...props
}: Primitive.NavigationMenuProps) {
  return (
    <Primitive.Root className={cn("relative z-10", className)} {...props} />
  );
}
export function NavigationMenuList({
  className,
  ...props
}: Primitive.NavigationMenuListProps) {
  return (
    <Primitive.List
      className={cn("flex items-center gap-1", className)}
      {...props}
    />
  );
}
export const NavigationMenuItem = Primitive.Item;
export function NavigationMenuLink({
  className,
  ...props
}: Primitive.NavigationMenuLinkProps) {
  return (
    <Primitive.Link
      className={cn(
        "inline-flex min-h-9 items-center rounded-md px-3 py-2 text-sm text-neutral-700 outline-none transition-colors hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-neutral-500 dark:text-neutral-200 dark:hover:bg-neutral-800",
        className,
      )}
      {...props}
    />
  );
}
export function NavigationMenuTrigger({
  className,
  ...props
}: Primitive.NavigationMenuTriggerProps) {
  return (
    <Primitive.Trigger
      className={cn(
        "inline-flex min-h-9 items-center rounded-md px-3 py-2 text-sm font-medium text-neutral-700 outline-none transition-colors hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-neutral-500 data-[state=open]:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:data-[state=open]:bg-neutral-800",
        className,
      )}
      {...props}
    />
  );
}

export function NavigationMenuContent({
  className,
  ...props
}: Primitive.NavigationMenuContentProps) {
  return (
    <Primitive.Content
      className={cn(
        "absolute left-0 top-0 w-full rounded-lg border border-neutral-200 bg-white p-4 shadow-xl data-[motion=from-end]:animate-slideDownAndFadeIn dark:border-neutral-700 dark:bg-neutral-950",
        className,
      )}
      {...props}
    />
  );
}
export function NavigationMenuViewport({
  className,
  ...props
}: Primitive.NavigationMenuViewportProps) {
  return (
    <Primitive.Viewport
      className={cn(
        "absolute left-0 top-full mt-2 h-[var(--radix-navigation-menu-viewport-height)] w-full min-w-[20rem] origin-top overflow-hidden rounded-lg border border-neutral-200 bg-transparent shadow-xl dark:border-neutral-700 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className,
      )}
      {...props}
    />
  );
}
