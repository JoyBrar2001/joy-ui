import { ComponentCategory } from "../data";
import { cnFile } from "../common";
import { commandPaletteCode } from "./code/commandPaletteCode";
import { commandPaletteWithShortcutsCode, groupedCommandPaletteCode, simpleCommandPaletteCode } from "./code/componentCodes";
import { CommandPaletteWithShortcuts, GroupedCommandPalette, SimpleCommandPalette } from "./components";

export const commandPaletteData: ComponentCategory = {
  cols: 4,
  title: "Command Palette",
  subtitle: "Searchable, keyboard-first commands for navigation and actions",
  steps: [{ type: "dependencies", libraries: ["clsx", "tailwind-merge", "cmdk"] }, { type: "utilities", files: [{ name: "cn.ts", path: "@/utils/cn.ts", language: "typescript", code: cnFile }] }, { type: "source", name: "CommandPalette.tsx", path: "@/components/ui/CommandPalette.tsx", language: "tsx", code: commandPaletteCode }],
  components: [
    { title: "Simple Command Palette", component: SimpleCommandPalette, code: simpleCommandPaletteCode },
    { title: "Grouped Command Palette", component: GroupedCommandPalette, code: groupedCommandPaletteCode },
    { title: "Command Palette with Shortcuts", component: CommandPaletteWithShortcuts, code: commandPaletteWithShortcutsCode },
  ],
};
