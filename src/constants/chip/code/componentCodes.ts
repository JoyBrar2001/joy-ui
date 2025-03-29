export const customChipCode = `import { Chip } from "@/components/ui/Chip";

export function CustomChip() {
  return (
    <Chip variant="custom" className="bg-blue-500 text-white">
      Custom
    </Chip>
  );
}`;

export const doneChipCode = `import { Chip } from "@/components/ui/Chip";
import { Check } from "lucide-react";

export function DoneChip() {
  return (
    <Chip variant="outline">
      Task Done
      <Check size={16} />
    </Chip>
  );
}`;

export const ghostChipCode = `import { Chip } from "@/components/ui/Chip";

export function GhostChip(){
  return <Chip variant="ghost">Ghost</Chip>
}`;

export const onlineChipCode = `import { Chip } from "@/components/ui/Chip";

export function OnlineChip() {
  return (
    <Chip rounded variant="outline">
      <div className="size-2 bg-green-500 rounded-full" />
      Online
    </Chip>
  );
}`;

export const outlinedChipCode = `import { Chip } from "@/components/ui/Chip";

export function OutlinedChip() {
  return <Chip variant="outline">Oulined</Chip>
}`;

export const primaryChipCode = `import { Chip } from "@/components/ui/Chip";

export function PrimaryChip() {
  return <Chip>Primary</Chip>
}`;

export const removableChipCode = `"use client";

import { useState } from "react";
import { Chip } from "@/components/ui/Chip";
import { X } from "lucide-react";

export function RemovableChip() {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return null;
  }

  return (
    <Chip variant="outline" onClick={() => setVisible(false)} className="cursor-pointer">
      <X size={16} />
      Click me
    </Chip>
  )
}`;

export const roundedChipCode = `import { Chip } from "@/components/ui/Chip";

export function RoundedChip(){
  return <Chip rounded>Rounded</Chip>
}`;

export const secondaryChipCode = `import { Chip } from "@/components/ui/Chip";

export function SecondaryChip() {
  return <Chip variant="secondary">Secondary</Chip>
}`;