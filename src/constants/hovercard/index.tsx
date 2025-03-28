import { cnFile } from "../common";
import { ComponentCategory } from "../data";
import { HoverCardWithArrow, ProfileHoverCard, SimpleHoverCard, SimpleHoverCardLeft, SimpleHoverCardRight, SimpleHoverCardTop } from "./components";

export const hoverCardData: ComponentCategory = {
  cols: 4,
  title: "Hover Card",
  subtitle: "A collection of Hover Cards for you to use",
  steps: [
    {
      type: "dependencies",
      libraries: [
        "clsx",
        "tailwind-merge",
        "@radix-ui/react-hover-card"
      ]
    },
    {
      type: "utilities",
      files: [
        {
          name: "cn.ts",
          path: "@/utils/cn.ts",
          language: "typescript",
          code: cnFile
        }
      ]
    },
    {
      type: "source",
      name: "Input.tsx",
      path: "@/components/ui/Input.tsx",
      language: "tsx",
      code: `import { cn } from "@/utils";
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
}`
    }
  ],
  components: [
    {
      title: "Simple Hover Card",
      component: SimpleHoverCard
    },
    {
      title: "Hover Card with Arrow",
      component: HoverCardWithArrow
    },
    {
      title: "Profile Hover Card",
      component: ProfileHoverCard
    },
    {
      title: "Simple Hover Card (Left)",
      component: SimpleHoverCardLeft
    },
    {
      title: "Simple Hover Card (Right)",
      component: SimpleHoverCardRight
    },
    {
      title: "Simple Hover Card (Top)",
      component: SimpleHoverCardTop
    },
  ]
}