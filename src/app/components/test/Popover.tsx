import { cn } from "@/utils";
import * as PopoverPrimitive from "@radix-ui/react-popover";

export const Popover = PopoverPrimitive.Root;

export const PopoverClose = PopoverPrimitive.Close;

export function PopoverTrigger({ children, ...props }: PopoverPrimitive.PopoverTriggerProps) {
  return (
    <PopoverPrimitive.Trigger asChild {...props}>
      {children}
    </PopoverPrimitive.Trigger>
  );
}

export function PopoverContent({ children, className, side = "bottom", sideOffset = 8, ...props }: PopoverPrimitive.PopoverContentProps) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        side={side}
        sideOffset={sideOffset}
        className={cn("z-50 w-72 bg-white dark:bg-neutral-900 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700",
          {
            "data-[state=open]:data-[side=top]:animate-slideUpAndFadeIn data-[state=closed]:data-[side=top]:animate-slideDownAndFadeOut": side === "top",
            "data-[state=open]:data-[side=bottom]:animate-slideDownAndFadeIn data-[state=closed]:data-[side=bottom]:animate-slideUpAndFadeOut": side === "bottom",
            "data-[state=open]:data-[side=left]:animate-slideLeftAndFadeIn data-[state=closed]:data-[side=left]:animate-slideRightAndFadeOut": side === "left",
            "data-[state=open]:data-[side=right]:animate-slideRightAndFadeIn data-[state=closed]:data-[side=right]:animate-slideLeftAndFadeOut": side === "right",
          }
        )}
        {...props}
      >
        {children}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  );
}