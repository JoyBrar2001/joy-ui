import { ComponentCategory } from "../data";
import { chipCode } from "./code/chipCode";
import { cnFile } from "../common";
import { CustomChip, DoneChip, GhostChip, OnlineChip, OutlinedChip, PrimaryChip, RemovableChip, RoundedChip, SecondaryChip } from "./components";
import { customChipCode, doneChipCode, ghostChipCode, onlineChipCode, outlinedChipCode, primaryChipCode, removableChipCode, roundedChipCode, secondaryChipCode } from "./code/componentCodes";

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
          code: cnFile
        }
      ]
    },
    {
      type: "source",
      name: "Chip.tsx",
      path: "@/components/ui/Chip.tsx",
      language: "tsx",
      code: chipCode
    }
  ],
  components: [
    {
      title: "Primary Chip",
      component: PrimaryChip,
      code: primaryChipCode
    },
    {
      title: "Secondary Chip",
      component: SecondaryChip,
      code: secondaryChipCode
    },
    {
      title: "Outlined Chip",
      component: OutlinedChip,
      code: outlinedChipCode
    },
    {
      title: "Ghost Chip",
      component: GhostChip,
      code: ghostChipCode
    },
    {
      title: "Custom Chip",
      component: CustomChip,
      code: customChipCode
    },
    {
      title: "Rounded Chip",
      component: RoundedChip,
      code: roundedChipCode
    },
    {
      title: "Online Chip",
      component: OnlineChip,
      code: onlineChipCode
    },
    {
      title: "Done Chip",
      component: DoneChip,
      code: doneChipCode
    },
    {
      title: "Removable Chip",
      component: RemovableChip,
      code: removableChipCode
    },
  ]
};