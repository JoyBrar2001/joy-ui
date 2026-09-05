"use client";

import { useState } from "react";
import { ArrowRight, Calendar, FileText, Search, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CommandPalette, CommandPaletteGroup, CommandPaletteItem, CommandPaletteSeparator } from "@/components/ui/CommandPalette";

export function SimpleCommandPalette() {
  const [open, setOpen] = useState(false);
  return <><Button onClick={() => setOpen(true)} leftIcon={<Search className="size-4" />}>Open palette</Button><CommandPalette open={open} onOpenChange={setOpen}><CommandPaletteItem onSelect={() => setOpen(false)}>Search documentation</CommandPaletteItem><CommandPaletteItem onSelect={() => setOpen(false)}>Open settings</CommandPaletteItem></CommandPalette></>;
}

export function GroupedCommandPalette() {
  const [open, setOpen] = useState(false);
  return <><Button variant="outline" onClick={() => setOpen(true)}>Browse commands</Button><CommandPalette open={open} onOpenChange={setOpen}><CommandPaletteGroup heading="Navigation"><CommandPaletteItem onSelect={() => setOpen(false)}><ArrowRight className="size-4" />Go to dashboard</CommandPaletteItem><CommandPaletteItem onSelect={() => setOpen(false)}><FileText className="size-4" />View documents</CommandPaletteItem></CommandPaletteGroup><CommandPaletteGroup heading="Account"><CommandPaletteItem onSelect={() => setOpen(false)}><User className="size-4" />Profile</CommandPaletteItem><CommandPaletteItem onSelect={() => setOpen(false)}><Settings className="size-4" />Settings</CommandPaletteItem></CommandPaletteGroup></CommandPalette></>;
}

export function CommandPaletteWithShortcuts() {
  const [open, setOpen] = useState(false);
  return <><Button variant="secondary" onClick={() => setOpen(true)}>Keyboard shortcuts</Button><CommandPalette open={open} onOpenChange={setOpen}><CommandPaletteGroup heading="Actions"><CommandPaletteItem onSelect={() => setOpen(false)}><Calendar className="size-4" />Create event <kbd className="ml-auto text-xs text-neutral-500">⌘E</kbd></CommandPaletteItem><CommandPaletteItem onSelect={() => setOpen(false)}><Search className="size-4" />Search <kbd className="ml-auto text-xs text-neutral-500">⌘K</kbd></CommandPaletteItem></CommandPaletteGroup><CommandPaletteSeparator /><CommandPaletteItem onSelect={() => setOpen(false)}>Close palette <kbd className="ml-auto text-xs text-neutral-500">Esc</kbd></CommandPaletteItem></CommandPalette></>;
}
