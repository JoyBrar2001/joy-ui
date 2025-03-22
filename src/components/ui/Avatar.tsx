import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "@/utils";

export function Avatar({
  children,
  rounded = true,
  className,
  ...props
}: AvatarPrimitive.AvatarProps & {
  rounded?: boolean;
}) {
  return (
    <AvatarPrimitive.Root
      className={cn(
        "relative inline-flex size-12 select-none items-center justify-center rounded-sm bg-blackA1 align-middle",
        rounded && "rounded-full",
        className
      )}
      {...props}
    >
      {children}
    </AvatarPrimitive.Root>
  );
}

export function AvatarImage({ className, ...props }: AvatarPrimitive.AvatarImageProps) {
  return (
    <AvatarPrimitive.Image
      className={cn(
        "leading-1 flex size-full items-center justify-center bg-white text-sm font-medium rounded-[inherit] object-cover",
        className
      )}
      {...props}
    />
  );
}

export function AvatarFallback({ children, className, ...props }: AvatarPrimitive.AvatarFallbackProps) {
  return (
    <AvatarPrimitive.Fallback
      className="leading-1 flex size-full items-center justify-center bg-neutral-800 text-sm font-medium rounded-[inherit]"
      {...props}
    >
      {children}
    </AvatarPrimitive.Fallback>
  );
}

export function AvatarIcon({
  children,
  className,
  position = "top-right"
}: {
  children: React.ReactNode;
  className?: string;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left"
}) {
  return (
    <div
      className={cn(
        "absolute z-10 flex items-center justify-center rounded-full bg-white shadow-md",
        position === "top-right" && "top-[6%] right-[6%]",
        position === "top-left" && "top-[6%] left-[6%]",
        position === "bottom-right" && "bottom-[6%] right-[6%]",
        position === "bottom-left" && "bottom-[6%] left-[6%]",
        className
      )}
    >
      {children}
    </div>
  );
}
