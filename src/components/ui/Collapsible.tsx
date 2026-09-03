import { ComponentPropsWithoutRef } from "react";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { cn } from "@/utils";

export function Collapsible({ children, className, ...props }: CollapsiblePrimitive.CollapsibleProps) {
  return (
    <CollapsiblePrimitive.Root className={cn("w-64 items-center justify-between", className)} {...props}>
      {children}
    </CollapsiblePrimitive.Root>
  );
}

export function CollapsibleTrigger({ children, ...props }: CollapsiblePrimitive.CollapsibleTriggerProps) {
  return (
    <CollapsiblePrimitive.Trigger asChild {...props}>
      {children}
    </CollapsiblePrimitive.Trigger>
  );
}

export function CollapsibleContent({
  children,
  className,
  animate = true,
  ...props
}: CollapsiblePrimitive.CollapsibleContentProps & {
  animate?: boolean;
}) {
  return (
    <CollapsiblePrimitive.Content
      className={cn(
        animate && "-mt-2.5 overflow-hidden data-[state=open]:animate-slideDownCollapsible data-[state=closed]:animate-slideUpCollapsible",
        className
      )}
      {...props}
    >
      {children}
    </CollapsiblePrimitive.Content>
  );
}

export function CollapsibleCard({
  children,
  className,
  variant = "primary",
  ...props
}: ComponentPropsWithoutRef<"div"> & {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive";
}) {
  return (
    <div
      className={cn(
        "my-2.5 rounded p-2.5",
        {
          "bg-neutral-100 text-neutral-800 dark:bg-white": variant === "primary",
          "border border-neutral-300 bg-neutral-200 text-neutral-900 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white": variant === "secondary",
          "border border-neutral-300 bg-white text-neutral-900 dark:border-neutral-800 dark:bg-black dark:text-white": variant === "outline",
          "bg-transparent text-neutral-900 dark:text-white": variant === "ghost",
          "bg-red-500 text-white border border-red-800": variant === "destructive",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
