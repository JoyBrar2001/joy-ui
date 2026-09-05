"use client";

import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Command as CommandPrimitive } from "cmdk";
import { cn } from "@/utils";

export const Command = CommandPrimitive;
export const CommandInput = CommandPrimitive.Input;
export const CommandList = CommandPrimitive.List;
export const CommandEmpty = CommandPrimitive.Empty;
export const CommandGroup = CommandPrimitive.Group;
export const CommandItem = CommandPrimitive.Item;
export const CommandSeparator = CommandPrimitive.Separator;

export type CommandPaletteProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children?: ReactNode;
  placeholder?: string;
  label?: string;
  className?: string;
};

export function CommandPalette({ open, onOpenChange, children, placeholder = "Search commands...", label = "Command Palette", className }: CommandPaletteProps) {
  return (
    <CommandPrimitive.Dialog open={open} onOpenChange={onOpenChange} label={label}>
      <div className={cn("fixed left-1/2 top-1/2 z-[100] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-neutral-200 bg-white text-neutral-900 shadow-2xl dark:border-neutral-700 dark:bg-neutral-900 dark:text-white", className)}>
        <CommandPrimitive.Input autoFocus placeholder={placeholder} className="h-12 w-full border-b border-neutral-200 bg-transparent px-4 text-sm outline-none placeholder:text-neutral-500 dark:border-neutral-700" />
        <CommandPrimitive.List className="max-h-80 overflow-y-auto p-2 outline-none">{children}</CommandPrimitive.List>
      </div>
    </CommandPrimitive.Dialog>
  );
}

export function CommandPaletteGroup({ className, ...props }: ComponentPropsWithoutRef<typeof CommandPrimitive.Group>) {
  return <CommandPrimitive.Group className={cn("p-1 text-sm text-neutral-500 dark:text-neutral-400", className)} {...props} />;
}

export function CommandPaletteItem({ className, ...props }: ComponentPropsWithoutRef<typeof CommandPrimitive.Item>) {
  return <CommandPrimitive.Item className={cn("flex cursor-default select-none items-center gap-3 rounded-md px-3 py-2 text-sm outline-none data-[selected=true]:bg-neutral-100 data-[selected=true]:text-neutral-900 dark:data-[selected=true]:bg-neutral-800 dark:data-[selected=true]:text-white", className)} {...props} />;
}

export function CommandPaletteSeparator({ className, ...props }: ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>) {
  return <CommandPrimitive.Separator className={cn("-mx-1 my-1 h-px bg-neutral-200 dark:bg-neutral-700", className)} {...props} />;
}
