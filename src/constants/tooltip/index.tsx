import { Button } from "@/components/ui/Button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/Tooltip";
import { ComponentCategory } from "../data";
import { cnFile } from "../common";
import { tooltipCss } from "./code/tooltipCss";
import { tooltipCode } from "./code/tooltipCode";
import { BottomTooltip, DestructiveTooltip, GhostTooltip, LeftTooltip, OutlineTooltip, PrimaryTooltip, RightTooltip, SecondaryTooltip, SimpleTooltip, TopTooltip } from "./components";
import { bottomTooltipCode, destructiveTooltipCode, ghostTooltipCode, leftTooltipCode, outlineTooltipCode, primaryTooltipCode, rightTooltipCode, secondaryTooltipCode, simpleTooltipCode, topTooltipCode } from "./code/componentCodes";

export const tooltipData: ComponentCategory = {
  cols: 4,
  title: "Tooltip",
  subtitle: "A collection of Tooltips for you to use",
  steps: [
    {
      type: "dependencies",
      libraries: [
        "clsx",
        "tailwind-merge",
        "@radix-ui/react-tooltip"
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
        },
        {
          name: "globals.css",
          path: "@/globals.css",
          language: "css",
          code: tooltipCss
        }
      ]
    },
    {
      type: "source",
      name: "Tooltip.tsx",
      path: "@/components/ui/Tooltip.tsx",
      language: "tsx",
      code: tooltipCode
    }
  ],
  components: [
    {
      title: "Simple Tooltip",
      component: SimpleTooltip,
      code: simpleTooltipCode
    },
    {
      title: "Top Tooltip",
      component: TopTooltip,
      code: topTooltipCode
    },
    {
      title: "Left Tooltip",
      component: LeftTooltip,
      code: leftTooltipCode
    },
    {
      title: "Right Tooltip",
      component: RightTooltip,
      code: rightTooltipCode
    },
    {
      title: "Bottom Tooltip",
      component: BottomTooltip,
      code: bottomTooltipCode
    },
    {
      title: "Primary Tooltip",
      component: PrimaryTooltip,
      code: primaryTooltipCode
    },
    {
      title: "Secondary Tooltip",
      component: SecondaryTooltip,
      code: secondaryTooltipCode
    },
    {
      title: "Outline Tooltip",
      component: OutlineTooltip,
      code: outlineTooltipCode
    },
    {
      title: "Destructive Tooltip",
      component: DestructiveTooltip,
      code: destructiveTooltipCode
    },
    {
      title: "Ghost Tooltip",
      component: GhostTooltip,
      code: ghostTooltipCode
    },
  ],
};