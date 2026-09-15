import { cn } from "@/utils";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import React from "react";

export function ScrollArea({ children, className, ...props }: ScrollAreaPrimitive.ScrollAreaProps) {
  return <ScrollAreaPrimitive.Root
    className={cn(
      "h-[225px] w-[250px] overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 shadow-lg dark:border-neutral-800 dark:bg-neutral-900",
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="size-full rounded-lg">
      {children}
    </ScrollAreaPrimitive.Viewport>

    <ScrollAreaPrimitive.Scrollbar
      className="flex touch-none select-none bg-neutral-200 p-0.5 transition-all duration-150 ease-out hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 data-[orientation=vertical]:w-2"
      orientation="vertical"
    >
      <ScrollAreaPrimitive.Thumb className="relative flex-1 rounded-lg bg-neutral-500 hover:bg-neutral-400" />
    </ScrollAreaPrimitive.Scrollbar>

    <ScrollAreaPrimitive.Scrollbar
      className="flex touch-none select-none bg-neutral-200 p-0.5 transition-all duration-150 ease-out hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 data-[orientation=horizontal]:h-2"
      orientation="horizontal"
    >
      <ScrollAreaPrimitive.Thumb className="relative flex-1 rounded-lg bg-neutral-500 hover:bg-neutral-400" />
    </ScrollAreaPrimitive.Scrollbar>

    <ScrollAreaPrimitive.Corner className="bg-neutral-300 dark:bg-neutral-700" />
  </ScrollAreaPrimitive.Root>
}
