import { ComponentCategory } from "../data";
import { cnFile } from "../common";
import { scrollAreaCode } from "./code/scrollAreaCode";
import { HorizontalScrollArea, ScrollAreaWithStickyFooter, ScrollAreaWithStickyHeader, SimpleScrollArea } from "./components";
import { horizontalScrollAreaCode, scrollAreaWithStickyFooterCode, scrollAreaWithStickyHeaderCode, simpleScrollAreaCode } from "./code/componentCodes";

export const scrollareaData: ComponentCategory = {
  cols: 6,
  title: "Scroll Area",
  subtitle: "A collection of Scroll Areas for you to use",
  steps: [
    {
      type: "dependencies",
      libraries: [
        "clsx",
        "tailwind-merge",
        "@radix-ui/react-scroll-area"
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
      name: "ScrollArea.tsx",
      path: "@/components/ui/ScrollArea.tsx",
      language: "tsx",
      code: scrollAreaCode
    }
  ],
  components: [
    {
      title: "Simple Scrollareas",
      component: SimpleScrollArea,
      code: simpleScrollAreaCode
    },
    {
      title: "Scrollarea with sticky header",
      component: ScrollAreaWithStickyHeader,
      code: scrollAreaWithStickyHeaderCode
    },
    {
      title: "Scrollarea with sticky footer",
      component: ScrollAreaWithStickyFooter,
      code: scrollAreaWithStickyFooterCode
    },
    {
      title: "Horizontal Scrollarea",
      component: HorizontalScrollArea,
      code: horizontalScrollAreaCode
    },
  ],
};