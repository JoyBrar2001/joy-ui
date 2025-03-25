import { cn } from "@/utils";
import * as LabelPrimitive from "@radix-ui/react-label";

export function Label({ children, className, ...props }: LabelPrimitive.LabelProps) {
  return (
    <LabelPrimitive.Root
      className={cn(
        "text-sm font-medium",
        className
      )}
      {...props}
    >
      {children}
    </LabelPrimitive.Root>
  )
}