import type { ComponentCategory } from "../data";
import { labelCode } from "./code/labelCode";
import {
  basicLabelCode,
  checkboxLabelCode,
  descriptionLabelCode,
  disabledLabelCode,
  requiredLabelCode,
  switchLabelCode,
} from "./code/componentCodes";
import {
  BasicLabel,
  DisabledLabel,
  LabelForCheckbox,
  LabelForSwitch,
  LabelWithDescription,
  RequiredLabel,
} from "./components";
export const labelData: ComponentCategory = {
  cols: 6,
  title: "Label",
  subtitle:
    "Accessible labels that connect clearly to inputs, checkboxes, switches, and other form controls.",
  steps: [
    { type: "dependencies", libraries: ["@radix-ui/react-label"] },
    {
      type: "source",
      name: "Label.tsx",
      path: "@/components/ui/Label.tsx",
      language: "tsx",
      code: labelCode,
    },
  ],
  components: [
    { title: "Basic Label", component: BasicLabel, code: basicLabelCode },
    {
      title: "Required Label",
      component: RequiredLabel,
      code: requiredLabelCode,
    },
    {
      title: "Label with Description",
      component: LabelWithDescription,
      code: descriptionLabelCode,
    },
    {
      title: "Label for Checkbox",
      component: LabelForCheckbox,
      code: checkboxLabelCode,
    },
    {
      title: "Label for Switch",
      component: LabelForSwitch,
      code: switchLabelCode,
    },
    {
      title: "Disabled Label",
      component: DisabledLabel,
      code: disabledLabelCode,
    },
  ],
};
