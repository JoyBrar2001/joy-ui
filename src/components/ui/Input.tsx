import React from "react";
import { cn } from "@/utils";

export type InputProps = React.ComponentPropsWithoutRef<"input"> & {
  label?: string;
  error?: string;
  className?: string;
  description?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  leftInlineIcon?: React.ReactNode;
  rightInlineIcon?: React.ReactNode;
};

export function Input({
  label,
  error,
  className = "",
  description,
  leftIcon,
  rightIcon,
  leftInlineIcon,
  rightInlineIcon,
  ...props
}: InputProps) {
  return (
    <div className="flex flex-col gap-y-1 w-full">
      {label && <label className="text-sm font-medium">{label}</label>}
      <div className="relative w-full flex items-center">
        {leftIcon && (
          <div className="h-full bg-white dark:bg-neutral-900 border border-neutral-600 px-2 flex items-center justify-center rounded-l-lg">
            {leftIcon}
          </div>
        )}

        {leftInlineIcon && (
          <div className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-neutral-500">
            {leftInlineIcon}
          </div>
        )}

        <input
          className={cn(
            "w-full px-3 py-2 rounded-lg border border-neutral-600 shadow-sm text-sm placeholder:text-sm placeholder:text-zinc-400 focus:outline-none",
            "disabled:bg-neutral-400 dark:disabled:bg-neutral-600 disabled:cursor-not-allowed",
            leftIcon && "rounded-l-none border-l-0",
            rightIcon && "rounded-r-none border-r-0",
            leftInlineIcon && "pl-8",
            rightInlineIcon && "pr-8",
            error && "border-red-500",
            className
          )}
          {...props}
        />

        {rightInlineIcon && (
          <div className="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-neutral-500">
            {rightInlineIcon}
          </div>
        )}

        {rightIcon && (
          <div className="h-full bg-white dark:bg-neutral-900 border border-neutral-600 px-2 flex items-center justify-center rounded-r-lg">
            {rightIcon}
          </div>
        )}
      </div>
      {description && <p className="text-neutral-500 text-sm">{description}</p>}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
