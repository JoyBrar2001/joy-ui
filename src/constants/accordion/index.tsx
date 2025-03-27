import { cnFile } from "../common";
import { ComponentCategory } from "../data"
import { accordionCss, accordionCode } from "./code";
import { accordionWithIconsCode, customStyledAccordionCode, leftIconsCode, nestedSectionsCode, outlinedAccordionCode, simpleAccordionCode } from "./code/componentCodes";
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
      component: SimpleAccordion,
      code: simpleAccordionCode,
    },
    {
      title: "Left Icons",
      component: LeftIcons,
      code: leftIconsCode
    },
    {
      title: "Outlined Accodion",
      component: OutlinedAccordion,
      code: outlinedAccordionCode
    },
    {
      title: "Nested Sections",
      component: NestedSections,
      code: nestedSectionsCode
    },
    {
      title: "Accordion with Icons",
      component: AccordionWithIcons,
      code: accordionWithIconsCode
    },
    {
      title: "Custom Styled Accordion",
      component: CustomStyledAccordion,
      code: customStyledAccordionCode
    },
  ]
};