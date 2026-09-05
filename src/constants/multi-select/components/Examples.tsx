"use client";

import { useState } from "react";
import { MultiSelect } from "@/components/ui/MultiSelect";

const options = ["Design", "Engineering", "Marketing", "Operations"].map((label) => ({ label, value: label.toLowerCase() }));

export function SimpleMultiSelect() { return <MultiSelect options={options} placeholder="Select teams" />; }
export function MultiSelectWithDefaults() { return <MultiSelect options={options} defaultValue={["design", "engineering"]} placeholder="Select teams" />; }
export function SearchableMultiSelect() { return <MultiSelect options={options} searchPlaceholder="Filter teams..." placeholder="Search teams" />; }
export function DisabledMultiSelect() { return <MultiSelect options={[...options, { label: "Finance", value: "finance", disabled: true }]} placeholder="Select teams" />; }

export function ControlledMultiSelect() {
  const [value, setValue] = useState<string[]>([]);
  return <MultiSelect options={options} value={value} onValueChange={setValue} placeholder="Select teams" />;
}
