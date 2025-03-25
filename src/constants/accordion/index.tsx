import { cnFile } from "../common";
import { ComponentCategory } from "../data"
import { accordionCss, accordionCode } from "./code";
import {
  SimpleAccordion,
  LeftIcons,
  OutlinedAccordion,
  NestedSections,
  AccordionWithIcons,
  CustomStyledAccordion
} from "./components"

export const accordionData: ComponentCategory = {
  cols: 6,
  title: "Accordions",
  subtitle: "A collection of Accordions for you to use",
  steps: [
    {
      type: "dependencies",
      libraries: [
        "clsx",
        "tailwind-merge",
        "lucide-react",
        "@radix-ui/react-accordion"
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
          code: accordionCss
        }
      ]
    },
    {
      type: "source",
      name: "Accordion.tsx",
      path: "@/components/ui/Accordion.tsx",
      language: "tsx",
      code: accordionCode
    }
  ],
  components: [
    {
      title: "Simple Accordion",
      component: SimpleAccordion
    },
    {
      title: "Left Icons",
      component: LeftIcons
    },
    {
      title: "Outlined Accodion",
      component: OutlinedAccordion
    },
    {
      title: "Nested Sections",
      component: NestedSections
    },
    {
      title: "Accordion with Icons",
      component: AccordionWithIcons
    },
    {
      title: "Custom Styled Accordion",
      component: CustomStyledAccordion
    },
  ]
};