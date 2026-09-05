"use client";

import { useMemo, useState } from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { Check, ChevronDown, X } from "lucide-react";
import { cn } from "@/utils";

export type MultiSelectOption = { label: string; value: string; disabled?: boolean };

type MultiSelectProps = {
  options: MultiSelectOption[];
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  className?: string;
  disabled?: boolean;
};

export function MultiSelect({ options, value, defaultValue = [], onValueChange, placeholder = "Select options", searchPlaceholder = "Search options...", emptyMessage = "No options found.", className, disabled = false }: MultiSelectProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [search, setSearch] = useState("");
  const selected = value ?? internalValue;
  const filteredOptions = useMemo(() => options.filter((option) => option.label.toLowerCase().includes(search.toLowerCase())), [options, search]);

  const updateValue = (nextValue: string[]) => {
    if (value === undefined) setInternalValue(nextValue);
    onValueChange?.(nextValue);
  };

  const toggleValue = (option: MultiSelectOption) => {
    if (option.disabled) return;
    updateValue(selected.includes(option.value) ? selected.filter((item) => item !== option.value) : [...selected, option.value]);
  };

  const selectedLabels = options.filter((option) => selected.includes(option.value)).map((option) => option.label);

  return (
    <PopoverPrimitive.Root onOpenChange={(open) => !open && setSearch("")}>
      <PopoverPrimitive.Trigger asChild>
        <button type="button" disabled={disabled} className={cn("flex min-h-9 w-full items-center justify-between gap-2 rounded-md border border-neutral-300 bg-white px-3 py-2 text-left text-sm text-neutral-900 outline-none transition hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-60 dark:border-neutral-700 dark:bg-neutral-950 dark:text-white dark:hover:bg-neutral-900", className)} aria-label={placeholder}>
          <span className="flex min-w-0 flex-wrap gap-1">
            {selectedLabels.length ? selectedLabels.map((label) => <span key={label} className="rounded bg-neutral-100 px-1.5 py-0.5 text-xs dark:bg-neutral-800">{label}</span>) : <span className="text-neutral-500">{placeholder}</span>}
          </span>
          <ChevronDown className="size-4 shrink-0 text-neutral-500" />
        </button>
      </PopoverPrimitive.Trigger>
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content align="start" sideOffset={5} className="z-50 w-[var(--radix-popover-trigger-width)] min-w-56 rounded-md border border-neutral-200 bg-white p-2 text-neutral-900 shadow-lg dark:border-neutral-700 dark:bg-neutral-900 dark:text-white">
          <div className="flex items-center gap-2 rounded border border-neutral-200 px-2 dark:border-neutral-700">
            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder={searchPlaceholder} className="h-9 min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-neutral-500" autoFocus />
            {search && <button type="button" onClick={() => setSearch("")} aria-label="Clear search"><X className="size-4 text-neutral-500" /></button>}
          </div>
          <div className="mt-2 max-h-56 overflow-y-auto">
            {filteredOptions.length ? filteredOptions.map((option) => (
              <label key={option.value} className={cn("flex cursor-pointer items-center gap-2 rounded px-2 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800", option.disabled && "cursor-not-allowed opacity-50")}>
                <CheckboxPrimitive.Root checked={selected.includes(option.value)} disabled={option.disabled} onCheckedChange={() => toggleValue(option)} className="flex size-4 items-center justify-center rounded border border-neutral-400 data-[state=checked]:border-neutral-900 data-[state=checked]:bg-neutral-900 data-[state=checked]:text-white dark:border-neutral-600 dark:data-[state=checked]:border-white dark:data-[state=checked]:bg-white dark:data-[state=checked]:text-black">
                  <CheckboxPrimitive.Indicator><Check className="size-3" /></CheckboxPrimitive.Indicator>
                </CheckboxPrimitive.Root>
                <span>{option.label}</span>
              </label>
            )) : <p className="px-2 py-3 text-sm text-neutral-500">{emptyMessage}</p>}
          </div>
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
}
