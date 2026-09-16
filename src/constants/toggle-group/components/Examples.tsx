"use client";

import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Grid2X2,
  List,
  Monitor,
  Moon,
  Sun,
} from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/ToggleGroup";

const itemClass = "border border-neutral-200 dark:border-neutral-700";
export function TextAlignmentGroup() {
  return (
    <ToggleGroup
      type="single"
      defaultValue="left"
      aria-label="Text alignment"
      className="rounded-md"
    >
      <ToggleGroupItem
        value="left"
        aria-label="Align left"
        className={itemClass}
      >
        <AlignLeft className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="center"
        aria-label="Align center"
        className={itemClass}
      >
        <AlignCenter className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="right"
        aria-label="Align right"
        className={itemClass}
      >
        <AlignRight className="size-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
export function ViewModeGroup() {
  return (
    <ToggleGroup
      type="single"
      defaultValue="grid"
      aria-label="View mode"
      className="rounded-md"
    >
      <ToggleGroupItem value="grid" className={itemClass}>
        <Grid2X2 className="mr-2 size-4" />
        Grid
      </ToggleGroupItem>
      <ToggleGroupItem value="list" className={itemClass}>
        <List className="mr-2 size-4" />
        List
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
export function FilterGroup() {
  return (
    <ToggleGroup
      type="single"
      defaultValue="all"
      aria-label="Filter"
      className="flex-wrap rounded-md"
    >
      <ToggleGroupItem value="all" className={itemClass}>
        All
      </ToggleGroupItem>
      <ToggleGroupItem value="active" className={itemClass}>
        Active
      </ToggleGroupItem>
      <ToggleGroupItem value="archived" className={itemClass}>
        Archived
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
export function MultipleToggleGroup() {
  return (
    <ToggleGroup
      type="multiple"
      defaultValue={["desktop"]}
      aria-label="Platforms"
      className="flex-wrap rounded-md"
    >
      <ToggleGroupItem value="desktop" className={itemClass}>
        <Monitor className="mr-2 size-4" />
        Desktop
      </ToggleGroupItem>
      <ToggleGroupItem value="light" className={itemClass}>
        <Sun className="mr-2 size-4" />
        Light
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" className={itemClass}>
        <Moon className="mr-2 size-4" />
        Dark
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
export function DisabledToggleGroup() {
  return (
    <ToggleGroup
      type="single"
      defaultValue="standard"
      disabled
      aria-label="Plan"
      className="rounded-md"
    >
      <ToggleGroupItem value="standard" className={itemClass}>
        Standard
      </ToggleGroupItem>
      <ToggleGroupItem value="pro" className={itemClass}>
        Pro
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
export function VerticalToggleGroup() {
  return (
    <ToggleGroup
      type="single"
      orientation="vertical"
      defaultValue="monthly"
      aria-label="Billing cycle"
      className="items-stretch rounded-md"
    >
      <ToggleGroupItem value="monthly" className={`justify-start ${itemClass}`}>
        Monthly billing
      </ToggleGroupItem>
      <ToggleGroupItem value="yearly" className={`justify-start ${itemClass}`}>
        Yearly billing — save 20%
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
