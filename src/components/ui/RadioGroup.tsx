import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import { cn } from "@/utils";

export function RadioGroup({
  children,
  className,
  ...props
}: RadioGroupPrimitive.RadioGroupProps) {
  return (
    <RadioGroupPrimitive.Root
      className={cn(
        "flex gap-2",
        className
      )}
      {...props}
    >
      {children}
    </RadioGroupPrimitive.Root>
  );
}

export function RadioGroupItem({
  className,
  size = "sm",
  animate = false,
  icon: Icon = Circle,
  ...props
}: RadioGroupPrimitive.RadioGroupItemProps & {
  size?: "sm" | "md" | "lg";
  animate?: boolean;
  icon?: React.ElementType;
}) {
  const itemSize = {
    sm: "size-4",
    md: "size-6",
    lg: "size-8",
  };

  const iconSize = {
    sm: "size-2.5",
    md: "size-3",
    lg: "size-4",
  }

  return (
    <RadioGroupPrimitive.Item
      className={cn(
        "flex shrink-0 cursor-pointer items-center justify-center rounded-full border border-neutral-400 bg-neutral-100 shadow-sm transition-all duration-200 hover:border-neutral-900 focus:ring-1 focus:ring-neutral-900 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-white dark:focus:ring-white",
        animate && "data-[state=checked]:animate-scaleUp data-[state=unchecked]:animate-scaleDown",
        itemSize[size],
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Icon className={cn("fill-current text-neutral-900 dark:text-white", iconSize[size])} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}
