export const simpleCommandPaletteCode = `"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CommandPalette, CommandPaletteItem } from "@/components/ui/CommandPalette";

export function SimpleCommandPalette() {
  const [open, setOpen] = useState(false);
  return <><Button onClick={() => setOpen(true)}>Open palette</Button><CommandPalette open={open} onOpenChange={setOpen}><CommandPaletteItem onSelect={() => setOpen(false)}>Search documentation</CommandPaletteItem><CommandPaletteItem onSelect={() => setOpen(false)}>Open settings</CommandPaletteItem></CommandPalette></>;
}`;
export const groupedCommandPaletteCode = simpleCommandPaletteCode.replace("Search documentation", "Go to dashboard").replace("Open settings", "View documents");
export const commandPaletteWithShortcutsCode = simpleCommandPaletteCode.replace("Open palette", "Keyboard shortcuts");
