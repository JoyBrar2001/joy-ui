export const commandPaletteCode = `"use client";

import { Command as CommandPrimitive } from "cmdk";
import { cn } from "@/utils";

export const Command = CommandPrimitive;
export const CommandInput = CommandPrimitive.Input;
export const CommandList = CommandPrimitive.List;
export const CommandEmpty = CommandPrimitive.Empty;
export const CommandGroup = CommandPrimitive.Group;
export const CommandItem = CommandPrimitive.Item;
export const CommandSeparator = CommandPrimitive.Separator;

export function CommandPalette({ open, onOpenChange, children, placeholder = "Search commands..." }) {
  return <CommandPrimitive.Dialog open={open} onOpenChange={onOpenChange} label="Command Palette">
    <div className={cn("fixed left-1/2 top-1/2 z-[100] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border bg-white shadow-2xl dark:bg-neutral-900")}>
      <CommandPrimitive.Input autoFocus placeholder={placeholder} className="h-12 w-full border-b px-4 text-sm outline-none" />
      <CommandPrimitive.List className="max-h-80 overflow-y-auto p-2">{children}</CommandPrimitive.List>
    </div>
  </CommandPrimitive.Dialog>;
}`;
