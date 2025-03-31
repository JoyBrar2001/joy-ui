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
        "group inline-flex h-9 items-center justify-between gap-[5px] rounded px-4 py-2 text-sm bg-black border-[1px] border-neutral-800 text-white outline-none",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon className="text-white">
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
        align={align}
        className={cn(
          "overflow-hidden rounded bg-black border-[1px] border-neutral-800 text-white py-4 px-2",
          animate && "will-change-transform data-[state=open]:animate-openSelect data-[state=closed]:animate-closeSelect",
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
      className={cn("flex h-6 items-center justify-center bg-black text-white", className)}
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
      className={cn("flex h-6 items-center justify-center bg-black text-white", className)}
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
    <SelectPrimitive.Label className={cn("px-2 mb-2 text-sm leading-4 text-gray-300")} {...props}>
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
        "relative flex justify-between h-[25px] select-none items-center rounded-[3px] px-2 py-2 text-sm leading-none text-white data-[disabled]:pointer-events-none data-[highlighted]:bg-neutral-800 data-[disabled]:text-gray-500 data-[highlighted]:text-white data-[highlighted]:outline-none",
        className,
      )}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator>{indicatorIcon}</SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
};