
import { cnFile } from "../common";
import { ComponentCategory } from "../data";
import { checkboxCss } from "./code/checkboxCss";
import { checkboxCode } from "./code/checkboxCode";

import {
  SimpleCheckbox,
  AnimateCheckbox,
  DefaultCheckedCheckbox,
  SubLabeledCheckbox,
  CheckboxDescriptionComponent,
  ColoredCheckbox,
  StrikeThroughCheckbox,
  ReversedCheckbox,
  LabeledCheckboxCol,
  CheckboxCard,
  CheckboxWithIcon,
  CheckboxWithFooter,
  CardsGrid,
  GroupCheckbox,
  LabeledCheckbox,
} from "./components";

import {
  animatedCheckboxCode,
  cardGridsCode,
  checkboxCardCode,
  checkboxDescriptionCode,
  checkboxWithFooterCode,
  checkboxWithIconCode,
  coloredCheckboxCode,
  defaultCheckedCheckboxCode,
  groupCheckboxCode,
  labeledCheckboxCode,
  labeledCheckboxColCode,
  reversedCheckboxCode,
  simpleCheckboxCode,
  strikeThroughCheckboxCode,
  subLabeledCheckboxCode,
} from "./code/componentCodes";

export const checkboxData: ComponentCategory = {
  cols: 4,
  title: "Checkbox",
  subtitle: "A collection of Checkboxes for you to use",
  steps: [
    {
      type: "dependencies",
      libraries: [
        "clsx",
        "tailwind-merge",
        "@radix-ui/react-checkbox"
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
          code: checkboxCss
        }
      ]
    },
    {
      type: "source",
      name: "Checkbox.tsx",
      path: "@/components/ui/Checkbox.tsx",
      language: "tsx",
      code: checkboxCode
    }
  ],
  components: [
    {
      title: "Simple Checkbox",
      component: SimpleCheckbox,
      code: simpleCheckboxCode
    },
    {
      title: "Animate Checkbox",
      component: AnimateCheckbox,
      code: animatedCheckboxCode
    },
    {
      title: "Default Checked",
      component: DefaultCheckedCheckbox,
      code: defaultCheckedCheckboxCode
    },
    {
      title: "Labeled Checkbox",
      component: LabeledCheckbox,
      code: labeledCheckboxCode
    },
    {
      title: "Sub-Labeled Checkbox",
      component: SubLabeledCheckbox,
      code: subLabeledCheckboxCode
    },
    {
      title: "Checkbox Description",
      component: CheckboxDescriptionComponent,
      code: checkboxDescriptionCode
    },
    {
      title: "Colored Checkbox",
      component: ColoredCheckbox,
      code: coloredCheckboxCode
    },
    {
      title: "Strikethrough Checkbox",
      component: StrikeThroughCheckbox,
      code: strikeThroughCheckboxCode
    },
    {
      title: "Reversed Checkbox",
      component: ReversedCheckbox,
      code: reversedCheckboxCode
    },
    {
      title: "Group Checkbox",
      component: GroupCheckbox,
      code: groupCheckboxCode
    },
    {
      title: "Labeled Checkbox (Col)",
      component: LabeledCheckboxCol,
      code: labeledCheckboxColCode
    },
    {
      title: "Checkbox Card",
      component: CheckboxCard,
      code: checkboxCardCode
    },
    {
      title: "Checkbox with Icon",
      component: CheckboxWithIcon,
      code: checkboxWithIconCode
    },
    {
      title: "Checkbox with Footer",
      component: CheckboxWithFooter,
      code: checkboxWithFooterCode
    },
    {
      title: "Cards Grid",
      component: CardsGrid,
      code: cardGridsCode
    }
  ]
};