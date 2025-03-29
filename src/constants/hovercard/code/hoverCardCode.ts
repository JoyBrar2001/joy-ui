export const hoverCardCode = `import { cn } from "@/utils";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

export const HoverCard = HoverCardPrimitive.Root;

export const HoverCardArrow = HoverCardPrimitive.Arrow;

export function HoverCardTrigger({ children, ...props }: HoverCardPrimitive.HoverCardTriggerProps) {
  return (
    <HoverCardPrimitive.Trigger asChild {...props}>
      {children}
    </HoverCardPrimitive.Trigger>
  );
}

export function HoverCardContent({
  children,
  className,
  side = "bottom",
  sideOffset = 8,
  ...props
}: HoverCardPrimitive.HoverCardContentProps) {
  return (
    <HoverCardPrimitive.Portal>
      <HoverCardPrimitive.Content
        side={side}
        sideOffset={sideOffset}
        className={cn(
          "z-50 w-64 bg-white dark:bg-neutral-900 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700 p-3",
          {
            "data-[state=open]:data-[side=top]:animate-slideUpAndFadeIn data-[state=closed]:data-[side=top]:animate-slideDownAndFadeOut":
              side === "top",
            "data-[state=open]:data-[side=bottom]:animate-slideDownAndFadeIn data-[state=closed]:data-[side=bottom]:animate-slideUpAndFadeOut":
              side === "bottom",
            "data-[state=open]:data-[side=left]:animate-slideLeftAndFadeIn data-[state=closed]:data-[side=left]:animate-slideRightAndFadeOut":
              side === "left",
            "data-[state=open]:data-[side=right]:animate-slideRightAndFadeIn data-[state=closed]:data-[side=right]:animate-slideLeftAndFadeOut":
              side === "right",
          },
          className
        )}
        {...props}
      >
        {children}
      </HoverCardPrimitive.Content>
    </HoverCardPrimitive.Portal>
  );
}`;