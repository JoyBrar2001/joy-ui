export const checkboxCode = `import { cn } from "@/utils";
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
      "shrink-0 flex items-center justify-center appearance-none rounded bg-neutral-950 outline-[1px] outline-neutral-800 transition-all hover:bg-neutral-800 active:bg-neutral-900",
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
  <label className={cn("text-sm leading-none text-white flex items-center gap-1", className)} htmlFor={htmlFor} {...props}>
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
}`;