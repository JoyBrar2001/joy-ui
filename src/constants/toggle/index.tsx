import type { ComponentCategory } from "../data";
import { toggleCode } from "./code/toggleCode";
import {
  alwaysOnCode,
  controlledCode,
  disabledCode,
  groupCode,
  iconCode,
  labelCode,
  multipleGroupCode,
  outlineCode,
  regularCode,
  textCode,
} from "./code/componentCodes";
import {
  AlwaysOnToggle,
  ControlledToggle,
  DisabledToggle,
  GroupToggle,
  IconToggle,
  MultipleGroupToggle,
  OutlineToggle,
  RegularToggle,
  TextToggle,
  ToggleWithLabel,
} from "./components";

export const toggleData: ComponentCategory = {
  cols: 6,
  title: "Toggle",
  subtitle:
    "Accessible pressed-state buttons and toggle groups for formatting, preferences, and compact controls.",
  steps: [
    { type: "dependencies", libraries: ["clsx", "tailwind-merge"] },
    {
      type: "source",
      name: "Toggle.tsx",
      path: "@/components/ui/Toggle.tsx",
      language: "tsx",
      code: toggleCode,
    },
  ],
  components: [
    { title: "Regular Toggle", component: RegularToggle, code: regularCode },
    { title: "Disabled Toggle", component: DisabledToggle, code: disabledCode },
    {
      title: "Always On Toggle",
      component: AlwaysOnToggle,
      code: alwaysOnCode,
    },
    { title: "Outline Toggle", component: OutlineToggle, code: outlineCode },
    { title: "Icon Toggle", component: IconToggle, code: iconCode },
    { title: "Text Formatting Toggles", component: TextToggle, code: textCode },
    { title: "Group Toggle", component: GroupToggle, code: groupCode },
    {
      title: "Multiple Selection Group",
      component: MultipleGroupToggle,
      code: multipleGroupCode,
    },
    {
      title: "Controlled Toggle",
      component: ControlledToggle,
      code: controlledCode,
    },
    { title: "Toggle with Label", component: ToggleWithLabel, code: labelCode },
  ],
};
