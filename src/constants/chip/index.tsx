import { Chip } from "@/components/ui/Chip";
import { ComponentCategory } from "../data";
import { CustomChip, DoneChip, GhostChip, OutlinedChip, PrimaryChip, RemovableChip, SecondaryChip } from "./components";
import { RoundedChip } from "./components/RoundedChip";

export const chipData: ComponentCategory = {
  cols: 4,
  title: "Chip",
  subtitle: "A collection of Chips for you to use",
  steps: [
    {
      type: "dependencies",
      libraries: [
        "clsx",
        "tailwind-merge"
      ]
    },
    {
      type: "utilities",
      files: [
        {
          name: "cn.ts",
          path: "@/utils/cn.ts",
          language: "typescript",
          code: `import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
return twMerge(clsx(inputs));
}`
        }
      ]
    },
    {
      type: "source",
      name: "Chip.tsx",
      path: "@/components/ui/Chip.tsx",
      language: "tsx",
      code: `import React from "react";
import { cn } from "@/utils";

type ChipProps = {
children: React.ReactNode;
variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive" | "custom";
rounded?: boolean;
} & React.HTMLAttributes<HTMLSpanElement>;

export default function Chip({
children,
variant = "primary",
rounded = false,
className,
...otherProps
}: ChipProps) {
return (
  <span
    className={cn(
      "flex items-center w-fit gap-1.5 bg-white text-black text-sm px-2 py-0.5 rounded-md",
      rounded && "rounded-full",
      variant === "primary" &&
      "bg-black text-white hover:bg-neutral-900 dark:bg-white dark:text-black dark:hover:bg-neutral-200",
      variant === "secondary" &&
      "bg-neutral-200 text-black hover:bg-neutral-300 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700",
      variant === "outline" &&
      "border border-neutral-300 bg-transparent text-black hover:bg-neutral-100 dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-800",
      variant === "ghost" && "text-neutral-500 hover:text-black dark:hover:text-white",
      variant === "destructive" && "bg-red-500 hover:bg-red-600 text-white",
      className
    )}
    {...otherProps}
  >
    {children}
  </span>
);
}`
    }
  ],
  components: [
    {
      title: "Primary Chip",
      component: PrimaryChip
    },
    {
      title: "Secondary Chip",
      component: SecondaryChip
    },
    {
      title: "Outlined Chip",
      component: OutlinedChip
    },
    {
      title: "Ghost Chip",
      component: GhostChip
    },
    {
      title: "Custom Chip",
      component: CustomChip
    },
    {
      title: "Rounded Chip",
      component: RoundedChip
    },
    {
      title: "Online Chip",
      component: OutlinedChip
    },
    {
      title: "Done Chip",
      component: DoneChip
    },
    {
      title: "Removable Chip",
      component: RemovableChip
    },
  ]
};