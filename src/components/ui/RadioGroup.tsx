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
        "flex justify-center items-center shrink-0 cursor-pointer rounded-full border border-neutral-400 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 shadow-sm transition-all duration-200 hover:border-white focus:ring-1 focus:ring-white",
        animate && "data-[state=checked]:animate-scaleUp data-[state=unchecked]:animate-scaleDown",
        itemSize[size],
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Icon className={cn("fill-current text-white", iconSize[size])} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}
