import React from "react";
import { cn } from "@/utils";

export type TextareaProps = React.ComponentPropsWithoutRef<"textarea"> & {
  label?: string;
  error?: string;
  description?: string;
};

export function Textarea({
  label,
  error,
  description,
  className = "",
  id,
  ...props
}: TextareaProps) {
  return (
    <div className="flex w-full flex-col gap-y-1">
      {label && (
        <label className="text-sm font-medium" htmlFor={id}>
          {label}
        </label>
      )}

      <textarea
        id={id}
        className={cn(
          "min-h-24 w-full resize-y rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 shadow-sm outline-none placeholder:text-sm placeholder:text-zinc-400 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:opacity-70 dark:border-neutral-600 dark:bg-neutral-950 dark:text-white dark:focus:border-white dark:focus:ring-white dark:disabled:bg-neutral-800",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500",
          className
        )}
        aria-invalid={Boolean(error) || undefined}
        {...props}
      />

      {description && <p className="text-sm text-neutral-500">{description}</p>}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
