import { cn } from "@/utils";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";
import { ComponentPropsWithoutRef } from "react";

export function CheckboxRoot({ children, className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex items-center gap-2.5", className)} {...props}>
      {children}
    </div>
  );
}

export function Checkbox({
  checked,
  defaultChecked,
  onCheckedChange,
  disabled = false,
  animate = true,
  size = "md",
  className,
  ...props
}: CheckboxPrimitive.CheckboxProps & {
  animate?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClasses = {
    sm: "size-4",
    md: "size-5",
    lg: "size-6",
  };

  const iconSize = {
    sm: 12,
    md: 16,
    lg: 20,
  };

  return (
    <CheckboxPrimitive.Root
      checked={checked}
      defaultChecked={defaultChecked}
      onCheckedChange={onCheckedChange}
      disabled={disabled}
      className={cn(
        "flex shrink-0 items-center justify-center appearance-none rounded bg-neutral-100 outline outline-1 outline-neutral-300 transition-all hover:bg-neutral-200 active:bg-neutral-300 data-[state=checked]:bg-neutral-900 data-[state=checked]:text-white dark:bg-neutral-950 dark:outline-neutral-800 dark:hover:bg-neutral-800 dark:active:bg-neutral-900 dark:data-[state=checked]:bg-white dark:data-[state=checked]:text-black",
        disabled && "opacity-50 cursor-not-allowed",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.CheckboxIndicator
        className={cn(
          "transition-transform duration-300",
          animate && "data-[state=checked]:animate-scaleUp data-[state=unchecked]:animate-scaleDown"
        )}
      >
        <CheckIcon size={iconSize[size]} />
      </CheckboxPrimitive.CheckboxIndicator>
    </CheckboxPrimitive.Root>
  );
}

export function CheckboxLabel({ children, className, htmlFor, ...props }: ComponentPropsWithoutRef<"label">) {
  return (
    <label className={cn("flex items-center gap-1 text-sm leading-none text-neutral-900 dark:text-white", className)} htmlFor={htmlFor} {...props}>
      {children}
    </label>
  );
}

export function CheckboxSubLabel({ children, className, ...props }: ComponentPropsWithoutRef<"span">) {
  return (
    <span className={cn("text-xs text-neutral-400", className)} {...props}>
      {children}
    </span>
  );
}

export function CheckboxDescription({ children, className, ...props }: ComponentPropsWithoutRef<"p">) {
  return (
    <p className={cn("text-xs leading-none text-neutral-600", className)} {...props}>
      {children}
    </p>
  );
}
