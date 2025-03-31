import { cn } from "@/utils";
import { ComponentPropsWithoutRef } from "react";

export function Skeleton({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-neutral-800",
        className
      )}
      {...props}
    />
  );
}