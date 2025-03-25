import { ComponentPropsWithoutRef } from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "@/utils";

export function Separator({
  orientation = "horizontal",
  decorative = true,
  className,
  ...props
}: SeparatorPrimitive.SeparatorProps & ComponentPropsWithoutRef<"div">) {
  return (
    <SeparatorPrimitive.Root
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-neutral-800",
        orientation === "horizontal" && "h-[1px] w-full",
        orientation === "vertical" && "w-[1px] h-full",
        className
      )}
      {...props}
    />
  );
}
