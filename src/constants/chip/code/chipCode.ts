export const chipCode = `import React from "react";
import { cn } from "@/utils";

type ChipProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive" | "custom";
  rounded?: boolean;
} & React.HTMLAttributes<HTMLSpanElement>;

export default function Chip({
  children,
  variant = "primary",
  rounded = false,
  className,
  ...otherProps
}: ChipProps) {
  return (
    <span
      className={cn(
        "flex items-center w-fit gap-1.5 bg-white text-black text-sm px-2 py-0.5 rounded-md",
        rounded && "rounded-full",
        variant === "primary" &&
        "bg-black text-white hover:bg-neutral-900 dark:bg-white dark:text-black dark:hover:bg-neutral-200",
        variant === "secondary" &&
        "bg-neutral-200 text-black hover:bg-neutral-300 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700",
        variant === "outline" &&
        "border border-neutral-300 bg-transparent text-black hover:bg-neutral-100 dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-800",
        variant === "ghost" && "text-neutral-500 hover:text-black dark:hover:text-white",
        variant === "destructive" && "bg-red-500 hover:bg-red-600 text-white",
        className
      )}
      {...otherProps}
    >
      {children}
    </span>
  );
}`;