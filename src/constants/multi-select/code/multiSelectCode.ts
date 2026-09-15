export const multiSelectCode = `"use client";

import { useMemo, useState } from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { Check, ChevronDown, X } from "lucide-react";
import { cn } from "@/utils";

export type MultiSelectOption = { label: string; value: string; disabled?: boolean };

export function MultiSelect({ options, value, defaultValue = [], onValueChange, placeholder = "Select options" }) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [search, setSearch] = useState("");
  const selected = value ?? internalValue;
  const filteredOptions = useMemo(() => options.filter((option) => option.label.toLowerCase().includes(search.toLowerCase())), [options, search]);
  const toggleValue = (option) => {
    const nextValue = selected.includes(option.value) ? selected.filter((item) => item !== option.value) : [...selected, option.value];
    setInternalValue(nextValue);
    onValueChange?.(nextValue);
  };
  return <PopoverPrimitive.Root>{/* trigger, searchable listbox, and Radix checkboxes */}</PopoverPrimitive.Root>;
}`;
