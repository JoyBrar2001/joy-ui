export const collapsibleCode = `import { ComponentPropsWithoutRef } from "react";

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
          "bg-white text-neutral-800": variant === "primary",
          "bg-neutral-800 text-white border border-neutral-600": variant === "secondary",
          "bg-black text-white border border-neutral-800": variant === "outline",
          "bg-transparent text-white": variant === "ghost",
          "bg-red-500 text-white border border-red-800": variant === "destructive",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}`;