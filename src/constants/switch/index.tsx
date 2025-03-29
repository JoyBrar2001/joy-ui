import { cnFile } from "../common";
import { ComponentCategory } from "../data";
import { cardSwitchCode, cardSwitchWithIconCode, customStyledSwitchCode, defaultCheckedSwitchCode, dynamicLabelSwitchCode, labeledSwitchCode, lightDarkDualCode, lightDarkSingleCode, onOffDualCode, onOffSingleCode, simpleSwitchCode, squareSwitchCode, switchSmallCode, thinSwitchCode } from "./code/componentCodes";
import { switchCode } from "./code/switchCode";
import { CardSwitch, CardSwitchWithIcon, CustomStyledSwitch, DefaultCheckedSwitch, DynamicLabelSwitch, LabeledSwitch, LightDarkDual, LightDarkSimple, OnOffDual, OnOffSingle, SimpleSwitch, SquareSwitch, SwitchSmall, ThinSwitch } from "./components";

export const switchData: ComponentCategory = {
  cols: 4,
  title: "Switch",
  subtitle: "A collection of Switches for you to use",
  steps: [
    {
      type: "dependencies",
      libraries: [
        "clsx",
        "tailwind-merge",
        "@radix-ui/react-switch"
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
      name: "Drawer.tsx",
      path: "@/components/ui/Drawer.tsx",
      language: "tsx",
      code: switchCode
    }
  ],
  components: [
    {
      title: "Simple Switch",
      component: SimpleSwitch,
      code: simpleSwitchCode
    },
    {
      title: "Switch (sm)",
      component: SwitchSmall,
      code: switchSmallCode
    },
    {
      title: "Default Checked",
      component: DefaultCheckedSwitch,
      code: defaultCheckedSwitchCode
    },
    {
      title: "Custom Styled Checked",
      component: CustomStyledSwitch,
      code: customStyledSwitchCode
    },
    {
      title: "Suqare Checkbox",
      component: SquareSwitch,
      code: squareSwitchCode
    },
    {
      title: "Thin Checkbox",
      component: ThinSwitch,
      code: thinSwitchCode
    },
    {
      title: "Labeled Checkbox",
      component: LabeledSwitch,
      code: labeledSwitchCode
    },
    {
      title: "Interactive Checkbox",
      component: DynamicLabelSwitch,
      code: dynamicLabelSwitchCode
    },
    {
      title: "Light Dark Toggler",
      component: LightDarkSimple,
      code: lightDarkSingleCode
    },
    {
      title: "Another Light Dark",
      component: LightDarkDual,
      code: lightDarkDualCode
    },
    {
      title: "On Off Toggler",
      component: OnOffSingle,
      code: onOffSingleCode
    },
    {
      title: "Another On Off Toggler",
      component: OnOffDual,
      code: onOffDualCode
    },
    {
      title: "Card Switch",
      component: CardSwitch,
      code: cardSwitchCode
    },
    {
      title: "Card Switch with Icon",
      component: CardSwitchWithIcon,
      code: cardSwitchWithIconCode
    },
  ]
}