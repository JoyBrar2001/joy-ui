import { ComponentCategory } from "../data";
import { cnFile } from "../common";
import { radioCode } from "./code/radioCode";
import { radioCss } from "./code/radioCss";
import { AnimatedRadioGroup, CustomIcons, PlansPicker, RadioGroupSizes, RadioWithCards, RadioWithCardsAndIcons, RadioWithDescription, RadioWithSublabels, SimpleRadioGroup, VerticalRadioGroup } from "./components";
import { animatedRadioGroupCode, customIconsCode, plansPickerCode, radioGroupSizesCode, radioWithCardsAndIconsCode, radioWithCardsCode, radioWithDescriptionCode, radioWithSublabels, simpleRadioGroupCode, verticalRadioGroupCode } from "./code/componentCodes";

export const radioData: ComponentCategory = {
  cols: 4,
  title: "Radio Group",
  subtitle: "A collection of Radio Groups for you to use",
  steps: [
    {
      type: "dependencies",
      libraries: [
        "clsx",
        "tailwind-merge",
        "@radix-ui/react-radio-group"
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
          code: radioCss
        }
      ]
    },
    {
      type: "source",
      name: "RadioGroup.tsx",
      path: "@/components/ui/RadioGroup.tsx",
      language: "tsx",
      code: radioCode
    }
  ],
  components: [
    {
      title: "Simple Radio Group",
      component: SimpleRadioGroup,
      code: simpleRadioGroupCode
    },
    {
      title: "Vertical Radio Group",
      component: VerticalRadioGroup,
      code: verticalRadioGroupCode
    },
    {
      title: "Radio Group Sizes",
      component: RadioGroupSizes,
      code: radioGroupSizesCode
    },
    {
      title: "Animted Radio Group",
      component: AnimatedRadioGroup,
      code: animatedRadioGroupCode
    },
    {
      title: "Custom Icons",
      component: CustomIcons,
      code: customIconsCode
    },
    {
      title: "Radio with sublabels",
      component: RadioWithSublabels,
      code: radioWithSublabels
    },
    {
      title: "Radio with descriptions",
      component: RadioWithDescription,
      code: radioWithDescriptionCode
    },
    {
      title: "Radio with cards",
      component: RadioWithCards,
      code: radioWithCardsCode
    },
    {
      title: "Radio with cards and icons",
      component: RadioWithCardsAndIcons,
      code: radioWithCardsAndIconsCode
    },
    {
      title: "Plans Picker",
      component: PlansPicker,
      code: plansPickerCode
    }
  ],
};