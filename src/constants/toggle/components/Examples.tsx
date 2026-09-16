"use client";

import { useState } from "react";
import { Bold, Italic, Link as LinkIcon, List, Moon, Sun } from "lucide-react";
import { Toggle, ToggleGroup, ToggleGroupItem } from "@/components/ui/Toggle";

export function RegularToggle() {
  return (
    <Toggle aria-label="Toggle bold">
      <Bold className="size-4" />
    </Toggle>
  );
}
export function DisabledToggle() {
  return (
    <Toggle disabled aria-label="Disabled toggle">
      Unavailable
    </Toggle>
  );
}
export function AlwaysOnToggle() {
  return (
    <Toggle defaultPressed aria-label="Always on toggle">
      Always on
    </Toggle>
  );
}
export function OutlineToggle() {
  return (
    <Toggle variant="outline" aria-label="Toggle favorite">
      Favorite
    </Toggle>
  );
}
export function IconToggle() {
  const [dark, setDark] = useState(false);
  return (
    <Toggle
      variant="outline"
      pressed={dark}
      onPressedChange={setDark}
      aria-label="Toggle appearance"
    >
      {dark ? <Moon className="size-4" /> : <Sun className="size-4" />}
    </Toggle>
  );
}
export function TextToggle() {
  return (
    <div className="flex gap-1">
      <Toggle aria-label="Bold text">
        <Bold className="size-4" />
      </Toggle>
      <Toggle aria-label="Italic text">
        <Italic className="size-4" />
      </Toggle>
      <Toggle aria-label="Add link">
        <LinkIcon className="size-4" />
      </Toggle>
    </div>
  );
}
export function GroupToggle() {
  const [value, setValue] = useState("bold");
  return (
    <ToggleGroup
      type="single"
      value={value}
      onValueChange={(nextValue) => setValue(String(nextValue))}
      aria-label="Text formatting"
    >
      <ToggleGroupItem value="bold" aria-label="Bold">
        <Bold className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
        <Italic className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="list" aria-label="List">
        <List className="size-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
export function MultipleGroupToggle() {
  return (
    <ToggleGroup
      type="multiple"
      defaultValue={["bold"]}
      aria-label="Text formatting"
    >
      <ToggleGroupItem value="bold" aria-label="Bold">
        <Bold className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
        <Italic className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="link" aria-label="Link">
        <LinkIcon className="size-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
export function ControlledToggle() {
  const [pressed, setPressed] = useState(false);
  return (
    <div className="flex items-center gap-3">
      <Toggle pressed={pressed} onPressedChange={setPressed}>
        Notifications
      </Toggle>
      <span className="text-xs text-neutral-500">
        {pressed ? "Enabled" : "Disabled"}
      </span>
    </div>
  );
}
export function ToggleWithLabel() {
  const [pressed, setPressed] = useState(true);
  return (
    <label className="flex items-center gap-3 text-sm">
      <Toggle
        pressed={pressed}
        onPressedChange={setPressed}
        aria-label="Enable focus mode"
      >
        <span className="size-2 rounded-full bg-current" />
        Focus mode
      </Toggle>
      <span className="text-xs text-neutral-500">{pressed ? "On" : "Off"}</span>
    </label>
  );
}
