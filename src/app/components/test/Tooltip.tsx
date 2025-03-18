import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/utils";

type TooltipProps = {
  children: React.ReactNode;
};

export function Tooltip({ children }: TooltipProps) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>{children}</TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}

export function TooltipTrigger({ children }: TooltipProps) {
  return (
    <TooltipPrimitive.Trigger asChild>
      {children}
    </TooltipPrimitive.Trigger>
  );
}

type TooltipContentProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive" | "custom";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  side?: "top" | "right" | "bottom" | "left";
  sideOffset?: number;
  className?: string;
};

export function TooltipContent({
  children,
  variant = "primary",
  size = "sm",
  side = "top",
  sideOffset = 5,
  className = "",
}: TooltipContentProps) {
  const variantClasses = {
    primary:
      "bg-white text-black dark:bg-black dark:text-white",
    secondary:
      "bg-neutral-200 text-black hover:bg-neutral-300 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700",
    outline:
      "border border-neutral-300 text-black hover:bg-neutral-100 dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-800",
    ghost: "text-neutral-500 hover:text-black dark:hover:text-white",
    destructive: "bg-red-500 hover:bg-red-600 text-white",
    custom: className,
  };

  const sizeClasses = {
    xs: "text-xs px-1 py-0.5",
    sm: "text-sm px-2 py-1",
    md: "text-base px-3 py-1.5",
    lg: "text-lg px-4 py-2",
    xl: "text-xl px-5 py-2.5",
  };

  const animationClasses = {
    top: "data-[state=delayed-open]:animate-slideUpAndFadeIn data-[state=closed]:animate-slideDownAndFadeOut",
    bottom: "data-[state=delayed-open]:animate-slideDownAndFadeIn data-[state=closed]:animate-slideUpAndFadeOut",
    left: "data-[state=delayed-open]:animate-slideLeftAndFadeIn data-[state=closed]:animate-slideRightAndFadeOut",
    right: "data-[state=delayed-open]:animate-slideRightAndFadeIn data-[state=closed]:animate-slideLeftAndFadeOut",
  };

  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        className={cn(
          "select-none rounded shadow-lg",
          animationClasses[side],
          variantClasses[variant] || className,
          sizeClasses[size]
        )}
        sideOffset={sideOffset}
        side={side}
      >
        {children}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}
