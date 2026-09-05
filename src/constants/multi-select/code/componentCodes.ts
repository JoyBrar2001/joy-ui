export const simpleMultiSelectCode = `import { MultiSelect } from "@/components/ui/MultiSelect";

const options = [
  { label: "Design", value: "design" },
  { label: "Engineering", value: "engineering" },
];

export function SimpleMultiSelect() {
  return <MultiSelect options={options} placeholder="Select teams" />;
}`;
export const multiSelectWithDefaultsCode = `import { MultiSelect } from "@/components/ui/MultiSelect";

export function MultiSelectWithDefaults() {
  return <MultiSelect options={options} defaultValue={["design", "engineering"]} />;
}`;
export const searchableMultiSelectCode = `import { MultiSelect } from "@/components/ui/MultiSelect";

export function SearchableMultiSelect() {
  return <MultiSelect options={options} searchPlaceholder="Filter teams..." />;
}`;
export const disabledMultiSelectCode = `import { MultiSelect } from "@/components/ui/MultiSelect";

export function DisabledMultiSelect() {
  return <MultiSelect options={[...options, { label: "Finance", value: "finance", disabled: true }]} />;
}`;
export const controlledMultiSelectCode = `"use client";

import { useState } from "react";
import { MultiSelect } from "@/components/ui/MultiSelect";

export function ControlledMultiSelect() {
  const [value, setValue] = useState<string[]>([]);
  return <MultiSelect options={options} value={value} onValueChange={setValue} />;
}`;
