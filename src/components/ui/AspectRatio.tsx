import { ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "@/utils";

export type AspectRatioProps = ComponentPropsWithoutRef<"div"> & {
  /** Width divided by height. For example, 16 / 9 or 1. */
  ratio?: number;
};

export const AspectRatio = forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ ratio = 1, className, style, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("relative w-full overflow-hidden", className)}
      style={{ aspectRatio: ratio, ...style }}
      {...props}
    />
  ),
);

AspectRatio.displayName = "AspectRatio";
