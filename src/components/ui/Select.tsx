import React from "react";

import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

import { cn } from "@/utils";

export const Select = SelectPrimitive.Root;

export const SelectValue = SelectPrimitive.Value;

export const SelectViewport = SelectPrimitive.Viewport;

export const SelectGroup = SelectPrimitive.Group;

export function SelectTrigger({
  children,
  className,
  icon = <ChevronDown size={20} className="transition duration-300 group-data-[state=closed]:rotate-0 group-data-[state=open]:-rotate-180" />,
  ...props
}: SelectPrimitive.SelectTriggerProps & {
  icon?: React.ReactNode;
}) {
  return (
    <SelectPrimitive.Trigger
      className={cn(
        "group inline-flex h-9 items-center justify-between gap-[5px] rounded border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-900 outline-none data-[placeholder]:text-neutral-500 dark:border-neutral-800 dark:bg-black dark:text-white dark:data-[placeholder]:text-neutral-400",
        "disabled:opacity-60",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon className="text-neutral-900 dark:text-white">
        {icon}
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

export function SelectContent({
  children,
  className,
  position = "popper",
  side = "bottom",
  sideOffset = 5,
  align = "center",
  animate = true,
  ...props
}: SelectPrimitive.SelectContentProps & {
  animate?: boolean;
}) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        position={position}
        side={side}
        sideOffset={sideOffset}
        align={align}
        className={cn(
          "overflow-hidden rounded border border-neutral-300 bg-white py-4 px-2 text-neutral-900 dark:border-neutral-800 dark:bg-black dark:text-white",
          animate && "will-change-transform data-[side=bottom]:data-[state=open]:animate-openSelectBottom data-[side=top]:data-[state=open]:animate-openSelectTop",
          className
        )}
        {...props}
      >
        {children}
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

export function SelectScrollUpButton({
  className,
  icon = <ChevronUp />,
  ...props
}: SelectPrimitive.SelectScrollUpButtonProps & {
  icon?: React.ReactNode
}) {
  return (
    <SelectPrimitive.ScrollUpButton
      className={cn("flex h-6 items-center justify-center bg-white text-neutral-900 dark:bg-black dark:text-white", className)}
      {...props}
    >
      {icon}
    </SelectPrimitive.ScrollUpButton>
  );
}

export function SelectScrollDownButton({
  className,
  icon = <ChevronDown />,
  ...props
}: SelectPrimitive.SelectScrollDownButtonProps & {
  icon?: React.ReactNode
}) {
  return (
    <SelectPrimitive.ScrollDownButton
      className={cn("flex h-6 items-center justify-center bg-white text-neutral-900 dark:bg-black dark:text-white", className)}
      {...props}
    >
      {icon}
    </SelectPrimitive.ScrollDownButton>
  );
}

export function SelectLabel({
  children,
  className,
  ...props
}: SelectPrimitive.SelectLabelProps) {
  return (
    <SelectPrimitive.Label className={cn("px-1 py-0.5 text-sm leading-4 text-neutral-600 dark:text-gray-300", className)} {...props}>
      {children}
    </SelectPrimitive.Label>
  );
}

export function SelectItem({
  children,
  indicatorIcon = <Check size={16} />,
  className,
  ...props
}: SelectPrimitive.SelectItemProps & {
  indicatorIcon?: React.ReactNode;
}) {
  return (
    <SelectPrimitive.Item
      className={cn(
        "relative flex justify-between h-[25px] select-none items-center rounded-[3px] px-2 py-2 text-sm leading-none text-neutral-900 data-[disabled]:pointer-events-none data-[highlighted]:bg-neutral-100 data-[disabled]:text-gray-400 data-[highlighted]:text-neutral-900 data-[highlighted]:outline-none dark:text-white dark:data-[highlighted]:bg-neutral-800 dark:data-[disabled]:text-gray-500 dark:data-[highlighted]:text-white",
        className,
      )}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator>{indicatorIcon}</SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
};
