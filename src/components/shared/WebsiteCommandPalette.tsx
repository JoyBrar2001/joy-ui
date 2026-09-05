"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { ArrowRight, Command as CommandIcon, Github, Home, Moon, Palette, Search, Sun } from "lucide-react";
import { data } from "@/constants/data";
import { Button } from "@/components/ui/Button";
import { CommandPalette, CommandPaletteGroup, CommandPaletteItem } from "@/components/ui/CommandPalette";

export default function WebsiteCommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((current) => !current);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navigate = (path: string) => {
    setOpen(false);
    router.push(path);
  };

  return (
    <>
      <Button variant="outline" className="hidden h-9 w-40 justify-between px-3 text-neutral-600 dark:text-neutral-300 sm:flex" onClick={() => setOpen(true)} aria-label="Open command palette">
        <span className="flex items-center gap-2"><Search className="size-4" />Search</span>
        <kbd className="rounded border border-neutral-300 px-1.5 text-xs dark:border-neutral-600"><CommandIcon className="inline size-3" />K</kbd>
      </Button>
      <button type="button" className="flex size-10 items-center justify-center rounded-md text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800 sm:hidden" onClick={() => setOpen(true)} aria-label="Open command palette"><Search className="size-5" /></button>

      <CommandPalette open={open} onOpenChange={setOpen}>
        <CommandPaletteGroup heading="Navigation">
          <CommandPaletteItem onSelect={() => navigate("/")}><Home className="size-4" />Home</CommandPaletteItem>
          <CommandPaletteItem onSelect={() => navigate("/components/ui")}><Palette className="size-4" />UI Components</CommandPaletteItem>
          <CommandPaletteItem onSelect={() => navigate("/components/creative")}><ArrowRight className="size-4" />Creative Components</CommandPaletteItem>
        </CommandPaletteGroup>
        <CommandPaletteGroup heading="UI Components">
          {Object.entries(data).map(([slug, component]) => <CommandPaletteItem key={slug} value={`${component.title} ${slug}`} onSelect={() => navigate(`/components/ui/${slug}`)}>{component.title}</CommandPaletteItem>)}
        </CommandPaletteGroup>
        <CommandPaletteGroup heading="Appearance">
          <CommandPaletteItem onSelect={() => setTheme("light")}><Sun className="size-4" />Light theme</CommandPaletteItem>
          <CommandPaletteItem onSelect={() => setTheme("dark")}><Moon className="size-4" />Dark theme</CommandPaletteItem>
          <CommandPaletteItem onSelect={() => setTheme("system")}><CommandIcon className="size-4" />System theme</CommandPaletteItem>
        </CommandPaletteGroup>
        <CommandPaletteGroup heading="External">
          <CommandPaletteItem onSelect={() => { setOpen(false); window.open("https://github.com/JoyBrar2001/joy-ui", "_blank", "noopener,noreferrer"); }}><Github className="size-4" />GitHub repository</CommandPaletteItem>
        </CommandPaletteGroup>
      </CommandPalette>
      <span className="sr-only">Current path: {pathname}; current theme: {theme}</span>
    </>
  );
}
