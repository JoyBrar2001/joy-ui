import { ComponentCategory } from "../data";
import { cnFile } from "../common";
import { separatorCode } from "./code/separatorCode";
import { ButtonsWithSeparator, CardWithSeparator, GridSeparator, HorizontalSeparator, VerticalSeparator } from "./components";
import { buttonsWithSeparator, cardWithSeparatorCode, gridWithSeparatorCode, horizontalSeparatorCode, verticalSeparatorCode } from "./code/componentCodes";

export const separatorData: ComponentCategory = {
  cols: 4,
  title: "Separator",
  subtitle: "A collection of Separators for you to use",
  steps: [
    {
      type: "dependencies",
      libraries: [
        "clsx",
        "tailwind-merge",
        "@radix-ui/react-separator"
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
      name: "Separator.tsx",
      path: "@/components/ui/Separator.tsx",
      language: "tsx",
      code: separatorCode
    }
  ],
  components: [
    {
      title: "Horizontal Separator",
      component: HorizontalSeparator,
      code: horizontalSeparatorCode
    },
    {
      title: "Vertical Separator",
      component: VerticalSeparator,
      code: verticalSeparatorCode
    },
    {
      title: "Grid Separator",
      component: GridSeparator,
      code: gridWithSeparatorCode
    },
    {
      title: "Card with Separator",
      component: CardWithSeparator,
      code: cardWithSeparatorCode
    },
    {
      title: "Buttons with Separator",
      component: ButtonsWithSeparator,
      code: buttonsWithSeparator
    },
  ],
};