import * as Primitive from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle } from "lucide-react";
import { createContext, useContext, useState } from "react";
import { cn } from "@/utils";

type MenubarProps = Primitive.MenubarProps & { openOnHover?: boolean };
const MenubarStateContext = createContext<{
  openOnHover: boolean;
  open: (value: string) => void;
} | null>(null);
const MenubarMenuContext = createContext<string | undefined>(undefined);

export function Menubar({
  className,
  openOnHover = true,
  value,
  defaultValue,
  onValueChange,
  ...props
}: MenubarProps) {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const currentValue = value ?? uncontrolledValue;
  const handleValueChange = (nextValue: string) => {
    if (value === undefined) setUncontrolledValue(nextValue);
    onValueChange?.(nextValue);
  };
  return (
    <MenubarStateContext.Provider
      value={{ openOnHover, open: handleValueChange }}
    >
      <Primitive.Root
        {...props}
        value={currentValue}
        onValueChange={handleValueChange}
        className={cn(
          "flex w-fit items-center gap-1 rounded-lg border border-neutral-200 bg-white p-1 shadow-sm dark:border-neutral-700 dark:bg-neutral-950",
          className,
        )}
      />
    </MenubarStateContext.Provider>
  );
}

export function MenubarMenu({
  value,
  children,
  ...props
}: Primitive.MenubarMenuProps) {
  return (
    <MenubarMenuContext.Provider value={value}>
      <Primitive.Menu value={value} {...props}>
        {children}
      </Primitive.Menu>
    </MenubarMenuContext.Provider>
  );
}

export function MenubarTrigger({
  className,
  onPointerEnter,
  ...props
}: Primitive.MenubarTriggerProps) {
  const state = useContext(MenubarStateContext);
  const menuValue = useContext(MenubarMenuContext);
  return (
    <Primitive.Trigger
      className={cn(
        "rounded-md px-3 py-2 text-sm font-medium text-neutral-600 outline-none transition hover:bg-neutral-100 hover:text-neutral-950 data-[state=open]:bg-neutral-900 data-[state=open]:text-white focus-visible:ring-2 focus-visible:ring-neutral-500 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white dark:data-[state=open]:bg-white dark:data-[state=open]:text-black",
        className,
      )}
      onPointerEnter={(event) => {
        onPointerEnter?.(event);
        if (!event.defaultPrevented && state?.openOnHover && menuValue)
          state.open(menuValue);
      }}
      {...props}
    />
  );
}
export const MenubarGroup = Primitive.Group;
export function MenubarLabel({
  className,
  ...props
}: Primitive.MenubarLabelProps) {
  return (
    <Primitive.Label
      className={cn(
        "px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400",
        className,
      )}
      {...props}
    />
  );
}
export function MenubarSeparator({
  className,
  ...props
}: Primitive.MenubarSeparatorProps) {
  return (
    <Primitive.Separator
      className={cn(
        "-mx-1 my-1 h-px bg-neutral-200 dark:bg-neutral-700",
        className,
      )}
      {...props}
    />
  );
}
export function MenubarCheckboxItem({
  className,
  children,
  ...props
}: Primitive.MenubarCheckboxItemProps) {
  return (
    <Primitive.CheckboxItem
      className={cn(
        "relative flex cursor-default select-none items-center rounded py-2 pl-8 pr-3 text-sm outline-none focus:bg-neutral-100 dark:focus:bg-neutral-800",
        className,
      )}
      {...props}
    >
      <Primitive.ItemIndicator className="absolute left-2 inline-flex items-center justify-center">
        <Check className="size-4" />
      </Primitive.ItemIndicator>
      {children}
    </Primitive.CheckboxItem>
  );
}
export const MenubarRadioGroup = Primitive.RadioGroup;
export function MenubarRadioItem({
  className,
  children,
  ...props
}: Primitive.MenubarRadioItemProps) {
  return (
    <Primitive.RadioItem
      className={cn(
        "relative flex cursor-default select-none items-center rounded py-2 pl-8 pr-3 text-sm outline-none focus:bg-neutral-100 dark:focus:bg-neutral-800",
        className,
      )}
      {...props}
    >
      <Primitive.ItemIndicator className="absolute left-2 inline-flex items-center justify-center">
        <Circle className="size-2.5 fill-current" />
      </Primitive.ItemIndicator>
      {children}
    </Primitive.RadioItem>
  );
}

export function MenubarContent({
  className,
  ...props
}: Primitive.MenubarContentProps) {
  return (
    <Primitive.Portal>
      <Primitive.Content
        className={cn(
          "z-50 min-w-44 overflow-hidden rounded-lg border border-neutral-200 bg-white p-1 text-neutral-900 shadow-xl dark:border-neutral-700 dark:bg-neutral-900 dark:text-white",
          className,
        )}
        {...props}
      />
    </Primitive.Portal>
  );
}
export function MenubarItem({
  className,
  ...props
}: Primitive.MenubarItemProps) {
  return (
    <Primitive.Item
      className={cn(
        "flex cursor-default select-none items-center rounded px-3 py-2 text-sm outline-none focus:bg-neutral-100 dark:focus:bg-neutral-800",
        className,
      )}
      {...props}
    />
  );
}
export function MenubarSub({ ...props }: Primitive.MenubarSubProps) {
  return <Primitive.Sub {...props} />;
}
export function MenubarSubTrigger({
  className,
  children,
  ...props
}: Primitive.MenubarSubTriggerProps) {
  return (
    <Primitive.SubTrigger
      className={cn(
        "flex cursor-default select-none items-center rounded px-3 py-2 text-sm outline-none focus:bg-neutral-100 dark:focus:bg-neutral-800",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto size-4" />
    </Primitive.SubTrigger>
  );
}
export function MenubarSubContent({
  className,
  ...props
}: Primitive.MenubarSubContentProps) {
  return (
    <Primitive.SubContent
      className={cn(
        "z-50 min-w-40 rounded-lg border border-neutral-200 bg-white p-1 shadow-xl dark:border-neutral-700 dark:bg-neutral-900",
        className,
      )}
      {...props}
    />
  );
}
